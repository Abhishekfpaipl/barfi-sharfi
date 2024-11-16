<template>
    <div class="category-grid" style="padding-top: 60px;">
        <div class="container">
            <p class="fw-bold fs-3 text-center mb-4">Categories</p>
            <div class="row g-3 mb-5 pb-4">
                <div class="col" v-for="(product, subIndex) in products" :key="subIndex">
                    <router-link :to="'/product-detail/' + product.sid" class="card text-decoration-none text-dark">
                        <img :src="product.image" alt="" class="card-img-top" style="height: 250px;object-fit: cover;">
                        <h6 class="fw-bold my-2">{{ product.name }}</h6>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryGrid',
    data() {
        return {}
    },
    computed: {
        products() {
            // Access `categoryId` and `subcategoryId` from route params
            const { categoryId, subcategoryId } = this.$route.params;
            console.log(categoryId, subcategoryId)
            // Access the getter directly from `this.$store.getters`
            return this.$store.getters['category/getProductsBySubCategory'](categoryId, subcategoryId);
        },
    },
}
</script>

<style scoped></style>