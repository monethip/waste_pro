<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
            class="btn-primary"
            :loading="loading"
            :disabled="loading"
            @click="exportData"
        >Export
        </v-btn>
      </v-col>
      <v-col>
        <v-autocomplete
            outlined
            dense
            :items="customer_types"
            v-model="selectedCustomerType"
            item-text="display"
            item-value="name"
            label="ປະເພດລູກຄ້າ"
        ></v-autocomplete>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table
                :headers="headers"
                :items="customers"
                :search="search"
                :disable-pagination="true"
                hide-default-footer
            >
              <template v-slot:item.created_at="{ item }">
                <div>
                  {{ moment(item.created_at).format("DD-MM-YY") }}
                </div>
              </template>
            </v-data-table
            >

            <!--            <br/>-->
            <!--            <template>-->
            <!--              <Pagination-->
            <!--                  v-if="pagination.total_pages > 1"-->
            <!--                  :pagination="pagination"-->
            <!--                  :offset="offset"-->
            <!--                  @paginate="fetchData()"-->
            <!--              ></Pagination>-->
            <!--            </template>-->
          </v-card-text>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import queryOption from "@/Helpers/queryOption";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|Report Customer`;
  },
  data() {
    return {
      start_date: "",
      end_date: "",
      start_menu: false,
      end_menu: false,
      customers: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      //Filter
      selectedCustomerType: "home",
      customer_types: [
        {
          name: "",
          display: "ທັງໝົດ",
        },
        {
          name: "home",
          display: "ຄົວເຮືອນ",
        },
        {
          name: "company",
          display: "ບໍລິສັດ",
        },
      ],

      headers: [
        {text: "ຊື່", value: "driver_name"},
        {text: "Car ID", value: "vehicle_car_id", sortable: false},
        {text: "Total", value: "total"},
        {text: "Created", value: "created_at", sortable: false},
        {text: "", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("report-driver-collection", {
            params: queryOption([
              // {page: this.pagination.current_page},
              // {per_page: this.per_page},
              {customer_type: this.selectedCustomerType},
            ]),
          })
          .then((res) => {
            if (res.data.code == 200) {
                this.$store.commit("Loading_State", false);
                this.customers = res.data.data.data;
                console.log(this.customers)
            }
          })
          .catch((error) => {
            this.$store.commit("Loading_State", false);
            this.start_menu = false;
            this.end_menu = false;
            if (error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },

    viewPage(id) {
      this.$router.push({
        name: "ViewCompanyDetail",
        params: {id},
      });
    },

    exportData() {
      console.log(this.selectedCustomerType)
      this.loading = true;
      this.$axios
          .get(
              "report-driver-collection/",
              {
                params: queryOption([
                  {download: 'excel'},
                  {customer_type: this.selectedCustomerType},
                ]),
              },
              {responseType: "blob"}
          )
          .then((res) => {
            if (res.status == 200) {
              setTimeout(() => {
                this.loading = false;
                const fileUrl = window.URL.createObjectURL(new Blob([res.data]));
                const fileLink = document.createElement("a");
                fileLink.href = fileUrl;
                fileLink.setAttribute("download", "driver collection " + ".xlsx");
                document.body.appendChild(fileLink);
                fileLink.click();
                document.body.removeChild(fileLink);
              }, 300);
            }
          })
          .catch(() => {
            this.$store.commit("modalDelete_State", false);
            this.loading = false;
          });
    },
  },
  watch: {
    selectedCustomerType: function () {
      this.fetchData();
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
