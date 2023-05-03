<template>
  <v-row v-if="selectedVillage.length">
    <v-col
      v-for="detail in filteredDetails"
      :key="detail.variation_id"
    >
      <v-select
        v-model="selectedDetails[detail.variation_name]"
        :items="detail.details"
        :label="detail.variation_name"
        dense
        item-text="variation_name"
        item-value="variation_id"
        multiple
        outlined
      />
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
  computed: {
    selectedDetailIds() {
      const ids = [];
      for (const value of Object.values(this.selectedDetails)) {
        for (const id of value) {
          ids.push(id);
        }
      }

      return ids;
    },
    filteredDetails() {
      const data = [];

      for (const detail of this.villageDetail) {
        console.log(detail.variation_id);
        const existingIndex = data.findIndex((item) => item.variation_id == detail.details.village_variation.id);
        if (existingIndex >= 0) data[existingIndex].details.push(detail);
        else {
          data.push({
            variation_id: detail.details.village_variation.id,
            variation_name: detail.details.village_variation.name,
            details: [detail],
          });
        }
      }
      console.log(data, 55);
      return data;
    },
  },
  watch: {
    selectedDetailIds() {
      this.$emit('input', this.selectedDetailIds);
    },
    async selectedVillage() {
      await this.setVillageDetails();
    },
  },
  async created() {
    await this.fetchVillageVariation();
    await this.setVillageDetails();
  },
  methods: {
    async setVillageDetails() {
      this.villageDetail = [];
      await this.fetchVillageVariation();
      const villageDetails = await this.fetchVillageDetail(
        this.selectedVillage,
        this.villageVariation.map((item) => item.id),
      );
      this.villageDetail = [];
      this.selectedDetails = [];
      for (const variationItem of villageDetails) {
        this.villageDetail.push({
          variation_id: variationItem.id,
          variation_name: variationItem.name,
          details: variationItem,
        });
      }
    },
    async fetchVillageVariation() {
      this.$store.commit('Loading_State', true);
      const res = await this.$axios
        .get('info/village-variation')
        .catch((error) => {
          this.$store.commit('Loading_State', false);

          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
        });

      if (this.$store.state.isLoading) {
        this.villageVariation = res.data.data;
        this.$store.commit('Loading_State', false);
      }
    },
    async fetchVillageDetail(villages, village_variation_ids) {
      let data = [];
      this.$store.commit('Loading_State', true);
      const res = await this.$axios
        .get('info/village-detail', {
          params: {
            villages,
            village_variation_ids,
          },
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);

          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
        });

      if (this.$store.state.isLoading) {
        data = res.data.data;
        this.$store.commit('Loading_State', false);
      }

      return data;
    },
  },
};
</script>
