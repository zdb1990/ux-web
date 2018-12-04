// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入 Vue-beauty
import './../node_modules/vue-beauty/package/style/vue-beauty.min.css';
import './../node_modules/vue-beauty/package/vue-beauty.min.js';
//引入 reset.css
import './../static/css/reset.css';
//引入 iconfont
import './../static/iconfont/iconfont.css';
//全局配置自定义指令
import plugins from './plugins/plugins.js';
import vueBeauty from 'vue-beauty';
import menuItem from './common';
//使用菜单组件
Vue.config.productionTip = false
Vue.use(plugins);
Vue.use(vueBeauty);
Vue.use(menuItem);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})