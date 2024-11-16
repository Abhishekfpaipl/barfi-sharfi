<!-- CategoryGrid.vue -->
<template>
    <div class="category-grid" style="padding-top: 60px;">
        <div class="container">
            <p class="fw-bold fs-3 text-center mb-4">{{ pageName }}</p>
            <div class="row g-3 mb-5 pb-4">
                <div v-for="(category, index) in category.sub_category" :key="index" class="col-6 col-md-4 col-lg-3">
                    <router-link to="/product-detail/dionysus" class="category-card text-decoration-none text-dark"
                        style="background-color: #00000080;">
                        <div class="icon-circle">
                            <i :class="category.icon"></i>
                        </div>
                        <h6 class="fw-bold mb-0">{{ category.name }}</h6>
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
        return {
            pageName: '',
        }
    },
    mounted() {
        let pageName = this.$route.path.split('/').pop();
        this.pageName = pageName.replace(/-/g, ' ');
    },
    computed: {
        category() {
            let productId = this.$route.params.productId;
            return this.$store.getters['category/getCategory'](productId);
        }
    }
}
</script>

<style scoped>
.category-grid {
    background-color: #f8f9fa;
    min-height: 100vh;
}

.category-card {
    border-radius: 20px;
    padding: 2rem 1rem;
    text-align: center;
    transition: all 0.3s ease;
    cursor: pointer;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.icon-circle {
    background-color: rgba(255, 255, 255, 0.9);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.icon-circle i {
    font-size: 1.5rem;
    color: #333;
}

.category-name {
    color: #fff;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
}

@media (max-width: 767.98px) {
    .category-card {
        height: 140px;
        padding: 1.5rem 1rem;
    }

    .icon-circle {
        width: 40px;
        height: 40px;
    }

    .icon-circle i {
        font-size: 1.2rem;
    }

    .category-name {
        font-size: 0.9rem;
    }
}

@media (max-width: 575.98px) {
    .category-card {
        height: 120px;
        padding: 1rem;
    }
}
</style>