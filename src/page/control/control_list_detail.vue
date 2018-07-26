<template>
    <div class="loncom_content" style="position:relative;">
        <div class="loncom_public_top">
            <div class="loncom_fl">{{title}}</div>
            <div class="loncom_fr">
                <el-button type="primary" size="mini" @click="showAlarm"><i class="el-icon-info loncom_mr5"></i>告警信息</el-button>
            </div>
        </div>
        <div class="loncom_public_con loncom_scroll_con">
            <div class="map_detail_top">
                <div class="map_detail_box map_detail_top_left">
                    <div class="map_detail_title">
                        <span></span>基本信息
                    </div>
                    <div class="map_detail_con map_detail_top_left_con">
                        <p><span>池塘名称：</span><em id="name">池塘一</em></p>
                        <p><span>池塘面积：</span><em id="mianji">20</em></p>
                        <p><span>养殖物种：</span><em id="wuzhong">草鱼</em></p>
                    </div>
                </div>
                <div class="map_detail_box map_detail_top_right">
                    <div class="map_detail_title">
                        <span></span>池塘概况
                    </div>
                    <div class="map_detail_con">
                        <div class="map_detail_top_rightl">
                            <div class="map_detail_top_rightl_img">
                                <img src="static/images/login_bg.jpg" style="width:180px;height:130px;" />
                            </div>
                            <div class="loncom_fl map_detail_top_rightc">
                                <div class="map_detail_controlcon">
                                    <div class="map_detail_controlinfo">
                                        <div class="map_detail_controlbox">
                                            <span>13.3</span>
                                            <p>溶解氧</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="map_detail_controlcon">
                                    <div class="map_detail_controlinfo">
                                        <div class="map_detail_controlbox">
                                            <span>13.3</span>
                                            <p>水温</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="map_detail_controlcon">
                                    <div class="map_detail_controlinfo">
                                        <div class="map_detail_controlbox">
                                            <span class="alarm">13</span>
                                            <p>PH值</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="map_detail_controlcon">
                                    <div class="map_detail_controlinfo">
                                        <div class="map_detail_controlbox">
                                            <span>45.2</span>
                                            <p>氨氮值</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="map_detail_top_rightr">
                            <div class="loncom_map_boxconb_infovideo">
                                <img src="static/images/shiping.png" onclick="enterVideo()">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="map_detail_bottom map_detail_box">
                <div class="map_detail_title">
                    <span></span>监控信息
                </div>
                <div class="map_detail_echar">
                    <div class="map_detail_echarbox">
                        <div class="map_detail_echarbox_con">
                        <div class="map_detail_echarbox_left" id="gauge1"></div>
                        <div class="map_detail_echarbox_right" id="lineZoom"></div>
                        </div>
                    </div>
                    <div class="map_detail_echarbox">
                        <div class="map_detail_echarbox_con">
                        <div class="map_detail_echarbox_left" id="gauge2"></div>
                        <div class="map_detail_echarbox_right" id="lineZoom1"></div>
                        </div>
                    </div>
                    <div class="map_detail_echarbox">
                        <div class="map_detail_echarbox_con">
                        <div class="map_detail_echarbox_left" id="gauge3"></div>
                        <div class="map_detail_echarbox_right" id="lineZoom2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gis_alarm_list" ref="gis_alarm_list">
            <alarmTop v-bind:Info="Info"></alarmTop>
            <el-scrollbar style="height:360px;">
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
            </el-scrollbar>
        </div>
    </div>
</template>
<style>
    .map_detail_top{
        width: 100%;
        height: 200px;
        margin-bottom: 15px;
    }
    .map_detail_title{
            height: 35px;
        line-height: 35px;
        padding: 0 10px;
        font-size: 14px;
        color: #000;
    }
    .map_detail_title span{
        width: 18px;
        height: 18px;
        display: inline-block;
        border: 4px solid #00B15F;
        border-radius: 50%;
        margin-right: 8px;
        vertical-align: middle;
    }
    .map_detail_con{
        padding: 0 20px 20px 20px;
    }
    .map_detail_box{
        background: #fff;
        border-radius: 5px;
    }
    .map_detail_top_left{
        width: 35%;
        height: 200px;
        float: left;
        margin-right: 15px;
    }
    .map_detail_top_left_con p{
        height: 30px;
        line-height: 30px;
        color: #333;
        font-size: 14px;
        overflow: hidden;
    }
    .map_detail_top_left_con p span{
        display: inline-block;
        color: #999;
        width: 100px;
    }
    .map_detail_top_right{
        width: calc(65% - 15px);
        height: 200px;
        float:left;
    }
    .map_detail_top_rightl{
        width: 80%;
        height: 100%;
        border-right: 1px solid #ddd;
        padding-top: 10px;
    }
    .map_detail_top_rightl,
    .map_detail_top_rightr,
    .map_detail_controlimg{
        float:left;
    }
    .map_detail_top_rightl_img{
        width:180px;
        margin-right: 10px;
        float:left;
    }
    .map_detail_top_rightc{
        width: calc(100% - 190px);
    }
    .map_detail_controlimg{
        height: 100%;
        width:40px;
        text-align:center;
    }
    .map_detail_controlimg img{
        margin-top: 15px;
        max-width: 40px;
    }
    .map_detail_top_rightl .map_detail_controlcon{
        float:left;
    }
    .map_detail_controlcon{
        height: 72px;
        width: 50%;
    }
    .map_detail_controlbox{
        width: 75px;
        text-align:center;
        margin: 0 auto;
    }
    .map_detail_controlbox p{
        color: #999;
        margin-bottom: 5px;
    }
    .map_detail_controlbox span{
        width: 100%;
        height: 26px;
        line-height: 26px;
        display: block;
        text-align: center;
        margin: 0 auto;
        color: #fff;
        background: #13AE2F;
        border-radius: 14px;
        font-size: 14px;
    }
    .map_detail_controlbox span.alarm{
        background:#FFA75C;
    }
    .map_detail_top_rightr{
        width: 20%;
        height: 100%;
        padding: 30px 0 0 10px;
        position:relative;
    }
    .map_detail_controlinfor{
        width: calc(100% - 40px);
    }
    .map_detail_controlinfor .map_detail_controlbox{
        float:left;
        margin-bottom: 20px;
    }
    .map_detail_yibiaopan{
        padding-top: 10px;
    }
    .map_detail_echarbox{
        width: 100%;
        height: 33.33%;
        padding-bottom: 20px;
    }
    .map_detail_echarbox_con{
        width: 100%;
        height: 100%;
    }
    .map_detail_echarbox_left{
        width: 120px;
        height: 100%;
        float:left;
    }
    .map_detail_echarbox_right{
        width: calc(100% - 120px);
        height: 100%;
        float:left;
    }
    .map_detail_top_rightr_info{
        clear:both;
        padding:10px 0 0 10px;
    }
    .map_detail_top_rightr_info p{
        height: 26px;
        line-height:26px;
    }
    .loncom_map_boxconb_infovideo{
        width: 60px;
        margin:0 auto;
    }
    .loncom_map_boxconb_infovideo img{
        width: 100%;
    }
    .map_detail_bottom {
        width:100%;
        height:calc(100% - 215px);
    }
    .map_detail_echar{
        width: 100%;
        padding: 0 20px;
        height: calc(100% - 35px);
    }
</style>

<script>
import alarmTop from '@/components/alarm_top.vue'
export default {
    created () {
        var obj = this.$route.query;
        if(JSON.stringify(obj) != "{}"){ //
            this.title="池塘名称";
        }
    },
    mounted() {
        scrollCon();
        getG()
        //获取折线等详情
        var xData = ["09:00", "09:03", "09:13", "09:14", "09:24", "09:34", "09:44", "09:54", "10:04", "10:14", "10:24"];
        var yData = [3, 3.6, 3.4, 3.8, 3.9, 3, 3.8, 3.5, 3.4, 3.9, 3.2, 3.1, 3.7];
        var lz = lineZoom("lineZoom", name, xData, yData); 
        var lz1 = lineZoom("lineZoom1", name, xData, yData); 
        var lz2 = lineZoom("lineZoom2", name, xData, yData);  
        var name = "市电电压";
        function getG() {
            gaugeChar("gauge1", '溶解氧', 10)
            gaugeChar("gauge2", 'PH值', 20);
            gaugeChar("gauge3", '水温', 30)
        }

        $(".map_detail_echarbox_con").resize(function () {
            lz.resize();
            lz1.resize();
            lz2.resize();
        })
        function lineZoom(ID, name, xData, yData) {
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color: ["#13AD2F"],
                grid: {
                    left: '45px',
                    right: '15px',
                    top: '10px',
                    bottom: '0px',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: "#304a5d",
                                width: 1,
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: "#666"
                        },
                        data: xData
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        splitLine: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#304a5d",
                                width: 1,
                            }
                        },
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "#1c3042",
                                width: 1,
                                type: "dashed",
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: "#fff",
                            formatter: '{value}'
                        }
                    }
                ],
                series: [
                        {
                            name: name,
                            type: 'line',
                            smooth: "true", //平滑
                            symbol:"line", //不要圆圈
                            symbolSize: 0,
                            data: yData
                        },
                ]
            };
            myChart.setOption(option, true);
            return myChart;
        }
        function gaugeChar(ID,name,value) {
            var myChart = echarts.init(document.getElementById(ID));
            var option = {

                tooltip: {
                    formatter: "{a} : {c}"
                },
                series: [
                    {
                        name:name,
                        type: 'gauge',
                        radius: '98%',
                        min: 1,
                        max: 3,
                        splitNumber: 0,
                        axisLine: {
                            lineStyle: {
                                color: [[1, '#13AD2F']],
                                width: '10',
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        pointer: {
                            length: '75%',
                            width: '4%'
                        },
                        itemStyle: {
                            normal: {
                                color: '#13AD2F'
                            }
                        },
                        title: {
                            show: true
                        },
                        detail: {
                            show: true,
                            textStyle: {
                                fontSize: 12,
                                color: '#13AD2F',
                            },
                            formatter: name+'=' + '{value}',
                            offsetCenter: [0, '88%'],


                        },
                        data: [{ value: value }]
                    }
                ]
            };
            myChart.setOption(option, true);
            return myChart;
        }
		
    },
    data() {
       return {
          　title:'',
            Info:{
               title:'实时事件',
               export:false,
            },
            table_data:[
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
                {id:'1',level:'1',name:'温度过低',remark:'#鱼塘水温，温度=16.2',alarmTime:'2018-02-01 11:20:29',relieveTime:'2108-02-01 11:20:29'},
                {id:'2',level:'2',name:'34',remark:''},
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
       showAlarm:function(){
           $(this.$refs.gis_alarm_list).css({"bottom":"0px"});
       },
       closeAlarm:function(){
           $(this.$refs.gis_alarm_list).css({"bottom":"-400px"});
       },
    },
    components:{alarmTop}
}
</script>