import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const storeInfo=new Vuex.Store({
   state:{
        navList:[
            {url:'/index',name:'首页',icon:'static/images/home.svg',item:[]},
            {url:'/control',name:'实时监控',icon:'static/images/home.svg',item:[
                {url:'/control/gis',name:'GIS',fullName:'GIS',icon:'static/images/item.png',item:[]},
                {url:'/control/list',name:'视图',fullName:'列表视图',icon:'static/images/item.png'},
            ]},
            {url:'/record',name:'档案管理',icon:'static/images/home.svg',item:[
                {url:'/record/pool',name:'池塘',fullName:'池塘管理',icon:'static/images/item.png',item:[]},
                {url:'/record/finger',name:'物种',fullName:'物种管理',icon:'static/images/item.png'},
            ]},
        ],
   },
   getters:{
       getNavInfo(state){
           return state.navList;
       }
   },
   mutations:{
        resetNavList(state,navList){
            state.navList=navList;
        },
        resetModel(state,obj){
            state.control=obj;
        },
        setModel(state,arr){
            state[arr[0]][arr[1]]=true;
        }
   },

})


export default storeInfo;