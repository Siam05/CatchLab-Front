<template>
    <div class="bg-background">
        <Header />
        <Slider />
        <Services />
        <ContactBanner class="my-12 lg:-mt-16" />
        <AboutUs class="mt-40 lg:mt-20" />
        <ClientSlider/>
        <CompanyOverview />
        <Footer />
    </div>
</template>

<script>
import Header from '../../components/Header/Header.vue';
import Slider from '../../components/Home/Slider.vue';
import ContactBanner from '../../components/Home/Contact-Banner.vue';
import AboutUs from '../../components/Home/About-Us.vue';
import Services from '../../components/Home/Services.vue';
import ClientSlider from '../../components/Home/Client-Slider.vue'
import CompanyOverview from '../../components/Home/Company-Overview.vue';
import Footer from '../../components/Footer/Footer.vue';

export default { 
    components: {
        Header,
        Slider,
        ContactBanner,
        AboutUs,
        Services,
        CompanyOverview,
        ClientSlider,
        Footer
    }
}
</script>

<style scoped></style>