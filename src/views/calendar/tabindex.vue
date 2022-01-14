<template>
  <v-container>
    <v-breadcrumbs large class="pt-0">
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-chevron-left</v-icon></v-btn
      >
      ລາຍລະອຽດແຜນ</v-breadcrumbs
    >
    <v-row>
      <v-col>
        <p v-if="data.plan_month">
          {{ data.plan_month.name }} - {{ data.route_plan.name }} -
          {{ data.plan_month.name }}
          <span class="primary-color">({{ data.driver.name }}),</span> ວັນທີ
          {{ data.date }}
        </p>
      </v-col>
    </v-row>
    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1"> ທັງໝົດ </v-tab>
          <v-tab href="#tab-2">
            <v-badge color="green" :content="summary.pending_count">
              ລໍຖ້າ
            </v-badge>
          </v-tab>
          <v-tab href="#tab-3">
            <v-badge color="red" :content="summary.success_count">
              ສຳເລັດ
            </v-badge>
          </v-tab>
        </v-tabs>
        <!-- <hr /> -->

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <allTrash> </allTrash>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <pendingTrash />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-3">
            <v-card flat>
              <v-card-text>
                <successTrash />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import allTrash from "@views/calendar/CalendarTab/allTrash";
import pendingTrash from "@views/calendar/CalendarTab/pendingTrash";
import successTrash from "@views/calendar/CalendarTab/successTrash";
import trashMixin from "@/views/calendar/trashMixin";
export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  mixins: [trashMixin],
  props: ["plan"],
  components: {
    allTrash,
    pendingTrash,
    successTrash,
  },
  data() {
    return {
      tab: null,
      data: {},
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id },
      // });
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id: this.data.plan_month_id },
      // });
    },
    fetchDataPlanMonth() {
      this.$axios
        .get(
          "plan-month/" +
            this.$route.params.planMonthId +
            "/plan-calendar/" +
            this.$route.params.id
        )
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.data = res.data.data;
              console.log(this.data);
            }, 100);
          }
        })
        .catch(() => {});
    },
  },
  created() {
    if (this.$route.query.tab == "trash-all") {
      this.tab = "tab-1";
    } else if (this.$route.query.tab == "trash-pending") {
      this.tab = "tab-2";
    } else if (this.$route.query.tab == "trash-success") {
      this.tab = "tab-3";
    }
    this.fetchDataPlanMonth();
  },
  watch: {
    tab: function (value) {
      if (value == "tab-1") {
        this.$router
          .push({ name: "PlanCalendarDetail", query: { tab: "trash-all" } })
          .catch(() => {});
      } else if (value == "tab-2") {
        this.$router
          .push({
            name: "PlanCalendarDetail",
            query: { tab: "trash-pending" },
          })
          .catch(() => {});
      } else if (value == "tab-3") {
        this.$router
          .push({
            name: "PlanCalendarDetail",
            query: { tab: "trash-success" },
          })
          .catch(() => {});
      }
    },
  },
};
</script>

<style>
</style>
