<template>
  <div class="container">
    <h2 class="text-center mb-5">
      <span class="border-bottom border-danger pb-2">Flavoured Nuts & Mukhwas</span>
    </h2>

    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-4">
      <div v-for="(product, index) in products" :key="index" class="col">
        <div class="card shadow-sm h-100"> 
          <div class="position-absolute" v-if="product.discount">
            <span class="badge bg-danger">
              Save {{ product.discount }}%
            </span>
          </div>
          <img :src="product.image" class="card-img-top" style="height: 150px; object-fit: cover;" :alt="product.name">

          <div class="card-body text-start">
            <small class="text-muted">{{ product.brand }}</small>
            <p class="small mb-2 text-ellipsis2" style="min-height: 46px;">{{ product.name }}</p>
            <div class="mt-auto">
              <div v-if="product.rating" class="my-2">
                <span class="text-warning" v-for="n in 5" :key="n">
                  ★
                </span>
                <small class="ms-1 text-muted">{{ product.reviews }} review</small>
              </div>
              <div class="d-flex align-items-center gap-2">
                <span class="mb-0">Rs. {{ product.price }}</span>
                <small class="text-decoration-line-through text-muted" v-if="product.originalPrice">
                  Rs. {{ product.originalPrice }}
                </small>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <button class="btn w-100 mt-2 text-white" style="background-color: var(--primary-color);">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- View All Button -->
    <div class="text-center mt-4">
      <button class="btn text-white" style="background-color: var(--primary-color);">View all</button>
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
          name: "ANJEER BARFI & KHAJOOR PAAK",
          brand: 'SweeDesi',
          price: '299.00',
          originalPrice: '350.00',
          discount: '15',
          rating: 5,
          reviews: 1,
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbtZPTJkTqmJMrK1T_WO5K3U8jTkcPgkong&s",
        },
        {
          id: 2,
          name: 'DHODHA BITES',
          brand: 'SweeDesi',
          price: '275.00',
          originalPrice: '350.00',
          discount: '21',
          rating: 5,
          reviews: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WnzWDgw9u6fHXfsjLzDFBQeNC7kVrO-ZMw&s',
        },
        {
          id: 3,
          name: 'Dry Fruit Panjiri',
          brand: 'SweeDesi',
          price: '189.00',
          rating: 5,
          reviews: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKGeVLZQwGUqItjqcPyRvBxxQABEA1lQGOA&s',
        },
        {
          id: 4,
          name: 'Moti Choor Ladoo',
          brand: 'SweeDesi',
          price: '199.00',
          rating: 5,
          reviews: 1,
          image: 'https://www.anandsweets.in/cdn/shop/products/MotichurLaddu_1.png?v=1713442530&width=1946',
        },
        {
          id: 5,
          name: 'Moong Dal Pinni',
          brand: 'SweeDesi',
          price: '130.00',
          originalPrice: '150.00',
          discount: '13',
          rating: 5,
          reviews: 1,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqV_dL6eVjlF0l92C9rkEz29N9H_K2Ssto3dXCmP8Sp9j4a0MIQqovKCJFNeTAjrxAzFI&usqp=CAU',
        },
        {
          id: 6,
          name: 'MALPURA',
          brand: 'SweeDesi',
          price: '199.00',
          rating: 5,
          reviews: 1,
          image: 'https://storage.googleapis.com/goa-app-12a91.appspot.com/2024-06-27T15%3A58%3A51.749Zsuji-malpura.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=NcZHtKkB3pDcx%2F1Yx%2FPvOX4lML910o4x5NSMohwr1FLr0c46DnpGtQVKXIV449WOJLXMcxTOsx5kV1ru1nHbX3E%2BJdV7DxOXizYLtbSTkJF0TkucBVvyNZL0olDYqkMmvKniOhpBMEwuSi3TeqFL9qTstErkuz4N1cpaqDclIE5xwDX230BioUAMgSBR%2BJb31euJD9bxxuu86ZlC4267hKbM2hCD9spqSKxX4%2B8utka19Aw17bKx844wTYpgjBul5HJ8hrw6%2F%2Fk31%2Fu2QBhM8Ujj8lkcOpxuZY55z%2BkAzazb3fS3Pk4U8UU4imC22eatJa69a4nwWOclDhv85rD08w%3D%3D',
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