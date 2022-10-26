<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ລາຍລະອຽດທີ່ຢູ່ໃນ
      <span v-if="data.name" class="primary-color ml-2">
        {{ data.name }}, {{ data.district.name }}</span
      ></v-breadcrumbs
    >
    <v-row class="mb-n6 text-right">
      <v-col>
        <v-btn class="btn-primary" dark medium @click="OpenModalAddAddress()"
          ><v-icon color>mdi-plus</v-icon>Add
        </v-btn>
      </v-col>
    </v-row>
    <v-card class="my-6" elevation="2">
      <v-card-title>
        ຂໍ້ມູນລາຍລະອຽດທີ່ຢູ່
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
        :items="addressdetail"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <template v-slot:[`item.village_details`]="{ item }">
          <div v-if="item.village_details">
            <span v-for="(data, index) in item.village_details" :key="index">
              <span>
                <v-chip
                  class="ma-2"
                  color="cyan"
                  text-color="white"
                  label
                  v-if="data.name"
                >
                  {{ data.name }}
                  <v-icon
                    right
                    small
                    class="ml-4 mr-1"
                    @click="OpenModalEdit(data)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon right small @click="deleteItem(data.id)">
                    mdi-trash-can-outline
                  </v-icon>
                </v-chip>
              </span>
            </span>
          </div>
        </template>
        <template v-slot:[`item.action`]="{ item }">
          <v-icon small color="info" class="mr-2" @click="addMoreItem(item.id)">
            mdi-plus
          </v-icon>
          <v-icon small color="red" @click="deleteAllItem(item.id)">
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
    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <v-card-title>
              <h4>ເພີ່ມຂໍ້ມູນຍ່ອຍຂອງບ້ານ</h4>
            </v-card-title>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      required
                      :items="village_detail"
                      v-model="selectedDetail"
                      item-text="name"
                      item-value="id"
                      label="ເລືອກທີ່ຢູ່ *"
                      :rules="rulesAddress"
                    ></v-autocomplete>
                    <p class="errors">
                      {{ server_errors.district_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="address.name"
                      label="ລາຍລະອຽດ*"
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
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="AddItem()">
                Save
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <h4>ແກ້ໄຂຂໍ້ມູນຍ່ອຍຂອງບ້ານ</h4>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      required
                      v-model="editVillageDetail.village_variation_id"
                      :items="village_detail"
                      item-text="name"
                      item-value="id"
                      label="ເລືອກທີ່ຢູ່ *"
                      :rules="rulesAddress"
                    ></v-autocomplete>
                    <p class="errors">
                      {{ server_errors.district_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editVillageDetail.name"
                      label="ລາຍລະອຽດ*"
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
  title() {
    return `Vientiane Waste Co-Dev|Address`;
  },
  data() {
    return {
      data: {},
      address: {},
      loading: false,
      server_errors: {},
      detail_id: "",
      editVillageDetail: {},
      //ໜ່ວຍ
      village_detail: [],
      selectedDetail: "",
      addressdetail: [],
      errormsg: "",
      search: "",
      headers: [
        { text: "ທີ່ຢູ່", value: "name" },
        { text: "ລາຍລະອຽດ", value: "village_details" },
        { text: "", value: "action" },
      ],
      //pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      //Validation
      nameRules: [(v) => !!v || "Name is required"],
      rulesAddress: [(v) => !!v || "Address is required"],
    };
  },
  methods: {
    reset() {
      this.$refs.form.reset();
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("info/village/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.data = res.data.data;
            }, 100);
          }
        })
        .catch(() => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
        });
    },

    fetchVillageVariation() {
      this.$axios
        .get(
          "info/village/" + this.$route.params.id + "/village-detail"
          // , {
          //   params: {
          //     page: this.pagination.current_page,
          //     per_page: this.per_page,
          //     filter: "",
          //   },
          // }
        )
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.addressdetail = res.data.data;
              console.log(this.addressdetail);
              // this.pagination = res.data.data.pagination;
            }, 100);
          }
        })
        .catch(() => {});
    },
    fetchVariation() {
      this.$axios
        .get("info/village-variation")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.village_detail = res.data.data;
            }, 100);
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },
    OpenModalAddAddress() {
      this.fetchVariation();
      this.$store.commit("modalAdd_State", true);
    },
    addMoreItem(id) {
      this.selectedDetail = id;
      this.fetchVariation();
      this.$store.commit("modalAdd_State", true);
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post(
            "address/village/" + this.$route.params.id + "/village-detail",
            {
              name: this.address.name,
              village_variation_id: this.selectedDetail,
            }
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
                this.fetchVillageVariation();
                this.reset();
                this.selectedDetail = "";
                (this.address = {}),
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
            if (error.response.status == 422) {
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response.data.message,
              });
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },

    closeUpdate() {
      this.editVillageDetail = {};
      this.reset();
      this.$store.commit("modalEdit_State", false);
    },

    OpenModalEdit(item) {
      this.fetchVariation();
      this.editVillageDetail = item;
      this.$store.commit("modalEdit_State", true);
    },
    updateItem() {
      let formData = new FormData();
      formData.append("name", this.editVillageDetail.name);
      formData.append(
        "village_variation_id",
        this.editVillageDetail.village_variation_id
      );
      formData.append("_method", "PUT");
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post(
            "address/village/" +
              this.$route.params.id +
              "/village-detail/" +
              this.editVillageDetail.id,
            formData
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.editVillageDetail = {};
                this.reset();
                this.fetchVillageVariation();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
                this.closeUpdate();
              }, 100);
            }
          })
          .catch((error) => {
            this.loading = false;
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

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    //Delete item in row
    deleteItem(id) {
      this.detail_id = id;
      this.$store.commit("modalDelete_State", true);
    },
    //Delete Row
    deleteAllItem(id) {
      this.detail_id = id;
      this.$store.commit("modalDelete_State", true);
    },

    DeleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("address/village-detail/" + this.detail_id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.$store.commit("modalDelete_State", false);
              this.fetchVillageVariation();
            }, 300);
          }
        })
        .catch(() => {
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },

    backPrevios() {
      this.$router.go(-1);
    },
  },
  watch: {
    "address.name": function () {
      this.server_errors.name = "";
    },
    "editVillageDetail.name": function () {
      this.server_errors.name = "";
    },
  },

  created() {
    this.fetchData();
    this.fetchVillageVariation();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
.primary-color {
  color: $primary-color;
}
.text-field {
  border-color: $primary-color;
  padding: 12px 8px 12px 8px;
  width: 100%;
  margin-bottom: 12px;
  font-size: 16px;
  background: #eee;
  border-radius: 2 px;
}
</style>