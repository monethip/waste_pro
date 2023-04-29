<template>
  <v-container>
    <v-breadcrumbs
      class="pt-0"
      large
    >
      ລາຍງານຍອດຂາຍ
    </v-breadcrumbs>
    <v-row class="mb-n6">
      <v-col>
        <v-row>
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
                  v-model="start_date"
                  clearable
                  dense
                  label="ວັນທີເພີ່ມລູກຄ້າແຕ່"
                  outlined
                  readonly
                  v-bind="attrs"
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
              min-width="auto"
              offset-y
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="end_date"
                  clearable
                  dense
                  label="ຫາວັນທີ"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="end_date" />
            </v-menu>
          </v-col>
          <v-col>
            <v-autocomplete
              v-model="selectedDistrict"
              :items="districts"
              clearable
              dense
              item-text="name"
              label="ເມືອງ"
              outlined
              return-object
            />
          </v-col>
          <v-col>
            <v-autocomplete
              v-model="selectedVillage"
              :items="selectedDistrict.villages"
              clearable
              dense
              item-text="name"
              item-value="id"
              label="ບ້ານ"
              multiple
              outlined
            />
          </v-col>
        </v-row>

        <v-row>
          <VillageDetail
            v-model="selectedDetails"
            :selected-village="selectedVillage"
          />
        </v-row>

        <v-row>
          <v-col>
            <v-menu
              v-model="start_paid_month"
              :close-on-content-click="true"
              :nudge-right="40"
              min-width="auto"
              offset-y
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="lastMonthBillPaid"
                  clearable
                  dense
                  label="ບິນປະຈຳເດືອນ"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker
                v-model="lastMonthBillPaid"
                type="month"
              />
            </v-menu>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-select
              v-model="selectedCustomerType"
              :items="customerTypes"
              clearable
              dense
              item-text="name_la"
              item-value="name"
              label="ເລືອກປະເພດລູກຄ້າ"
              outlined
            />
          </v-col>
          <v-col v-if="selectedCustomerType == 'company'">
            <v-select
              v-model="selectedCompanyType"
              :items="comapnyTypes"
              clearable
              dense
              item-text="la"
              item-value="en"
              label="ເລືອກປະເພດບໍລິການ"
              outlined
            />
          </v-col>
          <v-col v-if="selectedCustomerType == 'home'">
            <v-select
              v-model="filteredPackage"
              :items="packageList"
              dense
              item-text="name"
              item-value="id"
              label="ເລືອກແພັກເກດ"
              outlined
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-text-field
              v-model="customer_id"
              clearable
              dense
              label="ໄອດີລູກຄ້າ"
              outlined
              prepend-inner-icon="mdi-folder-key"
              type="text"
              @keyup.enter="fetchData()"
            />
          </v-col>

          <v-col>
            <v-text-field
              v-model="phone"
              clearable
              dense
              label="ໂທລະສັບ"
              outlined
              prepend-inner-icon="mdi-phone"
              type="text"
              @keyup.enter="fetchData()"
            />
          </v-col>

          <v-col>
            <v-text-field
              v-model="search"
              clearable
              dense
              label="ຊື່"
              outlined
              prepend-inner-icon="mdi-account"
              type="text"
              @keyup.enter="fetchData()"
            />
          </v-col>

          <v-col>
            <SaleAdmin
              v-model="created_by"
              :first-sale="created_by"
              label="ເລືອກຜູ້ສ້າງ"
            />
          </v-col>

          <v-col>
            <v-btn
              color="green"
              dark
              style="width:100%"
              @click="fetchData()"
            >
              ຄົ້ນຫາ
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          color="green"
          dark
          style="width:100%"
          @click="fetchData(true)"
        >
          Export
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <RowSection :cards="allMonths" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-row>
          <v-col>
            <v-card>
              <v-card-title v-if="pagination.total">
                {{ Intl.NumberFormat().format(pagination.total) }} ລູກຄ້າ
              </v-card-title>
              <v-card-text>
                <v-simple-table
                  style="white-space: nowrap"
                >
                  <thead>
                    <tr>
                      <td
                        v-for="header in headers"
                        :key="header.text"
                      >
                        {{ header.text }}
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="customer in customers">
                      <tr :key="customer.id">
                        <td :rowspan="customer.user.billings && customer.user.billings.length ? customer.user.billings.length : 1">
                          <v-row>
                            <a
                              class="font-weight-bold text--accent-3 ml-6"
                              href="#"
                              @click="viewCustomerDetail(customer)"
                            >{{
                              customer.customer_id
                            }}</a>
                          </v-row>
                          <v-row>
                            <p
                              v-if="customer.user.billings_sum_total > 0"
                              :style="customer.user.billings_sum_total - customer.user.billings_paid_sum_total <= 0 ? 'color: green' : 'color: orange'"
                              class="text-large ml-6"
                            >
                              {{ customer.full_name }}
                            </p>
                            <p
                              v-else
                              class="text-large ml-6"
                            >
                              {{ customer.full_name }}
                            </p>
                          </v-row>
                          <v-row>
                            <v-icon
                              class="ml-8 mr-1"
                              small
                            >
                              mdi-map-marker
                            </v-icon>
                            {{ customer.village.name }},
                            {{ customer.village.district.name }}
                          </v-row>
                          <v-row>
                            <v-icon
                              class="ml-8 mr-1"
                              small
                            >
                              mdi-phone
                            </v-icon>
                            {{ customer.user.phone }}
                          </v-row>
                          <v-row v-if="customer.customer_activity">
                            <v-col v-if="customer.customer_activity && customer.customer_activity.user">
                              ຜູ້ສ້າງ:
                              {{ customer.customer_activity.user.full_name }}
                            </v-col>
                          </v-row>
                        </td>
                        <td :rowspan="customer.user.billings && customer.user.billings.length ? customer.user.billings.length : 1">
                          <v-icon>
                            {{ customer.customer_type == 'home' ? 'mdi-account-group' : 'mdi-office-building' }}
                          </v-icon>
                          {{ customer.cost_by_la }}
                        </td>
                        <td :rowspan="customer.user.billings && customer.user.billings.length ? customer.user.billings.length : 1">
                          <v-list>
                            <v-list-item>
                              <v-list-item-icon>
                                <v-chip
                                  color="primary"
                                  dark
                                  small
                                >
                                  ລວມ
                                </v-chip>
                              </v-list-item-icon>
                              <v-list-item-content class="text-large">
                                {{ Intl.NumberFormat().format(customer.user.billings_sum_total) }}
                                ({{ customer.user.billings_count }} ບິນ)
                              </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                              <v-list-item-icon>
                                <v-chip
                                  color="success"
                                  dark
                                  small
                                >
                                  ຈ່າຍແລ້ວ
                                </v-chip>
                              </v-list-item-icon>
                              <v-list-item-content class="text-large">
                                {{
                                  Intl.NumberFormat().format(customer.user.billings_paid_sum_total)
                                }}
                                ({{ customer.user.billings_paid_count }} ບິນ)
                              </v-list-item-content>
                            </v-list-item>

                            <v-list-item>
                              <v-list-item-icon>
                                <v-chip
                                  color="warning"
                                  dark
                                  small
                                >
                                  ຄົງຄ້າງ
                                </v-chip>
                              </v-list-item-icon>
                              <v-list-item-content class="text-large">
                                {{
                                  Intl.NumberFormat().format(customer.user.billings_unpaid_sum_total)
                                }}
                                ({{ customer.user.billings_unpaid_count }} ບິນ)
                              </v-list-item-content>
                            </v-list-item>
                          </v-list>
                        </td>

                        <template v-if="customer.user.billings && customer.user.billings.length > 0">
                          <td>
                            <v-row>
                              <a
                                class="font-weight-bold text--accent-3"
                                href="#"
                                @click="openBilling(customer.user.billings[0].id)"
                              >{{
                                customer.user.billings[0].billing_display_id
                              }}</a>
                            </v-row>
                            <v-row>
                              <div class="">
                                {{ customer.user.billings[0].content }}
                              </div>
                            </v-row>
                          </td>
                          <td>{{ Intl.NumberFormat().format(customer.user.billings[0].total) }}</td>
                          <td>
                            <v-chip
                              :color="getBgColorFn(customer.user.billings[0].status)"
                              dark
                            >
                              {{ customer.user.billings[0].status_la }}
                            </v-chip>
                          </td>
                          <td>{{ customer.user.billings[0].payment_method_la }}</td>
                          <td>
                            {{
                              customer.user.billings[0].paided_by ? customer.user.billings[0].paided_by.name : ''
                            }}
                          </td>
                          <td>{{ customer.user.billings[0].created_at }}</td>
                          <td>{{ customer.user.billings[0].approved_at }}</td>
                          <td>{{ customer.user.billings[0].paided_at }}</td>
                          <td>{{ customer.user.billings[0].confirmed_payment_at }}</td>
                        </template>
                        <template v-else>
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                          <td />
                        </template>
                      </tr>
                      <template v-if="customer.user.billings">
                        <tr
                          v-for="billing in customer.user.billings.slice(1)"
                          :key="billing.id"
                        >
                          <td>
                            <v-row>
                              <a
                                class="font-weight-bold text--accent-3"
                                href="#"
                                @click="openBilling(billing.id)"
                              >{{
                                billing.billing_display_id
                              }}</a>
                            </v-row>
                            <v-row>
                              <p>{{ billing.content }}</p>
                            </v-row>
                          </td>
                          <td>{{ Intl.NumberFormat().format(billing.total) }}</td>
                          <td>
                            <v-chip
                              :color="getBgColorFn(billing.status)"
                              dark
                            >
                              {{ billing.status_la }}
                            </v-chip>
                          </td>
                          <td>{{ billing.payment_method_la }}</td>
                          <td>{{ billing.paided_by ? billing.paided_by.name : '' }}</td>
                          <td>{{ billing.created_at }}</td>
                          <td>{{ billing.approved_at }}</td>
                          <td>{{ billing.paided_at }}</td>
                          <td>{{ billing.confirmed_payment_at }}</td>
                        </tr>
                      </template>
                    </template>
                  </tbody>
                </v-simple-table>
                <template>
                  <Pagination
                    :offset="offset"
                    :pagination="pagination"
                    @paginate="fetchData()"
                  />
                </template>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getBgColor } from '@/Helpers/BillingStatus';
import { getCompanyCostBy, concatPackage } from '@/Helpers/Customer';
import VillageDetail from '@/components/select/VillageDetail';
import SaleAdmin from '@coms/select/SaleAdmin.vue';
import ensureArray from '@/Helpers/EnsureArray';
import RowSection from '../../components/card/RowSection.vue';
import queryOptions from '../../Helpers/queryOption';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  components: {
    RowSection,
    VillageDetail,
    SaleAdmin,
  },
  data() {
    return {
      firstLoad: true,
      sumData: {},
      hasBillingOnly: '',
      start_paid_month: false,
      lastMonthBillPaid: '',
      created_by: '',
      saleData: null,
      filteredPackage: '',
      selectedCustomerType: '',
      selectedCompanyType: '',
      comapnyTypes: getCompanyCostBy,
      customerTypes: [
        {
          name: '',
          name_la: 'ທັງໝົດ',
        },
        {
          name_la: 'ຄົວເຮືອນ',
          name: 'home',
        },
        {
          name_la: 'ຫົວໜ່ວຍທຸລະກິດ',
          name: 'company',
        },
      ],
      start_date: '',
      end_date: '',
      selected_month:
          this.$route.query.month || new Date().toISOString().substr(0, 7),
      month_menu: false,
      start_menu: false,
      end_menu: false,
      districts: [],
      selectedDistrict: '',
      districtLoaded: false,
      villages: [],
      selectedVillage: [],
      selectedDetails: [],
      selectedStatus: [],

      search: '',
      phone: '',
      customer_id: '',

      loading: false,
      customerId: '',
      pagination: {},
      per_page: 100,
      offset: 12,

      customers: [],
      headers: [
        {
          text: 'ລູກຄ້າ', value: 'full_name', align: 'center', divider: true,
        },
        { text: 'ປະເພດບໍລິການ', value: 'cost_by_la' },
        { text: 'ຍອດລວມ', value: '' },
        { text: 'ໄອດີບິນ', value: 'billings_id' },
        { text: 'ຈຳນວນ', value: 'billings_total' },
        { text: 'ສະຖານະຈ່າຍ', value: 'billings_status' },
        { text: 'ຈ່າຍດ້ວຍ', value: 'billings_paymet_method' },
        { text: 'ຜູ້ຈ່າຍບິນ', value: 'billings_paid_by' },
        { text: 'ເວລາສ້າງບິນ', value: 'billings_created_at' },
        { text: 'ເວລາອະນຸມັດບິນ', value: 'billings_approved_at' },
        { text: 'ເວລາຈ່າຍບິນ', value: 'billings_paid_at' },
        { text: 'ເວລາຢືນຢັນການຈ່າຍ', value: 'billings_confirm_at' },
      ],
    };
  },
  computed: {
    packageList() {
      return concatPackage(this.packages);
    },
    allMonths() {
      if (this.$route.query.showOne == 'paid') {
        return [{
          status_la: 'ຈ່າຍແລ້ວ',
          total: this.sumData.all?.paid?.total,
          count_billing: this.sumData.all?.paid?.count,
          bg_color: 'green',
        }];
      }

      if (this.$route.query.showOne == 'unpaid') {
        return [{
          status_la: 'ຕິດໜີ້',
          total: this.sumData.all?.unpaid?.total,
          count_billing: this.sumData.all?.unpaid?.count,
          bg_color: 'orange',
        }];
      }

      if (this.$route.query.showOne == 'noBill') {
        return [{
          status_la: 'ບິນຍັງບໍ່ອອກ',
          total: this.sumData.no_bill?.package_price,
          count_billing: this.sumData.no_bill?.count_customers,
          bg_color: 'red',
          route: this.billRoute(this.lastMonthBillPaid, 'noBill'),
        }];
      }

      return [
        {
          status_la: 'ລວມ',
          total: this.sumData.all?.total?.total,
          count_billing: this.sumData.all?.total?.count,
          bg_color: 'blue',
          route: this.billRoute(this.lastMonthBillPaid, 'all'),
        },
        {
          status_la: 'ຈ່າຍແລ້ວ',
          total: this.sumData.all?.paid?.total,
          count_billing: this.sumData.all?.paid?.count,
          bg_color: 'green',
          route: this.billRoute(this.lastMonthBillPaid, 'paid'),
        },
        {
          status_la: 'ຕິດໜີ້',
          total: this.sumData.all?.unpaid?.total,
          count_billing: this.sumData.all?.unpaid?.count,
          bg_color: 'orange',
          route: this.billRoute(this.lastMonthBillPaid, 'unpaid'),
        },
        {
          status_la: 'ບິນຍັງບໍ່ອອກ',
          total: this.sumData.no_bill?.package_price,
          count_billing: this.sumData.no_bill?.count_customers,
          bg_color: 'red',
          route: this.billRoute(this.lastMonthBillPaid, 'noBill'),
        },
      ];
    },
    param() {
      return queryOptions([
        { order_by: 'customers.id' },
        { without_month_info: true },
        { without_billing_summary: true },
        { has_billing_only: this.hasBillingOnly },
        { customer_id: this.customer_id },
        { phone: this.phone },
        { customer_type: this.selectedCustomerType },
        { package_id: this.package_id },
        { cost_by: this.selectedCompanyType },
        { villages: this.selectedVillage },
        { district_id: this.selectedDistrict.id },
        { village_details: this.selectedDetails },
        { date_from: this.start_date },
        { date_end: this.end_date },
        { filter: this.search },
        { with_created_user: true },
        { created_by_id: this.created_by },
        { bill_month: this.lastMonthBillPaid },
        { is_bill_month: true },
        { only_user_with_bill: this.$route.query.showOne },
        { per_page: this.per_page },
        { page: this.pagination.current_page },
      ]);
    },
  },
  watch: {
    created_by() {
      if (!this.firstLoad) this.fetchData();
    },
  },
  async created() {
    await this.fetchAddress();
    this.setParam();
    await this.fetchPackage();
    this.fetchData();
  },
  methods: {
    billRoute(billMonth, showOne) {
      const items = {
        selectedCustomerType: this.selectedCustomerType,
        package_id: this.selectedPackage,
        selectedVillage: this.selectedVillage,
        selectedDistrict: this.selectedDistrict,
        selectedDetails: this.selectedDetails,
        start_date: this.start_date,
        end_date: this.end_date,
        created_by: this.selectedSale,
        selectedCompanyType: this.selectedCompanyType,
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

    viewCustomerDetail(item) {
      const routeName = item.customer_type == 'home'
        ? 'ViewClient'
        : 'ViewCompanyDetail';

      const options = {
        name: routeName,
        params: queryOptions([
          {
            id: item.id,
          },
        ]),
      };

      this.openRoute(options);
    },
    getBgColorFn(status) {
      return getBgColor(status);
    },
    async fetchPackage() {
      const res = await this.$axios
        .get('package')
        .catch(() => {
        });
      if (res.data.code == 200) {
        this.packages = res.data.data;
      }
    },
    async fetchVillage() {
      const res = await this.$axios
        .get(`info/district/${this.selectedDistrict.id}/village`)
        .catch(() => {
        });

      if (res.data.code == 200) {
        this.villages = res.data.data;
      }
    },
    async fetchAddress() {
      this.districtLoaded = false;
      const res = await this.$axios
        .get('info/address', { params: { filter: 'ນະຄອນຫລວງວຽງຈັນ', with_village: true } })
        .catch(() => {
        });

      if (res.data.code == 200) {
        this.address = res.data.data;
        for (const addressItem of this.address) {
          this.districts = addressItem.districts;
        }
      }
      this.districtLoaded = true;
    },
    async fetchData(isExport = false) {
      this.$store.commit('Loading_State', true);
      const res = await this.$axios.get('v2/report-billing-for-customer', {
        params: { ...this.param, ...{ download: isExport ? 'excel' : null } },
      }).catch((err) => console.log(err));

      if (!isExport) {
        this.customers = res.data.data.data.data;
        this.pagination = res.data.data.data.pagination;
        this.sumData = res.data.data.sum;
      } else {
        console.log(res.data);
        window.open(res.data.data.download_link);
      }
      this.$store.commit('Loading_State', false);
    },
    setParam() {
      if (this.$route.query.customer_id) this.customer_id = this.$route.query.customer_id;
      if (this.$route.query.phone) this.phone = this.$route.query.phone;
      if (this.$route.query.selectedCustomerType) this.selectedCustomerType = this.$route.query.selectedCustomerType;
      if (this.$route.query.package_id) this.package_id = this.$route.query.package_id;
      if (this.$route.query.selectedCompanyType) this.selectedCompanyType = this.$route.query.selectedCompanyType;

      if (this.$route.query.selectedDistrict) {
        const existing = this.districts.find((item) => item.id == this.$route.query.selectedDistrict);
        if (existing) this.selectedDistrict = existing;
      }

      if (this.$route.query.selectedVillage) {
        this.selectedVillage = ensureArray(this.$route.query.selectedVillage).map((item) => Number(item));
      }

      if (this.$route.query.selectedDetails) this.selectedDetails = this.$route.query.selectedDetails;
      if (this.$route.query.start_date) this.start_date = this.$route.query.start_date;
      if (this.$route.query.end_date) this.end_date = this.$route.query.end_date;
      if (this.$route.query.search) this.search = this.$route.query.search;
      if (this.$route.query.created_by) this.created_by = this.$route.query.created_by;
      if (this.$route.query.billMonth) this.lastMonthBillPaid = this.$route.query.billMonth;

      if (this.$route.query.showOne) {
        if (this.$route.query.showOne == 'all') this.hasBillingOnly = '';
        else if (this.$route.query.showOne == 'noBill') this.hasBillingOnly = 'no_billing';
        else this.hasBillingOnly = 'has_billing';
      }
    },
    created() {
      if (!this.lastMonthBillPaid) this.lastMonthBillPaid = new Date().toISOString().substr(0, 7);
    },
    openBilling(id) {
      const options = {
        name: 'billing-detail',
        params: queryOptions([
          {
            id,
          },
        ]),
      };

      this.openRoute(options);
    },
    openRoute(options) {
      const routeData = this.$router.resolve({
        ...options,
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
