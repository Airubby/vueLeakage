<template>
    <div class="loncom_content">
       <alarmTop></alarmTop>
       <div class="list loncom_scroll_con">
            
       </div>
    </div>
</template>
<style>
   
</style>

<script>
import alarmTop from '@/components/alarm_top.vue'
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
       
    },
    components:{alarmTop}
}
</script>