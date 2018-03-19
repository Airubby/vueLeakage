import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import RealControl from '@/page/realControl'
import OpsManage from '@/page/opsManage'
import AlarmCen from '@/page/alarmCen'
import ReportCen from '@/page/reportCen'
import SysManage from '@/page/sysManage'


import Test from '@/page/test'
import Test1 from '@/page/test1'
import Test2 from '@/page/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Index
    },{
      path: '/',
      component: Index
    },{
      path: '/realControl',  //实时监控
      component: RealControl
    },{
      path: '/opsManage',  //运维管理
      component: OpsManage
    },{
      path: '/alarmCen',  //告警中心
      component: AlarmCen
    },{
      path: '/reportCen',  //报表中心
      component: ReportCen
    },{
      path: '/sysManage',  //系统设置
      component: SysManage
    },



    {
      path: '/test',
      component: Test,
      children:[
        {path:'/test/test1',component:Test1}, 
        {path:'/test/test2',component:Test2}, 
      ]
    },
    
  ]
})
