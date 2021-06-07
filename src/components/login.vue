<template>
    <div class="login-popup">
        <!-- login-popup -->
        <div class="popout loginpopup" v-if="loginBol">
            <div class="popup">
                <a
                    class="close_login_btn"
                    href=""
                    @click.prevent="onClose('login')"
                    >&times;</a
                >

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
                            v-model="userAccount"
                        />
                        <h3>密碼:</h3>
                        <input
                            type="text"
                            class="password wh"
                            id="password"
                            placeholder=""
                            required
                            v-model="userPassword"
                        />
                        <div class="logina">
                            <a href="#">忘記密碼？</a>
                            <a
                                href=""
                                class="gosignup"
                                @click.prevent="goSignup"
                                >註冊新帳號</a
                            >
                        </div>
                        <a href="">
                            <button
                                class="send"
                                id="send"
                                @click.prevent="loginCheck"
                            >
                                出發冒險
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- signup-popup -->
        <div class="popout signup" v-show="signBol">
            <div class="popup">
                <a
                    class="close_signup_btn"
                    href="#"
                    @click.prevent="onClose('signin')"
                    >&times;</a
                >

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
                            placeholder=" example@gmail.com"
                            required
                            v-model.trim="signAccount"
                        />
                        <h3>密碼:</h3>
                        <input
                            type="text"
                            class="passwords wh"
                            id="passwords"
                            placeholder=""
                            required
                            v-model.trim="signPassword"
                        />
                        <h3>確認密碼:</h3>
                        <input
                            type="text"
                            class="passwordss wh"
                            id="passwordss"
                            placeholder=""
                            required
                            v-model.trim="signPasswordCheck"
                        />
                        <h3>手機號碼:</h3>
                        <input
                            type="text"
                            class="cellp wh"
                            id="cellp"
                            placeholder=" 09xx-xxx-xxx"
                            required
                            v-model.trim="signCellphone"
                        />
                        <h3 @click="CheckStarSign">生日:</h3>
                        <input
                            type="text"
                            class="bhd wh"
                            id="bhd"
                            placeholder=" YYYY/MM/DD"
                            required
                            v-model.trim="signBirthdate"
                        />

                        <div class="signupa">
                            <a href="" class="gologin" @click.prevent="gologin"
                                >已有帳號？登入</a
                            >
                        </div>

                        <button class="sign" id="sign" @click="signCheck">
                            加入冒險
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- index-popup end -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            // login
            userAccount: '',
            userPassword: '',

            // signup
            signAccount:"",
            signPassword:"",
            signPasswordCheck:"",
            signCellphone:"",
            signBirthdate:"",
            signMemberPic:"",
            signMemberL_Pic:"",
            signStarsign:"",
            signMonth:0,
            signDay:0,
            monsterName:"",
            
        }
    },

    computed: {
        loginBol() {
            return this.$store.state.loginBol;
        },

        signBol() {
            return this.$store.state.signBol;
        },
    },

    methods: {
        onClose(event) {
            if (event == 'login') {
                this.$store.commit('loginVisible', false);
            } else if (event == 'signin') {
                this.$store.commit('signVisible', false);
            }
        },

        goSignup() {
            this.$store.commit('signVisible', true);
            this.$store.commit('loginVisible', false);
        },

        gologin() {
            this.$store.commit('loginVisible', true);
            this.$store.commit('signVisible', false);
        },

        loginCheck() {
            axios.post('http://localhost/vue_meet_u_heart/php/login.php',{
                    userAccount: this.userAccount,
                    userPassword: this.userPassword,
                })
                .then((res) => {
                    if (res.data.length == 1) {
                        alert('登入成功');
                        console.log(res);
                        this.$store.commit('loginVisible', false);
                        this.$store.commit('loginStatus', 1);
                        // console.log(res.data[0].MEMBER_icon);
                        let str = res.data[0].MEMBER_ICON;
                        let loginID = res.data[0].MEMBER_ID;
                        // console.log(loginID);
                        this.$store.dispatch('setmemberIcon', str);
                        this.$store.dispatch('setloginID', loginID);
                    } else {
                        alert('登入失敗,請重新輸入帳號或密碼');
                        // console.log(res);
                    }
                });
        },

        CheckStarSign(){
            let birthDay = this.signBirthdate.split('/')
            this.month = birthDay[1];
            this.day = birthDay[2];
            console.log(this.month,this.day);
            this.signStarsign = this.getAstro((this.month) ,(this.day) );
            console.log(this.signStarsign);

            if(this.signStarsign == "水瓶"){
                alert("水瓶座 Aquarius");
                this.signMemberPic="/images/membercentre/Aquarius.png";
                this.signMemberL_Pic="/images/membercentre/L_Aquarius.png";
                this.monsterName="水瓶座";
                
                }
            if(this.signStarsign == "雙魚"){
                alert("雙魚座 Pisces");
                this.signMemberPic="/images/membercentre/Pisces.png";
                this.signMemberL_Pic="/images/membercentre/L_Pisces.png";
                this.monsterName="雙魚座";
                
            }
            if(this.signStarsign == "牧羊"){
                alert("牧羊座 Aries");
                this.signMemberPic="/images/membercentre/Aries.png";
                this.signMemberL_Pic="/images/membercentre/L_Aries.png";
                this.monsterName="牡羊座";
            }
            if(this.signStarsign == "金牛"){
                alert("金牛座 Taurus");
                this.signMemberPic="/images/membercentre/Taurus.png";
                this.signMemberL_Pic="/images/membercentre/L_Taurus.png";
                this.monsterName="金牛座";
            }
            if(this.signStarsign == "雙子"){
                alert("雙子座 Gemini");
                this.signMemberPic="/images/membercentre/Gemini.png";
                this.signMemberL_Pic="/images/membercentre/L_Gemini.png";
                this.monsterName="雙子座";
            }
            if(this.signStarsign == "巨蟹"){
                alert("巨蟹座 Cancer");
                this.signMemberPic="/images/membercentre/Cancer.png";
                this.signMemberL_Pic="/images/membercentre/L_Cancer.png";
                this.monsterName="巨蟹座";
            }
            if(this.signStarsign == "獅子"){
                alert("獅子座 Leo");
                this.signMemberPic="/images/membercentre/Leo.png";
                this.signMemberL_Pic="/images/membercentre/L_Leo.png";
                this.monsterName="獅子座";
            }
            if(this.signStarsign == "處女"){
                alert("處女座 Virgo");
                this.signMemberPic="/images/membercentre/Virgo.png";
                this.signMemberL_Pic="/images/membercentre/L_Virgo.png";
                this.monsterName="處女座";
            }
            
            if(this.signStarsign == "天秤"){
                alert("天秤座 Libra");
                this.signMemberPic="/images/membercentre/Libra.png";
                this.signMemberL_Pic="/images/membercentre/L_Libra.png";
                this.monsterName="天秤座";
            }
            if(this.signStarsign == "天蠍"){
                alert("天蠍座 Scorpio");
                this.signMemberPic="/images/membercentre/Scorpio.png";
                this.signMemberL_Pic="/images/membercentre/L_Scorpio.png";
                this.monsterName="天蠍座";
            }
            if(this.signStarsign == "射手"){
                alert("射手座 Sagittarius");
                this.signMemberPic="/images/membercentre/Sagittarius.png";
                this.signMemberL_Pic="/images/membercentre/L_Sagittarius.png";
                this.monsterName="射手座";
            }
            if(this.signStarsign == "魔羯"){
                alert("魔羯座 Capricorn");
                this.signMemberPic="/images/membercentre/Capricorn.png";
                this.signMemberL_Pic="/images/membercentre/L_Capricorn.png";
                this.monsterName="魔羯座";
            }
            
            
        },

        // st

        getAstro(month,day){
            var s="魔羯水瓶雙魚牡羊金牛雙子巨蟹獅子處女天秤天蠍射手魔羯";
            var arr=[20,19,21,21,21,22,23,23,23,23,22,22];
            return s.substr(month*2-(day<arr[month-1]?2:0),2);
        },


        // en

        signCheck(){
            if(this.signAccount==""){
                alert("帳號欄位不可空白")
            }else if(this.signPassword==""){
                alert("密碼欄位不可空白")
            }else if(this.signPasswordCheck==""){
                alert("密碼確認欄位不可空白")
            }else if(this.signPassword!=this.signPasswordCheck){
                alert("密碼比對不相同,請重新檢查輸入")
            }else if(this.signCellphone==""){
                alert("手機號碼不可空白")
            }else if(this.signBirthdate==""){
                alert("生日欄位不可空白")
            }else{
                this.CheckStarSign();
                axios.post("http://localhost/vue_meet_u_heart/php/signup.php",
                    {
                        signAccount:this.signAccount,
                        signPassword:this.signPassword,
                        signMemberPic:this.signMemberPic,
                        signBirthdate:this.signBirthdate,
                        signCellphone:this.signCellphone,
                        signMemberL_Pic:this.signMemberL_Pic,
                        monsterName:this.monsterName,

                        
                    })
                alert("歡迎加入冒險行列")
                this.$store.commit('signVisible',false);
                this.$store.commit('loginVisible',true);
            }
        },
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

        @include btn-module('.send', 200, 90) {
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

        @include btn-module('.sign', 200, 90) {
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
