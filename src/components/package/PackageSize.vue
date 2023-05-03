<template>
  <v-container>
    <v-col
      justify="center"
      class="mt-n6"
    >
      <v-card-title>
        ຂໍ້ມູນຂະໜາດແພັກເກດ
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />

        <v-btn
          class="text-right ml-6"
          color="info"
          medium
          @click="OpenModalAdd()"
        >
          <v-icon color>
            mdi-plus
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="packagessize"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <template v-slot:[`item.created_at`]="{ item }">
          <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm") }}</div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            color="green"
            class="mr-2"
            @click="OpenModalEdit(item)"
          >
            mdi-account-edit
          </v-icon>
          <v-icon
            small
            color="red"
            @click="deleteItem(item.id)"
          >
            mdi-trash-can-outline
          </v-icon>
        </template>
      </v-data-table>
      <template>
        <Pagination
          v-if="pagination.total_pages > 1"
          :pagination="pagination"
          :offset="offset"
          @paginate="fetchData()"
        />
      </template>
    </v-col>

    <!-- Modal Add-->
    <v-dialog
      v-model="addSizeDialog"
      max-width="720px"
    >
      <template>
        <v-card>
          <v-card-title>
            <p>ເພີ່ມຂະໜາດແພັກເກດ</p>
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
                      v-model="addpackage.size"
                      label="ຂະໜາດ*"
                      required
                      :rules="sizeRules"
                    />
                    <p class="errors">
                      {{ server_errors.size }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.bag"
                      label="ຈຳນວນ*"
                      type="number"
                      class="input-number"
                      required
                      :rules="bagRules"
                    />
                    <p class="errors">
                      {{ server_errors.bag }}
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
    </v-dialog>

    <!--Edit Modal-->

    <v-dialog
      v-model="editSizeDialog"
      max-width="720px"
    >
      <template>
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂຂໍ້ມູນ Package</p>
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
                      v-model="editPackageSize.size"
                      label="ຂະໜາດ*"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackageSize.bag"
                      label="ຈຳນວນຖົງ*"
                      required
                      type="number"
                      class="input-number"
                    />
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
                @click="updateItem()"
              >
                ບັນທຶກ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

    <!--Delete Modal-->
    <v-dialog
      v-model="deleteSizeDialog"
      max-width="420px"
    >
      <template>
        <v-card>
          <v-card-text class="pt-8">
            <h3
              align="center"
              class="py-2"
            >
              ຕ້ອງການລົບຂໍ້ມູນນີ້ບໍ່ ?
            </h3>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-0"
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
                @click="DeleteItemConfirm"
              >
                OK
              </v-btn>
              <v-spacer />
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Package',
  data() {
    return {
      search: '',
      packagessize: [],
      addpackage: {},
      loading: false,
      addSizeDialog: false,
      editSizeDialog: false,
      deleteSizeDialog: false,

      PackageSize_id: '',
      editPackageSize: {},

      server_errors: {},

      // pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      // validation
      sizeRules: [(v) => !!v || 'Size is required'],
      bagRules: [
        (v) => !!v || 'Amount is required',
        (v) => Number.isInteger(Number(v)) || 'The value must be an integer number',
      ],

      headers: [
        { text: 'Size', value: 'size' },
        { text: 'ຈໍານວນ(ຖົງ)', value: 'bag' },
        { text: 'Created', value: 'created_at' },

        { text: 'actions', value: 'actions' },
      ],

      toast: {
        value: true,
        color: 'success',
        msg: 'Success',
      },
      toast_error: {
        value: true,
        color: 'error',
        msg: 'Something when wrong!',
      },
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    OpenModalAdd() {
      this.addSizeDialog = true;
    },

    closeAddModal() {
      this.addSizeDialog = false;
    },

    closeUpdate() {
      this.reset(),
      (this.editPackageSize = {}),
      this.fetchData(),
      (this.editSizeDialog = false);
    },

    OpenModalEdit(item) {
      this.editPackageSize = item;
      this.editSizeDialog = true;
    },

    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .put(`package-size/${this.editPackageSize.id}`, this.editPackageSize)
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit('Loading_State', false);
              this.closeUpdate();
              this.editPackageSize = {};
              this.reset();
              this.fetchData();
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

    closeDelete() {
      this.deleteSizeDialog = false;
    },

    deleteItem(id) {
      this.PackageSize_id = id;
      this.deleteSizeDialog = true;
    },

    DeleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`package-size/${this.PackageSize_id}`)
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

    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('package-size', this.addpackage)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeAddModal();
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
              const obj = error.response.data.error;
              for (const [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },

    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('package-size', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.packagessize = res.data.data.data;
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
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
