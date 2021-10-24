<template>
  <v-dialog v-model="dialog" persistent max-width="700px">
    <slot v-bind="{ close }" />
  </v-dialog>
</template>

<script>
export default {
  computed: {
    dialog: {
      set(val) {
        this.$store.commit("modalEdit_State", val);
      },
      get() {
        return this.$store.state.modalEditState;
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
