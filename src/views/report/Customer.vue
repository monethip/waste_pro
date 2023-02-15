<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-row>
          <v-col>
            <v-menu
              v-model="start_menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="start_date"
                  label="ເລີ່ມວັນທີ"
                  readonly
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  dense
                  clearable
                ></v-text-field>
              </template>
              <v-date-picker v-model="start_date"></v-date-picker>
            </v-menu>
          </v-col>
          <v-col>
            <v-menu
              v-model="end_menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="end_date"
                  label="ຫາວັນທີ"
                  readonly
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  dense
                  clearable
                ></v-text-field>
              </template>
              <v-date-picker v-model="end_date"></v-date-picker>
            </v-menu>
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
              clearable
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
              clearable
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              outlined
              dense
              :items="status"
              v-model="selectedStatus"
              item-text="name"
              item-value="name"
              label="ສະຖານະ"
              multiple
              clearable
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              outlined
              dense
              :items="customerStatus"
              v-model="selectedCustomerStatus"
              item-text="name"
              item-value="value"
              label="ສະຖານະແຜນ"
              multiple
              clearable
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
              outlined
              dense
              clearable
              prepend-inner-icon="mdi-magnify"
              label="Search"
              type="text"
              v-model="search"
              @keyup.enter="Search()"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <v-col>
            <v-card outlined elevation="5">
              <v-container class="spacing-playground pa-1" fluid>
                <v-row>
                  <v-col>
                    <div class="px-4">
                      <v-chip class="text-caption" color="primary" dark>
                        <v-icon>mdi-home-circle-outline</v-icon>
                        ລວມຄົວເຮືອນ</v-chip
                      >
                      <v-divider class="my-4"></v-divider>
                      <v-row>
                        <v-col>
                          <div class="text-caption">
                            ຄົວເຮືອນ
                          </div>
                          <p>
                            {{ Intl.NumberFormat().format(pagination.total) }}
                          </p>
                        </v-col>
                        <v-divider :vertical="true" class="my-4"></v-divider>

                        <v-col>
                          <div class="text-caption">
                            ມູນຄ່າແພັກເກຈ
                          </div>
                          <div class="text-h6">
                            {{
                              Intl.NumberFormat().format(
                                sumData.sum_packages
                                  ? sumData.sum_packages.package_price
                                  : 0
                              )
                            }}
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col>
                    <v-btn
                      class="btn-primary"
                      color="green"
                      :loading="loading"
                      :disabled="loading"
                      @click="exportData"
                      width="100%"
                      height="100%"
                      >Export
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-if="true">
      <v-col>
        <SaleAdmin v-model="selectedSale" @change="fetchData()"></SaleAdmin>
      </v-col>
    </v-row>

    <!-- Detail -->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-text>
            <v-row>
              <v-col>
                ລວມບິນທັງໝົດ
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <RowSection :cards="allMonths" />
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-menu
                  v-model="month_menu"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="selected_month"
                      label="ເດືອນໃນຫົວບິນ"
                      readonly
                      outlined
                      v-bind="attrs"
                      v-on="on"
                      dense
                      color="cyan"
                      append-icon="mdi-calendar"
                      clearable
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    type="month"
                    v-model="selected_month"
                  ></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <span>
                  <v-chip outlined color="cyan lighten-2" dark>
                    <v-icon>mdi-calendar</v-icon>
                    {{ pastMonth }}</v-chip
                  >
                </span>
              </v-col>
              <!-- Section Toal -->
              <v-col>
                <RowSection :cards="pasts" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <span>
                  <v-chip color="cyan" dark>
                    <v-icon>mdi-calendar</v-icon>
                    {{ selected_month }}</v-chip
                  >
                </span>
              </v-col>
              <!-- Section Toal -->
              <v-col>
                <RowSection :cards="recents" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2">
                <span>
                  <v-chip outlined color="cyan darken-2" dark>
                    <v-icon>mdi-calendar</v-icon>
                    {{ nextMonth }}</v-chip
                  >
                </span>
              </v-col>
              <!-- Section Toal -->
              <v-col>
                <RowSection :cards="nexts" />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            <v-switch label="ມີບິນເທົ່ານັ້ນ" v-model="only_billings" @change="fetchData()"></v-switch>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
            >
              <template v-slot:item.media="{ item }">
                <v-avatar
                  size="36px"
                  v-for="(img, index) in item.media"
                  :key="index"
                >
                  <img v-if="img.thumb" :src="img.thumb" />
                </v-avatar>
              </template>

              <template v-slot:item.status="{ item }">
                <v-chip label :color="statusColor(item.status)">{{
                  item.status
                }}</v-chip>
              </template>
              <!--Role -->
              <template v-slot:item.roles="{ item }">
                <div>
                  <span v-for="(role, index) in item.roles" :key="index">
                    {{ role.name }},
                  </span>
                </div>
              </template>
              <!--Permission -->
              <template v-slot:item.permissions="{ item }">
                <div>
                  <span v-for="(ps, index) in item.permissions" :key="index">
                    <span>{{ ps.name }}, </span>
                  </span>
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>

                <v-icon v-if="item.user.billings.length > 0" small class="mr-2" @click="viewCustomerBill(item.id)">
                  mdi-receipt-text
                </v-icon>
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
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";
import RowSection from "../../components/card/RowSection.vue";
import moment from "moment";
import SaleAdmin from "@/components/select/SaleAdmin.vue";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|Report Customer`;
  },
  components: {
    RowSection,
    SaleAdmin
  },
  data() {
    return {
      sumData: {},
      selectedSale: "",
      firstLoad: true,
      only_billings:false,
      start_date: "",
      end_date: "",
      selected_month:
        this.$route.query.month || new Date().toISOString().substr(0, 7),
      month_menu: false,
      start_menu: false,
      end_menu: false,
      customers: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: "",
      oldVal: "",
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      status: [
        {
          id: 1,
          name: "active",
        },
        {
          id: 2,
          name: "inactive",
        },
        {
          id: 3,
          name: "trial",
        },
      ],
      selectedCustomerStatus: [],
      customerStatus: [
        {
          id: 1,
          value: "calendar",
          name: "ຍັງບໍ່ມີແຜນເດີນລົດເກັບ",
        },
        {
          id: 2,
          value: "route_plan",
          name: "ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ",
        },
      ],

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ທີ່ຢູ່", value: "district.name", sortable: false },
        { text: "ປະເພດບໍລິການ", value: "package.name" },
        { text: "ຜູ້ສ້າງ", value: "customer_activity.causer.full_name" },
        { text: "ວັນທີສະໝັກ", value: "created_at", sortable: false },
        { text: "ສະຖານະ", value: "status", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      toast: {
        value: true,
        color: "success",
        msg: "",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },
    };
  },
  methods: {
    fetchSum() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("home-billing", {
          params: this.params,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.sumData = res.data.data;
              this.month_menu = false;
              this.start_menu = false;
              this.end_menu = false;
            }, 300);
            // this.fetchAddress();
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.month_menu = false;
          this.start_menu = false;
          this.end_menu = false;
          if (error.response && error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("customer", {
          params: this.params,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.customers = res.data.data.data;
              this.pagination = res.data.data.pagination;
              this.month_menu = false;
              this.start_menu = false;
              this.end_menu = false;
            }, 300);
            // this.fetchAddress();
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.month_menu = false;
          this.start_menu = false;
          this.end_menu = false;
          if (error.response && error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        })
        .finally(() => {
          this.firstLoad = false;
          this.fetchSum()
        });
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

    viewPage(id) {
     const options = {
        name: "ViewClient",
        params: { id },
      };

     this.openRoute(options)
    },
    viewCustomerBill(id) {
      const options = {
        name: "Report-Billing-Customer",
        query: {
          customer_id:id,
          selectedCustomerType: 'home'
        },
      };

      this.openRoute(options)
    },
    openRoute(options) {
      const routeData = this.$router.resolve({
        ...options
      });

      window.open(routeData.href);
    },
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == "active") return "primary";
      else if (value == "inactive") return "error";
      else return "info";
    },

    exportData() {
      this.loading = true;
      this.$axios
        .post(
          "export-customer/",
          this.params
          // { responseType: "blob" }
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data.download_link != null) {
              window.open(res.data.data.download_link);
            }
            this.loading = false;
            // setTimeout(() => {
            //   this.loading = false;
            //   const fileUrl = window.URL.createObjectURL(new Blob([res.data]));
            //   console.log(fileUrl)
            //   const fileLink = document.createElement("a");
            //   fileLink.href = fileUrl;
            //   fileLink.setAttribute("download", "customer" + ".xlsx");
            //   document.body.appendChild(fileLink);
            //   fileLink.click();
            //   document.body.removeChild(fileLink);
            // }, 300);
          }
        })
        .catch(() => {
          this.$store.commit("Toast_State", this.toast_error);
          this.loading = false;
        });
    },
  },
  computed: {
    params() {
      return queryOption([
        { page: this.pagination.current_page },
        { per_page: this.per_page },
        { without_month_info: true },
        { only_billings: this.only_billings },
        { with_billings: true },
        { created_by_id: this.selectedSale },
        { with_created_user: true },
        { filter: this.search },
        { date_from: this.start_date },
        { date_end: this.end_date },
        { villages: this.selectedVillage },
        { statuses: this.selectedStatus },
        { without: this.selectedCustomerStatus },
        { district_id: this.selectedDistrict },
        { month_bill: this.selected_month },
      ]);
    },
    pastMonth() {
      return this.selected_month
        ? moment(this.selected_month)
            .subtract(1, "months")
            .format("Y-MM")
        : null;
    },
    nextMonth() {
      return this.selected_month
        ? moment(this.selected_month)
            .add(1, "months")
            .format("Y-MM")
        : null;
    },
    pasts() {
      return [
        {
          status_la: "ລວມ",
          total: this.sumData.past?.total?.total,
          count_billing: this.sumData.past?.total?.count,
          bg_color: "blue",
        },
        {
          status_la: "ຈ່າຍແລ້ວ",
          total: this.sumData.past?.paid?.total,
          count_billing: this.sumData.past?.paid?.count,
          bg_color: "green",
        },
        {
          status_la: "ຕິດໜີ້",
          total: this.sumData.past?.unpaid?.total,
          count_billing: this.sumData.past?.unpaid?.count,
          bg_color: "orange",
        },
      ];
    },

    allMonths() {
      return [
        {
          status_la: "ລວມ",
          total: this.sumData.all?.total?.total,
          count_billing: this.sumData.all?.total?.count,
          bg_color: "blue",
        },
        {
          status_la: "ຈ່າຍແລ້ວ",
          total: this.sumData.all?.paid?.total,
          count_billing: this.sumData.all?.paid?.count,
          bg_color: "green",
        },
        {
          status_la: "ຕິດໜີ້",
          total: this.sumData.all?.unpaid?.total,
          count_billing: this.sumData.all?.unpaid?.count,
          bg_color: "orange",
        },
      ];
    },

    recents() {
      return [
        {
          status_la: "ລວມ",
          total: this.sumData.recent?.total?.total,
          count_billing: this.sumData.recent?.total?.count,
          bg_color: "blue",
        },
        {
          status_la: "ຈ່າຍແລ້ວ",
          total: this.sumData.recent?.paid?.total,
          count_billing: this.sumData.recent?.paid?.count,
          bg_color: "green",
        },
        {
          status_la: "ຕິດໜີ້",
          total: this.sumData.recent?.unpaid?.total,
          count_billing: this.sumData.recent?.unpaid?.count,
          bg_color: "orange",
        },
      ];
    },

    nexts() {
      return [
        {
          status_la: "ລວມ",
          total: this.sumData.next?.total?.total,
          count_billing: this.sumData.next?.total?.count,
          bg_color: "blue",
        },
        {
          status_la: "ຈ່າຍແລ້ວ",
          total: this.sumData.next?.paid?.total,
          count_billing: this.sumData.next?.paid?.count,
          bg_color: "green",
        },
        {
          status_la: "ຕິດໜີ້",
          total: this.sumData.next?.unpaid?.total,
          count_billing: this.sumData.next?.unpaid?.count,
          bg_color: "orange",
        },
      ];
    },
  },
  watch: {
    selected_month: function() {
      this.pagination.current_page = "";
      this.fetchSum();
    },
    start_date: function() {
      this.pagination.current_page = "";
      if (this.end_date !== "" && this.start_date !== "") {
        if (this.start_date > this.end_date) {
          this.start_date = "";
        }
      }
      this.fetchData();
    },
    end_date: function() {
      this.pagination.current_page = "";
      if (this.end_date !== "" && this.start_date !== "") {
        if (this.end_date < this.start_date) {
          this.end_date = "";
        }
      }
      this.fetchData();
    },
    search: function(value) {
      this.pagination.current_page = "";
      if (value == "") {
        this.fetchData();
      }
    },

    selectedVillage: function() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedDistrict: function() {
      this.pagination.current_page = "";
      this.fetchVillage();
      this.fetchData();
    },
    selectedStatus: function() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedCustomerStatus: function() {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedSale() {
      if (!this.firstLoad) this.fetchData();
    }
  },
  created() {
    this.fetchData();
    this.fetchAddress();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
