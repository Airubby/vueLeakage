import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: (resolve) => require(['@/page/public'], resolve),
      redirect:'/index',
      children:[
        {path:'/index',component:(resolve) => require(['@/page/index'], resolve)},
      ]
    },{
      path: '/',
      component: (resolve) => require(['@/page/public'], resolve),redirect:'/index',
      children:[
        {path:'/index',component:(resolve) => require(['@/page/index'], resolve)},
      ]
    },{
      path:'/login',
      component: (resolve) => require(['@/page/login'], resolve),
    },{
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
    },
    { path: '*', component: (resolve) => require(['@/page/notPage'], resolve)  },
    {
      path:'/test',component:(resolve) => require(['@/page/test'], resolve)
    }
  ]
})
