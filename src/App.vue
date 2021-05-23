<template>
    <div id="app">
        
        <my-header></my-header>
        <router-view />
        
        <!-- router渲染的標籤 -->
    </div>
</template>

<script>
import myHeader from './components/myHeader';
// import myFooter from './components/myFooter';
export default {
    name: 'App',
    components: {
        myHeader,
        // myFooter,
    },
};
</script>

<style lang="scss">
@import './scss/_reset.scss';
#app {
}
</style>
