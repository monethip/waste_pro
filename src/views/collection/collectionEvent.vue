<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col cols="1">
        <v-btn class="btn-primary" @click="createPage()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="3">
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
                clearable
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="month"
              type="month"
          ></v-date-picker>
        </v-menu>
      </v-col>
      <v-col cols="4">
        <v-select
            outlined
            dense
            :items="collectionStatus"
            v-model="selectedCollectionStatus"
            @input="fetchData()"
            item-text="dis_play"
            item-value="name"
            label="ສະຖານະບໍລິການ"
            multiple
            clearable
        ></v-select>
      </v-col>
      <v-col cols="4">
        <v-select
            outlined
            dense
            :items="paymentStatus"
            v-model="selectedPaymentStatus"
            @input="fetchData()"
            item-text="dis_play"
            item-value="name"
            label="ສະຖານະການຊຳລະ"
            multiple
            clearable
        ></v-select>
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
              <th class="text-left">#</th>
              <th class="text-left">Name</th>
              <th class="text-left">Phone</th>
              <th class="text-left">Village</th>
              <th class="text-left">Discount</th>
              <th class="text-left">Total</th>
              <th class="text-left">Subtotal</th>
              <th class="text-left">ການບໍລິການ</th>
              <th class="text-left">ການຊຳລະ</th>
              <th class="text-left" style="width: 280px;">ລາຍລະອຽດ</th>
              <th class="text-left">Image</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user, index) in collections" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ user.name }} {{ user.surname }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.village.name }}</td>
              <td>{{ user.discount }}</td>
              <td>{{ user.total }}</td>
              <td>{{ user.sub_total }}</td>
              <td>
                <v-chip label color="primary">{{collectStatus(user.collect_status)}}</v-chip>
              </td>
              <td>
                <v-chip label color="success">{{paymentStatusText(user.payment_status)}}</v-chip>
              </td>
              <td style="width: 280px;">{{ user.description }}</td>
              <td>
                <v-avatar
                    size="36px"
                    v-for="(img, index) in user.media"
                    :key="index"
                >
                  <img v-if="img.url" :src="img.url"/>
                </v-avatar>
              </td>
              <!-- <td>{{ user.reject_description }}</td> -->
              <td>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        medium
                        class="mr-2"
                    >mdi-dots-vertical
                    </v-icon
                    >
                  </template>
                  <v-list>
                    <v-list-item link @click="viewPage(user.id)">
                      <v-list-item-title>
                        <v-icon small class="mr-2"> mdi-eye</v-icon>
                        ລາຍລະອຽດ
                      </v-list-item-title>
                    </v-list-item>
                    <v-list-item link @click="editPage(user.id)">
                      <v-list-item-title>
                        <v-icon small class="mr-2"> mdi-pencil</v-icon>
                        ແກ້ໄຂ
                      </v-list-item-title>
                    </v-list-item>

                    <!--                      <div-->
                    <!--                        v-if="-->
                    <!--                          user.collect_status == 'approved' &&-->
                    <!--                          user.payment_status == 'pending'-->
                    <!--                        "-->
                    <!--                      >-->
                    <div>
                      <v-list-item link @click="paymentPage(user)">
                        <v-list-item-title>
                          <v-icon small class="mr-2">mdi-cash</v-icon>
                          ຊຳລະ
                        </v-list-item-title>
                      </v-list-item>
                    </div>
                    <!--                      <div-->
                    <!--                        v-if="-->
                    <!--                          user.collect_status == 'approved' &&-->
                    <!--                          user.payment_status == 'to_confirm_payment'-->
                    <!--                        "-->
                    <!--                      >-->
                    <div>
                      <v-list-item link @click="paymentConfirmModal(user)">
                        <v-list-item-title>
                          <v-icon small class="mr-2">mdi-card</v-icon>
                          ຢືນຢັນການຊຳລະ
                        </v-list-item-title>
                      </v-list-item>
                    </div>
                    <div
                        v-if="
                          user.collect_status == 'approved' &&
                          user.payment_status == 'to_confirm_payment'
                        "
                    >
                      <v-list-item link @click="paymentConfirmModal(user)">
                        <v-list-item-title>
                          <v-icon small> mdi-cash-remove</v-icon>
                          ປະຕິເສດການຊຳລະ
                        </v-list-item-title>
                      </v-list-item>
                    </div>
                  </v-list>
                </v-menu>
              </td>
            </tr>
            </tbody>
          </template>
        </v-simple-table>
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

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ຊຳລະຄ່າຂີ້ເຫື້ຍອ {{ payment.name }} {{ payment.surname }}</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <h3 class="my-4">ເລືອກປະເພດການຊຳລະ</h3>
                <v-row>
                  <v-col cols="12">
                    <v-chip-group
                        v-model="paymentType"
                        column
                        :rules="paymentTypeRule"
                        required
                    >
                      <v-chip
                          large
                          class="mr-6"
                          color="info"
                          label
                          filter
                          outlined
                      >
                        ເງິນສົດ
                        <v-icon left class="ml-1"> mdi-currency-usd</v-icon>
                      </v-chip>
                      <v-chip large color="error" label filter outlined>
                        BCEL
                        <v-icon class="ml-1" left>
                          mdi-credit-card
                        </v-icon
                        >
                      </v-chip
                      >
                    </v-chip-group>
                    <p class="errors">
                      {{ server_errors.payment_method }}
                    </p>
                  </v-col>
                </v-row>
                <div v-if="paymentType == 1">
                  <h3 class="my-4">ຫຼັກຖານການຊຳລະ</h3>
                  <v-row>
                    <v-col>
                      <label class="file-label">
                        <input
                            @change="onFileChange"
                            class="file-input input-file-image"
                            type="file"
                            name="image"
                            accept="image/*"
                            ref="image"
                        />
                        <span class="file-cta">
                          <span class="file-icon">
                            <v-icon
                                style="
                                font-size: 60px !important;
                                color: #719aff;
                                cursor: pointer;
                              "
                                class="fas fa-cloud-upload"
                            >mdi-file-image</v-icon
                            >
                          </span>
                        </span>
                      </label>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col v-if="imageUrl">
                      <v-avatar class="avatar rounded" size="194px">
                        <img :src="imageUrl" alt=""/>
                      </v-avatar>
                    </v-col>
                    <p class="errors">
                      {{ server_errors.image }}
                    </p>
                  </v-row>
                  <!--                  <v-row>-->
                  <!--                    <v-col cols="12">-->
                  <!--                      <v-text-field-->
                  <!--                        v-model="bcel_reference_number"-->
                  <!--                        label="ເລກລະຫັດການຊຳລະ"-->
                  <!--                        outlined-->
                  <!--                        dense-->
                  <!--                        type="number"-->
                  <!--                        class="input-number"-->
                  <!--                        :rules="[-->
                  <!--                          () =>-->
                  <!--                            !!bcel_reference_number ||-->
                  <!--                            'BCEL Reference Number field is required',-->
                  <!--                          () =>-->
                  <!--                            (!!bcel_reference_number &&-->
                  <!--                              bcel_reference_number.length == 15) ||-->
                  <!--                            'BCEL Reference Number must be than 15 number',-->
                  <!--                        ]"-->
                  <!--                        counter="15"-->
                  <!--                      >-->
                  <!--                      </v-text-field>-->
                  <!--                    </v-col>-->
                  <!--                    <p class="errors">-->
                  <!--                      {{ server_errors.bcel_reference_number }}-->
                  <!--                    </p>-->
                  <!--                  </v-row>-->

                </div>
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
                  @click="Payment()"
              >
                Pay
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <!-- Confirm Payment-->
    <v-dialog v-model="paymentDialog" max-width="620px" persistent>
      <template>
        <v-card>
          <v-card-title>
            <p>
              <v-icon class="primary-color" large color="success"
              >mdi-checkbox-marked-circle-outline
              </v-icon
              >
              ຢືນຢັນຊຳລະຄ່າຂີ້ເຫຍື້ອ

              <span class="primary-color"
              >{{ confirm.name }} {{ confirm.surname }}</span
              >
            </p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-chip-group v-model="confirmType" column>
                      <v-chip
                          medium
                          class="mr-6"
                          color="success"
                          label
                          filter
                          outlined
                      >
                        <v-icon left class="ml-1"> mdi-cash
                        </v-icon
                        >
                        ຢືນຢັນການຊຳລະ
                      </v-chip>
                      <v-chip medium color="error" label filter outlined>
                        <v-icon class="ml-1" left> mdi-cash-remove</v-icon>
                        ປະຕິເສດການຊຳລະ
                      </v-chip
                      >
                    </v-chip-group>
                  </v-col>
                </v-row>
                <div v-if="confirmType == 1">
                  <v-row>
                    <v-col cols="12">
                      <v-select
                          v-model="reject_reason_id"
                          label="ເຫດຜົນ"
                          outlined
                          dense
                          :items="rejects"
                          item-text="name"
                          item-value="id"
                      >
                      </v-select>
                      <p class="errors">
                        {{ server_errors.reject_reason_id }}
                      </p>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          v-model="description"
                          label="Description"
                          outlined
                          dense
                          type="text"
                      >
                      </v-text-field>
                      <p class="errors">
                        {{ server_errors.description }}
                      </p>
                    </v-col>
                  </v-row>
                  <!-- <v-row>
                    <v-card-actions>
                      <v-btn
                        color="info"
                        class="white--text px-12 c-btn"
                        large
                        :loading="loading"
                        :disabled="loading"
                        @click="confirmReject()"
                      >
                        ຢືນຢັນ
                      </v-btn>
                    </v-card-actions>
                  </v-row> -->
                </div>
              </v-form>
              <v-card-actions class="mt-4">
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="paymentDialog = false"
                >
                  Close
                </v-btn>
                <v-btn
                    color="info"
                    class="white--text px-12 c-btn"
                    medium
                    :loading="loading"
                    :disabled="loading"
                    @click="confirmPayment()"
                >
                  ຢືນຢັນ
                </v-btn>
              </v-card-actions>
            </v-container>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>

    <!--Delete Modal-->
    <!--
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
    -->
  </v-container>
</template>

<script>
import {GetOldValueOnInput} from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";

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
      server_errors: {},
      selectedCollectionStatus: [],
      collectionStatus: [
        {
          id: 1,
          name: "requested",
          dis_play: "ຮ້ອງຂໍເກັບຂີ້ເຫື້ອຍ"
        },
        {
          id: 2,
          name: "rejected",
          dis_play: "ປະຕິເສດເກັບຂີ້ເຫື້ອຍ"
        },
        {
          id: 3,
          name: "approved",
          dis_play: "ອະນຸມັດເກັບຂີ້ເຫື້ອຍ"

        },
        {
          id: 4,
          name: "collected",
          dis_play: "ເກັບຂີເຫື້ອຍສຳເລັດ"
        },
        {
          id: 5,
          name: "collect_confirm",
          dis_play: "ລູກຄ້າຢືນຢັນການເກັບ"
        },
        {
          id: 5,
          name: "collect_reject",
          dis_play: "ການເກັບຖືກປະຕິເສດ"
        },
      ],
      selectedPaymentStatus: [],
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
        {text: "ຊື່", value: "surname"},
        {text: "Phone", value: "phone", sortable: false},
        {text: "ບ້ານ", value: "village.name", sortable: false},
        {text: "Discount", value: "discount", sortable: false},
        {text: "Total", value: "total", sortable: false},
        {text: "SubTotal", value: "sub_total"},
        {
          text: "Collect Status",
          value: "collect_status",
          align: "center",
        },
        {text: "Payment Status", value: "payment_status", align: "center",width:"200px"},
        {text: "Image", value: "media",width:"250px"},
        {text: "", value: "actions", sortable: false},
      ],
    };
  },
  methods: {
    onFileChange(e) {
      let input = e.target;
      let file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    fetchData() {
      // let date = this.moment(this.month).format('YYYY-MM');
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("collection-event", {
            params: queryOption([
              {page: this.pagination.current_page},
              {per_page: this.per_page},
              {collect_status: this.selectedCollectionStatus},
              {payment_status: this.selectedPaymentStatus},
              // {month: date},
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
        name: "CreateCollectionEvent",
      });
    },
    editPage(id) {
      this.$router.push({
        name: "EditCollectionEvent",
        params: {id},
      });
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewCollectionEvent",
        params: {id},
      });
    },
    paymentPage(item) {
      this.payment = item;
      this.$store.commit("modalAdd_State", true);
    },

    Payment() {
      if (this.paymentType !== "") {
        let formData = new FormData();
        formData.append("payment_method", this.payment_method);
        formData.append("image", this.image);
        // formData.append("bcel_reference_number", this.bcel_reference_number);
        formData.append("_method", "PUT");
        if (this.$refs.form.validate() == true) {
          this.loading = true;
          this.$axios
              .post("pay-collection-event/" + this.payment.id, formData)
              .then((res) => {
                if (res.data.code == 200) {
                  setTimeout(() => {
                    this.loading = false;
                    this.paymentConfirmModal(this.payment);
                    this.closeAddModal();
                    this.fetchData();
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
                  let obj = error.response.data.errors;
                  for (let [key, data] of Object.entries(obj)) {
                    this.server_errors[key] = data[0];
                  }
                }
                this.fetchData();
              });
        }
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກປະເພດການຊຳລະກ່ອນ",
        });
      }
    },

    confirmPayment() {
      if (this.confirmType == "0") {
        this.loading = true;
        this.$axios
            .put("confirm-collection-event-payment/" + this.confirm.id)
            .then((res) => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.fetchData();
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "success",
                    msg: res.data.message,
                  });
                  this.closeConfirmModal();
                }, 300);
              }
            })
            .catch(() => {
              this.closeConfirmModal();
              this.loading = false;
            });
      } else if (this.confirmType == "1") {
        let data = new FormData();
        data.append("reject_reason_id", this.reject_reason_id);
        data.append("description", this.description);
        data.append("_method", "PUT");
        this.loading = true;
        this.$axios
            .post("reject-collection-event-payment/" + this.confirm.id, data)
            .then((res) => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.fetchData();
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "success",
                    msg: res.data.message,
                  });
                  this.closeConfirmModal();
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
                let obj = error.response.data.errors;
                for (let [key, data] of Object.entries(obj)) {
                  this.server_errors[key] = data[0];
                }
              }
            });
      } else if (this.confirmType == "") {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ",
        });
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກຂໍ້ມູນກ່ອນ",
        });
      }
    },

    // confirmReject() {
    //   let data = new FormData();
    //   data.append("reject_reason_id", this.reject_reason_id);
    //   data.append("description", this.description);
    //   data.append("_method", "PUT");
    //   this.loading = true;
    //   this.$axios
    //     .post("reject-collection-event-payment/" + this.payment.id, data)
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.loading = false;
    //           this.$store.commit("Toast_State", {
    //             value: true,
    //             color: "success",
    //             msg: res.data.message,
    //           });
    //           this.fetchData();
    //           this.closeConfirmModal();
    //         }, 300);
    //       }
    //     })
    //     .catch((error) => {
    //       this.loading = false;
    //       this.$store.commit("Toast_State", {
    //         value: true,
    //         color: "error",
    //         msg: error.response.data.message,
    //       });
    //       if (error.response.status == 422) {
    //         var obj = error.response.data.errors;
    //         for (let [key, data] of Object.entries(obj)) {
    //           this.server_errors[key] = data[0];
    //         }
    //       }
    //     });
    // },

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
      else return "info";
    },

    collectStatus(status){
      if(status == 'requested') return 'ຮ້ອງຂໍເກັບຂີ້ເຫື້ອຍ';
      else if(status == 'rejected') return 'ປະຕິເສດເກັບຂີ້ເຫື້ອຍ';
      else if (status == 'approved') return 'ອະນຸມັດເກັບຂີ້ເຫື້ອຍ';
      else if(status == 'collected') return 'ເກັບຂີເຫື້ອຍສຳເລັດ';
      else if(status == 'collect_confirm') return 'ລູກຄ້າຢືນຢັນການເກັບ';
      else if(status == 'collect_reject') return 'ການເກັບຖືກປະຕິເສດ';
      else return  '';
    },
    paymentStatusText(status){
      if(status == 'pending') return 'ລໍຖ້າເກັບເງິນ';
      else if(status == 'to_confirm_payment') return 'ລໍຖ້າຢືນຢັນຊຳລະ';
      else if (status == 'rejected') return 'ປະຕິເສດການຊຳລະ';
      else if(status == 'success') return 'ຊຳລະສຳເລັດ';
      else return  '';
    }
  },
  watch: {
    month: function (value){
      if(value !== ''){
        this.pagination.current_page ='';
        this.fetchData();
      }
    },
    search: function (value) {
      this.pagination.current_page ='';
      if (value == "") {
        this.fetchData();
      }
    },
    selectedStatus: function () {
      this.pagination.current_page ='';
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

    paymentType: function () {
      if (this.paymentType == 0) {
        this.payment_method = "cash";
        this.image = "";
        this.imageUrl = "";
        // this.bcel_reference_number = "";
      } else if (this.paymentType == 1) {
        this.payment_method = "bcel";
      }
      this.server_errors.payment_method = "";
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
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";

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
</style>
