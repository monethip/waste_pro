<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="headline">Add user</span>
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

            <v-divider />

            <v-stepper-step
              :complete="stepValue > 2"
              step="2"
            >
              Verify Code
            </v-stepper-step>

            <v-divider />

            <v-stepper-step step="3">
              User Info
            </v-stepper-step>
          </v-stepper-header>
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-row>
                <v-col cols="12">
                  <v-form
                    ref="phone"
                    lazy-validation
                  >
                    <v-text-field
                      v-model="phone"
                      label="ເບີໂທ *"
                      required
                      :rules="phoneRules"
                      type="number"
                      class="input-number"
                    />
                  </v-form>
                  <p class="errors">
                    {{ server_errors.phone }}
                  </p>
                </v-col>
              </v-row>

              <v-btn
                color="primary"
                :loading="btnVerify"
                :disabled="btnVerify"
                @click="verifyPhone"
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
                      separator
                      :num-inputs="6"
                      :should-auto-focus="true"
                      :is-input-num="true"
                      class="otp"
                      @on-complete="handleOnComplete"
                    />

                    <v-btn
                      class="btnClear"
                      text
                      @click="handleClearInput()"
                    >
                      Clear
                    </v-btn>
                  </div>
                </v-col>
              </v-row>

              <v-btn
                color="primary"
                :loading="loading"
                :disabled="loading"
                @click="verifyOtp"
              >
                Continue
              </v-btn>
            </v-stepper-content>

            <v-stepper-content step="3">
              <v-container>
                <v-form
                  ref="form"
                  lazy-validation
                >
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="user.name"
                        label="Name *"
                        required
                        :rules="nameRules"
                      />
                      <p class="errors">
                        {{ server_errors.name }}
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="phone"
                        label="ເບີໂທ *"
                        required
                        :rules="phoneRules"
                        type="number"
                        class="input-number"
                        disabled
                      />
                      <p class="errors">
                        {{ server_errors.phone }}
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="user.email"
                        label="Email"
                        required
                      />
                      <p class="errors">
                        {{ server_errors.email }}
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="user.password"
                        label="Password *"
                        type="password"
                        :rules="passwordRules"
                        required
                      />
                      <p class="errors">
                        {{ server_errors.password }}
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="user.password_confirmation"
                        label="Password Confirm *"
                        type="password"
                        :rules="passwordConfirmRules"
                        required
                        @keyup.enter="AddItem"
                      />
                      <p class="errors">
                        {{ server_errors.password_confirmation }}
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="user.emp_name"
                        label="Real Name"
                      />
                      <p class="errors">
                        {{ server_errors.emp_name }}
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="user.emp_surname"
                        label="Real Surname"
                      />
                      <p class="errors">
                        {{ server_errors.emp_surname }}
                      </p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="user.emp_card_id"
                        label="Card ID"
                      />
                      <p class="errors">
                        {{ server_errors.emp_card_id }}
                      </p>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>

              <v-btn
                color="primary"
                :loading="loading"
                :disabled="loading"
                @click="AddItem()"
              >
                Save
              </v-btn>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>

        <!--            <v-card-actions>-->
        <!--              <v-spacer></v-spacer>-->
        <!--              <v-btn color="blue darken-1" text @click="closeAddModal()">-->
        <!--                Close-->
        <!--              </v-btn>-->
        <!--              &lt;!&ndash;              <v-btn&ndash;&gt;-->
        <!--              &lt;!&ndash;                color="blue darken-1"&ndash;&gt;-->
        <!--              &lt;!&ndash;                text&ndash;&gt;-->
        <!--              &lt;!&ndash;                :loading="loading"&ndash;&gt;-->
        <!--              &lt;!&ndash;                :disabled="loading"&ndash;&gt;-->
        <!--              &lt;!&ndash;                @click="AddItem()"&ndash;&gt;-->
        <!--              &lt;!&ndash;              >&ndash;&gt;-->
        <!--              &lt;!&ndash;                Save&ndash;&gt;-->
        <!--              &lt;!&ndash;              </v-btn>&ndash;&gt;-->
        <!--            </v-card-actions>-->
      </v-card-text>
    </v-card>

    <div id="recaptcha-container" />
  </v-container>
</template>

<script>
import firebase from 'firebase';

export default {
  title() {
    return `Vientiane Waste Co-Dev|User`;
  },
  name: 'User',
  data() {
    return {
      stepValue: 1,
      otp: '',
      isStepTwo: false,

      loading: false,
      users: [],
      user: {},
      phone: '',
      edit_user: {},
      userID: '',
      server_errors: {
        email: '',
        roleId: '',
      },
      errormsg: '',

      selectedRole: '',
      selectedRoles: [],
      roles: [],
      revokeRoles: [],
      permissionDialog: false,
      updatePermissionDialog: false,
      selectedPermission: '',
      permissions: [],
      revokes: [],
      code: '',
      appVerifier: '',
      btnVerify: false,

      // resetPassword
      password: '',
      password_confirm: '',

      id_token: '',

      // Validation
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      passwordConfirmRules: [
        (v) => !!v || 'Password Confirm is required',
        (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      phoneRules: [
        (v) => !!v || 'Phone is required',
        (v) => (v && v.length >= 8 && v.length <= 11)
          || 'Phone number must be  8 - 11 numbers',
      ],
      rulePermission: [(v) => !!v || 'Permission is required'],
      rulePermissionRole: [(v) => !!v || 'Role is required'],
    };
  },

  watch: {
    'user.name': function () {
      this.server_errors.name = '';
    },
    'user.phone': function () {
      this.server_errors.phone = '';
    },
    'user.email': function () {
      this.server_errors.email = '';
    },
    'user.password': function () {
      this.server_errors.password = '';
    },

    password() {
      this.server_errors.password = '';
    },
    password_confirmation() {
      this.password_confirmation = '';
    },
  },
  created() {
    this.initReCaptcha();
  },
  methods: {
    AddItem() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.user.id_token = this.id_token;
        this.$axios
          .post('user-setting/user', this.user)
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.user = {};
                this.reset();
                this.$router.push({
                  name: 'User',
                });
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response
                ? error.response.data.message
                : 'Something went wrong',
            });
            if (error.response && error.response.status === 422) {
              const obj = error.response.data.errors;
              for (const [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
    },
    verifyPhone() {
      // this.btnVerify = true;
      if (this.$refs.phone.validate() === true) {
        this.btnVerify = true;
        this.$axios
          .post('unique-phone', { phone: this.phone })
          .then((res) => {
            if (res.data.code === 200) {
              if (res.data.data.exists === false) {
                this.initReCaptcha();
                this.sendOtp();
                this.btnVerify = true;
              } else if (res.data.data.exists === true) {
                this.btnVerify = false;
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'error',
                  msg: 'ເບີນີ້ມີໃນລະບົບແລ້ວ',
                });
              }
              this.btnVerify = false;
            }
          })
          .catch(() => {
            this.btnVerify = false;
          });
      }
    },
    sendOtp() {
      // this.btnVerify = true;
      const countryCode = '+85620'; // laos
      const phoneNumber = countryCode + this.phone;
      const { appVerifier } = this;
      firebase
        .auth()
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          this.stepValue = 2;
          // this.btnVerify = false;
          // this.loading = true;
        })
        .catch(function () {
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: 'SMS not sent',
          });
          // this.loading = true;
        });
    },

    verifyOtp() {
      // this.btnVerify = true;
      const code = Array.from(this.$refs.otpInput.otp).join('');

      window.confirmationResult
        .confirm(code)
        .then((res) => {
          if (res) {
            const token = res.user;
            this.id_token = token._lat;
            console.log(this.id_token);
            this.stepValue = 3;
          }
        })
        .catch(function () {
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: 'ມີບາງຢ່າງຜິດພາດ ກະລຸນາລອງໃໝ່',
          });
        });
    },

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

.v-stepper__content {
  padding: 8px 8px;
}

.otp,
.btnClear {
  margin-bottom: 24px;
  margin-top: 24px;
}
</style>
