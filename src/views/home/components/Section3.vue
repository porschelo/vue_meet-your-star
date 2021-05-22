<template>
    <div class="i-scetion3">
        <img
            class="meteorAnimation"
            src="/images/index/meteorAnimation.svg"
            alt=""
        />
        <div class="cloudBg">
            <div class="cloudGroup">
                <img class="m1" src="/images/index/cloud/cloud1.svg" alt="" />
                <img class="m2" src="/images/index/cloud/cloud2.svg" alt="" />
                <img class="m3" src="/images/index/cloud/cloud3.svg" alt="" />
                <img class="m4" src="/images/index/cloud/cloud4.svg" alt="" />
                <img class="m5" src="/images/index/cloud/cloud5.svg" alt="" />
                <img class="m6" src="/images/index/cloud/cloud6.svg" alt="" />
                <img class="m7" src="/images/index/cloud/cloud7.svg" alt="" />
            </div>
        </div>
    </div>
</template>
<script>
// import ScrollTrigger from 'gsap/ScrollTrigger';

export default {};
</script>
<style lang="scss">
@import '../../../scss/commons.scss';
.i-scetion3 {
    margin: 50px 0 200px;
    position: relative;
    .cloudBg {
        position: relative;
        padding-top: whForPC(1835);
        // background-color: rgb(238, 143, 143);
        opacity: 0.4;
        overflow: hidden;
    }
    // .cloudGroup {
    //     width: whForPC(2611);
    //     position: absolute;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-53.8%, -50%);
    // }
    .cloudGroup {
        position: relative;
        padding-top: whForPC(2635);

        .m1 {
            position: absolute;
            top: -5vw;
            left: -76vw;
        }
        .m2 {
            position: absolute;
            top: -15vw;
            left: -76vw;
        }
        .m3 {
            position: absolute;
            top: 3vw;
            left: -85vw;
        }
        .m4 {
            position: absolute;
            top: 3vw;
            right: -80vw;
        }
        .m5 {
            position: absolute;
            top: 20vw;
            left: -78vw;
        }
        .m6 {
            position: absolute;
            top: 24vw;
            left: -76vw;
        }
        .m7 {
            position: absolute;
            top: 29vw;
            right: -81vw;
        }
        svg {
            opacity: 1;
            width: 150%;
            // height: 100%;
        }
        img {
            width: 100%;
        }
    }
}
</style>
