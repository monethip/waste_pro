<template>
  <div>
    <v-app-bar flat fixed app color="transparent">
      <v-icon style="padding: 4px" @click="drawer = !drawer">
        mdi-order-bool-descending
      </v-icon>
      <v-spacer></v-spacer>
      <v-btn text fab dark small class="mr-8">
        <v-badge overlap color="orange">
          <template v-slot:badge> 4 </template>
          <v-icon large color="grey darken-1"> notifications </v-icon>
        </v-badge>
      </v-btn>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon x-large v-on="on">
            <v-avatar color="grey" size="46px">
              <span class="white--text text-h5 text-break">{{ name }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar color="grey" size="46px">
                <span class="white--text text-h5 text-break">{{ name }}</span>
              </v-avatar>
              <h4>{{ userProfile.name }}</h4>
              <p class="text-caption mt-1">{{ userProfile.email }}<br /></p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="userLogout">
                Log out
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
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
        <!--User groups-->
        <v-list-group
          :prepend-icon="'mdi-account-group'"
          no-action
          color="indigo darken-4"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>ຈັດການຂໍ້ມູນ</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            exact
            color="indigo darken-4"
            v-for="(item, k) in setting"
            :key="k"
            :to="item.to"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <!--Route plan-->
        <v-list-group
          :prepend-icon="'mdi-map'"
          no-action
          color="indigo darken-4"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Route Plan</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            exact
            color="indigo darken-4"
            v-for="(item, k) in routes"
            :key="k"
            :to="item.to"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <!--Report groups-->
        <v-list-group
          :prepend-icon="'mdi-chart-bubble'"
          no-action
          color="indigo darken-4"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>ລາຍງານ</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            exact
            color="indigo darken-4"
            v-for="(item, k) in reports"
            :key="k"
            :to="item.to"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: true,
      userProfile: {},
      name: "",
      items: [
        {
          icon: "mdi-apps",
          title: "ໜ້າຫຼັກ",
          to: "/",
        },
        // {
        //   icon: "mdi-calendar-month-outline",
        //   title: "ແພັກເກັດ",
        //   to: "/package",
        // },
        // {
        //   icon: "mdi-home-account",
        //   title: "ທີ່ຢູ່",
        //   to: "/village",
        // },
      ],

      routes: [
        {
          icon: "mdi-sitemap",
          title: "Plan",
          to: "/plan",
        },
        {
          icon: "mdi-calendar-month",
          title: "Plan Calendar",
          to: "/calendar",
        },
      ],

      setting: [
        {
          icon: "mdi-account-key",
          title: "Roles",
          to: "/role",
        },
        {
          icon: "mdi-account",
          title: "Users",
          to: "/user",
        },
        {
          icon: "mdi-dump-truck",
          title: "Drivers",
          to: "/driver",
        },
        {
          icon: "mdi-account-group",
          title: "Customer",
          to: "/customer",
        },
        {
          icon: "mdi-calendar-month-outline",
          title: "Package",
          to: "/package",
        },
        {
          icon: "mdi-home-account",
          title: "ທີ່ຢູ່",
          to: "/village",
        },
        {
          icon: "mdi-home-account",
          title: "ຈັດການລາຍລະອຽດທີ່ຢູ່",
          to: "/village-variation",
        },
      ],
      reports: [
        {
          icon: "mdi-chart-bubble",
          title: "ລາຍງານການເກັບຂີ້ເຫຍື້ອ",
          to: "/report/trash",
        },
        {
          icon: "mdi-cash",
          title: "ລາຍງານຂໍ້ມູນບັນຊີ",
          to: "/report/invoice",
        },
        {
          icon: "mdi-account",
          title: "ລາຍງານຂໍ້ມູນຄົນຂັບລົດ",
          to: "/report/driver",
        },
        {
          icon: "mdi-account-group",
          title: "ລາຍງານຂໍ້ມູນລູກຄ້າ",
          to: "/report/customer",
        },
      ],
    };
  },

  computed: {
    user() {
      return this.$store.getters["User/getUsertype"];
    },
    profile() {
      return this.$store.getters["User/getUserProfile"];
    },
    ...mapGetters({
      userRole: "User/getUserRole",
    }),
  },
  created() {
    this.userProfile = JSON.parse(window.localStorage.getItem("user"));
    this.name = this.userProfile.name.slice(0, 1);
  },
  methods: {
    ...mapActions({
      Logout: "User/destroyToken",
    }),
    userLogout() {
      this.Logout();
    },
  },
};
</script>
<style lang="scss" scoped>
.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 28px !important;
}
</style>