<template>
  <v-container>
    <v-row>
      <v-col>
        <p>ຈັດການຂໍ້ມູນບິນແບບກຳນົດເອງ</p>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <!--
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
              v-model="date"
              label="ເດືອນ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="fetchData()"
            type="month"
          ></v-date-picker>
        </v-menu>
      </v-col>
      -->
        <v-col>
          <v-select
              outlined
              dense
              :items="paymentStatus"
              v-model="selectedPaymentStatus"
              item-text="dis_play"
              item-value="name"
              label="ສະຖານະບິນ"
              clearable
          ></v-select>
        </v-col>

      <v-col>
        <v-text-field
            outlined
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            label="ຊື່"
            type="text"
            v-model="search"
            @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
      <v-col class="align-end text-end">
        <v-btn @click="openAddModal()" class="btn-primary mr-4">
          <v-icon class="mr-2">mdi-upload</v-icon>
          import ບິນ
        </v-btn>
        <v-btn @click="choseUser()" class="btn-primary">
          <v-icon class="mr-2">mdi-plus</v-icon>
          ສ້າງບິນ
        </v-btn>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <v-data-table
              :headers="headers"
              :items="invoices"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
          >
            <template v-slot:item.total="{ item }">
              {{ Intl.NumberFormat().format(item.billing.total) }}
            </template>
            <template v-slot:item.sub_total="{ item }">
              {{ Intl.NumberFormat().format(item.billing.sub_total) }}
            </template>
            <template v-slot:item.discount="{ item }">
              {{ Intl.NumberFormat().format(item.billing.discount) }}
            </template>
            <template v-slot:item.status="{ item }">
              {{paymentStatusText(item.billing.status) }}
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                  color="success"
                  small
                  class="mr-2"
                  @click="ViewInvoice(item.id)"
              >
                mdi-eye
              </v-icon
              >
            </template>
          </v-data-table
          >
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
    </div>
    <ModalAdd>
      <template @close="close">
        <v-card class="py-8 px-14">
          <v-card-title>
            <p>Import ບິນຂີ້ເຫື້ຍອ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-file-input
                        show-size
                        label="File "
                        accept="xlsx,xls"
                        v-model="file"
                        outlined
                        dense
                    ></v-file-input>
                    <p class="errors">
                      {{ server_errors.file }}
                    </p>
                    <p class="errors" v-for="(error,index) in errors" :key="index">
                      {{ error }}
                    </p>
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
                  @click="uploadFile"
              >
                Import
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";

export default {
  name: "Invoice",
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  data() {
    return {
      tab: null,
      invoices: [],
      loading: false,
      calendarId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      //Add Package
      date: new Date().toISOString().substr(0, 7),
      start_menu: false,
      server_errors: {},
      errors:[],
      file:null,
      //Filter
      selectedPaymentStatus: "",
      paymentStatus: [
        {
          id: 1,
          name: "pending",
          dis_play: "ລໍຖ້າເກັບເງິນ"
        },
        {
          id: 2,
          name: "to_confirm_payment",
          dis_play: "ລໍຖ້າຢືນຢັນຊຳລະ"
        },
        {
          id: 3,
          name: "rejected",
          dis_play: "ປະຕິເສດການຊຳລະ"
        },
        {
          id: 4,
          name: "success",
          dis_play: "ຊຳລະສຳເລັດ"
        },
      ],

      headers: [
        {text: "ເລກບິນ", value: "billing.content"},
        {
          text: "ຊື່ລູກຄ້າ",
          value: "billing.user.name",
          sortable: false,
          align: "center",
        },
        {
          text: "ສ່ວນຫຼຸດ",
          value: "discount",
          align: "center",
          sortable: false,
        },
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
          text: "ສະຖານະ",
          value: "status",
          sortable: false,
        },
        { text: "ວັນທີສ້າງ", value: "created_at" },
        {text: "", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("custom-bill", {
                params: queryOption([
                  {page: this.pagination.current_page},
                  {per_page: this.per_page},
                  {filter: this.search},
                  {status: this.selectedPaymentStatus},

                ]),
              }
          )
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
    Search() {
      GetOldValueOnInput(this);
    },
    openAddModal() {
      this.$store.commit("modalAdd_State", true);
    },
    closeAddModal() {
      this.file = "";
      this.$store.commit("modalAdd_State", false);
    },
    uploadFile() {
        let formData = new FormData();
        formData.append("file", this.file);
        if (this.$refs.form.validate() == true) {
          this.loading = true;
          this.$axios
              .post("import-old-payment", formData)
              .then((res) => {
                if (res.data.code == 200) {
                  this.loading = false;
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
                  this.errors = obj
                  for (let [key, data] of Object.entries(obj)) {
                    this.server_errors[key] = data[0];
                  }
                }
              });
        }
      },
    choseUser() {
      this.$router.push({
        name: "chose-customer",
        query:{redirect:'create-custom-bill'}
      });

      // this.$router.push({
      //   name: "chose-user",
      // });
    },
    ViewInvoice(id) {
      let route = this.$router.resolve({name: 'billing-detail',params: {id}});
      window.open(route.href, '_blank');
    },
    paymentStatusText(status){
      if(status == 'created') return 'ສ້າງບິນສຳເລັດ';
      else if(status == 'approved') return 'ອະນຸມັດສຳເລັດ';
      else if(status == 'pending') return 'ລໍຖ້າເກັບເງິນ';
      else if(status == 'to_confirm_payment') return 'ລໍຖ້າຢືນຢັນຊຳລະ';
      else if (status == 'rejected') return 'ປະຕິເສດການຊຳລະ';
      else if(status == 'success') return 'ຊຳລະສຳເລັດ';
      else if(status == 'cancel') return 'ຍົກເລີກ';
      else return  '';
    }
  },
  watch: {
    search: function (value) {
      this.pagination.current_page ='';
      if (value == "") {
        this.fetchData();
      }
    },
    selectedPaymentStatus:function () {
      this.pagination.current_page ='';
      this.fetchData();
    },
    file: function (){
      this.errors = [];
    }

  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main";
</style>