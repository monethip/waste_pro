<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          ສ້າງບິນຢ້ອນຫຼັງ
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text class="pa-8">
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col cols="4">
                <p>ວັນທີບິນ</p>
                <v-date-picker
                  v-model="billDate"
                  type="month"
                  :max="now"
                ></v-date-picker>
              </v-col>
              <v-col cols="8">
                <v-row>
                  <v-col>
                    <v-text-field
                      label="ຊື່ລາຍການ *"
                      required
                      v-model="data.title"
                      :rules="totalRules"
                      outlined
                      dense
                      :disabled="disabledTitle"
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.title }}
                    </p>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      @click="disabledTitle = !disabledTitle"
                      color="primary"
                      ><v-icon>mdi-pen</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="ຄຳອະທິບາຍ *"
                      required
                      v-model="data.description"
                      :rules="totalRules"
                      outlined
                      dense
                      :disabled="disabledDescription"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.description }}
                    </p>
                  </v-col>
                  <v-col cols="2">
                    <v-btn
                      @click="disabledDescription = !disabledDescription"
                      color="primary"
                      ><v-icon>mdi-pen</v-icon></v-btn
                    >
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="ລາຄາ *"
                      required
                      v-model="data.price"
                      :rules="totalRules"
                      type="number"
                      class="input-number"
                      outlined
                      dense
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.price }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      label="ຈຳນວນ *"
                      required
                      v-model="data.quantity"
                      :rules="totalRules"
                      type="number"
                      class="input-number"
                      outlined
                      dense
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.quantity }}
                    </p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="elevation-0 btn-warning mr-4" @click="backPrevios()">
              ຍ້ອນກັບ
            </v-btn>
            <v-btn
              class="elevation-0 btn-primary"
              :loading="loading"
              :disabled="loading"
              @click="AddData()"
            >
              ສ້າງບິນ
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import moment from "moment";

export default {
  name: "Invoice",
  props: ["items"],
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  data() {
    return {
      tab: null,
      now: new Date().toISOString().substr(0, 7),
      start_date: new Date().toISOString().substr(0, 7),
      billDate: new Date().toISOString().substr(0, 7),
      end_date: "",
      disabledTitle: true,
      disabledDescription: true,
      start_menu: false,
      end_menu: false,
      invoices: [],
      loading: false,
      is_instantly: 0,
      data: {
        email: "",
      },
      user: {},
      calendarId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: "",
      oldVal: "",
      //Add Package
      packages: [],
      selectedPackage: "",
      server_errors: {},

      preview_list: [],
      image_list: [],
      image: [],
      //Filter
      totalRules: [(v) => !!v || "Total is required"],
    };
  },
  methods: {
    fetchData() {
      this.user = this.items;
    },
    Search() {
      GetOldValueOnInput(this);
    },

    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      const formData = {
        user_id: this.user.id,
        title: this.data.title,
        description: this.data.description,
        price: this.data.price,
        date: this.billDate,
        quantity: this.data.quantity,
      };
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("custom-bill", formData)
          .then((res) => {
            if (res.data.code == 200) {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.$router.push({
                name: "custom-bill",
              });
            }
          })
          .catch((error) => {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            if (error.response && error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
            this.loading = false;
          });
      }
    },
  },
  watch: {
    is_instantly: function (value) {
      console.log(value);
    },
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
    billDate: function (value) {
      this.data.title = `ຄ່າບໍລິການປະຈຳເດືອນ ${moment(value).format(
        "MM-YYYY"
      )}`;
      this.data.description = `ຄ່າບໍລິການປະຈຳເດືອນ ${moment(value).format(
        "MM-YYYY"
      )}`;
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
    console.log("2222", this.items);
    if (!this.items) this.$router.push("/");
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main";
</style>