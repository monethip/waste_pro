<template>
  <div>
    <v-app-bar flat fixed app class="nav">
      <v-icon style="padding: 4px" @click="drawer = !drawer">
        mdi-order-bool-descending
      </v-icon>
      <v-spacer></v-spacer>

      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text fab dark small class="mr-8" v-on="on">
            <v-badge overlap color="orange">
              <template v-slot:badge>{{ notifications.length }}</template>
              <v-icon large color="grey darken-1"> notifications </v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card>
          <v-card-text class="px-0">
            <v-list-item-content class="justify-center">
              <v-list two-line>
                <v-list-item-group active-class="pink--text" multiple>
                  <template v-for="(item, index) in notifications">
                    <v-list-item :key="item.id" @click="viewPage(item.id)">
                      <v-list-item-content>
                        <v-list-item-title
                          v-text="item.data.name"
                        ></v-list-item-title>

                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.data.text"
                        ></v-list-item-subtitle>

                        <v-list-item-subtitle
                          v-text="item.data.thanks"
                        ></v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action-text>
                        <span class="primary-color">{{
                          moment(item.created_at).format("DD-MM-YY")
                        }}</span></v-list-item-action-text
                      >
                    </v-list-item>

                    <v-divider
                      v-if="index < notifications.length - 1"
                      :key="index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>

              <v-divider class="my-3"></v-divider>
              <v-list-item @click="viewAllNoti">
                <div class="mx-auto text-center">
                  <span class="primary-color">ອ່ານທັງໝົດ</span>
                </div>
              </v-list-item>
            </v-list-item-content>
          </v-card-text>
        </v-card>
      </v-menu>

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
            max-height="60px"
            max-width="60px"
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
        <!--
    
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

   
        <v-list-group
          :prepend-icon="'mdi-map'"
          no-action
          color="indigo darken-4"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>ແຜນເສັ້ນທາງ</v-list-item-title>
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

       
        <v-list-group
          :prepend-icon="'mdi-note-outline'"
          no-action
          color="indigo darken-4"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>ຈັດການບິນ</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            exact
            color="indigo darken-4"
            v-for="(item, k) in invoices"
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
            color="primary-color"
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
-->
        <!--Report groups-->
        <v-list-group
          v-for="(item, k) in group_menus"
          :key="k"
          :prepend-icon="item.icon"
          no-action
          color="indigo darken-4"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            exact
            color="primary-color"
            v-for="(i, k) in item.menu"
            :key="k"
            :to="i.to"
          >
            <v-list-item-action>
              <v-icon>{{ i.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="i.title" />
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
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 20,
      notifications: [],
      selectedStatus: "unread",
      items: [
        {
          icon: "mdi-apps",
          title: "ໜ້າຫຼັກ",
          to: "/dashboard",
          permissions: ["create_user"],
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
      group_menu: [
        {
          id: 1,
          title: "ຈັດການຂໍ້ມູນ",
          icon: "mdi-account-group",
          menu: [
            {
              icon: "mdi-account-key",
              title: "Roles",
              to: "/role",
              permissions: ["get_role", "create_role"],
            },
            {
              icon: "mdi-account",
              title: "Users",
              to: "/user",
              permissions: ["get_user"],
            },
            {
              icon: "mdi-dump-truck",
              title: "Drivers",
              to: "/driver",
              permissions: ["get_driver"],
            },
            {
              icon: "mdi-account-group",
              title: "Customer",
              to: "/customer",
              permissions: ["get_customer"],
            },
            {
              icon: "mdi-package",
              title: "ຈັດການແພັກເກດ",
              to: "/package",
              permissions: ["get_package"],
            },
            {
              icon: "mdi-home-account",
              title: "ຈັດການທີ່ຢູ່",
              to: "/village",
              permissions: ["create_address"],
            },
            {
              icon: "mdi-home-account",
              title: "ຈັດການລາຍລະອຽດທີ່ຢູ່",
              to: "/village-variation",
              permissions: ["create_address"],
            },
          ],
        },
        {
          id: 2,
          title: "ແຜນເສັ້ນທາງ",
          icon: "mdi-map",
          menu: [
            {
              icon: "mdi-sitemap",
              title: "ເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ",
              to: "/plan",
              permissions: ["get_route_plan"],
            },
            {
              icon: "mdi-calendar-month",
              title: "ຈັດແຜນເວລາເກັບຂີ້ເຫື້ຍອ",
              to: "/calendar",
              permissions: ["update_plan_calendar"],
            },
          ],
        },
        {
          id: 3,
          title: "ຈັດການບິນ",
          icon: "mdi-note-outline",
          menu: [
            {
              icon: "mdi-note-outline",
              title: "ຈັດການຂໍ້ມູນບິນ",
              to: "/invoice",
              permissions: ["get_invoice"],
            },
            {
              icon: "mdi-close-circle-outline",
              title: "ເຫດຜົນຍົກເລີກບິນ",
              to: "/reject",
              permissions: ["get_invoice"],
            },
          ],
        },
        {
          id: 4,
          title: "ລາຍງານ",
          icon: "mdi-chart-bubble",
          menu: [
            {
              icon: "mdi-chart-bubble",
              title: "ລາຍງານການເກັບຂີ້ເຫຍື້ອ",
              to: "/report/trash",
              permissions: [],
            },
            {
              icon: "mdi-cash",
              title: "ລາຍງານຂໍ້ມູນບັນຊີ",
              to: "/report/invoice",
              permissions: [],
            },
            {
              icon: "mdi-account",
              title: "ລາຍງານຂໍ້ມູນຄົນຂັບລົດ",
              to: "/report/driver",
              permissions: [],
            },
            {
              icon: "mdi-account-group",
              title: "ລາຍງານຂໍ້ມູນລູກຄ້າ",
              to: "/report/customer",
              permissions: [],
            },
          ],
        },
      ],

      // routes: [
      //   {
      //     icon: "mdi-sitemap",
      //     title: "ເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ",
      //     to: "/plan",
      //     permissions: ["get_route_plan"],
      //   },
      //   {
      //     icon: "mdi-calendar-month",
      //     title: "ຈັດແຜນເວລາເກັບຂີ້ເຫື້ຍອ",
      //     to: "/calendar",
      //     permissions: ["update_plan_calendar"],
      //   },
      // ],
      // invoices: [
      //   {
      //     icon: "mdi-note-outline",
      //     title: "ຈັດການຂໍ້ມູນບິນ",
      //     to: "/invoice",
      //     permissions: ["get_invoice"],
      //   },
      //   {
      //     icon: "mdi-close-circle-outline",
      //     title: "ເຫດຜົນຍົກເລີກບິນ",
      //     to: "/reject",
      //     permissions: ["get_invoice"],
      //   },
      // ],

      // setting: [
      //   {
      //     icon: "mdi-account-key",
      //     title: "Roles",
      //     to: "/role",
      //     permissions: ["get_role", "create_role"],
      //   },
      //   {
      //     icon: "mdi-account",
      //     title: "Users",
      //     to: "/user",
      //     permissions: ["create_user"],
      //   },
      //   {
      //     icon: "mdi-dump-truck",
      //     title: "Drivers",
      //     to: "/driver",
      //     permissions: ["get_driver"],
      //   },
      //   {
      //     icon: "mdi-account-group",
      //     title: "Customer",
      //     to: "/customer",
      //     permissions: ["get_customer"],
      //   },
      //   {
      //     icon: "mdi-package",
      //     title: "ຈັດການແພັກເກດ",
      //     to: "/package",
      //     permissions: ["get_package"],
      //   },
      //   {
      //     icon: "mdi-home-account",
      //     title: "ຈັດການທີ່ຢູ່",
      //     to: "/village",
      //     permissions: ["create_address"],
      //   },
      //   {
      //     icon: "mdi-home-account",
      //     title: "ຈັດການລາຍລະອຽດທີ່ຢູ່",
      //     to: "/village-variation",
      //     permissions: ["create_address"],
      //   },
      // ],
      // reports: [
      //   {
      //     icon: "mdi-chart-bubble",
      //     title: "ລາຍງານການເກັບຂີ້ເຫຍື້ອ",
      //     to: "/report/trash",
      //     permissions: [],
      //   },
      //   {
      //     icon: "mdi-cash",
      //     title: "ລາຍງານຂໍ້ມູນບັນຊີ",
      //     to: "/report/invoice",
      //     permissions: [],
      //   },
      //   {
      //     icon: "mdi-account",
      //     title: "ລາຍງານຂໍ້ມູນຄົນຂັບລົດ",
      //     to: "/report/driver",
      //     permissions: [],
      //   },
      //   {
      //     icon: "mdi-account-group",
      //     title: "ລາຍງານຂໍ້ມູນລູກຄ້າ",
      //     to: "/report/customer",
      //     permissions: [],
      //   },
      // ],
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

    // check permission
    group_menus: function () {
      return this.group_menu.filter((group) => {
        // console.log(group.title);
        return group.menu.filter((menu) => {
          console.log(menu.permissions);
          if (this.$can(menu.permissions)) {
            return menu;
          }
        });
      });
      // return this.menu.filter((i) => i.permissions == "");
    },
  },
  created() {
    this.userProfile = JSON.parse(window.localStorage.getItem("user"));
    this.name = this.userProfile.name.slice(0, 1);
    this.fetchData();
    // console.log(this.group_menus);
    // console.log(this.group_menu);
  },
  methods: {
    ...mapActions({
      Logout: "User/destroyToken",
    }),
    userLogout() {
      this.Logout();
    },
    // menu(){
    //     this.invoices = [
    //     {
    //       icon: "mdi-note-outline",
    //       title: "ອອກບິນ",
    //       to: "/invoice",
    //     },
    //     {
    //       icon: "mdi-close-circle-outline",
    //       title: "ເຫດຜົນຍົກເລີກບິນ",
    //       to: "/reject",

    //     },

    //                 ];
    //                 return this.invoices;
    // }
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("notification", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            status: this.selectedStatus,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.notifications = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          if (error.response.status == 422) {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          }
        });
    },
    viewAllNoti() {
      this.$router.push({
        name: "NotificationTab",
      });
    },
    viewPage(id) {
      this.$router.push({
        name: "NotificationView",
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../public/scss/main.scss";
.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 28px !important;
}
.nav {
  border-bottom: 2px solid #eee;
  background: #fff !important;
}
</style>