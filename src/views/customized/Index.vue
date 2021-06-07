<template>
    <div class="wrapper_customized">
        <div class="customized_section">
            <div class="customized_title">
                <div class="customized_title-c">
                    <img src="/images/store/uv_icone.png" alt="" />
                    <h1>宇宙商城</h1>
                    <img src="/images/store/uv_icone.png" alt="" />
                </div>
                <div class="customized_title-e">
                    <h4>— Universe Store —</h4>
                </div>
            </div>

            <ul class="customized_sort">
                <li><router-link to="/unstore">健康</router-link></li>
                <li><router-link to="/unstore">愛情</router-link></li>
                <li><router-link to="/unstore">工作</router-link></li>
                <li><router-link to="/unstore">學業</router-link></li>
                <li>客製化</li>
            </ul>

            <div class="customized_content">
                <div class="customized_top">
                    <h3>Step1. 請選擇客製化商品</h3>

                    <ul>
                        <li @click="showPro = 0">
                            <img src="/images/store/cPd_1.jpg" alt="" />
                            <h4>悠遊卡</h4>
                        </li>
                        <li @click="showPro = 4">
                            <img src="/images/store/cPd_2.jpg" alt="" />
                            <h4>Ｔ恤</h4>
                        </li>
                        <li @click="showPro = 8">
                            <img src="/images/store/cPd_3.jpg" alt="" />
                            <h4>抱枕</h4>
                        </li>
                        <li @click="showPro = 12">
                            <img src="/images/store/cPd_4.jpg" alt="" />
                            <h4>馬克杯</h4>
                        </li>
                    </ul>
                </div>

                <div class="customized_bottom">
                    <div class="customized_bottom-left">
                        <h3>Step2. 開始製作屬於你的小怪獸圖案吧！</h3>
                        <div class="customized_box">
                            <div class="cust_ms">
                                <h1>{{ message }}</h1>
                            </div>
                            <!-- 顯示商品 -->
                            <!-- 悠遊卡 -->
                            <img
                                src="/images/store/cardori.png"
                                alt=""
                                class="cust_prod card"
                                v-if="showPro == 0"
                            />
                            <!-- <img src="images/store/cardy.png" alt="" class="cust_prod card" v-if= "showPro == 1">
                            <img src="images/store/cardg.png" alt="" class="cust_prod card" v-if= "showPro == 2">
                            <img src="images/store/cardp.png" alt="" class="cust_prod card" v-if= "showPro == 3"> -->
                            <!-- Ｔ恤 -->
                            <img
                                src="/images/store/tshori.png"
                                alt=""
                                class="cust_prod"
                                v-if="showPro == 4"
                            />
                            <!-- <img src="images/store/tshy.png" alt="" class="cust_prod" v-if= "showPro == 5">
                            <img src="images/store/tshg.png" alt="" class="cust_prod" v-if= "showPro == 6">
                            <img src="images/store/tshp.png" alt="" class="cust_prod" v-if= "showPro == 7"> -->
                            <!-- 抱枕 -->
                            <img
                                src="/images/store/plwori.png"
                                alt=""
                                class="cust_prod"
                                v-if="showPro == 8"
                            />
                            <!-- <img src="images/store/plwy.png" alt="" class="cust_prod" v-if= "showPro == 9">
                            <img src="images/store/plwg.png" alt="" class="cust_prod" v-if= "showPro == 10">
                            <img src="images/store/plwp.png" alt="" class="cust_prod" v-if= "showPro == 11"> -->
                            <!-- 馬克杯 -->
                            <img
                                src="/images/store/cupori.png"
                                alt=""
                                class="cust_prod"
                                v-if="showPro == 12"
                            />
                            <!-- <img src="images/store/cupy.png" alt="" class="cust_prod" v-if= "showPro == 13">
                            <img src="images/store/cupg.png" alt="" class="cust_prod" v-if= "showPro == 14">
                            <img src="images/store/cupp.png" alt="" class="cust_prod" v-if= "showPro == 15"> -->

                            <!-- 顯示身體 -->
                            <img
                                src="/images/store/body1.png"
                                alt=""
                                class="cust_monster"
                                v-if="showBody == 0"
                            />
                            <img
                                src="/images/store/body3.png"
                                alt=""
                                class="cust_monster"
                                v-if="showBody == 1"
                            />
                            <img
                                src="/images/store/body2.png"
                                alt=""
                                class="cust_monster"
                                v-if="showBody == 2"
                            />
                            <img src="" alt="" />
                            <!-- 顯示眼睛 -->
                            <img
                                src="/images/store/eyes3.png"
                                alt=""
                                class="cust_eyes"
                                v-if="showEyes == 1"
                            />
                            <img
                                src="/images/store/eyes1.png"
                                alt=""
                                class="cust_eyes"
                                v-if="showEyes == 2"
                            />
                            <img
                                src="/images/store/eyes2.png"
                                alt=""
                                class="cust_eyes"
                                v-if="showEyes == 3"
                            />
                            <!-- 顯示嘴巴 -->
                            <img
                                src="/images/store/mouth1.png"
                                alt=""
                                class="cust_mouth"
                                v-if="showMouth == 1"
                            />
                            <img
                                src="/images/store/mouth2.png"
                                alt=""
                                class="cust_mouth"
                                v-if="showMouth == 2"
                            />
                            <img
                                src="/images/store/mouth3.png"
                                alt=""
                                class="cust_mouth"
                                v-if="showMouth == 3"
                            />
                            <!-- 顯示配件 -->
                            <img
                                src="/images/store/hat3.png"
                                alt=""
                                class="cust_fitting"
                                v-if="showFitting == 1"
                            />
                            <img
                                src="/images/store/hat2.png"
                                alt=""
                                class="cust_fitting"
                                v-if="showFitting == 2"
                            />
                            <img
                                src="/images/store/hat1.png"
                                alt=""
                                class="cust_fitting"
                                v-if="showFitting == 3"
                            />
                        </div>
                    </div>

                    <div class="customized_bottom-right">
                        <div class="cust_select-first">
                            <p>選擇身體</p>
                            <ul class="cust-body">
                                <li @click="showBody = 0">
                                    <img
                                        src="/images/store/body-one.png"
                                        alt=""
                                    />
                                </li>
                                <li @click="showBody = 1">
                                    <img
                                        src="/images/store/body-two.png"
                                        alt=""
                                    />
                                </li>
                                <li @click="showBody = 2">
                                    <img
                                        src="/images/store/body-three.png"
                                        alt=""
                                    />
                                </li>
                            </ul>
                            <p>選擇眼睛</p>
                            <ul class="cust-eyes">
                                <li @click="showEyes = 1">
                                    <img
                                        src="/images/store/eyes-one.png"
                                        alt=""
                                    />
                                </li>
                                <li @click="showEyes = 2">
                                    <img
                                        src="/images/store/eyes-two.png"
                                        alt=""
                                    />
                                </li>
                                <li @click="showEyes = 3">
                                    <img
                                        src="/images/store/eyes-three.png"
                                        alt=""
                                    />
                                </li>
                            </ul>
                            <p>選擇嘴巴</p>
                            <ul class="cust-mouth">
                                <li @click="showMouth = 1">
                                    <img
                                        src="/images/store/mouth-one.png"
                                        alt=""
                                    />
                                </li>
                                <li @click="showMouth = 2">
                                    <img
                                        src="/images/store/mouth-two.png"
                                        alt=""
                                    />
                                </li>
                                <li @click="showMouth = 3">
                                    <img
                                        src="/images/store/mouth-three.png"
                                        alt=""
                                    />
                                </li>
                            </ul>
                        </div>

                        <div class="cust_select-second">
                            <p>選擇配件</p>
                            <ul class="cust-fitting">
                                <li @click="showFitting = 1">
                                    <img
                                        src="/images/store/fitting-one.png"
                                        alt=""
                                    />
                                </li>
                                <li @click="showFitting = 2">
                                    <img
                                        src="/images/store/fitting-two.png"
                                        alt=""
                                    />
                                </li>
                                <li @click="showFitting = 3">
                                    <img
                                        src="/images/store/fitting-three.png"
                                        alt=""
                                    />
                                </li>
                            </ul>
                            <!-- <p>選擇背景</p>
                        <ul class="cust-color">
                            <li class="cust-white"></li>
                            <li class="cust-yellow"></li>
                            <li class="cust-green"></li>
                            <li class="cust-pink"></li>
                        </ul> -->
                            <p>輸入文字</p>
                            <div class="cust-word">
                                <input
                                    type="text"
                                    v-model="message"
                                    placeholder="請輸入文字"
                                    maxlength="5"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="customized_price">
                    <p>
                        <span>{{productData.price}}</span>元 / 個
                        <!-- <span v-if="showPro == 0">{{cardData.price}}</span>元 / 個 -->
                        <!-- <span v-if="showPro == 4">{{shirtData.price}}</span>元 / 個 -->
                        <select v-model="productData.count">
                            <option disabled>-- 請選擇數量 --</option>
                            <option v-for="n in 5" :value="n" :key="n">
                                {{ n }}
                            </option>
                        </select>個
                        共<span style="color: #4eacf2">{{ totalNum }}</span>元
                    </p>
                    <button class="cust-add">加入購物車</button>
                    <button class="cust-buy">立即購買</button>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
         <toTopBtn></toTopBtn>
    </div>
</template>
<script>
import myFooter from '@/components/myFooter';
import toTopBtn from '@/components/toTopBtn';
export default {
    data() {
        return {
            message: '',
            showPro: 0,
            showBody: 0,
            showEyes: 0,
            showMouth: 0,
            showFitting: 0,
            showColor: 0,
            productData:{
                price: 800,
                count: 1,
            },
            
        };
    },
    components: {
        myFooter,
        toTopBtn,
    },
    methods: {},

    computed: {
        totalNum() {
            return this.productData.price * this.productData.count;
        },
    },
};
</script>
<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/pagination.scss';
@import '@/scss/rwd.scss';
.wrapper_customized {
    background-image: url(/images/store/unstorebg1200.png);
    background-size: cover;
    box-sizing: border-box;

    @include rwd(pad) {
        background-image: url(/images/store/unstorebg.png);
    }

    @include rwd(mobile) {
        background-image: url(/images/store/pdctD_bg.png);
    }

    .customized_title {
        color: $colorT;
        padding: (80px + 240px) * 0.7 0 0;
        @include rwd(mobile) {
            padding: 220px * 0.7 0 0;
        }
        &-c {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 63px * 0.7;
                height: 43px * 0.7;
                margin-bottom: 5px;
            }
        }

        h1 {
            font-size: $h1;
            padding: 5px 20px 10px;
            @include rwd(mobile) {
                font-size: $h1 - 6px;
            }
        }

        &-e {
            text-align: center;
            font-size: $p1;
            @include rwd(mobile) {
                font-size: $p1 - 8px;
            }
        }
    }

    @include bookmark('.customized_sort');

    .customized_sort {
        li {
            a {
                text-decoration: none;
                color: #707070;
            }
        }
    }

    .customized {
        &_content {
            width: 85%;
            color: white;
            line-height: 1.6;
            @include center;

            background-image: url(/images/store/frameC.png);
            background-size: 100% 100%;
            background-repeat: no-repeat;
            margin-top: 11px;

            @include rwd(mobile) {
                background-image: none;
                border: 3px solid $colorPb;
                margin-top: 11px;
            }
        }

        &_top {
            padding-top: 60px;
            width: 85%;
            @include center;
            font-size: $h3;
            color: $colorPb;
            @include rwd(mobile) {
                font-size: $h3 - 6px;
                padding-top: 30px;
            }

            h3 {
                margin-bottom: 35px;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
            }
            li {
                width: calc((100% - 120px) / 4);
                border: 3px solid $colorPb;
                margin: 10px;
                position: relative;
                font-size: 0;
                cursor: pointer;
                &:hover {
                    border: 3px solid rgba(245, 255, 103, 0.5);
                }

                h4 {
                    position: absolute;
                    top: 70%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    font-size: $p1;
                }
                img {
                    width: 100%;
                }

                @include rwd(mobile) {
                    width: calc((100% - 40px) / 2);
                    margin: 0 5px 10px 5px;
                    h4 {
                        font-size: $p1 - 8px;
                    }
                }
            }
        }

        &_bottom {
            width: 80%;
            @include center;
            padding-top: 60px;
            display: flex;

            @include rwd(pad) {
                display: block;
            }
        }

        &_bottom-left {
            font-size: $h3;
            width: 60%;
            @include rwd(pad) {
                width: 100%;
            }
            @include rwd(mobile) {
                font-size: $h3 - 6px;
            }
            h3 {
                margin-bottom: 35px;
            }
        }

        &_box {
            width: 90%;
            // height: 420px;
            border: 3px solid $colorPb;
            margin-bottom: 56px;
            position: relative;
            @include rwd(mobile) {
                @include center;
            }

            &::before {
                content: '';
                width: 100%;
                // padding-bottom: 720 * 100% / 1280;
                padding-bottom: 85%;
                display: block;
            }
            .cust_ms {
                // border: 1px solid red;
                width: 150px;
                height: 30px;
                position: absolute;
                right: 35%;
                top: 70%;
                z-index: 20;
                @include rwd(mobile) {
                    right: 35%;
                    top: 70%;
                    width: 90px;
                    height: 20px;
                }
            }

            h1 {
                font-size: 16px;
                font-weight: bold;
                color: #707070;
                text-align: center;
                @include rwd(mobile) {
                    font-size: 10px;
                }
            }

            .cust_prod {
                width: 90%;
                position: absolute;
                right: 5%;
                top: 5%;
            }
            .card {
                width: 100%;
                right: 1%;
            }
            .cust_monster {
                width: 28%;
                position: absolute;
                right: 37%;
                top: 30%;
            }
            .cust_eyes {
                z-index: 20;
                width: 11%;
                position: absolute;
                right: 46%;
                top: 40%;
            }
            .cust_mouth {
                z-index: 20;
                width: 8%;
                position: absolute;
                right: 48%;
                top: 46%;
            }
            .cust_fitting {
                z-index: 100;
                width: 8%;
                position: absolute;
                right: 48%;
                top: 30%;
            }
        }

        &_bottom-right {
            width: 30%;
            margin-top: 60px;
            margin-left: 50px;
            font-size: $p1;
            img {
                width: 100%;
            }
            img:hover {
                animation: tada 1s 0.2s ease both;
                -moz-animation: tada 1s 0.2s ease both;
            }

            @keyframes tada {
                0% {
                    -webkit-transform: scale(1);
                }

                10%,
                20% {
                    -webkit-transform: scale(0.9) rotate(-3deg);
                }

                30%,
                50%,
                70%,
                90% {
                    -webkit-transform: scale(1.1) rotate(3deg);
                }

                40%,
                60%,
                80% {
                    -webkit-transform: scale(1.1) rotate(-3deg);
                }

                100% {
                    -webkit-transform: scale(1) rotate(0);
                }
            }
            @include rwd(pad) {
                display: flex;
                width: 100%;
                margin-left: 0;
            }

            @include rwd(mobile) {
                font-size: $p1 - 6px;
            }

            .cust_select-first {
                @include rwd(mobile) {
                    width: 48%;
                }
            }
            .cust_select-second {
                @include rwd(mobile) {
                    width: 47%;
                    margin-left: 5%;
                }
            }

            ul {
                display: flex;
                margin-bottom: 30px;
            }
            p {
                margin-bottom: 20px;
            }
            li {
                margin-right: 20px;
                cursor: pointer;
            }

            .cust-white {
                width: 30px;
                height: 30px;
                border-radius: 5px;
                background-color: white;
            }
            .cust-yellow {
                @extend .cust-white;
                background-color: #fae9bd;
            }

            .cust-green {
                @extend .cust-white;
                background-color: #b9e8d4;
            }
            .cust-pink {
                @extend .cust-white;
                background-color: #f8d7d7;
            }

            .cust-word {
                input {
                    width: 80%;
                    height: 48px * 0.7;
                    border-radius: 5px;
                    font-size: $p1;
                    @include rwd(mobile) {
                        font-size: $p1 - 6px;
                    }
                }
            }
        }

        &_price {
            // border: 1px solid red;
            width: 90%;
            @include center;
            padding-left: 10%;
            @include rwd(mobile) {
                padding-left: 0;
                text-align: center;
            }
            p {
                font-size: $p1;
                margin-top: -70px;
                margin-bottom: 56px;
                @include rwd(pad) {
                    margin-top: 50px;
                }
                @include rwd(mobile) {
                    font-size: $p1 - 6px;
                }
            }

            input {
                width: 50px;
                height: 30px;
                font-size: $p1;
                margin-left: 10px;
                border-radius: 5px;
            }

            @include btn-module('.cust-add', 236, 93) {
                color: white;
                margin-right: 20px;
                margin-bottom: 127px * 0.7;
                @include rwd(mobile) {
                    font-size: $h3 - 8px;
                    width: 170 * 0.7px;
                    height: 80 * 0.7px;
                    margin-right: 5px;
                }
            }

            @include btn-module('.cust-buy', 236, 93) {
                color: white;
                @include rwd(mobile) {
                    font-size: $h3 - 8px;
                    width: 170 * 0.7px;
                    height: 80 * 0.7px;
                }
            }
        }
    }

    // .overlaymenu {
    //     .menulist {
    //         .nav-menu {
    //             ul {
    //                 li:nth-child(4) {
    //                     a {
    //                         color: yellow;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
}

.cls-2:hover {
    fill: #f00;
}
</style>
