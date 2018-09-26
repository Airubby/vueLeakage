<template>
    <div class="loncom_content" style="position:relative;">
       <div id="container" style="width:100%;height:100%;"></div>
       <div class="loncom_search_box">
            <input type="text" id="search_info" placeholder="搜水厂/高水位池/节点"><span><i class="fa fa-search" id="search_btn"></i></span>
       </div>
       <div class="change_box">
            <ul>
                <li class="all active" data-name="all">全部</li>
                <li class="s" data-name="scsc"><em class="sli"></em>水厂/水池</li>
                <li class="j" data-name="jd"><em class="jli"></em>节点</li>
                <li class="b" data-name="sb"><em class="bli"></em>水表</li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
    created () {
    },
    mounted() {
        // 百度地图API功能
		var map = new BMap.Map("container");
		map.centerAndZoom(new BMap.Point(106.215136,26.04151),17); //初始化地图,设置中心点坐标和地图级别3-19
		//map.centerAndZoom("成都",15); 
		map.enableScrollWheelZoom();
    //map.addEventListener("zoomend", function(evt){
      //  this.accuracy = map.getZoom();  //获取滚动后的地图层级
    //})
        //筛选代码
        BMap.Icon.prototype.name = "";
        BMap.Icon.prototype.setName = function(name){
            this.name = name;
        }
        BMap.Icon.prototype.searchName="";
        BMap.Icon.prototype.setSearchName = function(searchName){
            this.searchName = searchName;
        }
        //最下面设置icon筛选
        //高水位池
        var s1=new BMap.Point(106.221995,26.044301);  //高水位池point
        var icon_s1=new BMap.Icon("./static/images/gaoshuiweichi.svg", new BMap.Size(42,36));
        var marker_s1=new BMap.Marker(s1,{icon:icon_s1}); // 创建标注
        map.addOverlay(marker_s1); 
        var content_s1='<div class="loncom_map_box loncom_map_gaoshuiwei">'+
                            '<div class="loncom_map_boxtop">'+
                                '<i class="fa fa-wifi"></i><span>1#高水位池</span>'+
                            '</div>'+
                            '<div class="loncom_map_boxbg">'+
                                '<p>安顺市西秀区，杨武乡，家合村</p>'+
                                '<p>联系人：周亮 15222222222</p>'+
                            '</div>'+
                            '<div class="loncom_map_boxcon">'+
                                '<p><span>水位高度</span><span>4</span><span>m</span></p>'+
                                '<p class="line"><span>供电方式</span><span>市电</span></p>'+
                            '</div>'+
                            '<div class="loncom_map_bottom"><i class="fa fa-angle-double-right"></i></div>'
                        '</div>';
        var infoBox_s1 = new BMapLib.InfoBox(map,content_s1);
        marker_s1.addEventListener("click", function(){
            infoBox_s1.open(marker_s1)
        })
        icon_s1.setSearchName("高水位池");  
        //雨棚大河水厂
        var s2=new BMap.Point(106.203907,26.042816);  
        var icon_s2=new BMap.Icon("./static/images/shuichang.svg", new BMap.Size(68,48));
        var marker_s2=new BMap.Marker(s2,{icon:icon_s2}); // 创建标注
        map.addOverlay(marker_s2); 
        var content_s2='<div class="loncom_map_box loncom_map_shuichang">'+
                            '<div class="loncom_map_boxtop">'+
                                '<i class="fa fa-wifi"></i><span>雨棚大河水厂</span>'+
                            '</div>'+
                            '<div class="loncom_map_boxbg">'+
                                '<p>安顺市西秀区，杨武乡，家合村</p>'+
                                '<p>联系人：雷文正 15222222222</p>'+
                            '</div>'+
                            '<div class="loncom_map_boxcon loncom_map_boxcondetail">'+
                                '<p><span>PH</span><span>6.82</span><span>/</span></p>'+
                                '<p><span>浊度</span><span>0.058</span><span>NTU</span></p>'+
                                '<p><span>导电率</span><span>100</span><span>S/m</span></p>'+
                                '<p><span>溶解氧</span><span>100</span><span>mg/L</span></p>'+
                                '<p><span>温度</span><span>20</span><span>℃</span></p>'+
                                '<p class="line"><span>供电方式</span><span>市电</span></p>'+
                            '</div>'+
                            '<div class="loncom_map_bottom"><i class="fa fa-angle-double-right"></i></div>'
                        '</div>';
        var infoBox_s2 = new BMapLib.InfoBox(map,content_s2);
        marker_s2.addEventListener("click", function(){
            infoBox_s2.open(marker_s2)
        })
        //水表
        var icon_sb=new BMap.Icon("./static/images/shuibiao.svg", new BMap.Size(20,20));
        var sb1=new BMap.Point(106.220108,26.042747); 
        var marker_sb1=new BMap.Marker(sb1,{icon:icon_sb}); // 创建标注
        map.addOverlay(marker_sb1); 
        var sb2=new BMap.Point(106.210835,26.024896); 
        var marker_sb2=new BMap.Marker(sb2,{icon:icon_sb}); // 创建标注
        map.addOverlay(marker_sb2); 
        var sb3=new BMap.Point(106.210955,26.023476); 
        var marker_sb3=new BMap.Marker(sb3,{icon:icon_sb}); // 创建标注
        map.addOverlay(marker_sb3); 
        //水闸
        var icon_sz=new BMap.Icon("./static/images/shuizha.svg", new BMap.Size(14,12),{anchor: new BMap.Size(7, 6)});
        var sz1=new BMap.Point(106.220831,26.043003); 
        var marker_sz1=new BMap.Marker(sz1,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz1); 
        var sz2=new BMap.Point(106.219637,26.042463); 
        var marker_sz2=new BMap.Marker(sz2,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz2); 
        var sz3=new BMap.Point(106.21594,26.041745); 
        var marker_sz3=new BMap.Marker(sz3,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz3); 
        var sz4=new BMap.Point(106.214363,26.041059); 
        var marker_sz4=new BMap.Marker(sz4,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz4); 
        
        var sz5=new BMap.Point(106.212437,26.03845); 
        var marker_sz5=new BMap.Marker(sz5,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz5); 
        var sz6=new BMap.Point(106.21236,26.036592); 
        var marker_sz6=new BMap.Marker(sz6,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz6); 
        var sz7=new BMap.Point(106.211826,26.035019); 
        var marker_sz7=new BMap.Marker(sz7,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz7); 
        var sz8=new BMap.Point(106.212077,26.033946); 
        var marker_sz8=new BMap.Marker(sz8,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz8); 
        var sz9=new BMap.Point(106.211875,26.033244); 
        var marker_sz9=new BMap.Marker(sz9,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz9); 
        var sz10=new BMap.Point(106.212032,26.030971); 
        var marker_sz10=new BMap.Marker(sz10,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz10); 
        var sz11=new BMap.Point(106.212055,26.029178); 
        var marker_sz11=new BMap.Marker(sz11,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz11); 
        var sz12=new BMap.Point(106.212437,26.027777); 
        var marker_sz12=new BMap.Marker(sz12,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz12); 
        var sz13=new BMap.Point(106.211696,26.026337); 
        var marker_sz13=new BMap.Marker(sz13,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz13); 
        var sz14=new BMap.Point(106.211134,26.025517); 
        var marker_sz14=new BMap.Marker(sz14,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz14); 
        var sz15=new BMap.Point(106.210935,26.024396); 
        var marker_sz15=new BMap.Marker(sz15,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz15); 
        var sz16=new BMap.Point(106.210935,26.023676); 
        var marker_sz16=new BMap.Marker(sz16,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_sz16); 
        
        //节点
        var jd1=new BMap.Point(106.215136,26.04151);  
        var icon_jd1=new BMap.Icon("./static/images/jd1_normal.svg", new BMap.Size(30,40),{
            //offset: new BMap.Size(0, -20), // 指定大小
            anchor: new BMap.Size(15, 40),
            //imageOffset: new BMap.Size(0, -10) // 设置图片偏移
        });
        var marker_jd1=new BMap.Marker(jd1,{icon:icon_jd1}); // 创建标注
        map.addOverlay(marker_jd1); 
        var content_jd1='<div class="loncom_map_samllbox">'+
                            '<p>#1节点高程</p>'+
                            '<p>/</p>'+
                        '</div>';
        var infoBox_jd1 = new BMapLib.InfoBox(map,content_jd1);
        marker_jd1.addEventListener("click", function(){
            infoBox_jd1.open(marker_jd1)
        })
        var jd2=new BMap.Point(106.21245,26.037817);  
        var icon_jd2=new BMap.Icon("./static/images/jd2_normal.svg", new BMap.Size(30,40),{anchor: new BMap.Size(15, 40)});
        var marker_jd2=new BMap.Marker(jd2,{icon:icon_jd2}); // 创建标注
        map.addOverlay(marker_jd2); 
        var content_jd2='<div class="loncom_map_samllbox">'+
                            '<p>#2节点高程</p>'+
                            '<p>1197.0m</p>'+
                        '</div>';
        var infoBox_jd2 = new BMapLib.InfoBox(map,content_jd2);
        marker_jd2.addEventListener("click", function(){
            infoBox_jd2.open(marker_jd2)
        })
        var jd3=new BMap.Point(106.211987,26.034453);  
        var icon_jd3=new BMap.Icon("./static/images/jd3_normal.svg", new BMap.Size(30,40),{
            anchor: new BMap.Size(15, 40) //设置标注点在线上
        });
        var marker_jd3=new BMap.Marker(jd3,{icon:icon_jd3}); // 创建标注
        map.addOverlay(marker_jd3); 
        var content_jd3='<div class="loncom_map_samllbox">'+
                            '<p>#3节点高程</p>'+
                            '<p>/</p>'+
                        '</div>';
        var infoBox_jd3 = new BMapLib.InfoBox(map,content_jd3);
        marker_jd3.addEventListener("click", function(){
            infoBox_jd3.open(marker_jd3)
        })
        var jd4=new BMap.Point(106.211817,26.031621);  
        var icon_jd4=new BMap.Icon("./static/images/jd4_alarm.svg", new BMap.Size(30,40),{
            anchor: new BMap.Size(15, 40),
        });
        var marker_jd4=new BMap.Marker(jd4,{icon:icon_jd4}); // 创建标注
        map.addOverlay(marker_jd4); 
        var content_jd4='<div class="loncom_map_samllbox loncom_map_samllbox_alarm">'+
                            '<p>#4节点高程</p>'+
                            '<p>1197.0m</p>'+
                        '</div>';
        var infoBox_jd4 = new BMapLib.InfoBox(map,content_jd4);
        marker_jd4.addEventListener("click", function(){
            infoBox_jd4.open(marker_jd4)
        })
        icon_jd4.setSearchName("4节点");  
        var jd5=new BMap.Point(106.212302,26.02837);  
        var icon_jd5=new BMap.Icon("./static/images/jd5_normal.svg", new BMap.Size(30,40),{
            anchor: new BMap.Size(15, 40),
        });
        var marker_jd5=new BMap.Marker(jd5,{icon:icon_jd5}); // 创建标注
        map.addOverlay(marker_jd5); 
        var content_jd5='<div class="loncom_map_samllbox">'+
                            '<p>#5节点高程</p>'+
                            '<p>1197.0m</p>'+
                        '</div>';
        var infoBox_jd5 = new BMapLib.InfoBox(map,content_jd5);
        marker_jd5.addEventListener("click", function(){
            infoBox_jd5.open(marker_jd5)
        })
        var jd6=new BMap.Point(106.211166,26.025874);  
        var icon_jd6=new BMap.Icon("./static/images/jd6_alarm.svg", new BMap.Size(30,40),{anchor: new BMap.Size(15, 40)});
        var marker_jd6=new BMap.Marker(jd6,{icon:icon_jd6}); // 创建标注
        map.addOverlay(marker_jd6); 
        var content_jd6='<div class="loncom_map_samllbox loncom_map_samllbox_alarm">'+
                            '<p>#6节点高程</p>'+
                            '<p>1197.0m</p>'+
                        '</div>';
        var infoBox_jd6 = new BMapLib.InfoBox(map,content_jd6);
        marker_jd6.addEventListener("click", function(){
            infoBox_jd6.open(marker_jd6)
        })
        var jd7=new BMap.Point(106.210865,26.024096);  
        var icon_jd7=new BMap.Icon("./static/images/jd7_normal.svg", new BMap.Size(30,40),{anchor: new BMap.Size(15, 40)});
        var marker_jd7=new BMap.Marker(jd7,{icon:icon_jd7}); // 创建标注
        map.addOverlay(marker_jd7); 
        var content_jd7='<div class="loncom_map_samllbox">'+
                            '<p>#7节点高程</p>'+
                            '<p>1197.0m</p>'+
                        '</div>';
        var infoBox_jd7 = new BMapLib.InfoBox(map,content_jd7);
        marker_jd7.addEventListener("click", function(){
            infoBox_jd7.open(marker_jd7)
        })
        //地标
        var icon_db=new BMap.Icon("./static/images/dibiao.svg", new BMap.Size(12,12),{anchor:new BMap.Size(6,6)});
        var db1=new BMap.Point(106.212679,26.038957); 
        var marker_db1=new BMap.Marker(db1,{icon:icon_db}); // 创建标注
        map.addOverlay(marker_db1); 
        var db2=new BMap.Point(106.211943,26.035265); 
        var marker_db2=new BMap.Marker(db2,{icon:icon_db}); // 创建标注
        map.addOverlay(marker_db2); 
        var db3=new BMap.Point(106.211857,26.033633); 
        var marker_db3=new BMap.Marker(db3,{icon:icon_db}); // 创建标注
        map.addOverlay(marker_db3); 
        
        var db4=new BMap.Point(106.212037,26.029989); 
        var marker_db4=new BMap.Marker(db4,{icon:icon_db}); // 创建标注
        map.addOverlay(marker_db4); 
        
        var db5=new BMap.Point(106.212257,26.027238); 
        var marker_db5=new BMap.Marker(db5,{icon:icon_db}); // 创建标注
        map.addOverlay(marker_db5); 
        var db6=new BMap.Point(106.210943,26.025176); 
        var marker_db6=new BMap.Marker(db6,{icon:icon_db}); // 创建标注
        map.addOverlay(marker_db6); 
        var db7=new BMap.Point(106.211121,26.022092); 
        var marker_db7=new BMap.Marker(db7,{icon:icon_db}); // 创建标注
        map.addOverlay(marker_db7); 
        //连线
        
        var points=[
            s1,sz1,sb1,sz2,sz3,jd1,sz4,db1,sz5,jd2,sz6,db2,sz7,jd3,sz8,db3,sz9,jd4,sz10,db4,sz11,jd5,sz12,db5,sz13,jd6,sz14,db6,sb2,sz15,jd7,sz16,
            sb3,db7
        ];
        // var curve = new BMapLib.CurveLine(points, {strokeColor:"#328e3b", strokeWeight:4, strokeOpacity:1}); //创建弧线对象
        // map.addOverlay(curve);
        var polyline =new BMap.Polyline(points, {
            enableEditing: false,//是否启用线编辑，默认为false
            enableClicking: true,//是否响应点击事件，默认为true
            //icons:[icons],
            strokeWeight:'4',//折线的宽度，以像素为单位
            strokeOpacity: 1,//折线的透明度，取值范围0 - 1
            strokeColor:"#328e3b" //折线颜色
            });
        map.addOverlay(polyline);          //增加折线
        var points_alarm=[jd4,sz10,db4,sz11,jd5];
        // var curve_alarm = new BMapLib.CurveLine(points_alarm, {strokeColor:"#940000", strokeWeight:4, strokeOpacity:1}); //创建弧线对象
        // map.addOverlay(curve_alarm);
        var polyline_alarm =new BMap.Polyline(points_alarm, {
            enableEditing: false,//是否启用线编辑，默认为false
            enableClicking: true,//是否响应点击事件，默认为true
            //icons:[icons],
            strokeWeight:'4',//折线的宽度，以像素为单位
            strokeOpacity: 1,//折线的透明度，取值范围0 - 1
            strokeColor:"#940000" //折线颜色
            });
        map.addOverlay(polyline_alarm);          //增加折线
        var points_warning=[jd6,sz14,db6,sb2,sz15,jd7];
        // var curve_warning = new BMapLib.CurveLine(points_warning, {strokeColor:"#d95600", strokeWeight:4, strokeOpacity:1}); //创建弧线对象
        // map.addOverlay(curve_warning);
        var polyline_warning =new BMap.Polyline(points_warning, {
            enableEditing: false,//是否启用线编辑，默认为false
            enableClicking: true,//是否响应点击事件，默认为true
            //icons:[icons],
            strokeWeight:'4',//折线的宽度，以像素为单位
            strokeOpacity: 1,//折线的透明度，取值范围0 - 1
            strokeColor:"#d95600" //折线颜色
            });
        map.addOverlay(polyline_warning);          //增加折线
        //上面的路径
        var szt1=new BMap.Point(106.221015,26.043801); 
        var wd1=new BMap.Point(106.217297,26.04263); 
        var wd2=new BMap.Point(106.216815,26.042315); 
        var wd3=new BMap.Point(106.215126,26.042124); 
        var wd4=new BMap.Point(106.214371,26.042405); 
        var wd5=new BMap.Point(106.212821,26.042345); 
        var wd6=new BMap.Point(106.211604,26.041763); 
        var wd7=new BMap.Point(106.210004,26.041763); 
        var marker_szt1=new BMap.Marker(szt1,{icon:icon_sz}); // 创建标注
        map.addOverlay(marker_szt1);
        var points1=[s1,szt1,wd1,wd2,wd3,wd4,wd5,wd6,wd7,s2];
        // var curve1 = new BMapLib.CurveLine(points1, {strokeColor:"#00a0e9", strokeWeight:8, strokeOpacity:1}); //创建弧线对象
        // map.addOverlay(curve1);
        var polyline1 =new BMap.Polyline(points1, {
            enableEditing: false,//是否启用线编辑，默认为false
            enableClicking: true,//是否响应点击事件，默认为true
            //icons:[icons],
            strokeWeight:'8',//折线的宽度，以像素为单位
            strokeOpacity: 1,//折线的透明度，取值范围0 - 1
            strokeColor:"#00a0e9" //折线颜色
            });
        map.addOverlay(polyline1);          //增加折线
        
        //设置icon筛选
        icon_s1.setName("scsc");  //水厂水池
        icon_s2.setName("scsc");
        icon_jd1.setName("jd");  //节点
        icon_jd2.setName("jd");
        icon_jd3.setName("jd");
        icon_jd4.setName("jd");
        icon_jd5.setName("jd");
        icon_jd6.setName("jd");
        icon_jd7.setName("jd");
        icon_sb.setName("sb");  //水表
        var allmap = map.getOverlays();
        //头部切换
        $(".change_box").find("li").on("click", function () {
            $(this).siblings("li").removeClass("active");
            $(this).addClass("active");
            var _name=$(this).data("name");
            console.log(allmap)
            if(_name=="all"){
                for(var i=0;i<allmap.length;i++){
                    if(allmap[i].toString() == "[object Marker]"){  //要是marker的才可以
                        allmap[i].show()
                    }
                }
            }else{
                for(var i=0;i<allmap.length;i++){
                    if(allmap[i].toString() == "[object Marker]"){  //要是marker的才可以
                        if(allmap[i].z.uj.name == _name){
                            allmap[i].show();
                        }else{
                            allmap[i].hide();
                        }
                    }
                }
            }
            
        })
        //搜索
        $("#search_btn").on("click",function(){
            var _searchName=$("#search_info").val();
            console.log(_searchName)
            console.log(allmap)
            for(var i=0;i<allmap.length;i++){
                if(allmap[i].toString() == "[object Marker]"){
                    if(allmap[i].z.uj.searchName==_searchName){
                        map.centerAndZoom(new BMap.Point(allmap[i].point.lng,allmap[i].point.lat),19); 
                    }
                }
            }
            // if($("#search_info").val()=="4节点"){
            //     console.log(1)
            //     map.centerAndZoom(new BMap.Point(106.211817,26.031621),19); 
            //     infoBox_jd4.open(marker_jd4)
            // }
        })
        document.onkeyup = function (event) {
            if (event.keyCode == 13) {
                
            }
        }
        
        
	
    },
    data() {
       return {
          　content:'ldflafslf'
       }
   },
    methods:{
       
    },
    components:{}
}
</script>
