<template>
    <div class="mb-12 lg:mb-0 lg:py-32">
        <div class="flex justify-center -mt-28 lg:-mt-10">
            <div class="container flex flex-col lg:flex-row gap-60 lg:gap-20 px-4 lg:px-12 xl:px-20">
                <div class="xl:w-2/5">
                    <div class="w-full">
                        <div class="flex justify-end">
                            <img class="h-96 w-80 rounded-2xl object-cover" src="../../assets/about-us/1.jpg" alt=""> 
                        </div>
                        <div class="flex justify-start lg:ml-20 -mt-40">
                            <img class="h-60 bottom-img-size rounded-2xl border-8 border-background object-cover" src="../../assets/about-us/3.jpg" alt=""> 
                        </div>
                        <div class="flex justify-start lg:ml-6 img-rounded">
                            <img class="h-56 w-56 rounded-full border-8 border-background object-cover" src="../../assets/about-us/2.jpg" alt=""> 
                        </div>
                    </div>
                </div>

                <div class="xl:w-3/5 text-left flex flex-col items-center lg:items-start">
                    <div class="flex items-center justify-center bg-white rounded-full shadow-md w-40 py-2">
                        <i class="pi pi-circle-fill text-primary" style="font-size: 0.4rem"></i>
                        <p class="text-sm px-2.5 text-gray-600">ABOUT US</p>
                        <i class="pi pi-circle-fill text-primary" style="font-size: 0.4rem"></i>
                    </div>

                    <div class="pt-4 lg:pt-6 text-2xl xl:text-4xl text-center">
                        <div class="flex font-semibold">
                            <p class="text-primary">Introduction</p>
                            <p class="pl-2">To Best</p>
                        </div>
                        <p class="font-semibold">Digital Agency!</p>
                    </div>

                    <div class="pt-4 lg:pt-6">
                        <p class="text-gray-600 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima illum impedit officia. Sit accusamus consectetur accusantium! Asperiores sit eaque odit pariatur culpa ratione sequi nihil explicabo quod, dignissimos, facilis magni?</p>
                    </div>
                    
                    <div class="xl:flex pt-4 lg:pt-6">
                        <div class="text-sm text-gray-600 flex flex-col items-start">
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Contrary to popular belief, simply random text</p>
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Contrary to Lorem Ipsum is not simply random text</p>
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Contrary to ponot simply random text</p>
                            <p class="py-0.5"><i class="pi pi-check-circle pr-2 text-primary" style="font-size: 0.9rem"></i>Lorem Ipsum is not simply random text</p>
                        </div>

                        <div class="lg:ml-16 flex items-center justify-center mt-4 lg:mt-0">
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
</style> 