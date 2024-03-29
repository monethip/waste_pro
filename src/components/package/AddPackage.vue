<template>
  <v-container>
    <v-row class="mb-n6 text-right">
      <v-col>
        <v-card-title>
          ຂໍ້ມູນປະເພດບໍລິການ
          <v-spacer />
          <v-btn
            color="info"
            medium
            @click="OpenModalAdd()"
          />
          <v-icon color>
            mdi-plus
          </v-icon>
        </v-card-title>
      </v-col>
    </v-row>
    <v-data-table
      :headers="header"
      :items="packages"
      :items-per-page="per_page"
      hide-default-footer
    >
      <template v-slot:[`item.is_public`]="{ item }">
        <v-switch
          v-model="item.is_public"
          @change="switchPublic(item.id)"
        />
      </template>

      <template v-slot:[`item.per_week`]="{ item}">
        <v-chip
          v-if="item.per_week"
          color="green"
          dark
        >
          {{ Intl.NumberFormat().format(item.per_week) }}
        </v-chip>
      </template>

      <template v-slot:[`item.customers_count`]="{ item }">
        <v-chip
          color="primary"
          outlined
        >
          {{
            Intl.NumberFormat().format(item.customers_count)
          }}
          ຄົວເຮືອນ
        </v-chip>
      </template>

      <template v-slot:[`item.updated_at`]="{ item }">
        <v-row>
          <div>{{ moment(item.updated_at).format("DD-MM-YY hh:mm:ss") }}</div>
          <v-icon
            :x-small="true"
            class="ml-1"
            color="primary"
          >
            mdi-clock-edit
          </v-icon>
        </v-row>
      </template>
      <template v-slot:[`item.created_at`]="{ item }">
        <v-row>
          <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm:ss") }}</div>
          <v-icon
            :x-small="true"
            class="ml-1"
            color="success"
          >
            mdi-clock-check
          </v-icon>
        </v-row>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon
          class="mr-2"
          color="green"
          small
          @click="OpenModalEdit(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          color="red"
          small
          @click="deleteItem(item.id)"
        >
          mdi-trash-can
        </v-icon>
      </template>
    </v-data-table>

    <template>
      <Pagination
        v-if="pagination.total_pages > 1"
        :offset="offset"
        :pagination="pagination"
        @paginate="fetchData()"
      />
    </template>

    <!-- Add Modal -->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ເພີ່ມຂໍ້ມູນປະເພດບໍລິການ</p>
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
                      v-model="addpackage.name"
                      :rules="nameRules"
                      label="ຊື່ບໍລິການ *"
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.price"
                      :rules="bagRules"
                      class="input-number"
                      label="ລາຄາ *"
                      required
                      type="number"
                    />
                    <p class="errors">
                      {{ server_errors.price }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      v-model="selectedPackageSize"
                      :items="packageSize"
                      :rules="ruleSize"
                      dense
                      item-text="size"
                      item-value="id"
                      label="ເລືອກຂະໜາດບໍລະການ"
                    />
                    <p class="errors">
                      {{ server_errors.package_size_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.per_week"
                      :rules="bagRules"
                      class="input-number"
                      label="ຂີ້ເຫຍື້ອຕໍ່ອາທິດ *"
                      required
                      type="number"
                    />
                    <p class="errors">
                      {{ server_errors.per_week }}
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
                :disabled="loading"
                :loading="loading"
                color="blue darken-1"
                text
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
            <span class="headline">ແກ້ໄຂຂໍ້ມູນບໍລິການ</span>
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
                      v-model="editPackage.name"
                      :rules="nameRules"
                      label="ຊື່ບໍລິການ *"
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackage.price"
                      :rules="bagRules"
                      class="input-number"
                      label="ລາຄາ *"
                      required
                      type="number"
                    />
                    <p class="errors">
                      {{ server_errors.price }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      v-model="editPackage.package_size_id"
                      :items="packageSize"
                      :rules="ruleSize"
                      dense
                      item-text="size"
                      item-value="id"
                      label="ເລືອກຂະໜາດປະເພດບໍລິການ"
                    />
                    <p class="errors">
                      {{ server_errors.package_size_id }}
                    </p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackage.per_week"
                      :rules="bagRules"
                      class="input-number"
                      label="ຂີ້ເຫຍື້ອຕໍ່ອາທິດ *"
                      required
                      type="number"
                    />
                    <p class="errors">
                      {{ server_errors.per_week }}
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
                :disabled="loading"
                :loading="loading"
                color="blue darken-1"
                text
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
            :disabled="loading"
            :loading="loading"
            color="blue darken-1"
            text
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
      packages: [],
      addpackage: {},
      editPackage: {},
      loading: false,
      selectedPackageSize: '',
      packageSize: [],
      pakage_id: '',
      server_errors: {},
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      header: [
        { text: 'ຊື່ບໍລິການ', value: 'name' },
        { text: 'ມູນຄ່າສັນຍາ', value: 'price' },
        { text: 'ຂະໜາດ', value: 'package_size.size', align: 'center' },
        { text: 'ຈຳນວນຖົງ', value: 'package_size.bag', align: 'center' },
        { text: 'ຈຳນວນຕໍ່ອາທິດ', value: 'per_week', align: 'center' },
        {
          text: 'ລູກຄ້າທີ່ກຳລັງໃຊ້ແພັກເກຈນີ້',
          value: 'customers_count',
        },
        { text: 'ສະແດງໃນແອັພ', value: 'is_public' },
        { text: 'ແກ້ໄຂລ່າສຸດ', value: 'updated_at', width: '200px' },
        { text: 'ວັນທີສ້າງ', value: 'created_at', width: '200px' },
        { text: 'Actions', value: 'action' },
      ],
      nameRules: [(v) => !!v || 'Package Name is required'],
      bagRules: [
        (v) => !!v || 'this value is required',
        (v) => Number.isInteger(Number(v)) || 'The value must be an integer number',
      ],
      ruleSize: [(v) => !!v || 'Package Size is required'],
    };
  },
  watch: {
    selectedPackageSize() {
      this.server_errors.package_size_id = '';
    },
    'addpackage.price': function () {
      this.server_errors.price = '';
    },
    'addpackage.name': function () {
      this.server_errors.name = '';
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
      this.fetchPackageSize();
    },
    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.addpackage.package_size_id = this.selectedPackageSize;
        this.$axios
          .post('package', this.addpackage)
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
    switchPublic(id) {
      this.$store.commit('Loading_State', true);
      this.$axios
        .post(`package-status/${id}`)
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
          if (error.response && error.response.status == 422) {
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response
                ? error.response.data.message
                : 'Something went wrong',
            });
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    closeUpdate() {
      this.reset(),
      (this.editPackage = {}),
      this.fetchData(),
      this.$store.commit('modalEdit_State', false);
    },

    OpenModalEdit(item) {
      this.fetchPackageSize();
      this.editPackage = item;
      this.$store.commit('modalEdit_State', true);
    },

    UpdateItem() {
      const formData = new FormData();
      formData.append('name', this.editPackage.name);
      formData.append('price', this.editPackage.price);
      formData.append('per_week', this.editPackage.per_week);
      formData.append('package_size_id', this.editPackage.package_size_id);
      formData.append('_method', 'PUT');
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`package/${this.editPackage.id}`, formData)
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
    deleteItem(id) {
      this.package_id = id;
      this.$store.commit('modalDelete_State', true);
    },
    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`package/${this.package_id}`)
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
        .get('package', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            order_by: 'current',
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.packages = res.data.data.data;
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

    fetchPackageSize() {
      this.$axios
        .get('package-size')
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.packageSize = res.data.data;
            }, 100);
          }
        })
        .catch(() => {
        });
    },
  },
};
</script>
<style lang="scss"></style>
