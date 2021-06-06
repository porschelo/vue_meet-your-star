<template>
    <div>
        <!-- STAR -->
        <div class="wrapper">
            <!-- Title -->
            <div class="MC_title">
                <div class="MC_title-c">
                    <img src="/images/membercentre/earth.png" alt="" />
                    <h1>會員中心</h1>
                    <img src="/images/membercentre/earth.png" alt="" />
                </div>

                <div class="MC_title-e">
                    <h4>一 Member Centre 一</h4>
                </div>
            </div>
            <!-- Title END-->

            <div class="mid_block">
                <div class="tab">
                    <router-link to="membercentre" class="tab_btn"
                        >個人資料</router-link
                    >
                    <router-link to="memberorderlist" class="tab_btn"
                        >訂單資料</router-link
                    >
                    <router-link to="membercollection" class="tab_btn"
                        >我的收藏</router-link
                    >
                </div>
                <div class="mid">
                    <div class="mid_top">
                        <div class="left">
                            <img :src="star_sign_pic" alt="" />
                            <div class="name">
                                <h4>{{ star_sign_name }}</h4>
                            </div>
                        </div>

                        <div class="right">
                            <div class="right__main">
                                <div class="info">
                                    <div class="info_1">
                                        <div class="info_Name">
                                            <h4>姓名</h4>
                                            <h4 v-show="data_info">
                                                {{ member_name }}
                                            </h4>
                                            <input
                                                type="text"
                                                maxlength="10"
                                                v-model="member_name"
                                                v-show="edit_info"
                                            />
                                        </div>
                                        <div class="info_Bdate">
                                            <h4>生日</h4>
                                            <h4 v-show="data_info">
                                                {{ member_date }}
                                            </h4>
                                            <input
                                                type="text"
                                                maxlength="10"
                                                v-model="member_date"
                                                v-show="edit_info"
                                            />
                                        </div>
                                    </div>
                                    <div class="info_2">
                                        <div class="info_Sex">
                                            <h4>性別</h4>
                                            <h4 v-show="data_info">
                                                {{ member_gender }}
                                            </h4>
                                            <select
                                                name="gender"
                                                v-model="member_gender"
                                                v-show="edit_info"
                                            >
                                                <option value="男">男</option>
                                                <option value="女">女</option>
                                            </select>
                                        </div>
                                        <div class="info_Phone">
                                            <h4>電話</h4>
                                            <h4 v-show="data_info">
                                                {{ member_phone }}
                                            </h4>
                                            <input
                                                type="text"
                                                v-model="member_phone"
                                                maxlength="12"
                                                v-show="edit_info"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="right__bottom">
                                <h4>累積星幣 : {{ star_points }}</h4>
                                <img :src="star_points_pic" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="bottom" @click="editData(change_status)">
                        <button class="change_data">
                            {{ change_data_btn }}
                        </button>
                    </div>
                    <div class="bottom" @click="deleteData">
                        <button class="change_data">登出會員</button>
                    </div>
                </div>
            </div>

            <!-- <div>
                {{ this.memberinfo | json }}
            </div> -->

            <myFooter></myFooter>
            <!--wrapper END  -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import myFooter from '@/components/myFooter';

export default {
    mounted() {
        // axios.post((response).then{
        //     this.star-dasda = data.star_sign_pic

        // })

        // axios.get('../../php/Select.php').then(res => console.log(res));
        // axios.get('../../php/Select.php').then(res => console.log(res.data));

        axios
<<<<<<< HEAD
            .post('http://localhost/vue_meet_u_heart/php/SelectMember.php', 
               { id: this.$store.state.loginID },
            )
=======
            .post('http://localhost/vue_meet_u_heart/php/Select.php', {
                id: this.$store.state.loginID,
            })
>>>>>>> development
            .then((res) => {
                console.log(res);
                this.memberinfo = res.data;
                console.log(this.memberinfo);
                // console.log(this.memberinfo[0].MEMBER_NAME);

                this.member_name = this.memberinfo[0].MEMBER_NAME;
                this.member_date = this.memberinfo[0].MEMBER_BIRTHDAY;
                this.member_gender = this.memberinfo[0].MEMBER_GENDER;
                this.member_phone = this.memberinfo[0].MEMBER_PHONE;
                this.star_points = this.memberinfo[0].MEMBER_POINT;
                this.star_sign_pic = this.memberinfo[0].MEMBER_IMG;
                this.star_sign_name = this.memberinfo[0].MONSTER_NAME;
            });
    },
    data() {
        return {
            memberinfo: [],
            star_sign_pic: '/images/membercentre/fakedata.png',
            star_sign_name: '水瓶座',
            member_name: '王曉明',
            member_date: '1991/01/23',
            member_gender: '男',
            member_phone: '0987-654-321',
            star_points: 987,
            star_points_pic: '/images/membercentre/star_coin.png',

            change_data_btn: '修改資料',
            change_status: 1,
            edit_info: false,
            data_info: true,
        };
    },
    methods: {
        editData(btn_status) {
            if (btn_status == 1) {
                this.edit_info = true;
                this.data_info = false;
                this.change_data_btn = '儲存資料';
                this.change_status = 0;
                
            } else if (btn_status == 0) {
                this.edit_info = false;
                this.data_info = true;
                this.change_data_btn = '修改資料';
                this.change_status = 1;

                // 回存資料
                axios.post('http://localhost/vue_meet_u_heart/php/UpdateMember.php', 
               { updateName:this.member_name,
                 updateBirthdate:this.member_date,
                 updatePhone:this.member_phone,
                 updateGender:this.member_gender,
                 id: this.$store.state.loginID },
                )


            }
        },
        deleteData() {
            this.$store.commit('logout', 0);
            this.$router.push({
                path: '/',
            });
            localStorage.clear();
        },
    },

    computed: {
        loginID() {
            return this.$store.state.loginID;
        },
    },

    components: {
        myFooter,
    },

    // mounted:{
    //     axios.get('./XML_JSON_CSV/bookData.json')
    //                .then(res => this.books = res.data)  //成功時候的處理函數
    //                .catch(error => console.log(error))  //失敗時候的處理函數
    // }
};
</script>

<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/center.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';

//scss

$font_size: (
    H1: 52 * 0.7px,
    H2: 40 * 0.7px,
    H3: 35 * 0.7px,
    H4: 30 * 0.7px,
    p: 20 * 0.7px,
);

$color: (
    white: #fff,
    gray: #cacaca,
    pink: #ffc2cf,
    lightblue: #d6e0f7,
    font_color: #777777,
);

$border: 1px solid;

.wrapper {
    @include rwd('mobile') {
        h1 {
            font-size: $h1 - 8px !important;
        }

        h2 {
            font-size: $h2 - 6px !important;
        }

        h3 {
            font-size: $h3 - 6px !important;
        }

        h4 {
            font-size: $p1 - 6px !important;
        }
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
    background-image: url(/images/membercentre/member-bg2x.png);
    background-size: cover;

    // Title star
    .MC_title {
        color: $colorT;
        padding: (80px + 240px) * 0.7 0 0;

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

            // @include rwd("mobile"){
            //     font-size: $h1 - 8px;
            // }
        }

        &-e {
            text-align: center;
            font-size: $p1;
        }
    }

    // Title END

    // memberinfo star

    .mid_block {
        // border: 1px solid red;
        max-width: 1300 * 0.7px;
        width: 100%;

        .tab {
            display: flex;
            justify-content: space-evenly;

            a {
                font-size: $h3;
                background-color: map-get($color, gray);
                color: map-get($color, font_color);
                max-width: 265 * 0.7px;
                max-height: 75 * 0.7px;
                width: 100%;
                border-radius: 20 * 0.7px 20 * 0.7px 0 0;
                line-height: 75 * 0.7px;
                text-align: center;
                cursor: pointer;
                // margin-left: 37*.7px;
                text-decoration: none;

                @include rwd('mobile') {
                    width: 25%;
                    font-size: $h3 - 6px;
                }

                &:nth-of-type(1) {
                    background-color: map-get($color, white);
                }
            }
        }

        .mid {
            border: 3px solid white;
            margin: 0 5%;
        }

        .mid_top {
            // border: 1px solid green;
            display: flex;
            flex-wrap: nowrap;
            @include rwd('mobile') {
                flex-wrap: wrap;
            }

            .left {
                // border: 1px solid orange;
                margin: 8%;

                @include rwd('mobile') {
                    width: 100%;
                    margin: 3%;
                }

                img {
                    // width: 226 * 0.7px;
                    // height: 252 * 0.7px;
                    display: block;
                    margin: 0 auto;
                    // margin-bottom: 16*.7px;
                    margin-bottom: 10%;
                    @include rwd('mobile') {
                        margin-top: 10%;
                    }
                }

                h4 {
                    font-size: $p1;
                    color: map-get($color, pink);
                    text-align: center;
                }
            }

            .right {
                flex-grow: 2;
                // border: 1px solid purple;
                margin: 8% 2%;

                input {
                    @include rwd('mobile') {
                        text-align: center;
                    }
                }

                h4 {
                    font-size: map-get($font_size, H4);
                    color: map-get($color, white);

                    &:nth-of-type(2n + 1) {
                        color: #dedede;
                    }
                }

                .info {
                    .info_1 {
                        // border: 3px solid red;
                        display: flex;
                        flex-wrap: wrap;
                        margin-bottom: 15%;

                        @include rwd('mobile') {
                            margin-bottom: 5%;
                        }

                        .info_Name {
                            width: 40%;

                            @include rwd('mobile') {
                                width: 100%;

                                margin-bottom: 5%;
                                text-align: center;
                            }

                            h4 {
                                margin-bottom: 5%;

                                @include rwd('mobile') {
                                    margin-bottom: 2%;
                                }
                            }
                        }

                        .info_Bdate {
                            width: 60%;

                            @include rwd('mobile') {
                                width: 100%;
                                text-align: center;
                            }

                            h4 {
                                margin-bottom: 2%; //數字國字高度不一樣所以%數不同
                            }
                        }
                    }

                    .info_2 {
                        // border: 3px solid red;
                        display: flex;
                        flex-wrap: wrap;
                        margin-bottom: 20%;

                        @include rwd('mobile') {
                            margin-bottom: 10%;
                            // border: 1px solid black;
                        }

                        .info_Sex {
                            width: 40%;

                            @include rwd('mobile') {
                                width: 100%;
                                text-align: center;
                                margin-bottom: 5%;
                                // border: 1px solid black;
                            }

                            h4 {
                                margin-bottom: 5%;

                                @include rwd('mobile') {
                                    margin-bottom: 2%;
                                }
                            }
                        }

                        .info_Phone {
                            width: 60%;
                            // border: 1px solid black;

                            h4 {
                                margin-bottom: 2%;
                            }

                            @include rwd('mobile') {
                                width: 100%;
                                text-align: center;
                            }
                        }
                    }
                }

                .right__bottom {
                    display: flex;

                    @include rwd('mobile') {
                        justify-content: center;
                        // border: 1px solid red;
                    }

                    img {
                        width: 5%;
                        margin: 0 2%;
                    }
                }
            }
        }

        .bottom {
            // border: 4px solid purple;
            display: flex;
            justify-content: center;
            margin-bottom: 5%;

            @include rwd('mobile') {
                margin-bottom: 10%;
            }

            @include btn-module('.change_data', 280, 100) {
                color: white;

                @include rwd('mobile') {
                    font-size: $h3 - 6px;
                    width: 170 * 0.7px;
                    height: 80 * 0.7px;
                }
            }
        }
    }

    // memberinfo END
    // wrapper END
}

// scss end
</style>
