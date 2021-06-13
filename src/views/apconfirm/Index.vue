<template>
    <div>
        <div class="j_wrapper">
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
                    <div class="progress">
                        <div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar"
                        aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width:75%; ">
                            75%
                        </div>
                    </div>
                    <!-- <li class="container__item">
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
                                <p class="stepper__content">step 1:選擇老師</p>
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
                                <p class="stepper__content">step 2:選擇時段</p>
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
                                <p class="stepper__content">step 4: 預約完成</p>
                            </div>
                        </div>
                    </li> -->
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
                                        <h4>預約老師：{{ selectteacher }}</h4>
                                        <h4>
                                            預約日期與時段：{{ setAppointed }}
                                        </h4>
                                        <!-- <h4>預約時段：{{setAppointed}}</h4> -->
                                    </div>

                                    <div class="docu_money">
                                        <h4>金額:{{ selectteacherprice }}</h4>
                                    </div>
                                </div>
                                <div class="docu_total">
                                    <h4 id="money">
                                        結帳金額:
                                        {{ selectteacherprice }}
                                    </h4>
                                </div>
                                <div class="docu_member">
                                    <h4 id="member">
                                        預約人資料
                                        <input
                                            type="checkbox"
                                            @change="samemember"
                                            name="member"
                                        />同會員
                                    </h4>
                                </div>

                                <!-- 表單開始 -->
                                <form>
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
                                                    v-model.trim="name"
                                                />
                                            </div>
                                            <div class="bd">
                                                <h4>B. 生日</h4>
                                                <input
                                                    type="text"
                                                    placeholder="請輸入文字"
                                                    v-model="birthday"
                                                />
                                            </div>

                                            <!-- 表單開始 -->
                                            <form   action="" >
                                                <div class="error-message">
                                                    <p>請輸入有效email</p>
                                                </div>
                                                <div class="form_info">
                                                    <div class="form_left">
                                                        <div class="name">
                                                            <h4>A. 姓名</h4>
                                                            <input type="text" placeholder="請輸入文字" required="" v-model.trim="name" />
                                                        </div>
                                                        <div class="bd">
                                                            <h4>B. 生日</h4>
                                                            <input type="text" placeholder="請輸入文字" v-model="birthday"
                                                            />
                                                        </div>
                                                        <div class="tel" label="手機號碼" prop="phone">
                                                            <h4>C. 聯絡電話</h4>
                                                            <input type="text" name="" v-model="phone" placeholder="請輸入手機號碼"/>
                                                        </div>
                                                        <div class="email">
                                                            <h4>E. 聯絡信箱</h4>
                                                            <input type="email" name="" placeholder="請輸入信箱" v-model="email"
                                                            />
                                                        </div>
                                                        <div class="comment">
                                                            <h4>F. 預約備註</h4>
                                                            <div class="comment_word">
                                                                <textarea name="Content" v-model="Content"></textarea>
                                                            </div>
                                                            <label for="ammount">付款方式</label><br />
                                                            <select name="payment" id="payment" v-model="payment"
                                                            >
                                                                <option
                                                                    value="信用卡付款(經由綠世界)"
                                                                >
                                                                    {{payment}}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="form_right">
                                                        <button class="j_right" type="button">
                                                            <a
                                                                @click="pay"
                                                                class="j_right"
                                                                >結帳</a
                                                            >
                                                        </button>
                                                    </div>
                                                </div>
                                                <label for="ammount"
                                                    >付款方式</label
                                                ><br />
                                                <select
                                                    name="payment"
                                                    id="payment"
                                                    v-model="payment"
                                                >
                                                    <option
                                                        value="信用卡付款(經由綠世界)"
                                                    >
                                                        {{ payment }}
                                                    </option>
                                                </select>
                                            </form>
                                        </div>
                                        <div class="form_right">
                                            <button class="j_right">
                                                <a @click="pay" class="j_right"
                                                    >結帳</a>
                                            </button>
                                        </div>
                                    </div>

                            </div>
                        </div>
                    </div>
                </div>
        

            <myFooter></myFooter>
        </div>
    </div>
</template>

<script>
import myFooter from '@/components/myFooter'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export default {
    data() {
        return {
            memberinfo: [],
            name: '',
            birthday:'',
            phone:'',
            email: {
                value: 'jo@hnd.oe',
                valid: true,
            },
            tel: {
                value: '09xxxxxxxx',
                valid: true,
            },
            
            Content:'',
            payment:'信用卡付款(經由綠世界)',
            teacherinfo :[],
            teacherid:'', 


            teacher: [],
        };
    },

    components: {
        myFooter,
    },
    mounted() {
        axios.post('http://localhost/meetyourstars/teacher.php').then((res) => {
            console.log(res);
            this.teacher = res.data;
        });
    },

    computed: {
        selectteacher() {
            return this.$store.state.selectteacher;
        },
        selectteacherprice() {
            return this.$store.state.selectteacherprice;
        },
        setAppointed() {
            return this.$store.state.setAppointed;
        },
    },
    methods: {
        pay() {
            let savedate = this.$store.state.setAppointed.split(' ');
            // console.log(savedate);
            let newsavedate = '2021/' + savedate[0];
            // console.log(newsavedate);
            let time = savedate[1];
            // console.log(time);
            console.log(this.$store.state.loginID);

            axios.post('http://localhost/meetyourstars/searchteacher.php',
            {   TEACHER_NAME : this.$store.state.selectteacher}
            )
                .then((res1) => {
                    console.log('res1',res1);
                    this.teacherinfo = res1.data;
                    this.teacherid = this.teacherinfo[0].TEACHER_ID;
                });

            axios.post(
                'http://localhost/meetyourstars/appointment.php',

            {   APPOINTMENT_DATE: newsavedate,
                APPOINTMENT_TIME: time,
                TEACHER_ID:this.teacherid,
                APPOINTMENT_NAME:this.name,
                APPOINTMENT_PRICE:this.$store.state.selectteacherprice,
                APPOINTMENT_BIRTHDAY:this.birthday,
                APPOINTMENT_PHONE:this.phone,
                APPOINTMENT_EMAIL:this.email,
                APPOINTMENT_CONTENT:this.Content,
                id: this.$store.state.loginID,}
            )
            .then(() => {
                    // console.log('res2',res2.data);
                    // this.teacherinfo = res2.data;
                    // this.teacherid = this.teacherinfo[0].TEACHER_ID;
                    
                    this.$router.push({
                    path: '/apfinish',
                    });                       

                 });
                    // this.$router.push({
                    // path: '/apfinish',
                    // }); 

        },

        samemember() {
            axios
                .post(
                    'http://localhost/tfd101/project/g3/php/SelectMember.php',
                    { id: this.$store.state.loginID }
                )
                .then((res) => {
                    console.log(res);
                    this.memberinfo = res.data;
                    this.name = this.memberinfo[0].MEMBER_NAME;
                    this.birthday = this.memberinfo[0].MEMBER_BIRTHDAY;
                    this.phone = this.memberinfo[0].MEMBER_PHONE;
                    this.email = this.memberinfo[0].MEMBER_EMAIL;
                });
        },

        //     checkPhone (rule, value, callback) {
        //     if (!(/^1[34578]\d{9}$/.test(value))) {
        //       callback(new Error('请输入正确的手机号码!'));
        //      }
        // },
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
