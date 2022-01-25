<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6" sm="8" md="6">
        <v-card class="elevation-1" max-width="600">
          <v-card-text class="py-16 px-16">
            <v-row justify="center">
              <v-col justify="center">
                <v-img
                  src="@/assets/logo-finalized.png"
                  max-height="150"
                  max-width="250"
                  alt="Logo"
                ></v-img>
              </v-col>
            </v-row>
            <h2 class="text-center display-5 black--text mb-8 mt-4">
              Your Phone Number (xxxxxx00)
            </h2>
            <v-form ref="form" lazy-validation>
              <v-text-field
                v-model="users.credential"
                label="Phone"
                single-line
                prepend-inner-icon="mdi-phone"
                solo
                type="text"
                :rules="credentialRules"
              ></v-text-field>
              <p class="errors">
                {{ errors }}
              </p>
              <div class="text-center">
                <v-btn
                  block
                  class="login mt-6 py-6"
                  :loading="loading"
                  :disabled="loading"
                  @click="SubmitLogin"
                  >Get OTP</v-btn
                >
              </div>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Login",
  title() {
    return `Vientiane Waste Co-Dev|Login`;
  },
  data() {
    return {
      loading: false,
      show1: false,
      users: {},

      credentialRules: [(v) => !!v || "User name required"],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],

      toast: {
        value: true,
        color: "success",
        msg: "Login Success",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },
    };
  },

  methods: {
    ...mapActions({
      AdminLogin: "User/LoginUser",
    }),
    // Submit() {
    //   if (this.$refs.form.validate() == true) {
    //     this.AdminSignIn();
    //   }
    // },
    SubmitLogin() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.AdminLogin(this.users)
          .then(() => {
            setTimeout(() => {
              // window.location.reload();
              this.loading = false;
              this.$store.commit("Toast_State", this.toast);
            }, 300);
          })
          .catch(() => {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", this.toast_error);
            }, 300);
          });
      }
    },
  },
  computed: {
    ...mapGetters({
      errors: "User/ShowMsgErrors",
    }),
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
.login {
  background-color: $primary-color !important;
  color: white !important;
  font-size: 18px !important;
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: 0px -2px 0px -10px rgb(0 0 0 / 20%),
    0px 2px 3px 0px rgb(0 0 0 / 14%), 1px 1px 2px 1px rgb(0 0 0 / 12%) !important;
}
</style>
