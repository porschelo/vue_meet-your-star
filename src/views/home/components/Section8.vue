<template>
    <div class="i-scetion8">
        <div class="cloudBg2">
            <div class="cloudGroup">
                <img
                    class="m1"
                    ref="m1"
                    src="/images/index/cloud/cloud1.svg"
                    alt=""
                />
                <img
                    class="m2"
                    ref="m2"
                    src="/images/index/cloud/cloud2.svg"
                    alt=""
                />
                <img
                    class="m3"
                    ref="m3"
                    src="/images/index/cloud/cloud3.svg"
                    alt=""
                />
                <img
                    class="m4"
                    ref="m4"
                    src="/images/index/cloud/cloud4.svg"
                    alt=""
                />
                <img
                    class="m5"
                    ref="m5"
                    src="/images/index/cloud/cloud5.svg"
                    alt=""
                />
                <img
                    class="m6"
                    ref="m6"
                    src="/images/index/cloud/cloud6.svg"
                    alt=""
                />
                <img
                    class="m7"
                    ref="m7"
                    src="/images/index/cloud/cloud7.svg"
                    alt=""
                />
            </div>
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
