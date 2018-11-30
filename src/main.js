// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入 element-ui
import './../node_modules/element-ui/lib/theme-chalk/index.css';
import './../node_modules/element-ui/lib/index.js';
//引入 reset.css
import './../static/css/reset.css';
//引入 iconfont
import './../static/iconfont/iconfont.css';
import ElementUi from 'element-ui';
Vue.config.productionTip = false
Vue.use(ElementUi);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})