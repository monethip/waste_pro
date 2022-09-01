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
        <v-select outlined dense :items="plans" v-model="selectedRoutePlan" item-text="name" item-value="id"
          label="ເລືອກແຜນ" clearable></v-select>
      </v-col>
      <!--      <v-col cols>-->
      <!--        <v-select-->
      <!--            outlined-->
      <!--            dense-->
      <!--            :items="collectionStatus"-->
      <!--            v-model="selectedCollectionStatus"-->
      <!--            item-text="dis_play"-->
      <!--            item-value="name"-->
      <!--            label="ສະຖານະບໍລິການ"-->
      <!--            clearable-->
      <!--        ></v-select>-->
      <!--      </v-col>-->
      <v-col cols>
        <v-select outlined dense :items="billingable_types" v-model="selectedBillingable_type" item-value="name"
          :item-text="filterBillingType" label="ປະເພດບິນ" clearable></v-select>
      </v-col>
      <v-col>
        <v-text-field outlined dense clearable prepend-inner-icon="mdi-magnify" label="ຄົ້ນຫາ" type="text"
          v-model="search" @keyup.enter="Search()">
        </v-text-field>
      </v-col>
    </v-row>

    <v-card>
      <v-card-title>
        ຂໍ້ມູນບີນ ({{ pagination.total }})
        <v-divider class="mx-4" vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn v-if="selectedRows.length > 0" class="btn-primary elevation-0" :loading="loading" :disabled="loading"
          @click="approveAny">ອະນຸມັດບິນ</v-btn>

      </v-card-title>
      <v-card-text>
        <v-data-table :headers="headers" :items="invoices" :search="search" :disable-pagination="true"
          hide-default-footer v-model="selectedRows" show-select fixed-header>
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
            <v-icon small class="mr-2" @click="ViewInvoice(item.id)"> mdi-eye </v-icon>
            <v-icon v-if="item.display_type == 'CustomBill' || item.display_type == 'FutureInvoice'" color="red" small
              class="mr-2" @click="deleteItem(item.id)">
              mdi-delete
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
            <!--                  <v-list-item-title>-->
            <!--                    <v-icon small class="mr-2"> mdi-eye </v-icon>-->
            <!--                    ລາຍລະອຽດ-->
            <!--                  </v-list-item-title>-->
            <!--                </v-list-item>-->
            <!--              </v-list>-->
            <!--            </v-menu>-->
          </template>
        </v-data-table>
        <br />
        <template>
          <Pagination v-if="pagination.total_pages > 1" :pagination="pagination" :offset="offset"
            @paginate="fetchData()"></Pagination>
        </template>
      </v-card-text>
    </v-card>
    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn color="blue darken-1" text :loading="loading" :disabled="loading" @click="deleteInvoice">OK
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";
import { getLaoBillingType } from "@/Helpers/BillingStatus";

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
      billingId: "",
      invoices: [],
      loading: false,
      customerId: "",
      selectedRows: [],

      plans: [],
      selectedRoutePlan: "",
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
        { text: "ຫົວບິນ", value: "content", width: "220px" },
        { text: "ລູກຄ້າ", value: "display_customer_name", width: "150px" },
        { text: "ເບີໂທ", value: "user.phone", sortable: false },
        // {text: "ສ່ວນຫຼຸດ", value: "discount",width: "150px"},
        { text: "ຄ່າບໍລິການ", value: "sub_total", width: "150px" },
        { text: "ລວມທັງໝົດ", value: "total", sortable: false, width: "150px" },
        {
          text: "ວັນທີສ້າງ",
          value: "created_at",
          width: "180px"
        },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
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
            msg: error.response.data.message,
          });
          this.$store.commit("modalDelete_State", false);
        });
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
            { status: 'created' },
            { route_plans: this.selectedRoutePlan },
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
          if (error.response.status == 422) {
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
      let route = this.$router.resolve({ name: 'billing-detail', params: { id } });
      window.open(route.href, '_blank');
    },
    async approveAny() {
      if (this.selectedRows.length > 0) {
        const id = this.selectedRows.map(row => row.id);
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
              msg: error.response.data.message,
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
      GetOldValueOnInput(this);
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
      this.pagination = {};
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

  },
  created() {
    this.month = this.moment(this.curent_month).format('YYYY-MM');
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
