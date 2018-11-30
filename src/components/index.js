import Content from "./home/Content";
import Overview from './overview/Overview';
import Login from './login/Login';
const routes = [{
        path: '/content',
        component: Content,
        children: [
            { path: '/overview', component: Overview },
            { path: '/', redirect: '/overview' }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        redirect: '/login'
    }

]
export default routes;