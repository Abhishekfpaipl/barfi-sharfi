<template>
    <div class="container py-4">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div class="col-md-4" v-for="(product, index) in products" :key="index">
                <div class="card h-100 shadow-sm">
                    <img :src="product.image" class="card-img-top" :alt="product.title"
                        style="height: 250px; object-fit: cover;" />
                    <div class="card-body">
                        <h5 class="card-title text-center mb-4 fw-bold">
                            {{ product.name }}
                        </h5>
                        <p class="card-text">
                            {{ product.description }}
                        </p>
                        <div class="bg-light p-3 rounded">
                            <ul class="list-unstyled">
                                <li v-for="(price, idx) in product.prices" :key="idx"
                                    class="mb-2 d-flex justify-content-between">
                                    <span>{{ price.size }}</span>
                                    <span class="fw-bold">{{ price.cost }}</span>
                                </li>
                            </ul>
                        </div>
                        <span v-if="product.badge" class="badge bg-success mb-3 d-block">
                            {{ product.badge }}
                        </span>
                        <button class="btn btn-primary w-100 mt-3" @click="addToCart(product)" data-bs-toggle="modal"
                            data-bs-target="#quickAddModal" :data-bs-productsid="product.sid"
                            aria-controls="addProduct">
                            Add to Cart
                        </button>
                        <!-- <button class="btn btn-primary w-100 mt-3" @click="addToCart(product)"
                            data-bs-toggle="offcanvas" data-bs-target="#addProduct"
                            :data-bs-productsid="product.sid" aria-controls="addProduct">
                            Add to Cart
                        </button> -->
                    </div>
                </div>
            </div>
        </div>
        <ProductOffcanvas :product="products" />
        <QuickAdd :product="products" />
    </div>
</template>
<script>
import ProductOffcanvas from "@/components/ProductOffcanvas.vue"
import QuickAdd from "@/components/QuickAdd.vue"
export default {
    name: "ProductCards",
    components: {
        ProductOffcanvas,
        QuickAdd,
    },
    props: {
        products: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data() {
        return {
        };
    },
    methods: {
        addToCart(product) {
            console.log(`Added to cart: ${product.title}`);
        }
    }
};
</script>