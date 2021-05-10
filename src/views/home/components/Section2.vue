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
            <span class="monster-box">
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
            <span class="monster-box">
                <img
                    class="scorpio monster-item"
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
        max-width: 670px;
        // width: 100%;
        margin: 0 auto;
        margin-bottom: 250px;
        @include pad {
            max-width: 380px;
            margin: 0 auto;
        }
        @include mobile {
            max-width: 251px;
        }
        .scorpio {
            max-width: 160px;
            @include pad {
                display: none;
            }
        }
        .first {
            @include pad {
                display: none;
            }
        }
        img {
            max-width: 120px;
            @include pad {
                width: 100%;
            }
            @include mobile {
                max-width: 80px;
            }
            transition: 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .monster-box {
            display: inline-block;
            position: relative;
            &:hover {
                .monster-item {
                    transform: translateY(-100px);
                    animation: all 0.6s;
                }
            }
        }
    }

    .left-monster {
        width: 180px;
        position: absolute;
        top: 50%;
        left: whForPC(-80);
        @include md {
            display: none;
        }
        img {
            position: relative;
            width: 100%;
        }
    }
    .right-monster {
        width: 160px;
        position: absolute;
        bottom: 10%;
        right: whForPC(-80);
        @include md {
            display: none;
        }
        img {
            position: relative;
            width: 100%;
        }
    }
}
</style>
