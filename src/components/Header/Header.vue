<template>
    <div id="navbar" class="w-full flex justify-center items-center">
        <nav class="w-full flex justify-center items-center" :class="{ 'onScroll': !view.topOfPage, 'backScroll': view.topOfPage}">
            <div class="container">
                <!-- Mobile view New  -->
                <div class="title md:hidden py-3 px-4">

                    <div class="flex justify-center" :class="{ 'hidden': !view.topOfPage, 'flex': view.topOfPage}">
                        <router-link to="/">
                            <img class="logo-height" src="../../assets/logo/Logo-06.png" alt="">
                        </router-link>
                    </div>

                    <div class="flex justify-center" :class="{ 'flex': !view.topOfPage, 'hidden': view.topOfPage}">
                        <router-link to="/">
                            <img class="logo-height" src="../../assets/logo/Logo-05.png" alt="">
                        </router-link>
                    </div>

                    <div class="flex justify-between gap-4 pt-3" :class="{ 'header-bottom': !view.topOfPage }">
                        <div class="flex items-center gap-4 text-sm">
                            <a target="_blank" class="flex items-center" :href="site_settings.fb_link"><i class="fa-brands fa-square-facebook" style="font-size: 1.1rem;"></i></a>
                            <a target="_blank" class="flex items-center" :href="site_settings.fb_link"><i class="fa-brands fa-linkedin" style="font-size: 1.1rem;"></i></a>
                            <a target="_blank" class="flex items-center" :href="`mailto:${site_settings.email}`"><i class="fa-solid fa-envelope" style="font-size: 1.1rem;"></i></a>
                        </div>
                        <div>
                            <router-link to="/portfolio">
                                <button class="px-2 py-1 bg-primary rounded-2xl text-sm lg:button">Company Profile</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                
                <!-- Desktop view -->
                <div class="title hidden md:flex justify-between items-center py-4 px-4 lg:px-12 xl:px-20">

                    <div :class="{ 'hidden': !view.topOfPage, 'flex': view.topOfPage}">
                        <router-link to="/">
                            <img class="logo-height" src="../../assets/logo/Logo-06.png" alt="">
                        </router-link>
                    </div>

                    <div :class="{ 'flex': !view.topOfPage, 'hidden': view.topOfPage}">
                        <router-link to="/">
                            <img class="logo-height" src="../../assets/logo/Logo-05.png" alt="">
                        </router-link>
                    </div>
                    <div class="flex gap-8">
                        <div class="flex items-center gap-6 text-sm">
                            <a target="_blank" class="flex items-center" :href="site_settings.fb_link"><i class="fa-brands fa-square-facebook" style="font-size: 1.2rem;"></i></a>
                            <a target="_blank" class="flex items-center" :href="site_settings.fb_link"><i class="fa-brands fa-linkedin" style="font-size: 1.2rem;"></i></a>
                            <a target="_blank" class="flex items-center" :href="`mailto:${site_settings.email}`"><i class="fa-solid fa-envelope" style="font-size: 1.2rem;"></i></a>
                        </div>
                        <div>
                            <router-link to="/portfolio"> 
                                <button class="button">Company Profile</button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState({
            site_settings: (state) => state.siteSettings.siteSettings
        })
    },

    mounted() {
        this.$store.dispatch('siteSettings/getSiteSettings')
    },

    data () {
        return {
            host: "https://catchlab-api.smicee.com",

            view: {
                topOfPage: true
            }
        }
    },

    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },

    methods: {
        handleScroll() {
            if(window.pageYOffset > 0) {
                if(this.view.topOfPage) this.view.topOfPage = false
            } else {
                if(!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    }
}
</script>

<style scoped>
nav {
    position: fixed;
    width: 100%;
    background-color: transparent;
    align-items: center;
    transition: all .2s ease-in-out;
    z-index: 999;
    top: 0;
    @apply text-white;
}

.logo-height {
    height: 32px;
}

.onScroll {
    top: 0;
    box-shadow: 0 0 10px #aaa;
    @apply bg-background text-primary;
}

.backScroll {
    position: fixed;
    top: 0;
    box-shadow: 0 0;
    background-color: #1a191920; 
}

.title {
    transition: all .2s ease-in-out;
    transform: translateY(0);
    transition: transform 300ms linear;
}

.header-bottom {
    @apply hidden;
}

@media screen and (max-width: 1024px) {
    .logo-height {
        height: 28px;
    }
}
</style>