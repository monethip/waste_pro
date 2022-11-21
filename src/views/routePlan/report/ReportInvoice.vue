<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary">Export </v-btn>
      </v-col>
      <v-col>
        <v-autocomplete
          item-text=""
          item-value=""
          label="ວັນທີເລີ່ມ"
          outlined
          dense
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          item-text=""
          item-value=""
          label="ວັນທີສີ້ນສຸດ"
          outlined
          dense
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          item-text=""
          item-value=""
          label="ເລືອກເສັ້ນທາງ"
          outlined
          dense
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          item-text=""
          item-value=""
          label="Driver"
          outlined
          dense
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ,ເລກບິນ"
          type="text"
          v-model="search"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>
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
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
                <v-icon small class="mr-2" @click="editPage(item.id)">
                  mdi-pencil
                </v-icon>
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

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
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
      per_page: 100,
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
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("report-invoice", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
            duration: "year",
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.invoices = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          if (error.response && error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
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
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>