<template>
  <v-container>
    <v-breadcrumbs
      large
      class="pt-0"
    >
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      ລາຍລະອຽດແຜນ
    </v-breadcrumbs>
    <v-row>
      <v-col>
        <p v-if="data.plan_month">
          {{ data.plan_month.name }} - {{ data.route_plan.name }} -
          {{ data.plan_month.name }}
          <span class="primary-color">({{ data.driver.name }}),</span> ວັນທີ
          {{ data.date }}
        </p>
      </v-col>
      <v-col cols="3">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              color="primary"
              v-on="on"
            >
              <v-icon
                class="mr-2"
                dark
                medium
              >
                mdi-refresh
              </v-icon>
              Update ເປັນແຜນລ່າສຸດ
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              link
              @click="updatePlanCalendar()"
            >
              <v-list-item-title>
                <v-icon
                  class="mr-2"
                  small
                >
                  mdi-check
                </v-icon>
                ຢືນຢັນ
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
    <v-card elevation="1">
      <v-card-text>
        <v-row>
          <v-col>
            <v-tabs v-model="tab">
              <v-tab href="#tab-1">
                ທັງໝົດ
              </v-tab>
              <v-tab href="#tab-2">
                <v-badge
                  color="info"
                  :content="summary.pending_count"
                >
                  ລໍຖ້າເກັບ
                </v-badge>
              </v-tab>
              <v-tab href="#tab-3">
                <v-badge
                  color="warning"
                  :content="summary.wait_to_confirm_count"
                >
                  ລໍຖ້າຢືນຢັນ
                </v-badge>
              </v-tab>
              <v-tab href="#tab-4">
                <v-badge
                  color="success"
                  :content="summary.success_count"
                >
                  ສຳເລັດ
                </v-badge>
              </v-tab>

              <v-tab href="#tab-5">
                <v-badge
                  color="red"
                  :content="summary.reject_count"
                >
                  ປະຕິເສດການເກັບ
                </v-badge>
              </v-tab>
              <v-tab href="#tab-6">
                <v-badge
                  color="orange"
                  :content="summary.canceled_count"
                >
                  ຍົກເລີກການເກັບ
                </v-badge>
              </v-tab>
            </v-tabs>
            <!-- <hr /> -->

            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-1">
                <allTrash />
              </v-tab-item>
            </v-tabs-items>

            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-2">
                <v-card flat>
                  <v-card-text>
                    <pendingTrash />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>

            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-3">
                <v-card flat>
                  <v-card-text>
                    <waitToConfirmTrash />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>

            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-4">
                <v-card flat>
                  <v-card-text>
                    <successTrash />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-5">
                <v-card flat>
                  <v-card-text>
                    <rejectTrash />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>

            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-6">
                <v-card flat>
                  <v-card-text>
                    <cancel-trash />
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import allTrash from '@views/calendar/CalendarTab/allTrash';
import pendingTrash from '@views/calendar/CalendarTab/pendingTrash';
import successTrash from '@views/calendar/CalendarTab/successTrash';
import waitToConfirmTrash from '@views/calendar/CalendarTab/waitConfirmTrash';
import rejectTrash from '@views/calendar/CalendarTab/rejectTrash';
import cancelTrash from '@views/calendar/CalendarTab/cancelTrash';
import trashMixin from '@/views/calendar/trashMixin';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  components: {
    allTrash,
    pendingTrash,
    successTrash,
    waitToConfirmTrash,
    rejectTrash,
    cancelTrash,
  },
  mixins: [trashMixin],
  props: ['plan'],
  data() {
    return {
      tab: null,
      data: {},
    };
  },
  watch: {
    tab(value) {
      if (value == 'tab-1') {
        this.$router
          .push({ name: 'PlanCalendarDetail', query: { tab: 'trash-all' } })
          .catch(() => {});
      } else if (value == 'tab-2') {
        this.$router
          .push({
            name: 'PlanCalendarDetail',
            query: { tab: 'trash-pending' },
          })
          .catch(() => {});
      } else if (value == 'tab-3') {
        this.$router
          .push({
            name: 'PlanCalendarDetail',
            query: { tab: 'wait-to-confirm' },
          })
          .catch(() => {});
      } else if (value == 'tab-4') {
        this.$router
          .push({
            name: 'PlanCalendarDetail',
            query: { tab: 'trash-success' },
          })
          .catch(() => {});
      } else if (value == 'tab-5') {
        this.$router
          .push({
            name: 'PlanCalendarDetail',
            query: { tab: 'trash-reject' },
          })
          .catch(() => {});
      } else if (value == 'tab-6') {
        this.$router
          .push({
            name: 'PlanCalendarDetail',
            query: { tab: 'trash-cancel' },
          })
          .catch(() => {});
      }
    },
  },
  created() {
    if (this.$route.query.tab == 'trash-all') {
      this.tab = 'tab-1';
    } else if (this.$route.query.tab == 'trash-pending') {
      this.tab = 'tab-2';
    } else if (this.$route.query.tab == 'wait-to-confirm') {
      this.tab = 'tab-3';
    } else if (this.$route.query.tab == 'trash-success') {
      this.tab = 'tab-4';
    } else if (this.$route.query.tab == 'trash-reject') {
      this.tab = 'tab-5';
    } else if (this.$route.query.tab == 'trash-cancel') {
      this.tab = 'tab-6';
    }
    this.fetchDataPlanMonth();
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id },
      // });
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id: this.data.plan_month_id },
      // });
    },
    updatePlanCalendar() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .post(`update-from-route/${this.$route.params.id}`)
        .then((res) => {
          this.$store.commit('Loading_State', false);
          setTimeout(() => {
            this.$store.commit('Loading_State', false);
            this.$store.commit('modalDelete_State', false);
            this.fetchData();
            this.$store.commit('Toast_State', {
              value: true,
              color: 'success',
              msg: res.data.message,
            });
          }, 300);
          if (res.data.code == 200) {
            this.fetchPlanCalendar();
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
    fetchDataPlanMonth() {
      this.$axios
        .get(
          `plan-month/${
            this.$route.params.planMonthId
          }/plan-calendar/${
            this.$route.params.id}`,
        )
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.data = res.data.data;
            }, 100);
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>
