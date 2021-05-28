import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home/Index.vue'; //component的自訂名稱
import Starsign from '@/views/starsign/Index.vue';
import Landing from '@/views/landing/Index.vue';
import ProductDetail from '@/views/product_detail/Index.vue';
import Match1 from '@/views/match1/Index.vue';
import Match2 from '@/views/match2/match2.vue';
import Match3 from '@/views/match3/match3.vue';
import UnStore from '@/views/unstore/Index.vue';
import Customized from '@/views/customized/Index.vue';
import TestSort from '@/views/test_sort/Index.vue';
import TestResult from '@/views/test_result/Index.vue';
import TestQa from '@/views/test_qa/Index.vue';
import Game from '@/views/game/Index.vue';
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
        path: '/starsign',
        name: 'Starsign',
        component: Starsign,
    },
    {
        path: '/landing',
        name: 'Landing',
        component: Landing,
    },
    {
        path: '/unstore/product_detail',
        name: 'ProductDetail',
        component: ProductDetail,
    },
    {
        path: '/matchandtest',
        name: 'Match1',
        component: Match1,
    },
    {
        path: '/matchandtest/match3',
        name: 'Match3',
        component: Match3,
    },
    {
        path: '/matchandtest/match2',
        name: 'Match2',
        component: Match2,
    },
    {
        path: '/unstore',
        name: 'UnStore',
        component: UnStore,
    },
    {
        path: '/unstore/customized',
        name: 'Customized',
        component: Customized,
    },
    {
        path: '/matchandtest/test_sort',
        name: 'TestSort',
        component: TestSort,
    },
    {
        path: '/matchandtest/test_result',
        name: 'TestResult',
        component: TestResult,
    },
    {
        path: '/matchandtest/test_qa',
        name: 'TestQa',
        component: TestQa,
    },
    {
        path: '/game',
        name: 'Game',
        component: Game,
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
