
//ajax请求没用ajax请求
function open_ajax(url, parameter, request,type, error, async) {
    type = type ? type : "Get";
    $.ajax({
        type: type,
        url: url,
        data: parameter,
        async: async ? async : true,
        cache:false,
        error: function () {
            if (error != null && error != "") {
                error();
            }
        },
        success: function (msg) {
            if (request)
                request(msg);
        }
    });
}
//获取url传递的参数
function getQueryParams(url) {
    var match,
    pl = /\+/g,  // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    query = window.location.search.substring(1);
    if (url) query = url.substr(url.indexOf("?") + 1)

    var urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
    
    return urlParams;
} 
//生成树形JSON
function getJsonTree(dataJson,parentId){
    var itemArr=[];
    for(var i=0;i<dataJson.length;i++){ 
        var node=dataJson[i];
        if(node.pid==parentId){ 
            var newNode=node;
            newNode.children=getJsonTree(dataJson,node.id);
            itemArr.push(newNode);              
        }
    }
    return itemArr;
}
//树形JSon生成list  自己定义个menuArr全局变量
// function spread(menus) {
//     for (var i=0; i < menus.length; i++ ) {
//         menu = menus[i]
//         if (menu.children) {
//             spread(menu.children)
//             delete menu.children
//         }
//         menuArr.push(menu)
//     }
// }

//超出滚动
function scrollCon(){
	
}

$(window).resize(function () {
	scrollCon();
});

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

//echarts 图
function echartLine(ID,xData,yData){
    var myChart = echarts.init(document.getElementById(ID));
    option = {
        color:["#DA632A","#33C466"],
        tooltip : {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            axisTick:{
                    show:false
                }, 
            data: xData
        },
        yAxis: {
            axisLabel:{
                formatter: '{value}'
            }
        },
        series: [{
            data: yData,
            type: 'line',
            smooth: true,
            symbol:"line", //不要圆圈
            symbolSize:0, //平滑的时候设置为0
        }]
    };
    myChart.setOption(option, true);
    return myChart;
}

// index的
function barChar(ID,xData,yData){
    var color=['#2f8fbe','#f00','#f00','#c98','#76f'];
    var myChart = echarts.init(document.getElementById(ID));
    option = {
        //color:['#2f8fbe','#f00','#09c','#c98','#76f'],
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter:'{b}：{c}'
        },
        grid: {
            top:'40px',
            bottom: '15px',
            left:'15px',
            right:'15px',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                data : xData,
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#000"
                },
                splitLine:{
                    show:false,
                },
                axisLine:{
                    lineStyle:{
                        color:"#333",
                        width:1,
                    }
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel:{
                    color:"#000"
                },
                axisTick:{
                    show:false
                },
                splitLine:{
                    show:false,
                },
                axisLine:{
                    lineStyle:{
                        color:"#333",
                        width:1,
                    }
                },
            }
        ],
        series : [
            {
                type:'bar',
                barWidth: '50%',
                itemStyle:{
                    normal:{
                        color: function(params){
                            var index_color = params.name;
                            if(index_color=="客户"){
                                return '#2f8fbe';
                            }else if(index_color=="项目") {
                                return '#0dff00';
                            }else if(index_color=="模块"){
                                return '#09c';
                            }else if(index_color=="设备"){
                                return '#fd0000';
                            }else{
                                return '#ccc'
                            }
                        } 
                    }
                },
                data:yData
            }
        ]
    };
    myChart.setOption(option, true);
    return myChart; 
}
function LineChar(ID,xData,yData,color){
    //color=["#DA632A","#f7bca0","#ffe9de"]
    var myChart = echarts.init(document.getElementById(ID));
    option = {
        color:[color[0]],
        tooltip : {
            trigger: 'axis'
        },
        grid: {
            left: '20px',
            right: '20px',
            top:'5px',
            bottom: '10px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick:{
                show:false
            }, 
            axisLine:{
                show:false,
                lineStyle:{
                    color:"#304a5d",
                    width:1,
                }
            },
            axisLabel:{
                color:"#ccc"    
            },     
            data: xData
        },
        yAxis: {
            axisTick:{
                show:false,
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:"#EAEEF1",
                    width:1,
                    type:"solid",
                }
            },
            axisLine:{
                show:false
            },
            axisLabel:{
                color:"#ccc",
                formatter: '{value}'
            }
        },
        series: [{
            data: yData,
            type: 'line',
            lineStyle:{
                width:5,
                color:'#DA632A'
            },
            smooth: true,
            symbol:"line", //不要圆圈
            symbolSize:0, //平滑的时候设置为0
            areaStyle: {normal: {color:new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: color[1]},
                    {offset: 0.99, color: color[2]}
                ]
            )}},

        }]
    };
    myChart.setOption(option, true);
    return myChart;
}
function piemoreChar(ID,xData,yData,allAlarm,color) {
    var myChart = echarts.init(document.getElementById(ID));
    var _color=["#e92f0d","#fbf320","#09c","#3ff504"];
    if(color){
        for(var i=0;i<color.length;i++){
            if(color[i]!=""){
                _color[i]=color[i];
            }
        }
    }
    var option = {
        color:_color,
        title:{
            text:"告警总数："+allAlarm,  
            top: 15,
            left:15,
            textStyle:{
                color:_color[0],
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
            textStyle:{
                color:'#000'
            },
            data:xData
        },
        series: [
            {
                type:'pie',
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
                data:yData
            }
        ]
    };
    myChart.setOption(option, true);
    return myChart; 
}

function twoLineChar(ID,xData,yData1,yData2,color1,color2,name){
    // var xData=['23','234','54'];
    // var yData1=[123,124,323]
    // var yData2=[173,324,323]
    // var name=['大大','xia']
    // color1=["#5085FF","#B5CAFE","#F4F8FF"];
    var myChart = echarts.init(document.getElementById(ID));
    var option = {
        color:[color1[0],color2[0]],
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            bottom: 5,
            textStyle:{
                color:"#ccc"
            },
            data:name
        },
        grid: {
            left: '20px',
            right: '20px',
            top:'5px',
            bottom: '40px',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:"#333",
                        width:1,
                    }
                },
                axisTick:{
                    show:false
                },                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                data :xData
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{
                    show:true,
                },
                axisLine:{
                    show:false,
                    lineStyle:{
                        color:"#333",
                        width:1,
                    }
                },
                 splitLine:{
                    show:true,
                    lineStyle:{
                        color:"#EAEEF1",
                        width:1,
                        type:"solid",
                    }
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    color:"#ccc",
					formatter: '{value}'
                }
            }
        ],
        series : [
         {
            name:name[0],
            type:'line',
            smooth:"true", 
            symbol:"line",
            symbolSize:0,
            areaStyle: {normal: {color:new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: color1[1]},
                    {offset: 0.99, color: color1[2]}
                ]
            )}},
            data:yData1
        },
        {
            name:name[1],
            type:'line',
            smooth:"true", //平滑
            symbol:"line", //不要圆圈
            symbolSize:0, //平滑的时候设置为0
            areaStyle: {normal: {color:new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: color2[1]},
                    {offset: 0.99, color: color2[2]}
                ]
            )}},
            data:yData2
        },
    ]
    };
    myChart.setOption(option, true);
    return myChart; 
}
function gaugeChar(ID,title,value,max){
    var myChart = echarts.init(document.getElementById(ID));
   var option = {
        
        tooltip : {
            formatter: "{a} : {c}"
        },
        series: [
            {
                name: 'PUE',
                type: 'gauge',
                radius:'95%',
                min:0,
                max:max,
                splitNumber:0,
                axisLine:{
                    lineStyle:{
                        color:[[value/max, new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#F8666B'},
                                        {offset: 0.99, color: '#5C72F7'}
                                    ]
                                )],[1, "#E2E2EA"]],
                        width:'10',
                    }
                },
                splitLine:{
                    show:false
                },
                axisTick:{
                    show:false
                },
                axisLabel:{
                    show:false
                },
                pointer:{
                    length:'75%',
                    width:'4%'
                },
                itemStyle:{
                    normal:{
                        color:new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#F8666B'},
                                        {offset: 0.99, color: '#5C72F7'}
                                    ]
                                )
                    }
                },
                title:{
                    show:false
                },
                detail: {
                        show: true,
						textStyle: {
							fontSize: 15,
							color:'#5E73F6',
						},
                        formatter: title+':' + '{value}',
                        offsetCenter: [0, '88%'],
                        

                    },
                data: [{value: value}]
            }
        ]
    };
    myChart.setOption(option, true);
    return myChart; 
}

//编辑时下拉框中判断编辑返回的信息在下拉信息中是否存在
function checkHasId(id,list){
    for(var i=0;i<list.length;i++){
        if(id==list[i].id){
            return list[i].id;
        }
    }
    return '';
}





























