<template>
    <div>
        <div class="background">
            <div class="h-full w-full blur-background flex justify-center items-center">
                <p class="px-4 text-2xl lg:text-4xl text-white font-semibold pt-20">A Showcase of Our Creative Brilliance</p>
            </div>
        </div>

        <div class="flex justify-center">
            <div class="container px-4 lg:px-12 py-12 xl:px-20 xl:py-24">

                <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 font-semibold text-gray-500 text-lg pb-6">
                    <router-link :to="{ path: '/portfolio' }">
                        <p class="cursor-pointer text-sm sm:text-base" :class="{'clicked': $route.meta.isAllActive}">All</p>
                    </router-link>
                    <div class="cursor-pointer text-sm sm:text-base" v-for="(category, index) in categories" :key="index">
                        <p @click="toPortfolioCategory(category.slug)" :class="{'clicked': $route.meta.isCategoryActive && category.slug == slug}">{{ category.title }}</p>
                    </div>
                </div>

                <div>
                    <div class="box-weidth">
                        <div class="border rounded-2xl border-gray-300" v-for="(project, index) in projects" :key="index">
                            <div class="w-full">
                                <div @click="showVideo(project.keyword)" class="w-full flex flex-col rounded-2xl flex justify-center items-center cursor-pointer thumbnail">
                                    <img class="h-44 w-full rounded-t-2xl object-cover" :src="`https://img.youtube.com/vi/${project.keyword}/0.jpg`" alt="">
                                    <div class="flex items-center absolute">
                                        <img class="h-16 w-16 yt-icon" src="../../assets/icons/play-button-icon-png-18928.1100497c.png" alt="">
                                    </div>
                                </div>
                                
                                <div class="p-4 text-left bg-background rounded-b-2xl">
                                    <p class="text-xl font-semibold">{{ project.title }}</p>
                                    <p class="text-sm pt-2">Client Name: {{ project.client_name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="displayVideo" class="search-overlay">
                        <div class="flex flex-col items-center justify-center h-screen">
                            <div class="container px-4 lg:px-12 xl:px-20">
                                <div class="flex justify-end pb-6">
                                    <i @click="closeVideo()" class="fa-sharp fa-solid fa-xmark cursor-pointer" style="color: white; font-size: xx-large;"></i>
                                </div>
                                <div class="flex justify-center">
                                    <div v-if="yt_video">
                                        <iframe class="yt-video-size" :src="`https://www.youtube.com/embed/${yt_video}?&autoplay=1`" frameborder="0" allow="autoplay" allowfullscreen></iframe>
                                    </div>
                                    <div v-else >
                                        <i class="fa fa-light fa-circle-exclamation" style="color: white; font-size: 2rem;"></i>
                                        <p class="text-2xl text-white pt-2">Something went wrong.</p>
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

export default { 
    props: ['slug'],

    data() {
        return {
            host: "https://catchlab-api.smicee.com",
            yt_video: null,
            displayVideo: false
        }
    },

    computed: {
        ...mapState({
            categories: (state) => state.portfolio.categories,
            projects: (state) => state.portfolio.projects_by_category
        })
    },

    mounted() {
        this.$store.dispatch('portfolio/getCategories')
        this.$store.dispatch('portfolio/getProjectsByCategory', this.slug)
    },

    methods: {
        toPortfolioCategory(category_slug) {
            this.$store.dispatch('portfolio/getProjectsByCategory', category_slug)
            this.$router.push({ name: 'PortfolioByCategory', params: { id: category_slug } })
        },

        showVideo(keyword) {
            this.yt_video = keyword
            this.displayVideo = true
        },

        closeVideo() {
            this.displayVideo = false
        }
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

    .box-weidth {
        @apply grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 2xl:gap-8
    }

    .yt-icon {
        opacity: .7;
    }

    .thumbnail:hover .yt-icon {
        opacity: 1;
        @apply rounded-full shadow-lg;
    }

    .search-overlay {
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 10000;
        top: 0;
        left: 0;
        background-color: #000000d3;
    }

    .yt-video-size {
        height: 600px;
        width: 1020px;
    }

    .clicked {
        @apply border-b-2 pb-2 border-primary text-primary;
    }

    @media screen and (max-width: 1080px) {
        .yt-video-size {
            height: 450px;
            width: 765px;
        }
    }

    @media screen and (max-width: 820px) {
        .yt-video-size {
            height: 360px;
            width: 612px;
        }
    }

    @media screen and (max-width: 640px) {
        .box-weidth {
            @apply grid grid-cols-2 px-0
        }

        .background {
            height: 310px
        }

        .yt-video-size {
            height: 320px;
            width: 544px;
        }
    }

    @media screen and (max-width: 560px) {
        .yt-video-size {
            height: 280px;
            width: 476px;
        }
    }

    @media screen and (max-width: 520px) {
        .box-weidth {
            @apply grid grid-cols-1 px-16
        }
    }

    @media screen and (max-width: 480px) {
        .yt-video-size {
            height: 230px;
            width: 390px;
        }
    }

    @media screen and (max-width: 450px) {
        .box-weidth {
            @apply px-8
        }
    }

    @media screen and (max-width: 410px) {
        .box-weidth {
            @apply px-6
        }
    }

    @media screen and (max-width: 400px) {
        .yt-video-size {
            height: 230px;
            width: 340px;
        }
    }

    @media screen and (max-width: 370px) {
        .box-weidth {
            @apply px-0
        }
    }
</style> 