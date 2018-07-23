var rootUrl="/iSmacSite/ismacsite";
//超出滚动
function scrollCon(){
	$('.loncom_scroll_con').niceScroll({
        cursorcolor: "#ccc",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "2px",//以像素为光标边界半径
        autohidemode: true //是否隐藏滚动条
    });
}

$(window).resize(function () {
	scrollCon();
});
function numScroll(num){
    $('.numScroll'+num).niceScroll(".numScrollCon"+num,{
        cursorcolor: "#ccc",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "5px", //像素光标的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "2px",//以像素为光标边界半径
        autohidemode: true //是否隐藏滚动条
    });
}
//日期格式化
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}



function hbarChar(ID){
    var xMax = 1600;
    var dataShadow = [];
    var yData=['1号池塘','2号池塘','3号池塘','4号池塘','5号池塘','6号池塘','7号池塘'];
    for (var i = 0; i < yData.length; i++) {
        dataShadow.push(xMax);
    }

    var myChart = echarts.init(document.getElementById(ID));

    var option = {
        color: ['#C5051B','#FF1A07','#FF7B00','#FFA300'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: '{b}：{c}'
        },
        grid: {
            top: '20px',
            bottom: '20px',
            left: '15px',
            right: '5px',
            containLabel: true
        },
        legend: {
            top:'0px',
            right:'15px',
            textStyle:{
                color:"#000",
            },
            data: ['一级告警', '二级告警','三级告警','四级告警']
        },
        xAxis:  {
            type: 'category',
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
            data: yData,
        },
        yAxis: {
            
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
        },
        series: [
            // { // For shadow
            //     type: 'bar',
            //     itemStyle: {
            //         normal: {color: '#434343'}
            //     },
            //     barGap:'-100%',
            //     barCategoryGap:'0%',
            //     data: dataShadow,
            //     animation: false
            // },
            {
                name: '一级告警',
                type: 'bar',
                stack: 'all',
                barWidth: '30%',
                data: [400, 302, 301, 334, 390, 330, 400]
            },
            {
                name: '二级告警',
                type: 'bar',
                stack: 'all',
                barWidth: '30%',
                data: [120, 132, 101, 134, 90, 230, 400]
            },
            {
                name: '三级告警',
                type: 'bar',
                stack: 'all',
                barWidth: '30%',
                data: [220, 182, 191, 234, 290, 330, 400]
            },
            {
                name: '四级告警',
                type: 'bar',
                stack: 'all',
                barWidth: '30%',
                data: [150, 212, 201, 154, 190, 330, 400]
            }
        ]
    };
    myChart.setOption(option, true);
    return myChart; 
}

//首页当前告警统计
function piemoreChar(ID, xData, yData, allAlarm, color) {
    var myChart = echarts.init(document.getElementById(ID));
    var _color = ["#00DCB8", "#00E1FF", "#A3E8DE", "#579CFF"];
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

//权限管理
function serachList(){
    $(".serach_list").find("span").on("click",function(){
        if($(this).hasClass("all")){
            $(".serach_list").find("span").removeClass("active");
            $(this).addClass("active");
        }else{
            if($(".serach_list .all").hasClass("active")){
                $(".serach_list .all").removeClass("active");
            }
            if($(this).hasClass("active")){
                $(this).removeClass("active");
            }else{
                $(this).addClass("active");
            }
        }
    })
}


























