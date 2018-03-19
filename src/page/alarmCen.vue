<template>
    <div class="loncom_content">
        <NavInfo></NavInfo>
        <div class="loncom_con">
            <LeftNavInfo v-bind:info="left_nav_info"></LeftNavInfo>
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
　　　　　　　　　　{title:'GIS',url:'home.png',loncom_active:true},
　　　　　　　　　　{title:'列表视图',url:'home.png',loncom_active:false},
　　　　　　　],
       }
   },
    methods:{
       
    },
    components:{LeftNavInfo}
}
</script>
