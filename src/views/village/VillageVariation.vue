<template>
  <v-container>
    <v-row class="mb-n6 text-right">
      <v-col>
        <v-btn color="teal" dark large @click="OpenModalAdd()"
          ><v-icon color>mdi-plus</v-icon>Add name
        </v-btn>
      </v-col>
    </v-row>
    <v-col justify="center">
      <v-card class="mx-auto my-12" elevation="2">
        <v-card-title>
          ຂໍ້ມູນ Village
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
          :items="villagevariation"
          :search="search"
          :disable-pagination="true"
          hide-default-footer
        >
          <template v-slot:[`item.variation`]="{ item }">
            <v-icon
              medium
              class="mr-2"
              color="green"
              @click="openModalVariation(item)"
            >
              mdi-plus
            </v-icon>
            <v-icon small class="mr-2" @click="openModalUpdateVariation(item)">
              mdi-key-remove
            </v-icon>
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
      </v-card>
    </v-col>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Village Variation</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addvillagevariation"
                      label="name*"
                      required
                    ></v-text-field>
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
            <span class="headline">ແກ້ໄຂຂໍ້ມູນຍ່ອຍຂອງບ້ານ</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editVillagevariation.name"
                      label="name*"
                      required
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

    <!--Add Variation -->
    <v-dialog v-model="variationDialog" max-width="720px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Add detail</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="editVillagevariation.name"
                    label="name*"
                    required
                    readonly
                  ></v-text-field>
                </v-col>
              </v-row>
              <!-- <v-row>
                <v-col>
                  <v-select
                    required
                    v-model="edit_villagevariation.variation"
                    :items="variation"
                    item-text="name"
                    item-value="id"
                    label="variation name*"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row> -->
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="addvillagedetail"
                    label="number*"
                    required
                  ></v-text-field>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="variationDialog = false">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="AddVariation"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "VillageVariation",
  data() {
    return {
      search: "",
      villagevariation: [],
      addvillagevariation: "",
      addvillagedetail: "",
      loading: false,

      VillageVariation_id: "",
      editVillagevariation: {},
      //number: '',
      village_variation_id: '',

      //
      variation: [],
      edit_villagevariation: {},
      variationDialog: false,

      //pagination
      offset: 12,
      pagination: {},
      per_page: 15,

      headers: [
        { text: "name", value: "name" },
        { text: "Add Variation ", value: "variation", sortable: false },
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
        (this.editVillagevariation = {}),
        this.fetchData(),
        this.$store.commit("modalEdit_State", false);
    },

    OpenModalEdit(item) {
      this.editVillagevariation = item;
      this.$store.commit("modalEdit_State", true);
    },

    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .put(
            "address/village-variation/" + this.editVillagevariation.id,
            this.editVillagevariation
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeUpdate();
                this.editVillagevariation = {};
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

    fetchVariation() {
      var variation = [];
      var villagedetail = [];
      this.$axios
        .get("info/village-variation")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.variation = res.data.data;
              this.villagedetail = res.data.data;
              this.edit_villagevariation.variation.map((item) => {
                variation.push(item.name);
              });
              this.villagedetail.map((item) => {
                villagedetail.push(item.name);
              });
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
// .post("user-setting/user/" + this.userID + "/give-role", {
//             roles: this.edit_user.roles,
//           })
    AddVariation() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("address/village/"+ this.editVillagevariation.id + "/village-detail", this.addvillagedetail
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.fetchData();
                this.reset();
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

    openModalVariation(item) {
      //this.village_variation_id = item.id
     // this.edit_villagevariation = item;
      this.editVillagevariation = item;
      this.fetchVariation();
      this.variationDialog = true;
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },

    deleteItem(id) {
      this.VillageVariation_id = id;
      this.$store.commit("modalDelete_State", true);
    },

    DeleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("address/village-variation/" + this.VillageVariation_id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.toast.msg = res.data.message;
              this.$store.commi("Toast_State", this.toast);
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

    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("address/village-variation/", {
            name: this.addvillagevariation,
          })
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
        .get("info/village-variation", {
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
              this.villagevariation = res.data.data.data;
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