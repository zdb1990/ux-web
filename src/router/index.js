import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/components/index'
import token from './../config/_get-token';
Vue.use(Router);
const Routes = new Router({
    routes,
    //添加路由滚动行为导航条 滚动到最顶部
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
});

Routes.beforeEach((to, from, next) => {
    const publicPage = ['/login'];
    console.log(token);
    const authreq = !publicPage.includes(to.path);
    if (authreq && !token) {
        next('/login');
    }
    next();
})

export default Routes;