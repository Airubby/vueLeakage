<template>
    <el-dialog :title="dialogInfo.title" :visible.sync="dialogInfo.visible" width="600px" :append-to-body='true'>
        <div class="loncom_dialog_con" style="height:400px;overflow:auto;">
            <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="80px">
                <div class="search loncom_mb10">
                    <el-input placeholder="请输入用户名称" v-model="searchInfo" size="mini">
                        <el-button slot="append" icon="el-icon-search" size="mini"></el-button>
                    </el-input>
                </div>
                <el-tree
                    :data="tree_data"
                    node-key="id"
                    ref="tree"
                    show-checkbox
                    check-strictly
                    :props="defaultProps"
                    accordion
                    :getCheckedNodes="getCheckedNodes"
                    :setCheckedNodes="setCheckNodes"
                    @check-change="changeTree"
                    :expand-on-click-node="true"
                    :filter-node-method="filterNode"
                    >
                </el-tree>
                <el-form-item prop="id">
                    <el-input v-model="form_info.id" size="small" style="display:none;"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <dialogBtnInfo v-bind:dialogInfobtn="dialogInfo" v-on:dialogSure="dialogSure('formInfo')"></dialogBtnInfo>
    </el-dialog>
</template>

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
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                this.$message.warning("请选择用户信息");
            } else {
                callback();
            }
        };
        return {
            
           form_info:{
               id:'',
               list:[],
           },
           formRules:{
                id:[
                    { validator: validatePass, trigger: 'change' }
                ],
           },
           searchInfo:'',
          　tree_data: [{
                label: '小张',
                id:'1',
            },{
                label: '小李',
                id:'2',
            },{
                label: '小王',
                id:'3',
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
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.dialogInfo.data=this.form_info.list;
                    this.dialogInfo.visible=false;
                }
            })
        },
        changeTree:function(){
          this.form_info.list=this.$refs.tree.getCheckedNodes();
        },
        //获取树形勾选的
        getCheckedNodes:function(){

        },
        setCheckNodes:function(){

        },
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        setChecked:function(keys){
            this.$refs.tree.setCheckedKeys(keys.split(","));
        },
       
    },
    watch:{
        //监听树形数据变化
        'form_info.list':function(val,oldval){
            if(val.length>0){
                this.form_info.id=val[0].id;
            }else{
                this.form_info.id='';
            }
        },
        searchInfo(val) {
            this.$refs.tree.filter(val);
        }
   },
    props:["dialogInfo"],
    components:{dialogBtnInfo}

}
</script>

