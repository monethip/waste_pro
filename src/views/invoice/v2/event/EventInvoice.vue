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
        <v-select outlined dense :items="collectionStatus" v-model="selectedCollectionStatus"
          :item-text="getFilterCollectStatus" item-value="name" label="ສະຖານະບໍລິການ" multiple clearable></v-select>
      </v-col>
      <v-col cols>
        <v-select outlined dense :items="paymentStatus" v-model="selectedPaymentStatus" :item-text="getBillingStatus"
          item-value="name" label="ສະຖານະການຊຳລະ" multiple clearable></v-select>
      </v-col>
    </v-row>

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
                <th class="text-left">ບິນ</th>
                <th class="text-left">ລູກຄ້າ</th>
                <th class="text-left">ເບີໂທ</th>
                <th class="text-left">ຄ່າບໍລິການ</th>
                <th class="text-left">ລວມທັງໝົດ</th>
                <th class="text-left">ສະຖານະບໍລິການ</th>
                <th class="text-left">ຜູ້ຮ້ອງຂໍ</th>
                <th class="text-left" style="width: 280px;">ລາຍລະອຽດ</th>
                <th class="text-left">ຮູບສະຖານທີ່</th>
                <th class="text-left">ຮູບຂີ້ເຫື້ຍອ</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in collections" :key="index">
                <!--              <td>{{ index + 1 }}</td>-->
                <td>
                  <div v-if="data.billing">
                    {{ data.billing.content }}
                  </div>
                </td>
                <td>{{ data.name }} {{ data.surname }}</td>
                <td>{{ data.phone }}</td>
                <!--              <td>{{ user.village.name }}</td>-->
                <!--              <td>{{ Intl.NumberFormat().format(data.billing.discount )}}</td>-->
                <td>{{Intl.NumberFormat().format( data.billing.sub_total) }}</td>
                <td>{{ Intl.NumberFormat().format(data.billing.total )}}</td>
                <td>
                  <div v-if="data.collect_status">
                    <v-chip label color="primary">{{getCollectStatus(data.collect_status)}}</v-chip>
                  </div>
                </td>
                <td style="width: 380px;">
                  <div v-if="data.requested_by">
                    {{ data.requested_by.name }}
                  </div>
                </td>
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
          text: "ສະຖານະການບໍລິການ",
          value: "collect_status",
          align: "center",
        },
        { text: "ສະຖານະການຊຳລະ", value: "payment_status", align: "center", width: "200px" },
        { text: "Image", value: "media", width: "350px" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
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
      let date = this.moment(this.month).format('YYYY-MM');
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("v2/collection-event", {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { collect_status: this.selectedCollectionStatus },
            { payment_status: this.selectedPaymentStatus },
            { month: date },
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
    selectedPaymentStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCollectionStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },

    month: function (value) {
      if (value !== '') {
        this.pagination.current_page = '';
        this.fetchData();
      }
    },
    search: function (value) {
      this.pagination.current_page = '';
      if (value == "") {
        this.fetchData();
      }
    },
    selectedStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
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
    this.month = this.moment(this.curent_month).format('YYYY-MM');
    this.fetchData();
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
