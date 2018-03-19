<template>
    <div class="loncom_content">
        <NavInfo></NavInfo>
        <div class="loncom_con">
            <div class="loncom_con_left" ref="loncom_con_left">
                <div class="loncom_left_navtop" @click="navClick" ref="loncom_left_navtop">
                    <i class="fa fa-bars" ref="bars"></i>
                </div>
                <div class="loncom_left_navcon">
                    <ul>
                        <li>
                            <router-link to="/realControl/gis">
                                <em><img src="static/images/gis.png"></em>
                                <span>GIS</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/realControl/listView">
                                <em><img src="static/images/gis.png"></em>
                                <span>列表视图</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loncom_con_right">
                <router-view></router-view>
            </div>
        </div>
        
    </div>
</template>


<script>
import LeftNavInfo from '../components/leftNavInfo.vue'
export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
       return {
          　left_nav_info: [
　　　　　　　　　　{title:'GIS',url:'home.png',loncom_active:true},
　　　　　　　　　　{title:'列表视图',url:'home.png',loncom_active:false},
　　　　　　　],
            navbtn:'close'
       }
   },
    methods:{
       navClick:function(){
            if(this.navbtn=='open'){
                $(this.$refs.loncom_con_left).css("width","60px");
                $(this.$refs.loncom_con_right).css({
                    "padding-left":"60px",
                });
                $(this.$refs.bars).css({
                    'transform':'rotate(0deg)'
                })
                $(".loncom_left_navcon").find("span").css({
                    "display":"block",
                    "text-align":'center'
                });
                this.navbtn='close';
            }else{
                $(this.$refs.loncom_con_left).css("width","200px");
                $(this.$refs.loncom_con_right).css({
                    "padding-left":"200px",
                });
                $(this.$refs.bars).css({
                    'transform':'rotate(90deg)'
                })
                $(".loncom_left_navcon").find("span").css({
                    "display":"inline-block",
                    "text-align":'left'
                });
                this.navbtn='open';
            }
       },
    },
    components:{LeftNavInfo}
}
</script>
