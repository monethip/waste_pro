<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ເພີ່ມຂໍ້ມູນບໍລິສັດ</v-breadcrumbs
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
            <v-col cols="4">
              <v-text-field
                label="ຊື່ *"
                required
                v-model="data.name"
                :rules="nameRules"
                outlined
                dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.name }}
              </p>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="ນາມສະກຸນ *"
                required
                v-model="data.surname"
                outlined
                dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.surname }}
              </p>
            </v-col>
            <v-col cols="4">
              <v-text-field
                label="ເບີໂທ *"
                required
                v-model="data.phone"
                type="number"
                class="input-number"
                outlined
                dense
              ></v-text-field>

              <p class="errors">
                {{ server_errors.phone }}
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6">
              <v-autocomplete
                required
                :items="districts"
                v-model="selectedDistrict"
                item-text="name"
                item-value="id"
                label="District *"
                :rulesDistrict="rulesDistrict"
                outlined
                dense
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
                outlined
                dense
              ></v-autocomplete>
              <p class="errors">
                {{ server_errors.village_id }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                class="input-number"
                label="ລາຄາ *"
                type="number"
                v-model="data.sub_total"
                required
                outlined
                dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.sub_total }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-text-field
                class="input-number"
                label="ສ່ວນຫຼຸດ *"
                type="number"
                v-model="data.discount"
                required
                outlined
                dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.discount }}
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-menu
                v-model="start_menu"
                :close-on-content-click="true"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="date"
                    label="ເລີ່ມວັນທີ"
                    readonly
                    outlined
                    v-bind="attrs"
                    v-on="on"
                    dense
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date"></v-date-picker>
              </v-menu>
              <p class="errors">
                {{ server_errors.date }}
              </p>
            </v-col>
            <v-col>
              <v-autocomplete
                v-model="selectedDriver"
                :items="driver"
                item-text="name"
                item-value="id"
                label="ພະນັກງານຂັບລົດ"
                dense
                outlined
              ></v-autocomplete>
              <p class="errors">
                {{ server_errors.driver_id }}
              </p>
            </v-col>
          </v-row>

          <!-- Gogle map-->
          <v-row>
            <v-col cols="6">
              <v-text-field
                label="Latitude"
                v-model="latlng.lat"
                type="number"
                class="input-number"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                label="Longitude"
                v-model="latlng.lng"
                type="number"
                class="input-number"
                outlined
                dense
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
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
      addressdetail: [],
      units: [],
      selectedCost: "",
      date: "",
      start_menu: false,
      // allowedDates: (val) => new Date(val).getDate() === 1,
      start_collect: 0,
      costs: [
        {
          id: 1,
          value: "container",
        },
        {
          id: 2,
          value: "fixed_cost",
        },
      ],
      selectedDriver: "",
      driver: [],
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
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      surNameRules: [
        (v) => !!v || "SurName is required",
        (v) => (v && v.length >= 2) || "SurName must be less than 2 characters",
      ],
      corNameRules: [(v) => !!v || "Coordinator Name is required"],
      corSurameRules: [(v) => !!v || "Coordinator SurName is required"],

      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
          (v && v.length >= 4 && v.length <= 11) ||
          "Phone number must be  4 - 11 numbers",
      ],
      ruleVillage: [(v) => !!v || "Village is required"],
      ruleVariation: [(v) => !!v || "Variation is required"],
      rulesDistrict: [(v) => !!v || "District is required"],
    };
  },
  methods: {
    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },
    fetchDriver() {
      this.$axios
        .get("driver")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.driver = res.data.data;
            }, 300);
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
              // this.fetchVillageDetail();
              // this.fetchVillageVariation();
            }, 300);
          }
        })
        .catch(() => {});
    },
    // fetchVillageDetail() {
    //   this.$axios
    //     .get("info/village/" + this.selectedVillage)
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.village_details = res.data.data.village_variations;
    //           // console.log(this.village_details);
    //           // res.data.data.map((item) => {
    //           //   this.units = item.village_details;
    //           // });
    //         }, 100);
    //       }
    //     })
    //     .catch(() => {});
    // },

    // fetchVillageVariation() {
    //   this.$axios
    //     .get(
    //       "info/village/" + this.selectedVillage + "/village-detail"
    //       // , {
    //       //   params: {
    //       //     page: this.pagination.current_page,
    //       //     per_page: this.per_page,
    //       //     filter: "",
    //       //   },
    //       // }
    //     )
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.addressdetail = res.data.data;
    //           // this.pagination = res.data.data.pagination;
    //         }, 100);
    //       }
    //     })
    //     .catch(() => {});
    // },

    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      let formData = new FormData();
      this.image_list.map((item) => {
        formData.append("images[]", item);
      });
      formData.append("name", this.data.name);
      formData.append("surname", this.data.surname);
      formData.append("village_id", this.selectedVillage);
      formData.append("lat", this.latlng.lat);
      formData.append("lng", this.latlng.lng);
      formData.append("phone", this.data.phone);
      formData.append("date", "2022-02-05 20:10:00");
      formData.append("sub_total", this.data.sub_total);
      formData.append("driver_id", this.selectedDriver);
      formData.append("discount", this.data.discount);

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("collection-event/", formData, {
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
                  name: "Collection",
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
              var obj = error.response.data.errors;
              for (let [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }
            this.loading = false;
            this.fetchData();
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
      const result = this.addressdetail.filter(({ id }) =>
        this.village_variation_id.includes(id)
      );
      result.map((item) => {
        for (var i = 0; i < item.village_details.length; i++) {
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
    },
  },
  watch: {
    selectedDistrict: function () {
      this.fetchVillage();
    },
    selectedVillage: function () {
      // this.fetchVillageDetail();
      // this.fetchVillageVariation();
    },
    village_variation_id: function () {
      if (this.village_variation_id) {
        // this.units = [];
        this.fetchUnit();
      }
    },
    //Clear error change
    "data.company_name": function () {
      this.server_errors.company_name = "";
    },
    "data.coordinator_name": function () {
      this.server_errors.coordinator_name = "";
    },
    "data.coordinator_surname": function () {
      this.server_errors.coordinator_surname = "";
    },
    "data.coordinator_phone": function () {
      this.server_errors.coordinator_phone = "";
    },
    "data.coordinator_email": function () {
      this.server_errors.coordinator_email = "";
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
    this.fetchDriver();
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