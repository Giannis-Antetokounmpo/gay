
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import {$http} from '@escook/request-miniprogram'
$http.baseUrl="https://api-hmugo-web.itheima.net/api/public/v1"
$http.beforeRequest=function(){
	uni.showLoading({
		title:'正在加载中'
	})
}
$http.afterRequest=function(){
	uni.hideLoading()
}
uni.$http=$http
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif