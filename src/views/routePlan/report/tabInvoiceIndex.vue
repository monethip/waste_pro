<template>
  <v-container>
    <v-breadcrumbs
      large
      class="pt-0"
    >
      ລາຍງານຂໍ້ມູນບິນ
    </v-breadcrumbs>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
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

      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ,ເລກບິນ"
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
            <HomeInvoice :tab="tab" />
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <CompanyInvoice :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import HomeInvoice from '@views/report/tab/homeInvoice';
import CompanyInvoice from '@views/report/tab/companyInvoice';
import invoice from '@views/report/invoice';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  components: {
    HomeInvoice,
    CompanyInvoice,
  },
  mixins: [invoice],
  data() {
    return {
      tab: null,
      data: {},
    };
  },
  // created() {
  //   if (this.$route.query.tab == "home") {
  //     this.tab = "tab-1";
  //     this.fetchData();
  //   } else if (this.$route.query.tab == "company") {
  //     this.tab = "tab-2";
  //     this.fetchData();
  //   }
  // },
  watch: {
    // tab: function (value) {
    //   if (value == "tab-1") {
    //     // this.fetchData();
    //     this.$router
    //       .push({ name: "Report-Invoice", query: { tab: "home" } })
    //       .catch(() => {});
    //   } else if (value == "tab-2") {
    //     this.$router
    //       .push({
    //         name: "Report-Invoice",
    //         query: { tab: "company" },
    //       })
    //       .catch(() => {});
    //   }
    // },
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
};
</script>

<style>
.mx-input {
  height: 40px !important;
}
</style>
