<template>
<div>
 <v-app-bar
    flat
    absolute
    :clipped-left="clipped"
    fixed
    app
    color="transparent"
  >
  <!-- mdi-order-bool-descending -->
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-btn icon @click.stop="miniVariant = !miniVariant">
      <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
    <div>
      <v-text-field
        rounded
        dense
        outlined
        :prepend-inner-icon="mdi - magnify"
        class="app-bar-search flex-grow-0"
        hide-details
      ></v-text-field>

      <v-spacer />
      <v-fade-transition mode="out-in">
        <v-icon
          :key="$vuetify.theme.dark"
          @click="$vuetify.theme.dark = !$vuetify.theme.dark"
        >
          {{ $vuetify.theme.dark ? mdi - github : mdi - bell - outline }}
        </v-icon>
      </v-fade-transition>
      <v-btn icon small class="ms-3">
        <v-icon class="ms-6 me-4"> mdi-bell-outline </v-icon>
      </v-btn>
     </div>
  </v-app-bar>
</div>
 
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vientiane Waste Pro",
    };
  },
};
</script>


<style>
</style>