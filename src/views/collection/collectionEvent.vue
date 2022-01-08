<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="createPage()"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-menu
          v-model="start_menu"
          :close-on-content-click="true"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="month"
              label="ເດືອນ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="month"
            type="month"
            @input="fetchData()"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-select
          outlined
          dense
          :items="collectionStatus"
          v-model="selectedCollectionStatus"
          @input="fetchData()"
          item-text="name"
          item-value="name"
          label="ສະຖານະ"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          outlined
          dense
          :items="paymentStatus"
          v-model="selectedPaymentStatus"
          @input="fetchData()"
          item-text="name"
          item-value="name"
          label="ສະຖານະການຊຳລະ"
        ></v-select>
      </v-col>
    </v-row>
    <div>
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
          <v-data-table
            :headers="headers"
            :items="collections"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.media="{ item }">
              <v-avatar
                size="36px"
                v-for="(img, index) in item.media"
                :key="index"
              >
                <img v-if="img.url" :src="img.url" />
              </v-avatar>
            </template>
            <template v-slot:item.company_coordinators="{ item }">
              <div
                v-for="(data, index) in item.company_coordinators"
                :key="index"
              >
                <div v-if="index == 0">{{ data.name }} {{ data.surname }}</div>
              </div>
            </template>
            <!--Role -->
            <template v-slot:item.payment_status="{ item }">
              <v-chip class="success">{{ item.payment_status }}</v-chip>
            </template>
            <template v-slot:item.collect_status="{ item }">
              <v-chip class="primary">{{ item.collect_status }}</v-chip>
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
                  <v-list-item link @click="viewPage(item.id)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-eye </v-icon>
                      ລາຍລະອຽດ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="editPage(item.id)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-pencil </v-icon>
                      ແກ້ໄຂ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="editPage(item.id)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-pencil </v-icon>
                      Confirm Payment
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="paymentPage(item.id)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-pencil </v-icon>
                      Payment
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="deleteItem(item.id)">
                    <v-list-item-title>
                      <v-icon small> mdi-delete </v-icon>
                      Reject Payment
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="deleteItem(item.id)">
                    <v-list-item-title>
                      <v-icon small> mdi-delete </v-icon>
                      Reject
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template> </v-data-table
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
    </div>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ເພີ່ມຜູ້ປະສານງານ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="user.name"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Surname *"
                      required
                      v-model="user.surname"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.surname }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ເບີໂທ *"
                      required
                      v-model="user.phone"
                      type="number"
                      class="input-number"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.phone }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="AddItem()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

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
            @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>
 
<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: "Collection",
      month: "",
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
      //Add Package
      // start_date: "",
      // start_menu: false,
      // allowedDates: (val) => new Date(val).getDate() === 1,

      server_errors: {},
      selectedCollectionStatus: "requested",
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
      selectedPaymentStatus: "pending",
      paymentStatus: [
        {
          id: 1,
          name: "pending",
        },
        {
          id: 2,
          name: "to_confirm_payment",
        },
        {
          id: 3,
          name: "rejected",
        },
        {
          id: 4,
          name: "success",
        },
      ],

      user: {},
      item: {},

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        { text: "Phone", value: "phone", sortable: false },
        { text: "ບ້ານ", value: "village.name", sortable: false },
        { text: "Discount", value: "discount", sortable: false },
        { text: "Total", value: "total", sortable: false },
        { text: "SubTotal", value: "sub_total" },
        {
          text: "Collect Status",
          value: "collect_status",
          align: "center",
        },
        { text: "Payment Status", value: "payment_status", align: "center" },
        { text: "Image", value: "media" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("collection-event", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            // filter: this.search,
            collect_status: this.selectedCollectionStatus,
            payment_status: this.selectedPaymentStatus,
            // month: this.month,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.collections = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          // this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
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
        .delete("company/" + this.customerId)
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
          this.fetchData();
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message,
          });
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    addUser(data) {
      this.item = data;
      this.$store.commit("modalAdd_State", true);
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    createPage() {
      this.$router.push({
        name: "CreateCollectionEvent",
      });
    },
    editPage(id) {
      this.$router.push({
        name: "EditCollectionEvent",
        params: { id },
      });
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewCollectionEvent",
        params: { id },
      });
    },
    paymentPage(id) {
      this.$router.push({
        name: "PaymentCollectionEvent",
        params: { id },
      });
    },

    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == "active") return "success";
      else if (value == "inactive") return "error";
      else return "info";
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    selectedStatus: function () {
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
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>