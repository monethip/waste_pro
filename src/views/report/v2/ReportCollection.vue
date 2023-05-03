<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          :loading="loading"
          :disabled="loading"
          @click="exportData"
        >
          Export
        </v-btn>
      </v-col>

      <v-col>
        <v-menu
          v-model="start_menu"
          :close-on-content-click="false"
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
          <v-date-picker
            v-model="start_date"
            @input="fetchData()"
          />
        </v-menu>
      </v-col>

      <v-col>
        <v-menu
          v-model="end_menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_date"
              label="ຫາວັນທີ"
              readonly
              outlined
              v-bind="attrs"
              dense
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="end_date"
            @input="fetchData()"
          />
        </v-menu>
      </v-col>

      <v-col>
        <v-autocomplete
          v-model="selectedCustomerType"
          outlined
          dense
          :items="customer_types"
          item-text="display"
          item-value="name"
          label="ປະເພດການເກັບ"
        />
      </v-col>
      <v-col v-if="selectedCustomerType=='company'">
        <v-autocomplete
          v-model="selectedCompanyType"
          outlined
          dense
          :items="company_types"
          item-text="la"
          item-value="en"
          label="ເລືອກປະເພດບໍລິການ"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-autocomplete
          v-model="selectedDriver"
          outlined
          dense
          :items="drivers"
          item-text="name"
          item-value="id"
          label="ເລືອກຄົນຂັບ"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          v-for="item in customers"
          :key="item.id"
          fixed-header
        >
          <v-row>
            <v-col>
              <v-card>
                <v-simple-table>
                  <thead>
                    <tr>
                      <th
                        colspan="11"
                        style="background-color:cadetblue"
                      >
                        {{ item.name }}
                      </th>
                    </tr>
                    <tr>
                      <th>ລົງເກັບທັງໝົດ(ຄັ້ງ)</th>
                      <th>ລົງເກັບຄົວເຮືອນ(ຄັ້ງ)</th>
                      <th>ລົງເກັບຄອນເທນເນີ(ຄັ້ງ)</th>
                      <th>ລົງເກັບເປັນຖ້ຽວ(ຄັ້ງ)</th>
                      <th>ລົງເກັບມອບເໝົາ(ຄັ້ງ)</th>
                      <th>ລົງເກັບບໍລິມາດ(ຄັ້ງ)</th>
                      <th>ລົງເກັບພິເສດ(ຄັ້ງ)</th>
                      <th>ຈຳນວນຄອນເທນເນີ</th>
                      <th>ຈຳນວນຖົງ(ຄົວເຮືອນ)</th>
                      <th>ຈຳນວນຖົງ(ບໍລິມາດ)</th>
                      <th>ຈຳນວນຖົງ(ມອບເໝົາ)</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>{{ item.time }}</td>
                      <td>{{ item.home_bag_time }}</td>
                      <td>{{ item.container_time }}</td>
                      <td>{{ item.fix_cost }}</td>
                      <td>{{ item.chartered_time }}</td>
                      <td>{{ item.bag_time }}</td>
                      <td>{{ item.events }}</td>
                      <td>{{ item.container }}</td>
                      <td>{{ item.home_bag }}</td>
                      <td>{{ item.bag }}</td>
                      <td>{{ item.chartered }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <v-card>
                <div
                  v-for="village in item.collected_villages"
                  :key="village.id"
                >
                  <v-card>
                    <v-row>
                      <v-col>
                        <v-simple-table>
                          <thead>
                            <tr>
                              <th
                                colspan="11"
                                style="background-color:aqua"
                              >
                                {{ village.name+' '+village.district_name }}
                              </th>
                            </tr>
                            <tr>
                              <th>ລົງເກັບທັງໝົດ(ຄັ້ງ)</th>
                              <th>ລົງເກັບຄົວເຮືອນ(ຄັ້ງ)</th>
                              <th>ລົງເກັບຄອນເທນເນີ(ຄັ້ງ)</th>
                              <th>ລົງເກັບເປັນຖ້ຽວ(ຄັ້ງ)</th>
                              <th>ລົງເກັບມອບເໝົາ(ຄັ້ງ)</th>
                              <th>ລົງເກັບບໍລິມາດ(ຄັ້ງ)</th>
                              <th>ລົງເກັບພິເສດ(ຄັ້ງ)</th>
                              <th>ຈຳນວນຄອນເທນເນີ</th>
                              <th>ຈຳນວນຖົງ(ຄົວເຮືອນ)</th>
                              <th>ຈຳນວນຖົງ(ບໍລິມາດ)</th>
                              <th>ຈຳນວນຖົງ(ມອບເໝົາ)</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>{{ village.time }}</td>
                              <td>{{ village.home_bag_time }}</td>
                              <td>{{ village.container_time }}</td>
                              <td>{{ village.fix_cost }}</td>
                              <td>{{ village.chartered_time }}</td>
                              <td>{{ village.bag_time }}</td>
                              <td>{{ village.events }}</td>
                              <td>{{ village.container }}</td>
                              <td>{{ village.home_bag }}</td>
                              <td>{{ village.bag }}</td>
                              <td>{{ village.chartered }}</td>
                            </tr>
                          </tbody>
                        </v-simple-table>
                      </v-col>
                    </v-row>

                    <v-row>
                      <v-col>
                        <v-simple-table
                          v-for="date in village.dates"
                          :key="date.date"
                        >
                          <thead>
                            <tr>
                              <th
                                colspan="11"
                                style="background-color:aquamarine"
                              >
                                {{ date.date }}
                              </th>
                            </tr>
                            <tr v-if="date.details.length>0">
                              <th>ຊື່ລູກຄ້າ</th>
                              <th>ປະເພດລູກຄ້າ</th>
                              <th>ປະເພດບໍລິການ</th>
                              <th>ຂີ້ເຫຍື້ອຄາດໝາຍ</th>
                              <th>ຈຳນວນຖົງ</th>
                              <th>ຈຳນວນຄອນເທນເນີ</th>
                              <th>ສະຖານະ</th>
                              <th>ເວລາເກັບແລ້ວ</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr
                              v-for="(detail,index) in date.details"
                              :key="index"
                            >
                              <td>
                                {{ detail.customer.customer_type ==
                                  'company' ? detail.customer.company_name : detail.customer.name
                                    +' '+detail.customer.surname }}
                              </td>
                              <td>{{ detail.customer.customer_type_la }}</td>
                              <td>
                                {{ detail.customer.customer_type ==
                                  'company' ? detail.customer.cost_by_la : "" }}
                              </td>
                              <td>
                                {{ detail.customer.expect_trash?
                                  detail.customer.expect_trash : "" }}
                              </td>
                              <td>{{ detail.bag }}</td>
                              <td>{{ detail.container }}</td>
                              <td>{{ detail.status_la }}</td>
                              <td>{{ detail.collected_at }}</td>
                            </tr>
                          </tbody>

                          <v-simple-table v-if="date.events.length">
                            <thead>
                              <tr>
                                <th
                                  colspan="11"
                                  style="background-color:cornflowerblue"
                                >
                                  ເກັບຂີ້ເຫຍື້ອພິເສດ
                                </th>
                              </tr>
                              <tr>
                                <th>ຊື່ລູກຄ້າ</th>
                                <th>ເບີໂທ</th>
                                <th>ສະຖານະ</th>
                                <th>ເວລາເກັບແລ້ວ</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr
                                v-for="(event,index) in date.events"
                                :key="index"
                              >
                                <td>{{ event.name+' '+event.surname }}</td>
                                <td>{{ event.phone }}</td>
                                <td>{{ event.collect_status_la }}</td>
                                <td>{{ event.collected_at }}</td>
                              </tr>
                            </tbody>
                          </v-simple-table>
                        </v-simple-table>
                      </v-col>
                    </v-row>
                  </v-card>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import queryOption from '@/Helpers/queryOption';
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import { getCompanyCostBy } from '@/Helpers/Customer';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|Report Customer`;
  },
  data() {
    return {
      start_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      end_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      start_menu: false,
      end_menu: false,
      export: '',
      customers: [],
      driverLists: [],
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      car_id: '',
      // Filter
      selectedCustomerType: 'home',
      selectedCompanyType: null,
      selectedDriver: '',
      customer_types: [
        {
          name: 'home',
          display: 'ຄົວເຮືອນ',
        },
        {
          name: 'company',
          display: 'ຫົວໜ່ວຍທຸລະກິດ',
        },
        {
          name: 'new_collection_event',
          display: 'ຖ້ຽວພິເສດ',
        },
      ],
      company_types: getCompanyCostBy,
    };
  },
  computed: {
    drivers() {
      const data = [];
      for (const driver of this.driverLists) {
        data.push({
          id: driver.id,
          name: `${driver.name} ${driver.surname} (${driver.vehicle.car_id})`,
        });
      }
      return data;
    },
  },
  watch: {
    search(value) {
      if (value != '') {
        this.fetchData();
      }
    },
    selectedDriver() {
      this.fetchData();
    },
    selectedCustomerType() {
      this.fetchData();
    },
    selectedCompanyType() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchDriver();
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('report-driver-collection', {
          params: queryOption([
            // {page: this.pagination.current_page},
            // {per_page: this.per_page},
            { date_from: this.start_date },
            { date_to: this.end_date },
            { driver_id: this.selectedDriver },
            // { filter: this.search },
            // { car_id: this.car_id },
            { type: this.selectedCustomerType },
            { company_type: this.selectedCompanyType },
            { download: this.export },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            if (res.data.data.download_link) {
              window.open(res.data.data.download_link);
              this.export = '';
            } else {
              this.customers = res.data.data;
            }
          }
        })
        .catch(() => {
          this.$store.commit('Loading_State', false);
          this.export = '';
          this.start_menu = false;
          this.end_menu = false;
        });
    },
    fetchDriver() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('driver')
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.driverLists = res.data.data;
          }
        })
        .catch(() => {
          this.$store.commit('Loading_State', false);
          this.start_menu = false;
          this.end_menu = false;
        });
    },

    exportData() {
      this.export = 'excel';
      this.fetchData();
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";

.text-table-header {
  font-size: 14px !important;
}

.v-data-table>.v-data-table__wrapper>table>thead>tr>th,
td {
  min-width: 140px !important;
}

.text-table-body {
  font-size: 13px !important;
}

.page--table {
  .page {
    &__table {
      margin-top: 20px;
    }

    &__grab-icon {
      cursor: move;
    }
  }
}
</style>
