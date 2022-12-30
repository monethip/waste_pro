<template>
  <v-container>
    <v-breadcrumbs large class="pt-0">
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-chevron-left</v-icon> </v-btn
      >ລາຍລະອຽດ
    </v-breadcrumbs>
    <v-card>
      <!--
      <div v-for="(item, index) in data.media" :key="index">
        <v-img :src="item.url" alt="Image" height="500px" dark> </v-img>
      </div>
      -->
      <v-carousel v-if="data.media && data.media.length">
        <v-carousel-item
          v-for="(item, index) in data.media"
          :key="index"
          :src="item.url"
          @click="showImage(item.url)"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>

      <v-card-text>
        <v-tabs v-model="tab" background-color="#49A3DA" dark>
          <v-tab href="#tab-1">ຂໍ້ມູນກ່ຽວກັບ</v-tab>
          <v-tab href="#tab-2">ຂໍ້ມູນການບໍລິການ</v-tab>
          <v-tab href="#tab-3">ຂໍ້ມູນການຊຳລະ</v-tab>
        </v-tabs>
        <!-- <hr /> -->
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <!--                    <HomeInvoice :tab="tab" />-->
            <v-container>
              <v-row>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-office-building</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-subtitle>ບໍລິສັດ</v-list-item-subtitle>
                    <v-list-item-title
                      >{{ data.name }}
                      {{ data.company_name }}</v-list-item-title
                    >
                  </v-list-item-content>

                  <v-spacer></v-spacer>
                  <v-list-item-icon>
                    <v-icon color="indigo" class="mr-6">mdi-phone</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                    <v-list-item-title v-if="data.user">{{
                      data.user.phone
                    }}</v-list-item-title>
                  </v-list-item-content>

                  <v-spacer></v-spacer>
                  <v-list-item-icon>
                    <v-icon class="mr-6" color="indigo">mdi-email</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                    <v-list-item-title v-if="data.user">{{
                      data.user.email
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
              </v-row>
              <v-row>
                <v-list-item
                  v-for="(coor, index) in data.company_coordinators"
                  :key="index"
                >
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-account-circle</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>ຜູ້ປະສານງານ</v-list-item-subtitle>
                    <v-list-item-title
                      >{{ coor.name }} {{ coor.surname }}</v-list-item-title
                    >
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-list-item-icon>
                    <v-icon color="indigo" class="mr-6">mdi-phone</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                    <v-list-item-title>{{ coor.phone }}</v-list-item-title>
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-list-item-icon>
                    <v-icon color="indigo" class="mr-6">mdi-email</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                    <v-list-item-title>{{ coor.email }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content class="text-center">
                    <v-list-item-title>
                      <v-icon small class="mr-2" @click="editItem(coor)"
                        >mdi-pencil</v-icon
                      >
                      <v-icon small @click="deleteItem(coor)"
                        >mdi-delete</v-icon
                      >
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-calendar</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-subtitle>ວັນທີ່ເລີ່ມ</v-list-item-subtitle>
                    <v-list-item-title>{{
                      data.start_month
                    }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <span>
                        <v-chip
                          label
                          class="success"
                          v-if="data.status == 'active'"
                          >{{ data.status }}</v-chip
                        >
                        <v-chip
                          label
                          class="error"
                          v-else-if="data.status == 'inactive'"
                          >{{ data.status }}</v-chip
                        >
                        <v-chip label class="primary" v-else>
                          {{ data.status }}
                        </v-chip>
                      </span>
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-spacer></v-spacer>
                  <v-list-item-icon>
                    <v-icon color="indigo" class="mr-6">mdi-package</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>ປະເພດບໍລິການ</v-list-item-subtitle>
                    <v-list-item-title v-if="data.cost_by == 'fix_cost'"
                      >ທຸລະກິດເປັນຖ້ຽວ</v-list-item-title
                    >
                    <v-list-item-title v-if="data.cost_by == 'container'"
                      >ຄອນເທັນເນີ</v-list-item-title
                    >
                    <v-list-item-title v-if="data.cost_by == 'chartered'"
                      >ມອບເໝົາ</v-list-item-title
                    >

                    <v-list-item-subtitle v-if="data.cost_by == 'fix_cost'">
                      {{ Intl.NumberFormat().format(data.fix_cost) }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset></v-divider>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">mdi-map-marker</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-if="data.village">
                      {{ data.village.name }},
                      {{ data.district.name }}
                    </v-list-item-title>
                    <div
                      v-for="(detail, index) in data.village_details"
                      :key="index"
                    >
                      <v-list-item-subtitle>{{
                        detail.name
                      }}</v-list-item-subtitle>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-row>
              <v-row>
                <v-col cols="12" class="mb-4">
                  <GmapMap
                    :center="
                      getCenter().lat > 0 || getCenter().lat < 0
                        ? getCenter()
                        : { lat: 0, lng: 0 }
                    "
                    :zoom="16"
                    style="width: 100%; height: 450px"
                    :disableDefaultUI="true"
                  >
                    <GmapMarker
                      :position="getMarkers(data)"
                      @click="latlng = data"
                      :draggable="false"
                      :icon="markerOptions"
                      :animation="2"
                      ref="markers"
                    />
                  </GmapMap>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <v-container>
              <h3>ຂໍ້ມູນການບໍລິການ</h3>
              <v-row>
                <v-col>
                  <div>ຈຳນວນຖົງ: {{ serviceSummary.total_bag }}</div>
                </v-col>
                <v-col>
                  <div>ຈຳນວນຄັ້ງ: {{ serviceSummary.total_time }}</div>
                </v-col>
                <v-col>
                  <div>ຈຳນວນລໍຖ້າ: {{ statusSummary.pending_count }}</div>
                </v-col>
                <v-col>
                  <div>ຈຳນວນປະຕິເສດ: {{ statusSummary.reject_count }}</div>
                </v-col>
                <v-col>
                  <div>ຈຳນວນສຳເລັດ: {{ statusSummary.success_count }}</div>
                </v-col>
                <v-col>
                  <div>
                    ລໍຖ້າຢືນຢັນ: {{ statusSummary.wait_to_confirm_count }}
                  </div>
                </v-col>
              </v-row>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">Date</th>
                      <th class="text-left">ຈຳນວນ</th>
                      <th class="text-left">Status</th>
                      <th class="text-left">ເວລາລົງເກັບ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in services" :key="item.id">
                      <td>
                        <router-link
                          :to="{
                            name: 'PlanCalendarDetail',
                            params: {
                              id: item.plan_calendar_id,
                              planMonthId: item.plan_calendar.plan_month_id,
                            },
                          }"
                          >{{
                            moment(item.date).format("DD-MM-YYYY")
                          }}</router-link
                        >
                      </td>
                      <td>
                        <div v-if="item.collection_type === 'bag'">
                          {{ item.bag }} ຖົງ
                        </div>
                        <div v-if="item.collection_type === 'container'">
                          {{ item.container }} ຄອນເທັນເນີ
                        </div>
                        <div v-else-if="item.collection_type === 'chartered'">
                          {{ item.bag }} ຖົງ(ມອບເໝົາ)
                        </div>
                        <div v-else-if="item.collection_type === 'fix_cost'">
                          ບໍລິການເປັນຖ້ຽວ
                        </div>
                        <div v-else>{{ item.collection_type }}</div>
                      </td>
                      <td>{{ item.status_la }}</td>
                      <td>{{ item.collected_at }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <br />
              <Pagination
                v-if="pagination.total_pages > 1"
                :pagination="pagination"
                :offset="offset"
                @paginate="customerCollection()"
              ></Pagination>
            </v-container>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-3">
            <v-container>
              <h3>ປະຫັວດການຊຳລະ</h3>
              <v-row class="mb-1 mt-1">
                <v-col>
                  <div>
                    ລໍຖ້າອະນຸມັດ:
                    {{
                      Intl.NumberFormat().format(invoiceSummary.created_total)
                    }}
                  </div>
                </v-col>
                <v-col>
                  <div>
                    ອະນຸມັດແລ້ວ:
                    {{
                      Intl.NumberFormat().format(invoiceSummary.approved_total)
                    }}
                  </div>
                </v-col>
                <v-col>
                  <div>
                    ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ:
                    {{
                      Intl.NumberFormat().format(
                        invoiceSummary.to_confirm_payment_total
                      )
                    }}
                  </div>
                </v-col>
                <v-col>
                  <div>
                    ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ:
                    {{
                      Intl.NumberFormat().format(invoiceSummary.success_total)
                    }}
                  </div>
                </v-col>
              </v-row>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">ວັນທີບິນ</th>
                      <th class="text-left">ຫົວບິນ</th>
                      <th class="text-left">ສະຖານະ</th>
                      <th class="text-left">ເວລາຈ່າຍ</th>
                      <th class="text-left">Payment</th>
                      <th class="text-left">Subtotal</th>
                      <th class="text-left">ສ່ວນຫຼູດ</th>
                      <th class="text-left">Total</th>
                      <th class="text-left">ເບິ່ງລາຍລະອຽດ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in invoices" :key="item.id">
                      <td>{{ moment(item.date).format("DD-MM-YYYY") }}</td>
                      <td>{{ item.content }}</td>
                      <td>{{ item.status_la }}</td>
                      <td>{{ item.paided_at }}</td>
                      <td>
                        <div class="primary--text">
                          {{ item.payment_method }}
                        </div>
                      </td>
                      <td>{{ Intl.NumberFormat().format(item.sub_total) }}</td>
                      <td>{{ Intl.NumberFormat().format(item.discount) }}</td>
                      <td>{{ Intl.NumberFormat().format(item.total) }}</td>
                      <td>
                        <v-btn
                          class="btn elevation-0"
                          color="info"
                          small
                          @click="ViewInvoice(item.id)"
                        >
                          <v-icon class="mr-1" small>mdi-eye</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <br />
              <template>
                <Pagination
                  v-if="pagination.total_pages > 1"
                  :pagination="pagination"
                  :offset="offset"
                  @paginate="customerInvoice()"
                ></Pagination>
              </template>
            </v-container>
          </v-tab-item>
        </v-tabs-items>

        <!--        <v-card-actions>-->
        <!--          <v-spacer></v-spacer>-->
        <!--          <v-btn-->
        <!--            color="blue darken-1"-->
        <!--            text-->
        <!--            :loading="loading"-->
        <!--            :disabled="loading"-->
        <!--            @click="editPage(data.id)"-->
        <!--          >-->
        <!--            Update-->
        <!--          </v-btn>-->
        <!--        </v-card-actions>-->
        <!--        ->-->
      </v-card-text>
    </v-card>
    <ModalView>
      <template>
        <v-card>
          <v-img
            :src="imageUrl"
            alt="Image"
            width="auto"
            height="auto"
            dark
          ></v-img>
        </v-card>
      </template>
    </ModalView>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      loading: false,
      server_errors: {},
      provinces: [],
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: "",
      village_details: [],
      selectedVillageDetail: [],
      tab: "tab-1",

      address: [],
      errormsg: "",
      preview_list: [],
      image_list: [],
      image: [],
      //Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      currentPlace: null,
      markerOptions: {
        // eslint-disable-next-line global-require
        url: require("@coms/../../src/assets/pin1.svg"),
        size: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
      },
      services: [],
      serviceSummary: {},
      statusSummary: {},
      invoices: [],
      invoiceSummary: {},
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      imageUrl: "",
    };
  },
  methods: {
    ViewInvoice(id) {
      let route = this.$router.resolve({
        name: "billing-detail",
        params: { id },
      });
      window.open(route.href, "_blank");
    },
    showImage(url) {
      if (url != null) {
        this.imageUrl = url;
        this.$store.commit("modalView_State", true);
      }
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("customer/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.data = res.data.data;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response && error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    customerCollection() {
      // this.this.pagination.current_page = "";
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("customer-collection-summary/" + this.$route.params.id, {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.services = res.data.data.all.data;
              this.serviceSummary = res.data.data.collect_summary;
              this.statusSummary = res.data.data.status_summary;
              this.pagination = res.data.data.details.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response && error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    customerInvoice() {
      // this.this.pagination.current_page = "";
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("customer-invoice-summary/" + this.$route.params.id, {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.invoices = res.data.data.details.data;
              this.invoiceSummary = res.data.data.invoice_summary;
              this.pagination = res.data.data.details.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response && error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    backPrevios() {
      this.$router.go(-1);
    },
    getCenter() {
      if (this.data.lat) {
        const latlng = {
          lat: parseFloat(this.data.lat),
          lng: parseFloat(this.data.lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(data) {
      return {
        lat: parseFloat(data.lat),
        lng: parseFloat(data.lng),
      };
    },
    editPage(id) {
      this.$router.push({
        name: "EditCustomer",
        params: { id },
      });
    },
  },
  watch: {
    tab: function() {
      if (this.tab === "tab-1") {
        this.fetchData();
      } else if (this.tab === "tab-2") {
        this.customerCollection();
      } else if (this.tab === "tab-3") {
        this.customerInvoice();
      }
    },
  },
  created() {
    this.fetchData();
    if (this.$route.query.tab) this.tab = this.$route.query.tab;
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
