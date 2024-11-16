<template>
    <div class="container">
        <div class="accordion" id="accordionExample">
            <div class="accordion-item" v-for="(collection, index) in collections" :key="index">
                <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        :data-bs-target="'#collapseOne' + index" aria-expanded="true"
                        :aria-controls="'collapseOne' + index">
                        {{ collection.type }}
                    </button>
                </h2>
                <div :id="'collapseOne' + index" class="accordion-collapse collapse show border-0"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                            <div v-for="(product, pIndex) in collection.products" :key="pIndex" class="col">
                                <div class="card h-100 border-0 shadow-sm">
                                    <img :src="product.image" :alt="product.name" class="card-img-top product-image">
                                    <div class="card-body">
                                        <div class="vendor-name small text-muted mb-1">{{ product.vendor }}</div>
                                        <h5 class="card-title h6 mb-2">{{ product.name }}</h5>
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
                                        data-bs-toggle="offcanvas" data-bs-target="#addProduct"
                                        :data-bs-productsid="product.sid" aria-controls="addProduct">Add to
                                        cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ProductOffcanvas :product="products" />
    </div>
</template>
<script>
export default {
    name: "CollectionsCard",
    props: {
        collections: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="">

</style>