<template>
  <v-container>
    <v-row>
      <v-col>
        <p>ຈັດການຂໍ້ມູນບິນບິນຢ້ອນຫຼັງ</p>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-select
          v-model="selectedPaymentStatus"
          outlined
          dense
          :items="paymentStatus"
          item-value="name"
          label="ສະຖານະບິນ"
          :item-text="filterStatusLao"
          clearable
        />
      </v-col>

      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-account"
          label="ຊື່"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="searchCustomerId"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-account"
          label="ໄອດີລູກຄ້າ"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="searchPhone"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-phone"
          label="ເບີໂທ"
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
          prepend-inner-icon="mdi-note-text-outline"
          label="ໄອດີບິນ"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>

      <v-col class="align-end text-end">
        <v-btn
          class="btn-primary mr-4"
          @click="openAddModal()"
        >
          <v-icon class="mr-2">
            mdi-upload
          </v-icon>
          import ບິນ
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          class="btn-primary"
          @click="choseUser()"
        >
          <v-icon class="mr-2">
            mdi-plus
          </v-icon>
          ສ້າງບິນ
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn
          class="btn-primary mr-4"
          color="green"
          @click="downloadExample()"
        >
          <v-icon class="mr-2">
            mdi-download
          </v-icon>
          ຕົວຢ່າງ import
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="invoices"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.user="{ item }">
              <div v-if="item.billing.user.customer">
                <div v-if="item.billing.user.customer.customer_type = 'home'">
                  {{ item.billing.user.name }}
                </div>
                <div v-else-if="item.billing.user.customer.customer_type = 'company'">
                  {{ item.billing.user.customer.company_name }}
                </div>
              </div>
              <div
                v-else
                class="error--text"
              >
                ຍັງບໍ່ທັນສະໝັກບໍລິການ
              </div>
            </template>
            <template v-slot:item.customerType="{ item }">
              <div v-if="item.billing.user.customer">
                {{ item.billing.user.customer.customer_type_la }}
              </div>
            </template>
            <template v-slot:item.total="{ item }">
              {{ Intl.NumberFormat().format(item.billing.total) }}
            </template>
            <template v-slot:item.sub_total="{ item }">
              {{ Intl.NumberFormat().format(item.billing.sub_total) }}
            </template>
            <template v-slot:item.discount="{ item }">
              {{ Intl.NumberFormat().format(item.billing.discount) }}
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip
                :color="getBgColorFunc(item.billing.status)"
                dark
              >
                {{ getLaoStatusFunc(item.billing.status) }}
              </v-chip>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon
                color="success"
                small
                class="mr-2"
                @click="ViewInvoice(item.billing.id)"
              >
                mdi-eye
              </v-icon>
              <v-icon
                v-if="canDelete(item.billing.status)"
                color="red"
                small
                class="mr-2"
                @click="deleteItem(item.id)"
              >
                mdi-delete
              </v-icon>
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
    </v-row>

    <ModalAdd>
      <template @close="close">
        <v-card class="py-8 px-14">
          <v-card-title>
            <p>Import ບິນຂີ້ເຫື້ຍອ</p>
          </v-card-title>
          <v-card-text>
            <v-container v-if="!imported">
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-file-input
                      v-model="file"
                      show-size
                      label="File "
                      accept="xlsx,xls"
                      outlined
                      dense
                    />
                    <p class="errors">
                      {{ server_errors.file }}
                    </p>
                    <p
                      v-for="(error, index) in errors"
                      :key="index"
                      class="errors"
                    >
                      {{ error }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-container v-else>
              <v-row>
                <v-col>
                  <v-icon color="green">
                    mdi-check-circle
                  </v-icon> ສຳເລັດແລ້ວ {{ importSuccess }} ລາບການ
                </v-col>
              </v-row>
              <v-row v-if="importErrors">
                <v-col>
                  <v-icon color="red">
                    mdi-alert-circle
                  </v-icon> ຜິດພາດ {{ importErrors }} ລາບການ
                </v-col>
              </v-row>
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
                v-if="!imported"
                class="elevation-0 btn btn-primary px-12"
                medium
                :loading="loading"
                :disabled="loading"
                @click="uploadFile"
              >
                Import
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="closeDelete"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteInvoice"
          >
            OK
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import queryOption from '@/Helpers/queryOption';
import { getLaoStatus, getBgColor } from '@/Helpers/BillingStatus';
import { getLaoCustomerType } from '@/Helpers/Customer';

export default {
  name: 'Invoice',
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  data() {
    return {
      tab: null,
      invoices: [],
      billId: null,
      searchPhone: "",
      searchCustomerId: "",
      billingId: '',
      loading: false,
      calendarId: '',
      importSuccess: 0,
      importErrors: null,
      imported: false,
      // Pagination

      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // Add Package
      date: new Date().toISOString().substr(0, 7),
      start_menu: false,
      server_errors: {},
      errors: [],
      file: null,
      // Filter
      selectedPaymentStatus: '',
      paymentStatus: [
        {
          id: 1,
          name: 'created',
        }, {
          id: 2,
          name: 'approved',
        },
        {
          id: 3,
          name: 'to_confirm_payment',
        },
        {
          id: 4,
          name: 'rejected',
        },
        {
          id: 5,
          name: 'success',
        },
      ],

      headers: [
        { text: 'ເລກບິນ', value: 'billing.billing_display_id', width: '150' },
        { text: 'ຫົວບິນ', value: 'billing.content', width: '150' },
        { text: 'ເດືອນ', value: 'billing.bill_month', width: '120' },
        {
          text: 'ລວມທັງໝົດ',
          value: 'total',
          align: 'center',
        }, {
          text: 'ໄອດີລູກຄ້າ',
          value: 'billing.user.customer.customer_id',
          width: '130',
        },
        {
          text: 'ລູກຄ້າ',
          value: 'billing.user.customer.full_name',
          width: '130',
        },

        {
          text: 'ເບີໂທ',
          value: 'billing.user.phone',
          width: '130',
        },
        {
          text: 'ປະເພດລູກຄ້າ',
          value: 'customerType',
          width: '130',
        },
        { text: 'ວັນທີສ້າງ', value: 'created_at', width: '120' },

        {
          text: 'ສະຖານະ',
          value: 'status',
        },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  watch: {
    search(value) {
      this.pagination.current_page = '';
      if (value == '') {
        this.fetchData();
      }
    },
    selectedPaymentStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    file() {
      this.errors = [];
    },

  },
  created() {
    this.fetchData();
  },
  methods: {
    canDelete(status) {
      const billingArray = ['created', 'approved'];
      return billingArray.indexOf(status) != -1;
    },
    getLaoStatusFunc(status) {
      return getLaoStatus(status);
    },
    getBgColorFunc(status) {
      return getBgColor(status);
    },
    filterStatusLao(status) {
      return getLaoStatus(status.name);
    },
    getLaoCustomerType(type) {
      return getLaoCustomerType(type);
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('custom-bill', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { phone: this.searchPhone },
            { customer_id: this.searchCustomerId },
            { billing_status: this.selectedPaymentStatus },
            { order_by: 'newest' },
            { bill_id: this.billId },
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
    Search() {
      this.fetchData();
    },
    async downloadExample() {
      const res = await this.$axios.get('import-old-payment-example');
      window.open(res.data.data.download_link);
    },
    openAddModal() {
      this.$store.commit('modalAdd_State', true);
    },
    closeAddModal() {
      this.file = '';
      this.importSuccess = 0;
      this.imported = false;
      this.importErrors = null;

      this.$store.commit('modalAdd_State', false);
    },
    uploadFile() {
      const formData = new FormData();
      formData.append('file', this.file);
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('import-old-payment', formData)
          .then((res) => {
            this.imported = true;
            this.$store.commit('Loading_State', false);
            if (res.data.code == 200) {
              if (res.data.data.errors || res.data.data.exception) {
                this.importErrors = res.data.data.errors || res.data.data.exception;
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'error',
                  msg: this.importErrors,
                });
              } else if (res.data.data.data) {
                this.fetchData();
                this.$refs.form.reset();
                this.importSuccess = res.data.data.data.length;
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              } else {
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'error',
                  msg: 'ຂໍ້ມູນບໍ່ສາມາດ import ໄດ້ເລີຍ ກະລຸນາກວດໄຟລຄືນໃໝ່',
                });
              }
            }
          })
          .catch((error) => {
            this.imported = true;
            this.$store.commit('Loading_State', false);
            if (error.response) {
              this.$store.commit('Toast_State', {
                value: true,
                color: 'error',
                msg: error.response ? error.response.data.message : 'Something went wrong',
              });
              if (error.response && error.response.status == 422) {
                const obj = error.response.data.errors;
                this.errors = obj;
                for (const [key, data] of Object.entries(obj)) {
                  this.server_errors[key] = data[0];
                }
              }
            } else {
              this.$store.commit('Toast_State', {
                value: true,
                color: 'error',
                msg: `ຂໍ້ຜິດພາດທາງລະບົບ ກະລຸນາຕິດຕໍ່ນັກພັດທະນາ ${error}`,
              });
            }
          });
      }
    },
    choseUser() {
      this.$router.push({
        name: 'chose-customer',
        query: { redirect: 'create-custom-bill' },
      });

      // this.$router.push({
      //   name: "chose-user",
      // });
    },
    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    deleteItem(id) {
      this.billingId = id;
      this.$store.commit('modalDelete_State', true);
    },

    deleteInvoice() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`custom-bill/${this.billingId}`)

        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('modalDelete_State', false);
              this.fetchData();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          this.$store.commit('modalDelete_State', false);
        });
    },
    ViewInvoice(id) {
      const route = this.$router.resolve({ name: 'billing-detail', params: { id } });
      window.open(route.href, '_blank');
    },
    paymentStatusText(status) {
      if (status == 'created') return 'ສ້າງບິນສຳເລັດ';
      if (status == 'approved') return 'ອະນຸມັດສຳເລັດ';
      if (status == 'pending') return 'ລໍຖ້າເກັບເງິນ';
      if (status == 'to_confirm_payment') return 'ລໍຖ້າຢືນຢັນຊຳລະ';
      if (status == 'rejected') return 'ປະຕິເສດການຊຳລະ';
      if (status == 'success') return 'ຊຳລະສຳເລັດ';
      if (status == 'cancel') return 'ຍົກເລີກ';
      return '';
    },
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main";
</style>
