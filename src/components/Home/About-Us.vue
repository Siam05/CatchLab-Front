<template>
    <div class="mb-12 lg:mb-0 lg:py-24 xl:py-40">
        <div class="flex justify-center -mt-28 lg:-mt-4 xl:-mt-16 2xl:-mt-20">
            <div class="container flex flex-col lg:flex-row gap-60 lg:gap-12 xl:gap-20 px-4 xl:px-20">
                <div class="lg:w-2/5">
                    <div class="w-full mobile-view sm:px-12 md:px-28 lg:px-0">
                        <div class="flex justify-end">
                            <img class="h-96 w-80 rounded-2xl object-cover" src="../../assets/about-us/1.jpg" alt=""> 
                        </div>
                        <div class="flex justify-start -mt-32">
                            <img class="h-60 bottom-img-size rounded-2xl border-8 border-background object-cover" src="../../assets/about-us/3.jpg" alt=""> 
                        </div>
                        <div class="flex justify-start img-rounded">
                            <img class="h-56 w-56 rounded-full border-8 border-background object-cover" src="../../assets/about-us/2.jpg" alt=""> 
                        </div>
                    </div>
                </div>

                <div class="lg:w-3/5 text-left flex flex-col items-center lg:items-start">
                    <div class="flex items-center justify-center bg-white rounded-full shadow-md w-40 py-2">
                        <i class="pi pi-circle-fill text-primary" style="font-size: 0.4rem"></i>
                        <p class="text-sm px-2.5 text-gray-600">ABOUT US</p>
                        <i class="pi pi-circle-fill text-primary" style="font-size: 0.4rem"></i>
                    </div>

                    <div class="pt-4 lg:pt-6 text-2xl xl:text-4xl text-center lg:text-left">
                        <div class="flex font-semibold">
                            <p>Why We're the Perfect Match for Your Creative Project?</p>
                        </div>
                    </div>

                    <div class="pt-4 lg:pt-6">
                        <p class="text-gray-600 text-sm">At our animation and post-production agency, we have a passion for bringing ideas to life through stunning visuals. With our expertise and commitment to quality, we are the ideal partner to help you achieve your creative goals.</p>
                    </div>
                    
                    <div class="xl:flex pt-4 lg:pt-6">
                        <div class="text-sm text-gray-600 flex flex-col items-start">
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Expertise: Experienced animators and post-production experts.</p>
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Creativity: Passionate about stunning content that captures your brand.
</p>
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Quality: High-quality work that exceeds expectations.</p>
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Customer-focused: Put clients' needs first and work closely with them.</p>
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Global Reach: Experienced in catering to clients from different cultures.</p>
                        </div>

                        <div class="lg:ml-8 flex items-center justify-center mt-4 xl:mt-0">
                            <div class="p-4 text-center font-semibold border-2 border-gray-300 rounded-2xl">
                                <p class="text-primary text-4xl">5</p>
                                <p class="text-gray-500">YEARS</p>
                                <p class="text-gray-500 text-xs">OF EXPERIANCE</p>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4 lg:pt-6">
                        <router-link to="/portfolio">
                            <button class="button w-full">OUR PORTFOLIO</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.img-rounded {
    margin-top: -430px;
}

.bottom-img-size {
    width: 360px;
}


@media screen and (min-width: 541px) and (max-width: 640px) {
    .mobile-view {
        @apply px-8;
    }
}
</style> 