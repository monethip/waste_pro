<template>
  <v-container>
    <v-row class="mb-n6">
      <!--      <v-col cols="3">-->
      <!--        <v-menu-->
      <!--            v-model="start_menu"-->
      <!--            :close-on-content-click="true"-->
      <!--            :nudge-right="40"-->
      <!--            transition="scale-transition"-->
      <!--            offset-y-->
      <!--            min-width="auto"-->
      <!--        >-->
      <!--          <template v-slot:activator="{ on, attrs }">-->
      <!--            <v-text-field-->
      <!--                v-model="month"-->
      <!--                label="ເດືອນ"-->
      <!--                readonly-->
      <!--                outlined-->
      <!--                v-bind="attrs"-->
      <!--                v-on="on"-->
      <!--                dense-->
      <!--                clearable-->
      <!--            ></v-text-field>-->
      <!--          </template>-->
      <!--          <v-date-picker-->
      <!--              v-model="month"-->
      <!--              type="month"-->
      <!--          ></v-date-picker>-->
      <!--        </v-menu>-->
      <!--      </v-col>-->

      <!--      <v-col cols>-->
      <!--        <v-select-->
      <!--            outlined-->
      <!--            dense-->
      <!--            :items="customerTypes"-->
      <!--            v-model="selectedCustomerType"-->
      <!--            item-text="text"-->
      <!--            item-value="value"-->
      <!--            label="ປະເພດລູກຄ້າ"-->
      <!--            clearable-->
      <!--        ></v-select>-->
      <!--      </v-col>-->

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
          <template v-slot:item.content="{ item }">
            <a @click="ViewInvoice(item.id)">{{ item.content }}</a>
          </template>
          <template v-slot:item.payment_method="{ item }">
            <div>{{ getLaoStatusFunc(item.payment_method) }}</div>
          </template>
          <template v-slot:item.user="{ item }">
            <div>{{ showUser(item) }}</div>
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
            <v-icon
              small
              class="mr-2"
              color="success"
              @click="ViewInvoice(item.id)"
            >
              mdi-eye
            </v-icon>
            <v-icon
              small
              class="mr-0"
              color="primary"
              @click="DownloadBill(item)"
            >
              mdi-download
            </v-icon>
            <!--            <v-menu offset-y>-->
            <!--              <template v-slot:activator="{ on, attrs }">-->
            <!--                <v-icon-->
            <!--                    color="primary"-->
            <!--                    dark-->
            <!--                    v-bind="attrs"-->
            <!--                    v-on="on"-->
            <!--                    medium-->
            <!--                    class="mr-2"-->
            <!--                >mdi-dots-vertical</v-icon-->
            <!--                >-->
            <!--              </template>-->
            <!--              <v-list>-->
            <!--                <v-list-item link @click="ViewInvoice(item.id)">-->
            <!--                  <v-list-item-title target="_blank">-->
            <!--                    <v-icon small class="mr-2"> mdi-eye </v-icon>-->
            <!--                    ລາຍລະອຽດ-->
            <!--                  </v-list-item-title>-->
            <!--                </v-list-item>-->
            <!--                <v-list-item link @click="DownloadBill(item)">-->
            <!--                  <v-list-item-title>-->
            <!--                    <v-icon small class="mr-2"> mdi-download </v-icon>-->
            <!--                    Download-->
            <!--                  </v-list-item-title>-->
            <!--                </v-list-item>-->
            <!--              </v-list>-->
            <!--            </v-menu>-->
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
import {
  getLaoBillingType,
  getLaoStatus,
} from '@/Helpers/BillingStatus';

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
      billId: '',
      phone: '',
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
          text: 'ປະເພດຊຳລະ',
          value: 'payment_method',
          align: 'center',
          width: '150px',
        },
        {
          text: 'ວັນທີສ້າງ',
          value: 'created_at',
          width: '150px',
        },
        {
          text: '', value: 'actions', width: '120px', sortable: false,
        },
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
    getLaoStatusFunc(status) {
      return getLaoStatus(status);
    },
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
            { status: 'success' },
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
    DownloadBill(item) {
      window.open(item.download_pdf_link);
    },
    ViewInvoice(id) {
      const route = this.$router.resolve({
        name: 'billing-detail',
        params: { id },
      });
      window.open(route.href, '_blank');
    },
    paymentPage(item) {
      this.payment = item;
      this.$store.commit('modalAdd_State', true);
    },
    CancelBill(item) {
      this.payment = item;
      this.$store.commit('modalAdd_State', true);
    },

    Payment() {
      if (this.paymentType !== '') {
        const formData = new FormData();
        formData.append('payment_method', this.payment_method);
        formData.append('image_payments[]', this.image);
        formData.append('_method', 'PUT');
        if (this.$refs.form.validate() == true) {
          this.$store.commit('Loading_State', true);
          this.$axios
            .post(`pay-billing/${this.payment.id}`, formData)
            .then((res) => {
              if (res.data.code == 200) {
                this.$store.commit('Loading_State', false);
                this.paymentConfirmModal(this.payment);
                this.closeAddModal();
                this.fetchData();
                this.$refs.form.reset();
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }
            })
            .catch((error) => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'error',
                msg: error.response ? error.response.data.message : error,
              });
              if (error.response && error.response.status == 422) {
                const obj = error.response.data.errors;
                for (const [key, data] of Object.entries(obj)) {
                  this.server_errors[key] = data[0];
                }
              }
              this.fetchData();
            });
        }
      } else {
        this.$store.commit('Toast_State', {
          value: true,
          color: 'error',
          msg: 'ກາລຸນາເລືອກປະເພດການຊຳລະກ່ອນ',
        });
      }
    },
    async approveAny() {
      if (this.selectedRows.length) {
        const id = this.selectedRows.map((row) => row.id);
        this.$store.commit('Loading_State', true);
        await this.$axios
          .post('approve-billings', { billing_ids: id })
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit('Loading_State', false);
              this.fetchData();
              this.selectedRows = [];
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }
          })
          .catch((error) => {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : error,
            });
          });
      } else {
        this.$store.commit('Toast_State', {
          value: true,
          color: 'error',
          msg: 'ກາລຸນາເລືອກບິນກ່ອນ',
        });
      }
    },

    async confirmPayment() {
      if (this.confirmType == '0') {
        this.$store.commit('Loading_State', true);
        await this.$axios
          .put(`confirm-billing/${this.confirm.id}`)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.fetchData();
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
                this.closeConfirmModal();
              }, 300);
            }
          })
          .catch(() => {
            this.$store.commit('Loading_State', false);
            this.closeConfirmModal();
          });
      } else if (this.confirmType == '1') {
        const data = new FormData();
        data.append('reject_reason_id', this.reject_reason_id);
        data.append('description', this.description);
        data.append('_method', 'PUT');
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`reject-collection-event-payment/${this.confirm.id}`, data)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.fetchData();
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
                this.closeConfirmModal();
              }, 300);
            }
          })
          .catch((error) => {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : error,
            });
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }
          });
      } else if (this.confirmType == '') {
        this.$store.commit('Toast_State', {
          value: true,
          color: 'error',
          msg: 'ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ',
        });
      } else {
        this.$store.commit('Toast_State', {
          value: true,
          color: 'error',
          msg: 'ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ',
        });
      }
    },

    // confirmReject() {
    //   let data = new FormData();
    //   data.append("reject_reason_id", this.reject_reason_id);
    //   data.append("description", this.description);
    //   data.append("_method", "PUT");
    //   this.$store.commit('Loading_State', true);;
    //   this.$axios
    //     .post("reject-collection-event-payment/" + this.payment.id, data)
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.$store.commit('Loading_State', false);;
    //           this.$store.commit("Toast_State", {
    //             value: true,
    //             color: "success",
    //             msg: res.data.message,
    //           });
    //           this.fetchData();
    //           this.closeConfirmModal();
    //         }, 300);
    //       }
    //     })
    //     .catch((error) => {
    // if(!error.response)
    // this.$store.commit("Toast_State", {
    //   value: true,
    //   color: "error",
    //   msg: 'ຂໍ້ຜິດພາດທາງລະບົບ ກະລຸນາຕິດຕໍ່ນັກພັດທະນາ ' + error,
    // });
    //       this.$store.commit('Loading_State', false);;
    //       this.$store.commit("Toast_State", {
    //         value: true,
    //         color: "error",
    //         msg: error.response ? error.response.data.message : error,
    //       });
    //       if (error.response && error.response.status == 422) {
    //         var obj = error.response.data.errors;
    //         for (let [key, data] of Object.entries(obj)) {
    //           this.server_errors[key] = data[0];
    //         }
    //       }
    //     });
    // },
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
    paymentConfirmModal(item) {
      this.fetchReject();
      this.confirm = item;
      this.paymentDialog = true;
    },
    closeConfirmModal() {
      this.paymentDialog = false;
      this.confirmType = '';
    },

    Search() {
      this.fetchData();
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
