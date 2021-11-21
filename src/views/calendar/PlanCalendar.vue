<template>
  <v-container>
    <v-row class="my-n6">
      <v-col cols="6">
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon></v-btn
          >
          ລາຍການຈັດເວລາໃຫ້ພະນັກງານເກັບຂີ້ເຫຍື້ຍອ</v-breadcrumbs
        >
      </v-col>
      <v-col cols="1">
        <v-btn class="btn-primary" @click="AddPlan()"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="5">
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່"
          type="text"
          v-model="search"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <v-data-table
            v-if="calendars"
            :headers="headers"
            :items="calendars"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.driver="{ item }">
              <div>
                {{ item.driver.name }} {{ item.driver.surname }}
                <span class="primary--text"
                  >- {{ item.driver.car_number }}</span
                >
              </div>
            </template>
            <template v-slot:item.date="{ item }">
              <v-chip color="success">{{ item.date }}</v-chip>
            </template>
            <template v-slot:item.detail="{ item }">
              <v-icon small class="mr-2" @click="gotoPlanCalendar(item.id)"
                >mdi-eye</v-icon
              >
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editModal(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
            </template>
            <template v-slot:item.plan="{ item }">
              <v-icon small class="mr-2" @click="editModal(item)">
                mdi-pencil
              </v-icon>
            </template> </v-data-table
          ><br />
          <template>
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
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
                    <v-select
                      v-model="selectedDriver"
                      :items="drivers"
                      item-text="name"
                      item-value="id"
                      label="ຄົນຂົບລົດ"
                      outlined
                      dense
                    ></v-select>
                    <p class="errors">
                      {{ server_errors.driver_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="selectedRoutePlan"
                      :items="routeplans"
                      item-text="name"
                      item-value="id"
                      label="ເລືອກແຜນເສັ້ນທາງ"
                      outlined
                      dense
                    ></v-select>
                    <p class="errors">
                      {{ server_errors.route_plan_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="dates"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-combobox
                          v-model="dates"
                          multiple
                          chips
                          small-chips
                          label="ວັນທີ"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-combobox>
                      </template>
                      <v-date-picker
                        v-model="dates"
                        multiple
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(dates)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                    <p class="errors">
                      {{ server_errors.date }}
                    </p>
                    <p class="errors">
                      {{ server_errors.date }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="SubmitPlan()"
              >
                Add
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
                    <v-select
                      v-model="calendarEdit.driver_id"
                      :items="drivers"
                      item-text="name"
                      item-value="id"
                      label="ຄົນຂົບລົດ"
                      outlined
                      dense
                    ></v-select>
                    <p class="errors">
                      {{ server_errors.driver_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="calendarEdit.route_plan_id"
                      :items="routeplans"
                      item-text="name"
                      item-value="id"
                      label="ເລືອກແຜນເສັ້ນທາງ"
                      outlined
                      dense
                    ></v-select>
                    <p class="errors">
                      {{ server_errors.route_plan_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      :return-value.sync="dates"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-combobox
                          v-model="dates"
                          multiple
                          chips
                          small-chips
                          label="ວັນທີ"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-combobox>
                      </template>
                      <v-date-picker
                        v-model="dates"
                        multiple
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="menu = false">
                          Cancel
                        </v-btn>
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.menu.save(dates)"
                        >
                          OK
                        </v-btn>
                      </v-date-picker>
                    </v-menu>
                    <p class="errors">
                      {{ server_errors.date }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeEditModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="UpdatePlan()"
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  data() {
    return {
      tab: null,
      calendars: [],
      loading: false,
      calendarId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      //Add Package
      // start_date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      //   .toISOString()
      //   .substr(0, 10),
      // start_menu: false,

      dates: [],
      menu: false,
      packages: [],
      selectedPackage: "",
      server_errors: {},
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      plan: {},
      calendarEdit: {},

      routeplans: [],
      selectedRoutePlan: "",
      drivers: [],
      selectedDriver: "",

      headers: [
        { text: "ວັນທີ", value: "date" },
        { text: "ຊື່ພະນັກງານ(ທະບຽນລົດ)", value: "driver" },
        {
          text: "ເສັ້ນທາງ",
          value: "route_plan.name",
          sortable: true,
        },

        {
          text: "ຈຳນວນລູກຄ້າ",
          value: "plan_calendar_details_count",
          align: "center",
          sortable: false,
        },
        {
          text: "ລາຍລະອຽດ",
          value: "detail",
          align: "center",
          sortable: false,
        },
        { text: "", value: "actions", sortable: false },
      ],
      toast: {
        value: true,
        color: "success",
        msg: "",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      monthRules: [(v) => !!v || "Date is required"],
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("plan-month/" + this.$route.params.id + "/plan-calendar", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.calendars = res.data.data.data;
              console.log(this.calendars);
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response.status == 422) {
            this.toast.msg = error.message;
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchRoutePlan() {
      this.$axios
        .get("route-plan")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.routeplans = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
    },
    fetchDriver() {
      this.$axios
        .get("driver")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.drivers = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
    },

    AddPlan() {
      this.fetchRoutePlan();
      this.fetchDriver();
      this.$store.commit("modalAdd_State", true);
    },
    closeDelete() {
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
            "/plan-calendar" +
            this.calendarId
        )
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.toast.msg = res.data.message;
              this.$store.commit("Toast_State", this.toast);
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
            }, 300);
          }
        })
        .catch(() => {
          this.fetchData();
          this.$store.commit("Toast_State", this.toast_error);
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
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
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
                this.fetchData();
                this.dates = [];
                this.selectedRoutePlan = "";
                this.selectedDriver = "";
                this.reset();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              console.log(obj);
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
                console.log(this.server_errors);
              }
            }
          });
      }
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
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
              date: this.calendarEdit.date,
            }
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeEditModal();
                this.fetchData();
                this.dates = [];
                this.reset();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
    },
    closeEditModal() {
      this.$store.commit("modalEdit_State", false);
    },
    Search() {
      GetOldValueOnInput(this);
    },
    gotoPlanCalendar(id) {
      this.$router.push({
        name: "PlanCalendarDetail",
        params: { id },
      });
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    selectedDriver: function () {
      this.server_errors.driver_id = "";
    },
    selectedRoutePlan: function () {
      this.server_errors.route_plan_id = "";
    },
    dates: function () {
      this.server_errors.date = "";
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>