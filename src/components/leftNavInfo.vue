<template>
  <div class="loncom_con_left">
      <div class="loncom_left_navtop">12</div>
      <div class="loncom_left_nav">
          <ul>
            <li v-for="item in info" @click="tabs(item)" :class="{'loncom_active':item.loncom_active}">
                <em><img :src="'static/images/'+item.url"></em>
                <span>{{item.title}}</span>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>

import Vue from 'vue' 

export default {
    data(){
      return {
        
      }
    },
    methods:{
      //头部切换 B2DFE6
        tabs (theItem) {
            this.$nextTick(function () {
　　　　　　　　this.info.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'loncom_active',false);
　　　　　　　　});
　　　　　　　　Vue.set(theItem,'loncom_active',true);
　　　　　　});
        },
    },
    
    props:["info"],  
}
</script>

