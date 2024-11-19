<template>
    <div class="w-100" style="z-index: 11; background-color: var(--secondary-color);">
        <div class="d-flex justify-content-between align-items-center p-2">
            <i data-bs-toggle="offcanvas" data-bs-target="#topSideMenu" aria-controls="topSideMenu"
                class="bi bi-list fs-4 mx-2" style="color: var(--primary-color);"></i>
            <router-link to="/" class="d-none d-lg-flex align-items-center text-decoration-none">
                <img src="/img/logo.jpeg" alt="Brand Logo" style="height: 44px; object-fit: contain;">
            </router-link>
            <router-link to="/" class="d-flex d-lg-none align-items-center text-decoration-none">
                <img src="/img/logo.jpeg" alt="Brand Logo" style="height: 42px; object-fit: contain;">
            </router-link>
            <div class="d-flex gap-2 align-items-center ">
                <!-- <div class="form-check form-switch mb-0">
                    <label class="form-check-label" for="currencySwitch" style="color: var(--primary-color); min-width: 34px;">
                        {{ currency }}
                    </label>
                    <input class="form-check-input" type="checkbox" role="switch" id="currencySwitch"
                    @change="toggleCurrency" :checked="currency === 'USD'" />
                </div> -->
                <i class="bi bi-cart fs-4" style="color: var(--primary-color);"></i>
                <div class="d-md-block d-none">
                    <router-link to="/search">
                        <i class="bi bi-search fs-4 mx-2" style="color: var(--primary-color);"></i>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- <div class="d-flex">
            <div class="text-center position-relative">
                <router-link to="/search">
                    <i class="bi bi-search fs-4 mx-2" style="color: var(--primary-color);"></i>
                </router-link>
            </div>
        </div> -->

        <!-- SideMenu Offcanvas -->
        <div class="offcanvas offcanvas-start" tabindex="-1" id="topSideMenu" aria-labelledby="topSideMenuLabel">
            <div class="offcanvas-header border-bottom d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img src="/img/logo.png" alt="Brand Logo" style="width: 100px;object-fit: contain;">
                </div>
                <button type="button" class="fs-4 btn bi bi-x-lg " style="color: var(--primary-color); "
                    data-bs-dismiss="offcanvas" aria-label="Close">

                </button>
            </div>
            <div style="color: var(--primary-color) !important;" class="offcanvas-body position-relative w-100">
                <div v-for="(page, index) in pages" :key="index" class=" border-bottom py-3"
                    data-bs-dismiss="offcanvas">
                    <router-link :to="page.router" class=" d-flex text-start text-decoration-none"
                        style="color: var(--primary-color) !important;">
                        <i :class="page.icon"></i>
                        <p class="m-0 ms-2">{{ page.name }}</p>
                    </router-link>
                </div>
            </div>
            <div class="position-absolute bottom-0 w-100 py-3" style="color: var(--primary-color);">
                <p class="text-center my-3 fs-4 ">Reach Us</p>
                <div class="d-flex justify-content-evenly fs-2 w-100">
                    <a href="https://www.instagram.com/" class="text-decoration-none"
                        style="color: var(--primary-color)">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" class="text-decoration-none"
                        style="color: var(--primary-color)">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="https://in.linkedin.com/" class="text-decoration-none" style="color: var(--primary-color)">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="https://www.youtube.com/" class="text-decoration-none" style="color: var(--primary-color)">
                        <i class="bi bi-youtube"></i>
                    </a>
                </div>

                <div class="text-bg-dark py-2 d-flex flex-column justify-content-between px-md-4 mt-3">
                    <p class="mb-0">All rights reserved</p>
                    <a href="https://www.covisor.in" class="text-white text-decoration-none">Copyright &copy; Covisor
                        Infotech Pvt
                        Ltd</a>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'TopNav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/mac2.png",
            pages: [
                {
                    name: 'About Us',
                    icon: 'bi bi-arrow-right ',
                    router: '/about-us'
                },
                {
                    name: 'Privacy Policy',
                    icon: 'bi bi-arrow-right ',
                    router: '/privacy-policy'
                },
                {
                    name: 'Support',
                    icon: 'bi bi-arrow-right ',
                    router: '/contact-us'
                },
                {
                    name: 'Category',
                    icon: 'bi bi-arrow-right ',
                    router: '/category'
                },
                // {
                //     name: 'Career',
                //     icon: 'bi bi-arrow-right ',
                //     router: '/career'
                // },
            ],

        }
    },
    computed: {
        currency() {
            return this.$store.state.currency;
        }
    },
    methods: {
        ...mapActions(['switchCurrency']),
        toggleCurrency() {
            const newCurrency = this.currency === 'INR' ? 'USD' : 'INR';
            this.switchCurrency(newCurrency);
        }
    },
}
</script>

<style scoped>
.count {
    position: absolute;
    top: -4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #eb3e25;
    right: 0px;
    color: #fff;
    font-size: 10px;
    text-align: center;
    line-height: 14px;
}

.pulse-animation {
    animation: pulse 1s infinite alternate;
}

@keyframes pulse {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.1);
    }
}
</style>