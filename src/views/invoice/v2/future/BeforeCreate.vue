<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>

      <div>ເລືອກ User</div>
    </v-breadcrumbs>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title class="my-auto">
            ຂໍ້ມູນ Users ({{ pagination.total }})
            <v-divider
              class="mx-4"
              vertical
            />
            <v-spacer />
            <v-row>
              <v-col>
                <v-btn
                  dark
                  color="primary"
                  @click="OpenModalAdd"
                >
                  ເພີ່ມລູກຄ້າ Pre Customer
                </v-btn>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="search"
                  clearable
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  outlined
                  dense
                  @keyup.enter="Search()"
                />
              </v-col>

              <v-col>
                <v-text-field
                  v-model="searchPhone"
                  clearable
                  prepend-inner-icon="mdi-magnify"
                  label="Phone"
                  type="number"
                  class="input-number"
                  single-line
                  hide-details
                  outlined
                  dense
                  @keyup.enter="SearchPhone()"
                />
              </v-col>
            </v-row>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="users"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <!--Role -->
            <template v-slot:item.customer="{ item }">
              <div>{{ item.name }}</div>
            </template>
            <template v-slot:item.customerType="{ item }">
              <div v-if="item.customer">
                <div
                  v-if="item.customer.customer_type =='home'"
                  class="success--text"
                >
                  ຄົວເຮືອນ
                </div>
                <div
                  v-else-if="item.customer.customer_type =='company'"
                  class="info--text"
                >
                  ຫົວໜ່ວຍທຸລະກິດ
                </div>
              </div>
              <div
                v-else
                class="error--text"
              >
                ຍັງບໍ່ທັນສະໝັກບໍລິການ
              </div>
            </template>
            <template v-slot:item.status="{ item }">
              <v-btn
                medium
                class="btn-primary elevation-0"
                @click="createPage(item)"
              >
                <v-icon>mdi-plus</v-icon>ເພີ່ມ
              </v-btn>
            </template>
          </v-data-table>
          <br>
          <template>
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
              @paginate="fetchData()"
            />
          </template>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Add user</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.name"
                      label="Name "
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.phone"
                      label="ເບີໂທ *"
                      required
                      :rules="phoneRules"
                      type="number"
                      class="input-number"
                    />
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
                      label="Password Confirm"
                      type="password"
                      required
                      :rules="passwordRules"
                      autocomplete
                    />
                    <p class="errors">
                      {{ server_errors.password }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.password_confirmation"
                      label="Password"
                      type="password"
                      required
                      :rules="passwordRules"
                      autocomplete
                    />
                    <p class="errors">
                      {{ server_errors.password_confirmation }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="closeAddModal()"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="AddItem()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import queryOption from '@/Helpers/queryOption';

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
      headers: [
        { text: 'ລູກຄ້າ', value: 'customer', width: '150px' },
        { text: 'ເບີໂທ', value: 'phone', sortable: false },
        {
          text: 'ປະເພດລູກຄ້າ',
          value: 'customerType',
          sortable: false,
          width: '150px',
        },
        { text: 'Email', value: 'email', sortable: false },
        {
          text: '', value: 'status', sortable: false, align: 'center',
        },
      ],
      loading: false,
      users: [],
      user: {},
      phone: '',
      server_errors: {
        email: '',
        roleId: '',
      },

      selectedRole: '',
      selectedRoles: [],
      roles: [],

      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      search: '',
      searchPhone: '',
      oldVal: '',

      statuses: [
        {
          name: 'active',
        },
        {
          name: 'inactive',
        },
      ],
      status: '',
      id_token: '',

      // Validation //Validation
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      passwordConfirmRules: [
        (v) => !!v || 'Password Confirm is required',
        (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      phoneRules: [
        (v) => !!v || 'Phone is required',
        (v) => (v && v.length >= 8 && v.length <= 11)
          || 'Phone number must be  8 - 11 numbers',
      ],
    };
  },

  watch: {
    search(value) {
      this.pagination.current_page = '';
      if (value === '') {
        this.fetchData();
      }
    },

    searchPhone(value) {
      this.pagination.current_page = '';
      if (value.length > 4) {
        this.fetchData();
      }
    },
  },
  created() {
    if (!this.$route.query.redirect) this.$router.push('/');
    this.fetchData();
  },
  methods: {
    OpenModalAdd() {
      this.$store.commit('modalAdd_State', true);
    },
    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },
    AddItem() {
      if (this.$refs.form.validate() === true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('auth/register-pre-customer', this.user)
          .then((res) => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeAddModal();
                this.reset();
                this.createPage(res.data.data);
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.$store.commit('Loading_State', false);
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
    fetchData() {
      const roles = this.$route.query.redirect == 'create-future-customer'
        ? ['customer', 'company']
        : ['pre_customer'];
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('user-setting/user', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { phone: this.searchPhone },
            { roles },
          ]),
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Loading_State', false);
            this.users = res.data.data.data;
            this.pagination = res.data.data.pagination;
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status === 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    createPage(data) {
      this.$router.push({
        name: this.$route.query.redirect,
        params: {
          items: data,
        },
      });
    },
    backPrevios() {
      this.$router.go(-1);
    },
    reset() {
      this.$refs.form.reset();
    },
    Search() {
      GetOldValueOnInput(this);
    },
    SearchPhone() {
      GetOldValueOnInput(this);
    },
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main";

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
