<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ລາຍລະອຽດລູກຄ້າ</v-breadcrumbs
    >
    <v-card>
      <v-card-text>
        <v-container>
          <v-row>
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
          </v-row>
          <v-row>
            <v-col cols="6">
              <p class="text-h6">
                ຊື່ລູກຄ້າ:
                {{ data.name }}
              </p>
            </v-col>
            <v-col cols="6">
              <p class="text-h6">
                ນາມສະກຸນ:
                {{ data.surname }}
              </p>
            </v-col>
            <v-col cols="4">
              <p class="text-h6">
                ເຮືອນເລກທີ:
                {{ data.house_number }}
              </p>
            </v-col>

            <v-col cols="4">
              <p class="text-h6" v-if="data.user">
                ເບີໂທ:
                {{ data.user.phone }}
              </p>
            </v-col>

            <v-col cols="4">
              <p class="text-h6" v-if="data.user">
                Email:
                {{ data.user.email }}
              </p>
            </v-col>
            <v-col cols="4">
              <v-autocomplete
                required
                disabled
                :items="districts"
                v-model="selectedDistrict"
                item-text="name"
                item-value="id"
                label="ເມືອງ"
              ></v-autocomplete>
            </v-col>

            <v-col cols="4">
              <v-autocomplete
                :items="villages"
                v-model="data.village_id"
                item-text="name"
                item-value="id"
                label="ບ້ານ"
                disabled
              ></v-autocomplete>
            </v-col>
            <v-col cols="4">
              <v-select
                disabled
                v-model="selectedVillageDetail"
                :items="village_details"
                item-text="name"
                item-value="id"
                label="ລາຍລະອຽດທີ່ຢູ່"
                multiple
              ></v-select>
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
    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },

    previewMultiImage: function (event) {
      console.log(this.image_list);
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
        formData.append("vilage_details[]", item);
      });
      formData.append("name", this.data.name);
      formData.append("surname", this.data.surname);
      formData.append("village_id", this.selectedVillage);
      formData.append("house_number", this.data.house_number);
      formData.append("phone", this.data.user.phone);
      formData.append("email", this.data.user.email);
      formData.append("latitude", this.latlng.lat);
      formData.append("longitude", this.latlng.lng);
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
    this.fetchAddress();
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>