<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace </v-icon>
      </v-btn>
      ແກ້ໄຂຂໍ້ມູນການເກັບຂີ້ເຫື້ຍອພິເສດ
    </v-breadcrumbs>
    <v-card>
      <v-card-text class="px-12">
        <v-form
          ref="form"
          lazy-validation
        >
          <v-row>
            <v-col align="center">
              <div class="field">
                <div class="file is-large is-boxed">
                  <label class="file-label">
                    <input
                      class="file-input input-file-image"
                      type="file"
                      accept="image/*"
                      multiple
                      @change="previewMultiImage"
                    >
                    <span class="file-cta">
                      <span class="file-icon">
                        <v-icon
                          style="
                            font-size: 60px !important;
                            color: #719aff;
                            cursor: pointer;
                          "
                          class="fas fa-cloud-upload"
                        >mdi-cloud-upload</v-icon>
                      </span>
                      <span
                        class="file-label"
                        style="
                          margin-top: 10px;
                          text-transform: uppercase;
                          padding-top: 20px;
                        "
                      >
                        ຮູບສະຖານທີ່ເກັບ
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="(item, index) in preview_list"
              :key="index"
              align="center"
              class="mt-5"
            >
              <v-avatar
                class="avatar rounded mr-2"
                size="94px"
              >
                <img
                  :src="item"
                  alt="Image"
                >
              </v-avatar>
              <p class="mb-0">
                File name: {{ image_list[index].name }}
              </p>
              <span>size: {{ image_list[index].size / 1024 }}KB</span>
              <div @click="RemoveItem(item)">
                <v-icon style="cursor: pointer">
                  mdi-delete
                </v-icon>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="data.name"
                label="ຊື່ *"
                required
                :rules="nameRules"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.name }}
              </p>
            </v-col>
            <v-col>
              <v-text-field
                v-model="data.surname"
                label="ນາມສະກຸນ"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.surname }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="data.phone"
                label="ເບີໂທ *"
                required
                type="number"
                class="input-number"
                outlined
                dense
              />

              <p class="errors">
                {{ server_errors.phone }}
              </p>
            </v-col>
            <v-col>
              <v-select
                v-model="data.collect_status"
                outlined
                dense
                :items="collectionStatus"
                item-text="name"
                item-value="name"
                label="ສະຖານະ"
                :rules="statusRule"
                required
              />
              <p class="errors">
                {{ server_errors.collect_status }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-autocomplete
                v-model="selectedDistrict"
                required
                :items="districts"
                item-text="name"
                item-value="id"
                label="District *"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.district_id }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-autocomplete
                v-model="data.village_id"
                required
                :items="villages"
                item-text="name"
                item-value="id"
                label="Village *"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.village_id }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="data.sub_total"
                class="input-number"
                label="ລາຄາ *"
                type="number"
                required
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.sub_total }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="data.discount"
                class="input-number"
                label="ສ່ວນຫຼຸດ *"
                type="number"
                required
                outlined
                dense
              />
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
                    dense
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="date" />
              </v-menu>
              <p class="errors">
                {{ server_errors.date }}
              </p>
            </v-col>
            <v-col>
              <v-menu
                v-model="time_menu"
                :close-on-content-click="true"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="time"
                    label="ເວລາ"
                    readonly
                    outlined
                    v-bind="attrs"
                    dense
                    v-on="on"
                  />
                </template>
                <v-time-picker
                  v-model="time"
                  type="time"
                />
              </v-menu>
            </v-col>
            <v-col>
              <v-autocomplete
                v-model="data.driver_id"
                :items="driver"
                item-text="name"
                item-value="id"
                label="ພະນັກງານຂັບລົດ"
                dense
                outlined
              />
              <p class="errors">
                {{ server_errors.driver_id }}
              </p>
            </v-col>
          </v-row>

          <!-- Gogle map-->
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="latlng.lat"
                label="Latitude"
                type="number"
                class="input-number"
                outlined
                dense
              />
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="latlng.lng"
                label="Longitude"
                type="number"
                class="input-number"
                outlined
                dense
              />
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
                :options="{
                  fields: ['geometry', 'formatted_address', 'name'],
                }"
                @place_changed="setPlace"
              />
              <span class="horizontal-divider" />
            </v-col>
            <v-col
              cols="12"
              class="mb-4"
            >
              <GmapMap
                :center="latlng"
                :zoom="16"
                style="width: 100%; height: 450px"
                :disable-default-u-i="true"
              >
                <GmapMarker
                  v-for="(m, index) in markers"
                  :key="index"
                  ref="markers"
                  :position="m.position"
                  :draggable="true"
                  :icon="markerOptions"
                  :animation="2"
                  @click="latlng = m.position"
                  @dragend="onLocation"
                />
              </GmapMap>
            </v-col>
          </v-row>
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="backPrevios()"
          >
            Back
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="UpdateData()"
          >
            ແກ້ໄຂ
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
      selectedDistrict: '',
      villages: [],
      selectedVillage: '',
      driver: [],
      date: '',
      collectionStatus: [
        {
          id: 1,
          name: 'requested',
        },
        {
          id: 2,
          name: 'rejected',
        },
        {
          id: 3,
          name: 'approved',
        },
        {
          id: 4,
          name: 'collected',
        },
        {
          id: 5,
          name: 'collect_confirm',
        },
        {
          id: 6,
          name: 'collect_reject',
        },
      ],
      start_menu: false,
      time: '',
      time_menu: false,
      errormsg: '',
      // Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      currentPlace: null,
      markerOptions: {

        url: require('@coms/../../src/assets/pin1.svg'),
        size: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
      },

      preview_list: [],
      image_list: [],
      image: [],

      // Validation
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      statusRule: [(v) => !!v || 'Status is required'],
    };
  },
  watch: {
    selectedDistrict() {
      this.fetchVillage();
    },
    // Clear error change
    'data.name': function () {
      this.server_errors.name = '';
    },
    'data.surname': function () {
      this.server_errors.surname = '';
    },
    selectedVillage() {
      this.server_errors.village_id = '';
    },
    date() {
      this.server_errors.date = '';
    },
    driver_id() {
      this.server_errors.driver_id = '';
    },
    'data.driver_id': function () {
      this.server_errors.driver_id = '';
    },
    'data.sub_total': function () {
      this.server_errors.sub_total = '';
    },
    'data.phone': function () {
      this.server_errors.phone = '';
    },
    'data.discount': function () {
      this.server_errors.email = '';
    },
  },
  mounted() {
    this.geolocate();
  },
  created() {
    this.fetchDriver();
    this.fetchAddress();
    this.fetchCollection();
  },
  methods: {
    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },
    fetchCollection() {
      this.$axios
        .get(`collection-event/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.data = res.data.data;
              this.collect_status = res.data.data.collect_status;
              this.selectedDistrict = this.data.village.district_id;
              this.time = this.moment(res.data.data.date).format('hh:mm');
              this.date = this.moment(res.data.data.date).format('YYYY-MM-DD');
            }, 300);
          }
        })
        .catch({});
    },
    fetchDriver() {
      this.$axios
        .get('driver')
        .then((res) => {
          if (res.data.code == 200) {
            this.driver = res.data.data;
          }
        })
        .catch({});
    },
    previewMultiImage(event) {
      const input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          const reader = new FileReader();
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
        .get('info/address', { params: { filter: 'ນະຄອນຫລວງວຽງຈັນ' } })
        .then((res) => {
          if (res.data.code == 200) {
            this.address = res.data.data;
            this.address.map((item) => {
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
        .get(`info/district/${this.selectedDistrict}/village`)
        .then((res) => {
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
      const dateTime = `${this.date} ${`${this.time}:00`}`;
      const formData = new FormData();
      this.image_list.map((item) => {
        formData.append('collect_location[]', item);
      });
      formData.append('name', this.data.name);
      formData.append('surname', this.data.surname);
      formData.append('village_id', this.data.village_id);
      formData.append('lat', this.data.lat);
      formData.append('lng', this.data.lng);
      formData.append('phone', this.data.phone);
      formData.append('date', dateTime);
      // formData.append("date", this.moment(dateTime).format("y-MM-D hh:mm:ss"));
      formData.append('sub_total', this.data.sub_total);
      formData.append('driver_id', this.data.driver_id);
      formData.append('discount', this.data.discount);
      formData.append('collect_status', this.data.collect_status);
      formData.append('_method', 'PUT');

      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`collection-event/${this.$route.params.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
                this.$router.push({
                  name: 'Collection',
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }
            this.$store.commit('Loading_State', false);
          });
      }
    },

    // Set Googlemap Api
    createNewAddressName() {
      const CUSTOMIZE = '#CUSTOM ADDRESS:';
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
      this.$emit('onDataChange', {
        address: this.address,
        position: this.latlng,
      });
      // console.log(this.center);
    },
    onSave() {
      this.$emit('onSave', {
        address: this.address || this.currentAddress || 'Unnamed Location',
        position: this.latlng,
        isCreate: this.isCreate,
      });
    },
    fetchUnit() {
      const result = this.addressdetail.filter(({ id }) => this.village_variation_id.includes(id));
      result.map((item) => {
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
    },
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
