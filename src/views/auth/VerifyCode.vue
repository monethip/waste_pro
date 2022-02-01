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
                  style="margin:auto"
                ></v-img>
              </v-col>
            </v-row>
            <h2 class="text-center display-5 black--text mb-0 mt-4">
              Verify Code OTP
            </h2>
            <p class="text-center display-5 black--text mb-8 mt-0">Input Code from  SMS</p>
            <v-form ref="form" lazy-validation>
              <vue-otp-2
                  ref="otpInput2"
                  length="6"
                  inputmode="numeric"
                  @onChange="onChange"
                  @onComplete="onComplete"
                  class="vue-otp-2"
              />
              <p class="errors">
                {{ errors }}
              </p>
              <div class="text-center">
                <v-btn
                  block
                  class="login mt-6 py-6"
                  :loading="loading"
                  :disabled="loading"
                  @click="verifyOtp"
                  >Confirm</v-btn
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



    verifyOtp() {
      this.loading = true;
      if (this.phone.length != 8 || this.code.length != 6) {
        this.$notification.InvalidPhone(
            "top-right",
            "danger",
            9000
        );
      } else {
        let code = this.code;
        window.confirmationResult
            .confirm(code)
            .then((res) => {
              if (res) {
                this.$store.commit("RegisterRunner/setPhone", res.user._lat);
                this.$emit("nexStepRegister")
              }
              this.loading = false;
            })
            .catch(function (error) {
              // User couldn't sign in (bad verification code?)
              // ...
              this.$notification.InvalidPhone(
                  "top-right",
                  "success",
                  9000
              );
              console.log(error);
            });
      }
    },


    onChange(){
      console.log("onChange")
    },
    onComplete(value){
      this.isStepTwo = true;
      console.log(value)
    },
    goStepThree(){
      if(this.isStepTwo){
        this.stepValue = 3;
      }
    }
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
.vue-otp-2 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 80px !important;

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    input {
      max-width: 48px !important;
      padding: 11.5px 8px;
      font-size: 20px;
      border-radius: 3px;
      border: 1px solid $primary-color !important;
      text-align: center;
    }

    span {
      display: block;
      flex: 1;
      text-align: center;
    }
  }
}

.v-stepper__content{
  padding: 8px 8px;
}
</style>
