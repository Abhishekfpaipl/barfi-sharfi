<template>
    <!-- Mobile version starts -->
    <div class="" style="padding-top: 60px;overflow-x: hidden;">
        <CarouselBanner />
        <div class="">
            <!-- <NewProductCard :products="sweetProducts" type="sweet menu"/> -->
            <NewProductCard :products="filteredProducts('sweet')" type="sweet menu" />
        </div>
        <div class="">
            <FeaturesBox />
        </div>
        <div class="">
            <NewProductCard :products="filteredProducts('savouries')" type="savouries menu" />

            <!-- <NewProductCard :products="savouriesProducts" type="savouries menu"/> -->
        </div>
        <div class="my-5">
            <SimilarProducts />
        </div>
        <div class="">
            <AnimatedTextSection />
        </div> 
    </div>
</template>

<script>
import CarouselBanner from '@/components/CarouselBanner.vue'
import NewProductCard from '@/components/NewProductCard.vue' 
import AnimatedTextSection from '@/components/AnimatedTextSection.vue'
 import FeaturesBox from '@/components/FeaturesBox.vue'
import SimilarProducts from '@/components/SimilarProducts.vue'
export default {
    name: "HomePage",
    components: {
        NewProductCard,
        CarouselBanner, 
        AnimatedTextSection,
         FeaturesBox,
        SimilarProducts,
    },
    data() {
        return {
        };
    },
    computed: {
        sweetProducts() {
            return this.$store.getters.getProducts.filter(product => product.type === 'sweets menu');
        },
        savouriesProducts() {
            return this.$store.getters.getProducts.filter(product => product.type === 'savouries menu');
        },
        filteredProducts() {
            return (type) => {
                if (type === 'sweet') {
                    return this.sweetProducts;
                } else if (type === 'savouries') {
                    return this.savouriesProducts;
                } else {
                    return this.products; // Fallback to all products if no type is specified
                }
            };
        }
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