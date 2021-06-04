<template>
    <div class="wrapper_tQuestion">
        <div class="tQuestion_header"></div>

        <div class="tQuestion_section">
            <div class="tQuestion_title">
                <div class="tQuestion_title-c">
                    <img src="/images/store/uv_icone.png" alt="" />
                    <h1>心理測驗</h1>
                    <img src="/images/store/uv_icone.png" alt="" />
                </div>
                <div class="tQuestion_title-e">
                    <h4>— Personality Test —</h4>
                </div>
            </div>

            <div class="tQuestion_content" v-if="showQa">
                <div
                    class="tq_main"
                    v-for="question in questions"
                    :key="question.title"
                >
                    <p>{{ question.title }}</p>
                    <div class="tq_answer">
                        <!-- <input v-for="choice in question.choices" :key=(choice,key)  v-model="question.value" type="radio" :value="choice.value" style="width: 18px; height: 18px; margin-right: 10px;"> {{question.choices[].content}} -->

                        <p>{{ question.value }}</p>

                        <!-- <div><input type="radio" name="qa1" style="width: 18px; height: 18px; margin-right: 10px;">A.尋找寵物</div>
                        <div><input type="radio" name="qa1" style="width: 18px; height: 18px; margin-right: 10px;">B.尋人啟事</div>
                        <div><input type="radio" name="qa1" style="width: 18px; height: 18px; margin-right: 10px;">C.尋找失物</div>
                        <div><input type="radio" name="qa1" style="width: 18px; height: 18px; margin-right: 10px;" >D.尋找車禍目擊證人</div> -->
                    </div>
                </div>

                <button class="tQuestion_next" @click="showQa()">NEXT</button>

                <!-- <button class="tQuestion_next"><router-link to ="test_result">NEXT</router-link></button> -->
            </div>
        </div>
        <div class="tQuestion_footer">
            <my-footer></my-footer>
        </div>
    </div>
</template>
<script>
import myFooter from '@/components/myFooter';
export default {
    data() {
        return {
            is_page: true,
            vars: null,
            questions: [
                {
                    title:
                        '1. 街角的便利店貼了一張懸賞一萬元的告示，你覺得那告示的內容是？',
                    value: null,
                    choices: [
                        {
                            content: 'A.尋找寵物',
                            value: '巨蟹座',
                        },
                        {
                            content: 'B.尋人啟事',
                            value: '處女座',
                        },
                        {
                            content: 'C.尋找失物',
                            value: '魔羯座',
                        },
                        {
                            content: 'D.尋找車禍目擊證人',
                            value: '天蠍座',
                        },
                    ],
                },
            ],
        };
    },

    methods: {
        showQa() {
            alert(this.questions[0].choices[0].content);
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
.wrapper_tQuestion {
    .tQuestion_header {
        height: 140px;
        background-color: #023552;
        @include rwd(mobile) {
            height: 100px;
        }
    }

    .tQuestion_section {
        //背景圖
        background-image: url(/images/test/bgi_star.png);
        background-size: 100% 100%;
        padding-bottom: 140px;
        @include rwd(mobile) {
            background-size: 100% 50%;
            background-image: url(/images/test/bgi_phone.png);
        }
    }

    .tQuestion_title {
        color: $colorT;
        padding: (80px) * 0.7 0 0;
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
                font-size: $h1 - 8px;
            }
        }

        &-e {
            text-align: center;
            font-size: $p1;
            @include rwd(mobile) {
                font-size: $p1 - 6px;
            }
        }
    }

    .tQuestion_content {
        // border: 1px solid yellow;
        width: 85%;
        height: 85%;
        padding-top: 10px;
        padding-bottom: 220px * 0.7;
        color: white;
        font-size: $h3;
        line-height: 1.6;
        @include center;

        //儀錶板
        background-image: url(/images/test/bgi-2.png);
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-top: 56px;
        @include rwd(mobile) {
            background-image: none;
            margin-top: 0px;
            font-size: $h3 - 6px;
            padding-bottom: 30px;
        }
        .tq_main {
            width: 65%;
            @include center;
            margin-top: 240px * 0.7;
            @include rwd(mobile) {
                width: 100%;
                margin-top: 80px;
            }
            p {
                margin-bottom: 50px;
            }
        }
    }

    @include btn-module('.tQuestion_next', 280, 100) {
        color: white;
        display: block;
        margin: 28px auto;
        a {
            text-decoration: none;
            color: white;
        }
    }

    .tQuestion_footer {
        width: 100%;
        height: 200px;
        background-color: #44796a;
    }

    .overlaymenu {
        .menulist {
            .nav-menu {
                ul {
                    li:nth-child(3) {
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
