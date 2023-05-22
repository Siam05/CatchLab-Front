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
                    <div>
                        <p class="text-left text-gray-600">
                            Joining CatchLab would be an exhilarating and adventurous journey for you. If you possess the expertise we are seeking, then we have the perfect opportunity waiting for you. Explore our list of available vacancies and find the ideal match for yourself. Prepare for a thrilling experience ahead.
                        </p>

                        <div class="w-full flex flex-col lg:flex-row gap-8 pt-6 lg:pt-10">
                            <div class="lg:w-1/3 text-left p-5 rounded-lg shadow-xl">
                                <div class="flex items-center gap-3">
                                    <i class="pi pi-minus text-primary text-left" style="font-size: 1.2rem;;"></i>
                                    <p class="font-semibold">Why should you join us?</p>
                                </div>
                                <p class="pt-5 text-gray-500 text-sm">
                                    If you seek a company that offers the platform to nurture your talents, unleash your creativity, and enjoy unparalleled flexibility, your search ends here. CatchLab is your destination. By joining us, you'll not only reap financial rewards but also gain a lifetime of invaluable experiences and develop essential real-life skills. We prioritize a friendly and supportive environment for each and every employee, fostering a sense of family within the entire team.
                                </p>
                            </div>
                            <div class="lg:w-1/3 text-left p-5 rounded-lg shadow-xl">
                                <div class="flex items-center gap-3">
                                    <i class="pi pi-minus text-primary text-left" style="font-size: 1.2rem;;"></i>
                                    <p class="font-semibold">Whom do we look for?</p>
                                </div>
                                <p class="pt-5 text-gray-500 text-sm">
                                    At CatchLab, we believe that anyone, including you, can be the perfect fit if you possess a passion for your work, thrive on challenges, embrace continuous learning, and are eager to share your wisdom and foster personal growth, making us an ideal match for each other. Together, let's embark on an extraordinary journey of collaboration and success.
                                </p>
                            </div>
                            <div class="lg:w-1/3 text-left p-5 rounded-lg shadow-xl">
                                <div class="flex items-center gap-3">
                                    <i class="pi pi-minus text-primary text-left" style="font-size: 1.2rem;;"></i>
                                    <p class="font-semibold">Benefits and Rewards</p>
                                </div>
                                <p class="pt-5 text-gray-500 text-sm">
                                    Joining CatchLab offers a unique opportunity to enhance your existing skills while acquiring new ones. Our focus on fostering a cohesive team enables you to develop cooperation, support, respect, empathy, and compassion. In addition to intangible benefits, we also prioritize fair monetary rewards, appreciating individuals for their contributions. Explore the myriad offerings at CatchLab that will leave a lasting impact on your professional journey.
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