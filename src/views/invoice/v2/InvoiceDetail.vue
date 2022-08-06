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
              <!-- <p v-if="invoice.plan_month">{{ invoice.plan_month.name }}</p> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3>ຂໍ້ມູນບິນ</h3>
              <h3>
                ເລກບິນ:
                <span v-if="invoice.billing">{{
                  (invoice.billing.billing_display_id)
                }}</span>
              </h3>
              <h3>
                ລາຍລະອຽດ:
                <span v-if="invoice.billing">{{
                  (invoice.billing.content)
                }}</span>
              </h3>
              <h3>
                ສະຖານະບິນ:
                <span v-if="invoice.billing" :class="invoiceStatusColor">{{
                  invoiceStatus(invoice.billing.status)
                }}</span>
              </h3>
              <h3 v-if="invoice.billing">ປະເພດບິນ: {{ invoice.billing.display_type }}</h3>
              <h3>
                ວັນທີ:
                {{ moment(invoice.created_at).format("DD-MM-YY") }}
              </h3>
            </v-col>
            <v-col>
              <h3>ຂໍ້ມູນລູກຄ້າ</h3>
              <div v-if="invoice.billing">
                <h3 v-if="invoice.billing.user.customer.customer_type = 'company'">
                  ລະຫັດລູກຄ້າ:  {{ invoice.billing.user.customer.customer_id }}
                </h3>
              </div>
              <div v-if="invoice.billing">
                <h3 v-if="invoice.billing.user.customer.customer_type = 'company'">
                  ຊື່:  {{ invoice.billing.user.customer.company_name }}   {{ invoice.billing.user.name }}
                </h3>
                <h3 v-else-if="invoice.billing.user.customer.customer_type = 'home'">
                  ຊື່: {{ invoice.billing.user.customer.name }} {{ invoice.billing.user.customer.surname }}
                </h3>
              </div>
              <h3 v-if="invoice.billing">
                ວັນທີສະໝັກ: {{ invoice.billing.user.customer.start_month }}
              </h3>
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
                <th class="text-left">
                  ລຳດັບ
                </th>
                <th class="text-left">
                  ລາຍການ
                </th>
                <th class="text-left">
                  ລາຍລະອຽດ
                </th>
                <th class="text-left">
                  Content
                </th>
                <th class="text-left">
                  ຈຳນວນ
                </th>
                <th class="text-left">
                  ລາຄາ
                </th>
                <th class="text-left">
                  ລວມ
                </th>
              </tr>
              </thead>
              <tbody v-if="invoice.billing">
              <tr v-for="(data,index) in invoice.billing.billing_details" :key="index">
                <td>{{index +1}}</td>
                <td>{{ data.item }}</td>
                <td>{{ data.content }}</td>
                <td>{{ data.item_la }}</td>
                <td>{{ Intl.NumberFormat().format(data.quantity) }}</td>
                <td>{{ Intl.NumberFormat().format(data.price )}}</td>
                <td>{{ Intl.NumberFormat().format(data.total) }}</td>
                <td>
                    <v-icon
                        color="success"
                        small
                        class="mr-2"
                        @click="EditInvoice(item)"
                    >
                      mdi-eye
                    </v-icon
                    >
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
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ລວມເງິນ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="invoice.billing">{{ Intl.NumberFormat().format(invoice.billing.sub_total) }}</td>
            </tr>
            <tr>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ສ່ວນຫຼຸດ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="invoice.billing">{{ Intl.NumberFormat().format(invoice.billing.discount) }}</td>
            </tr>
            <tr style="font-size: 20px;">
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ລວມທັງໝົດ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="invoice.billing">{{ Intl.NumberFormat().format(invoice.billing.total) }}</td>
            </tr>
            </tbody>
            <br/>
          </v-simple-table>
<!--          <v-row class="mb-n10">-->
<!--            <v-col>-->
<!--              <p>ການຊຳລະ</p>-->
<!--            </v-col>-->
<!--          </v-row>-->
          <v-row>
            <v-col>
              <h3>
                ຊຳລະບໍ່ໃຫ້ກາຍວັນທີ: {{ moment(invoice.end_month).format("DD-MM-YY") }}
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
        .get("future-invoice/" + this.$route.params.id)
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
    EditInvoice() {

    }
  },
  watch: {},
  created() {
    if(this.$route.params.id){
      this.fetchData();
    }
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
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
