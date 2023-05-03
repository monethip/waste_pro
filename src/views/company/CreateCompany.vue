<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>
      ເພີ່ມຂໍ້ມູນຫົວໜ່ວຍທຸລະກິດ
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
                        Choose Image
                      </span>
                    </span>
                  </label>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <div
              v-if="image_list.length"
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
                  <span class="body-2">size: {{ image_list[index].size / 1024 }}KB</span>
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
            <!--            <div v-else>-->
            <!--              <v-col class="mt-5 text-center">-->
            <!--                <div v-for="(item, index) in data.media"-->
            <!--                     :key="index">-->
            <!--                  <input type="hidden" name="image-url" :value="item.url">-->
            <!--                <v-avatar-->
            <!--                    class="avatar rounded mr-6"-->
            <!--                    size="94px"-->
            <!--                >-->
            <!--                  <img :src="item.url" alt="Image"/>-->
            <!--                </v-avatar>-->
            <!--                </div>-->
            <!--              </v-col>-->
            <!--            </div>-->
          </v-row>

          <!--          <v-row>-->
          <!--            <v-col-->
          <!--                class="mt-5"-->
          <!--                v-for="(item, index) in preview_list"-->
          <!--                :key="index"-->
          <!--            >-->
          <!--              <v-avatar class="avatar rounded mr-2" size="94px">-->
          <!--                <img :src="item" alt="Image"/>-->
          <!--              </v-avatar>-->
          <!--              <p class="mb-0">File name: {{ image_list[index].name }}</p>-->
          <!--              <span>size: {{ image_list[index].size / 1024 }}KB</span>-->
          <!--              <div @click="RemoveItem(item)">-->
          <!--                <v-icon style="cursor: pointer">mdi-delete</v-icon>-->
          <!--              </div>-->
          <!--            </v-col>-->
          <!--          </v-row>-->
          <v-row>
            <v-col cols="4">
              <v-text-field
                v-model="data.name"
                label="ຊື່ບໍລິສັດ *"
                required
                :rules="nameRules"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.company_name }}
              </p>
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="data.phone"
                label="ເບີໂທບໍລິສັດ *"
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
            <v-col cols="4">
              <v-text-field
                v-model="data.email"
                label="Email ບໍລິສັດ"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.email }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-text-field
                v-model="data.coordinator_name"
                label="ຊື່ຜູ້ປະສານງານ *"
                required
                :rules="corNameRules"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.coordinator_name }}
              </p>
            </v-col>
            <v-col>
              <v-text-field
                v-model="data.coordinator_surname"
                label="ນາມສະກຸນຜູ້ປະສານງານ *"
                required
                :rules="corSurameRules"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.coordinator_surname }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="data.coordinator_phone"
                label="ເບີໂທຜູ້ປະສານງານ *"
                required
                type="number"
                class="input-number"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.coordinator_phone }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="data.coordinator_email"
                label="Email ຜູ້ປະສານງານ"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.coordinator_email }}
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
                :rules-district="rulesDistrict"
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
                :rules="ruleVillage"
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.village_id }}
              </p>
            </v-col>
          </v-row>

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
              >
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
            <v-col cols="6">
              <v-select
                v-model="selectedCost"
                outlined
                dense
                :items="costs"
                item-text="name"
                item-value="value"
                label="ປະເພດບໍລິການ"
              />
            </v-col>
            <v-col v-if="showFixed">
              <v-text-field
                v-model="fix_cost"
                label="ມູນຄ່າສັນຍາ *"
                type="number"
                required
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.cost_by }}
              </p>
            </v-col>
          </v-row>

          <v-row v-if="selectedCost == 'fix_cost'">
            <v-col>
              <v-row
                v-for="countCar in carCounts"
                :key="countCar"
              >
                <v-col>
                  <v-select
                    v-model="selectedCar[countCar-1]"
                    label="ປະເພດລົດ"
                    :items="vehicleTypeCut(countCar-1)"
                    item-text="name"
                    item-value="id"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    v-model="selectedCarPrice[countCar-1]"
                    type="number"
                    label="ລາຄາ"
                  />
                </v-col>
              </v-row>
              <v-btn
                color="blue"
                dark
                width="100%"
                style=""
                @click="addMoreCar"
              >
                ເພີ່ມລາຄາຕາມລົດ
              </v-btn>
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
                    dense
                    v-on="on"
                  />
                </template>
                <v-date-picker v-model="start_date" />
              </v-menu>
              <p class="errors">
                {{ server_errors.start_month }}
              </p>
            </v-col>
            <v-col>
              <v-checkbox
                v-model="start_collect"
                class="my-auto"
              >
                <template v-slot:label>
                  <div>ສາມາດເກັບຂີ້ເຫື້ຍອເລີຍໄດ້ບໍ່ ?</div>
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
                v-model="data.collect_description"
                label="ໝາຍເຫດ "
                type="text"
                outlined
                dense
              />
            </v-col>
            <v-col cols="6">
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
            <v-col cols="6">
              <v-text-field
                v-model="data.password"
                label="Password *"
                type="password"
                :rules="passwordRules"
                required
                outlined
                dense
              />
              <p class="errors">
                {{ server_errors.password }}
              </p>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="data.password_confirmation"
                label="Password Confirm *"
                type="password"
                outlined
                dense
                :rules="passwordConfirmRules"
                required
              />
              <p class="errors">
                {{ server_errors.password_confirmation }}
              </p>
            </v-col>
          </v-row>

          <!-- Google map-->
          <v-row>
            <v-col cols="6">
              <v-text-field
                v-model="latlng.lat"
                label="Latitude"
                class="input-number"
                type="number"
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
                :zoom="17"
                style="width: 100%; height: 450px"
                :disable-default-u-i="true"
                @change="changeLat"
              >
                <GmapMarker
                  ref="markers"
                  :position="latlng"
                  :draggable="true"
                  :icon="markerOptions"
                  :animation="2"
                  @click="latlng = latlng"
                  @dragend="onLocation"
                  @change="changeLat"
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
            @click="AddData()"
          >
            Save
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
          <span class="headline">Add Item
            <span><a>{{ villageDetail.name }}</a></span></span>
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
  props: ['items'],
  data() {
    return {
      data: {
        email: '',
        coordinator_email: '',
      },
      addCar: false,
      cars: [],
      selectedCar: [],
      selectedCarPrice: [],
      vehicleTypes: [],
      carCounts: 0,
      loading: false,
      server_errors: {},
      provinces: [],
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: '',
      village_details: [],
      village_variation_id: [],
      selectedVillageDetail: [],
      addressdetail: [],
      units: [],
      addItemDetail: false,

      itemDetailValue: '',
      itemDetailValues: [],
      villageDetail: {},

      selectedCost: '',
      start_date: '',
      start_menu: false,
      // allowedDates: (val) => new Date(val).getDate() === 1,
      start_collect: 0,
      showFixed: false,
      fix_cost: '',
      costs: [
        {
          id: 1,
          value: 'container',
          name: 'ຄອນເທັນເນີ',
        },
        {
          id: 2,
          value: 'fix_cost',
          name: 'ທຸລະກິດເປັນຖ້ຽວ',
        },
        {
          id: 3,
          value: 'chartered',
          name: 'ມອບເໝົາ',
        },
        {
          id: 4,
          value: 'bag',
          name: 'ບໍລິມາດ',
        },
        {
          id: 5,
          value: '32km',
          name: 'ຫຼັກ32',
        },
        {
          id: 6,
          value: 'infect',
          name: 'ຂີ້ເຫຍື້ອຕິດເຊື້ອ',
        },
      ],
      favorite_dates: [],
      selectedFavoriteDate: [],

      address: [],
      errormsg: '',
      // Map
      latlng: {
        lat: 17.9614,
        lng: 102.6465,
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

      preview_list: [],
      image_list: [],
      image: [],

      // Validation
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
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
      surNameRules: [
        (v) => !!v || 'SurName is required',
        (v) => (v && v.length >= 2) || 'SurName must be less than 2 characters',
      ],
      corNameRules: [(v) => !!v || 'Coordinator Name is required'],
      corSurameRules: [(v) => !!v || 'Coordinator SurName is required'],

      phoneRules: [
        (v) => !!v || 'Phone is required',
        (v) => (v && v.length >= 4 && v.length <= 11)
          || 'Phone number must be  4 - 11 numbers',
      ],
      ruleVillage: [(v) => !!v || 'Village is required'],
      ruleVariation: [(v) => !!v || 'Variation is required'],
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
    selectedVillage() {
      this.fetchVillageDetail();
    },
    // Clear error change
    'data.company_name': function () {
      this.server_errors.company_name = '';
    },
    'data.coordinator_name': function () {
      this.server_errors.coordinator_name = '';
    },
    'data.coordinator_surname': function () {
      this.server_errors.coordinator_surname = '';
    },
    'data.coordinator_phone': function () {
      this.server_errors.coordinator_phone = '';
    },
    'data.coordinator_email': function () {
      this.server_errors.coordinator_email = '';
    },
    'data.phone': function () {
      this.server_errors.phone = '';
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
    selectedCost(value) {
      if (value === 'container') {
        this.fix_cost = '';
        this.showFixed = true;
      } else if (value === 'bag') {
        this.fix_cost = '';
        this.showFixed = false;
      } else if (value === 'fix_cost') {
        console.log(`fixed_cost: ${value}`);
        this.fix_cost = '';
        this.showFixed = true;
      } else if (value === 'chartered') {
        this.fix_cost = '';
        this.showFixed = true;
      } else if (value === '32km') {
        this.fix_cost = '';
        this.showFixed = true;
      } else if (value === 'infect') {
        this.fix_cost = '';
        this.showFixed = true;
      }
    },
  },
  mounted() {
    this.geolocate();
  },
  created() {
    this.fetchAddress();
    this.fetchFavorite();
    this.getRequest();
    this.fetchVehicleType();
  },
  methods: {
    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },
    vehicleTypeCut(count) {
      const slicedArray = this.selectedCar.slice(0, count);
      return this.vehicleTypes.filter((item) => !slicedArray.includes(item.id));
    },
    addMoreCar() {
      this.carCounts++;
    },
    fetchVehicleType() {
      this.selectedVillageDetail = [];
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('vehicle_type/')
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.vehicleTypes = res.data.data;
            }, 300);
          }
        })
        .catch(() => {
          this.$store.commit('Loading_State', false);
        });
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
        .catch(() => {
        });
    },
    fetchVillage() {
      this.$axios
        .get(`info/district/${this.selectedDistrict}/village`)
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
        .catch(() => {
        });
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
        .catch(() => {
        });
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
        .catch(() => {
        });
    },

    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      const formData = new FormData();
      this.image_list.map((item) => {
        formData.append('images[]', item);
      });
      this.selectedVillageDetail.map((item) => {
        formData.append('village_details[]', item);
      });
      this.selectedFavoriteDate.map((item) => {
        formData.append('favorite_dates[]', item);
      });
      formData.append('company_name', this.data.name);
      formData.append('village_id', this.selectedVillage);
      formData.append('lat', this.latlng.lat);
      formData.append('lng', this.latlng.lng);
      formData.append('phone', this.data.phone);
      formData.append('email', this.data.email);
      formData.append('password', this.data.password);
      formData.append('password_confirmation', this.data.password_confirmation);
      formData.append('coordinator_name', this.data.coordinator_name);
      formData.append('coordinator_surname', this.data.coordinator_surname);
      formData.append('coordinator_phone', this.data.coordinator_phone);
      formData.append('coordinator_email', this.data.coordinator_email);
      formData.append('cost_by', this.selectedCost);
      if (this.data.expect_trash) formData.append('expect_trash', this.data.expect_trash);
      if (this.selectedCost !== 'bag') {
        formData.append('fix_cost', this.fix_cost);
      }
      formData.append('start_date', this.start_date);
      formData.append('can_collect', this.start_collect);
      formData.append('collect_description', this.data.collect_description);
      for (const [index, value] of Object.entries(this.selectedCar)) {
        if (this.selectedCarPrice[index]) {
          formData.append(`vehicle_types[${index}][id]`, value);
          formData.append(`vehicle_types[${index}][price]`, this.selectedCarPrice[index]);
        }
      }
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('company', formData, {
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
                  name: 'Company',
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
      console.log(place);
      this.currentPlace = place;
      this.placeMarker();
    },
    placeMarker() {
      this.markers = [];
      this.places = [];
      if (this.data.lat) {
        const marker = {
          lat: parseFloat(this.data.lat),
          lng: parseFloat(this.data.lng),
        };
        this.markers.push({ position: marker });
        this.latlng = marker;
      } else {
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
            lat: parseFloat(this.latlng.lat),
            lng: parseFloat(this.latlng.lng),
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
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(
            `address/village/${this.selectedVillage}/village-detail`,
            {
              name: this.itemDetailValue,
              village_variation_id: this.villageDetail.id,
            },
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
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
            this.$store.commit('Loading_State', false);
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

    // setPlace(place) {
    //   console.log(place)
    //   this.currentPlace = place;
    //   this.placeMarker();
    // },

    changeLat() {
      this.placeMarker();
      // this.onDataChange();
      // this.onSave();
      // this.setPlace();
      // const marker = {
      //   lat: parseFloat(this.latlng.lat),
      //   lng: parseFloat(this.latlng.lng),
      // };
      // console.log(marker)
      // this.markers.push({position: marker});
    },
    getRequest() {
      if (this.items) {
        this.data = this.items;
      }
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
