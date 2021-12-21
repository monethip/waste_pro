<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <p>ຂໍ້ມູນບໍລິສັດທີ່ສົ່ງຄຳຂໍເກັບຂີ້ເຫື້ຍອ</p>
      </v-col>
    </v-row>

    <v-card>
      <v-tabs v-model="tab" dark background-color="tab-color lighten-2">
        <v-tab href="#tab-1">ລໍຖ້າກວດສອບ</v-tab>
        <v-tab href="#tab-2">ກວດສອບສຳເລັດແລ້ວ</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-1">
          <pending />
        </v-tab-item>
      </v-tabs-items>

      <v-tabs-items v-model="tab">
        <v-tab-item value="tab-2">
          <success />
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import Success from "@views/company/companyRequest/success.vue";
import Pending from "@views/company/companyRequest/pending.vue";
export default {
  components: { Success, Pending },
  data() {
    return {
      tab: null,
    };
  },
  watch: {
    tab: function (value) {
      if (value == "tab-1") {
        this.$router
          .push({
            name: "CompanyRequest",
            query: { tab: "company-request-pending" },
          })
          .catch(() => {});
      } else if (value == "tab-2") {
        this.$router
          .push({
            name: "CompanyRequest",
            query: { tab: "company-request-success" },
          })
          .catch(() => {});
      }
    },
  },
  created() {
    if (this.$route.query.tab == "company-request-pending") {
      this.tab = "tab-1";
    } else if (this.$route.query.tab == "company-request-success") {
      this.tab = "tab-2";
    }
  },
};
</script>
<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>