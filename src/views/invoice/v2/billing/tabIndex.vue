<template>
  <v-container>
    <v-row class="mb-0">
      <v-col>
        <v-breadcrumbs
          large
          class="pa-0"
        >
          ຈັດການຂໍ້ມູນບິນ
        </v-breadcrumbs>
      </v-col>
      <v-col>
        <v-menu
          v-model="start_paid_month"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="lastMonthBillPaid"
              label="ບິນປະຈຳເດືອນ"
              readonly
              outlined
              v-bind="attrs"
              dense
              clearable
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="lastMonthBillPaid"
            type="month"
          />
        </v-menu>
      </v-col>
      <v-col>
        <v-menu
          v-model="start_created"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="lastMonthBill"
              label="ເດືອນທີ່ສ້າງບິນ"
              readonly
              outlined
              v-bind="attrs"
              dense
              clearable
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="lastMonthBill"
            type="month"
          />
        </v-menu>
      </v-col>
    </v-row>
    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab
            v-for="item in normalTabs"
            :key="item.status"
            :href="`#${item.status}`"
          >
            <v-badge
              :color="getBgColorFunc(item.status)"
              :content="item.count_status"
            >
              {{ item.status_la }}
            </v-badge>
          </v-tab>
          <v-spacer />
          <v-tab
            v-for="item in redTabs"
            :key="item.status"
            :href="`#${item.status}`"
          >
            <v-badge
              :color="getBgColorFunc(item.status)"
              :content="item.count_status"
            >
              {{ item.status_la }}
            </v-badge>
          </v-tab>
        </v-tabs>
        <v-card flat>
          <v-card-text>
            <allInvoice :tab="tab" />
          </v-card-text>
        </v-card>
        <!-- <hr /> -->
        <!-- <v-tabs-items v-model="tab" class="primary-color">
                  <v-tab-item
                    v-for="item in counts"
                    :key="item.status"
                    :value="`${item.status}`"
                  >
                    <v-card flat>
                      <v-card-text>
                        <allInvoice :tab="tab" />
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items> -->
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import allInvoice from "@views/invoice/v2/billing/index";
import { getBgColor, normal, red } from "@/Helpers/BillingStatus";

export default {
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  components: {
    allInvoice,
  },
  data() {
    return {
      tab: null,
      counts: [],
      lastMonthBill: localStorage.getItem("lastMonthBill"),
      lastMonthBillPaid: localStorage.getItem("lastMonthBillPaid"),
      start_menu: false,
      start_created: false,
      start_paid_month: false,
    };
  },
  computed: {
    normalTabs() {
      const tabs = [];
      for (const tab of this.counts) {
        if (normal.includes(tab.status)) tabs.push(tab);
      }
      return tabs;
    },
    redTabs() {
      const tabs = [];
      for (const tab of this.counts) {
        if (red.includes(tab.status)) tabs.push(tab);
      }
      return tabs;
    },
    lastMonthCreated() {
      return this.$store.getters["auth/getLastMonthBill"];
    },
    lastMonthBillPaidCreated() {
      return this.$store.getters["auth/getLastMonthBillPaid"];
    },
    callFetch() {
      return this.$store.getters["auth/getCallFetch"];
    },
  },
  watch: {
    callFetch(val, old) {
      if (old !== null || old !== "") this.countBilling();
    },
    lastMonthBill(value) {
      this.$store.dispatch("auth/saveLastMonthBill", value);
      this.lastMonthBill = value;
    },
    lastMonthBillPaid(value) {
      this.$store.dispatch("auth/saveLastMonthBillPaid", value);
      this.lastMonthBillPaid = value;
    },

    lastMonthCreated(val, old) {
      if (old !== null || old !== "") {
        this.lastMonthBill = this.$store.getters["auth/getLastMonthBill"];

        this.countBilling();
      }
    },
    lastMonthBillPaidCreated(val, old) {
      if (old !== null || old !== "") {
        this.lastMonthBillPaid = this.$store.getters["auth/getLastMonthBillPaid"];

        this.countBilling();
      }
    },
    tab(value, old) {
      if (old !== null || old !== "") this.countBilling();
      this.$router
        .push({
          name: "billing",
          query: { ...this.$route.query, ...{ tab: value } },
        })
        .catch(() => {});
    },
  },
  created() {
    this.tab = this.$route.query.tab;
    // if (!this.lastMonthBillPaid) this.lastMonthBillPaid = new Date().toISOString().substr(0, 7);
    this.countBilling();
  },
  methods: {
    getBgColorFunc(status) {
      return getBgColor(status);
    },
    async countBilling() {
      const option = {};
      if (this.lastMonthCreated) option.created_month = this.lastMonthCreated;
      if (this.lastMonthBillPaid) option.bill_month = this.lastMonthBillPaid;
      await this.$axios.get("count-billing", { params: option }).then((res) => {
        this.counts = res.data.data;
      });
    },
  },
};
</script>

<style></style>
