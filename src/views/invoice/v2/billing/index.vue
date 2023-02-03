<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col cols>
        <v-select
          outlined
          dense
          :items="plans"
          v-model="selectedRoutePlan"
          item-text="name"
          item-value="id"
          label="ເລືອກແຜນ"
          clearable
        ></v-select>
      </v-col>
      <v-col cols>
        <v-select
          outlined
          dense
          :items="billingable_types"
          v-model="selectedBillingable_type"
          item-value="name"
          :item-text="filterBillingType"
          label="ປະເພດບິນ"
          clearable
        ></v-select>
      </v-col>
      <v-col cols>
        <v-select
          outlined
          dense
          :items="payment_methods_list"
          v-model="selectedPaymentMethod"
          item-value="value"
          item-text="text"
          label="ປະເພດການຊຳລະ"
          clearable
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ"
          type="text"
          v-model="search"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ເລກບິນ"
          type="text"
          v-model="billId"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ເບີໂທ"
          type="text"
          v-model="phone"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-select
          outlined
          dense
          :items="customerTypes"
          v-model="selectedCustomerType"
          item-text="name_la"
          item-value="name"
          label="ເລືອກປະເພດລູກຄ້າ"
          clearable
        ></v-select>
      </v-col>
      <v-col v-if="selectedCustomerType == 'company'">
        <v-select
          outlined
          dense
          :items="comapnyTypes"
          v-model="selectedComapnyType"
          item-text="la"
          item-value="en"
          label="ເລືອກປະເພດບໍລິການ"
          clearable
        ></v-select>
      </v-col>
      <v-col v-if="selectedCustomerType == 'home'">
        <v-select
          v-model="filteredPackage"
          :items="packageList"
          item-text="name"
          item-value="id"
          label="ເລືອກແພັກເກດ"
          outlined
          dense
        ></v-select>
      </v-col>
    </v-row>

    <v-card>
      <v-card-title>
        ຂໍ້ມູນບີນ ({{ pagination.total }})
        <v-divider class="mx-4" vertical></v-divider>
        <v-spacer></v-spacer>
        <v-btn
          v-if="selectedRows.length > 0"
          class="btn-primary elevation-0"
          :loading="loading"
          :disabled="loading"
          @click="approveAny"
          >ອະນຸມັດບິນ</v-btn
        >
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="invoices"
          :search="search"
          :disable-pagination="true"
          hide-default-footer
          v-model="selectedRows"
          show-select
          fixed-header
        >
          <template v-slot:item.display_customer_name="{ item }">
            <a
              v-if="item.user.customer"
              href="#"
              @click="openCustomer(item.user.customer)"
              >{{ item.display_customer_name }}</a
            >
            <div v-else>{{ item.display_customer_name }}</div>
          </template>
          <template v-slot:item.paided_by="{ item }">
            <div v-if="item.paided_by">
              {{ item.paided_by.emp_name || item.paided_by.name }}
            </div>
          </template>
          <template v-slot:item.user="{ item }">
            <div>{{ showUser(item) }}</div>
          </template>
          <template v-slot:item.sub_total="{ item }">
            <td>{{ Intl.NumberFormat().format(item.sub_total) }}</td>
          </template>
          <template v-slot:item.date_month="{ item }">
            <td>{{ getMonth(item.date) }}</td>
          </template>
          <template v-slot:item.total="{ item }">
            <td>{{ Intl.NumberFormat().format(item.total) }}</td>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon small class="mr-2" @click="ViewInvoice(item.id)">
              mdi-eye
            </v-icon>
            <v-menu v-if="item.status == 'to_confirm_payment'" offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-icon
                  color="orange"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  medium
                  class="mr-2"
                  >mdi-credit-card-multiple</v-icon
                >
              </template>
              <v-list>
                <v-list-item link @click="paymentConfirmModal(item)">
                  <v-list-item-title style="color: green">
                    <v-icon small style="color: green" class="mr-2"
                      >mdi-check-all</v-icon
                    >
                    ຢືນຢັນການຊຳລະ
                  </v-list-item-title>
                </v-list-item>
                <v-list-item link @click="paymentConfirmModal(item)">
                  <v-list-item-title style="color: red">
                    <v-icon style="color: red" small>
                      mdi-alert-circle-outline</v-icon
                    >
                    ປະຕິເສດການຊຳລະ
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>

            <v-icon
              v-if="item.status == 'approved'"
              small
              @click="paymentPage(item)"
              class="mr-1"
              >mdi-cash</v-icon
            >
            <v-icon
              small
              @click="DownloadBill(item)"
              class="mr-0"
              color="primary"
            >
              mdi-download
            </v-icon>
            <v-icon
              v-if="
                (item.display_type == 'CustomBill' ||
                  item.display_type == 'FutureInvoice') &&
                  (item.status == 'created' || item.status == 'approved')
              "
              color="red"
              small
              class="mr-2"
              @click="deleteItem(item.id)"
            >
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
        <br />
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
            @click="deleteInvoice"
            >OK
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>

    <!-- Confirm Payment-->
    <v-dialog v-model="confirmPaymentDialog" max-width="620px" persistent>
      <template>
        <v-card>
          <v-card-title>
            <p>
              <v-icon class="primary-color" large color="success"
                >mdi-checkbox-marked-circle-outline
              </v-icon>
              ຢືນຢັນຊຳລະຄ່າຂີ້ເຫຍື້ອ

              <span class="primary-color"
                >{{ confirm.name }} {{ confirm.surname }}</span
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
                        class="mr-6 elevation-0"
                        color="success"
                        label
                        filter
                        outlined
                      >
                        <v-icon left class="ml-1"> mdi-cash </v-icon>
                        ຢືນຢັນການຊຳລະ
                      </v-chip>
                      <v-chip medium color="error" label filter outlined>
                        <v-icon class="ml-1" left> mdi-cash-remove</v-icon>
                        ປະຕິເສດການຊຳລະ
                      </v-chip>
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
                </div>
              </v-form>
              <v-card-actions class="mt-4">
                <v-spacer></v-spacer>
                <v-btn
                  color="error"
                  class="elevation-0 btn mr-4 px-12"
                  medium
                  @click="confirmPaymentDialog = false"
                >
                  ປິດ
                </v-btn>
                <v-btn
                  class="elevation-0 btn btn-primary px-12"
                  medium
                  :loading="loading"
                  :disabled="loading"
                  @click="confirmPayment()"
                >
                  ຢືນຢັນ
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card class="py-8 px-14">
          <v-card-title>
            <p>ຊຳລະຄ່າຂີ້ເຫື້ຍອ {{ payment.content }}</p>
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
                <div v-if="paymentType !== ''">
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
                @click="closeAddModal()"
              >
                ປິດ
              </v-btn>
              <v-btn
                class="elevation-0 btn btn-primary px-12"
                medium
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
    </ModalAdd>
  </v-container>
</template>

<script>
// //import { GetOldValueOnInput } from "@/Helpers/GetValue";

import queryOption from "@/Helpers/queryOption";
import { getLaoBillingType, payment_methods } from "@/Helpers/BillingStatus";
import { getCompanyCostBy, concatPackage } from "@/Helpers/Customer";
import moment from "moment";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: "Collection",
      firstLoad: true,
      filteredPackage: "",
      confirmPaymentDialog: false,
      packages: [],
      payment_methods_list: payment_methods,
      selectedPaymentMethod: "",
      month: "",
      curent_month: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      start_menu: false,
      billingId: "",
      invoices: [],
      loading: false,
      customerId: "",
      selectedRows: [],
      plans: [],
      selectedRoutePlan: "",
      selectedComapnyType: "",
      lastMonthBillPaid: localStorage.getItem("lastMonthBillPaid"),
      lastMonthBill: localStorage.getItem("lastMonthBill"),
      selectedCustomerType: "",
      comapnyTypes: getCompanyCostBy,
      customerTypes: [
        {
          name: "",
          name_la: "ທັງໝົດ",
        },
        {
          name_la: "ຄົວເຮືອນ",
          name: "home",
        },
        {
          name_la: "ຫົວໜ່ວຍທຸລະກິດ",
          name: "company",
        },
      ],
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: "",
      oldVal: "",
      server_errors: {},
      selectedCollectionStatus: "",
      summaryData: {},
      billId: "",
      phone: "",
      billingable_types: [
        {
          id: 1,
          name: "FutureInvoice",
        },
        {
          id: 2,
          name: "NewInvoice",
        },
        {
          id: 3,
          name: "NewCollectionEvent",
        },
        {
          id: 4,
          name: "CustomBill",
        },
      ],
      selectedBillingable_type: "",
      user: {},
      item: {},
      //Payment
      image: "",
      imageUrl: "",
      // bcel_reference_number: "",
      payment_method: "",
      paymentType: "",
      confirmType: "",
      paymentDialog: false,
      rejects: [],
      reject_reason_id: "",
      description: "",
      paymentTypeRule: [(v) => !!v || "Name is required"],
      payment: {},
      confirm: {},
      headers: [
        { text: "ເລກບິນ", value: "billing_display_id" },
        { text: "ຫົວບິນ", value: "content", width: "220px" },
        {
          text: "ເດືອນ",
          value: "bill_month",
          width: "180px",
        },
        { text: "ລູກຄ້າ", value: "display_customer_name", width: "150px" },

        { text: "ເບີໂທ", value: "user.phone", sortable: false },

        // {text: "ສ່ວນຫຼຸດ", value: "discount",width: "150px"},
        { text: "ຄ່າບໍລິການ", value: "sub_total", width: "150px" },
        { text: "ລວມທັງໝົດ", value: "total", sortable: false, width: "150px" },
        {
          text: "ວັນທີບິນ",
          value: "date",
          width: "180px",
        },
        {
          text: "ຜູ້ຈ່າຍ",
          value: "paided_by",
          width: "180px",
        },
        {
          text: "ປະເພດຊຳລະ",
          value: "payment_method",
          align: "center",
          width: "150px",
        },
        {
          text: "ວັນທີສ້າງ",
          value: "created_at",
          width: "180px",
        },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  computed: {
    packageList() {
      return concatPackage(this.packages);
    },
    billStatus() {
      return this.$route.query.tab || "billing-approved";
    },
    lastMonthCreated() {
      return this.$store.getters["auth/getLastMonthBill"];
    },
    lastMonthBillCreated() {
      return this.$store.getters["auth/getLastMonthBillPaid"];
    },
  },
  methods: {
    DownloadBill(item) {
      window.open(item.download_pdf_link);
    },
    openCustomer(customer) {
      let routeData = null;
      if (customer.customer_type == "company") {
        routeData = this.$router.resolve({
          name: "ViewCompanyDetail",
          params: { id: customer.id },
          query: {
            tab: "tab-3",
          },
        });
      } else if (customer.customer_type == "home") {
        routeData = this.$router.resolve({
          name: "ViewClient",
          params: { id: customer.id },
          query: {
            tab: "tab-3",
          },
        });
      }
      window.open(routeData.href, "_blank");
    },
    fetchPackage() {
      this.$axios
        .get("package")
        .then((res) => {
          if (res.data.code == 200) {
            this.packages = res.data.data;
          }
        })
        .catch(() => {});
    },
    onFileChange(e) {
      let input = e.target;
      let file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    Payment() {
      if (this.paymentType !== "") {
        let formData = new FormData();
        formData.append("payment_method", this.payment_method);
        if (this.image instanceof File)
          formData.append("image_payments[]", this.image);
        formData.append("_method", "PUT");
        if (this.$refs.form.validate() == true) {
          this.loading = true;
          this.$axios
            .post("pay-billing/" + this.payment.id, formData)
            .then((res) => {
              if (res.data.code == 200) {
                this.loading = false;
                this.paymentConfirmModal(this.payment);
                this.closeAddModal();
                this.fetchData();
                this.$refs.form.reset();
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
              if (error.response && error.response.status == 422) {
                let obj = error.response.data.errors;
                for (let [key, data] of Object.entries(obj)) {
                  this.server_errors[key] = data[0];
                }
              }
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
    paymentPage(item) {
      this.payment = item;
      this.$store.commit("modalAdd_State", true);
    },
    async confirmPayment() {
      if (this.confirmType == "0") {
        this.loading = true;
        await this.$axios
          .put("confirm-billing/" + this.confirm.id)
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
                this.closeConfirmModal();
              }, 300);
            }
          })
          .catch(() => {
            this.loading = false;
            this.closeConfirmModal();
          });
      } else if (this.confirmType == "1") {
        let data = new FormData();
        data.append("reject_reason_id", this.reject_reason_id);
        data.append("description", this.description);
        data.append("_method", "PUT");
        this.loading = true;
        this.$axios
          .post("reject-billing/" + this.confirm.id, data)
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
                this.closeConfirmModal();
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
      } else if (this.confirmType == "") {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ",
        });
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ",
        });
      }
    },
    paymentConfirmModal(item) {
      this.confirm = item;
      this.confirmPaymentDialog = true;
    },
    closeConfirmModal() {
      this.confirmPaymentDialog = false;
      this.confirmType = "";
      this.confirm = {};
    },
    getMonth(date) {
      const d = new Date(date);

      return moment(d).format("MMMM , YYYY");
    },
    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.billingId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteInvoice() {
      this.loading = true;
      this.$axios
        .delete("billing/" + this.billingId)

        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("modalDelete_State", false);
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
          this.$store.commit("modalDelete_State", false);
        });
    },
    filterBillingType(status) {
      return getLaoBillingType(status.name);
    },
    fetchData() {
      // let date = this.moment(this.month).format('YYYY-MM');
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("billing", {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { billingable_type: this.selectedBillingable_type },
            { created_month: this.lastMonthCreated },
            { bill_month: this.lastMonthBillCreated },
            { order_by: "newest" },
            { status: this.billStatus },
            { route_plans: this.selectedRoutePlan },
            { bill_id: this.billId },
            { phone: this.phone },
            { customer_type: this.selectedCustomerType },
            { cost_by: this.selectedComapnyType },
            { payment_method: this.selectedPaymentMethod },
            {
              package_id:
                this.selectedCustomerType == "home" ? this.filteredPackage : "",
            },
            { filter: this.search },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.invoices = res.data.data.data;
            this.pagination = res.data.data.pagination;
          }
          this.$store.dispatch("auth/makeCallFetch");
        })
        .catch((error) => {
          this.$store.dispatch("auth/makeCallFetch");
          this.$store.commit("Loading_State", false);
          if (error.response && error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        })
        .finally(() => (this.firstLoad = false));
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
    fetchRoutePlan() {
      this.$axios
        .get("route-plan")
        .then((res) => {
          if (res.data.code == 200) {
            this.plans = res.data.data;
          }
        })
        .catch(() => {});
    },

    closeAddModal() {
      this.paymentType = "";
      this.$store.commit("modalAdd_State", false);
    },
    createPage() {
      this.$router.push({
        name: "CreateCollectionEventInvoice",
      });
    },
    editPage(id) {
      this.$router.push({
        name: "EditCollectionEventInvoice",
        params: { id },
      });
    },
    ViewInvoice(id) {
      let route = this.$router.resolve({
        name: "billing-detail",
        params: { id },
      });
      window.open(route.href, "_blank");
    },
    async approveAny() {
      if (this.selectedRows.length > 0) {
        const id = this.selectedRows.map((row) => row.id);
        this.loading = true;
        await this.$axios
          .post("approve-billings", { billing_ids: id })
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
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກບິນກ່ອນ",
        });
      }
    },

    Search() {
      // GetOldValueOnInput(this);
      this.fetchData();
    },
    showUser(item) {
      if (item.display_type === "NewCollectionEvent") {
        if (item.billingable != null) return item.billingable.name;
      } else {
        if (item.user.customer != null) {
          return item.user.customer.name;
        } else {
          return item.user.name;
        }
      }
    },
    async setDataFromQuery() {
      const routeQuery = this.$route.query;
      this.selectedBillingable_type = routeQuery.billingable_type;
      this.lastMonthCreated = routeQuery.created_month;
      this.lastMonthBillCreated = routeQuery.bill_month;
      this.billStatus = routeQuery.status;
      this.selectedRoutePlan = routeQuery.route_plans;
      this.billId = routeQuery.bill_id;
      this.phone = routeQuery.phone;
      this.selectedCustomerType = routeQuery.customer_type;
      this.selectedComapnyType = routeQuery.cost_by;
      this.selectedPaymentMethod = routeQuery.payment_method;
    },
  },
  watch: {
    billStatus(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },
    selectedComapnyType(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },
    selectedPaymentMethod(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },
    selectedCollectionStatus: function(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },
    lastMonthBill: function(value) {
      this.$store.dispatch("auth/saveLastMonthBill", value);
    },
    lastMonthBillPaid: function(value) {
      this.$store.dispatch("auth/saveLastMonthBillPaid", value);
    },
    lastMonthCreated: function(val, old) {
      if (!this.firstLoad) this.fetchData();
    },
    lastMonthBillCreated: function(val, old) {
      if (!this.firstLoad) this.fetchData();
    },
    selectedBillingable_type: function(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },
    selectedRoutePlan: function(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },
    selectedCustomerType: function(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },
    filteredPackage(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },

    month: function(value, old) {
      if (value !== "") {
        this.pagination.current_page = "";
        if (!this.firstLoad) this.fetchData();
      }
    },
    search: function(value, old) {
      this.pagination = {};
      if (value == "") {
        if (!this.firstLoad) this.fetchData();
      }
    },
    selectedStatus: function(val, old) {
      this.pagination.current_page = "";
      if (!this.firstLoad) this.fetchData();
    },
    selectedPackage: function() {
      this.server_errors.package_id = "";
    },
    start_date: function() {
      this.server_errors.start_month = "";
    },
    paymentType: function() {
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
  },
  async created() {
    this.month = this.moment(this.curent_month).format("YYYY-MM");

    await this.setDataFromQuery();

    this.fetchData();
    this.fetchRoutePlan();
    this.fetchReject();
    this.fetchPackage();
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

.page--table {
  .page {
    &__table {
      margin-top: 20px;
    }

    &__grab-icon {
      cursor: move;
    }
  }
}

.sum-total {
  color: #000000;
}
</style>
