<template>
  <v-container>
    <div>
      <v-row v-for="(sum, index) in summary" :key="index" class="mb-n6 mt-0">
        <v-col>
          <h3>ປີ {{ sum.year }}</h3>
        </v-col>
        <v-col>
          <p>ຈຳນວນຖົງຂີ້ເຫື້ອຍ {{ sum.home.total_bag_amount }}</p>
        </v-col>
        <v-col>
          <p>
            ຈຳນວນຄັ້ງທີ່ລົງເກັບ {{ sum.home.total_number_of_times_to_collect }}
          </p>
        </v-col>
        <v-col>
          <p>ຈຳນວນເກັບສຳເລັດ {{ sum.home.total_success_count }}</p>
        </v-col>
        <v-col>
          <p>ຈຳນວນລໍຖ້າເກັບ {{ sum.home.total_pending_count }}</p>
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
          <div>
            <span class="success--text">{{ item.status }}</span>
          </div>
        </template>
        <template v-slot:item.created_at="{ item }">
          <div>
            <span>{{ moment(item.created_at).format("DD-MM-YY") }}</span>
          </div>
        </template> </v-data-table
      ><br />
      <template>
        <!--
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
              @paginate="fetchData()"
            ></Pagination>
            -->
      </template>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import colleciton from "@views/report/collection";
export default {
  mixins: [colleciton],
  // name: "HomeInvoice",
  props: ["tab"],
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
      // invoices: [],
      // summary: {},
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
    // fetchDataInvoice() {
    //   this.$store.commit("Loading_State", true);
    //   this.$axios
    //     .get("report-invoice", {
    //       params: {
    //         page: this.pagination.current_page,
    //         per_page: this.per_page,
    //         filter: this.search,
    //         duration: "year",
    //         type: "home",
    //       },
    //     })
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.$store.commit("Loading_State", false);
    //           this.invoices = res.data.data.details.data;
    //           this.summary = res.data.data.summary;
    //           console.log(this.summary);
    //           console.log(this.invoices);
    //           this.pagination = res.data.data.pagination;
    //         }, 300);
    //       }
    //     })
    //     .catch((error) => {
    //       this.$store.commit("Loading_State", false);
    //       if (error.response.status == 422) {
    //         var obj = error.response.data.errors;
    //         for (let [key, message] of Object.entries(obj)) {
    //           this.server_errors[key] = message[0];
    //         }
    //       }
    //     });
    // },
    // editPage(id) {
    //   this.$router.push({
    //     name: "InvoiceDetail",
    //     params: { id },
    //   });
    // },
    // viewPage(id) {
    //   this.$router.push({
    //     name: "InvoiceDetail",
    //     params: { id },
    //   });
    // },
    Search() {
      GetOldValueOnInput(this);
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
    // this.fetchDataInvoice();
    console.log(this.invoices);
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>