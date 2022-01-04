<template>
  <v-container>
    <v-breadcrumbs large class="pt-0"
      >ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ອຍ</v-breadcrumbs
    >
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          :loading="loading"
          :disabled="loading"
          @click="exportData()"
          >Export
        </v-btn>
      </v-col>
      <v-col>
        <v-select
          outlined
          dense
          :items="duration"
          v-model="selectedDuration"
          item-text="name"
          item-value="duration"
          label="Duration"
        ></v-select>
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <v-menu
          v-model="year_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="start_year"
              label="ເລີ່ມປີ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="start_year"
            type="year"
            @input="fetchData()"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <v-menu
          v-model="end_year_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_year"
              label="ຫາປີ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="end_year"
            @input="fetchData()"
            type="year"
            :show-current="true"
            :readonly="false"
            :disabled="false"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <v-menu
          v-model="start_month_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="start_month"
              label="ເລີ່ມເດືອນ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="start_month"
            @input="fetchData()"
            type="month"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <v-menu
          v-model="end_month_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_month"
              label="ສີ້ນສຸດເດືອນ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="end_month"
            @input="fetchData()"
            type="month"
          ></v-date-picker>
        </v-menu>
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
    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1"> ຄົວເຮືອນ </v-tab>
          <v-tab href="#tab-2"> ບໍລິສັດ </v-tab>
        </v-tabs>
        <!-- <hr /> -->

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <HomeCollection :tab="tab" />
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <CompanyCollection :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import HomeCollection from "@views/report/tab/homeCollection";
import CompanyCollection from "@views/report/tab/companyCollection";
import collection from "@views/report/collection";
export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  mixins: [collection],
  components: {
    HomeCollection,
    CompanyCollection,
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
    // fetchDataPlanMonth() {
    //   this.$axios
    //     .get(
    //       "plan-month/" +
    //         this.$route.params.driverId +
    //         "/plan-calendar/" +
    //         this.$route.params.id
    //     )
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.data = res.data.data;
    //           console.log(this.data);
    //         }, 100);
    //       }
    //     })
    //     .catch(() => {});
    // },
  },
  created() {
    if (this.$route.query.tab == "home") {
      this.tab = "tab-1";
      this.fetchData();
    } else if (this.$route.query.tab == "company") {
      this.tab = "tab-2";
      this.fetchData();
    }
  },
  watch: {
    tab: function (value) {
      if (value == "tab-1") {
        // this.fetchData();
        this.$router
          .push({ name: "Report-Trash", query: { tab: "home" } })
          .catch(() => {});
      } else if (value == "tab-2") {
        this.$router
          .push({
            name: "Report-Trash",
            query: { tab: "company" },
          })
          .catch(() => {});
      }
    },
  },
};
</script>

<style>
</style>
