<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col cols>
        <v-select outlined dense :items="plans" v-model="selectedRoutePlan" item-text="name" item-value="id"
          label="ເລືອກແຜນ" clearable></v-select>
      </v-col>
      <v-col cols>
        <v-select outlined dense :items="billingable_types" v-model="selectedBillingable_type"
          :item-text="filterBillingType" item-value="name" label="ປະເພດບິນ" clearable></v-select>
      </v-col>
      <v-col>
        <v-text-field outlined dense clearable prepend-inner-icon="mdi-magnify" label="ຊື່ລູກຄ້າ" type="text"
          v-model="search" @keyup.enter="Search()">
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field outlined dense clearable prepend-inner-icon="mdi-magnify" label="ເລກບິນ" type="text"
          v-model="billId" @keyup.enter="Search()">
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field outlined dense clearable prepend-inner-icon="mdi-magnify" label="ເບີໂທ" type="text"
          v-model="phone" @keyup.enter="Search()">
        </v-text-field>
      </v-col>
    </v-row>

    <v-card>
      <v-card-title>
        ຂໍ້ມູນບີນ ({{ pagination.total }})
        <v-divider class="mx-4" vertical></v-divider>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="invoices" :search="search" :disable-pagination="true"
          hide-default-footer fixed-header>
          <template v-slot:item.user="{ item }">
            <div>{{ showUser(item) }}</div>
          </template>
          <template v-slot:item.reject="{ item }">
            <div>
              {{ item.reject_details[0].reject_reason.name }}
            </div>
          </template>
          <template v-slot:item.description="{ item }">

            <div>
              {{ item.reject_details[0].description }}
            </div>
          </template>
          <template v-slot:item.payment_method="{ item }">
            <div>{{ getLaoStatusFunc(item.payment_method) }}</div>
          </template>
          <template v-slot:item.sub_total="{ item }">
            <td>{{ Intl.NumberFormat().format(item.sub_total) }}</td>
          </template>
          <template v-slot:item.total="{ item }">
            <td>{{ Intl.NumberFormat().format(item.total) }}</td>
          </template>
          <template v-slot:item.status="{ item }">
            <div>{{ collectStatus(item.status) }}</div>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="ViewInvoice(item.id)"> mdi-eye </v-icon>
            <v-icon small class="mr-2" @click="DownloadBill(item)"> mdi-download </v-icon>
          </template>

        </v-data-table>
        <br />
        <template>
          <Pagination v-if="pagination.total_pages > 1" :pagination="pagination" :offset="offset"
            @paginate="fetchData()"></Pagination>
        </template>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
//import { GetOldValueOnInput } from "@/Helpers/GetValue";

import queryOption from "@/Helpers/queryOption";
import { getLaoBillingType, getLaoStatus } from "@/Helpers/BillingStatus";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: "Collection",
      month: "",
      curent_month: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      start_menu: false,

      invoices: [],
      loading: false,
      customerId: "",
      selectedRows: [],

      plans: [],
      selectedRoutePlan: "",
      lastMonthBill: localStorage.getItem("lastMonthBill"),
      selectedCustomerType: "",
      customerTypes: [
        {
          text: "ຄົວເຮືອນ",
          value: "home"
        }, {
          text: "ຫົວໜ່ວຍທຸລະກິດ",
          value: "company"
        }
      ],
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      server_errors: {},
      selectedCollectionStatus: "",
      summaryData: {},
      billId: "",
      phone: "",
      billingable_types: [
        {
          id: 1,
          name: "FutureInvoice",
        },
        {
          id: 2,
          name: "NewInvoice",
        }, {
          id: 3,
          name: "NewCollectionEvent",
        }, {
          id: 4,
          name: "CustomBill",
        },
      ],
      selectedBillingable_type: "",

      user: {},
      item: {},

      //Payment
      image: "",
      imageUrl: "",
      // bcel_reference_number: "",
      payment_method: "",
      paymentType: "",
      confirmType: "",
      paymentDialog: false,
      rejects: [],
      reject_reason_id: "",
      description: "",
      paymentTypeRule: [(v) => !!v || "Name is required"],
      payment: {},
      confirm: {},
      headers: [
        { text: "ເລກບິນ", value: "billing_display_id" },
        { text: "ຫົວບິນ", value: "content", width: "200px" },
        {
          text: "ເດືອນ",
          value: "bill_month",
          width: "180px"
        },
        { text: "ລູກຄ້າ", value: "user", width: "120px" },
        { text: "ເບີໂທ", value: "user.phone", sortable: false, width: "120px" },
        { text: "ເຫດຜົນ", value: "reject", width: "150px" },
        { text: "ລາຍລະອຽດ", value: "description", width: "150px" },
        { text: "ຄ່າບໍລິການ", value: "sub_total", width: "120px" },
        { text: "ລວມທັງໝົດ", value: "total", sortable: false, width: "120px" },
        { text: "ປະເພດຊຳລະ", value: "payment_method", width: "200px" },
        {
          text: "Created",
          value: "created_at",
          width: "150px"
        },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    lastMonthCreated() {
      return this.$store.getters['auth/getLastMonthBill']
    }
  },
  methods: {
    getLaoStatusFunc(status) {
      return getLaoStatus(status)
    },
    filterBillingType(status) {
      return getLaoBillingType(status.name)
    },
    fetchData() {
      // let date = this.moment(this.month).format('YYYY-MM');
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("billing", {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { billingable_type: this.selectedBillingable_type },
            { created_month: this.lastMonthCreated },
            { order_by: 'newest' },
            { status: 'rejected' },
            { route_plans: this.selectedRoutePlan },
            { bill_id: this.billId },
            { phone: this.phone },
            { customer_type: this.selectedCustomerType },
            { filter: this.search },
          ])
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.invoices = res.data.data.data;
            this.pagination = res.data.data.pagination;
          }
        })
        .catch((error) => {

          this.$store.commit("Loading_State", false);
          if (error.response && error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchRoutePlan() {
      this.$axios
        .get("route-plan")
        .then((res) => {
          if (res.data.code == 200) {
            this.plans = res.data.data;
          }
        })
        .catch(() => { });
    },
    fetchReject() {
      this.$axios
        .get("reject-reason")
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.rejects = res.data.data;
          }
        })
        .catch(() => {
        });
    },

    closeAddModal() {
      this.paymentType = "";
      this.$store.commit("modalAdd_State", false);
    },

    ViewInvoice(id) {
      let route = this.$router.resolve({ name: 'billing-detail', params: { id } });
      window.open(route.href, '_blank');
    },
    DownloadBill(item) {
      window.open(item.download_pdf_link);
    },
    Search() {
      this.fetchData();
    },
    statusColor(value) {
      if (value == "active") return "success";
      else if (value == "inactive") return "error";
      else return "";
    },
    showUser(item) {
      if (item.display_type === "NewCollectionEvent") {
        if (item.billingable != null)
          return item.billingable.name;
      } else {
        if (item.user.customer != null) {
          return item.user.customer.name
        } else {
          return item.user.name;
        }
      }
    },
  },
  watch: {
    selectedCollectionStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    lastMonthBill: function (value) {
      this.$store.dispatch('auth/saveLastMonthBill', value);
    },
    lastMonthCreated: function () {
      this.fetchData()
    },
    selectedBillingable_type: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedRoutePlan: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCustomerType: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },

    month: function (value) {
      if (value !== '') {
        this.pagination.current_page = '';
        this.fetchData();
      }
    },
    search: function (value) {
      this.pagination.current_page = '';
      if (value == "") {
        this.fetchData();
      }
    },
    selectedStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedPackage: function () {
      this.server_errors.package_id = "";
    },
    start_date: function () {
      this.server_errors.start_month = "";
    },

    paymentType: function () {
      if (this.paymentType == 0) {
        this.payment_method = "cash";
        this.image = "";
        this.imageUrl = "";
        // this.bcel_reference_number = "";
      } else if (this.paymentType == 1) {
        this.payment_method = "bcel";
      }
      this.server_errors.payment_method = "";
    },
    image: function () {
      this.server_errors.image = "";
    },
  },
  created() {
    this.month = this.moment(this.curent_month).format('YYYY-MM');
    this.fetchData();
    this.fetchRoutePlan();
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../public/scss/main.scss";

.v-data-table>.v-data-table__wrapper>table>thead>tr>th,
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
