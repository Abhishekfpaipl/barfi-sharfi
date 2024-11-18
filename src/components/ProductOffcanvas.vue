<template>
    <div>
        <div v-if="activeProduct" class="offcanvas offcanvas-end" tabindex="-1" id="addProduct"
            aria-labelledby="addProductLabel">
            <div class="offcanvas-header border-bottom">
                <h5 class="offcanvas-title" id="addProductLabel">
                    {{ activeProduct.name || "Product Details" }}
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <!-- Product Details -->
                <div v-if="activeProduct.id">
                    <img :src="activeProduct.image" class="img-fluid mb-3" style="height: 150px;" alt="Product Image">
                    <p class="text-start mb-1"> {{ activeProduct.description }}</p>

                    <p class="text-start mb-1"><strong>Vendor:</strong> {{ activeProduct.vendor }}</p>

                    <div v-if="activeProduct.prices" class="bg-white">
                        <p class="text-start">Choose Size:</p>
                        <div class="d-flex flex-wrap gap-2">
                            <div class="me-2" v-for="(price, index) in activeProduct.prices" :key="index">
                                <input type="radio" name="product-size" class="btn-check"
                                    :id="'selectProductSize' + index" autocomplete="off" :value="price.size"
                                    v-model="selectedSize">
                                <label class="btn btn-outline-dark rounded" :for="'selectProductSize' + index">
                                    {{ price.size }}
                                </label>
                            </div>
                        </div>
                    </div>

                    <!-- Quantity Input -->
                    <label for="quantityInput" class="form-label mt-3">Quantity:</label>
                    <div class="input-group">
                        <button class="btn btn-outline-secondary" @click="decrementQuantity">-</button>
                        <input v-model.number="quantity" type="number" id="quantityInput"
                            class="form-control text-center" min="1" placeholder="Enter quantity" />
                        <button class="btn btn-outline-secondary" @click="incrementQuantity">+</button>
                    </div>

                    <!-- WhatsApp Button -->
                    <button class="btn btn-success mt-2 w-100" @click="sendToWhatsApp"
                        :disabled="!selectedSize || quantity <= 0">
                        Send Query on WhatsApp
                    </button>
                </div>

                <!-- No Product Selected -->
                <div v-else>
                    <p class="text-muted">No product selected.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductOffcanvas",
    props:{
        product: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            activeProduct: {}, // The product being displayed
            selectedSize: null, // The selected size
            quantity: 1, // Default quantity
        };
    },
    mounted() {
        this.loadActiveProduct();
    },
    methods: {
        loadActiveProduct() {
            const addProduct = document.getElementById("addProduct");
            if (addProduct) {
                addProduct.addEventListener("show.bs.offcanvas", (event) => {
                    const button = event.relatedTarget;
                    const productsid = button.getAttribute("data-bs-productsid");
                    this.activeProduct = this.product.find(
                        (product) => product.sid === productsid
                    );
                    this.selectedSize = null; // Reset the selected size
                    this.quantity = 1; // Reset quantity
                });
            }
        },
        incrementQuantity() {
            this.quantity += 1;
        },
        decrementQuantity() {
            if (this.quantity > 1) {
                this.quantity -= 1;
            }
        },
        sendToWhatsApp() {
            const message = `Hello, I am interested in the following product:\n\n` +
                `Product Name: ${this.activeProduct.name}\n` +
                `Selected Size: ${this.selectedSize}\n` +
                `Quantity: ${this.quantity}\n\n` +
                `Please provide more details.`;
            const whatsappNumber = "8826658501";
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                message
            )}`;
            window.open(whatsappLink, "_blank");
        },
    },
};
</script>

<style scoped></style>
