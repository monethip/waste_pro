<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="btn-primary" @click="AddPlan()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <p>ແຜນຕາຕະລາງວຽກແຕ່ລະເດືອນ</p>
      </v-col>
      <!--      <v-col>-->
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
    <div>
      <v-card>
        <v-card-text>
          <v-data-table
              :disable-pagination="true"
              :headers="headers"
              :items="calendars"
              :search="search"
              hide-default-footer
          >
            <template v-slot:item.plan="{ item }">
              <v-icon class="mr-2" medium @click="gotoPlanCalendar(item.id,item.month)"
              >mdi-map-marker-path
              </v-icon
              >
            </template>
            <template v-slot:item.has_invoice="{ item }">
              <v-chip :color="HasInvoiceColor(item.has_invoice)"
              >{{ HasInvoice(item.has_invoice) }}
              </v-chip>
            </template>
            <template v-slot:item.created_at="{ item }">
              <div
              >
                {{ moment(item.created_at).format("hh:mm:ss DD-MM-YY") }}
              </div>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon class="mr-2" small @click="editModal(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item.id)"> mdi-delete</v-icon>
            </template>
          </v-data-table
          >
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
            <span class="headline">Add Calendar</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        v-model="plan.name"
                        :rules="nameRules"
                        dense
                        label="ຊື່"
                        outlined
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-menu
                        v-model="start_menu"
                        :close-on-content-click="true"
                        :nudge-right="40"
                        :rules="monthRules"
                        min-width="auto"
                        offset-y
                        transition="scale-transition"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="start_date"
                            dense
                            label="ເລີ່ມວັນທີ"
                            outlined
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="start_date" type="month"
                      ></v-date-picker>
                    </v-menu>
                    <p class="errors">
                      {{ server_errors.month }}
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
                  :disabled="loading"
                  :loading="loading"
                  color="blue darken-1"
                  text
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
            <span class="headline">Update Calendar</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        v-model="calendarEdit.name"
                        :rules="nameRules"
                        dense
                        label="ຊື່"
                        outlined
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-menu
                        v-model="edit_date"
                        :close-on-content-click="true"
                        :nudge-right="40"
                        min-width="auto"
                        offset-y
                        transition="scale-transition"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="calendarEdit.month"
                            :rules="monthRules"
                            dense
                            label="ເລີ່ມວັນທີ"
                            outlined
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                          v-model="calendarEdit.month"
                          type="month"
                      ></v-date-picker>
                    </v-menu>
                    <p class="errors">
                      {{ server_errors.month }}
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
                  :disabled="loading"
                  :loading="loading"
                  color="blue darken-1"
                  text
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
              :disabled="loading"
              :loading="loading"
              color="blue darken-1"
              text
              @click="deleteItemConfirm"
          >OK
          </v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  data() {
    return {
      calendars: [],
      loading: false,
      calendarId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: "",
      oldVal: "",
      //Add Package
      start_date: new Date().toISOString().substr(0, 7),
      start_menu: false,
      edit_date: false,
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

      headers: [
        {text: "ຊື່", value: "name"},
        {text: "ວັນທີເລີ່ມ", value: "month"},
        {
          text: "ມີບິນ",
          value: "has_invoice",
          align: "center",
          sortable: false,
        },
        {
          text: "ຈຳນວນຮອບ",
          value: "plan_calendars_count",
          align: "center",
          sortable: false,
        },
        {
          text: "ລາຍລະອຽດແຜນ",
          value: "plan",
          sortable: false,
          align: "center",
        },
        {
          text: "ວັນທີສ້າງ",
          value: "created_at",
          align: "center",
          sortable: false,
        },
        {text: "", value: "actions", sortable: false},
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

    // allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
    // allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,

    allowedDates(val) {
      return val >= new Date().toISOString().substr(0, 10);
    },

    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("plan-month", {
                params: queryOption([
                  {page: this.pagination.current_page},
                  {per_page: this.per_page},
                ]),
              }
          )
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit("Loading_State", false);
                this.calendars = res.data.data.data;
                this.pagination = res.data.data.pagination;
              }, 100);
            }
          })
          .catch((error) => {
            this.$store.commit("Loading_State", false);
            if (error.response && error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },

    AddPlan() {
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
          .delete("plan-month/" + this.calendarId)
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
      const date = this.moment(`${this.start_date} ${1}`).format('YYYY-MM-DD');
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .post("plan-month/", {
              name: this.plan.name,
              month: date,
            })
            .then((res) => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.closeAddModal();
                  this.fetchData();
                  this.reset();
                  this.$store.commit("Toast_State", this.toast);
                }, 300);
              }
            })
            .catch((error) => {
              this.loading = false;
              this.$store.commit("Toast_State", this.toast_error);
              this.fetchData();
              if (error.response && error.response.status == 422) {
                let obj = error.response.data.errors;
                for (let [key, customer] of Object.entries(obj)) {
                  this.server_errors[key] = customer[0];
                }
              }
            });
      }
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    editModal(item) {
      this.calendarEdit = item;
      this.calendarEdit.month = this.moment(this.calendarEdit.month).format('YYYY-MM');
      this.$store.commit("modalEdit_State", true);
    },
    UpdatePlan() {
      const date = this.moment(`${this.calendarEdit.month} ${1}`).format('YYYY-MM-DD');
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .put("plan-month/" + this.calendarEdit.id, {
              name: this.calendarEdit.name,
              month: date,
            })
            .then((res) => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.closeEditModal();
                  this.fetchData();
                  this.reset();
                  this.$store.commit("Toast_State", this.toast);
                }, 300);
              }
            })
            .catch((error) => {
              this.loading = false;
              this.$store.commit("Toast_State", this.toast_error);
              if (error.response && error.response.status == 422) {
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
    gotoPlanCalendar(id, month) {
      this.$router.push({
        name: "PlanCalendar",
        params: {id},
        query: {
          month: month
        }
      });
    },
    reset() {
      this.$refs.form.reset();
    },
    HasInvoiceColor(value) {
      if (value == '1') {
        return 'success';
      } else if (value == 0) {
        return 'error';
      }
    },
    HasInvoice(value) {
      if (value == '1') {
        return 'ມີບິນ';
      } else if (value == 0) {
        return 'ບໍ່ມີ';
      }
    }
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    "plan.name": function () {
      this.server_errors.name = "";
    },
    start_date: function () {
      this.server_errors.month = "";
    },
    "calendarEdit.name": function () {
      this.server_errors.name = "";
    },
    "calendarEdit.month": function () {
      this.server_errors.month = "";
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
