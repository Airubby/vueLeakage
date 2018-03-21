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
          　left_nav_info: [
              {title:'运维管理1',link:'/realControl/gis',url:'gis.png'},
　　　　　　　{title:'运维管理2',link:'/realControl/listView',url:'gis.png'},
          ],
       }
   },
    methods:{
       
    },
    components:{LeftNavInfo}
}
</script>
