<template>
  <v-container>
    <v-row class="my-n6">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon></v-btn
          >
          ລາຍລະອຽດລູກຄ້າໃນແຜນການເກັບຂີ້ເຫຍື້ຍອ</v-breadcrumbs
        >
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
    <v-row class="mt-n4 mb-2">
      <v-col>
        <h4>
          <span class="mr-8">ຈຳນວນລໍຖ້າ {{ summary.pending_count }} </span>
          <span>ຈຳນວນສຳເລັດ {{ summary.success_count }}</span>
        </h4>
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
            <template v-slot:item.customer="{ item }">
              <div v-if="item.route_plan_detail.customer">
                {{ item.route_plan_detail.customer.name }}
                {{ item.route_plan_detail.customer.surname }}
              </div>
            </template>
            <!--
            <template v-slot:item.start_month="{ item }">
              {{ item.route_plan_detail.customer.start_month }}
            </template>
 -->
            <template v-slot:item.status="{ item }">
              <v-chip :color="statusColor(item.status)">{{
                item.status
              }}</v-chip>
            </template>
            <template v-slot:item.amount="{ item }">
              <div v-if="item.collection_type == 'bag'">
                <v-chip color="primary">{{ item.bag }}</v-chip>
                <span> {{ getUnit(item.collection_type) }}</span>
              </div>
              <div v-else>
                <v-chip color="success">{{ item.container }}</v-chip>
                <span> {{ getUnit(item.collection_type) }}</span>
              </div>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="viewPage(item.route_plan_detail.customer.id)"
              >
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
      summary: {},

      headers: [
        { text: "ລຳດັບ", value: "route_plan_detail.priority" },
        { text: "ຊື່ລູກຄ້າ", value: "customer" },
        { text: "ເລີ່ມວັນທີ", value: "route_plan_detail.customer.start_month" },

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
              this.summary = res.data.data.summary;
              this.pagination = res.data.data.pagination;
            }, 100);
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
    getUnit(value) {
      console.log(value);
      if (value == "bag") return "ຖົງ";
      else return "Container";
    },
    Search() {
      GetOldValueOnInput(this);
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewCustomer",
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
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>