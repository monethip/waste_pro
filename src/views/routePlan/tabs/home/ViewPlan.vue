<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn class="text-primary" text @click="backPrevios()">
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>
      ລາຍລະອຽດແຜນເສັ້ນທາງ
      <span class="primary-color ml-2">{{ plan.name }}</span>
    </v-breadcrumbs>

    <v-row>
      <v-col v-if="switchMap" class="mb-4" cols="12">
        <GmapMap
            :center="getCenter().lat > 0 || getCenter().lat < 0 ? getCenter() : { lat: 0, lng: 0 }"
            :disableDefaultUI="true"
            :zoom="16"
            style="width: 100%; height: 450px"
        >
          <gmap-info-window
              :conent="infoContent"
              :opened="infoOpened"
              :options="infoOptions"
              :position="infoPosition"
              @closeclick="infoOpened = false"
          >{{ infoContent }}
          </gmap-info-window>
          <GmapMarker
              v-for="(m, index) in customers"
              :key="index"
              :animation="2"
              :clickable="true"
              :draggable="false"
              :icon="markerOptions"
              :label="(index + 1).toString()"
              :position="getMarkers(m)"
              @click="toggleInfo(m, index)"
          />
        </GmapMap>
      </v-col>

      <v-col v-if="!switchMap">
        <div class="iframe-container">
          <iframe :src="plan.embed" class="embed" height="100%" width="100%"></iframe>
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
        <v-btn class="btn-primary" @click="editCompanyPlan(plan.id)">Update</v-btn>
      </v-col>
      <v-col>
        <h4>ລວມລູກຄ້າ {{ pagination.total }} ຄົນ</h4>
        <h4 v-if="countExpectTrash">
          ຂີ້ເຫຍື້ອຄາດໝາຍ: {{
            Intl.NumberFormat().format(countExpectTrash.expect_bag) + ' '
            +
            getCustomerUnitFunc(countExpectTrash.cost_by)
          }}
        </h4>
      </v-col>
      <v-col>
        <v-text-field
            v-model="search"
            clearable
            dense
            label="ຊື່ລູກຄ້າ"
            outlined
            prepend-inner-icon="mdi-magnify"
            type="text"
            @keyup.enter="Search()"
        ></v-text-field>
      </v-col>
    </v-row>

    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table
                :disable-pagination="true"
                :headers="headers"
                :items="customers"
                :search="search"
                hide-default-footer
            >
              <template v-slot:item.customer="{ item }">
                <div
                    v-if="(item.customer.customer_type = 'company')"
                >{{ item.customer.company_name }}
                </div>
                <div>
                  {{ item.customer.name }}
                  {{ item.customer.surname }}
                </div>
              </template>

              <template v-slot:item.customer.can_collect="{ item }">
                <v-chip
                    :color="item.customer.can_collect ? 'success' : 'error'"
                >{{ item.customer.can_collect ? "ເກັບໄດ້" : "ເກັບບໍ່ໄດ້" }}
                </v-chip>
              </template>

              <template v-slot:item.status="{ item }">
                <v-chip
                    v-if="item.customer"
                    :color="statusColor(item.customer.status)"
                >{{ item.customer.status }}
                </v-chip>
              </template>

              <template v-slot:item.customer.package.package_size.bag="{ item }">
                <v-chip v-if="item.customer.package && item.customer.package.package_size" color="green" outlined>
                  {{ Intl.NumberFormat().format(item.customer.package.package_size.bag) }}
                  {{ getCustomerUnitFunc(item.customer.cost_by) }}
                </v-chip>
                <div v-else>-</div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon class="mr-2" small @click="viewPage(item)">mdi-eye</v-icon>
              </template>
            </v-data-table>
            <br/>
            <template>
              <Pagination
                  v-if="pagination.total_pages > 1"
                  :offset="offset"
                  :pagination="pagination"
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
import {getCustomerUnit} from "@/Helpers/Customer";

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
      per_page: 100,
      search: "",
      oldVal: "",
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      plan: {},

      headers: [
        {
          text: "ລຳດັບຄວາມສຳຄັນ",
          value: "priority",
          sortable: false,
          align: "center"
        },
        {text: "ລູກຄ້າ", value: "customer"},
        {text: "ຂີ້ເຫຍື້ອຄາດໝາຍ", value: "customer.package.package_size.bag"},
        {text: "ສະຖານະເກັບ", value: "customer.can_collect"},
        {text: "ສະຖານະ", value: "status", sortable: false},
        {text: "ເຮືອນເລກທີ", value: "customer.house_number", sortable: false},
        {text: "", value: "actions", sortable: false}
      ],
      //Map
      latlng: {
        lat: 0,
        lng: 0
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
          b: "px"
        },
        scaledSize: {
          width: 28,
          height: 48,
          f: "px",
          b: "px"
        }
      },

      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      countExpectTrash: {
        expect_bag: 0,
        cost_by: ""
      }
    };
  },
  methods: {
    getCustomerUnitFunc(costBy) {
      return getCustomerUnit(costBy);
    },
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData(isCountTrash = false) {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("route-plan/" + this.$route.params.id + "/route-plan-detail", {
            params: {
              page: this.pagination.current_page,
              per_page: this.per_page,
              without_month_info: true,
              count_expect_trash: isCountTrash ? "1" : "0",
              // filter: this.search,
              villages: this.selectedVillage
            }
          })
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                if (isCountTrash) {
                  this.countExpectTrash = res.data.data[0];
                } else {
                  this.$store.commit("Loading_State", false);
                  this.customers = res.data.data.data;
                  this.pagination = res.data.data.pagination;
                  this.getCenter();
                }
              }, 100);
            }
          })
          .catch(error => {
            this.$store.commit("Loading_State", false);
            if (error.response && error.response.status == 422) {
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
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.plan = res.data.data;
                console.log(this.plan);
              }, 100);
            }
          })
          .catch(() => {
          });
    },

    fetchAddress() {
      this.$axios
          .get("info/address", {params: {filter: "ນະຄອນຫລວງວຽງຈັນ"}})
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.address = res.data.data;
                this.address.map(item => {
                  this.districts = item.districts;
                });
              }, 100);
            }
          })
          .catch(() => {
          });
    },

    fetchVillage() {
      this.$axios
          .get("info/district/" + this.selectedDistrict + "/village")
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.villages = res.data.data;
              }, 100);
            }
          })
          .catch(() => {
          });
    },

    createPage() {
      // console.log(this.customers);
      this.$router.push({
        name: "CreateExportPlan",
        params: {
          items: this.customers,
          villages: this.selectedVillage
        }
      });
      this.$emit("create-plan", this.customers, this.selectedVillage);
    },
    editCompanyPlan(id) {
      console.log(id);
      this.$router.push({
        name: "EditHomeRoutePlanNoMap",
        params: {id}
      });
    },

    viewPage(data) {
      if (data.customer.customer_type == "company") {
        this.$router.push({
          name: "ViewCompanyDetail",
          params: {id: data.customer_id}
        });
      } else if (data.customer.customer_type == "home") {
        this.$router.push({
          name: "ViewClient",
          params: {id: data.customer_id}
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
          lng: parseFloat(this.customers[0].customer.lng)
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.customer.lat),
          lng: parseFloat(m.customer.lng)
        };
      }
    },

    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent =
          m.priority +
          " " +
          m.customer.name +
          " (" +
          m.customer.house_number +
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
    }
  },

  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
        this.fetchData(true);
      }
    },
    selectedVillage: function () {
      this.fetchData();
      this.fetchData(true);
    },
    selectedDistrict: function () {
      this.fetchVillage();
    }
  },
  created() {
    this.fetchData();
    this.fetchData(true);
    this.fetchDetail();
    // this.fetchAddress();
    console.log(this.plan);
  }
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

.embed {
  min-height: 400px;
}
</style>
