<template>
  <v-container>
    <v-breadcrumbs large class="pt-0">ລາຍງານຂໍ້ມູນບິນເກັບຂີ້ເຫື້ຍອພິເສດ</v-breadcrumbs>
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
    </v-row>
    <v-row>
      <v-col cols>
        <v-select
            outlined
            dense
            :items="collectionStatus"
            v-model="selectedCollectionStatus"
            item-text="dis_play"
            item-value="name"
            label="ສະຖານະບໍລິການ"
            multiple
            clearable
        ></v-select>
      </v-col>
      <v-col col>
        <v-select
            outlined
            dense
            :items="paymentStatus"
            v-model="selectedPaymentStatus"
            item-text="dis_play"
            item-value="name"
            label="ສະຖານະການຊຳລະ"
            multiple
            clearable
        ></v-select>
      </v-col>
    </v-row>

    <div>
      <v-row v-for="(sum, index) in summary" :key="index">
        <v-col>
          <p v-if="sum.year">ປີ {{ sum.year }}</p>
          <p v-if="sum.month">ເດືອນ {{ sum.month }}</p>
        </v-col>
        <v-col>
          <p>
            ຍອດທີ່ປະຕິເສດ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.rejected_total)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຍອດທີ່ຈ່າຍແລ້ວ(ລໍຖ້າການຢືນຢັນ)
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.to_confirm_payment_total)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຍອດທີ່ຈ່າຍແລ້ວ
            <span class="success--text">{{
              Intl.NumberFormat().format(sum.success_total)
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຍອດທີ່ຍັງບໍ່ຈ່າຍ
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
                    paymentStatusText(item.payment_status)
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
    paymentStatusText(status){
      if(status == 'pending') return 'ລໍຖ້າເກັບເງິນ';
      else if(status == 'to_confirm_payment') return 'ລໍຖ້າຢືນຢັນຊຳລະ';
      else if (status == 'rejected') return 'ປະຕິເສດການຊຳລະ';
      else if(status == 'success') return 'ຊຳລະສຳເລັດ';
      else return  '';
    }
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
