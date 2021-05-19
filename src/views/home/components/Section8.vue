<template>
    <div class="i-scetion8">
        <div class="cloudBg2">
            <img
                class="cloudGroup2"
                src="../../../../public/images/index/cloud2.svg"
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
.i-scetion8 {
    position: relative;
    margin: 220px 0 300px;
    .cloudBg2 {
        position: relative;
        padding-top: whForPC(2323); //圖的高
        opacity: 0.4;
        overflow: hidden;
    }
    .cloudGroup2 {
        width: whForPC(2717); //圖的寬
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-51.8%, -50%);
    }
}
</style>
