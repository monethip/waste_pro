<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      Update Customer</v-breadcrumbs
    >
    <v-card>
      <v-card-title>
        <span class="headline">Update Customer</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col align="center">
                <div class="field">
                  <div class="file is-large is-boxed">
                    <label class="file-label">
                      <input
                        @change="previewMultiImage"
                        class="file-input input-file-image"
                        type="file"
                        name="resume"
                        multiple
                      />
                      <span class="file-cta">
                        <span class="file-icon">
                          <v-icon
                            style="
                              font-size: 60px !important;
                              color: #719aff;
                              cursor: pointer;
                            "
                            class="fas fa-cloud-upload"
                            >mdi-cloud-upload</v-icon
                          >
                        </span>
                        <span
                          class="file-label"
                          style="
                            margin-top: 10px;
                            text-transform: uppercase;
                            padding-top: 20px;
                          "
                        >
                          Choose Image
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <div v-if="image_list.length > 0" style="display: inline-flex">
                <v-col
                  align="center"
                  v-for="(item, index) in preview_list"
                  :key="index"
                  class="mt-5"
                >
                  <div>
                    <v-avatar class="avatar rounded mr-6" size="94px">
                      <img :src="item" alt="Image" />
                    </v-avatar>
                    <p class="mb-0 body-2">
                      Name: {{ image_list[index].name }}
                    </p>
                    <span class="body-2"
                      >size: {{ image_list[index].size / 1024 }}KB</span
                    >
                    <div @click="RemoveItem(item)" class="mt-2">
                      <v-icon style="cursor: pointer">mdi-delete</v-icon>
                    </div>
                  </div>
                </v-col>
              </div>
              <div v-else>
                <v-col align="center" class="mt-5">
                  <v-avatar
                    v-for="(item, index) in data.media"
                    :key="index"
                    class="avatar rounded mr-6"
                    size="94px"
                  >
                    <img :src="item.thumb" alt="Image" />
                  </v-avatar>
                </v-col>
              </div>
            </v-row>
            <v-row>
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
                  v-if="data.user"
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
                  v-if="data.user"
                  label="Email"
                  v-model="data.user.email"
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.email }}
                </p>
              </v-col>
              <v-col cols="6">
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
                  {{ errormsg }}
                </p>
              </v-col>

              <v-col cols="6">
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
                  {{ errormsg }}
                </p>
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="village_variation_id"
                  :items="village_details"
                  item-text="name"
                  item-value="id"
                  label="ກຸ່ມ / ຄຸ້ມ"
                  multiple
                >
                </v-select>
                <p class="errors">
                  {{ server_errors.village_details }}
                </p>
              </v-col>

              <v-col cols="6">
                <v-select
                  v-model="selectedVillageDetail"
                  :items="units"
                  item-text="name"
                  item-value="id"
                  label="ຮ່ອມ / ໜ່ວຍ"
                  multiple
                >
                  <template v-slot:selection="data">
                    <v-chip
                      v-bind="data.attrs"
                      :input-value="data.selected"
                      close
                      @click="data.select"
                      @click:close="removeItem(data.item)"
                    >
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                </v-select>
                <p class="errors">
                  {{ server_errors.village_details }}
                </p>
              </v-col>
              <!--
              <v-col cols="6">
                <v-select
                  v-model="selectedVillageDetail"
                  :items="units"
                  item-text="name"
                  item-value="id"
                  label="ຮ່ອມ / ໜ່ວຍ"
                  multiple
                ></v-select>
                <p class="errors">
                  {{ server_errors.village_details }}
                </p>
              </v-col>
              -->

              <!-- Gogle map-->
              <v-col cols="6">
                <v-text-field
                  label="Latitude"
                  v-model="data.lat"
                  type="number"
                  class="input-number"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Longitude"
                  v-model="data.lng"
                  type="number"
                  class="input-number"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <gmap-autocomplete
                  ref="searchInput"
                  class="input text-field map"
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
                  :center="getCenter()"
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
      village_variation_id: "",
      selectedVillageDetail: "",
      units: [],

      address: [],
      errormsg: "",
      preview_list: [],
      image_list: [],
      image: [],
      //Map
      latlng: {
        lat: 0,
        lng: 0,
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
              this.selectedVillage = res.data.data.village_id;
              res.data.data.village_details.map((item) => {
                this.village_variation_id = item.village_variation_id;
                this.selectedVillageDetail = item.id;
              });
              this.getCenter();
            }, 300);
          }
        })
        .catch(() => {
          this.$store.commit("Loading_State", false);
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
        .get("info/village/" + this.selectedVillage)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.village_details = res.data.data.village_variations;
              res.data.data.village_variations.map((item) => {
                this.units = item.village_details;
              });
            }, 100);
          }
        })
        .catch(() => {});
    },

    backPrevios() {
      this.$router.go(-1);
    },
    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },

    previewMultiImage: function (event) {
      let input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          };
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },

    UpdateData() {
      let formData = new FormData();
      this.image_list.map((item) => {
        formData.append("images[]", item);
      });
      // console.log(this.selectedVillageDetail);
      // this.selectedVillageDetail.map((item) => {
      //   formData.append("village_details[]", item);
      // });
      formData.append("name", this.data.name);
      formData.append("surname", this.data.surname);
      formData.append("village_id", this.selectedVillage);
      formData.append("house_number", this.data.house_number);
      formData.append("phone", this.data.user.phone);
      formData.append("email", this.data.user.email);
      formData.append("lat", this.latlng.lat);
      formData.append("lng", this.latlng.lng);
      formData.append("_method", "PUT");

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("customer/" + this.$route.params.id, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.data = {};
                this.$store.commit("Toast_State", res.data.message);
                this.loading = false;
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
      this.data.lat = this.latlng.lat;
      this.data.lat = this.latlng.lng;
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
          lat: parseFloat(this.data.lat),
          lng: parseFloat(this.data.lng),
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
          lat: position.coords.lat,
          lng: position.coords.lng,
        };
        this.placeMarker();
      });
    },
    onDataChange() {
      this.$emit("onDataChange", {
        address: this.address,
        position: this.latlng,
      });
    },
    onSave() {
      this.$emit("onSave", {
        address: this.address || this.currentAddress || "Unnamed Location",
        position: this.latlng,
        isCreate: this.isCreate,
      });
    },
    getCenter() {
      if (this.data.lat) {
        const latlng = {
          lat: parseFloat(this.data.lat),
          lng: parseFloat(this.data.lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(data) {
      return {
        lat: parseFloat(data.lat),
        lng: parseFloat(data.lng),
      };
    },

    fetchUnit() {
      this.village_details.filter((item) => {
        this.units = item.village_details;
        // item.village_details.forEach((data) => {
        //   console.log(data);
        //   data.filter((i) => {
        //     console.log(i);
        //     return i.village_variation_id === this.village_variation_id;
        //   });
        // });

        // // var a = item.id === this.village_variation_id;
        // // console.log(a);
        // // this.units.push(item.id === this.village_variation_id);
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
    // village_variation_id: function () {
    //   if (this.village_variation_id) {
    //     // this.selectedVillageDetail = this.village_variation_id;
    //   }
    //   console.log(this.selectedVillageDetail);
    //   // this.fetchUnits();
    // },
    village_variation_id: function () {
      if (this.village_variation_id) {
        this.fetchUnit();
      }
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
</style>