import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //teacher
        selectteacher:'',
        selectteacherprice:'',
        setAppointed:'',
        //cart
        cartList: [],

        //login
        loginBol: false,
        signBol: false,
        loginStatus: 0,
        memberIcon: '',
        loginID: '',

        //product
        productId: 0,
        productType: '2',

        //match
        self_StarSign:"",
        opp_StarSign:"",
    },
    mutations: {
        //teacher
        selectteachername(state, teachername) {
            state.selectteacher = teachername;
        },
        selectteacherprice(state, teacherprice){
            state.selectteacherprice = teacherprice;
        },
        selectteacherdate(state, teacherdate){
            state.setAppointed= teacherdate;
        },
        //cart
        addCart(state, obj1) {
            state.cartList.push(obj1);
            console.log(state.cartList);
        },
        addCartUpdate(state, cart) {
            state.cartList = cart;
        },
        //login
        loginVisible(state, bol) {
            state.loginBol = bol;
        },
        signVisible(state, bol) {
            state.signBol = bol;
        },
        loginStatus(state, value) {
            state.loginStatus = value;
            localStorage.setItem(
                'loginStatus',
                JSON.stringify(this.state.loginStatus)
            );
        },
        updateLoginStatus(state, value) {
            state.loginStatus = value;
        },
        memberIcon(state, str) {
            state.memberIcon = str;
            localStorage.setItem(
                'memberIcon',
                JSON.stringify(this.state.memberIcon)
            );
        },
        updatememberIcon(state, str) {
            state.memberIcon = str;
        },
        loginID(state, str) {
            state.loginID = str;
            localStorage.setItem('loginID', JSON.stringify(this.state.loginID));
        },
        updateloginID(state, str) {
            state.loginID = str;
        },
        logout(state, val) {
            state.loginStatus = val;
        },
        //product
        sendproductId(state, id) {
            state.productId = id;
        },
        backtoPage(state, str) {
            state.productType = str;
        },

        //match
        self_StarSign(state,str){
            state.self_StarSign = str;
        },
        opp_StarSign(state,str){
            state.opp_StarSign = str;
        }
    },
    actions: {
        //teacher
        setselectteacher(context, teachername) {
            context.commit('selectteachername', teachername);
        },
        setselectteacherprice(context, teacherprice){
            context.commit('selectteacherprice', teacherprice)
        },
        setselectteacherdate(context, teacherdate){
            context.commit('selectteacherdate', teacherdate)
        },
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

        //login
        setmemberIcon: function (context, str) {
            context.commit('memberIcon', str);
        },
        setloginID: function (context, loginID) {
            context.commit('loginID', loginID);
        },
        updateLoginStatus: function (context, status) {
            context.commit('updateloginStatus', status);
            localStorage.setItem(
                'loginStatus',
                JSON.stringify(this.state.loginStatus)
            );
        },
        updatememberIcon: function (context, str) {
            context.commit('updatememberIcon', str);
            localStorage.setItem(
                'memberIcon',
                JSON.stringify(this.state.memberIcon)
            );
        },
        updateLoginID: function (context, str) {
            context.commit('updateloginID', str);
            localStorage.setItem('loginID', JSON.stringify(this.state.loginID));
        },

        //match

        setself_StarSign: function(context,str){
            context.commit('self_StarSign',str);
        },
        setopp_StarSign: function(context,str){
            context.commit('opp_StarSign',str);
        }
    },
});
