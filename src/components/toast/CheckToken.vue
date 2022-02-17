<template>
  <v-dialog v-model="active" max-width="380px" present>
    <v-card>
      <v-card-text class="pt-4">
        <v-row>
          <v-col align="center"
                 justify="center">
            <h3 class="py-2">Session is expired</h3>
          </v-col>
        </v-row>
        <template>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                class="mr-2"
                depressed
                color="primary"
                small @click="reLogin"
            >Login</v-btn
            >
            <v-btn depressed
                   color="primary" small @click="close_dialog">Cancel</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </template>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import store from "@/store";
export default {
  computed: {
    active: {
      set(val) {
        this.$store.commit("modalCheckToken_State", val);
      },
      get() {
        return this.$store.state.modalCheckTokenState;
      },
    },
  },
  methods: {
    reLogin(){
        store.dispatch("auth/destroyToken");
    },
    close_dialog() {
      this.$store.state.modalCheckTokenState =false;
    },
  },
};
</script>

<style>
</style>