<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon></v-btn
          >
          ເລືອກລູກຄ້າ</v-breadcrumbs
        >
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
            clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
            v-model="selectedVillage"
            :items="villages"
            item-text="name"
            item-value="id"
            label="ເລືອກບ້ານ"
            outlined
            chips
            multiple
            dense
            clearable
        >
          <template v-slot:selection="data">
            <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close
                @click="data.select"
                @click:close="remove(data.item)"
            >
              {{ data.item.name }}
            </v-chip>
          </template>
        </v-autocomplete>
      </v-col>
      <v-col>
        <v-select
            outlined
            dense
            :items="costs"
            v-model="selectedCost"
            item-text="name"
            item-value="value"
            label="ປະເພດບໍລິການ"
            multiple
            clearable
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols>
        <v-select
            outlined
            dense
            :items="favorite_dates"
            v-model="selectedFavoriteDate"
            item-text="name"
            item-value="name"
            label="ມື້ບໍລິການ"
            multiple
        ></v-select>
      </v-col>
      <v-col>
        <v-autocomplete
            outlined
            dense
            :items="customerStatus"
            v-model="selectedCustomerStatus"
            item-text="name"
            item-value="value"
            label="ສະຖານະລູກຄ້າ"
            multiple
            clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-text-field
            outlined
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            label="ຊື່ລູກຄ້າ"
            type="text"
            v-model="search"
            @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-row>
              <v-col>
                <p v-if="selectedRows.length">ລູກຄ້່ທີ່ເລືອກ {{selectedRows.length}}</p>
              </v-col>
            </v-row>
            <v-data-table
                :headers="headers"
                :items="customers"
                :search="search"
                :disable-pagination="true"
                hide-default-footer
            >
              <template v-slot:item.address_detail="{ item }">
                <div v-for="(data, index) in item.village_details" :key="index">
                  <span>{{ data.name }}</span>
                </div>
              </template>
              <template v-slot:item.cost_by="{ item }">
                <div>{{ costBy(item.cost_by) }}</div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-btn class="btn-primary mr-4 elevation-0" @click="createPage(item)"
                >ສ້າງບິນລ່ວງໜ້າ
                </v-btn>
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
      </v-card>
    </div>
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";

export default {
  name: "Customer",
  data() {
    return {
      tab: null,
      customers: [],
      selectedAllCustomer: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 1500,
      search: "",
      oldVal: "",
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      // selectedAllVillage: [],
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
      selectedCost: [],
      costs: [
        {
          id: 1,
          value: "container",
          name: "ຄອນເທັນເນີ"
        },
        {
          id: 2,
          value: "fix_cost",
          name: "ທຸລະກິດເປັນຖ້ຽວ"
        },
        {
          id: 3,
          value: "chartered",
          name: "ມອບເໝົາ"
        },
      ],
      favorite_dates: [],
      selectedFavoriteDate: [],
      selectedRows: [],
      selectedCustomer: {},
      headers: [
        {text: "ID", value: "customer_id"},
        {text: "ບໍລິສັດ", value: "company_name"},
        // { text: "ຜູ້ຮບຜິດຊອບ", value: "company_coordinators.name" },
        {text: "ປະເພດບໍລິການ", value: "cost_by", sortable: true},
        {text: "ບ້ານ", value: "village.name", sortable: true},
        {text: "ເມືອງ", value: "district.name", sortable: true},
        // { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        {text: "", value: "actions", sortable: false},
      ],
      //Map
      latlng: {
        lat: 18.1189434,
        lng: 102.290218,
      },
      markers: [],
      places: [],
      currentPlace: null,
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("company", {
            params: queryOption([
              {page: this.pagination.current_page},
              {per_page: this.per_page},
              {without: this.selectedCustomerStatus},
              {villages: this.selectedVillage},
              {district_id: this.selectedDistrict},
              {filter: this.search},
              {cost_by: this.selectedCost},
              {favorite_dates: this.selectedFavoriteDate},
            ]),
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit("Loading_State", false);
                this.customers = res.data.data.data;
                this.selectedAllCustomer = res.data.data;
                this.pagination = res.data.data.pagination;
                // this.getCenter();
              }, 100);
            }
          })
          .catch((error) => {
            this.$store.commit("Loading_State", false);
            this.fetchData();
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
              setTimeout(() => {
                this.address = res.data.data;
                this.address.map((item) => {
                  this.districts = item.districts;
                });
              }, 300);
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
              setTimeout(() => {
                this.villages = res.data.data;
              }, 300);
            }
          })
          .catch(() => {
          });
    },

    createPage(data) {
      //  var a = [];
      // if (this.selectedRows.length > 0) {
        this.$router.push({
          name: "create-future-customer",
          params: {
            items: data,
            // items: this.customers,
          },
        });
      // } else {
      //   this.$store.commit("Toast_State", {
      //     value: true,
      //     color: "error",
      //     msg: "ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ",
      //   });
      // }
    },

    viewPage(id) {
      this.$router.push({
        name: "ViewCustomer",
        params: {id},
      });
    },
    remove(item) {
      const index = this.selectedVillage.indexOf(item.id);
      if (index >= 0) this.selectedVillage.splice(index, 1);
    },
    Search() {
      GetOldValueOnInput(this);
    },

    costBy(value) {
      if (value == "container") return "ຄອນເທັນເນີ";
      else if (value == "fix_cost") return "ທຸລະກິດເປັນຖ້ຽວ";
      else if (value == "chartered") return "ມອບເໝົາ";
    },
    fetchFavorite() {
      this.$axios
          .get("favorite-date")
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.favorite_dates = res.data.data;
              }, 100);
            }
          })
          .catch(() => {
          });
    },
  },
  computed: {
    selectedAllVillage() {
      return this.selectedVillage.length === this.villages.length;
    },
    selectedSomeVillage() {
      return this.selectedVillage.length > 0 && !this.selectedAllVillage;
    },
    icon() {
      if (this.selectedAllVillage) return "mdi-close-box";
      if (this.selectedSomeVillage) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
  },
  watch: {
    selectedFavoriteDate: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    search: function (value) {
      this.pagination.current_page = '';
      if (value == "") {
        this.fetchData();
      }
    },
    selectedVillage: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedDistrict: function () {
      this.pagination.current_page = '';
      this.fetchVillage();
      this.fetchData();
    },
    selectedCustomerStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCost:function (){
      this.pagination.current_page = '';
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchAddress();
    this.fetchFavorite();
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";
</style>
