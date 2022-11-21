<template>
  <v-container>
    <div>
      <v-row v-for="(sum, index) in summary" :key="index" class="mb-n6 mt-n6">
        <v-col>
          <h3>ປີ {{ sum.year }}</h3>
        </v-col>
        <v-col>
          <p>
            ລວມ Container
            <span class="success--text">{{
              sum.company.container_amount
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລວມເກັບເປັນ Container
            <span class="success--text">{{
              sum.company.number_of_times_to_collect_by_container
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລວມເກັບຕາມລາຄາ
            <span class="success--text">{{
              sum.company.number_of_times_to_collect_by_fix_cost
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຍົກເລີກ
            <span class="success--text">{{ sum.company.reject_count }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລໍຖ້າເກັບ
            <span class="success--text">{{ sum.company.pending_count }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລວມ
            <span class="success--text">{{
              sum.company.wait_to_confirm_count
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ສຳເລັດທັງໝົດ
            <span class="success--text">{{ sum.company.success_count }}</span>
          </p>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="collections"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <!--Role --> </v-data-table
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
import collection from "@views/report/collection";
export default {
  mixins: [collection],
  // name: "HomeInvoice",
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
      per_page: 100,
      search: "",
      oldVal: "",
      // invoices: [],
      // summary: {},
      headers: [
        { text: "ວັນທີ", value: "date", sortable: false },
        { text: "ບໍລິສັດ", value: "company_name" },
        { text: "ປະເພດການເກັບ", value: "collection_type" },
        {
          text: "Container",
          value: "container",
          sortable: false,
          align: "center",
        },
        { text: "ສະຖານທີ່", value: "name", sortable: false },
        { text: "ສະຖານະ", value: "status", sortable: false },
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
    //       if (error.response && error.response.status == 422) {
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
      if (this.tab == "tab-2") {
        // this.fetchData();
      }
    },
  },
  created() {
    this.pagination = [];
    // this.fetchDataInvoice();
    // console.log(this.invoices);
    // this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>