<template>
  <div>
    <v-app-bar flat fixed app class="nav">
      <v-icon style="padding: 4px" @click="drawer = !drawer"
        >mdi-order-bool-descending</v-icon
      >

      <v-breadcrumbs
        divider=">"
        :items="$route.meta.breadcrumb"
      ></v-breadcrumbs>

      <v-spacer></v-spacer>
      <v-menu bottom min-width="200px" rounded offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text fab dark small class="mr-8" v-on="on">
            <v-badge overlap color="orange">
              <template v-slot:badge>{{ eventNotifications.length }}</template>
              <v-icon large color="grey ">mdi-trash-can</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card>
          <v-card-text class="px-0">
            <v-list-item-content class="justify-center">
              <v-list
                two-line
                style="max-height: 650px"
                class="overflow-y-auto"
              >
                <v-list-item-group active-class="pink--text" multiple>
                  <template v-for="(item, index) in eventNotifications">
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
                        <span class="primary-color">
                          {{ moment(item.created_at).format("DD-MM-YY") }}
                        </span>
                      </v-list-item-action-text>
                    </v-list-item>

                    <v-divider
                      v-if="index < eventNotifications.length - 1"
                      :key="index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
              <v-divider></v-divider>
              <v-list-item @click="viewEventNoti">
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
          <v-btn text fab dark small class="mr-8" v-on="on">
            <v-badge overlap color="orange">
              <template v-slot:badge>{{ notifications.length }}</template>
              <v-icon large color="grey darken-1">notifications</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card>
          <v-card-text class="px-0">
            <v-list-item-content class="justify-center">
              <v-list
                two-line
                style="max-height: 650px"
                class="overflow-y-auto"
              >
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
                        <span class="primary-color">
                          {{ moment(item.created_at).format("DD-MM-YY") }}
                        </span>
                      </v-list-item-action-text>
                    </v-list-item>

                    <v-divider
                      v-if="index < notifications.length - 1"
                      :key="index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
              <v-divider></v-divider>
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
              <p class="text-caption mt-1">
                {{ userProfile.email }}
                <br />
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text @click="userLogout">Log out</v-btn>
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

        <div v-for="item in group_menu" :key="item.id" class="group-menu">
          <v-list-group
            class="group-menu-icon"
            :prepend-icon="item.icon"
            no-action
            color="indigo darken-4"
            v-if="$can(item.group_permissions)"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <div
              v-for="(i, index) in item.menu"
              :key="index"
              style="padding-left: 22px"
            >
              <v-list-item
                exact
                color="primary-color"
                :to="i.to"
                v-if="$can(i.permissions)"
              >
                <v-list-item-action>
                  <v-icon>{{ i.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="i.title" />
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-group>
        </div>
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
      eventNotifications: [],
      selectedStatus: "unread",
      items: [
        {
          icon: "mdi-home",
          title: "home",
          to: "/welcome",
        },
        {
          icon: "mdi-monitor-dashboard",
          title: "dashboard",
          to: "/",
          permissions: ["get_dashboard"],
        },
        {
          icon: "mdi-apps",
          title: "Activity Log",
          to: "/activity-log",
          permissions: ["get_activity"],
        },
      ],
      group_menu: [
        {
          title: "ຈັດການຂໍ້ມູນ",
          icon: "mdi-cog",
          group_permissions: [
            "get_role",
            "get_user",
            "get_customer",
            "get_driver",
            "create_address",
          ],
          menu: [
            {
              icon: "mdi-file-import",
              title: "Import User",
              to: "/import-file",
              permissions: ["create_driver"],
            },
            {
              icon: "mdi-account-key",
              title: "Roles",
              to: "/role",
              permissions: ["get_role", "create_role"],
            },
            {
              icon: "mdi-package",
              title: "ຈັດການຂໍ້ມູນບໍລິການ",
              to: "package",
              permissions: ["get_package", "get_customer"],
            },
            {
              icon: "mdi-home-account",
              title: "ຈັດການທີ່ຢູ່",
              to: "/village",
              permissions: ["create_address", "get_driver"],
            },
            {
              icon: "mdi-home-account",
              title: "ຈັດການລາຍລະອຽດທີ່ຢູ່",
              to: "/village-variation",
              permissions: ["create_address", "get_driver"],
            },
            {
              icon: "mdi-car-multiple",
              title: "ຈັດການພາຫະນະ",
              to: "/vehicle",
              permissions: ["get_vehicle"],
            },
          ],
        },
        {
          title: "ຂໍ້ມູນຜູ້ໃຊ້",
          icon: "mdi-account-supervisor",
          group_permissions: [
            "get_role",
            "get_user",
            "get_customer",
            "get_driver",
            "create_address",
          ],
          menu: [
            {
              icon: "mdi-account-group-outline",
              title: "ຜູ້ໃຊ້ທັງໝົດ",
              to: "/user",
              permissions: ["get_user"],
            },
            {
              icon: "mdi-briefcase-account-outline",
              title: "Sale Users",
              to: "/user-sale",
              permissions: ["get_user"],
            },
            {
              icon: "mdi-dump-truck",
              title: "Drivers",
              to: "/driver",
              permissions: ["get_driver"],
            },
            {
              icon: "mdi-badge-account",
              title: "ພະນັກງານ",
              to: "/employee",
              permissions: ["get_employee"],
            },
            {
              icon: "mdi-account-group",
              title: "Team",
              to: "/team",
              permissions: ["get_team"],
            },
          ],
        },

        {
          title: "ຂໍ້ມູນລູກຄ້າ",
          icon: "mdi-database",
          group_permissions: [
            "get_role",
            "get_user",
            "get_customer",
            "get_driver",
            "create_address",
          ],
          menu: [
            {
              icon: "mdi-account-alert-outline",
              title: "ລູກຄ້າທີ່ຍັງບໍ່ເຂົ້າບໍລິການ",
              to: "/pre-customer",
              permissions: ["get_customer"],
            },
            {
              icon: "mdi-account-group",
              title: "ລູກຄ້າຄົວເຮືອນ",
              to: "/customer",
              permissions: ["get_customer"],
            },
            {
              icon: "mdi-office-building",
              title: "ລູກຄ້າຫົວໜ່ວຍທຸລະກິດ",
              to: "/company",
              permissions: ["get_customer"],
            },
            {
              icon: "mdi-account-group",
              title: "ລູກຄ້າສົງຄຳຮ້ອງຂໍເຂົ້າມາ",
              to: "/company-request",
              permissions: ["get_customer"],
            },
          ],
        },
        {
          title: "ແຜນເສັ້ນທາງ",
          icon: "mdi-map",
          group_permissions: ["get_route_plan"],
          menu: [
            {
              icon: "mdi-sitemap",
              title: "ເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ",
              to: "/plan",
              permissions: ["get_route_plan"],
            },
            {
              icon: "mdi-calendar-month",
              title: "ຈັດແຜນເດີນລົດ",
              to: "/calendar",
              permissions: ["update_plan_calendar"],
            },
          ],
        },
        {
          title: "ເກັບຂີ້ເຫື້ຍອ",
          icon: "mdi-trash-can",
          group_permissions: ["manage_event", "get_customer"],
          menu: [
            {
              icon: "mdi-trash-can",
              title: "ເກັບຂີ້ເຫື້ຍອພິເສດເກົ່າ",
              to: "/collection-event",
              permissions: ["manage_event", "get_customer"],
            },
            {
              icon: "mdi-note-outline",
              title: "ເກັບຂີ້ເຫື້ຍອພິເສດໃໝ່",
              to: "/v2/event-invoice",
              permissions: ["get_invoice"],
            },
          ],
        },
        // {
        //   title: "ບິນແບບເກົ່າ",
        //   icon: "mdi-note-outline",
        //   group_permissions: ["get_invoice"],
        //   menu: [
        //     {
        //       icon: "mdi-note-outline",
        //       title: "ຈັດການຂໍ້ມູນບິນ",
        //       to: "/invoice",
        //       permissions: ["get_invoice"],
        //     },
        //     {
        //       icon: "mdi-close-circle-outline",
        //       title: "ເຫດຜົນຍົກເລີກບິນ",
        //       to: "/reject",
        //       permissions: ["get_invoice"],
        //     },
        //   ],
        // },

        {
          title: "ຈັດການບິນ",
          icon: "mdi-credit-card",
          group_permissions: ["get_invoice"],
          menu: [
            {
              icon: "mdi-note-search",
              title: "ຄົ້ນຫາບິນ",
              to: "/search-billing",
              permissions: ["get_invoice"],
            },
            {
              icon: "mdi-note-outline",
              title: "ບິນທັງໝົດ",
              to: "/billing",
              permissions: ["get_invoice"],
            },

            {
              icon: "mdi-note-outline",
              title: "ຈັດການບິນຢ້ອນຫຼັງ",
              to: "/v2/custom-bill",
              permissions: ["get_invoice"],
            },
            {
              icon: "mdi-note-outline",
              title: "ຈັດການບິນລ່ວງໜ້າ",
              to: "/future-invoice",
              permissions: ["get_invoice"],
            },
          ],
        },

        {
          title: "ລາຍງານ",
          icon: "mdi-finance",
          group_permissions: ["report", "report"],
          menu: [
            {
              icon: "mdi-chart-bubble",
              title: "ເກັບຂີ້ເຫຍື້ອຕາມລົດໃໝ່",
              to: "/report/driver/collection/v2",
              permissions: ["report"],
            },
            // {
            //   icon: "mdi-chart-bubble",
            //   title: "ເກັບຂີ້ເຫຍື້ອຕາມລົດ",
            //   to: "/report/driver/collection",
            //   permissions: ["report"]
            // },
            {
              icon: "mdi-chart-bubble",
              title: "ເກັບຂີ້ເຫຍື້ອຕາມບ້ານ",
              to: "/report/address/collection",
              permissions: ["report"],
            },
            {
              icon: "mdi-chart-bubble",
              title: "ລາຍງານການເກັບຂີ້ເຫຍື້ອ",
              to: "/report/trash",
              permissions: ["report"],
            },
            {
              icon: "mdi-chart-bubble",
              title: "ລາຍງານເກັບຂີ້ເຫຍື້ອພິເສດ",
              to: "/report/event/trash",
              permissions: ["report"],
            },
            {
              icon: "mdi-cash",
              title: "ລານງານບິນ",
              to: "/report/billing/main",
              permissions: ["report"],
            },
            {
              icon: "mdi-cash",
              title: "ລາຍງານຂໍ້ມູນບັນຊີ",
              to: "/report/invoice",
              permissions: ["report"],
            },
            {
              icon: "mdi-cash",
              title: "ຂໍ້ມູນບັນຊີເກັບພິເສດ",
              to: "/report/event/invoice",
              permissions: ["report"],
            },
            {
              icon: "mdi-chart-areaspline",
              title: "ລາຍງານຂໍ້ມູນຄົນຂັບລົດ",
              to: "/report/driver",
              permissions: ["report"],
            },
            {
              icon: "mdi-chart-bar",
              title: "ລາຍງານຂໍ້ມູນລູກຄ້າ",
              to: "/report/customer",
              permissions: ["report"],
            },
            {
              icon: "mdi-chart-bar",
              title: "ລາຍງານຫົວໜ່ວຍທຸລະກິດ",
              to: "/report/company",
              permissions: ["report"],
            },
          ],
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
    this.fetchData();
    this.fetchEventData();
  },
  methods: {
    ...mapActions({
      Logout: "User/destroyToken",
    }),
    userLogout() {
      this.$store.dispatch("auth/destroyToken");
    },
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
    fetchEventData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("notification", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            status: this.selectedStatus,
            type: "EVENT",
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.eventNotifications = res.data.data.data;
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
    viewEventNoti() {
      this.$router.push({
        name: "NotificationTab",
        query: { types: ["EVENT", "CUSTOMER_EVENT"] },
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

.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 6px !important;
}

.v-application--is-ltr .v-list-item__action[data-v-117f5fe7]:first-child,
.v-application--is-ltr .v-list-item__icon[data-v-117f5fe7]:first-child {
  margin-right: 6px !important;
}

.group-menu,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-right: 6px !important;
}

.v-application--is-ltr
  .v-list-group--no-action
  > .v-list-group__items
  > .v-list-item {
  padding-left: 18px !important;
}

.nav {
  border-bottom: 1px solid #eee;
  background: #fff !important;
}

.theme--light.v-navigation-drawer {
  border-right: 1px solid #eee !important;
}

.v-main__wrap.v-main__wrap {
  background: #eee !important;
}

.v-main__wrap.v-main__wrap {
  background: #eee !important;
}
</style>
