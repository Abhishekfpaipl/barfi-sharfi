<template>
    <div class="" style="padding-top: 60px;overflow-x: hidden;">
        <SectionTopBanner />
        <div class="container py-5">
            <div class="row align-items-center">
                <!-- Left side - Product Images -->
                <div class="col-md-6 mb-4 mb-lg-0">
                    <div class="product-images">
                        <img src="https://carolieto.com/uploads/about/1705298177_about.jpg"
                            alt="Carolieto Shower Products" class="img-fluid product-showcase">
                    </div>
                </div>
                <!-- Right side - Company Information -->
                <div class="col-md-6">
                    <div class="text-start">
                        <h1 class="mb-4">COMPANY PROFILE</h1>

                        <div class="content">
                            <p class="mb-4">
                                Carolieto is the single biggest acquisition by the Marca Coroma Group. It also
                                collaborates with technology from Japan and France, which revolutionizes the
                                concept of Smart Bathrooms.
                            </p>

                            <p class="mb-4">
                                The Marca Coroma Group is a legacy of 60 years of Engineering, which began
                                with Projects in faraway lands of Iraq and Dubai in the 1960s. Having exports in
                                about 17 countries, the present day Marca Coroma Group, is the biggest
                                manufacturer of the Showers category in the Indian Bathroom Fittings
                                Industry, with more than 140 plus designs.
                            </p>

                            <p class="mb-4">
                                Each Industry, be it Electronics or Automobiles, goes through a
                                transformational process and reaches a crescendo. This Crescendo in the
                                Bathroom Fittings Industry is what we bring forth in this latest International
                                Presentation by Carolieto, where the Customer, will have complete discretion
                                to choose his Wall to Wall Showering Experience.
                            </p>

                            <p class="innovation-text">
                                Each day, at Carolieto, you would find a renewed energy, to improve on the
                                yesterday. And that focus on improvements with renewed energy is what ensures,
                                that every Carolieto product, always remains the ultimate. Innovation is at
                                it's crescendo when you choose a Carolieto product.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SectionTopBanner from '@/components/SectionTopBanner'
export default {
    name: 'AboutUs',
    components: {
        SectionTopBanner
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped>
.innovation-text {
    color: #0A324B;
    font-style: italic;
    border-left: 3px solid #C69C6D;
    padding-left: 1rem;
    margin-top: 2rem;
}
</style>