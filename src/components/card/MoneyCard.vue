<template>
  <v-card @click="openNewTab(route)" outlined style="height:100px">
    <v-card-title
      class="d-flex justify-between w-full"
      style="position: relative"
    >
      <v-chip v-if="icon" class="text-caption" :color="icon_color" dark>
        <v-icon :x-small="true">{{ icon }}</v-icon>
        <div :color="icon_color" class="ml-1">
          {{ title }}
        </div>
      </v-chip>
      <v-chip v-else class="text-caption" :color="bg_color" dark>
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
        >{{ Intl.NumberFormat().format(billing_count) }} ບິນ</v-chip
      >
    </v-card-title>
    <v-card-text>
      <p class="text-h5">{{ Intl.NumberFormat().format(total) }} K</p>
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
  ],
  data() {
    return {};
  },
  methods: {
    getColor(value) {
      return "background-color: " + value;
    },
    openNewTab(route) {
      if (route) window.open(route.href, "_blank");
    },
  },
  created() {
    console.log(this.billing_count);
  },
};
</script>
