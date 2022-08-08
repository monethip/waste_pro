<template>
  <v-container>
        <v-card>
          <v-card-title>
            <span class="headline">Change Phone - {{user.name}}</span>
          </v-card-title>
          <v-card-text>
                <v-stepper v-model="stepValue">
                  <v-stepper-header>
                    <v-stepper-step
                        :complete="stepValue > 1"
                        step="1"
                    >
                      Phone Number
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        :complete="stepValue > 2"
                        step="2"
                    >
                      Verify Code
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step step="3">
                      Confirm
                    </v-stepper-step>
                  </v-stepper-header>
                  <v-stepper-items>
                    <v-stepper-content step="1">

                      <v-row>
                        <v-col cols="12">
                          <v-form ref="phone" lazy-validation>
                            <v-text-field
                                label="ເບີໂທ *"
                                required
                                v-model="phone"
                                :rules="phoneRules"
                                type="number"
                                class="input-number"
                            ></v-text-field>
                          </v-form>
                          <p class="errors">
                            {{ server_errors.phone }}
                          </p>
                        </v-col>
                      </v-row>

                      <v-btn
                          color="primary"
                          @click="verifyPhone"
                          :loading="loading"
                          :disabled="loading"
                      >
                        Continue
                      </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2">
                      <v-row>
                        <v-col cols="12">
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

                            <v-btn class="btnClear" text @click="handleClearInput()">Clear</v-btn>
                          </div>
                        </v-col>
                      </v-row>

                      <v-btn
                          color="primary"
                          @click="verifyOtp"
                          :loading="loading"
                          :disabled="loading"
                      >
                        Continue
                      </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3">
                      <v-container>
                        <v-form ref="form" lazy-validation>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                  label="ເບີໂທ *"
                                  required
                                  v-model="phone"
                                  :rules="phoneRules"
                                  type="number"
                                  class="input-number"
                                  disabled
                              ></v-text-field>
                              <p class="errors">
                                {{ server_errors.phone }}
                              </p>
                            </v-col>
                          </v-row>
                        </v-form>
                      </v-container>
                      <v-btn
                          color="primary"
                          :loading="loading"
                          :disabled="loading"
                          @click="changePhone()"
                      >
                        Change
                      </v-btn>
                    </v-stepper-content>
                  </v-stepper-items>
                </v-stepper>
          </v-card-text>
        </v-card>

    <div id="recaptcha-container"></div>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  title() {
    return `Vientiane Waste Co-Dev|User`;
  },
  name: "User",
  data() {
    return {
      stepValue: 1,
      otp:"",
      isStepTwo:false,

      loading: false,
      user: {},
      phone:"",
      edit_user: {},
      userID: "",
      server_errors: {
        email: "",
        roleId: "",
      },
      errormsg: "",

      selectedRole: "",
      selectedRoles: [],
      roles: [],
      revokeRoles: [],
      permissionDialog: false,
      updatePermissionDialog: false,
      selectedPermission: "",
      permissions: [],
      revokes: [],
      code:"",
      appVerifier:"",
      btnVerify:false,

      // resetPassword
      password: "",
      password_confirm: "",

      id_token:"",

      //Validation
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
            (v && v.length >= 8 && v.length <= 11) ||
            "Phone number must be  8 - 11 numbers",
      ],
    };
  },
  methods: {
    getUser() {
      this.loading = true;
      this.$axios
          .get("user-setting/user/" + this.$route.params.id)
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.user = res.data.data;
              }, 300);
            }
          })
          .catch(() => {
          });
    },

    changePhone() {
      this.loading = true;
      this.user.id_token = this.id_token;
      this.$axios
          .put("user-setting/user/" + this.$route.params.id, this.user)
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.edit_user = {};
                this.$router.push({
                  name: "User",
                });
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            if (error.response.status === 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },

    verifyPhone(){
      // this.btnVerify = true;
      this.loading = true;
      if (this.$refs.phone.validate() === true){
        this.$axios
            .post("unique-phone", {phone:this.phone})
            .then((res) => {
              if (res.data.code === 200) {
                console.error(res.data.data.exists)
                if(res.data.data.exists === false){
                  this.initReCaptcha();
                  this.sendOtp();
                  this.loading = true;
                } else if(res.data.data.exists === true){
                  this.btnVerify = false;
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "error",
                    msg: "ເບີນີ້ມີໃນລະບົບແລ້ວ",
                  });
                }
                // this.btnVerify = false;
                this.loading = false;
              }
            })
            .catch(() => {
              this.btnVerify = false;
            });
      }
    },
    sendOtp() {
      // this.btnVerify = true;
      let countryCode = "+85620"; //laos
      let phoneNumber = countryCode + this.phone;
      let appVerifier = this.appVerifier;
      firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
          .then(confirmationResult => {
            window.confirmationResult = confirmationResult;
            this.stepValue = 2;
            // this.btnVerify = false;
            // this.loading = true;
          })
          .catch(function () {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: "SMS not sent",
            });
            // this.loading = true;
          });
    },

    verifyOtp() {
      // this.btnVerify = true;
      let code = this.code;
      window.confirmationResult
          .confirm(code)
          .then((res) => {
            if (res) {
              const token = (res.user);
              this.id_token = token._lat;
              console.log(this.id_token);
              this.stepValue = 3;
            }
          })
          .catch(function () {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: "ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່",
            });
          });

    },


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

    reset() {
      this.$refs.form.reset();
    },

    handleOnComplete(value) {
      this.code = value;
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
  },

  watch: {
    "user.name": function () {
      this.server_errors.name = "";
    },
    "user.phone": function () {
      this.server_errors.phone = "";
    },
    "user.email": function () {
      this.server_errors.email = "";
    },
    "user.password": function () {
      this.server_errors.password = "";
    },

    password: function () {
      this.server_errors.password = "";
    },
    password_confirmation: function () {
      this.password_confirmation = "";
    },

  },
  created() {
    this.initReCaptcha();
    this.getUser();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";

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

.v-stepper__content{
  padding: 8px 8px;
}
.otp,.btnClear{
  margin-bottom: 24px;
  margin-top: 24px;
}

</style>
