<template>
  <v-container>
    <v-row class="mb-n6">
<!--      <v-col cols="3">-->
<!--        <v-menu-->
<!--            v-model="start_menu"-->
<!--            :close-on-content-click="true"-->
<!--            :nudge-right="40"-->
<!--            transition="scale-transition"-->
<!--            offset-y-->
<!--            min-width="auto"-->
<!--        >-->
<!--          <template v-slot:activator="{ on, attrs }">-->
<!--            <v-text-field-->
<!--                v-model="month"-->
<!--                label="ເດືອນ"-->
<!--                readonly-->
<!--                outlined-->
<!--                v-bind="attrs"-->
<!--                v-on="on"-->
<!--                dense-->
<!--                clearable-->
<!--            ></v-text-field>-->
<!--          </template>-->
<!--          <v-date-picker-->
<!--              v-model="month"-->
<!--              type="month"-->
<!--          ></v-date-picker>-->
<!--        </v-menu>-->
<!--      </v-col>-->

<!--      <v-col cols>-->
<!--        <v-select-->
<!--            outlined-->
<!--            dense-->
<!--            :items="customerTypes"-->
<!--            v-model="selectedCustomerType"-->
<!--            item-text="text"-->
<!--            item-value="value"-->
<!--            label="ປະເພດລູກຄ້າ"-->
<!--            clearable-->
<!--        ></v-select>-->
<!--      </v-col>-->

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
<!--      <v-col cols>-->
<!--        <v-select-->
<!--            outlined-->
<!--            dense-->
<!--            :items="collectionStatus"-->
<!--            v-model="selectedCollectionStatus"-->
<!--            item-text="dis_play"-->
<!--            item-value="name"-->
<!--            label="ສະຖານະບໍລິການ"-->
<!--            clearable-->
<!--        ></v-select>-->
<!--      </v-col>-->
      <v-col cols>
        <v-select
            outlined
            dense
            :items="billingable_types"
            v-model="selectedBillingable_type"
            item-text="dis_play"
            item-value="name"
            label="ປະເພດບິນ"
            clearable
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
            outlined
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            label="ຄົ້ນຫາ"
            type="text"
            v-model="search"
            @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-card>
      <v-card-title>
        ຂໍ້ມູນບີນ ({{ pagination.total }})
        <v-divider class="mx-4" vertical></v-divider>
        <v-spacer></v-spacer>
<!--        <v-btn v-if="selectedRows.length > 0" class="btn-primary" :loading="loading" :disabled="loading" @click="approveAny">ອະນຸມັດບິນ</v-btn>-->
<!--          <v-text-field-->
<!--            outlined-->
<!--            dense-->
<!--            clearable-->
<!--            prepend-inner-icon="mdi-magnify"-->
<!--            label="ຄົ້ນຫາ"-->
<!--            type="text"-->
<!--            v-model="search"-->
<!--            @keyup.enter="Search()"-->
<!--          >-->
<!--          </v-text-field>-->

      </v-card-title>
      <v-card-text>
        <v-data-table
            :headers="headers"
            :items="invoices"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
            fixed-header
        >
          <template v-slot:item.user="{ item }">
              <div>{{item.user.name}} {{item.user.surname}}</div>
          </template>
          <template v-slot:item.sub_total="{ item }">
              <td>{{Intl.NumberFormat().format( item.sub_total) }}</td>
          </template>
          <template v-slot:item.total="{ item }">
              <td>{{Intl.NumberFormat().format( item.total) }}</td>
          </template>
          <template v-slot:item.status="{ item }">
            <div>{{collectStatus(item.status)}}</div>
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
                <v-list-item link @click="ViewInvoice(item.id)">
                  <v-list-item-title>
                    <v-icon small class="mr-2"> mdi-eye </v-icon>
                    ລາຍລະອຽດ
                  </v-list-item-title>
                </v-list-item>
<!--                <v-list-item link>-->
<!--                  <v-list-item-title @click="CancelBill(item)">-->
<!--                    <v-icon small class="mr-2"> mdi-pencil </v-icon>-->
<!--                    ຍົກເລີກ-->
<!--                  </v-list-item-title>-->
<!--                </v-list-item>-->
                <div>
                  <v-list-item link @click="paymentPage(item)">
                    <v-list-item-title>
                      <v-icon small class="mr-2">mdi-cash</v-icon>
                      ຊຳລະ
                    </v-list-item-title>
                  </v-list-item>
                </div>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
        <br/>
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
                        <v-icon class="ml-1" left>
                          mdi-credit-card
                        </v-icon
                        >
                      </v-chip
                      >
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
                        <img :src="imageUrl" alt=""/>
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
              <v-btn color="error" class="elevation-0 btn mr-4 px-12" medium @click="closeAddModal()">
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

    <!-- Confirm Payment-->
    <v-dialog v-model="paymentDialog" max-width="620px" persistent>
      <template>
        <v-card>
          <v-card-title>
            <p>
              <v-icon class="primary-color" large color="success"
              >mdi-checkbox-marked-circle-outline
              </v-icon
              >
              ຢືນຢັນຊຳລະຄ່າຂີ້ເຫຍື້ອ

              <span class="primary-color"
              >{{ confirm.name }} {{ confirm.content }}</span
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
                        <v-icon left class="ml-1"> mdi-cash
                        </v-icon
                        >
                        ຢືນຢັນການຊຳລະ
                      </v-chip>
                      <v-chip medium color="error" label filter outlined>
                        <v-icon class="ml-1" left> mdi-cash-remove</v-icon>
                        ປະຕິເສດການຊຳລະ
                      </v-chip
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
                </div>
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
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: "Collection",
      month: "",
      curent_month: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 10),
      start_menu: false,

      invoices: [],
      loading: false,
      customerId: "",
      selectedRows: [],

      plans:[],
      selectedRoutePlan: "",
      selectedCustomerType:"",
      customerTypes:[
        {
          text:"ຄົວເຮືອນ",
          value:"home"
        }, {
          text:"ຫົວໜ່ວຍທຸລະກິດ",
          value:"company"
        }
      ],
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      server_errors: {},

      summaryData:{},
      billingable_types:[
    {
      id: 1,
      name: "FutureInvoice",
      dis_play: "Future Invoice"
    },
    {
      id: 2,
      name: "NewInvoice",
      dis_play: "New Invoice"
    },{
      id: 3,
      name: "NewCollectionEvent",
      dis_play: "New Collection Event Invoice"
    },{
      id: 4,
      name: "CustomBill",
      dis_play: "Custom Bill"
    },
  ],
    selectedBillingable_type:"",

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
      paymentTypeRule: [(v) => !!v || "Payment is required"],
      payment: {},
      confirm: {},
      headers: [
        { text: "ເລກບິນ", value: "content",width:"150px" },
        {text: "ລູກຄ້າ", value: "user",width:"150px"},
        {text: "ເບີໂທ", value: "user.phone", sortable: false},
        {text: "ສ່ວນຫຼຸດ", value: "discount",width: "150px"},
        {text: "ຄ່າບໍລິການ", value: "sub_total"},
        {text: "ລວມທັງໝົດ", value: "total", sortable: false},
        {
          text: "ວັນທີສ້າງ",
          value: "created_at",
          width:"250px"
        },
        {text: "", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    onFileChange(e) {
      let input = e.target;
      let file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    fetchData() {
      // let date = this.moment(this.month).format('YYYY-MM');
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("billing", {
            params: queryOption([
              {page: this.pagination.current_page},
              {per_page: this.per_page},
              {billingable_type:this.selectedBillingable_type},
              {status: 'approved'},
              {route_plans: this.selectedRoutePlan},
              {customer_type: this.selectedCustomerType},
              {filter: this.search},
            ])
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit("Loading_State", false);
              this.invoices = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }
          })
          .catch((error) => {
            this.$store.commit("Loading_State", false);
            if (error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
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
    fetchReject() {
      this.$axios
          .get("reject-reason")
          .then((res) => {
            if (res.data.code == 200) {
              this.$store.commit("Loading_State", false);
              this.rejects = res.data.data;
            }
          })
          .catch(() => {
          });
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
        params: {id},
      });
    },
    ViewInvoice(id) {
      let route = this.$router.resolve({name: 'billing-detail',params: {id}});
      window.open(route.href, '_blank');
    },
    paymentPage(item) {
      this.payment = item;
      this.$store.commit("modalAdd_State", true);
    },
    CancelBill(item) {
      this.payment = item;
      this.$store.commit("modalAdd_State", true);
    },

    Payment() {
      if (this.paymentType !== "") {
        let formData = new FormData();
        formData.append("payment_method", this.payment_method);
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
                  msg: error.response.data.message,
                });
                if (error.response.status == 422) {
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
  async  approveAny() {
      if (this.selectedRows.length > 0) {
        const id = this.selectedRows.map(row =>row.id);
          this.loading = true;
       await this.$axios
              .post("approve-billings", {billing_ids: id})
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
                  msg: error.response.data.message,
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
            .post("reject-collection-event-payment/" + this.confirm.id, data)
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
                msg: error.response.data.message,
              });
              if (error.response.status == 422) {
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
      this.fetchReject();
      this.confirm = item;
      this.paymentDialog = true;
    },
    closeConfirmModal() {
      this.paymentDialog = false;
      this.confirmType = "";
    },

    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == "active") return "success";
      else if (value == "inactive") return "error";
      else return "";
    },

    collectStatus(status){
      if(status == 'requested') return 'ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ';
      else if(status == 'rejected') return 'ປະຕິເສດເກັບຂີ້ເຫື້ຍອ';
      else if (status == 'approved') return 'ອະນຸມັດເກັບຂີ້ເຫື້ຍອ';
      else if(status == 'collected') return 'ເກັບຂີເຫື້ຍອສຳເລັດ';
      else if(status == 'collect_confirm') return 'ລູກຄ້າຢືນຢັນການເກັບ';
      else if(status == 'collect_reject') return 'ການເກັບຖືກປະຕິເສດ';
      else return  '';
    },
    paymentStatusText(status){
      if(status == 'pending') return 'ລໍຖ້າເກັບເງິນ';
      else if(status == 'to_confirm_payment') return 'ລໍຖ້າຢືນຢັນຊຳລະ';
      else if (status == 'rejected') return 'ປະຕິເສດການຊຳລະ';
      else if(status == 'success') return 'ຊຳລະສຳເລັດ';
      else return  '';
    }
  },
  watch: {
    selectedCollectionStatus:function (){
      this.pagination.current_page ='';
      this.fetchData();
    },
    selectedBillingable_type:function (){
      this.pagination.current_page ='';
      this.fetchData();
    },
    selectedRoutePlan:function (){
      this.pagination.current_page ='';
      this.fetchData();
    },
    selectedCustomerType:function (){
      this.pagination.current_page ='';
      this.fetchData();
    },

    month: function (value){
      if(value !== ''){
        this.pagination.current_page ='';
        this.fetchData();
      }
    },
    search: function (value) {
      this.pagination.current_page ='';
      if (value == "") {
        this.fetchData();
      }
    },
    selectedStatus: function () {
      this.pagination.current_page ='';
      this.fetchData();
    },
    selectedPackage: function () {
      this.server_errors.package_id = "";
    },
    start_date: function () {
      this.server_errors.start_month = "";
    },
    "user.name": function () {
      this.server_errors.name = "";
    },
    "user.surname": function () {
      this.server_errors.name = "";
    },
    "user.phone": function () {
      this.server_errors.phone = "";
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
    // confirmType: function () {
    //   console.log(this.confirmType);
    //   if (this.confirmType == 0) {
    //     // this.confirmPayment();
    //   }
    // },
    // bcel_reference_number: function () {
    //   this.server_errors.bcel_reference_number = "";
    // },
    image: function () {
      this.server_errors.image = "";
    },
  },
  created() {
    this.month = this.moment(this.curent_month).format('YYYY-MM');
    this.fetchData();
    this.fetchRoutePlan();
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../public/scss/main.scss";

.v-data-table > .v-data-table__wrapper > table > thead > tr > th, td {
  min-width: 130px !important;
}
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
