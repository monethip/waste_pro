<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row>
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
                  clearable
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="start_date" />
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
                  clearable
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="end_date" />
            </v-menu>
          </v-col>
          <v-col>
            <v-autocomplete
              v-model="selectedDistrict"
              outlined
              dense
              :items="districts"
              item-text="name"
              item-value="id"
              label="ເມືອງ"
              clearable
            />
          </v-col>
          <v-col>
            <v-autocomplete
              v-model="selectedVillage"
              outlined
              dense
              :items="villages"
              item-text="name"
              item-value="id"
              label="ບ້ານ"
              multiple
              clearable
            />
          </v-col>
          <v-col>
            <v-select
              v-model="selectedStatus"
              outlined
              dense
              :items="status"
              item-text="name"
              item-value="name"
              label="ສະຖານະ"
              multiple
              clearable
            />
          </v-col>
          <v-col>
            <v-select
              v-model="selectedCanCollect"
              outlined
              dense
              :items="can_collects"
              item-text="name"
              item-value="value"
              label="ເກັບເລີຍໄດ້ບໍ່"
              clearable
            />
          </v-col>
        </v-row>

        <v-row class="my-n4">
          <v-col>
            <v-text-field
              v-model="search"
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-magnify"
              label="Search"
              type="text"
              @keyup.enter="Search()"
            />
          </v-col>

          <v-col>
            <v-select
              v-model="selectedCustomerStatus"
              outlined
              dense
              :items="customerStatus"
              item-text="name"
              item-value="value"
              label="ສະຖານະແຜນ"
              multiple
              clearable
            />
          </v-col>
          <v-col>
            <v-select
              v-model="selectedCost"
              outlined
              dense
              :items="costs"
              item-text="name"
              item-value="value"
              label="ປະເພດບໍລິການ"
              multiple
              clearable
            />
          </v-col>
        </v-row>

        <v-row v-if="true">
          <v-col>
            <SaleAdmin
              v-model="selectedSale"
              label="ເລືອກຜູ້ສ້າງ"
              @change="fetchAll()"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="6">
        <v-row>
          <v-col>
            <v-card
              outlined
              elevation="5"
            >
              <v-container
                class="spacing-playground pa-1"
                fluid
              >
                <v-row>
                  <v-col>
                    <div class="px-4">
                      <v-chip
                        class="text-caption"
                        color="primary"
                        dark
                      >
                        <v-icon>mdi-domain</v-icon>
                        ລວມຫົວໜ່ວຍທຸລະກິດ
                      </v-chip>
                      <v-divider class="my-4" />
                      <div class="text-caption">
                        ຫົວໜ່ວຍທຸລະກິດ
                      </div>
                      <p class="text-h5">
                        {{ Intl.NumberFormat().format(pagination.total) }}
                      </p>
                    </div>
                  </v-col>
                  <v-col>
                    <v-btn
                      class="btn-primary"
                      color="green"
                      :loading="loading"
                      :disabled="loading"
                      width="100%"
                      height="100%"
                      @click="exportData"
                    >
                      Export
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Detail -->
    <v-row>
      <v-row>
        <v-col>
          <v-card outlined>
            <v-card-text>
              <v-row>
                <v-col>
                  ລວມບິນທັງໝົດ
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <RowSection :cards="allMonths" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-menu
                    v-model="month_menu"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="selected_month"
                        label="ເດືອນໃນຫົວບິນ"
                        readonly
                        outlined
                        v-bind="attrs"
                        dense
                        color="cyan"
                        append-icon="mdi-calendar"
                        clearable
                        v-on="on"
                      />
                    </template>
                    <v-date-picker
                      v-model="selected_month"
                      type="month"
                    />
                  </v-menu>
                </v-col>
              </v-row>

              <v-row
                v-for="month in sumData.months"
                :key="month.month"
              >
                <v-col
                  :class=" selected_month == month.month.substring(0,7) ? 'teal' : ''"
                  cols="2"
                >
                  <span>
                    <v-chip
                      outlined
                      color="cyan lighten-2"
                      dark
                    >
                      <v-icon>mdi-calendar</v-icon>
                      {{ month.month.substr(0, 7) }}</v-chip>
                  </span>
                </v-col>
                <!-- Section Toal -->
                <v-col :class=" selected_month == month.month.substring(0,7) ? 'teal' : ''">
                  <RowSection :cards="getCardData(month)" />
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card flat>
            <v-card-title>
              <v-switch
                v-model="only_billings"
                label="ມີບິນເທົ່ານັ້ນ"
                @change="fetchAll()"
              />
            </v-card-title>
            <v-card-text>
              <v-data-table
                :headers="headers"
                :items="customers"
                :search="search"
                :disable-pagination="true"
                hide-default-footer
              >
                <template v-slot:item.media="{ item }">
                  <v-avatar
                    v-for="(img, index) in item.media"
                    :key="index"
                    size="36px"
                  >
                    <img
                      v-if="img.thumb"
                      :src="img.thumb"
                    >
                  </v-avatar>
                </template>

                <template v-slot:item.fix_cost="{item}">
                  <div v-if="item.cost_by == 'bag' && item.customer_type =='company'">
                    {{ item.current_bag_price.price }}
                  </div>
                  <div v-else>
                    {{ item.fix_cost }}
                  </div>
                </template>
                <!--              <template v-slot:item.status="{ item }">-->
                <!--                <v-chip label :color="statusColor(item.status)">{{-->
                <!--                  item.status-->
                <!--                }}</v-chip>-->
                <!--              </template>-->
                <template v-slot:item.cost_by="{ item }">
                  <div>{{ costBy(item.cost_by) }}</div>
                </template>
                <template v-slot:item.status="{ item }">
                  <v-chip
                    label
                    :color="statusColor(item.status)"
                  >
                    {{
                      item.status
                    }}
                  </v-chip>
                </template>
                <!--Role -->
                <template v-slot:item.roles="{ item }">
                  <div>
                    <span
                      v-for="(role, index) in item.roles"
                      :key="index"
                    >{{ role.name }},</span>
                  </div>
                </template>
                <!--Permission -->
                <template v-slot:item.permissions="{ item }">
                  <div>
                    <span
                      v-for="(ps, index) in item.permissions"
                      :key="index"
                    >
                      <span>{{ ps.name }},</span>
                    </span>
                  </div>
                </template>

                <template v-slot:item.actions="{ item }">
                  <v-icon
                    small
                    class="mr-2"
                    @click="viewPage(item.id)"
                  >
                    mdi-eye
                  </v-icon>

                  <v-icon
                    v-if="item.user && item.user.billings_count"
                    small
                    class="mr-2"
                    @click="viewCustomerBill(item.id)"
                  >
                    mdi-receipt-text
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import queryOption from '@/Helpers/queryOption';
import SaleAdmin from '@/components/select/SaleAdmin.vue';
import RowSection from '../../components/card/RowSection.vue';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|Report Customer`;
  },
  components: {
    RowSection,
    SaleAdmin,
  },
  data() {
    return {
      selectedSale: '',
      only_billings: false,
      firstLoad: true,
      selected_month:
        this.$route.query.month || new Date().toISOString().substr(0, 7),
      start_date: '',
      end_date: '',
      month_menu: false,
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
      // Filter
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      sumData: {},
      status: [
        {
          id: 1,
          name: 'active',
        },
        {
          id: 2,
          name: 'inactive',
        },
        {
          id: 3,
          name: 'trial',
        },
      ],
      selectedCanCollect: '',
      can_collects: [
        {
          id: 1,
          name: 'ເກັບໄດ້',
          value: '1',
        },
        {
          id: 2,
          name: 'ເກັບບໍໄດ້',
          value: '0',
        },
      ],
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

      headers: [
        { text: 'ໄອດີ', value: 'customer_id' },
        { text: 'ຊື່', value: 'company_name' },
        { text: 'Phone', value: 'user.phone', sortable: false },
        { text: 'ທີ່ຢູ່', value: 'district.name', sortable: false },
        { text: 'ປະເພດບໍລິການ', value: 'cost_by_la' },
        { text: 'ມູນຄ່າສັນຍາ', value: 'fix_cost' },
        { text: 'ເລີ່ມບໍລິການ', value: 'start_month', sortable: false },
        { text: 'ຜູ້ສ້າງ', value: 'customer_activity.user.full_name' },
        { text: 'Created', value: 'created_at', sortable: false },
        { text: 'ສະຖານະ', value: 'status', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
      toast: {
        value: true,
        color: 'success',
        msg: '',
      },
      toast_error: {
        value: true,
        color: 'error',
        msg: 'Something when wrong!',
      },
    };
  },

  computed: {
    params() {
      return queryOption([
        { page: this.pagination.current_page },
        { per_page: this.per_page },
        { without_month_info: true },
        { without_billing_summary: true },
        { only_billings: this.only_billings },
        { with_billings: true },
        { with_created_user: true },
        { created_by_id: this.selectedSale },
        { filter: this.search },
        { date_from: this.start_date },
        { date_end: this.end_date },
        { villages: this.selectedVillage },
        { statuses: this.selectedStatus },
        { can_collect: this.selectedCanCollect },
        { cost_by: this.selectedCost },
        { without: this.selectedCustomerStatus },
        { district_id: this.selectedDistrict },
        { month_bill: this.selected_month },
        { with_count_billing: true },
      ]);
    },
    allMonths() {
      return [
        {
          status_la: 'ລວມ',
          total: this.sumData.all?.total?.total,
          count_billing: this.sumData.all?.total?.count,
          bg_color: 'blue',
          route: this.billRoute('', 'all'),
        },
        {
          status_la: 'ຈ່າຍແລ້ວ',
          total: this.sumData.all?.paid?.total,
          count_billing: this.sumData.all?.paid?.count,
          bg_color: 'green',
          route: this.billRoute('', 'paid'),
        },
        {
          status_la: 'ຕິດໜີ້',
          total: this.sumData.all?.unpaid?.total,
          count_billing: this.sumData.all?.unpaid?.count,
          bg_color: 'orange',
          route: this.billRoute('', 'unpaid'),
        },
      ];
    },
  },
  watch: {
    selected_month() {
      this.pagination.current_page = '';
      this.fetchSum();
    },
    start_date() {
      this.pagination.current_page = '';
      if (this.end_date !== '' && this.start_date !== '') {
        if (this.start_date > this.end_date) {
          this.start_date = '';
        }
      }
      this.fetchAll();
    },
    end_date() {
      this.pagination.current_page = '';
      if (this.end_date !== '' && this.start_date !== '') {
        if (this.end_date < this.start_date) {
          this.end_date = '';
        }
      }
      this.fetchAll();
    },
    search(value) {
      this.pagination.current_page = '';
      if (value == '') {
        this.fetchAll();
      }
    },

    selectedVillage() {
      this.pagination.current_page = '';
      this.fetchAll();
    },
    selectedDistrict() {
      this.pagination.current_page = '';
      this.fetchVillage();
      this.fetchAll();
    },
    selectedStatus() {
      this.pagination.current_page = '';
      this.fetchAll();
    },
    selectedCanCollect() {
      this.pagination.current_page = '';
      this.fetchAll();
    },
    selectedCustomerStatus() {
      this.pagination.current_page = '';
      this.fetchAll();
    },
    selectedCost() {
      this.pagination.current_page = '';
      this.fetchAll();
    },
    selectedSale() {
      if (!this.firstLoad) this.fetchAll();
    },
  },
  mounted() {
    this.fetchAll();
    this.fetchAddress();
  },
  methods: {
    fetchAll() {
      this.fetchSum();
      this.fetchData();
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('company', {
          params: this.params,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.customers = res.data.data.data;
              this.pagination = res.data.data.pagination;
              this.month_menu = false;
              this.start_menu = false;
              this.end_menu = false;
            }, 300);
            // this.fetchAddress();
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.month_menu = false;
          this.start_menu = false;
          this.end_menu = false;
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
    fetchSum() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('company-billing', {
          params: { ...this.params },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.sumData = res.data.data;
              this.month_menu = false;
              this.start_menu = false;
              this.end_menu = false;
            }, 300);
            // this.fetchAddress();
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.month_menu = false;
          this.start_menu = false;
          this.end_menu = false;
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
        .catch(() => {});
    },

    fetchVillage() {
      this.$axios
        .get(`info/district/${this.selectedDistrict}/village`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.villages = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
    },

    viewPage(id) {
      const options = {
        name: 'ViewCompanyDetail',
        params: { id },
      };

      this.openRoute(options);
    },
    viewCustomerBill(id) {
      const options = {
        name: 'Report-Billing-Customer',
        query: {
          customer_id: id,
          selectedCustomerType: 'company',
        },
      };

      this.openRoute(options);
    },
    openRoute(options) {
      const routeData = this.$router.resolve({
        ...options,
      });

      window.open(routeData.href);
    },
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == 'active') return 'primary';
      if (value == 'inactive') return 'error';
      return 'info';
    },

    exportData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .post(
          'export-company', this.params,
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data.download_link != null) {
              window.open(res.data.data.download_link);
            }
            this.$store.commit('Loading_State', false);
            // setTimeout(() => {
            //   this.$store.commit('Loading_State', false);;
            //   const fileUrl = window.URL.createObjectURL(new Blob([res.data]));
            //   const fileLink = document.createElement("a");
            //   fileLink.href = fileUrl;
            //   fileLink.setAttribute("download", "customer" + ".xlsx");
            //   document.body.appendChild(fileLink);
            //   fileLink.click();
            //   document.body.removeChild(fileLink);
            // }, 300);
          }
        })
        .catch(() => {
          this.$store.commit('Toast_State', this.toast_error);
          this.$store.commit('Loading_State', false);
        });
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
    getCardData(month) {
      return [
        {
          status_la: 'ລວມ',
          total: month.status.total?.total,
          count_billing: month.status.total?.count,
          bg_color: 'blue',
          route: this.billRoute(month.month, 'all'),
        },
        {
          status_la: 'ຈ່າຍແລ້ວ',
          total: month.status.paid?.total,
          count_billing: month.status.paid?.count,
          bg_color: 'green',
          route: this.billRoute(month.month, 'paid'),
        },
        {
          status_la: 'ຕິດໜີ້',
          total: month.status.unpaid?.total,
          count_billing: month.status.unpaid?.count,
          bg_color: 'orange',
          route: this.billRoute(month.month, 'unpaid'),
        },
        {
          status_la: 'ບິນຍັງບໍ່ອອກ',
          total: month.no_bill?.package_price,
          count_billing: month.no_bill?.count_customers,
          bg_color: 'red',
          route: this.billRoute(month.month, 'noBill'),
        },
      ];
    },

    billRoute(billMonth, showOne) {
      const items = {
        selectedCustomerType: 'company',
        selectedVillage: this.selectedVillage,
        selectedDistrict: this.selectedDistrict,
        selectedDetails: this.selectedDetails,
        start_date: this.start_date,
        end_date: this.end_date,
        created_by: this.selectedSale,
        selectedCompanyType: this.selectedCost,
      };

      if (billMonth) items.billMonth = billMonth;
      if (showOne) items.showOne = showOne;

      const options = this.$router.resolve(
        {
          name: 'Report-Billing-Customer',
          query: items,
        },
      );

      return options;
    },

  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
