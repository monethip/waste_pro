<template>
  <div>
    <v-row>
      <v-col>
        <p>
          ລວມບິນ
          <span class="primary-color">({{ pagination.total }})</span>
        </p>
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedCustomerType"
          outlined
          dense
          :items="customer_types"
          item-text="display"
          item-value="name"
          label="ປະເພດລູກຄ້າ"
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedUser"
          outlined
          dense
          :items="users"
          item-text="name"
          item-value="id"
          label="User"
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedPlan"
          outlined
          dense
          :items="plans"
          item-text="name"
          item-value="id"
          label="ແຜນເສັ້ນທາງ"
          multiple
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedDistrict"
          outlined
          dense
          :items="districts"
          item-text="name"
          item-value="id"
          label="ເມືອງ"
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedVillage"
          outlined
          dense
          :items="villages"
          item-text="name"
          item-value="id"
          label="ບ້ານ"
          multiple
        />
      </v-col>
    </v-row>
    <div>
      <v-data-table
        :headers="headers"
        :items="invoices"
        :disable-pagination="true"
        hide-default-footer
        fixed-header
        height="100vh"
      >
        <template v-slot:item.customer="{ item }">
          <div v-if="(item.customer.customer_type = 'company')">
            {{ item.customer.company_name }}
          </div>
          <div>{{ item.customer.name }}</div>
        </template>
        <template v-slot:item.total_bag="{ item }">
          <v-chip color="success">
            {{ item.total_bag }}
          </v-chip>
        </template>
        <template v-slot:item.exceed_bag="{ item }">
          <v-chip color="error">
            {{ item.exceed_bag }}
          </v-chip>
        </template>
        <template v-slot:item.exceed_bag_charge="{ item }">
          <div>
            {{ Intl.NumberFormat().format(item.exceed_bag_charge) }}
          </div>
        </template>
        <template v-slot:item.new_exceed_bag_charge="{ item }">
          <div class="error--text">
            {{ Intl.NumberFormat().format(item.new_exceed_bag_charge) }}
          </div>
        </template>
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
                @click="viewPage(item.id)"
              >
                <v-list-item-title>
                  <v-icon small>
                    mdi-eye
                  </v-icon>
                  ລາຍລະອຽດ
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                link
                @click="PaymentPage(item.id)"
              >
                <v-list-item-title>
                  <v-icon small>
                    mdi-credit-card
                  </v-icon>
                  ຊຳລະບິນ
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table><br>
      <template>
        <Pagination
          v-if="pagination.total_pages > 1"
          :pagination="pagination"
          :offset="offset"
          @paginate="fetchApproveData()"
        />
      </template>
    </div>
  </div>
</template>

<script>
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Approved',
  props: ['tab'],
  data() {
    return {
      loading: false,
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 20,
      invoices: [],
      server_errors: {},
      selectedStatus: ['approved'],
      plans: [],
      selectedPlan: [],
      // Filter
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: [],
      selectedUser: '',
      users: [],

      selectedCustomerType: 'home',
      customer_types: [
        {
          name: 'home',
          display: 'ຄົວເຮືອນ',
        },
        {
          name: 'company',
          display: 'ບໍລິສັດ',
        },
      ],

      headers: [
        { text: 'InvoiceId', value: 'invoice_id' },
        { text: 'ລູກຄ້າ', value: 'customer' },
        {
          text: 'ຈຳນວນຖົງ',
          value: 'total_bag',
          sortable: false,
          align: 'center',
        },
        {
          text: 'ຈຳນວນຖົງເກີນ',
          value: 'exceed_bag',
          sortable: false,
          align: 'center',
        },
        {
          text: 'ຈຳນວນເງິນ',
          value: 'exceed_bag_charge',
          sortable: false,
        },
        {
          text: 'ຈຳນວນເງິນໄລ່ເພີ່ມ',
          value: 'new_exceed_bag_charge',
          sortable: false,
        },
        { text: 'ສ່ວນຫຼຸດ', value: 'discount' },
        {
          text: 'SubTotal',
          value: 'sub_total',
          sortable: false,
        },
        { text: 'Total', value: 'total', sortable: false },
        { text: 'Type', value: 'type', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  watch: {
    tab() {
      if (this.tab == 'tab-2') {
        this.fetchApproveData();
      }
    },
    selectedCustomerType() {
      this.fetchApproveData();
    },
    selectedPlan() {
      this.fetchApproveData();
    },

    selectedVillage() {
      this.fetchApproveData();
    },
    selectedDistrict() {
      this.fetchVillage();
      this.fetchApproveData();
    },
    selectedUser() {
      this.fetchApproveData();
    },
  },
  created() {
    this.fetchUser();
    this.fetchApproveData();
    this.fetchRoutePlan();
    this.fetchAddress();
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    onFileChange(e) {
      const input = e.target;
      const file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    fetchApproveData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`plan-month/${this.$route.params.id}/invoice`, {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { villages: this.selectedVillage },
            { statuses: this.selectedStatus },
            { route_plans: this.selectedPlan },
            { customer_type: this.selectedCustomerType },
            { user_id: this.selectedUser },
            { district_id: this.selectedDistrict }]),
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
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
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

    fetchAddress() {
      this.$axios
        .get('info/address', { params: { filter: 'ນະຄອນຫລວງວຽງຈັນ' } })
        .then((res) => {
          if (res.data.code == 200) {
            this.address = res.data.data;
            this.address.map((item) => {
              this.districts = item.districts;
            });
          }
        })
        .catch(() => {});
    },

    fetchVillage() {
      this.$axios
        .get(`info/district/${this.selectedDistrict}/village`)
        .then((res) => {
          if (res.data.code == 200) {
            this.villages = res.data.data;
          }
        })
        .catch(() => {});
    },
    fetchUser() {
      this.$axios
        .get('user-setting/user', {
          params: {
            roles: ['admin'],
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.users = res.data.data;
          }
        })
        .catch(() => {
        });
    },

    Payment() {
      const formData = new FormData();
      formData.append('payment_method', this.payment_method);
      formData.append('image', this.image);
      formData.append('bcel_reference_number', this.bcel_reference_number);
      formData.append('_method', 'PUT');

      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`pay-invoice/${this.invoiceItem.id}`, formData)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeEditModal();
                this.fetchApproveData();
                this.$refs.form.reset();
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
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              const errMsg = {};
              for (const [key, customer] of Object.entries(obj)) {
                errMsg[key] = customer[0];
              }
              this.server_errors = errMsg;
            }
            this.fetchApproveData();
          });
      }
    },

    viewPage(id) {
      this.$router.push({
        name: 'InvoiceDetail',
        params: { id },
      });
    },
    PaymentPage(id) {
      this.$router.push({
        name: 'Payment',
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
