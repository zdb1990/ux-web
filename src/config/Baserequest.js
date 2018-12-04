import axios from 'axios';
import Options from './_header';
import Routes from './../router/index';
const BaseUrl = "http://localhost:8080";
//创建axios的新实例.
const server = axios.create(Options);
const methodsFunc = {
    Get: function get(url, params) {
        return server({
            url: BaseUrl + url,
            params: params,
            method: 'get'
        })
    },
    Post: function post(url, params) {
        return server({
            url: BaseUrl + url,
            data: params,
            method: 'post'
        })
    },
    Delete: function deletes(url, params) {
        return server({
            url: BaseUrl + url,
            data: params,
            method: 'delete'
        })
    },
    Put: function put(url, params) {
        return server({
            url: BaseUrl + url,
            data: params,
            method: 'delete'
        })
    }
}

server.interceptors.request.use((config) => {
    console.log(config);
    return config;
}, (err) => {
    return Promise.reject(err);
});
server.interceptors.response.use((res) => {
    res = res.data;
    console.log(1);
    return res;
}, (err) => {
    if (err.response) {
        console.log(Routes.currentRoute.path)
        switch (err.response.status) {
            case 401:
                // 401 清除token信息并跳转到登录页面
                sessionStorage.removeItem('user');

                // 只有在当前路由不是登录页面才跳转
                Routes.currentRoute.path !== 'login' &&
                    Routes.replace({
                        path: 'login',
                        // query: { redirect: Routes.currentRoute.path }
                    })
        }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(err.response.data)
})
export default methodsFunc;