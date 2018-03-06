// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import less from 'less'
import Mint from 'mint-ui';    //移动端UI
import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.config.productionTip = false

import axios from 'axios'

//Axios拦截器操作loading
axios.interceptors.request.use(function(config){
    //显示加载
    Mint.Indicator.open({
      text: '正在拼命加载中...',
      spinnerType: 'double-bounce'
    });
    return config;
});
axios.interceptors.response.use(function(config){
  //隐藏加载
  Mint.Indicator.close();
  return config;
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
