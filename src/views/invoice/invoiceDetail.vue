<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-breadcrumbs large class="pa-0">
          <v-btn text class="text-primary" @click="backPrevios()">
            <v-icon>mdi-chevron-left</v-icon></v-btn
          >
          ລາຍລະອຽດການອອກບິນຄ່າຂີ້ເຫຍື້ອ</v-breadcrumbs
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

          <v-divider class="my-6"></v-divider>
          <v-row>
            <v-col>
              <h4>Note</h4>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h2 v-if="invoice.plan_month">{{ invoice.plan_month.name }}</h2>
              <h4>{{ invoice.bcel_ticket_id }}</h4>
            </v-col>
            <v-col>
              <p>ການຊຳລະ</p>
              <h4>ວັນທິຊຳລະ</h4>
              <h4>
                {{ invoice.confirmed_payment_by }}
              </h4>
              <h4 v-if="invoice.customer">{{ invoice.paided_by }}</h4>
              <h4 v-if="invoice.customer">
                Payment ID:{{ invoice.bcel_reference_number }}
              </h4>
            </v-col>
          </v-row>
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
              @click="AddData()"
            >
              Update
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>

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
export default {
  name: "Customer",
  data() {
    return {
      tab: null,
      customers: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      invoice: [],
      selectedStatus: ["created"],
      status: [
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
    createPage() {
      this.$router.push({
        name: "CreateCustomer",
      });
    },
    editPage(id) {
      this.$router.push({
        name: "EditCustomer",
        params: { id },
      });
    },
  },
  watch: {},
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>