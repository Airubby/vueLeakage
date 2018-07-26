<template>
    <div class="loncom_content loncom_timg">
        <div class="loncom_timg_con">
            <img src='static/images/timg.jpg'>
            <router-link to="/index"></router-link>
        </div>
    </div>
</template>

<style>
    .loncom_timg{
    background: #007BC1;
    }
    .loncom_timg_con{
    width: 1000px;
    position: relative;
    margin: 0 auto;
    }
    .loncom_timg img{
    width: 1000px;
    }
    .loncom_timg_con a{
    width: 285px;
    height: 50px;
    position: absolute;
    left: 322px;
    bottom: 94px;
    }
</style>

<script>
export default {
    created () {
        
    },
    mounted() {
        
    },
    data() {
       return {
           
       }
   },
    methods:{
       
    },
    components:{}
}
</script>