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
              <h2>ຊຳລະບິນຄ່າຂີ້ເຫຍື້ອ</h2>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p>ຂໍ້ມູນບິນ</p>
              <h3>ປະເພດບິນ: {{ invoice.type }}</h3>
              <h3>
                ວັນທີ:
                {{ moment(invoice.created_at).format("DD-MM-YY") }}
              </h3>
              <h3>
                ລວມເງິນ:
                {{ Intl.NumberFormat().format(invoice.total) }}
              </h3>
            </v-col>
            <v-col>
              <p>ຂໍ້ມູນລູກຄ້າ</p>
              <h3 v-if="invoice.customer">
                ຊື່: {{ invoice.customer.name }} {{ invoice.customer.surname }}
              </h3>
              <h3 v-if="invoice.customer">
                ສະຖານະ: {{ invoice.customer.status }}
              </h3>
              <h3 v-if="invoice.customer">
                ແພັກເກດ: {{ invoice.customer.package }}
              </h3>
            </v-col>
          </v-row>
          <v-divider class="my-6"></v-divider>
          <v-container>
            <v-form ref="form" lazy-validation>
              <h3 class="my-4">ເລືອກປະເພດການຊຳລະ</h3>
              <v-row>
                <v-col cols="12">
                  <v-chip-group v-model="paymentType" column>
                    <v-chip
                      large
                      class="mr-6"
                      color="info"
                      label
                      filter
                      outlined
                    >
                      ເງິນສົດ
                      <v-icon left class="ml-1"> mdi-currency-usd</v-icon>
                    </v-chip>
                    <v-chip large color="error" label filter outlined>
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
                <h3 class="my-4">ຫຼັກຖານການຊຳລະ</h3>
                <v-row>
                  <v-col>
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
                      </span>
                    </label>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col v-if="imageUrl">
                    <v-avatar class="avatar rounded" size="194px">
                      <img :src="imageUrl" alt="" />
                    </v-avatar>
                  </v-col>
                  <p class="errors">
                    {{ server_errors.image }}
                  </p>
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
                      :rules="[
                        () =>
                          !!bcel_reference_number ||
                          'BCEL Reference Number field is required',
                        () =>
                          (!!bcel_reference_number &&
                            bcel_reference_number.length == 15) ||
                          'BCEL Reference Number must be than 15 number',
                      ]"
                      counter="15"
                    >
                    </v-text-field>
                  </v-col>
                  <p class="errors">
                    {{ server_errors.bcel_reference_number }}
                  </p>
                </v-row>
              </div>
            </v-form>
          </v-container>

          <v-divider class="my-6"></v-divider>
          <v-card-actions>
            <v-btn
              large
              class="white--text c-btn px-12"
              color="info"
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

    <!-- Confirm Payment-->
    <v-dialog v-model="paymentDialog" max-width="620px">
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>
              <v-icon class="primary-color" large color="success"
                >mdi-checkbox-marked-circle-outline</v-icon
              >
              ຢືນຢັນຊຳລະຄ່າຂີ້ເຫຍື້ອ
              <span class="primary-color" v-if="invoice.customer"
                >{{ invoice.customer.name }}
                {{ invoice.customer.surname }}</span
              >
            </p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-chip-group v-model="confirmType" column>
                      <v-chip
                        medium
                        class="mr-6"
                        color="success"
                        label
                        filter
                        outlined
                      >
                        ຢືນຢັນການຊຳລະ
                        <v-icon left class="ml-1">
                          mdi-account-check-outline</v-icon
                        >
                      </v-chip>
                      <v-chip medium color="error" label filter outlined>
                        ຊຳລະບໍຜ່ານ
                        <v-icon class="ml-1" left>
                          mdi-account-cancel</v-icon
                        ></v-chip
                      >
                    </v-chip-group>
                  </v-col>
                </v-row>
                <div v-if="confirmType == 1">
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        v-model="reject_reason_id"
                        label="ເຫດຜົນ"
                        outlined
                        dense
                        :items="rejects"
                        item-text="name"
                        item-value="id"
                      >
                      </v-select>
                      <p class="errors">
                        {{ server_errors.reject_reason_id }}
                      </p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="description"
                        label="Description"
                        outlined
                        dense
                        type="text"
                      >
                      </v-text-field>
                      <p class="errors">
                        {{ server_errors.description }}
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-card-actions>
                      <v-btn
                        color="info"
                        class="white--text px-12 c-btn"
                        large
                        :loading="loading"
                        :disabled="loading"
                        @click="confirmReject()"
                      >
                        ຢືນຢັນ
                      </v-btn>
                    </v-card-actions>
                  </v-row>
                </div>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Payment",
  data() {
    return {
      loading: false,
      server_errors: {},
      invoice: {},
      image: "",
      imageUrl: "",
      bcel_reference_number: "",
      payment_method: "cash",
      paymentType: 0,
      confirmType: "",
      paymentDialog: false,
      rejects: [],
      reject_reason_id: "",
      description: "",
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
    confirmPayment() {
      this.loading = true;
      this.$axios
        .put("confirm-payment/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              // this.$router.push({
              //   name: "InvoiceTab",
              //   query: { tab: "invoice-approved" },
              // });
              this.$router.go(-1);
              this.closeConfirmModal();
            }, 300);
          }
        })
        .catch(() => {
          this.closeConfirmModal();
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
              for (let [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }
            this.fetchData();
          });
      }
    },

    confirmReject() {
      this.loading = true;
      this.$axios
        .put("reject-payment/" + this.$route.params.id, {
          reject_reason_id: this.reject_reason_id,
          description: this.description,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.$router.go(-1);
              // this.$router.push({
              //   name: "InvoiceTab",
              //   query: { tab: "invoice-approved" },
              // });
              this.closeConfirmModal();
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
            for (let [key, data] of Object.entries(obj)) {
              this.server_errors[key] = data[0];
            }
          }
        });
    },

    paymentModal() {
      this.fetchReject();
      this.paymentDialog = true;
    },
    closeConfirmModal() {
      this.paymentDialog = false;
    },
  },
  watch: {
    paymentType: function () {
      if (this.paymentType == 0) {
        this.payment_method = "cash";
        this.image = "";
        this.imageUrl = "";
        this.bcel_reference_number = "";
      } else if (this.paymentType == 1) {
        this.payment_method = "bcel";
      }
      this.server_errors.payment_method = "";
    },
    confirmType: function () {
      if (this.confirmType == 0) {
        this.confirmPayment();
      }
    },
    bcel_reference_number: function () {
      this.server_errors.bcel_reference_number = "";
    },
    image: function () {
      this.server_errors.image = "";
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