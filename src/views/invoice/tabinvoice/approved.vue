<template>
  <v-container>
    <v-row class="mb-2">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          ລາຍລະອຽດການອອກບິນຄ່າຂີ້ເຫຍື້ອ</v-breadcrumbs
        >
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="invoices"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
              fixed-header
              height="100vh"
            >
              <template v-slot:item.media="{ item }">
                <v-avatar
                  size="36px"
                  v-for="(img, index) in item.media"
                  :key="index"
                >
                  <img v-if="img.thumb" :src="img.thumb" />
                </v-avatar>
              </template>
              <template v-slot:item.total_bag="{ item }">
                <v-chip color="success">{{ item.total_bag }}</v-chip>
              </template>
              <template v-slot:item.exceed_bag="{ item }">
                <v-chip color="error">{{ item.exceed_bag }}</v-chip>
              </template>
              <template v-slot:item.exceed_bag_charge="{ item }">
                <div>
                  {{ Intl.NumberFormat().format(item.exceed_bag_charge) }}
                </div>
              </template>
              <template v-slot:item.new_exceed_bag_charge="{ item }">
                <div class="error--text">
                  {{ Intl.NumberFormat().format(item.new_exceed_bag_charge) }}
                </div>
              </template>
              <template v-slot:item.sub_total="{ item }">
                <div>
                  {{ Intl.NumberFormat().format(item.sub_total) }}
                </div>
              </template>

              <template v-slot:item.total="{ item }">
                <div>
                  {{ Intl.NumberFormat().format(item.total) }}
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      color="primary"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      medium
                      class="mr-2"
                      >mdi-dots-vertical</v-icon
                    >
                  </template>
                  <v-list>
                    <v-list-item link>
                      <v-list-item-title @click="viewPage(item.id)">
                        <v-icon small class="mr-2"> mdi-eye </v-icon>
                        View
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-title @click="PaymentPage(item.id)">
                        <v-icon small> mdi-credit-card </v-icon>
                        Payment
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-title>
                        <v-icon small> mdi-credit-card </v-icon>
                        Reject Payment
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </template>
              <!-- <div>
                <template v-slot:item.actions="{ item }">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Dropdown
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>Menu 1
                         <v-icon small class="mr-2" @click="editModal(item)">
                  mdi-pencil
                </v-icon>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </div> --> </v-data-table
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
      </v-card>
    </div>

    <!-- Edit Add-->
    <v-dialog v-model="paymentDialog" max-width="720px">
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>
              ຊຳລະຄ່າຂີ້ເຫຍື້ອ
              <span class="primary-color" v-if="invoiceItem.customer"
                >{{ invoiceItem.customer.name }}
                {{ invoiceItem.customer.surname }}</span
              >
            </p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <h3>ເລືອກປະເພດການຊຳລະ</h3>
                <v-row>
                  <v-col cols="12">
                    <v-chip-group v-model="paymentType" column>
                      <v-chip
                        medium
                        class="mr-6"
                        color="success"
                        label
                        filter
                        outlined
                      >
                        ເງິນສົດ
                        <v-icon left class="ml-1"> mdi-currency-usd</v-icon>
                      </v-chip>
                      <v-chip medium color="error" label filter outlined>
                        BCEL
                        <v-icon class="ml-1" left>
                          mdi-credit-card</v-icon
                        ></v-chip
                      >
                    </v-chip-group>
                    <p class="errors">
                      {{ server_errors.payment_method }}
                    </p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col align="center">
                    <div class="field">
                      <div class="file is-large is-boxed">
                        <label class="file-label">
                          <input
                            @change="onFileChange"
                            class="file-input input-file-image"
                            type="file"
                            name="image"
                            accept="image/*"
                            ref="image"
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
                              ຫຼັກຖານການຊຳລະ
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col align="center" class="mt-5" v-if="imageUrl">
                    <v-avatar class="avatar rounded" size="94px">
                      <img :src="imageUrl" alt="" />
                    </v-avatar>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="bcel_reference_number"
                      label="ເລກລະຫັດການຊຳລະ"
                      outlined
                      dense
                      type="number"
                      class="input-number"
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.bcel_reference_number }}
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
                @click="Payment()"
              >
                ຊຳລະ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  data() {
    return {
      selectedRows: [],
      loading: false,
      customerId: "",
      paymentDialog: false,
      paymentType: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 20,
      search: "",
      oldVal: "",
      invoices: [],
      server_errors: {},
      selectedStatus: ["approved"],
      image: "",
      imageUrl: "",
      invoiceItem: {},
      bcel_reference_number: "",
      payment_method: "cash",
      headers: [
        { text: "ລູກຄ້າ", value: "customer.name" },
        {
          text: "ຈຳນວນຖົງ",
          value: "total_bag",
          sortable: false,
          align: "center",
        },
        {
          text: "ຈຳນວນຖົງເກີນ",
          value: "exceed_bag",
          sortable: false,
          align: "center",
        },
        {
          text: "ຈຳນວນເງິນ",
          value: "exceed_bag_charge",
          sortable: false,
        },
        {
          text: "ຈຳນວນເງິນໄລ່ເພີ່ມ",
          value: "new_exceed_bag_charge",
          sortable: false,
        },
        { text: "ສ່ວນຫຼຸດ", value: "discount" },
        {
          text: "SubTotal",
          value: "sub_total",
          sortable: false,
        },
        { text: "Total", value: "total", sortable: false },
        { text: "Type", value: "type", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    onFileChange(e) {
      let input = e.target;
      let file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("plan-month/" + this.$route.params.id + "/invoice", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            statuses: this.selectedStatus,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.invoices = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    paymentModal(item) {
      this.invoiceItem = item;
      this.paymentDialog = true;
    },
    Payment() {
      let formData = new FormData();
      formData.append("payment_method", this.payment_method);
      formData.append("image", this.image);
      formData.append("bcel_reference_number", this.bcel_reference_number);
      formData.append("_method", "PUT");

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("pay-invoice/" + this.invoiceItem.id, formData)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeEditModal();
                this.fetchData();
                this.$refs.form.reset();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
            this.fetchData();
          });
      }
    },
    closeEditModal() {
      this.paymentDialog = false;
    },
    viewPage(id) {
      this.$router.push({
        name: "InvoiceDetail",
        params: { id },
      });
    },
    PaymentPage(id) {
      console.log(id);
      this.$router.push({
        name: "Payment",
        params: { id },
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    paymentType: function () {
      console.log(this.paymentType);
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>