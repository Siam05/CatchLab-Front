<template>
    <div>
        <div class="background">
            <div class="h-full w-full flex justify-center blurColor lg:pb-16">
                <div class="container xl:flex w-full px-4 lg:px-12 xl:px-20 py-12 lg:py-24">
                    <div class="xl:w-1/2 flex flex-col items-center lg:items-start">
                        <div class="flex items-center justify-center bg-white rounded-full shadow-md w-44 py-2">
                            <i class="pi pi-circle-fill text-primary" style="font-size: 0.4rem"></i>
                            <p class="text-sm px-2.5 text-gray-600">SERVICE LIST</p>
                            <i class="pi pi-circle-fill text-primary" style="font-size: 0.4rem"></i>
                        </div>
                        <div class="text-2xl md:text-3xl lg:text-4xl text-left text-white font-bold pt-4 md:pt-6 ">
                            <p><span class="text-primary">Services</span> We Can</p>
                            <p>Help You With</p>
                        </div>
                        <div class="xl:flex flex-col text-left gap-4 pt-6">
                            <p class="text-gray-300 pt-4 md:pt-6 xl:pt-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit, dolor nihil sequi veritatis quod impedit laborum, assumenda reprehenderit doloribus iure excepturi unde?</p>
                            <div>
                                <p class="text-gray-300 text-sm"><span class="text-primary"><i class="pi pi-stop-circle" style="font-size: .8rem"></i></span> Lorem ipsum dolor sit amet consectetur</p>
                                <p class="text-gray-300 text-sm"><span class="text-primary"><i class="pi pi-stop-circle" style="font-size: .8rem"></i></span> Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>
                        <div class="pt-6 flex justify-center items-center">
                            <router-link to="/portfolio">
                                <button class="button w-full">OUR PORTFOLIO</button>
                            </router-link>
                        </div>
                    </div>
                    
                    <div class="xl:w-1/2 xl:ml-20 pt-4 md:pt-6 xl:pt-0">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                            <div v-for="(service, index) in services.slice(0,4)" :key="index">
                                <div class="w-full flex justify-center">
                                    <div class="px-8 flex flex-col justify-center items-center gap-3 h-40 w-full rounded-2xl background-color">
                                        <img class="h-16 w-16" :src="host + service.icon" alt="">
                                        <div class="text-center text-white font-semibold">
                                            <p>{{ service.title }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import 'primeicons/primeicons.css';
export default { 
    data() {
        return {
            host: "https://catchlab-api.smicee.com",
        }
    },

    computed: {
        ...mapState({
            services: (state) => state.services.services
        })
    },

    mounted() {
        this.$store.dispatch('services/getServicesList')
    },
}
</script>

<style scoped>
.background {
    background-image: url("../../assets/footer/dotted_map.jpg");
    background-size: cover;
    background-repeat: no-repeat;
}

.blurColor{
    background-color: #0f0f0fe0;
}

.background-color {
    background-color: #0a0a0aa4;
}
</style>