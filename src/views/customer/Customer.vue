<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="createPage()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-menu
            v-model="start_menu"
            :close-on-content-click="true"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="start_date"
                label="ເລີ່ມວັນທີ"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
                dense
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="start_date"
              @input="fetchData()"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-menu
            v-model="end_menu"
            :close-on-content-click="true"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="end_date"
                label="ຫາວັນທີ"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
                dense
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="end_date"
              @input="fetchData()"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-autocomplete
            outlined
            dense
            :items="districts"
            v-model="selectedDistrict"
            item-text="name"
            item-value="id"
            label="ເມືອງ"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
            outlined
            dense
            :items="villages"
            v-model="selectedVillage"
            item-text="name"
            item-value="id"
            label="ບ້ານ"
            multiple
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-select
            outlined
            dense
            :items="status"
            v-model="selectedStatus"
            item-text="name"
            item-value="name"
            label="ສະຖານະ"
            multiple
        ></v-select>
      </v-col>

      <v-col>
        <v-select
            outlined
            dense
            :items="customerStatus"
            v-model="selectedCustomerStatus"
            item-text="name"
            item-value="value"
            label="ສະຖານະລູກຄ້າ"
            multiple
        ></v-select>
      </v-col>

      <v-col>
        <v-text-field
            outlined
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            label="Search"
            type="text"
            v-model="search"
            @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-tabs
            v-model="tab"
            dark
            background-color="tab-color lighten-2"
            slider-color="indigo lighten-5"
        >
          <v-tab href="#tab-1">
            <v-icon>mdi-account</v-icon>
            ລູກຄ້າ ({{ pagination.total }})
          </v-tab
          >

        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="customers"
                    :search="search"
                    :disable-pagination="true"
                    hide-default-footer
                >
                  <template v-slot:item.media="{ item }">
                    <v-avatar
                        class="mr-1"
                        size="36px"
                        v-for="(img, index) in item.media"
                        :key="index"
                    >
                      <img v-if="img.url" :src="img.url"/>
                    </v-avatar>
                  </template>
                  <!--Role -->
                  <template v-slot:item.status="{ item }">
                    <v-chip
                        label
                        :color="statusColor(item.status)"
                        @click="switchStatus(item.id)"
                    >{{ item.status }}
                    </v-chip
                    >
                  </template>

                  <template v-slot:item.actions="{ item }">
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            color="primary"
                            dark
                            v-bind="attrs"
                            v-on="on"
                            medium
                            class="mr-2"
                        >mdi-dots-vertical
                        </v-icon
                        >
                      </template>
                      <v-list>
                        <v-list-item link @click="addPackage(item.id)">
                          <v-list-item-title>
                            <v-icon small class="mr-2">mdi-plus</v-icon>
                            ເພີ່ມປະເພດບໍລິການ
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item link @click="openChangePackage(item)">
                          <v-list-item-title>
                            <v-icon small class="mr-2">mdi-pencil</v-icon>
                            ປ່ຽນປະເພດບໍລິການ
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item link @click="viewPage(item.id)">
                          <v-list-item-title>
                            <v-icon small class="mr-2"> mdi-eye</v-icon>
                            ລາຍລະອຽດ
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item link @click="editPage(item.id)">
                          <v-list-item-title>
                            <v-icon small class="mr-2"> mdi-pencil</v-icon>
                            ແກ້ໄຂ
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item link @click="deleteItem(item.id)">
                          <v-list-item-title>
                            <v-icon small> mdi-delete</v-icon>
                            ລຶບ
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </template>
                </v-data-table
                >
                <br/>
                <template>
                  <Pagination
                      v-if="pagination.total_pages > 1"
                      :pagination="pagination"
                      :offset="offset"
                      @paginate="fetchData()"
                  ></Pagination>
                </template>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ເພີ່ມປະເພດບໍລິການໃຫ້ລູກຄ້າ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row class="mb-n4 mt-0">
                  <v-col cols="12">
                    <v-select
                        v-model="selectedPackage"
                        :items="packages"
                        item-text="name"
                        item-value="id"
                        label="ເລືອກແພັກເກດ"
                        outlined
                        dense
                    ></v-select>
                    <p class="errors">
                      {{ server_errors.package_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row class="my-n4">
                  <v-col cols="12">
                    <v-menu
                        v-model="package_menu"
                        :close-on-content-click="true"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="package_date"
                            label="ເລີ່ມວັນທີ"
                            readonly
                            outlined
                            v-bind="attrs"
                            v-on="on"
                            dense
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="package_date" :min="min_date" type="month"></v-date-picker>
                    </v-menu>
                    <p class="errors">
                      {{ server_errors.start_month }}
                    </p>
                  </v-col>
                </v-row>
                <v-row class="my-n6">
                  <v-col cols="12">
                    <v-checkbox v-model="start_collect">
                      <template v-slot:label>
                        <div>ສາມາດເກັບຂີ້ເຫື້ອຍເລີຍໄດ້ບໍ່ ?</div>
                      </template>
                    </v-checkbox>
                    <p class="errors">
                      {{ server_errors.can_collect }}
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
                  @click="AddPackage()"
              >
                ເພີ່ມ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>


    <!-- Change package-->
    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ປ່ຽນປະເພດບໍລິການໃຫ້ລູກຄ້າ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row class="mb-n4 mt-0">
                  <v-col cols="12">
                    <v-select
                        v-model="this.change_package.package_id"
                        :items="packages"
                        item-text="name"
                        item-value="id"
                        label="ເລືອກແພັກເກດ"
                        outlined
                        dense
                    ></v-select>
                    <p class="errors">
                      {{ server_errors.package_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row class="my-n4">
                  <v-col cols="12">
                    <v-menu
                        v-model="change_package_menu"
                        :close-on-content-click="true"
                        :nudge-right="40"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="package_date"
                            label="ເລີ່ມວັນທີ"
                            readonly
                            outlined
                            v-bind="attrs"
                            v-on="on"
                            dense
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="package_date" :min="min_date" type="month"></v-date-picker>
                    </v-menu>
                    <p class="errors">
                      {{ server_errors.start_month }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeChangeModal()">
                Close
              </v-btn>
              <v-btn
                  color="blue darken-1"
                  text
                  :loading="loading"
                  :disabled="loading"
                  @click="changePackage()"
              >
                ປ່ຽນ
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
          >OK
          </v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import moment from "moment";
import queryOption from "@/Helpers/queryOption";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev| Customer`;
  },
  data() {
    return {
      tab: null,
      customers: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      //Add Package
      package_date: moment().add('1', 'months').format('YYYY-MM'),
      min_date: moment().add('1', 'months').startOf('month').format('YYYY-MM-DD'),
      package_menu: false,
      change_package_menu: false,
      change_package: {},

      start_date: "",
      start_menu: false,
      end_date: "",
      end_menu: false,
      packages: [],
      selectedPackage: "",
      start_collect: false,
      server_errors: {},
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      status: [
        {
          id: 1,
          name: "active",
        },
        {
          id: 1,
          name: "inactive",
        },
        {
          id: 1,
          name: "trial",
        },
      ],
      selectedCustomerStatus: [],
      customerStatus: [
        {
          id: 1,
          value: "calendar",
          name: "ຍັງບໍມີຕາຕະລາງ",
        },
        {
          id: 2,
          value: "route_plan",
          name: "ຍັງບໍມີແຜນ",
        },
      ],

      headers: [
        {text: "ID", value: "customer_id"},
        {text: "ຊື່", value: "name"},
        {text: "ນາມສະກຸນ", value: "surname"},
        {text: "Phone", value: "user.phone", sortable: false},
        {text: "ທີ່ຢູ່", value: "district.name", sortable: false},
        {text: "ປະເພດບໍລິການ", value: "package.name", sortable: false},
        {text: "Profile", value: "media"},
        {text: "ສະຖານະແພັກເກດ", value: "status"},
        {text: "ເປີດ/ປິດບໍລິການ", value: "can_collect", align: "center"},
        {text: "", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    fetchData() {

      this.$store.commit("Loading_State", true);
      this.$axios
          .get("customer",
              {
                params: queryOption([
                  {page: this.pagination.current_page},
                  {per_page: this.per_page},
                  {filter: this.search},
                  {date_from: this.start_date},
                  {date_end: this.end_date},
                  {without: this.selectedCustomerStatus},
                  {villages: this.selectedVillage},
                  {statuses: this.selectedStatus},
                  {district_id: this.selectedDistrict}]),
              }
          )
          .then((res) => {
            if (res.data.code == 200) {
                this.$store.commit("Loading_State", false);
                this.customers = res.data.data.data;
                this.pagination = res.data.data.pagination;
            }
          })
          .catch((error) => {
            this.$store.commit("Loading_State", false);
            if (error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },

    fetchAddress() {
      this.$axios
          .get("info/address", {params: {filter: "ນະຄອນຫລວງວຽງຈັນ"}})
          .then((res) => {
            if (res.data.code == 200) {
                this.address = res.data.data;
                this.address.map((item) => {
                  this.districts = item.districts;
                });
            }
          })
          .catch(() => {
          });
    },

    fetchVillage() {
      this.$axios
          .get("info/district/" + this.selectedDistrict + "/village")
          .then((res) => {
            if (res.data.code == 200) {
                this.villages = res.data.data;
            }
          })
          .catch(() => {
          });
    },

    fetchPackage() {
      this.$axios
          .get("package")
          .then((res) => {
            if (res.data.code == 200) {
                this.packages = res.data.data;
            }
          })
          .catch(() => {
          });
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.customerId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
          .delete("customer/" + this.customerId)
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
              msg: error.response.data.message,
            });
            this.$store.commit("modalDelete_State", false);
            this.loading = false;
          });
    },
    createPage() {
      this.$router.push({
        name: "CreateCustomer",
      });
    },
//Change package status
    switchStatus(id) {
      this.loading = true;
      this.$axios
          .post("customer/" + id + "/switch-status",)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
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
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          });
    },

    addPackage(id) {
      this.fetchPackage();
      this.$store.commit("modalAdd_State", true);
      this.customerId = id;
    },
    AddPackage() {
      const date = this.moment(`${this.package_date} ${1}`).format('YYYY-MM-DD');
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .post("customer/" + this.customerId + "/add-package", {
              package_id: this.selectedPackage,
              start_month: date,
              can_collect: this.start_collect,
            })
            .then((res) => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.closeAddModal();
                  this.selectedPackage = "";
                  this.customerId = "";
                  this.fetchData();
                  this.package_menu = false;
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
                let obj = error.response.data.errors;
                for (let [key, customer] of Object.entries(obj)) {
                  this.server_errors[key] = customer[0];
                }
              }
            });
      }
    },
    closeAddModal() {
      this.selectedPackage = "";
      this.customerId = "";
      this.start_date = "";
      this.$store.commit("modalAdd_State", false);
    },

    openChangePackage(data) {
      this.change_package = data;
      this.fetchPackage();
      this.$store.commit("modalEdit_State", true);
      // this.customerId = id;
    },
    changePackage() {
      const date = this.moment(`${this.package_date} ${1}`).format('YYYY-MM-DD');
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .post("customer/" + this.change_package.id + "/change-package", {
              package_id: this.change_package.package_id,
              start_month: date,
            })
            .then((res) => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.closeChangeModal();
                  this.selectedPackage = "";
                  this.customerId = "";
                  this.fetchData();
                  this.package_menu = false;
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
                for (let [key, customer] of Object.entries(obj)) {
                  this.server_errors[key] = customer[0];
                }
              }
            });
      }
    },
    closeChangeModal() {
      this.selectedPackage = "";
      this.customerId = "";
      this.start_date = "";
      this.$store.commit("modalEdit_State", false);
    },

    editPage(id) {
      this.$router.push({
        name: "EditCustomer",
        params: {id},
      });
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewCustomer",
        params: {id},
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == "active") return "primary";
      else if (value == "inactive") return "error";
      else return "info";
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    selectedVillage: function () {
      this.fetchData();
    },
    selectedDistrict: function () {
      if (this.selectedDistrict) {
        this.fetchData();
      }
      this.fetchVillage();
    },
    selectedStatus: function () {
      this.fetchData();
    },
    selectedPackage: function () {
      this.server_errors.package_id = "";
    },
    package_date: function () {
      this.server_errors.start_month = "";
    },
    selectedCustomerStatus: function () {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchAddress();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
