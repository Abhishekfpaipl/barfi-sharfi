<template>
    <div class="" style="padding-top: 60px;overflow-x: hidden;">
        <SectionTopBanner />
        <div class="container my-5">
            <!-- Header Section -->
            <div class="text-center mb-4">
                <h1 class="fw-bold">Welcome to SweeDesi</h1>
                <p class="lead text-muted">
                    Bringing the authentic flavors of India right to your doorstep.
                </p>
            </div>

            <!-- About Section -->
            <div class="row align-items-center mb-5">
                <div class="col-md-6">
                    <h2 class="fw-bold">Relive the Nostalgia</h2>
                    <p>
                        In today’s busy world, SweeDesi brings back the essence of your roots,
                        with authentic, unadulterated sweets and snacks sourced from the best
                        regional vendors known for their generational expertise.
                    </p>
                    <p>
                        Whether you're craving traditional delicacies or exploring India's rich
                        culinary heritage, we deliver the flavors that make you feel at home.
                    </p>
                </div>
                <div class="col-md-6">
                    <img src="https://via.placeholder.com/500x300" alt="SweeDesi Delicacies"
                        class="img-fluid rounded" />
                </div>
            </div>

            <!-- Features Section -->
            <div class="row text-center mb-5">
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Authentic & Fresh</h5>
                            <p class="card-text">
                                Sourced from the best regional vendors, ensuring fresh, pure, and
                                preservative-free products every time.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Fast Delivery</h5>
                            <p class="card-text">
                                Multi-layer packaging and fast delivery keep your sweets intact and
                                as fresh as when they were made.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card border-0 shadow-sm h-100">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">Discover India's Flavours</h5>
                            <p class="card-text">
                                Explore the diverse culinary heritage of India with unique and
                                traditional sweets and snacks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Call to Action -->
            <div class="text-center">
                <h3 class="fw-bold">Ready to Experience the Sweetness?</h3>
                <p class="text-muted">Order now and rediscover the joy of authentic Indian flavors.</p>
                <a href="#" class="btn btn-primary btn-lg">Shop Now</a>
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
h1,
h2 {
    color: #6c757d;
}

.card-title {
    color: #ff5722;
}

.btn-primary {
    background-color: #ff5722;
    border-color: #ff5722;
}

.btn-primary:hover {
    background-color: #e64a19;
    border-color: #e64a19;
}
</style>