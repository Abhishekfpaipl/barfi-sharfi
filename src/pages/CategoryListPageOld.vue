<!-- CategoryMenu.vue -->
<template>
    <div class="" >
        <div class="category-container">
            <div class="row g-0">
                <!-- Left Sidebar Categories -->
                <div class="col-auto category-sidebar">
                    <nav id="category-nav" class="nav flex-column">
                        <div class="categories-header d-flex justify-content-between align-items-center p-3">
                            <h6 class="mb-0">Categories</h6>
                            <div class="actions">
                                <button class="btn btn-link p-0 me-2">
                                    <i class="bi bi-search"></i>
                                </button>
                                <button class="btn btn-link p-0 me-2">
                                    <i class="bi bi-heart"></i>
                                </button>
                                <button class="btn btn-link p-0">
                                    <i class="bi bi-three-dots-vertical"></i>
                                </button>
                            </div>
                        </div>

                        <a v-for="category in categories" :key="category.id" class="nav-link d-flex align-items-center"
                            :class="{ active: activeCategory === category.id }" :href="'#' + category.id"
                            @click="setActiveCategory(category.id)">
                            <div class="category-icon">
                                <i :class="category.icon"></i>
                            </div>
                            <span class="category-name">{{ category.name }}</span>
                        </a>
                    </nav>
                </div>

                <!-- Right Content Area -->
                <div class="col">
                    <div class="products-container pb-5" data-bs-spy="scroll" data-bs-target="#category-nav">
                        <div v-for="category in categories" :key="category.id" :id="category.id"
                            class="product-section">
                            <div class="row g-3">
                                <div v-for="product in category.products" :key="product.id" class="col-6">
                                    <div class="product-card">
                                        <div class="product-image">
                                            <img :src="product.image" :alt="product.name">
                                            <span class="product-badge">{{ product.badge }}</span>
                                        </div>
                                        <div class="product-info">
                                            <h6>{{ product.name }}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryMenu',
    data() {
        return {
            activeCategory: 'fashion',
            categories: [
                {
                    id: 'shower',
                    name: 'Fashion',
                    icon: 'bi bi-bag',
                    products: [
                        { id: 1, name: 'Summer Collection', image: '/path-to-image.jpg', badge: 'New' },
                    ]
                },
                {
                    id: 'kitchen',
                    name: 'Electronics',
                    icon: 'bi bi-laptop',
                    products: [
                        { id: 1, name: 'Laptop / PC', image: 'https://carolieto.com/uploads/products/1725627788_Change%20.jpg', badge: '5' },
                        { id: 2, name: 'Televisions', image: 'https://carolieto.com/uploads/products/1725627788_Change%20.jpg', badge: '8' },
                        { id: 3, name: 'Dryers/styling', image: '/path-to-image.jpg', badge: '12' },
                        { id: 4, name: 'Headphones', image: '/path-to-image.jpg', badge: '7' },
                        { id: 5, name: 'Tablet', image: '/path-to-image.jpg', badge: '4' },
                        { id: 6, name: 'Mobile Covers', image: '/path-to-image.jpg', badge: '15' }
                    ]
                },
                {
                    id: 'diverters & mixers',
                    name: 'Electronics',
                    icon: 'bi bi-laptop',
                    products: [
                        { id: 1, name: 'Laptop / PC', image: '/path-to-image.jpg', badge: '5' },
                        { id: 2, name: 'Televisions', image: '/path-to-image.jpg', badge: '8' },
                        { id: 3, name: 'Dryers/styling', image: '/path-to-image.jpg', badge: '12' },
                        { id: 4, name: 'Headphones', image: '/path-to-image.jpg', badge: '7' },
                        { id: 5, name: 'Tablet', image: '/path-to-image.jpg', badge: '4' },
                        { id: 6, name: 'Mobile Covers', image: '/path-to-image.jpg', badge: '15' }
                    ]
                },
                {
                    id: 'faucets',
                    name: 'Electronics',
                    icon: 'bi bi-laptop',
                    products: [
                        { id: 1, name: 'Laptop / PC', image: '/path-to-image.jpg', badge: '5' },
                        { id: 2, name: 'Televisions', image: '/path-to-image.jpg', badge: '8' },
                        { id: 3, name: 'Dryers/styling', image: '/path-to-image.jpg', badge: '12' },
                        { id: 4, name: 'Headphones', image: '/path-to-image.jpg', badge: '7' },
                        { id: 5, name: 'Tablet', image: '/path-to-image.jpg', badge: '4' },
                        { id: 6, name: 'Mobile Covers', image: '/path-to-image.jpg', badge: '15' }
                    ]
                },
                {
                    id: 'basin',
                    name: 'Electronics',
                    icon: 'bi bi-laptop',
                    products: [
                        { id: 1, name: 'Laptop / PC', image: '/path-to-image.jpg', badge: '5' },
                        { id: 2, name: 'Televisions', image: '/path-to-image.jpg', badge: '8' },
                        { id: 3, name: 'Dryers/styling', image: '/path-to-image.jpg', badge: '12' },
                        { id: 4, name: 'Headphones', image: '/path-to-image.jpg', badge: '7' },
                        { id: 5, name: 'Tablet', image: '/path-to-image.jpg', badge: '4' },
                        { id: 6, name: 'Mobile Covers', image: '/path-to-image.jpg', badge: '15' }
                    ]
                },
                {
                    id: 'water closet',
                    name: 'Electronics',
                    icon: 'bi bi-laptop',
                    products: [
                        { id: 1, name: 'Laptop / PC', image: '/path-to-image.jpg', badge: '5' },
                        { id: 2, name: 'Televisions', image: '/path-to-image.jpg', badge: '8' },
                        { id: 3, name: 'Dryers/styling', image: '/path-to-image.jpg', badge: '12' },
                        { id: 4, name: 'Headphones', image: '/path-to-image.jpg', badge: '7' },
                        { id: 5, name: 'Tablet', image: '/path-to-image.jpg', badge: '4' },
                        { id: 6, name: 'Mobile Covers', image: '/path-to-image.jpg', badge: '15' }
                    ]
                },
                {
                    id: 'wellness',
                    name: 'Electronics',
                    icon: 'bi bi-laptop',
                    products: [
                        { id: 1, name: 'Laptop / PC', image: '/path-to-image.jpg', badge: '5' },
                        { id: 2, name: 'Televisions', image: '/path-to-image.jpg', badge: '8' },
                        { id: 3, name: 'Dryers/styling', image: '/path-to-image.jpg', badge: '12' },
                        { id: 4, name: 'Headphones', image: '/path-to-image.jpg', badge: '7' },
                        { id: 5, name: 'Tablet', image: '/path-to-image.jpg', badge: '4' },
                        { id: 6, name: 'Mobile Covers', image: '/path-to-image.jpg', badge: '15' }
                    ]
                },
                {
                    id: 'bath tub',
                    name: 'Electronics',
                    icon: 'bi bi-laptop',
                    products: [
                        { id: 1, name: 'Laptop / PC', image: '/path-to-image.jpg', badge: '5' },
                        { id: 2, name: 'Televisions', image: '/path-to-image.jpg', badge: '8' },
                        { id: 3, name: 'Dryers/styling', image: '/path-to-image.jpg', badge: '12' },
                        { id: 4, name: 'Headphones', image: '/path-to-image.jpg', badge: '7' },
                        { id: 5, name: 'Tablet', image: '/path-to-image.jpg', badge: '4' },
                        { id: 6, name: 'Mobile Covers', image: '/path-to-image.jpg', badge: '15' }
                    ]
                },
                {
                    id: 'accessories',
                    name: 'Electronics',
                    icon: 'bi bi-laptop',
                    products: [
                        { id: 1, name: 'Laptop / PC', image: '/path-to-image.jpg', badge: '5' },
                        { id: 2, name: 'Televisions', image: '/path-to-image.jpg', badge: '8' },
                        { id: 3, name: 'Dryers/styling', image: '/path-to-image.jpg', badge: '12' },
                        { id: 4, name: 'Headphones', image: '/path-to-image.jpg', badge: '7' },
                        { id: 5, name: 'Tablet', image: '/path-to-image.jpg', badge: '4' },
                        { id: 6, name: 'Mobile Covers', image: '/path-to-image.jpg', badge: '15' }
                    ]
                },
            ]
        }
    },
    methods: {
        setActiveCategory(categoryId) {
            this.activeCategory = categoryId;
        }
    },
    mounted() {
        const scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
            target: '#category-nav',
            offset: 0
        });
        console.log(scrollSpy)
    }
}
</script>

<style scoped>
.category-container {
    height: calc(100vh- 108px);
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
}

.category-sidebar {
    width: 100px;
    height: 100vh;
    background: #fff;
    border-right: 1px solid #eee;
}

.categories-header {
    border-bottom: 1px solid #eee;
}

.nav-link {
    padding: 15px;
    text-align: center;
    color: #666;
    flex-direction: column;
    transition: all 0.3s ease;
}

.nav-link.active {
    color: #ff4d8c;
    background-color: #fff5f8;
}

.category-icon {
    font-size: 1.5rem;
    margin-bottom: 5px;
}

.category-name {
    font-size: 0.75rem;
}

.products-container {
    height: 100vh;
    overflow-y: auto;
    padding: 20px;
}

.product-card {
    background: #f8f9fa;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
}

.product-image {
    position: relative;
    padding-top: 100%;
    background: #fff;
}

.product-image img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.product-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #ff4d8c;
    color: white;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.75rem;
}

.product-info {
    padding: 10px;
}

::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
}

@media (max-width: 576px) {
    .category-container {
        max-width: 100%;
        border-radius: 0;
    }
}
</style>