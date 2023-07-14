<template>
  <v-row>
    <v-col
      v-for="(card, index) in cards"
      :key="index"
    >
      <MoneyCard
        :title="card.status_la || card.title || card.display_type_la"
        :total="card.total"
        :billing_count="card.count_billing"
        :bg_color="card.bg_color"
        :route="card.route"
        :icon="card.icon"
        :icon_color="card.icon_color"
        :unit_count="card.unit_count"
      />
    </v-col>
  </v-row>
</template>

<script>
import MoneyCard from './MoneyCard.vue';

export default {
  components: {
    MoneyCard,
  },
  props: ['cards'],
  data() {
    return {};
  },
};
</script>
