<template>
    <!-- Mobile version starts -->
    <div class="">
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
import axios from 'axios'
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
            products: []
        };
    },
    mounted() {
        this.fetchproducts();
    },
    methods: {
        async fetchproducts() {
            try {
                const response = await axios.get('https://apixly.in/api/store/products', {
                    headers: {
                        Authorization: 'Bearer $2y$12$jIvenvn2yYXlAhWpxRl3I.DOHRO0EtydXbTa0psIXWUU1qiLuyZwS'
                    }
                });
                this.products = response.data;
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
    }

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