<template>
  <div>
    <Sidebar />
    <v-main>
      <router-view />
      <Snackbar />
      <CheckToken />
      <Loading />
    </v-main>
  </div>
</template>
<script>
import Snackbar from "@/components/toast/Snackbar.vue";
import CheckToken from "@/components/toast/CheckToken.vue";
import Loading from "@/plugins/loading.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
export default {
  components: {
    Sidebar,
    Snackbar,
    Loading,
    CheckToken
  },
};
</script>
<style lang="scss">
</style>