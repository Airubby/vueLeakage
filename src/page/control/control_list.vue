<template>
    <div class="loncom_content">
       <controlTop></controlTop>
       <div class="loncom_public_con loncom_scroll_con">
            <ul class="list_ul">
                <li>
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
                <li>
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
                <li>
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
    },
    data() {
       return {
          　searchInfo:'',
       }
   },
    methods:{
       detail:function(){
           
       },
    },
    components:{controlTop}
}
</script>