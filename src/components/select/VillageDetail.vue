<template>
  <v-row v-if="selectedVillage.length > 0">
    <v-col v-for="detail in villageDetail" :key="detail.id">
      <v-select
        outlined
        dense
        :items="detail.details"
        v-model="selectedDetails[detail.variation_name]"
        item-text="name"
        item-value="id"
        :label="detail.variation_name"
        multiple
      ></v-select>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    selectedVillage: Array,
  },
  data() {
    return {
      villageVariation: [],
      villageDetail: [],
      selectedDetails: {},
    };
  },
  methods: {
    async setVillageDetails() {
      this.villageDetail = [];
      await this.fetchVillageVariation();
      for (const variationItem of this.villageVariation) {
        const villageDetail = await this.fetchVillageDetail(
          this.selectedVillage,
          variationItem.id
        );
        this.villageDetail.push({
          variation_id: variationItem.id,
          variation_name: variationItem.name,
          details: villageDetail,
        });
      }

      console.log("dd", this.villageDetail);
    },
    async fetchVillageVariation() {
      this.$store.commit("Loading_State", true);
      const res = await this.$axios
        .get("info/village-variation")
        .catch((error) => {
          this.$store.commit("Loading_State", false);

          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response
              ? error.response.data.message
              : "Something went wrong",
          });
        });

      if (this.$store.state.isLoading) {
        this.villageVariation = res.data.data;
        this.$store.commit("Loading_State", false);
      }
    },
    async fetchVillageDetail(villages, village_variation_id) {
      let data = [];
      this.$store.commit("Loading_State", true);
      const res = await this.$axios
        .get("info/village-detail", {
          params: {
            villages: villages,
            village_variation_id: village_variation_id,
          },
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);

          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response
              ? error.response.data.message
              : "Something went wrong",
          });
        });

      if (this.$store.state.isLoading) {
        data = res.data.data;
        this.$store.commit("Loading_State", false);
      }

      return data;
    },
  },
  computed: {
    selectedDetailIds() {
      let ids = [];
      for (const value of Object.values(this.selectedDetails)) {
        for (const id of value) {
          ids.push(id);
        }
      }

      return ids;
    },
  },
  watch: {
    selectedDetailIds() {
      this.$emit("input", this.selectedDetailIds);
    },
    async selectedVillage() {
      await this.setVillageDetails();
    },
  },
  async created() {
    await this.fetchVillageVariation();
    await this.setVillageDetails();
  },
};
</script>
