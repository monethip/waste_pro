<template>
  <v-container>
      <v-breadcrumbs large class="pt-0"
      >ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ອຍພິເສດ</v-breadcrumbs
      >
      <v-row class="mb-n6">
        <v-col>
          <v-btn
              class="btn-primary"
              :loading="loading"
              :disabled="loading"
              @click="exportData()"
          >Export
          </v-btn>
        </v-col>
        <v-col>
          <v-select
              outlined
              dense
              :items="duration"
              v-model="selectedDuration"
              item-text="name"
              item-value="duration"
              label="ຊ່ວງເວລາ"
          ></v-select>
        </v-col>
        <v-col v-if="selectedDuration == 'year'">
          <section>
            <date-picker
                style="height: 40px"
                v-model="year_from"
                type="year"
                format="YYYY"
                placeholder="ເລີ່ມປີ"
            ></date-picker>
          </section>
        </v-col>
        <v-col v-if="selectedDuration == 'year'">
          <section>
            <date-picker
                v-model="year_to"
                type="year"
                format="YYYY"
                placeholder="ຫາປີ"
            ></date-picker>
          </section>
        </v-col>
        <v-col v-if="selectedDuration == 'month'">
          <section>
            <date-picker
                v-model="month_from"
                type="month"
                placeholder="ເລີ່ມເດືອນ"
                @input="fetchData()"
            ></date-picker>
          </section>
        </v-col>
        <v-col v-if="selectedDuration == 'month'">
          <section>
            <date-picker
                v-model="month_to"
                type="month"
                placeholder="ຫາເດືອນ"
                @input="fetchData()"
            ></date-picker>
          </section>
        </v-col>

        <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
          <section>
            <date-picker
                style="height: 40px"
                v-model="date_from"
                type="date"
                placeholder="ເລີ່ມວັນທີ"
                @input="fetchData()"
            ></date-picker>
          </section>
        </v-col>
        <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
          <section>
            <date-picker
                style="height: 40px"
                v-model="date_to"
                type="date"
                placeholder="ຫາວັນທີ"
                @input="fetchData()"
            ></date-picker>
          </section>
        </v-col>
      </v-row>

    <div>
      <div v-if="summary">
        <v-row v-for="(sum, index) in summary" :key="index" class="mb-n6 mt-0">
          <v-col>
            <p v-if="selectedDuration =='year'">{{ sum.year }}</p>
            <p v-if="selectedDuration =='month'">{{ sum.month }}</p>
            <p v-if="selectedDuration =='date'">{{ moment(sum.date).format("DD-MM-YY") }}</p>
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
       <v-card>
         <v-card-text>
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
               <div>{{item.collect_status}}</div>
             </template>
           </v-data-table
           >
         </v-card-text>
       </v-card>

      <br />
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
.mx-input {
  height: 40px !important;
}
</style>
