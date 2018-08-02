<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <div class="search loncom_fl">
                <el-input placeholder="请输入名称" v-model="searchInfo" size="mini">
                    <el-button slot="append" icon="el-icon-search" id="search_btn"></el-button>
                </el-input>
            </div>
            <div class="gis_sort loncom_fr">
                <ul ref="gis_sort">
                    <li class="active" data-name="all">全部</li>
                    <li class="warning" data-name="warning"><em></em>危险</li>
                    <li class="lost" data-name="lost"><em></em>废弃</li>
                    <li class="normal" data-name="normal"><em></em>健康</li>
                </ul>
            </div>
        </div>
       <div class="gis">
            <div id="container" class="loncom_content"></div>
            <div class="gis_alarm_list" ref="gis_alarm_list">
                <alarmTop v-bind:Info="Info"></alarmTop>
                <el-scrollbar style="height:360px;">
                    <el-search-table-pagination  type="local"
                        url=""
                        list-field="list" 
                        total-field="total"
                        method='post' 
                        :formOptions="table_forms"
                        border :data="table_data" :columns="table_columns" ref="thisRef">   
                        <el-table-column slot="prepend" type="selection"></el-table-column>                                     
                        <template slot-scope="scope" slot="preview-level">
                            <div class="alarm">
                                <span v-if="scope.row.level=='1'"><i class="alarm_one_bg circle10 loncom_mr5"></i>一级</span>
                            </div>
                        </template>
                        <template slot-scope="scope" slot="preview-handle">
                            <div>
                                <a href="javascript:;" class="loncom_color" @click="sure(scope.row)">确认</a> 
                            </div>
                        </template>
                    </el-search-table-pagination>
                </el-scrollbar>
            </div>
       </div>
       <Show v-bind:dialogInfo="showInfo"></Show>
    </div>
</template>

<style>
    .gis{
        width:100%;
        position:relative;
        height: calc(100% - 40px);
    }
    .loncom_map_box{
        min-width: 385px;
        height: auto;
        overflow: hidden;
        box-shadow: 1px 1px 3px #ccc;
        background: #fff;
        margin-bottom: 25px;
    }
    .loncom_map_boxtop {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #12AE67;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        border-bottom: 1px solid #fff;
    }
    .loncom_map_boxtop em{
        font-size: 12px;
        margin-left: 5px;
        cursor:pointer;
    }
    .loncom_map_boxinfo {
        width: 100%;
        height: 100px;
        background: #12AE67;
        padding: 10px;
        color: #fff;
        font-size: 12px;
        line-height: 25px;
    }
    .loncom_map_boxinfo .img{
        width: 120px;
        height:auto;
        float:left;
    }
    .loncom_map_boxinfo .img img{
        width: 100%;
        max-height: 100px;
    }
    .loncom_map_boxinfo .info{
        width:calc(100% - 200px);
        float:left;
        padding-left: 20px;
    }
    .loncom_map_boxinfo .video{
        width: 80px;
        height:80px;
        float:left;
        text-align:center;
        background:#fff;
    }
    .loncom_map_boxinfo .video img{
        max-width: 80px;
        max-height: 80px;
    }
    .loncom_map_boxcon {
        padding: 10px;
        font-size: 12px;
    }
    .loncom_map_coninfo{
        padding:15px 20px;
        overflow: hidden;
        line-height:24px;
        cursor:pointer;
    }
    .loncom_map_coninfo p{
        width:100%;
        height:24px;
        background:#f00;
        color:#fff;
        margin: 10px 0;
        text-indent: 10px;
        border-radius: 3px;
        font-size: 12px;
    }
    .loncom_map_coninfo p.one{
        background:#C5051B;
    }
    .loncom_map_coninfo p.two{
        background:#FF1A07;
    }
    .loncom_map_coninfo p.three{
        background:#FF7B00;
    }
    .loncom_map_coninfo p.four{
        background:#FFA300;
    }

</style>
<script>
import alarmTop from '@/components/alarm_top.vue'
import Show from '@/components/video_show.vue'
export default {
    
    created () {
    },
    mounted() {
        var _this=this;
        // 百度地图API功能
        this.map = new BMap.Map("container");
        //this.map.centerAndZoom(new BMap.Point(119.045403, 31.69525), 13); //初始化地图,设置中心点坐标和地图级别3-19
        this.map.centerAndZoom("海南",9); 
        this.map.enableScrollWheelZoom();
            
    },
    data() {
       return {
           searchInfo:'',
          　map:'',
            Info:{
               title:'实时事件',
               export:false,
            },
            table_data:[
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
            ],
            table_forms: {
                inline: true,
                size:'small',
                initParams:{queryKey:""},
                forms: []
            },
            table_columns:[
              { prop: 'level', label: '告警等级',minWidth:10,slotName:'preview-level'},
              { prop: 'name', label: '事件名称',minWidth:10},
              { prop: 'remark', label: '事件定位',minWidth:30},
              { prop: 'alarmTime', label: '告警时间',minWidth:10},
              { prop: 'relieveTime', label: '解除时间',minWidth:10},
              { prop: 'handle', label: '告警处理',slotName:'preview-handle',width:100},
            ],
            showInfo:{
                title:"视频预览",
                visible:false,
            },
            allmap:'',

       }
   },
    methods:{
        getMap:function(){
            var _this=this;
            //筛选代码
            BMap.Icon.prototype.name = "";
            BMap.Icon.prototype.setName = function(name){
                this.name = name;
            }
            BMap.Icon.prototype.searchName="";
            BMap.Icon.prototype.setSearchName = function(searchName){
                this.searchName = searchName;
            }
            
            this.map.clearOverlays();
            //去掉地铁线
            this.map.setMapStyle({
                styleJson: [
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
                ]
            });
            var info = [{
                id: '123',
                name: '海南养殖基地',
                State: "3",
                lng: '110.68789',
                lat: '19.94395',
                yuanqu: { mianji: '100㎡', img: '/static/images/login_bg.jpg',chitang:'20个' }
            },{
                id: '1231',
                name: '海口养殖基地',
                State: "1",
                lng: '110.08789',
                lat: '19.94395',
                yuanqu: { mianji: '100㎡', img: '/static/images/login_bg.jpg',chitang:'20个' }
            }]
            for (var i = 0; i < info.length; i++) {
                var iconurl = "";
                var point = new BMap.Point(info[i].lng, info[i].lat);
                var content = '';
                var incontent = '<div class="loncom_map_boxtop">' +
                                '<i style="margin:0 5px 0 10px;" class="fa fa-wifi"></i><span>' + info[i].name +'<em class="showAlarm" >告警详情</em></span>' +
                            '</div>' +
                            '<div class="loncom_map_boxinfo">' +
                                '<div class="img"><img src="'+info[i].yuanqu.img+'"></div>'+
                                '<div class="info">'+
                                    '<p>基地面积：<span>'+info[i].yuanqu.mianji+'</span></p>'+
                                    '<p>池塘数：<span>'+info[i].yuanqu.chitang+'</span></p>'+
                                '</div>'+
                                '<div class="video">'+
                                    '<img src="/static/images/shiping.png">'+
                                '</div>'+
                            '</div>'+
                            '<div class="loncom_map_coninfo">'+
                                '<p class="one">一级告警：<span>10条</span></p>'+
                                '<p class="two">二级告警：<span>10条</span></p>'+
                                '<p class="three">三级告警：<span>10条</span></p>'+
                                '<p class="four">四级告警：<span>10条</span></p>'+
                            '</div>';
                if (info[i].State == "1") { //故障
                    iconurl = new BMap.Icon("/static/images/jz_warning.svg", new BMap.Size(38, 40));
                    content = '<div class="loncom_map_box loncom_map_box_warning">' + incontent + '</div>';
                    iconurl.setName("warning");
                } else if (info[i].State == "2") { //失联
                    iconurl = new BMap.Icon("/static/images/jz_lost.svg", new BMap.Size(38, 40));
                    content = '<div class="loncom_map_box loncom_map_box_lost">' + incontent + '</div>';
                    iconurl.setName("lost");
                } else if (info[i].State == "3") { //正常
                    iconurl = new BMap.Icon("/static/images/jz_normal.svg", new BMap.Size(38, 40));
                    content = '<div class="loncom_map_box">' + incontent + '</div>';
                    iconurl.setName("normal");
                }
                iconurl.setSearchName(info[i].name); //名称

                var marker = new BMap.Marker(point, { icon: iconurl });
                this.map.addOverlay(marker);
                var infoBox = new BMapLib.InfoBox(this.map, content);
                addClickHandler(marker, infoBox,info[i].id)
                

            }
            function addClickHandler(marker,infoBox,id) {
                marker.addEventListener("mouseover", function () {
                    infoBox.open(this)
                    $(infoBox.V).find(".showAlarm").on("click",function(){
                        console.log(_this);
                        _this.showAlarm(id);
                    })
                    $(infoBox.V).find(".video").on("click",function(){
                        _this.showVideo(id);
                    })
                    
                })
            }

            var allmap = this.map.getOverlays();
            this.allmap=allmap;
            //头部切换
            $(".gis_sort").find("li").on("click", function () {
                $(this).siblings("li").removeClass("active");
                $(this).addClass("active");
                var _name=$(this).data("name");
                if(_name=="all"){
                    for(var i=0;i<allmap.length;i++){
                        if(allmap[i].toString() == "[object Marker]"){  //要是marker的才可以
                            allmap[i].show()
                        }
                    }
                }else{
                    for(var i=0;i<allmap.length;i++){
                        if(allmap[i].toString() == "[object Marker]"){  //要是marker的才可以
                            if(allmap[i].z.uj.name == _name){
                                allmap[i].show();
                            }else{
                                allmap[i].hide();
                            }
                        }
                    }
                }
                
            })
            //搜索
            $("#search_btn").on("click",function(){
                for(var i=0;i<allmap.length;i++){
                    if(allmap[i].toString() == "[object Marker]"){
                        if(allmap[i].z.uj.searchName==_this.searchInfo){
                            _this.map.centerAndZoom(new BMap.Point(allmap[i].point.lng,allmap[i].point.lat),19); 
                        }
                    }
                }
            })
            
            
        },
        showAlarm:function(id){
            console.log(id)
            $(this.$refs.gis_alarm_list).css({"bottom":"0px"});
        },
        closeAlarm:function(){
           $(this.$refs.gis_alarm_list).css({"bottom":"-400px"});
        },
        showVideo:function(id){
            this.showInfo.visible=true;
        },
        //动态改变gis坐标状态

    },
    watch:{
        map:function(val,oldval){
            this.getMap();
        },
        
    },
    components:{alarmTop,Show}
}
</script>