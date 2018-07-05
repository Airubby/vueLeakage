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
                        <p><i></i>危险池塘数</p>
                        <span id="TemperatureCount">11</span>
                    </div>
                </div>
                <div class="loncom_fr">
                    <div class="index_top_right_box">
                        <p><i></i>废弃池塘数</p>
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
                                <dt id="tempState">
                                    <span>&nbsp;</span><span>池塘名称</span><span>当前值(℃)</span>
                                </dt>
                                <dd>
                                    <span>1</span><span>宋旗</span><span>34.6</span>
                                </dd>
                                <dd>
                                    <span>2</span><span>幺铺</span><span>34.2</span>
                                </dd>
                                <dd>
                                    <span>3</span><span>宁谷</span><span class="alarm">33.5</span>
                                </dd>
                                <dd>
                                    <span>4</span><span>双堡</span><span>32.4</span>
                                </dd>
                                <dd>
                                    <span>5</span><span>大西桥</span><span>31.7</span>
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
                            <dl>
                                <dt id="tempState">
                                    <span>&nbsp;</span><span>池塘名称</span><span>当前值(℃)</span>
                                </dt>
                                <dd>
                                    <span>1</span><span>宋旗</span><span>34.6</span>
                                </dd>
                                <dd>
                                    <span>2</span><span>幺铺</span><span>34.2</span>
                                </dd>
                                <dd>
                                    <span>3</span><span>宁谷</span><span class="alarm">33.5</span>
                                </dd>
                                <dd>
                                    <span>4</span><span>双堡</span><span>32.4</span>
                                </dd>
                                <dd>
                                    <span>5</span><span>大西桥</span><span>31.7</span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="index_center_box boxshow">
                        <div class="index_center_title">
                            氨氮值状态
                        </div>
                        <div class="index_center_con index_center_con1">
                            <dl>
                                <dt>
                                    <span>&nbsp;</span><span>池塘名称</span><span>状态</span><span>说明</span>
                                </dt>
                                <dd>
                                    <span>1</span><span>宋旗镇</span><span class="alarm"><i>异常</i></span><span class="alarm">市电停电</span>
                                </dd>
                                <dd>
                                    <span>2</span><span>幺铺镇</span><span class="alarm"><i>异常</i></span><span class="alarm">市电停电</span>
                                </dd>
                                <dd>
                                    <span>3</span><span>宁谷镇</span><span><i>正常</i></span><span>运行稳定</span>
                                </dd>
                                <dd>
                                    <span>4</span><span>双堡镇</span><span><i>正常</i></span><span>运行稳定</span>
                                </dd>
                                <dd>
                                    <span>5</span><span>大西桥镇</span><span><i>正常</i></span><span>运行稳定</span>
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
.index_center_con dl span{
    float:left;
}
.index_center_con dl span:nth-of-type(1){
    width: 10%;
    text-align:center;
}
.index_center_con dl span:nth-of-type(2),
.index_center_con dl span:nth-of-type(3){
    width: 45%;
}
.index_center_con1 dl span:nth-of-type(2),
.index_center_con1 dl span:nth-of-type(3),
.index_center_con1 dl span:nth-of-type(4){
    width: 30%;
}
.index_center_con dd span:nth-of-type(3){
    color:#00cc66;
}
.index_center_con dd span.alarm{
    color:#ff0000;
}
.index_center_con dd span.nullvalue i{
     color:#666;
     background:#fff;
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
export default {
    created () {
        
    },
    mounted() {
         var myDate = new Date();
        var theDate=myDate.Format("yyyy年MM月dd日");
        $("#myDate").html(theDate);
        var str = "星期" + "日一二三四五六".charAt(new Date().getDay());
        $("#week").html(str);

        barCharSD("barChar")
        function barCharSD(ID) {
            var yData = ['南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市','镇江市','泰州市','宿迁市'];
            var myChart = echarts.init(document.getElementById(ID));
            var option = {
                color: ['#558ed5'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    formatter: '{b}：{c}'
                },
                grid: {
                    top: '10px',
                    bottom: '30px',
                    left: '15px',
                    right: '5px',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: yData,
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: "#000"
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#666",
                                width: 1,
                            }
                        },
                        axisLabel: {
                            interval: 0,
                            rotate: -50,
                            color: "#000"
                        },
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLabel: {
                            color: "#ccc"
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false,
                        },
                        axisLine: {
                            lineStyle: {
                                color: "#666",
                                width: 1,
                            }
                        },
                    }
                ],
                series: [
                    {
                        type: 'bar',
                        barWidth: '50%',
                        data: [10, 8, 14, 34, 29, 33, 45, 30, 25,23,45,66,33]
                    }
                ]
            };
            myChart.setOption(option, true);
            return myChart;
        }

        var xData=["PH值","氨氮值"]
        var yData=[{ value: 2, name: "PH值" },{ value: 8, name: "氨氮值" }]
        var allAlarm= 10;
        piemoreChar("piemoreChar",xData,yData,allAlarm)
        function piemoreChar(ID, xData, yData, allAlarm, color) {
            var myChart = echarts.init(document.getElementById(ID));
            var _color = ["#e92f0d", "#fbf320", "#09c", "#3ff504", "#33577b", "#399bff", "#bfd5ec", "#e0ebf5"];
            if (color) {
                for (var i = 0; i < color.length; i++) {
                    if (color[i] != "") {
                        _color[i] = color[i];
                    }
                }
            }
            var option = {
                color: _color,
                title: {
                    text: "告警总数：" + allAlarm,
                    top: 15,
                    left: 15,
                    textStyle: {
                        color: _color[0],
                    },
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{b}: {c} ({d}%)"
                },
                legend: {
                    y: 'center',
                    orient: 'vertical',
                    x: '20px',
                    textStyle: {
                        color: '#000'
                    },
                    data: xData
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['70%', '80%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: false,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: yData
                    }
                ]
            };
            myChart.setOption(option, true);
            return myChart;
        }


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