<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
          class="btn-primary"
          @click="openAddModal()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title>
            ຂໍ້ມູນ Roles
            <v-divider
              class="mx-4"
              vertical
            />
            <v-spacer />
            <v-text-field
              v-model="search"
              clearable
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            />
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="roles"
            :search="search"
            :disable-pagination="true"
            expand
            hide-default-footer
          >
            <!--   <template v-slot:item.created_at="{ item }">
              {{ moment(item.create_at).format("DD-MM-YYYY") }}

            </template>-->
            <!--Permission -->
            <template v-slot:item.name="{ item }">
              <div class="d-flex align-middle">
                <v-icon
                  v-if="item.role_type && item.role_type.type == 'notify'"
                  x-small=""
                >
                  mdi-email
                </v-icon>
                <p>{{ item.name }}</p>
              </div>
            </template>

            <template v-slot:item.permissions="{ item }">
              <div>
                <span
                  v-for="(ps, index) in item.permissions"
                  :key="index"
                >
                  <v-chip
                    label
                    color="success"
                    class="mr-1 my-1"
                  >{{
                    ps.name
                  }}</v-chip>
                </span>
              </div>
            </template>
            <!--Role -->
            <template v-slot:item.actions="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    medium
                    class="mr-2"
                    v-on="on"
                  >
                    mdi-dots-vertical
                  </v-icon>
                </template>
                <v-list>
                  <v-list-item
                    link
                    @click="openModalPermissionRole(item)"
                  >
                    <v-list-item-title>
                      <v-icon
                        medium
                        class="mr-2"
                      >
                        mdi-plus
                      </v-icon>
                      ເພີ່ມ Permission
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    link
                    @click="openModalUpdatePermissionRole(item)"
                  >
                    <v-list-item-title>
                      <v-icon
                        small
                        class="mr-2"
                      >
                        mdi-key-remove
                      </v-icon>
                      ຖອນ Permission
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    link
                    @click="OpenModalEdit(item)"
                  >
                    <v-list-item-title>
                      <v-icon
                        small
                        class="mr-2"
                      >
                        mdi-pencil
                      </v-icon>ແກ້ໄຂ
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item
                    link
                    @click="deleteItem(item.id)"
                  >
                    <v-list-item-title>
                      <v-icon small>
                        mdi-delete
                      </v-icon>
                      ລຶບ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
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
            <span class="headline">Add Role</span>
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
                      v-model="role"
                      label="Name *"
                      required
                      :rules="nameRules"
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
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

    <!--Edit Modal-->

    <ModalEdit>
      <template
        v-slot=""
        @close="close"
      >
        <v-card>
          <v-card-title>
            <span
              class="headline"
            >Update Role
              <span><a>{{ edit_role.name }}</a></span></span>
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
                      v-model="edit_role.name"
                      label="Name *"
                      required
                      :rules="nameRules"
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="closeUpdateModal()"
              >
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
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="closeDelete"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteItemConfirm"
          >
            OK
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </template>
    </ModalDelete>

    <!--Add Permission to Role -->
    <v-dialog
      v-model="roleDialog"
      max-width="720px"
      persistent
    >
      <v-card>
        <v-card-title>
          <span
            class="headline"
          >Add Permission to Role
            <span><a>{{ edit_role.name }}</a></span></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="form"
              lazy-validation
            >
              <v-row>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="selectedPermission"
                    required
                    :items="permissions"
                    item-text="name"
                    item-value="name"
                    label="Permission *"
                    multiple
                    :rules="rulePermission"
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        color="success"
                        @click="data.select"
                      >
                        {{ data.item.name }}
                      </v-chip>
                    </template>
                  </v-autocomplete>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue darken-1"
              text
              @click="roleDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="AddPermissionRole"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!--Update Permission Role -->
    <v-dialog
      v-model="updateRoleDialog"
      max-width="720px"
      persistent
    >
      <v-card>
        <v-card-title>
          <span
            class="headline"
          >Remove Permission from role
            <span><a>{{ edit_role.name }}</a></span></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="form"
              lazy-validation
            >
              <v-row>
                <v-col cols="12">
                  <v-select
                    v-model="selectRevokePermission"
                    required
                    :items="revokes"
                    item-text="name"
                    item-value="name"
                    label="Permission"
                    multiple
                    :rules="rulePermission"
                  />
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue darken-1"
              text
              @click="updateRoleDialog = false"
            >
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="updatePermissionRole"
            >
              Remove
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';

export default {
  name: 'Package',
  data() {
    return {
      headers: [
        { text: 'Role Name', value: 'name' },
        { text: 'Permission', value: 'permissions' },
        // { text: "Created", value: "created_at", sortable: false },
        {
          text: '', value: 'actions', sortable: false, align: 'center',
        },
      ],
      loading: false,
      roleDialog: false,
      updateRoleDialog: false,
      roles: [],
      role: '',
      edit_role: {},
      roleID: '',
      server_errors: {},
      errormsg: '',
      selectedPermission: '',
      selectRevokePermission: '',
      permissions: [],
      edit_permission: {},
      revokes: [],
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // Validation
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      rulePermission: [(v) => !!v || 'Permission is required'],
    };
  },
  watch: {
    role() {
      this.server_errors.name = '';
    },
    'edit_role.name': function () {
      this.server_errors.name = '';
    },
    selectedPermission() {
      this.errormsg = '';
    },
    'edit_role.permissions': function () {
      this.errormsg = '';
    },
    search(value) {
      if (value == '') {
        this.fetchData();
      }
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    openAddModal() {
      this.$store.commit('modalAdd_State', true);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('user-setting/role', { name: this.role })
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit('Loading_State', false);
              this.closeAddModal();
              this.role = '';
              this.fetchData();
              this.reset();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }
          })
          .catch((error) => {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              const errMsg = {};
              for (const [key, customer] of Object.entries(obj)) {
                errMsg[key] = customer[0];
              }
              this.server_errors = errMsg;
            }
          });
      }
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('user-setting/role', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.roles = res.data.data.data;
            this.pagination = res.data.data.pagination;
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchPermission() {
      // Permission
      const permissions = [];
      this.$axios
        .get('user-setting/permission')
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.permissions = res.data.data;
            this.edit_role.permissions.map((item) => {
              permissions.push(item.name);
              this.selectedPermission = permissions;
            });
            this.revokes = res.data.data.filter((item) => permissions.includes(item.name));
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },
    OpenModalEdit(item) {
      this.edit_role = item;
      this.$store.commit('modalEdit_State', true);
    },
    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .put(`user-setting/role/${this.edit_role.id}`, this.edit_role)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeUpdateModal();
                this.edit_user = {};
                this.reset();
                this.fetchData();
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
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            this.fetchData();
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },
    closeUpdateModal() {
      this.$store.commit('modalEdit_State', false);
    },

    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },

    deleteItem(id) {
      this.roleID = id;
      this.$store.commit('modalDelete_State', true);
    },

    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`user-setting/role/${this.roleID}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('modalDelete_State', false);
              this.fetchData();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.fetchData();
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
    openModalPermissionRole(item) {
      this.edit_role = item;
      this.fetchPermission();
      this.roleDialog = true;
    },
    AddPermissionRole() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`user-setting/role/${this.edit_role.id}/give-permission`, {
            permissions: this.selectedPermission,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.fetchData();
                this.selectedPermission = '';
                this.reset();
                this.roleDialog = false;
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code == 422) {
              this.errormsg = error.response.data.message;
            }
            this.fetchData();
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
          });
        this.$store.commit('Loading_State', false);
      }
    },
    openModalUpdatePermissionRole(item) {
      this.edit_role = item;
      this.fetchPermission();
      this.updateRoleDialog = true;
    },
    updatePermissionRole() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(
            `user-setting/role/${this.edit_role.id}/revoke-permission`,
            {
              permissions: this.selectRevokePermission,
            },
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.selectRevokePermission = '';
                this.fetchData();
                this.reset();
                this.updateRoleDialog = false;
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.data.code == 422) {
              this.errormsg = error.response.data.message;
            }
            this.fetchData();
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
          });
        this.updateRoleDialog = false;
      }
    },
    removeItem(item) {
      const index = this.selectedPermission.indexOf(item.id);
      if (index >= 0) this.selectedPermission.splice(index, 1);
    },
    reset() {
      this.$refs.form.reset();
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
