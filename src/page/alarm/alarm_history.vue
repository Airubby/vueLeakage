<template>
    <div class="loncom_content">
       <alarmTop v-bind:Info="Info"></alarmTop>
       <div class="loncom_public_con loncom_scroll_con">
            <el-search-table-pagination  type="local"
                url=""
                list-field="list" 
                total-field="total"
                method='post' 
                :formOptions="table_forms"
                border :data="table_data" :columns="table_columns" ref="thisRef">   
                <el-table-column slot="prepend" type="selection"></el-table-column>                                     
                <template slot-scope="scope" slot="preview-level">
                    <div class="alarm">
                        <span v-if="scope.row.level=='1'"><i class="alarm_one_bg circle10 loncom_mr5"></i>一级</span>
                    </div>
                </template>
                <template slot-scope="scope" slot="preview-handle">
                    <div>
                        <a href="javascript:;" class="loncom_color" @click="sure(scope.row)">确认</a> 
                    </div>
                </template>
            </el-search-table-pagination>
       </div>
    </div>
</template>
<style>

</style>

<script>
import alarmTop from '@/components/alarm_top.vue'
export default {
    created () {
        
    },
    mounted() {
        scrollCon();
    },
    data() {
       return {
           Info:{
               title:'历史告警',
               export:true,
           },
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
              { prop: 'level', label: '告警等级',minWidth:10,slotName:'preview-level'},
              { prop: 'name', label: '事件名称',minWidth:10},
              { prop: 'remark', label: '事件定位',minWidth:30},
              { prop: 'alarmTime', label: '告警时间',minWidth:10},
              { prop: 'relieveTime', label: '解除时间',minWidth:10},
              { prop: 'handle', label: '告警处理',slotName:'preview-handle',width:100},
          ],
       }
   },
    methods:{
       
    },
    components:{alarmTop}
}
</script>