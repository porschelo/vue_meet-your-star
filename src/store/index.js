import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {

        loginBol:false,
        signBol:false,
        loginStatus: 0 ,
        memberIcon:"",
        loginID:"",
        
    },
    mutations: {

        loginVisible(state,bol){
            state.loginBol = bol;
        },
        signVisible(state,bol){
            state.signBol = bol;
        },
        loginStatus(state,value){
            state.loginStatus = value;
        },
        memberIcon(state,str){
            state.memberIcon = str;
        },
        loginID(state,str){
            state.loginID = str;
        }

    },
    actions: {
        setmemberIcon:function(context,str){
            context.commit('memberIcon',str);
        },
        setloginID:function(context,loginID){
            context.commit('loginID',loginID);
        },
    },
    modules: {},
});
