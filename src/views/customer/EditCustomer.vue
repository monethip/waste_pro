<template>
  <v-container>
    <v-breadcrumbs large>Add Customer</v-breadcrumbs>
    <v-card>
      <v-card-title>
        <span class="headline">Add User</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" lazy-validation>
            <v-row>
              <!-- 
              <v-col cols="12">
                <v-file-input
                  :rules="rules"
                  accept="image/png, image/jpeg, image/svg"
                  placeholder="Pick an avatar"
                  prepend-icon="mdi-camera"
                  multiple
                  label="Profile"
                ></v-file-input>
              </v-col>
              -->
              <v-col cols="12">
                <v-file-input
                  v-model="data.media.id"
                  placeholder="Upload your image"
                  label="Image input"
                  multiple
                  prepend-icon="mdi-paperclip"
                  accept="image/png, image/jpeg, image/svg"
                  type="file"
                  ref="file"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="primary">
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
                <p class="errors">
                  {{ server_errors.images }}
                </p>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="Name *"
                  required
                  v-model="data.name"
                  :rules="nameRules"
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.name }}
                </p>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Surname *"
                  required
                  v-model="data.surname"
                  :rules="nameRules"
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.surname }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="ເຮືອນເລກທີ *"
                  required
                  v-model="data.house_number"
                  :rules="houseNumberRules"
                  type="number"
                  class="input-number"
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.house_number }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="ເບີໂທ *"
                  required
                  v-model="data.user.phone"
                  :rules="phoneRules"
                  type="number"
                  class="input-number"
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.phone }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Email *"
                  required
                  v-model="data.user.email"
                  :rules="emailRules"
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.email }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  required
                  :items="districts"
                  v-model="selectedDistrict"
                  item-text="name"
                  item-value="id"
                  label="District *"
                  :rulesDistrict="rulePermission"
                ></v-autocomplete>
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  required
                  :items="villages"
                  v-model="data.village_id"
                  item-text="name"
                  item-value="id"
                  label="Village *"
                  :rules="rulePermission"
                ></v-autocomplete>
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-select
                  required
                  v-model="selectedVillageDetail"
                  :items="village_details"
                  item-text="name"
                  item-value="id"
                  label="Village Detail *"
                  multiple
                  :rules="rulePermission"
                ></v-select>
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>

              <!-- Gogle map-->
              <v-col cols="6">
                <v-text-field
                  label="Latitude"
                  v-model="data.latitude"
                  type="number"
                  class="input-number"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Longitude"
                  v-model="data.longitude"
                  type="number"
                  class="input-number"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <gmap-autocomplete
                  ref="searchInput"
                  class="input text-field"
                  placeholder="ຄົ້ນຫາເເຜນທີ່..."
                  @place_changed="setPlace"
                  :options="{
                    fields: ['geometry', 'formatted_address', 'name'],
                  }"
                >
                </gmap-autocomplete>
                <span class="horizontal-divider"></span>
              </v-col>
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
          </v-form>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="backPrevios()">
            Back
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="UpdateData()"
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
      selectedVillageDetail: "",

      address: [],
      errormsg: "",
      files: [],
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
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
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
      rulePermission: [(v) => !!v || "Permission is required"],
      rulePermissionRole: [(v) => !!v || "Role is required"],
      rulesDistrict: [(v) => !!v || "District is required"],
      rules: [
        (v) => !!v || "File is required",
        (v) => (v && v.size > 0) || "File is required",
      ],
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      this.$axios
        .get("customer/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.data = res.data.data;
            }, 300);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.fetchData();
          if (error.response.status == 422) {
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
                this.selectedDistrict = this.districts[0].id;
                // console.log(this.selectedDistrict);
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

    // FilterVillagesDetail(selected) {
    //   //   console.log(districtId);
    //   const result_checking = this.villages.filter((item) => {
    //     // console.log(districtId);
    //     // console.log(item.villages[selected]);
    //     return item.village_details;
    //   });
    //   this.village_details = result_checking;
    //   //   console.log(this.villages);
    //   this.selectedVillageDetail = { ...this.village_details[0] };
    // },

    listFiles() {
      this.files = [];
      for (let i = 0; i < this.$refs.files.files.length; i++)
        this.files.push(this.$refs.files.files[i].name);
    },
    uploadHere() {
      let formData = new FormData();
      formData.append("imageFile", this.files);
      console.log("Uploaded");
      this.files = formData;
    },
    backPrevios() {
      this.$router.go(-1);
    },
    UpdateData() {
      //   console.log(this.data);
      // (this.data.village_id = this.selectedVillage),
      //   (this.data.vilage_details = this.selectedVillageDetail),
      //   (this.data.latitude = this.latlng.lat),
      //   (this.data.longitude = this.latlng.lng),
      //   (this.data.longitude = this.latlng.lng),
      //   (this.data.phone = this.data.user.phone),
      //   (this.data.email = this.data.user.email),
      //   (this.data.images = this.files);

      let formData = new FormData();
      this.files.map((item) => {
        formData.append("name", this.data.name);
        formData.append("surname", this.data.surname);
        formData.append("village_id", this.selectedVillage);
        formData.append("house_number", this.data.house_number);
        formData.append("vilage_details[]", this.selectedVillageDetail);
        formData.append("vilage_details[]", this.selectedVillageDetail);
        formData.append("latitude", this.latlng.lat);
        formData.append("longitude", this.latlng.lng);
        formData.append("phone", this.data.user.phone);
        formData.append("email", this.data.user.email);
        formData.append("images[]", item);
      });

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .put("customer/" + this.$route.params.id, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                // this.loading = false;
                // this.data = {};
                // this.fetchData();
                this.$store.commit("Toast_State", res.data.message);
                this.$router.push({
                  name: "Customer",
                });
                // this.reset();
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
    "data.house_number": function () {
      this.server_errors.house_number = "";
    },
    "data.phone": function () {
      this.server_errors.phone = "";
      this.server_errors.email = "";
    },
    "data.email": function () {
      this.server_errors.email = "";
    },
    "data.password": function () {
      this.server_errors.password = "";
    },
    "data.password_confirmation": function () {
      this.server_errors.password = "";
    },
  },
  mounted() {
    this.geolocate();
  },

  created() {
    this.fetchAddress();
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>