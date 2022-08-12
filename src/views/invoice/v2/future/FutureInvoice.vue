<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <p>ຈັດການຂໍ້ມູນບິນລ່ວງໜ້າ</p>
      </v-col>
      <!--
      <v-col>
        <v-menu
          v-model="start_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="ເດືອນ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="fetchData()"
            type="month"
          ></v-date-picker>
        </v-menu>
      </v-col>
      -->
      <v-col>
        <v-select
            outlined
            dense
            :items="paymentStatus"
            v-model="selectedPaymentStatus"
            :item-text="filterStatusLao"
            item-value="name"
            label="ສະຖານະບິນ"
            clearable
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
            outlined
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            label="ຊື່"
            type="text"
            v-model="search"
            @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
      <v-col class="align-end ">
        <v-btn @click="choseCustomer()" class="btn-primary elevation-0">
          <v-icon class="mr-2">mdi-plus</v-icon>
          ສ້າງບິນ
        </v-btn>
      </v-col>
    </v-row>
    <div>
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
                  {{item.billing.user.name}}
                </div>
                <div v-else-if="item.billing.user.customer.customer_type = 'company'">
                  {{item.billing.user.customer.company_name}}
                </div>
              </div>
              <div v-else class="error--text">
                ຍັງບໍ່ທັນສະໝັກບໍລິການ
              </div>
            </template>
            <template v-slot:item.customerType="{ item }">
              <div v-if="item.billing.user.customer">
                {{getLaoCustomerType(item.billing.user.customer.customer_type)}}
              </div>
            </template>
            <template v-slot:item.start_month="{ item }">
              <div class="success--text">
                {{item.start_month}}
              </div>
            </template>
            <template v-slot:item.end_month="{ item }">
              <div class="error--text">
                {{item.start_month}}
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
              <v-chip :color="getBgColorFunc(item.billing.status)" dark>{{getLaoStatusFunc(item.billing.status) }}</v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                  color="success"
                  small
                  class="mr-2"
                  @click="ViewInvoice(item.billing.id)"
              >
                mdi-eye
              </v-icon
              >
            </template>
          </v-data-table
          >
          <br/>
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
    </div>
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";
import {getBgColor, getLaoStatus} from "@/Helpers/BillingStatus";
import {getLaoCustomerType} from "@/Helpers/Customer";

export default {
  name: "Invoice",
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  data() {
    return {
      tab: null,
      invoices: [],
      loading: false,
      calendarId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      //Add Package
      date: new Date().toISOString().substr(0, 7),
      start_menu: false,
      server_errors: {},
      //Filter
      selectedPaymentStatus: "",
      paymentStatus: [
        {
          id: 1,
          name: "created",
        },{
          id: 2,
          name: "approved",
        },
        {
          id: 3,
          name: "to_confirm_payment",
        },
        {
          id: 4,
          name: "rejected",
        },
        {
          id: 5,
          name: "success",
        },
      ],

      headers: [
        {text: "ເລກບິນ", value: "billing.content", width:"150",},
        {
          text: "ລູກຄ້າ",
          value: "user",
          width:"130",
          sortable: false,
        },
        {
          text: "ເບີໂທ",
          value: "billing.user.phone",
          width:"130",
          sortable: false,
        },
        {
          text: "ປະເພດລູກຄ້າ",
          value: "customerType",
          width:"130",
          sortable: false,
        },
        { text: "ວັນທີ", value: "start_month",   width:"120", },
        { text: "ຫາວັນທີ", value: "end_month",   width:"120", },
        // {
        //   text: "ສ່ວນຫຼຸດ",
        //   value: "discount",
        //   align: "center",
        //   sortable: false,
        // },
        {
          text: "ຄ່າບໍລິການ",
          value: "sub_total",
          align: "center",
          sortable: false,
        },
        {
          text: "ລວມທັງໝົດ",
          value: "total",
          align: "center",
          sortable: false,
        },
        {
          text: "ສະຖານະ",
          value: "status",
          sortable: false,
        },
        {text: "", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    getLaoStatusFunc(status){
      return  getLaoStatus(status)
    },
    getBgColorFunc(status){
      return getBgColor(status)
    },
    filterStatusLao(status){
      return  getLaoStatus(status.name)
    },
    getLaoCustomerType(type){
      return getLaoCustomerType(type)
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("future-invoice", {
                params: queryOption([
                  {page: this.pagination.current_page},
                  {per_page: this.per_page},
                  {filter: this.search},
                  {billing_status: this.selectedPaymentStatus},
                ]),
              }
          )
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

    Search() {
      GetOldValueOnInput(this);
    },
    choseCustomer() {
      this.$router.push({
        name: "chose-customer",
        query:{redirect:'create-future-customer'}
      });
    },
    ViewInvoice(id) {
      let route = this.$router.resolve({name: 'billing-detail',params: {id}});
      window.open(route.href, '_blank');
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    selectedPaymentStatus:function () {
      this.pagination.current_page ='';
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main";
</style>