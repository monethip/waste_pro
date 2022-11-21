<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn @click="openAddModal()" class="btn-primary"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title>
            ຂໍ້ມູນທີມ ({{ pagination.total }})
            <v-divider class="mx-4" vertical></v-divider>
            <v-spacer></v-spacer>
            <!--
            <v-select
              outlined
              dense
              :items="statuses"
              v-model="selectedStatus"
              item-text="name"
              item-value="name"
              label="ສະຖານະ"
            ></v-select>
            <v-spacer></v-spacer>
                        -->
            <v-text-field
              v-model="search"
              clearable
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              @keyup.enter="Search()"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="data"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.actions="{ item }">
              <!--  <v-icon small class="mr-2"> mdi-key </v-icon> -->
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    medium
                    class="mr-2"
                    >mdi-dots-vertical</v-icon
                  >
                </template>
                <v-list>
                  <v-list-item link @click="viewPage(item.id)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-plus </v-icon>
                      ເພີ່ມສະມາຊິກທີມ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="OpenModalEdit(item)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-pencil </v-icon>
                      ແກ້ໄຂ
                    </v-list-item-title>
                  </v-list-item>

                  <v-list-item link @click="deleteItem(item.id)">
                    <v-list-item-title>
                      <v-icon small> mdi-delete </v-icon>
                      ລຶບ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
          <br />
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
    </v-row>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ເພີ່ມທີມ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="teamName"
                      :rules="teamRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-autocomplete
                      v-model="selectedDriver"
                      :items="driver"
                      item-text="name"
                      item-value="id"
                      label="ພະນັກງານຂັບລົດ"
                      dense
                      :rules="driverRules"
                    ></v-autocomplete>
                    <p class="errors">
                      {{ server_errors.driver_id }}
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
    </ModalAdd>

    <!--Edit Modal-->
    <ModalEdit>
      <template @close="close" v-slot="">
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂທີມ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="edit_user.name"
                      :rules="teamRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-autocomplete
                      v-if="edit_user.driver"
                      v-model="edit_user.driver.id"
                      :items="driver"
                      item-text="name"
                      item-value="id"
                      label="ພະນັກງານຂັບລົດ"
                      dense
                      :rules="driverRules"
                    ></v-autocomplete>
                    <p class="errors">
                      {{ server_errors.driver_id }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdateModal()">
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
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  title() {
    return `Vientiane Waste Co-Dev|Team`;
  },
  name: "User",
  data() {
    return {
      headers: [
        { text: "ຊື່ທີມ", value: "name" },
        { text: "ພະນັກງານຂັບລົດ", value: "driver.name" },
        { text: "ທະບຽນລົດ", value: "driver.vehicle.car_number" },
        { text: "ສະຖານະ", value: "driver.status", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      loading: false,
      status: false,
      data: [],
      edit_user: {},
      userID: "",
      server_errors: {},
      teamName: "",
      driver: [],
      selectedDriver: "",

      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: "",
      oldVal: "",
      //Validation
      teamRules: [(v) => !!v || "Team name is required"],
      driverRules: [(v) => !!v || "Driver is required"],
    };
  },
  methods: {
    fetchDriver() {
      this.$axios
        .get("driver")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.driver = res.data.data;
            }, 300);
          }
        })
        .catch({});
    },
    openAddModal() {
      this.fetchDriver();
      this.$store.commit("modalAdd_State", true);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("team", { name: this.teamName, driver_id: this.selectedDriver })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
                this.teamName = "";
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
            this.fetchData();
            if (error.response && error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("team", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
              this.loading = false;
              this.$store.commit("Loading_State", false);
              this.data = res.data.data.data;
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

    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    OpenModalEdit(item) {
      this.fetchDriver();
      this.edit_user = item;
      this.$store.commit("modalEdit_State", true);
    },
    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .put("team/" + this.edit_user.id, {
            name: this.edit_user.name,
            driver_id: this.edit_user.driver.id,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeUpdateModal();
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
              var obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },
    closeUpdateModal() {
      this.$store.commit("modalEdit_State", false);
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },

    deleteItem(id) {
      this.userID = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("team/" + this.userID)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.fetchData();
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    viewPage(id) {
      this.$router.push({
        name: "TeamDetail",
        params: { id },
      });
    },
    reset() {
      this.$refs.form.reset();
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
  watch: {
    selectedStatus: function () {
      this.fetchData();
    },
    teamName: function () {
      this.server_errors.name = "";
    },
    selectedDriver: function () {
      this.server_errors.driver_id = "";
    },
    "edit_user.name": function () {
      this.server_errors.name = "";
    },
    "edit_user.driver.id": function () {
      this.server_errors.driver_id = "";
    },
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
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
