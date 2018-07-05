import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: (resolve) => require(['@/page/index'], resolve),
      redirect:'/index',
      children:[
        {path:'/index',component:(resolve) => require(['@/page/indexContent'], resolve)},
      ]
    },{
      path: '/',
      component: (resolve) => require(['@/page/index'], resolve),
      redirect:'/index',
      children:[
        {path:'/index',component:(resolve) => require(['@/page/indexContent'], resolve)},
      ]
    },{
      path:'/login',
      component: (resolve) => require(['@/page/login'], resolve),
    },{
      path: '/control',  //实时监控
      component: (resolve) => require(['@/page/control'], resolve),
      redirect:'/control/gis',
      children:[
        {path:'/control/gis',component:(resolve) => require(['@/page/control_gis'], resolve),},
        {path:'/control/list',component:(resolve) => require(['@/page/control_list'], resolve),},
      ]
    },{
      path: '/record',  //档案管理
      component: (resolve) => require(['@/page/record'], resolve),
      redirect:'/record/pool',
      children:[
        {path:'/record/pool',component:(resolve) => require(['@/page/record_pool'], resolve),},
        {path:'/record/finger',component:(resolve) => require(['@/page/record_finger'], resolve),},
      ]
    }
    
  ]
})
