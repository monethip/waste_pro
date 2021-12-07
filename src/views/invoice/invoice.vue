<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <p>ເລືອກເດືອນທີ່ອອກໃບບິນເກັບເງິນ</p>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່"
          type="text"
          v-model="search"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="calendars"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.plan="{ item }">
              <v-icon
                color="success"
                small
                class="mr-2"
                @click="createInvoice(item.id)"
              >
                mdi-eye</v-icon
              >
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
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  data() {
    return {
      tab: null,
      calendars: [],
      loading: false,
      calendarId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      //Add Package
      start_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      start_menu: false,
      packages: [],
      selectedPackage: "",
      server_errors: {},
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      plan: {},
      calendarEdit: {},

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "ວັນທີ", value: "month" },
        {
          text: "ຈຳນວນບິນ",
          value: "has_invoice",
          align: "center",
          sortable: false,
        },
        {
          text: "ລາຍລະອຽດ",
          value: "plan",
          sortable: false,
          align: "center",
        },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("plan-month", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.calendars = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    Search() {
      GetOldValueOnInput(this);
    },
    createInvoice(id) {
      this.$router.push({
        name: "InvoiceTab",
        params: { id },
      });
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    "plan.name": function () {
      this.server_errors.name = "";
    },
    start_date: function () {
      this.server_errors.month = "";
    },
    "calendarEdit.name": function () {
      this.server_errors.name = "";
    },
    "calendarEdit.month": function () {
      this.server_errors.month = "";
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