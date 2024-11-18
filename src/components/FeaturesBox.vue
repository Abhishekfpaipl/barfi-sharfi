<template>
    <div class="container my-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center align-items-center g-4">
            <div v-for="feature in features" :key="feature.id" class="col">
                <div class="card h-100 text-center border py-4">
                    <div class="card-body d-flex flex-column align-items-center">
                        <div class="feature-icon mb-3">
                            <img :src="feature.icon" :alt="feature.title" class="img-fluid" style="height: 60px;">
                        </div>
                        <h5 class="card-title text-maroon mb-3">{{ feature.title }}</h5>
                        <p class="card-text text-muted">{{ feature.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FeatureBoxes',
    data() {
        return {
            features: [
                // {
                //     id: 1,
                //     title: 'Shark Tank India Brand',
                //     description: 'Season 1 Finalist and Cherished by all Sharks.',
                //     icon: '/path-to-shark-tank-icon.png'
                // },
                {
                    id: 2,
                    title: 'MAP Packaging',
                    description: 'For Longer Shelf Life and Freshness of Product!',
                    icon: 'https://www.sweedesi.com/cdn/shop/files/envio-Photoroom-removebg-preview_480x.png?v=1707310175'
                },
                {
                    id: 3,
                    title: 'Premium Couriers',
                    description: 'Fast Delivery & Better Handling of the Consignment!',
                    icon: 'https://www.sweedesi.com/cdn/shop/files/images__1_-Photoroom-Photoroom-removebg-preview_480x.png?v=1707310175'
                },
                {
                    id: 4,
                    title: '50+ Partners',
                    description: 'No Matter Where You Are...Get Quick Delivery at Your Doorstep!',
                    icon: 'https://www.sweedesi.com/cdn/shop/files/images-Photoroom-Photoroom-removebg-preview_480x.png?v=1707310175'
                }
            ]
        }
    }
}
</script>

<style scoped>
.text-maroon {
    color: #8B0000;
}

.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    transition: transform 0.3s;
}

.card:hover .feature-icon {
    transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .card {
        padding: 1rem !important;
    }

    .feature-icon img {
        height: 45px !important;
    }
}
</style>