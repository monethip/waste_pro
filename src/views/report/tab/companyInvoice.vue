<template>
  <v-container>
    <div>
      <v-card>
        <v-card flat>
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
              <Pagination
                v-if="pagination.total_pages > 1"
                :pagination="pagination"
                :offset="offset"
                @paginate="fetchData()"
              ></Pagination>
            </template>
          </v-card-text>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  data() {
    return {
      tab: null,
      customers: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      invoices: [],

      headers: [
        { text: "ເລກບິນ", value: "user.email", sortable: false },
        { text: "ລູກຄ້າ", value: "customer.name" },
        { text: "ຈຳນວນຖົງ", value: "total_bag", sortable: false },
        { text: "ສ່ວນຫຼຸດ", value: "discount" },
        { text: "SubTotal", value: "sub_total", sortable: false },
        { text: "Total", value: "total", sortable: false },
        { text: "ສະຖານະ", value: "status", sortable: false },
        { text: "Type", value: "type", sortable: false },
        { text: "ວັນທີສ້າງ", value: "created_at", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    editPage(id) {
      this.$router.push({
        name: "InvoiceDetail",
        params: { id },
      });
    },
    viewPage(id) {
      this.$router.push({
        name: "InvoiceDetail",
        params: { id },
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
  watch: {},
  created() {},
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>