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
        <v-btn @click="choseCustomer()" class="btn-primary">
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
            <template v-slot:item.total="{ item }">
              {{ Intl.NumberFormat().format(item.billing.total) }}
            </template>
            <template v-slot:item.sub_total="{ item }">
              {{ Intl.NumberFormat().format(item.billing.sub_total) }}
            </template>
            <template v-slot:item.discount="{ item }">
              {{ Intl.NumberFormat().format(item.billing.discount) }}
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                  color="success"
                  small
                  class="mr-2"
                  @click="ViewInvoice(item.id)"
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
      packages: [],
      selectedPackage: "",
      server_errors: {},
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      plan: {},
      calendarEdit: {},

      headers: [
        {text: "ເລກບິນ", value: "billing.billing_display_id"},
        {text: "ລາຍລະອຽດ", value: "billing.content"},
        { text: "ວັນທີ", value: "start_month" },
        { text: "ຫາວັນທີ", value: "end_month" },
        {
          text: "ສ່ວນຫຼຸດ",
          value: "discount",
          align: "center",
          sortable: false,
        },
        {
          text: "ລວມເງິນ",
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
          text: "ຊື່ລູກຄ້າ",
          value: "billing.user.name",
          sortable: false,
          align: "center",
        },
        {
          text: "ສະຖານະ",
          value: "billing.status",
          sortable: false,
          align: "center",
        },
        {text: "", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("future-invoice", {
                params: queryOption([
                  {page: this.pagination.current_page},
                  {per_page: this.per_page},
                  {filter: this.search},
                ]),
              }
          )
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit("Loading_State", false);
              this.invoices = res.data.data.data;
              console.log(this.invoices);
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
      });
    },
    ViewInvoice(id) {
      let route = this.$router.resolve({name: 'invoice-detail',params: {id}});
      window.open(route.href, '_blank');
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    "plan.name": function () {
      this.server_errors.name = "";
    },
    start_date: function () {
      this.server_errors.month = "";
    },
    "calendarEdit.name": function () {
      this.server_errors.name = "";
    },
    "calendarEdit.month": function () {
      this.server_errors.month = "";
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