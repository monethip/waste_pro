<template>
  <v-container>
    <div style="z-index: 9999">
      <div id="recaptcha-container"></div>
    </div>

    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="OpenModalAdd">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title class="my-auto">
            ທັງໝົດ ({{ pagination.total }})
            <v-divider class="mx-4" vertical></v-divider>
            <v-spacer></v-spacer>
            <v-row>
              <v-col>
                <v-text-field
                    v-model="search"
                    clearable
                    dense
                    hide-details
                    label="Search"
                    outlined
                    prepend-inner-icon="mdi-magnify"
                    single-line
                    @keyup.enter="Search()"
                ></v-text-field>
              </v-col>

              <v-col>
                <v-text-field
                    v-model="searchPhone"
                    class="input-number"
                    clearable
                    dense
                    hide-details
                    label="Phone"
                    outlined
                    prepend-inner-icon="mdi-magnify"
                    single-line
                    type="number"
                    @keyup.enter="SearchPhone()"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-title>
          <v-data-table
              :disable-pagination="true"
              :headers="headers"
              :items="users"
              :search="search"
              hide-default-footer
          >
            <!--Role -->
            <template v-slot:item.roles="{ item }">
              <div>
                <span v-for="(role, index) in item.roles" :key="index">
                  <v-chip class="mr-1 my-1" color="info" label>{{ role.name }}</v-chip>
                </span>
              </div>
            </template>
            <!--Permission -->
            <template v-slot:item.permissions="{ item }">
              <div>
                <span v-for="(ps, index) in item.permissions" :key="index">
                  <v-chip class="mr-1 my-1" color="success" label>
                    {{
                      ps.name
                    }}
                  </v-chip>
                </span>
              </div>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip
                  :color="statusColor(item.status)"
                  class="mr-2"
                  label
                  small
                  @click="changeStatus(item)"
              >{{ item.status }}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                      class="mr-2"
                      color="primary"
                      dark
                      medium
                      v-bind="attrs"
                      v-on="on"
                  >mdi-dots-vertical
                  </v-icon>
                </template>
                <v-list>
                  <v-list-item link @click="OpenModalEdit(item)">
                    <v-list-item-title>
                      <v-icon class="mr-2" small>mdi-pencil</v-icon>
                      ແກ້ໄຂ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="resetPassword(item)">
                    <v-list-item-title>
                      <v-icon class="mr-2" small>mdi-key</v-icon>
                      Reset Password
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item link @click="deleteItem(item.id)">
                    <v-list-item-title>
                      <v-icon small>mdi-delete</v-icon>
                      ລຶບ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
          <br/>
          <template>
            <Pagination
                v-if="pagination.total_pages > 1"
                :offset="offset"
                :pagination="pagination"
                @paginate="fetchData()"
            ></Pagination>
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
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-select
                        v-model="user.role"
                        :items="roles"
                        item-text="text"
                        item-value="value"
                        label="Role"
                    ></v-select>
                    <p class="errors">{{ server_errors.role }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="user.name" :rules="nameRules" label="Name "></v-text-field>
                    <p class="errors">{{ server_errors.name }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        v-model="user.phone"
                        :rules="phoneRules"
                        class="input-number"
                        label="ເບີໂທ *"
                        required
                        type="number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="user.email" label="Email" required></v-text-field>
                    <p class="errors">{{ server_errors.email }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        v-model="user.password"
                        :rules="passwordRules"
                        autocomplete
                        label="Password Confirm"
                        required
                        type="password"
                    ></v-text-field>
                    <p class="errors">{{ server_errors.password }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        v-model="user.password_confirmation"
                        :rules="passwordRules"
                        autocomplete
                        label="Password"
                        required
                        type="password"
                    ></v-text-field>
                    <p class="errors">{{ server_errors.password_confirmation }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="user.emp_name" label="ຊື່ແທ້" required></v-text-field>
                    <p class="errors">{{ server_errors.emp_name }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="user.emp_surname" label="ນາມສະກຸນ" required></v-text-field>
                    <p class="errors">{{ server_errors.emp_surname }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="user.emp_card_id" label="ໄອດີ" required></v-text-field>
                    <p class="errors">{{ server_errors.emp_card_id }}</p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">Close</v-btn>
              <v-btn
                  :disabled="loading"
                  :loading="loading"
                  color="blue darken-1"
                  text
                  @click="AddItem()"
              >Save
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <!--Edit Modal-->
    <ModalEdit>
      <template v-slot @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">ແກ້ໄຂ User</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-select
                        v-model="edit_user.role"
                        :items="roles"
                        item-text="text"
                        item-value="value"
                        label="Role"
                    ></v-select>
                    <p class="errors">{{ server_errors.role }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        v-model="edit_user.name"
                        :rules="nameRules"
                        label="Name *"
                        required
                    ></v-text-field>
                    <p class="errors">{{ server_errors.name }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        v-model="edit_user.phone"
                        :rules="phoneRules"
                        class="input-number"
                        disabled
                        label="ເບີໂທ *"
                        required
                        type="number"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        v-model="edit_user.email"
                        label="Email"
                        required
                    ></v-text-field>
                    <p class="errors">{{ server_errors.email }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="edit_user.emp_name" label="ຊື່ແທ້" required></v-text-field>
                    <p class="errors">{{ server_errors.emp_name }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="edit_user.emp_surname" label="ນາມສະກຸນ" required></v-text-field>
                    <p class="errors">{{ server_errors.emp_surname }}</p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="edit_user.emp_card_id" label="ໄອດີ" required></v-text-field>
                    <p class="errors">{{ server_errors.emp_card_id }}</p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdateModal()">Close</v-btn>
              <v-btn
                  :disabled="loading"
                  :loading="loading"
                  color="blue darken-1"
                  text
                  @click="updateItem()"
              >Update
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>

    <!--Change Password -->
    <v-dialog v-model="changePasswordDialog" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">
            Reset Password
            <span>
              <a>{{ edit_user.name }}</a>
            </span>
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      label="Password *"
                      required
                      type="password"
                  ></v-text-field>
                  <p class="errors">{{ server_errors.password }}</p>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="password_confirm"
                      :rules="passwordConfirmRules"
                      label="Password Confirm *"
                      required
                      type="password"
                      @keyup.enter="resetPasswordAction"
                  ></v-text-field>
                  <p class="errors">{{ server_errors.password_confirmation }}</p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeReset()">Close</v-btn>
            <v-btn
                :disabled="loading"
                :loading="loading"
                color="blue darken-1"
                text
                @click="resetPasswordAction"
            >Reset
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Change status -->
    <v-dialog v-model="changeStatusDialog" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">
            ປ່ຽນສະຖານະ
            <span>
              <a>{{ edit_user.name }}</a>
            </span>
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                      v-model="edit_user.status"
                      :items="statuses"
                      item-text="name"
                      item-value="name"
                      label="Status *"
                      required
                  ></v-select>
                  <p class="errors">{{ server_errors.status }}</p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="changeStatusDialog = false">Close</v-btn>
            <v-btn
                :disabled="loading"
                :loading="loading"
                color="blue darken-1"
                text
                @click="switchStatus"
            >Change
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Delete Modal-->

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
              :disabled="loading"
              :loading="loading"
              color="blue darken-1"
              text
              @click="deleteItemConfirm"
          >OK
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";

export default {
  title() {
    return `Vientiane Waste Co-Dev|User`;
  },
  name: "User",
  data() {
    return {
      roles: [
        {
          text: "Sale",
          value: "sale"
        },
        {
          text: "Admin Sale",
          value: "sale_admin"
        },
        {
          text: "Partner Sale",
          value: "sale_partner"
        }
      ],
      headers: [
        {text: "ຊື່", value: "name", width: "150px"},
        {text: "Phone", value: "phone", sortable: false},
        {text: "Email", value: "email", sortable: false},
        {text: "Role", value: "roles", sortable: false, width: "150px"},
        {text: "ຊື່ແທ້", value: "emp_name", sortable: false},
        {text: "ນາມສະກຸນ", value: "emp_surname", sortable: false},
        {text: "ໄອດີ", value: "emp_card_id", sortable: false},
        {text: "Status", value: "status", sortable: false, align: "center"},
        {text: "", value: "actions", sortable: false}
      ],
      loading: false,
      users: [],
      user: {
        role: "sale"
      },
      phone: "",
      edit_user: {},
      userID: "",
      server_errors: {
        email: ""
      },
      errormsg: "",
      changePasswordDialog: false,
      changeStatusDialog: false,

      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      search: "",
      searchPhone: "",
      oldVal: "",
      // resetPassword
      password: "",
      password_confirm: "",
      statuses: [
        {
          name: "active"
        },
        {
          name: "inactive"
        }
      ],
      status: "",

      //Validation
      nameRules: [
        v => !!v || "Name is required"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => (v && v.length >= 8) || "Password must be more than 8 characters"
      ],
      passwordConfirmRules: [
        v => !!v || "Password Confirm is required",
        v => (v && v.length >= 8) || "Password must be more than 8 characters"
      ],
      phoneRules: [
        v => !!v || "Phone is required",
        v =>
            (v && v.length >= 8 && v.length <= 11) ||
            "Phone number must be  8 - 11 numbers"
      ]
    };
  },
  methods: {
    AddItem() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.$axios
            .post("user-setting/user-create", this.user)
            .then(res => {
              if (res.data.code === 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.closeAddModal();
                  this.user = {};
                  this.fetchData();
                  this.reset();
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "success",
                    msg: res.data.message
                  });
                }, 300);
              }
            })
            .catch(error => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response
                    ? error.response.data.message
                    : "Something went wrong"
              });
              if (error.response && error.response.status === 422) {
                let obj = error.response.data.errors;
                for (let [key, customer] of Object.entries(obj)) {
                  this.server_errors[key] = customer[0];
                }
              }
            });
      }
    },

    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("user-setting/user", {
            params: queryOption([
              {page: this.pagination.current_page},
              {per_page: this.per_page},
              {filter: this.search},
              {phone: this.searchPhone},
              {roles: ["sale", "sale_admin", "sale_partner"]},
              {order_by: "newest"}
            ])
          })
          .then(res => {
            if (res.data.code === 200) {
              this.loading = false;
              this.$store.commit("Loading_State", false);
              this.users = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }
          })
          .catch(error => {
            this.$store.commit("Loading_State", false);
            if (error.response && error.response.status === 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },

    OpenModalAdd() {
      this.$store.commit("modalAdd_State", true);
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    closeReset() {
      this.changePasswordDialog = false;
      this.password = "";
      this.password_confirmation = "";
    },
    resetPasswordAction() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.$axios
            .put("user-setting/reset-password/" + this.edit_user.id, {
              password: this.password,
              password_confirmation: this.password_confirm
            })
            .then(res => {
              if (res.data.code === 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.edit_user = {};
                  this.reset();
                  this.fetchData();
                  this.changePasswordDialog = false;
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "success",
                    msg: res.data.message
                  });
                }, 300);
              }
            })
            .catch(error => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response
                    ? error.response.data.message
                    : "Something went wrong"
              });
              if (error.response && error.response.status === 422) {
                let obj = error.response.data.errors;
                for (let [key, message] of Object.entries(obj)) {
                  this.server_errors[key] = message[0];
                }
              }
            });
      }
    },

    OpenModalEdit(item) {
      this.edit_user = item;
      this.edit_user.role = item.roles[0].name;
      this.$store.commit("modalEdit_State", true);
    },
    updateItem() {
      if (this.$refs.form.validate() === true) {
        this.loading = true;
        this.$axios
            .put("user-setting/user-update/" + this.edit_user.id, this.edit_user)
            .then(res => {
              if (res.data.code === 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.closeUpdateModal();
                  this.edit_user = {};
                  this.reset();
                  this.fetchData();
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "success",
                    msg: res.data.message
                  });
                }, 300);
              }
            })
            .catch(error => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response
                    ? error.response.data.message
                    : "Something went wrong"
              });
              if (error.response && error.response.status === 422) {
                let obj = error.response.data.errors;
                for (let [key, message] of Object.entries(obj)) {
                  this.server_errors[key] = message[0];
                }
              }
            });
      }
    },
    closeUpdateModal() {
      this.$store.commit("modalEdit_State", false);
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },

    deleteItem(id) {
      this.userID = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
          .delete("user-setting/user/" + this.userID)
          .then(res => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.$store.commit("modalDelete_State", false);
                this.fetchData();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message
                });
              }, 300);
            }
          })
          .catch(error => {
            this.loading = false;
            // setTimeout(() =>{
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response
                  ? error.response.data.message
                  : "Something went wrong"
            });
            // },300);
            this.$store.commit("modalDelete_State", false);
          });
    },
    resetPassword(item) {
      this.changePasswordDialog = true;
      this.edit_user = item;
    },
    changeStatus(item) {
      this.changeStatusDialog = true;
      this.edit_user = item;
    },
    switchStatus() {
      this.loading = true;
      this.$axios
          .put("user-setting/update-status/" + this.edit_user.id, {
            status: this.edit_user.status
          })
          .then(res => {
            if (res.data.code === 200) {
              setTimeout(() => {
                this.loading = false;
                this.fetchData();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message
                });
                this.changeStatusDialog = false;
              }, 300);
            }
          })
          .catch(error => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response
                  ? error.response.data.message
                  : "Something went wrong"
            });
          });
    },
    statusColor(value) {
      if (value === "active") return "primary";
      else if (value === "inactive") return "error";
      else return "info";
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

    handleOnComplete(value) {
      this.code = value;
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    }
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
    "edit_user.name": function () {
      this.server_errors.name = "";
    },
    "edit_user.phone": function () {
      this.server_errors.phone = "";
    },
    "edit_user.email": function () {
      this.server_errors.email = "";
    },
    password: function () {
      this.server_errors.password = "";
    },
    password_confirmation: function () {
      this.password_confirmation = "";
    },
    search: function (value) {
      this.pagination.current_page = "";
      if (value === "") {
        this.fetchData();
      }
    },

    searchPhone: function (value) {
      this.pagination.current_page = "";
      if (value.length > 4) {
        this.fetchData();
      }
    }
  },
  created() {
    this.fetchData();
  }
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
