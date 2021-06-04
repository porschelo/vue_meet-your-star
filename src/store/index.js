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
        addCartUpdate(state, cart) {
            state.cartList = cart;
        },
    },
    actions: {
        //更新整個購物車
        updateCart(context, cart) {
            context.commit('addCartUpdate', cart);
            localStorage.setItem(
                'storageCart',
                JSON.stringify(this.state.cartList)
            );
        },
        //更新單一個商品
        addToCart(context, obj) {
            context.commit('addCart', obj);

            // localStorage.setItem('aaa', '123');
            localStorage.setItem(
                'storageCart',
                JSON.stringify(this.state.cartList)
            );
        },
    },
    modules: {},
});
