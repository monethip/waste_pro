<template>
  <v-overlay :value="show">
    <v-progress-circular
      indeterminate
      size="64"
      color="primary"
    />
  </v-overlay>
</template>

<script>
export default {
  computed: {
    show: {
      set(val) {
        this.$store.commit('Loading_State', val);
      },
      get() {
        return this.$store.state.isLoading;
      },
    },
  },
};
</script>

<style></style>
