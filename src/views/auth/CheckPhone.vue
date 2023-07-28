<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="12"
        md="12"
      >
        <v-card
          class="elevation-1"
          max-width="600"
          style="display: flex; margin: auto"
        >
          <v-card-text class="py-16 px-16">
            <v-row justify="center">
              <v-col justify="center">
                <v-img
                  src="@/assets/logo-finalized.png"
                  max-height="150"
                  max-width="250"
                  alt="Logo"
                  class="logo"
                />
              </v-col>
            </v-row>
            <div v-if="verifyPhone">
              <h3 class="text-center display-5 black--text mb-8 mt-4">
                Your phone number ({{ showPhone }})
              </h3>
              <v-text-field
                v-model="phone"
                label="Phone"
                single-line
                prepend-inner-icon="mdi-phone"
                solo
                type="number"
                :rules="phoneRule"
                class="input-number"
                @keyup.enter="getOtp"
              />

              <p class="errors">
                {{ error }}
              </p>
              <!--              <p class="errors">-->
              <!--                {{ server_errors.start_month }}-->
              <!--              </p>-->

              <div class="text-center">
                <v-btn
                  block
                  class="login mt-6 py-6"
                  :loading="loading"
                  :disabled="loading"
                  @click="getOtp"
                >
                  Get OTP
                </v-btn>
              </div>
            </div>
            <div v-if="verifyCode">
              <h2 class="text-center display-5 black--text mb-0 mt-4">
                Verify Code OTP
              </h2>
              <p class="text-center display-5 black--text mb-8 mt-0">
                Input Code from SMS
              </p>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <div style="display: flex; flex-direction: row">
                      <v-otp-input
                        ref="otpInput"
                        input-classes="otp-input"
                        separator=""
                        :num-inputs="6"
                        :should-auto-focus="true"
                        :is-input-num="true"
                        class="otp"
                        @on-complete="handleOnComplete"
                      />
                      <v-btn
                        text
                        small
                        style="margin: auto"
                        @click="handleClearInput()"
                      >
                        Clear
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
                <div class="text-center">
                  <v-btn
                    block
                    class="login mt-6 py-6"
                    :loading="btnVerify"
                    :disabled="btnVerify"
                    @click="verifyOtp"
                  >
                    Confirm
                  </v-btn>
                </div>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <div id="recaptcha-container" />
  </v-container>
</template>
<script>
import { mapActions } from "vuex";
import firebase from "firebase";
import router from "@/router";

export default {
  name: "CheckPhone",
  title() {
    return `Vientiane Waste Co-Dev|Login`;
  },
  data: () => ({
    loading: false,
    btnVerify: false,
    verifyCode: false,
    verifyPhone: true,
    phone: "",
    showPhone: "",
    code: "",
    user: {},
    error: "",
    phoneRule: [
      (v) => !!v || "Phone is required",
      (v) => (v && v.length >= 8) || "Phone must be more than 8 characters",
    ],
    appVerifier: "",
  }),

  methods: {
    async getOtp() {
      try {
        if (this.phone.length == 8) {
        // Check Phone number
          this.$store.commit('Loading_State', true);
          this.loading = true;
          this.$axios
            .post("auth/check-phone", {
              credential: this.user.credential,
              password: this.user.password,
              phone: this.phone,
            })
            .then((res) => {
              if (res.data.code === 200) {
                if (res.data.data.collect === true) {
                  const countryCode = '+85620'; // laos
                  const phoneNumber = countryCode + this.phone;
                  const { appVerifier } = this;
                  firebase
                    .auth()
                    .signInWithPhoneNumber(phoneNumber, appVerifier)
                    .then((confirmationResult) => {
                      window.confirmationResult = confirmationResult;
                      this.verifyCode = true;
                      this.verifyPhone = false;
                      this.$store.commit('Loading_State', false);
                    })
                    .catch(function (err) {
                      console.log(err);
                      this.error = err;

                      // this.$store.commit('Loading_State', true);;
                    });
                } else if (res.data.data.collect === false) {
                  this.$store.commit('Loading_State', false);
                  this.error = "ເບີໂທບໍ່ຖືກຕ້ອງ";
                } else {
                  this.$store.commit('Loading_State', false);
                  this.error = "ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່";
                }
                this.$store.commit('Loading_State', false);
              }
            })
            .catch((error) => {
              this.error = error;
              this.$store.commit('Loading_State', false);
            }).finally(() => {
              this.loading = false;
            });
        }
      } catch (error) {
        // Handle any initialization errors
        console.error("Error initializing reCAPTCHA:", error);
      }
    },

    verifyOtp() {
      this.btnVerify = true;
      const code = Array.from(this.$refs.otpInput.otp).join('');
      window.confirmationResult
        .confirm(code)
        .then((res) => {
          if (res) {
            const token = res.user;
            localStorage.setItem("id_token", token._lat);
          }
          try {
            this.$store.commit("Loading_State", true);
            const id_token = localStorage.getItem("id_token");
            const user = { ...this.user, id_token };
            this.$store.dispatch("auth/confirmLogin", user);
          } catch (error) {
            this.$store.commit("Toast_State", {
              value: true,
              color: "success",
              msg: error,
            });
          } finally {
            this.$store.commit("Toast_State", {
              value: true,
              color: "success",
              msg: "Login Success",
            });
          }
          this.$store.commit("Loading_State", false);
          // this.$store.commit("Loading_State", true);
        })
        .catch(function (err) {
          console.log(err);
          this.error = err;
        }).finally(() => {
          this.btnVerify = false;
        });
    },

    ...mapActions({
      // AdminLogin: "User/LoginUser",
    }),
    initReCaptcha() {
      setTimeout(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
          'recaptcha-container',
          {
            size: 'invisible',
            // callback: function (response) {
            //   // reCAPTCHA solved, allow signInWithPhoneNumber.
            //   // ...
            // },
            'expired-callback': function () {
              // Response expired. Ask user to solve reCAPTCHA again.
              // ...
            },
          },
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
  watch: {
    phone() {
      this.error = "";
    },
  },
  created() {
    const data = localStorage.getItem("confirmAccount");
    this.showPhone = this.$store.getters["auth/getLoginPhone"];

    this.user = JSON.parse(data);
    if (!this.showPhone) {
      router.push({ name: "Login" });
    }

    this.initReCaptcha();
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

.v-stepper__content {
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

@media only screen and (max-width: 600px) {
  //.otp{
  //  padding: 4px 4px;
  //  margin-left: -64px;
  //}
  .otp-input {
    width: 30px;
    height: 30px;
    padding: 3px;
    margin: 0 5px;
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    text-align: center;

    &.error {
      border: 1px solid red !important;
    }
  }
}
</style>
