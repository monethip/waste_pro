<template>
  <v-container>
    <v-row class="mb-n6 text-right">
      <v-col>
        <v-btn color="teal" dark large @click="OpenModalAddVillage()"
          ><v-icon color>mdi-plus</v-icon>Add Village
        </v-btn>
      </v-col>
    </v-row>
    <v-card class="mx-auto my-12" elevation="2">
      <v-card-title>
        <v-spacer></v-spacer>
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
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          outlined
          dense
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="villages" :search="search"
          :disable-pagination="true"
            hide-default-footer>
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
          @paginate="fetchVillage()"
        ></Pagination>
      </template>
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
                      :rulesDistrict="rulePermission"
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
                    ></v-text-field>
                    <!-- <p class="errors">
                      {{ server_errors.name }}
                    </p> -->
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
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="update_village.name"
                      label="village"
                      item-text="name"
                      item-value="id"
                    ></v-text-field>
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
            @click="deleteItemConfirm"
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
  name: "Village",
  data() {
    return {
      loading: false,
      getAddress: [],
      districts: [],
      selectedDistrict: "",
      listVillage: [],
      address: [],

      //test
      test: [],
      test2: [],

      //getlistofdistrict
      getVillage: [],
      villages: [],
      addvillage: {},

      getDistricts: [],

      update_village: {},
      search: "",

      rulesDistrict: [(v) => !!v || "District is required"],
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
        { text: "ແກ້ໄຂ/ລຶບ", value: "actions", sortable: false },
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

    reset() {
      this.$refs.form.reset();
    },

    OpenModalEdit(item) {
      this.update_village = item;
      this.$store.commit("modalEdit_State", true);
    },

    UpdateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$admin
          .put("address/village/" + this.update_village.id, this.update_village)
          .then((res) => {
            if (res.data.success == true) {
              setTimeout(() => {
                this.loading = false;
                this.CloseModalEdit();
                this.village_edit = {};
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
              for (let [key, village] of Object.entries(obj)) {
                this.server_errors[key] = village[0];
              }
            }
          });
      }
    },

    fetchData() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.getVillage = res.data.data;
              this.getVillage.map((item) => {
                this.districts = item.districts;
                this.selectedDistrict = this.districts[0].id;
                console.log(this.selectedDistrict);
                this.fetchVillage();
              });
            }, 300);
          }
        })
        .catch(() => {});
    },
    fetchVillage() {
      this.$axios
        .get("info/district/" + this.selectedDistrict + "/village",{          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },})
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.villages = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch(() => {});
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

    AddItem() {
      console.log(this.ban)
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("address/village", 
          {name:this.ban,
          district_id:this.selectedDistrict})

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
            console.log(error);
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
  },
};
</script>

<style>
</style>



