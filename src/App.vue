<template>
    <div id="app">
        <my-header></my-header>
        <router-view />
        <my-footer></my-footer>
        <!-- router渲染的標籤 -->
    </div>
</template>

<script>
import myHeader from './components/myHeader';
import myFooter from './components/myFooter';
export default {
    name: 'App',
    components: {
        myHeader,
        myFooter,
    },
};
</script>

<style lang="scss">
@import './scss/_reset.scss';
#app {
    background-color: rgb(48, 48, 48);
}
</style>
