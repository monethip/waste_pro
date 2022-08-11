<template>
  <v-card outlined>
    <v-card-title class="d-flex justify-between w-full" style="position: relative">
      <v-chip class="text-caption" :color="bg_color" dark>{{ title }}</v-chip>
      <v-chip
        style="position: absolute;right: 10px; !important"
        :color="bg_color"
        outlined
      >{{ formatNumber(billing_count) }} ບິນ</v-chip>
    </v-card-title>
    <v-card-text>
      <p class="text-h5">{{ formatNumber(total) }} K</p>
    </v-card-text>
  </v-card>
</template>

<script>
import numberFormat from "../..//Helpers//formatNumber";
export default {
  props: ["title", "billing_count", "total", "bg_color"],
  data() {
    return {};
  },
  methods: {
    formatNumber(value) {
      return numberFormat(value);
    },
    getColor(value) {
      return "background-color: " + value;
    }
  }
};
</script>