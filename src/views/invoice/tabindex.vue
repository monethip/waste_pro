<template>
  <div>
    <v-card>
      <v-tabs v-model="tab">
        <v-tab href="#tab-1" link>ລວມບິນ</v-tab>
        <v-tab href="#tab-2">ບິນທີ່ອະນຸມັດ</v-tab>
        <v-tab href="#tab-3">ຢືນຢັນການຊຳລະ</v-tab>
        <v-tab href="#tab-4">ບິນທີ່ຊຳລະບໍຜ່ານ</v-tab>
        <v-tab href="#tab-5">ບິນທີ່ສຳເລັດ</v-tab>
      </v-tabs>
      <!-- <hr /> -->

      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <allInvoice />
        </v-tab-item>
      </v-tabs-items>

      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-2">
          <v-card flat>
            <v-card-text>
              <approvedInvoice />
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-3">
          <v-card flat>
            <v-card-text> <confirmPayment /> </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-4">
          <v-card flat>
            <v-card-text> <reject /> </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-5">
          <v-card flat>
            <v-card-text> <success /> </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import allInvoice from "@views/invoice/tabinvoice/allInvoice";
import approvedInvoice from "@views/invoice/tabinvoice/approved";
import confirmPayment from "@views/invoice/tabinvoice/confirmPayment";
import reject from "@views/invoice/tabinvoice/reject";
import success from "@views/invoice/tabinvoice/success";
export default {
  components: {
    allInvoice,
    approvedInvoice,
    confirmPayment,
    reject,
    success,
  },
  data() {
    return {
      tab: null,
    };
  },
  created() {
    if (this.$route.query.tab == "invoice-all") {
      this.tab = "tab-1";
    } else if (this.$route.query.tab == "invoice-approved") {
      this.tab = "tab-2";
    } else if (this.$route.query.tab == "invoice-confirm-payment") {
      this.tab = "tab-3";
    } else if (this.$route.query.tab == "invoice-reject") {
      this.tab = "tab-4";
    } else if (this.$route.query.tab == "invoice-success") {
      this.tab = "tab-5";
    }
  },
  watch: {
    tab: function (value) {
      if (value == "tab-1") {
        this.$router
          .push({ name: "InvoiceTab", query: { tab: "invoice-all" } })
          .catch(() => {});
      } else if (value == "tab-2") {
        this.$router
          .push({ name: "InvoiceTab", query: { tab: "invoice-approved" } })
          .catch(() => {});
      } else if (value == "tab-3") {
        this.$router
          .push({
            name: "InvoiceTab",
            query: { tab: "invoice-confirm-payment" },
          })
          .catch(() => {});
      } else if (value == "tab-4") {
        this.$router
          .push({ name: "InvoiceTab", query: { tab: "invoice-reject" } })
          .catch(() => {});
      } else if (value == "tab-5") {
        this.$router
          .push({ name: "InvoiceTab", query: { tab: "invoice-success" } })
          .catch(() => {});
      }
    },
  },
};
</script>

<style>
</style>
