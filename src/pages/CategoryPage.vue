<!-- CategoryGrid.vue -->
<template>
    <div class="category-grid" style="padding-top: 60px;">
        <div class="container">
            <p class="fw-bold fs-3 text-center mb-4">Categories</p>
            <div class="row g-3 mb-5 pb-4">
                <div v-for="(category, index) in categories" :key="index" class="col-6 col-md-4 col-lg-3">
                    <router-link :to="'/category-list/' + category.sid"
                        class="category-card text-decoration-none text-dark" style="background-color: #00000080;">
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
            // categories: [
            //     {
            //         name: 'Shower',
            //         sid: 'shower',
            //         icon: 'bi bi-droplet',
            //         bgColor: '#98E4D0'
            //     },
            //     {
            //         id: 2,
            //         name: 'Kitchen',
            //         sid: 'kitchen',
            //         icon: 'bi bi-house-door',
            //         bgColor: '#FFB4A2'
            //     },
            //     {
            //         id: 3,
            //         name: 'Diverters & Mixers',
            //         sid: 'diverters-mixers',
            //         icon: 'bi bi-gear',
            //         bgColor: '#A2D2FF'
            //     },
            //     {
            //         id: 4,
            //         name: 'Faucets',
            //         sid: 'faucets',
            //         icon: 'bi bi-arrow-right-circle',
            //         bgColor: '#FFA6E6'
            //     },
            //     {
            //         id: 5,
            //         name: 'Basin',
            //         sid: 'basin',
            //         icon: 'bi bi-droplet-half',
            //         bgColor: '#D7B4F3'
            //     },
            //     {
            //         id: 6,
            //         name: 'Water Closet',
            //         sid: 'water-closet',
            //         icon: 'bi bi-water',
            //         bgColor: '#A6E3E9'
            //     },
            //     {
            //         id: 7,
            //         name: 'Wellness',
            //         sid: 'wellness',
            //         icon: 'bi bi-heart',
            //         bgColor: '#A8E6CF'
            //     },
            //     {
            //         id: 8,
            //         name: 'Bath Tub',
            //         sid: 'bath-tub',
            //         icon: 'bi bi-inbox',
            //         bgColor: '#FFE194'
            //     },
            //     {
            //         id: 9,
            //         name: 'Accessories',
            //         sid: 'accessories',
            //         icon: 'bi bi-box-seam',
            //         bgColor: '#FFE194'
            //     }
            // ]
        }
    },
    computed: {
        categories() {
            return this.$store.getters['category/getCategories']
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