<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"></v-btn>
      <v-icon>mdi-keyboard-backspace</v-icon> ເລືອກຄົນຂັບ
    </v-breadcrumbs>
    <v-row>
      <v-col>
        <v-autocomplete v-model="data.driver_id" :items="driverWithCar" item-text="name" item-value="id"
          label="ພະນັກງານຂັບລົດ" dense outlined></v-autocomplete>
        <p class="errors">{{ server_errors.driver_id }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn style="width:100%" @click="UpdateData()" color="blue" dark>ບັນທຶກ</v-btn>
      </v-col>
      <v-col>
        <v-btn style="width:100%" @click="backPrevios()">ປິດ</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getLaoCollectStatus } from "@/Helpers/BillingStatus";
import { getEventStatus } from "@/Helpers/Customer";

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
      driver: [],
      date: "",
      collectionStatus: getEventStatus,
      start_menu: false,
      time: "",
      time_menu: false,
      errormsg: "",
      //Map
      latlng: {
        lat: 18.1189434,
        lng: 102.290218
      },
      markers: [],
      currentPlace: null,
      markerOptions: {
        // eslint-disable-next-line global-require
        url: require("@coms/../../src/assets/pin1.svg"),
        size: {
          width: 35,
          height: 55,
          f: "px",
          b: "px"
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: "px",
          b: "px"
        }
      },

      preview_list: [],
      image_list: [],
      image: [],

      //Validation
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 2) || "Name must be less than 2 characters"
      ],
      statusRule: [v => !!v || "Status is required"]
    };
  },
  computed: {
    statusColor() {
      if (!this.data) return ""
      const status = this.collectionStatus.find(item => item.en == this.data.collect_status)
      return status ? status.color : "";
    },
    driverWithCar() {
      let data = [];
      for (const item of this.driver) {
        data.push(
          {
            id: item.id,
            name: item.name + ' ' + item.surname + ' (' + item.vehicle.car_id + ')',
          }
        )
      }
      return data
    },
  },
  methods: {
    filterCollectStatus(status) {
      return getLaoCollectStatus(status.name)
    },
    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },
    fetchCollection() {
      this.$axios
        .get("v2/collection-event/" + this.$route.params.id)
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.data = res.data.data;
              this.collect_status = res.data.data.collect_status;
              this.selectedDistrict = this.data.village.district_id;
              this.selectedVillage = this.data.village_id;
              console.log(this.data);
              this.time = this.moment(res.data.data.date).format("hh:mm");
              this.date = this.moment(res.data.data.date).format("YYYY-MM-DD");
            }, 300);
          }
        })
        .catch({});
    },
    fetchDriver() {
      this.$axios
        .get("driver")
        .then(res => {
          if (res.data.code == 200) {
            this.driver = res.data.data;
          }
        })
        .catch({});
    },
    previewMultiImage: function (event) {
      let input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          let reader = new FileReader();
          reader.onload = e => {
            this.preview_list.push(e.target.result);
          };
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },

    fetchAddress() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then(res => {
          if (res.data.code == 200) {
            this.address = res.data.data;
            this.address.map(item => {
              this.districts = item.districts;
              this.selectedDistrict = this.districts[0].id;
            });
            this.fetchVillage();
          }
        })
        .catch(() => { });
    },

    fetchVillage() {
      this.$axios
        .get("info/district/" + this.selectedDistrict + "/village")
        .then(res => {
          if (res.data.code == 200) {
            this.villages = res.data.data;
            this.selectedVillage = this.villages[0].id;
          }
        })
        .catch(() => { });
    },
    backPrevios() {
      this.$router.go(-1);
    },
    UpdateData() {
      let formData = new FormData();
      this.image_list.map(item => {
        formData.append("collect_location[]", item);
      });
      formData.append("name", this.data.name);
      formData.append("surname", this.data.surname);
      formData.append("village_id", this.data.village_id);
      formData.append("lat", this.data.lat);
      formData.append("lng", this.data.lng);
      formData.append("phone", this.data.phone);
      formData.append("date", this.data.date);
      // formData.append("date", this.moment(dateTime).format("y-m-d hh:mm:ss"));
      formData.append("total", this.data.billing.total);
      if (this.data.driver_id) formData.append("driver_id", this.data.driver_id);
      formData.append("collect_status", this.data.collect_status);
      formData.append("_method", "PUT");

      this.loading = true;
      this.$axios
        .post("v2/collection-event/" + this.$route.params.id, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message
              });
              this.$router.push({
                name: "event-invoice"
              });
            }, 300);
          }
        })
        .catch(error => {
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message
          });
          if (error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, data] of Object.entries(obj)) {
              this.server_errors[key] = data[0];
            }
          }
          this.loading = false;
          this.fetchData();
        });
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
      //   this.customer_edit.latitude = this.center.lat;
      //   this.customer_edit.longitude = this.center.lng;
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
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.latlng = marker;
        this.animateMarker();
      } else {
        const marker = {
          lat: this.latlng.lat,
          lng: this.latlng.lng
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
      navigator.geolocation.getCurrentPosition(position => {
        this.latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.placeMarker();
      });
    },
    onDataChange() {
      this.$emit("onDataChange", {
        address: this.address,
        position: this.latlng
      });
      // console.log(this.center);
    },
    fetchUnit() {
      const result = this.addressdetail.filter(({ id }) =>
        this.village_variation_id.includes(id)
      );
      result.map(item => {
        for (let i = 0; i < item.village_details.length; i++) {
          this.units.push(item.village_details[i]);
        }
      });
    },
    removeItem(item) {
      const index = this.selectedVillageDetail.indexOf(item.id);
      if (index >= 0) this.selectedVillageDetail.splice(index, 1);
    },
    reset() {
      this.$refs.form.reset();
    }
  },
  watch: {
    selectedDistrict: function () {
      this.fetchVillage();
    },
    //Clear error change
    "data.name": function () {
      this.server_errors.name = "";
    },
    "data.surname": function () {
      this.server_errors.surname = "";
    },
    selectedVillage: function () {
      this.server_errors.village_id = "";
    },
    date: function () {
      this.server_errors.date = "";
    },
    driver_id: function () {
      this.server_errors.driver_id = "";
    },
    "data.driver_id": function () {
      this.server_errors.driver_id = "";
    },
    "data.sub_total": function () {
      this.server_errors.sub_total = "";
    },
    "data.phone": function () {
      this.server_errors.phone = "";
    },
    "data.discount": function () {
      this.server_errors.email = "";
    }
  },
  mounted() {
    this.geolocate();
  },
  created() {
    this.fetchDriver();
    this.fetchAddress();
    this.fetchCollection();
  }
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

.main-card {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background-color: aqua;
}

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
  border-radius: 2px;
}
</style>
