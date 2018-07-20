<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="600px" :append-to-body='true'>
        <div class="loncom_dialog_con" style="height:400px;overflow:auto;">
            <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="80px">
                <el-tree
                    :data="tree_data"
                    node-key="id"
                    ref="tree"
                    show-checkbox
                    check-strictly
                    :props="defaultProps"
                    :getCheckedNodes="getCheckedNodes"
                    @check-change="changeTree"
                    :expand-on-click-node="true"
                    default-expand-all
                    >
                </el-tree>
            </el-form>
        </div>
        <dialogBtnInfo v-bind:dialogInfobtn="dialogInfo" v-on:dialogSure="dialogSure('formInfo')"></dialogBtnInfo>
    </el-dialog>
</template>
<style>
</style>
<script>
import dialogBtnInfo from './dialogBtnInfo.vue'
export default {
    created () {
        this.form_info.id=this.dialogInfo.id;
        
    },
    mounted() {
        var _this=this;
        setTimeout(function(){
            _this.setChecked(_this.dialogInfo.id)
        },500)
    },
    data() {
        return {
            returnData:false,
            
           form_info:{
               id:'',
               list:[],
           },
           formRules:{
           },
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
          
        }
    },
    methods:{
        //保存的操作
        dialogSure:function(formName){
            if(this.returnData){
                this.dialogInfo.data=this.form_info.list[0];
                this.dialogInfo.visible=false;
            }else{
                this.$message.warning("请选择一条信息！")
                
            }
        },
        changeTree:function(){
          this.form_info.list=this.$refs.tree.getCheckedNodes();
        },
        //获取树形勾选的
        getCheckedNodes:function(){

        },
        setCheckNodes:function(){

        },
        setChecked:function(keys){
            this.$refs.tree.setCheckedKeys([keys]);
        },
        checkSelect:function(){
            switch(this.dialogInfo.type){
                case '1':
                    if(this.form_info.list[0].map.type!="0"){
                        this.$message.warning("你选择的数据中心类型，只能挂在根节点上！");
                        this.$refs.tree.setCheckedKeys([]);
                        return;
                    }else{break;}
                case '2':
                    if(this.form_info.list[0].map.type!="1"){
                        this.$message.warning("你选择的车间类型，只能挂在数据中心节点上！");
                        this.$refs.tree.setCheckedKeys([]);
                        return;
                    }else{break;}
                case '3':
                    if(this.form_info.list[0].map.type!="2"){
                        this.$message.warning("你选择的池塘类型，只能挂在车间节点上！");
                        this.$refs.tree.setCheckedKeys([]);
                        return;
                    }else{break;}
                case 'video':
                    if(this.form_info.list[0].map.type=="0"){
                        this.$message.warning("视频所属区域不能挂在根节点上！");
                        this.$refs.tree.setCheckedKeys([]);
                        return;
                    }else{break;}
                default:
                    if(this.form_info.list[0].map.type!="3"){ //添加池塘关联站点用
                        this.$message.warning("池塘管理站点只能选择池塘类型！");
                        this.$refs.tree.setCheckedKeys([]);
                        return;
                    }else{break;}
            }
        },
       
    },
    watch:{
        //监听树形数据变化
        'form_info.list':function(val,oldval){
            console.log(val)
            if(val.length==1){
                this.checkSelect();
                this.returnData=true;
            }else{
                this.returnData=false;
                if(val.length>1){
                    this.$refs.tree.setCheckedKeys([this.form_info.list[0].id]);
                    this.$message.warning("只能选择一条信息！");
                }
            }
            
            
            
        },
   },
    props:["dialogInfo"],
    components:{dialogBtnInfo}

}
</script>

