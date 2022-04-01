<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn
      >
      ເພີ່ມຂໍ້ມູນຫົວໜ່ວຍທຸລະກິດ
    </v-breadcrumbs
    >
    <v-card>
      <v-card-text class="px-12">
        <v-form ref="form" lazy-validation>
          <v-row>
            <v-col>
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
                class="mt-5"
                v-for="(item, index) in preview_list"
                :key="index"
            >
              <v-avatar class="avatar rounded mr-2" size="94px">
                <img :src="item" alt="Image"/>
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
            <v-col cols="4">
              <v-text-field
                  label="Email ບໍລິສັດ"
                  v-model="data.email"
                  outlined
                  dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.email }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                  label="ຊື່ຜູ້ປະສານງານ *"
                  required
                  v-model="data.coordinator_name"
                  :rules="corNameRules"
                  outlined
                  dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.coordinator_name }}
              </p>
            </v-col>
            <v-col>
              <v-text-field
                  label="ນາມສະກຸນຜູ້ປະສານງານ *"
                  required
                  v-model="data.coordinator_surname"
                  :rules="corSurameRules"
                  outlined
                  dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.coordinator_surname }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                  label="ເບີໂທຜູ້ປະສານງານ *"
                  required
                  v-model="data.coordinator_phone"
                  type="number"
                  class="input-number"
                  outlined
                  dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.coordinator_phone }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Email ຜູ້ປະສານງານ"
                  v-model="data.coordinator_email"
                  outlined
                  dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.coordinator_email }}
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
            <v-col cols="6" v-for="(data,index) in village_details" :key="index">
              <v-select
                  v-model="selectedVillageDetail"
                  :items="data.village_details"
                  item-text="name"
                  item-value="id"
                  :label="data.name"
                  chips
                  deletable-chips
                  multiple
              >

                <template v-slot:append-outer>
                  <v-slide-x-reverse-transition
                      mode="out-in"
                  >
                    <v-icon
                        :color="'info'"
                        @click="addItem(data)"
                        v-text="'mdi-plus-circle-outline'"
                    ></v-icon>
                  </v-slide-x-reverse-transition>
                </template>
              </v-select>
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
                  v-model="selectedCost"
                  item-text="name"
                  item-value="value"
                  label="ປະເພດບໍລິການ"
              ></v-select>
            </v-col>
            <v-col>
              <v-text-field
                  label="ມູນຄ່າສັນຍາ *"
                  type="number"
                  v-model="fix_cost"
                  required
                  outlined
                  dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.cost_by }}
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
                      v-model="start_date"
                      label="ເລີ່ມວັນທີ"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      dense
                  ></v-text-field>
                </template>
                <v-date-picker v-model="start_date"></v-date-picker>
              </v-menu>
              <p class="errors">
                {{ server_errors.start_month }}
              </p>
            </v-col>
            <v-col>
              <v-checkbox v-model="start_collect" class="my-auto">
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
            <v-col cols="6">
              <v-text-field
                  label="Password *"
                  type="password"
                  v-model="data.password"
                  :rules="passwordRules"
                  required
                  outlined
                  dense
              ></v-text-field>
              <p class="errors">
                {{ server_errors.password }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-text-field
                  label="Password Confirm *"
                  type="password"
                  outlined
                  dense
                  v-model="data.password_confirmation"
                  :rules="passwordConfirmRules"
                  required
              ></v-text-field>
              <p class="errors">
                {{ server_errors.password_confirmation }}
              </p>
            </v-col>
          </v-row>

          <!-- Google map-->
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
                  :zoom="17"
                  style="width: 100%; height: 450px"
                  :disableDefaultUI="true"
              >
                <GmapMarker
                    :position="latlng"
                    @click="latlng = latlng"
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


    <!--Add more detail -->
    <v-dialog v-model="addItemDetail" max-width="720px" persistent>
      <v-card>
        <v-card-title>
          <span class="headline"
          >Add Item
            <span
            ><a>{{ villageDetail.name }}</a></span
            ></span
          >
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="form" lazy-validation>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                      label="Name *"
                      type="text"
                      v-model="itemDetailValue"
                      required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="addItemDetail = false">
              Close
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="addMoreVillageDetail"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: {
        email: '',
        coordinator_email: ''
      },
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
      addItemDetail: false,

      itemDetailValue: '',
      itemDetailValues: [],
      villageDetail: {},

      selectedCost: "",
      start_date: "",
      start_menu: false,
      // allowedDates: (val) => new Date(val).getDate() === 1,
      start_collect: 0,
      showFixed: false,
      fix_cost: '',
      costs: [
        {
          id: 1,
          value: "container",
          name: "Container"
        },
        {
          id: 2,
          value: "fix_cost",
          name: "Fixed Cost"
        },
        {
          id: 3,
          value: "chartered",
          name: "Chartered"
        },
      ],

      address: [],
      errormsg: "",
      //Map
      latlng: {
        lat: 17.9614,
        lng: 102.6465,
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
          .get("info/address", {params: {filter: "ນະຄອນຫລວງວຽງຈັນ"}})
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
          .catch(() => {
          });
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
                // this.fetchVillageVariation();
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
              }, 100);
            }
          })
          .catch(() => {
          });
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
      formData.append("company_name", this.data.company_name);
      formData.append("village_id", this.selectedVillage);
      formData.append("lat", this.latlng.lat);
      formData.append("lng", this.latlng.lng);
      formData.append("phone", this.data.phone);
      formData.append("email", this.data.email);
      formData.append("password", this.data.password);
      formData.append("password_confirmation", this.data.password_confirmation);
      formData.append("coordinator_name", this.data.coordinator_name);
      formData.append("coordinator_surname", this.data.coordinator_surname);
      formData.append("coordinator_phone", this.data.coordinator_phone);
      formData.append("coordinator_email", this.data.coordinator_email);
      formData.append("cost_by", this.selectedCost);
      formData.append("fix_cost", this.fix_cost);
      formData.append("start_date", this.start_date);
      formData.append("can_collect", this.start_collect);

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .post("company", formData, {
              headers: {"Content-Type": "multipart/form-data"},
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
                    name: "Company",
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
        this.markers.push({position: marker});
        this.latlng = marker;
        this.animateMarker();
      } else {
        const marker = {
          lat: this.latlng.lat,
          lng: this.latlng.lng,
        };
        this.markers.push({position: marker});
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

    removeItem(item) {
      const index = this.selectedVillageDetail.indexOf(item.id);
      if (index >= 0) this.selectedVillageDetail.splice(index, 1);
    },
    reset() {
      this.$refs.form.reset();
    },


    addItem(data) {
      this.addItemDetail = true;
      this.villageDetail = data;
    },
    addMoreVillageDetail() {
      if (this.itemDetailValue != '') {
        this.itemDetailValues.push(this.itemDetailValue);
        this.loading = true;
        this.$axios
            .post(
                "address/village/" + this.selectedVillage + "/village-detail",
                {
                  name: this.itemDetailValue,
                  village_variation_id: this.villageDetail.id,
                }
            )
            .then((res) => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.addItemDetail = false;
                  this.selectedDetail = "";
                  this.fetchVillageDetail();
                  (this.address = {}),
                      this.$store.commit("Toast_State", {
                        value: true,
                        color: "success",
                        msg: res.data.message,
                      });
                }, 300);
              }
            })
            .catch((error) => {
              this.loading = false;
              if (error.response.status == 422) {
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "error",
                  msg: error.response.data.message,
                });
                let obj = error.response.data.errors;
                for (let [key, message] of Object.entries(obj)) {
                  this.server_errors[key] = message[0];
                }
              }
            });
      }
      this.itemDetailValue = '';
      this.addItemDetail = false;
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
    "data.password": function () {
      this.server_errors.password = "";
    },
    "data.password_confirmation": function () {
      this.server_errors.password = "";
    },
    "selectedCost": function () {
      if (this.selectedCost == 'container') {
        this.fix_cost = '';
        this.showFixed = false;
      } else if (this.selectedCost == 'fixed_cost')
        this.showFixed = true;
    }
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
  border-radius: 2px;
}
</style>
