<template>
<<<<<<< HEAD
  <v-img
    src="../assets/NewBg.jpg"
    backgound-size="cover"
    width="120rem"
    height="61rem"
    content="center"
  />
=======
  <v-container>
    <!-- <v-row style="min-height: 100vh">
      <v-col class="text-center">
        {{ time }}
      </v-col>
    </v-row> -->
    <v-img
      src="../assets/Bgwellcome.png"
      max-height="1080px"
      max-width="1920px"
      class="mx-auto"
    />
  </v-container>
>>>>>>> 780a57a4c64d97099a2a34356f6c4cdf1a374502
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    time() {
      return new Date().toISOString().substr(0, 15);
    },
  },
};
</script>
