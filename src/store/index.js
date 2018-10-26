import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const storeInfo=new Vuex.Store({
   state:{
        navList:[
            {url:'/index',name:'首页',icon:'static/images/home.svg',item:[]},
            {url:'/control',name:'实时监控',icon:'static/images/control.svg',item:[
                {url:'/control/gis',name:'GIS',fullName:'GIS',icon:'static/images/item.png',item:[]},
                {url:'/control/list',name:'视图',fullName:'列表视图',icon:'static/images/item.png'},
            ]},
            {url:'/alarm',name:'告警管理',icon:'static/images/alarm.svg',item:[
                {url:'/alarm/realtime',name:'实时',fullName:'实时告警',icon:'static/images/item.png',item:[]},
                {url:'/alarm/history',name:'历史',fullName:'历史告警',icon:'static/images/item.png'},
                {url:'/alarm/inform',name:'通知',fullName:'通知管理',icon:'static/images/item.png'},
                {url:'/alarm/config',name:'阀值',fullName:'阀值配置',icon:'static/images/item.png'},
            ]},
            {url:'/video',name:'视频管理',icon:'static/images/video.svg',item:[
                {url:'/video/vms',name:'视频',fullName:'视频管理',icon:'static/images/item.png',item:[]},
            ]},
            {url:'/record',name:'档案管理',icon:'static/images/record.svg',item:[
                {url:'/record/pool',name:'池塘',fullName:'池塘管理',icon:'static/images/item.png',item:[]},
                {url:'/record/finger',name:'物种',fullName:'物种管理',icon:'static/images/item.png'},
            ]},
            {url:'/system',name:'系统管理',icon:'static/images/system.svg',item:[
                {url:'/system/limits',name:'权限',fullName:'权限管理',icon:'static/images/item.png',item:[
                    {url:'/system/limits/depart',name:'部门',fullName:'部门管理',icon:'static/images/xingxing.png'},
                    {url:'/system/limits/user',name:'用户',fullName:'用户管理',icon:'static/images/xingxing.png'},
                    {url:'/system/limits/role',name:'角色',fullName:'角色管理',icon:'static/images/xingxing.png'},
                ]},
                {url:'/system/sconfig',name:'业务',fullName:'业务配置',icon:'static/images/item.png',item:[
                    {url:'/system/sconfig/record',name:'档案',fullName:'档案管理',icon:'static/images/xingxing.png'},
                    {url:'/system/sconfig/scsi',name:'组态',fullName:'组态配置',icon:'static/images/xingxing.png'},
                ]},
                {url:'/system/log',name:'日志',fullName:'操作日志',icon:'static/images/item.png'},
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
            if(state[arr[0]]==undefined){
                state[arr[0]]={};
            }
            state[arr[0]][arr[1]]=true;
        }
   },

})


export default storeInfo;