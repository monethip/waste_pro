<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-chevron-left</v-icon></v-btn
      >
      ລາຍລະອຽດລູກຄ້າ</v-breadcrumbs
    >
    <v-card>
      <div v-for="(item, index) in data.media" :key="index">
        <v-img :src="item.thumb" alt="Image" height="500px" dark> </v-img>
      </div>

      <v-card-text>
        <v-container>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-account-circle-outline </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  >{{ data.name }} {{ data.surname }}</v-list-item-title
                >
                <v-list-item-subtitle>ຊື່ ແລະ ນາມສະກຸນ</v-list-item-subtitle>
              </v-list-item-content>

              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-icon class="mr-6" color="indigo">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="data.user">
                  {{ data.house_number }}</v-list-item-title
                >
                <v-list-item-subtitle>ເຮືອນເລກທີ</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
          </v-row>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-if="data.user">
                  {{ data.user.phone }}</v-list-item-title
                >
                <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-icon class="mr-6" color="indigo">mdi-email</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="data.user">
                  {{ data.user.phone }}</v-list-item-title
                >
                <v-list-item-subtitle>Email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  v-for="dist in data.customer_village_details"
                  :key="dist.id"
                  ><span>{{ dist.name }}</span></v-list-item-title
                >
                <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-row>

          <v-row>
            <v-col cols="12" class="mb-4">
              <GmapMap
                :center="latlng"
                :zoom="16"
                style="width: 100%; height: 450px"
                :disableDefaultUI="true"
              >
                <GmapMarker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  @click="latlng = m.position"
                  :draggable="true"
                  @dragend="onLocation"
                  :icon="markerOptions"
                  :animation="2"
                  ref="markers"
                />
              </GmapMap>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="editPage(data.id)"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      loading: false,
      server_errors: {},
      provinces: [],
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: "",
      village_details: [],
      selectedVillageDetail: [],

      address: [],
      errormsg: "",
      preview_list: [],
      image_list: [],
      image: [],
      //Map
      latlng: {
        lat: 18.1189434,
        lng: 102.290218,
      },
      markers: [],
      currentPlace: null,
      markerOptions: {
        // eslint-disable-next-line global-require
        url: require("@coms/../../src/assets/pin.png"),
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
      },

      //Validation
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      passwordConfirmRules: [
        (v) => !!v || "Password Confirm is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
          (v && v.length >= 4 && v.length <= 11) ||
          "Phone number must be  4 - 11 numbers",
      ],
      houseNumberRules: [(v) => !!v || "House number is required"],
      ruleVillage: [(v) => !!v || "Village is required"],
      rulesDistrict: [(v) => !!v || "District is required"],
      rules: [
        (v) => !!v || "File is required",
        (v) => (v && v.size > 0) || "File is required",
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("customer/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.data = res.data.data;
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

    // fetchAddress() {
    //   this.$axios
    //     .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.address = res.data.data;
    //           this.address.map((item) => {
    //             this.districts = item.districts;
    //             this.selectedDistrict = this.districts[0].id;
    //           });
    //           this.fetchVillage();
    //         }, 300);
    //       }
    //     })
    //     .catch(() => {});
    // },

    // fetchVillage() {
    //   this.$axios
    //     .get("info/district/" + this.selectedDistrict + "/village")
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.villages = res.data.data;
    //           this.selectedVillage = this.villages[0].id;
    //           this.fetchVillageDetail();
    //         }, 300);
    //       }
    //     })
    //     .catch(() => {});
    // },
    // fetchVillageDetail() {
    //   this.$axios
    //     .get("info/village/" + this.selectedVillage + "/village-detail")
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.village_details = res.data.data;
    //         }, 300);
    //       }
    //     })
    //     .catch(() => {});
    // },

    backPrevios() {
      this.$router.go(-1);
    },

    //Set Googlemap Api
    onLocation(evt) {
      this.latlng.lat = evt.latLng.lat();
      this.latlng.lng = evt.latLng.lng();
      this.address = this.createNewAddressName();
      this.data.latitude = this.center.lat;
      this.data.longitude = this.center.lng;
    },
    setPlace(place) {
      this.currentPlace = place;
      this.placeMarker();
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
      } else {
        const marker = {
          lat: this.data.latitude,
          lng: this.data.longitude,
        };
        this.markers.push({ position: marker });
        console.log(this.markers);
      }
      // set address
      if (this.$refs.searchInput) {
        this.address = this.$refs.searchInput.$el.value;
      } else {
        // this.address = this.currentPlace.formatted_address;
      }
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

    editPage(id) {
      this.$router.push({
        name: "EditCustomer",
        params: { id },
      });
    },
  },
  watch: {
    selectedDistrict: function () {
      this.fetchVillage();
    },
    selectedVillage: function () {
      this.fetchVillageDetail();
    },
  },
  mounted() {
    this.geolocate();
  },

  created() {
    // this.fetchAddress();
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>