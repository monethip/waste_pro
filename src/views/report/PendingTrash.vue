<template>
  <div class="pa-4">
    <!-- Section Filter -->
    <v-row>
      <v-col cols="12">
        <v-alert
          outlined
          color="primary"
        >
          <div class="text-h6">
            <span>
              <v-icon color="primary">mdi-magnify</v-icon> ຄົ້ນຫາ
            </span>
          </div>
          <v-row class="mt-4">
            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ເລີ່ມວັນທີ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ຫາວັນທີ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ເລືອກເມືອງ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ເລືອກບ້ານ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ເລືອກປະເພດລູກຄ້າ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ເລືອກປະເພດບໍລິການ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ເລືອກປະເພດລົດ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ເລືອກລົດ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-autocomplete
                item-text
                item-value
                label="ເລືອກຄົນຂັບ"
                outlined
                dense
                clearable
              />
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-btn
                color="primary"
                dark
                style="width:100%"
              >
                <v-icon left>
                  mdi-magnify
                </v-icon>
                ຄົ້ນຫາ
              </v-btn>
            </v-col>

            <v-col
              cols="12"
              md="3"
              xl="2"
              class="py-0"
            >
              <v-btn
                color="green"
                dark
                style="width:100%"
              >
                <v-icon left>
                  mdi-microsoft-excel
                </v-icon>
                export
              </v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>

    <!-- End Section -->

    <!-- Section Summary -->
    <v-row>
      <v-col
        cols="12"
      >
        <v-skeleton-loader
          v-if="!districts.length"
          type="article"
        />
        <v-card
          v-else
          outlined
        >
          <v-card-title>ພາບລວມ: <strong>{{ total.total_format }}</strong></v-card-title>
          <v-card-text>
            <v-row
              v-for="district in districts"
              :key="district.district_id"
            >
              <v-col cols="12">
                <v-card outlined>
                  <v-card-title>{{ district.district_name }}: <strong>{{ district.count_plans_format }}</strong></v-card-title>
                  <v-card-text>
                    <v-chip
                      v-for="village in district.villages"
                      :key="village.village_id"
                      class="ma-1"
                      :color="district.color"
                      outlined
                    >
                      {{ village.village_name }}: <strong>{{ village.count_plans_format }}</strong>
                    </v-chip>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- End Section -->

    <!-- Section Summary -->
    <v-row>
      <v-col
        cols="12"
      >
        <v-skeleton-loader
          v-if="!displayData.length"
          type="table"
        />
        <v-card
          v-else
          outlined
        >
          <v-card-title>ລາຍການແຜນ: <strong>{{ total.total_format }}</strong></v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-data-table
                  :headers="headers"
                  :items="displayData"
                  :disable-pagination="true"
                  hide-default-footer
                >
                  <template v-slot:[`item.date`]="{ item }">
                    <a
                      href="#"
                      @click="routeOpen(item.route_plan_calendar_detail)"
                    >{{ item.date }}</a>
                  </template>

                  <template v-slot:[`item.display_customer_id`]="{ item }">
                    <a
                      href="#"
                      @click="routeOpen(item.route_customer)"
                    >{{ item.display_customer_id }}</a>
                  </template>

                  <template v-slot:[`item.customer_name`]="{ item }">
                    <a
                      href="#"

                      @click="routeOpen(item.route_customer)"
                    >{{ item.customer_name }}</a>
                  </template>

                  <template v-slot:[`item.route_plan_name`]="{ item }">
                    <a
                      href="#"

                      @click="routeOpen(item.route_plan_calendar)"
                    >{{ item.route_plan_name }}</a>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
            <v-row v-if="paginate.next_page_url || paginate.prev_page_url">
              <v-col cols="4">
                <v-btn
                  color="primary"
                  outlined
                  :disabled="!paginate.prev_page_url"
                  @click="fetchData({url:paginate.prev_page_url,type:'prev'})"
                >
                  <v-icon left>
                    mdi-arrow-left
                  </v-icon>
                  Previous
                </v-btn>
              </v-col>
              <v-col
                cols="4"
                align="center"
              >
                {{ paginate.current_page }} / {{ total.count_pages_format }}
              </v-col>
              <v-col
                cols="4"
                align="right"
              >
                <v-btn
                  color="primary"
                  dark
                  :disabled="!paginate.next_page_url"
                  @click="fetchData({url:paginate.next_page_url,type:'next'})"
                >
                  Next
                  <v-icon right>
                    mdi-arrow-right
                  </v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- End Section -->
  </div>
</template>

<script>
import queryOptions from '../../Helpers/queryOption';
import { getFullName, getLaoCompanyCostBy, getDisplayId } from '../../Helpers/Customer';
import routeOpen from '../../Helpers/RouteOpen';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|Report Trash`;
  },
  data() {
    return {
      headers: [
        { text: 'ວັນທີ', value: 'date', width: '120px' },
        { text: 'ບ້ານ', value: 'village_name', width: '120px' },
        { text: 'ເມືອງ', value: 'district_name', width: '120px' },
        { text: 'ໄອດີລູກຄ້າ', value: 'display_customer_id' },
        { text: 'ຊື່ລູກຄ້າ', value: 'customer_name', width: '120px' },
        { text: 'ປະເພດລູກຄ້າ', value: 'customer_cost_by' },
        { text: 'ຄົນຂັບ', value: 'driver_name' },
        { text: 'ລົດ', value: 'vehicle_car_number', width: '120px' },
        { text: 'ປະເພດລົດ', value: 'vehicle_type_name' },
        { text: 'ແຜນ', value: 'route_plan_name' },
      ],
      rawData: [],
      rawSum: [],
      startDate: `${new Date().toISOString().substr(0, 4)}-07-01`,
      paginate: {
        next_page_url: null,
        prev_page_url: null,
        cursor_paginate: 25,
        current_page: 1,
        total_pages: 1,
      },
    };
  },
  watch: { },
  created() {
    this.fetchData();
    this.fetchSum();
  },
  methods: {
    routeOpen(route) {
      return routeOpen.call(this, route);
    },
    async fetchData(path = null) {
      this.$store.commit('Loading_State', true);
      const res = await this.$axios
        .get(path && path.url ? path.url : 'report-pending-collection', {
          params: this.params,
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
      try {
        this.$store.commit('Loading_State', false);
        if (res.data && !res.data.error) {
          this.rawData = res.data.data.data;
          this.paginate.next_page_url = res.data.data.next_page_url;
          this.paginate.prev_page_url = res.data.data.prev_page_url;
          if (path) {
            if (path.type == 'next') this.paginate.current_page += 1;
            else this.paginate.current_page -= 1;
          } else {
            this.paginate.current_page = 1;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchSum() {
      const res = await this.$axios
        .get('report-pending-collection-summary', {
          params: this.params,
        })
        .catch((error) => {
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
        });

      if (res.data && !res.data.error) { this.rawSum = res.data.data; }
    },
    generateHexColor() {
      // Generate random RGB values
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      // Calculate the luminance of the generated color against white
      const luminanceAgainstWhite = 1 - (0.299 * (r / 255) + 0.587 * (g / 255) + 0.114 * (b / 255));

      // Determine if the luminance difference from white is sufficient
      const threshold = 0.4; // You can adjust this threshold as needed
      if (luminanceAgainstWhite < threshold) {
        // If not contrasting enough, generate another random color
        return this.generateHexColor();
      }

      // Convert RGB values to a hex color string
      const hexColor = `#${(r * 65536 + g * 256 + b).toString(16).padStart(6, '0')}`;

      // Return the hex color string
      return hexColor;
    },
  },
  computed: {
    districts() {
      const districtMap = new Map();

      for (const dItem of this.rawSum) {
        if (!districtMap.has(dItem.district_id)) {
          districtMap.set(dItem.district_id, {
            district_id: dItem.district_id,
            district_name: dItem.district_name,
            count_plans: dItem.count_plan_calendar_details,
            count_plans_format: Intl.NumberFormat().format(dItem.count_plan_calendar_details),
            color: this.generateHexColor(),
            villages: [],
          });
        }

        const district = districtMap.get(dItem.district_id);

        district.count_plans += dItem.count_plan_calendar_details;
        district.count_plans_format = Intl.NumberFormat().format(district.count_plans);
        district.villages.push({
          village_id: dItem.village_id,
          village_name: dItem.village_name,
          count_plans: dItem.count_plan_calendar_details,
          count_plans_format: Intl.NumberFormat().format(dItem.count_plan_calendar_details),
        });

        const totalPlans = district.villages.reduce((accumulator, village) => accumulator + village.count_plans, 0);
        district.count_plans = totalPlans;
        district.count_plans_format = Intl.NumberFormat().format(totalPlans);
      }

      return Array.from(districtMap.values());
    },
    displayData() {
      const modifiedData = [];

      for (const item of this.rawData) {
        const modifiedItem = {
          ...item,
          customer_name: getFullName(item.customer_name, item.customer_surname, item.customer_company_name, item.customer_type),
          customer_cost_by: getLaoCompanyCostBy(item.customer_cost_by, item.customer_type),
          display_customer_id: getDisplayId(item.customer_type, item.c_id),
          driver_name: `${item.driver_name} (${item.driver_card_id})`,
          route_customer: {
            name: item.customer_type == 'company' ? 'ViewCompanyDetail' : 'ViewClient',
            params: {
              id: item.c_id,
            },
            query: {
              view_tab: 'tab-2',
            },
          },
          route_plan_calendar_detail: {
            name: 'TrashDetail',
            params: {
              plan_calendar: item.plan_calendar_id,
              id: item.id,
            },
            query: {
              view_tab: 'tab-2',
            },
          },
          route_plan_calendar: {
            name: 'PlanCalendarDetail',
            params: {
              id: item.plan_calendar_id,
              planMonthId: item.plan_month_id,
            },
            query: {
              view_tab: 'tab-2',
            },
          },
        };
        modifiedData.push(modifiedItem);
      }

      return modifiedData;
    },
    total() {
      const totalPlans = this.districts.reduce((accumulator, dItem) => accumulator + dItem.count_plans, 0);
      const contPages = Math.ceil(totalPlans / this.paginate.cursor_paginate);
      return {
        total: totalPlans,
        total_format: Intl.NumberFormat().format(totalPlans),
        count_pages: contPages,
        count_pages_format: Intl.NumberFormat().format(contPages),
      };
    },
    params() {
      const option = {
        cursor_paginate: this.paginate.cursor_paginate,
        start_date: this.startDate,
        no_append: true,
      };

      return queryOptions(option);
    },
  },
};
</script>

<style lang="scss">
</style>
