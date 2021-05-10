<template>
    <div class="home">
        <seection1></seection1>
        <seection2></seection2>
    </div>
</template>

<script>
// @ is an alias to /src
import Section1 from '@/views/home/components/Section1';
import Section2 from '@/views/home/components/Section2';

export default {
    name: 'Home',
    components: {
        Section1,
        Section2,
    },
};
</script>
