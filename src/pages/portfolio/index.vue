<template>
    <div>
       <Header />
       <Portfolio />
       <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import Portfolio from '../../components/Portfolio/Portfolio.vue';
import Footer from '../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        Portfolio,
        Footer
    }
}
</script>

<style scoped></style>