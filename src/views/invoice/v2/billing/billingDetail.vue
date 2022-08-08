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
                <span>{{
                  (invoice.billing_display_id)
                }}</span>
              </h3>
              <h3>
                ລາຍລະອຽດ:
                <span>{{
                  (invoice.content)
                }}</span>
              </h3>
              <h3>
                ສະຖານະບິນ:
                <span :class="invoiceStatusColor">{{
                  invoiceStatus(invoice.status)
                }}</span>
              </h3>
              <h3>ປະເພດບິນ: {{ invoice.display_type }}</h3>
              <h3>
                ວັນທີ:
                {{ moment(invoice.created_at).format("DD-MM-YY") }}
              </h3>
            </v-col>
            <v-col>
              <h3>ຂໍ້ມູນລູກຄ້າ</h3>
              <div v-if="invoice.user">
                <div v-if="invoice.user.customer">
                  <h3 v-if="invoice.user.customer.customer_type = 'company'">
                    ລະຫັດລູກຄ້າ:  {{ invoice.user.customer.customer_id }}
                  </h3>
                </div>
              </div>
              <div v-if="invoice.user">
                <div v-if="invoice.user.customer">
                  <h3 v-if="invoice.user.customer.customer_type = 'company'">
                    ຊື່:  {{ invoice.user.customer.company_name }}   {{ invoice.user.name }}
                  </h3>
                  <h3 v-else-if="invoice.user.customer.customer_type = 'home'">
                    ຊື່: {{ invoice.user.customer.name }} {{ invoice.user.customer.surname }}
                  </h3>
                  </div>
              </div>
              <h3 v-if="invoice.user">
                ເບີໂທ: {{ invoice.user.phone }}
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
                  ຈຳນວນ
                </th>
                <th class="text-left">
                  ລາຄາ
                </th>
                <th class="text-left">
                  ລວມ
                </th>
                <th class="text-left">
                  Active
                </th>
                <th class="text-left" v-if="invoice.status === 'created'">
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(data,index) in invoice.billing_details" :key="index">
                <td>{{index +1}}</td>
                <td>{{ data.item_la }}</td>
                <td>{{ data.content }}</td>
                <td>{{ Intl.NumberFormat().format(data.quantity) }}</td>
                <td>{{ Intl.NumberFormat().format(data.price )}}</td>
                <td>{{ Intl.NumberFormat().format(data.total) }}</td>
                <td>
                  <div v-if="data.is_active ===1">
                    <v-chip color="success" label>True</v-chip>
                  </div>
                  <div v-if="data.is_active ===0">
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
              <td :colspan="4" style="font-size:16px;font-weight: 600;">{{ Intl.NumberFormat().format(invoice.sub_total) }}</td>
            </tr>
            <tr>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ສ່ວນຫຼຸດ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">{{ Intl.NumberFormat().format(invoice.discount) }}</td>
            </tr>
            <tr style="font-size: 20px;">
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ລວມທັງໝົດ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">{{ Intl.NumberFormat().format(invoice.total) }}</td>
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

          <v-card-actions class="mt-6">
            <v-spacer></v-spacer>
            <v-btn color="info" text :loading="loading" :disabled="loading" @click="Download(invoice)"
                   v-if="invoice.status ==='success'">
              Download
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>

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
                  <v-col cols >
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
              <v-btn color="error" class="elevation-0 btn mr-4 px-12" medium @click="closeAddModal()">
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
      is_active: null,
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
      server_errors: {},
      total: "",
      formData: {}
    };
  },
  methods: {
    Download(link){
      if(link != null){
        window.open(link.download_pdf_link)
      }
    },
    backPrevios() {
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
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    EditInvoice(item) {
      this.formData = item;
      if(this.formData.is_active ==1){
        this.is_active = true;
      } else {
        this.is_active = false;
      }
      this.$store.commit("modalAdd_State", true);

    },
    async updateInvoice() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        await this.$axios
            .put("billing-detail/"+ this.formData.id,{
              qty: this.formData.quantity,
              price:this.formData.price,
              content:this.formData.content,
              item_la:this.formData.item_la,
              is_active:this.formData.is_active,
                }
            )
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
                msg: error.response.data.message,
              });
            });

      }
    },
  },
  watch: {
    is_active: function (value){
      if(value === true){
        this.formData.is_active = 1;
      } else {
        this.formData.is_active = 0;
      }
    }

  },
  created() {
    if(this.$route.params.id){
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
