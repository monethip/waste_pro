<template>
  <v-card
    outlined
    min-width="200px"
    @click="openNewTab(route)"
  >
    <v-skeleton-loader
      v-if="(!title)"
      class="mx-auto"
      max-width="300"
      type="card"
    />

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
          class="ml-1 text-caption"
        >
          <p class="ma-0">
            {{ title }}
          </p>
        </div>
      </v-chip>
      <v-chip
        v-else
        class="text-caption text-wrap"
        :color="bg_color"
        :dark="isContrastingWithWhite(bg_color)"
      >
        <p class="ma-0">
          {{ title }}
        </p>
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
        <p class="ma-0">
          {{ Intl.NumberFormat().format(billing_count) }}
          {{ unit_count ? unit_count : "ບິນ" }}
        </p>
      </v-chip>
    </v-card-title>
    <v-card-text v-if="total">
      <p class="ma-0 text-h4 font-weight-bold">
        {{ Intl.NumberFormat().format(total) }}
        {{ unit_total ? unit_total : "k" }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: [
    "title",
    "billing_count",
    "total",
    "bg_color",
    "route",
    "icon",
    "icon_color",
    "unit_count",
    "unit_total",
    "loading",
  ],
  data() {
    return {};
  },
  created() {},
  beforeUpdate() {
    this.$store.commit("Loading_State", true);
  },
  updated() {
    this.$store.commit("Loading_State", false);
  },
  methods: {
    getColor(value) {
      return `background-color: ${value}`;
    },
    openNewTab(route) {
      if (route) window.open(route.href, "_blank");
    },
    isContrastingWithWhite(color) {
      if (color) {
        const relativeLuminance = (color) => {
          const [r, g, b] = color
            .match(/\w\w/g)
            .map((x) => parseInt(x, 16) / 255);
          const gamma = (c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
          return 0.2126 * gamma(r) + 0.7152 * gamma(g) + 0.0722 * gamma(b);
        };

        const contrast = Math.abs(
          relativeLuminance(color) - relativeLuminance("#ffffff"),
        );
        return contrast >= 0.5;
      }
    },
  },
};
</script>
