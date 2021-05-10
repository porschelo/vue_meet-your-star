<template>
    <div class="i-section1">
        <!-- 流星 start-->
        <div class="t-stars">
            <div class="star"></div>
            <div
                v-for="n in 15"
                :key="`meteor-${n}`"
                :class="`meteor-${n}`"
            ></div>
            <!-- for迴圈都要寫key 類似索引值 效能比較好 -->
        </div>
        <!-- 流星   end-->
        <div class="i-section1-star">
            <img
                v-for="n in 12"
                :key="`star-${n}`"
                :class="`star${n} opacity`"
                :src="`/images/index/star_hover/s${n}.svg`"
            />
        </div>
        <div class="rocket">
            <img src="/images/index/rocket.svg" alt="" />
        </div>
        <div class="ufo">
            <a href="">
                <div class="cloud">
                    <p>預約談星</p>
                </div>
                <img src="/images/index/ufo.svg" alt="" />
            </a>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import '../../../scss/var.scss';
@import '../../../scss/commons.scss';
.i-section1 {
    width: 100%;
    height: 100%;
    padding-bottom: 10%;
    overflow: hidden;
    position: relative;
    // 流星

    .t-stars {
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        // ------     ------     ------     ------
        $n: 15; // 流星數量
        $s: 300; // star數量

        $shadow: ();

        @for $i from 1 through $s {
            $x: random(1920);
            $y: random(1000);
            $shadow1: $shadow, ($x + px $y + px #fff) !global;
        }

        .star {
            width: 1px;
            height: 1px;
            background: transparent;

            box-shadow: $shadow1;
        }

        @for $i from 1 through $n {
            $v: random(90) + 9; // left
            $h: random(250) + 50; // top
            $d: random(70) / 10 + 4; // 秒數
            .meteor-#{$i} {
                position: absolute;
                top: $h + px;
                left: $v * 1%;
                width: 300px;
                height: 1px;
                transform: rotate(-40deg);
                background-image: linear-gradient(
                    to right,
                    #fff,
                    rgba(255, 255, 255, 0)
                );
                animation: meteor $d + s linear infinite;
                &:before {
                    content: '';
                    position: absolute;
                    width: 4px;
                    height: 5px;
                    border-radius: 50%;
                    margin-top: -2px;
                    background: rgba(#fff, 0.7);
                    box-shadow: 0 0 15px 3px #fff;
                }
            }
        }

        @keyframes meteor {
            0% {
                opacity: 1;
                margin-top: -300px;
                margin-right: -300px;
            }
            12% {
                opacity: 0;
            }
            15% {
                margin-top: 300px;
                margin-left: -600px;
                opacity: 0;
            }
            100% {
                opacity: 0;
            }
        }
    }
    &-star {
        width: 1920px;
        height: 1040px;
        position: absolute;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        & .opacity {
            opacity: 0.2;
            transition: 1s cubic-bezier(0.25, 0.1, 0.25, 1);
            &:hover {
                opacity: 1;
                transition: 1s cubic-bezier(0.25, 0.1, 0.25, 1);
            }
        }

        .star1 {
            position: absolute;
            top: 0;
            margin-top: 150px;
            left: whForPC(300);
        }
        .star2 {
            position: absolute;
            top: 0;
            margin-top: whForPC(450);
            left: whForPC(150);
        }
        .star3 {
            position: absolute;
            top: 0;
            margin-top: whForPC(804);
            left: whForPC(115);
        }
        .star4 {
            position: absolute;
            top: 0;
            margin-top: whForPC(720);
            left: whForPC(570);
        }
        .star5 {
            position: absolute;
            top: 0;
            margin-top: whForPC(480);
            left: whForPC(400);
        }
        .star6 {
            position: absolute;
            top: 0;
            margin-top: whForPC(460);
            left: whForPC(1240);
        }
        .star7 {
            position: absolute;
            top: 0;
            margin-top: whForPC(190);
            left: whForPC(1100);
        }
        .star8 {
            position: absolute;
            top: 0;
            margin-top: whForPC(640);
            left: whForPC(1020);
        }
        .star9 {
            position: absolute;
            top: 0;
            margin-top: whForPC(130);
            left: whForPC(1420);
        }
        .star10 {
            position: absolute;
            top: 0;
            margin-top: whForPC(735);
            left: whForPC(1500);
        }
        .star11 {
            position: absolute;
            top: 0;
            margin-top: whForPC(300);
            left: whForPC(1640);
        }
        .star12 {
            position: absolute;
            top: 0;
            margin-top: whForPC(400);
            left: whForPC(760);
        }
    }
    .rocket {
        // margin: 0 48vw;
    }

    .rocket img {
        display: block;
        width: 60px;
        padding: 450px 0 85px;
        margin: 0 auto;
    }
    .ufo {
        position: absolute;
        bottom: 20%;
        right: 0;
        a {
            text-decoration: none;
            display: block;
            color: rgb(245, 243, 243);
            cursor: pointer;
        }
        img {
            width: 60px;
        }
        .cloud {
            height: 80px;
            width: 105px;
            // background-image: url(#{$a}index/text_box1.svg);
            background-image: url('../../../../public/images/index/text_box1.svg');
            background-repeat: no-repeat;
            background-size: 100px;
        }
        .cloud p {
            color: #000;
            font-size: 16px;
            line-height: 90px;
            padding-left: 12%;
        }
    }
}
</style>
