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
              <v-list-item link>
                <v-list-item-title @click="viewPage(item.id)">
                  <v-icon
                    small
                    class="mr-2"
                  >
                    mdi-eye
                  </v-icon>
                  ລາຍລະອຽດ
                </v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-list-item-title @click="paymentModal(item)">
                  <v-icon small>
                    mdi-credit-card
                  </v-icon>
                  ຢືນຢັນການຊຳລະ
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
          @paginate="fetchData()"
        />
      </template>
    </div>
    <!-- confirm payment -->
    <v-dialog
      v-model="confirmDialog"
      max-width="620px"
    >
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>
              <v-icon
                class="primary-color"
                large
                color="success"
              >
                mdi-checkbox-marked-circle-outline
              </v-icon>
              ຢືນຢັນການຊຳລະ
              <span
                v-if="editItem.customer"
                class="primary-color"
              >{{ editItem.customer.name }}
                {{ editItem.customer.surname }}</span>
            </p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-chip-group
                      v-model="confirmType"
                      column
                    >
                      <v-chip
                        medium
                        class="mr-6"
                        color="success"
                        label
                        filter
                        outlined
                      >
                        ຢືນຢັນການຊຳລະ
                        <v-icon
                          left
                          class="ml-1"
                        >
                          mdi-account-check-outline
                        </v-icon>
                      </v-chip>
                      <v-chip
                        medium
                        color="error"
                        label
                        filter
                        outlined
                      >
                        ຊຳລະບໍຜ່ານ
                        <v-icon
                          class="ml-1"
                          left
                        >
                          mdi-account-cancel
                        </v-icon>
                      </v-chip>
                    </v-chip-group>
                  </v-col>
                </v-row>
                <div v-if="confirmType == 1">
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        v-model="reject_reason_id"
                        label="ເລກລະຫັດການຊຳລະ"
                        outlined
                        dense
                        :items="rejects"
                        item-text="name"
                        item-value="id"
                      />
                      <p class="errors">
                        {{ server_errors.reject_reason_id }}
                      </p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="description"
                        label="Description"
                        outlined
                        dense
                        type="text"
                      />
                      <p class="errors">
                        {{ server_errors.description }}
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-divider />
                    <v-card-actions>
                      <v-btn
                        color="blue darken-1"
                        class="white--text px-12 c-btn"
                        large
                        :loading="loading"
                        :disabled="loading"
                        @click="confirmReject()"
                      >
                        ຢືນຢັນ
                      </v-btn>
                    </v-card-actions>
                  </v-row>
                </div>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script>
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'ConfirmPayment',
  props: ['tab'],
  data() {
    return {
      loading: false,
      confirmDialog: false,
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 20,

      invoices: [],
      editItem: {},
      server_errors: {},
      description: '',

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

      rejects: [],
      confirmType: '',
      selectedStatus: ['to_confirm_payment'],
      headers: [
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
          text: 'ໄລ່ເງິນເພີ່ມ',
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
        { text: 'ປະເພດບິນ', value: 'type', sortable: false },
        { text: 'ປະເພດຊຳລະ', value: 'payment_method', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  watch: {
    confirmType() {
      if (this.confirmType == 0) {
        this.confirmPayment();
      }
    },
    tab() {
      if (this.tab == 'tab-3') {
        this.fetchData();
      }
    },
    selectedCustomerType() {
      this.fetchData();
    },
    selectedPlan() {
      this.fetchData();
    },

    selectedVillage() {
      this.fetchData();
    },
    selectedDistrict() {
      this.fetchVillage();
      this.fetchData();
    },
    selectedUser() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchUser();
    this.fetchRoutePlan();
    this.fetchAddress();
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
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
    paymentModal(item) {
      this.editItem = item;
      this.fetchReject();
      this.confirmDialog = true;
    },
    closeConfirmModal() {
      this.confirmDialog = false;
    },
    confirmPayment() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .put(`confirm-payment/${this.editItem.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.fetchData();
              this.closeConfirmModal();
            }, 300);
          }
        })
        .catch(() => {
          this.closeConfirmModal();
          this.$store.commit('Loading_State', false);
        });
    },
    confirmReject() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .put(`reject-payment/${this.editItem.id}`, {
          reject_reason_id: this.reject_reason_id,
          description: this.description,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.fetchData();
              this.closeConfirmModal();
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
            for (const [key, data] of Object.entries(obj)) {
              this.server_errors[key] = data[0];
            }
          }
        });
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

    viewPage(id) {
      this.$router.push({
        name: 'InvoiceDetail',
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
