<template>
    <div class="flex flex-col justify-center items-center pt-36 lg:pt-40 pb-12 lg:pb-20 bg-background">
        <Toast :breakpoints="{'640px': {width: '80%', right: '0'}}" /> 
        <div class="container px-4 lg:px-12 xl:px-20 2xl:px-48">
            <div>
                <p class="font-semibold text-xl md:text-2xl text-primary">{{ jobDetail.title }}</p>
                <div class="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 pt-6 lg:pt-8">
                    <div class="lg:w-1/2 text-left p-5 rounded-lg bg-white shadow-xl">
                        <p class="font-semibold text-lg text-primary">Job Descriptions:</p>
                        <p v-if="jobDetail.job_description" class="pt-4 text-gray-500 text-sm" v-html="jobDetail.job_description.description"></p>
                    </div>
                    <div class="lg:w-1/2 text-left p-5 rounded-lg bg-white shadow-xl">
                        <p class="font-semibold text-lg text-primary">Deadlines:</p>
                        <p class="text-gray-500 pt-4">{{ getDeadline(jobDetail.deadline) }}</p>

                        <p class="font-semibold text-lg text-primary pt-6">Qualifications:</p>
                        <p v-if="jobDetail.qualification" class="pt-4 text-gray-500 text-sm" v-html="jobDetail.qualification.details"></p>
                    </div>
                </div>
                <div class="pt-12 lg:pt-20">
                    <p class="font-semibold text-xl md:text-2xl text-primary">You are apllyling for {{ jobDetail.title }}</p>
                    <div class="flex flex-col lg:flex-row lg:gap-10">
                        <div class="w-full lg:w-1/2 mt-3 md:mt-8 flex flex-col items-start gap-4">
                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 text-primary font-semibold">Your Name</p>
                                <input v-model="applyData.name" type="text" class="w-full p-3 border border-primary rounded-lg text-sm outline-none" placeholder="Your Name" name="" id="">
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 text-primary font-semibold">Your E-mail</p>
                                <input v-model="applyData.email" type="text" class="w-full p-3 border border-primary rounded-lg text-sm outline-none" placeholder="Your E-mail" name="" id="">
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 text-primary font-semibold">Your Phone Number</p>
                                <input v-model="applyData.phone" type="text" class="w-full p-3 border border-primary rounded-lg text-sm outline-none" placeholder="Your Phone Number" name="" id="">
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 text-primary font-semibold">Your Linkedin</p>
                                <input v-model="applyData.linkedIn" type="text" class="w-full p-3 border border-primary rounded-lg text-sm outline-none" placeholder="Your Linkedin" name="" id="">
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 text-primary font-semibold">Your Facebook</p>
                                <input v-model="applyData.facebook" type="text" class="w-full p-3 border border-primary rounded-lg text-sm outline-none" placeholder="Your Facebook" name="" id="">
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 text-primary font-semibold">Your Portfolio</p>
                                <input v-model="applyData.portfolio" type="text" class="w-full p-3 border border-primary rounded-lg text-sm outline-none" placeholder="Your Portfolio" name="" id="">
                            </div>
                        </div>

                        <div class="w-full lg:w-1/2 mt-3 md:mt-8 flex flex-col items-start gap-4">
                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 text-primary font-semibold">Why do you want to join us?</p>
                                <textarea v-model="applyData.why_join" name="" class="w-full p-3 border border-primary rounded-lg text-sm outline-none" placeholder="Your message here..." id="" cols="30" rows="7"></textarea>
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 text-primary font-semibold">What sets you apart form others?</p>
                                <textarea v-model="applyData.what_sets_apart" name="" class="w-full p-3 border border-primary rounded-lg text-sm outline-none" placeholder="Your message here..." id="" cols="30" rows="7"></textarea>
                            </div>

                            <div class="w-full flex flex-col items-start">
                                <p class="py-1 mb-2 text-primary font-semibold text-left">Upload your CV (The file must be in .pdf format and less than 3 megabytes) </p>
                                <input type="file" accept=".pdf" class="fileinput" @change="uploadPDF( $event )">
                            </div>
                        </div>
                    </div>
                    <button @click="apply()" class="mt-6 button">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";
import Toast from 'primevue/toast';

export default { 
    components: {
        Toast
    },

    props: ["slug"],

    data() {
        return {
            host: "https://api.catchbangladesh.com",
            jobDetail:{},
            applyData: {
                name: '',
                position: null,
                email: '',
                phone: '',
                linkedIn:'',
                facebook:'',
                portfolio:'',
                why_join:'',
                what_sets_apart: '',
                cv: null,
            }
        }
    },

    computed: {
        ...mapState({
            jobDetails: (state) => state.career.jobDetails
        })
    },

    mounted() {
        this.$store.dispatch('career/getJobDetails',this.slug)
    },

    watch:{
		jobDetails(newValue, oldValue){
			this.jobDetail = this.jobDetails
		}
	},

    methods: {
        getDeadline(deadline) {
            return moment(deadline).format('MMMM Do, YYYY')
        },

        uploadPDF(event) {
            this.applyData.cv = event.target.files[0]
        },

        apply() {
            this.applyData.position = parseInt(this.slug)
            this.$store.dispatch('career/applyForJob', this.applyData).then(response => {
                // console.log(response)    
                if(response.data.status == 200) { 
                    this.$toast.add({severity: 'success', summary: 'Success!', detail: response.data.message, closable: false, life: 3000})
                    this.applyData.name = '',
                    this.applyData.position = null,
                    this.applyData.email = '',
                    this.applyData.phone = '',
                    this.applyData.linkedIn ='',
                    this.applyData.facebook ='',
                    this.applyData.portfolio ='',
                    this.applyData.why_join= '',
                    this.applyData.what_sets_apart = '',
                    this.applyData.cv = null
                }
                else {
                    this.$toast.add({severity: 'error', summary: 'Error!', detail: response.data.message, closable: false, life: 3000})
                }
            })
        }
    }
}
</script>

<style scoped></style> 