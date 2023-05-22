<template>
    <div>
        <div class="background">
            <div class="h-full w-full flex justify-center items-center">
                <p class="text-2xl lg:text-4xl text-white font-semibold pt-20">Career | Join Us</p>
            </div>
        </div>

        <div class="flex justify-center bg-background">
            <div class="container px-4 lg:px-12 py-14 xl:px-20 2xl:px-24 xl:py-28">
                <div>
                    <p class="font-semibold text-lg text-primary">CAREERS</p>
                    <div>
                        <p class="pt-6 text-left text-gray-600">
                            Joining Catch Lab would be an exciting and at the same time an adventurous journey for you. If you have the right expertise that we look for, then we have the right opportunity for you. Go through our list of available vacancies and choose the perfect fit for yourself. A thrilling experience waits for you.
                        </p>

                        <div class="w-full flex flex-col lg:flex-row gap-8 pt-6 lg:pt-10">
                            <div class="lg:w-1/3 text-left p-5 rounded-lg shadow-xl">
                                <div class="flex items-center gap-3">
                                    <i class="pi pi-minus text-primary text-left" style="font-size: 1.2rem;;"></i>
                                    <p class="font-semibold">Why should you join us?</p>
                                </div>
                                <p class="pt-5 text-gray-500 text-sm">
                                    If you are looking for a company that provides the opportunity to flourish your talents and showcase your creativity with the highest amount of flexibility, then look no further. Catch Lab is here for you. Working with us will not only benefit you financially but also give a lifelong experience and help you develop your real-life skills as well. We ensure the utmost friendly environment for every single employee and consider the whole team as a family.
                                </p>
                            </div>
                            <div class="lg:w-1/3 text-left p-5 rounded-lg shadow-xl">
                                <div class="flex items-center gap-3">
                                    <i class="pi pi-minus text-primary text-left" style="font-size: 1.2rem;;"></i>
                                    <p class="font-semibold">Whom do we look for?</p>
                                </div>
                                <p class="pt-5 text-gray-500 text-sm">
                                    Anyone, even you. Yes, if you are passionate about your work, if you are ready for taking up challenges and conquering them if you have the enthusiasm to learn new things as well as to share your wisdom if you are a person who believes in sharing interpersonal skills and growing together, then you are the perfect match that we are looking for.
                                </p>
                            </div>
                            <div class="lg:w-1/3 text-left p-5 rounded-lg shadow-xl">
                                <div class="flex items-center gap-3">
                                    <i class="pi pi-minus text-primary text-left" style="font-size: 1.2rem;;"></i>
                                    <p class="font-semibold">Benefits and Rewards</p>
                                </div>
                                <p class="pt-5 text-gray-500 text-sm">
                                    Working with Catch Lab provides you a great opportunity of developing your existing skills at the same time acquiring new ones. We believe a coherent team can bring out the best result. So, you will be improving your cooperation skills, learning to be supportive and respectful to each other, being empathetic and compassionate. We always prioritize the fact of appreciating people with everything they deserve. Moreover, you will get the chance to be mentored by people who are experienced in their respective fields. In every manner, Catch Lab has so many things to offer which you can carry for an eternal period of time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pt-12 lg:pt-20">
                    <p class="font-semibold text-lg text-primary pb-6">OPEN POSITIONS</p>
                    <div class="flex flex-col gap-6" v-if="jobposts.length > 0">
                        <div class="w-full flex flex-col md:flex-row border rounded-2xl bg-white border-gray-300 p-4 sm:p-6 text-left" v-for="(jobpost, index) in jobposts" :key="index">
                            <div class="md:w-3/4 flex flex-col">
                                <div class="flex items-center gap-4">
                                    <i class="fa-solid fa-suitcase text-primary" style="font-size: x-large;"></i>
                                    <p class="font-semibold text-lg">{{ jobpost.title }}</p>
                                </div>
                                <div v-if="jobpost.job_description" class="pt-4 flex gap-2 sm:gap-4">
                                    <p class="py-2 px-4 bg-gray-200 rounded-lg font-semibold text-xs sm:text-sm text-center">{{ jobpost.job_description.type }}</p>
                                    <p class="py-2 px-4 bg-gray-200 rounded-lg font-semibold text-xs sm:text-sm text-center">{{ jobpost.job_description.post }}</p>
                                    <p class="py-2 px-4 bg-gray-200 rounded-lg font-semibold text-xs sm:text-sm text-center">{{ jobpost.job_description.location }}</p>
                                </div>
                            </div>

                            <div class="md:w-1/4 flex flex-col md:items-center gap-4 pt-4 md:pt-0">
                                <div>
                                    <p v-if="jobpost.job_description" class=""><i class="fa-solid fa-bangladeshi-taka-sign pr-2 text-primary" style="font-size:medium;"></i>{{ jobpost.job_description.salary }}</p>
                                </div>
                                <router-link :to="{ path: '/career/job-details/' + jobpost.id }">
                                    <button class="button px-4 sm:px-8 py-2 sm:py-2.5">APPLY NOW</button>
                                </router-link>  
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <p class="text-lg text-gray-600">No jobs available right now!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default { 
    components: {
    },

    data() {
        return {
            host: "https://api.catchbangladesh.com"
        }
    },

    computed: {
        ...mapState({
            jobposts: (state) => state.career.jobs
        })
    },

    mounted() {
        this.$store.dispatch('career/getJobPost')
    },

    methods: {
    }
}
</script>

<style scoped>
    .background {
        background-image: url("../../assets/bannerImage/top-view-workspace-with-laptop-notebook_11zon.jpg");
        background-size: cover;
        object-fit: cover;
        background-repeat: no-repeat;
        height: 390px
    }

    .blur-background {
        background-color: #616161ad;
    }


    @media screen and (max-width: 640px) {
        .background {
            height: 320px
        }
    }
</style> 