<template>
  <v-container>
    <v-col justify="center" class="mt-n6">
      <v-card-title>
        ຂໍ້ມູນປະເພດລົດ
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>

        <v-btn
          class="text-right ml-6"
          color="info"
          medium
          @click="OpenModalAdd()"
          ><v-icon color>mdi-plus</v-icon>
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="vehicle_type"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <template v-slot:[`item.created_at`]="{ item }">
          <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm") }}</div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small color="green" class="mr-2" @click="OpenModalEdit(item)">
            mdi-pencil
          </v-icon>
          <v-icon small color="red" @click="deleteItem(item.id)">
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
        ></Pagination>
      </template>
    </v-col>

    <!-- Modal Add-->
    <v-dialog v-model="addSizeDialog" max-width="720px">
      <template>
        <v-card>
          <v-card-title>
            <p>ເພີ່ມປະເພດລົດ</p>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="name"
                      label="Name*"
                      required
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
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
    </v-dialog>

    <!--Edit Modal-->

    <v-dialog v-model="editSizeDialog" max-width="720px">
      <template>
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂຂໍ້ມູນປະເພດລົດ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editVehicle_Type.name"
                      label="Name*"
                      required
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdate()">
                ຍົກເລີກ
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="updateItem()"
              >
                ແກ້ໄຂ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

    <!--Delete Modal-->
    <v-dialog v-model="deleteSizeDialog" max-width="420px">
      <template>
        <v-card>
          <v-card-text class="pt-8">
            <h3 align="center" class="py-2">ຕ້ອງການລົບຂໍ້ມູນນີ້ບໍ່ ?</h3>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-0" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="DeleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "PackageType",
  data() {
    return {
      search: "",
      vehicle_type: [],
      name: "",
      loading: false,
      addSizeDialog: false,
      editSizeDialog: false,
      deleteSizeDialog: false,
      vehicle_type_id: "",

      editVehicle_Type: {},

      server_errors: {},

      //pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      //validation
      nameRules: [(v) => !!v || "Name is required"],
      headers: [
        { text: "ປະເພດ", value: "name" },
        { text: "Created", value: "created_at" },

        { text: "actions", value: "actions" },
      ],
    };
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
        (this.editVehicle_Type = {}),
        this.fetchData(),
        (this.editSizeDialog = false);
    },

    OpenModalEdit(item) {
      this.editVehicle_Type = item;
      this.editSizeDialog = true;
    },

    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .put("vehicle_type/" + this.editVehicle_Type.id, {
            name: this.editVehicle_Type.name,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeUpdate();
                this.editVehicle_Type = {};
                this.reset();
                this.fetchData();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 100);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            if (error.response && error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
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
      this.vehicle_type_id = id;
      this.deleteSizeDialog = true;
    },

    DeleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("vehicle_type/" + this.vehicle_type_id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.closeDelete();
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.fetchData();
            }, 100);
          }
        })
        .catch(() => {
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },

    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("vehicle_type", { name: this.name })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
                this.fetchData();
                this.reset();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response ? error.response.data.message : 'Something went wrong',
              });
            if (error.response && error.response.status == 422) {
              var obj = error.response.data.error;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },

    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("vehicle_type", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
              this.$store.commit("Loading_State", false);
              this.vehicle_type = res.data.data.data;
              this.pagination = res.data.data.pagination;
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          if (error.response && error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
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
