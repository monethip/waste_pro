<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn
        class="text-primary"
        text
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>
      ລາຍລະອຽດແຜນເສັ້ນທາງ
      <span class="primary-color ml-2">{{ plan.name }}</span>
    </v-breadcrumbs>

    <v-row>
      <v-col
        v-if="switchMap"
        class="mb-4"
        cols="12"
      >
        <GmapMap
          :center="getCenter().lat > 0 || getCenter().lat < 0 ? getCenter() : { lat: 0, lng: 0 }"
          :disable-default-u-i="true"
          :zoom="16"
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
            :icon="markerOptions"
            :label="(index + 1).toString()"
            :position="getMarkers(m)"
            @click="toggleInfo(m, index)"
          />
        </GmapMap>
      </v-col>

      <v-col v-if="!switchMap">
        <div class="iframe-container">
          <iframe
            :src="plan.embed"
            class="embed"
            height="100%"
            width="100%"
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
        <h4 v-if="countExpectTrash">
          ຂີ້ເຫຍື້ອຄາດໝາຍ: {{
            Intl.NumberFormat().format(countExpectTrash.expect_bag) + ' '
              +
              getCustomerUnitFunc(countExpectTrash.cost_by)
          }}
        </h4>
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

    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table
              :disable-pagination="true"
              :headers="headers"
              :items="customers"
              :search="search"
              hide-default-footer
            >
              <template v-slot:item.customer="{ item }">
                <div
                  v-if="(item.customer.customer_type = 'company')"
                >
                  {{ item.customer.company_name }}
                </div>
                <div>
                  {{ item.customer.name }}
                  {{ item.customer.surname }}
                </div>
              </template>

              <template v-slot:item.customer.can_collect="{ item }">
                <v-chip
                  :color="item.customer.can_collect ? 'success' : 'error'"
                >
                  {{ item.customer.can_collect ? "ເກັບໄດ້" : "ເກັບບໍ່ໄດ້" }}
                </v-chip>
              </template>

              <template v-slot:item.status="{ item }">
                <v-chip
                  v-if="item.customer"
                  :color="statusColor(item.customer.status)"
                >
                  {{ item.customer.status }}
                </v-chip>
              </template>

              <template v-slot:item.customer.package.package_size.bag="{ item }">
                <v-chip
                  v-if="item.customer.package && item.customer.package.package_size"
                  color="green"
                  outlined
                >
                  {{ Intl.NumberFormat().format(item.customer.package.package_size.bag) }}
                  {{ getCustomerUnitFunc(item.customer.cost_by) }}
                </v-chip>
                <div v-else>
                  -
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon
                  class="mr-2"
                  small
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
import { getCustomerUnit } from '@/Helpers/Customer';

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
        { text: 'ຂີ້ເຫຍື້ອຄາດໝາຍ', value: 'customer.package.package_size.bag' },
        { text: 'ສະຖານະເກັບ', value: 'customer.can_collect' },
        { text: 'ສະຖານະ', value: 'status', sortable: false },
        { text: 'ເຮືອນເລກທີ', value: 'customer.house_number', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
      // Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      markerOptions: {

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
      countExpectTrash: {
        expect_bag: 0,
        cost_by: '',
      },
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
    console.log(this.plan);
  },
  methods: {
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
            without_month_info: true,
            count_expect_trash: isCountTrash ? '1' : '0',
            // filter: this.search,
            villages: this.selectedVillage,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              if (isCountTrash) {
                this.countExpectTrash = res.data.data[0];
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
        .catch(() => {
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
            }, 100);
          }
        })
        .catch(() => {
        });
    },
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
        name: 'EditHomeRoutePlanNoMap',
        params: { id },
      });
    },

    viewPage(data) {
      if (data.customer.customer_type == 'company') {
        this.$openRoute({
          name: 'ViewCompanyDetail',
          params: { id: data.customer_id },
        });
      } else if (data.customer.customer_type == 'home') {
        this.$openRoute({
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
        m.customer.name
      } (${
        m.customer.house_number
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
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

.embed {
  min-height: 400px;
}
</style>
