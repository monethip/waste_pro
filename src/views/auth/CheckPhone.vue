<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="6" sm="8" md="6">
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
            <div v-if="verifyPhone">
              <h2 class="text-center display-5 black--text mb-8 mt-4">
                Your Phone Number ({{showPhone}})
              </h2>
              <v-form ref="form" lazy-validation>
                <v-text-field
                    v-model="phone"
                    label="Phone"
                    single-line
                    prepend-inner-icon="mdi-phone"
                    solo
                    type="text"
                    :rules="phoneRule"
                    @keyup.enter="sendOtp"
                ></v-text-field>
<!--                <p class="errors">-->
<!--                  {{ errors }}-->
<!--                </p>-->
                <div class="text-center">
                  <v-btn
                      block
                      class="login mt-6 py-6"
                      :loading="loading"
                      :disabled="loading"
                      @click="sendOtp"
                  >Get OTP
                  </v-btn
                  >
                </div>
              </v-form>
            </div>

            <div v-if="verifyCode">
              <h2 class="text-center display-5 black--text mb-0 mt-4">
                Verify Code OTP
              </h2>
              <p class="text-center display-5 black--text mb-8 mt-0">Input Code from  SMS</p>
              <v-form ref="form" lazy-validation>

                <div style="display: flex; flex-direction: row;">
                  <v-otp-input
                      ref="otpInput"
                      input-classes="otp-input"
                      separator=""
                      :num-inputs="6"
                      :should-auto-focus="true"
                      :is-input-num="true"
                      @on-complete="handleOnComplete"
                      class="otp"
                  />

                  <v-btn text @click="handleClearInput()">Clear</v-btn>
                </div>

                <div class="text-center">
                  <v-btn
                      block
                      class="login mt-6 py-6"
                      :loading="btnVerify"
                      :disabled="btnVerify"
                      @click="verifyOtp"
                  >Confirm</v-btn
                  >
                </div>
              </v-form>
            </div>

          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div id="recaptcha-container"></div>
  </v-container>
</template>
<script>
import {mapActions, mapGetters} from "vuex";
import firebase from 'firebase';

export default {
  name: "CheckPhone",
  title() {
    return `Vientiane Waste Co-Dev|Login`;
  },
  data:() =>({
    loading: false,
    btnVerify:false,
    verifyCode:false,
    verifyPhone:true,
    phone:"",
    showPhone:"",
    code:"",
    user: {},
    phoneRule: [
      (v) => !!v || "Phone is required",
      (v) =>
          (v && v.length >= 8) || "Phone must be more than 8 characters",
    ],
    appVerifier:"",
  }),

  methods: {
    sendOtp() {
      if (this.$refs.form.validate() === true) {
            let countryCode = "+85620"; //laos
            let phoneNumber = countryCode + this.phone;
            let appVerifier = this.appVerifier;
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
                .then(confirmationResult => {
                  this.verifyCode = true;
                  this.verifyPhone =false;
                  window.confirmationResult = confirmationResult;
                })
                .catch(function () {
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "error",
                    msg: "SMS not sent",
                  });
                });
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "Error",
        });
      }
    },

    verifyOtp() {
      this.btnVerify = true;
      let code = this.code;
        window.confirmationResult
            .confirm(code)
            .then((res) => {
              if (res) {
                this.btnVerify = false;
                const token = (res.user);
                localStorage.setItem('id_token',token._lat);
              }
              try {
                this.$store.commit("Loading_State", true);
                const id_token = localStorage.getItem('id_token');
                let user = {...this.user,id_token};
            const response = this.$store.dispatch('auth/confirmLogin',user);
            console.log(response);
              }catch (error){
                console.log("error")
              }finally{
                // router.push({ name: 'Dashboard' });
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: "Login Success",
                });
              }
              this.$store.commit("Loading_State", false);
              // this.$store.commit("Loading_State", true);
            })
            .catch(function () {
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: "ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່",
              });
            });

    },



    ...mapActions({
      // AdminLogin: "User/LoginUser",
    }),
    // Submit() {
    //   if (this.$refs.form.validate() == true) {
    //     this.AdminSignIn();
    //   }
    // },

    // SubmitLogin() {
    //   if (this.$refs.form.validate() == true) {
    //     this.loading = true;
    //     this.AdminLogin(this.users)
    //         .then(() => {
    //           setTimeout(() => {
    //             // window.location.reload();
    //             this.loading = false;
    //             this.$store.commit("Toast_State", {
    //               value: true,
    //               color: "success",
    //               msg: "Login Success",
    //             });
    //           }, 300);
    //         })
    //         .catch(() => {
    //           setTimeout(() => {
    //             this.loading = false;
    //             this.$store.commit("Toast_State", {
    //               value: true,
    //               color: "error",
    //               msg: "Login Fail",
    //             });
    //           }, 300);
    //         });
    //   }
    // },

    initReCaptcha() {
      setTimeout(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              // callback: function (response) {
              //   // reCAPTCHA solved, allow signInWithPhoneNumber.
              //   // ...
              // },
              "expired-callback": function () {
                // Response expired. Ask user to solve reCAPTCHA again.
                // ...
              },
            }
        );
        //
        this.appVerifier = window.recaptchaVerifier;
      }, 1000);
    },
    handleOnComplete(value) {
      this.code = value;
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },

  },
  computed: {
    ...mapGetters({
      // errors: "User/ShowMsgErrors",
    }),
  },
  created() {
    this.initReCaptcha();
    const data = localStorage.getItem('confirmAccount');
     this.showPhone = localStorage.getItem('phone');
    this.user = JSON.parse(data);
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

.v-stepper__content{
  padding: 8px 8px;
}

.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  &.error {
    border: 1px solid red !important;
  }
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
