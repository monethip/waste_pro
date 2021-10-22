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
      <v-icon style="padding: 4px" @click="drawer = !drawer"
        >mdi-order-bool-descending
      </v-icon>
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" > mdi-order-bool-descending</v-app-bar-nav-icon> -->
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <!-- <div>
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
     </div> -->
      <v-spacer></v-spacer>
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="grey" size="46px">
              <span class="white--text text-h5">M</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="grey" size="46px">
                <span class="white--text text-h5">M</span>
              </v-avatar>
              <h4>Monetip Sengthong</h4>
              <p class="text-caption mt-1">monethip1299@gmail.com <br /></p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text> Sign out </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      floating
      class="app-navigation-menu"
    >
      <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
        <router-link to="/" class="d-flex align-center text-decoration-none">
          <v-img
            :src="require('../../assets/logo-finalized.png')"
            max-height="30px"
            max-width="30px"
            alt="logo"
            contain
            eager
            class="app-logo me-3"
          ></v-img>
          <v-slide-x-transition>
            <h3 class="app-title text--primary">Vientiane Waste</h3>
          </v-slide-x-transition>
        </router-link>
      </div>
      <v-list expand shaped>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="indigo darken-4"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- <v-main>
      <router-view />
    </v-main> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: "mdi-apps",
          title: "ໜ້າຫຼັກ",
          to: "/",
        },
        {
          icon: "mdi-calendar-month-outline",
          title: "ແພັກເກັດ",
          to: "/package",
        },
        {
          icon: "mdi-home-account",
          title: "ບ້ານ",
          to: "/village",
        },
        {
          icon: "mdi-account-star-outline",
          title: "ລູກຄ້າ",
          to: "/customer",
        },
        {
          icon: "mdi-chart-bubble",
          title: "ລາຍງານ",
          to: "/inspire",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}
</style>