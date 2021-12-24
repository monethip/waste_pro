<template>
  <div>
    <v-row>
      <v-col>
        <p>
          ບິນຄ່າຂີ້ເຫຍື້ອທີ່ຖືກອະນຸມັດແລ້ວ
          <span class="primary-color">({{ pagination.total }})</span>
        </p>
      </v-col>
    </v-row>
    <div>
      <v-data-table
        :headers="headers"
        :items="invoices"
        :disable-pagination="true"
        hide-default-footer
        fixed-header
        height="100vh"
      >
        <template v-slot:item.media="{ item }">
          <v-avatar size="36px" v-for="(img, index) in item.media" :key="index">
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
                  <v-icon small> mdi-eye </v-icon>
                  ລາຍລະອຽດ
                </v-list-item-title>
              </v-list-item>
              <v-list-item link>
                <v-list-item-title @click="PaymentPage(item.id)">
                  <v-icon small> mdi-credit-card </v-icon>
                  ຊຳລະບິນ
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
          @paginate="fetchApproveData()"
        ></Pagination>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "Approved",
  props: ["tab"],
  data() {
    return {
      loading: false,
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 20,
      invoices: [],
      server_errors: {},
      selectedStatus: ["approved"],
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
    fetchApproveData() {
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
          if (error.response.status == 422) {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          }
        });
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
                this.fetchApproveData();
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
            this.fetchApproveData();
          });
      }
    },

    viewPage(id) {
      this.$router.push({
        name: "InvoiceDetail",
        params: { id },
      });
    },
    PaymentPage(id) {
      this.$router.push({
        name: "Payment",
        params: { id },
      });
    },
  },
  watch: {
    tab: function () {
      if (this.tab == "tab-2") {
        this.fetchApproveData();
      }
    },
  },
  created() {
    this.fetchApproveData();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>