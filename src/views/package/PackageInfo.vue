<template>
  <v-container>
    <div>
      <v-card>
        <v-tabs v-model="tab" dark background-color="tab-color lighten-2">
          <v-tab href="#tab-1">ປະເພດສັນຍາ</v-tab>
          <v-tab href="#tab-2">ຂະໜາດ</v-tab>
          <v-tab href="#tab-3">ມຸນຄ່າສັນຍາ</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <add-package />
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <package-size />
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-3"> <price /> </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import PackageSize from "../../components/package/PackageSize.vue";
import AddPackage from "../../components/package/AddPackage.vue";
import Price from "../../components/package/Price.vue";
export default {
  components: { PackageSize, Price, AddPackage },
  title() {
    return `Vientiane Waste Co-Dev|Package`;
  },
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
            name: "Package",
            query: { tab: "package" },
          })
          .catch(() => {});
      } else if (value == "tab-2") {
        this.$router
          .push({
            name: "Package",
            query: { tab: "package-size" },
          })
          .catch(() => {});
      } else if (value == "tab-3") {
        this.$router
          .push({
            name: "Package",
            query: { tab: "package-price" },
          })
          .catch(() => {});
      }
    },
  },
  created() {
    if (this.$route.query.tab == "package") {
      this.tab = "tab-1";
    } else if (this.$route.query.tab == "package-size") {
      this.tab = "tab-2";
    } else if (this.$route.query.tab == "package-price") {
      this.tab = "tab-3";
    }
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
