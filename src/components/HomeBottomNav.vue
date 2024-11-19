<template>
    <nav class="navbar navbar-expand-lg p-0 border-top position-fixed bottom-0 w-100"
        style="z-index: 11;background-color: var(--secondary-color);">
        <div class="container-fluid">

            <div class="navbar-nav d-flex flex-row w-100 justify-content-around">
                <div class="nav-item" v-for="(link, linkIndex) in links" :key="linkIndex">
                    <router-link :to="link.path" class="nav-link text-secondary"
                        :class="{ 'active': isLinkActive(link) }" @click="handleLinkClick(link)">
                        <div class="d-flex flex-column align-items-center fw-bold">
                            <i class="bi" :class="link.icon"></i>
                            <div style="font-size: 0.75rem;">{{ link.name }}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </nav>

    <!-- Offcanvas -->
    <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body small">
            <div class="d-flex flex-column">
                <a :href="'#menu' + index" class="nav-item text-decoration-none text-start"
                    style="color: var(--primary-color);" v-for="(link, index) in collections" :key="index">
                    <span data-bs-dismiss="offcanvas">
                        {{ link }}
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeBottomNav',
    data() {
        return {
            collections: [
                "Sweets",
                "Savouries"
            ],
            links: [
                {
                    path: '/',
                    icon: 'bi-list',
                    name: 'Menu',
                    triggerOffcanvas: true // Only trigger offcanvas for "Menu"
                },
                {
                    path: '/search',
                    icon: 'bi-search',
                    name: 'Search'
                },
                {
                    path: '/',
                    icon: 'bi-shop-window',
                    name: 'Shop'
                },
                {
                    path: '/about-us',
                    icon: 'bi-globe-central-south-asia',
                    name: 'About'
                },
                {
                    path: '/',
                    icon: 'bi-cart',
                    name: 'Cart'
                },
            ]
        }
    },
    methods: {
        isLinkActive(link) {
            return this.$route.matched.some((route) => {
                return route.path === link.path || (route.path !== '/' && link.path.startsWith(route.path));
            });
        },
        handleLinkClick(link) {
            // Check if the link is the "Menu" and if the user is on the home page
            if (link.triggerOffcanvas && this.$route.path === '/') {
                const offcanvasElement = document.getElementById('offcanvasBottom');
                const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
                offcanvas.show(); // Manually trigger offcanvas open only on the home page
            }
        }
    },
}
</script>

<style>
.router-link-active.router-link-exact-active.nav-link,
.active {
    color: var(--primary-color) !important;
}
</style>
