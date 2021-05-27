import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Index.vue'; //component的自訂名稱
import ProductDetail from '@/views/product_detail/Index.vue';
import MemberCentre from '@/views/membercentre/Index.vue';
import MemberOrderList from '@/views/memberorderlist/Index.vue';
import MemberCollection from '@/views/membercollection/Index.vue';
import ShoppingCart from '@/views/shoppingcart/Index.vue';
import Appointment from '@/views/appointment/Index.vue';
import ApDate from '@/views/apdate/Index.vue';
import ApConfirm from '@/views/apconfirm/Index.vue';
import ApFinish from '@/views/apfinish/Index.vue';
import Order from '@/views/order/Index.vue';


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
        path: '/membercentre',
        name: 'MemberCentre',
        component: MemberCentre,
    },
    {
        path: '/memberorderlist',
        name: 'MemberOrderList',
        component: MemberOrderList,
    },
    {
        path: '/membercollection',
        name: 'MemberCollection',
        component: MemberCollection,
    },
    {
        path: '/shoppingcart',
        name: 'ShoppingCart',
        component: ShoppingCart,
    },
    {
        path: '/appointment',
        name: 'Appointment',
        component: Appointment,
    },
    {
        path: '/apdate',
        name: 'ApDate',
        component: ApDate,
    },
    {
        path: '/apconfirm',
        name: 'ApConfirm',
        component: ApConfirm,
    },
    {
        path: '/apfinish',
        name: 'ApFinish',
        component: ApFinish,
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL, //BASE_URL預設 '/'
    routes,
});

export default router;
