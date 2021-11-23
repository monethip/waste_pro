<template>
  <v-container>
    <v-row class="my-n6">
      <v-col cols="6">
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon></v-btn
          >
          ລາຍລະອຽດການເກັບຂີ້ເຫຍື້ຍອ</v-breadcrumbs
        >
      </v-col>
      <v-col cols="1">
        <v-btn class="btn-primary" @click="AddPlan()"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="5">
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
            v-if="calendars"
            :headers="headers"
            :items="calendars"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.name="{ item }">
              {{ item.route_plan_detail.customer.name }}
              {{ item.route_plan_detail.customer.surname }}
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip :color="statusColor(item.status)">{{
                item.status
              }}</v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="viewPage(item.id)">
                mdi-eye
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
      server_errors: {},

      routeplans: [],
      selectedRoutePlan: "",
      drivers: [],
      selectedDriver: "",

      headers: [
        { text: "ລຳດັບ", value: "route_plan_detail.priority", align: "center" },
        { text: "ຊື່ລູກຄ້າ", value: "name" },
        {
          text: "ຈຳນວນ",
          value: "bag",
          align: "center",
          sortable: false,
        },
        {
          text: "ສະຖານະ",
          value: "status",
          align: "center",
          sortable: false,
        },
        { text: "", value: "actions", sortable: false },
      ],
      toast: {
        value: true,
        color: "success",
        msg: "",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("plan-calendar/" + this.$route.params.id + "/detail", {
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
              console.log(this.calendars);
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response.status == 422) {
            this.toast.msg = error.message;
          }
        });
    },
    statusColor(value) {
      if (value == "pending") return "info";
      else if (value == "success") return "success";
      else return "error";
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