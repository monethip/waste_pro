<template>
  <div>
    <v-snackbar
      v-model="show"
      :color="$store.state.color"
      timeout="1500"
      top
      right
    >
      {{ $store.state.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="$store.state.notificationToastState = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  computed: {
    show: {
      set(val) {
        this.$store.commit("Toast_State", val);
      },
      get() {
        return this.$store.state.notificationToastState;
      },
    },
  },
};
</script>

<style>
.successs {
}
</style>