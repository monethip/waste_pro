<template>
  <v-container>
    <v-col justify="center">
      <v-card-title>
        ຂໍ້ມູນ Package
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="packagessize"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small color="green" class="mr-2" @click="OpenModalEdit(item)">
            mdi-account-edit
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
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Package Size</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.size"
                      label="Size*"
                      required
                      :rules="sizeRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.size }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.bag"
                      label="Bag*"
                      type="number"
                      class="input-number"
                      required
                      :rules="bagRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.bag }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
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
        </v-card>
      </template>
    </ModalAdd>

    <!--Edit Modal-->

    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">ແກ້ໄຂຂໍ້ມູນ Package</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackageSize.size"
                      label="size*"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackageSize.bag"
                      label="bag*"
                      required
                      type="number"
                      class="input-number"
                    ></v-text-field>
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
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
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
      packagessize: [],
      addpackage: {},
      loading: false,

      PackageSize_id: "",
      editPackageSize: {},

      server_errors: {},

      //pagination
      offset: 12,
      pagination: {},
      per_page: 15,

      //validation
      sizeRules: [(v) => !!v || "Size is required"],
      bagRules: [
        (v) => !!v || "Bag is required",
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
      ],

      headers: [
        { text: "Size", value: "size" },
        { text: "ຈໍານວນ(ຖົງ)", value: "bag" },
        { text: "actions", value: "actions" },
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
    reset() {
      this.$refs.form.reset();
    },

    OpenModalAdd() {
      this.$store.commit("modalAdd_State", true);
    },

    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },

    closeUpdate() {
      this.reset(),
        (this.editPackageSize = {}),
        this.fetchData(),
        this.$store.commit("modalEdit_State", false);
    },

    OpenModalEdit(item) {
      this.editPackageSize = item;
      this.$store.commit("modalEdit_State", true);
    },

    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .put("package-size/" + this.editPackageSize.id, this.editPackageSize)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeUpdate();
                this.editPackageSize = {};
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

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },

    deleteItem(id) {
      this.PackageSize_id = id;
      this.$store.commit("modalDelete_State", true);
    },

    DeleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("package-size/" + this.PackageSize_id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.closeDelete();
              this.$store.commi("Toast_State", this.toast);
              // this.$store.commit("modalDelete_State", false);
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

    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("package-size", this.addpackage)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
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
        .get("package-size", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.packagessize = res.data.data.data;
              console.log(this.packagessize);
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
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
