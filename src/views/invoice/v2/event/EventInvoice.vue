<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col cols>
        <v-btn class="btn-primary mr-2 elevation-0" @click="createPage">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn class="btn-primary elevation-0" @click="choseCustomer">
          <v-icon>mdi-plus</v-icon> ເພີ່ມໃນແອັບລູກຄ້າ
        </v-btn>
      </v-col>
      <v-col cols>
        <v-menu v-model="start_menu" :close-on-content-click="true" :nudge-right="40" transition="scale-transition"
          offset-y min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="month" label="ເດືອນ" readonly outlined v-bind="attrs" v-on="on" dense clearable>
            </v-text-field>
          </template>
          <v-date-picker v-model="month" type="month"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols>
        <v-select outlined dense :items="paymentStatus" v-model="selectedPaymentStatus" :item-text="getBillingStatus"
          item-value="name" label="ສະຖານະການຊຳລະ" multiple clearable></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-tabs>
        <v-tab color="red" v-for="collectStatus in collectStatuses" :key="collectStatus.en"
          @click="selectedStatus = collectStatus.en">
          <v-badge :color="getStatusColor(collectStatus.en)" :content="getCountByStatus(collectStatus.en)">
            {{ collectStatus.la }}
          </v-badge>
        </v-tab>
      </v-tabs>
    </v-row>
    <v-row>
      <v-card>
        <v-card-title>
          ເກັບຂີເຫື້ຍອພິເສດ ({{ pagination.total }})
          <v-divider class="mx-4" vertical></v-divider>
          <v-spacer></v-spacer>
          <!--
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
             -->
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th v-if="selectedStatus=='requested'" class="text-left">ອະນຸມັດ</th>
                  <th class="text-left">ບິນ</th>
                  <th class="text-left">ລູກຄ້າ</th>
                  <th class="text-left">ເບີໂທ</th>
                  <th class="text-left">ເລລາລົງເກັບ</th>
                  <th class="text-left">ຄົນຂັບ</th>
                  <th class="text-left">ສະຖານະບໍລິການ</th>
                  <th class="text-left">ຜູ້ຮ້ອງຂໍ</th>
                  <th class="text-left">ຄ່າບໍລິການ</th>
                  <th class="text-left">ລວມທັງໝົດ</th>
                  <th class="text-left" style="width: 280px;">ລາຍລະອຽດ</th>
                  <th class="text-left">ຮູບສະຖານທີ່</th>
                  <th class="text-left">ຮູບຂີ້ເຫື້ຍອ</th>
                  <th class="text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in collections" :key="index">
                  <!--              <td>{{ index + 1 }}</td>-->
                  <td v-if="selectedStatus=='requested'">
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">

                        <v-btn v-bind="attrs" v-on="on" v-if="canApproved(data)" color="green" dark>ອະນຸມັດ</v-btn>

                      </template>
                      <v-list>
                        <v-list-item>
                          <v-list-item-title @click="approve(data)">ຢືນຢັນການອະນຸມັດ</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </td>
                  <td>
                    <div v-if="data.billing">
                      {{ data.billing.content }}
                    </div>
                  </td>
                  <td>{{ data.name }} {{ data.surname }}</td>
                  <td>{{ data.phone }}</td>
                  <!--              <td>{{ user.village.name }}</td>-->
                  <!--              <td>{{ Intl.NumberFormat().format(data.billing.discount )}}</td>-->
                  <td>
                    {{ data.date }}
                  </td>
                  <td>
                    <v-btn v-if="!data.driver" color="blue" dark @click="editDriver(data.id)">ເລືອກຄົນຂັບ</v-btn>
                    <v-row v-else>
                      <v-col>
                        <div>{{ data.driver.name+' '+data.driver.surname+' '+data.driver.vehicle.car_id }}</div>
                      </v-col>
                      <v-col>
                        <v-icon @click="editDriver(data.id)">mdi-pencil</v-icon>
                      </v-col>
                    </v-row>
                  </td>
                  <td>
                    <div v-if="data.collect_status">
                      <v-chip label :color="getStatusColor(data.collect_status)" dark>
                        {{getCollectStatus(data.collect_status)}}</v-chip>
                    </div>
                  </td>
                  <td style="width: 380px;">
                    <div v-if="data.requested_by">
                      {{ data.requested_by.name }}
                    </div>
                  </td>
                  <td>{{Intl.NumberFormat().format( data.billing.sub_total) }}</td>
                  <td>{{ Intl.NumberFormat().format(data.billing.total )}}</td>
                  <td style="width: 380px;">{{ data.description }}</td>
                  <td style="width: 380px;">
                    <v-avatar size="36px" v-for="(img, index) in data.image_collect_locations" :key="index">
                      <img v-if="img.url" :src="img.url" />
                    </v-avatar>
                  </td>
                  <td style="width: 380px;">
                    <v-avatar size="36px" v-for="(img, index) in data.image_collecteds" :key="index">
                      <img v-if="img.url" :src="img.url" />
                    </v-avatar>
                  </td>

                  <!-- <td>{{ user.reject_description }}</td> -->
                  <td>
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="primary" dark v-bind="attrs" v-on="on" medium class="mr-2">mdi-dots-vertical
                        </v-icon>
                      </template>
                      <v-list>
                        <v-list-item link @click="viewPage(data.id)">
                          <v-list-item-title>
                            <v-icon small class="mr-2"> mdi-eye</v-icon>
                            ລາຍລະອຽດ
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item link @click="editPage(data.id)">
                          <v-list-item-title>
                            <v-icon small class="mr-2"> mdi-pencil</v-icon>
                            ແກ້ໄຂ
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item link @click="viewBill(data.billing.id)">
                          <v-list-item-title>
                            <v-icon small class="mr-2"> mdi-cash</v-icon>
                            ບິນ
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </td>
                  <td v-if="canDelete(data)">
                    <v-menu offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="red" dark v-bind="attrs" v-on="on" medium class="mr-2">mdi-delete
                        </v-icon>
                      </template>
                      <v-list>
                        <v-list-item link @click="deleteEvent(data.id)">
                          <v-list-item-title>
                            <v-icon small class="mr-2"> mdi-delete</v-icon>
                            ຢືນຢັນການລືບ
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <br />
          <template>
            <Pagination v-if="pagination.total_pages > 1" :pagination="pagination" :offset="offset"
              @paginate="fetchData()"></Pagination>
          </template>
        </v-card-text>
      </v-card>
    </v-row>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ຊຳລະຄ່າຂີ້ເຫື້ຍອ {{ payment.name }} {{ payment.surname }}</p>
          </v-card-title>
          <v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="createPage()">
                ເພີ່ມທົ່ວໄປ
              </v-btn>
              <v-btn color="blue darken-1" text :loading="loading" :disabled="loading" @click="Payment()">
                Pay
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <!--Delete Modal-->

  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";
import { getLaoCollectStatus, getLaoStatus } from "@/Helpers/BillingStatus";
import { getEventStatus } from "@/Helpers/Customer";

export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: "Collection",
      start_menu: false,
      collectStatuses: getEventStatus,
      selectedStatus: 'requested',
      month: this.$store.getters['auth/getLastMonthEvent'],
      countStatus: [
        {
          "collect_status": "requested",
          "count_status": 0
        },
        {
          "collect_status": "approved",
          "count_status": 0
        },
        {
          "collect_status": "rejected",
          "count_status": 0
        },
        {
          "collect_status": "collected",
          "count_status": 0
        },
        {
          "collect_status": "collect_confirm",
          "count_status": 0
        },
        {
          "collect_status": "collect_reject",
          "count_status": 0
        }
      ],
      collections: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      server_errors: {},
      selectedCollectionStatus: [],
      summaryData: {},
      collectionStatus: [
        {
          id: 1,
          name: "requested",
        },
        {
          id: 2,
          name: "rejected",
        },
        {
          id: 3,
          name: "approved",

        },
        {
          id: 4,
          name: "collected",
        },
        {
          id: 5,
          name: "collect_confirm",
        },
        {
          id: 5,
          name: "collect_reject",
        },
      ],
      selectedPaymentStatus: [],
      paymentStatus: [
        {
          id: 1,
          name: "created",
        },
        {
          id: 2,
          name: "approved",
        },
        {
          id: 3,
          name: "to_confirm_payment",
        },
        {
          id: 4,
          name: "rejected",
        },
        {
          id: 5,
          name: "success",
        },
      ],

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
      drivers: [],

      headers: [
        // { text: "#", value: "" },
        { text: "ລູກຄ້າ", value: "surname" },
        { text: "ເບີໂທ", value: "phone", sortable: false },
        { text: "ບ້ານ", value: "village.name", sortable: false },
        { text: "ສ່ວນຫຼຸດ", value: "discount", sortable: false },
        {
          text: "ຄ່າບໍລິການ",
          value: "sub_total",
          align: "center",
          sortable: false,
        },
        {
          text: "ລວມທັງໝົດ",
          value: "total",
          align: "center",
          sortable: false,
        },
        {
          text: "ຄົນຂັບ",
          value: "driver",
          align: "center",
          sortable: false,
        },
        {
          text: "ສະຖານະການບໍລິການ",
          value: "collect_status",
          align: "center",
        },
        { text: "ສະຖານະການຊຳລະ", value: "payment_status", align: "center", width: "200px" },
        { text: "Image", value: "media", width: "350px" },
        { text: "", value: "actions", sortable: false },
        { text: "", value: "delete", sortable: false },
      ],
    };
  },
  computed: {
    lastMonthEvent() {
      return this.$store.getters['auth/getLastMonthEvent']
    }
  },
  methods: {
    approve(data) {
      let formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("village_id", data.village_id);
      formData.append("lat", data.lat);
      formData.append("lng", data.lng);
      formData.append("phone", data.phone);
      formData.append("date", data.date);
      // formData.append("date", this.moment(dateTime).format("y-MM-D hh:mm:ss"));
      formData.append("total", data.billing.total);
      if (data.driver_id) formData.append("driver_id", data.driver_id);
      formData.append("collect_status", 'approved');
      formData.append("_method", "PUT");

      this.loading = true;
      this.$axios
        .post("v2/collection-event/" + data.id, formData, {
          headers: { "Content-Type": "multipart/form-data" }
        })
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message
              });
              this.fetchData();
              this.fetchCountData();
            }, 300);
          }
        })
        .catch(error => {
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message
          });
          if (error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, data] of Object.entries(obj)) {
              this.server_errors[key] = data[0];
            }
          }
          this.loading = false;
          this.fetchData();
        });
    },
    canApproved(data) {
      return data.billing.total > 0 && data.collect_status == 'requested' && data.driver
    },
    deleteEvent(id) {
      this.$store.commit("Loading_State", true);
      this.$axios
        .delete("v2/collection-event/" + id)
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
            }, 300);
            this.fetchData();
            this.fetchCountData();
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
    getCountByStatus(status) {
      const exists = this.countStatus.find(item => item.collect_status == status);

      return exists ? exists.count_status : 0
    },
    getStatusColor(status) {
      const existsStatus = this.collectStatuses.find(item => item.en == status)
      return existsStatus ? existsStatus.color : "";
    },
    canDelete(data) {

      let isSuperAdmin = false;
      for (const role of JSON.parse(this.$store.getters['auth/roles'])) {
        if (role.name == 'super_admin') {
          isSuperAdmin = true;
          break;
        }
      }

      const billingArray = ['created', 'approved']
      const collectedArray = ['requested', 'approved']
      return isSuperAdmin
        && collectedArray.indexOf(data.collect_status) != -1
        && billingArray.indexOf(data.billing.status) != -1;
    },
    getCollectStatus(status) {
      return getLaoCollectStatus(status)
    },
    getFilterCollectStatus(status) {
      return getLaoCollectStatus(status.name)
    },
    getBillingStatus(status) {
      return getLaoStatus(status.name)
    },
    onFileChange(e) {
      let input = e.target;
      let file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    fetchData() {
      let date = this.lastMonthEvent ? this.moment(this.lastMonthEvent).format('YYYY-MM') : null;
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("v2/collection-event", {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { collect_status: this.selectedStatus },
            { payment_status: this.selectedPaymentStatus },
            { month: date },
            { order_by: 'newest' },
          ])
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.collections = res.data.data.data;
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
    fetchCountData() {
      let date = this.lastMonthEvent ? this.moment(this.lastMonthEvent).format('YYYY-MM') : null;
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("v2/collection-event-count", {
          params: queryOption([
            { payment_status: this.selectedPaymentStatus },
            { month: date },
          ])
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.countStatus = res.data.data;
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
    fetchDriver() {
      this.$axios
        .get("driver")
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.drivers = res.data.data;
          }
        })
        .catch((error) => {
          console.log(error);
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
    choseCustomer() {
      this.$router.push({
        name: "chose-customer",
        query: { redirect: 'CreateCollectionEventInvoice' }
      });
    },
    editPage(id) {
      this.$router.push({
        name: "EditCollectionEventInvoice",
        params: { id },
      });
    },
    editDriver(id) {
      this.$router.push({
        name: "EditCollectionEventDriver",
        params: { id },
      });
    },
    viewPage(id) {
      let route = this.$router.resolve({ name: 'EventInvoiceDetail', params: { id } });
      window.open(route.href, '_blank');
    },
    viewBill(billId) {
      let route = this.$router.resolve({ name: 'billing-detail', params: { id: billId } });
      window.open(route.href, '_blank');
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

  },
  watch: {
    month(value) {
      this.$store.dispatch('auth/saveLastMonthEvent', value);
    },
    lastMonthEvent: function () {
      this.fetchData();
      this.fetchCountData();
    },
    selectedPaymentStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
      this.fetchCountData();
    },
    selectedCollectionStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
      this.fetchCountData();
    },

    // month: function (value) {
    //   if (value !== '') {
    //     this.pagination.current_page = '';
    //     this.fetchData();
    //     this.fetchCountData();
    //   }
    // },
    search: function (value) {
      this.pagination.current_page = '';
      if (value == "") {
        this.fetchData();
        this.fetchCountData();
      }
    },
    selectedStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
      this.fetchCountData();
    },

    start_date: function () {
      this.server_errors.start_month = "";
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
    // this.month = this.moment(this.current_month).format('YYYY-MM');
    this.fetchData();
    this.fetchCountData();
    this.fetchDriver();
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

.v-data-table>.v-data-table__wrapper>table>thead>tr>th,
td {
  min-width: 150px !important;
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
