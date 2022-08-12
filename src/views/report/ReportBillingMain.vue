<template>
  <div>
    <v-tabs
      v-model="tab"
      style="
    position: -webkit-sticky;
    position: sticky;
    top: 4rem;
    z-index: 2;
"
    >
      <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>
            <component v-bind:is="item.content"></component>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import ReportBillingType from "@/views/report/ReportBillingType.vue";
import ReportBillingCompany from "@/views/report/ReportBillingCompany.vue";
import ReportBillingHome from "@/views/report/ReportBillingHome.vue";
import ReportBillingCollectionEvent from "@/views/report/ReportBillingCollectionEvent.vue";
import ReportBillingFutureInvoice from "@/views/report/ReportBillingFutureInvoice.vue";
import ReportBillingCustomBill from "@/views/report/ReportBillingCustomBill.vue";

export default {
  components: {
    ReportBillingType,
    ReportBillingCompany,
    ReportBillingHome,
    ReportBillingCollectionEvent,
    ReportBillingFutureInvoice,
    ReportBillingCustomBill
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: "ທັງໝົດ", content: "ReportBillingType" },
        { tab: "ຫົວໜ່ວຍທຸລະກິດ", content: "ReportBillingCompany" },
        { tab: "ຄົວເຮືອນ", content: "ReportBillingHome" },
        { tab: "ຖ້ຽວພິເສດ", content: "ReportBillingCollectionEvent" },
        { tab: "ຈ່າຍລ່ວງໜ້າ", content: "ReportBillingFutureInvoice" },
        { tab: "ບິນອື່ນໆ", content: "ReportBillingCustomBill" }
      ]
    };
  }
};
</script>