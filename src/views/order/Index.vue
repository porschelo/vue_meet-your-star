<template>
    <div>
        <div class="j_order_wrapper">
            <!-- @@include('layout/header.html') -->
            <!-- title -->
            <div class="j_title">
                <div class="j_bigtitle">
                    <img
                        src="/images/appointment/earth2.png"
                        alt=""
                        id="earth"
                    />
                    <h1>訂單確認</h1>
                    <img
                        src="/images/appointment/earth2.png"
                        alt=""
                        id="earth"
                    />
                </div>

                <div class="j_subtitle">
                    <h4>— Order Confirm —</h4>
                </div>
            </div>

            <!-- 訂單確認 -->
            <div class="j_order">
                <!-- <img src="./images/order/orderpanel.png" alt="" class="j_order_img"> -->
                <!-- <div class="order_title"> -->
                <ul class="order_title">
                    <li>商品圖片</li>
                    <li>商品名稱</li>
                    <li>單件價格</li>
                    <li>數量</li>
                    <li class="money_rwd">小計</li>
                </ul>
                <!-- </div> -->
                <hr />
                <!-- 訂單1 -->
                <div
                    class="firstorder"
                    v-for="(item, index) in cartlist"
                    :key="`${index}`"
                >
                    <ul>
                        <li>
                            <img :src="item.productImg" alt="" class="fo_img" />
                        </li>
                        <li>
                            <h4>{{ item.productName }}</h4>
                        </li>
                        <li>
                            <h4>{{ item.productPrice }}</h4>
                        </li>
                        <li>
                            <h4>{{ item.count }}</h4>
                        </li>
                        <li class="money_rwd">{{ item.total }}</li>
                    </ul>
                </div>

                <!-- 小計 -->
                <div class="order_total">
                    <h4>合計：NT:{{ billTotal }}</h4>
                </div>
                <!-- 顧客資訊 -->
                <div class="j_customer">
                    <!-- form表單 -->
                    <form action="" :model="form" :rules="rules">
                        <div class="customer_left">
                            <div class="info_title">
                                <h4>訂購人資料</h4>
                                <h4>
                                    <input
                                        class="subTitle"
                                        type="checkbox"
                                        name="member"
                                        @change="sameMember"
                                    />同會員
                                </h4>
                            </div>
                            <div class="name">
                                <h4>A. 姓名</h4>
                                <input
                                    type="text"
                                    placeholder="請輸入文字"
                                    v-model.trim="name"
                                />
                            </div>

                            <div class="tel">
                                <h4>B. 聯絡電話</h4>
                                <input
                                    type="tel"
                                    name=""
                                    id=""
                                    placeholder="請輸入電話"
                                    v-model.number="phoneNun"
                                />
                            </div>
                            <div class="email">
                                <h4>C. 聯絡信箱</h4>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="請輸入信箱"
                                    v-model.trim="email"
                                />
                            </div>
                            <div class="comment">
                                <h4>D. 訂單備註(EX:建議收貨時間)</h4>
                                <div class="comment_word">
                                    <textarea
                                        name="Content"
                                        v-model="content"
                                    ></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="customer_right">
                            <div class="info_title">
                                <h4>送貨資料</h4>
                            </div>
                            <div class="docu_member">
                                <h4 id="member">
                                    收貨人資料
                                    <input
                                        type="checkbox"
                                        name="member"
                                        @change="sameBuyer"
                                    />同訂購人
                                </h4>
                            </div>
                            <div class="name">
                                <h4>A. 收件人名稱</h4>
                                <input
                                    type="text"
                                    placeholder="請輸入文字"
                                    v-model.trim="name2"
                                />
                            </div>

                            <div class="tel">
                                <h4>B. 收件人電話</h4>
                                <input
                                    type="tel"
                                    name=""
                                    id=""
                                    placeholder="請輸入電話"
                                    v-model.number="phoneNun2"
                                />
                            </div>

                            <div class="comment">
                                <h4>D. 訂單備註(EX:建議收貨時間)</h4>
                                <div class="comment_word">
                                    <textarea
                                        name="Content"
                                        v-model="content2"
                                    ></textarea>
                                </div>

                                <div class="order_pay">
                                    <label for="ammount">E. 付款方式</label
                                    ><br />
                                    <select name="payment" id="payment">
                                        <option value="credit card">
                                            信用卡付款(經由綠世界)
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="order_payment">
                                <button
                                    type="button"
                                    value="page"
                                    class="order_payment"
                                >
                                    前往結帳
                                </button>
                            </div>
                        </div>

                        <!-- 結帳按鈕 -->
                    </form>
                    <!-- <button type="button" value="page" class="order_payment">前往結帳</button> -->
                </div>
            </div>
            <!-- @@include('layout/footer.html') -->
            <myFooter></myFooter>
        </div>
    </div>
</template>

<script>
import myFooter from '@/components/myFooter';
import axios from 'axios';
// import axios from 'axios';

export default {
    data() {
        return {
            memberInfo: [],
            //購買人
            name: '',
            phoneNun: '',
            email: '',
            content: '',
            //收件人
            name2: '',
            phoneNun2: '',
            content2: '',
            form: {
                name: '',
                tel: '',
                phone: '',
                email: '',
                url: '',
            },
            rules: {
                tel: [
                    {
                        required: true,
                        pattern: /\d{4}-\d{3}-\d{3}/,
                        message: '手機號碼格式錯誤',
                        trigger: 'blur',
                    },
                ],
            },
            isSameMember: false,
            isSamePeopel: false,
        };
    },
    methods: {
        sameBuyer() {
            if (this.isSamePeopel === false) {
                this.isSameMember = !this.isSameMember;
                this.name2 = this.name;
                this.phoneNun2 = this.phoneNun;
                this.content2 = this.content;
            } else {
                this.name2 = '';
                this.phoneNun2 = '';
                this.content2 = '';
                this.isSamePeopel = !this.isSameMember;
            }
        },
        sameMember() {
            axios
                .post('http://localhost/meet_ur_heart/php/SelectMember.php', {
                    id: this.$store.state.loginID,
                })
                .then((res) => {
                    console.log(res);
                    this.memberInfo = res.data;
                    this.name = this.memberInfo[0].MEMBER_NAME;
                    this.phoneNun = this.memberInfo[0].MEMBER_PHONE;
                    this.email = this.memberInfo[0].MEMBER_EMAIL;
                });
        },
    },
    computed: {
        //取用vuex
        cartlist() {
            return this.$store.state.cartList;
        },
        billTotal() {
            let sumPrice = 0;
            this.cartlist.forEach((element) => {
                sumPrice += element.total;
            });
            return sumPrice;
        },
    },
    components: {
        myFooter,
    },
};
</script>

<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';

$color: #d6e0f7;
$h1: 52 * 0.7px;
$h2: 40 * 0.7px;
$h4: 30 * 0.7px;
$p: 30 * 0.7px;
$letter-spacing: 2.5;

.j_order_wrapper {
    background-image: url(/images/order/orderbg.png);
    //  height:2445*.7px;
    width: 100%;
    //  background-repeat: no-repeat;
    //  background-position:center ;
    background-size: cover;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    //  margin-top:100px ;

    .overlaymenu {
        .menulist {
            .nav-menu {
                ul {
                    li:nth-child(2) {
                        a {
                            color: yellow;
                        }
                    }
                }
            }
        }
    }
}

.j_order {
    border: 3px solid #ffffff;
    // height:1929*.7px;

    margin: 0 auto;
    max-width: 1636 * 0.7px;
    width: 90%;
    margin-top: 280 * 0.7px;
    padding-bottom: 100px;
    position: relative;
    @include rwd(mobile) {
        margin-top: 150 * 0.7px;
    }
    .money_rwd {
        @media all and(max-width:450px) {
            display: none;
        }
        // @include rwd(mobile){
        //     display:none;
        // }
    }
    // position: absolute;

    .order_title {
        padding-bottom: 40 * 0.7px;
        border-bottom: 2px solid #ddd;

        li {
            @include rwd(mobile) {
                font-size: $h4 - 6px;
                // text-align:;
            }
        }
    }
    ul {
        // border:1px solid green;

        max-width: 1187 * 0.7px;
        width: 100%;
        display: flex;
        color: $color;
        flex-grow: 1;
        margin: 0 auto;
        @include rwd(mobile) {
            font-size: $h4 - 6px;
        }
    }
    li {
        list-style: none;

        // width:400*.7px;
        width: 100%;
        margin-top: 74 * 0.7px;
        text-align: center;
        font-size: $h4;
        h4 {
            @include rwd(mobile) {
                font-size: $h4 - 6px;
                // text-align:left;
            }
        }
    }

    // img{
    //     position: absolute;
    //     pointer-events: none;
    //      width:100%;

    // }

    .j_order_img {
        max-width: 1636 * 0.7px;

        // height: 1400*.7px;
        height: 95%;
    }
}
.firstorder {
    max-width: 1187 * 0.7px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    color: $color;
    flex-grow: 1;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
    align-items: center;
    // padding-bottom: 40*.7px;
    border-bottom: 2px solid #ddd;
    ul {
        margin-bottom: 60 * 0.7px;
        width: 100%;
        // @include rwd(mobile){
        //     margin-bottom: 30*.7px;

        // }
    }
    li {
        list-style: none;
        width: 100%;
        margin-top: 54 * 0.7px;
        text-align: center;
        font-size: $h4;
        display: flex;
        justify-content: center;
        margin-bottom: 60 * 0.7px;
        @include rwd(mobile) {
            font-size: $h4 - 6px;
            margin-bottom: 30 * 0.7px;
        }

        // margin: 0 auto;
    }
    // img{
    //     display:block;
    //     margin:0 auto;
    //     text-align:center;
    //     width: 100%;
    //         // @include rwd(mobile){
    //         //     width:50%;
    //         // }

    // }
}
.fo_img {
    border-radius: 5px;
    display: block;
    max-width: 166.84 * 0.7px;
    width: 100%;
    text-align: center;
    @include rwd(mobile) {
        width: 166.84 * 0.7px / 2;
    }
}
.secondorder {
    // border-bottom: 2px solid #ddd;
    ul {
        border-bottom: 2px solid #ddd;
        padding-bottom: 40 * 0.7px;
    }
    li {
        list-style: none;
        width: 100%;
        margin-top: 54 * 0.7px;
        text-align: center;
        font-size: $h4;
        display: flex;
        justify-content: center;
        margin-bottom: 60 * 0.7px;
        width: 100%;
        @include rwd(mobile) {
            margin-bottom: 30 * 0.7px;
        }
        // border-bottom: 2px solid #ddd;
        // padding-bottom: 40*.7px;

        @include rwd(mobile) {
            font-size: $h4 - 6px;
        }

        // margin: 0 auto;
    }
}

.order_total {
    text-align: right;
    max-width: 1187 * 0.7px;
    width: 100%;
    margin: 0 auto;
    margin-top: 40 * 0.7px;
    margin-right: 50 * 0.7px;
    h4 {
        font-size: $h4;
        color: $color;

        @include rwd(mobile) {
            font-size: $h4 - 6px;
        }
    }
}
// customer order info
.j_customer {
    max-width: 1187 * 0.7px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-grow: 1;
    margin-top: 111 * 0.7px;
    color: $color;
    line-height: 1.5;

    // border:2px solid darkcyan;

    // flex-wrap: wrap;
    @include rwd(mobile) {
        flex-wrap: wrap;
    }
}

.customer_left {
    // max-width:728*.7px;
    width: 100%;
    input {
        width: 400 * 0.7px;
    }

    // margin-left: 42*.7px;
    // border:2px solid rgb(29, 46, 143);
    @include rwd(mobile) {
        margin-bottom: 50px;
        @include rwd(mobile) {
            padding-left: 30 * 0.7px;
        }
    }

    .info_title {
        margin-bottom: 10 * 0.7px;
        .subTitle {
            width: initial;
        }
    }
    .name {
        // max-width:700*.7px ;
        width: 100%;
        // border:1px solid gold;
        margin-bottom: 10 * 0.7px;
    }

    .tel {
        width: 100%;
        // border:1px solid gold;
        margin-bottom: 10 * 0.7px;
    }
    .email {
        width: 100%;
        // border:1px solid gold;
        margin-bottom: 10 * 0.7px;
    }
    .comment {
        width: 100%;
        // border:1px solid gold;
        margin-bottom: 10 * 0.7px;
        textarea {
            width: 400 * 0.7px;
            height: 150 * 0.7px;
            margin-top: 10 * 0.7px;
            margin-bottom: 10 * 0.7px;
        }
    }
}

.customer_right {
    // max-width:727*.7px;
    width: 100%;

    // margin-left: 183*.7px;
    // padding-left: 42*.7px;
    // border:2px solid rgb(156, 214, 47);
    @include rwd(mobile) {
        padding-left: 30 * 0.7px;
    }

    .order_payment {
        text-align: right;
        margin-top: 40 * 0.7px;

        @include btn-module('.order_payment', 236, 93) {
            color: $color;
            text-align: center;
            @include rwd(mobile) {
                display: block;
                margin: 0 auto;
                font-size: 15px;
                width: 165.2 * 0.7px;
            }
        }
    }

    .info_title {
        margin-bottom: 10 * 0.7px;
    }
    .docu_member {
        margin-bottom: 10 * 0.7px;
        input {
            margin-right: 10 * 0.7px;
        }
    }
    .name {
        // max-width:700*.7px ;
        width: 100%;
        // border:1px solid gold;
        margin-bottom: 10 * 0.7px;
        input {
            width: 400 * 0.7px;
        }
    }

    .tel {
        width: 100%;
        // border:1px solid gold;
        margin-bottom: 10 * 0.7px;
        input {
            width: 400 * 0.7px;
        }
    }
    .email {
        width: 100%;
        // border:1px solid gold;
        margin-bottom: 10 * 0.7px;
    }
    .comment {
        width: 100%;
        // border:1px solid gold;
        margin-bottom: 10 * 0.7px;
        textarea {
            width: 400 * 0.7px;
            height: 150 * 0.7px;
            margin-top: 10 * 0.7px;
            margin-bottom: 10 * 0.7px;
        }
    }
    #payment {
        width: 400 * 0.7px;
    }
}
</style>
