<template>
    <div>
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
                <!-- <link rel="stylesheet" href="ap_style.css"> -->

                @@include('layout/scripts.html')
            </head>
            <body>
                <div class="j_wrapper">
                    <!-- @@include('layout/header.html') -->

                    <!-- 中間背景 -->
                    <div class="j_middle">
                        <!-- 頁面標題 -->
                        <div class="j_title">
                            <div class="j_bigtitle">
                                <img
                                    src="/images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                                <h1>預約談星</h1>
                                <img
                                    src="/images/appointment/earth2.png"
                                    alt=""
                                    id="earth"
                                />
                            </div>

                            <div class="j_subtitle">
                                <h4>— Reservation With Experts —</h4>
                            </div>
                        </div>
                        <!-- 進度條 -->
                        <div class="j_progress">
                            <li class="container__item">
                                <div class="stepper">
                                    <input
                                        class="stepper__input"
                                        id="stepper-5-0"
                                        name="stepper-5"
                                        type="radio"
                                        checked="checked"
                                    />
                                    <div class="stepper__step">
                                        <label
                                            class="stepper__button"
                                            for="stepper-5-0"
                                        ></label>
                                        <p class="stepper__content">
                                            step 1:選擇老師
                                        </p>
                                    </div>
                                    <input
                                        class="stepper__input"
                                        id="stepper-5-1"
                                        name="stepper-5"
                                        type="radio"
                                    />
                                    <div class="stepper__step">
                                        <label
                                            class="stepper__button"
                                            for="stepper-5-1"
                                        ></label>
                                        <p class="stepper__content">
                                            step 2:選擇時段
                                        </p>
                                    </div>
                                    <input
                                        class="stepper__input"
                                        id="stepper-5-2"
                                        name="stepper-5"
                                        type="radio"
                                    />
                                    <div class="stepper__step">
                                        <label
                                            class="stepper__button"
                                            for="stepper-5-2"
                                        ></label>
                                        <p class="stepper__content">
                                            step 3: 確認結帳資料
                                        </p>
                                    </div>
                                    <input
                                        class="stepper__input"
                                        id="stepper-5-3"
                                        name="stepper-5"
                                        type="radio"
                                    />
                                    <div class="stepper__step">
                                        <label
                                            class="stepper__button"
                                            for="stepper-5-3"
                                        ></label>
                                        <p class="stepper__content">
                                            step 4: 預約完成
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <!-- 儀錶板 -->
                        <div class="j_panel">
                            <div class="j_panel_inner">
                                <div class="j_panel_title">
                                    <h2>確認結帳資料</h2>
                                    <div class="j_document">
                                        <div class="docu_title">
                                            <h4>訂購項目:命盤預約</h4>
                                        </div>
                                        <div class="docu_info">
                                            <div class="docu_img">
                                                <img
                                                    src="/images/appointment/confirm.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="docu_detail">
                                                <h4>
                                                    預約老師：{{
                                                        docuDetail[0].name
                                                    }}
                                                </h4>
                                                <h4>
                                                    預約日期：{{
                                                        docuDetail[0].date
                                                    }}
                                                </h4>
                                                <h4>預約時段：晚上07:00</h4>
                                            </div>
                                            <div class="docu_money">
                                                <h4>
                                                    金額:
                                                    {{ docuDetail[0].money }}
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="docu_total">
                                            <h4 id="money">
                                                結帳金額:
                                                {{ docuDetail[0].money }}
                                            </h4>
                                        </div>
                                        <div class="docu_member">
                                            <h4 id="member">
                                                預約人資料
                                                <input
                                                    type="checkbox"
                                                    name="member"
                                                />同會員
                                            </h4>
                                        </div>

                                        <!-- 表單開始 -->
                                        <form
                                            action=""
                                            @submit.prevent="handleSubmit"
                                        >
                                            <div class="error-message">
                                                <p>請輸入有效email</p>
                                            </div>
                                            <div class="form_info">
                                                <div class="form_left">
                                                    <div class="name">
                                                        <h4>A. 姓名</h4>
                                                        <input
                                                            type="text"
                                                            placeholder="請輸入文字"
                                                            required=""
                                                            v-model="name"
                                                        />
                                                    </div>
                                                    <div class="bd">
                                                        <h4>B. 生日</h4>
                                                        <input
                                                            type="text"
                                                            placeholder="請輸入文字"
                                                        />
                                                    </div>
                                                    <div class="tel">
                                                        <h4>C. 聯絡電話</h4>
                                                        <input
                                                            type="tel"
                                                            name=""
                                                            placeholder="請輸入電話"
                                                        />
                                                    </div>
                                                    <div class="email">
                                                        <h4>E. 聯絡信箱</h4>
                                                        <input
                                                            type="email"
                                                            name=""
                                                            placeholder="請輸入信箱"
                                                        />
                                                    </div>
                                                    <div class="comment">
                                                        <h4>F. 預約備註</h4>
                                                        <div
                                                            class="comment_word"
                                                        >
                                                            <textarea
                                                                name="Content"
                                                                v-model="
                                                                    Content
                                                                "
                                                            ></textarea>
                                                        </div>
                                                        <label for="ammount"
                                                            >付款方式</label
                                                        ><br />
                                                        <select
                                                            name="payment"
                                                            id="payment"
                                                        >
                                                            <option
                                                                value="credit card"
                                                            >
                                                                信用卡付款(經由綠世界)
                                                            </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form_right">
                                                    <button class="j_right">
                                                        <a
                                                            href="/apfinish"
                                                            class="j_right"
                                                            >結帳</a
                                                        >
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- @@include('layout/footer.html') -->

                    <myFooter></myFooter>
                </div>
            </body>
        </html>
    </div>
</template>

<script>
import myFooter from '@/components/myFooter';

export default {
    data() {
        return {
            name: '',
            email: {
                value: 'jo@hnd.oe',
                valid: true,
            },
            docuDetail: [
                { name: '唐揚雞老師', money: '2,000', date: '2021/05/23' },
                { name: '卡拉雞老師', money: '2,500', date: '2021/05/26' },
                { name: '危雞老師', money: '1,500', date: '2021/05/24' },
            ],
        };
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
@import '@/scss/ap.scss';
</style>
