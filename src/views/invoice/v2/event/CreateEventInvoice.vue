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
      ເພີ່ມຂໍ້ມູນເກັບຂີ້ເຫື້ຍອພິເສດ <span
        v-if="user.phone"
        class="mr-2"
      >({{ user.phone }} / {{ user.name }})</span>
    </v-breadcrumbs>
    <v-card>
      <v-card-text class="px-12">
        <v-form
          ref="form"
          lazy-validation
        >
          <v-row>
            <v-col>
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
                        ເລືອກຮູບສະຖານທີ່ເກັບ
                      </span>
                    </span>
                  </label>
                </div>
              </div>
              <p class="errors">
                {{ server_errors.collect_locations }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col
              v-for="(item, index) in preview_list"
              :key="index"
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
            <v-col cols="4">
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
            <v-col cols="4">
              <v-text-field
                v-model="data.surname"
                label="ນາມສະກຸນ"
                required
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.surname }}
              </p>
            </v-col>
            <v-col cols="4">
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
                v-model="selectedVillage"
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
                  ref="markers"
                  :position="latlng"
                  :draggable="true"
                  :icon="markerOptions"
                  :animation="2"
                  @click="latlng = latlng"
                  @dragend="onLocation"
                />
              </GmapMap>
            </v-col>
          </v-row>
        </v-form>
        <v-card-actions>
          <v-spacer />
          <v-btn
            class="elevation-0 btn-warning mr-4"
            @click="backPrevios()"
          >
            ຍ້ອນກັບ
          </v-btn>
          <v-btn
            class="elevation-0 btn-primary mr-4"
            :loading="loading"
            :disabled="loading"
            @click="AddData()"
          >
            ບັນທຶກ
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      data: {},
      user: {},
      loading: false,
      server_errors: {},
      provinces: [],
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: '',
      driver: [],
      collect_status: '',
      date: '',
      start_menu: false,
      time: '',
      time_menu: false,
      errormsg: '',
      selectedDriver: '',
      // Map
      latlng: {
        lat: 17.9614,
        lng: 102.6465,
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
      this.server_errors.drier_id = '';
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
    if (this.items) {
      this.user = this.items;
    }
    this.fetchDriver();
    this.fetchAddress();
  },
  methods: {
    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },
    fetchDriver() {
      this.$axios
        .get('driver')
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.driver = res.data.data;
            }, 300);
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
        .get(`info/district/${this.selectedDistrict}/village`)
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
    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      const dateTime = `${this.date} ${`${this.time}:00`}`;
      const formData = new FormData();
      this.image_list.map((item) => {
        formData.append('collect_locations[]', item);
      });
      formData.append('name', this.data.name);
      formData.append('surname', this.data.surname);
      formData.append('village_id', this.selectedVillage);
      formData.append('lat', this.latlng.lat);
      formData.append('lng', this.latlng.lng);
      formData.append('phone', this.data.phone);
      if (this.user.id) {
        formData.append('user_id', this.user.id);
      }
      formData.append('date', dateTime);

      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('v2/collection-event', formData, {
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
                  name: 'event-invoice',
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
            this.fetchData();
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
@import "../../../../../public/scss/main.scss";
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
