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
            localStorage.setItem('loginStatus',JSON.stringify(this.state.loginStatus));
        },
        updateLoginStatus(state,value){
            state.loginStatus = value;
        },
        memberIcon(state,str){
            state.memberIcon = str;
            localStorage.setItem('memberIcon',JSON.stringify(this.state.memberIcon));
        },
        updatememberIcon(state,str){
            state.memberIcon = str;
        },
        loginID(state,str){
            state.loginID = str;
            localStorage.setItem('loginID',JSON.stringify(this.state.loginID));
        },
        updateloginID(state,str){
            state.loginID = str;
        },

    },
    actions: {
        setmemberIcon:function(context,str){
            context.commit('memberIcon',str);
        },
        setloginID:function(context,loginID){
            context.commit('loginID',loginID);
        },
        updateLoginStatus:function(context,status){
            context.commit('updateloginStatus',status);
            localStorage.setItem('loginStatus',JSON.stringify(this.state.loginStatus));
                   
        },
        updatememberIcon:function(context,str){
            context.commit('updatememberIcon',str);
            localStorage.setItem('memberIcon',JSON.stringify(this.state.memberIcon));
                   
        },
        updateLoginID:function(context,str){
            context.commit('updateloginID',str);
            localStorage.setItem('loginID',JSON.stringify(this.state.loginID));
                   
        },
    },
    modules: {},
});
