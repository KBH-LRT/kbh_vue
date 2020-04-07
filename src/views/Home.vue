<template>
  <div class="home">
    <!-- <TopPage :msg="'welcome to vueJs world!'"/> -->
    <LoginPage />
  </div>
</template>

<script>
// @ is an alias to /src
// import TopPage from '@/components/top-page.vue'
import LoginPage from "@/components/login-page.vue";

export default {
  name: "Home",
  components: {
    LoginPage
  }
};
</script>
