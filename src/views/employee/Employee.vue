<template>
  <v-container>
    <v-row class="mb-n6">
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
            ຂໍ້ມູນແອກລົດ ({{ pagination.total }})
            <v-divider
              class="mx-4"
              vertical
            />
            <v-spacer />

            <v-checkbox
              v-model="has_team_member"
              class="my-auto"
            >
              <template v-slot:label>
                <div>ມີທີມ</div>
              </template>
            </v-checkbox>
            <v-spacer />

            <v-text-field
              v-model="search"
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              @keyup.enter="Search()"
            />
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="data"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.media="{ item }">
              <v-avatar
                v-for="(img, index) in item.media"
                :key="index"
                size="36px"
              >
                <img
                  v-if="img.url"
                  :src="img.url"
                >
              </v-avatar>
            </template>
            <template v-slot:item.actions="{ item }">
              <!--  <v-icon small class="mr-2"> mdi-key </v-icon> -->
              <v-icon
                small
                class="mr-2"
                @click="OpenModalEdit(item)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item.id)"
              >
                mdi-delete
              </v-icon>
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
            <p>ເພີ່ມແອກລົດ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col align="center">
                    <div class="field">
                      <div class="file is-large is-boxed">
                        <label class="file-label">
                          <input
                            ref="image"
                            class="file-input input-file-image"
                            type="file"
                            name="image"
                            accept="image/*"
                            @change="onFileChange"
                          >
                          <span class="file-cta">
                            <span class="file-icon">
                              <v-icon
                                style="
                                  font-size: 60px !important;
                                  color: #719aff;
                                  cursor: pointer;
                                "
                                class="fas fa-cloud-upload"
                              >mdi-cloud-upload</v-icon>
                            </span>
                            <span
                              class="file-label"
                              style="
                                margin-top: 10px;
                                text-transform: uppercase;
                                padding-top: 20px;
                              "
                            >Choose Profile</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    v-if="imageUrl"
                    align="center"
                    class="mt-5"
                  >
                    <v-avatar
                      class="avatar rounded"
                      size="94px"
                    >
                      <img
                        :src="imageUrl"
                        alt
                      >
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.card_id"
                      label="Card Id *"
                      required
                    />
                    <p class="errors">
                      {{ server_errors.card_id }}
                    </p>
                  </v-col>
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
                      v-model="user.surname"
                      label="Surname *"
                      required
                      :rules="nameRules"
                    />
                    <p class="errors">
                      {{ server_errors.surname }}
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
                    <p class="errors">
                      {{ server_errors.phone }}
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
                ຍົກເລີກ
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="AddItem()"
              >
                ບັນທຶກ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <!--Edit Modal-->
    <ModalEdit>
      <template
        v-slot
        @close="close"
      >
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂແອກລົດ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col align="center">
                    <div class="field">
                      <div class="file is-large is-boxed">
                        <label class="file-label">
                          <input
                            class="file-input input-file-image"
                            type="file"
                            accept="image/*"
                            @change="onFileChange"
                          >
                          <span class="file-cta">
                            <span class="file-icon">
                              <v-icon
                                style="
                                  font-size: 60px !important;
                                  color: #719aff;
                                  cursor: pointer;
                                "
                                class="fas fa-cloud-upload"
                              >mdi-cloud-upload</v-icon>
                            </span>
                            <span
                              class="file-label"
                              style="
                                margin-top: 10px;
                                text-transform: uppercase;
                                padding-top: 20px;
                              "
                            >Choose Profile</span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    v-if="imageUrl"
                    align="center"
                    class="mt-5"
                  >
                    <v-avatar
                      class="avatar rounded"
                      size="94px"
                    >
                      <img
                        :src="imageUrl"
                        alt
                      >
                    </v-avatar>
                  </v-col>
                  <v-col
                    v-else
                    align="center"
                    class="mt-5"
                  >
                    <v-avatar
                      v-for="(item, index) in edit_user.media"
                      :key="index"
                      class="avatar rounded mr-6"
                      size="94px"
                    >
                      <img :src="item.url">
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="edit_user.card_id"
                      label="Card Id *"
                      required
                    />
                    <p class="errors">
                      {{ server_errors.card_id }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="edit_user.name"
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
                      v-model="edit_user.surname"
                      label="Surname *"
                      required
                      :rules="nameRules"
                    />
                    <p class="errors">
                      {{ server_errors.surname }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="edit_user.phone"
                      label="ເບີໂທ *"
                      required
                      :rules="phoneRules"
                      type="number"
                      class="input-number"
                    />
                    <p class="errors">
                      {{ server_errors.phone }}
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
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';

export default {
  name: 'User',
  title() {
    return `Vientiane Waste Co-Dev|Employee`;
  },
  data() {
    return {
      headers: [
        { text: 'ລະຫັດ', value: 'card_id' },
        { text: 'ຊື່', value: 'name' },
        { text: 'ນາມສະກຸນ', value: 'surname' },
        { text: 'ເບີໂທ', value: 'phone', sortable: false },
        { text: 'Profile', value: 'media', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
      loading: false,
      status: false,
      data: [],
      user: {},
      edit_user: {},
      userID: '',
      server_errors: {
        email: '',
        roleId: '',
      },
      errormsg: '',
      image: '',
      imageUrl: '',

      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      vehicle: [],
      selectedVehicle: '',
      has_team_member: false,
      statuses: [
        {
          id: 1,
          name: 'active',
        },
        {
          id: 1,
          name: 'inactive',
        },
      ],
      // Validation
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      phoneRules: [
        (v) => !!v || 'Phone is required',
        (v) => (v && v.length >= 6 && v.length <= 8)
          || 'Phone number must be  6 - 8 numbers',
      ],
    };
  },
  watch: {
    selectedStatus() {
      this.fetchData();
    },
    'user.card_id': function () {
      this.server_errors.card_id = '';
    },
    'user.name': function () {
      this.server_errors.name = '';
    },
    'user.surname': function () {
      this.server_errors.surname = '';
    },
    'user.phone': function () {
      this.server_errors.phone = '';
    },
    'edit_user.name': function () {
      this.server_errors.name = '';
    },
    'edit_user.surname': function () {
      this.server_errors.surname = '';
    },
    'edit_user.phone': function () {
      this.server_errors.phone = '';
    },
    has_team_member() {
      this.fetchData();
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
    onFileChange(e) {
      const input = e.target;
      const file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    openAddModal() {
      this.$store.commit('modalAdd_State', true);
    },
    AddItem() {
      const formData = new FormData();
      formData.append('card_id', this.user.card_id);
      formData.append('name', this.user.name);
      formData.append('surname', this.user.surname);
      formData.append('phone', this.user.phone);
      formData.append('image', this.image);
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('employee', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeAddModal();
                this.user = {};
                this.imageUrl = '';
                this.imageUrl = '';
                this.fetchData();
                this.reset();
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
        .get('employee', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
            has_team_member: this.has_team_member,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Loading_State', false);
            this.data = res.data.data.data;
            this.pagination = res.data.data.pagination;
            this.data.map((item) => {
              if (item.status == 'active') {
                this.status = true;
              } else {
                this.status = false;
              }
            });
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
      this.edit_user = item;
      this.$store.commit('modalEdit_State', true);
    },
    updateItem() {
      const formData = new FormData();
      formData.append('card_id', this.user.card_id);
      formData.append('name', this.edit_user.name);
      formData.append('surname', this.edit_user.surname);
      formData.append('phone', this.edit_user.phone);
      formData.append('image', this.image);
      formData.append('_method', 'PUT');
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`employee/${this.edit_user.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeUpdateModal();
                this.imageUrl = '';
                this.imageUrl = '';
                this.fetchData();
                this.reset();
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
      this.userID = id;
      this.$store.commit('modalDelete_State', true);
    },

    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`employee/${this.userID}`)
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
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
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
