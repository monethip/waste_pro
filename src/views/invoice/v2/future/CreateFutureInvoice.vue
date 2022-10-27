<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          ສ້າງບິນລ່ວງໜ້າ
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
                  :min="now"
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
                      v-model="data.total"
                      :rules="totalRules"
                      type="number"
                      class="input-number"
                      outlined
                      dense
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.total }}
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
      billDate: new Date().toISOString().substr(0, 7),
      start_menu: false,
      end_menu: false,
      invoices: [],
      loading: false,
      disabledTitle: true,
      disabledDescription: true,
      is_instantly: 0,
      payment_method: "",
      paymentType: "",
      data: {
        email: "",
      },
      customer: {},
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
      paymentTypeRule: [(v) => !!v || "Payment is required"],
    };
  },
  methods: {
    RemoveItem(item) {
      this.preview_list.splice(this.preview_list.indexOf(item), 1);
    },

    previewMultiImage: function (event) {
      let input = event.target;
      let count = input.files.length;
      let index = 0;
      if (input.files) {
        while (count--) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.preview_list.push(e.target.result);
          };
          this.image_list.push(input.files[index]);
          reader.readAsDataURL(input.files[index]);
          index++;
        }
      }
    },
    fetchData() {
      console.log(this.items);
      this.customer = this.items;
    },
    Search() {
      GetOldValueOnInput(this);
    },

    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      let formData = new FormData();
      formData.append("customer_id", this.customer.customer.id);
      formData.append("title", this.data.title);
      formData.append("description", this.data.description);
      formData.append("start_month", this.billDate);
      formData.append("date", this.billDate);
      formData.append("total", this.data.total);
      formData.append("quantity", this.data.quantity);
      if (this.is_instantly == true) {
        formData.append("is_instantly", 1);
        formData.append("payment_method", this.payment_method);
        this.image_list.map((item) => {
          formData.append("image_payments[]", item);
        });
      }

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("future-invoice", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.$router.push({
                name: "future-invoice",
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
    paymentType: function () {
      if (this.paymentType == 0) {
        this.payment_method = "cash";
        this.image = "";
        this.imageUrl = "";
        // this.bcel_reference_number = "";
      } else if (this.paymentType == 1) {
        this.payment_method = "bcel";
      }
      this.server_errors.payment_method = "";
    },

    billDate: function () {
      this.server_errors.month = "";
    },
  },
  created() {
    this.fetchData();
    if (!this.customer.customer) this.$router.push("/");
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main";
</style>