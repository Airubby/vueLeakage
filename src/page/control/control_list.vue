<template>
    <div class="loncom_content">
       <div class="loncom_public_top">
            <div class="search loncom_fl">
                <el-input placeholder="请输入池塘名称" v-model="searchInfo" size="mini">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                </el-input>
            </div>
            <div class="gis_sort loncom_fr">
                <ul>
                    <li class="active" data-name="all">全部</li>
                    <li class="warning" data-name="warning"><em></em>危险池塘</li>
                    <li class="lost" data-name="lost"><em></em>废弃池塘</li>
                    <li class="normal" data-name="normal"><em></em>健康池塘</li>
                </ul>
            </div>
        </div>
        <div class="loncom_public_con loncom_scroll_con">
            <ul class="list_ul">
                <li v-if="show=='all'||show=='normal'">
                    <div class="list_con" @click="detail">
                        <div class="list_con_title">#池塘一</div>
                        <div class="list_content">
                            <div class="list_content_left">
                                <p>监控状态：<span class="state">正常</span></p>
                                <p>池塘面积：<span>100㎡</span></p>
                                <p>物种：<span>花鳗、草鱼、鲢鱼</span></p>
                            </div>
                            <div class="list_content_right">
                                <img src="static/images/login_bg.jpg">
                            </div>
                        </div>
                    </div>
                </li>
                <li v-if="show=='all'||show=='lost'">
                    <div class="list_con list_con_lost" @click="detail">
                        <div class="list_con_title">#池塘二</div>
                        <div class="list_content">
                            <div class="list_content_left">
                                <p>监控状态：<span class="state">废弃</span></p>
                                <p>池塘面积：<span>100㎡</span></p>
                                <p>物种：<span>花鳗、草鱼、鲢鱼</span></p>
                            </div>
                            <div class="list_content_right">
                                <img src="static/images/login_bg.jpg">
                            </div>
                        </div>
                    </div>
                </li>
                <li v-if="show=='all'||show=='warning'">
                    <div class="list_con list_con_warning" @click="detail">
                        <div class="list_con_title">#池塘三</div>
                        <div class="list_content">
                            <div class="list_content_left">
                                <p>监控状态：<span class="state">异常</span></p>
                                <p>池塘面积：<span>100㎡</span></p>
                                <p>物种：<span>花鳗、草鱼、鲢鱼</span></p>
                            </div>
                            <div class="list_content_right">
                                <img src="static/images/login_bg.jpg">
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
       </div>
    </div>
</template>
<style>
    .loncom_public_con{
        width: 100%;
        padding:15px;
        height: calc(100% - 40px);
    }
    .loncom_public_con li{
        width: 25%;
        padding:15px;
        float: left;
    }
    .list_con{
        width: 100%;
        height: auto;
        overflow:hidden;
        border-radius:5px;
        box-shadow: 0px 1px 7px #ccc;
        cursor:pointer;
    }
    .list_con_title{
        width: 100%;
        height: 35px;
        line-height: 35px;
        background: #12AE67;
        color: #fff;
        text-indent: 10px;
    }
    .list_con_lost .list_con_title{
        background: #919191;
    }
    .list_con_warning .list_con_title{
        background: #C50000;
    }
    .list_content{
        padding: 10px;
        overflow: hidden;
    }
    .list_content_left{
        line-height:24px;
        font-size: 12px;
        float:left;
        width:calc(100% - 120px);
    }
    .list_content_right{
        width:120px;
        height:auto;
        float: left;
    }
    .list_content_right img{
        width: 120px;
        min-height: 90px;
        max-height: 120px;
    }
    .state{
        color: #12AE67;
    }
    .list_con_lost .state{
        color: #919191;
    }
    .list_con_warning .state{
        color:#C50000;
    }


</style>

<script>
import controlTop from '@/components/control_top.vue'
export default {
    created () {
        
    },
    mounted() {
        scrollCon();
        //头部切换
        var _this=this;
        $(".gis_sort").find("li").on("click", function () {
            $(this).siblings("li").removeClass("active");
            $(this).addClass("active");
            _this.show=$(this).data("name");
        })
    },
    data() {
       return {
          　searchInfo:'',
          show:'all',
       }
   },
    methods:{
       detail:function(item){
           var item={id:1}
           this.$router.push({path:'/control/list/detail',query:{id:item.id}});
       },
    },
    components:{controlTop}
}
</script>