<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon></v-btn
          >
          ຊຳລະບິນຄ່າຂີ້ເຫຍື້ອ</v-breadcrumbs
        >
      </v-col>
    </v-row>

    <div>
      <v-card>
        <v-card-text class="px-16 py-16">
          <v-row align="center" class="py-4">
            <v-col align="center">
              <h2>ໃບບິນເກັບເງິນຄ່າຂີ້ເຫື້ອຍ</h2>
              <p v-if="invoice.plan_month">{{ invoice.plan_month.name }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>Invoice</p>
              <h3>ປະເພດບິນ: {{ invoice.type }}</h3>
              <h3>
                ວັນທີ:
                {{ moment(invoice.created_at).format("DD-MM-YY") }}
              </h3>
            </v-col>
            <v-col>
              <p>Customer</p>
              <h3 v-if="invoice.customer">
                {{ invoice.customer.name }} {{ invoice.customer.surname }}
              </h3>
            </v-col>
          </v-row>
          <v-divider class="my-6"></v-divider>
          <!--
          <v-row>
            <v-col>
              <h3>ຈຳນວນຖົງ: {{ invoice.total_bag }}</h3>
              <h3>ຈຳນວນຖົງທີ່ກາຍ: {{ invoice.exceed_bag }}</h3>
              <h3>ຈຳນວນຖົງທີ່ກາຍ: {{ invoice.exceed_bag_charge }}</h3>
              <h3>ຈຳນວນຖົງທີ່ກາຍ: {{ invoice.new_exceed_bag_charge }}</h3>
            </v-col>
            <v-col>
              <h3>ລວມ: {{ invoice.sub_total }}</h3>
              <h3>ສ່ວນຫຼຸດ: {{ invoice.discount }}</h3>
              <h3>ລວມທັງໝົດ: {{ invoice.total }}</h3>
            </v-col>
          </v-row>
-->
          <v-container>
            <v-form ref="form" lazy-validation>
              <h3 class="my-4">ເລືອກປະເພດການຊຳລະ</h3>
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
              <div v-if="paymentType == 1">
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
                                >mdi-file-image</v-icon
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
              </div>
            </v-form>
          </v-container>

          <v-divider class="my-6"></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="backPrevios()">
              Print
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
                <h3>ຢືນຢັນການຊຳລະ</h3>
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
                        Confirm
                        <v-icon left class="ml-1"> mdi-currency-usd</v-icon>
                      </v-chip>
                      <v-chip medium color="error" label filter outlined>
                        Reject
                        <v-icon class="ml-1" left>
                          mdi-credit-card</v-icon
                        ></v-chip
                      >
                    </v-chip-group>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-select
                      v-model="bcel_reference_number"
                      label="ເລກລະຫັດການຊຳລະ"
                      outlined
                      dense
                      :items="rejects"
                      :item-text="name"
                      :item-value="id"
                    >
                    </v-select>
                    <p class="errors">
                      {{ server_errors.bcel_reference_number }}
                    </p>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="bcel_reference_number"
                      label="Description"
                      outlined
                      dense
                      type="text"
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
              <v-btn color="blue darken-1" text @click="closeConfirmModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="ConfirmPayment()"
              >
                Confirm Payment
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Customer",
  data() {
    return {
      loading: false,
      server_errors: {},
      invoice: {},
      image: "",
      imageUrl: "",
      invoiceItem: {},
      bcel_reference_number: "",
      payment_method: "cash",
      paymentType: 0,
      paymentDialog: false,
      rejects: [],
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("invoice/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.invoice = res.data.data;
              console.log(this.invoice);
            }, 100);
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
    fetchReject() {
      this.$axios
        .get("reject-reason")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.rejects = res.data.data;
            }, 100);
          }
        })
        .catch(() => {});
    },
    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.customerId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("customer/" + this.customerId)
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
    onFileChange(e) {
      let input = e.target;
      let file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
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
          .post("pay-invoice/" + this.$route.params.id, formData)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.paymentModal();
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
    paymentModal() {
      this.fetchReject();
      this.paymentDialog = true;
    },
    closeConfirmModal() {
      this.paymentDialog = false;
    },
    ConfirmPayment() {},
  },
  watch: {
    paymentType: function () {
      if (this.paymentType == 0) {
        this.payment_method = "cash";
      } else if (this.paymentType == 1) {
        this.payment_method = "bcel";
        console.log(this.payment_method);
      }
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