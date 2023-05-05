<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>ລາຍລະອຽດແຜນເສັ້ນທາງ
      <span class="primary-color ml-2">{{ plan.name }}</span>
    </v-breadcrumbs>

    <v-row>
      <v-col
        v-if="switchMap"
        cols="12"
        class="mb-4"
      >
        <GmapMap
          :center="
            getCenter().lat > 0 || getCenter().lat < 0
              ? getCenter()
              : { lat: 0, lng: 0 }
          "
          :zoom="16"
          style="width: 100%; height: 450px"
          :disable-default-u-i="true"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoPosition"
            :opened="infoOpened"
            :conent="infoContent"
            @closeclick="infoOpened = false"
          >
            {{ infoContent }}
          </gmap-info-window>
          <GmapMarker
            v-for="(m, index) in customers"
            :key="index"
            :position="getMarkers(m)"
            :draggable="false"
            :icon="markerOptions"
            :animation="2"
            :label="(index + 1).toString()"
            :clickable="true"
            @click="toggleInfo(m, index)"
          />
        </GmapMap>
      </v-col>

      <v-col v-if="!switchMap">
        <div class="iframe-container">
          <iframe
            :src="plan.embed"
            height="100%"
            width="100%"
            class="embed"
          />
        </div>
      </v-col>
    </v-row>

    <v-row class="mb-n6">
      <v-col>
        <v-btn
          style="width:100%"
          class="btn-primary"
          @click="viewMap()"
        >
          <v-icon>mdi-map</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          style="width:100%"
          class="btn-primary"
          @click="editCompanyPlan(plan.id)"
        >
          Update
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          style="width:100%"
          dark
          class="teal"
          @click="dialog=true"
        >
          Update ໃຫ້ແຜນເດີນລົດ
        </v-btn>
      </v-col>
      <v-col>
        <h4>ລວມລູກຄ້າ {{ pagination.total }} ຄົນ</h4>
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
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
      scrollable
    >
      <v-card tile>
        <v-toolbar
          flat
          dark
          color="teal"
        >
          <v-btn
            icon
            dark
            height="50"
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Update ໃຫ້ແຜນເດີນລົດ <strong>{{ plan.name }}</strong></v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-data-table
            :disable-pagination="true"
            :headers="headerCalendars"
            :items="planCalendars"
            :search="search"
            hide-default-footer
          >
            <template v-slot:item.driver="{ item }">
              <div>{{ item.driver.vehicle.car_id }} ({{ item.driver.name }})</div>
            </template>
            <template v-slot:item.date="{ item }">
              <v-chip
                dark
                color="green"
              >
                {{ item.date }}
              </v-chip>
            </template>
            <template v-slot:item.created_at="{ item }">
              <div>{{ moment(item.created_at).format("hh:mm:ss DD-MM-YY") }}</div>
            </template>
            <template v-slot:item.count_success="{ item }">
              <p style="color:green">
                {{ item.count_success }}
              </p>
            </template>
            <template v-slot:item.count_wait_to_confirm="{ item }">
              <p style="color:orange">
                {{ item.count_wait_to_confirm }}
              </p>
            </template>
            <template v-slot:item.count_pause="{ item }">
              <p
                v-if="!item.count_pause"
                style="color:green"
              >
                {{ item.count_pause }}
              </p>
              <p
                v-else
                style="color:orange"
              >
                {{ item.count_pause }}
              </p>
            </template>
            <template v-slot:item.count_unpause="{ item }">
              <p
                v-if="!item.count_unpause"
                style="color:green"
              >
                {{ item.count_unpause }}
              </p>
              <p
                v-else
                style="color:orange"
              >
                {{ item.count_unpause }}
              </p>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    class="mr-2"
                    color="primary"
                    dark
                    medium
                    v-bind="attrs"
                    v-on="on"
                  >
                    mdi-refresh
                  </v-icon>
                </template>
                <v-list>
                  <v-list-item
                    link
                    @click="updatePlanCalendar(item)"
                  >
                    <v-list-item-title>
                      <v-icon
                        class="mr-2"
                        small
                      >
                        mdi-check
                      </v-icon>
                      ຢືນຢັນ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-row>
      <v-col>
        <div>
          <v-card>
            <v-card flat>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="customers"
                  :search="search"
                  :disable-pagination="true"
                  hide-default-footer
                >
                  <template v-slot:item.customer="{ item }">
                    <div v-if="(item.customer.customer_type = 'company')">
                      {{ item.customer.company_name }}
                    </div>
                    <div>
                      {{ item.customer.name }}
                      {{ item.customer.surname }}
                    </div>
                  </template>
                  <template v-slot:item.favorite_dates="{ item }">
                    <div
                      v-for="(data, index) in item.customer.favorite_dates"
                      :key="index"
                    >
                      <div>{{ data.name }}</div>
                    </div>
                  </template>
                  <template v-slot:item.cost_by="{ item }">
                    <div>{{ costBy(item.customer.cost_by) }}</div>
                  </template>
                  <template v-slot:item.default_round="{ item }">
                    <div>{{ item.default_round }} ຮອບ</div>
                  </template>
                  <template v-slot:item.status="{ item }">
                    <v-chip
                      v-if="item.customer"
                      :color="statusColor(item.customer.status)"
                    >
                      {{ item.customer.status }}
                    </v-chip>
                  </template>
                  <template v-slot:item.favorite_dates="{ item }">
                    <v-chip
                      v-for="date in item.favorite_dates"
                      :key="date.name"
                      dark
                      color="green"
                    >
                      {{ date.name }}
                    </v-chip>
                  </template>

                  <template v-slot:item.customer.expect_trash="{ item }">
                    <v-chip
                      v-if="item.customer.expect_trash"
                      outlined
                      color="green"
                    >
                      {{
                        Intl.NumberFormat().format(item.customer.expect_trash)
                      }}
                      {{ getCustomerUnitFunc(item.customer.cost_by) }}
                    </v-chip>
                    <div v-else>
                      -
                    </div>
                  </template>

                  <template v-slot:item.customer.can_collect="{ item }">
                    <v-chip
                      :color="item.customer.can_collect ? 'success' : 'error'"
                    >
                      {{
                        item.customer.can_collect ? "ເກັບໄດ້" : "ເກັບບໍ່ໄດ້"
                      }}
                    </v-chip>
                  </template>

                  <template v-slot:item.actions="{ item }">
                    <v-icon
                      small
                      class="mr-2"
                      @click="viewPage(item)"
                    >
                      mdi-eye
                    </v-icon>
                  </template>
                </v-data-table>
                <br>
                <template>
                  <Pagination
                    v-if="pagination.total_pages > 1"
                    :pagination="pagination"
                    :offset="offset"
                    @paginate="fetchData()"
                  />
                </template>
              </v-card-text>
            </v-card>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import { getCustomerUnit, getLaoCompanyCostBy } from '@/Helpers/Customer';

export default {
  name: 'Customer',
  data() {
    return {
      title() {
        return `Vientiane Waste Co-Dev|View Plan`;
      },
      tab: null,
      dialog: false,
      customers: [],
      planCalendars: [],
      headerCalendars: [
        { text: 'ວັນທີ', value: 'date' },
        { text: 'ລົດ', value: 'driver' },
        { text: 'ປະເພດລົດ', value: 'driver.vehicle.vehicle_type.name' },

        {
          text: 'ລູກຄ້າ',
          value: 'plan_calendar_details_count',
          align: 'center',
          sortable: false,
        },
        {
          text: 'ທີ່ຕ້ອງເກັບ',
          value: 'count_unpause',
          align: 'center',
        },
        {
          text: 'ທີ່ຖືກຢຸດໄວ້',
          value: 'count_pause',
          align: 'center',
        },
        {
          text: 'ເກັບຂີເຫື້ຍອສຳເລັດ',
          value: 'count_success',
          align: 'center',
        },
        {
          text: 'ລໍຖ້າຢືນຢັນ',
          value: 'count_wait_to_confirm',
          align: 'center',
        },
        {
          text: 'ວັນທີສ້າງ',
          value: 'created_at',
          align: 'center',
        },
        { text: '', value: 'actions', sortable: false },
      ],
      loading: false,
      switchMap: true,
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
      plan: {},

      headers: [
        {
          text: 'ລຳດັບຄວາມສຳຄັນ',
          value: 'priority',
          sortable: false,
          align: 'center',
        },
        { text: 'ໄອດີ', value: 'customer.customer_id' },
        { text: 'ລູກຄ້າ', value: 'customer.full_name' },
        { text: 'ເບີໂທ', value: 'customer.user.phone' },
        { text: 'ຂີ້ເຫຍື້ອຄາດໝາຍ', value: 'customer.expect_trash' },
        { text: 'ສະຖານະເກັບ', value: 'customer.can_collect' },
        { text: 'ສະຖານະ', value: 'status', sortable: false },
        { text: 'ປະເພດບໍລິການ', value: 'cost_by_la', sortable: false },
        { text: 'ມື້ບໍລິການ', value: 'favorite_dates', width: '120px' },
        { text: 'ຈຳນວນຮອບເລີ່ມຕົ້ນ', value: 'default_round', width: '120px' },
        {
          text: 'ລາຍລະອຽດ',
          value: 'customer.collect_description',
          sortable: false,
        },
        { text: '', value: 'actions', sortable: false },
      ],
      // Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      markerOptions: {
        // eslint-disable-next-line global-require
        url: require('@coms/../../src/assets/pin1.svg'),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        size: {
          width: 28,
          height: 48,
          f: 'px',
          b: 'px',
        },
        scaledSize: {
          width: 28,
          height: 48,
          f: 'px',
          b: 'px',
        },
      },

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
      countExpectTrash: [],
    };
  },

  watch: {
    dialog(value) {
      if (value) { this.fetchPlanCalendar(); }
    },
    search(value) {
      if (value == '') {
        this.fetchData();
        this.fetchData(true);
      }
    },
    selectedVillage() {
      this.fetchData();
      this.fetchData(true);
    },
    selectedDistrict() {
      this.fetchVillage();
    },
  },
  created() {
    this.fetchData();
    this.fetchData(true);
    this.fetchDetail();
    // this.fetchAddress();
  },
  methods: {
    updatePlanCalendar(item) {
      this.$store.commit('Loading_State', true);
      this.$axios
        .post(`update-from-route/${item.id}`)
        .then((res) => {
          this.$store.commit('Loading_State', false);
          setTimeout(() => {
            this.$store.commit('Loading_State', false);
            this.$store.commit('modalDelete_State', false);
            this.fetchData();
            this.$store.commit('Toast_State', {
              value: true,
              color: 'success',
              msg: res.data.message,
            });
          }, 300);
          if (res.data.code == 200) {
            this.fetchPlanCalendar();
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
        });
    },
    fetchPlanCalendar() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`plan-calendar`, {
          params: {
            route_plan_id: this.$route.params.id,
            date: new Date().toISOString().substr(0, 10),
            operation: '>=',
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.planCalendars = res.data.data;
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    getLaoCompanyCostByFunc(costBy) {
      return getLaoCompanyCostBy(costBy);
    },
    getCustomerUnitFunc(costBy) {
      return getCustomerUnit(costBy);
    },
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData(isCountTrash = false) {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`route-plan/${this.$route.params.id}/route-plan-detail`, {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            count_expect_trash: isCountTrash ? '1' : '0',

            // filter: this.search,
            villages: this.selectedVillage,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              if (isCountTrash) {
                this.countExpectTrash = res.data.data;
              } else {
                this.$store.commit('Loading_State', false);
                this.customers = res.data.data.data;
                this.pagination = res.data.data.pagination;
                this.getCenter();
              }
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchDetail() {
      this.$axios
        .get(`route-plan/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.plan = res.data.data;
              console.log(this.plan);
            }, 100);
          }
        })
        .catch(() => {});
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
            }, 100);
          }
        })
        .catch(() => {});
    },

    createPage() {
      // console.log(this.customers);
      this.$router.push({
        name: 'CreateExportPlan',
        params: {
          items: this.customers,
          villages: this.selectedVillage,
        },
      });
      this.$emit('create-plan', this.customers, this.selectedVillage);
    },
    editCompanyPlan(id) {
      console.log(id);
      this.$router.push({
        name: 'EditPlanNoMap',
        params: { id },
      });
    },

    viewPage(data) {
      if (data.customer.customer_type == 'company') {
        this.$router.push({
          name: 'ViewCompanyDetail',
          params: { id: data.customer_id },
        });
      } else if (data.customer.customer_type == 'home') {
        this.$router.push({
          name: 'ViewClient',
          params: { id: data.customer_id },
        });
      }
    },
    viewMap() {
      this.switchMap = !this.switchMap;
    },
    Search() {
      GetOldValueOnInput(this);
    },

    // Google map
    getCenter() {
      if (this.customers.length) {
        const latlng = {
          lat: parseFloat(this.customers[0].customer.lat),
          lng: parseFloat(this.customers[0].customer.lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.customer.lat),
          lng: parseFloat(m.customer.lng),
        };
      }
    },

    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent = `${m.priority
      } ${
        m.customer.company_name
      } (${
        m.customer.customer_id
      }) `;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    statusColor(value) {
      if (value == 'active') return 'success';
      if (value == 'inactive') return 'error';
      return 'info';
    },
    costBy(value) {
      if (value == 'container') return 'ຄອນເທັນເນີ';
      if (value == 'fix_cost') return 'ທຸລະກິດເປັນຖ້ຽວ';
      if (value == 'chartered') return 'ມອບເໝົາ';
      if (value == 'bag') return 'ບໍລິມາດ';
      if (value == 'infect') return 'ຂີ້ເຫຍື້ອຕິດເຊື້ອ';
      if (value == '32km') return 'ຫຼັກ32';
      return value;
    },
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

.embed {
  min-height: 400px;
}
</style>
