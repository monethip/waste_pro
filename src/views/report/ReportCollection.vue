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
          label="ປະເພດລູກການເກັບ"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="car_id"
          clearable
          outlined
          dense
          prepend-inner-icon="mdi-magnify"
          label="Car Id"
          single-line
          hide-details
          @keyup.enter="fetchData()"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="search"
          clearable
          outlined
          dense
          prepend-inner-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <!--         show home customer-->
          <v-simple-table
            v-if="selectedCustomerType == 'home'"
            fixed-header
          >
            <thead>
              <tr>
                <th class="text-left text-table-header">
                  Driver
                </th>
                <!--              <th class="text-left text-table-header">-->
                <!--                Car ID-->
                <!--              </th>-->
                <th class="text-left text-table-header">
                  ບ້ານ
                </th>
                <th class="text-left text-table-header">
                  ເມືອງ
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນ
                </th>
                <th class="text-left text-table-header">
                  ຖົງ
                </th>
                <th class="text-center text-table-header">
                  ລວມຖົງ
                </th>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="(driver) in customers"
              >
                <tr
                  v-for="(item,iSub) in driver.data"
                  :key="iSub.id"
                >
                  <td
                    v-if="iSub === 0"
                    :rowspan="driver.data.length"
                  >
                    {{ driver.driver_name }} ({{ driver.vehicle_car_id }})
                  </td>
                  <!--                <td v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.vehicle_car_id }}</td>-->
                  <td>
                    {{ item.village_name }}
                  </td>
                  <td>
                    {{ item.district_name }}
                  </td>
                  <td>
                    {{ item.amount }}
                  </td>
                  <td>
                    {{ item.bags }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total }}
                    </v-chip>
                  </td>
                </tr>
              </template>
            </tbody>
          </v-simple-table>

          <!--            show company customer-->
          <v-simple-table
            v-if="selectedCustomerType == 'company'"
            fixed-header
            dense
          >
            <thead>
              <tr>
                <th class="text-left text-table-header">
                  Driver
                </th>
                <!--              <th class="text-left text-table-header">-->
                <!--                Car ID-->
                <!--              </th>-->
                <th class="text-left text-table-header">
                  ບ້ານ
                </th>
                <th class="text-left text-table-header">
                  ເມືອງ
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຕູ້ຄອນເທນເນີ
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຕູ້ຄອນເທນເນີທັງໝົດ
                </th>
                <th class="text-left text-table-header">
                  ຄັ້ງລົງເກັບ (ປະເພດເປັນຖ້ຽວ)
                </th>
                <th class="text-left text-table-header">
                  ຄັ້ງລົງເກັບທັງໝົດ (ປະເພດເປັນຖ້ຽວ)
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖົງ (ມອບເໝົາ)
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖົງທັງໝົດ (ມອບເໝົາ)
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖົງ (ຕິດເຊື້ອ)
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖົງທັງໝົດ (ຕິດເຊື້ອ)
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖົງ (ຫຼັກ32)
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖົງທັງໝົດ (ຫຼັກ32)
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖົງ (ບໍລິມາດ)
                </th>
                <th class="text-center text-table-header">
                  ຈຳນວນຖົງທັງໝົດ (ບໍລິມາດ)
                </th>
                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບ (ປະເພດຄອນເທນເນີ)
                </th>
                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບທັງໝົດ (ປະເພດຄອນເທນເນີ)
                </th>

                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບ (ປະເພດເປັນຖ້ຽວ)
                </th>

                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບທັງໝົດ (ປະເພດເປັນຖ້ຽວ)
                </th>

                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບ (ບໍລິມາດ)
                </th>
                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບທັງໝົດ (ບໍລິມາດ)
                </th>

                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບ (ຕິດເຊື້ອ)
                </th>
                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບທັງໝົດ (ຕິດເຊື້ອ)
                </th>

                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບ (ຫຼັກ32)
                </th>
                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບທັງໝົດ (ຫຼັກ32)
                </th>

                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບທັງໝົດ (ຕາມບ້ານ)
                </th>

                <th class="text-center text-table-header">
                  ຄັ້ງລົງເກັບທັງໝົດ
                </th>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="(driver) in customers"
              >
                <tr
                  v-for="(item,iSub) in driver.data"
                  :key="iSub.id"
                >
                  <td
                    v-if="iSub === 0"
                    class="text-table-body"
                    :rowspan="driver.data.length"
                  >
                    {{ driver.driver_name }} ({{ driver.vehicle_car_id }})
                  </td>
                  <!--                <td class="text-table-body" v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.vehicle_car_id }}</td>-->
                  <td class="text-table-body">
                    {{ item.village_name }}
                  </td>
                  <td class="text-table-body">
                    {{ item.district_name }}
                  </td>
                  <td class="text-table-body">
                    {{ item.subtotal_container }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_container }}
                    </v-chip>
                  </td>
                  <td class="text-table-body">
                    {{ item.subtotal_bag_chartered }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_bag_chartered }}
                    </v-chip>
                  </td>
                  <td class="text-table-body">
                    {{ item.subtotal_bag_infect }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_bag_infect }}
                    </v-chip>
                  </td>
                  <td class="text-table-body">
                    {{ item.subtotal_bag_32km }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_bag_32km }}
                    </v-chip>
                  </td>
                  <td class="text-table-body">
                    {{ item.subtotal_bag_bag }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_bag_bag }}
                    </v-chip>
                  </td>
                  <td class="text-table-body">
                    {{ item.container_collect_time }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_container_collect_time }}
                    </v-chip>
                  </td>
                  <td class="text-table-body">
                    {{ item.fix_cost_collect_time }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_fix_cost_collect_time }}
                    </v-chip>
                  </td>
                  <td class="text-table-body">
                    {{ item.chartered_collect_time }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_chartered_collect_time }}
                    </v-chip>
                  </td>
                  <td class="text-table-body">
                    {{ item.bag_collect_time }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_bag_collect_time }}
                    </v-chip>
                  </td>

                  <td class="text-table-body">
                    {{ item.infect_collect_time }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_infect_collect_time }}
                    </v-chip>
                  </td>

                  <td class="text-table-body">
                    {{ item._32km_collect_time }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_32km_collect_time }}
                    </v-chip>
                  </td>

                  <td class="text-table-body">
                    {{ item.subtotal_collect_time }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-center"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total_collect_time }}
                    </v-chip>
                  </td>
                </tr>
              </template>
            </tbody>
          </v-simple-table>

          <!--            show company customer-->
          <v-simple-table
            v-if="selectedCustomerType == 'event'"
            fixed-header
            dense
          >
            <thead>
              <tr>
                <th class="text-left text-table-header">
                  Driver
                </th>
                <!--              <th class="text-left text-table-header">-->
                <!--                Car ID-->
                <!--              </th>-->
                <th class="text-left text-table-header">
                  ບ້ານ
                </th>
                <th class="text-left text-table-header">
                  ເມືອງ
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນ
                </th>
                <th class="text-left text-table-header">
                  ທັງໝົດ
                </th>
              </tr>
            </thead>
            <tbody>
              <template
                v-for="(driver) in customers"
              >
                <tr
                  v-for="(item,iSub) in driver.data"
                  :key="iSub.id"
                >
                  <td
                    v-if="iSub === 0"
                    class="text-table-body"
                    :rowspan="driver.data.length"
                  >
                    {{ driver.driver_name }} ({{ driver.vehicle_car_id }})
                  </td>
                  <!--                <td class="text-table-body" v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.vehicle_car_id }}</td>-->
                  <td class="text-table-body">
                    {{ item.village_name }}
                  </td>
                  <td class="text-table-body">
                    {{ item.district_name }}
                  </td>
                  <td class="text-table-body">
                    {{ item.amount }}
                  </td>
                  <td
                    v-if="iSub === 0"
                    class="text-table-body"
                    :rowspan="driver.data.length"
                  >
                    <v-chip color="success">
                      {{ driver.total }}
                    </v-chip>
                  </td>
                </tr>
              </template>
            </tbody>
          </v-simple-table>

          <!--            <br/>-->
          <!--            <template>-->
          <!--              <Pagination-->
          <!--                  v-if="pagination.total_pages > 1"-->
          <!--                  :pagination="pagination"-->
          <!--                  :offset="offset"-->
          <!--                  @paginate="fetchData()"-->
          <!--              ></Pagination>-->
          <!--            </template>-->
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import queryOption from '@/Helpers/queryOption';
import { GetOldValueOnInput } from '@/Helpers/GetValue';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|Report Customer`;
  },
  data() {
    return {
      start_date: '',
      end_date: '',
      start_menu: false,
      end_menu: false,
      customers: [],
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
          name: 'event',
          display: 'ຖ້ຽວພິເສດ',
        },
      ],
    };
  },
  watch: {
    search(value) {
      if (value == '') {
        this.fetchData();
      }
    },
    car_id(value) {
      if (value == '') {
        this.fetchData();
      }
    },
    selectedCustomerType() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
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
            { filter: this.search },
            { car_id: this.car_id },
            { customer_type: this.selectedCustomerType },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.customers = res.data.data.data;
          }
        })
        .catch(() => {
          this.$store.commit('Loading_State', false);
          this.start_menu = false;
          this.end_menu = false;
        });
    },

    exportData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(
          'report-driver-collection/',
          {
            params: queryOption([
              { download: 'excel' },
              { customer_type: this.selectedCustomerType },
            ]),
          },
          { responseType: 'blob' },
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data.download_link != null) {
              window.open(res.data.data.download_link);
            }
            this.$store.commit('Loading_State', false);
          }
        })
        .catch(() => {
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
.text-table-header{
  font-size: 14px !important;
}
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,td {
  min-width: 140px !important;
}
.text-table-body{
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
