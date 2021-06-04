<template>
    <div id="app">
        <my-header v-if="$route.name !== 'Landing'"></my-header>
        <login></login>
        <router-view />
        <!-- router渲染的標籤 -->
        
    </div>
</template>

<script>
import myHeader from './components/myHeader';
import login from './components/login';


// import myFooter from './components/myFooter';
export default {
    name: 'App',
    components: {
        myHeader,
        login,
        // myFooter,
    },

    created() {
        let storageLoginStatus = JSON.parse(localStorage.getItem('loginStatus')) ||[] ;
        let storagememberIcon = JSON.parse(localStorage.getItem('memberIcon')) ||[] ;
        let storageloginID = JSON.parse(localStorage.getItem('loginID')) ||[] ;
        console.log(storageLoginStatus);
        console.log(storagememberIcon);
        console.log(storageloginID);

        this.$store.commit('updateLoginStatus',storageLoginStatus);
        this.$store.commit('updatememberIcon',storagememberIcon);
        this.$store.commit('updateloginID',storageloginID);

        // cart
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
