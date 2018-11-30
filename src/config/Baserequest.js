import axios from 'axios';
import Options from './_header';
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
    return res;
}, (err) => {
    return Promise.reject(err);
})
export default methodsFunc;