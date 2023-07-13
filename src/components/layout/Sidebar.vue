<template>
  <div>
    <v-app-bar
      flat
      fixed
      app
      class="nav"
    >
      <v-icon
        style="padding: 4px"
        @click="drawer = !drawer"
      >
        mdi-order-bool-descending
      </v-icon>

      <v-breadcrumbs
        divider=">"
        :items="$route.meta.breadcrumb"
      />

      <v-spacer />
      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            text
            fab
            dark
            small
            class="mr-8"
            v-on="on"
          >
            <v-badge
              overlap
              color="orange"
            >
              <template v-slot:badge>
                {{ eventPagination.total }}
              </template>
              <v-icon
                large
                color="grey "
              >
                mdi-trash-can
              </v-icon>
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
                <v-list-item-group
                  active-class="pink--text"
                  multiple
                >
                  <template v-for="(item, index) in eventNotifications">
                    <v-list-item
                      :key="item.id"
                      @click="viewPage(item.id,'event')"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="item.data.name" />

                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.data.text"
                        />

                        <v-list-item-subtitle v-text="item.data.thanks" />
                      </v-list-item-content>

                      <v-list-item-action-text>
                        <span class="primary-color">{{
                          moment(item.created_at).format("DD-MM-YY")
                        }}</span>
                      </v-list-item-action-text>
                    </v-list-item>

                    <v-divider
                      v-if="index < eventNotifications.length - 1"
                      :key="index"
                    />
                  </template>
                </v-list-item-group>
              </v-list>
              <v-divider />
              <v-list-item @click="viewEventNoti">
                <div class="mx-auto text-center">
                  <span class="primary-color">ອ່ານທັງໝົດ</span>
                </div>
              </v-list-item>
            </v-list-item-content>
          </v-card-text>
        </v-card>
      </v-menu>

      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            text
            fab
            dark
            small
            class="mr-8"
            v-on="on"
          >
            <v-badge
              overlap
              color="orange"
            >
              <template v-slot:badge>
                {{ pagination.total }}
              </template>
              <v-icon
                large
                color="grey darken-1"
              >
                notifications
              </v-icon>
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
                <v-list-item-group
                  active-class="pink--text"
                  multiple
                >
                  <template v-for="(item, index) in notifications">
                    <v-list-item
                      :key="item.id"
                      @click="viewPage(item.id,'all')"
                    >
                      <v-list-item-content>
                        <v-list-item-title v-text="item.data.name" />

                        <v-list-item-subtitle
                          class="text--primary"
                          v-text="item.data.text"
                        />

                        <v-list-item-subtitle v-text="item.data.thanks" />
                      </v-list-item-content>

                      <v-list-item-action-text>
                        <span class="primary-color">{{
                          moment(item.created_at).format("DD-MM-YY")
                        }}</span>
                      </v-list-item-action-text>
                    </v-list-item>

                    <v-divider
                      v-if="index < notifications.length - 1"
                      :key="index"
                    />
                  </template>
                </v-list-item-group>
              </v-list>
              <v-divider />
              <v-list-item @click="viewAllNoti">
                <div class="mx-auto text-center">
                  <span class="primary-color">ອ່ານທັງໝົດ</span>
                </div>
              </v-list-item>
            </v-list-item-content>
          </v-card-text>
        </v-card>
      </v-menu>

      <v-menu
        bottom
        min-width="200px"
        rounded
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            x-large
            v-on="on"
          >
            <v-avatar
              color="grey"
              size="46px"
            >
              <span class="white--text text-h5 text-break">{{ name }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="grey"
                size="46px"
              >
                <span class="white--text text-h5 text-break">{{ name }}</span>
              </v-avatar>
              <h4>{{ userProfile.name }}</h4>
              <p class="text-caption mt-1">
                {{ userProfile.email }}
                <br>
              </p>
              <v-divider class="my-3" />
              <v-btn
                depressed
                rounded
                text
                @click="userLogout"
              >
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
        <router-link
          to="/"
          class="d-flex align-center text-decoration-none"
        >
          <v-img
            :src="require('../../assets/logo-finalized.png')"
            max-height="60px"
            max-width="60px"
            alt="logo"
            contain
            eager
            class="app-logo me-3"
          />
          <v-slide-x-transition>
            <h3 class="app-title text--primary">
              Vientiane Waste
            </h3>
          </v-slide-x-transition>
        </router-link>
      </div>

      <v-list
        expand
        shaped
      >
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
        <div
          v-for="item in group_menu"
          :key="item.id"
          class="group-menu"
        >
          <v-list-group
            v-if="(!item.except_roles || (item.except_roles.length && !$role(item.except_roles))) &&( item.menu.length && (item.group_permissions.length <= 0 || $can(item.group_permissions)))"
            class="group-menu-icon"
            :prepend-icon="item.icon"
            no-action
            color="indigo darken-4"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title> {{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <div
              v-for="(i, index) in item.menu"
              :key="index"
              style="padding-left: 22px"
            >
              <v-list-item
                v-if="!i.except_roles || (i.except_roles.length && !$role(i.except_roles)) && (i.permissions.length <= 0 || $can(i.permissions))"
                exact
                color="primary-color"
                :to="i.to"
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
          <v-list-item
            v-if="(!item.except_roles || (item.except_roles.length && !$role(item.except_roles))) && (!item.menu.length && (item.permissions.length <= 0 || $can(item.permissions)))"
            :to="item.to"
            router
            exact
            color="indigo darken-4"
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content style="padding-left: 22px">
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import menus from '@/router/menus.js';

export default {
  data() {
    return {
      drawer: true,
      userProfile: {},
      name: '',
      // Pagination
      offset: 12,
      pagination: {},
      eventPagination: {},
      per_page: 20,
      notifications: [],
      eventNotifications: [],
      selectedStatus: 'unread',
      items: [],
      group_menu: menus,
    };
  },

  computed: {
    user() {
      return this.$store.getters['User/getUsertype'];
    },
    profile() {
      return this.$store.getters['User/getUserProfile'];
    },
    ...mapGetters({
      userRole: 'User/getUserRole',
    }),
  },
  created() {
    this.userProfile = JSON.parse(window.localStorage.getItem('user'));
    this.name = this.userProfile.name.slice(0, 1);
    this.fetchData();
    this.fetchEventData();
  },
  methods: {
    ...mapActions({
      Logout: 'User/destroyToken',
    }),
    userLogout() {
      this.$store.dispatch('auth/destroyToken');
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('notification', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            status: this.selectedStatus,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.notifications = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
        });
    },
    fetchEventData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('notification', {
          params: {
            page: this.eventPagination.current_page,
            per_page: this.per_page,
            status: this.selectedStatus,
            type: 'EVENT',
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.eventNotifications = res.data.data.data;
              this.eventPagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
        });
    },
    viewAllNoti() {
      this.$router.push({
        name: 'NotificationTab',
      });
    },
    viewEventNoti() {
      this.$router.push({
        name: 'NotificationTab',
        query: { types: ['EVENT', 'CUSTOMER_EVENT'] },
      });
    },
    moveObjectToLast(array, id) {
      const index = array.findIndex((obj) => obj.id === id);
      if (index !== -1) {
        const objectToMove = array.splice(index, 1)[0];
        array.push(objectToMove);
      }
    },
    viewPage(id, type) {
      if (type == 'all') {
        this.pagination.total -= 1;
        this.moveObjectToLast(this.notifications, id);
      }
      if (type == 'event') {
        this.eventPagination.total -= 1,
        this.moveObjectToLast(this.eventNotifications, id);
      }
      this.$router.push({
        name: 'NotificationView',
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
