<template>
    <div class="bg-background">
        <Header />
        <JobDetails :slug="getJobSlug()" />
        <Footer />
    </div>
</template>

<script>
import Header from '../../../components/Header/Header.vue';
import JobDetails from '../../../components/Career/JobDetails.vue';
import Footer from '../../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        JobDetails,
        Footer
    },

    methods: {
        getJobSlug() {
            return this.$route.params.id
        }
    }
}
</script>

<style scoped></style>