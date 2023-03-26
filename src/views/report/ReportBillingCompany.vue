<template>
  <v-container>
    <v-row>
      <span class="text-h5">ຫົວໜ່ວຍທຸລະກິດ</span>
    </v-row>
    <v-row>
      <v-col>
        <v-autocomplete
          v-model="selectedCostBy"
          :items="costByList"
          dense
          item-text="la"
          item-value="en"
          label="ປະເພດບໍລິການ *"
          outlined
          required
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedDistrict"
          :items="districts"
          dense
          item-text="name"
          item-value="id"
          label="District *"
          outlined
          required
          return-object
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedVillage"
          :items="villageList"
          dense
          item-text="name"
          item-value="id"
          label="Village *"
          outlined
          required
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedBillDate"
          :items="billDates"
          clearable=""
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
              v-model="start_date"
              dense
              label="ເລີ່ມວັນທີ"
              outlined
              readonly
              v-bind="attrs"
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
          min-width="auto"
          offset-y
          transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_date"
              dense
              label="ຫາວັນທີ"
              outlined
              readonly
              v-bind="attrs"
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
        <v-select
          v-model="selectedPaymentMethod"
          :items="paymentMethods"
          dense
          item-text="text"
          item-value="value"
          label="ເລືອກປະເພດການຈ່າຍ"
          outlined
          @change="fetchData()"
        />
      </v-col>

      <v-col>
        <v-autocomplete
          v-model="selectedSale"
          :items="sales"
          dense
          item-text="name"
          item-value="id"
          label="ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ"
          outlined
        />
      </v-col>
      <v-col>
        <v-btn
          color="green"
          dark
          @click="handleExport"
        >
          Export
        </v-btn>
      </v-col>
    </v-row>

    <!-- Section Sale-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>ແຍກຈາກເຊວ</v-card-title>
          <v-card-text>
            <v-row>
              <v-col @click="changeSaleMode('sale')">
                <span class="text-title mt-2 font-weight-bold">ບິນທີ່ເປັນຂອງເຊວ</span>
                <RowSection :cards="sectionSale" />
              </v-col>

              <v-col @click="changeSaleMode('not_sale')">
                <span class="text-title mt-2">ບິນທີ່ບໍ່ເປັນຂອງເຊວ</span>
                <RowSection :cards="sectionNotSale" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section Total-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>ລວມທັງໝົດ</v-card-title>
          <v-card-text>
            <!-- Section Success -->
            <span class="text-subtitle-1 mt-2">ທີ່ລູກຄ້າຈ່າຍແລ້ວ</span>
            <RowSection :cards="sectionSuccess" />

            <!-- Section Pending -->
            <span class="text-subtitle-1 mt-2">ທີ່ລູກຄ້າຍັງບໍ່ທັນຈ່າຍ</span>
            <RowSection :cards="sectionPending" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section Table Billingable Summary-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>ຕາມປະເພດບິນ</v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>ປະເພດບິນ</th>
                    <th
                      v-for="detailStatus in detailStatuses"
                      :key="detailStatus.text"
                      class="text-left"
                    >
                      <v-chip
                        :color="getBgColorFunc(detailStatus.text)"
                        dark
                      >
                        {{ detailStatus.text }}
                      </v-chip>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in billings.billingable"
                    :key="item.display_type"
                  >
                    <td>
                      <a
                        href="#"
                        @click="
                          openRoute({
                            customer_type: 'company',
                          })
                        "
                      >
                        <span class="font-weight-medium">{{
                          item.display_type_la
                        }}</span>
                        <span class="font-weight-medium text-caption">
                          {{ ` (${formatNumber(item.count_billing)} ບິນ)` }}
                        </span>
                      </a>
                    </td>
                    <td
                      v-for="itemStatus in item.total"
                      :key="itemStatus.status"
                    >
                      <a
                        href="#"
                        @click="
                          openRoute({
                            customer_type: 'company',
                            tab: itemStatus.status,
                          })
                        "
                      >
                        <span class="font-weight-medium">
                          {{ formatNumber(itemStatus.total) }}
                        </span>
                        <span class="font-weight-medium text-caption">
                          {{
                            `
                        (${formatNumber(itemStatus.count_billing)} ບິນ)`
                          }}
                        </span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section Table Cost By Summary-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>ຕາມປະເພດບໍລິການ</v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>ປະເພດບໍລິການ</th>
                    <th
                      v-for="detailStatus in detailStatuses"
                      :key="detailStatus.text"
                      class="text-left"
                    >
                      <v-chip
                        :color="getBgColorFunc(detailStatus.text)"
                        dark
                      >
                        {{ detailStatus.text }}
                      </v-chip>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in summaryDetails"
                    :key="item.cost_by"
                  >
                    <td>
                      <span class="font-weight-medium">{{ item.cost_by }}</span>
                      <span class="font-weight-medium text-caption">
                        {{ ` (${formatNumber(item.count_billing)} ບິນ)` }}
                      </span>
                    </td>
                    <td
                      v-for="detailStatus in detailStatuses"
                      :key="detailStatus.text"
                    >
                      <span class="font-weight-medium">
                        {{ formatNumber(item[detailStatus.text].total) }}
                      </span>
                      <span class="font-weight-medium text-caption">
                        {{
                          `
                        (${formatNumber(
                            item[detailStatus.text].count_billing
                          )} ບິນ)`
                        }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section Table Village Summary-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>ຕາມບ້ານ ({{ billings.villages.length }})</v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>ບ້ານ</th>
                    <th
                      v-for="detailStatus in detailStatuses"
                      :key="detailStatus.text"
                      class="text-left"
                    >
                      <v-chip
                        :color="getBgColorFunc(detailStatus.text)"
                        dark
                      >
                        {{ detailStatus.text }}
                      </v-chip>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="item in billings.villages"
                    :key="item.display_type"
                  >
                    <td>
                      <span class="font-weight-medium">{{
                        item.village_name
                      }}</span>
                      <span class="font-weight-medium text-caption">
                        {{ ` (${formatNumber(item.count_billing)} ບິນ)` }}
                      </span>
                    </td>
                    <td
                      v-for="itemStatus in item.total"
                      :key="itemStatus.status"
                    >
                      <span class="font-weight-medium">
                        {{ formatNumber(itemStatus.total) }}
                      </span>
                      <span class="font-weight-medium text-caption">
                        {{
                          `
                        (${formatNumber(itemStatus.count_billing)} ບິນ)`
                        }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section Table Detail-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>
            <v-row>
              <v-col>ລາຍການບິນທັງໝົດ <strong>{{ sale_mode ? (sale_mode == 'sale' ? 'ທີ່ເປັນຂອງເຊວ' : 'ທີ່ບໍ່ເປັນຂອງເຊວ') :'' }}</strong></v-col>
              <v-col>
                <v-text-field
                  v-model="billingListsearch"
                  append-icon="mdi-magnify"
                  hide-details
                  placeholder="ຊື່ຫົວບິນ, ລູກຄ້າ..."
                  single-line
                />
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-data-table
                  :headers="billingListHeader"
                  :items="billings.data.data"
                  :items-per-page="100"
                  :search="billingListsearch"
                  hide-default-footer
                >
                  <template v-slot:item.status="{ item }">
                    <v-chip
                      :color="getBgColorFunc(item.status)"
                      dark
                    >
                      {{ getLaoStatusFunc(item.status) }}
                    </v-chip>
                  </template>

                  <template v-slot:item.total="{ item }">
                    {{ formatNumber(item.total) }}
                  </template>
                  <template v-slot:item.paided_by_user.full_name="{ item }">
                    <p
                      v-if="item.paided_by_user"
                      :class="item.paided_by_user.roles.length ? '':'text-decoration-line-through'"
                    >
                      {{ item.paided_by_user.full_name }}
                    </p>
                  </template>
                  <template v-slot:item.user.customer.cost_by="{ item }">
                    {{ getLaoCompanyCostByFunc(item.user.customer.cost_by) }}
                  </template>

                  <template v-slot:item.custom_type="{ item }">
                    <span v-if="customerType(item) == 'home'">ຄົວເຮືອນ</span>
                    <span v-if="customerType(item) == 'company'">ທຸລະກິດ</span>
                    <span v-if="!customerType(item)">ທົ່ວໄປ</span>
                  </template>

                  <template v-slot:item.action="{ item }">
                    <v-btn
                      class="btn elevation-0"
                      color="info"
                      small
                      @click="ViewInvoice(item.id)"
                    >
                      <v-icon
                        class="mr-1"
                        small
                      >
                        mdi-eye
                      </v-icon>
                    </v-btn>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-pagination
                  v-model="current_page"
                  :length="billings.data.pagination.total_pages"
                  class="my-4"
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RowSection from '../../components/card/RowSection.vue';
import {
  getBgColor,
  getLaoStatus,
  payment_methods,
} from '../../Helpers/BillingStatus';
import {
  getLaoCompanyCostBy,
  getCompanyCostBy,
  billDateList,
} from '../../Helpers/Customer';

import numberFormat from '../../Helpers/formatNumber';
import queryOptions from '../../Helpers/queryOption';

export default {
  name: 'ReportBillingType',
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  components: {
    RowSection,
  },
  data() {
    return {
      loading: false,
      sale_mode: "",
      paymentMethods: payment_methods,
      selectedPaymentMethod: '',
      billingListsearch: '',
      exportMode: '',
      start_date: `${new Date().toISOString().substr(0, 8)}01`,
      end_date: '',
      start_menu: false,
      end_menu: false,
      villages: [],
      selectedVillage: '',
      districts: [],
      selectedDistrict: null,
      costByList: getCompanyCostBy,
      selectedCostBy: '',
      selectedSale: null,
      salesData: [],
      current_page: 1,
      billings: {
        summary: {
          count_billing: 0,
          total: [],
        },
        villages: [],
        billingable: [],
        details: [],
        data: {
          data: [],
          pagination: {
            total: 0,
            count: 0,
            per_page: 100,
            current_page: null,
            total_pages: 0,
          },
        },
      },
      selectedBillDate: '',
      billingListHeader: [
        { text: 'ໄອດີ', value: 'billing_display_id' },
        {
          text: 'ຊື່ຫົວບິນ',
          align: 'start',
          value: 'content',
        },
        { text: 'ສະຖານະ', value: 'status' },
        { text: 'ປະເພດການຈ່າຍ', value: 'payment_method_la' },
        { text: 'ຜູ້ຈ່າຍ', value: 'paided_by_user.full_name' },
        { text: 'ປະເພດບໍລິການ', value: 'user.customer.cost_by' },
        { text: 'ຈຳນວນ', value: 'total' },

        { text: 'ລູກຄ້າ', value: 'display_customer_name' },
        { text: 'ທີ່ຢູ່', value: 'display_customer_address' },
        { text: 'action', value: 'action' },
      ],
      lastMonthBill: localStorage.getItem('lastMonthBill'),
      lastMonthBillPaid: localStorage.getItem('lastMonthBillPaid'),
    };
  },
  computed: {
    lastMonthCreated() {
      return this.$store.getters['auth/getLastMonthBill'];
    },
    lastMonthBillCreated() {
      return this.$store.getters['auth/getLastMonthBillPaid'];
    },
    billDates() {
      return billDateList;
    },
    sales() {
      const data = [];
      for (const item of this.salesData) {
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
    villageList() {
      return this.selectedDistrict ? this.selectedDistrict.villages : [];
    },
    summaryDetails() {
      const data = [];
      for (const detail of this.billings.details) {
        const item = {
          cost_by: detail.cost_by_la,
          count_billing: detail.count_billing,
        };
        for (const total of detail.total) {
          item[total.status_la] = {
            count_billing: total.count_billing,
            total: total.total,
          };
        }

        data.push(item);
      }
      return data;
    },
    detailStatuses() {
      const data = [];

      if (this.summaryDetails.length > 0) {
        for (const [key, value] of Object.entries(this.summaryDetails[0])) {
          if (value.count_billing !== undefined) {
            data.push({
              text: key,
              value: `${key}.total`,
            });
          }
        }
      }
      return data;
    },
    headers() {
      let header = [
        {
          text: 'ປະເພດບິນ',
          align: 'start',
          value: 'cost_by_la',
        },
      ];
      if (this.detailStatuses.length > 0) {
        header = [header, ...this.detailStatuses];
      }
      return header;
    },
    defaultStatus() {
      return {
        status: '',
        status_la: '',
        total: 0,
        count_billing: 0,
        bg_color: '',
      };
    },
    sectionSuccess() {
      return [
        this.successStatus,
        this.toConfirmPaymentStatus,
        this.rejectedStatus,
      ];
    },
    sectionSale() {
      let item = this.defaultStatus;
      if (this.billings.sum_sale && this.billings.sum_sale.total) {
        item = this.billings.sum_sale.total.find((item) => item.status == 'success');
      }
      return [
        { ...item, bg_color: 'teal' },
      ];
    },
    sectionNotSale() {
      let item = this.defaultStatus;
      if (this.billings.sum_not_sale && this.billings.sum_not_sale.total) {
        item = this.billings.sum_not_sale.total.find((item) => item.status == 'success');
      }
      return [
        { ...item, bg_color: 'teal darken-4' },

      ];
    },
    sectionPending() {
      return [this.approvedStatus, this.createdStatus];
    },
    successStatus() {
      return this.getCard('success');
    },
    createdStatus() {
      return this.getCard('created');
    },
    cancelStatus() {
      return this.getCard('cancel');
    },
    rejectedStatus() {
      return this.getCard('rejected');
    },
    toConfirmPaymentStatus() {
      return this.getCard('to_confirm_payment');
    },
    approvedStatus() {
      return this.getCard('approved');
    },
  },
  watch: {
    lastMonthCreated() {
      this.fetchData();
    },
    lastMonthBillCreated() {
      this.fetchData();
    },
    billDates() {
      this.fetchData();
    },
    selectedDistrict(old, value) {
      if (value != old) this.selectedVillage = '';
      this.fetchData();
    },
    selectedVillage() {
      this.fetchData();
    },
    exportMode() {
      this.fetchData();
    },
    selectedBillDate() {
      if (this.start_date || this.end_date) this.fetchData();
    },
    selectedSale() {
      this.fetchData();
    },
    current_page() {
      this.fetchData(this.current_page);
    },
    selectedCostBy() {
      this.fetchData();
    },
  },
  created() {
    this.fetchDistrict();
    this.fetchData();
    this.fetchSale();
  },
  methods: {
    changeSaleMode(mode) {
      this.sale_mode = mode;
      this.fetchData();
    },
    handleExport() {
      this.exportMode = 'excel';
    },
    customerType(item) {
      if (!item.user || !item.user.customer) return false;

      return item.user.customer.customer_type
        ? item.user.customer.customer_type
        : false;
    },
    async fetchDistrict() {
      try {
        const result = await this.$axios.get('info/district', {
          params: { province_id: 1 },
        });
        this.districts = result.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    fetchData(page = 1) {
      this.start_menu = false;
      this.end_menu = false;
      const queryArray = [
        { per_page: 100 },
        { page },
        { sale_id: this.selectedSale },
        { payment_method: this.selectedPaymentMethod },
        { date_method: this.selectedBillDate },
        { start_date: this.start_date },
        { end_date: this.end_date },
        { download: this.exportMode },
        { created_month: this.lastMonthCreated },
        { bill_month: this.lastMonthBillCreated },
        { sale_mode: this.sale_mode },
        { cost_by: this.selectedCostBy },
      ];

      if (this.selectedVillage) queryArray.push({ village_id: this.selectedVillage });
      else if (this.selectedDistrict) queryArray.push({ district_id: this.selectedDistrict });

      this.$store.commit('Loading_State', true);
      this.$axios
        .get('v2/report-billing-company', {
          params: queryOptions(queryArray),
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.exportMode = '';
              if (res.data.data.download_link) window.open(res.data.data.download_link);
              else {
                this.billings = res.data.data;
                this.current_page = this.billings.data.pagination.current_page;
              }
            }, 300);
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
            this.loading = false;
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
    openRoute(additionalOption = null) {
      const defaultOption = queryOptions([
        { created_month: this.lastMonthCreated },
        { bill_month: this.lastMonthBillCreated },
        { sale_mode: this.sale_mode },
      ]);

      const options = additionalOption
        ? {
          ...defaultOption,
          ...additionalOption,
        }
        : defaultOption;

      const routeData = this.$router.resolve({
        path: '/billing',
        query: options,
      });

      window.open(routeData.href, '_blank');
    },
    ViewInvoice(id) {
      const route = this.$router.resolve({
        name: 'billing-detail',
        params: { id },
      });
      window.open(route.href, '_blank');
    },
    getCard(statusItem) {
      const data = this.billings.summary.total.find(
        (status) => status.status == statusItem,
      );
      if (data) {
        const routeData = this.$router.resolve({
          path: '/billing',
          query: {
            tab: statusItem,
            customer_type: 'company',
          },
        });

        data.route = routeData;
        data.bg_color = getBgColor(data.status);
      }
      return data || this.defaultStatus;
    },
    getBgColorFunc(status) {
      return getBgColor(status);
    },
    getLaoStatusFunc(status) {
      return getLaoStatus(status);
    },
    getLaoCompanyCostByFunc(status) {
      return getLaoCompanyCostBy(status);
    },
    formatNumber(number) {
      return numberFormat(number);
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
