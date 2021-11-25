<template>
  <v-container>
    <div>
      <v-card>
        <v-tabs v-model="tab" dark background-color="tab-color lighten-2">
          <v-tab href="#tab-1">Package</v-tab>
          <v-tab href="#tab-2">size</v-tab>
          <v-tab href="#tab-3">Price</v-tab>
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
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>