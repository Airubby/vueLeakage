<template>
  <div class="loncom_con_left">
        <ul>
            <li v-for="item in info" @click="tabs(item)" :class="{'loncom_active':item.loncom_active}">{{item.title}}</li>
        </ul>
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
      //头部切换
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

