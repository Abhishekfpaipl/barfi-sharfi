<template>
    <div class="container bg-light mt-3" style="padding-top: 60px;">
        <div class="row">
            <div class="col-md-4 d-flex flex-column prod-img">
                <div class="ms-2 main-img">
                    <img :src="selectedImage" class="flex-fill" style="width: 100%;" />
                </div>
                <div class="d-flex justify-content-center mt-2" id="scroll">
                    <img :src="image" style="width: 60px" v-for="(image, index) in product.images" :key="index"
                        v-on:click="selectImage(image)" />
                </div>
            </div>
            <div class="col-md-8 prod-details">
                <div class="d-flex justify-content-between align-items-start bg-white p-2 mb-2">
                    <div class="text-capitalize">
                        <p class="mb-0 fw-bold fs-4 text-start">{{ product.name }}</p>
                        <div class="d-flex">
                            <p class="text-start mb-1 small text-muted">{{ product.vendor }}</p>
                            <p class="text-start mb-1 small text-muted ms-2">({{ product.type }})</p>
                        </div>
                    </div>
                    <div class="d-flex gap-2 fs-5">
                        <div class="d-flex gap-2 fs-5">
                            <i class="bi bi-share"></i>
                        </div>
                    </div>
                </div>
                <div class="bg-white p-2 ">
                    <div class="bg-light rounded">
                        <p class="text-start mb-0">Choose your options :</p>
                        <div class="my-2" v-for="(price, index) in product.prices" :key="index">
                            <input type="radio" name="product-size" class="btn-check" :id="'selectProductSize' + index"
                                autocomplete="off" :value="price.size" v-model="selectedRange">
                            <label class="btn btn-outline-dark btn-sm rounded w-100 d-flex justify-content-between"
                                :for="'selectProductSize' + index">
                                <span>{{ price.size }}</span><span>₹ {{ price.cost }}</span>
                            </label>
                        </div>
                    </div>
                    <a href="#reviews" class="d-flex align-items-center text-dark text-decoration-none my-3">
                        <p class="mb-0 me-2 ">Reviews ({{ product.reviews }})</p>
                        <i v-for="n in 5" :key="n" class="bi bi-star-fill"> </i>
                    </a>
                </div>
                <p v-if="product.info" class="text-start mb-0 px-2">{{ product.info }}</p>
                <p v-else class="px-2 mb-0 text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis animi eum repudiandae non molestias adipisci cupiditate numquam. Impedit
                    reprehenderit recusandae laborum fugit! Natus debitis accusamus obcaecati nobis quis,
                    reiciendis nihil facilis fugit quo eius non in ut quasi cum aspernatur dignissimos quisquam
                    quibusdam doloremque eaque perferendis porro. Repudiandae commodi alias quis, adipisci eum
                    obcaecati cupiditate laborum magnam corrupti non harum amet error, tenetur maxime reiciendis
                    placeat optio veritatis temporibus, exercitationem qui eaque laudantium beatae! Est enim ut
                    ipsum corporis aut culpa reiciendis similique saepe in iusto vel porro quisquam ipsa ab qui
                    dolorum nostrum doloribus animi tempora quibusdam, velit molestias.</p>

                <div v-if="product.color" class="bg-white p-2 my-2">
                    <p class="fw-bold text-start">Color</p>
                    <div class="d-flex flex-wrap gap-2">
                        <div class="me-2" v-for="(color, index) in product.color" :key="index">
                            <input type="radio" name="product-color" class="btn-check"
                                :id="'selectProductColor' + index" autocomplete="off" :value="color"
                                v-model="selectedColor">
                            <label class="btn btn-outline-dark border-light rounded-circle p-0"
                                :for="'selectProductColor' + index">
                                <img class="rounded-circle" :src="color.image"
                                    style="width:40px;height:40px; object-fit: cover; margin: 0.05rem;" />
                            </label>
                            <p class="text-center mb-0">{{ color.name }}</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-2 my-2 d-flex align-items-center gap-2">
                    <label class="fw-bold">Quantity:</label>
                    <input type="number" v-model.number="quantity" min="1" class="form-control w-25" />
                </div>

                <div class="bg-white my-2 p-2 d-md-block d-none">
                    <button @click="enquiry()"
                        class="btn w-100 d-flex justify-content-center align-items-center text-center"
                        style="background-color: #FEBF00;">
                        <i class="bi bi-whatsapp fs-5"></i>
                        <p class="text-center m-0 ms-2">Enquiry</p>
                    </button>
                </div>
                <ProductDetails :product="product"></ProductDetails>
            </div>
        </div>
        <div v-if="showPopupCart" class="popup d-flex justify-content-center align-items-center">
            <div class="text-center">
                Item added to cart!
            </div>
        </div>
    </div>

    <div class="d-md-none">
        <div class="w-100 d-flex align-items-center position-fixed p-2"
            style="z-index: 10; bottom: 0; background: #f6f6f6;">
            <button @click="enquiry()"
                class="btn w-100 rounded-0 d-flex justify-content-center align-items-center text-center"
                style="background-color: #FEBF00;">
                <i class="bi bi-whatsapp fs-5"></i>
                <p class="text-center m-0 ms-2">Enquiry</p>
            </button>
        </div>
    </div>
    <div class="my-5">
        <SimilarProducts />
    </div>
    <ProductReview :product="product" />
</template>

<script>
import ProductDetails from '@/components/ProductDetails.vue';
import ProductReview from '@/components/ProductReview.vue';
import SimilarProducts from '@/components/SimilarProducts.vue'

export default {
    components: {
        ProductDetails,
        ProductReview,
        SimilarProducts,
    },
    data() {
        return {
            selectedImage: {},
            selectedColor: null,
            quantity: 1,
            showPopupCart: false,
            selectedRange: null,
        };
    },
    mounted() {
        this.selectedImage = this.product.images[0];
    },
    computed: {
        product() {
            let productId = this.$route.params.productId;
            return this.$store.getters.getProduct(productId);
        },
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        },
        enquiry() {
            // Construct the message for WhatsApp
            const message = `Hello, I am interested in this product:
                Product Name: ${this.product.name}
                Category: ${this.product.category}
                Price: ₹${this.product.price}
                Color: ${this.selectedColor ? this.selectedColor.name : 'N/A'}
                Quantity: ${this.quantity}`;

            // WhatsApp URL with specific number
            const whatsappURL = `https://wa.me/918826658501?text=${encodeURIComponent(message)}`;

            // Open WhatsApp
            window.open(whatsappURL, '_blank');
        }
    },
};
</script>

<style scoped>
@media (min-width: 1000px) {
    .main-img img {
        position: sticky;
        top: 70px;
    }

    .prod-img {
        position: sticky;
        top: 70px;
        /* Adjust the top offset as needed */
        align-self: flex-start;
    }
}


#scroll::-webkit-scrollbar {
    background-color: none;
    display: none;
}

.count {
    position: absolute;
    top: -4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #eb3e25;
    right: -8px;
    color: #fff;
    font-size: 11px;
    text-align: center;
    line-height: 12px;
}
</style>