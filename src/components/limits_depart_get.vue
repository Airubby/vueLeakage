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
                this.$message.warning("请选择一条信息");
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
           tree_data: [{
                label: '龙控',
                id:'1',
                remark:'龙控智能',
                children: [{
                    label: '研发部',
                    id:'11',
                    remark:'牛逼的部门',
                    children: [{
                        label: '研发小组',
                        id:'111',
                        remark:'haoxiaozu ',
                    }]
                }, {
                    label: '设计部',
                    id:'12',
                    remark:'设计部'
                }]
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
                    console.log(this.form_info.list[0])
                    this.dialogInfo.data=this.form_info.list[0];
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
        setChecked:function(keys){
            this.$refs.tree.setCheckedKeys([keys]);
        },
       
    },
    watch:{
        //监听树形数据变化
        'form_info.list':function(val,oldval){
            if(val.length>0){
                if(val.length>1){
                    this.form_info.id='';
                }else{
                    this.form_info.id=val[0].id;
                }
            }else{
                this.form_info.id='';
            }
            
        },
   },
    props:["dialogInfo"],
    components:{dialogBtnInfo}

}
</script>

