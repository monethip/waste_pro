<template>
  <v-container>
    <v-row style="min-height: 100vh">
      <v-col class="text-center"> {{ time }} </v-col>
    </v-row>
  </v-container>
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