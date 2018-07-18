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
                    <el-tabs v-model="first">
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
                                                <el-input v-model="form_info.user" readonly></el-input>
                                            </el-form-item>
                                            <el-form-item prop="remark" label="备注" size="small">
                                                <el-input v-model="form_info.remark" type="textarea"></el-input>
                                            </el-form-item>
                                        </el-form>
                                    </div>
                                </div>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
       </div>
    </div>
</template>


<script>
export default {
    created () {
        
    },
    mounted() {
        numScroll(0);
        numScroll(1);
    },
    data() {
       return {
          　tree_data: [{
                label: '海南水产养殖',
                id:'1',
                remark:'海南水产养殖',
                children: [{
                    label: '车间一',
                    id:'11',
                    remark:'牛逼的车间',
                    children: [{
                        label: '池塘一',
                        id:'111',
                        remark:'haoxiaozu ',
                    }]
                }, {
                    label: '车间二',
                    id:'12',
                    remark:'2'
                }]
            }],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            form_info:{

            },
            formRules:{
                
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
    },
    components:{}
}
</script>