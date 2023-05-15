<template>
    <div class="imageStyle">
        <div class="background-color h-full">
            <div class="h-full w-full flex flex-col justify-center items-center pt-16">
                <div class="container flex flex-col justify-center items-center px-8 lg:px-12 xl:px-20">
                    <div class="flex items-center justify-center bg-white rounded-full shadow-md w-48 py-2">
                        <i class="pi pi-circle-fill text-primary" style="font-size: 0.4rem"></i>
                        <p class="text-sm px-2.5 text-black">DIGITAL AGENCY</p>
                        <i class="pi pi-circle-fill text-primary" style="font-size: 0.4rem"></i>
                    </div>
                    <div class="pt-4 flex flex-col justify-center items-center">
                        <p class="text-lg lg:text-6xl text-white font-bold"><span class="text-primary">Digital</span> Agency You</p>
                        <p class="text-lg lg:text-6xl text-white font-bold pt-2"> Can Rely Upon!</p>
                        <p class="text-white pt-4 lg:pt-6 lg:w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam nulla ipsam voluptatum facilis</p>
                        <div class="pt-4 lg:pt-6 text-center flex items-start gap-4">
                            
                            <router-link to="/portfolio">
                                <button class="button">OUR PORTFOLIO</button>
                            </router-link>
                        </div>
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
    .imageStyle {
        background-image: url('../../assets/bannerImage/top-view-workspace-with-laptop-notebook_11zon.jpg');
        background-size: cover;
        width: 100%;
        height: 75vh;
    }

    .background-color {
        background-color: #0a0a0aa4;
    }
    
    @media screen and (max-width: 768px) {
        .imageStyle {
            height: 70vh;
        }
    }
</style>