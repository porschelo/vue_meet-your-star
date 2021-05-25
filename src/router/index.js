import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Index.vue'; //component的自訂名稱
import Starsign from '@/views/starsign/Index.vue';
import Landing from '@/views/landing/Index.vue';
// 動態載入（延遲）
// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// const About = () => import(/* webpackChunkName: "about" */ "../views/About.vue");

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/starsign',
        name: 'Starsign',
        component: Starsign,
    },
    {
        path: '/landing',
        name: 'Landing',
        component: Landing,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, //BASE_URL預設 '/'
    routes,
});

export default router;
