<template>
    <div class="loncom_content">
        <NavInfo></NavInfo>
        <LeftNavInfo v-bind:info="left_nav_info"></LeftNavInfo>
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
          　left_nav_info: [],
       }
   },
    methods:{
       
    },
    components:{LeftNavInfo}
}
</script>
