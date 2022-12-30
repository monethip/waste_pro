<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col cols>
        <v-select
          outlined
          dense
          :items="plans"
          v-model="selectedRoutePlan"
          item-text="name"
          item-value="id"
          label="ເລືອກແຜນ"
          clearable
        ></v-select>
      </v-col>
      <v-col cols>
        <v-select
          outlined
          dense
          :items="billingable_types"
          v-model="selectedBillingable_type"
          item-value="name"
          :item-text="filterBillingType"
          label="ປະເພດບິນ"
          clearable
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ"
          type="text"
          v-model="search"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ເລກບິນ"
          type="text"
          v-model="billId"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ເບີໂທ"
          type="text"
          v-model="phone"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="selectedBillingable_type == 'NewInvoice'">
      <v-col>
        <v-select
          outlined
          dense
          :items="customerTypes"
          v-model="selectedCustomerType"
          item-text="name_la"
          item-value="name"
          label="ເລືອກປະເພດລູກຄ້າ"
          clearable
        ></v-select>
      </v-col>
      <v-col v-if="selectedCustomerType == 'company'">
        <v-select
          outlined
          dense
          :items="comapnyTypes"
          v-model="selectedComapnyType"
          item-text="la"
          item-value="en"
          label="ເລືອກປະເພດບໍລິການ"
          clearable
        ></v-select>
      </v-col>
    </v-row>

    <v-card>
      <v-card-title>
        ຂໍ້ມູນບີນ ({{ pagination.total }})
        <v-divider class="mx-4" vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn
          v-if="selectedRows.length > 0"
          class="btn-primary elevation-0"
          :loading="loading"
          :disabled="loading"
          @click="approveAny"
          >ອະນຸມັດບິນ</v-btn
        >
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="invoices"
          :search="search"
          :disable-pagination="true"
          hide-default-footer
          v-model="selectedRows"
          show-select
          fixed-header
        >
          <template v-slot:item.user="{ item }">
            <div>{{ showUser(item) }}</div>
          </template>
          <template v-slot:item.sub_total="{ item }">
            <td>{{ Intl.NumberFormat().format(item.sub_total) }}</td>
          </template>
          <template v-slot:item.date_month="{ item }">
            <td>{{ getMonth(item.date) }}</td>
          </template>
          <template v-slot:item.total="{ item }">
            <td>{{ Intl.NumberFormat().format(item.total) }}</td>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="ViewInvoice(item.id)">
              mdi-eye
            </v-icon>
            <v-menu v-if="item.status == 'to_confirm_payment'" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="orange"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  medium
                  class="mr-2"
                  >mdi-credit-card-multiple</v-icon
                >
              </template>
              <v-list>
                <v-list-item link @click="paymentConfirmModal(item)">
                  <v-list-item-title style="color: green">
                    <v-icon small style="color: green" class="mr-2"
                      >mdi-check-all</v-icon
                    >
                    ຢືນຢັນການຊຳລະ
                  </v-list-item-title>
                </v-list-item>
                <v-list-item link @click="paymentConfirmModal(item)">
                  <v-list-item-title style="color: red">
                    <v-icon style="color: red" small>
                      mdi-alert-circle-outline</v-icon
                    >
                    ປະຕິເສດການຊຳລະ
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
            <v-icon
              v-if="
                (item.display_type == 'CustomBill' ||
                  item.display_type == 'FutureInvoice') &&
                  (item.status == 'created' || item.status == 'approved')
              "
              color="red"
              small
              class="mr-2"
              @click="deleteItem(item.id)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
        <br />
        <template>
          <Pagination
            v-if="pagination.total_pages > 1"
            :pagination="pagination"
            :offset="offset"
            @paginate="fetchData()"
          ></Pagination>
        </template>
      </v-card-text>
    </v-card>
    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteInvoice"
            >OK
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>

    <!-- Confirm Payment-->
    <v-dialog v-model="confirmPaymentDialog" max-width="620px" persistent>
      <template>
        <v-card>
          <v-card-title>
            <p>
              <v-icon class="primary-color" large color="success"
                >mdi-checkbox-marked-circle-outline
              </v-icon>
              ຢືນຢັນຊຳລະຄ່າຂີ້ເຫຍື້ອ

              <span class="primary-color"
                >{{ confirm.name }} {{ confirm.surname }}</span
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
                        class="mr-6 elevation-0"
                        color="success"
                        label
                        filter
                        outlined
                      >
                        <v-icon left class="ml-1"> mdi-cash </v-icon>
                        ຢືນຢັນການຊຳລະ
                      </v-chip>
                      <v-chip medium color="error" label filter outlined>
                        <v-icon class="ml-1" left> mdi-cash-remove</v-icon>
                        ປະຕິເສດການຊຳລະ
                      </v-chip>
                    </v-chip-group>
                  </v-col>
                </v-row>
                <div v-if="confirmType == 1">
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        v-model="reject_reason_id"
                        label="ເຫດຜົນ"
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
                </div>
              </v-form>
              <v-card-actions class="mt-4">
                <v-spacer></v-spacer>
                <v-btn
                  color="error"
                  class="elevation-0 btn mr-4 px-12"
                  medium
                  @click="confirmPaymentDialog = false"
                >
                  ປິດ
                </v-btn>
                <v-btn
                  class="elevation-0 btn btn-primary px-12"
                  medium
                  :loading="loading"
                  :disabled="loading"
                  @click="confirmPayment()"
                >
                  ຢືນຢັນ
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
// //import { GetOldValueOnInput } from "@/Helpers/GetValue";

import queryOption from "@/Helpers/queryOption";
import { getLaoBillingType } from "@/Helpers/BillingStatus";
import { getCompanyCostBy } from "@/Helpers/Customer";
import moment from "moment";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: "Collection",
      confirmPaymentDialog: false,
      month: "",
      curent_month: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      start_menu: false,
      billingId: "",
      invoices: [],
      loading: false,
      customerId: "",
      selectedRows: [],
      plans: [],
      selectedRoutePlan: "",
      selectedComapnyType: "",
      lastMonthBillPaid: localStorage.getItem("lastMonthBillPaid"),
      lastMonthBill: localStorage.getItem("lastMonthBill"),
      selectedCustomerType: "",
      comapnyTypes: getCompanyCostBy,
      customerTypes: [
        {
          name: "",
          name_la: "ທັງໝົດ",
        },
        {
          name_la: "ຄົວເຮືອນ",
          name: "home",
        },
        {
          name_la: "ຫົວໜ່ວຍທຸລະກິດ",
          name: "company",
        },
      ],
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
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
        },
        {
          id: 3,
          name: "NewCollectionEvent",
        },
        {
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
        { text: "ຫົວບິນ", value: "content", width: "220px" },
        {
          text: "ເດືອນ",
          value: "bill_month",
          width: "180px",
        },
        { text: "ລູກຄ້າ", value: "display_customer_name", width: "150px" },

        { text: "ເບີໂທ", value: "user.phone", sortable: false },

        // {text: "ສ່ວນຫຼຸດ", value: "discount",width: "150px"},
        { text: "ຄ່າບໍລິການ", value: "sub_total", width: "150px" },
        { text: "ລວມທັງໝົດ", value: "total", sortable: false, width: "150px" },
        {
          text: "ວັນທີບິນ",
          value: "date",
          width: "180px",
        },
        {
          text: "ວັນທີສ້າງ",
          value: "created_at",
          width: "180px",
        },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    billStatus() {
      return this.$route.query.tab || "billing-approved";
    },
    lastMonthCreated() {
      return this.$store.getters["auth/getLastMonthBill"];
    },
    lastMonthBillCreated() {
      return this.$store.getters["auth/getLastMonthBillPaid"];
    },
  },
  methods: {
    async confirmPayment() {
      if (this.confirmType == "0") {
        this.loading = true;
        await this.$axios
          .put("confirm-billing/" + this.confirm.id)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.fetchData();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
                this.closeConfirmModal();
              }, 300);
            }
          })
          .catch(() => {
            this.loading = false;
            this.closeConfirmModal();
          });
      } else if (this.confirmType == "1") {
        let data = new FormData();
        data.append("reject_reason_id", this.reject_reason_id);
        data.append("description", this.description);
        data.append("_method", "PUT");
        this.loading = true;
        this.$axios
          .post("reject-billing/" + this.confirm.id, data)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.fetchData();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
                this.closeConfirmModal();
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response ? error.response.data.message : error,
            });
            if (error.response && error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }
          });
      } else if (this.confirmType == "") {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ",
        });
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ",
        });
      }
    },
    paymentConfirmModal(item) {
      this.confirm = item;
      this.confirmPaymentDialog = true;
    },
    closeConfirmModal() {
      this.confirmPaymentDialog = false;
      this.confirmType = "";
    },
    getMonth(date) {
      const d = new Date(date);

      return moment(d).format("MMMM , YYYY");
    },
    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.billingId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteInvoice() {
      this.loading = true;
      this.$axios
        .delete("billing/" + this.billingId)

        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.loading = false;
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response ? error.response.data.message : error,
          });
          this.$store.commit("modalDelete_State", false);
        });
    },
    filterBillingType(status) {
      return getLaoBillingType(status.name);
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
            { bill_month: this.lastMonthBillCreated },
            { order_by: "newest" },
            { status: this.billStatus },
            { route_plans: this.selectedRoutePlan },
            { bill_id: this.billId },
            { phone: this.phone },
            { customer_type: this.selectedCustomerType },
            { cost_by: this.selectedComapnyType },
            { filter: this.search },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.invoices = res.data.data.data;
            this.pagination = res.data.data.pagination;
          }
          this.$store.dispatch("auth/makeCallFetch");
        })
        .catch((error) => {
          this.$store.dispatch("auth/makeCallFetch");
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
        .catch(() => {});
    },

    closeAddModal() {
      this.paymentType = "";
      this.$store.commit("modalAdd_State", false);
    },
    createPage() {
      this.$router.push({
        name: "CreateCollectionEventInvoice",
      });
    },
    editPage(id) {
      this.$router.push({
        name: "EditCollectionEventInvoice",
        params: { id },
      });
    },
    ViewInvoice(id) {
      let route = this.$router.resolve({
        name: "billing-detail",
        params: { id },
      });
      window.open(route.href, "_blank");
    },
    async approveAny() {
      if (this.selectedRows.length > 0) {
        const id = this.selectedRows.map((row) => row.id);
        this.loading = true;
        await this.$axios
          .post("approve-billings", { billing_ids: id })
          .then((res) => {
            if (res.data.code == 200) {
              this.loading = false;
              this.fetchData();
              this.selectedRows = [];
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response ? error.response.data.message : error,
            });
          });
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກບິນກ່ອນ",
        });
      }
    },

    Search() {
      // GetOldValueOnInput(this);
      this.fetchData();
    },
    showUser(item) {
      if (item.display_type === "NewCollectionEvent") {
        if (item.billingable != null) return item.billingable.name;
      } else {
        if (item.user.customer != null) {
          return item.user.customer.name;
        } else {
          return item.user.name;
        }
      }
    },
  },
  watch: {
    billStatus() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedComapnyType() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedCollectionStatus: function() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    lastMonthBill: function(value) {
      this.$store.dispatch("auth/saveLastMonthBill", value);
    },
    lastMonthBillPaid: function(value) {
      this.$store.dispatch("auth/saveLastMonthBillPaid", value);
    },
    lastMonthCreated: function() {
      this.fetchData();
    },
    lastMonthBillCreated: function() {
      this.fetchData();
    },
    selectedBillingable_type: function() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedRoutePlan: function() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedCustomerType: function() {
      this.pagination.current_page = "";
      this.fetchData();
    },

    month: function(value) {
      if (value !== "") {
        this.pagination.current_page = "";
        this.fetchData();
      }
    },
    search: function(value) {
      this.pagination = {};
      if (value == "") {
        this.fetchData();
      }
    },
    selectedStatus: function() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedPackage: function() {
      this.server_errors.package_id = "";
    },
    start_date: function() {
      this.server_errors.start_month = "";
    },
    paymentType: function() {
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
  },
  created() {
    this.month = this.moment(this.curent_month).format("YYYY-MM");
    this.fetchData();
    this.fetchRoutePlan();
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

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
