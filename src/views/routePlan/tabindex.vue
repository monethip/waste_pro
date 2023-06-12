<template>
  <v-container>
    <v-breadcrumbs
      large
      class="pt-0"
    >
      ແຜນຈັດເສັ້ນທາງການເກັບຂີ້ເຫື້ຍອ
    </v-breadcrumbs>
    <v-row class="mb-2" />
    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1">
            ຄົວເຮືອນ
          </v-tab>
          <v-tab href="#tab-2">
            ຫົວໜ່ວຍທຸລະກິດ
          </v-tab>
        </v-tabs>
        <!-- <hr /> -->

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <Home :tab="tab" />
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <Company :tab="tab" />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Home from '@views/routePlan/tabs/home/plan';
import Company from '@views/routePlan/tabs/company/company';
// import home from "@views/routeplan/home";
export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  // mixins: [home],
  components: {
    Home,
    Company,
  },
  data() {
    return {
      tab: null,
      data: {},
    };
  },
  watch: {
    tab(value) {
      if (value == 'tab-1') {
        // this.fetchData();
        this.$router
          .push({ name: 'Plan', query: { tab: 'home' } })
          .catch(() => {});
      } else if (value == 'tab-2') {
        this.$router
          .push({
            name: 'Plan',
            query: { tab: 'company' },
          })
          .catch(() => {});
      }
    },
  },
  created() {
    if (this.$route.query.tab == 'home') {
      this.tab = 'tab-1';
      // this.fetchData();
    } else if (this.$route.query.tab == 'company') {
      this.tab = 'tab-2';
      // this.fetchData();
    }
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
