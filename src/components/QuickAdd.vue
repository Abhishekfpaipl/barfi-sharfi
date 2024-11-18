<template>
    <div v-if="activeProduct" class="modal fade" id="quickAddModal" tabindex="-1" aria-labelledby="quickAddModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="d-flex justify-content-center align-items-center">
                <div class="rounded-circle wh-60 text-bg-dark d-flex justify-content-center align-items-center"
                    data-bs-dismiss="modal" style="padding: 0px 6px !important;">
                    <i class="bi bi-x fs-3"></i>
                </div>
            </div>
            <div class="modal-content position-relative">
                <!-- <div class="d-flex justify-content-center align-items-center position-absolute" style="left: 50%; right: 50%;top: 0%; z-index: 1000;">
                    <p class="rounded-circle wh-60 text-bg-dark px-1 d-flex justify-content-center align-items-center"
                        data-bs-dismiss="modal">
                        <i class="bi bi-x fs-5"></i>
                    </p>
                </div> -->
                <div class="modal-body pb-0">
                    <img :src="activeProduct.image" class="img-fluid mb-3 w-100"
                        style="height: 200px;object-fit: cover;" alt="Product Image" loading="lazy">
                    <div class="d-flex justify-content-between align-items-center position-sticky p-2 top-0 text-white"
                        style="background-color: var(--primary-color)">
                        <p class="text-start fw-bold mb-0">{{ activeProduct.name }}</p>
                        <i class="bi bi-share" @click="share"></i>
                    </div>
                    <p class="text-start small text-muted mb-1"> {{ activeProduct.description }}</p>
                    <p class="text-start mb-1"><strong>Vendor:</strong> {{ activeProduct.vendor }}</p>
                    <div v-if="activeProduct.prices" class="bg-white">
                        <p class="text-start mb-0">Choose your options :</p>
                        <div class="my-2" v-for="(price, index) in activeProduct.prices" :key="index">
                            <input type="radio" name="product-size" class="btn-check" :id="'selectProductSize' + index"
                                autocomplete="off" :value="price.size" v-model="selectedRange">
                            <label class="btn btn-outline-dark btn-sm rounded w-100 d-flex justify-content-between"
                                :for="'selectProductSize' + index">
                                <span>{{ price.size }}</span><span>₹ {{ price.cost }}</span>
                            </label>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between px-2 my-2">
                        <p class="fw-bold mb-0">₹{{ selectedPrice }}</p>
                        <p class="fw-bold mb-0 text-capitalize">{{ activeProduct.type }}</p>
                    </div>
                </div>
                <div class="p-2 d-flex justify-content-between align-items-center gap-2">
                    <div class="w-50 border btn btn-sm d-flex justify-content-center align-items-center px-1 rounded">
                        <span class="fs-3 w-25" @click="decrementQuantity">-</span>
                        <input v-model.number="quantity" type="number" id="quantityInput"
                            class="form-control p-0 text-center border-0 w-50" min="1" placeholder="Enter quantity" />
                        <span class="fs-3 w-25" @click="incrementQuantity">+</span>
                    </div>

                    <!-- WhatsApp Button -->
                    <button class="w-50 btn text-white py-2" @click="sendToWhatsApp"
                        :disabled="!selectedRange || quantity <= 0" style="background-color: var(--primary-color);">
                        <span class="small">
                            Add item - ₹ {{ finalPrice }}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "QuickAdd",
    props: ["product"],
    data() {
        return {
            activeProduct: {},
            selectedRange: null, // Holds the selected size
            selectedPrice: 0, // Holds the price corresponding to selectedRange
            quantity: 1,
        };
    },
    computed: {
        finalPrice() {
            // Calculate the total price based on selected price and quantity
            return this.selectedPrice * this.quantity;
        },
    },
    watch: {
        selectedRange(newSize) {
            // Update the selectedPrice based on the selected size
            const priceObj = this.activeProduct.prices.find(price => price.size === newSize);
            if (priceObj) {
                this.selectedPrice = priceObj.cost; // Assume cost is a number
            }
            // Reset quantity to 1 when size changes
            this.quantity = 1;
        },
    },

    mounted() {
        this.loadactiveProduct();
    },
    methods: {
        loadactiveProduct() {
            const quickAddModal = document.getElementById("quickAddModal");
            if (quickAddModal) {
                quickAddModal.addEventListener("shown.bs.modal", event => {
                    const button = event.relatedTarget;
                    const productsid = button.getAttribute("data-bs-productsid");
                    this.activeProduct = this.product.find(product => product.sid === productsid);
                    if (this.activeProduct && this.activeProduct.prices.length > 0) {
                        // Set default selected range and price
                        this.selectedRange = this.activeProduct.prices[0].size;
                        this.selectedPrice = this.activeProduct.prices[0].cost; // Default to the first price
                    }
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
                `Selected Size: ${this.selectedRange}\n` +
                `Price: ₹${this.selectedPrice}\n` +
                `Quantity: ${this.quantity}\n` +
                `Total Price: ₹${this.finalPrice}\n\n` +
                `Please provide more details.`;
            const whatsappNumber = "919311384385";
            const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, "_blank");
        },
        share() {
            // Check if the Web Share API is supported
            if (navigator.share) {
                const shareData = {
                    title: this.activeProduct.name,
                    text: `Check out this product: ${this.activeProduct.name}`,
                    url: window.location.href, // You can modify this to any specific URL you want to share
                };
                navigator.share(shareData)
                    .then(() => console.log('Product shared successfully'))
                    .catch((error) => console.log('Error sharing product:', error));
            } else {
                // Fallback for browsers that don't support the Web Share API
                alert('Web Share API is not supported in your browser. You can copy the link manually.');
            }
        },
        // share() {
        //     if (navigator.share) {
        //         navigator.share({
        //             title: this.activeProduct.name,
        //             text: `Check out this product: ${this.activeProduct.name}`,
        //             url: window.location.href,
        //         })
        //             .then(() => console.log('Successful share'))
        //             .catch((error) => console.log('Error sharing', error));
        //     } else {
        //         alert('Web Share API is not supported in your browser.');
        //     }
        // },
    },
};
</script>
