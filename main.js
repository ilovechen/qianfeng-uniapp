import App from './App'


if(process.env.NODE_ENV === 'development'){
	console.log('开发环境')
} else {
	console.log('生产环境')
}


// #ifndef VUE3
import Vue from 'vue'
// 调用store vuex的状态管理
import store from 'store/index.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif