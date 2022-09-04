<template>
  <v-container>
    <v-row>
      <v-col>
        <v-breadcrumbs large class="pa-0"> ຂີ້ເຫື້ຍອທັງໝົດ</v-breadcrumbs>
      </v-col>
      <!--      <v-col>-->
      <!--        <v-text-field-->
      <!--          outlined-->
      <!--          dense-->
      <!--          clearable-->
      <!--          prepend-inner-icon="mdi-magnify"-->
      <!--          label="Search"-->
      <!--          type="text"-->
      <!--          v-model="search"-->
      <!--          @keyup.enter="Search()"-->
      <!--        >-->
      <!--        </v-text-field>-->
      <!--      </v-col>-->
    </v-row>
    <div>
      <v-data-table v-if="calendars" :headers="headers" :items="calendars" :search="search" :disable-pagination="true"
        hide-default-footer>
        <template v-slot:item.customer="{ item }">
          <div v-if="(item.route_plan_detail.customer.customer_type = 'company')">
            {{ item.route_plan_detail.customer.company_name }}
          </div>
          <div>
            {{ item.route_plan_detail.customer.name }}
            {{ item.route_plan_detail.customer.surname }}
          </div>
        </template>
        <template v-slot:item.created_at="{ item }">
          <div>
            {{ moment(item.created_at).format("DD-MM-YY hh:mm ") }}
          </div>
        </template>
        <template v-slot:item.date="{ item }">
          <div>
            {{ moment(item.date).format("DD-MM-YY hh:mm:ss") }}
          </div>
        </template>
        <template v-slot:item.status="{ item }">
          <v-chip label :color="statusColor(item.status)">{{ item.status }}</v-chip>
        </template>
        <template v-slot:item.amount="{ item }">
          <div v-if="item.collection_type == 'bag' || item.collection_type == 'chartered'">
            <v-chip color="primary">{{ item.bag }}</v-chip>
            <span> {{ getUnit(item.collection_type) }}</span>
          </div>
          <div v-else-if="item.collection_type == 'fix_cost'">
            <span> {{ getUnit(item.collection_type) }}</span>
          </div>
          <div v-else>
            <v-chip color="success">{{ item.container }}</v-chip>
            <span> {{ getUnit(item.collection_type) }}</span>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="viewPage(item.plan_calendar_id, item.id)">
            mdi-eye
          </v-icon>

          <v-dialog v-model="dialog" scrollable max-width="300px">
            <template v-slot:activator="{ on, attrs }">
              <v-icon small class="mr-2" v-bind="attrs" v-on="on">
                mdi-plus
              </v-icon>
            </template>
            <v-card>
              <v-card-title>ເພີ່ມຈຳນວນຮອບໃນມື້</v-card-title>
              <v-divider></v-divider>
              <v-card-text>
                <v-text-field type="number" v-model="round"></v-text-field>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn color="blue darken-1" text @click="cancelDialog()">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" text @click="addRoundDialog(item)">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

        </template>
      </v-data-table><br />
      <template>
        <Pagination v-if="pagination.total_pages > 1" :pagination="pagination" :offset="offset" @paginate="fetchData()">
        </Pagination>
      </template>
    </div>
  </v-container>
</template>

<script>
// import { GetOldValueOnInput } from "@/Helpers/GetValue";
import trashMixin from "@/views/calendar/trashMixin";
export default {
  mixins: [trashMixin],
  name: "Trash",
  data() {
    return {
      //   loading: false,
      //   calendarId: "",
      //   //Pagination
      //   offset: 12,
      //   calendars: [],
      //   pagination: {},
      //   per_page: 15,
      //   search: "",
      //   oldVal: "",
      //   summary: {},
      //   statuses: ["pending"],
      dialog: false,
      round: 0,
      server_errors: {},

      headers: [
        { text: "ລຳດັບ", value: "route_plan_detail.priority" },
        { text: "ລູກຄ້າ", value: "customer" },
        {
          text: "ຈຳນວນຂີ້ເຫື້ຍອ",
          value: "amount",
          align: "center",
          sortable: false,
        },
        {
          text: "ສະຖານະ",
          value: "status",
          align: "center",
          sortable: false,
        },
        {
          text: "ວັນທີສ້າງ",
          value: "created_at",
          align: "center",
          sortable: false,
        },
        {
          text: "ວັນທີເກັບ",
          value: "collected_at",
          align: "center",
          sortable: false,
        },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    cancelDialog() {
      this.dialog = false;
    },
    addRoundDialog(item) {
      if (this.round > 0) {
        this.$store.commit("Loading_State", true);
        this.$axios
          .post("plan-calendar-detail-round/" + item.id, {
            round: this.round
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit("Loading_State", false);
                this.round = 0;
                this.dialog = false;
                this.fetchData()

              }, 100);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.round = 0;
            this.dialog = false;
            this.fetchData();
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            if (error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }

          });
      } else {
        this.dialog = false;
      }


    },

    // fetchData() {
    //   this.$store.commit("Loading_State", true);
    //   this.$axios
    //     .get("plan-calendar/" + this.$route.params.id + "/detail", {
    //       params: {
    //         page: this.pagination.current_page,
    //         per_page: this.per_page,
    //         statuses: this.statuses,
    //       },
    //     })
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.$store.commit("Loading_State", false);
    //           this.calendars = res.data.data.data;
    //           this.summary = res.data.data.summary;
    //           this.pagination = res.data.data.pagination;
    //         }, 100);
    //       }
    //     })
    //     .catch((error) => {
    //       this.$store.commit("Loading_State", false);
    //       this.fetchData();
    //       if (error.response.status == 422) {
    //         this.toast.msg = error.message;
    //       }
    //     });
    // },
    // statusColor(value) {
    //   if (value == "pending") return "info";
    //   else if (value == "success") return "success";
    //   else return "error";
    // },
    // getUnit(value) {
    //   console.log(value);
    //   if (value == "bag") return "ຖົງ";
    //   else return "Container";
    // },
    // Search() {
    //   GetOldValueOnInput(this);
    // },
    // viewPage(plan_calendar, id) {
    //   console.log(plan_calendar, id);
    //   this.$router.push({
    //     name: "TrashDetail",
    //     params: { plan_calendar, id },
    //   });
    // },
  },
  watch: {
    // search: function (value) {
    //   if (value == "") {
    //     this.fetchData();
    //   }
    // },
  },
  created() {
    // this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
