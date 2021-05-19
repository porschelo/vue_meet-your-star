<template>
    <div class="i-scetion3">
        <img
            class="meteorAnimation"
            src="../../../../public/images/index/meteorAnimation.svg"
            alt=""
        />
        <div class="cloudBg">
            <img
                class="cloudGroup"
                src="../../../../public/images/index/cloud.svg"
                alt=""
            />
        </div>
    </div>
</template>
<script>
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
    .cloudGroup {
        width: whForPC(2611);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-53.8%, -50%);
    }
}
</style>
