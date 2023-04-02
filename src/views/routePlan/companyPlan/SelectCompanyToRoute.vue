<template>
  <v-container>
    <v-breadcrumbs
      class="mt-n4"
      large
    >
      <v-btn
        class="text-primary"
        text
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>
      ເລືອກລູກຄ້າເຂົ້າແຜນເສັ້ນທາງ
      <v-spacer />
      <span class="mr-4">
        <v-icon color="red">mdi-map-marker</v-icon>ຍັງບໍທັນຢູ່ໃນແຜນ
      </span>
      <span>
        <v-icon style="color: #49a3da">mdi-map-marker</v-icon>ຢູ່ໃນແຜນແລ້ວ
      </span>
    </v-breadcrumbs>
    <v-row class="my-n4">
      <v-col
        class="mb-4"
        cols="12"
      >
        <GmapMap
          :center="
            getCenter().lat > 0 || getCenter().lat < 0
              ? getCenter()
              : { lat: 0, lng: 0 }
          "
          :disable-default-u-i="true"
          :zoom="14"
          style="width: 100%; height: 450px"
        >
          <gmap-info-window
            :conent="infoContent"
            :opened="infoOpened"
            :options="infoOptions"
            :position="infoPosition"
            @closeclick="infoOpened = false"
          >
            {{ infoContent }}
          </gmap-info-window>
          <GmapMarker
            v-for="(m, index) in customers"
            :key="index"
            :animation="2"
            :clickable="true"
            :draggable="false"
            :icon="getSiteIcon(m)"
            :label="m.check_number ? m.check_number.toString() : null"
            :position="getMarkers(m)"
            @click="toggleInfo(m, index)"
          />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          @click="createPage()"
        >
          Next
          <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4 v-if="pagination && pagination.total">
          ລູກຄ້າທັງໝົດ {{ pagination.total }} ຄົນ
        </h4>
        <h4 v-else>
          ລູກຄ້າທັງໝົດ {{ customers.length }} ຄົນ
        </h4>
        <h4>ຂີ້ເຫຍື້ອຄາດໝາຍ:</h4>
        <h5
          v-for="item in countExpectTrash"
          :key="item.cost_by"
        >
          {{
            getLaoCompanyCostByFunc(item.cost_by) +
              ": " +
              Intl.NumberFormat().format(item.expect_trash) +
              " " +
              getCustomerUnitFunc(item.cost_by)
          }}
        </h5>
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedDistrict"
          :items="districts"
          clearable
          dense
          item-text="name"
          item-value="id"
          label="ເມືອງ"
          outlined
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedVillage"
          :items="villages"
          chips
          clearable
          dense
          item-text="name"
          item-value="id"
          label="ເລືອກບ້ານ"
          multiple
          outlined
        >
          <template v-slot:selection="data">
            <v-chip
              :input-value="data.selected"
              close
              v-bind="data.attrs"
              @click="data.select"
              @click:close="remove(data.item)"
            >
              {{ data.item.name }}
            </v-chip>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>

    <!-- Village Detail -->
    <v-row>
      <VillageDetail
        v-model="selectedDetails"
        :selected-village="selectedVillage"
      />
    </v-row>

    <v-row>
      <v-col cols>
        <v-select
          v-model="selectedFavoriteDate"
          :items="favorite_dates"
          dense
          item-text="name"
          item-value="name"
          label="ມື້ບໍລິການ"
          multiple
          outlined
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedCustomerStatus"
          :items="customerStatus"
          clearable
          dense
          item-text="name"
          item-value="value"
          label="ສະຖານະລູກຄ້າ"
          multiple
          outlined
        />
      </v-col>
      <v-col>
        <v-select
          v-model="selectedCost"
          :items="costs"
          clearable
          dense
          item-text="name"
          item-value="value"
          label="ປະເພດບໍລິການ"
          multiple
          outlined
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="search"
          clearable
          dense
          label="ຊື່ລູກຄ້າ"
          outlined
          prepend-inner-icon="mdi-magnify"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
      <v-col>
        <v-btn
          color="green"
          dark
          style="width:100%"
          @click="fetchSearch"
        >
          ຄົ້ນຫາ
        </v-btn>
      </v-col>
    </v-row>

    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-row v-if="selectedRows.length">
              <v-col>
                <p>ລູກຄ້າທີ່ເລືອກ {{ selectedRows.length }}</p>
              </v-col>
              <v-col
                v-for="trash in selectedTrash"
                :key="trash.cost_by"
              >
                <p>
                  {{
                    getLaoCompanyCostByFunc(trash.cost_by) +
                      ": " +
                      Intl.NumberFormat().format(trash.count) +
                      " " +
                      getCustomerUnitFunc(trash.cost_by)
                  }}
                </p>
              </v-col>
            </v-row>
            <v-data-table
              :disable-pagination="true"
              :headers="headers"
              :items="customers"
              :search="search"
              hide-default-footer
            >
              <template v-slot:item.village_details="{ item }">
                <v-chip
                  v-for="villageItem in item.village_details"
                  :key="villageItem.id"
                >
                  {{
                    `${villageItem.village_variation.name}: ${villageItem.name}`
                  }}
                </v-chip>
              </template>

              <template v-slot:item.address_detail="{ item }">
                <div
                  v-for="(data, index) in item.village_details"
                  :key="index"
                >
                  <span>{{ data.name }}</span>
                </div>
              </template>
              <template v-slot:item.cost_by="{ item }">
                <div>{{ costBy(item.cost_by) }}</div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon
                  class="mr-2"
                  small
                  @click="viewPage(item.id)"
                >
                  mdi-eye
                </v-icon>
              </template>
              <template v-slot:item.custom_pick="{ item }">
                <div
                  class="main-check"
                  @click="checkHandler(item)"
                >
                  <div
                    v-if="item.check_number"
                    class="check"
                  >
                    {{ item.check_number }}
                  </div>
                  <div
                    v-else
                    class="uncheck"
                  />
                </div>
              </template>

              <template v-slot:header.custom_pick="{}">
                <div @click="checkAllToggle()">
                  <div
                    v-if="checkAll"
                    class="check"
                  />
                  <div
                    v-else
                    class="uncheck"
                  />
                </div>
              </template>

              <template v-slot:item.expect_trash="{ item }">
                <v-chip
                  v-if="item.expect_trash"
                  color="green"
                  outlined
                >
                  {{ Intl.NumberFormat().format(item.expect_trash) }}
                  {{ getCustomerUnitFunc(item.cost_by) }}
                </v-chip>
                <div v-else>
                  -
                </div>
              </template>

              <template v-slot:item.favorite_dates="{ item }">
                <v-chip
                  v-for="date in item.favorite_dates"
                  :key="date.name"
                  color="green"
                  dark
                >
                  {{ date.name }}
                </v-chip>
              </template>
            </v-data-table>
            <br>
            <template>
              <Pagination
                v-if="pagination.total_pages > 1"
                :offset="offset"
                :pagination="pagination"
                @paginate="fetchData()"
              />
            </template>
          </v-card-text>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import queryOption from '@/Helpers/queryOption';
import {
  getCustomerUnit,
  getLaoCompanyCostBy,
  getCompanyCostBy,
} from '@/Helpers/Customer';
import VillageDetail from '@/components/select/VillageDetail';

export default {
  name: 'Customer',
  components: {
    VillageDetail,
  },
  data() {
    return {
      selectedDetails: [],
      tab: null,
      customers: [],
      selectedAllCustomer: [],
      countExpectTrash: [],
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // Filter
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: [],
      // selectedAllVillage: [],
      selectedCustomerStatus: [],
      customerStatus: [
        {
          id: 1,
          value: 'calendar',
          name: 'ຍັງບໍ່ມີແຜນເດີນລົດ',
        },
        {
          id: 2,
          value: 'route_plan',
          name: 'ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ',
        },
      ],
      selectedCost: [],
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
      selectedRows: [],
      headers: [
        { text: '', value: 'custom_pick', sortable: false },
        { text: 'ID', value: 'customer_id' },
        { text: 'ບໍລິສັດ', value: 'company_name' },
        // { text: "ຜູ້ຮບຜິດຊອບ", value: "company_coordinators.name" },
        { text: 'ປະເພດບໍລິການ', value: 'cost_by_la', sortable: true },
        { text: 'ລາຍລະອຽດທີ່ຢູ່', value: 'village_details', sortable: true },
        { text: 'ບ້ານ', value: 'village.name', sortable: true },
        { text: 'ເມືອງ', value: 'district.name', sortable: true },
        // {text: "ລາຍລະອຽດທີ່ຢູ່", value: "address_detail"},
        { text: 'ລາຍລະອຽດການບໍລິການ', value: 'collect_description' },
        { text: 'ຂີ້ເຫຍື້ອຄາດໝາຍ', value: 'expect_trash' },
        { text: 'ວັນທີ່ສະດວກເກັບ', value: 'favorite_dates' },
        { text: 'ວັນທີ່ເພີ່ມເຂົ້າ', value: 'created_at' },
        // { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
      // Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      places: [],
      currentPlace: null,
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      last_check_number: 0,
      checkAll: false,
    };
  },
  computed: {
    selectedTrash() {
      const array = [];

      for (const item of getCompanyCostBy) {
        array.push({
          cost_by: item.en,
          count: 0,
        });
      }

      for (const selected of this.selectedRows) {
        const index = array.findIndex(
          (item) => item.cost_by == selected.cost_by,
        );
        if (index > -1) {
          array[index].count
              += selected.expect_trash > 0 ? selected.expect_trash : 0;
        }
      }

      return array;
    },
    selectedAllVillage() {
      return this.selectedVillage.length === this.villages.length;
    },
    selectedSomeVillage() {
      return this.selectedVillage.length > 0 && !this.selectedAllVillage;
    },
    icon() {
      if (this.selectedAllVillage) return 'mdi-close-box';
      if (this.selectedSomeVillage) return 'mdi-minus-box';
      return 'mdi-checkbox-blank-outline';
    },
  },
  watch: {
    checkAll(value) {
      if (value == true) {
        this.$store.commit('Loading_State', true);
        for (const customer of this.customers) {
          this.checkHandler(customer);
        }
        this.$store.commit('Loading_State', false);
      } else {
        this.$store.commit('Loading_State', true);
        this.selectedRows = [];
        for (let i = 0; i < this.customers.length; i++) {
          this.customers[i].check_number = null;
          this.customers.splice(i, 1, this.customers[i]);
        }
        this.last_check_number = 0;
        this.$store.commit('Loading_State', false);
      }
    },
    selectedFavoriteDate() {
      this.pagination.current_page = '';
      this.fetchData();
      this.fetchData(true);
    },
    search(value) {
      this.pagination.current_page = '';
      if (value == '') {
        this.fetchData();
        this.fetchData(true);
      }
    },
    selectedVillage() {
      this.pagination.current_page = '';
      // this.fetchData();
      // this.fetchData(true)
    },
    selectedDistrict() {
      this.pagination.current_page = '';
      this.fetchVillage();
      // this.fetchData();
      // this.fetchData(true)
    },
    selectedCustomerStatus() {
      this.pagination.current_page = '';
      this.fetchData();
      this.fetchData(true);
    },
    selectedCost() {
      this.pagination.current_page = '';
      this.fetchData();
      this.fetchData(true);
    },
  },
  created() {
    this.fetchData();
    this.fetchData(true);
    this.fetchAddress();
    this.fetchFavorite();
  },
  methods: {
    checkAllToggle() {
      this.checkAll = !this.checkAll;
    },
    fetchSearch() {
      this.fetchData();
      this.fetchData(true);
    },
    backPrevios() {
      this.$router.go(-1);
    },
    getCustomerUnitFunc(costBy) {
      return getCustomerUnit(costBy);
    },
    getLaoCompanyCostByFunc(costBy) {
      return getLaoCompanyCostBy(costBy);
    },

    checkHandler(value) {
      const index = this.customers.findIndex((item) => item.id == value.id);
      if (index != -1) {
        if (this.customers[index].check_number) {
          if (this.customers[index].check_number == this.last_check_number) {
            this.last_check_number--;
            this.customers[index].check_number = null;
            this.selectedRows.pop();
          }
        } else {
          this.last_check_number++;
          this.customers[index].check_number = this.last_check_number;
          this.selectedRows.push(value);
        }
        this.customers.splice(index, 1, this.customers[index]);
      }
    },
    chooseStyle() {
      return 'check';
    },
    fetchData(countexpect = false) {
      this.$store.commit('Loading_State', true);
      this.per_page = this.selectedDistrict ? null : 100;

      const options = [
        { page: this.pagination.current_page },
        { per_page: this.per_page },
        { without: this.selectedCustomerStatus },
        { villages: this.selectedVillage },
        { district_id: this.selectedDistrict },
        { filter: this.search },
        { without_month_info: true },
        { cost_by: this.selectedCost },
        { favorite_dates: this.selectedFavoriteDate },
        { village_details: this.selectedDetails },
      ];

      if (countexpect) options.push({ count_expact_trash: '1' });

      this.$axios
        .get('company', {
          params: queryOption(options),
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              if (countexpect) {
                this.countExpectTrash = res.data.data;
              } else {
                this.customers = this.per_page
                  ? res.data.data.data
                  : res.data.data;
                this.selectedAllCustomer = res.data.data;
                if (res.data.data.pagination) this.pagination = res.data.data.pagination;
                else this.pagination = {};
              }

              // this.getCenter();
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
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
              });
            }, 300);
          }
        })
        .catch(() => {
        });
    },

    fetchVillage() {
      if (this.selectedDistrict) {
        this.$axios
          .get(`info/district/${this.selectedDistrict}/village`)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.villages = res.data.data;
              }, 300);
            }
          })
          .catch(() => {
          });
      }
    },

    createPage() {
      //  var a = [];
      if (this.selectedRows.length > 0) {
        this.$router.push({
          name: 'CreateRoutePlanCompany',
          params: {
            items: this.selectedRows,
          },
        });
      } else {
        this.$store.commit('Toast_State', {
          value: true,
          color: 'error',
          msg: 'ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ',
        });
      }
    },
    viewPage(id) {
      this.$router.push({
        name: 'ViewClient',
        params: { id },
      });
    },
    remove(item) {
      const index = this.selectedVillage.indexOf(item.id);
      if (index >= 0) this.selectedVillage.splice(index, 1);
    },
    Search() {
      GetOldValueOnInput(this);
    },

    // Google map
    getCenter() {
      if (this.customers.length) {
        if (parseFloat(this.customers[0].lat) == null) {
          return this.latlng;
        }
        const latlng = {
          lat: parseFloat(this.customers[0].lat),
          lng: parseFloat(this.customers[0].lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.lat),
          lng: parseFloat(m.lng),
        };
      }
    },
    getSiteIcon(status) {
      const pin1 = {
        url: require('@coms/../../src/assets/pin1.svg'),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
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
      };
      const pin2 = {
        url: require('@coms/../../src/assets/pin2.svg'),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
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
      };

      try {
        switch (status.route_plan_details_count) {
          case 0:
            return pin1;
          case 1:
            return pin2;
        }
      } catch (e) {
        return pin1;
      }
    },
    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent = `${m.company_name} (${m.user.phone}) `;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }

      this.checkHandler(m);
    },

    toggle() {
      this.$nextTick(() => {
        if (this.selectedAllVillage) {
          this.selectedVillage = [];
        } else {
          setTimeout(() => {
            this.selectedVillage = this.villages.slice();
          }, 300);
        }
      });
    },
    costBy(value) {
      if (value == 'container') return 'ຄອນເທັນເນີ';
      if (value == 'fix_cost') return 'ທຸລະກິດເປັນຖ້ຽວ';
      if (value == 'chartered') return 'ມອບເໝົາ';
      if (value == 'infect') return 'ຂີ້ເຫຍື້ອຕິດເຊື້ອ';
      if (value == '32km') return 'ຫຼັກ32';
      return value;
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
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";

.check {
  height: 20px;
  width: 100%;
  background-color: cornflowerblue;
  color: white;
  text-align: center;
}

.uncheck {
  height: 20px;
  width: 20px;
  border: 1px solid black;
}

.main-check {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
