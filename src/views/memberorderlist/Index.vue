<template>
    <div>
        <!-- wrapper star -->
        <div class="MOL_wrapper">
        
            <!-- Title -->
            <div class="MOL_title">
                <div class="MOL_title-c">
                    <img src="images/memberorderlist/earth.png" alt="">
                    <h1>會員中心</h1>
                    <img src="images/memberorderlist/earth.png" alt="">
                </div>

                <div class="MOL_title-e">
                    <h4>一 Member Centre 一</h4>
                </div>
            </div>
            <!-- Title END-->

            <div class="MOL_midblock_out">
                
                <div class="list_tab">
                    <router-link to="membercentre" class="tab_btn">個人資料</router-link>
                    <router-link to="memberorderlist" class="tab_btn">訂單資料</router-link>
                    <router-link to="membercollection" class="tab_btn">我的收藏</router-link>
                </div>


                <div class="list_box">
                        <table>
                            <thead>
                                <tr class="list_title">
                                    <td>訂單編號</td>
                                    <td class="order_pic">商品圖片</td>
                                    <td class="order_name">商品名稱</td>
                                    <td>數量</td>
                                    <td>金額</td>
                                </tr>
                                <tr>
                                    <td colspan="5">
                                        <div class="line"></div>
                                    </td>
                                </tr>
                            </thead>

                            <tbody class="order_table">
                                <tr class="orderlist1">
                                    <td rowspan="2">
                                        <div class="numid">20210123</div>
                                        <button class="buyagain" onclick="location.href='./order.html'">再次購買</button>
                                    </td>
                                    <td><img src="/images/memberorderlist/list_item1.png" alt="" class="list_pica"></td>
                                    <td class="order_name">測試文字七個字</td>
                                    <td>1</td>
                                    <td>500</td>
                                </tr>
                                <tr>
                                    <td><img src="/images/memberorderlist/list_item2.png" alt="" class="list_pica"></td>
                                    <td class="order_name">宇宙能量手環</td>
                                    <td>1</td>
                                    <td>500</td>
                                </tr>

                                <tr class="total_price">
                                    <td colspan="2"></td>
                                    <td >共計 2 件</td>
                                    <td colspan="2" class="price">1000元</td>
                                </tr>

                                <tr>
                                    <td colspan="5">
                                        <div class="line"></div>
                                    </td>
                                </tr>

                                <!-- v-for -->

                                <tr class="orderlist1" v-for="list_info in mb_list" :key="list_info">
                                    <td rowspan="1">
                                        <div class="numid">{{list_info.LIST_ID}}</div>
                                        <button class="buyagain" onclick="location.href='./order.html'">再次購買</button>
                                    </td>
                                    <td><img :src="list_info.PRODUCT_IMG" alt="" class="list_pica"></td>
                                    <td class="order_name">{{list_info.PRODUCT_NAME}}</td>
                                    <td>{{list_info.PRODUCT_COUNT}}</td>
                                    <td>{{list_info.PRODUCT_PRICE}}</td>
                                </tr>

                                <!-- v-for end -->



                                <!-- <tr class="orderlist2">
                                    <td>
                                        <div class="numid">20210124</div>
                                        <button class="buyagain">再次購買</button>
                                    </td>
                                    <td><img src="/images/memberorderlist/list_item1.png" alt="" class="list_pica"></td>
                                    <td class="order_name">宇宙能量手環</td>
                                    <td>1</td>
                                    <td>600</td>
                                </tr>

                                <tr>
                                    <td colspan="2"></td>
                                    <td>共計 1 件</td>
                                    <td  colspan="2" class="price">600元</td>
                                </tr>


                                <tr>
                                    <td colspan="5">
                                        <div class="line"></div>
                                    </td>
                                </tr>

                                <tr class="orderlist3">
                                    <td>
                                        <div class="numid">20210125</div>
                                        <button class="buyagain">再次購買</button>
                                    </td>
                                    <td><img src="/images/memberorderlist/list_item1.png" alt="" class="list_pica"></td>
                                    <td class="order_name">宇宙能量手環</td>
                                    <td>1</td>
                                    <td>700</td>
                                </tr>

                                <tr>
                                    <td colspan="2"></td>
                                    <td>共計 1 件</td>
                                    <td colspan="2" class="price">700元</td>
                                </tr> -->

                            </tbody>
                        </table>
                    
                </div>
            </div>

            <myFooter></myFooter> 
            <!-- wrapper END-->
        </div>
    
        <!-- template END -->
    </div>
</template>

<script>
import axios from 'axios';
import myFooter from '@/components/myFooter'
export default {

    mounted() {
        axios.get('http://localhost/vue_meet_u_heart/php/memberlist.php',{
            params: { id: 10005 },
        })
            .then((res) => {
                console.log(res);
                this.mb_list = res.data;
            })
        
    },

    data() {
        return {
            mb_list:[],
        }
    },



    components: {
        myFooter,
        
    },
}
</script>


<style lang="scss">

    @import '@/scss/color.scss';
    @import '@/scss/var.scss';
    @import '@/scss/center.scss';
    @import '@/scss/mixins.scss';
    @import '@/scss/rwd.scss';

    // scss

    $font_size:(H1:52*.7px,
    H2:40*.7px,
    H3:35*.7px,
    H4:30*.7px,
    p:20*.7px);

$color:(white:#fff,
    gray:#CACACA,
    pink:#FFC2CF,
    lightblue:#D6E0F7,
    font_color:#777777,
);


$border :1px solid;







.MOL_wrapper {

    @include rwd("mobile") {
        // h1 {
        //     font-size: $h1 - 8px !important;
        // }

        // h2 {
        //     font-size: $h2 - 6px !important;
        // }

        // h3 {
        //     font-size: $h3 - 6px !important;
        // }

        // h4 {
        //     font-size: $p1 - 6px !important;
        // }


    }

    * {
        box-sizing: border-box;

    }

    img {
        max-width: 100%;
    }

    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(/images/memberorderlist/member-bg2x.png);
    background-size: cover;

    .MOL_title {

        color: $colorT;
        padding: (80px + 240px) * .7 0 0;

        margin-bottom: 280px*.7;

        &-c {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                width: 63px * .7;
                height: 43px * .7;
                margin-bottom: 5px;
            }
        }

        h1 {
            font-size: $h1;
            padding: 5px 20px 10px;
        }

        &-e {
            text-align: center;
            font-size: $p1;
        }
    }



    ;

    .MOL_midblock_out {

        // border: $border red;
        max-width: 1300*.7px;
        width: 100%;


        .list_tab {
            display: flex;
            justify-content: space-evenly;



            a {

                font-size: $h3;
                background-color: map-get($color, gray);
                color: map-get($color, font_color);
                max-width: 265*.7px;
                max-height: 75*.7px;
                width: 100%;
                border-radius: 20*.7px 20*.7px 0 0;
                line-height: 75*.7px;
                text-align: center;
                cursor: pointer;
                // margin-left: 37*.7px;
                text-decoration: none;

                @include rwd("mobile") {
                    width: 25%;
                    font-size: $h3 - 6px
                }

                &:nth-of-type(2) {
                    background-color: map-get($color, white);
                }

            }
        }

        .list_box {
            border: 3px solid white;
            font-size: $h3;
            color: map-get($color, white);
            margin: 0 5%;

            @include rwd("mobile") {

                font-size: 12px
            }

            table {
                text-align: center;
                width: 100%;
                margin-top: 4%;
                margin-bottom: 5%;

                @include rwd(mobile) {
                    line-height: 1.5;

                }





                @include btn-module('.buyagain', 191, 75) {
                    color: white;
                    line-height: (75*.7) - 6px;
                    margin: 10% auto;
                    font-size: $p2;

                    @include rwd(mobile) {
                        font-size: $p2 - 8px;
                        width: 110px*.7;
                        height: 50px*.7;
                        line-height: (50*.7) - 6px;
                        letter-spacing: 1px;

                    }

                }



                td {
                    vertical-align: middle;
                    border: 1px solid green;
                    letter-spacing: 2px;

                }

                .line {
                    width: 95%;
                    margin: 3% auto;
                    border-top: 2px solid gray;
                }

                .price,
                .numid {
                    color: map-get($color, pink);

                }

                .order_name,
                .order_pic {
                    @include rwd(mobile) {
                        text-align: left;
                        padding-left: 1%;
                    }
                }

                .list_pica {
                    margin: 5% auto;
                    max-width: 200px*.7;
                    width: 100%;
                    border-radius: 5px;

                    @include rwd(mobile) {
                        max-width: 110px*.7;
                    }


                }





            }
        }


    }


}


</style>