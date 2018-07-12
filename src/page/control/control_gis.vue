<template>
    <div class="loncom_content">
       <controlTop></controlTop>
       <div class="gis">
            <div id="container" class="loncom_content"></div>
            <div class="gis_bottom" ref="bottom_alarm">

            </div>
       </div>
    </div>
</template>

<style>
    .gis{
        width:100%;
        position:relative;
        height: calc(100% - 40px);
    }
    .loncom_map_box{
        min-width: 385px;
        height: auto;
        overflow: hidden;
        box-shadow: 1px 1px 3px #ccc;
        background: #fff;
        margin-bottom: 25px;
    }
    .loncom_map_boxtop {
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #12AE67;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
        border-bottom: 1px solid #fff;
    }
    .loncom_map_boxtop em{
        font-size: 12px;
        margin-left: 5px;
        cursor:pointer;
    }
    .loncom_map_boxinfo {
        width: 100%;
        height: 100px;
        background: #12AE67;
        padding: 10px;
        color: #fff;
        font-size: 12px;
        line-height: 25px;
    }
    .loncom_map_boxinfo .img{
        width: 120px;
        height:auto;
        float:left;
    }
    .loncom_map_boxinfo .img img{
        width: 100%;
        max-height: 100px;
    }
    .loncom_map_boxinfo .info{
        width:calc(100% - 200px);
        float:left;
        padding-left: 20px;
    }
    .loncom_map_boxinfo .video{
        width: 80px;
        height:80px;
        float:left;
    }
    .loncom_map_boxinfo .video img{
        max-width: 80px;
        max-height: 80px;
    }
    .loncom_map_boxcon {
        padding: 10px;
        font-size: 12px;
    }
    .loncom_map_coninfo{
        padding:15px 20px;
        overflow: hidden;
        line-height:24px;
        cursor:pointer;
    }
    .loncom_map_coninfo p{
        width:100%;
        height:24px;
        background:#f00;
        color:#fff;
        margin: 10px 0;
        text-indent: 10px;
        border-radius: 3px;
        font-size: 12px;
    }
    .loncom_map_coninfo p.one{
        background:#C5051B;
    }
    .loncom_map_coninfo p.two{
        background:#FF1A07;
    }
    .loncom_map_coninfo p.three{
        background:#FF7B00;
    }
    .loncom_map_coninfo p.four{
        background:#FFA300;
    }

    .gis_bottom{
        width: 100%;
        height: 350px;
        position: absolute;
        background:#fff;
        bottom:-350px;
        transition: all .2s linear;
    }

</style>
<script>
import controlTop from '@/components/control_top.vue'
export default {
    beforeCreate(){
    },
    created () {
    },
    beforeMount(){
        function show(){

        }
    },
    mounted() {
        var _this=this;
        // 百度地图API功能
            var map = new BMap.Map("container");
            //map.centerAndZoom(new BMap.Point(119.045403, 31.69525), 13); //初始化地图,设置中心点坐标和地图级别3-19
            map.centerAndZoom("海南",9); 
            map.enableScrollWheelZoom();
            
            //去掉地铁线
            map.setMapStyle({
                styleJson: [
                    {
                        "featureType": "subway",
                        "elementType": "all",
                        "stylers": {
                            "visibility": "off"
                        }
                    }
                ]
            });

            //筛选代码
            BMap.Icon.prototype.name = "";
            BMap.Icon.prototype.setName = function (name) {
                this.name = name;
            }
            BMap.Icon.prototype.searchName = "";
            BMap.Icon.prototype.setSearchName = function (searchName) {
                this.searchName = searchName;
            }
            var searchType = "";
            var initRows=[];//赛选初始化用
            var controllerRows = [];
          
            init()
            function init() {
                var info = [{
                    id: '123',
                    name: '海南养殖基地',
                    State: "3",
                    lng: '110.68789',
                    lat: '19.94395',
                }]
                for (var i = 0; i < info.length; i++) {
                    var iconurl = "";
                    if (info[i].State == "1") { //故障
                        iconurl = new BMap.Icon("/static/images/jz_warning.svg", new BMap.Size(38, 40));
                    } else if (info[i].State == "2") { //失联
                        iconurl = new BMap.Icon("/static/images/jz_lost.svg", new BMap.Size(38, 40));
                    } else if (info[i].State == "3") { //正常
                        iconurl = new BMap.Icon("/static/images/jz_normal.svg", new BMap.Size(38, 40));
                    }

                    var point = new BMap.Point(info[i].lng, info[i].lat);
                    var marker = new BMap.Marker(point, { icon: iconurl });
                    map.addOverlay(marker);
                    addClickHandler(marker, info[i].State,info[i].id)
                    iconurl.setSearchName(info[i].name); //名称
                }

                var allmap = map.getOverlays();
        

            }
            function addClickHandler(jzMarker, State,ID) {
                var info = {
                    id: '123',
                    name: '池塘一',
                    State: "3",
                    lng: '110.68789',
                    lat: '19.94395',
                    yuanqu: { mianji: '100㎡', img: '/static/images/login_bg.jpg',chitang:'20个' }
                }
                var content = '';
                console.log(_this.showAlarm)
                var incontent = '<div class="loncom_map_boxtop">' +
                                '<i style="margin:0 5px 0 10px;" class="fa fa-wifi"></i><span>' + info.name + '<em onclick="enterGZ(\'' + info.id + '\')">告警详情</em></span>' +
                            '</div>' +
                            '<div class="loncom_map_boxinfo">' +
                                '<div class="img"><img src="'+info.yuanqu.img+'"></div>'+
                                '<div class="info">'+
                                    '<p>基地面积：<span>'+info.yuanqu.mianji+'</span></p>'+
                                    '<p>池塘数：<span>'+info.yuanqu.chitang+'</span></p>'+
                                '</div>'+
                                '<div class="video">'+
                                    '<img src="/static/images/shiping.png">'+
                                '</div>'+
                            '</div>'+
                            '<div class="loncom_map_coninfo" onclick="show()">'+
                                '<p class="one">一级告警：<span>10条</span></p>'+
                                '<p class="two">二级告警：<span>10条</span></p>'+
                                '<p class="three">三级告警：<span>10条</span></p>'+
                                '<p class="four">四级告警：<span>10条</span></p>'+
                            '</div>';
                if (State == "1") { //故障
                    content = '<div class="loncom_map_box loncom_map_box_warning">' + incontent + '</div>';
                } else if (State == "2") { //失联
                    content = '<div class="loncom_map_box loncom_map_box_lost">' + incontent + '</div>';
                } else if (State == "3") { //正常
                    content = '<div class="loncom_map_box">' + incontent + '</div>';
                }
                var infoBox = new BMapLib.InfoBox(map, content);

                jzMarker.addEventListener("click", function () {
                    infoBox.open(this)
                })
                $(".loncom_map_coninfo").on("click",function(){
                    console.log(12312312231231231223123123123213)
                })

                
            }

            

            function showAlarm1(){
                console.log(2)
            }

            function enterDetail(id) {
                
                top.layer.open({
                    type: 2,
                    title: "详情",
                    maxmin: false,
                    shadeClose: true, //点击遮罩关闭层
                    area: ['1000px', '700px'],
                    iconUrl: "/static/images/kong.png",
                    content: "../../view/video.hisvideo?id="+id,
                    yes: function (index, layer) {
                    },

                    cancel: function (index) {

                    },
                    end: function (layer, index) {

                    }
                });
            }
            function enterGZ(id) {
                top.layer.open({
                    type: 2,
                    title: "告警记录",
                    maxmin: false,
                    shadeClose: true, //点击遮罩关闭层
                    area: ['1000px', '400px'],
                    iconUrl: "/static/images/kong.png",
                    content: "../../view/video.linkage?id="+id,
                    yes: function (index, layer) {
                    },

                    cancel: function (index) {

                    },
                    end: function (layer, index) {

                    }
                });
            }

            function enterVideo(id) {
                var id = "201803300949102548123";
                top.layer.open({
                    type: 2,
                    title: "视频监控",
                    maxmin: false,
                    shadeClose: true, //点击遮罩关闭层
                    area: ['1000px', '600px'],
                    iconUrl: "/static/images/kong.png",
                    content: "../../view/video.hwvideo?id=" + id,
                    yes: function (index, layer) {

                    },
                });
            }

    },
    data() {
       return {
          　
       }
   },
    methods:{
        showAlarm:function(){
            console.log(123)
             $(this.$refs.bottom_alarm).css({
                "bottom":"0px",
                "transition":"all 0.4s ease-in"
            });
        }   
    },
    components:{controlTop}
}
</script>