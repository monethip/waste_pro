<template>
  <v-app dark>
    <!-- <NavBar /> -->
    <Admin v-if="$route.meta.layout == 'admin'" />
    <None v-if="$route.meta.layout == 'none'" />
    <Home v-if="$route.meta.layout == 'home'" />
  </v-app>
</template>

<script>
// import NavBar from "@/components/layout/Navbar.vue";
import Admin from '@/components/layout/Admin.vue';
import None from '@/components/layout/None.vue';
import Home from '@/components/layout/Home/home.vue';

export default {
  components: { Admin, None, Home },

  data: () => ({
    //
  }),
};
</script>
<style>
@import "../public/css/style.css";
@import "../public/css/font.css";
@import "../public/scss/main.scss";
/*\@import "../public/css/bulma.css";*/
</style>
