<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">权限配置</div>
        </div>
        <div class="loncom_public_con">
            <div class="loncom_tree">
                <div class="loncom_tree_title">
                    角色
                </div>
                <div class="loncom_tree_con numScroll0">
                    <div class="numScrollCon0">
                        <el-button type="primary" size="small" style="width: 100%;margin-bottom:10px;" @click="addRole ">添加角色</el-button>
                        <div class="search">
                            <el-input placeholder="请输入角色名称" v-model="searchInfo" size="mini">
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
                        >
                        </el-tree>
                    </div>
                </div>
            </div>
            <div class="loncom_table">

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
       }
   },
    methods:{
       nodeClick:function(){

       },
    },
    components:{}
}
</script>