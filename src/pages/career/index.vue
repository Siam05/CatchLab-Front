<template>
    <div class="bg-background">
        <Header />
        <Career />
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import Career from '../../components/Career/Career.vue';
import Footer from '../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        Career,
        Footer
    }
}
</script>

<style scoped></style>