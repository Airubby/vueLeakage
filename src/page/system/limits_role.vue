<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">角色管理</div>
        </div>
        <div class="loncom_public_con">
            <div class="loncom_tree">
                <div class="loncom_tree_title">
                    角色
                </div>
                <div class="loncom_tree_con numScroll0">
                    <div class="numScrollCon0">
                        <el-button type="primary" size="small" style="width: 100%;margin-bottom:10px;" @click="addRole ">添加角色</el-button>
                        <div class="search loncom_mb10"style="width:100%;">
                            <el-input placeholder="请输入角色名称" v-model="searchInfo" size="mini" >
                                <el-button slot="append" icon="el-icon-search" size="mini"></el-button>
                            </el-input>
                        </div>
                        <el-tree
                        ref="tree"
                        :props="defaultProps"
                        :data="tree_data"
                        node-key="id"
                        default-expand-all
                        @node-click="nodeClick"
                        :filter-node-method="filterNode"
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
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="基本信息" name="first">
                            <div class="loncom_tabbox numScroll1">
                                <div class="loncom_tabbox_con numScrollCon1">
                                    <div style="width:450px;padding-top:30px;">
                                        <el-form :model="form_info" :rules="formRules" ref="formInfo" label-width="120px">
                                            <el-form-item prop="name" label="名称" size="small">
                                                <el-input v-model="form_info.name"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="role" label="角色级别" size="small">
                                                <el-radio v-model="form_info.role" label="1">管理员</el-radio>
                                                <el-radio v-model="form_info.role" label="2">普通</el-radio>
                                            </el-form-item>
                                            <el-form-item prop="state" label="是否启用" size="small">
                                                <el-radio v-model="form_info.state" label="1">启用</el-radio>
                                                <el-radio v-model="form_info.state" label="2">禁用</el-radio>
                                            </el-form-item>
                                            <el-form-item prop="user" label="用户" size="small">
                                                <el-input v-model="form_info.user" readonly @focus="getUser"></el-input>
                                            </el-form-item>
                                            <el-form-item prop="remark" label="备注" size="small">
                                                <el-input v-model="form_info.remark" type="textarea"></el-input>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="权限" name="second">
                            <div class="loncom_tabbox numScroll2">
                                <div class="loncom_tabbox_con numScrollCon2 tabtree">
                                    <el-row>
                                        <el-col :span="10" :offset="2">
                                            <h2>管理域</h2>
                                            <el-tree
                                            ref="tree1"
                                            show-checkbox
                                            :props="defaultProps"
                                            :data="tree_data1"
                                            node-key="id"
                                            default-expand-all
                                            >
                                            </el-tree>
                                        </el-col>
                                        <el-col :span="10">
                                            <h2>操作菜单</h2>
                                            <el-tree
                                            ref="tree2"
                                            show-checkbox
                                            :props="defaultProps"
                                            :data="tree_data2"
                                            node-key="id"
                                            @check-change="changeNav"
                                            default-expand-all
                                            >
                                            </el-tree>
                                        </el-col>
                                    </el-row>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </div>
        <UserGet v-bind:dialogInfo="getInfo" v-if="getInfo.visible"></UserGet>
    </div>
</template>
<style>
    .tabtree{padding-top:30px;}
    .tabtree h2{height:40px;line-height:40px;color:#0096BA}
</style>

<script>
import UserGet from '@/components/limits_user_get.vue'
export default {
    created () {
        
    },
    mounted() {
        numScroll(0);
        numScroll(1);
        numScroll(2);
    },
    data() {
       return {
           searchInfo:'',
          　tree_data: [{
                label: '一楼管理员'
            },{
                label: '二楼管理员'
            },{
                label: '三楼管理员'
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            activeName: 'first',
            getInfo:{
                title:"获取用户信息",
                visible:false,
                id:'',
                data:[],
            },
            form_info:{
                name:'',
                role:'',
                state:'',
                user:'',
                remark:'',
            },
            formRules:{
                name:[
                    { required: true, message: '请输入名称', trigger: 'blur' },
                ],
                role:[
                    { required: true, message: '请选择级别', trigger: 'change' },
                ],
                state:[
                    { required: true, message: '请选择是否启用', trigger: 'change' },
                ],
            },

            tree_data1: [{
                label: '海南养殖基地',
                id:'1',
                children:[
                    {
                        label: '动力楼',
                        id:'2',
                        children:[
                            {
                                label:'动力一号',
                                id:'3',
                            }
                        ]
                    },{
                        label: '数据楼',
                        id:'4'
                    }
                ]
            }],
            tree_data2: [{
                label: '实时监控',
                id:'1',
                children:[
                    {
                        label: 'gis',
                        id:'2',
                        checked:true,
                        children:[
                            {
                                label:'gis详情',
                                id:'3',
                            }
                        ]
                    },{
                        label: 'gis列表',
                        id:'4'
                    }
                ]
            }],


       }
   },
    methods:{
        //获取用户
        getUser:function(){
            this.getInfo.visible=true;
            
        },
       nodeClick:function(){

       },
       addRole:function(){

       },
       filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      remove:function(){

      },
      save:function(formName){
          this.$refs[formName].validate((valid) => {
            if(valid){
                console.log(22)
            }
        })
      },
      changeNav:function(){
            this.navchecked=this.$refs.tree2.getCheckedNodes();
            this.navhalfchecked=this.$refs.tree2.getHalfCheckedNodes();
            console.log(this.navchecked);
            for(var i=0;i<this.navchecked.length;i++){
                if(this.navchecked[i].children.length==0){
                    console.log(this.$refs.tree2.getNode(this.navchecked[i].id))
                }
            }
            console.log(this.$refs.tree2.getNode())
        },

    },
    watch: {
      searchInfo(val) {
        this.$refs.tree.filter(val);
      },
      'getInfo.data':{
            handler:function(val,oldval){
                this.form_info.departid=val.id;
                this.form_info.depart=val.label;
            },
            deep: true
        },
    },
    components:{UserGet}
}
</script>