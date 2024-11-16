// ProductSection.vue
<template>
  <div class="container my-4">
    <h2 class="text-center mb-4">
      <span class="border-bottom border-danger pb-2">Flavoured Nuts & Mukhwas</span>
    </h2>
    
    <div class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-md-4 col-lg-2">
        <div class="card h-100">
          <!-- Sale Badge -->
          <div class="position-absolute" v-if="product.discount">
            <span class="badge bg-danger">
              Save {{ product.discount }}%
            </span>
          </div>
          
          <!-- Product Image -->
          <img :src="product.image" class="card-img-top" :alt="product.name">
          
          <div class="card-body d-flex flex-column">
            <!-- Brand -->
            <small class="text-muted">{{ product.brand }}</small>
            
            <!-- Product Name -->
            <h5 class="card-title">{{ product.name }}</h5>
            
            <!-- Price Section -->
            <div class="mt-auto">
              <div class="d-flex align-items-center gap-2">
                <span class="h5 mb-0">Rs. {{ product.price }}</span>
                <small class="text-decoration-line-through text-muted" v-if="product.originalPrice">
                  Rs. {{ product.originalPrice }}
                </small>
              </div>
              
              <!-- Rating -->
              <div v-if="product.rating" class="my-2">
                <span class="text-warning" v-for="n in 5" :key="n">
                  ★
                </span>
                <small class="ms-1 text-muted">{{ product.reviews }} review</small>
              </div>
              
              <!-- Add to Cart Button -->
              <button class="btn btn-danger w-100 mt-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- View All Button -->
    <div class="text-center mt-4">
      <button class="btn btn-danger">View all</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSection',
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Roasted Falahari Salted Cashew',
          brand: 'SweeDesi',
          price: '299.00',
          originalPrice: '350.00',
          discount: '15',
          image: '/path-to-cashew-image.jpg'
        },
        {
          id: 2,
          name: 'Roasted Falahari Salted Almond',
          brand: 'SweeDesi',
          price: '275.00',
          originalPrice: '350.00',
          discount: '21',
          image: '/path-to-almond-image.jpg'
        },
        {
          id: 3,
          name: 'Satrangi Mix',
          brand: 'SweeDesi',
          price: '189.00',
          image: '/path-to-satrangi-mix-image.jpg'
        },
        {
          id: 4,
          name: 'Thanda Meetha Pan',
          brand: 'SweeDesi',
          price: '199.00',
          rating: 5,
          reviews: 1,
          image: '/path-to-pan-image.jpg'
        },
        {
          id: 5,
          name: 'Chulbuli Imli',
          brand: 'SweeDesi',
          price: '130.00',
          originalPrice: '150.00',
          discount: '13',
          image: '/path-to-imli-image.jpg'
        },
        {
          id: 6,
          name: 'Anardana Goli',
          brand: 'SweeDesi',
          price: '199.00',
          image: '/path-to-anardana-image.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.card {
  border: none;
  transition: transform 0.2s;
}

.card:hover {
  transform: translateY(-5px);
}

.badge {
  border-radius: 0;
}
</style>