<template>
  <v-dialog v-model="active" max-width="500px">
    <v-card>
      <v-card-text>
        <v-row justify="center">
          <v-col justify="center"
            ><v-card-title justify="center"
              >ຕ້ອງການລົບຂໍ້ມູນນີ້ບໍ່ ?</v-card-title
            ></v-col
          >
        </v-row>
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
        this.$store.commit("modalDelete_State", val);
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