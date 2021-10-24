<template>
  <div>
    <Sidebar />
    <v-content>
      <router-view />
      <Snackbar />
    </v-content>
  </div>
</template>
<script>
import Snackbar from "@/components/toast/Snackbar.vue";
import Sidebar from "@/components/layout/Sidebar.vue";
export default {
  components: {
    Sidebar,
    Snackbar,
  },
};
</script>