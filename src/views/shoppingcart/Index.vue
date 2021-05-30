<template>
    <div>
        <!-- wrapper Star -->
        <div class="SC_wrapper">
            <!-- Title -->

            <div class="SC_title">
                <div class="SC_title-c">
                    <img src="images/shopping_cart/earth.png" alt="" />
                    <h1>購物車</h1>
                    <img src="images/shopping_cart/earth.png" alt="" />
                </div>

                <div class="SC_title-e">
                    <h4>一 Shopping Cart 一</h4>
                </div>
            </div>

            <!-- Title END-->

            <div class="SC_mid_block">
                <div class="list_info">
                    <table>
                        <thead>
                            <tr class="list_title">
                                <td>商品圖片</td>
                                <td>商品名稱</td>
                                <td>數量</td>
                                <td>金額</td>
                            </tr>
                            <tr>
                                <td colspan="5">
                                    <div class="line"></div>
                                </td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr
                                v-for="(item, index) in cartlist"
                                :key="`${index}`"
                            >
                                <td>
                                    <img
                                        :src="item.productImg"
                                        alt=""
                                        class="shopping_pic"
                                    />
                                </td>
                                <td>{{ item.productName }}</td>
                                <td>
                                    <input
                                        type="number"
                                        min="0"
                                        max="10"
                                        v-model="item.count"
                                        class="item_count"
                                        @change="changeCount(index)"
                                    />
                                </td>
                                <td>{{ item.total }}</td>
                                <td>
                                    <button class="delete_item">刪除</button>
                                </td>
                            </tr>

                            <tr>
                                <td colspan="5">
                                    <div class="line"></div>
                                </td>
                            </tr>

                            <!-- <tr>
                                <td>
                                    <img src="/images/shopping_cart/shopping2.png" alt="" class="shopping_pic">
                                </td>
                                <td>測試文字七個字</td>
                                <td>
                                    <input type="number" min="0" value="1" class="item_count">
                                </td>
                                <td>500</td>
                                <td>
                                    <button class="delete_item">刪除</button>
                                </td>
                            </tr>
                            
                            <tr>
                                <td colspan="5">
                                    <div class="line"></div>
                                </td>
                            </tr> -->

                            <!-- total block -->

                            <tr class="total_price">
                                <td colspan="4"></td>
                                <td class="total_price">
                                    總計:{{ totalPrice }} 元
                                </td>
                            </tr>

                            <!-- pay block -->

                            <tr class="pay_btn">
                                <td colspan="4"></td>
                                <td>
                                    <button
                                        class="pay_check"
                                        onclick="location.href='./order.html'"
                                    >
                                        前往付款
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!--SC_mid_block END -->
            </div>
            <myFooter></myFooter>
            <!--wrapper END  -->
        </div>

        <!-- template END -->
    </div>
</template>

<script>
import myFooter from '@/components/myFooter';
export default {
    data() {
        return {};
    },
    methods: {
        changeCount(index) {
            let cart = [];
            cart = this.$store.state.cartList;
            //要改newPdData.total
            cart[index].total = cart[index].price * cart[index].count;
            console.log(cart[index].total);
        },
    },
    computed: {
        //取用vuex
        cartlist() {
            return this.$store.state.cartList;
            // console.log(cartlist);
        },
        totalPrice() {
            // var sumPrice = 0;
            // for (let i = 0; i < this.cartlist.length; i++) {
            //     sumPrice = sumPrice + this.cartlist[i].total;
            // }
            // return sumPrice;
            var sumPrice = 0;
            this.cartlist.forEach((item) => {
                sumPrice += item.total;
            });
            return sumPrice;
        },
    },
    components: {
        myFooter,
    },
    mounted() {},
};
</script>

<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';

.SC_wrapper {
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
    background-image: url(/images/shopping_cart/member-bg2x.png);
    background-size: cover;

    .SC_title {
        // margin: 320*.7px 0 550*.7px 0;
        // border: $border red;

        color: $colorT;
        padding: (80px + 200px) * 0.7 0 0;

        margin-bottom: 280px * 0.7;

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
        }

        &-e {
            text-align: center;
            font-size: $p1;
        }
    }

    .SC_mid_block {
        // border: 1px solid red;
        max-width: 1300 * 0.7px;
        width: 100%;

        .list_info {
            border: 3px solid white;
            font-size: $h3;
            color: white;
            margin: 0 5%;

            @include rwd(mobile) {
                font-size: 12px;
            }

            table {
                text-align: center;
                width: 100%;
                margin-top: 4%;
                margin-bottom: 5%;

                td {
                    // border: 1px solid green;
                    vertical-align: middle;

                    @include rwd(mobile) {
                        letter-spacing: 1px;
                    }
                }

                .line {
                    width: 95%;
                    margin: 3% auto;
                    border-top: 2px solid gray;
                }

                .shopping_pic {
                    margin: 5% auto;
                    max-width: 200px * 0.7;
                    width: 100%;
                    border-radius: 5px;

                    @include rwd(mobile) {
                        max-width: 110px * 0.7;
                    }
                }

                .item_count {
                    width: 40px;
                }

                @include btn-module('.delete_item', 191, 75) {
                    color: white;
                    line-height: (75 * 0.7) - 6px;
                    margin: 10% auto;
                    font-size: $p2;

                    @include rwd(mobile) {
                        font-size: $p2 - 8px;
                        width: 110px * 0.7;
                        height: 50px * 0.7;
                        line-height: (50 * 0.7) - 6px;
                        letter-spacing: 1px;
                    }
                }

                @include btn-module('.pay_check', 191, 75) {
                    color: white;
                    line-height: (75 * 0.7) - 6px;
                    margin: 10% auto;
                    font-size: $p2;

                    @include rwd(mobile) {
                        font-size: $p2 - 8px;
                        width: 110px * 0.7;
                        height: 50px * 0.7;
                        line-height: (50 * 0.7) - 6px;
                        letter-spacing: 1px;
                    }
                }
            }
        }
    }
}
</style>
