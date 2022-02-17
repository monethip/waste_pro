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
    <v-row>
      <v-col>
        <v-autocomplete
          outlined
          dense
          v-model="reject_reason_id"
          label="ເຫດຜົນການຍົກເລີກ"
          :items="rejects"
          item-text="name"
          item-value="id"
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
                  <v-icon small> mdi-eye </v-icon>
                  ລາຍລະອຽດ
                </v-list-item-title>
              </v-list-item>
              <v-list-item link @click="PaymentPage(item.id)">
                <v-list-item-title>
                  <v-icon small> mdi-credit-card </v-icon>
                  ຊຳລະບິນ
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template> </v-data-table
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
  </div>
</template>

<script>
export default {
  name: "Reject",
  props: ["tab"],
  data() {
    return {
      loading: false,
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 20,
      invoices: [],
      selectedStatus: ["rejected"],
      reject_reason_id: [],
      rejects: [],

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
            reject_reasons: this.reject_reason_id,
          },
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
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          }
        });
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
        .catch(() => {});
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

    fetchAddress() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
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
    PaymentPage(id) {
      this.$router.push({
        name: "Payment",
        params: { id },
      });
    },
    fetchVillage() {
      this.$axios
        .get("info/district/" + this.selectedDistrict + "/village")
        .then((res) => {
          if (res.data.code == 200) {
              this.villages = res.data.data;
          }
        })
        .catch(() => {});
    },

    viewPage(id) {
      this.$router.push({
        name: "InvoiceDetail",
        params: { id },
      });
    },
  },
  watch: {
    tab: function () {
      if (this.tab == "tab-4") {
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
    reject_reason_id: function () {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchRoutePlan();
    this.fetchAddress();
    this.fetchReject();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>