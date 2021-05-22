<template>
    <div>
        <div class="to_top_btn" v-if="btnVisible">
            <img
                class="arrowTop"
                src="/images/index/arrow-up.svg"
                alt=""
                @click="toTop"
            />
        </div>
    </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto';
export default {
    data() {
        return {
            btnVisible: false,
        };
    },
    methods: {
        toTop() {
            VueScrollTo.scrollTo('.home-wrapper', 1000, {
                easing: 'ease-in',
            });
        },
        scrollTop() {
            let topHeight =
                window.pageYOffset ||
                document.documentElement.topHeight ||
                document.body.topHeight ||
                0;
            // console.log(topHeight);
            if (topHeight > window.innerHeight * 1.5) {
                this.btnVisible = true;
            } else {
                this.btnVisible = false;
            }
            // 比較運算子的結果會是Boolean值
            //this.btnVisible = scrollTop > window.innerHeight;
        },
        addEventListener() {
            window.addEventListener('scroll', this.scrollTop);
        },
        removeEventListener() {
            window.addEventListener('scroll', this.scrollTop);
        },
    },
    mounted() {
        this.addEventListener();
    },
    destroyed() {
        this.removeEventListener();
    },
};
</script>

<style lang="scss">
.to_top_btn {
    position: fixed;
    right: 1.5%;
    bottom: 10%;
    // margin-bottom: 10%;
    cursor: pointer;
    .arrowTop {
        position: relative;
        color: rgb(228, 228, 228);
        width: 60px;
        opacity: 0.4;
        &:hover {
            opacity: 0.8;
        }
    }
}
</style>
