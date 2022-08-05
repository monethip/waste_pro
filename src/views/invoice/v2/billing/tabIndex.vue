<template>
  <v-container>
    <v-row class="mb-0">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          ຈັດການຂໍ້ມູນບິນ
        </v-breadcrumbs
        >
      </v-col>
    </v-row>
    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1">ອະນຸມັດບິນ</v-tab>
          <v-tab href="#tab-2">ບິນທີ່ຕ້ອງຊຳລະ</v-tab>
          <v-tab href="#tab-3">ຢືນຢັນການຊຳລະ</v-tab>
          <v-tab href="#tab-4">ບິນທີ່ຍົກເລີກ</v-tab>
          <v-tab href="#tab-5">ບິນທີ່ປະຕິເສດ</v-tab>
          <v-tab href="#tab-6">ບິນທີ່ສຳເລັດ</v-tab>
        </v-tabs>
        <!-- <hr /> -->
        <v-tabs-items v-model="tab">
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
              <v-card-text> <confirmPayment :tab="tab" /> </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-4">
            <v-card flat>
              <v-card-text> <canceled :tab="tab" /> </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-5">
            <v-card flat>
              <v-card-text> <rejected :tab="tab" /> </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-6">
            <v-card flat>
              <v-card-text> <success :tab="tab" /> </v-card-text>
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
    };
  },
  methods: {
  },
  created() {
    if (this.$route.query.tab == "billing-approved") {
      this.tab = "tab-1";
    } else if (this.$route.query.tab == "billing-paid") {
      this.tab = "tab-2";
    } else if (this.$route.query.tab == "billing-confirm-payment") {
      this.tab = "tab-3";
    } else if (this.$route.query.tab == "billing-canceled") {
      this.tab = "tab-4";
    } else if (this.$route.query.tab == "billing-reject") {
      this.tab = "tab-5";
    }else if (this.$route.query.tab == "billing-success") {
      this.tab = "tab-6";
    }
  },
  watch: {
    tab: function (value) {
      if (value == "tab-1") {
        this.$router
            .push({ name: "billing", query: { tab: "billing-approved" } })
            .catch(() => {});
      } else if (value == "tab-2") {
        this.$router
            .push({ name: "billing", query: { tab: "billing-paid" } })
            .catch(() => {});
      } else if (value == "tab-3") {
        this.$router
            .push({
              name: "billing",
              query: { tab: "billing-confirm-payment" },
            })
            .catch(() => {});
      } else if (value == "tab-4") {
        this.$router
            .push({ name: "billing", query: { tab: "billing-canceled" } })
            .catch(() => {});
      } else if (value == "tab-5") {
        this.$router
            .push({ name: "billing", query: { tab: "billing-reject" } })
            .catch(() => {});
      } else if (value == "tab-56") {
        this.$router
            .push({ name: "billing", query: { tab: "billing-success" } })
            .catch(() => {});
      }
    },
  },
};
</script>

<style>
</style>
