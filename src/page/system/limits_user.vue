<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">用户管理</div>
        </div>
        <div class="loncom_public_con">
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
                <span class="btn"><el-button type="primary" size="mini" @click="adduser">添加用户</el-button></span>
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
                            <a href="javascript:;" class="loncom_color" @click="detail (scope.row)">详情</a>
                            <em>|</em>
                            <a href="javascript:;" class="loncom_color" @click="edit (scope.row)">编辑</a> 
                            <em>|</em>
                            <a href="javascript:;" class="loncom_color" @click="remove (scope.row)">删除</a>  
                        </div>
                    </template>
                </el-search-table-pagination>
            </div>
        </div>
        <Add v-bind:dialogInfo="addInfo" v-if="addInfo.visible"></Add>
    </div>
</template>
<style>
    .search_table{height: calc(100% - 40px)}
</style>

<script>
import Add from '@/components/limits_user_add.vue'
export default {
    created () {
        
    },
    mounted() {
        numScroll(1);
        serachList();
    },
    data() {
       return {
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
            addInfo:{
                title:"新增用户",
                visible:false,
                id:'',
            },

       }
   },
    methods:{
        adduser:function(){
            this.addInfo.visible=true;
            //this.$router.push({path:'/system/limits/user/adduser'});
        },
       detail:function(row){
           console.log(row)
           //this.$router.push({path:'/system/limits/user/adduser',query:{id:row.id}});
       },
       edit:function(row){
           //this.$router.push({path:'/system/limits/user/adduser',query:{id:row.id,edit:true}});
       },
       remove:function(row){

       },
    },
    components:{Add}
}
</script>