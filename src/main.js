// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'

Vue.config.productionTip = false;

// 引入UI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入字体 iconfont.css
import '@/assets/font/iconfont.css'

/**
 * 挂在在vue实例上，有两种写法
 * Object.defineProperty(Vue.prototype,'$axios',{value:axiosConfig.axiosConfig});
 */
// 引入axios
import axiosConfig from "./server/index.js"
Vue.prototype.$axios = axiosConfig.axiosConfig;
Vue.prototype.$baseU = axiosConfig.baseU;


// 封装方法axios的get以及post
import  Server from './server/server.js'
Vue.prototype.$g = Server.g;
Vue.prototype.$p = Server.p;

// 接口配置文件
import Interface from './server/interface.js'
Vue.prototype.$api = Interface;


// 引入公用方法 common.js
import common from './util/common.js'
Vue.prototype.$c = common;

// ie使用
import 'babel-polyfill'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
