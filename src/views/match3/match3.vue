<template>
    <div>
        <div class="jl_wrapper3">
            <div class="jl_top_fix">
                <div class="jl_match_percent">
                    <h4>相配指數</h4>
                    <h2>{{match_point}}</h2>
                </div>
                <div class="jl_pros">
                    <h3>優點：{{match_good}}</h3>
                </div>
            </div>

            <div class="jl_monster_combine">
                <div class="jl_left_monster">
                    <img
                        src="images/horoscope_page/monsterleft.png"
                        alt="星座左"
                    />
                </div>

                <div class="jl_right_monster">
                    <img
                        src="images/horoscope_page/monster-right.png"
                        alt="星座右"
                    />
                </div>
            </div>

            <div class="jl_bottom">
                <div class="jl_buy">
                    <h2>推薦開運小物</h2>
                    <div class="jl_lucky_charm_box">
                        <a href="/unstore.html">
                            <img
                                src="images/horoscope_page/removelater.png"
                                alt="開運小物圖"
                            />
                        </a>
                    </div>
                </div>

                <div class="jl_cons">
                    <h3>缺點：{{match_bad}}</h3>
                </div>
            </div>
            <!-- end of jl_bottom -->

            <div class="jl_match_comments">
                <span>
                    解析：{{match_article}}
                </span>

                <br />
                <div class="jl_unlock_buttons">
                    <button type="button" class="jl_button_money_payment">
                        付費解鎖
                    </button>

                    <button type="button" class="jl_button_paymentBypoints" @click="useStarPoint">
                        使用50星幣解鎖
                    </button>
                </div>
            </div>
           
            <div class="jl-footer">
                <myFooter></myFooter>
            </div>
        </div>
        <!-- Wrapper end -->
    </div>
</template>

<script>
import myFooter from '@/components/myFooter';
import axios from 'axios';
export default {

    data() {
        return {
            match_info:[],
            match_point:"",
            match_good:"",
            match_bad:"",
            match_article:"",
            member_info:[],
            member_StarPoint:0,
            islodata:false,
            Unlock:false,

        }
    },

    mounted() {
        axios
            .post('http://localhost/vue_meet_u_heart/php/Match.php', {
                Self_STAR_SIGN: this.$store.state.self_StarSign,
                Opp_STAR_SIGN: this.$store.state.opp_StarSign,
            })
            .then((res) => {
                console.log(res);
                this.match_info = res.data;
                // console.log(this.match_info);
                this.match_point = this.match_info[0].MATE_POINT;
                this.match_good = this.match_info[0].MATE_GOOD;
                this.match_bad = this.match_info[0].MATE_BAD;
                this.match_article = this.match_info[0].MATE_ARTICLE;
                
            });
    },

    methods: {
        useStarPoint(){
            if (this.$store.state.loginStatus == 0) {
                this.$store.commit('loginVisible', true);
            }else{
                if(this.islodata == false){
                    axios
                    .post('http://localhost/vue_meet_u_heart/php/SelectMember.php', {
                        id:this.$store.state.loginID,
                    })
                    .then((res1) => {
                        console.log(res1);
                        this.member_info = res1.data;
                        // console.log(this.match_info);
                        this.member_StarPoint = this.member_info[0].MEMBER_POINT;
                        this.islodata = true;

                        if(this.Unlock ==false){
                            if(this.member_StarPoint>=50){
                                this.member_StarPoint-=50;
                                this.Unlock= true;
                                alert("文章解鎖囉!!趕快去看看吧!")
                                console.log(this.member_StarPoint);
                                console.log(this.Unlock);
                            }
                        }
                    }); 
                }else{
                    if(this.Unlock==true){
                        alert('已經解鎖過文章囉!');
                    }
                }
               
            }
        }
    },


    computed: {
        selfStarSign(){
            return this.$store.state.self_StarSign;
        },
        oppStarSign(){
            return this.$store.state.opp_StarSign;
        }
    },


    components: {
        myFooter,
    },
};
</script>

<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';

.jl_wrapper3 {
    margin-top: 140px;
    background-image: url(/images/horoscope_page/match3_bg.png);
    max-width: 1920px;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    color: #b6c9f0;
    overflow: hidden;
    position: relative;

    @include rwd(mobile) {
        // 768px
        margin-top: 105px;
    }

    // border: 1px transparent solid;

    .jl_top_fix {
        overflow: hidden;
        display: flex;
        text-align: center;
        justify-content: space-between;
    }

    .jl_match_percent {
        //相配指數匡
        margin: 5%;
        text-align: center;
        width: 160px;
        height: 160px;
        border-top: 10px #b6c9f0 double;
        border-left: 5px #b6c9f0 dashed;
        border-right: 5px #b6c9f0 dashed;
        border-bottom: 10px #b6c9f0 double;
        border-radius: 50%;

        @include rwd(mobile) {
            margin-top: 5%;
            border-top: 5px #b6c9f0 double;
            border-left: 2px #b6c9f0 dashed;
            border-right: 2px #b6c9f0 dashed;
            border-bottom: 5px #b6c9f0 double;
            border-radius: 50%;
        }

        h4 {
            //相配指數
            margin-top: 30%;
            font-size: $h2;
        }
        h2 {
            //相配指數數值
            color: red;
            font-size: $h2;
            font-weight: bolder;
        }
        @include rwd(mobile) {
            // 768px
            margin-top: 20px;
            width: 80px;
            height: 80px;

            h2,
            h4 {
                font-size: $f;
            }
        }
    }

    .jl_pros h3 {
        //優點匡
        margin: 5%;
        font-size: $p1;
        padding: 4%;
        border-top: 10px #b6c9f0 double;
        border-left: 3px #b6c9f0 dashed;
        border-right: 3px #b6c9f0 dashed;
        border-bottom: 10px #b6c9f0 double;
        border-radius: 40px;

        @include rwd(mobile) {
            // 768px
            font-size: $p2;
            // border: 1px solid red;
        }
    }

    .jl_monster_combine {
        margin: 0 5% 0;
        display: flex;
        justify-content: center;
        align-items: center;
        // border: 2px solid red;
    }

    .jl_left_monster img {
        // border: 5px solid green;

        @include rwd(pad) {
            // 1199px
            height: 550px;
        }
        @include rwd(mobile) {
            // 768px
            height: 220px;
        }
    }

    .jl_right_monster img {
        // display: inline-block;
        // border: 1px solid yellow;

        @include rwd(pad) {
            // 1199px
            height: 550px;
        }
        @include rwd(mobile) {
            // 768px
            height: 220px;
        }
        // margin-top: 0%;
        // width:120%;
    }

    .jl_bottom {
        display: flex;
        justify-content: space-between;

        .jl_cons {
            padding: 3%;
            font-size: $p1;
            border-top: 10px #b6c9f0 double;
            border-left: 3px #b6c9f0 dashed;
            border-right: 3px #b6c9f0 dashed;
            border-bottom: 10px #b6c9f0 double;
            border-radius: 40px;
            margin: 5%;

            @include rwd(mobile) {
                // 768px
                font-size: $p2;
            }
        }
        .jl_buy {
            //推薦開運小物
            text-align: center;
            margin: 5%;
            display: inline-block;
            font-size: $h2;
            // border: 3px solid red;

            @include rwd(mobile) {
                // 768px
                font-size: $p2;
                // border: 3px solid red;
                margin-right: 2%;
            }
            h2 {
                margin-bottom: 2%;
            }

            .jl_lucky_charm_box {
                border-top: 10px #b6c9f0 double;
                border-left: 3px #b6c9f0 dashed;
                border-right: 3px #b6c9f0 dashed;
                border-bottom: 10px #b6c9f0 double;
                border-radius: 40px;
                padding: 5%;

                img {
                    width: 100%;
                    border-radius: 20px;
                    // border: 5px solid pink;
                }
            }
        }
    }

    .jl_match_comments {
        margin: 5%;
        border-top: 10px #b6c9f0 double;
        border-left: 3px #b6c9f0 dashed;
        border-right: 3px #b6c9f0 dashed;
        border-bottom: 10px #b6c9f0 double;
        border-radius: 20px;
        padding: 3%;

        span {
            // 解析
            font-size: $p1;
            line-height: 1.6;

            @include rwd(mobile) {
                // 768px
                font-size: $p2;
            }
        }

        .jl_unlock_buttons {
            margin: 3% auto;

            @include btn-module('.jl_button_money_payment', 280, 100) {
                color: white;
                border: 4px solid #b6c9f0;
                height: 70px;
                margin-right: 5%;

                @include rwd(mobile) {
                    // 768px
                    width: 220px;
                    font-size: $f + 2px;
                    font-weight: bolder;
                    width: 140px;
                    height: 50px;
                }
            }

            @include btn-module('.jl_button_paymentBypoints', 300, 100) {
                color: white;
                height: 70px;
                margin-top: 3%;

                @include rwd(mobile) {
                    // 768px
                    width: 140px;
                    height: 50px;
                    font-size: $f;
                }
            }
        }
    }

    // end of contents

    .jl-footer {
        width: 100%;
        height: 200px;
        background-color: #44796a;
    }

    //nav-list 所在頁面樣式
    // .overlaymenu {
    // 	.menulist {
    // 		.nav-menu {
    // 			ul {
    // 				li:nth-child(3) {
    // 					a {
    // 						color: yellow;
    // 					}
    // 				}
    // 			}
    // 		}
    // 	}
    // }
}
</style>
