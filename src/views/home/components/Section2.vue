<template>
    <div class="i-section2">
        <div class="t-text">
            <img src="/images/index/logo.svg" alt="" />
            <p>
                人不斷茫然的迷失在人生的十字路口，不停的面臨抉擇。
                我們想幫助大家了解未來的生命趨勢，協助您解密星座命盤，了解自身盲點，
                讓我們伴您撥開人生的迷霧，一起探索星座的奧秘吧！
            </p>
        </div>
        <div class="monster">
            <span class="monster-box first">
                <img
                    class="monster-item"
                    src="/images/index/monster/m1-pisces.svg"
                    alt=""
                />
            </span>
            <span class="monster-box">
                <img
                    class="monster-item"
                    src="/images/index/monster/m2-cancer.svg"
                    alt=""
                />
            </span>
            <span class="monster-box">
                <img
                    class="monster-item"
                    src="/images/index/monster/m3-aquarius.svg"
                    alt=""
            /></span>
            <span class="monster-box">
                <img
                    class="monster-item"
                    src="/images/index/monster/m4-gemini.svg"
                    alt=""
            /></span>
            <span class="monster-box scorpio">
                <img
                    class="monster-item"
                    src="/images/index/monster/m5-scorpio.svg"
                    alt=""
            /></span>
        </div>
        <div class="left-monster">
            <img src="/images/index/monster/m6-virgo.svg" alt="" />
        </div>
        <div class="right-monster">
            <img src="/images/index/monster/m7-libra.svg" alt="" />
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import '../../../scss/var.scss';
@import '../../../scss/mixins.scss';
@import '../../../scss/commons.scss';

.i-section2 {
    width: 100vw;
    overflow: hidden;
    position: relative;
    .t-text {
        padding: 20px;
        img {
            display: block;
            max-width: 650px;
            width: 100%;
            margin: 0 auto;
        }
        p {
            max-width: 580px;
            width: 100%;
            color: rgb(241, 241, 241);
            line-height: 1.6;
            letter-spacing: 2px;
            text-align: center;
            display: block;
            margin: 0 auto;
            padding-top: 50px;
            padding-bottom: 120px;
            font-size: $h3;
        }
    }

    .monster {
        width: 100%;
        position: relative;
        // width: 100%;
        margin: 0 auto;
        margin-bottom: 250px;
        text-align: center;
        //行內元素才可以用 要轉inline-block

        img {
            width: 100%;
            transition: 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .monster-box {
            display: inline-block;
            position: relative;
            width: 160px;

            @include index-mobile {
                width: 100px;
                .monster-box {
                    width: 120px;
                }
            }
            &:hover {
                .monster-item {
                    transform: translateY(-100px);
                    transition: 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
                }
            }
            &.scorpio {
                width: 220px;
                @include index-bigPad {
                    display: none;
                }
            }
            &.first {
                max-width: 160px;
                @include index-bigPad {
                    display: none;
                }
            }
        }
    }

    .left-monster {
        width: 220px;
        position: absolute;
        top: 30%;
        left: whForPC(-80);
        animation: all 0.6s;
        @include index-md {
            display: none;
        }
        &:hover {
            img {
                transform: translateX(-70px);
                transition: 0.8s cubic-bezier(0.28, 1.44, 0.7, -0.25);
            }
        }
        img {
            position: relative;
            width: 100%;
        }
    }
    .right-monster {
        width: 180px;
        position: absolute;
        bottom: 10%;
        right: whForPC(-80);
        @include index-md {
            display: none;
        }
        &:hover {
            img {
                transform: translateX(80px);
                transition: 1s cubic-bezier(1, 0.25, 0.21, 0.87);
            }
        }
        img {
            position: relative;
            width: 100%;
        }
    }
}
</style>
