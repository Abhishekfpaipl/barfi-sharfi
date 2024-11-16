<template>
    <div class="container mb-5" style="padding-top: 60px;overflow-x: hidden">
        <!-- <h2 class="display-5 text-uppercase" style="color: var(--bg-primary);">Our Products</h2> -->

        <!-- Search and Filter Section -->
        <div class="row my-4">
            <div class="col-12 col-md-6 mb-3">
                <input type="text" v-model="searchQuery" class="form-control" placeholder="Search products..." />
            </div>
            <div class="col-12 col-md-6 mb-3">
                <select v-model="selectedCategory" class="form-select">
                    <option value="">All Categories</option>
                    <option v-for="category in categories" :key="category.sid" :value="category.sid">
                        {{ category.name }}
                    </option>
                </select>
            </div>
        </div>

        <!-- Product Cards Section -->
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 my-5 justify-content-center">
            <div v-for="(product, index) in filteredProducts" :key="index" class="col">
                <router-link :to="'/product-detail/' + product.sid"
                    class="card h-100 product-card bg-light text-decoration-none">
                    <div class="text-center mb-3">
                        <img :src="product.image" :alt="product.name" class="card-img-top" style="max-height: 250px;">
                    </div>
                    <p class="text-start my-2 px-2 small text-ellipsis2" style="min-height: 42px;">{{ product.name }}
                    </p>
                    <div class="d-flex justify-content-between align-items-center mb-2 p-2">
                        <strong><span v-if="product.currency === 'INR'">₹</span> {{ product.price }} <span
                                v-if="product.currency === 'INR'">{{
                                    product.currency }}</span> <span v-else> USD</span></strong>
                        <div class="small">
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                        </div>
                    </div>

                    <!-- <div v-if="product.color" class="d-flex overflow-x-scroll gap-2 mb-3 justify-content-center"
                        id="scroll">
                        <img v-for="(color, index) in product.color" :key="index" :src="color.image"
                            class="btn rounded-circle p-0 border-0" style="width:40px;height:40px;">
                    </div> -->

                    <!-- <p class="text-muted small text-ellipsis3">{{ product.info }}</p> -->
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchPage',
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
        categories() {
            return this.$store.getters['category/getCategories']
        },
        filteredProducts() {
            return this.products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
                const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
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
