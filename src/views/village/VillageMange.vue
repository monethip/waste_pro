<template>
  <v-container>
    <v-row class="mb-n6 text-right">
      <v-col>
        <v-btn class="btn-primary" @click="OpenModalAddVillage()"
          ><v-icon color>mdi-plus</v-icon>Add Village
        </v-btn>
      </v-col>
    </v-row>
    <v-card class="mx-auto my-6" elevation="2">
      <v-card-text>
        <v-row>
          <v-col>
            <v-autocomplete
              required
              :items="districts"
              v-model="selectedDistrict"
              item-text="name"
              item-value="id"
              label="District"
              :rulesDistrict="rulePermission"
              outlined
              dense
            ></v-autocomplete>
          </v-col>
          <v-col>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              outlined
              dense
            ></v-text-field>
          </v-col>
        </v-row>

        <v-data-table
          :headers="headers"
          :items="villages"
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
            <v-icon
              small
              class="mr-2"
              color="blue darken-4"
              @click="openModalUpdateVariation(item.id)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              class="mr-2"
              color="red"
              @click="openModaldeleteVariation(item)"
            >
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
            @paginate="fetchVillage()"
          ></Pagination>
        </template>
      </v-card-text>
    </v-card>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Village</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      required
                      :items="districts"
                      v-model="selectedDistrict"
                      item-text="name"
                      item-value="id"
                      label="District *"
                      :rulesDistrict="rulesDistrict"
                    ></v-autocomplete>
                    <p class="errors">
                      {{ server_errors.district_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="ban"
                      label="village*"
                      required
                      prepend-inner-icon="mdi-home"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
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
            <span class="headline">ແກ້ໄຂຂໍ້ມູນບ້ານ</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      required
                      :items="districts"
                      v-model="selectedDistrict"
                      item-text="name"
                      item-value="id"
                      label="District *"
                      :rulesDistrict="rulesDistrict"
                    ></v-autocomplete>
                    <p class="errors">
                      {{ server_errors.district_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="update_village.name"
                      label="village"
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
              <v-btn color="blue darken-1" text @click="closeUpdateVillage()">
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
          <span class="text-h5">Add Village Variation</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="update_village.name"
                    label="village"
                    required
                    readonly
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-select
                    required
                    v-model="SelectedVillageVariation"
                    :items="variation"
                    item-text="name"
                    item-value="id"
                    label="variation name*"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="number"
                    label="number*"
                    required
                  ></v-text-field>
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

    <!--Edit Variation -->
    <v-dialog v-model="UpdateVariationDialog" max-width="720px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Village Variation</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <!-- <v-row>
                <v-col>
                  <v-text-field
                    v-model="update_villagevariation.name"
                    label="village"
                    required
                    readonly
                  ></v-text-field>
                </v-col>
              </v-row> -->
              <v-row>
                <v-col>
                  <v-select
                    required
                    v-model="SelectedVillageVariation"
                    :items="village_details"
                    item-text="name"
                    item-value="id"
                    label="variation name*"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="village_details"
                    :items="village_details"
                    label="number*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="UpdateVariationDialog = false"
            >
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

    <!--Edit Variation -->
    <v-dialog v-model="DeleteVariationDialog" max-width="720px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Village Variation</span>
          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <!-- <v-row>
                <v-col>
                  <v-text-field
                    v-model="update_villagevariation.name"
                    label="village"
                    required
                    readonly
                  ></v-text-field>
                </v-col>
              </v-row> -->
              <v-row>
                <v-col>
                  <v-select
                    required
                    v-model="SelectedVillageVariation"
                    :items="village_details"
                    item-text="name"
                    item-value="id"
                    label="variation name*"
                  ></v-select>
                  <p class="errors">
                    {{ errormsg }}
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="village_details"
                    :items="village_details"
                    label="number*"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click="DeleteVariationDialog = false"
            >
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
  name: "Village",
  data() {
    return {
      loading: false,
      districts: [],
      selectedDistrict: "",
      selectedVillage: "",
      listVillage: [],
      village_details: [],

      SelectedVillageVariation: "",

      //
      variation: [],
      edit_villagevariation: {},

      variationDialog: false,
      UpdateVariationDialog: false,
      DeleteVariationDialog: false,

      //getlistofdistrict
      getVillage: [],
      villages: [],
      ban: "",
      number: "",
      errormsg: "",

      update_village: {},
      search: "",

      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,

      oldVal: "",
      server_errors: {},
      rulesDistrict: [(v) => !!v || "District is required"],
      //Validation
      nameRules: [(v) => !!v || "Name is required"],
      rulePermission: [(v) => !!v || "Permission is required"],

      headers: [
        {
          text: "ລະຫັດ",
          align: "start",
          value: "id",
          sortable: false,
        },
        {
          text: "ບ້ານ",
          align: "start",
          value: "name",
          sortable: false,
        },
        { text: "Add Variation ", value: "variation", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    OpenModalAddVillage() {
      this.$store.commit("modalAdd_State", true);
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },

    deleteItem(id) {
      this.village_id = id;
      this.$store.commit("modalDelete_State", true);
    },
    DeleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("address/village/" + this.village_id)
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

    reset() {
      this.$refs.form.reset();
    },

    OpenModalEdit(item) {
      this.update_village = item;
      this.$store.commit("modalEdit_State", true);
    },

    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .put("address/village/" + this.update_village.id, {
            name: this.update_village.name,
            district_id: this.selectedDistrict,
          })
          .then((res) => {
            if (res.data.success == true) {
              setTimeout(() => {
                this.loading = false;
                this.CloseModalEdit();
                this.update_village = {};
                this.reset();
                this.fetchData();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchVillage();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, villages] of Object.entries(obj)) {
                this.server_errors[key] = villages[0];
              }
            }
          });
      }
    },

    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.getVillage = res.data.data;
              this.getVillage.map((item) => {
                this.districts = item.districts;
                this.selectedDistrict = this.districts[0].id;
                this.$store.commit("Loading_State", false);
                this.fetchVillage();
              });
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchVillage() {
      this.$store.commit("Loading_State", true);
      console.log(this.search);
      this.$axios
        .get("info/district/" + this.selectedDistrict + "/village", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.villages = res.data.data.data;
              this.pagination = res.data.data.pagination;
              this.$store.commit("Loading_State", false);
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchVariation() {
      var variation = [];
      this.$axios
        .get("info/village-variation")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.variation = res.data.data;
              this.edit_villagevariation.variation.map((item) => {
                variation.push(item.name);
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

    AddVariation() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post(
            "address/village/" + this.update_village.id + "/village-detail",
            {
              name: this.number,
              village_variation_id: this.SelectedVillageVariation,
            }
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.fetchData();
                this.reset();
                this.variationDialog = false;
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
      this.edit_villagevariation = item;
      this.update_village = item;
      this.fetchVariation();
      this.variationDialog = true;
    },

    closeUpdateVillage() {
      this.reset(),
        (this.update_village = {}),
        this.fetchData(),
        this.$store.commit("modalEdit_State", false);
    },

    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },

    openModalUpdateVariation(id) {
      console.log(id);
      this.$router.push({
        name: "EditVillage",
        params: { id },
      });
    },

    ViewVillage(id) {
      this.$router.push({
        name: "ViewVillage",
        params: { id },
      });
    },

    openModaldeleteVariation() {
      this.DeleteVariationDialog = true;
    },

    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("address/village", {
            name: this.ban,
            district_id: this.selectedDistrict,
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
  },
  watch: {
    selectedDistrict: function () {
      this.fetchVillage();
    },

    search: function (value) {
      if (value == "") {
        this.fetchVillage();
      }
    },
  },
};
</script>


<style lang="scss">
@import "../../../public/scss/main.scss";
</style>


