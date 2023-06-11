<template>
  <v-dialog
    v-model="active"
    max-width="480px"
  >
    <v-card>
      <v-card-text class="pt-8">
        <h3
          align="center"
          class="py-2"
        >
          ຕ້ອງການລຶບຂໍ້ມູນນີ້ບໍ່ ?
        </h3>
        <slot v-bind="{ close }" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  computed: {
    active: {
      set(val) {
        this.$store.commit('modalDelete_State', val);
      },
      get() {
        return this.$store.state.modalDeleteState;
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
