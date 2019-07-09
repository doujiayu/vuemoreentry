// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
// 引入全局过滤器
import '@/commonJs/allFilter' 

Vue.config.productionTip = false


Vue.prototype.$echarts = echarts //注入图表

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
