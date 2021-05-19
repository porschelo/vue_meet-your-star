<template>
    <div class="home-wrapper">
        <div class="s-bg"></div>
        <section1></section1>
        <section2></section2>
        <section3></section3>
        <section4></section4>
        <section5></section5>
        <section6></section6>
        <section7></section7>
        <section8></section8>
        <section9></section9>
    </div>
</template>

<script>
// @ is an alias to /src
import Section1 from '@/views/home/components/Section1';
import Section2 from '@/views/home/components/Section2';
import Section3 from '@/views/home/components/Section3';
import Section4 from '@/views/home/components/Section4';
import Section5 from '@/views/home/components/Section5';
import Section6 from '@/views/home/components/Section6';
import Section7 from '@/views/home/components/Section7';
import Section8 from '@/views/home/components/Section8';
import Section9 from '@/views/home/components/Section9';

export default {
    name: 'Home',
    components: {
        Section1,
        Section2,
        Section3,
        Section4,
        Section5,
        Section6,
        Section7,
        Section8,
        Section9,
    },
};
</script>
<style lang="scss">
@import '../../scss/commons.scss';
.home-wrapper {
    position: relative;
    overflow: hidden;
    // 漸層
    .s-bg {
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: -2;
        // ------     ------     ------     ------
        background: linear-gradient(155deg, #07155f, #0a9483, #4713ae);
        background-size: 600% 600%;

        -webkit-animation: AnimationName 90s ease infinite;
        -moz-animation: AnimationName 90s ease infinite;
        animation: AnimationName 90s ease infinite;
    }

    @-webkit-keyframes AnimationName {
        0% {
            background-position: 0% 4%;
        }
        50% {
            background-position: 100% 97%;
        }
        100% {
            background-position: 0% 4%;
        }
    }
    @-moz-keyframes AnimationName {
        0% {
            background-position: 0% 4%;
        }
        50% {
            background-position: 100% 97%;
        }
        100% {
            background-position: 0% 4%;
        }
    }
    @keyframes AnimationName {
        0% {
            background-position: 0% 4%;
        }
        50% {
            background-position: 100% 97%;
        }
        100% {
            background-position: 0% 4%;
        }
    }
}
</style>
