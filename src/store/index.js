import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// const SET_NAME = 'SET_NAME';
export default new Vuex.Store({
    state: {
        name: 'Samuel',
        age: 20,
        carts: [],
    },
    mutations: {
        increment(state, value) {
            state.name = value;
        },
        addCart1(state, obj) {
            state.carts.push(obj);
        },
    },
    actions: {
        setName: function (context, val) {
            context.commit('increment', val);
        },
        addCart: function (context, obj) {
            context.commit('addCart1', obj);
        },
    },
});
