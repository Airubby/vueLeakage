<template>
    <div class="loncom_content">
        <div class="loncom_topnav">
            <div class="loncom_topnav_logo loncom_fl">
                <router-link to="/index">
                    <img src="static/images/logo.png">
                </router-link>
            </div>
            <ul>
                <li v-for="(item,index) in navList">
                    <router-link :to="item.url" exact v-if="index==0">
                        <em><img :src="item.icon"></em>
                        <p>{{item.name}}</p>
                    </router-link>
                    <router-link :to="item.url" v-else>
                        <em><img :src="item.icon"></em>
                        <p>{{item.name}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="loncom_con">
            <div class="loncom_con_left" ref="loncom_con_left" v-if="leftShow">
                <div class="loncom_left_navtop" @click="navClick" ref="loncom_left_navtop">
                    <i class="fa fa-bars" ref="bars"></i>
                </div>
                <div class="loncom_left_navcon">
                    <ul>
                        <li v-for="item in leftNavList">
                            <router-link :to="item.url">
                                <em><img :src="item.icon"></em>
                                <span v-if="navbtn=='close'">{{item.name}}</span>
                                <span v-if="navbtn=='open'">{{item.fullName}}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loncom_con_right" ref="loncom_con_right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    created () {
        this.loginInfo=sessionStorage.loginInfo?JSON.parse(sessionStorage.loginInfo):{};
        if(JSON.stringify(this.loginInfo) == "{}"){
            this.$message.warning("请登录系统");
            this.$router.push({path:'/login'});
            return;
        }else{
            this.navList=this.$store.state.navList;
            this.Init();   
        }
         
        
    },
    mounted() {
        
    },
    computed:{
      ...mapGetters([
        'getNavInfo'
      ])
    },
    data(){
      return {
        navbtn:'close',
        navList:[],
        leftNavList:[],
        isRouterAlive:true,  //默认view-router显示的，点击刷新用
        leftShow:true,
      }
    },
    methods:{
        Init(){
            var path=this.$route.path;
            var hasPath=false;
            for(var i=0;i<this.navList.length;i++){
                for(var j=0;j<this.navList[i].item.length;j++){
                    if(path==this.navList[i].item[j].url){
                        hasPath=true; //有子菜单
                        this.leftNavList=this.navList[i].item;
                        break;
                    }
                }
            }
            if(!hasPath){ //没有子菜单
                this.leftShow=false;
                $(this.$refs.loncom_con_right).css({"padding-left":"0"});
            }else{
                this.leftShow=true;
                if(JSON.stringify(sessionStorage.navInfo) == undefined){
                    sessionStorage.navInfo = JSON.stringify({navbtn:'close'});
                }else{
                    this.navbtn = JSON.parse(sessionStorage.navInfo).navbtn;
                }
                
            }
        },
        InitLeft:function(){
            if(this.navbtn==='close'){
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
            }else{
                $(this.$refs.loncom_con_left).css({"width":"200px"});
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
            }
        },
        navClick:function(){
            var navInfo = JSON.parse(sessionStorage.navInfo);
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
                navInfo.navbtn='close';
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
                navInfo.navbtn='open';
            }
            sessionStorage.navInfo = JSON.stringify(navInfo);
       },
    }, 
    watch:{
        getNavInfo: function(val) { 
            this.navList=val;
        },
        leftNavList:{
          handler:function(val,oldval){
              this.InitLeft();
          },
          deep: true
        }
    } 
}
</script>

