<template lang="pug">
    .product
        swiper(ref='mySwiper' :options='swiperOptions')
            swiper-slide Slide 1
            swiper-slide Slide 2
            swiper-slide Slide 3
            swiper-slide Slide 4
            swiper-slide Slide 5
            .swiper-pagination(slot='pagination')
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                },
                // Some Swiper option/callback...
            },
        };
    },
    computed: {
        swiper() {
            return this.$refs.mySwiper.$swiper;
        },
    },
    mounted() {
        console.log('Current Swiper instance object', this.swiper);
        this.swiper.slideTo(3, 1000, false);
    },
};
</script>
<style lang="scss">
.product {
    position: relative;
    top: 200px;
    &__title {
        color: #fff;
    }
}
</style>
