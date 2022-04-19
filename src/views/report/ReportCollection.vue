<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
            class="btn-primary"
            :loading="loading"
            :disabled="loading"
            @click="exportData"
        >Export
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
                v-on="on"
                dense
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="start_date"
              @input="fetchData()"
          ></v-date-picker>
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
                v-on="on"
                dense
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="end_date"
              @input="fetchData()"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-autocomplete
            outlined
            dense
            :items="customer_types"
            v-model="selectedCustomerType"
            item-text="display"
            item-value="name"
            label="ປະເພດລູກຄ້າ"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>

          <!--         show home customer-->
          <v-simple-table fixed-header v-if="selectedCustomerType == 'home'">
            <thead>
            <tr>
              <th class="text-left text-table-header">
                Driver Name
              </th>
              <th class="text-left text-table-header">
                Car ID
              </th>
              <th class="text-left text-table-header">
                Village
              </th>
              <th class="text-left text-table-header">
                District
              </th>
              <th class="text-left text-table-header">
                Amount
              </th>
              <th class="text-left text-table-header">
                Bags
              </th>
              <th class="text-center text-table-header">
                Total Bags
              </th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(driver) in customers"
            >
              <tr
                  v-for="(item,iSub) in driver.data"
                  :key="iSub.id"
              >
                <td v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.driver_name }}</td>
                <td v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.vehicle_car_id }}</td>
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
                <td class="text-center" v-if="iSub === 0" :rowspan="driver.data.length">
                  <v-chip color="success">
                    {{ driver.total }}
                  </v-chip>
                </td>
              </tr>
            </template>
            </tbody>
          </v-simple-table>

          <!--            show company customer-->
          <v-simple-table fixed-header v-if="selectedCustomerType == 'company'" dense>
            <thead>
            <tr>
              <th class="text-left text-table-header">
                Driver Name
              </th>
              <th class="text-left text-table-header">
                Car ID
              </th>
              <th class="text-left text-table-header">
                Village
              </th>
              <th class="text-left text-table-header">
                District
              </th>
              <th class="text-left text-table-header">
                Container
              </th>
              <th class="text-left text-table-header">
                Fixed Cost
              </th>
              <th class="text-left text-table-header">
                Collect Time
              </th>
              <th class="text-center text-table-header">
                Total Container
              </th>
              <th class="text-center text-table-header">
                Chartered Time
              </th>
              <th class="text-center text-table-header">
                Collect Time
              </th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(driver) in customers"
            >
              <tr
                  v-for="(item,iSub) in driver.data"
                  :key="iSub.id"
              >
                <td class="text-table-body" v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.driver_name }}</td>
                <td class="text-table-body" v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.vehicle_car_id }}</td>
                <td class="text-table-body">
                  {{ item.village_name }}
                </td>
                <td class="text-table-body">
                  {{ item.district_name }}
                </td>
                <td class="text-table-body">
                  {{ item.subtotal_container }}
                </td>
                <td class="text-table-body">
                  {{ item.fix_cost_collect_time }}
                </td>
                <td class="text-table-body">
                  {{ item.subtotal_collect_time }}
                </td>
                <td class="text-center" v-if="iSub === 0" :rowspan="driver.data.length">
                  <v-chip color="success">
                    {{ driver.total_container }}
                  </v-chip>
                </td>
                <td class="text-center" v-if="iSub === 0" :rowspan="driver.data.length">
                  <v-chip color="success">
                    {{ driver.total_chartered_collect_time }}
                  </v-chip>
                </td>
                <td class="text-center" v-if="iSub === 0" :rowspan="driver.data.length">
                  <v-chip color="success">
                    {{ driver.total_collect_time }}
                  </v-chip>
                </td>
              </tr>
            </template>
            </tbody>
          </v-simple-table>

          <!--            show company customer-->
          <v-simple-table fixed-header v-if="selectedCustomerType == 'event'" dense>
            <thead>
            <tr>
              <th class="text-left text-table-header">
                Driver Name
              </th>
              <th class="text-left text-table-header">
                Car ID
              </th>
              <th class="text-left text-table-header">
                Village
              </th>
              <th class="text-left text-table-header">
                District
              </th>
              <th class="text-left text-table-header">
                Amount
              </th>
              <th class="text-left text-table-header">
                Total
              </th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(driver) in customers"
            >
              <tr
                  v-for="(item,iSub) in driver.data"
                  :key="iSub.id"
              >
                <td class="text-table-body" v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.driver_name }}</td>
                <td class="text-table-body" v-if="iSub === 0" :rowspan="driver.data.length">{{ driver.vehicle_car_id }}</td>
                <td class="text-table-body">
                  {{ item.village_name }}
                </td>
                <td class="text-table-body">
                  {{ item.district_name }}
                </td>
                <td class="text-table-body">
                  {{ item.amount }}
                </td>
                <td class="text-table-body" v-if="iSub === 0" :rowspan="driver.data.length">
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
import queryOption from "@/Helpers/queryOption";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|Report Customer`;
  },
  data() {
    return {
      start_date: "",
      end_date: "",
      start_menu: false,
      end_menu: false,
      customers: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      //Filter
      selectedCustomerType: "home",
      customer_types: [
        {
          name: "home",
          display: "ຄົວເຮືອນ",
        },
        {
          name: "company",
          display: "ບໍລິສັດ",
        },
        {
          name: "event",
          display: "ຖ້ຽວພິເສດ",
        },
      ],

      headers: [
        {text: "ຊື່", value: "driver_name"},
        {text: "Car ID", value: "vehicle_car_id", sortable: false},
        {text: "Total", value: "total"},
        {text: "Created", value: "created_at", sortable: false},
        {text: "", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("report-driver-collection", {
            params: queryOption([
              // {page: this.pagination.current_page},
              // {per_page: this.per_page},
              {date_from: this.start_date},
              {date_end: this.end_date},
              {customer_type: this.selectedCustomerType},
            ]),
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit("Loading_State", false);
              this.customers = res.data.data.data;
              console.log(this.customers)
            }
          })
          .catch((error) => {
            this.$store.commit("Loading_State", false);
            this.start_menu = false;
            this.end_menu = false;
            if (error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },

    viewPage(id) {
      this.$router.push({
        name: "ViewCompanyDetail",
        params: {id},
      });
    },

    exportData() {
      this.loading = true;
      this.$axios
          .get(
              "report-driver-collection/",
              {
                params: queryOption([
                  {date_from: this.start_date},
                  {date_end: this.end_date},
                  {download: 'excel'},
                  {customer_type: this.selectedCustomerType},
                ]),
              },
              {responseType: "blob"}
          )
          .then((res) => {
            if (res.status == 200) {
              window.open(res.data.data.download_link)
              this.loading = false;
            }
          })
          .catch(() => {
            this.$store.commit("modalDelete_State", false);
            this.loading = false;
          });
    },
  },
  watch: {
    selectedCustomerType: function () {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
.text-table-header{
  font-size: 14px !important;
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
