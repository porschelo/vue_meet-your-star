<template lang="pug">
    .back-btn(v-if="btnVisible" ref="btn")
        span.back-btn__span(@click="onBack") {{val}}
</template>
<script>
import VueScrollTo from 'vue-scrollto';
export default {
    props: {
        val: {
            type: String,
            default: 'Back',
        },
    },
    data() {
        return {
            btnVisible: false,
        };
    },
    computed: {},
    methods: {
        onBack() {
            // window.scrollTo(0, 0);
            VueScrollTo.scrollTo('body', 2000, {
                easing: 'linear',
            });
        },
        onScroll() {
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
            // 比較運算子的結果會是Boolean值
            this.btnVisible = scrollTop > window.innerHeight;
        },
        addEventListener() {
            window.addEventListener('scroll', this.onScroll);
        },
        removeEventListener() {
            window.removeEventListener('scroll', this.onScroll);
        },
    },
    mounted() {
        this.addEventListener();
        console.log(`this.val=${this.val}`);
    },
    destroyed() {
        this.removeEventListener();
    },
};
</script>
<style lang="scss">
.back-btn {
    position: fixed;
    right: 2.5%;
    bottom: 0;
    margin-bottom: 10%;
    cursor: pointer;
    &__span {
        position: relative;
        padding: 10px 20px;
        background: #000;
        color: #fff;
    }
}
</style>
