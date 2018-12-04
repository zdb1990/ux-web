import Content from "./home/Content";
import Overview from './overview/Overview';
import Login from './login/Login';
const routes = [{
        path: '/',
        component: Content,
        children: [{
                path: '/overview',
                component: Overview,
                children: [
                    { path: '/haha', component: Overview }
                ]
            },
            { path: '/add', component: Overview },
            { path: '/index', component: Overview },
            { path: '/com', component: Overview },
            { path: '/end', component: Overview },
            { path: '/hehe', component: Overview },
            { path: '/', redirect: '/overview' }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '*',
        redirect: '/'
    }

]
export default routes;