<template>
  <v-container>
    <v-row>
      <v-col>
        <v-breadcrumbs
          class="pa-0"
          large
        >
          ຂີ້ເຫື້ຍອທັງໝົດ
        </v-breadcrumbs>
      </v-col>
      <v-col>
        <v-chip
          color="orange"
          dark
        >
          {{ countPause }} ຢຸດ
        </v-chip>
      </v-col>
      <v-col
        v-if="!dragEnabled"
        class="text-right"
      >
        <v-btn
          color="yellow"
          @click="showDrag"
        >
          ແກ້ໄຂລຳດັບ
        </v-btn>
      </v-col>
      <v-col
        v-if="dragEnabled"
        class="text-right"
      >
        <v-row>
          <v-col>
            <v-btn
              color="primary"
              width="100%"
              @click="updatePriority"
            >
              ບັນທຶກ
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              width="100%"
              @click="closeDrag"
            >
              ປິດ
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຄົ້ນຫາ"
          type="text"
        />
      </v-col>
    </v-row>
    <div>
      <v-data-table
        v-if="optimizedCalendars.length"
        :disable-pagination="true"
        :headers="headers"
        :items="optimizedCalendars"
        :search="search"
        hide-default-footer
      >
        <template v-slot:item.full_name="{ item }">
          <a
            href="#"
            @click="openRoute(item)"
          >{{ item.route_plan_detail.customer.full_name }}</a>
        </template>

        <template v-slot:item.phone="{ item }">
          <span>{{ item.route_plan_detail.customer.user.phone }}</span>
        </template>

        <template v-slot:item.customer_id="{ item }">
          <span>{{ item.route_plan_detail.customer.customer_id }}</span>
        </template>

        <template v-slot:item.status="{ item }">
          <v-chip
            :color="item.status_color"
            label
          >
            {{ item.status }}
          </v-chip>
        </template>

        <template v-slot:item.can_collect="{ item }">
          <v-chip
            :color="item.customer_can_collect_color"
            label
          >
            {{ item.customer_can_collect_la }}
          </v-chip>
        </template>

        <template v-slot:item.amount="{item}">
          <v-chip :color="item.amount_color">
            {{ item.amount }}
          </v-chip>
          <span>{{ item.amount_collection_type }}</span>
        </template>

        <template v-slot:item.is_pause="{ item }">
          <v-chip
            :color="item.is_pause_color"
            dark
            label
            @click="switchPause(item.id)"
          >
            {{
              item.is_pause_la
            }}
          </v-chip>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon
            class="mr-2"
            small
            @click="viewPage(item.plan_calendar_id, item.id)"
          >
            mdi-eye
          </v-icon>
          <v-icon
            class="mr-2"
            small
            @click="openDialog(item)"
          >
            mdi-plus
          </v-icon>
        </template>
      </v-data-table>

      <br>
      <template>
        <Pagination
          v-if="pagination.total_pages > 1"
          :offset="offset"
          :pagination="pagination"
          @paginate="fetchData()"
        />
      </template>
    </div>

    <!-- <div >
      <v-simple-table>
        <thead>
          <tr>
            <td />
            <td>priority</td>
            <td>customer_id</td>
            <td>full_name</td>
            <td>phone</td>
          </tr>
        </thead>
        <draggable
          :list="allCalendars"
          tag="tbody"
        >
          <template
            v-for="(calendar,index) in allCalendars"
          >
            <tr
              v-if="!calendar.is_pause"
              :key="index"
            >
              <td>
                <v-icon small>
                  mdi-arrow-all
                </v-icon>
              </td>
              <td>{{ calendar.priority }}</td>
              <td>
                {{
                  calendar.route_plan_detail.customer.customer_id
                }}
              </td>
              <td>
                {{
                  calendar.route_plan_detail.customer.full_name
                }}
              </td>
              <td>
                {{
                  calendar.route_plan_detail.customer.user.phone
                }}
              </td>
            </tr>
          </template>
        </draggable>
      </v-simple-table>
    </div> -->
    <v-dialog
      v-model="dialog"
      max-width="300px"
      scrollable
    >
      <v-card>
        <v-card-title>ເພີ່ມຈຳນວນຮອບໃນມື້</v-card-title>
        <v-divider />
        <v-card-text>
          <v-text-field
            v-model="round"
            type="number"
          />
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-btn
            color="blue darken-1"
            text
            @click="cancelDialog()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="addRoundDialog()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
// import { GetOldValueOnInput } from "@/Helpers/GetValue";
import trashMixin from '@/views/calendar/trashMixin';
// import draggable from 'vuedraggable';
// import queryOptions from "@/Helpers/queryOption";
import moment from 'moment';

export default {
  name: 'Trash',
  components: {
    // draggable,
  },
  mixins: [trashMixin],
  data() {
    return {
      //   loading: false,
      //   calendarId: "",
      //   //Pagination
      //   offset: 12,
      //   calendars: [],
      //   pagination: {},
      //   per_page: 100,
      //   search: "",
      //   oldVal: "",
      //   summary: {},
      //   statuses: ["pending"],
      enabled: true,
      list: [
        { name: 'John', id: 0 },
        { name: 'Joao', id: 1 },
        { name: 'Jean', id: 2 },
      ],
      search: "",
      dragging: false,
      dragEnabled: false,
      dialog: false,
      round: 0,
      server_errors: {},

      headers: [
        { text: 'ລຳດັບຄວາມສຳຄັນ', value: 'priority' },
        { text: 'ໄອດີ', value: 'customer_id' },
        { text: 'ລູກຄ້າ', value: 'full_name' },
        { text: 'ເບີໂທ', value: 'phone' },
        {
          text: 'ສະຖານະເກັບ',
          value: 'can_collect',
        },
        {
          text: 'ຈຳນວນຂີ້ເຫື້ຍອ',
          value: 'amount',
          align: 'center',
        },
        {
          text: 'ສະຖານະ',
          value: 'status',
          align: 'center',
        },
        {
          text: 'ວັນທີສ້າງ',
          value: 'created_at',
          align: 'center',
        },
        {
          text: 'ວັນທີເກັບ',
          value: 'collected_at',
          align: 'center',
        },
        {
          text: 'ເປີດ/ຢຸດ',
          value: 'is_pause',
          align: 'center',
        },
        { text: '', value: 'actions', sortable: false },
        { text: '', value: 'add_round', sortable: false },
      ],

      selectedRound: '',
    };
  },
  watch: {
    // search: function (value) {
    //   if (value == "") {
    //     this.fetchData();
    //   }
    // },
  },
  created() {
    // this.fetchData();
  },
  methods: {
    openDialog(item) {
      this.selectedRound = item.id;
      this.dialog = true;
    },
    openRoute(item) {
      const name = item.route_plan_detail.customer.customer_type == 'home'
        ? 'ViewClient'
        : 'ViewCompanyDetail';
      const routeData = this.$router.resolve({
        name,
        params: {
          id: item.route_plan_detail.customer.id,
        },
      });
      window.open(routeData.href);
    },
    switchPause(id) {
      this.$store.commit('Loading_State', true);
      this.$axios
        .post(`plan-calendar-pause/${id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }, 100);

            this.fetchData();
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            this.toast.msg = error.message;
          }
        });
    },
    checkMove(e) {
      window.console.log(`Future index: ${e.draggedContext.futureIndex}`);
    },
    showDrag() {
      this.dragEnabled = true;
      this.fetchAllData();
    },
    closeDrag() {
      this.dragEnabled = false;
      this.fetchData();
    },
    updatePriority() {
      this.$store.commit('Loading_State', true);
      const body = [];
      for (const planCalendarDetail of this.allCalendars) {
        if (
          planCalendarDetail.is_pause
            && body.length >= planCalendarDetail.priority
        ) {
          body.splice(
            planCalendarDetail.priority - 1,
            0,
            planCalendarDetail.id,
          );
        } else {
          body.push(planCalendarDetail.id);
        }
      }
      this.$axios
        .post(`plan-calendar-priority/${this.$route.params.id}`, {
          plan_calendar_details: body,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }, 100);

            this.fetchAllData();
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
    backPrevios() {
      this.$router.go(-1);
    },
    cancelDialog() {
      this.dialog = false;
    },
    addRoundDialog() {
      if (this.round > 0) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`plan-calendar-detail-round/${this.selectedRound}`, {
            round: this.round,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.round = 0;
                this.dialog = false;
                this.selectedRound = '';
                this.fetchData();
              }, 100);
            }
          })
          .catch((error) => {
            this.$store.commit('Loading_State', false);
            this.round = 0;
            this.dialog = false;
            this.selectedRound = '';
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response
                ? error.response.data.message
                : 'Something went wrong',
            });
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }
          });
      } else {
        this.dialog = false;
      }
    },
    formatDate(date, format = 'DD-MM-YY hh:mm') {
      return moment(date).format(format);
    },
    getAmountTemplate(collection_type, bag, container) {
      if (
        collection_type === 'bag'
      || collection_type === 'chartered'
      || collection_type === '32km'
      || collection_type === 'infect'
      ) {
        return `${bag} ${this.getUnit(collection_type)}`;
      } if (collection_type === 'fix_cost') {
        return `${this.getUnit(collection_type)}`;
      }
      return `${container} ${this.getUnit(collection_type)}
      `;
    },
  },
  computed: {
    filteredData() {
      return this.calendars.filter((item) => item.route_plan_detail.customer.customer_id.includes(this.search) || item.route_plan_detail.customer.full_name.includes(this.search) || item.route_plan_detail.customer.user.phone.includes(this.search));
    },
    calendarTable() {
      const data = [];
      for (const item of this.calendars) {
        const dataItem = {
          id: item.id,
          priority: item.priority,
          customer_id: item.route_plan_detail.customer.customer_id,
          full_name: item.route_plan_detail.customer.full_name,
          phone: item.route_plan_detail.customer.user.phone,
          can_collect: item.route_plan_detail.customer.can_collect ? 'ເກັບໄດ້' : 'ເກັບບໍ່ໄດ້',
          can_collect_color: item.route_plan_detail.customer.can_collect ? 'success' : 'errorr',
          amount: this.getAmountTemplate(item.collection_type, item.bag, item.container),
          status: item.status_la,
          status_color: this.statusColor(item.status),
          created_at: this.formatDate(item.created_at),
          collected_at: this.formatDate(item.collected_at),
          is_pause: item.is_pause ? 'ຢຸດກ່ອນ' : 'ໃຫ້ເກັບ',
          is_pause_color: item.is_pause ? 'orange' : 'green',
        };

        data.push(dataItem);
      }

      return data;
    },
    formattedCalendars() {
      if (!this.calendars) {
        return [];
      }
      return this.calendars.map((item) => ({
        ...item,
        created_at: this.formatDate(item.created_at),
        date: this.formatDate(item.date, 'hh:mm:ss'),
        amount: this.getAmountTemplate(item),
      }));
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
