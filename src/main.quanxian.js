// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import './assets/element-#0096BA/index.css'
import ElSearchTablePagination from 'el-table-pagination'
import router from './router'
import store from './store'
import NavInfo from './components/navInfo'
import 'babel-polyfill'  //兼容低版本浏览器

// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api


Vue.prototype.getComponent = function (id){

  var componentList=[   
    {
      path: '/control',  //实时监控
      component: (resolve) => require(['@/page/public'], resolve),redirect:'/control/gis',
      children:[
        {path:'/control/gis',component:(resolve) => require(['@/page/control/control_gis'], resolve)},
        {path:'/control/list',component:(resolve) => require(['@/page/control/control_list'], resolve)},
        {path:'/control/list/detail',component:(resolve) => require(['@/page/control/control_list_detail'], resolve)},
      ]
    },
    {
      path: '/alarm',  //告警管理
      component: (resolve) => require(['@/page/public'], resolve),redirect:'/alarm/realtime',
      children:[
        {path:'/alarm/realtime',component:(resolve) => require(['@/page/alarm/alarm_realtime'], resolve)},
        {path:'/alarm/history',component:(resolve) => require(['@/page/alarm/alarm_history'], resolve)},
        {path:'/alarm/inform',component:(resolve) => require(['@/page/alarm/alarm_inform'], resolve)},
      ]
    },
    {
      path: '/video',  //视频管理
      component: (resolve) => require(['@/page/public'], resolve),redirect:'/video/vms',
      children:[
        {path:'/video/vms',component:(resolve) => require(['@/page/video/video_vms'], resolve)},
      ]
    },
    {
      path: '/record',  //档案管理
      component: (resolve) => require(['@/page/public'], resolve),redirect:'/record/pool',
      children:[
        {path:'/record/pool',component:(resolve) => require(['@/page/record/record_pool'], resolve)},
        {path:'/record/finger',component:(resolve) => require(['@/page/record/record_finger'], resolve)},
      ]
    },{//系统管理
      path: '/system', component: (resolve) => require(['@/page/public'], resolve),redirect:'/system/limits',
      children:[
        {
          path:'/system/limits',component:(resolve) => require(['@/page/system/limits'], resolve),redirect:'/system/limits/depart',
          children:[
            {path:'/system/limits/depart',component:(resolve) => require(['@/page/system/limits_depart'], resolve)},
            {path:'/system/limits/depart/adduser',component:(resolve) => require(['@/page/system/limits_adduser'], resolve)},
            {path:'/system/limits/user',component:(resolve) => require(['@/page/system/limits_user'], resolve)},
            {path:'/system/limits/user/adduser',component:(resolve) => require(['@/page/system/limits_adduser'], resolve)},
            {path:'/system/limits/role',component:(resolve) => require(['@/page/system/limits_role'], resolve)},
            
          ]
        },{
          path:'/system/sconfig',component:(resolve) => require(['@/page/system/sconfig'], resolve),redirect:'/system/sconfig/record',
          children:[
            {path:'/system/sconfig/record',component:(resolve) => require(['@/page/system/sconfig_record'], resolve)},
            {path:'/system/sconfig/scsi',component:(resolve) => require(['@/page/system/sconfig_scsi'], resolve)},
          ]
        },
        {
          path:'/system/log',component:(resolve) => require(['@/page/system/log'], resolve)
        },
      ]
    }
 
  ];
  var routerList=[];
  return new Promise(function(resolve, reject){
      Vue.prototype.$api.post('/role/rolequery', {roleid:id}, r => {
        console.log(r)
        if(r.err_code=="0"){
            if(r.data.length==0){
              ElementUI.Message.warning("你没有一个菜单权限");
            }else{
              var menu=r.data;
              store.commit('resetModel',{})
              store.commit('resetNavList',menu)
              getFunc(menu)
              setCom(routerList,menu,componentList);
              routerList.push({ path: '*', component: (resolve) => require(['@/page/notPage'], resolve)  })
              for(var i=0;i<routerList.length;i++){
                router.options.routes.push(routerList[i]);
              }
              router.addRoutes(routerList);
              resolve(true);
            }
            
        }else{
          if(sessionStorage.loginInfo){
            ElementUI.Message.warning("菜单获取异常");
            router.push({path:'/login'});
          }
        }
        
    }); 
    function getFunc(menu){
      for(var i=0;i<menu.length;i++){
        if(menu[i].item.length>0){
          getFunc(menu[i])
        }else{
          var keyarr=(menu[i].url).split("/");
          var valuearr=(menu[i].roperid).split(",");
          if(keyarr.length>1){
            var key=keyarr.length-1;
            for(var j=0;j<valuearr.length;j++){
              store.commit('setModel',[keyarr[key],valuearr[j]])
            }
            
          }
        }
      }
    }
    function setCom(list,menu,clist){
      for(var i=0;i<menu.length;i++){
        for(var j=0;j<clist.length;j++){
          if(menu[i].url=="/index"){
            routerList.push(componentList[0]);
          }else{
            if(menu[i].url==clist[j].path){
              var obj={};
              obj.children=[];
              obj.path=clist[j].path;
              obj.component=clist[j].component;
              if(menu[i].item.length>0){
                obj.redirect=menu[i].item[0].url;
                setCom(obj.children,menu[i].item,clist[j].children)
              }
              list.push(obj);
            }
          }
          
        }
      }

    }
    
  })
  


}



Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(ElSearchTablePagination)
//头部导航
Vue.use(NavInfo)




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
