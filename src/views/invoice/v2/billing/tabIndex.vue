<template>
  <v-container>
    <v-row class="mb-0">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          ຈັດການຂໍ້ມູນບິນ
        </v-breadcrumbs>
      </v-col>
      <v-col>
        <v-menu v-model="start_menu" :close-on-content-click="true" :nudge-right="40" transition="scale-transition"
          offset-y min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="lastMonthBill" label="ເດືອນທີ່ສ້າງບິນ" readonly outlined v-bind="attrs" v-on="on"
              dense>
            </v-text-field>
          </template>
          <v-date-picker v-model="lastMonthBill" type="month"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1">
            <v-badge color="info" v-if="counts.length" :content="counts[0].count_status">
              ລໍຖ້າອະນຸມັດ
            </v-badge>
          </v-tab>
          <v-tab href="#tab-2">
            <v-badge color="orange" v-if="counts.length" :content="counts[1].count_status">
              ອະນຸມັດແລ້ວ
            </v-badge>
          </v-tab>
          <v-tab href="#tab-3">
            <v-badge color="info" v-if="counts.length" :content="counts[4].count_status">
              <span class="info--text">
                ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ </span>
            </v-badge>

          </v-tab>
          <v-tab href="#tab-4">
            <v-badge color="success" v-if="counts.length" :content="counts[5].count_status">
              <span class="success--text">
                ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ
              </span>
            </v-badge>
          </v-tab>
          <v-tab href="#tab-5">
            <v-badge color="error" v-if="counts.length" :content="counts[3].count_status">
              <span class="error--text">ການຈ່າຍຖືກປະຕິເສດ
              </span>
            </v-badge>
          </v-tab>
          <v-spacer></v-spacer>
          <v-tab href="#tab-6">
            <v-badge color="error" v-if="counts.length" :content="counts[2].count_status">
              <span class="error--text">ບິນທີ່ຍົກເລີກ </span>
            </v-badge>
          </v-tab>
        </v-tabs>
        <!-- <hr /> -->
        <v-tabs-items v-model="tab" class="primary-color">
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-card-text>
                <allInvoice :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <paidBill :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-3">
            <v-card flat>
              <v-card-text>
                <confirmPayment :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-4">
            <v-card flat>
              <v-card-text>
                <success :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-5">
            <v-card flat>
              <v-card-text>
                <rejected :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-6">
            <v-card flat>
              <v-card-text>
                <canceled :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import allInvoice from "@views/invoice/v2/billing/index";
import confirmPayment from "@views/invoice/v2/billing/confirmPayment";
import paidBill from "@views/invoice/v2/billing/paidBill";
import canceled from "@views/invoice/v2/billing/cancelBill";
import rejected from "@views/invoice/v2/billing/rejectBill";
import success from "@views/invoice/v2/billing/successBill";
export default {
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  components: {
    allInvoice,
    confirmPayment,
    paidBill,
    rejected,
    canceled,
    success,
  },
  data() {
    return {
      tab: null,
      counts: [],
      lastMonthBill: localStorage.getItem("lastMonthBill"),
      start_menu: false,

    };
  },
  methods: {
    async countBilling() {
      const option = {}
      if (this.lastMonthCreated) option.created_month = this.lastMonthCreated
      await this.$axios.get("count-billing", { params: option }).then((res) => {
        this.counts = res.data.data;
      })
    },
  },
  computed: {
    lastMonthCreated() {
      return this.$store.getters['auth/getLastMonthBill']
    }
  },
  created() {
    if (this.$route.query.tab == "billing-approved") {
      this.tab = "tab-1";
    } else if (this.$route.query.tab == "billing-paid") {
      this.tab = "tab-2";
    } else if (this.$route.query.tab == "billing-confirm-payment") {
      this.tab = "tab-3";
    } else if (this.$route.query.tab == "billing-success") {
      this.tab = "tab-4";
    } else if (this.$route.query.tab == "billing-reject") {
      this.tab = "tab-5";
    } else if (this.$route.query.tab == "billing-canceled") {
      this.tab = "tab-6";
    }
    this.countBilling();
  },
  watch: {
    lastMonthBill: function (value) {
      this.$store.dispatch('auth/saveLastMonthBill', value);
    },
    lastMonthCreated: function () {
      this.countBilling()
    },
    tab: function (value) {
      if (value == "tab-1") {
        this.countBilling();
        this.$router
          .push({ name: "billing", query: { tab: "billing-approved" } })
          .catch(() => { });
      } else if (value == "tab-2") {
        this.countBilling();
        this.$router
          .push({ name: "billing", query: { tab: "billing-paid" } })
          .catch(() => { });
      } else if (value == "tab-3") {
        this.countBilling();
        this.$router
          .push({
            name: "billing",
            query: { tab: "billing-confirm-payment" },
          })
          .catch(() => { });
      } else if (value == "tab-4") {
        this.countBilling();
        this.$router
          .push({ name: "billing", query: { tab: "billing-success" } })
          .catch(() => { });
      } else if (value == "tab-5") {
        this.countBilling();
        this.$router
          .push({ name: "billing", query: { tab: "billing-reject" } })
          .catch(() => { });
      }
      else if (value == "tab-6") {
        this.countBilling();
        this.$router
          .push({ name: "billing", query: { tab: "billing-canceled" } })
          .catch(() => { });
      }
    },
  },
};
</script>

<style>

</style>
