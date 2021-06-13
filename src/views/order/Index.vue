<template>
    <div>
        <div class="j_order_wrapper">
            <!-- @@include('layout/header.html') -->
            <!-- title -->
            <div class="j_title">
                <div class="j_bigtitle">
                    <img
                        src="images/appointment/earth2.png"
                        alt=""
                        id="earth"
                    />
                    <h1>訂單確認</h1>
                    <img
                        src="images/appointment/earth2.png"
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
                    <!-- <form action="" :model="form" :rules="rules"> -->
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
                                @blur="$v.name.$touch()"
                            />
                        </div>
                        <div
                            class="error"
                            v-if="$v.name.$error && !$v.name.required"
                        >
                            必填
                        </div>

                        <div class="tel">
                            <h4>B. 聯絡手機號碼</h4>
                            <input
                                type="tel"
                                name="tel1"
                                id="tel1"
                                placeholder="09xxxxxxxx"
                                v-model="phoneNun"
                                @blur="isPhone()"
                                @keyup="isPhone()"
                            />
                            <!-- @blur="$v.phone.$touch()"
                             v-if="$v.phone.$error && !$v.phone.required" -->
                        </div>
                        <div class="error" v-if="!isOkPhone">
                            {{ okTestPhone }}
                        </div>
                        <div class="email">
                            <h4>C. 聯絡信箱</h4>
                            <input
                                type="email"
                                name="email1"
                                id="email1"
                                placeholder="aaa@gmail.com"
                                v-model.trim="email"
                                @blur="$v.email.$touch()"
                            />
                        </div>

                        <div
                            class="error"
                            v-if="$v.email.$error && !$v.email.required"
                        >
                            必填
                        </div>
                        <div
                            class="error"
                            v-if="$v.email.$error && !$v.email.email"
                        >
                            Email格式錯誤
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
                                @blur="$v.name2.$touch()"
                            />
                        </div>
                        <div
                            class="error"
                            v-if="$v.name2.$error && !$v.name2.required"
                        >
                            必填
                        </div>

                        <div class="tel">
                            <h4>B. 收件人手機號碼</h4>
                            <input
                                type="tel"
                                name="tel2"
                                id="tel2"
                                placeholder="09xxxxxxxx"
                                v-model="phoneNun2"
                                @blur="isPhone2()"
                                @keyup="isPhone2()"
                            />
                        </div>
                        <div class="error" v-if="!isOkPhone2">
                            {{ okTestPhone2 }}
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
                                <label for="ammount">E. 付款方式</label><br />
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
                                <a @click.prevent="payFinish"> 前往結帳 </a>
                            </button>
                        </div>
                    </div>

                    <!-- 結帳按鈕 -->
                    <!-- </form> -->
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
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

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
            isOkPhone: true,
            isOkPhone2: true,
            okTestPhone: '必填',
            okTestPhone2: '必填',

            isSameMember: false,
            isSamePeopel: false,

            listIdArr: [],
            listId: 0,
        };
    },
    mixins: [validationMixin],

    validations: {
        name: {
            required,
        },
        name2: {
            required,
        },
        email: {
            required,
            email,
        },
        phone: {
            required,
            // isPhone,
        },
        phone2: {
            required,
            // isPhone,
        },
    },
    methods: {
        sameBuyer() {
            if (this.isSamePeopel === false) {
                this.isSamePeopel = !this.isSamePeopel;
                this.name2 = this.name;
                this.phoneNun2 = this.phoneNun;
                this.content2 = this.content;
            } else {
                this.name2 = '';
                this.phoneNun2 = '';
                this.content2 = '';
                this.isSamePeopel = !this.isSamePeopel;
            }
        },

        sameMember() {
            if (this.isSameMember === false) {
                this.isSameMember = !this.isSameMember;
                this.name = this.memberInfo[0].MEMBER_NAME;
                this.phoneNun = this.memberInfo[0].MEMBER_PHONE;
                this.email = this.memberInfo[0].MEMBER_EMAIL;
            } else {
                this.name = '';
                this.email = '';
                this.phoneNun = '';
                this.content = '';
                this.isSameMember = !this.isSameMember;
            }
        },
        payFinish() {
            // console.log(this.$store.state.cartList);
            //list
            // axios
            //     .post('http://localhost/tfd101/project/g3/php/order.php', {
            //         memberId: this.$store.state.loginID,
            //         listCount: this.$store.state.cartList.length,
            //         listPrice: this.billTotal,
            //     })
            //     .catch((error) => console.log(error)); //失敗時候的處理函數
            // }
            //ajax是非同步 要確定執行完成才取得到資料，如果事情要一起處理完成就寫在一隻php依序處理
            //或是三個ajax寫成function依序去呼叫  第三個axios的productId是因為上一個還沒完成所以取不到值
            //取最新商品的list id
            axios
                .post(
                    'http://localhost/tfd101/project/g3/php/selectListId.php',
                    {
                        memberId: this.$store.state.loginID,
                        listCount: this.$store.state.cartList.length,
                        listPrice: this.billTotal,
                        productList: this.$store.state.cartList,
                    }
                )
                .catch((error) => console.log(error));
            // .then((res2) => {
            //     // this.listIdArr = res2.data;
            //     // this.listId = this.listIdArr[0].LIST_ID;
            //     // console.log(this.listIdArr);
            //     // console.log(this.listId);
            // });

            //listContent
            // axios
            //     .post(
            //         'http://localhost/tfd101/project/g3/php/orderListContent.php',
            //         {
            //             listId: this.listId,
            //             productList: this.$store.state.cartList,
            //             // productId: this.$store.state.cartList,
            //             // productCount: this.$store.state.cartList.count,
            //             // productPrice: this.$store.state.cartList.total,
            //         }
            //     )
            //     .catch((error) => console.log(error)); //失敗時候的處理函數
            // // }

            // this.$router.push({
            //     path: '/product_finish',
            // });
        },
        isPhone() {
            var re = /^09[0-9]{8}$/;
            if (this.phoneNun === '') {
                this.isOkPhone = false;
                this.okTestPhone = '必填';
            } else {
                if (re.test(this.phoneNun) === false) {
                    this.isOkPhone = false;
                    this.okTestPhone = '格式錯誤';
                } else {
                    this.isOkPhone = true;
                }
            }
        },
        isPhone2() {
            var re = /^09[0-9]{8}$/;
            if (this.phoneNun2 === '') {
                this.isOkPhone2 = false;
                this.okTestPhone2 = '必填';
            } else {
                if (re.test(this.phoneNun2) === false) {
                    this.isOkPhone2 = false;
                    this.okTestPhone2 = '格式錯誤';
                } else {
                    this.isOkPhone2 = true;
                }
            }
        },
    },
    mounted() {
        axios
            .post('http://localhost/tfd101/project/g3/php/SelectMember.php', {
                id: this.$store.state.loginID,
            })
            .then((res) => {
                this.memberInfo = res.data;
                // console.log(res);
            });
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
    .error {
        font-size: 12px;
        color: rgb(247, 121, 121);
    }

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
