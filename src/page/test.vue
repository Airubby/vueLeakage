<template>
    <div class="loncom_content">
        <NavInfo></NavInfo>
        <div class="loncom_con">
            <div class="loncom_con_left">
                <ul>
                    <li>
                        <router-link to="/test/test1">
                            test1
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/test/test2">
                            test2
                        </router-link>
                    </li>
                </ul>
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