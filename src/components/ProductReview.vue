<template>
    <div class="container my-5" id="reviews">
        <p class="display-5 mb-5 ">Customers Rating</p>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
            <div v-for="(testimonial, index) in product.reviews" :key="index" class="col mb-4">
                <div class="card h-100">
                    <div class="card-body" style="background-color: var(--secondary-color); color: var(--primary-color);">
                        <div class="d-flex align-items-center mb-3">
                            <div class="profile-icon rounded-circle bg-light p-2 me-3">
                                <i class="bi bi-person-fill text-dark"></i>
                            </div>
                            <div>
                                <h5 class="text-start mb-0">{{ testimonial.name }}</h5>
                                <p class="small mb-0 text-white-50 text-start">{{ testimonial.title }}</p>
                            </div>
                        </div>
                        <div class="quote-box bg-white p-3 rounded">
                            <div class="stars mb-2">
                                <i v-for="n in 5" :key="n" class="bi"
                                    :class="n <= testimonial.rating ? 'bi-star-fill text-warning' : 'bi-star'">
                                </i>
                            </div>
                            <p class="card-text text-muted mb-0">{{ testimonial.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductReview',
    props: {
        product: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
.card {
    border: none;
    transition: transform 0.3s;
}

.card:hover {
    transform: translateY(-5px);
}

.card-body {
    border-radius: 15px;
    padding: 1.5rem;
}

.quote-box {
    position: relative;
    margin-top: 1rem;
}

.quote-box::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid white;
}

.profile-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.bg-danger {
    background-color: #dc3545 !important;
}

.bg-success {
    background-color: #28a745 !important;
}

.bg-warning {
    background-color: #fd7e14 !important;
}
</style>