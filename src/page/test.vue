<template>
    <div class="loncom_content">
        <div class="loncom_topnav">
            <ul>
                <li>
                    <router-link to="/">
                        网站首页
                    </router-link>
                </li>
                <li>
                    <router-link to="/test">
                       test页
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="loncom_con">
            <div class="loncom_con_left">
                <LeftNavInfo v-bind:info="left_nav_info"></LeftNavInfo>
            </div>
            <div class="loncom_con_right">
                <div :class="{'loncom_active':left_nav_info[0].loncom_active}">test111页内容</div>
                <div :class="{'loncom_active':left_nav_info[1].loncom_active}">test222页内容</div>
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
　　　　　　　　　　{select:'test111页',loncom_active:true},
　　　　　　　　　　{select:'test222页',loncom_active:false},
　　　　　　　],
       }
   },
    methods:{
       tabs (theItem) {
            this.$nextTick(function () {
　　　　　　　　this.topChangeInfo.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'loncom_active',false);
　　　　　　　　});
　　　　　　　　Vue.set(theItem,'loncom_active',true);
　　　　　　});
        },
    },
    components:{LeftNavInfo}
}
</script>