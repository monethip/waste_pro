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
      <v-col>
        <v-menu
          v-model="start_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="start_date"
              label="ເລີ່ມວັນທີ"
              readonly
              outlined
              v-bind="attrs"
              dense
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="start_date"
            @input="fetchData()"
          />
        </v-menu>
      </v-col>
      <v-col>
        <v-menu
          v-model="end_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_date"
              label="ຫາວັນທີ"
              readonly
              outlined
              v-bind="attrs"
              dense
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="end_date"
            @input="fetchData()"
          />
        </v-menu>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedStatus"
          outlined
          dense
          :items="statuses"
          item-text="name"
          item-value="name"
          label="ສະຖານະ"
        />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title>
            ຂໍ້ມູນພະນັກງານຂັບລົດ ({{ pagination.total }})
            <v-divider
              class="mx-4"
              vertical
            />
            <v-spacer />
            <!--
            <v-select
              outlined
              dense
              :items="statuses"
              v-model="selectedStatus"
              item-text="name"
              item-value="name"
              label="ສະຖານະ"
            ></v-select>
            <v-spacer></v-spacer>
                        -->
            <v-text-field
              v-model="search"
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
            <template v-slot:item.vehicle="{ item }">
              <div v-if="item.vehicle">
                {{ item.vehicle.car_id }} ({{ item.vehicle.car_number }})
              </div>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip
                label
                :color="statusColor(item.status)"
                @click="switchStatus(item.id)"
              >
                {{ item.status }}
              </v-chip>
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
            <p>ເພີ່ມພະນັກງານຂັບລົດ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col>
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
                            >
                              Choose Profile
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    v-if="imageUrl"
                    class="mt-5"
                  >
                    <v-avatar
                      class="avatar rounded"
                      size="94px"
                    >
                      <img
                        :src="imageUrl"
                        alt=""
                      >
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.card_id"
                      label="ID *"
                      required
                      :rules="idRules"
                    />
                    <p class="errors">
                      {{ server_errors.card_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
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
                  <v-col cols="6">
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
                  <v-col cols="6">
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
                  <v-col cols="6">
                    <v-text-field
                      v-model="user.email"
                      label="Email"
                    />
                    <p class="errors">
                      {{ server_errors.email }}
                    </p>
                  </v-col>

                  <v-col cols="12">
                    <v-autocomplete
                      v-model="selectedVehicle"
                      :items="vehicles"
                      :item-text="getVehicle"
                      item-value="id"
                      label="ເລືອກລົດ"
                      dense
                      :rules="vehicleRules"
                    />
                    <p class="errors">
                      {{ server_errors.vehicle_id }}
                    </p>
                  </v-col>

                  <v-col cols="6">
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
                  <v-col cols="6">
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
        v-slot=""
        @close="close"
      >
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂພະນັກງານຂັບລົດ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col>
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
                            >
                              Choose Profile
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    v-if="imageUrl"
                    class="mt-5"
                  >
                    <v-avatar
                      class="avatar rounded"
                      size="94px"
                    >
                      <img
                        :src="imageUrl"
                        alt=""
                      >
                    </v-avatar>
                  </v-col>
                  <v-col
                    v-else
                    class="mt-5"
                  >
                    <v-avatar
                      v-for="(item, index) in edit_driver.media"
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
                      v-model="edit_driver.card_id"
                      label="ID *"
                      required
                      :rules="idRules"
                    />
                    <p class="errors">
                      {{ server_errors.card_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      v-model="edit_driver.name"
                      label="Name *"
                      required
                      :rules="nameRules"
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="edit_driver.surname"
                      label="Surname *"
                      required
                      :rules="nameRules"
                    />
                    <p class="errors">
                      {{ server_errors.surname }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-if="edit_driver.user"
                      v-model="edit_driver.user.phone"
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
                  <v-col cols="6">
                    <v-text-field
                      v-if="edit_driver.user"
                      v-model="edit_driver.user.email"
                      label="Email *"
                    />
                    <p class="errors">
                      {{ server_errors.email }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-autocomplete
                      v-model="edit_driver.vehicle_id"
                      :items="vehicle"
                      :item-text="getVehicle"
                      item-value="id"
                      label="ເລືອກລົດ"
                      dense
                      :rules="vehicleRules"
                    />
                    <p class="errors">
                      {{ server_errors.vehicle_id }}
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
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'User',
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: 'Driver',
      start_date: '',
      end_date: '',
      start_menu: false,
      end_menu: false,
      headers: [
        { text: 'ID', value: 'card_id' },
        { text: 'ຊື່', value: 'name' },
        { text: 'ນາມສະກຸນ', value: 'surname' },
        { text: 'ທະບຽນລົດ', value: 'vehicle' },
        { text: 'ເບີໂທ', value: 'user.phone', sortable: false },
        { text: 'Email', value: 'user.email', sortable: false },
        { text: 'Status', value: 'status', sortable: false },
        { text: 'Team', value: 'team.name', sortable: false },
        { text: 'Profile', value: 'media', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
      loading: false,
      status: false,
      data: [],
      user: {
        email: '',
      },
      edit_driver: {},
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
      vehicles: [],
      selectedVehicle: '',
      selectedStatus: '',
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
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      passwordConfirmRules: [
        (v) => !!v || 'Password Confirm is required',
        (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      idRules: [
        (v) => !!v || 'Id is required',
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      vehicleRules: [(v) => !!v || 'Vehicle is required'],
      phoneRules: [
        (v) => !!v || 'Phone is required',
        (v) => (v && v.length >= 4 && v.length <= 11)
          || 'Phone number must be  4 - 11 numbers',
      ],
      carnumberRules: [
        (v) => !!v || 'Car number is required',
        (v) => (v && v.length == 4) || 'Car number must be 4 number',
        (v) => Number.isInteger(Number(v)) || 'The value must be an integer number',
      ],
    };
  },
  watch: {
    selectedStatus() {
      this.fetchData();
    },
    selectedVehicle(value) {
      this.server_errors.vehicle_id = '';
      if (value) {
        this.getVehicle(value);
      }
    },
    'edit_driver.vehicle_id': function (value) {
      this.server_errors.vehicle_id = '';
      if (value) {
        this.getVehicle(value);
      }
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
    'user.email': function () {
      this.server_errors.email = '';
    },
    'user.vehicle_id': function () {
      this.server_errors.vehicle_id = '';
    },
    'user.password': function () {
      this.server_errors.password = '';
    },
    'edit_driver.name': function () {
      this.server_errors.name = '';
    },
    'edit_driver.surname': function () {
      this.server_errors.surname = '';
    },
    'edit_driver.user.phone': function () {
      this.server_errors.phone = '';
    },
    'edit_driver.user.email': function () {
      this.server_errors.email = '';
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
    fetchVehicle() {
      this.$axios
        .get('vehicle')
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.vehicle = res.data.data;
              this.vehicle.filter((item) => {
                if (item.driver == null || item.driver == '') {
                  this.vehicles.push(item);
                }
              });
            }, 300);
          }
        })
        .catch({});
    },
    onFileChange(e) {
      const input = e.target;
      const file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    openAddModal() {
      this.fetchVehicle();
      this.$store.commit('modalAdd_State', true);
    },
    AddItem() {
      const formData = new FormData();
      formData.append('card_id', this.user.card_id);
      formData.append('name', this.user.name);
      formData.append('surname', this.user.surname);
      formData.append('phone', this.user.phone);
      if (this.user.email) formData.append('email', this.user.email);
      formData.append('vehicle_id', this.selectedVehicle);
      formData.append('image', this.image);
      formData.append('password', this.user.password);
      formData.append('password_confirmation', this.user.password_confirmation);
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('driver', formData, {
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
        .get('driver', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { date_from: this.start_date },
            { date_end: this.end_date },
            { status: this.selectedStatus },
          ]),
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
      this.edit_driver = item;
      this.fetchVehicle();
      this.$store.commit('modalEdit_State', true);
    },
    updateItem() {
      if (this.edit_driver.user.email == null) {
        this.edit_driver.user.email = '';
      }
      const formData = new FormData();
      formData.append('name', this.edit_driver.name);
      formData.append('card_id', this.edit_driver.card_id);
      formData.append('surname', this.edit_driver.surname);
      formData.append('phone', this.edit_driver.user.phone);
      formData.append('email', this.edit_driver.user.email);
      formData.append('vehicle_id', this.edit_driver.vehicle_id);
      formData.append('image', this.image);
      formData.append('_method', 'PUT');

      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`driver/${this.edit_driver.id}`, formData, {
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
              msg: error.response ? error.response.data.message : 'Something went wrong',
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
        .delete(`driver/${this.userID}`)
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
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
    switchStatus(id) {
      this.$store.commit('Loading_State', true);
      this.$axios
        .post(`driver/${id}/switch-status`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
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
        });
    },
    statusColor(value) {
      if (value == 'active') {
        return 'primary';
      } if (value == 'inactive') return 'error';
      return 'info';
    },

    reset() {
      this.$refs.form.reset();
    },
    getVehicle(value) {
      if (value !== null) {
        return `${value.car_id} ` + `(${value.car_number})`;
      }
      return '(ຍັງບໍທັນມີລົດ)';
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
