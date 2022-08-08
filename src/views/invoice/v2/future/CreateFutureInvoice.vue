<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon></v-btn
          >
          ເລືອກລູກຄ້າ</v-breadcrumbs
        >
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text class="pa-8">
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col>
                <v-menu
                    v-model="start_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="start_date"
                        label="ເລີ່ມວັນທີ"
                        readonly
                        outlined
                        v-bind="attrs"
                        v-on="on"
                        dense
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="start_date"
                  ></v-date-picker>
                </v-menu>
                <p class="errors">
                  {{ server_errors.start_month }}
                </p>
              </v-col>

              <v-col>
                <v-menu
                    v-model="end_menu"
                    :close-on-content-click="true"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="end_date"
                        label="ຫາວັນທີ"
                        readonly
                        outlined
                        v-bind="attrs"
                        v-on="on"
                        dense
                    ></v-text-field>
                  </template>
                  <v-date-picker
                      v-model="end_date"
                  ></v-date-picker>
                </v-menu>
                <p class="errors">
                  {{ server_errors.end_month }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-text-field
                    label="Total *"
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
              <v-col>
                <v-checkbox v-model="is_instantly" class="my-auto">
                  <template v-slot:label>
                    <div>ເກັບເງິນທັນທີ</div>
                  </template>
                </v-checkbox>
                <p class="errors">
                  {{ server_errors.is_instantly }}
                </p>
              </v-col>
            </v-row>
            <div v-if="is_instantly == true">
              <v-row>
                <v-col>
                  <div class="field">
                    <div class="file is-large is-boxed">
                      <label class="file-label">
                        <input
                            @change="previewMultiImage"
                            class="file-input input-file-image"
                            type="file"
                            accept="image/*"
                            multiple
                        />
                        <span class="file-cta">
                      <span class="file-icon">
                        <v-icon
                            style="
                            font-size: 60px !important;
                            color: #719aff;
                            cursor: pointer;
                          "
                            class="fas fa-cloud-upload"
                        >mdi-cloud-upload</v-icon
                        >
                      </span>
                      <span
                          class="file-label"
                          style="
                          margin-top: 10px;
                          text-transform: uppercase;
                          padding-top: 20px;
                        "
                      >
                        Choose Image
                      </span>
                    </span>
                      </label>
                    </div>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                    class="mt-5"
                    v-for="(item, index) in preview_list"
                    :key="index"
                >
                  <v-avatar class="avatar rounded mr-2" size="94px">
                    <img :src="item" alt="Image"/>
                  </v-avatar>
                  <p class="mb-0">File name: {{ image_list[index].name }}</p>
                  <span>size: {{ image_list[index].size / 1024 }}KB</span>
                  <div @click="RemoveItem(item)">
                    <v-icon style="cursor: pointer">mdi-delete</v-icon>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-form>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="backPrevios()">
              Back
            </v-btn>
            <v-btn
                color="blue darken-1"
                text
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
import {GetOldValueOnInput} from "@/Helpers/GetValue";

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
      is_instantly:0,
      data: {
        email: '',
      },
      customer:{},
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
      formData.append("customer_id", this.customer.user_id);
      formData.append("start_month", this.start_date);
      formData.append("end_month", this.end_date);
      formData.append("total", this.data.total);
      if(this.is_instantly == true) {
        formData.append("is_instantly", 1);
        formData.append("payment_method", "cash");
        this.image_list.map((item) => {
          formData.append("image_payments[]", item);
        });
      }

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .post("future-invoice", formData, {
              headers: {"Content-Type": "multipart/form-data"},
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
    is_instantly:function(value) {
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