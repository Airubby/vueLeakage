<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <div class="loncom_fl">部门管理</div>
        </div>
       <div class="loncom_public_con">
            <div class="loncom_tree">
                <div class="loncom_tree_title">
                    部门
                </div>
                <div class="loncom_tree_con numScroll0">
                    <div class="numScrollCon0">
                        <el-button type="primary" size="small" style="width: 100%;margin-bottom:10px;" @click="addDepart">添加部门</el-button>
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
                <div class="depart_box1">
                    <div class="depart_box1_title">
                        <span class="loncom_fl">部门信息</span>
                        <div class="loncom_fr">
                            <el-button type="primary" size="small" @click="saveDepart('formInfo')">保存</el-button>
                            <el-button type="primary" size="small" @click="cancelDepart" v-if="add_depart">取消</el-button>
                            <el-button type="primary" size="small" @click="deleteDepart" v-if="!add_depart">删除</el-button>
                        </div>
                    </div>
                    <div class="depart_box1_con">
                        <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="80px">
                            <el-row :gutter="60">
                                <el-col :span="12">
                                    <el-form-item prop="name" label="名称" size="small">
                                        <el-input v-model="form_info.name"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="parentname" label="上级部门" size="small">
                                        <el-input v-model="form_info.parentname" readonly @focus="getDepart"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item prop="remark" label="备注" size="small">
                                        <el-input v-model="form_info.remark"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                </div>
                <div class="depart_box">
                    <div class="search_sort">
                        <div class="title">
                            <div class="loncom_fl loncom_mr10">部门成员列表</div>
                            <div class="serach_list loncom_fl">
                                <span class="all active">全部</span>
                                <span class="A">A</span>
                                <span class="B">B</span>
                                <span class="C">C</span>
                                <span class="D">D</span>
                                <span class="E">E</span>
                                <span class="F">F</span>
                                <span class="G">G</span>
                                <span class="H">H</span>
                                <span class="I">I</span>
                                <span class="J">J</span>
                                <span class="K">K</span>
                                <span class="L">L</span>
                                <span class="M">M</span>
                                <span class="N">N</span>
                                <span class="O">O</span>
                                <span class="P">P</span>
                                <span class="Q">Q</span>
                                <span class="R">R</span>
                                <span class="S">S</span>
                                <span class="T">T</span>
                                <span class="U">U</span>
                                <span class="V">V</span>
                                <span class="W">W</span>
                                <span class="X">X</span>
                                <span class="Y">Y</span>
                                <span class="Z">Z</span>
                            </div>
                        </div>
                        <span class="btn"><el-button type="primary" size="mini" @click="addUser">添加用户</el-button></span>
                    </div>
                    <div class="search_table numScroll1">
                        <el-search-table-pagination  type="local" class="numScrollCon1"
                            url=""
                            list-field="list" 
                            total-field="total"
                            method='post' 
                            :formOptions="table_forms"
                            border :data="table_data" :columns="table_columns" ref="thisRef">   
                            <template slot-scope="scope" slot="preview-handle">
                                <div>
                                    <a href="javascript:;" class="loncom_color" @click="edit (scope.row)">详情</a>
                                    <em>|</em>
                                    <a href="javascript:;" class="loncom_color" @click="edit (scope.row)">编辑</a> 
                                    <em>|</em>
                                    <a href="javascript:;" class="loncom_color" @click="edit (scope.row)">删除</a>  
                                </div>
                            </template>
                        </el-search-table-pagination>
                    </div>
                </div>
            </div>
       </div>
       <DepartGet v-bind:dialogInfo="getInfo" v-if="getInfo.visible"></DepartGet>
    </div>
</template>

<style>
    .depart_box1{width:100%;height:auto;border-bottom:1px solid #e0e0e0;}
    .depart_box1_title{width:100%;height:40px;line-height:40px;padding:0 20px;}
    .depart_box1_con{padding:15px 20px 5px 20px;}
    .depart_box{padding:15px 20px 0 20px;height:calc(100% - 180px)}
    .search_table{height: calc(100% - 40px)}
</style>
<script>
import DepartGet from '@/components/limits_depart_get.vue'
export default {
    created () {
        //this.getTree();  
    },
    mounted() {
        numScroll(0);
        numScroll(1);
        serachList();
    },
    data() {
       return {
            add_depart:false,
            parent_id:'',  //存储点击的id,
            parent_name:'',  //存储点击的名字
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
            //部门信息
            form_info:{
                id:'',
                name:'',
                parentid:'',
                parentname:'',
                remark:'',
            },
            formRules:{
                parentname:[
                    { required: true, message: '请点选择上级部门', trigger: 'change' },
                ],
                name:[
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
            },
            
            table_data:[
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
                {id:'1',name:'小花',zh:'admin',zt:'启用',sj:'15225258525',yx:'admin@qq.com',bm:'研发部',js:'web前端'},
            ],
            table_forms: {
            inline: true,
            size:'small',
            initParams:{queryKey:""},
            forms: []
            },
            table_columns:[
              { prop: 'name', label: '姓名',minWidth:10},
              { prop: 'zh', label: '账号',minWidth:10},
              { prop: 'zt', label: '状态',minWidth:10},
              { prop: 'sj', label: '手机',minWidth:20},
              { prop: 'yx', label: '邮箱',minWidth:20},
              { prop: 'bm', label: '部门',minWidth:20},
              { prop: 'js', label: '角色',minWidth:20},
              { prop: 'handle', label: '操作',slotName:'preview-handle',width:140},
            ],
            //获取上级部门信息
            getInfo:{
                title:"获取上级部门信息",
                visible:false,
                id:'',
                data:{},
            },

       }
   },
    methods:{
        //获取部门树形
        getTree:function(){
            this.tree_data=[];
            this.$api.post('/organizationgroup/tree', {}, r => {
                console.log(r)
                if(r.success){
                    this.tree_data.push(r.data);
                }
            }); 
        },
       //点击树形节点
        nodeClick:function(data,node){
            console.log(node)
            this.parent_id=node.data.id;
            this.parent_name=node.data.label;
            this.form_info.id=node.data.id;
            this.form_info.parentid=node.parent.data.id?node.parent.data.id:"";
            this.form_info.name=node.data.label;
            this.form_info.parentname=node.parent.data.label?node.parent.data.label:"NULL";
            this.form_info.remark=node.data.remark;
        },
        //添加部门
        addDepart:function(){
            this.add_depart=true;
            for(var item in this.form_info){
                this.form_info[item]='';
            }
        },
        //取消添加
        cancelDepart:function(){
            this.add_depart=false;
            for(var item in this.form_info){
                this.form_info[item]='';
            }
        },
        //保存操作
        saveDepart:function(formName){
            console.log(formName)
            this.$refs[formName].validate((valid) => {
                if(valid){
                    console.log(this.form_info)
                    this.$message.success(r.msg);
                }
            })
        },
        //删除部门
        deleteDepart:function(){

        },
        //获取上级部门
        getDepart:function(){
            console.log(this.form_info.parentid)
            this.getInfo.visible=true;
            this.getInfo.id=this.form_info.parentid;
        },
        //添加用户
        addUser:function(){
            this.$router.push({path:'/system/limits/depart/adduser'});
        },
    },
    watch:{
        'getInfo.data':{
            handler:function(val,oldval){
                console.log(val)
                this.form_info.parentid=val.id;
                this.form_info.parentname=val.label;
            },
            deep: true
        }
    },
    components:{DepartGet}
}
</script>