<template>
    <div class="login-popup" >
        <!-- login-popup -->
        <div class="popout loginpopup" v-if="loginBol">
            <div class="popup">
                <a class="close_login_btn" href="" @click.prevent="onClose('login')">&times;</a>

                <div class="login_title">
                    <h1>登入</h1>
                </div>

                <div class="sec-c login_info">
                    <div class="login_info_content">
                        <h3>帳號:</h3>
                        <input
                            type="text"
                            class="account wh"
                            id="account"
                            placeholder=""
                            required
                        />
                        <h3>密碼:</h3>
                        <input
                            type="text"
                            class="password wh"
                            id="password"
                            placeholder=""
                            required
                        />
                        <div class="logina">
                            <a href="#">忘記密碼？</a>
                            <a href="" class="gosignup" @click.prevent="goSignup">註冊新帳號</a>
                        </div>
                        <a href="membercentre.html"
                            ><!--暫連membercentre用-->
                            <button class="send" id="send">出發冒險</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- signup-popup -->
        <div class="popout signup" v-show="signBol">
            <div class="popup">
                <a class="close_signup_btn" href="#" @click.prevent="onClose('signin')">&times;</a>

                <div class="signuptitle">
                    <h1>註冊</h1>
                </div>
                <div class="sec-c signup_info">
                    <div class="signup_info_content">
                        <h3>帳號:</h3>
                        <input
                            type="text"
                            class="accounts wh"
                            id="accounts"
                            placeholder=""
                            required
                        />
                        <h3>密碼:</h3>
                        <input
                            type="text"
                            class="passwords wh"
                            id="passwords"
                            placeholder=""
                            required
                        />
                        <h3>確認密碼:</h3>
                        <input
                            type="text"
                            class="passwordss wh"
                            id="passwordss"
                            placeholder=""
                            required
                        />
                        <h3>手機號碼:</h3>
                        <input
                            type="text"
                            class="cellp wh"
                            id="cellp"
                            placeholder=""
                            required
                        />
                        <h3>生日:</h3>
                        <input
                            type="text"
                            class="bhd wh"
                            id="bhd"
                            placeholder=" YYYY/MM/DD"
                            required
                        />

                        <div class="signupa">
                            <a href="" class="gologin" @click.prevent="gologin">已有帳號？登入</a>
                        </div>

                        <button class="sign" id="sign">加入冒險</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- index-popup end -->
    </div>
</template>

<script>
export default {



    computed:{
        loginBol(){
            return this.$store.state.loginBol;
        },

        signBol(){
            return this.$store.state.signBol;
        },
        
    },

    methods: {
        onClose(event){
            if(event == "login"){
                this.$store.commit('loginVisible',false);
            }else if(event == "signin"){
                this.$store.commit('signVisible',false);
            }
        },

        goSignup(){
            this.$store.commit('signVisible',true);
            this.$store.commit('loginVisible',false);
        },

        gologin(){
            this.$store.commit('loginVisible',true);
            this.$store.commit('signVisible',false);
        }
    },
};
</script>
<style lang="scss">
    @import '@/scss/color.scss';
    @import '@/scss/var.scss';
    @import '@/scss/center.scss';
    @import '@/scss/mixins.scss';
    @import '@/scss/rwd.scss';

// scss

    .popout {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(7, 7, 7, 0.6);
    // display: none;
    z-index: 1000;
    overflow-y: scroll;

}

.popup {
    margin: 120px auto;
    background-color: #fff;
    border-radius: 120px;
    max-width: 550px;
    width: 100%;
    position: relative;
    z-index: 1000;

    @include rwd(mobile) {
        width: 100%;
    }



    .close_login_btn {
        position: absolute;
        top: -20px;
        right: -20px;
        color: #fff;
        font-size: 70px;
        font-weight: 200;
        text-decoration: none;

        @include rwd(mobile) {
            right: 0px;

        }
    }

    .close_signup_btn {
        position: absolute;
        top: -20px;
        right: -20px;
        color: #fff;
        font-size: 70px;
        font-weight: 200;
        text-decoration: none;

        @include rwd(mobile) {
            right: 0px;

        }
    }
}

.login_title {
    h1 {
        font-size: $h2;
        text-align: center;
        padding-top: 8%;
        color: darkcyan;
    }
}

.login_info {
    &_content {
        width: 60%;
        padding: 20px 0 50px;
        @include center;



        h3 {
            font-size: $h3 - 2px;
            margin: 3% 0;
            color: #555;
        }

        input {
            background-color: #ddd;
            width: 100%;
            margin: 1% 0 5%;
            font-size: $h3 - 3px;
            padding: 5px 3px;

        }

        .logina {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5%;
            margin-top: 10px;
            text-decoration: underline;

            a {
                color: darkcyan;
            }
        }

        a {
            //暫連membercentre用
            text-decoration: none;
        }

        @include btn-module(".send", 200, 90) {
            display: block;
            margin: 30px auto 0;
            color: #555;
            border-color: #555;

            &:hover {
                color: darkcyan;
                border-color: darkcyan;
            }
        }
    }
}

.signuptitle {
    h1 {
        font-size: $h2;
        text-align: center;
        padding-top: 8%;
        color: darkcyan;
    }
}

.signup_info {
    &_content {
        width: 60%;
        padding: 20px 0 50px;
        @include center;



        h3 {
            font-size: $h3 - 2px;
            margin: 3% 0;
            color: #555;
        }

        input {
            background-color: #ddd;
            width: 100%;
            margin: 1% 0 5%;
            font-size: $h3 - 3px;
            padding: 5px 3px;

        }

        .signupa {
            display: flex;
            justify-content: center;
            margin: 5% auto;
            margin-top: 10px;
            text-decoration: underline;

            a {
                color: darkcyan;
            }
        }

        @include btn-module(".sign", 200, 90) {
            display: block;
            margin: 30px auto 0;
            color: #555;
            border-color: #555;

            &:hover {
                color: darkcyan;
                border-color: darkcyan;
            }
        }
    }
}



</style>
