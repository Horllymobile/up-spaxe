import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import HomeComponent from './pages/Home';
import AboutComponent from './pages/About';
import SignInComponent from './pages/Signin';
import ErrorComponent  from './pages/Error'

const routes = [
    {path: '/home', component: HomeComponent},
    {path: '/about', component: AboutComponent},
    {path: '/signin', component: SignInComponent},
    {path: '/', redirect: '/home'},
    {path: '**', component: ErrorComponent}
]

const router = new VueRouter({
    mode:'history',
    base: __dirname,
    routes,
    scrollBehavior: () => {
        return {x:0, y:0}
    }
})

export default router;
