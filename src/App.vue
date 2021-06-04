<template>
    <div id="app">
        <my-header v-if="$route.name !== 'Landing'"></my-header>
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
    created() {
        let storageCarts =
            JSON.parse(localStorage.getItem('storageCart')) || [];
        console.log(storageCarts);
        this.$store.commit('addCartUpdate', storageCarts);
    },
};
</script>

<style lang="scss">
@import './scss/_reset.scss';
</style>
