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
        {path:'/control/gis',component:(resolve) => require(['@/page/control/control_gis'], resolve)},
        {path:'/control/list',component:(resolve) => require(['@/page/control/control_list'], resolve)},
      ]
    },{
      path: '/record',  //档案管理
      component: (resolve) => require(['@/page/record'], resolve),
      redirect:'/record/pool',
      children:[
        {path:'/record/pool',component:(resolve) => require(['@/page/record/record_pool'], resolve)},
        {path:'/record/finger',component:(resolve) => require(['@/page/record/record_finger'], resolve)},
      ]
    },{//系统管理
      path: '/system', component: (resolve) => require(['@/page/system'], resolve),redirect:'/system/limits',
      children:[
        {
          path:'/system/limits',component:(resolve) => require(['@/page/system/limits'], resolve),redirect:'/system/limits/depart',
          children:[
            {path:'/system/limits/depart',component:(resolve) => require(['@/page/system/limits_depart'], resolve)},
            {path:'/system/limits/user',component:(resolve) => require(['@/page/system/limits_user'], resolve)},
            {path:'/system/limits/role',component:(resolve) => require(['@/page/system/limits_role'], resolve)}
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
        }
      ]
    }
    
  ]
})
