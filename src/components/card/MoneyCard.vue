<template>
  <v-card
    outlined
    style="height:100px"
    @click="openNewTab(route)"
  >
    <v-card-title
      class="d-flex justify-between w-full text-wrap"
      style="position: relative"
    >
      <v-chip
        v-if="icon"
        class="text-caption text-wrap"
        :color="icon_color"
        dark
      >
        <v-icon :x-small="true">
          {{ icon }}
        </v-icon>
        <div
          :color="icon_color"
          class="ml-1"
        >
          {{ title }}
        </div>
      </v-chip>
      <v-chip
        v-else
        class="text-caption text-wrap"
        :color="bg_color"
        dark
      >
        {{ title }}
      </v-chip>
      <v-chip
        v-if="
          billing_count != null &&
            billing_count != '' &&
            billing_count != undefined
        "
        style="position: absolute;right: 10px; !important"
        :color="bg_color"
        outlined
        class="text-caption text-wrap"
      >
        {{ Intl.NumberFormat().format(billing_count) }} {{ unit_count ? unit_count : "ບິນ" }}
      </v-chip>
    </v-card-title>
    <v-card-text v-if="total">
      <div class="text-h5 text-wrap">
        {{ Intl.NumberFormat().format(total) }} K
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [
    'title',
    'billing_count',
    'total',
    'bg_color',
    'route',
    'icon',
    'icon_color',
    'unit_count',
  ],
  data() {
    return {};
  },
  created() {
  },
  beforeUpdate() {
    this.$store.commit('Loading_State', true);
  },
  updated() {
    this.$store.commit('Loading_State', false);
  },
  methods: {
    getColor(value) {
      return `background-color: ${value}`;
    },
    openNewTab(route) {
      if (route) window.open(route.href, '_blank');
    },
  },
};
</script>
