<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-breadcrumbs class="pa-0" large>
          <v-btn class="text-primary" text @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          ຈັດການເວລາໃຫ້ພະນັກງານເກັບຂີ້ເຫື້ຍອ
          <span class="ml-2 primary-color">
            {{
              planmonth.name
            }}
          </span>
        </v-breadcrumbs>
      </v-col>
      <v-col>
        <div class="text-end">
          <v-btn class="btn-primary" @click="AddPlan()">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-col>
      <!--      <v-col cols="5">-->
      <!--        <v-text-field-->
      <!--          outlined-->
      <!--          dense-->
      <!--          clearable-->
      <!--          prepend-inner-icon="mdi-magnify"-->
      <!--          label="ຊື່"-->
      <!--          type="text"-->
      <!--          v-model="search"-->
      <!--          @keyup.enter="Search()"-->
      <!--        >-->
      <!--        </v-text-field>-->
      <!--      </v-col>-->
    </v-row>

    <v-row>
      <v-col>
        <v-menu
            v-model="date_menu"
            :close-on-content-click="true"
            :nudge-right="40"
            min-width="auto"
            offset-y
            transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                clearable
                dense
                label="ເລີ່ມວັນທີ"
                outlined
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-autocomplete
            v-model="selectedCustomerType"
            :items="customer_types"
            clearable
            dense
            item-text="display"
            item-value="name"
            label="ປະເພດແຜນເສັ້ນທາງ"
            outlined
        ></v-autocomplete>
      </v-col>
      <v-col v-if="selectedCustomerType == 'company'">
        <v-autocomplete
            v-model="selectedCostBy"
            :items="companyCostBy"
            clearable
            dense
            item-text="la"
            item-value="en"
            label="ປະເພດບໍລິການ"
            outlined
        ></v-autocomplete>
      </v-col>

      <v-col>
        <v-autocomplete
            v-model="selectedVehicleType"
            :items="vehicleType"
            clearable
            dense
            item-text="name"
            item-value="id"
            label="ປະເພດລົດ"
            outlined
        ></v-autocomplete>
      </v-col>

      <v-col>
        <v-autocomplete
            v-model="selectedDriverId"
            :item-text="getDriver"
            :items="drivers"
            clearable
            dense
            item-value="id"
            label="ຄົນຂັບລົດ"
            outlined
        >
          <template
              slot="selection"
              slot-scope="data"
          >{{ data.item.name }} ({{ data.item.vehicle.car_id }})
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>

    <div>
      <v-card>
        <v-card-text>
          <v-data-table
              v-if="calendars"
              :disable-pagination="true"
              :headers="headers"
              :items="calendars"
              :search="search"
              hide-default-footer
          >
            <template v-slot:item.driver="{ item }">
              <div>{{ item.driver.vehicle.car_id }} ({{ item.driver.name }})</div>
            </template>
            <template v-slot:item.date="{ item }">
              <v-chip :color="getStatus(item.is_cancelled)">{{ item.date }}</v-chip>
            </template>
            <template v-slot:item.created_at="{ item }">
              <div>{{ moment(item.created_at).format("hh:mm:ss DD-MM-YY") }}</div>
            </template>
            <template v-slot:item.count_success="{ item }">
              <p style="color:green">{{ item.count_success }}</p>
            </template>
            <template v-slot:item.count_wait_to_confirm="{ item }">
              <p style="color:orange">{{ item.count_wait_to_confirm }}</p>
            </template>

            <!--            <template v-slot:item.detail="{ item }">-->
            <!--              <v-icon small class="mr-2" @click="gotoPlanCalendar(item)"-->
            <!--                >mdi-eye</v-icon-->
            <!--              >-->
            <!--            </template>-->
            <!--            <template v-slot:item.actions="{ item }">-->
            <!--              <v-icon small class="mr-2" @click="editModal(item)">-->
            <!--                mdi-pencil-->
            <!--              </v-icon>-->
            <!--              <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>-->
            <!--            </template>-->
            <!--            <template v-slot:item.plan="{ item }">-->
            <!--              <v-icon small class="mr-2" @click="editModal(item)">-->
            <!--                mdi-pencil-->
            <!--              </v-icon>-->
            <!--            </template>-->

            <template v-slot:item.actions="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                      class="mr-2"
                      color="primary"
                      dark
                      medium
                      v-bind="attrs"
                      v-on="on"
                  >mdi-dots-vertical
                  </v-icon>
                </template>
                <v-list>
                  <v-list-item link @click="gotoPlanCalendar(item)">
                    <v-list-item-title>
                      <v-icon class="mr-2" small>mdi-eye</v-icon>
                      ລາຍລະອຽດ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="editModal(item)">
                    <v-list-item-title>
                      <v-icon class="mr-2" small>mdi-pencil</v-icon>
                      ແກ້ໄຂຂໍ້ມູນ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="deleteItem(item.id)">
                    <v-list-item-title>
                      <v-icon class="mr-2" small>mdi-delete</v-icon>
                      ລຶບຂໍ່ມູນ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="confirmCancel(item.id)">
                    <v-list-item-title>
                      <v-icon class="mr-2" small>mdi-close</v-icon>
                      ຍົກເລີກ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
          <br/>
          <template>
            <Pagination
                v-if="pagination.total_pages > 1"
                :offset="offset"
                :pagination="pagination"
                @paginate="fetchData()"
            ></Pagination>
          </template>
        </v-card-text>
      </v-card>
    </div>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Add Plan Calendar</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-autocomplete
                        v-model="selectedDriver"
                        :item-text="getDriver"
                        :items="drivers"
                        dense
                        item-value="id"
                        label="ຄົນຂັບລົດ"
                        outlined
                    >
                      <template
                          slot="selection"
                          slot-scope="data"
                      >{{ data.item.name }} ({{ data.item.vehicle.car_id }})
                      </template>
                    </v-autocomplete>
                    <p class="errors">{{ server_errors.driver_id }}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-autocomplete
                        v-model="selectedRoutePlan"
                        :items="routeplans"
                        dense
                        item-text="name"
                        item-value="id"
                        label="ເລືອກແຜນເສັ້ນທາງ"
                        outlined
                    ></v-autocomplete>
                    <p class="errors">{{ server_errors.route_plan_id }}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        min-width="auto"
                        offset-y
                        transition="scale-transition"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-combobox
                            v-model="dates"
                            chips
                            label="ວັນທີຢູ່ໃນແຜນ"
                            multiple
                            prepend-icon="mdi-calendar"
                            readonly
                            small-chips
                            v-bind="attrs"
                            v-on="on"
                        ></v-combobox>
                      </template>
                      <v-date-picker v-model="dates" multiple no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="menu = false">Cancel</v-btn>
                        <v-btn color="primary" text @click="$refs.menu.save(dates)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                    <p class="errors">{{ server_errors.date }}</p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <v-checkbox v-model="hasRound" class="my-auto">
                      <template v-slot:label>
                        <div>ເພີ່ມຈຳນວນຮອບ</div>
                      </template>
                    </v-checkbox>
                  </v-col>
                </v-row>
                <v-row v-if="hasRound">
                  <v-col cols="12">
                    <v-text-field
                        v-model="round"
                        class="input-number"
                        dense
                        label="ຈຳນວນຮອບ"
                        outlined
                        required
                        type="number"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">Close</v-btn>
              <v-btn
                  :disabled="loading"
                  :loading="loading"
                  color="blue darken-1"
                  text
                  @click="SubmitPlan()"
              >Add
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>
    <!-- Edit Add-->
    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Update Plan Calendar</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-autocomplete
                        v-model="calendarEdit.driver_id"
                        :item-text="getDriver"
                        :items="drivers"
                        dense
                        item-value="id"
                        label="ຄົນຂົບລົດ"
                        outlined
                    ></v-autocomplete>
                    <template
                        slot="selection"
                        slot-scope="data"
                    >{{ data.item.name }} ({{ data.item.vehicle.car_id }})
                    </template>
                    <p class="errors">{{ server_errors.driver_id }}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-autocomplete
                        v-model="calendarEdit.route_plan_id"
                        :items="routeplans"
                        dense
                        item-text="name"
                        item-value="id"
                        label="ເລືອກແຜນເສັ້ນທາງ"
                        outlined
                    ></v-autocomplete>
                    <p class="errors">{{ server_errors.route_plan_id }}</p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-menu
                        ref="edit_menu"
                        v-model="edit_menu"
                        :close-on-content-click="true"
                        :nudge-right="40"
                        min-width="auto"
                        offset-y
                        transition="scale-transition"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="calendarEdit.date"
                            dense
                            label="ວັນທີຢູ່ໃນແຜນ"
                            outlined
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="calendarEdit.date"></v-date-picker>
                    </v-menu>
                    <p class="errors">{{ server_errors.date }}</p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeEditModal()">Close</v-btn>
              <v-btn
                  :disabled="loading"
                  :loading="loading"
                  color="blue darken-1"
                  text
                  @click="UpdatePlan()"
              >Update
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>
    <!--
    {{ moment(item.create_at).format("DD-MM-YYYY") }}

    -->
    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card class="elevation-0">
          <v-card-text class="pa-4">
            <v-row>
              <v-col cols="12">
                <v-textarea v-model="delete_description" dense label="ຄຳອະທິບາຍ" outlined required></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="elevation-0 btn-warning" @click="closeDelete">Cancel</v-btn>
            <v-btn
                v-if="delete_description.length > 4"
                :disabled="loading"
                :loading="loading"
                class="btn-primary elevation-0"
                @click="deleteItemConfirm"
            >OK
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </template>
    </ModalDelete>

    <v-dialog v-model="cancelDialog" max-width="520px" persistent>
      <v-card class="pa-2">
        <v-card-text>
          <v-container class="text-center">
            <h3 class="py-2">ຕ້ອງການຍົກເລີກຂໍ້ມູນນີ້ບໍ່ ?</h3>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="elevation-0" color="warning" @click="cancelDialog = false">Close</v-btn>
            <v-btn
                :disabled="loading"
                :loading="loading"
                class="elevation-0"
                color="success"
                @click="cancelItem()"
            >ຢືນຢັນການຍົກເລີກ
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";
import {getCompanyCostBy} from "@/Helpers/Customer";

export default {
  name: "Customer",
  data() {
    return {
      tab: null,
      calendars: [],
      loading: false,
      cancelDialog: false,
      calendarId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: "",
      oldVal: "",
      //Add Package
      // start_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      // start_menu: false,

      dates: [],
      menu: false,
      edit_menu: false,
      packages: [],
      selectedPackage: "",
      server_errors: {},
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      round: "",
      planmonth: {},
      calendarEdit: {},
      plan: [],

      routeplans: [],
      selectedRoutePlan: "",
      drivers: [],
      selectedDriver: "",
      selectedDriverId: "",
      date: new Date()
          .toISOString()
          .substr(0, 10),
      date_menu: false,
      hasRound: false,
      delete_description: "",

      selectedCustomerType: "",
      customer_types: [
        {
          name: "home",
          display: "ຄົວເຮືອນ"
        },
        {
          name: "company",
          display: "ຫົວໜ່ວຍທຸລະກິດ"
        }
      ],
      selectedCostBy: "",

      headers: [
        {text: "ວັນທີ", value: "date"},
        {text: "ລົດ", value: "driver"},
        {text: "ປະເພດລົດ", value: "driver.vehicle.vehicle_type.name"},
        {
          text: "ເສັ້ນທາງ",
          value: "route_plan.name",
          sortable: true
        },
        // {
        //   text: "ລາຍລະອຽດແຜນ",
        //   value: "route_plan.description",
        //   sortable: true,
        // },

        {
          text: "ລູກຄ້າ",
          value: "plan_calendar_details_count",
          align: "center",
          sortable: false
        },
        {
          text: "ເກັບຂີເຫື້ຍອສຳເລັດ",
          value: "count_success",
          align: "center",
          sortable: false
        },
        {
          text: "ລໍຖ້າຢືນຢັນ",
          value: "count_wait_to_confirm",
          align: "center",
          sortable: false
        },
        {
          text: "ວັນທີສ້າງ",
          value: "created_at",
          align: "center",
          sortable: false
        },
        {text: "", value: "actions", sortable: false}
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 2) || "Name must be less than 2 characters"
      ],
      monthRules: [v => !!v || "Date is required"],
      vehicleType: [],
      selectedVehicleType: ""
    };
  },
  computed: {
    companyCostBy() {
      return getCompanyCostBy;
    }
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("plan-month/" + this.$route.params.id + "/plan-calendar", {
            // params: {
            //   page: this.pagination.current_page,
            //   per_page: this.per_page,
            //
            // },
            params: queryOption([
              {page: this.pagination.current_page},
              {per_page: this.per_page},
              {date: this.date},
              {route_plan_type: this.selectedCustomerType},
              {vehicle_type_id: this.selectedVehicleType},
              {driver_id: this.selectedDriverId},
              {cost_by: this.selectedCostBy}
            ])
          })
          .then(res => {
            if (res.data.code == 200) {
              this.$store.commit("Loading_State", false);
              this.calendars = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }
          })
          .catch(error => {
            this.$store.commit("Loading_State", false);
            if (error.response && error.response.status == 422) {
              this.toast.msg = error.message;
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },
    fetchPlanMonthDetail() {
      this.$axios
          .get("plan-month/" + this.$route.params.id)
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.planmonth = res.data.data;
              }, 100);
            }
          })
          .catch(() => {
          });
    },
    fetchRoutePlan() {
      this.$axios
          .get("route-plan", {
            params: {
              scope_for: "all"
            }
          })
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.routeplans = res.data.data;
              }, 100);
            }
          })
          .catch(() => {
          });
    },
    fetchVehicleType() {
      this.$axios
          .get("vehicle_type")
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.vehicleType = res.data.data;
              }, 100);
            }
          })
          .catch(() => {
          });
    },
    fetchDriver() {
      this.$axios
          .get("driver", {
            params: queryOption([
              {
                vehicle_type: this.selectedVehicleType
              }
            ])
          })
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.drivers = res.data.data;
              }, 100);
            }
          })
          .catch(() => {
          });
    },

    AddPlan() {
      this.fetchRoutePlan();
      this.fetchDriver();
      this.$store.commit("modalAdd_State", true);
    },
    closeDelete() {
      this.delete_description = "";
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.calendarId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
          .delete(
              "plan-month/" +
              this.$route.params.id +
              "/plan-calendar/" +
              this.calendarId,
              {
                params: queryOption([
                  {delete_description: this.delete_description}
                ])
              }
          )
          .then(res => {
            if (res.data.code == 200) {
              this.loading = false;
              this.delete_description = "";
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message
              });
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
            }
          })
          .catch(error => {
            this.$store.commit("modalDelete_State", false);
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response
                  ? error.response.data.message
                  : "Something went wrong"
            });
          });
    },

    SubmitPlan() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .post("plan-month/" + this.$route.params.id + "/plan-calendar", {
              driver_id: this.selectedDriver,
              route_plan_id: this.selectedRoutePlan,
              date: this.dates,
              round: this.round
            })
            .then(res => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.dates = [];
                  this.menu = false;
                  this.closeAddModal();
                  this.fetchData();
                  this.selectedRoutePlan = "";
                  this.selectedDriver = "";
                  this.reset();
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "success",
                    msg: res.data.message
                  });
                }, 100);
              }
            })
            .catch(error => {
              this.loading = false;
              this.menu = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response
                    ? error.response.data.message
                    : "Something went wrong"
              });
              if (error.response && error.response.status == 422) {
                const obj = error.response.data.errors;
                for (let [key, customer] of Object.entries(obj)) {
                  this.server_errors[key] = customer[0];
                }
              }
            });
      }
    },

    confirmCancel(id) {
      this.calendarId = id;
      this.cancelDialog = true;
    },
    cancelItem() {
      this.loading = true;
      this.$axios
          .post("plan-calendar/" + this.calendarId + "/cancel")
          .then(res => {
            if (res.data.code == 200) {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message
              });
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
              this.calendarId = "";
              this.cancelDialog = false;
            }
          })
          .catch(error => {
            this.cancelDialog = false;
            this.$store.commit("modalDelete_State", false);
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response
                  ? error.response.data.message
                  : "Something went wrong"
            });
          });
    },

    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
      this.dates = [];
      this.selectedDriver = "";
      this.selectedRoutePlan = "";
    },
    editModal(item) {
      this.fetchRoutePlan();
      this.fetchDriver();
      this.calendarEdit = item;
      this.$store.commit("modalEdit_State", true);
    },
    UpdatePlan() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .put(
                "plan-month/" +
                this.$route.params.id +
                "/plan-calendar/" +
                this.calendarEdit.id,
                {
                  driver_id: this.calendarEdit.driver_id,
                  route_plan_id: this.calendarEdit.route_plan_id,
                  date: this.calendarEdit.date
                }
            )
            .then(res => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.closeEditModal();
                  this.fetchData();
                  this.edit_menu = false;
                  this.reset();
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "success",
                    msg: res.data.message
                  });
                }, 300);
              }
            })
            .catch(error => {
              this.loading = false;
              this.menu = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response
                    ? error.response.data.message
                    : "Something went wrong"
              });
              if (error.response && error.response.status == 422) {
                let obj = error.response.data.errors;
                for (let [key, customer] of Object.entries(obj)) {
                  this.server_errors[key] = customer[0];
                }
              }
            });
      }
    },
    closeEditModal() {
      this.$store.commit("modalEdit_State", false);
      this.fetchData();
    },
    Search() {
      GetOldValueOnInput(this);
    },
    gotoPlanCalendar(item) {
      this.$router.push({
        name: "PlanCalendarDetail",
        params: {id: item.id, planMonthId: item.plan_month_id}
      });
    },
    reset() {
      this.$refs.form.reset();
    },
    getDriver(value) {
      if (!value) return null;
      if (value.vehicle) {
        return value.name + " " + value.vehicle.car_id;
      } else {
        return value.name + " " + "(ຍັງບໍທັນມີລົດ)";
      }
    },
    getStatus(value) {
      console.log(value);
      if (value == "1") {
        return "error";
      } else if (value == "0") {
        return "success";
      }
    }
  },
  watch: {
    search: function (value) {
      this.pagination.current_page = "";
      if (value == "") {
        this.fetchData();
      }
    },
    selectedVehicleType() {
      this.selectedDriver = "";
      this.fetchDriver();
      this.fetchData();
    },
    selectedDriver: function () {
      this.server_errors.driver_id = "";
      // if (value) {
      //   this.getDriver(value);
      // }
    },
    "calendarEdit.driver_id": function (value) {
      this.server_errors.driver_id = "";
      if (value) {
        this.getDriver(value);
      }
    },
    selectedRoutePlan: function () {
      this.server_errors.route_plan_id = "";
    },

    dates: function () {
      this.server_errors.date = "";
    },
    date: function () {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedDriverId: function () {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedCustomerType: function () {
      this.pagination.current_page = "";
      this.fetchData();
    },
    selectedCostBy: function () {
      this.pagination.current_page = "";
      this.fetchData();
    }
  },
  async created() {
    if (this.$route.query.month && this.$route.query.month > this.date) this.date = ''
    this.fetchPlanMonthDetail();
    this.fetchVehicleType();
    this.fetchDriver();
  }
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
