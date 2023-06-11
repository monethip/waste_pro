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

    <v-row>
      <v-col
        v-for="selectedItem in selected"
        :key="selectedItem.id"
      >
        <v-chip
          class="ma-2"
          close
          color="orange"
          label
          outlined
          style="width: 100%;"
          @click:close="removeSelectedItem(selectedItem.id)"
        >
          {{ selectedItem.billing_display_id }}: {{ `${selectedItem.display_customer_name} ${selectedItem.date}(${selectedItem.total})` }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row v-if="selected.length">
      <v-col>
        <v-dialog
          v-model="del_dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="red"
              dark
              v-bind="attrs"
              v-on="on"
            >
              ລຶບບິນທີ່ເລືອກ
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              ຢືນຢັນການລືບ
            </v-card-title>

            <v-card-text>
              ທ່ານຢືນຢັນທີ່ຈະລຶບບິນເຫຼົ່ານີ້ບໍ່
              <v-row>
                <v-col
                  v-for="selectedItem in selected"
                  :key="selectedItem.id"
                >
                  <v-chip
                    class="ma-2"
                    color="orange"
                    label
                    outlined
                    style="width: 100%;"
                  >
                    {{ selectedItem.billing_display_id }}: {{ `${selectedItem.display_customer_name} ${selectedItem.date}(${selectedItem.total})` }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                :loading="loading"
                @click="deleteBill"
              >
                ຢືນຢັນ
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div>
          <v-card>
            <v-tabs
              v-model="tab"
              background-color="red red darken-4"
              dark
              slider-color="indigo lighten-5"
            >
              <v-tab href="#tab-1">
                <v-icon>mdi-account</v-icon>
                ຂໍ້ມູນບີນ ({{ pagination.total }})
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-1">
                <v-card>
                  <v-card-text>
                    <v-data-table
                      v-model="selected"
                      :headers="headers"
                      :items="invoices"
                      :search="search"
                      :disable-pagination="true"
                      hide-default-footer
                      fixed-header
                      show-select
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
                      <template v-slot:item.status="{ item }">
                        <div>{{ collectStatus(item.status) }}</div>
                      </template>
                      <template v-slot:item.status_la="{ item }">
                        <v-chip
                          :color="getBgColorFunc(item.status)"
                          dark
                        >
                          {{
                            item.status_la
                          }}
                        </v-chip>
                      </template>
                      <template v-slot:item.actions="{ item }">
                        <v-col>
                          <v-btn
                            class="btn elevation-0"
                            color="info"
                            small
                            @click="ViewInvoice(item.id)"
                          >
                            <v-icon
                              class="mr-1"
                              small
                            >
                              mdi-eye
                            </v-icon>
                          </v-btn>
                        </v-col>
                        <v-col>
                          <v-btn
                            class="btn elevation-0"
                            color="info"
                            small
                            @click="EditInvoice(item)"
                          >
                            <v-icon
                              class="mr-1"
                              small
                            >
                              mdi-pen
                            </v-icon>
                          </v-btn>
                        </v-col>
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
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <ModalAdd>
      <template @close="close">
        <v-card class="py-8 px-14">
          <v-card-title>
            <p>ແກ້ໄຂຂໍ້ມູນ <strong>{{ formData.billing_display_id }}: {{ `${formData.display_customer_name} ${formData.date}(${formData.total})` }}</strong></p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row
                  v-for="detail in formData.billing_details"
                  :key="detail.id"
                >
                  <v-row>
                    <v-col cols="12">
                      <h3 class="my-4">
                        {{ detail.content }}
                      </h3>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="detail.quantity"
                        label="Quantity"
                        outlined
                        dense
                        type="number"
                        class="input-number"
                      />
                      <p class="errors">
                        {{ server_errors.qty }}
                      </p>
                    </v-col>
                    <v-col>
                      <v-text-field
                        v-model="detail.price"
                        label="Price"
                        outlined
                        dense
                        type="number"
                        class="input-number"
                      />
                      <p class="errors">
                        {{ server_errors.price }}
                      </p>
                    </v-col>
                    <v-col>
                      <span>ລວມ: {{ calculateTotal(detail) }}</span>
                    </v-col>
                  </v-row>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="error"
                class="elevation-0 btn mr-4 px-12"
                medium
                @click="closeAddModal()"
              >
                ປິດ
              </v-btn>
              <v-btn
                class="elevation-0 btn btn-primary px-12"
                medium
                :loading="loading"
                :disabled="loading"
                @click="updateInvoiceDetail()"
              >
                ອັບເດດ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>
  </v-container>
</template>

<script>
// //import { GetOldValueOnInput } from "@/Helpers/GetValue";

import queryOption from '@/Helpers/queryOption';
import {
  getLaoBillingType,
  payment_methods,
  getBgColor,
} from '@/Helpers/BillingStatus';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: 'Collection',
      tab: 'tab-1',
      selected: [],
      formData: {},
      lastRemoved: [],
      del_dialog: false,
      sale_mode: "",
      paymentMethods: payment_methods,
      selectedPaymentMethod: '',
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
      phone: '',
      oldVal: '',
      server_errors: {},

      summaryData: {},
      billId: '',
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
      paymentTypeRule: [(v) => !!v || 'Payment is required'],
      payment: {},
      confirm: {},
      headers: [
        { text: 'ເລກບິນ', value: 'billing_display_id' },
        { text: 'ຫົວບິນ', value: 'content', width: '150px' },
        {
          text: 'ເດືອນ',
          value: 'bill_month',
          width: '180px',
        },
        { text: 'ສະຖານະ', value: 'status_la', width: '150px' },
        { text: 'ລູກຄ້າ', value: 'display_customer_name', width: '150px' },
        { text: 'ເບີໂທ', value: 'display_customer_phone', sortable: false },
        { text: 'ຊ່ອງທາງຊຳລະ', value: 'payment_method', width: '150px' },
        { text: 'ສ່ວນຫຼຸດ', value: 'discount', width: '150px' },
        { text: 'ຄ່າບໍລິການ', value: 'sub_total' },
        { text: 'ລວມທັງໝົດ', value: 'total', sortable: false },
        {
          text: 'ວັນທີສ້າງ',
          value: 'created_at',
          width: '150px',
        },
        {
          text: '', value: 'actions', sortable: false, width: '150px',
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
      this.pagination.current_page = '';
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
    async updateInvoiceDetail() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        const items = [];
        for (const item of this.formData.billing_details) {
          items.push({
            qty: item.quantity,
            price: item.price,
            id: item.id,
          });
        }
        this.closeAddModal();
        await this.$axios
          .put(`super-billing-detail/${this.formData.id}`, {
            items,
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit('Loading_State', false);
              this.fetchData();
              this.formData = {};
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
      }
    },
    calculateTotal(detail) {
      return detail.quantity * detail.price;
    },
    EditInvoice(item) {
      this.formData = item;
      this.$store.commit('modalAdd_State', true);
    },
    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },
    deleteBill() {
      const BillIds = [];
      for (const item of this.selected) {
        BillIds.push(item.id);
      }
      const body = {
        billing_ids: BillIds,
      };

      this.$store.commit('Loading_State', true);
      this.del_dialog = false;
      this.$axios
        .post(`super-billing`, body)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.data = {};
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.lastRemoved = this.selected;
              this.selected = [];
              this.fetchData();
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, customer] of Object.entries(obj)) {
              this.server_errors[key] = customer[0];
            }
          }
          this.$store.commit('Loading_State', false);
        });
    },
    getBgColorFunc(status) {
      return getBgColor(status);
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
            { route_plans: this.selectedRoutePlan },
            { bill_id: this.billId },
            { phone: this.phone },
            { customer_type: this.selectedCustomerType },
            { filter: this.search },
            { order_by: 'newest' },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            if (this.lastRemoved.length) {
              this.invoices = res.data.data.data.filter((invoice) => !this.lastRemoved.some((removeItem) => removeItem.id === invoice.id),
              );
            } else {
              this.invoices = res.data.data.data;
            }

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
    paymentPage(item) {
      this.payment = item;
      this.$store.commit('modalAdd_State', true);
    },

    Search() {
      // GetOldValueOnInput(this);
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
    paymentStatusText(status) {
      if (status == 'pending') return 'ລໍຖ້າເກັບເງິນ';
      if (status == 'to_confirm_payment') return 'ລໍຖ້າຢືນຢັນຊຳລະ';
      if (status == 'rejected') return 'ປະຕິເສດການຊຳລະ';
      if (status == 'success') return 'ຊຳລະສຳເລັດ';
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
