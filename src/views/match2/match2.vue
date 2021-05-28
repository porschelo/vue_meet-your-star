<template>
    <div>
        <div class="jl_wrapper2">
            <div class="jl_top_fix">
                <div class="jl_match2_title">
                    <h2>
                        <img src="/images/store/uv_icone.png" alt="" /> 星座配對
                        <img src="/images/store/uv_icone.png" alt="" /> <br />
                        - Horoscope Matching -
                    </h2>
                </div>

                <div class="jl_left_box">
                    <input
                        type="text"
                        placeholder="請輸入您的名字"
                        class="jl_self_name"
                    />
                    <label for="gender"></label>
                    <select name="self" id="jl_selfsex" class="jl_selfsex">
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                    </select>
                    <br />

                    <select
                        name="self_birth_year"
                        id="jl_self_birth_year"
                        class="jl_self_birth_year"
                    >
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>

                    <select
                        name="jl_self_birth_month"
                        id="jl_self_birth_month"
                        class="jl_self_birth_month"
                    >
                        <option value="Jan">1月</option>
                        <option value="Feb">2月</option>
                    </select>

                    <select
                        name="self_birth_date"
                        id="jl_self_birth_date"
                        class="jl_self_birth_date"
                    >
                        <option value="1">1日</option>
                        <option value="2">2日</option>
                        <option value="3">3日</option>
                    </select>

                    <h3>本人星座</h3>
                    <br />

                    <div class="jl_self_horoscope">
                        <h2>天蠍座</h2>
                    </div>
                </div>
                <!-- end of jl_left_box -->

                <div class="jl_right_box">
                    <input
                        type="text"
                        placeholder="請輸入對方名字"
                        class="jl_opp_name"
                    />

                    <select name="opp" id="jl_opp_gender" class="jl_opp_gender">
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                    </select>
                    <br />

                    <select
                        name="opp_birth_year"
                        id="jl_opp_birth_year"
                        class="jl_opp_birth_year"
                    >
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>

                    <select
                        name="opp_birth_month"
                        id="jl_opp_birth_month"
                        class="jl_opp_birth_month"
                    >
                        <option value="Jan">1月</option>
                        <option value="Feb">2月</option>
                    </select>

                    <select
                        name="opp_birth_date"
                        id="jl_opp_birth_date"
                        class="jl_opp_birth_date"
                    >
                        <option value="1">1日</option>
                        <option value="2">2日</option>
                    </select>

                    <br />
                    <h3>對方星座</h3>
                    <br />
                    <div class="jl_opp_horoscope">
                        <h2>巨蟹座</h2>
                    </div>
                </div>
            </div>
            <!-- end of jl_top_fix -->

            <button type="button" class="match_btn">MATCH</button>

            <div class="jl_temp">
                <router-link to="/matchandtest/match3">
                    暫時假連結到測試結果頁面
                </router-link>
            </div>

            <div class="jl_footer">
                <myFooter></myFooter>
            </div>
        </div>
        <!-- Wrapper end -->
    </div>
</template>

<script>
import myFooter from '@/components/myFooter';

export default {
    components: {
        myFooter,
    },
};
</script>

<style lang="scss">
@import '@/scss/color.scss';
@import '@/scss/var.scss';
@import '@/scss/mixins.scss';
@import '@/scss/rwd.scss';

// shared css properties
$textColor: #b6c9f0;
$transBackgnd: transparent;
$hoverBorderColor: #f0dc9a;

.jl_wrapper2 {
    background-image: url(/images/horoscope_page/matching2.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;

    .jl_top_fix {
        overflow: hidden;
        padding-top: 5%;
        margin: 0 auto;
        display: block;
        text-align: center;

        .jl_match2_title {
            margin-top: 10%;
            color: $textColor;
            font-size: $h2;

            img {
                width: 63px * 0.7;
                height: 43px * 0.7;
            }

            @include rwd(pad) {
                margin-top: 13%;
                font-size: $p2;
            }

            @include rwd(mobile) {
                // 768px
                // width: 130px;
                // height: 35px;
                font-size: $f;
                margin-top: 30%;
            }
        }
    }

    .jl_left_box,
    .jl_right_box {
        margin: 3%;
        border-top: 10px $textColor double;
        border-left: 3px $textColor dashed;
        border-right: 3px $textColor dashed;
        border-bottom: 10px $textColor double;
        border-radius: 40px;
        padding: 5%;
        display: inline-block;
        color: $textColor;
    }

    .jl_self_name,
    .jl_opp_name {
        // width: 180px;
        // height: 20px;
        font-size: $p1;
        border-radius: 10px;
        color: $textColor;
        //padding: 50px 50px;
        background-color: $transBackgnd;
        border: 2px solid $textColor;
        padding: 3%;
        margin-bottom: 5%;

        &:hover {
            color: #f0dc9a;
        }

        @include rwd(pad) {
            // 1199px
            // width: 160px;
            font-size: $p2;
        }

        @include rwd(mobile) {
            // 768px
            // width: 130px;
            // height: 35px;
            font-size: $f;
        }
    }
    .jl_self_name::placeholder {
        color: $textColor;
        text-align: center;
    }

    .jl_opp_name::placeholder {
        color: $textColor;
        text-align: center;
    }

    // All border color, txt color, transparent background, border-radius + hover effect
    .jl_self_birth_year,
    .jl_opp_birth_year,
    .jl_self_birth_month,
    .jl_selfsex,
    .jl_opp_gender,
    .jl_opp_birth_month,
    .jl_opp_birth_date,
    .jl_self_birth_date {
        background-color: $transBackgnd;
        color: $textColor;
        font-size: $p1;

        border: 2px solid $textColor;
        border-radius: 10px;
        text-align: center;
        margin-bottom: 8%;
        margin-left: 3%;
        padding: 3%;
        margin-top: 3%;

        &:hover {
            border: 2px solid #f0dc9a;
            color: #f0dc9a;
        }

        @include rwd(pad) {
            // 1199px
            // width: 160px;
            font-size: $p2;
        }

        @include rwd(mobile) {
            // 768px
            // width: 130px;
            // height: 35px;
            font-size: $f;
        }
    }

    // boarder size width

    .jl_self_horoscope,
    .jl_opp_horoscope {
        background-color: $transBackgnd;
        color: $textColor;
        font-size: $p2;
        border: 2px solid $textColor;
        border-radius: 10px;
        text-align: center;
        border-radius: 10px;
        text-align: center;
        padding: 5%;
        display: inline-block;
    }

    /*============== Match Button start*/
    @include btn-module('.match_btn', 280, 100) {
        color: white;
        display: block;
        margin: 1% auto;
        border: 4px solid;
    }

    .jl_temp a {
        text-align: center;
        color: white;
        margin: 2% auto;
        display: block;
    }

    /*  Match Button Ends */

    .jl_footer {
        width: 100%;
        height: 200px;
        background-color: #44796a;
    }

    //nav-list 所在頁面樣式
    // .overlaymenu {
    // 	.menulist {
    // 		.nav-menu {
    // 			ul {
    // 				li:nth-child(3) {
    // 					a {
    // 						color: yellow;
    // 					}
    // 				}
    // 			}
    // 		}
    // 	}
    // }
}

/* section left start*/
</style>
