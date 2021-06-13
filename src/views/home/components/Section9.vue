<template>
    <div class="i-scetion9">
        <!-- <swiper class="swiper" :options="swiperOption">
           
        </swiper> -->

        <div class="section9_boxTop">
            <!-- box1 -->
            <div class="unstore_title">
                <div class="unstore_title-c">
                    <img src="images/store/uv_icone.png" alt="" />
                    <h1>每日運勢</h1>
                    <img src="images/store/uv_icone.png" alt="" />
                </div>
                <div class="unstore_title-e">
                    <p>— Daily horoscope —</p>
                </div>
            </div>
            <!-- Swiper -->
            <div class="index_swiper crs">
                <div class="index_prbtn">
                    <a href="">
                        <img src="/images/index/prbtn.png" alt="" />
                    </a>
                </div>
                <div class="swiper-container mySwiper gap">
                    <swiper class="swiper-wrapper" :options="swiperOption">
                        <swiper-slide
                            class="swiper-slide"
                            v-for="(item, index) in signDaily"
                            :key="index"
                        >
                            <router-link
                                :to="{
                                    name: 'Starsign',
                                    query: { id: index + 1 },
                                }"
                            >
                                <div class="sing_info1">
                                    <img
                                        class="info_img"
                                        :src="item.DAILY_IMG"
                                        alt=""
                                    />
                                    <!-- src="/images/index/info_Img/sing1.svg" -->
                                    <h3 class="inner_text">
                                        {{ item.DAILY }}
                                    </h3>
                                </div>
                            </router-link>
                        </swiper-slide>

                        <!-- <swiper-slide class="swiper-slide">
                            <a href="starsign.html">
                                <div class="sing_info2">
                                    <img
                                        class="info_img"
                                        src="/images/index/info_Img/sing2.svg"
                                        alt=""
                                    />
                                    <h3 class="inner_text">
                                        今天的你想像力、洞察力強，如果是從事創意
                                        工作者在今天能好好發揮，但也要避免...
                                    </h3>
                                </div>
                            </a>
                        </swiper-slide>

                        <swiper-slide class="swiper-slide">
                            <a href="starsign.html">
                                <div class="product_info3">
                                    <img
                                        class="info_img"
                                        src="/images/index/info_Img/sing3.svg"
                                        alt=""
                                    />
                                    <h3 class="inner_text">
                                        今天的你想像力、洞察
                                        力強，如果是從事創意
                                        工作者在今天能好好發 揮，但也要避免...
                                    </h3>
                                </div>
                            </a>
                        </swiper-slide>

                        <swiper-slide class="swiper-slide">
                            <a href="starsign.html">
                                <div class="product_info4">
                                    <img
                                        class="info_img"
                                        src="/images/index/info_Img/sing1.svg"
                                        alt=""
                                    />
                                    <h3 class="inner_text">
                                        今天的你想像力、洞察
                                        力強，如果是從事創意
                                        工作者在今天能好好發 揮，但也要避免...
                                    </h3>
                                </div>
                            </a>
                        </swiper-slide> -->
                    </swiper>
                    <!-- <div class="swiper-pagination"></div> -->
                </div>

                <div class="index_nextbtn">
                    <a href="">
                        <img src="/images/index/nxbtn.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
        <div class="section9_boxButtom">
            <!-- box1 -->
            <div class="unstore_title">
                <div class="unstore_title-c">
                    <img src="images/store/uv_icone.png" alt="" />
                    <h1>火熱商品</h1>
                    <img src="images/store/uv_icone.png" alt="" />
                </div>
                <div class="unstore_title-e">
                    <p>— Air Supply —</p>
                </div>
            </div>
            <!-- Swiper -->
            <div class="index_swiper crs">
                <div class="index_prbtn2">
                    <a href="">
                        <img src="/images/index/prbtn.png" alt="" />
                    </a>
                </div>
                <div class="swiper-container mySwiper gap">
                    <swiper class="swiper-wrapper" :options="swiperOption2">
                        <swiper-slide
                            class="swiper-slide"
                            v-for="(item, index) in signProduct"
                            :key="index"
                        >
                            <router-link
                                :to="{
                                    name: 'ProductDetail',
                                    query: { id: item.PRODUCT_ID },
                                }"
                            >
                                <div class="sing_info1">
                                    <img
                                        class="info_img"
                                        :src="item.PRODUCT_IMG"
                                        alt=""
                                    />
                                    <h3 class="inner_text">
                                        {{ item.PRODUCT_NAME }}
                                    </h3>
                                </div>
                            </router-link>
                        </swiper-slide>
                    </swiper>
                    <!-- <div class="swiper-pagination"></div> -->
                </div>

                <div class="index_nextbtn2">
                    <a href="">
                        <img src="/images/index/nxbtn.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import axios from 'axios';
// import style (<= Swiper 5.x)
import 'swiper/dist/css/swiper.css';

export default {
    name: 'carrousel',

    data() {
        return {
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 40,
                loop: true,
                // autoplay: true,

                navigation: {
                    nextEl: '.index_nextbtn',
                    prevEl: '.index_prbtn',
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    996: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
            },
            swiperOption2: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: true,

                navigation: {
                    nextEl: '.index_nextbtn2',
                    prevEl: '.index_prbtn2',
                },
                breakpoints: {
                    996: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
            },
            signDaily: [],
            signProduct: [],
        };
    },
    mounted() {
        axios
            .post(
                'http://localhost/tfd101/project/g3/php/home_daily_select.php'
            )
            .then((res) => {
                // console.log(res);
                this.signDaily = res.data;
                // console.log(this.signDaily);
            });

        axios
            .post(
                'http://localhost/tfd101/project/g3/php/home_product_select.php'
            )
            .then((res) => {
                this.signProduct = res.data;
                // console.log(this.signProduct);
            });
    },

    components: {
        Swiper,
        SwiperSlide,
    },
};
</script>

<style lang="scss">
@import '../../../scss/mixins.scss';
@import '../../../scss/color.scss';
@import '../../../scss/var.scss';
@import '../../../scss/rwd.scss';

.i-scetion9 {
    position: relative;
    width: 100%;
    height: 2100px;
    padding-top: 10vw;
    background-image: url('/images/index/buttom_bg.svg');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    @include index-mobile {
        height: 1800px;
    }

    .section9_boxTop {
        padding-top: 450px;
        .unstore_title {
            // border: 1px solid red;
            color: $colorT;
            padding: 50px 0 80px;
            @include index-mobile {
                padding: 70px 0 80px;
            }
            &-c {
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 63px * 0.7;
                    height: 43px * 0.7;
                    margin-bottom: 5px;
                    @include index-mobile {
                        width: 63px * 0.5;
                        height: 43px * 0.5;
                    }
                }
                h1 {
                    font-size: $h1;
                    padding: 5px 20px 0px;
                    @include index-mobile {
                        font-size: $h1 - 8px;
                        padding: 5px 15px 0;
                    }
                }
            }
            &-e {
                text-align: center;
                font-size: $p1;
                @include index-mobile {
                    font-size: $p1 - 6px;
                }
            }
        }

        // ------ Swiper  ------
        .index_swiper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 2%;
            .index_prbtn {
                margin-right: 10px;
                img {
                    width: 40px;
                }
            }
            .index_nextbtn {
                margin-left: 10px;
                img {
                    width: 40px;
                }
            }
        }
        .swiper-wrapper {
            width: 95%;
            height: 100%;

            .swiper-slide {
                padding: 10px;
                text-align: center;
                font-size: 18px;

                background-color: rgba(218, 199, 199, 0.6);
                height: 350px;
                // height: 100%;
                width: 400px;
                border: 5px solid rgb(65, 121, 173);
                text-align: center;
                // border-radius: 55%;

                /* Center slide text vertically */
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                @include index-mobile {
                    height: 250px;
                }

                a {
                    text-decoration: none;
                    text-align: center;
                }
                .info_img {
                    display: block;
                    max-width: 90%;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    margin: 0 auto;
                    @include index-mobile {
                        width: 65%;
                        height: auto;
                        // padding-left: 5%;
                    }
                }
                .inner_text {
                    max-width: 280px;
                    width: 100%;
                    // height: 80px;
                    font-size: $p1;
                    line-height: 1.6;
                    color: rgb(248, 248, 248);
                    display: -webkit-box; //將元素設為盒子伸縮模型顯示
                    -webkit-box-orient: vertical; //伸縮方向設為垂直方向
                    -webkit-line-clamp: 4; //超出3行隱藏，並顯示省略號
                    overflow: hidden;
                    @include index-mobile {
                        max-width: 250px;
                        font-size: 6px;
                    }
                }
            }
        }
    }

    //section9_boxButtom

    .section9_boxButtom {
        .unstore_title {
            // border: 1px solid red;
            color: $colorT;
            padding: 80px 0;
            @include index-mobile {
                padding: 80px 0 70px;
            }
            &-c {
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 63px * 0.7;
                    height: 43px * 0.7;
                    margin-bottom: 5px;
                    @include index-mobile {
                        width: 63px * 0.5;
                        height: 43px * 0.5;
                    }
                }
                h1 {
                    font-size: $h1;
                    padding: 5px 20px 0px;
                    @include index-mobile {
                        font-size: $h1 - 8px;
                        padding: 5px 15px 0;
                    }
                }
            }
            &-e {
                text-align: center;
                font-size: $p1;
                @include index-mobile {
                    font-size: $p1 - 6px;
                }
            }
        }

        // ------ Swiper  ------
        .index_swiper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 2%;
            .index_prbtn2 {
                margin-right: 10px;
                img {
                    width: 40px;
                }
            }
            .index_nextbtn2 {
                margin-left: 10px;
                img {
                    width: 40px;
                }
            }
        }
        .swiper-wrapper {
            width: 95%;
            height: 100%;

            .swiper-slide {
                padding: 10px;
                text-align: center;
                font-size: 18px;

                background-color: rgba(218, 199, 199, 0.6);
                height: 350px;
                // max-width: 400px;
                // width: 100%;
                width: 400px;
                border: 5px solid rgb(65, 121, 173);
                // border-radius: 55%;

                /* Center slide text vertically */
                display: -webkit-box;
                display: -ms-flexbox;
                display: -webkit-flex;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                -webkit-justify-content: center;
                justify-content: center;
                -webkit-box-align: center;
                -ms-flex-align: center;
                -webkit-align-items: center;
                align-items: center;
                a {
                    text-decoration: none;
                }
                .info_img {
                    display: block;
                    max-width: 90%;
                    width: 100%;
                    height: 100%;
                    max-width: 300px;
                    height: 285px;
                    margin: 0 auto;
                    @include index-mobile {
                        width: 80%;
                        height: auto;
                    }
                }
                .inner_text {
                    // max-width: 280px;
                    // height: 80px;
                    padding-top: 20px;
                    margin: 0 auto;
                    font-size: $p1;
                    line-height: 1.6;
                    color: rgb(248, 248, 248);
                    @include index-mobile {
                        max-width: 250px;
                        font-size: 8px;
                    }
                }
            }
        }
    }
}
</style>
