<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ເພີ່ມຂໍ້ມູນລູກຄ້າ</v-breadcrumbs
    >
    <v-card>
      <v-card-text class="px-12">
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
                      accept="image/*"
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
            <v-col
              align="center"
              class="mt-5"
              v-for="(item, index) in preview_list"
              :key="index"
            >
              <v-avatar class="avatar rounded mr-2" size="94px">
                <img :src="item" alt="Image" />
              </v-avatar>
              <p class="mb-0">File name: {{ image_list[index].name }}</p>
              <span>size: {{ image_list[index].size / 1024 }}KB</span>
              <div @click="RemoveItem(item)">
                <v-icon style="cursor: pointer">mdi-delete</v-icon>
              </div>
            </v-col>
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
                :rules="surNameRules"
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
                v-model="data.phone"
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
                label="Email"
                required
                v-model="data.email"
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
                {{ server_errors.district_id }}
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
                {{ server_errors.village_id }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                v-model="village_variation_id"
                :items="addressdetail"
                :rules="ruleVariation"
                item-text="name"
                item-value="id"
                label="ໜ່ວຍ"
                multiple
              >
              </v-autocomplete>
              <p class="errors">
                {{ server_errors.village_details }}
              </p>
            </v-col>

            <v-col cols="6">
              <v-autocomplete
                v-model="selectedVillageDetail"
                :items="units"
                item-text="name"
                item-value="id"
                label="ຮ່ອມ"
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
              </v-autocomplete>
              <p class="errors">
                {{ server_errors.village_details }}
              </p>
            </v-col>
            <!--
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
            <v-col cols="6">
              <v-text-field
                label="Password *"
                type="password"
                v-model="data.password"
                :rules="passwordRules"
                required
              ></v-text-field>
              <p class="errors">
                {{ server_errors.password }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Password Confirm *"
                type="password"
                v-model="data.password_confirmation"
                :rules="passwordConfirmRules"
                required
              ></v-text-field>
              <p class="errors">
                {{ server_errors.password_confirmation }}
              </p>
            </v-col>

            <!-- Gogle map-->
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

            <v-col cols="12">
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
            @click="AddData()"
          >
            Save
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
      village_variation_id: [],
      selectedVillageDetail: [],
      units: [],
      addressdetail: [],

      address: [],
      errormsg: "",
      //Map
      latlng: {
        lat: 18.1189434,
        lng: 102.290218,
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

      preview_list: [],
      image_list: [],
      image: [],

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
      surNameRules: [
        (v) => !!v || "SurName is required",
        (v) => (v && v.length >= 2) || "SurName must be less than 2 characters",
      ],

      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
          (v && v.length >= 4 && v.length <= 11) ||
          "Phone number must be  4 - 11 numbers",
      ],
      houseNumberRules: [(v) => !!v || "House number is required"],
      ruleVillage: [(v) => !!v || "Village is required"],
      ruleVariation: [(v) => !!v || "Variation is required"],
      rulesDistrict: [(v) => !!v || "District is required"],
    };
  },
  methods: {
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
            }, 100);
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
              this.fetchUnit();
              this.fetchVillageDetail();
              this.fetchVillageVariation();
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
              // console.log(this.village_details);
              // res.data.data.map((item) => {
              //   this.units = item.village_details;
              //   // console.log(this.units)
              // });
            }, 100);
          }
        })
        .catch(() => {});
    },
    fetchVillageVariation() {
      this.$axios
        .get("info/village/" + this.selectedVillage + "/village-detail")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.addressdetail = res.data.data;
              res.data.data.map((item) => {
                this.units = item.village_details;
                // console.log(this.units)
              });
              console.log(this.addressdetail)
              // this.pagination = res.data.data.pagination;
            }, 100);
          }
        })
        .catch(() => {});
    },

    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      let formData = new FormData();
      this.image_list.map((item) => {
        formData.append("images[]", item);
      });
      this.selectedVillageDetail.map((item) => {
        formData.append("village_details[]", item);
      });
      formData.append("name", this.data.name);
      formData.append("surname", this.data.surname);
      formData.append("village_id", this.selectedVillage);
      formData.append("house_number", this.data.house_number);
      formData.append("lat", this.latlng.lat);
      formData.append("lng", this.latlng.lng);
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
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
                this.$router.push({
                  name: "Customer",
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            if (error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
            this.loading = false;
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
    fetchUnit() {
      // this.village_details.filter((item) => {
      //   this.units = item.village_details;
      //   console.log(this.units);
      //   // console.log(item.village_details);
      //   // item.village_details.forEach((data) => {
      //   //   console.log(data);
      //   //   data.filter((i) => {
      //   //     console.log(i);
      //   //     return i.village_variation_id === this.village_variation_id;
      //   //   });
      //   // });
      //
      //   // // var a = item.id === this.village_variation_id;
      //   // // console.log(a);
      //   // // this.units.push(item.id === this.village_variation_id);
      //   // console.log("Unit" + this.units);
      // });
    },
    removeItem(item) {
      const index = this.selectedVillageDetail.indexOf(item.id);
      if (index >= 0) this.selectedVillageDetail.splice(index, 1);
    },
  },
  watch: {
    selectedDistrict: function () {
      this.fetchVillage();
    },
    selectedVillage: function () {
      // this.fetchVillageDetail();
      this.fetchVillageVariation();
    },
    village_variation_id: function () {
      if (this.village_variation_id) {
        // this.fetchUnit();
      }
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