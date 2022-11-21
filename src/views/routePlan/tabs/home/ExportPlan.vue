<template>
  <v-container>
    <v-breadcrumbs large class="mt-n4">
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-keyboard-backspace </v-icon>
      </v-btn>
      ເລືອກລູກຄ້າເຂົ້າແຜນເສັ້ນທາງ <v-spacer></v-spacer>
      <span class="mr-4">
        <v-icon color="red">mdi-map-marker</v-icon>ຍັງບໍທັນຢູ່ໃນແຜນ
      </span>
      <span>
        <v-icon style="color: #49a3da">mdi-map-marker</v-icon>ຢູ່ໃນແຜນແລ້ວ
      </span>
    </v-breadcrumbs>
    <v-row class="my-n4">
      <v-col cols="12" class="mb-4">
        <GmapMap :center="getCenter()" :zoom="14" style="width: 100%; height: 450px" :disableDefaultUI="true">
          <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" :conent="infoContent"
            @closeclick="infoOpened = false">{{ infoContent }}
          </gmap-info-window>
          <GmapMarker :key="index" v-for="(m, index) in customers" :position="getMarkers(m)"
            @click="toggleInfo(m, index)" :draggable="false" :icon="getSiteIcon(m)" :animation="2" :clickable="true"
            :label="(index + 1).toString()" />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="createPage()">Next <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4>ລວມລູກຄ້າ {{ pagination.total }} ຄົນ</h4>
      </v-col>
      <v-col>
        <v-autocomplete outlined dense :items="districts" v-model="selectedDistrict" item-text="name" item-value="id"
          label="ເມືອງ" clearable></v-autocomplete>
      </v-col>
      <!--
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
      -->
      <!--
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
      -->
    </v-row>
    <!--
    <v-row class="mb-n4">
      <v-col>
        <v-autocomplete
          outlined
          dense
          v-model="selectedVillage"
          :items="villages"
          item-text="name"
          item-value="id"
          label="ເລືອກບ້ານ"
          multiple
        >
          <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle">
              <v-list-item-action>
                <v-icon
                  :color="selectedVillage.length > 0 ? 'indigo darken-4' : ''"
                >
                  {{ icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Select All </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
-->
    <v-row>
      <v-col cols="12">
        <v-autocomplete v-model="selectedVillage" :items="villages" item-text="name" item-value="id" label="ເລືອກບ້ານ"
          filled chips color="blue-grey lighten-2" multiple clearable>
          <template v-slot:selection="data">
            <v-chip v-bind="data.attrs" :input-value="data.selected" close @click="data.select"
              @click:close="remove(data.item)">
              {{ data.item.name }}
            </v-chip>
          </template>

          <!--
          <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle">
              <v-list-item-action>
                <v-icon
                  :color="selectedVillage.length > 0 ? 'indigo darken-4' : ''"
                >
                  {{ icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Select All </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
          </template>
          -->
        </v-autocomplete>
      </v-col>
    </v-row>

    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table :headers="headers" :items="customers" :search="search" :disable-pagination="true"
              hide-default-footer>
              <template v-slot:item.address_detail="{ item }">
                <div v-for="(data, index) in item.village_details" :key="index">
                  <span>{{ data.name }}</span>
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
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
      per_page: 50,
      search: "",
      oldVal: "",
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      // selectedAllVillage: [],

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ລາຍລະອຽດທີ່ຢູ່", value: "address_detail" },
        { text: "ບ້ານ", value: "village.name", sortable: true },
        { text: "ເມືອງ", value: "district.name", sortable: true },
        // { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        { text: "", value: "actions", sortable: false },
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
         .get("customer", {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { villages: this.selectedVillage },
            { district_id: this.selectedDistrict },
            { without: ['route_plan', 'calendar'] }
          ]
          ),
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
          if (error.response && error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
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
            }, 300);
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
            }, 300);
          }
        })
        .catch(() => { });
    },

    createPage() {
      //  var a = [];
      if (this.customers.length > 0 && this.selectedVillage.length > 0) {
        this.$router.push({
          name: "CreateExportPlan",
          params: {
            items: this.customers,
            villages: this.selectedVillage,
          },
        });
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ",
        });
      }
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewCustomer",
        params: { id },
      });
    },
    remove(item) {
      const index = this.selectedVillage.indexOf(item.id);
      if (index >= 0) this.selectedVillage.splice(index, 1);
    },
    Search() {
      GetOldValueOnInput(this);
    },

    //Google map
    getCenter() {
      if (this.customers.length) {
        if (parseFloat(this.customers[0].lat) == null) {
          return this.latlng;
        } else {
          const latlng = {
            lat: parseFloat(this.customers[0].lat),
            lng: parseFloat(this.customers[0].lng),
          };
          return latlng;
        }
      }
      return this.latlng;
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.lat),
          lng: parseFloat(m.lng),
        };
      }
    },
    getSiteIcon(status) {
      var pin1 = {
        url: require("@coms/../../src/assets/pin1.svg"),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        size: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
      };
      var pin2 = {
        url: require("@coms/../../src/assets/pin2.svg"),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        size: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
      };

      try {
        switch (status.route_plan_details_count) {
          case 0:
            return pin1;
          case 1:
            return pin2;
        }
      } catch (e) {
        return pin1;
      }
    },
    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent = m.name + " (" + m.house_number + ") ";
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },

    toggle() {
      this.$nextTick(() => {
        if (this.selectedAllVillage) {
          this.selectedVillage = [];
        } else {
          setTimeout(() => {
            this.selectedVillage = this.villages.slice();
          }, 300);
        }
      });
    },
  },
  // computed: {
  //   selectedAllVillage() {
  //     return this.selectedVillage.length === this.villages.length;
  //   },
  //   selectedSomeVillage() {
  //     return this.selectedVillage.length > 0 && !this.selectedAllVillage;
  //   },
  //   icon() {
  //     if (this.selectedAllVillage) return "mdi-close-box";
  //     if (this.selectedSomeVillage) return "mdi-minus-box";
  //     return "mdi-checkbox-blank-outline";
  //   },
  // },
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
      this.fetchData();
      this.fetchVillage();
    },
  },
  created() {
    this.fetchData();
    this.fetchAddress();
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";
</style>
