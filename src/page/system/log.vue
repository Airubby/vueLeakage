<template>
    <div class="loncom_content">
        <div class="loncom_public_top">
            <div class="loncom_fl">操作日志</div>
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
                    </div>
                </template>
            </el-search-table-pagination>
        </div>
    </div>
</template>
<style>
    .el-form{padding-left:10px;}
</style>

<script>
export default {
    created () {
        
    },
    mounted() {
        scrollCon();
    },
    data() {
       return {
          　table_data:[
                {num:'1',ip:'192.168.16.6',zh:'admin',time:'2018-10-11 12:22:12',content:'删除账号'},
                {num:'2',ip:'192.168.16.6',zh:'小张',time:'2018-10-11 12:22:12',content:'删除账号'},
                {num:'3',ip:'192.168.16.6',zh:'haha',time:'2018-10-11 12:22:12',content:'删除账号'},
            ],
            table_forms: {
                inline: true,
                size:'small',
                initParams:{queryKey:""},
                forms: [
                    { prop: 'queryKey3-queryKey4', label: '时间段',placeholder:'时间',itemType: 'datetimerange' },
                    { prop: 'zh', label: '账户' ,placeholder:'账户'},
                ]
            },
            table_columns:[
              { prop: 'num', label: '序号',minWidth:10},
              { prop: 'ip', label: '登录IP',minWidth:10},
              { prop: 'zh', label: '登录账号',minWidth:10},
              { prop: 'time', label: '操作时间',minWidth:20},
              { prop: 'content', label: '操作内容',minWidth:30},
            ],
       }
   },
    methods:{
       
    },
    components:{}
}
</script>