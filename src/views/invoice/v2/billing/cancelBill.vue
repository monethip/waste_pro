<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col cols>
        <v-select
          v-model="selectedRoutePlan"
          outlined
          dense
          :items="plans"
          item-text="name"
          item-value="id"
          label="ເລືອກແຜນ"
          clearable
        />
      </v-col>
      <v-col cols>
        <v-select
          v-model="selectedBillingable_type"
          outlined
          dense
          :items="billingable_types"
          :item-text="filterBillingType"
          item-value="name"
          label="ປະເພດບິນ"
          clearable
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="billId"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ເລກບິນ"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="phone"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ເບີໂທ"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>

    <v-card>
      <v-card-title>
        ຂໍ້ມູນບີນ ({{ pagination.total }})
        <v-divider
          class="mx-4"
          vertical
        />
        <v-spacer />
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="invoices"
          :search="search"
          :disable-pagination="true"
          hide-default-footer
          fixed-header
        >
          <template v-slot:item.user="{ item }">
            <div>{{ showUser(item) }}</div>
          </template>
          <template v-slot:item.sub_total="{ item }">
            <td>{{ Intl.NumberFormat().format(item.sub_total) }}</td>
          </template>
          <template v-slot:item.total="{ item }">
            <td>{{ Intl.NumberFormat().format(item.total) }}</td>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="primary"
                  dark
                  v-bind="attrs"
                  medium
                  class="mr-2"
                  v-on="on"
                >
                  mdi-dots-vertical
                </v-icon>
              </template>
              <v-list>
                <v-list-item
                  link
                  @click="ViewInvoice(item.id)"
                >
                  <v-list-item-title>
                    <v-icon
                      small
                      class="mr-2"
                    >
                      mdi-eye
                    </v-icon>
                    ລາຍລະອຽດ
                  </v-list-item-title>
                </v-list-item>
                <v-list-item
                  link
                  @click="DownloadBill(item.id)"
                >
                  <v-list-item-title>
                    <v-icon
                      small
                      class="mr-2"
                    >
                      mdi-download
                    </v-icon>
                    ດາວໂຫຼດບິນ
                  </v-list-item-title>
                </v-list-item>

                <!--                <v-list-item link>-->
                <!--                  <v-list-item-title @click="CancelBill(item)">-->
                <!--                    <v-icon small class="mr-2"> mdi-download </v-icon>-->
                <!--                    Download-->
                <!--                  </v-list-item-title>-->
                <!--                </v-list-item>-->
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
        <br>
        <template>
          <Pagination
            v-if="pagination.total_pages > 1"
            :pagination="pagination"
            :offset="offset"
            @paginate="fetchData()"
          />
        </template>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import { GetOldValueOnInput } from "@/Helpers/GetValue";

import queryOption from '@/Helpers/queryOption';
import { getLaoBillingType } from '@/Helpers/BillingStatus';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: 'Collection',
      month: '',
      curent_month: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000,
      )
        .toISOString()
        .substr(0, 10),
      start_menu: false,

      invoices: [],
      loading: false,
      customerId: '',
      selectedRows: [],

      plans: [],
      selectedRoutePlan: '',
      lastMonthBillPaid: localStorage.getItem('lastMonthBillPaid'),
      lastMonthBill: localStorage.getItem('lastMonthBill'),
      selectedCustomerType: '',
      customerTypes: [
        {
          text: 'ຄົວເຮືອນ',
          value: 'home',
        },
        {
          text: 'ຫົວໜ່ວຍທຸລະກິດ',
          value: 'company',
        },
      ],
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      server_errors: {},
      summaryData: {},
      selectedPaymentStatus: '',
      paymentStatus: [
        {
          id: 1,
          name: 'pending',
          dis_play: 'ລໍຖ້າເກັບເງິນ',
        },
        {
          id: 2,
          name: 'to_confirm_payment',
          dis_play: 'ລໍຖ້າຢືນຢັນຊຳລະ',
        },
        {
          id: 3,
          name: 'rejected',
          dis_play: 'ປະຕິເສດການຊຳລະ',
        },
        {
          id: 4,
          name: 'success',
          dis_play: 'ຊຳລະສຳເລັດ',
        },
      ],
      billingable_types: [
        {
          id: 1,
          name: 'FutureInvoice',
        },
        {
          id: 2,
          name: 'NewInvoice',
        },
        {
          id: 3,
          name: 'NewCollectionEvent',
        },
        {
          id: 4,
          name: 'CustomBill',
        },
      ],
      selectedBillingable_type: '',

      user: {},
      item: {},

      // Payment
      image: '',
      imageUrl: '',
      // bcel_reference_number: "",
      payment_method: '',
      paymentType: '',
      confirmType: '',
      paymentDialog: false,
      rejects: [],
      reject_reason_id: '',
      description: '',
      paymentTypeRule: [(v) => !!v || 'Name is required'],
      payment: {},
      confirm: {},
      headers: [
        { text: 'ເລກບິນ', value: 'billing_display_id' },
        { text: 'ຫົວບິນ', value: 'content', width: '200px' },
        {
          text: 'ເດືອນ',
          value: 'bill_month',
          width: '180px',
        },
        { text: 'ລູກຄ້າ', value: 'display_customer_name', width: '150px' },
        { text: 'ເບີໂທ', value: 'display_customer_phone', sortable: false },
        { text: 'ຊ່ອງທາງຊຳລະ', value: 'payment_method', width: '150px' },
        { text: 'ສ່ວນຫຼຸດ', value: 'discount', width: '150px' },
        { text: 'ຄ່າບໍລິການ', value: 'sub_total' },
        { text: 'ລວມທັງໝົດ', value: 'total', sortable: false },
        {
          text: 'Created',
          value: 'created_at',
          align: 'center',
          width: '200px',
        },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  computed: {
    lastMonthCreated() {
      return this.$store.getters['auth/getLastMonthBill'];
    },
    lastMonthBillCreated() {
      return this.$store.getters['auth/getLastMonthBillPaid'];
    },
  },
  watch: {
    selectedCollectionStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    lastMonthBill(value) {
      this.$store.dispatch('auth/saveLastMonthBill', value);
    },
    lastMonthBillPaid(value) {
      this.$store.dispatch('auth/saveLastMonthBillPaid', value);
    },

    lastMonthCreated() {
      this.fetchData();
    },
    lastMonthBillCreated() {
      this.fetchData();
    },
    selectedBillingable_type() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedRoutePlan() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCustomerType() {
      this.pagination.current_page = '';
      this.fetchData();
    },

    month(value) {
      if (value !== '') {
        this.pagination.current_page = '';
        this.fetchData();
      }
    },
    search(value) {
      this.pagination = {};
      if (value == '') {
        this.fetchData();
      }
    },
    selectedStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedPackage() {
      this.server_errors.package_id = '';
    },
    start_date() {
      this.server_errors.start_month = '';
    },

    paymentType() {
      if (this.paymentType == 0) {
        this.payment_method = 'cash';
        this.image = '';
        this.imageUrl = '';
        // this.bcel_reference_number = "";
      } else if (this.paymentType == 1) {
        this.payment_method = 'bcel';
      }
      this.server_errors.payment_method = '';
    },
    image() {
      this.server_errors.image = '';
    },
  },
  created() {
    this.month = this.moment(this.curent_month).format('YYYY-MM');
    this.fetchData();
    this.fetchRoutePlan();
  },
  methods: {
    filterBillingType(status) {
      return getLaoBillingType(status.name);
    },
    onFileChange(e) {
      const input = e.target;
      const file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    fetchData() {
      // let date = this.moment(this.month).format('YYYY-MM');
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('billing', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { billingable_type: this.selectedBillingable_type },
            { created_month: this.lastMonthCreated },
            { bill_month: this.lastMonthBillCreated },
            { order_by: 'newest' },
            { status: 'canceled' },
            { route_plans: this.selectedRoutePlan },
            { bill_id: this.billId },
            { phone: this.phone },
            { customer_type: this.selectedCustomerType },
            { filter: this.search },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.invoices = res.data.data.data;
            this.pagination = res.data.data.pagination;
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
    fetchRoutePlan() {
      this.$axios
        .get('route-plan')
        .then((res) => {
          if (res.data.code == 200) {
            this.plans = res.data.data;
          }
        })
        .catch(() => {});
    },

    fetchReject() {
      this.$axios
        .get('reject-reason')
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.rejects = res.data.data;
          }
        })
        .catch(() => {});
    },

    closeAddModal() {
      this.paymentType = '';
      this.$store.commit('modalAdd_State', false);
    },
    createPage() {
      this.$router.push({
        name: 'CreateCollectionEventInvoice',
      });
    },
    editPage(id) {
      this.$router.push({
        name: 'EditCollectionEventInvoice',
        params: { id },
      });
    },
    ViewInvoice(id) {
      const route = this.$router.resolve({
        name: 'billing-detail',
        params: { id },
      });
      window.open(route.href, '_blank');
    },
    DownloadBill(item) {
      window.open(item.download_pdf_link);
    },

    Search() {
      this.fetchData();
    },
    statusColor(value) {
      if (value == 'active') return 'success';
      if (value == 'inactive') return 'error';
      return '';
    },

    collectStatus(status) {
      if (status == 'requested') return 'ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ';
      if (status == 'rejected') return 'ປະຕິເສດເກັບຂີ້ເຫື້ຍອ';
      if (status == 'approved') return 'ອະນຸມັດເກັບຂີ້ເຫື້ຍອ';
      if (status == 'collected') return 'ເກັບຂີເຫື້ຍອສຳເລັດ';
      if (status == 'collect_confirm') return 'ລູກຄ້າຢືນຢັນການເກັບ';
      if (status == 'collect_reject') return 'ການເກັບຖືກປະຕິເສດ';
      return '';
    },

    showUser(item) {
      if (item.display_type === 'NewCollectionEvent') {
        if (item.billingable != null) return item.billingable.name;
      } else {
        if (item.user.customer != null) {
          return item.user.customer.name;
        }
        return item.user.name;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../public/scss/main.scss";

.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
td {
  min-width: 130px !important;
}

.page--table {
  .page {
    &__table {
      margin-top: 20px;
    }

    &__grab-icon {
      cursor: move;
    }
  }
}

.sum-total {
  color: #000000;
}
</style>
