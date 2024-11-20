<template>
    <div class="container">
        <!-- Cart Header -->
        <h2 class="mb-3 text-start mt-5">My cart</h2>
        <div v-if="freeShippingRemaining > 0" class="alert alert-info text-start">
            Spend Rs. {{ freeShippingRemaining }} more and get free shipping!
        </div>

        <div class="row">
            <!-- Cart Items -->
            <div class="col-md-8">
                <div class="mb-3" v-for="item in cartItems" :key="item.id">
                    <div class="card border-0 mb-3">
                        <div class="row g-0">
                            <!-- Product Image -->
                            <div class="col-3">
                                <img :src="item.image" class="img-fluid rounded" :alt="item.name"
                                    style="width: 90px; height: 90px;">
                            </div>

                            <!-- Product Details -->
                            <div class="col-9">
                                <div class="d-md-flex justify-content-between py-0 ps-3 text-start">
                                    <div class="">
                                        <p class="small text-muted mb-1">{{ item.brand }}</p>
                                        <h6 class="card-title mb-1 small">{{ item.name }}</h6>
                                        <div class="d-flex align-items-center mb-2">
                                            <span class="text-danger fw-bold">Rs. {{ item.price }}</span>
                                            <span v-if="item.originalPrice"
                                                class="text-decoration-line-through text-muted ms-2 small">
                                                Rs. {{ item.originalPrice }}
                                            </span>
                                        </div>
                                    </div>

                                    <!-- Quantity Controls -->
                                    <div class="p-2 d-flex justify-content-between align-items-center gap-2">
                                        <div
                                            class="w-50 border btn btn-sm d-flex justify-content-center align-items-center px-1 rounded">
                                            <span class="fs-3 w-25" @click="decrementQuantity(item)">-</span>
                                            <input v-model="item.quantity" readonly type="number" id="quantityInput"
                                                class="form-control  p-0 text-center border-0 w-50" min="1"
                                                placeholder="Enter quantity" />
                                            <span class="fs-3 w-25" @click="incrementQuantity(item)">+</span>
                                        </div>
                                        <button class="btn btn-link btn-sm text-danger ms-3 px-0 w-50"
                                            @click="removeItem(item)">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="my-2">
                </div>
            </div>


            <!-- Order Summary -->
            <div class="col-md-4">
                <div class="">
                    <div class="card-body">
                        <h4>Order Summary</h4>
                        <div class="d-flex justify-content-between mb-2">
                            <span>Total</span>
                            <span class="fw-bold">Rs. {{ cartTotal }}</span>
                        </div>
                        <div v-if="savings > 0"
                            class="d-flex justify-content-between mb-3 text-success border-bottom border-2 pb-2">
                            <span>You saved</span>
                            <span>Rs. {{ savings }}!</span>
                        </div>

                        <div class="mb-3 text-start">
                            <label class="form-label">Please Write Any Greeting Message or Order Instructions
                                Here!</label>
                            <textarea class="form-control" rows="3" v-model="orderInstructions"></textarea>
                        </div>

                        <!-- Delivery Information -->
                        <div class="alert alert-info text-start">
                            <h6 class="mb-3">🎁 Thank You! Delivery time after "Dispatch"</h6>
                            <ul class="list-unstyled mb-0 small">
                                <li>- For Delhi NCR - Delivery within 24Hrs.</li>
                                <li>- For All Other Metro Cities - Delivery within 48hrs.</li>
                                <li>- For Rest of India - Delivery in 2-5 business days.</li>
                                <li>- For International - Delivery in 4-7 business days.</li>
                            </ul>
                        </div>

                        <div class="alert alert-warning text-start">
                            <strong>Note:</strong>
                            <ul class="mb-0 small">
                                <li>All orders placed before 4 PM are dispatched the same day.</li>
                                <li>NO deliveries & Dispatch on Sundays & National holidays.</li>
                            </ul>
                        </div>

                        <div class="form-check mb-3 text-start">
                            <input class="form-check-input" type="checkbox" v-model="isInternational">
                            <label class="form-check-label">
                                For International Shipping / Orders placed from outside India
                            </label>
                        </div>

                        <button class="btn btn-danger w-100" @click="checkout">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-5">
            <SimilarProducts />
        </div>

    </div>
</template>

<script>
import SimilarProducts from '@/components/SimilarProducts.vue'
export default {
    name: 'CartPage',
    components: {
        SimilarProducts,
    },
    data() {
        return {
            cartItems: [
                {
                    id: 1,
                    brand: 'Barfi Sharfi',
                    name: 'BESAN BARFI',
                    sid: "besan-barfi",
                    price: 449.00,
                    originalPrice: 499.00,
                    quantity: 1,
                    description: "Mouthmelting Besan Barfi garnished with Crunchy Nuts & Dryfruits made in Pure Desi Ghee",
                    image: 'https://ministryofcurry.com/wp-content/uploads/2021/10/Besan-Ki-Barfi.jpg',
                }
            ],
            recommendations: [
                {
                    id: 2,
                    brand: 'SweetDesi',
                    name: 'Tiny Malai Ghewar - DIY',
                    price: 700.00,
                    rating: 5,
                    reviews: 4,
                    image: '/path-to-image.jpg'
                },
                {
                    id: 3,
                    brand: 'SweetDesi',
                    name: 'Meetha Ghewar - 1Pc',
                    price: 370.00,
                    rating: 4,
                    reviews: 18,
                    image: '/path-to-image.jpg'
                },
                {
                    id: 4,
                    brand: 'SweetDesi',
                    name: 'Malai Ghewar - DIY',
                    price: 600.00,
                    originalPrice: 700.00,
                    rating: 4,
                    reviews: 24,
                    image: '/path-to-image.jpg'
                },
                {
                    id: 5,
                    brand: 'Agarwal Caterers',
                    name: 'Doodh Mithi Fini - 500gm',
                    price: 600.00,
                    rating: 5,
                    reviews: 15,
                    image: '/path-to-image.jpg'
                }
            ],
            orderInstructions: '',
            isInternational: false,
            freeShippingThreshold: 1499.00
        }
    },
    computed: {
        cartTotal() {
            return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
        },
        savings() {
            return this.cartItems.reduce((total, item) => {
                return total + ((item.originalPrice - item.price) * item.quantity)
            }, 0)
        },
        freeShippingRemaining() {
            return Math.max(0, this.freeShippingThreshold - this.cartTotal)
        }
    },
    methods: {
        calculateItemTotal(item) {
            return (item.price * item.quantity).toFixed(2)
        },
        incrementQuantity(item) {
            item.quantity++
        },
        decrementQuantity(item) {
            if (item.quantity > 1) {
                item.quantity--
            }
        },
        removeItem(item) {
            const index = this.cartItems.indexOf(item)
            if (index > -1) {
                this.cartItems.splice(index, 1)
            }
        },
        addToCart(product) {
            const existingItem = this.cartItems.find(item => item.id === product.id)
            if (existingItem) {
                existingItem.quantity++
            } else {
                this.cartItems.push({
                    ...product,
                    quantity: 1
                })
            }
        },
        checkout() {
            // Implement checkout logic here
            console.log('Proceeding to checkout with items:', this.cartItems)
            console.log('Order instructions:', this.orderInstructions)
            console.log('International shipping:', this.isInternational)
        }
    }
}
</script>

<style scoped>
.bi {
    font-size: 0.8rem;
}
</style>