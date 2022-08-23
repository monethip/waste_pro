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
            <!--            <v-row>-->
            <!--              <v-col>-->
            <!--                <v-menu-->
            <!--                    v-model="start_menu"-->
            <!--                    :close-on-content-click="false"-->
            <!--                    :nudge-right="40"-->
            <!--                    transition="scale-transition"-->
            <!--                    offset-y-->
            <!--                    min-width="auto"-->
            <!--                >-->
            <!--                  <template v-slot:activator="{ on, attrs }">-->
            <!--                    <v-text-field-->
            <!--                        v-model="start_date"-->
            <!--                        label="ເລີ່ມວັນທີ"-->
            <!--                        readonly-->
            <!--                        outlined-->
            <!--                        v-bind="attrs"-->
            <!--                        v-on="on"-->
            <!--                        dense-->
            <!--                    ></v-text-field>-->
            <!--                  </template>-->
            <!--                  <v-date-picker-->
            <!--                      v-model="start_date"-->
            <!--                  ></v-date-picker>-->
            <!--                </v-menu>-->
            <!--                <p class="errors">-->
            <!--                  {{ server_errors.start_month }}-->
            <!--                </p>-->
            <!--              </v-col>-->
            <!--              <v-col>-->
            <!--                <v-menu-->
            <!--                    v-model="end_menu"-->
            <!--                    :close-on-content-click="true"-->
            <!--                    :nudge-right="40"-->
            <!--                    transition="scale-transition"-->
            <!--                    offset-y-->
            <!--                    min-width="auto"-->
            <!--                >-->
            <!--                  <template v-slot:activator="{ on, attrs }">-->
            <!--                    <v-text-field-->
            <!--                        v-model="end_date"-->
            <!--                        label="ຫາວັນທີ"-->
            <!--                        readonly-->
            <!--                        outlined-->
            <!--                        v-bind="attrs"-->
            <!--                        v-on="on"-->
            <!--                        dense-->
            <!--                    ></v-text-field>-->
            <!--                  </template>-->
            <!--                  <v-date-picker-->
            <!--                      v-model="end_date"-->
            <!--                  ></v-date-picker>-->
            <!--                </v-menu>-->
            <!--                <p class="errors">-->
            <!--                  {{ server_errors.end_month }}-->
            <!--                </p>-->
            <!--              </v-col>-->
            <!--            </v-row>-->
            <v-row>
              <v-col>
                <v-text-field label="ຫົວຂໍ້ບິນ *" required v-model="data.title" :rules="totalRules" outlined dense>
                </v-text-field>
                <p class="errors">
                  {{ server_errors.title }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="ຄຳອະທິບາຍກ່ຽກັບບິນ *" required v-model="data.description" :rules="totalRules"
                  outlined dense></v-text-field>
                <p class="errors">
                  {{ server_errors.description }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="ລາຄາ *" required v-model="data.price" :rules="totalRules" type="number"
                  class="input-number" outlined dense></v-text-field>
                <p class="errors">
                  {{ server_errors.price }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field label="ຈຳນວນ *" required v-model="data.quantity" :rules="totalRules" type="number"
                  class="input-number" outlined dense></v-text-field>
                <p class="errors">
                  {{ server_errors.quantity }}
                </p>
              </v-col>
            </v-row>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="elevation-0 btn-warning mr-4" @click="backPrevios()">
              ຍ້ອນກັບ
            </v-btn>
            <v-btn class="elevation-0 btn-primary" :loading="loading" :disabled="loading" @click="AddData()">
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

export default {
  name: "Invoice",
  props: ["items"],
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  data() {
    return {
      tab: null,
      start_date: new Date().toISOString().substr(0, 7),
      end_date: "",
      start_menu: false,
      end_menu: false,
      invoices: [],
      loading: false,
      is_instantly: 0,
      data: {
        email: '',
      },
      user: {},
      calendarId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
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
      totalRules: [
        (v) => !!v || "Total is required",
      ],
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
        quantity: this.data.quantity,
      }
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
              msg: error.response.data.message,
            });
            if (error.response.status == 422) {
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
@import "../../../../../public/scss/main";
</style>