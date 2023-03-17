<template>
  <v-container>
    <div>
      <v-card>
        <v-tabs
          v-model="tab"
          dark
          background-color="tab-color lighten-2"
        >
          <v-tab href="#tab-1">
            ຂໍ້ມູນລົດ
          </v-tab>
          <v-tab href="#tab-2">
            ຂໍ້ມູນປະເພດລົດ
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <Vehicle />
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <vehicle-type />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import Vehicle from '../../components/vehicle/Vehicle.vue';
import VehicleType from '../../components/vehicle/Vehicle_Type.vue';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Vehicle`;
  },
  components: { Vehicle, VehicleType },
  data() {
    return {
      tab: null,
    };
  },
  watch: {
    tab(value) {
      if (value == 'tab-1') {
        this.$router
          .push({
            name: 'Vehicle',
            query: { tab: 'vehicle' },
          })
          .catch(() => {});
      } else if (value == 'tab-2') {
        this.$router
          .push({
            name: 'Vehicle',
            query: { tab: 'vehicle-type' },
          })
          .catch(() => {});
      }
    },
  },
  created() {
    if (this.$route.query.tab == 'veicle') {
      this.tab = 'tab-1';
    } else if (this.$route.query.tab == 'vehicle-type') {
      this.tab = 'tab-2';
    }
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
