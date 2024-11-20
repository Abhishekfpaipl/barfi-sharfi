<template>
    <div class="container-fluid px-0 my-5">
        <div v-for="(collection, index) in collections" :key="index">
            <button class="btn w-100 text-start rounded-0 my-5"
                style="background-color: var(--primary-color); color: var(--secondary-color);" type="button"
                data-bs-toggle="collapse" :data-bs-target="'#collapseExample' + index" aria-expanded="false"
                :aria-controls="'collapseExample' + index" @click="toggleCollapse(index)" :id="'menu' + index">
                <p class="text-capitalize fs-5 mb-1">{{ collection.type }}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="smaller">{{ collection.shortDescription }}</p>
                    <i :class="['bi', isOpen(index) ? 'bi-chevron-up' : 'bi-chevron-down', 'chevron-icon']"></i>
                </div>
            </button>
            <div class="collapse show rounded-0" :id="'collapseExample' + index">
                <div class="container p-2">
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
                        <div v-for="(product, pIndex) in filteredProducts(collection.type)" :key="pIndex" class="col">
                            <div class="card h-100 border shadow-sm">
                                <router-link :to="'/product-detail/' + product.sid"
                                    class="text-decoration-none text-dark">
                                    <div class="d-flex justify-content-between align-items-center position-absolute w-100"
                                        style="top: 1%;z-index: 10;">
                                        <span class="badge bg-danger rounded-end-5">
                                            <i class="bi bi-heart-fill me-2" style="color: white !important;"></i>
                                            {{ product.reviews }}
                                        </span>
                                    </div>
                                    <img :src="product.image" :alt="product.name" class="card-img-top product-image">
                                    <div class="card-body text-start">
                                        <span v-if="product.badge" class="badge bg-success d-block">
                                            {{ product.badge }}
                                        </span>
                                        <p class="card-title small mb-2 fw-bold">{{ product.name }}</p>
                                        <p class="text-ellipsis2 smaller">{{ product.description }}</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <div class="flex-fill d-flex justify-content-between align-items-center">
                                                <p class="mb-0">Rs. {{ product.prices[0].cost }}</p>
                                                <img src="/img/veg.png" alt="veg icon" class="" style="width: 25px;">
                                            </div>
                                            <small class="text-decoration-line-through text-muted"
                                                v-if="product.prices[0].originalCost">
                                                Rs. {{ product.prices[0].originalCost }}
                                            </small>
                                        </div>
                                    </div>
                                </router-link>
                                <div class="d-flex justify-content-center align-items-center mb-2">
                                    <button class="btn text-white w-75 mt-3" data-bs-toggle="modal"
                                        data-bs-target="#quickAddModal" :data-bs-productsid="product.sid"
                                        aria-controls="addProduct" style="background-color: var(--primary-color);">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
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
    name: 'GhewarCollection',
    components: {
        ProductOffcanvas,
        QuickAdd,
    },
    data() {
        return {
            openCollapseIndex: null, // Tracks the index of the open collapse
            quantity: 1,
        }
    },
    computed: {
        collections() {
            return this.$store.getters.getCollections
        },
        products() {
            return this.$store.getters.getProducts
        },
    },
    methods: {
        // Toggling the collapse index
        toggleCollapse(index) {
            this.openCollapseIndex = this.openCollapseIndex === index ? null : index;
        },
        // Checking if a collapse is open
        isOpen(index) {
            return this.openCollapseIndex === index;
        },
        filteredProducts(type) {
            return this.products.filter(product => product.type === type);
        },
    },
}
</script>

<style scoped>
.product-image {
    height: 180px;
    object-fit: cover;
    object-position: top;
    width: 100%;
}

.veg-icon {
    position: absolute;
    bottom: 5px;
    /* Adjust as needed for spacing */
    right: 5px;
    /* Adjust for horizontal alignment */
    width: 25px;
    /* Adjust the size of the veg icon */
    z-index: 1;
}

.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

.collapsed {
    background-color: var(--secondary-color) !important;
}

.collapsed p,
i {
    color: black !important;
}

.chevron-icon {
    transition: transform 0.3s ease;
}

.chevron-icon.bi-chevron-up {
    transform: rotate(360deg);
}
</style>