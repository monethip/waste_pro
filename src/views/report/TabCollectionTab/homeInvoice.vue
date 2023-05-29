<template>
  <v-container>
    <v-breadcrumbs
      large
      class="pt-0"
    >
      ລາຍງານຂໍ້ມູນບິນເກັບຂີ້ເຫື້ຍອພິເສດ
    </v-breadcrumbs>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          @click="exportData()"
        >
          Export
        </v-btn>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedDuration"
          outlined
          dense
          :items="duration"
          item-text="name"
          item-value="duration"
          label="ຊ່ວງເວລາ"
        />
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
            v-model="year_from"
            style="height: 40px"
            type="year"
            placeholder="ເລີ່ມປີ"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
            v-model="year_to"
            type="year"
            placeholder="ຫາປີ"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
            v-model="month_from"
            type="month"
            placeholder="ເລີ່ມເດືອນ"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
            v-model="month_to"
            type="month"
            placeholder="ຫາເດືອນ"
          />
        </section>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols>
        <v-select
          v-model="selectedCollectionStatus"
          outlined
          dense
          :items="collectionStatus"
          item-text="dis_play"
          item-value="name"
          label="ສະຖານະບໍລິການ"
          multiple
          clearable
        />
      </v-col>
      <v-col col>
        <v-select
          v-model="selectedPaymentStatus"
          outlined
          dense
          :items="paymentStatus"
          item-text="dis_play"
          item-value="name"
          label="ສະຖານະການຊຳລະ"
          multiple
          clearable
        />
      </v-col>
    </v-row>

    <div>
      <v-row>
        <v-col
          v-for="(sum, index) in summary"
          :key="index"
        >
          <MoneyCard
            :title="sum.status_la"
            :total="sum.total"
            :bg_color="getBgColorFunc(sum.status)"
          />
        </v-col>
      </v-row>
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="invoices"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <!--Role -->
            <template v-slot:item.sub_total="{ item }">
              <div>
                {{ Intl.NumberFormat().format(item.sub_total) }}
              </div>
            </template>
            <template v-slot:item.total="{ item }">
              <div>
                {{ Intl.NumberFormat().format(item.total) }}
              </div>
            </template>
            <template v-slot:item.status_la="{ item }">
              <v-chip
                label
                :color="statusColor(item.status)"
              >
                {{
                  item.status_la
                }}
              </v-chip>
            </template>

            <template v-slot:item.billingable.collect_status_la="{ item }">
              <v-chip
                label
                dark
                :color="findEventStatus(item.billingable.collect_status) ? findEventStatus(item.billingable.collect_status).color : ''"
              >
                {{
                  item.billingable.collect_status_la
                }}
              </v-chip>
            </template>
            <template v-slot:item.created_at="{ item }">
              <div>
                <span>{{ moment(item.created_at).format("DD-MM-YY") }}</span>
              </div>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <br>
      <template>
        <Pagination
          v-if="pagination.total_pages > 1"
          :pagination="pagination"
          :offset="offset"
          @paginate="fetchData()"
        />
      </template>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import { getEventStatus } from '@/Helpers/Customer';
import { getBgColor } from '@/Helpers/BillingStatus';
import invoice from '@views/report/TabCollectionTab/invoiceEvent';
import MoneyCard from '@/components/card/MoneyCard';

export default {
  name: 'InvoiceCollectionEvent',
  mixins: [invoice],
  // props: ["tab"],
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice Collection Event`;
  },
  components: {
    MoneyCard,
  },
  data() {
    return {
      customers: [],
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      headers: [
        { text: 'ວັນທີ', value: 'date', sortable: false },
        { text: 'ໄອດີການເກັບ', value: 'billingable.display_id' },
        { text: 'ລູກຄ້າ', value: 'display_customer_name' },
        { text: 'ໄອດີບິນ', value: 'billing_display_id' },
        // { text: "ຈຳນວນຖົງ", value: "total_bag", sortable: false },
        { text: 'ສ່ວນຫຼຸດ', value: 'discount' },
        { text: 'SubTotal', value: 'sub_total', sortable: false },
        { text: 'Total', value: 'total', sortable: false },
        { text: 'ສະຖານະຊຳລະ', value: 'status_la', sortable: false },
        { text: 'ສະຖານະເກັບ', value: 'billingable.collect_status_la', sortable: false },
        // { text: 'Type', value: 'type', sortable: false },
        // { text: "", value: "actions", sortable: false },
      ],
      getEventStatus,
    };
  },
  watch: {
    tab() {
      if (this.tab == 'tab-1') {
        // this.fetchData();
      }
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    Search() {
      GetOldValueOnInput(this);
    },
    getBgColorFunc(status) {
      return getBgColor(status);
    },

    statusColor(value) {
      if (value == 'success') return 'success';
      if (value == 'pending') return 'primary';
      if (value == 'rejected') return 'error';
      return 'info';
    },
    paymentStatusText(status) {
      if (status == 'pending') return 'ລໍຖ້າເກັບເງິນ';
      if (status == 'to_confirm_payment') return 'ລໍຖ້າຢືນຢັນຊຳລະ';
      if (status == 'rejected') return 'ປະຕິເສດການຊຳລະ';
      if (status == 'success') return 'ຊຳລະສຳເລັດ';
      return '';
    },
    findEventStatus(status) {
      return this.getEventStatus.find((item) => item.en == status);
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
.mx-input {
  height: 40px !important;
}
</style>
