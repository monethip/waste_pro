<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      Plan Detail</v-breadcrumbs
    >
    <v-row>
      <v-col cols="12" class="mb-4" v-if="switchMap">
        <GmapMap
          :center="getCenter()"
          :zoom="16"
          style="width: 100%; height: 450px"
          :disableDefaultUI="true"
        >
          <GmapMarker
            :key="index"
            v-for="(m, index) in customers"
            :position="getMarkers(m)"
            @click="latlng = m.position"
            :draggable="false"
            @dragend="onLocation"
            :icon="markerOptions"
            :animation="2"
            :clickable="true"
            ref="getMarkers()"
          />
        </GmapMap>
      </v-col>

      <v-col v-if="!switchMap">
        <v-card>
          <v-card-text>
            <div class="iframe-container">
              <div v-html="plan.embed"></div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="viewMap()"
          ><v-icon>mdi-map</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4>ລວມລູກຄ້າ {{ pagination.total }} ຄົນ</h4>
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
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
            >
              <template v-slot:item.media="{ item }">
                <v-avatar
                  size="36px"
                  v-for="(img, index) in item.media"
                  :key="index"
                >
                  <img v-if="img.thumb" :src="img.thumb" />
                </v-avatar>
              </template>
              <template v-slot:item.status="{ item }">
                <v-chip :color="statusColor(item.customer.status)">{{
                  item.customer.status
                }}</v-chip>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
              </template> </v-data-table
            ><br />
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
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  data() {
    return {
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
        { text: "ລຳດັບ", value: "priority", sortable: false, align: "center" },
        { text: "ຊື່", value: "customer.name" },
        { text: "ນາມສະກຸນ", value: "customer.surname" },
        { text: "ສະຖານະ", value: "status", sortable: false },
        { text: "ເຮືອນເລກທີ", value: "customer.house_number", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      toast: {
        value: true,
        color: "success",
        msg: "",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },

      //Map
      latlng: {
        lat: 18.1189434,
        lng: 102.290218,
      },
      markers: [],
      places: [],
      currentPlace: null,
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
    fetchDetail() {
      this.$axios
        .get("route-plan/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.plan = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
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
        .catch(() => {});
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
        .catch(() => {});
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

    viewPage(id) {
      this.$router.push({
        name: "ViewCustomer",
        params: { id },
      });
    },
    viewMap() {
      this.switchMap = !this.switchMap;
      // if (this.switchMap == true) {
      //   this.switchMap = false;
      // } else{

      // }
    },
    Search() {
      GetOldValueOnInput(this);
    },

    //Google map

    //Set Googlemap Api
    createNewAddressName() {
      const CUSTOMIZE = "#CUSTOM ADDRESS:";
      return this.isCreate
        ? this.currentAddress
        : `${CUSTOMIZE} ${this.latlng.lat}, ${this.latlng.lng}`;
    },
    onLocation(evt) {
      this.latlng.lat = evt.latLng.lat();
      this.latlng.lng = evt.latLng.lng();
      this.address = this.createNewAddressName();
      //   this.customer_edit.latitude = this.center.lat;
      //   this.customer_edit.longitude = this.center.lng;
    },
    setPlace(place) {
      this.currentPlace = place;
      this.placeMarker();
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.latlng = marker;
        this.currentPlace = null;
      }
    },
    placeMarker() {
      this.markers = [];
      this.places = [];
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.latlng = marker;
        this.animateMarker();
      } else {
        const marker = {
          lat: this.latlng.lat,
          lng: this.latlng.lng,
        };
        this.markers.push({ position: marker });
      }
      // set address
      if (this.$refs.searchInput) {
        this.address = this.$refs.searchInput.$el.value;
      } else {
        // this.address = this.currentPlace.formatted_address;
      }
      this.onDataChange();
    },

    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.placeMarker();
      });
    },
    onDataChange() {
      this.$emit("onDataChange", {
        address: this.address,
        position: this.latlng,
      });
      // console.log(this.center);
    },

    onSave() {
      this.$emit("onSave", {
        address: this.address || this.currentAddress || "Unnamed Location",
        position: this.latlng,
        isCreate: this.isCreate,
      });
    },

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
      return {
        lat: parseFloat(m.customer.lat),
        lng: parseFloat(m.customer.lng),
      };
    },

    getSiteIcon(status) {
      try {
        switch (status) {
          case 1:
            return require("@coms/../../src/assets/pin1.svg");

          case 2:
            return require("@coms/../../src/assets/pin2.svg");

          case 3:
            return require("@coms/../../src/assets/pin3.svg");

          default:
            return require("@coms/../../src/assets/pin1.svg");
        }
      } catch (e) {
        return null;
      }
    },

    toggle() {
      console.log(this.likesAllFruit);
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.selectedVillage = [];
        } else {
          // this.selectedVillage = this.villages.slice();
          this.villages.filter((item) => {
            this.selectedVillage.push(item.id);
          });
          console.log(this.selectedVillage);
        }
      });
    },
    statusColor(value) {
      if (value == "active") return "success";
      else if (value == "inactive") return "error";
      else return "info";
    },
  },
  computed: {
    likesAllFruit() {
      return this.selectedVillage.length === this.villages.length;
    },
    likesSomeFruit() {
      return this.selectedVillage.length > 0 && !this.likesAllFruit;
    },
    icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
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
  mounted() {
    this.geolocate();
  },
  created() {
    this.fetchData();
    this.fetchDetail();
    this.fetchAddress();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>