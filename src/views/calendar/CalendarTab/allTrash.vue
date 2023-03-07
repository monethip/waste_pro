<template>
  <v-container>
    <v-row>
      <v-col>
        <v-breadcrumbs class="pa-0" large>ຂີ້ເຫື້ຍອທັງໝົດ</v-breadcrumbs>
      </v-col>
      <v-col>
        <v-chip color="orange" dark>{{ countPause }} ຢຸດ</v-chip>
      </v-col>
      <v-col v-if="!dragEnabled" class="text-right">
        <v-btn color="yellow" @click="showDrag">ແກ້ໄຂລຳດັບ</v-btn>
      </v-col>
      <v-col v-if="dragEnabled" class="text-right">
        <v-row>
          <v-col>
            <v-btn color="primary" width="100%" @click="updatePriority">ບັນທຶກ</v-btn>
          </v-col>
          <v-col>
            <v-btn width="100%" @click="closeDrag">ປິດ</v-btn>
          </v-col>
        </v-row>
      </v-col>

      <!--      <v-col>-->
      <!--        <v-text-field-->
      <!--          outlined-->
      <!--          dense-->
      <!--          clearable-->
      <!--          prepend-inner-icon="mdi-magnify"-->
      <!--          label="Search"-->
      <!--          type="text"-->
      <!--          v-model="search"-->
      <!--          @keyup.enter="Search()"-->
      <!--        >-->
      <!--        </v-text-field>-->
      <!--      </v-col>-->
    </v-row>
    <div>
      <v-simple-table v-if="dragEnabled">
        <draggable :list="allCalendars" tag="tbody">
          <!-- eslint-disable -->
          <tr v-for="(calendar,index) in allCalendars" v-if="!calendar.is_pause" :key="index">
            <td>
              <v-icon small>mdi-arrow-all</v-icon>
            </td>
            <td>{{ calendar.priority }}</td>
            <td>
              {{
                calendar.route_plan_detail.customer.customer_type = 'company' ?
                    calendar.route_plan_detail.customer.company_name : calendar.route_plan_detail.customer.name
              }}
            </td>
          </tr>
          <!-- eslint-enable -->
        </draggable>
      </v-simple-table>
    </div>
    <div v-if="!dragEnabled">
      <v-dialog v-model="dialog" max-width="300px" scrollable>
        <template v-slot:activator="{ on, attrs }">
          <v-data-table
              v-if="calendars"
              :disable-pagination="true"
              :headers="headers"
              :items="calendars"
              :search="search"
              hide-default-footer
          >
            <template v-slot:item.customer="{ item }">
              <pre v-if="!item">{{ item }}</pre>
              <div v-if="item.route_plan_detail"></div>
              <div
                  v-if="(item.route_plan_detail.customer.customer_type = 'company')"
              >{{ item.route_plan_detail.customer.company_name }}
              </div>
              <div>
                {{ item.route_plan_detail.customer.name }}
                {{ item.route_plan_detail.customer.surname }}
              </div>
            </template>
            <template v-slot:item.created_at="{ item }">
              <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm ") }}</div>
            </template>
            <template v-slot:item.date="{ item }">
              <div>{{ moment(item.date).format("DD-MM-YY hh:mm:ss") }}</div>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip :color="statusColor(item.status)" label>{{ item.status }}</v-chip>
            </template>
            <template v-slot:item.amount="{ item }">
              <div v-if="item.collection_type == 'bag' || item.collection_type == 'chartered'">
                <v-chip color="primary">{{ item.bag }}</v-chip>
                <span>{{ getUnit(item.collection_type) }}</span>
              </div>
              <div v-else-if="item.collection_type == 'fix_cost'">
                <span>{{ getUnit(item.collection_type) }}</span>
              </div>
              <div v-else>
                <v-chip color="success">{{ item.container }}</v-chip>
                <span>{{ getUnit(item.collection_type) }}</span>
              </div>
            </template>

            <template v-slot:item.is_pause="{ item }">
              <v-chip
                  :color="item.is_pause?'orange':'green'"
                  dark
                  label
                  @click="switchPause(item.id)"
              >
                {{
                  item.is_pause ? 'ຢຸດກ່ອນ' : 'ໃຫ້ເກັບ'
                }}
              </v-chip>
            </template>

            <template v-slot:item.route_plan_detail.customer.can_collect="{ item }">
              <v-chip :color="item.route_plan_detail.customer.can_collect ? 'success' : 'error'">
                {{
                  item.route_plan_detail.customer.can_collect ? 'ເກັບໄດ້' : 'ເກັບບໍ່ໄດ້'
                }}
              </v-chip>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-icon class="mr-2" small @click="viewPage(item.plan_calendar_id, item.id)">mdi-eye</v-icon>
              <v-icon
                  class="mr-2"
                  small
                  v-bind="attrs"
                  @click="selectedRound = item.id"
                  v-on="on"
              >mdi-plus
              </v-icon>
            </template>
          </v-data-table>
        </template>
        <v-card>
          <v-card-title>ເພີ່ມຈຳນວນຮອບໃນມື້</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-text-field v-model="round" type="number"></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="cancelDialog()">Close</v-btn>
            <v-btn color="blue darken-1" text @click="addRoundDialog()">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <br/>
      <template>
        <Pagination
            v-if="pagination.total_pages > 1"
            :offset="offset"
            :pagination="pagination"
            @paginate="fetchData()"
        ></Pagination>
      </template>
    </div>
  </v-container>
</template>

<script>
// import { GetOldValueOnInput } from "@/Helpers/GetValue";
import trashMixin from "@/views/calendar/trashMixin";
import draggable from "vuedraggable";

export default {
  mixins: [trashMixin],
  name: "Trash",
  components: {
    draggable
  },
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
        {name: "John", id: 0},
        {name: "Joao", id: 1},
        {name: "Jean", id: 2}
      ],
      dragging: false,
      dragEnabled: false,
      dialog: false,
      round: 0,
      server_errors: {},

      headers: [
        {text: "ລຳດັບຄວາມສຳຄັນ", value: "priority"},
        {text: "ລູກຄ້າ", value: "customer"},
        {
          text: "ສະຖານະເກັບ",
          value: "item.route_plan_detail.customer.can_collect"
        },
        {
          text: "ຈຳນວນຂີ້ເຫື້ຍອ",
          value: "amount",
          align: "center"
        },
        {
          text: "ສະຖານະ",
          value: "status",
          align: "center"
        },
        {
          text: "ວັນທີສ້າງ",
          value: "created_at",
          align: "center"
        },
        {
          text: "ວັນທີເກັບ",
          value: "collected_at",
          align: "center"
        },
        {
          text: "can_collect",
          value: "route_plan_detail.customer.can_collect",
          align: "center"
        },
        {
          text: "ເປີດ/ຢຸດ",
          value: "is_pause",
          align: "center"
        },
        {text: "", value: "actions", sortable: false},
        {text: "", value: "add_round", sortable: false}
      ],

      selectedRound: ""
    };
  },
  methods: {
    switchPause(id) {
      this.$store.commit("Loading_State", true);
      this.$axios
          .post("plan-calendar-pause/" + id)
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit("Loading_State", false);
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message
                });
              }, 100);

              this.fetchData();
            }
          })
          .catch(error => {
            this.$store.commit("Loading_State", false);
            if (error.response && error.response.status == 422) {
              this.toast.msg = error.message;
            }
          });
    },
    checkMove: function (e) {
      window.console.log("Future index: " + e.draggedContext.futureIndex);
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
      this.$store.commit("Loading_State", true);
      let body = [];
      for (const planCalendarDetail of this.allCalendars) {
        if (
            planCalendarDetail.is_pause &&
            body.length >= planCalendarDetail.priority
        ) {
          body.splice(
              planCalendarDetail.priority - 1,
              0,
              planCalendarDetail.id
          );
        } else {
          body.push(planCalendarDetail.id);
        }
      }
      this.$axios
          .post("plan-calendar-priority/" + this.$route.params.id, {
            plan_calendar_details: body
          })
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit("Loading_State", false);
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message
                });
              }, 100);

              this.fetchAllData();
            }
          })
          .catch(error => {
            this.$store.commit("Loading_State", false);
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response
                  ? error.response.data.message
                  : "Something went wrong"
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
        this.$store.commit("Loading_State", true);
        this.$axios
            .post("plan-calendar-detail-round/" + this.selectedRound, {
              round: this.round
            })
            .then(res => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.$store.commit("Loading_State", false);
                  this.round = 0;
                  this.dialog = false;
                  this.selectedRound = "";
                  this.fetchData();
                }, 100);
              }
            })
            .catch(error => {
              this.loading = false;
              this.round = 0;
              this.dialog = false;
              this.selectedRound = "";
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response
                    ? error.response.data.message
                    : "Something went wrong"
              });
              if (error.response && error.response.status == 422) {
                let obj = error.response.data.errors;
                for (let [key, data] of Object.entries(obj)) {
                  this.server_errors[key] = data[0];
                }
              }
            });
      } else {
        this.dialog = false;
      }
    }
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
  }
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
