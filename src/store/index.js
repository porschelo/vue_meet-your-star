import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        selectteacher:'',
    },
    mutations: {
        selectteachername(state, teachername){
            state.selectteacher = teachername; 
        }

    },
    actions: {
        setselectteacher(context, teachername){
            context.commit('selectteachername', teachername)
        }
    },
    modules: {},
});
