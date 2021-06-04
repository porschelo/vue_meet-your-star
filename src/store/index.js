import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        cartList: [],
        loginBol:false,
        signBol:false,
        loginStatus: 0 ,
        memberIcon:"",
        loginID:"",
    },
    mutations: {
        //cart
        addCart(state, obj1) {
            state.cartList.push(obj1);
            console.log(state.cartList);
        },
        addCartUpdate(state, cart) {
            state.cartList = cart;
        },
        //login
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
    
   

});
