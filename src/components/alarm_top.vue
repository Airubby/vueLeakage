<template>
    <div class="loncom_public_top">
        <div class="loncom_fl">{{Info.title}}</div>
        <div class="loncom_fl sort">
            <el-checkbox v-model="form_info.allAlarm" label="全部" border size="mini" @click.native="allClick"></el-checkbox>
            <el-checkbox v-model="form_info.oneAlarm" label="一级" border size="mini">
                <i class="alarm_one_bg circle10"></i><span class="title">一级</span><em>(30)</em>
            </el-checkbox>
            <el-checkbox v-model="form_info.twoAlarm"  label="二级" border size="mini">
                <i class="alarm_two_bg circle10"></i><span class="title">二级</span><em>(30)</em>
            </el-checkbox>
            <el-checkbox v-model="form_info.threeAlarm"  label="三级" border size="mini">
                <i class="alarm_three_bg circle10"></i><span class="title">三级</span><em>(30)</em>
            </el-checkbox>
            <el-checkbox v-model="form_info.fourAlarm"  label="四级" border size="mini">
                <i class="alarm_four_bg circle10"></i><span class="title">四级</span><em>(30)</em>
            </el-checkbox>
            <el-checkbox v-model="form_info.reAlarm"  label="已恢复" border size="mini">
                <i class="alarm_normal_bg circle10"></i><span class="title">已恢复</span><em>(30)</em>
            </el-checkbox>
        </div>
        <div class="loncom_fr" v-if="Info.export">
            <el-button type="primary" size="mini"><i class="fa fa-upload loncom_mr5"></i>导出</el-button>
        </div>
        <div class="loncom_fr" v-if="!Info.export">
            <i class="el-icon-circle-close" style="font-size:20px;color:#0096ba;cursor:pointer;" @click="closeAlarm"></i>
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
          form_info:{
            allAlarm:true,
            oneAlarm:false,
            twoAlarm:false,
            threeAlarm:false,
            fourAlarm:false,
            reAlarm:false,
          },

       }
   },
    methods:{
       closeAlarm:function(){
           this.$parent.closeAlarm();
       },
       allClick:function(){
           for(var item in this.form_info){
               if(item=="allAlarm"){
                   this.form_info[item]=true;
               }else{
                   this.form_info[item]=false;
               }
           }
       },
    },
    watch:{
        form_info:{
          handler:function(val,oldval){
              console.log(1)
              var flag=false;
              for(var item in val){
                  if(item!="allAlarm"&&val[item]){
                      flag=true;
                  }
              }
              if(flag){
                  this.form_info.allAlarm=false;
              }else{
                  this.form_info.allAlarm=true;
              }
          },
          deep: true
        }
    },
    props:["Info"],
    components:{}
}
</script>