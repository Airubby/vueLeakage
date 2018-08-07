<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">组态配置</div>
        </div>
       <div class="loncom_public_con">
            <div class="loncom_tree">
                <div class="loncom_tree_title">
                    站点信息
                </div>
                <div class="loncom_tree_con numScroll0">
                    <div class="numScrollCon0">
                        <el-button type="primary" size="small" style="width: 100%;margin-bottom:10px;" @click="addSite">添加空间地点</el-button>
                        <el-tree
                        ref="tree"
                        :props="defaultProps"
                        :data="tree_data"
                        node-key="id"
                        default-expand-all
                        @node-click="nodeClick"
                        >
                        </el-tree>
                    </div>
                </div>
            </div>
            <div class="loncom_table">
                <div class="loncom_tab">
                    <div class="loncom_tab_btn">
                        <el-button type="primary" size="mini" @click="save('formInfo')">保存</el-button>
                        <el-button type="primary" size="mini" @click="remove">删除</el-button>
                    </div>
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="空间信息" name="first">
                            <div class="loncom_tabbox numScroll1">
                                <div class="loncom_tabbox_con numScrollCon1">
                                    <div style="padding-top:30px;">
                                        <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="120px">
                                            <div style="width:450px;">
                                                <el-form-item prop="p_name" label="名称" size="small">
                                                    <el-input v-model="form_info.p_name"></el-input>
                                                </el-form-item>
                                                <el-form-item label="图片" size="small">
                                                    <el-upload
                                                        class="upload-demo"
                                                        ref="upload"
                                                        name="imgurl"
                                                        :headers="config"
                                                        :data="form_info"
                                                        action="https://jsonplaceholder.typicode.com/posts/"
                                                        :file-list="fileList"
                                                        :auto-upload="false">
                                                        <el-button slot="trigger" size="small" type="primary">选取</el-button>
                                                    </el-upload>
                                                </el-form-item>
                                                <el-form-item prop="type" label="类型" size="small">
                                                        <el-radio v-model="form_info.type" label="0">根节点</el-radio>
                                                        <el-radio v-model="form_info.type" label="1">数据中心</el-radio>
                                                        <el-radio v-model="form_info.type" label="2">车间</el-radio>
                                                        <el-radio v-model="form_info.type" label="3">池塘</el-radio>
                                                </el-form-item>
                                                <el-form-item prop="parentname" label="上级空间" size="small" v-if="form_info.type!='0'&&form_info.type!=''">
                                                    <el-input v-model="form_info.parentname" readonly @focus="getScsi"></el-input>
                                                </el-form-item>
                                                <el-form-item prop="details" label="备注" size="small">
                                                    <el-input v-model="form_info.details" type="textarea"></el-input>
                                                </el-form-item>
                                                <div v-if="form_info.type=='1'">
                                                    <el-form-item label="经度" prop="longitude">
                                                        <el-input v-model="form_info.longitude" :disabled="true" size="small" placeholder="经度"></el-input>
                                                    </el-form-item>
                                                    <el-form-item label="纬度" prop="latitude">
                                                        <el-input v-model="form_info.latitude" :disabled="true" size="small" placeholder="纬度"></el-input>
                                                    </el-form-item>
                                                </div>
                                            </div>
                                            <div style="padding-bottom:10px;position:relative;" v-show="form_info.type=='1'">
                                                <el-input v-model="address" placeholder="输入地址搜索获取经纬坐标" size="small" class="input-with-select">
                                                    <el-button slot="append" icon="el-icon-search" id="search"></el-button>
                                                </el-input>
                                                <div id="container" style="width:100%;height:500px;border:1px solid #ccc;"></div>
                                            </div>
                                        </el-form>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
       </div>
       <GetInfo v-bind:dialogInfo="getInfo" v-if="getInfo.visible"></GetInfo>
    </div>
</template>

<style>
    .el-radio+.el-radio{margin-left:20px;}
    .el-upload {
        float: right;
    }
    .el-upload-list{
        float: left;
        border: 1px solid #dcdfe6;
        width: calc(100% - 64px);
        height: 32px;
        border-radius: 4px;
    }
    .el-upload-list__item:first-child{
        margin-top:0px;
        line-height: 2.1;
    }
    .input-with-select{
        position: absolute;
        z-index: 9;
        top: 10px;
        left: 10px;
        width: 300px;
    }
</style>
<script>
import GetInfo from '@/components/sconfig_scsi_get.vue'
export default {
    created () {
        
    },
    mounted() {
        numScroll(0);
        numScroll(1);
        //地图信息
        // 百度地图API功能
        var _this=this;
        var map = new BMap.Map("container");
        var myGeo = new BMap.Geocoder();  
        if(this.form_info.longitude!=""&&this.form_info.latitude!=""){
            map.centerAndZoom(new BMap.Point(this.form_info.longitude, this.form_info.latitude), 8); 
            moveOverlay({lng:this.form_info.longitude, lat:this.form_info.latitude})
        }else{
            map.centerAndZoom(new BMap.Point(110.68789, 19.94395),8);   
        }
        map.enableScrollWheelZoom();
        map.addEventListener("click",function(e){
            setPoint(e.point)
		});  
        
        $("#search").on('click', function () {  
            var searchTxt = _this.address;  
            myGeo.getPoint(searchTxt, function (point) {  
                console.log(point)
                map.centerAndZoom(point, 8); 
                setPoint(point);  
            }, "全国");  
        }); 
        function setPoint(point) {  
            if (point) {  
                //坐标赋值  
                _this.form_info.longitude=point.lng;
                _this.form_info.latitude=point.lat;
                //Geocoder(point);  
                moveOverlay(point);
                
            }  
        }
        function moveOverlay(point){
            map.clearOverlays();
            var marker = new BMap.Marker(point);  
            map.addOverlay(marker);  
            marker.enableDragging();//可以拖动   
            //拖动监听  
            marker.addEventListener("dragend", function (e) {  
                //坐标赋值  
                _this.form_info.longitude=e.point.lng;
                _this.form_info.latitude=e.point.lat;
                //Geocoder(e.point);  
            });  
        }  
        function Geocoder(point) {  
            var gc = new BMap.Geocoder();  
            gc.getLocation(point, function (rs) {  
                console.log(rs)
                var addComp = rs.addressComponents;  
            });  
        } 
        document.onkeyup = function (event) {
            if (event.keyCode == 13) {
               var searchTxt = _this.address;  
                myGeo.getPoint(searchTxt, function (point) {  
                    map.centerAndZoom(point, 13); 
                    setPoint(point);  
                }, "全国");  
            }
        }


    },
    data() {
       return {
           activeName:'first',
          　tree_data: [{
                label: '根节点',
                id:'0',
                map:{type:'0'},
                children: [
                    {
                        label:'海南养殖基地',
                        id:'1',
                        map:{type:'1'},
                        children:[
                            {
                                label: '车间一',
                                id:'11',
                                map:{type:'2'},
                                children: [{
                                    label: '池塘一',
                                    id:'111',
                                    map:{type:'3'},
                                }]
                            }, {
                                label: '车间二',
                                id:'12',
                                map:{type:'2'},
                            }
                        ]
                    }
                ]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            address:'',
            form_info:{
                name:'',
                p_img:'',
                type:'',
                parentid:'',  //上级空间
                parentname:'',
                longitude:'',
                latitude:'',
                details:'',
            },
            formRules:{
                name:[
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
                type:[
                    { required: true, message: '请选择类型', trigger: 'change' },
                ]
            },
            getInfo:{
                title:"获取上级空间信息",
                visible:false,
                id:'',
                type:'',
                data:{},
            },
            //图片用
            fileList:[],
            config:{
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            },

       }
   },
    methods:{
       addSite:function(){

       },
       //获取部门树形
        getTree:function(){
            this.tree_data=[];
            this.$api.post('', {}, r => {
                console.log(r)
                if(r.success){
                    this.tree_data.push(r.data);
                }
            }); 
        },
       //点击树形节点
        nodeClick:function(data,node){
            console.log(node)
            
        },
        //获取上级空间
        getScsi:function(){
            this.getInfo.visible=true;
            this.getInfo.type=this.form_info.type;
            this.getInfo.id=this.form_info.parentid;
        },
        save:function(){

        },
        remove:function(){

        },

    },
    watch:{
        'getInfo.data':{
            handler:function(val,oldval){
                this.form_info.parentid=val.id;
                this.form_info.parentname=val.label;
            },
            deep: true
        }
    },
    components:{GetInfo}
}
</script>