import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Test from '@/page/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: Index
    },{
      path: '/',
      component: Index
    },
    {
      path: '/test',
      component: Test
    },
    
  ]
})
