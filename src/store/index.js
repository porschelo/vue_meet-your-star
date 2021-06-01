import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        loginBol:false,
        signBol:false,
        
    },
    mutations: {

        loginVisible(state,bol){
            state.loginBol = bol;
        },
        signVisible(state,bol){
            state.signBol = bol;
        },

    },
    actions: {},
    modules: {},
});
