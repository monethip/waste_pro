<template>
  <v-container>
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
      <v-row class="my-0 mx-2">
        <v-col>
          <v-btn
            v-if="selectedRows.length"
            outlined
            color="info"
            class="mb-2"
            @click="Approve()"
          >
            ອະນຸມັດບິນ {{ selectedRows.length }}
          </v-btn>
        </v-col>
        <!--
            <v-col cols="8">
              <v-select
                outlined
                dense
                :items="status"
                v-model="selectedStatus"
                item-text="name"
                item-value="name"
                label="ສະຖານະ"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    color="green"
                    text-color="white"
                    class="ma-1"
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>
            -->
      </v-row>
      <v-data-table
        v-model="selectedRows"
        :headers="headers"
        :items="invoices"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
        show-select
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
                <v-list-item-title @click="editModal(item)">
                  <v-icon
                    small
                    class="mr-2"
                  >
                    mdi-pencil
                  </v-icon>
                  ແກ້ໄຂບິນ
                </v-list-item-title>
              </v-list-item>
              <!--
                    <v-list-item link>
                      <v-list-item-title>
                        <v-icon small> mdi-credit-card </v-icon>
                        Payment
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-title>
                        <v-icon small> mdi-credit-card </v-icon>
                        Reject Payment
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-title>
                        <v-icon small> mdi-delete </v-icon>
                        Confirm Payment
                      </v-list-item-title>
                    </v-list-item>
                    -->
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

    <!-- Edit Add-->
    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂບິນ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editItem.discount"
                      label="ສ່ວນຫຼຸດ"
                      outlined
                      dense
                      type="number"
                      class="input-number"
                    />
                    <p class="errors">
                      {{ server_errors.discount }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editItem.new_exceed_bag_charge"
                      label="ຈຳນວນຖົງ"
                      outlined
                      dense
                      type="number"
                      class="input-number"
                    />
                    <p class="errors">
                      {{ server_errors.new_exceed_bag_charge }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="closeEditModal()"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="UpdateItem()"
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Customer',
  props: ['tab'],
  data() {
    return {
      selectedRows: [],
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 20,
      search: '',
      oldVal: '',
      invoices: [],
      editItem: {},
      server_errors: {},
      plans: [],
      selectedPlan: [],
      selectedUser: '',
      users: [],
      // Filter
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: [],

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
      selectedStatus: ['created'],
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
    search(value) {
      if (value == '') {
        this.fetchData();
      }
    },
    selectedStatus() {
      this.fetchData();
    },
    tab() {
      if (this.tab == 'tab-1') {
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
    this.fetchUser();
    this.fetchData();
    this.fetchRoutePlan();
    this.fetchAddress();
  },
  methods: {
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

    editModal(item) {
      this.editItem = item;
      this.$store.commit('modalEdit_State', true);
    },
    UpdateItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .put(`invoice/${this.editItem.id}`, {
            discount: this.editItem.discount,
            new_exceed_bag_charge: this.editItem.new_exceed_bag_charge,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeEditModal();
                this.fetchData();
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }, 300);
            }
            if (res.data.error == true) {
              this.$store.commit('Toast_State', {
                value: true,
                color: 'error',
                msg: res.data.message,
              });
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
              for (const [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
            this.fetchData();
          });
      }
    },
    closeEditModal() {
      this.$store.commit('modalEdit_State', false);
    },

    Approve() {
      const selectedInvoice = [];
      this.selectedRows.filter((item) => {
        selectedInvoice.push(item.id);
      });
      this.$store.commit('Loading_State', true);
      this.$axios
        .put(`plan-month/${this.$route.params.id}/approve-invoice/`, {
          invoices: selectedInvoice,
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
              this.selectedRows = [];
              this.$store.commit('modalDelete_State', false);
              this.fetchData();
            }, 300);
          }
        })
        .catch(() => {
          this.fetchData();
          this.selectedRows = [];
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
    viewPage(id) {
      this.$router.push({
        name: 'InvoiceDetail',
        params: { id },
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
    remove(item) {
      const index = this.selectedStatus.indexOf(item.id);
      if (index >= 0) this.selectedStatus.splice(index, 0)[0];
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
