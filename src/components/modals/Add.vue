<template>
  <v-dialog v-model="active" persistent max-width="800px" max-height="800px">
    <slot v-bind="{ close }" />
  </v-dialog>
</template>

<script>
export default {
  computed: {
    active: {
      set(val) {
        this.$store.commit("modalAdd_State", val);
      },
      get() {
        return this.$store.state.modalAddState;
      },
    },
  },
  methods: {
    close() {
      this.active = false;
    },
    close_dialog() {
      this.active = false;
    },
  },
};
</script>

<style>
</style>