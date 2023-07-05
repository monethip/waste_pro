<template>
  <div>
    <v-row>
      <v-col>
        <v-menu
          v-model="start_menu_created"
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
      <v-col>
        <v-menu
          v-model="start_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          min-width="auto"
          offset-y
          transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="lastMonthBill"
              clearable
              dense
              label="ເດືອນທີ່ສ້າງບິນ"
              outlined
              readonly
              v-bind="attrs"
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
    <v-row>
      <v-col>
        <v-tabs
          v-model="tab"
          style="
    position: -webkit-sticky;
    position: sticky;
    top: 4rem;
    z-index: 2;
"
        >
          <v-tab
            v-for="item in items"
            :key="item.tab"
          >
            {{ item.tab }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="item in items"
            :key="item.tab"
          >
            <v-card flat>
              <v-card-text>
                <component :is="item.content" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ReportBillingType from '@/views/report/ReportBillingType.vue';
import ReportBillingCompany from '@/views/report/ReportBillingCompany.vue';
import ReportBillingHome from '@/views/report/ReportBillingHome.vue';
import ReportBillingCollectionEvent from '@/views/report/ReportBillingCollectionEvent.vue';
import ReportBillingFutureInvoice from '@/views/report/ReportBillingFutureInvoice.vue';
import ReportBillingCustomBill from '@/views/report/ReportBillingCustomBill.vue';

export default {
  components: {
    ReportBillingType,
    ReportBillingCompany,
    ReportBillingHome,
    ReportBillingCollectionEvent,
    ReportBillingFutureInvoice,
    ReportBillingCustomBill,
  },
  data() {
    return {
      tab: null,
      items: [
        { tab: 'ທັງໝົດ', content: 'ReportBillingType' },
        { tab: 'ຫົວໜ່ວຍທຸລະກິດ', content: 'ReportBillingCompany' },
        { tab: 'ຄົວເຮືອນ', content: 'ReportBillingHome' },
        { tab: 'ຖ້ຽວພິເສດ', content: 'ReportBillingCollectionEvent' },
      ],
      lastMonthBill: '',
      lastMonthBillPaid: '',
      start_menu_created: false,
      start_menu: false,
    };
  },
  computed: {
  },
  created() {
    if (this.$route.query.from_sale) this.lastMonthBillPaid = new Date().toISOString().substr(0, 7);
    else this.lastMonthBillPaid = '';
  },
  watch: {
  },
};
</script>
