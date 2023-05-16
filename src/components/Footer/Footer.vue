<template>
    <div class="background w-full">
        <div class="blurColor w-full flex justify-center">
            <div class="container">
                <!-- Top portion -->
                <div class="lg:flex justify-between py-12 lg:py-24 px-4 lg:px-12 xl:px-20 text-left ">
                    <div class="lg:w-1/3">
                        <img class="h-10 lg:h-16" src="../../assets/logo/logo.png" alt="catch-lab-logo">

                        <div class="py-4">
                            <p class="text-gray-300 text-sm w-60 sm:w-96 lg:w-full">{{ site_settings.description }}</p>
                        </div>

                        <div class="flex gap-4">
                            <div class="rounded-full bg-primary w-8 h-8 flex justify-center">
                                <a target="_blank" class="flex items-center text-gray-300" :href="site_settings.fb_link"><i class="fa-brands fa-square-facebook" style="font-size: 1rem;"></i></a>
                            </div>
                            <div class="rounded-full bg-primary w-8 h-8 flex justify-center">
                                <a target="_blank" class="flex items-center text-gray-300" :href="site_settings.fb_link"><i class="fa-brands fa-linkedin" style="font-size: 1rem;"></i></a>
                            </div>
                            <div class="rounded-full bg-primary w-8 h-8 flex justify-center">
                                <a target="_blank" class="flex items-center text-gray-300" :href="`mailto:${site_settings.email}`"><i class="fa-solid fa-envelope" style="font-size: 1rem;"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="lg:w-1/3 pt-8 lg:pt-0 text-gray-300">
                        <p class="text-xl font-semibold">Contact Information</p>
                        <p class="py-4 text-sm">Feel free to contact & reach us</p>
                        <div class="text-sm">
                            <div class="flex">
                                    <i class="fa-solid fa-location-dot w-6 self-center text-primary"></i>
                                    <p>{{ site_settings.address }}</p>
                            </div>
                            <div class="flex py-2">
                                    <i class="fa-sharp fa-solid fa-phone w-6 self-center text-primary"></i>
                                    <a class="hover:text-primary" :href="`tel:${site_settings.phone_number}`">{{ site_settings.phone_number }}</a>
                            </div>
                            <div class="flex">
                                <i class="fa-solid fa-envelope w-6 self-center text-primary"></i>
                                <a class="hover:text-primary" :href="`mailto:${site_settings.email}`">{{ site_settings.email }}</a> 
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bottom portion -->
                <div class="py-6 border-t border-gray-300">
                    <p class="text-gray-300 text-sm sm:text-base">
                        © <a class="text-white hover:text-primary font-semibold"> Catch Lab</a> All Rights Reserved | Developed by <a class="text-white hover:text-primary font-semibold" href="https://www.facebook.com/catchbitflex" target="_blank" >BitFlex </a> | A Sister Concern of <a class="text-white hover:text-primary font-semibold">Catch INC.</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default { 
    data() {
        return {
            host: "https://catchlab-api.smicee.com",
        }
    },

    computed: {
        ...mapState({
            site_settings: (state) => state.siteSettings.siteSettings
        })
    },

    mounted() {
        this.$store.dispatch('siteSettings/getSiteSettings')
    }
}
</script>

<style scoped>
    .background {
        background-image: url("../../assets/footer/dotted_map.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }

    .blurColor{
        background-color: #070707f1;
    }
</style>