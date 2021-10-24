<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn @click="openAddModal()" class="btn-primary"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title>
            ຂໍ້ມູນ Users
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="users" :search="search">
            <!--Role -->
            <template v-slot:item.roles="{ item }">
              <div>
                <span v-for="(role, index) in item.roles" :key="index">
                  <span
                    >{{ role.name }}
                    <span v-if="item.roles.lenght > 1">,</span></span
                  >
                </span>
              </div>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2"> mdi-key </v-icon>
              <v-icon small class="mr-2" @click="OpenModalEdit(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Add User</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="user.name"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ເບີໂທ *"
                      required
                      v-model="user.phone"
                      :rules="phoneRules"
                      type="number"
                      class="input-number"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.phone }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email *"
                      required
                      v-model="user.email"
                      :rules="emailRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.email }}
                    </p>
                  </v-col>
                  <!--
                  <v-col cols="12">
                    <v-select
                      required
                      v-model="selectedRole"
                      :items="roles"
                      item-text="display_name"
                      item-value="id"
                      label="User Role *"
                      multiple
                      :rules="ruleRole"
                    >
                    </v-select>
                  </v-col>
                  -->
                  <v-col cols="12">
                    <v-text-field
                      label="Password *"
                      type="password"
                      v-model="user.password"
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.password }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password Confirm *"
                      type="password"
                      v-model="user.password_confirmation"
                      :rules="passwordConfirmRules"
                      required
                      @keyup.enter="AddItem"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.password_confirmation }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
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

    <!--Edit Modal-->

    <ModalEdit>
      <template @close="close" v-slot="">
        <v-card>
          <v-card-title>
            <span class="headline">Update User</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="edit_user.name"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ເບີໂທ *"
                      required
                      v-model="edit_user.phone"
                      :rules="phoneRules"
                      type="number"
                      class="input-number"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.phone }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Email *"
                      required
                      v-model="edit_user.email"
                      :rules="emailRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.email }}
                    </p>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="Password *"
                      type="password"
                      v-model="edit_user.password"
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.password }}
                    </p>
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="Password Confirm *"
                      type="password"
                      v-model="user.password_confirmation"
                      :rules="passwordRules"
                      required
                      @keyup.enter="AddItem"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.password_confirmation }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdateModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="updateItem()"
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
export default {
  name: "Package",
  data() {
    return {
      search: "",
      headers: [
        { text: "User Name", value: "name" },
        { text: "Phone", value: "phone", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Role", value: "roles", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      loading: false,
      users: [],
      user: {},
      edit_user: {},
      userID: "",
      server_errors: {
        email: "",
        roleId: "",
      },
      //Validation
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      passwordConfirmRules: [
        (v) => !!v || "Password Confirm is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
          (v && v.length >= 4 && v.length <= 11) ||
          "Phone number must be  4 - 11 numbers",
      ],
      toast: {
        value: true,
        color: "success",
        msg: "Success",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },
    };
  },
  methods: {
    openAddModal() {
      this.$store.commit("modalAdd_State", true);
    },
    AddItem() {
      console.log(this.user);
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("user-setting/user", this.user)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
                this.user = {};
                this.fetchData();
                this.reset();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
    },
    fetchData() {
      this.loading = true;
      this.$axios
        .get("user-setting/user")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.users = res.data.data;
            }, 300);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    OpenModalEdit(item) {
      this.edit_user = item;
      this.$store.commit("modalEdit_State", true);
    },
    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .put("user-setting/user/" + this.edit_user.id, this.edit_user)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeUpdateModal();
                this.edit_user = {};
                this.reset();
                this.fetchData();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
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
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", this.toast);
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
            }, 300);
          }
        })
        .catch(() => {
          this.fetchData();
          this.$store.commit("Toast_State", this.toast_error);
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    reset() {
      this.$refs.form.reset();
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
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
