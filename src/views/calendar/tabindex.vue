<template>
  <v-container>
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
  mixins: [trashMixin],
  //   props: ["calendars"],
  components: {
    allTrash,
    pendingTrash,
    successTrash,
  },
  data() {
    return {
      tab: null,
    };
  },
  created() {
    if (this.$route.query.tab == "trash-all") {
      this.tab = "tab-1";
    } else if (this.$route.query.tab == "trash-pending") {
      this.tab = "tab-2";
    } else if (this.$route.query.tab == "trash-success") {
      this.tab = "tab-3";
    }
    // this.fetchData();
  },
  watch: {
    tab: function (value) {
      if (value == "tab-1") {
        this.statuses = [];
        this.fetchData(this.statuses);
        this.$router
          .push({ name: "PlanCalendarDetail", query: { tab: "trash-all" } })
          .catch(() => {});
      } else if (value == "tab-2") {
        this.statuses = [];
        this.statuses = ["pending"];
        this.fetchData(this.statuses);
        this.$router
          .push({
            name: "PlanCalendarDetail",
            query: { tab: "trash-pending" },
          })
          .catch(() => {});
      } else if (value == "tab-3") {
        this.statuses = [];
        this.statuses = ["success"];
        // console.log(this.statuses);
        this.fetchData(this.statuses);
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
