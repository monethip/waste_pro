<template>
  <v-container>
    <v-row>
      <span class="text-h5">ຫົວໜ່ວຍທຸລະກິດ</span>
    </v-row>
    <v-row>
      <v-col>
        <v-autocomplete
          required
          :items="costByList"
          v-model="selectedCostBy"
          item-text="la"
          item-value="en"
          label="ປະເພດບໍລິການ *"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          required
          :items="districts"
          v-model="selectedDistrict"
          item-text="name"
          item-value="id"
          label="District *"
          return-object
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          required
          :items="villageList"
          v-model="selectedVillage"
          item-text="name"
          item-value="id"
          label="Village *"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          :items="billDates"
          item-text="text"
          item-value="value"
          v-model="selectedBillDate"
          label="ເລືອກປະເພດວັນທີ"
          outlined
        ></v-autocomplete>
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
          <v-date-picker v-model="start_date" @input="fetchData()"></v-date-picker>
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
          <v-date-picker v-model="end_date" @input="fetchData()"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedSale"
          :items="sales"
          item-text="name"
          item-value="id"
          label="ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-btn color="green" dark @click="handleExport">Export</v-btn>
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

    <!-- Section Table Summary-->
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
                      class="text-left"
                      v-for="detailStatus in detailStatuses"
                      :key="detailStatus.text"
                    >
                      <v-chip :color="getBgColorFunc(detailStatus.text)" dark>
                        {{
                        detailStatus.text
                        }}
                      </v-chip>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in summaryDetails" :key="item.cost_by">
                    <td>
                      <span class="font-weight-medium">{{ item.cost_by }}</span>
                      <span class="font-weight-medium text-caption">
                        {{
                        ` (${formatNumber(item.count_billing)} ບິນ)`
                        }}
                      </span>
                    </td>
                    <td v-for="detailStatus in detailStatuses" :key="detailStatus.text">
                      <span class="font-weight-medium">
                        {{
                        formatNumber(item[detailStatus.text].total)
                        }}
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

    <!-- Section Table Detail-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>
            <v-row>
              <v-col>ລາຍການບິນທັງໝົດ</v-col>
              <v-col>
                <v-text-field
                  v-model="billingListsearch"
                  append-icon="mdi-magnify"
                  placeholder="ຊື່ຫົວບິນ, ລູກຄ້າ..."
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col>
                <v-data-table
                  :headers="billingListHeader"
                  :items="billings.data.data"
                  hide-default-footer
                  :items-per-page="100"
                  :search="billingListsearch"
                >
                  <template v-slot:item.status="{ item }">
                    <v-chip :color="getBgColorFunc(item.status)" dark>
                      {{
                      getLaoStatusFunc(item.status)
                      }}
                    </v-chip>
                  </template>

                  <template v-slot:item.total="{ item }">
                    {{
                    formatNumber(item.total)
                    }}
                  </template>
                  <template v-slot:item.user.customer.cost_by="{ item }">
                    {{
                    getLaoCompanyCostByFunc(item.user.customer.cost_by)
                    }}
                  </template>

                  <template v-slot:item.custom_type="{ item }">
                    <span v-if="customerType(item) == 'home'">ຄົວເຮືອນ</span>
                    <span v-if="customerType(item) == 'company'">ທຸລະກິດ</span>
                    <span v-if="!customerType(item)">ທົ່ວໄປ</span>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-pagination
                  v-model="current_page"
                  class="my-4"
                  :length="billings.data.pagination.total_pages"
                ></v-pagination>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RowSection from "../../components/card/RowSection.vue";
import { getBgColor, getLaoStatus } from "../../Helpers/BillingStatus";
import {
  getLaoCompanyCostBy,
  getCompanyCostBy,
  billDateList
} from "../../Helpers/Customer";

import numberFormat from "../../Helpers/formatNumber";
import queryOptions from "../../Helpers/queryOption";

export default {
  name: "ReportBillingType",
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  components: {
    RowSection
  },
  data() {
    return {
      loading: false,
      billingListsearch: "",
      exportMode: "",
      start_date: new Date().toISOString().substr(0, 8) + "01",
      end_date: "",
      start_menu: false,
      end_menu: false,
      villages: [],
      selectedVillage: "",
      districts: [],
      selectedDistrict: null,
      costByList: getCompanyCostBy,
      selectedCostBy: "",
      selectedSale: null,
      salesData: [],
      current_page: 1,
      billings: {
        summary: {
          count_billing: 0,
          total: []
        },
        details: [],
        data: {
          data: [],
          pagination: {
            total: 0,
            count: 0,
            per_page: 100,
            current_page: null,
            total_pages: 0
          }
        }
      },
      selectedBillDate: billDateList[0].value,
      billingListHeader: [
        {
          text: "ຊື່ຫົວບິນ",
          align: "start",
          value: "content"
        },
        { text: "ສະຖານະ", value: "status" },
        { text: "ປະເພດບໍລິການ", value: "user.customer.cost_by" },
        { text: "ຈຳນວນ", value: "total" },
        { text: "ຈ່າຍດ້ວຍ", value: "payment_method" },
        { text: "ລູກຄ້າ", value: "display_customer_name" },
        { text: "ທີ່ຢູ່", value: "display_customer_address" }
      ]
    };
  },
  methods: {
    handleExport() {
      this.exportMode = "excel";
    },
    customerType(item) {
      if (!item.user || !item.user.customer) return false;

      return item.user.customer.customer_type
        ? item.user.customer.customer_type
        : false;
    },
    async fetchDistrict() {
      try {
        const result = await this.$axios.get("info/district", {
          params: { province_id: 1 }
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
        { page: page },
        { sale_id: this.selectedSale },
        { date_method: this.selectedBillDate },
        { start_date: this.start_date },
        { end_date: this.end_date },
        { download: this.exportMode },
        { cost_by: this.selectedCostBy }
      ];

      if (this.selectedVillage)
        queryArray.push({ village_id: this.selectedVillage });
      else if (this.selectedDistrict)
        queryArray.push({ district_id: this.selectedDistrict });

      this.$store.commit("Loading_State", true);
      this.$axios
        .get("v2/report-billing-company", {
          params: queryOptions(queryArray)
        })
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.exportMode = "";
              if (res.data.data.download_link)
                window.open(res.data.data.download_link);
              else {
                this.billings = res.data.data;
                console.log(this.billings);
                this.current_page = this.billings.data.pagination.current_page;
              }
            }, 300);
          }
        })
        .catch(error => {
          this.$store.commit("Loading_State", false);
          if (error.response && error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchSale() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("user-setting/user", {
          params: queryOptions([
            { roles: ["sale", "sale_admin"] },
            { order_by: "newest" }
          ])
        })
        .then(res => {
          if (res.data.code === 200) {
            this.loading = false;
            this.$store.commit("Loading_State", false);
            this.salesData = res.data.data;
          }
        })
        .catch(error => {
          this.$store.commit("Loading_State", false);
          if (error.response && error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    getCard(statusItem) {
      const data = this.billings.summary.total.find(
        status => status.status == statusItem
      );
      if (data) {
        data.bg_color = getBgColor(data.status);
      }
      return data ? data : this.defaultStatus;
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
    }
  },
  watch: {
    selectedDistrict() {
      this.fetchData();
    },
    selectedVillage() {
      this.fetchData();
    },
    exportMode() {
      this.fetchData();
    },
    selectedSale() {
      this.fetchData();
    },
    current_page() {
      this.fetchData(this.current_page);
    },
    selectedCostBy() {
      this.fetchData();
    }
  },
  computed: {
    billDates() {
      return billDateList;
    },
    sales() {
      let data = [];
      for (const item of this.salesData) {
        let name = "";
        if (item.name) name += item.name + " ";
        if (item.phone) name += item.phone + " ";
        if (item.emp_name) name += item.emp_name + " ";
        if (item.emp_surname) name += item.emp_surname + " ";
        if (item.emp_card_id) name += item.emp_card_id;
        data.push({
          name: name,
          id: item.id
        });
      }
      return data;
    },
    villageList() {
      return this.selectedDistrict ? this.selectedDistrict.villages : [];
    },
    summaryDetails() {
      let data = [];
      for (const detail of this.billings.details) {
        let item = {
          cost_by: detail.cost_by_la,
          count_billing: detail.count_billing
        };
        for (const total of detail.total) {
          item[total.status_la] = {
            count_billing: total.count_billing,
            total: total.total
          };
        }

        data.push(item);
      }
      return data;
    },
    detailStatuses() {
      let data = [];

      if (this.summaryDetails.length > 0) {
        for (const [key, value] of Object.entries(this.summaryDetails[0])) {
          if (value.count_billing !== undefined) {
            data.push({
              text: key,
              value: key + ".total"
            });
          }
        }
      }
      return data;
    },
    headers() {
      let header = [
        {
          text: "ປະເພດບິນ",
          align: "start",
          value: "cost_by_la"
        }
      ];
      if (this.detailStatuses.length > 0) {
        header = [header, ...this.detailStatuses];
      }
      return header;
    },
    defaultStatus() {
      return {
        status: "",
        status_la: "",
        total: 0,
        count_billing: 0,
        bg_color: ""
      };
    },
    sectionSuccess() {
      return [
        this.successStatus,
        this.toConfirmPaymentStatus,
        this.rejectedStatus
      ];
    },
    sectionPending() {
      return [this.approvedStatus, this.createdStatus];
    },
    successStatus() {
      return this.getCard("success");
    },
    createdStatus() {
      return this.getCard("created");
    },
    cancelStatus() {
      return this.getCard("cancel");
    },
    rejectedStatus() {
      return this.getCard("rejected");
    },
    toConfirmPaymentStatus() {
      return this.getCard("to_confirm_payment");
    },
    approvedStatus() {
      return this.getCard("approved");
    }
  },
  created() {
    this.fetchDistrict();
    this.fetchData();
    this.fetchSale();
  }
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>