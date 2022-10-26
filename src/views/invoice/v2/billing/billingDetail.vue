<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          ລາຍລະອຽດການອອກບິນຄ່າຂີ້ເຫຍື້ອ
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text class="px-16 py-16">
          <!--          <v-row>-->
          <!--            <v-col >-->
          <!--              <div class="text-center mx-auto">-->
          <!--                <v-img-->
          <!--                    :src="require('../../../assets/logo_waste.png')"-->
          <!--                    max-height="160px"-->
          <!--                    max-width="160px"-->
          <!--                    alt="logo"-->
          <!--                    contain-->
          <!--                    eager-->
          <!--                    class="app-logo me-3 text-center"-->
          <!--                ></v-img>-->
          <!--              </div>-->
          <!--            </v-col>-->
          <!--          </v-row>-->
          <v-row class="pb-4">
            <v-col>
              <h2 class="text-center">ໃບບິນເກັບເງິນຄ່າຂີ້ເຫື້ຍອ</h2>
            </v-col>
          </v-row>
          <v-row class="pb-4">
            <v-col>
              <h2>
                ສະຖານະບິນ:
                <v-chip :color="getBgColorFunc(invoice.status)" dark>{{
                  getLaoStatusFunc(invoice.status)
                }}</v-chip>
                <div v-if="invoice.status == 'rejected'">
                  <v-chip
                    dark
                    v-for="detail in invoice.reject_details"
                    :key="detail.id"
                    >{{ detail.reject_reason.name }}
                  </v-chip>
                </div>
              </h2>
            </v-col>
            <v-co>
              ວັນທີສ້າງບິນ:
              {{ moment(invoice.created_at).format("DD-MM-YY") }}
            </v-co>
          </v-row>

          <v-row>
            <v-col>
              <h3>ຂໍ້ມູນບິນ</h3>
              <h3>
                ເລກບິນ:
                <span>{{ invoice.billing_display_id }}</span>
              </h3>
              <h3>
                ລາຍລະອຽດ:
                <span>{{ invoice.content }}</span>
              </h3>
              <h3>ປະເພດບິນ: {{ filterBillingType(invoice.display_type) }}</h3>
              <h3>
                ເດືອນ:
                {{ invoice.bill_month }}
              </h3>
            </v-col>
            <v-col>
              <h3>ຂໍ້ມູນລູກຄ້າ</h3>
              <h3>ໄອດີ: {{ customerDisplayId }}</h3>
              <h3>ຊື່: {{ invoice.display_customer_name }}</h3>
              <h3>ທີ່ຢູ່: {{ invoice.display_customer_address }}</h3>
              <h3>ເບີໂທ: {{ invoice.display_customer_phone }}</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                class="btn btn-primary mr-4 elevation-0"
                v-if="invoice.status === 'created'"
                @click="approveBill(invoice.id)"
                >ອະນຸມັດບິນ
              </v-btn>
              <!--              <v-btn class="btn btn-primary mr-4 elevation-0" v-if="invoice.status === 'created'"-->
              <!--                     @click="editBill(invoice.id)">ແກ້ໄຂບິນ-->
              <!--              </v-btn>-->
              <v-btn
                class="btn btn-primary mr-4 elevation-0"
                v-if="invoice.status === 'approved'"
                @click="toPay(invoice.id)"
                >ຊຳລະບິນ</v-btn
              >
              <v-btn
                class="btn btn-primary mr-4 elevation-0"
                v-if="invoice.status === 'to_confirm_payment'"
                @click="confirmPayment"
              >
                ຢືນຢັນການຊຳລະບິນ
              </v-btn>
              <v-btn
                class="btn btn-primary mr-4 elevation-0"
                v-if="invoice.status === 'to_confirm_payment'"
                @click="toConfirm(invoice.id)"
              >
                ປະຕິເສດການຊຳລະ
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mb-n6">
            <v-col>ລາຍລະອຽດ</v-col>
          </v-row>
          <v-divider class="my-6 c-divider"></v-divider>

          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">ລຳດັບ</th>
                  <th class="text-left">ລາຍການ</th>
                  <th class="text-left">ລາຍລະອຽດ</th>
                  <th class="text-left">ຈຳນວນ</th>
                  <th class="text-left">ລາຄາ</th>
                  <th class="text-left">ລວມ</th>
                  <th class="text-left">Active</th>
                  <th
                    class="text-left"
                    v-if="invoice.status === 'created'"
                  ></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(data, index) in invoice.billing_details"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ data.item_la }}</td>
                  <td>{{ data.content }}</td>
                  <td>{{ Intl.NumberFormat().format(data.quantity) }}</td>
                  <td>{{ Intl.NumberFormat().format(data.price) }}</td>
                  <td>{{ Intl.NumberFormat().format(data.total) }}</td>
                  <td>
                    <div v-if="data.is_active === 1">
                      <v-chip color="success" label>True</v-chip>
                    </div>
                    <div v-if="data.is_active === 0">
                      <v-chip label>False</v-chip>
                    </div>
                  </td>
                  <td v-if="invoice.status === 'created'">
                    <v-icon
                      color="success"
                      small
                      class="mr-2"
                      @click="EditInvoice(data)"
                    >
                      mdi-pen
                    </v-icon>
                  </td>
                </tr>

                <!--              <v-divider></v-divider>-->
              </tbody>
            </template>
          </v-simple-table>

          <v-divider class="my-6 c-divider total-height bottom"></v-divider>
          <v-simple-table>
            <tbody class="tb-result">
              <tr>
                <td :colspan="4" style="font-size: 16px; font-weight: 600">
                  ລວມເງິນ:
                </td>
                <td :colspan="4" style="font-size: 16px; font-weight: 600">
                  {{ Intl.NumberFormat().format(invoice.sub_total) }}
                </td>
              </tr>
              <tr>
                <td :colspan="4" style="font-size: 16px; font-weight: 600">
                  ສ່ວນຫຼຸດ:
                </td>
                <td :colspan="4" style="font-size: 16px; font-weight: 600">
                  {{ Intl.NumberFormat().format(invoice.discount) }}
                </td>
              </tr>
              <tr style="font-size: 20px">
                <td :colspan="4" style="font-size: 16px; font-weight: 600">
                  ລວມທັງໝົດ:
                </td>
                <td :colspan="4" style="font-size: 16px; font-weight: 600">
                  {{ Intl.NumberFormat().format(invoice.total) }}
                </td>
              </tr>
            </tbody>
            <br />
          </v-simple-table>
          <!--          <v-row class="mb-n10">-->
          <!--            <v-col>-->
          <!--              <p>ການຊຳລະ</p>-->
          <!--            </v-col>-->
          <!--          </v-row>-->
          <v-row>
            <c-vo>
              <h3>
                ເຄື່ອນໄຫວລ່າສຸດ:
                {{ moment(invoice.updated_at).format("DD-MM-YY HH:mm:ss") }}
              </h3>
            </c-vo>
          </v-row>
          <v-row>
            <v-col>
              <h3>
                ວັນທີຊຳລະ:
                <span v-if="invoice.paided_by" class="error--text">{{
                  invoice.paided_at
                }}</span>
              </h3>
              <h3 v-if="invoice.payment_method">
                ປະເພດຊຳລະ: {{ getLaoStatusFunc(invoice.payment_method) }}
              </h3>
              <h3 v-if="invoice.paided_by">
                ຊຳລະໂດຍ: {{ invoice.paided_by.name }}
              </h3>
            </v-col>
            <v-col>
              <h3>
                ວັນທີຢືນຢັນຊຳລະ:
                <span v-if="invoice.confirmed_payment_by" class="error--text">{{
                  invoice.confirmed_payment_at
                }}</span>
              </h3>
              <h3 v-if="invoice.confirmed_payment_by">
                ຢືນຢັນຊຳລະໂດຍ: {{ invoice.confirmed_payment_by.name }}
              </h3>
            </v-col>
          </v-row>
          <div v-if="invoice.payment_method == 'bcel'">
            <h3 class="v-title" v-if="invoice.image_payments">ຮູບການຊຳລະ</h3>
            <v-row v-if="invoice.image_payments">
              <v-col
                cols="6"
                v-for="(img, index) in invoice.image_payments"
                :key="index"
              >
                <v-card class="elevation-0">
                  <v-img
                    :src="img.url"
                    max-height="300"
                    max-width="400"
                    min-height="300"
                    min-width="400"
                    aspect-ratio="1"
                    class="pa-2 img-payment"
                    @click="showImage(img.url)"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>

            <h3 class="v-title" v-if="invoice.image_fix_payments.length">
              ຮູບການຊຳລະໃໝ່
            </h3>
            <v-row v-if="invoice.image_fix_payments">
              <v-col
                cols="6"
                v-for="(img, index) in invoice.image_fix_payments"
                :key="index"
              >
                <v-card class="elevation-0">
                  <v-img
                    :src="img.url"
                    max-height="300"
                    max-width="400"
                    min-height="300"
                    min-width="400"
                    aspect-ratio="1"
                    class="pa-2 img-payment-error"
                    @click="showImage(img.url)"
                  ></v-img>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <v-card-actions class="mt-6">
            <v-spacer></v-spacer>
            <v-btn
              color="info"
              :loading="loading"
              :disabled="loading"
              @click="Download(invoice)"
              class="white--text px-12 btn-primary elevation-0"
              v-if="invoice.status === 'success'"
            >
              Download
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>

    <!-- pay bill-->

    <ModalEdit>
      <template @close="close">
        <v-card class="py-8 px-14">
          <v-card-title>
            <p>ຊຳລະຄ່າຂີ້ເຫື້ຍອ {{ invoice.content }}</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <h3 class="my-4">ເລືອກປະເພດການຊຳລະ</h3>
                <v-row>
                  <v-col cols="12">
                    <v-chip-group
                      v-model="paymentType"
                      column
                      :rules="paymentTypeRule"
                      required
                    >
                      <v-chip
                        large
                        class="mr-8"
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
                        <v-icon class="ml-1" left> mdi-credit-card </v-icon>
                      </v-chip>
                    </v-chip-group>
                    <p class="errors">
                      {{ server_errors.payment_method }}
                    </p>
                  </v-col>
                </v-row>
                <div v-if="paymentType == 1">
                  <h3 class="my-4">ຮູບສຳເລັດການໂອນ</h3>
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
                </div>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="error"
                class="elevation-0 btn mr-4 px-12"
                medium
                @click="closeModal()"
              >
                ປິດ
              </v-btn>
              <v-btn
                class="elevation-0 btn btn-primary px-12"
                medium
                :loading="loading"
                :disabled="loading"
                @click="pay"
              >
                ຊຳລະ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>

    <!-- Confirm Payment-->
    <v-dialog v-model="paymentDialog" max-width="620px" persistent>
      <template>
        <v-card>
          <v-card-title>
            <p>
              <v-icon class="primary-color" large color="success"
                >mdi-checkbox-marked-circle-outline
              </v-icon>
              ປະຕິເສດການຊຳລະຄ່າຂີ້ເຫຍື້ອ

              <span class="primary-color"
                >{{ invoice.name }} {{ invoice.content }}</span
              >
            </p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
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
              </v-form>
              <v-card-actions class="mt-4">
                <v-spacer></v-spacer>
                <v-btn
                  color="error"
                  class="btn mr-4 px-12 elevation-0"
                  medium
                  @click="paymentDialog = false"
                >
                  ປິດ
                </v-btn>
                <v-btn
                  color="info"
                  class="white--text px-12 btn-primary elevation-0"
                  medium
                  :loading="loading"
                  :disabled="loading"
                  @click="rejectPayment()"
                >
                  ຢືນຢັນ
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

    <ModalAdd>
      <template @close="close">
        <v-card class="py-8 px-14">
          <v-card-title>
            <p>ແກ້ໄຂຂໍ້ມູນ {{ formData.content }}</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <h3 class="my-4">ແກ້ໄຂຂໍ້ມູນ</h3>
                <v-row>
                  <v-col cols>
                    <v-text-field
                      v-model="formData.quantity"
                      label="Quantity"
                      outlined
                      dense
                      type="number"
                      class="input-number"
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.qty }}
                    </p>
                  </v-col>
                  <v-col cols>
                    <v-text-field
                      v-model="formData.price"
                      label="Price"
                      outlined
                      dense
                      type="number"
                      class="input-number"
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.price }}
                    </p>
                  </v-col>
                </v-row>
                <v-row v-if="formData.is_default === 1">
                  <v-col cols>
                    <v-text-field
                      v-model="formData.item_la"
                      label="Item (La)"
                      outlined
                      dense
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.item_la }}
                    </p>
                  </v-col>
                  <v-col cols>
                    <v-text-field
                      v-model="formData.content"
                      label="Content"
                      outlined
                      dense
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.content }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols>
                    <v-switch
                      v-model="is_active"
                      :label="`Active : ${is_active}`"
                    ></v-switch>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="error"
                class="elevation-0 btn mr-4 px-12"
                medium
                @click="closeAddModal()"
              >
                ປິດ
              </v-btn>
              <v-btn
                class="elevation-0 btn btn-primary px-12"
                medium
                :loading="loading"
                :disabled="loading"
                @click="updateInvoice()"
              >
                ອັບເດດ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>
    <ModalView>
      <v-card>
        <v-img :src="showFullImage" alt="Image" width="auto" height="auto" dark>
        </v-img>
      </v-card>
    </ModalView>
  </v-container>
</template>

<script>
import {
  getBgColor,
  getLaoBillingType,
  getLaoStatus,
} from "@/Helpers/BillingStatus";

export default {
  name: "InvoiceDetail",
  title() {
    return `Vientiane Waste Co-Dev|Invoice Detail`;
  },
  data() {
    return {
      loading: false,
      customerId: "",
      invoice: {},
      invoiceStatusColor: "",
      is_active: null,
      paymentDialog: false,

      image: "",
      imageUrl: "",
      showFullImage: "",
      // bcel_reference_number: "",
      payment_method: "",
      paymentType: "",
      confirmType: "",
      rejects: [],
      reject_reason_id: "",
      description: "",

      server_errors: {},
      total: "",
      formData: {},
      paymentTypeRule: [(v) => !!v || "Name is required"],
    };
  },
  computed: {
    customerDisplayId() {
      if (!this.invoice.user) return "";

      if (this.invoice.user.customer)
        return this.invoice.user.customer.customer_id;

      return "";
    },
  },
  methods: {
    showImage(url) {
      if (url != null) {
        this.showFullImage = url;
        this.$store.commit("modalView_State", true);
      }
    },
    Download(link) {
      if (link != null) {
        window.open(link.download_pdf_link);
      }
    },
    onFileChange(e) {
      let input = e.target;
      let file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    backPrevios() {
      console.log(909090);
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("billing/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.invoice = res.data.data;
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
    toPay() {
      this.$store.commit("modalEdit_State", true);
    },
    closeModal() {
      this.$store.commit("modalEdit_State", false);
    },
    async pay() {
      if (this.paymentType !== "") {
        let formData = new FormData();
        formData.append("payment_method", this.payment_method);
        formData.append("image_payments[]", this.image);
        formData.append("_method", "PUT");
        if (this.$refs.form.validate() == true) {
          this.loading = true;
          await this.$axios
            .post("pay-billing/" + this.invoice.id, formData)
            .then((res) => {
              if (res.data.code == 200) {
                this.$axios
                  .put("confirm-billing/" + this.invoice.id)
                  .then((res) => {
                    if (res.data.code == 200) {
                      setTimeout(() => {
                        this.$store.commit("Toast_State", {
                          value: true,
                          color: "success",
                          msg: res.data.message,
                        });
                      }, 300);
                    }
                  })
                  .catch(() => {
                    this.loading = false;
                  });
                // this.confirmPayment();
                this.loading = false;
                this.closeModal();
                this.fetchData();
                this.$refs.form.reset();
              }
            })
            .catch((error) => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response ? error.response.data.message : error,
              });
              if (error.response && error.response.status == 422) {
                let obj = error.response.data.errors;
                for (let [key, data] of Object.entries(obj)) {
                  this.server_errors[key] = data[0];
                }
              }
              this.fetchData();
            });
        }
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກປະເພດການຊຳລະກ່ອນ",
        });
      }
    },
    async confirmPayment() {
      this.loading = true;
      await this.$axios
        .put("confirm-billing/" + this.invoice.id)
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Toast_State", {
              value: true,
              color: "success",
              msg: res.data.message,
            });
            this.fetchData();
            this.loading = false;
          }
        })
        .catch(() => {
          this.loading = false;
        });
    },

    toConfirm() {
      this.paymentDialog = true;
      this.fetchReject();
    },
    fetchReject() {
      this.$axios
        .get("reject-reason")
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.rejects = res.data.data;
          }
        })
        .catch(() => {});
    },

    getLaoStatusFunc(status) {
      return getLaoStatus(status);
    },
    getBgColorFunc(status) {
      return getBgColor(status);
    },
    filterBillingType(status) {
      return getLaoBillingType(status);
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    async approveBill(id) {
      if (this.invoice.status === "created") {
        this.loading = true;
        await this.$axios
          .post("approve-billing/" + id)
          .then((res) => {
            if (res.data.code == 200) {
              this.loading = false;
              this.fetchData();
              this.selectedRows = [];
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response ? error.response.data.message : error,
            });
          });
      }
    },
    EditInvoice(item) {
      this.formData = item;
      if (this.formData.is_active == 1) {
        this.is_active = true;
      } else {
        this.is_active = false;
      }
      this.$store.commit("modalAdd_State", true);
    },

    async rejectPayment() {
      let data = new FormData();
      data.append("reject_reason_id", this.reject_reason_id);
      data.append("description", this.description);
      data.append("_method", "PUT");
      this.loading = true;
      this.$axios
        .post("reject-billing/" + this.invoice.id, data)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.fetchData();
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
            msg: error.response ? error.response.data.message : error,
          });
          if (error.response && error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, data] of Object.entries(obj)) {
              this.server_errors[key] = data[0];
            }
          }
        });
    },

    async updateInvoice() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        await this.$axios
          .put("billing-detail/" + this.formData.id, {
            qty: this.formData.quantity,
            price: this.formData.price,
            content: this.formData.content,
            item_la: this.formData.item_la,
            is_active: this.formData.is_active,
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.loading = false;
              this.fetchData();
              this.formData = {};
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.closeAddModal();
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response ? error.response.data.message : error,
            });
          });
      }
    },
  },
  watch: {
    is_active: function (value) {
      if (value === true) {
        this.formData.is_active = 1;
      } else {
        this.formData.is_active = 0;
      }
    },
    paymentType: function () {
      if (this.paymentType == 0) {
        this.payment_method = "cash";
        this.image = "";
        this.imageUrl = "";
      } else if (this.paymentType == 1) {
        this.payment_method = "bcel";
      }
      this.server_errors.payment_method = "";
    },
    image: function () {
      this.server_errors.image = "";
    },
  },
  created() {
    if (this.$route.params.id) {
      this.fetchData();
    }
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

h3 {
  line-height: 28px !important;
  font-size: 16px;
  font-weight: 500;
}

.c-divider {
  height: 10px;
  background: $primary-color;
  opacity: 0.8;
  max-height: 20px;

  .total-height {
    height: 4px;
  }
}

.c-divider.total-height {
  height: 4px;
}

.c-divider.bottom {
  border-top: none;
  border-bottom: $primary-color solid 2px;
}
</style>
