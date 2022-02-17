<template>
  <v-container>
    <div>
      <div v-if="summary">
        <v-row v-for="(sum, index) in summary" :key="index" class="mb-n6 mt-0">
          <v-col>
            <h3>ປີ {{ sum.year }}</h3>
          </v-col>
          <v-col>
            <p>
              ຈຳນວນອະນຸມັດ
              <span class="success--text">{{ sum.approved_count }}</span>
            </p>
          </v-col>  <v-col>
            <p>
              ຈຳນວນເກັບສຳເລັດ
              <span class="success--text">{{ sum.collect_confirm_count }}</span>
            </p>
          </v-col>
          <v-col>
            <p>
              ຈຳນວນຄັ້ງທີ່ລົງເກັບ
              <span class="success--text">{{
                sum.number_of_times_to_collect
              }}</span>
            </p>
          </v-col>
          <v-col>
            <p>
              ຈຳນວນເກັບສຳເລັດ
              <span class="success--text">{{
                sum.rejected_count
              }}</span>
            </p>
          </v-col>
          <v-col>
            <p>
              ຈຳນວນລໍຖ້າເກັບ
              <span class="success--text">{{
                sum.collected_count
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
<!--        <template v-slot:item.status="{ item }">-->
<!--          <div>-->
<!--            <span class="success&#45;&#45;text">{{ item.status }}</span>-->
<!--          </div>-->
<!--        </template>-->
        <template v-slot:item.status="{ item }">
          <v-chip label :color="statusColor(item.status)">{{
              item.status
            }}</v-chip>
        </template>
      </v-data-table
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
import colleciton from "@views/report/TabCollectionTab/collectionEvent";
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
    this.pagination = [];
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
