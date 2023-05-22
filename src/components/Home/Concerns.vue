<template>
    <div>
        <div class="flex justify-center items-center background">
            <div class="container px-4 lg:px-12 xl:px-20">
                <div class="hidden sm:flex">
                    <img src="../../assets/concerns/Concerns-desktop.svg" alt="">
                </div>
                <div class="flex sm:hidden">
                    <img src="../../assets/concerns/Concerns-phone.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    components: {},

    data() {
        return {
            host: "https://api.catchbangladesh.com",
            show_reviews: true,
            reviewId: 1,
            title: null,
            description: null,
            visible: false
        }
    },

    computed: {
        ...mapState({
            reviews: (state) => state.reviews.reviews
        })
    },

    mounted() {
        this.$store.dispatch('reviews/getReviewsList')
    },
    methods:{
        morereviews() {
            this.show_reviews = false
        },

        lessreviews() {
            this.show_reviews = true
        },

        showreviewDescription(review) {
            this.reviewId = review.id
            this.title = review.title
            this.description = review.description
            if (this.reviewId == review.id) {
                this.visible = true
            }
        }
    }
}
</script>

<style scoped>
    .background {
        background-image: url("../../assets/concerns/BG-Cover.svg");
        background-size: cover;
        object-fit: cover;
        align-items: center;
        background-repeat: no-repeat;
    }

    .blurColor{
        background-color: #020202ad;
    }
</style>