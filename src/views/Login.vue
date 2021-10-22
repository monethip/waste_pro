<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6" sm="8" md="6">
        <v-card class="elevation-5" max-width="500">
          <v-card-text class="mt-5">
            <h2 class="text-center display-5 black--text text--accent-3">
              Login to Vientaine Waste Pro
            </h2>
            <v-form>
              <v-text-field
                v-model="email"
                label="E-mail"
                single-line
                prepend-icon="mdi-email"
                solo
                color="black"
                type="email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="ລະຫັດຜ່ານ"
                single-line
                prepend-icon="mdi-lock"
                solo
                color="deep-purple darken-4"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <div class="text-center mt-1">
            <v-btn color="teal darken-4" dark>LOG IN</v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show1: false,
    };
  },
};
</script>

<style>
</style>