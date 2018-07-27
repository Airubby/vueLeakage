<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="loncom_fl">视频管理</div>
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
                        <a href="javascript:;" class="loncom_color" @click="show (scope.row)">预览</a> 
                        <em>|</em>
                        <a href="javascript:;" class="loncom_color" @click="edit (scope.row)">编辑</a> 
                        <em>|</em>
                        <a href="javascript:;" class="loncom_color" @click="remove (scope.row)">删除</a> 
                    </div>
                </template>
            </el-search-table-pagination>
       </div>
       <Add v-bind:dialogInfo="addInfo" v-if="addInfo.visible"></Add>
       <Show v-bind:dialogInfo="showInfo" v-if="showInfo.visible"></Show>
    </div>
</template>


<script>
import Add from '@/components/video_vms_add.vue'
import Show from '@/components/video_show.vue'
export default {
    created () {
        
    },
    mounted() {
        scrollCon();
    },
    data() {
       return {
          　table_data:[
                {id:'1',level:'1',name:'1号视频',remark:'池塘一的视频'},
            ],
            table_forms: {
            inline: true,
            size:'small',
            initParams:{queryKey:""},
            forms: []
            },
            table_columns:[
              { prop: 'level', label: '视频编码',minWidth:10},
              { prop: 'name', label: '视频名称',minWidth:10},
              { prop: 'remark', label: '说明',minWidth:30},
              { prop: 'handle', label: '操作',slotName:'preview-handle',width:140},
            ],
            addInfo:{
                title:"新增视频信息",
                visible:false,
            },
            showInfo:{
                title:"视频预览",
                visible:false,
            },



       }
   },
    methods:{
       add:function(){
           this.addInfo.visible=true;
       },
       remove:function(row){

       },
       edit:function(row){

       },
       show:function(row){
           this.showInfo.visible=true;
       },

    },
    components:{Add,Show}
}
</script>