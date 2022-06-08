<template>
  <v-container>

    <v-breadcrumbs large class="pt-0">ລາຍງານຂໍ້ມູນບິນເກັບຂີ້ເຫື້ອຍພິເສດ</v-breadcrumbs>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="exportData()">Export </v-btn>
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
              placeholder="ເລີ່ມປີ"
          ></date-picker>
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
              v-model="year_to"
              type="year"
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
          ></date-picker>
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
              v-model="month_to"
              type="month"
              placeholder="ຫາເດືອນ"
          ></date-picker>
        </section>
      </v-col>

<!--      <v-col>-->
<!--        <v-text-field-->
<!--            outlined-->
<!--            dense-->
<!--            clearable-->
<!--            prepend-inner-icon="mdi-magnify"-->
<!--            label="ຊື່ລູກຄ້າ,ເລກບິນ"-->
<!--            type="text"-->
<!--            v-model="search"-->
<!--            @keyup.enter="Search()"-->
<!--        >-->
<!--        </v-text-field>-->
<!--      </v-col>-->
    </v-row>

    <div>
      <v-row v-for="(sum, index) in summary" :key="index">
        <v-col>
          <p>ປີ {{ sum.year }}</p>
        </v-col>
        <v-col>
          <p>
            ອະນຸມັດ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.approved_total)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຍົກເລີກ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.rejected_total)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຊຳລະສຳເລັດ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.to_confirm_payment_total)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ສຳເລັດທັງໝົດ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.success_total)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລວມ
            <span class="success--text"
              >{{ Intl.NumberFormat().format(sum.pending_total) }}
            </span>
          </p>
        </v-col>
      </v-row>
       <v-card>
         <v-card-text>
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
               <v-chip label :color="statusColor(item.payment_status)">{{
                   item.payment_status
                 }}</v-chip>
             </template>
             <template v-slot:item.created_at="{ item }">
               <div>
                 <span>{{ moment(item.created_at).format("DD-MM-YY") }}</span>
               </div>
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
import invoice from "@views/report/TabCollectionTab/invoiceEvent";
export default {
  mixins: [invoice],
  name: "InvoiceCollectionEvent",
  // props: ["tab"],
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice Collection Event`;
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
        // { text: "ຈຳນວນຖົງ", value: "total_bag", sortable: false },
        { text: "ສ່ວນຫຼຸດ", value: "discount" },
        { text: "SubTotal", value: "sub_total", sortable: false },
        { text: "Total", value: "total", sortable: false },
        { text: "ຊຳລະ", value: "status", sortable: false },
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
      else if (value == "rejected") return "error"
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
.mx-input {
  height: 40px !important;
}
</style>
