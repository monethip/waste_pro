<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ແກ້ໄຂຂໍ້ມູນບໍລິສັດ</v-breadcrumbs
    >
    <v-card>
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
              <v-col cols="4">
                <v-text-field
                  label="ຊື່ບໍລິສັດ *"
                  required
                  v-model="data.company_name"
                  :rules="nameRules"
                  outlined
                  dense
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.company_name }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="ເບີໂທບໍລິສັດ *"
                  required
                  v-model="data.user.phone"
                  type="number"
                  class="input-number"
                  outlined
                  dense
                  v-if="data.user"
                ></v-text-field>

                <p class="errors">
                  {{ server_errors.phone }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-text-field
                  label="Email ບໍລິສັດ *"
                  required
                  v-model="data.user.email"
                  outlined
                  dense
                  v-if="data.user"
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.email }}
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
                  outlined
                  dense
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
                  outlined
                  dense
                ></v-autocomplete>
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>
              <v-col cols="6">
                <v-autocomplete
                  v-model="village_variation_id"
                  :items="village_details"
                  item-text="name"
                  item-value="id"
                  label="ກຸ່ມ / ຄຸ້ມ"
                  outlined
                  dense
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
                  label="ຮ່ອມ / ໜ່ວຍ"
                  outlined
                  dense
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
            </v-row>

            <v-row>
              <v-col cols="6">
                <v-select
                  outlined
                  dense
                  :items="costs"
                  v-model="data.cost_by"
                  item-text="value"
                  item-value="value"
                  label="ປະເພດລາຄາ"
                ></v-select>
              </v-col>
              <v-col v-if="data.cost_by == 'fix_cost'" cols="6">
                <v-text-field
                  label="ລາຄາ *"
                  type="number"
                  v-model="data.fix_cost"
                  required
                  outlined
                  dense
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.fixed_cost }}
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
                      v-model="data.start_month"
                      label="ເລີ່ມວັນທີ"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      dense
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="data.start_month"></v-date-picker>
                </v-menu>
                <p class="errors">
                  {{ server_errors.start_month }}
                </p>
              </v-col>
              <v-col>
                <v-checkbox v-model="data.can_collect" class="my-auto">
                  <template v-slot:label>
                    <div>ສາມາດເກັບຂີ້ເຫື້ອຍເລີຍໄດ້ບໍ່ ?</div>
                  </template>
                </v-checkbox>
                <p class="errors">
                  {{ server_errors.can_collect }}
                </p>
              </v-col>
            </v-row>

            <v-row>
              <!-- Gogle map-->
              <v-col cols="6">
                <v-text-field
                  label="Latitude"
                  v-model="data.lat"
                  type="number"
                  class="input-number"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="Longitude"
                  v-model="data.lng"
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
                    :position="getMarkers(data)"
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
      selectedVillageDetail: [],
      units: [],
      selectedCost: "",
      start_menu: false,
      start_collect: 0,
      costs: [
        {
          id: 1,
          value: "container",
        },
        {
          id: 2,
          value: "fix_cost",
        },
      ],

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
      ruleVillage: [(v) => !!v || "Village is required"],
      rulesDistrict: [(v) => !!v || "District is required"],
    };
  },
  methods: {
    fetchData() {
      this.selectedVillageDetail = [];
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("company/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.data = res.data.data;
              this.selectedVillage = res.data.data.village_id;
              res.data.data.village_details.map((item) => {
                this.village_variation_id = item.village_variation_id;
                this.selectedVillageDetail.push(item.id);
              });
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
    removeItem(item) {
      const index = this.selectedVillageDetail.indexOf(item.id);
      if (index >= 0) this.selectedVillageDetail.splice(index, 1);
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
      this.selectedVillageDetail.map((item) => {
        formData.append("village_details[]", item);
      });
      formData.append("company_name", this.data.company_name);
      formData.append("village_id", this.selectedVillage);
      formData.append("lat", this.data.lat);
      formData.append("lng", this.data.lng);
      formData.append("phone", this.data.user.phone);
      formData.append("email", this.data.user.email);
      formData.append("cost_by", this.data.cost_by);
      if (this.data.cost_by == "fix_cost") {
        formData.append("fix_cost", this.data.fix_cost);
      }
      formData.append("start_date", this.data.start_month);
      if (this.data.can_collect == true) {
        formData.append("can_collect", 1);
      }
      if (this.data.can_collect == false) {
        formData.append("can_collect", 0);
      }
      formData.append("_method", "PUT");
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("company/" + this.$route.params.id, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.data = {};
                this.loading = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
                this.$router.push({
                  name: "Company",
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
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
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
      this.data.lat = this.latlng.lat;
      this.data.lng = this.latlng.lng;
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
      } else {
        return this.latlng;
      }
    },
    getMarkers(data) {
      if (data.lat != null) {
        return {
          lat: parseFloat(data.lat),
          lng: parseFloat(data.lng),
        };
      } else {
        return this.latlng;
      }
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
    // "data.can_collect": function () {
    //   console.log(this.data.can_collect);
    //   if (this.data.can_collect == true) {
    //     return 1;
    //   } else if (this.data.can_collect == false) {
    //     return 0;
    //   }
    // },
    // village_variation_id: function () {
    //   if (this.village_variation_id) {
    //     // this.selectedVillageDetail = this.village_variation_id;
    //   }
    //   console.log(this.selectedVillageDetail);
    //   // this.fetchUnits();
    // },
    // selectedVillageDetail: function () {
    //   console.log("Hi");
    // },

    village_variation_id: function () {
      // console.log(this.village_variation_id);
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