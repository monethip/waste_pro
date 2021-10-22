<template>
  <v-app dark>
    <!-- <NavBar /> -->
    <Sidebar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import NavBar from "@/components/layout/Navbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";

export default {
  components: { Sidebar },

  data: () => ({
    //
  }),
};
</script>

