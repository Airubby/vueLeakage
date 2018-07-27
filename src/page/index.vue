<template>
    <div class="loncom_content">
       <div class="index index_box1">
            <div class="index_top boxshow">
                <div class="loncom_fl">
                    <div class="index_top_left_title">
                        <p>
                            <i></i><span>今日数据</span>
                        </p>
                        <div id="myDate"></div>
                        <div id="week"></div>
                    </div>
                    <div class="index_top_left_box">
                        <p><i></i>池塘总数</p>
                        <span id="ConnectStationCount">11</span>
                    </div>
                    <div class="index_top_left_box">
                        <p><i></i>养殖品种数</p>
                        <span id="PowerCount">11</span>
                    </div>
                    <div class="index_top_left_box">
                        <p><i></i>健康池塘数</p>
                        <span id="BatteryCount">11</span>
                    </div>
                    <div class="index_top_left_box">
                        <p><i class="danger"></i>危险池塘数</p>
                        <span id="TemperatureCount" class="danger">11</span>
                    </div>
                </div>
                <div class="loncom_fr">
                    <div class="index_top_right_box">
                        <p><i></i>失联池塘数</p>
                        <span id="NoConnectStationCount">11</span>
                    </div>
                    <div class="index_top_right_box">
                        <p><i></i>异常池塘数</p>
                        <span id="ExceptionStationCount">11</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="index_center index_box2">
            <ul id="stateBox">
                <li>
                    <div class="index_center_box boxshow">
                        <div class="index_center_title">
                            温度状态(Top 5)
                        </div>
                        <div class="index_center_con">
                            <dl >
                                <dt>
                                    <el-row>
                                    <el-col :span="8">池塘名称</el-col>
                                    <el-col :span="8">实时值</el-col>
                                    <el-col :span="8">告警等级</el-col>
                                    </el-row>
                                </dt>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">1号池塘</el-col>
                                    <el-col :span="8" class="alarm_one_color">10℃</el-col>
                                    <el-col :span="8"><span class="alarm_one_color"><i class="fa fa-exclamation-triangle"></i>一级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">2号池塘</el-col>
                                    <el-col :span="8" class="alarm_two_color">30℃</el-col>
                                    <el-col :span="8"><span class="alarm_two_color"><i class="fa fa-exclamation-circle"></i>二级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">3号池塘</el-col>
                                    <el-col :span="8" class="alarm_three_color">20℃</el-col>
                                    <el-col :span="8"><span class="alarm_three_color"><i class="fa fa-exclamation-circle"></i>三级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">4号池塘</el-col>
                                    <el-col :span="8" class="alarm_four_color">16℃</el-col>
                                    <el-col :span="8"><span class="alarm_four_color"><i class="fa fa-exclamation-circle"></i>四级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">5号池塘</el-col>
                                    <el-col :span="8" class="alarm_normal_color">28℃</el-col>
                                    <el-col :span="8"><span class="alarm_normal_color"><i class="fa fa-check"></i>正常</span></el-col>
                                    </el-row>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="index_center_box boxshow">
                        <div class="index_center_title">
                            溶解氧状态(Top 5)
                        </div>
                        <div class="index_center_con">
                            <dl >
                                <dt>
                                    <el-row>
                                    <el-col :span="8">池塘名称</el-col>
                                    <el-col :span="8">实时值</el-col>
                                    <el-col :span="8">告警等级</el-col>
                                    </el-row>
                                </dt>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">1号池塘</el-col>
                                    <el-col :span="8" class="alarm_one_color">3mg/L</el-col>
                                    <el-col :span="8"><span class="alarm_one_color"><i class="fa fa-exclamation-triangle"></i>一级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">2号池塘</el-col>
                                    <el-col :span="8" class="alarm_two_color">4mg/L</el-col>
                                    <el-col :span="8"><span class="alarm_two_color"><i class="fa fa-exclamation-circle"></i>二级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">3号池塘</el-col>
                                    <el-col :span="8" class="alarm_three_color">5mg/L</el-col>
                                    <el-col :span="8"><span class="alarm_three_color"><i class="fa fa-exclamation-circle"></i>三级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">4号池塘</el-col>
                                    <el-col :span="8" class="alarm_four_color">6mg/L</el-col>
                                    <el-col :span="8"><span class="alarm_four_color"><i class="fa fa-exclamation-circle"></i>四级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">5号池塘</el-col>
                                    <el-col :span="8" class="alarm_normal_color">7mg/L</el-col>
                                    <el-col :span="8"><span class="alarm_normal_color"><i class="fa fa-check"></i>正常</span></el-col>
                                    </el-row>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="index_center_box boxshow" >
                        <div class="index_center_title">
                            PH值状态(Top 5)
                        </div>
                        <div class="index_center_con">
                            <dl >
                                <dt>
                                    <el-row>
                                    <el-col :span="8">池塘名称</el-col>
                                    <el-col :span="8">实时值</el-col>
                                    <el-col :span="8">告警等级</el-col>
                                    </el-row>
                                </dt>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">1号池塘</el-col>
                                    <el-col :span="8" class="alarm_one_color">PH<5 </el-col>
                                    <el-col :span="8"><span class="alarm_one_color"><i class="fa fa-exclamation-triangle"></i>一级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">2号池塘</el-col>
                                    <el-col :span="8" class="alarm_two_color">PH<6 </el-col>
                                    <el-col :span="8"><span class="alarm_two_color"><i class="fa fa-exclamation-circle"></i>二级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">3号池塘</el-col>
                                    <el-col :span="8" class="alarm_three_color">PH<7 </el-col>
                                    <el-col :span="8"><span class="alarm_three_color"><i class="fa fa-exclamation-circle"></i>三级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">4号池塘</el-col>
                                    <el-col :span="8" class="alarm_four_color">PH<8 </el-col>
                                    <el-col :span="8"><span class="alarm_four_color"><i class="fa fa-exclamation-circle"></i>四级</span></el-col>
                                    </el-row>
                                </dd>
                                <dd>
                                    <el-row>
                                    <el-col :span="8">5号池塘</el-col>
                                    <el-col :span="8" class="alarm_normal_color">PH<9 </el-col>
                                    <el-col :span="8"><span class="alarm_normal_color"><i class="fa fa-check"></i>正常</span></el-col>
                                    </el-row>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="index index_box3">
            <div class="echartbox boxshow">
                <div class="echart_left">
                    <div class="echartbox_title">
                        告警统计(按区域)
                    </div>
                    <div class="echartbox_con" id="barChar"></div>
                </div>
                <div class="echart_right">
                    <div class="echartbox_title">
                        当前告警统计
                    </div>
                    <div class="echartbox_con" id="piemoreChar"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .index{
        padding: 15px;
        box-sizing:border-box;
    }
    .index_box1{
        height: 160px;
    }
    .index_box2{
        height: 260px;
    }
    .index_box3{
        height: calc(100% - 420px);
    }
    .boxshow{
        background:#fff;
        width: 100%;
        height: 100%;
        box-shadow:0 0 6px #dadada;
        border-radius: 5px;
    }
    .index_top{
        width: 100%;
        height: 130px;
        padding: 15px;
    }
    .index_top_left_title{
        float:left;
        height: 100%;
        font-size: 16px;
        border-right:1px solid #e4e4e4;
    }
    .index_top_left_title p{
        width: 160px;
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        margin-bottom: 10px;
        color:#000;
    }
    .index_top_left_title p i{
            width: 12px;
        height: 12px;
        display: block;
        border: 3px solid #00AF5C;
        border-radius: 50%;
        float: left;
        margin: 7px 5px 0 0;
    }
    .index_top_left_title p span{
        display:block;
        float:left;
    }
    #week{
        font-size:20px;
    }
    .index_top_left_box{
        width: 147px;
        float:left;
        height: 100%;
        text-align:center;
    }
    .index_top_left_box p,
    .index_top_right_box p{
        margin: 10px 0 5px 0;
    }
    .index_top_left_box p i,
    .index_top_right_box p i{
        width: 7px;
        height: 7px;
        display:inline-block;
        border-radius: 50%;
        background:#fff;
        margin: 0 5px 0 10px;
    }
    .index_top_left_box p i{
        background:#00AF5C;
    }
    .index_top_left_box p i.danger{
        background:#C5051B;
    }
    .index_top_left_box span,
    .index_top_right_box span{
        font-size: 40px;
        font-weight:bold;
        width: 100%;
        text-align: center;
        display: block;
    }
    .index_top_left_box span{
        color:#00AF5C;
    }
    .index_top_left_box span.danger{
        color:#C5051B;
    }
    .index_top_right_box{
        width: 200px;
        height: 100px;
        float:left;
        display:block;
        background:#ccc;
        margin-left:15px;
        border-radius:5px;
        color:#fff;
    }
    .index_top_right_box:nth-of-type(1){
        background:url('/static/images/index_sl.svg') no-repeat;
    }
    .index_top_right_box:nth-of-type(2){
        background:url('/static/images/index_yc.svg') no-repeat;
    }


    .index_center{
        padding: 0 0 0 15px;
    }
    .index_center li{
        width: 33.33%;
        float:left;
        padding-right: 15px;
    }
    .index_center_box{
        padding:10px;
        min-height: 260px;
    }
    .index_center_con dt{
        border-bottom: 2px solid #d3e3ef;
        overflow:hidden;
        height: 35px;
        line-height: 35px;
    }
    .index_center_con dd{
        border-bottom: 1px solid #d3e3ef;
        overflow:hidden;
        height: 35px;
        line-height: 35px;
    }

    .index_center_con1 i{
        font-style: normal;
        width: 60px;
        margin-top: 8px;
        height: 20px;
        line-height:20px;
        text-align:center;
        color:#fff;
        background:#00cc66;
        display:block;
    }
    .index_center_con1 .alarm{
        color:#ff0000;
    }
    .index_center_con1 .alarm i{
        background: #ff0000;
        color:#fff;
    }
    .index_center_title{
        height: 30px;
        line-height:25px;
        color:#000;
    }

    .echartbox,.body_con{
        width: 100%;
        height: 100%;
    }
    .echart_left{
        width: 70%;
        float:left;
        height:100%;
    }
    .echart_right{
        width: 30%;
        float:left;
        height: 100%;
        border-left: 1px solid #eaeaea;
    }
    .echartbox_title{
        width: 100%;
        height: 35px;
        line-height:35px;
        text-indent: 15px;
        color:#000;
    }
    .echartbox_con{
        width: 100%;
        height: calc(100% - 35px);
    }
</style>
<script>
var axios = require('axios')
export default {
    created () {

        axios.get('static/config.json').then(r=>{
            console.log(r)
        });
    },
    mounted() {
         var myDate = new Date();
        var theDate=myDate.Format("yyyy年MM月dd日");
        $("#myDate").html(theDate);
        var str = "星期" + "日一二三四五六".charAt(new Date().getDay());
        $("#week").html(str);

        hbarChar("barChar")
        
        var xData=["PH值","溶解氧","水位","温度"]
        var yData=[
            { value: 5, name: "PH值" },
            { value: 5, name: "溶解氧"},
            { value: 2, name: "水位" },
            { value: 6, name: "温度"}
            ]
        var allAlarm= 18;
        piemoreChar("piemoreChar",xData,yData,allAlarm)
        

    },
    data() {
       return {
          　
       }
   },
    methods:{
       
    },
    components:{}
}
</script>