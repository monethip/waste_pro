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
          <v-row>
            <v-col >
              <div class="text-center mx-auto">
                <v-img
                    :src="require('../../assets/logo_waste.png')"
                    max-height="160px"
                    max-width="160px"
                    alt="logo"
                    contain
                    eager
                    class="app-logo me-3 text-center"
                ></v-img>
              </div>
            </v-col>
          </v-row>
          <v-row class="pb-4">
            <v-col>
              <h2 class="text-center">ໃບບິນເກັບເງິນຄ່າຂີ້ເຫື້ຍອ</h2>
              <!-- <p v-if="invoice.plan_month">{{ invoice.plan_month.name }}</p> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3>ຂໍ້ມູນບິນ</h3>
              <h3>
                ເລກບິນ:
                <span>{{
                  (invoice.invoice_id)
                }}</span>
              </h3> <h3>
                ສະຖານະບິນ:
                <span :class="invoiceStatusColor">{{
                  invoiceStatus(invoice.status)
                }}</span>
              </h3>
              <h3>ປະເພດບິນ: {{ invoice.type }}</h3>
              <h3>
                ວັນທີ:
                {{ moment(invoice.created_at).format("DD-MM-YY") }}
              </h3>
            </v-col>
            <v-col>
              <h3>ຂໍ້ມູນລູກຄ້າ</h3>
              <div>
                <h3 v-if="invoice.customer.customer_type = 'company'">
                  {{ invoice.customer.company_name }}
                </h3>
                <h3 v-else-if="invoice.customer.customer_type = 'home'">
                  ຊື່: {{ invoice.customer.name }} {{ invoice.customer.surname }}
                </h3>
              </div>
              <h3 v-if="invoice.customer">
                ວັນທີສະໝັກ: {{ invoice.customer.start_month }}
              </h3>
            </v-col>
          </v-row>
          <v-row class="mb-n6">
            <v-col>ລາຍລະອຽດ</v-col>
          </v-row>
          <v-divider class="my-6 c-divider"></v-divider>

          <v-simple-table>
            <template v-slot:default>
              <tbody style="font-size: 18px;">
              <tr
              >
                <td>ຈຳນວນຖົງ:</td>
                <td>{{ invoice.total_bag }}</td>
              </tr>
              <tr>
                <td>ຈຳນວນຖົງທີ່ກາຍ:</td>
                <td>{{ invoice.exceed_bag }}</td>
              </tr>

              <tr>
                <td>ລວມເງິນ:</td>
                <td>{{ Intl.NumberFormat().format(invoice.sub_total) }}</td>
              </tr>

              <tr>
                <td>ສ່ວນຫຼຸດ:</td>
                <td>{{ Intl.NumberFormat().format(invoice.discount) }}</td>
              </tr>

              <tr>
                <td>ຈຳນວນເງິນທີ່ກາຍ:</td>
                <td>{{ Intl.NumberFormat().format(invoice.exceed_bag_charge) }}</td>
              </tr>

              <tr style="font-size: 20px;">
                <td>ລວມທັງໝົດ:</td>
                <td>{{ Intl.NumberFormat().format(invoice.total) }}</td>
              </tr>

              </tbody>
            </template>
          </v-simple-table>

<!--          <v-row class="mx-12">-->
<!--            <v-col>-->
<!--              <h3>ຈຳນວນຖົງ: {{ invoice.total_bag }}</h3>-->
<!--              <h3>ຈຳນວນຖົງທີ່ກາຍ: {{ invoice.exceed_bag }}</h3>-->
<!--            </v-col>-->
<!--            <v-col>-->
<!--              <h3>ລວມ: {{ Intl.NumberFormat().format(invoice.sub_total) }}</h3>-->
<!--              <h3>-->
<!--                ສ່ວນຫຼຸດ: {{ Intl.NumberFormat().format(invoice.discount) }}-->
<!--              </h3>-->
<!--              <h3>-->
<!--                ຈຳນວນເງິນທີ່ກາຍ:-->
<!--                {{ Intl.NumberFormat().format(invoice.exceed_bag_charge) }}-->
<!--              </h3>-->
<!--              <h3>-->
<!--                ຈຳນວນເງິນທີ່ໄລ່ເພີມ:-->
<!--                {{ Intl.NumberFormat().format(invoice.new_exceed_bag_charge) }}-->
<!--              </h3>-->
<!--              <v-divider class="my-2"></v-divider>-->
<!--              <h3>-->
<!--                ລວມທັງໝົດ: {{ Intl.NumberFormat().format(invoice.total) }}-->
<!--              </h3>-->
<!--            </v-col>-->
<!--          </v-row>-->

          <v-divider class="my-6 c-divider bottom"></v-divider>
          <v-row class="mb-n10">
            <v-col>
              <p>ການຊຳລະ</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3>
                ວັນທິຊຳລະ: {{ moment(invoice.updated_at).format("DD-MM-YY") }}
              </h3>
              <h3>ປະເພດຊຳລະ: {{ invoice.payment_method }}</h3>
            </v-col>
            <v-col v-if="invoice.media">
              <div v-for="(item, index) in invoice.media" :key="index">
                <img
                  aspect-ratio="1"
                  class="grey"
                  :src="item.url"
                />
              </div>
            </v-col>
          </v-row>
<!--          <v-card-actions class="mt-6">-->
<!--            <v-spacer></v-spacer>-->
<!--            <v-btn color="info" text :loading="loading" :disabled="loading">-->
<!--              Export-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "InvoiceDetail",
  title() {
    return `Vientiane Waste Co-Dev|Invoice Detail`;
  },
  data() {
    return {
      loading: false,
      customerId: "",
      invoice: [],
      invoiceStatusColor: "",
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
              this.$store.commit("Loading_State", false);
              this.invoice = res.data.data;
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
    invoiceStatus(data) {
      if (data == "created") {
        this.invoiceStatusColor = "primary--text";
        return "ສ້າງບິນສຳເລັດ";
      } else if (data == "approved") {
        this.invoiceStatusColor = "info--text";
        return "ອະນຸມັດແລ້ວ";
      } else if (data == "to_confirm_payment") {
        this.invoiceStatusColor = "warning--text";
        return "ລໍຖ້າຢືນຢັນການຊຳລະ";
      } else if (data == "rejected") {
        this.invoiceStatusColor = "error--text";
        return "ຊຳລະບໍ່ສຳເລັດ";
      } else if (data == "success") {
        this.invoiceStatusColor = "success--text";
        return "ສຳເລັດການຊຳລະ";
      }
    },
    //     invoiceStatusColor(data) {
    //   if (data == "success") {
    //     return "success";
    //   }
    // },

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
}
.c-divider.bottom {
  border-top: none;
  border-bottom: $primary-color solid 2px;
}
</style>
