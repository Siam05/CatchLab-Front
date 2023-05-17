<template>
    <div class="flex justify-center lg:absolute w-full px-4">
        <div class="bg-secondary rounded-2xl sm:w-5/6 xl:w-4/6 lg:flex px-6 py-10">
            <div class="lg:w-1/4 flex flex-col sm:flex-row items-center text-white gap-4 text-left"> 
                <i class="pi pi-phone p-3 border border-white rounded-full" style="font-size: 1.5rem"></i>
                <div class="flex flex-col items-center sm:items-start">
                    <p class="text-xs font-semibold text-red-700">GET A FREE CONSULTATION</p>
                    <a class="text-xl sm:text-2xl hover:text-primary" :href="`tel:${site.phone_number}`">{{ site.phone_number }}</a>
                </div>
            </div>

            <div class="lg:w-2/4 px-4 py-4 lg:py-0">
                <p class="text-white sm:text-left text-xs px-4 2xl:pr-8">{{ site.description }}</p>
            </div>

            <div class="lg:w-1/4 flex justify-center items-center">
                <button class="button w-full">GET A QUOTE</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    components: {} ,
    computed: {
        ...mapState({
            site: (state) => state.siteSettings.siteSettings
        })
    },

    mounted() {
        this.$store.dispatch('siteSettings/getSiteSettings')
    },
}
</script>

<style scoped></style>