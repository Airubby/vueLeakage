<template>
    <div class="loncom_public_top">
        <div class="loncom_fl">实时告警</div>
        <div class="loncom_fl sort">
            <el-checkbox v-model="allAlarm" label="全部" border size="mini"></el-checkbox>
            <el-checkbox v-model="oneAlarm" label="一级" border size="mini">
                <i class="alarm_one_bg circle10"></i><span class="title">一级</span><em>(30)</em>
            </el-checkbox>
            <el-checkbox v-model="twoAlarm"  label="二级" border size="mini">
                <i class="alarm_two_bg circle10"></i><span class="title">二级</span><em>(30)</em>
            </el-checkbox>
            <el-checkbox v-model="threeAlarm"  label="三级" border size="mini">
                <i class="alarm_three_bg circle10"></i><span class="title">三级</span><em>(30)</em>
            </el-checkbox>
            <el-checkbox v-model="fourAlarm"  label="四级" border size="mini">
                <i class="alarm_four_bg circle10"></i><span class="title">四级</span><em>(30)</em>
            </el-checkbox>
            <el-checkbox v-model="reAlarm"  label="已恢复" border size="mini">
                <i class="alarm_normal_bg circle10"></i><span class="title">已恢复</span><em>(30)</em>
            </el-checkbox>
        </div>
        <div class="loncom_fr">
            <el-button type="primary" size="mini"><i class="fa fa-upload loncom_mr5"></i>导出</el-button>
        </div>
    </div>
</template>
<style>
    .sort{margin-left: 30px;}
    .sort span.title{
        margin: 0 5px;
    }
    .sort label{background:#fff;}
</style>

<script>
export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
       return {
          allAlarm:"",
          oneAlarm:'',
          twoAlarm:'',
          threeAlarm:'',
          fourAlarm:'',
          reAlarm:''

       }
   },
    methods:{
       
    },
    props:["alarmTop"],
    components:{}
}
</script>