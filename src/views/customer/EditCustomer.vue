<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>ແກ້ໄຂຂໍ້ມູນລູກຄ້າ
    </v-breadcrumbs>
    <v-card>
      <v-card-text>
        <v-container>
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
                        name="resume"
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
                        >Choose Image</span>
                      </span>
                    </label>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <div
                v-if="image_list.length > 0"
                style="display: inline-flex"
              >
                <v-col
                  v-for="(item, index) in preview_list"
                  :key="index"
                  class="mt-5 text-center"
                >
                  <div>
                    <v-avatar
                      class="avatar rounded mr-6"
                      size="94px"
                    >
                      <img
                        :src="item"
                        alt="Image"
                      >
                    </v-avatar>
                    <p class="mb-0 body-2">
                      Name: {{ image_list[index].name }}
                    </p>
                    <span
                      class="body-2"
                    >size: {{ image_list[index].size / 1024 }}KB</span>
                    <div
                      class="mt-2"
                      @click="RemoveItem(item)"
                    >
                      <v-icon style="cursor: pointer">
                        mdi-delete
                      </v-icon>
                    </div>
                  </div>
                </v-col>
              </div>
              <div v-else>
                <v-col class="mt-5 text-center">
                  <v-avatar
                    v-for="(item, index) in data.media"
                    :key="index"
                    class="avatar rounded mr-6"
                    size="94px"
                  >
                    <img
                      :src="item.url"
                      alt="Image"
                    >
                  </v-avatar>
                </v-col>
              </div>
            </v-row>
            <v-row>
              <v-col cols>
                <v-text-field
                  v-model="data.name"
                  label="Name *"
                  required
                  :rules="nameRules"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ server_errors.name }}
                </p>
              </v-col>
              <v-col cols>
                <v-text-field
                  v-model="data.surname"
                  label="Surname *"
                  required
                  :rules="nameRules"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ server_errors.surname }}
                </p>
              </v-col>
              <v-col cols>
                <v-text-field
                  v-model="data.house_number"
                  label="ເຮືອນເລກທີ *"
                  :rules="houseNumberRules"
                  type="number"
                  class="input-number"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ server_errors.house_number }}
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols>
                <v-text-field
                  v-if="data.user"
                  v-model="data.user.phone"
                  label="ເບີໂທ *"
                  required
                  :rules="phoneRules"
                  type="number"
                  class="input-number"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ server_errors.phone }}
                </p>
              </v-col>

              <v-col cols>
                <v-text-field
                  v-if="data.user"
                  v-model="data.user.email"
                  label="Email"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ server_errors.email }}
                </p>
              </v-col>
              <v-col cols>
                <v-select
                  v-model="selectedFavoriteDate"
                  outlined
                  dense
                  :items="favorite_dates"
                  item-text="name"
                  item-value="name"
                  label="ມື້ບໍລິການ"
                  multiple
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col cols>
                <v-checkbox v-model="can_collect">
                  <template v-slot:label>
                    <div>ສາມາດເກັບຂີ້ເຫື້ຍອເລີຍໄດ້ບໍ່ ?</div>
                  </template>
                </v-checkbox>
                <p class="errors">
                  {{ server_errors.can_collect }}
                </p>
              </v-col>
              <v-col cols>
                <v-autocomplete
                  v-model="selectedDistrict"
                  required
                  :items="districts"
                  item-text="name"
                  item-value="id"
                  label="District *"
                  :rules-district="rulesDistrict"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>

              <v-col cols>
                <v-autocomplete
                  v-model="selectedVillage"
                  required
                  :items="villages"
                  item-text="name"
                  item-value="id"
                  label="Village *"
                  :rules="ruleVillage"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>
            </v-row>

            <!--              <v-col cols="6">-->
            <!--                <v-autocomplete-->
            <!--                  v-model="village_variation_id"-->
            <!--                  :items="village_details"-->
            <!--                  item-text="name"-->
            <!--                  item-value="id"-->
            <!--                  label="ໜ່ວຍ"-->
            <!--                >-->
            <!--                </v-autocomplete>-->
            <!--                <p class="errors">-->
            <!--                  {{ server_errors.village_details }}-->
            <!--                </p>-->
            <!--              </v-col>-->

            <!--              <v-col cols="6">-->
            <!--                <v-autocomplete-->
            <!--                  v-model="selectedVillageDetail"-->
            <!--                  :items="units"-->
            <!--                  item-text="name"-->
            <!--                  item-value="id"-->
            <!--                  label="ຮ່ອມ"-->
            <!--                  multiple-->
            <!--                >-->
            <!--                  <template v-slot:selection="data">-->
            <!--                    <v-chip-->
            <!--                      v-bind="data.attrs"-->
            <!--                      :input-value="data.selected"-->
            <!--                      close-->
            <!--                      @click="data.select"-->
            <!--                      @click:close="removeItem(data.item)"-->
            <!--                    >-->
            <!--                      {{ data.item.name }}-->
            <!--                    </v-chip>-->
            <!--                  </template>-->
            <!--                </v-autocomplete>-->
            <!--                <p class="errors">-->
            <!--                  {{ server_errors.village_details }}-->
            <!--                </p>-->
            <!--              </v-col>-->

            <v-row>
              <v-col
                v-for="(data, index) in village_details"
                :key="index"
                cols="6"
              >
                <v-select
                  v-model="selectedVillageDetail"
                  :items="data.village_details"
                  item-text="name"
                  item-value="id"
                  :label="data.name"
                  chips
                  deletable-chips
                  multiple
                  outlined
                  dense
                >
                  <!--                    <v-chip v-for="(i,k) in data.village_details" :key="k" close>{{i.name}}</v-chip>-->
                  <template v-slot:append-outer>
                    <v-slide-x-reverse-transition mode="out-in">
                      <v-icon
                        :color="'info'"
                        @click="addItem(data)"
                        v-text="'mdi-plus-circle-outline'"
                      />
                    </v-slide-x-reverse-transition>
                  </template>
                </v-select>
                <p class="errors">
                  {{ server_errors.village_details }}
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="4">
                <v-text-field
                  v-model="data.expect_trash"
                  :label="expectTrashLabel"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ server_errors.expect_trash }}
                </p>
              </v-col>
            </v-row>

            <v-row>
              <!-- Gogle map-->
              <v-col cols="6">
                <v-text-field
                  v-model="data.lat"
                  label="Latitude"
                  type="number"
                  class="input-number"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ server_errors.lat }}
                </p>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="data.lng"
                  label="Longitude"
                  type="number"
                  class="input-number"
                  outlined
                  dense
                />
                <p class="errors">
                  {{ server_errors.lng }}
                </p>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <gmap-autocomplete
                  ref="searchInput"
                  class="input text-field map"
                  placeholder="ຄົ້ນຫາເເຜນທີ່..."
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
                  :center="getCenter().lat > 0 || getCenter().lat < 0 ? getCenter() : { lat: 0, lng: 0 }"
                  :zoom="16"
                  style="width: 100%; height: 450px"
                  :disable-default-u-i="true"
                >
                  <GmapMarker
                    ref="markers"
                    :position="getMarkers(data)"
                    :draggable="true"
                    :icon="markerOptions"
                    :animation="2"
                    @dragend="onLocation"
                  />
                </GmapMap>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
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
            Update
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>

    <!--Add more detail -->
    <v-dialog
      v-model="addItemDetail"
      max-width="720px"
      persistent
    >
      <v-card>
        <v-card-title>
          <span class="headline">
            Add Item
            <span>
              <a>{{ villageDetail.name }}</a>
            </span>
          </span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="form"
              lazy-validation
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="itemDetailValue"
                    label="Name *"
                    type="text"
                    required
                  />
                </v-col>
              </v-row>
            </v-form>
          </v-container>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="blue darken-1"
              text
              @click="addItemDetail = false"
            >
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
import { getCustomerUnit } from '@/Helpers/Customer';

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
      village_details: [],
      selectedVillageDetail: [],
      units: [],
      can_collect: 0,

      selectItemDetail: '',
      addItemDetail: false,

      itemDetailValue: '',
      itemDetailValues: [],
      villageDetail: {},

      address: [],
      errormsg: '',
      preview_list: [],
      image_list: [],
      image: [],

      favorite_dates: [],
      selectedFavoriteDate: [],
      // Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      currentPlace: null,
      markerOptions: {
        // eslint-disable-next-line global-require
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

      // Validation
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      passwordConfirmRules: [
        (v) => !!v || 'Password Confirm is required',
        (v) => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      phoneRules: [
        (v) => !!v || 'Phone is required',
        (v) => (v && v.length >= 4 && v.length <= 11)
          || 'Phone number must be  4 - 11 numbers',
      ],
      houseNumberRules: [(v) => !!v || 'House number is required'],
      ruleVillage: [(v) => !!v || 'Village is required'],
      rulesDistrict: [(v) => !!v || 'District is required'],
    };
  },
  computed: {
    expectTrashLabel() {
      const text = 'ຂີ້ເຫຍື້ອຄາດໝາຍ';
      if (!this.data.cost_by) return text;
      return `${text} (${getCustomerUnit(this.data.cost_by)})`;
    },
  },
  watch: {
    selectedDistrict() {
      this.fetchVillage();
    },
    selectedVillage(a) {
      console.log(a, this.data.village_id);
      if (a != this.data.village_id) this.selectedVillageDetail = [];
      this.fetchVillageDetail();
    },
    // Clear error change

    can_collect() {
      this.server_errors.can_collect = '';
      // if(this.can_collect == 1){
      //   this.can_collect = true;
      // } else if(this.can_collect == 0){
      //   this.can_collect = false;
      // }
    },
    'data.name': function () {
      this.server_errors.name = '';
    },
    'data.surname': function () {
      this.server_errors.surname = '';
    },
    'data.house_number': function () {
      this.server_errors.house_number = '';
    },
    'data.phone': function () {
      this.server_errors.phone = '';
      this.server_errors.email = '';
    },
    'data.email': function () {
      this.server_errors.email = '';
    },
    'data.password': function () {
      this.server_errors.password = '';
    },
    'data.password_confirmation': function () {
      this.server_errors.password = '';
    },
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
  },
  mounted() {
    this.geolocate();
  },
  created() {
    this.fetchAddress();
    this.fetchData();
    this.fetchFavorite();
  },
  methods: {
    fetchData() {
      this.selectedVillageDetail = [];
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`customer/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.data = res.data.data;
              this.can_collect = res.data.data.can_collect;
              this.selectedDistrict = res.data.data.district.id;
              // this.selectedVillage = res.data.data.village.id;
              this.selectedVillage = res.data.data.village_id;
              res.data.data.favorite_dates.map((item) => {
                this.selectedFavoriteDate.push(item.name);
              });
              res.data.data.village_details.map((item) => {
                if (item.village_id == this.selectedVillage) this.selectedVillageDetail.push(item.id);
              });
            }, 300);
          }
        })
        .catch(() => {
          this.$store.commit('Loading_State', false);
        });
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
                // this.selectedDistrict = this.districts[0].id;
              });
              // this.fetchVillage();
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchVillage() {
      this.$axios
        .get(`info/district/${this.selectedDistrict}/village`)
        .then((res) => {
          if (res.data.code == 200) {
            this.villages = res.data.data;
            // this.selectedVillage = this.villages[0].id;
            // this.fetchVillageDetail();
          }
        })
        .catch(() => {});
    },
    fetchVillageDetail() {
      this.$axios
        .get(`info/village/${this.selectedVillage}/village-detail`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.village_details = res.data.data;
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

    UpdateData() {
      const formData = new FormData();
      if (this.data.user.email == null) {
        this.data.user.email = '';
      }
      this.image_list.map((item) => {
        formData.append('images[]', item);
      });
      this.selectedVillageDetail.map((item) => {
        formData.append('village_details[]', item);
      });
      this.selectedFavoriteDate.map((item) => {
        formData.append('favorite_dates[]', item.name ? item.name : item);
      });
      formData.append('name', this.data.name);
      formData.append('surname', this.data.surname);
      formData.append('village_id', this.selectedVillage);
      formData.append('house_number', this.data.house_number);
      formData.append('phone', this.data.user.phone);
      formData.append('email', this.data.user.email);

      formData.append('lat', this.data.lat);
      formData.append('lng', this.data.lng);
      formData.append('can_collect', this.can_collect);
      if (this.data.expect_trash) formData.append('expect_trash', this.data.expect_trash);
      if (this.can_collect == true) {
        formData.append('can_collect', 1);
      }
      if (this.can_collect == false) {
        formData.append('can_collect', 0);
      }
      formData.append('_method', 'PUT');
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post(`customer/${this.$route.params.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.data = {};
                this.loading = false;
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
                this.$router.push({
                  name: 'Customer',
                });
                // this.reset();
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
              for (const [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
            this.loading = false;
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
      if (data.lat != null) {
        return {
          lat: parseFloat(data.lat),
          lng: parseFloat(data.lng),
        };
      }
      return this.latlng;
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
          .post(`address/village/${this.selectedVillage}/village-detail`, {
            name: this.itemDetailValue,
            village_variation_id: this.villageDetail.id,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.addItemDetail = false;
                this.selectedDetail = '';
                this.fetchVillageDetail();
                (this.address = {}),
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
      this.itemDetailValue = '';
      this.addItemDetail = false;
    },

    fetchFavorite() {
      this.$axios
        .get('favorite-date')
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.favorite_dates = res.data.data;
            }, 100);
          }
        })
        .catch(() => {});
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
