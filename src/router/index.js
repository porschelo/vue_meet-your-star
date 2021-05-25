import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Index.vue'; //component的自訂名稱
import ProductDetail from '@/views/product_detail/Index.vue';
import Match1 from '@/views/match1/Index.vue';
import Match2 from '@/views/match2/Index.vue';

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
        path: '/product_detail',
        name: 'ProductDetail',
        component: ProductDetail,
    },
    {
        path: '/match1',
        name: 'Match1',
        component: Match1,
    },
        {
        path: '/match2',
        name: 'Match2',
        component: Match2,
    },

];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, //BASE_URL預設 '/'
    routes,
});

export default router;
