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
          outlined
          dense
          :items="customer_types"
          v-model="selectedCustomerType"
          item-text="display"
          item-value="name"
          label="ປະເພດລູກຄ້າ"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          outlined
          dense
          :items="plans"
          v-model="selectedPlan"
          item-text="name"
          item-value="id"
          label="ແຜນເສັ້ນທາງ"
          multiple
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          outlined
          dense
          :items="districts"
          v-model="selectedDistrict"
          item-text="name"
          item-value="id"
          label="ເມືອງ"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          outlined
          dense
          :items="villages"
          v-model="selectedVillage"
          item-text="name"
          item-value="id"
          label="ບ້ານ"
          multiple
        ></v-autocomplete>
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
          <v-chip color="success">{{ item.total_bag }}</v-chip>
        </template>
        <template v-slot:item.exceed_bag="{ item }">
          <v-chip color="error">{{ item.exceed_bag }}</v-chip>
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
                v-on="on"
                medium
                class="mr-2"
                >mdi-dots-vertical</v-icon
              >
            </template>
            <v-list>
              <v-list-item link>
                <v-list-item-title @click="viewPage(item.id)">
                  <v-icon small class="mr-2"> mdi-eye </v-icon>
                  ລາຍລະອຽດ
                </v-list-item-title>
              </v-list-item>

              <v-list-item link>
                <v-list-item-title @click="paymentModal(item)">
                  <v-icon small> mdi-credit-card </v-icon>
                  ຢືນຢັນການຊຳລະ
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template></v-data-table
      ><br />
      <template>
        <Pagination
          v-if="pagination.total_pages > 1"
          :pagination="pagination"
          :offset="offset"
          @paginate="fetchData()"
        ></Pagination>
      </template>
    </div>
    <!-- confirm payment -->
    <v-dialog v-model="confirmDialog" max-width="620px">
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>
              <v-icon class="primary-color" large color="success"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              ຢືນຢັນການຊຳລະ
              <span class="primary-color" v-if="editItem.customer"
                >{{ editItem.customer.name }}
                {{ editItem.customer.surname }}</span
              >
            </p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-chip-group v-model="confirmType" column>
                      <v-chip
                        medium
                        class="mr-6"
                        color="success"
                        label
                        filter
                        outlined
                      >
                        ຢືນຢັນການຊຳລະ
                        <v-icon left class="ml-1">
                          mdi-account-check-outline</v-icon
                        >
                      </v-chip>
                      <v-chip medium color="error" label filter outlined>
                        ຊຳລະບໍຜ່ານ
                        <v-icon class="ml-1" left>
                          mdi-account-cancel</v-icon
                        ></v-chip
                      >
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
                      >
                      </v-select>
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
                      >
                      </v-text-field>
                      <p class="errors">
                        {{ server_errors.description }}
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
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
export default {
  name: "ConfirmPayment",
  props: ["tab"],
  data() {
    return {
      loading: false,
      confirmDialog: false,
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 20,

      invoices: [],
      editItem: {},
      server_errors: {},

      plans: [],
      selectedPlan: [],
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],

      selectedCustomerType: "home",
      customer_types: [
        {
          name: "home",
          display: "ຄົວເຮືອນ",
        },
        {
          name: "company",
          display: "ບໍລິສັດ",
        },
      ],

      rejects: [],
      confirmType: "",
      selectedStatus: ["to_confirm_payment"],
      headers: [
        { text: "ລູກຄ້າ", value: "customer" },
        {
          text: "ຈຳນວນຖົງ",
          value: "total_bag",
          sortable: false,
          align: "center",
        },
        {
          text: "ຈຳນວນຖົງເກີນ",
          value: "exceed_bag",
          sortable: false,
          align: "center",
        },
        {
          text: "ຈຳນວນເງິນ",
          value: "exceed_bag_charge",
          sortable: false,
        },
        {
          text: "ໄລ່ເງິນເພີ່ມ",
          value: "new_exceed_bag_charge",
          sortable: false,
        },
        { text: "ສ່ວນຫຼຸດ", value: "discount" },
        {
          text: "SubTotal",
          value: "sub_total",
          sortable: false,
        },
        { text: "Total", value: "total", sortable: false },
        { text: "ປະເພດບິນ", value: "type", sortable: false },
        { text: "ປະເພດຊຳລະ", value: "payment_method", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("plan-month/" + this.$route.params.id + "/invoice", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            statuses: this.selectedStatus,
            customer_type: this.selectedCustomerType,
            route_plans: this.selectedPlan,
            villages: this.selectedVillage,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.invoices = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message,
          });
        });
    },

    fetchRoutePlan() {
      this.$axios
        .get("route-plan")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.plans = res.data.data;
            }, 100);
          }
        })
        .catch(() => {});
    },

    fetchAddress() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.address = res.data.data;
              this.address.map((item) => {
                this.districts = item.districts;
              });
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchVillage() {
      this.$axios
        .get("info/district/" + this.selectedDistrict + "/village")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.villages = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchReject() {
      this.$axios
        .get("reject-reason")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.rejects = res.data.data;
            }, 100);
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
      this.loading = true;
      this.$axios
        .put("confirm-payment/" + this.editItem.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.fetchData();
              this.closeConfirmModal();
            }, 300);
          }
        })
        .catch(() => {
          this.closeConfirmModal();
          this.loading = false;
        });
    },
    confirmReject() {
      this.loading = true;
      this.$axios
        .put("reject-payment/" + this.editItem.id, {
          reject_reason_id: this.reject_reason_id,
          description: this.description,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.fetchData();
              this.closeConfirmModal();
            }, 300);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message,
          });
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, data] of Object.entries(obj)) {
              this.server_errors[key] = data[0];
            }
          }
        });
    },

    viewPage(id) {
      this.$router.push({
        name: "InvoiceDetail",
        params: { id },
      });
    },
  },
  watch: {
    confirmType: function () {
      if (this.confirmType == 0) {
        this.confirmPayment();
      }
    },
    tab: function () {
      if (this.tab == "tab-3") {
        this.fetchData();
      }
    },
    selectedCustomerType: function () {
      this.fetchData();
    },
    selectedPlan: function () {
      this.fetchData();
    },

    selectedVillage: function () {
      this.fetchData();
    },
    selectedDistrict: function () {
      this.fetchVillage();
    },
  },
  created() {
    this.fetchData();
    this.fetchRoutePlan();
    this.fetchAddress();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>