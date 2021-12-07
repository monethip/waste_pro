<template>
  <v-container>
    <v-row class="mb-n6 text-right">
      <v-col>
        <v-card-title>
          ຂໍ້ມູນແພັກເກດ
          <v-spacer></v-spacer>
          <v-btn color="info" medium @click="OpenModalAdd()"
            ><v-icon color>mdi-plus</v-icon>
          </v-btn>
        </v-card-title>
      </v-col>
    </v-row>
    <v-data-table :headers="header" :items="packages" hide-default-footer>
      <template v-slot:[`item.created_at`]="{ item }">
        <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm") }}</div>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon small color="green" class="mr-2" @click="OpenModalEdit(item)">
          mdi-account-edit
        </v-icon>
        <v-icon small color="red" @click="deleteItem(item.id)">
          mdi-trash-can
        </v-icon>
      </template>
    </v-data-table>

    <!-- Add Modal -->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ເພີ່ມແພັກເກດ</p>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.name"
                      label="Package Name *"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.price"
                      label="Price *"
                      type="number"
                      class="input-number"
                      required
                      :rules="bagRules"
                    ></v-text-field>
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
                      item-text="size"
                      item-value="id"
                      label="ເລືອກຂະໜາດແພັກເກດ"
                      dense
                      :rules="ruleSize"
                    ></v-autocomplete>
                    <p class="errors">
                      {{ server_errors.package_size_id }}
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
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Package</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackage.name"
                      label="Package Name *"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackage.price"
                      label="Price *"
                      type="number"
                      class="input-number"
                      required
                      :rules="bagRules"
                    ></v-text-field>
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
                      item-text="size"
                      item-value="id"
                      label="ເລືອກຂະໜາດແພັກເກດ"
                      dense
                      :rules="ruleSize"
                    ></v-autocomplete>
                    <p class="errors">
                      {{ server_errors.package_size_id }}
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
                @click="UpdateItem()"
              >
                ບັນທຶກ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>
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
      selectedPackageSize: "",
      packageSize: [],
      server_errors: {},
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 12,

      header: [
        { text: "ຊື່ແພັກເກດ", value: "name" },
        { text: "ລາຄາ", value: "price" },
        { text: "Created", value: "created_at" },
        { text: "Actions", value: "action" },
      ],
      nameRules: [(v) => !!v || "Package Name is required"],
      bagRules: [
        (v) => !!v || "Price is required",
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
      ],
      ruleSize: [(v) => !!v || "Package Size is required"],
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    OpenModalAdd() {
      this.$store.commit("modalAdd_State", true);
      this.fetchPackageSize();
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.addpackage.package_size_id = this.selectedPackageSize;
        this.$axios
          .post("package", this.addpackage)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
                this.closeAddModal();
                this.fetchData();
                this.reset();
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.fetchData();
            if (error.response.status == 422) {
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response.data.message,
              });
              var obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },

    closeUpdate() {
      this.reset(),
        (this.editPackage = {}),
        this.fetchData(),
        this.$store.commit("modalEdit_State", false);
    },

    OpenModalEdit(item) {
      this.fetchPackageSize();
      this.editPackage = item;
      this.$store.commit("modalEdit_State", true);
    },

    UpdateItem() {
      let formData = new FormData();
      formData.append("name", this.editPackage.name);
      formData.append("price", this.editPackage.price);
      formData.append("package_size_id", this.editPackage.package_size_id);
      formData.append("_method", "PUT");
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("package/" + this.editPackage.id, formData)
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
            this.fetchData();
            if (error.response.status == 422) {
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response.data.message,
              });
              var obj = error.response.data.errors;
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
        .get("package", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.packages = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.respones.status == 422) {
            var obj = error.respones.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    fetchPackageSize() {
      this.$axios
        .get("package-size")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.packageSize = res.data.data;
            }, 100);
          }
        })
        .catch(() => {});
    },
  },
  watch: {
    selectedPackageSize() {
      this.server_errors.package_size_id = "";
    },
    "addpackage.price": function () {
      this.server_errors.price = "";
    },
    "addpackage.name": function () {
      this.server_errors.name = "";
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style lang="scss">
</style>
 