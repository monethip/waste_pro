<template>
  <v-container>
    <div>
      <v-row v-for="(sum, index) in summary" :key="index">
        <v-col>
          <h3>ປີ {{ sum.year }}</h3>
        </v-col>
        <v-col>
          <p>
            ສ້າງບິນ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.home.total_created)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ອະນຸມັດ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.home.total_approved)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຍົກເລີກ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.home.total_rejected)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຊຳລະສຳເລັດ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.home.total_to_confirm_payment)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ສຳເລັດທັງໝົດ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.home.total_success)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລວມ
            <span class="success--text"
              >{{ Intl.NumberFormat().format(sum.home.sum_total) }}
            </span>
          </p>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="invoices"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <!--Role -->
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
        <template v-slot:item.status="{ item }">
          <v-chip label :color="statusColor(item.status)">{{
              item.status
            }}</v-chip>
        </template>
        <template v-slot:item.created_at="{ item }">
          <div>
            <span>{{ moment(item.created_at).format("DD-MM-YY") }}</span>
          </div>
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
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import invoice from "@views/report/invoice";
export default {
  mixins: [invoice],
  name: "HomeInvoice",
  // props: ["tab"],
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  data() {
    return {
      customers: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      headers: [
        { text: "ວັນທີ", value: "month", sortable: false },
        { text: "ລູກຄ້າ", value: "full_name" },
        { text: "ຈຳນວນຖົງ", value: "total_bag", sortable: false },
        { text: "ສ່ວນຫຼຸດ", value: "discount" },
        { text: "SubTotal", value: "sub_total", sortable: false },
        { text: "Total", value: "total", sortable: false },
        { text: "ສະຖານະ", value: "status", sortable: false },
        { text: "Type", value: "type", sortable: false },
        // { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == "success") return "success";
      else if (value == "pending") return "primary";
      else return "info";
    },
  },
  watch: {
    tab: function () {
      if (this.tab == "tab-1") {
        // this.fetchData();
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
