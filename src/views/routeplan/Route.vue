<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      Route Map</v-breadcrumbs
    >
    <v-card>
      <v-card-text>
        <v-form ref="form" lazy-validation>
          <v-row>
            <v-col>
              <div class="iframe-container">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=17RC0v9KFrIxwNd8eI-ft8Sr7eKkSCMbp"
                ></iframe>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <!--
              <v-col cols="4">
                <v-autocomplete
                  required
                  :items="districts"
                  v-model="selectedDistrict"
                  item-text="name"
                  item-value="id"
                  label="District *"
                  :rulesDistrict="rulesDistrict"
                ></v-autocomplete>
                <p class="errors">
                  {{ server_errors.district_id }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  required
                  :items="villages"
                  v-model="selectedVillage"
                  item-text="name"
                  item-value="id"
                  label="Village *"
                  :rules="ruleVillage"
                ></v-autocomplete>
                <p class="errors">
                  {{ server_errors.village_id }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-select
                  required
                  v-model="selectedVillageDetail"
                  :items="village_details"
                  item-text="name"
                  item-value="id"
                  label="Village Detail"
                  multiple
                ></v-select>
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>
              -->
            <!-- Gogle map-->
            <!--
              <v-col cols="6">
                <v-text-field
                  label="Latitude"
                  v-model="latlng.lat"
                  type="number"
                  class="input-number"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Longitude"
                  v-model="latlng.lng"
                  type="number"
                  class="input-number"
                ></v-text-field>
              </v-col>
              -->
            <!--
              <v-col cols="10">
                <gmap-autocomplete
                  ref="searchInput"
                  class="input text-field"
                  placeholder="ຄົ້ນຫາເເຜນທີ່..."
                  label="Prepend inner"
                  prepend-inner-icon="mdi-map-marker"
                  @place_changed="setPlace"
                  :options="{
                    fields: ['geometry', 'formatted_address', 'name'],
                  }"
                >
                </gmap-autocomplete>
                <span class="horizontal-divider"></span>
              </v-col>
              <v-col cols="2">
                <v-btn
                  color="blue darken-1"
                  text
                  :loading="loading"
                  :disabled="loading"
                  @click="addMarker()"
                >
                  Save
                </v-btn>
              </v-col>
              <v-col cols="12" class="mb-4">
                <GmapMap
                  :center="latlng"
                  :zoom="16"
                  style="width: 100%; height: 850px"
                  :disableDefaultUI="true"
                >
                  <GmapMarker
                    :key="index"
                    v-for="(m, index) in getMarkers()"
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
              -->
          </v-row>
        </v-form>
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
        url: require("@coms/../../src/assets/pin.png"),
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
      },

      //Validation
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
    fetchAddress() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.address = res.data.data;
              this.address.map((item) => {
                this.districts = item.districts;
                this.selectedDistrict = this.districts[0].id;
              });
              this.fetchVillage();
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
              this.selectedVillage = this.villages[0].id;
              this.fetchVillageDetail();
            }, 300);
          }
        })
        .catch(() => {});
    },
    fetchVillageDetail() {
      this.$axios
        .get("info/village/" + this.selectedVillage + "/village-detail")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.village_details = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
    },
    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      console.log(this.selectedVillageDetail);
      let formData = new FormData();
      this.image_list.map((item) => {
        formData.append("images[]", item);
      });
      this.selectedVillageDetail.map((item) => {
        formData.append("vilage_details[]", item);
      });
      formData.append("name", this.data.name);
      formData.append("surname", this.data.surname);
      formData.append("village_id", this.selectedVillage);
      formData.append("house_number", this.data.house_number);
      formData.append("latitude", this.latlng.lat);
      formData.append("longitude", this.latlng.lng);
      formData.append("phone", this.data.phone);
      formData.append("email", this.data.email);
      formData.append("password", this.data.password);
      formData.append("password_confirmation", this.data.password_confirmation);

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("customer", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.$store.commit("Toast_State", res.data.message);
                this.$router.push({
                  name: "Customer",
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
            this.loading = false;
            this.fetchData();
            this.$store.commit("Toast_State", this.toast_error);
          });
      }
    },

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
      console.log(this.latlng);
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
        this.places.push(this.currentPlace);
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
        this.animateMarker();
      }
      // set address
      if (this.$refs.searchInput) {
        this.address = this.$refs.searchInput.$el.value;
      } else {
        // this.address = this.currentPlace.formatted_address;
      }
      this.onDataChange();
    },
    animateMarker() {
      this.$nextTick(() => {
        // const obj = this.$refs.markers[0].$markerObject;
        // if (obj) {
        //     obj.setAnimation(1);
        //     clearTimeout(this.timer);
        //     this.timer = setTimeout(() => {
        //         obj.setAnimation(null);
        //     }, 800);
        // }
      });
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

    getMarkers() {
      // generating markers for site map
      var markers = [];
      // remove this after lat long received from api.
      const tempLatLong = [
        { lat: 18.1189434, lng: 102.290218 },
        { lat: 18.1189434, lng: 102.240218 },
        { lat: 18.1189434, lng: 102.230218 },
        { lat: 18.1189434, lng: 102.220218 },
        { lat: 18.1189434, lng: 102.210218 },
        { lat: 18.1189434, lng: 102.200218 },
        { lat: 18.1189434, lng: 102.190218 },
        { lat: 18.1189434, lng: 102.180218 },
      ];
      for (let i = 0; i < tempLatLong.length; i++) {
        markers.push({
          position: tempLatLong[i],
          title: "test title",
          icon: this.getSiteIcon(1), // if you want to show different as per the condition.
        });
      }
      return markers;
    },
    getSiteIcon(status) {
      try {
        switch (status) {
          case 1:
            return require("@coms/../../src/assets/pin.png");

          case 2:
            return require("@coms/../../src/assets/pin.png");

          case 3:
            return require("@coms/../../src/assets/pin.png");

          default:
            return require("@coms/../../src/assets/pin.png");
        }
      } catch (e) {
        return null;
      }
    },
  },
  watch: {
    selectedDistrict: function () {
      this.fetchVillage();
    },
    selectedVillage: function () {
      this.fetchVillageDetail();
    },
    //Clear error change
    "data.name": function () {
      this.server_errors.name = "";
    },
    "data.surname": function () {
      this.server_errors.surname = "";
    },
  },
  mounted() {
    this.geolocate();
  },
  created() {
    this.fetchAddress();
    console.log(this.getMarkers());
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
.iframe-container {
  overflow: hidden;
}
.iframe-container iframe {
  border: 0;
  min-height: 720px;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}
</style>