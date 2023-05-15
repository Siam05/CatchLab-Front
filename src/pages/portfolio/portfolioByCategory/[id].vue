<template>
    <div>
       <Header />
       <PortfolioByCategory :slug="getPortfolioSlug()" />
       <Footer />
    </div>
</template>

<script>
import Header from '../../../components/Header/Header.vue';
import PortfolioByCategory from '../../../components/Portfolio/PortfolioByCategory.vue';
import Footer from '../../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        PortfolioByCategory,
        Footer
    },

    methods: {
        getPortfolioSlug() {
            return this.$route.params.id
        }
    }
}
</script>

<style scoped></style>