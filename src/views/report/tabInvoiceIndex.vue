<template>
  <v-container>
    <v-breadcrumbs
      class="pt-0"
      large
    >
      ລາຍງານຂໍ້ມູນເຊວ
    </v-breadcrumbs>
    <v-col>
      <v-row>
        <v-col>
          <v-autocomplete
            v-model="selectedBillDate"
            :items="billDates"
            item-text="text"
            item-value="value"
            label="ເລືອກປະເພດວັນທີ"
            outlined
          />
        </v-col>
        <v-col>
          <v-menu
            v-model="start_menu"
            :close-on-content-click="false"
            :nudge-right="40"
            min-width="auto"
            offset-y
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date_from"
                dense
                label="ເລີ່ມວັນທີ"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="date_from" />
          </v-menu>
        </v-col>
        <v-col>
          <v-menu
            v-model="end_menu"
            :close-on-content-click="false"
            :nudge-right="40"
            min-width="auto"
            offset-y
            transition="scale-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date_to"
                dense
                label="ຫາວັນທີ"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
              />
            </template>
            <v-date-picker v-model="date_to" />
          </v-menu>
        </v-col>

        <v-col>
          <v-autocomplete
            v-model="selectedRole"
            :items="roles"
            dense
            item-text="name"
            item-value="name"
            label="ເລືອກບົດບາດຂອງເຊວ"
            outlined
          />
        </v-col>

        <v-col>
          <v-autocomplete
            v-model="selectedSale"
            :items="employees"
            dense
            item-text="name"
            item-value="id"
            label="ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ"
            outlined
          />
        </v-col>

        <v-col>
          <v-switch
            v-model="is_active_only"
            :label="is_active_only ? 'sale ທີ່ active' : 'sale ທັງໝົດ'"
          />
        </v-col>

        <v-col>
          <v-btn
            color="green"
            dark
            @click="exportData"
          >
            Export
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <RowSection :cards="summaryAll" />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-simple-table>
            <thead>
              <tr style="background-color:blue; color:white">
                <td>ລ/ດ</td>
                <td>ຊື່</td>
                <td>ບ້ານ</td>
                <td>ສັນຍາ</td>
                <td>ລູກຄ້າ</td>
                <td>ເງິນສົດ</td>
                <td>ເງິນໂອນ</td>
                <td>bcel bill payment</td>
                <td>ລວມຍອດ</td>
                <td>ລວມເງິນສົດ</td>
                <td>ລວມເງິນໂອນ</td>
                <td>ລວມ bcel bill payment</td>
                <td>ລວມທັງໝົດ</td>
              </tr>
            </thead>

            <tbody
              v-for="(sale, index) in summary"
              :key="sale.id"
              :style="getBodyColor(index)"
            >
              <tr>
                <td :rowspan="sale.summary.length">
                  {{ index + 1 }}
                </td>
                <td :rowspan="sale.summary.length">
                  <a
                    href="#"
                    @click="openRoute(sale.id, null, null)"
                  >
                    {{
                      sale.emp_name
                        ? sale.emp_name + " " + sale.emp_surname
                        : sale.name
                    }}
                  </a>
                </td>
                <td
                  @click="
                    openRoute(
                      sale.id,
                      sale.summary[0].village_id,
                      sale.summary[0].district_id
                    )
                  "
                >
                  <a href="#">
                    {{ sale.summary[0].village_name }}
                  </a>
                </td>
                <td>
                  {{ Intl.NumberFormat().format(sale.summary[0].count_bill) }}
                </td>
                <td>
                  {{
                    Intl.NumberFormat().format(sale.summary[0].count_customer)
                  }}
                </td>
                <td>
                  {{ totalFromMethod(sale.summary[0].payment_methods, "cash") }}
                </td>
                <td>
                  {{ totalFromMethod(sale.summary[0].payment_methods, "bcel") }}
                </td>
                <td>
                  {{
                    totalFromMethod(
                      sale.summary[0].payment_methods,
                      "bcel_online"
                    )
                  }}
                </td>
                <td>
                  {{ Intl.NumberFormat().format(sale.summary[0].total) }}
                </td>
                <td :rowspan="sale.summary.length">
                  {{ Intl.NumberFormat().format(sale.cash_amount) }}
                </td>
                <td :rowspan="sale.summary.length">
                  {{ Intl.NumberFormat().format(sale.bcel_amount) }}
                </td>
                <td :rowspan="sale.summary.length">
                  {{ Intl.NumberFormat().format(sale.bcel_online_amount) }}
                </td>
                <td :rowspan="sale.summary.length">
                  {{ Intl.NumberFormat().format(sale.total) }}
                </td>
              </tr>
              <tr
                v-for="(otherVillage, otherIndex) in sale.summary.slice(1)"
                :key="otherIndex"
              >
                <td>
                  <a
                    href="#"
                    @click="
                      openRoute(
                        sale.id,
                        otherVillage.village_id,
                        otherVillage.district_id
                      )
                    "
                  >
                    {{ otherVillage.village_name }}
                  </a>
                </td>
                <td>
                  {{ Intl.NumberFormat().format(otherVillage.count_bill) }}
                </td>
                <td>
                  {{ Intl.NumberFormat().format(otherVillage.count_customer) }}
                </td>
                <td>
                  {{ totalFromMethod(otherVillage.payment_methods, "cash") }}
                </td>
                <td>
                  {{ totalFromMethod(otherVillage.payment_methods, "bcel") }}
                </td>
                <td>
                  {{
                    totalFromMethod(otherVillage.payment_methods, "bcel_online")
                  }}
                </td>
                <td>{{ Intl.NumberFormat().format(otherVillage.total) }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import queryOptions from '../../Helpers/queryOption';
import { billDateList } from '../../Helpers/Customer';
import RowSection from '../../components/card/RowSection.vue';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  components: {
    RowSection,
  },
  data() {
    return {
      firstLoad: true,
      is_active_only: true,
      summary: [],
      summaryMoney: [],
      selectedRole: "",
      roles: [],
      defaultMoney: [
        {
          status_la: 'ລວມ',
          total: 0,
          count_billing: 0,
          bg_color: 'blue',
        },
        {
          status_la: 'ເງິນສົດ',
          total: 0,
          count_billing: 0,
          bg_color: 'blue',
        },
        {
          status_la: 'ເງິນໂອນ',
          total: 0,
          count_billing: 0,
          bg_color: 'blue',
        },
        {
          status_la: 'bcel online',
          total: 0,
          count_billing: 0,
          bg_color: 'blue',
        },
      ],
      pagination: {},
      start_date: null,
      salesData: [],
      selectedSale: '',
      search: '',
      date_from: `${new Date().toISOString().substr(0, 8)}01`,
      date_to: '',
      start_menu: false,
      end_menu: false,
      selectedBillDate: 'paided_at',
      exportMode: '',
    };
  },
  computed: {
    summaryAll() {
      return [
        {
          status_la: 'ລວມ',
          total: this.summaryMoney.total,
          bg_color: 'blue',
          icon: 'mdi-chart-pie',
          icon_color: 'green',
        },
        {
          status_la: 'ເງົນສົດ',
          total: this.summaryMoney.cash,
          bg_color: 'blue',
          icon: 'mdi-cash-multiple',
          icon_color: 'blue',
        },
        {
          status_la: 'ເງິນໂອນ',
          total: this.summaryMoney.bcel,
          bg_color: 'blue',
          icon: 'mdi-qrcode-scan',
          icon_color: 'purple',
        },
        {
          status_la: 'Bcel Online',
          total: this.summaryMoney.bcel_online,
          bg_color: 'blue',
          icon: 'mdi-cellphone-wireless',
          icon_color: 'red',
        },
      ];
    },
    lastMonthCreated() {
      return this.$store.getters['auth/getLastMonthBill'];
    },
    lastMonthBillCreated() {
      return this.$store.getters['auth/getLastMonthBillPaid'];
    },
    billDates() {
      return billDateList;
    },
    employees() {
      const data = [];
      for (const item of this.filteredEmployees) {
        let name = '';
        if (item.name) name += `${item.name} `;
        if (item.phone) name += `${item.phone} `;
        if (item.emp_name) name += `${item.emp_name} `;
        if (item.emp_surname) name += `${item.emp_surname} `;
        if (item.emp_card_id) name += item.emp_card_id;
        data.push({
          name,
          id: item.id,
        });
      }
      return data;
    },
    filteredEmployees() {
      if (this.selectedRole) {
        return this.salesData.filter((sale) => sale.roles.some((role) => role.name === this.selectedRole));
      }
      return this.salesData;
    },
  },
  watch: {
    is_active_only() {
      if (!this.firstLoad) this.fetchData();
    },
    selectedSale() {
      if (!this.firstLoad) this.fetchData();
    },
    date_from() {
      if (!this.firstLoad) this.fetchData();
    },
    date_to() {
      if (!this.firstLoad) this.fetchData();
    },
    selectedBillDate() {
      if (this.date_from || this.date_to) this.fetchData();
    },
    selectedRole() {
      if (!this.firstLoad) this.fetchData();
    },
  },
  created() {
    this.fetchRole();
    this.fetchSale();
    this.fetchData();
  },
  methods: {
    exportData() {
      this.exportMode = 'excel';
      this.fetchData();
      this.exportMode = '';
    },
    fetchSale() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('user-setting/user', {
          params: queryOptions([
            { roles: ['sale', 'sale_admin', 'sale_partner', 'sale_editor'] },
            { order_by: 'newest' },
          ]),
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Loading_State', false);
            this.salesData = res.data.data;
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status === 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchRole() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('user-setting/role', {
          params: queryOptions([
            { only_sale: true },
          ]),
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Loading_State', false);
            this.roles = res.data.data;
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status === 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    getBodyColor(index) {
      return index % 2 == 0 ? 'background-color:#f0eae0' : '';
    },
    totalFromMethod(array, method) {
      let total = 0;
      for (const item of array) {
        if (item.payment_method == method) total = item.total;
      }
      return Intl.NumberFormat().format(total);
    },
    fetchData() {
      this.start_menu = false;
      this.end_menu = false;
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('v2/report-billing-for-sale', {
          params: queryOptions([
            {
              filter: this.search,
            },
            {
              id: this.selectedSale,
            },
            {
              date_from: this.date_from,
            },
            {
              date_to: this.date_to,
            },
            {
              date_method: this.selectedBillDate,
            },
            { without_month_info: true },
            { without_billing_summary: true },
            { download: this.exportMode },
            { selected_role: this.selectedRole },
            { sale_active_status: this.is_active_only ? 'active' : null },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            if (res.data.data.download_link) {
              window.open(res.data.data.download_link);
            } else {
              this.summary = res.data.data.data;
              this.summaryMoney = res.data.data.summary;
            }
            // this.pagination = res.data.data.pagination;
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
        })
        .finally(() => {
          this.firstLoad = false;
        });
    },
    openRoute(sale, village, district_id) {
      localStorage.removeItem('lastMonthBill');
      localStorage.removeItem('lastMonthBillPaid');

      const routeData = this.$router.resolve({
        name: 'Report-Billing-Main',
        query: queryOptions([
          {
            selected_sale: sale,
          },
          {
            selected_village: village,
          },
          {
            selected_district: district_id,
          },
          {
            date_from: this.date_from,
          },
          {
            date_to: this.date_to,
          },
          {
            date_method: this.selectedBillDate,
          },
        ]),
      });

      window.open(routeData.href);
    },
    backPrevios() {
      this.$router.go(-1);
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id },
      // });
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id: this.data.plan_month_id },
      // });
    },
    // fetchDataPlanMonth() {
    //   this.$axios
    //     .get(
    //       "plan-month/" +
    //         this.$route.params.driverId +
    //         "/plan-calendar/" +
    //         this.$route.params.id
    //     )
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.data = res.data.data;
    //           console.log(this.data);
    //         }, 100);
    //       }
    //     })
    //     .catch(() => {});
    // },
  },
};
</script>

<style>
.mx-input {
  height: 40px !important;
}
</style>
