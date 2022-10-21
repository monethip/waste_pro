<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-keyboard-backspace </v-icon>
      </v-btn>

      ລາຍລະອຽດແຜນເສັ້ນທາງ
      <span class="primary-color ml-2"> {{ plan.name }}</span>
    </v-breadcrumbs>

    <v-row>
      <v-col cols="12" class="mb-4" v-if="switchMap">
        <GmapMap :center="getCenter()" :zoom="16" style="width: 100%; height: 450px" :disableDefaultUI="true">
          <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" :conent="infoContent"
            @closeclick="infoOpened = false">{{ infoContent }}
          </gmap-info-window>
          <GmapMarker :key="index" v-for="(m, index) in customers" :position="getMarkers(m)"
            @click="toggleInfo(m, index)" :draggable="false" :icon="markerOptions" :animation="2" :clickable="true" />
        </GmapMap>
      </v-col>

      <v-col v-if="!switchMap">
        <div class="iframe-container">
          <iframe :src="plan.embed" height="100%" width="100%" class="embed"></iframe>
        </div>
      </v-col>
    </v-row>

    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="viewMap()">
          <v-icon>mdi-map</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn class="btn-primary" @click="editCompanyPlan(plan.id)">Update
        </v-btn>
      </v-col>
      <v-col>
        <h4>ລວມລູກຄ້າ {{ pagination.total }} ຄົນ</h4>
      </v-col>
      <v-col>
        <v-text-field outlined dense clearable prepend-inner-icon="mdi-magnify" label="ຊື່ລູກຄ້າ" type="text"
          v-model="search" @keyup.enter="Search()">
        </v-text-field>
      </v-col>
    </v-row>

    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table :headers="headers" :items="customers" :search="search" :disable-pagination="true"
              hide-default-footer>
              <template v-slot:item.customer="{ item }">
                <div v-if="(item.customer.customer_type = 'company')">
                  {{ item.customer.company_name }}
                </div>
                <div>
                  {{ item.customer.name }}
                  {{ item.customer.surname }}
                </div>
              </template>
              <template v-slot:item.favorite_dates="{ item }">
                <div v-for="(data, index) in item.customer.favorite_dates" :key="index">
                  <div>{{ data.name }}</div>
                </div>
              </template>
              <template v-slot:item.cost_by="{ item }">
                <div>{{ costBy(item.customer.cost_by) }}</div>
              </template>
              <template v-slot:item.default_round="{ item }">
                <div>{{ item.default_round }} ຮອບ</div>
              </template>
              <template v-slot:item.status="{ item }">
                <v-chip v-if="item.customer" :color="statusColor(item.customer.status)">{{ item.customer.status }}
                </v-chip>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item)">
                  mdi-eye
                </v-icon>
              </template>
            </v-data-table><br />
            <template>
              <Pagination v-if="pagination.total_pages > 1" :pagination="pagination" :offset="offset"
                @paginate="fetchData()"></Pagination>
            </template>
          </v-card-text>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  data() {
    return {
      title() {
        return `Vientiane Waste Co-Dev|View Plan`;
      },
      tab: null,
      customers: [],
      loading: false,
      switchMap: true,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      plan: {},

      headers: [
        { text: "ລຳດັບຄວາມສຳຄັນ", value: "priority", sortable: false, align: "center" },
        { text: "ລູກຄ້າ", value: "customer" },
        { text: "ສະຖານະ", value: "status", sortable: false },
        { text: "ປະເພດບໍລິການ", value: "cost_by_la", sortable: false },
        { text: "ມື້ບໍລິການ", value: "favorite_dates", width: "120px" },
        { text: "ຈຳນວນຮອບເລີ່ມຕົ້ນ", value: "default_round", width: "120px" },
        { text: "ລາຍລະອຽດ", value: "customer.collect_description", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      //Map
      latlng: {
        lat: 18.1189434,
        lng: 102.290218,
      },
      markers: [],
      markerOptions: {
        // eslint-disable-next-line global-require
        url: require("@coms/../../src/assets/pin1.svg"),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        size: {
          width: 28,
          height: 48,
          f: "px",
          b: "px",
        },
        scaledSize: {
          width: 28,
          height: 48,
          f: "px",
          b: "px",
        },
      },

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
        .get("route-plan/" + this.$route.params.id + "/route-plan-detail", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            // filter: this.search,
            villages: this.selectedVillage,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.customers = res.data.data.data;
              this.pagination = res.data.data.pagination;
              this.getCenter();
            }, 100);
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
    fetchDetail() {
      this.$axios
        .get("route-plan/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.plan = res.data.data;
              console.log(this.plan);
            }, 100);
          }
        })
        .catch(() => { });
    },

    fetchAddress() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.address = res.data.data;
              this.address.map((item) => {
                this.districts = item.districts;
              });
            }, 100);
          }
        })
        .catch(() => { });
    },

    fetchVillage() {
      this.$axios
        .get("info/district/" + this.selectedDistrict + "/village")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.villages = res.data.data;
            }, 100);
          }
        })
        .catch(() => { });
    },

    createPage() {
      // console.log(this.customers);
      this.$router.push({
        name: "CreateExportPlan",
        params: {
          items: this.customers,
          villages: this.selectedVillage,
        },
      });
      this.$emit("create-plan", this.customers, this.selectedVillage);
    },
    editCompanyPlan(id) {
      console.log(id);
      this.$router.push({
        name: "EditPlanNoMap",
        params: { id },
      });
    },

    viewPage(data) {
      if (data.customer.customer_type == "company") {
        this.$router.push({
          name: "ViewCompany",
          params: { id: data.customer_id },
        });
      } else if (data.customer.customer_type == "home") {
        this.$router.push({
          name: "ViewCustomer",
          params: { id: data.customer_id },
        });
      }
    },
    viewMap() {
      this.switchMap = !this.switchMap;
    },
    Search() {
      GetOldValueOnInput(this);
    },

    //Google map
    getCenter() {
      if (this.customers.length) {
        const latlng = {
          lat: parseFloat(this.customers[0].customer.lat),
          lng: parseFloat(this.customers[0].customer.lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.customer.lat),
          lng: parseFloat(m.customer.lng),
        };
      }
    },

    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent =
        m.priority +
        " " +
        m.customer.company_name +
        " (" +
        m.customer.customer_id +
        ") ";
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    statusColor(value) {
      if (value == "active") return "success";
      else if (value == "inactive") return "error";
      else return "info";
    },
    costBy(value) {
      if (value == "container") return "ຄອນເທັນເນີ";
      else if (value == "fix_cost") return "ທຸລະກິດເປັນຖ້ຽວ";
      else if (value == "chartered") return "ມອບເໝົາ";
      else if (value == "bag") return "ບໍລິມາດ";
      else return '';
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
      this.fetchVillage();
    },
  },
  created() {
    this.fetchData();
    this.fetchDetail();
    // this.fetchAddress();
    console.log(this.plan);
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

.embed {
  min-height: 400px;
}
</style>
