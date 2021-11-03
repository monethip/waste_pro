<template>
  <v-container>
    <v-row class="mb-n6">
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
              clearable
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              @keyup.enter="Search()"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="users"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
            :loading="loading"
            :disabled="loading"
          >
            <!--Role -->
            <template v-slot:item.roles="{ item }">
              <div>
                <span v-for="(role, index) in item.roles" :key="index">
                  {{ role.name }},
                </span>
              </div>
            </template>
            <!--Permission -->
            <template v-slot:item.permissions="{ item }">
              <div>
                <span v-for="(ps, index) in item.permissions" :key="index">
                  <span>{{ ps.name }}, </span>
                </span>
              </div>
            </template>

            <template v-slot:item.actions="{ item }">
              <!--  <v-icon small class="mr-2"> mdi-key </v-icon> -->
              <v-icon small class="mr-2" @click="OpenModalEdit(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
            </template>
            <template v-slot:item.role="{ item }">
              <v-icon small class="mr-2" @click="openModalRole(item)">
                mdi-plus
              </v-icon>
              <v-icon small class="mr-2" @click="openModalUpdateRole(item)">
                mdi-key-remove
              </v-icon>
            </template>

            <template v-slot:item.permission="{ item }">
              <v-icon small class="mr-2" @click="openModalPermission(item)">
                mdi-plus
              </v-icon>
              <v-icon
                small
                class="mr-2"
                @click="openModalUpdatePermissoin(item)"
              >
                mdi-key-remove
              </v-icon>
            </template>
          </v-data-table>
          <br />
          <template>
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
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

    <!--Add Role -->
    <v-dialog v-model="roleDialog" max-width="720px">
      <v-card>
        <v-card-title>
          <span class="headline"
            >Add Role to
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    required
                    v-model="edit_user.roles"
                    :items="roles"
                    item-text="name"
                    item-value="name"
                    label="Role"
                    multiple
                    :rules="rulePermissionRole"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="roleDialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="AddRole"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Update Role -->
    <v-dialog v-model="updateRoleDialog" max-width="720px">
      <v-card>
        <v-card-title>
          <span class="headline"
            >Remove Role from
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    required
                    v-model="selectedRole"
                    :items="revokeRoles"
                    item-text="name"
                    item-value="name"
                    label="Role"
                    multiple
                    :rules="rulePermissionRole"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="updateRoleDialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="UpdateRole"
            >
              Remove
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Add Permission -->
    <v-dialog v-model="permissionDialog" max-width="720px">
      <v-card>
        <v-card-title>
          <span class="headline"
            >Add Permission to
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    required
                    v-model="edit_user.permissions"
                    :items="permissions"
                    item-text="name"
                    item-value="name"
                    label="Permission *"
                    multiple
                    :rules="rulePermission"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="permissionDialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="AddPermission"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!--Update Permission -->
    <v-dialog v-model="updatePermissionDialog" max-width="720px">
      <v-card>
        <v-card-title>
          <span class="headline"
            >Remove Permission from
            <span
              ><a>{{ edit_user.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-select
                    required
                    v-model="selectedPermission"
                    :items="revokes"
                    item-text="name"
                    item-value="name"
                    label="Permission"
                    multiple
                    :rules="rulePermission"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="updatePermissionDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="UpdatePermission"
            >
              Remove
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

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
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "User",
  data() {
    return {
      headers: [
        { text: "User Name", value: "name" },
        { text: "Phone", value: "phone", sortable: false },
        { text: "Email", value: "email", sortable: false },
        { text: "Role", value: "roles", sortable: false },
        { text: "Permission", value: "permissions", sortable: false },
        {
          text: "Role", value: "role", sortable: false, align: "center",},
        {
          text: "Permission",
          value: "permission",
          sortable: false,
          align: "center",
        },
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
      errormsg: "",
      roleDialog: false,
      updateRoleDialog: false,
      selectedRole: "",
      roles: [],
      revokeRoles: [],
      permissionDialog: false,
      updatePermissionDialog: false,
      selectedPermission: "",
      permissions: [],
      revokes: [],
      
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 12,
      search: "",
      oldVal: "",

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
      rulePermission: [(v) => !!v || "Permission is required"],
      rulePermissionRole: [(v) => !!v || "Role is required"],
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
        .get("user-setting/user", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              // this.users = res.data.data;
              this.users = res.data.data.data;
              console.log(this.users);
              this.pagination = res.data.data.pagination;
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
    fetchRole() {
      //Role
      var roles = [];
      this.$axios
        .get("user-setting/role")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.roles = res.data.data;
              this.edit_user.roles.map((item) => {
                roles.push(item.name);
              });
              this.revokeRoles = res.data.data.filter((item) =>
                roles.includes(item.name)
              );
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
    fetchPermission() {
      var permissions = [];
      //Permission
      this.$axios
        .get("user-setting/permission")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.permissions = res.data.data;
              this.edit_user.permissions.map((item) => {
                permissions.push(item.name);
              });
              this.revokes = res.data.data.filter((item) =>
                permissions.includes(item.name)
              );
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
    //Permission
    openModalRole(item) {
      this.userID = item.id;
      this.edit_user = item;
      this.fetchRole();
      this.roleDialog = true;
    },
    AddRole() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        // this.roles = this.edit_user.roles;
        this.$axios
          .post("user-setting/user/" + this.userID + "/give-role", {
            roles: this.edit_user.roles,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.selectedRole = "";
                this.fetchData();
                this.reset();
                this.roleDialog = false;
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code == 422) {
              this.errormsg = error.response.data.message;
            }
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
          });
        this.loading = false;
      }
    },
    openModalUpdateRole(item) {
      this.userID = item.id;
      this.edit_user = item;
      this.fetchRole();
      this.updateRoleDialog = true;
    },
    //Update Role
    UpdateRole() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        // this.roles = this.edit_user.roles;
        this.$axios
          .post("user-setting/user/" + this.userID + "/revoke-role", {
            roles: this.selectedRole,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.selectedRole = "";
                this.fetchData();
                this.reset();
                this.updateRoleDialog = false;
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code == 422) {
              this.errormsg = error.response.data.message;
            }
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
          });
        this.loading = false;
        this.updateRoleDialog = false;
      }
    },
    // Permission
    openModalPermission(item) {
      this.userID = item.id;
      this.edit_user = item;
      this.fetchPermission();
      this.permissionDialog = true;
    },
    AddPermission() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        // this.roles = this.edit_user.roles;
        this.$axios
          .post("user-setting/user/" + this.userID + "/give-permission", {
            permissions: this.edit_user.permissions,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                // this.selectedPermission = "";
                this.fetchData();
                this.reset();
                this.permissionDialog = false;
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code == 422) {
              this.errormsg = error.response.data.message;
            }
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
          });
        this.loading = false;
        this.permissionDialog = false;
      }
    },

    openModalUpdatePermissoin(item) {
      this.userID = item.id;
      this.edit_user = item;
      this.fetchPermission();
      this.updatePermissionDialog = true;
    },
    //Update Role
    UpdatePermission() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        // this.roles = this.edit_user.roles;
        this.$axios
          .post("user-setting/user/" + this.userID + "/revoke-permission", {
            permissions: this.selectedPermission,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.fetchData();
                this.reset();
                this.updatePermissionDialog = false;
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code == 422) {
              this.errormsg = error.response.data.message;
            }
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
          });
        this.loading = false;
        this.updatePermissionDialog = false;
      }
    },

    reset() {
      this.$refs.form.reset();
    },
    Search() {
      GetOldValueOnInput(this);
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
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
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
