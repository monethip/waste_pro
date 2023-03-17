<template>
  <v-container>
    <v-breadcrumbs
      large
      class="pt-0"
    >
      ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ຍອ
    </v-breadcrumbs>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          :loading="loading"
          :disabled="loading"
          @click="exportData()"
        >
          Export
        </v-btn>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedDuration"
          outlined
          dense
          :items="duration"
          item-text="name"
          item-value="duration"
          label="ຊ່ວງເວລາ"
        />
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
            v-model="year_from"
            style="height: 40px"
            type="year"
            format="YYYY"
            placeholder="ເລີ່ມປີ"
            @input="fetchData()"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
            v-model="year_to"
            type="year"
            format="YYYY"
            placeholder="ຫາປີ"
            @input="fetchData()"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
            v-model="month_from"
            type="month"
            placeholder="ເລີ່ມເດືອນ"
            @input="fetchData()"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
            v-model="month_to"
            type="month"
            placeholder="ຫາເດືອນ"
            @input="fetchData()"
          />
        </section>
      </v-col>

      <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
        <section>
          <date-picker
            v-model="date_from"
            style="height: 40px"
            type="date"
            placeholder="ເລີ່ມວັນທີ"
            @input="fetchData()"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
        <section>
          <date-picker
            v-model="date_to"
            style="height: 40px"
            type="date"
            placeholder="ຫາວັນທີ"
            @input="fetchData()"
          />
        </section>
      </v-col>

      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="Search"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>
    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1">
            ຄົວເຮືອນ
          </v-tab>
          <v-tab href="#tab-2">
            ບໍລິສັດ
          </v-tab>
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
import HomeCollection from '@views/report/tab/homeCollection';
import CompanyCollection from '@views/report/tab/companyCollection';
import collection from '@views/report/collection';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  components: {
    HomeCollection,
    CompanyCollection,
  },
  mixins: [collection],
  data() {
    return {
      data: {},
    };
  },
  created() {
    // if (this.$route.query.tab == "home") {
    //   this.tab = "tab-1";
    //   this.selectedInvoceType = "home";
    //   this.fetchData();
    // } else if (this.$route.query.tab == "company") {
    //   this.tab = "tab-2";
    //   this.selectedInvoceType = "company";
    //   this.fetchData();
    // }
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
  // watch: {
  //   tab: function (value) {
  //     if (value == "tab-1") {
  //       // this.fetchData();
  //       this.selectedInvoceType = "home";
  //       this.$router
  //         .push({ name: "Report-Trash", query: { tab: "home" } })
  //         .catch(() => {});
  //     } else if (value == "tab-2") {
  //       this.selectedInvoceType = "company";
  //       this.$router
  //         .push({
  //           name: "Report-Trash",
  //           query: { tab: "company" },
  //         })
  //         .catch(() => {});
  //     }
  //   },
  // },
};
</script>

<style>
.mx-input {
  height: 40px !important;
}
</style>
