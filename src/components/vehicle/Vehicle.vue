<template>
  <v-container>
    <v-row class="mb-n6 text-right">
      <v-col>
        <v-card-title>
          ຂໍ້ມູນລົດ ({{ pagination.total }})
          <v-spacer />
          <v-btn
            color="info"
            medium
            @click="OpenModalAdd()"
          >
            <v-icon color>
              mdi-plus
            </v-icon>
          </v-btn>
        </v-card-title>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table
          :headers="header"
          :items="data"
          hide-default-footer
          :items-per-page="100"
        >
          <template v-slot:[`item.created_at`]="{ item }">
            <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm") }}</div>
          </template>
          <template v-slot:[`item.action`]="{ item }">
            <v-icon
              small
              color="green"
              class="mr-2"
              @click="OpenModalEdit(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              color="red"
              @click="deleteItem(item.id)"
            >
              mdi-trash-can
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <Pagination
      v-if="pagination.total_pages > 0"
      :pagination="pagination"
      :offset="offset"
      @paginate="fetchData()"
    />

    <!-- Add Modal -->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ເພີ່ມລົດ</p>
            <v-spacer />
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="vehicle.car_id"
                      label="ID *"
                      required
                      :rules="carIdRules"
                    />
                    <p class="errors">
                      {{ server_errors.car_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="vehicle.car_number"
                      label="ທະບຽນລົດ *"
                      :rules="numberRules"
                    />
                    <p class="errors">
                      {{ server_errors.car_number }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      v-model="selectedVehicleType"
                      :items="vehicleType"
                      item-text="name"
                      item-value="id"
                      label="ເລືອກປະເພດລົດ"
                      dense
                      :rules="typeRules"
                    />
                    <p class="errors">
                      {{ server_errors.vehicle_type_id }}
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
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂຂໍ້ມູນລົດ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editVehicle.car_id"
                      label="ID *"
                      required
                      :rules="carIdRules"
                    />
                    <p class="errors">
                      {{ server_errors.car_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editVehicle.car_number"
                      label="ທະບຽນລົດ *"
                      :rules="numberRules"
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      v-model="editVehicle.vehicle_type_id"
                      :items="vehicleType"
                      item-text="name"
                      item-value="id"
                      label="ເລືອກປະເພດລົດ"
                      dense
                      :rules="typeRules"
                    />
                    <p class="errors">
                      {{ server_errors.vehicle_type_id }}
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
                @click="closeUpdate()"
              >
                ຍົກເລີກ
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="UpdateItem()"
              >
                ບັນທຶກ
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
export default {
  data() {
    return {
      data: [],
      vehicle: {},
      editVehicle: {},
      vehicle_id: '',
      loading: false,
      selectedVehicleType: '',
      vehicleType: [],
      server_errors: {},
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      header: [
        { text: 'ID', value: 'car_id' },
        { text: 'ທະບຽນລົດ', value: 'car_number' },
        { text: 'ປະເພດລົດ', value: 'vehicle_type.name' },
        { text: 'ຜູ້ຮັບຜິດຊອບ', value: 'driver.name' },
        { text: 'Created', value: 'created_at' },
        { text: 'Actions', value: 'action' },
      ],
      numberRules: [(v) => !!v || 'Car Number is required'],
      carIdRules: [(v) => !!v || 'Car Id is required'],
      typeRules: [(v) => !!v || 'Vehicle Type is required'],
    };
  },
  watch: {
    selectedVehicleType() {
      this.server_errors.vehicle_type_id = '';
    },
    'vehicle.car_number': function () {
      this.server_errors.car_number = '';
    },
    'vehicle.car_id': function () {
      this.server_errors.car_id = '';
    },
  },
  created() {
    this.fetchData();
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    OpenModalAdd() {
      this.$store.commit('modalAdd_State', true);
      this.fetchVehicleType();
    },
    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.vehicle.vehicle_type_id = this.selectedVehicleType;
        this.$axios
          .post('vehicle', this.vehicle)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
                this.closeAddModal();
                this.fetchData();
                this.reset();
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

    closeUpdate() {
      this.reset(),
      (this.editVehicle = {}),
      this.fetchData(),
      this.$store.commit('modalEdit_State', false);
    },

    OpenModalEdit(item) {
      this.fetchVehicleType();
      this.editVehicle = item;
      this.$store.commit('modalEdit_State', true);
    },

    UpdateItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .put(`vehicle/${this.editVehicle.id}`, {
            car_number: this.editVehicle.car_number,
            car_id: this.editVehicle.car_id,
            vehicle_type_id: this.editVehicle.vehicle_type_id,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeUpdate();
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
    deleteItem(id) {
      this.vehicle_id = id;
      this.$store.commit('modalDelete_State', true);
    },
    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`vehicle/${this.vehicle_id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.closeDelete();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.fetchData();
            }, 100);
          }
        })
        .catch(() => {
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },

    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('vehicle', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.data = res.data.data.data;
            this.pagination = res.data.data.pagination;
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.respones.status == 422) {
            const obj = error.respones.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    fetchVehicleType() {
      this.$axios
        .get('vehicle_type')
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.vehicleType = res.data.data;
            }, 100);
          }
        })
        .catch(() => { });
    },
  },
};
</script>
<style lang="scss">

</style>
