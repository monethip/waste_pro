<template>
  <v-container>
    <div>
      <div v-if="summary">
        <v-row v-for="(sum, index) in summary" :key="index" class="mb-n6 mt-0">
          <v-col>
            <h3>ປີ {{ sum.year }}</h3>
          </v-col>
          <v-col>
            <p v-if="sum.home">
              ຈຳນວນຖົງຂີ້ເຫື້ອຍ
              <span class="success--text">{{ sum.home.total_bag_amount }}</span>
            </p>
          </v-col>
          <v-col>
            <p v-if="sum.home">
              ຈຳນວນຄັ້ງທີ່ລົງເກັບ
              <span class="success--text">{{
                sum.home.total_number_of_times_to_collect
              }}</span>
            </p>
          </v-col>
          <v-col>
            <p v-if="sum.home">
              ຈຳນວນເກັບສຳເລັດ
              <span class="success--text">{{
                sum.home.total_success_count
              }}</span>
            </p>
          </v-col>
          <v-col>
            <p v-if="sum.home">
              ຈຳນວນລໍຖ້າເກັບ
              <span class="success--text">{{
                sum.home.total_pending_count
              }}</span>
            </p>
          </v-col>
        </v-row>
      </div>
      <v-data-table
        v-if="homeCollection"
        :headers="headers"
        :items="homeCollection"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <template v-slot:item.status="{ item }">
          <div>
            <span class="success--text">{{ item.status }}</span>
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
import colleciton from "@views/report/collection";
export default {
  mixins: [colleciton],
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
        { text: "ວັນທີ", value: "date", sortable: false },
        { text: "ລູກຄ້າ", value: "full_name" },
        { text: "ຈຳນວນຖົງ", value: "bag", sortable: false, align: "center" },
        { text: "ສະຖານທີ່", value: "name", sortable: false },
        { text: "ສະຖານະ", value: "status", sortable: false },
        // { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
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
    this.pagination = [];
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>