<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">池塘管理</div>
            <div class="loncom_fr">
                <el-button type="primary" size="mini" @click="add"><i class="fa fa-plus-circle loncom_mr5"></i>新建</el-button>
                <el-button type="primary" size="mini" @click="remove"><i class="fa fa-minus-circle loncom_mr5"></i>删除</el-button>
            </div>
        </div>
        <div class="loncom_public_con loncom_scroll_con">
            <el-search-table-pagination  type="local"
                url=""
                list-field="list" 
                total-field="total"
                method='post' 
                :formOptions="table_forms"
                border :data="table_data" :columns="table_columns" ref="thisRef">   
                <el-table-column slot="prepend" type="selection"></el-table-column>   
                <template slot-scope="scope" slot="preview-handle">
                    <div>
                        <a href="javascript:;" class="loncom_color" @click="edit (scope.row)">编辑</a> 
                        <em>|</em>
                        <a href="javascript:;" class="loncom_color" @click="remove (scope.row)">删除</a> 
                    </div>
                </template>
            </el-search-table-pagination>
       </div>
       <Add v-bind:dialogInfo="addInfo"></Add>
    </div>
</template>


<script>
import Add from '@/components/record_pool_add.vue'
export default {
    created () {
        
    },
    mounted() {
        scrollCon();
    },
    data() {
       return {
          　table_data:[
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
            ],
            table_forms: {
            inline: true,
            size:'small',
            initParams:{queryKey:""},
            forms: []
            },
            table_columns:[
              { prop: 'level', label: '池塘编号',minWidth:10},
              { prop: 'name', label: '池塘名称',minWidth:10},
              { prop: 'type', label: '种类',minWidth:10},
              { prop: 'remark', label: '说明',minWidth:30},
              { prop: 'handle', label: '操作',slotName:'preview-handle',width:100},
            ],
            addInfo:{
                title:"新增鱼塘信息",
                width:'850px',
                visible:false,
            },



       }
   },
    methods:{
       add:function(){
           this.addInfo.visible=true;
       },
       remove:function(){

       },
       edit:function(){

       }
    },
    components:{Add}
}
</script>