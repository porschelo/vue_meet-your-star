<template>
    <div class="wrapper_product-detail">
        <!-- 標題 -->
        <div class="unstore_title">
            <div class="unstore_title-c">
                <img src="/images/store/uv_icone.png" alt="" />
                <h1>宇宙商城</h1>
                <img src="/images/store/uv_icone.png" alt="" />
            </div>
            <div class="unstore_title-e">
                <h4>— Universe Store —</h4>
            </div>
        </div>

        <div class="product-detail_content" v-if="productData2">
            <div class="product-detail_top">
                <!-- 麵包屑 -->
                <div class="breadcrumb">
                    <ul class="breadcrumb_list">
                        <li><a href="#">開運商品</a></li>
                        <li>
                            <a href="#" @click.prevent="backPage">
                                {{ productData2.productType }}
                            </a>
                        </li>
                        <li>{{ productData2.productName }}</li>
                        <!-- <li>{{ productsArr[index].PRODUCT_NAME }}</li> -->
                    </ul>
                </div>
            </div>

            <div class="product-detail_main">
                <!-- 商品角度切換 -->
                <div class="pd-leftblock">
                    <div class="pd-img_block">
                        <img
                            :src="this.productData2.productImg"
                            v-if="showPro === 0"
                        />
                        <img
                            :src="productData2.productImg2"
                            v-if="showPro === 1"
                        />
                        <img
                            :src="productData2.productImg3"
                            v-if="showPro === 2"
                        />
                    </div>
                    <ul class="pd-btn_block">
                        <li @click="showPro = 0">
                            <img :src="productData2.productImg" alt="" />
                        </li>
                        <li @click="showPro = 1">
                            <img :src="productData2.productImg2" alt="" />
                        </li>
                        <li @click="showPro = 2">
                            <img :src="productData2.productImg3" alt="" />
                        </li>
                    </ul>
                </div>

                <!-- 商品簡介 -->
                <div class="pd-rightblock">
                    <!-- 愛心收藏 -->
                    <div class="pd-love">
                        <h2>{{ productData2.productName }}</h2>
                        <a class="addlick" @click.prevent="addlike">
                            <img
                                v-if="islike"
                                src="/images/store/loveicone.png"
                                alt=""
                            />
                            <img
                                v-else
                                src="/images/store/loveicone_click.png"
                                alt=""
                            />
                        </a>
                    </div>

                    <p>
                        {{ productData2.productPrf }}
                    </p>

                    <div class="pd-price">
                        <span>{{ totalNum() }}</span
                        >元
                        <!-- 綁定 :value -->
                        <select v-model="productData2.count">
                            <option disabled>-- 請選擇數量 --</option>
                            <option v-for="n in 10" :value="n" :key="n">
                                {{ n }}
                            </option>
                        </select>
                        <!-- <input v-model="addNum" min="1" />個 -->
                    </div>

                    <div class="pd-butn">
                        <button class="pd-add" @click="addToCart">
                            加入購物車
                        </button>
                        <button class="pd-buy">立即購買</button>
                    </div>
                </div>
            </div>

            <!-- 商品細節介紹 -->
            <div class="product-detail_info">
                <h2>— 商品介紹 —</h2>
                <div class="pd-chart">
                    <!-- <a @click="getChart"> -->
                    <p>看看購買此商品的星座比例</p>
                    <!-- </a> -->
                    <canvas id="myChart1" width="400" height="400"></canvas>
                </div>
                <div class="pd-more">
                    <p>
                        {{ productData2.productInfo }}
                    </p>
                </div>
            </div>

            <!-- 商品評價 -->

            <div class="product-detail_evaluation">
                <h2>— 商品評價 —</h2>
                <hr />
                <div class="pd-member">
                    <div class="pd-photo">
                        <img src="/images/store/member_pc.jpg" alt="" />
                    </div>
                    <div class="pd-name">
                        <p>applebirdcat</p>
                        <p>2021/05/20</p>
                    </div>
                    <div class="pd-star">
                        <label class="star-item" for="item01"></label>
                        <input type="radio" name="item" id="item01" checked />
                        <label class="star-item" for="item02"></label>
                        <input type="radio" name="item" id="item02" />
                        <label class="star-item" for="item03"></label>
                        <input type="radio" name="item" id="item03" />
                        <label class="star-item" for="item04"></label>
                        <input type="radio" name="item" id="item04" />
                        <label class="star-item" for="item05"></label>
                        <input type="radio" name="item" id="item05" />
                    </div>
                </div>
                <p>
                    超級喜歡！一戴上馬上感覺像喝了蠻牛！精神都來了！推薦大家都來買！
                </p>
            </div>

            <!-- 可能喜歡的商品 -->
            <div class="product-detail_like">
                <h2>— 您可能會喜歡 —</h2>

                <div class="pd_swiper" crs>
                    <div class="index_prbtn pd_prbtn">
                        <a href="">
                            <img src="/images/index/prbtn.png" alt="" />
                        </a>
                    </div>
                    <div class="swiper-container mySwiper gap">
                        <swiper class="swiper-wrapper" :options="swiperOption">
                            <swiper-slide class="swiper-slide">
                                <div class="pd_product1">
                                    <img
                                        src="/images/store/maylike-1.jpg"
                                        alt=""
                                    />
                                    <h4>天然擴香健康石</h4>
                                </div>
                            </swiper-slide>

                            <swiper-slide class="swiper-slide">
                                <div class="pd_product2">
                                    <img
                                        src="/images/store/maylike-2.jpg"
                                        alt=""
                                    />
                                    <h4>冥王星晶石手鍊</h4>
                                </div>
                            </swiper-slide>

                            <swiper-slide class="swiper-slide">
                                <div class="pd_product3">
                                    <img
                                        src="/images/store/maylike-3.jpg"
                                        alt=""
                                    />
                                    <h4>德國花果茶與乾燥花盒</h4>
                                </div>
                            </swiper-slide>

                            <swiper-slide class="swiper-slide">
                                <div class="pd_product4">
                                    <img
                                        src="/images/store/maylike-4.jpg"
                                        alt=""
                                    />
                                </div>
                                <h4>德國花果茶與乾燥花盒</h4>
                            </swiper-slide>

                            <swiper-slide class="swiper-slide">
                                <div class="pd_product5">
                                    <img
                                        src="/images/store/maylike-5.jpg"
                                        alt=""
                                    />
                                </div>
                                <h4>德國花果茶與乾燥花盒</h4>
                            </swiper-slide>
                        </swiper>
                    </div>

                    <div class="index_nextbtn pd_nextbtn">
                        <a href="">
                            <img src="/images/index/nxbtn.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <my-footer></my-footer>
    </div>
</template>
<script>
import myFooter from '@/components/myFooter';
import Chart from 'chart.js/auto';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import axios from 'axios';
// import style (<= Swiper 5.x)
import 'swiper/dist/css/swiper.css';

export default {
    name: 'carrousel',

    data() {
        return {
            showPro: 0,
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: true,

                navigation: {
                    nextEl: '.index_nextbtn',
                    prevEl: '.index_prbtn',
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

            islike: 1,
            //     productName: '七星陣水晶原石能量陣',
            //     productImg1: '/images/store/healthP-1.png',
            //     productImg2: '',
            //     productImg3: '',
            //     productType: '',
            //     price: 500,
            //     count: 1,
            //     //  price: 500,
            //     // count: 1,
            // },
            productData2: null,
        };
    },

    components: {
        Swiper,
        SwiperSlide,
        myFooter,
    },

    methods: {
        getChart() {
            var ctx = document.getElementById('myChart1').getContext('2d');
            new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: [
                        '牡羊座',
                        '金牛座',
                        '雙子座',
                        '巨蟹座',
                        '獅子座',
                        '處女座',
                        '天秤座',
                        '天蠍座',
                        '射手座',
                        '摩羯座',
                        '水瓶座',
                        '雙魚座',
                    ],
                    datasets: [
                        {
                            label: '# of Votes',
                            data: [12, 19, 3, 5, 2, 3, 8, 6, 2, 13, 15, 3],
                            backgroundColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(188,70,254,1)',
                                'rgba(119,105,127,0.89)',
                                'rgba(178,76,102,0.87)',
                                'rgba(190,215,117,0.86)',
                                'rgba(56,215,241,0.49)',
                                'rgba(121,161,224,0.71)',
                            ],
                            borderColor: [
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                                'rgb(255, 255, 255)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
        addToCart() {
            let newPdData = {};
            if (this.$store.state.cartList.length === 0) {
                newPdData = { ...this.productData2 };
                newPdData.total = this.totalNum();
                this.$store.dispatch('addToCart', newPdData);
            } else {
                //用於後面的判斷式
                let idcheck = true;
                //for loop寫法
                // for (let i = 0; i < this.$store.state.cartList.length; i++) {
                //     if (
                //         this.$store.state.cartList[i].productId ===
                //         this.productData2.productId
                //     ) {
                //         idcheck = false;
                //         alert('此商品已加入購物車囉');
                //     }
                // }
                this.$store.state.cartList.forEach((element) => {
                    if (element.productId === this.productData2.productId) {
                        idcheck = false;
                        alert('此商品已加入購物車囉，請去購物車調整數量');
                    }
                });
                if (idcheck === true) {
                    newPdData = { ...this.productData2 };
                    newPdData.total = this.totalNum();
                    console.log(newPdData);
                    this.$store.dispatch('addToCart', newPdData);
                }
            }
            // this.$store.state.cartList[productId] =

            // if (
            //     this.productData2.productId ===
            //     this.$store.state.cartList[0].productId
            // ) {
            //     alert('此商品已加入購物車囉！');
            // } else {
            //     let newPdData = {};
            //     newPdData = { ...this.productData2 };
            //     newPdData.total = this.totalNum();
            //     this.$store.dispatch('addToCart', newPdData);
            // }
        },
        addlike() {
            if (this.$store.state.loginStatus == 0) {
                this.$store.commit('loginVisible', true);
            } else {
                if (this.islike == 1) {
                    this.islike = 0;

                    axios.post(
                        'http://localhost/tfd101/project/g3/php/product_addlike_select.php',
                        {
                            memberId: this.$store.state.loginID,
                            productId: this.productData2.productId,
                        }
                    );
                    // .then((res) => {});
                } else {
                    let yes = confirm('請問是否確定取消收藏商品？');
                    if (yes) {
                        this.islike = 1;
                        axios.post(
                            'http://localhost/tfd101/project/g3/php/product_addlike_delete.php',
                            {
                                memberId: this.$store.state.loginID,
                                productId: this.productData2.productId,
                            }
                        );
                    }
                }
            }
        },
        typeChange(value) {
            switch (value) {
                case '1':
                    this.productData2.productType = '工作';
                    break;
                case '2':
                    this.productData2.productType = ' 健康';
                    break;
                case '3':
                    this.productData2.productType = ' 愛情';
                    break;
                case '4':
                    this.productData2.productType = '學業';
                    break;
            }
        },
        backPage() {
            this.$router.push({
                path: '/unstore',
            });

            this.$store.commit('backtoPage', this.productsArr[0].PRODUCT_TYPE);
            //現在this.productType ="學業" 但傳到vuex要傳數字
        },
        totalNum() {
            if (
                this.productData2 &&
                this.productData2.productPrice &&
                this.productData2.count
            ) {
                return parseInt(
                    this.productData2.productPrice * this.productData2.count
                );
            }
            return this.productData2.productPrice;
        },
    },
    created() {
        // this.getChart();
        //抓網址
        let urlParams = new URLSearchParams(window.location.search);
        let id = urlParams.get('id');
        axios
            .post(
                'http://localhost/tfd101/project/g3/php/product_detail_select.php',
                {
                    productId: id,
                    //送去php 被點擊商品的id
                }
            )
            .then((res) => {
                this.productsArr = res.data;
                //productData先暫存
                const productData = {};
                // console.log(res);
                productData.productName = this.productsArr[0].PRODUCT_NAME;
                productData.productImg = this.productsArr[0].PRODUCT_IMG;
                productData.productImg2 = this.productsArr[0].PRODUCT_IMG2;
                productData.productImg3 = this.productsArr[0].PRODUCT_IMG3;
                productData.productType = this.productsArr[0].PRODUCT_TYPE;
                productData.productPrice = parseInt(
                    this.productsArr[0].PRODUCT_PRICE
                );
                productData.productInfo = this.productsArr[0].PRODUCT_INFO;
                productData.productPrf = this.productsArr[0].PRODUCT_PRF;
                productData.productId = this.productsArr[0].PRODUCT_ID;
                productData.count = 1;
                //把暫存資料productData一次用到data2
                this.productData2 = productData;

                //把類型的值帶入switch轉成文字
                // this.typeChange(this.productsArr[0].PRODUCT_TYPE);
                this.typeChange(this.productData2.productType); //this.productType='2'
                console.log(this.productData2);
            });
    },

    updated() {
        this.getChart();
    },
};
</script>
<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';

.wrapper_product-detail {
    background-image: url(/images/store/pdctD_bg.png);
    background-size: cover;
    box-sizing: border-box;

    /*===== 標題 =====*/
    .unstore_title {
        // border: 1px solid red;
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

    .product-detail {
        &_content {
            line-height: 1.6;
            // border: 1px solid yellow;
            width: 85%;
            // height: 500px;
            color: white;
            // overflow-y: scroll;
            @include center;
            margin-top: 40px;

            // background-image: url(../images/store/pdctFrame_bg.png);
            background-size: 100% 100%;
            background-repeat: no-repeat;

            // @include rwd(mobile){
            //     background-image: none;
            //     border: 3px solid white;
            //  }
        }

        &_top {
            /*===== 麵包屑 =====*/
            .breadcrumb {
                max-width: 1200px;
                margin: 0 auto;
                /* border: 1px solid red; */
                padding-top: 80px * 0.7;
                padding-bottom: 85px * 0.7;
                line-height: 1;
                @include rwd(mobile) {
                    padding-left: 20px;
                    padding-top: 40px;
                    padding-bottom: 40px;
                }
                a {
                    text-decoration: none;
                    color: white;
                }
            }
            .breadcrumb_list li {
                display: inline-block;
                margin-right: 10px;
                margin-top: 20px;

                &:before {
                    content: '/';
                    margin-right: 10px;
                }
                &:first-child:before {
                    content: ' ';
                }
            }
        }

        &_main {
            // border: 1px solid red;
            width: 85%;
            @include center;
            display: flex;
            @include rwd(mobile) {
                display: block;
            }

            /*===== 商品角度切換 =====*/
            .pd-leftblock {
                // border: 1px solid yellow;
                width: 50%;
                padding: 40px;
                padding-top: 0;
                @include rwd(mobile) {
                    width: 100%;
                    padding: 0;
                }
            }

            .pd-img_block {
                img {
                    width: 100%;
                    border-radius: 20px;
                    margin-bottom: 10px;
                }
            }

            .pd-btn_block {
                display: flex;
                li {
                    width: calc((100% - 60px) / 3);
                    border-radius: 20px;
                    margin: 0 10px;
                }
                img {
                    border-radius: 20px;
                    width: 100%;
                }
            }

            /*===== 商品簡介 =====*/
            .pd-rightblock {
                width: 50%;
                // padding: 50px;
                p {
                    margin-top: 70px;
                    font-size: $p2;
                }
                @include rwd(mobile) {
                    width: 100%;
                    padding: 10px;

                    p {
                        font-size: $p2 - 3px;
                    }
                }
                /*===== 愛心收藏 =====*/
                .addlick {
                    cursor: pointer;
                }
                .pd-love {
                    margin-top: 30px;
                    display: flex;
                    align-items: center;
                    h2 {
                        font-size: $h2;
                        margin-right: 50px;
                    }
                    img {
                        width: 40px;
                    }
                    @include rwd(mobile) {
                        margin-top: 50px;
                        h2 {
                            font-size: $h2 - 6px;
                        }
                    }
                }
            }

            .pd-price {
                font-size: $h3;
                margin-top: 120px;
                margin-bottom: 50px;
                text-align: right;
                input {
                    width: 50px;
                    height: 30px;
                    font-size: $p1;
                    margin-left: 20px;
                    border-radius: 5px;
                }
                @include rwd(mobile) {
                    font-size: $h3 - 6px;
                    text-align: center;
                    input {
                        font-size: $p1 - 6px;
                    }
                }
            }
            .pd-butn {
                display: flex;
                justify-content: center;
            }

            @include btn-module('.pd-add', 236, 93) {
                color: white;
                margin-right: 10px;
                margin-left: 40px;

                @include rwd(mobile) {
                    font-size: $h3 - 8px;
                    width: 170 * 0.7px;
                    height: 80 * 0.7px;
                    margin-left: 0px;
                }
            }

            @include btn-module('.pd-buy', 236, 93) {
                color: white;
                @include rwd(mobile) {
                    font-size: $h3 - 8px;
                    width: 170 * 0.7px;
                    height: 80 * 0.7px;
                }
            }
        }

        /*===== 商品細節介紹 =====*/
        &_info {
            width: 80%;
            @include center;
            h2 {
                text-align: center;
                font-size: $h2;
                margin-top: 50px;
                margin-bottom: 56px;
                @include rwd(mobile) {
                    font-size: $h2 - 6px;
                }
            }
            .pd-chart {
                width: 50%;
                text-align: center;
                @include center;
                margin-bottom: 56px;
                @include rwd(mobile) {
                    width: 100%;
                }
                a {
                    cursor: pointer;
                }
                p {
                    margin-bottom: 20px;
                }
            }
        }

        /*===== 商品評價 =====*/
        &_evaluation {
            width: 70%;
            @include center;
            h2 {
                text-align: center;
                font-size: $h2;
                margin-top: 80px;
                margin-bottom: 56px;
                @include rwd(mobile) {
                    font-size: $h2 - 6px;
                }
            }

            hr {
                color: white;
                height: 1px;
            }

            .pd-member {
                border-top: 1px solid white;
                padding-top: 10px;
                display: flex;
                position: relative;
                @include rwd(mobile) {
                    display: block;
                }
            }

            .pd-photo {
                img {
                    border-radius: 50%;
                }
            }

            .pd-name {
                padding-left: 20px;
                padding-top: 10px;
                @include rwd(mobile) {
                    padding-left: 0;
                    margin-bottom: 10px;
                }
            }

            .pd-star {
                position: absolute;
                right: 0;
                top: 20%;
                display: inline-block;
                font-size: 0;
            }
            .star-item {
                display: inline-block;
                width: 20px;
                height: 20px;
                cursor: pointer;
                background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAMAAADJ7yrpAAAAYFBMVEUAAAD92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92Un92UmCTPEWAAAAH3RSTlMA9iwe++hAgPLJo13i3Td8JO3Sk4xtYkYUC76cVBIjGgBFCwAAAMtJREFUKM+1kUkOhCAQRUEFBHGep67737JRlEFNJ73wbyAv9WtRD/1O3z/AqrqzDqC7spEAkPECGagwlwRJE28wbpJAk5xjcIJ5rmBBwAsp9nLpsvJYkMWWxRk6QrHZSJFJesIU2UQnjCwLwSQ0kG4zQmzzdmcCuA5VocaQGNiyQX8G1qK/8q6jNH1wtCx3RxwhfnUkM3Vs6ToSdNUDK52NI6JL+4R1JD/HYaXriOsP9xxN+p08R0JV1ZlnzxELRBSJIPccSe1IvufoCxGAFoLwSVOBAAAAAElFTkSuQmCC')
                    center top no-repeat;
            }
            input[type='radio'] {
                position: absolute;
                clip: rect(0, 0, 0, 0);
            }
            input[type='radio']:checked ~ .star-item {
                background-position: center bottom;
            }
            .pd-star:hover label.star-item {
                background-position: center top;
            }
            label.star-item:hover ~ .star-item {
                background-position: center bottom;
            }
        }

        /*===== 可能喜歡的商品 =====*/
        &_like {
            width: 90%;
            @include center;
            text-align: center;

            h2 {
                text-align: center;
                font-size: $h2;
                margin-top: 80px;
                margin-bottom: 56px;
                @include rwd(mobile) {
                    font-size: $h2 - 6px;
                }
            }

            .pd_swiper {
                display: flex;
                justify-content: center;
                align-items: center;
                .pd_prbtn {
                    margin-right: 20px;
                    width: 100px;
                }
                .pd_nextbtn {
                    margin-left: 20px;
                    width: 100px;
                }
                img {
                    width: 100%;
                }
            }

            .swiper-slide {
                img {
                    border: 5px solid $colorBd;
                }
            }
        }
    }

    .pd-footer {
        height: 200px;
        background-color: #302b23;
    }

    /*===== header 所在頁面 =====*/
    .overlaymenu {
        .menulist {
            .nav-menu {
                ul {
                    li:nth-child(4) {
                        a {
                            color: yellow;
                        }
                    }
                }
            }
        }
    }
}
</style>
