<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" md="12">
        <v-card class="elevation-1" max-width="600" style="    display: flex;
    margin: auto;">
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
            <h3 class="text-center display-5 black--text mb-8 mt-4">
              Login to Vientaine Waste Pro
            </h3>
            <v-form ref="form" lazy-validation>
              <v-text-field
                v-model="user.credential"
                label="User name"
                single-line
                prepend-inner-icon="mdi-email"
                solo
                type="text"
                :rules="credentialRules"
              ></v-text-field>
              <v-text-field
                v-model="user.password"
                :rules="passwordRules"
                solo
                label="ລະຫັດຜ່ານ"
                prepend-inner-icon="mdi-lock"
                :type="show ? 'text' : 'password'"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show = !show"
                @keyup.enter="submitLogin"
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
                  @click="submitLogin"
                  >Login</v-btn
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
import { mapGetters } from "vuex";
import User from '@/store/models/User'

export default {
  name: "Login",
  title() {
    return `Vientiane Waste Co-Dev|Login`;
  },
  data() {
    return {
      loading: false,
      show: false,
      // user: {},
      credentialRules: [(v) => !!v || "User name required"],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      user:new User(),
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
    async submitLogin(){
      // console.log(this.user)
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        try {
          console.log('Loading ...')
          const response = await this.$store.dispatch('auth/login',this.user);
          console.log('response',response);
        }catch (error){
          console.log("error")
          this.$store.commit("Toast_State", this.toast_error);
        }finally{
          this.loading = false;
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      errors: "auth/ShowMsgErrors",
    }),
  },
  created() {
    console.log(this.errors)
  }
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
