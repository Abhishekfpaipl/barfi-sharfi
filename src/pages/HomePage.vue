<template>
    <!-- Mobile version starts -->
    <div class="" style="padding-top: 60px;overflow-x: hidden;">
        <!-- <div class="video-player">
            <video ref="videoPlayer" autoplay loop style="width: 100%; ">
                <source src="https://carolieto.com/uploads/banner/1716011495_Carolieto Website Video.mp4"> 
            </video>
            <div class="controls">
                <button @click="togglePlayPause" class="btn border" style="background-color: transparent !important;">
                    <i v-if="isPlaying" class="bi bi-pause"></i>
                    <i v-else class="bi bi-play"></i>
                </button>
            </div>
        </div> -->
        <CarouselBanner />
        <div class="">
            <NewProductCard :products="sweetProducts" />
        </div>
        <div class="">
            <FeaturesBox />
        </div>
        <div class="">
            <NewProductCard :products="savouriesProducts" />
        </div>
        <div class="">
            <AnimatedTextSection />
        </div>
        <!-- <ProductCard /> -->
        <div class="">
            <TextVideoSection />
            <RotatingImageSection />
            <VideoMaskSection />
        </div>
    </div>
</template>

<script>
import VideoMaskSection from '@/components/VideoMaskSection.vue'
import CarouselBanner from '@/components/CarouselBanner.vue'
import NewProductCard from '@/components/NewProductCard.vue'
import TextVideoSection from '@/components/TextVideoSection.vue'
import AnimatedTextSection from '@/components/AnimatedTextSection.vue'
import RotatingImageSection from '@/components/RotatingImageSection.vue'
import FeaturesBox from '@/components/FeaturesBox.vue'
export default {
    name: "HomePage",
    components: {
        NewProductCard,
        CarouselBanner,
        VideoMaskSection,
        TextVideoSection,
        AnimatedTextSection,
        RotatingImageSection,
        FeaturesBox,
    },
    data() {
        return {
            isPlaying: false,
            videos: [
                {
                    videoId: "ZtCsYVnjmn4",
                    title: "Exolar Energy Testimonial video",
                    viewCount: 26,
                },
                {
                    videoId: "f-4FWD6wAuk",
                    title: "Unleashing the Power of the Sun: Exolar Energy - Leading the Solar Revolution",
                    viewCount: 26,
                },
                {
                    videoId: "Y-RWg3xUsAU",
                    title: "Empowering Tomorrow: Exolar Energy - Harness the Power of the Sun!",
                    viewCount: 26,
                },
                {
                    videoId: "ZtCsYVnjmn4",
                    title: "Exolar Energy Testimonial video",
                    viewCount: 26,
                },
                {
                    videoId: "f-4FWD6wAuk",
                    title: "Unleashing the Power of the Sun: Exolar Energy - Leading the Solar Revolution",
                    viewCount: 26,
                },
                {
                    videoId: "Y-RWg3xUsAU",
                    title: "Empowering Tomorrow: Exolar Energy - Harness the Power of the Sun!",
                    viewCount: 26,
                },
            ],
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
    // methods: {
    //     togglePlayPause() {
    //         const video = this.$refs.videoPlayer;
    //         if (this.isPlaying) {
    //             video.pause();
    //         } else {
    //             video.play();
    //         }
    //         this.isPlaying = !this.isPlaying;
    //     }
    // },
    // mounted() {
    //     this.$refs.videoPlayer.controls = false;
    // }
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