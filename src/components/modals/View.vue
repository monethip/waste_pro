<template>
  <v-dialog
    v-model="active"
    persistent
    width="900px"
    max-with="1200px"
    :retain-focus="false"
  >
    <slot v-bind="{ close }" />
  </v-dialog>
</template>

<script>
export default {
  computed: {
    active: {
      set(val) {
        this.$store.commit("modalView_State", val);
      },
      get() {
        return this.$store.state.modalView;
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
