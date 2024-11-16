<template>
    <div class="container-fluid p-0">
        <div class="hero-section mb-5">
            <h1 class="display-5 text-uppercase">{{ type }}</h1>
        </div>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div v-for="product in products" :key="product.id" class="col">
                    <div class="card h-100 border-0 shadow-sm">
                        <img :src="product.image" :alt="product.name" class="card-img-top product-image">
                        <div class="card-body">
                            <div class="vendor-name small text-muted mb-1">{{ product.vendor }}</div>
                            <h5 class="card-title h6 mb-2">{{ product.name }}</h5>
                            <!-- <div class="price-section mb-2">
                                <div class="bg-light p-3 rounded">
                                    <ul class="list-unstyled">
                                        <li v-for="(price, idx) in product.prices" :key="idx"
                                            class="mb-2 d-flex justify-content-between">
                                            <span>{{ price.size }}</span>
                                            <span class="fw-bold">{{ price.cost }}</span>
                                        </li>
                                    </ul>
                                </div>
                                <span class="original-price text-muted text-decoration-line-through"
                                    v-if="product.originalPrice">
                                    Rs. {{ product.originalPrice.toFixed(2) }}
                                </span>
                                <span class="discount-badge ms-2" v-if="product.discount">
                                    Save {{ product.discount }}%
                                </span>
                            </div> -->
                        </div>
                        <div class="ratings mb-3">
                            <span v-if="product.badge" class="badge bg-success mb-3 d-block">
                                {{ product.badge }}
                            </span>
                            <span class="stars">
                                ★★★★★
                            </span>
                            <span class="reviews-count text-muted ms-2">{{ product.reviews }} reviews</span>
                        </div>
                        <button class="btn text-white w-100" style="background-color: var(--primary-color);"
                            data-bs-toggle="offcanvas" data-bs-target="#addProduct" :data-bs-productsid="product.sid"
                            aria-controls="addProduct">Add to cart</button>
                        <!-- <button class="btn btn-brown w-100" data-bs-toggle="modal" data-bs-target="#quickAddModal"
                            :data-bs-productsid="product.sid" aria-controls="addProduct">Add to cart</button> -->
                    </div>
                </div>
            </div>
        </div>
        <ProductOffcanvas :product="products" />
        <!-- <QuickAdd :product="products" /> -->
    </div>
</template>

<script>
import ProductOffcanvas from "@/components/ProductOffcanvas.vue"
// import QuickAdd from "@/components/QuickAdd.vue"
export default {
    name: 'GhewarCollection',
    components: {
        ProductOffcanvas,
        // QuickAdd,
    },
    props: {
        products: {
            type: Array,
            required: true,
            default: () => []
        },
        type: {
            type: String,
        }
    },
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.hero-section {
    height: 400px;
    overflow: hidden;
    background-color: #f8f3f0;
}

.hero-image {
    height: 100%;
    object-fit: cover;
}

.text-brown {
    color: #8B2801;
}
 

.btn-brown:hover {
    background-color: #6B1F01;
    color: white;
}

.product-image {
    height: 200px;
    object-fit: cover;
}

.stars {
    color: #FFD700;
}

.discount-badge {
    color: #8B2801;
    font-size: 0.875rem;
    font-weight: 500;
}

.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

.vendor-name {
    font-size: 0.875rem;
}
</style>