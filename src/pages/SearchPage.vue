<template>
    <div class="container mb-5" style="overflow-x: hidden">
        <!-- <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Our Products</h2> -->

        <!-- Search and Filter Section -->
        <div class="row my-4">
            <div class="col-12 col-md-6 mb-3">
                <input type="text" v-model="searchQuery" class="form-control" placeholder="Search products..." />
            </div>
            <div class="col-12 col-md-6 mb-3">
                <select v-model="selectedCategory" class="form-select">
                    <option value="">All Categories</option>
                    <option v-for="collection in collections" :key="collection.id" :value="collection.type">
                        {{ collection.type }}
                    </option>
                </select>
            </div>
        </div>

        <!-- Product Cards Section -->
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 my-5 ">
            <div v-for="(product, index) in filteredProducts" :key="index" class="col">
                <div class="card h-100 border shadow-sm" data-bs-toggle="modal" data-bs-target="#quickAddModal"
                    :data-bs-productsid="product.sid" aria-controls="addProduct">
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
                    <div class="d-flex justify-content-center align-items-center mb-2">
                        <button class="btn text-white w-75 mt-3" data-bs-toggle="modal" data-bs-target="#quickAddModal"
                            :data-bs-productsid="product.sid" aria-controls="addProduct"
                            style="background-color: var(--primary-color);">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <QuickAdd :product="products" />
</template>

<script>
import QuickAdd from "@/components/QuickAdd.vue"
export default {
    name: 'SearchPage',
    components: { 
        QuickAdd,
    },
    data() {
        return {
            searchQuery: '',
            selectedCategory: '',
        }
    },
    computed: {
        products() {
            return this.$store.getters.getProducts;
        },
        collections() {
            return this.$store.getters.getCollections
        },
        filteredProducts() {
            return this.products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesCategory = this.selectedCategory ? product.type === this.selectedCategory : true;
                return matchesSearch && matchesCategory;
            });
        }
    }
}
</script>

<style scoped>
.product-card {
    transition: transform 0.2s;
}

.product-image {
    height: 180px;
    object-fit: cover;
    object-position: top;
    width: 100%;
}


.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}


.product-card {
    transition: transform 0.2s;
}

.product-card:hover {
    transform: translateY(-5px);
}
</style>
