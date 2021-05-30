import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartList: [],
    },
    mutations: {
        addCart(state, obj1) {
            state.cartList.push(obj1);
            console.log(state.cartList);
        },
    },
    actions: {
        addToCart(context, obj) {
            context.commit('addCart', obj);
        },
    },
    modules: {},
});
