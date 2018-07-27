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
