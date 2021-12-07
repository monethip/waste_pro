<template>
  <v-container>
    <v-row>
      <v-col>
        <p>
          ລວມບິນຄ່າຂີ້ເຫື້ຍອທັງມົດ
          <span class="primary-color">({{ pagination.total }})</span>
        </p>
      </v-col>
    </v-row>
    <div>
      <v-card elevation="0">
        <v-card-text>
          <v-row class="my-0 mx-2">
            <v-col>
              <v-btn
                v-if="selectedRows.length"
                outlined
                color="info"
                class="mb-2"
                @click="Approve()"
                >ອະນຸມັດບິນ {{ selectedRows.length }}</v-btn
              ></v-col
            >
            <!--
            <v-col cols="8">
              <v-select
                outlined
                dense
                :items="status"
                v-model="selectedStatus"
                item-text="name"
                item-value="name"
                label="ສະຖານະ"
                multiple
              >
                <template v-slot:selection="data">
                  <v-chip
                    color="green"
                    text-color="white"
                    class="ma-1"
                    v-bind="data.attrs"
                    :input-value="data.selected"
                    close
                    @click="data.select"
                    @click:close="remove(data.item)"
                  >
                    {{ data.item.name }}
                  </v-chip>
                </template>
              </v-select>
            </v-col>
            -->
          </v-row>
          <v-data-table
            :headers="headers"
            :items="invoices"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
            v-model="selectedRows"
            show-select
            fixed-header
            height="100vh"
          >
            <template v-slot:item.media="{ item }">
              <v-avatar
                size="36px"
                v-for="(img, index) in item.media"
                :key="index"
              >
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
                      <v-icon small class="mr-2"> mdi-eye </v-icon>
                      ລາຍລະອຽດ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link>
                    <v-list-item-title @click="editModal(item)">
                      <v-icon small class="mr-2"> mdi-pencil </v-icon>
                      ແກ້ໄຂບິນ
                    </v-list-item-title>
                  </v-list-item>
                  <!--
                    <v-list-item link>
                      <v-list-item-title>
                        <v-icon small> mdi-credit-card </v-icon>
                        Payment
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-title>
                        <v-icon small> mdi-credit-card </v-icon>
                        Reject Payment
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                      <v-list-item-title>
                        <v-icon small> mdi-delete </v-icon>
                        Confirm Payment
                      </v-list-item-title>
                    </v-list-item>
                    -->
                </v-list>
              </v-menu>
            </template>
            <!-- <div>
                <template v-slot:item.actions="{ item }">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn color="primary" dark v-bind="attrs" v-on="on">
                        Dropdown
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>Menu 1
                         <v-icon small class="mr-2" @click="editModal(item)">
                  mdi-pencil
                </v-icon>
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </template>
              </div> --> </v-data-table
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

    <!-- Edit Add-->
    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Update Invoice</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editItem.discount"
                      label="ສ່ວນຫຼຸດ"
                      outlined
                      dense
                      type="number"
                      class="input-number"
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.discount }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editItem.new_exceed_bag_charge"
                      label="ຈຳນວນຖົງ"
                      outlined
                      dense
                      type="number"
                      class="input-number"
                    >
                    </v-text-field>
                    <p class="errors">
                      {{ server_errors.new_exceed_bag_charge }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeEditModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="UpdateItem()"
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  data() {
    return {
      selectedRows: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 20,
      search: "",
      oldVal: "",
      invoices: [],
      editItem: {},
      server_errors: {},
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
    fetchData() {
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
          this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    editModal(item) {
      this.editItem = item;
      this.$store.commit("modalEdit_State", true);
    },
    UpdateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .put("invoice/" + this.editItem.id, {
            discount: this.editItem.discount,
            new_exceed_bag_charge: this.editItem.new_exceed_bag_charge,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeEditModal();
                this.fetchData();
                this.reset();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
            if (res.data.error == true) {
              console.log("error");
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
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
              var obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
            this.fetchData();
          });
      }
    },
    closeEditModal() {
      this.$store.commit("modalEdit_State", false);
    },

    Approve() {
      var selectedInvoice = [];
      this.selectedRows.filter((item) => {
        selectedInvoice.push(item.id);
      });
      console.log(selectedInvoice);
      this.loading = true;
      this.$axios
        .put("plan-month/" + this.$route.params.id + "/approve-invoice/", {
          invoices: selectedInvoice,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.selectedRows = [];
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
            }, 300);
          }
        })
        .catch(() => {
          this.fetchData();
          this.selectedRows = [];
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    viewPage(id) {
      this.$router.push({
        name: "InvoiceDetail",
        params: { id },
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
    remove(item) {
      console.log(item);
      const index = this.selectedStatus.indexOf(item.id);
      if (index >= 0) this.selectedStatus.splice(index, 0)[0];
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
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>