import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/pages/AboutUs.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue")
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("@/pages/PrivacyPolicy.vue")
  },
  {
    path: "/product-detail/:productId",
    name: "ProductDetailPage",
    component: () => import("@/pages/ProductDetailPage.vue")
  },
  {
    path: "/category-list/:productId",
    name: "CategoryListPage",
    component: () => import("@/pages/CategoryListPage.vue")
  },
  {
    path: "/category",
    name: "CategoryPage",
    component: () => import("@/pages/CategoryPage.vue")
  },
  {
    path: "/search",
    name: "SearchPage",
    component: () => import("@/pages/SearchPage.vue")
  },
  {
    path: "/product-list/:categoryId/:subcategoryId",
    name: "ProductListPage",
    component: () => import("@/pages/ProductListPage.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
