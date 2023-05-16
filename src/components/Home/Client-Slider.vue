<template>
    <div class="w-full bg-gray-100 py-12 lg:py-24">
        <div class="w-full flex flex-col justify-center items-center px-4 lg:px-12 xl:px-20">
            <p class="text-xl sm:text-2xl font-semibold">Trusted By Founders at 100+ Companies, Including...</p>
            <div class="container card pt-10">
                <Carousel :value="clients" :numVisible="6" :numScroll="1" :responsiveOptions="responsiveOptions" :autoplayInterval="3000">
                    <template #item="slotProps">
                        <div class="flex justify-center px-2">
                            <img :src="host + slotProps.data.logo" :alt="slotProps.data.name" class="h-16" />
                        </div>
                    </template>
                </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Carousel from 'primevue/carousel';
export default { 
    components: {
        Carousel
    },

    data() {
        return {
            host: "https://catchlab-api.smicee.com",
            responsiveOptions:[
            {
                breakpoint: '1350px',
                numVisible: 5,
                numScroll: 1
            },
            {
                breakpoint: '1100px',
                numVisible: 4,
                numScroll: 1
            },
            {
                breakpoint: '900px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '400px',
                numVisible: 1,
                numScroll: 1
            }
        ]
        }
    },

    computed: {
        ...mapState({
            clients: (state) => state.clients.clients
        })
    },

    mounted() {
        this.$store.dispatch('clients/getClients')
    },
}
</script>

<style scoped>
</style>