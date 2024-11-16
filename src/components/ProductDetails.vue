<template>
    <div class="accordion" id="accordionExample">
        <div class="accordion-item mb-5">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Product Details
                </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <div class="d-flex justify-content-between" v-for="(att, index) in product.attributes" :key="index">
                        <h6 class="fw-bold">{{ att.name }}:</h6>
                        <p style="color:grey">{{ att.value }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product']
}
</script>

<style lang="scss" scoped></style>