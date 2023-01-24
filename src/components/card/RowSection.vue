<template>
  <v-row>
    <v-col v-for="(card, index) in cards" :key="index">
      <MoneyCard
        :title="card.status_la"
        :total="card.total"
        :billing_count="card.count_billing"
        :bg_color="card.bg_color"
        :route="card.route"
      />
    </v-col>
  </v-row>
</template>

<script>
import MoneyCard from "./MoneyCard.vue";

export default {
  props: ["cards"],
  components: {
    MoneyCard,
  },
  data() {
    return {};
  },
};
</script>
