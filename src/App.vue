<template>
  <TopNav />
  <transition name="fade">
    <router-view />
  </transition>
  <FooterBar />
  <HomeBottomNav />
</template>
<script>
import HomeBottomNav from '@/components/HomeBottomNav.vue';
import FooterBar from '@/components/FooterBar.vue';
import TopNav from '@/components/TopNav.vue'
export default {
  name: 'E-comApp',
  components: {
    HomeBottomNav,
    TopNav,
    FooterBar,
  },
  computed: {
    hide() {
      const hiddenPages = ['LoginPage', 'RegistrationPage', 'ForgotPasswordPage', 'CartPage', 'NotificationPage', 'OrdersListPage', 'EmailVerificationPage', 'ResetPasswordPage']
      return hiddenPages.includes(this.$route.name)
    },
    hidden() {
      const hiddenPages = ['LoginPage', 'RegistrationPage', 'ForgotPasswordPage', 'ProductPage', 'NotificationPage', 'EmailVerificationPage', 'ResetPasswordPage']
      return hiddenPages.includes(this.$route.name)
    },
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --primary-color: #C1456A;
  // --primary-color: #0D4168;
  --secondary-color: #F5F5F3;
}

.primary-text {
  background: #FFFC92;
  background: linear-gradient(to right, #FFFC92 35%, #CEAA52 50%, #FFFC92 50%, #CEAA52 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#scroll::-webkit-scrollbar {
  display: none;
}

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.accordion {
  --bs-accordion-btn-focus-box-shadow: none !important;
}
.smaller{
  font-size: 12px;
}
.accordion-button:not(.collapsed) {
  color:var(--secondary-color);
  background-color: var(--primary-color);
  box-shadow:none !important;
}

.form-control {
  box-shadow: none !important;
}

.form-check-input:checked {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
</style>
