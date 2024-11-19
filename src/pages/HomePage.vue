<template>
    <!-- Mobile version starts -->
    <div class="" style="overflow-x: hidden;">
        <CarouselBanner />
        <div class="">
            <NewProductCard />
        </div>
        <div class="">
            <FeaturesBox />
        </div>
        <div class="my-5">
            <SimilarProducts />
        </div>
        <div class="">
            <!-- <AnimatedTextSection /> --> 
        </div>

    </div>
</template>

<script>
import CarouselBanner from '@/components/CarouselBanner.vue'
import NewProductCard from '@/components/NewProductCard.vue'
// import AnimatedTextSection from '@/components/AnimatedTextSection.vue'
import FeaturesBox from '@/components/FeaturesBox.vue'
import SimilarProducts from '@/components/SimilarProducts.vue' 
export default {
    name: "HomePage",
    components: {
        NewProductCard,
        CarouselBanner,
        // AnimatedTextSection,
        FeaturesBox,
        SimilarProducts, 
    },
    data() {
        return {
        };
    },
};
</script>
<style scoped>
@media (min-width:998px) {

    .dropstart .dropdown-menu {
        top: 50px !important;
    }
}

.video-player {
    position: relative;
}

.controls {
    position: absolute;
    bottom: 20px;
    left: 20px;
}
</style>