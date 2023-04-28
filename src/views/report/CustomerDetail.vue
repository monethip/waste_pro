<template>
  <v-container>
    <v-breadcrumbs
      class="pt-0"
      large
    >
      <v-btn
        class="text-primary"
        text
        @click="backPrevios()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      ລາຍລະອຽດ
      <router-link
        class="ml-4"
        :to="`/edit/customer/${data.id}`"
      >
        ແກ້ໄຂ
      </router-link>
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
          reverse-transition="fade-transition"
          transition="fade-transition"
          @click="showImage(item.url)"
        />
      </v-carousel>

      <v-card-text>
        <v-tabs
          v-model="tab"
          background-color="#49A3DA"
          dark
        >
          <v-tab href="#tab-1">
            ຂໍ້ມູນກ່ຽວກັບ
          </v-tab>
          <v-tab href="#tab-2">
            ຂໍ້ມູນການບໍລິການ
          </v-tab>
          <v-tab href="#tab-3">
            ຂໍ້ມູນການຊຳລະ
          </v-tab>
        </v-tabs>
        <!-- <hr /> -->
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <!--                    <HomeInvoice :tab="tab" />-->
            <v-container>
              <v-row>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-account-circle-outline
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>
                      {{ data.name }} {{ data.surname }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ data.customer_id }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon
                      class="mr-6"
                      color="indigo"
                    >
                      mdi-home
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      v-if="data.user"
                    >
                      ບ້ານເລກທີ {{ data.house_number }}
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="data.village">
                      {{ data.village.name }}, {{ data.district ? data.district.name : "" }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset />
              </v-row>
              <v-row>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-phone
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title
                      v-if="data.user"
                    >
                      {{ data.user.phone }}
                    </v-list-item-title>
                    <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon
                      class="mr-6"
                      color="indigo"
                    >
                      mdi-email
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      v-if="data.user"
                    >
                      {{ data.user.email }}
                    </v-list-item-title>
                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset />
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-map-marker
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-if="data.village">
                      {{ data.village.name }}
                    </v-list-item-title>
                    <div
                      v-for="(detail, index) in data.village_details"
                      :key="index"
                    >
                      <v-list-item-subtitle>
                        {{ detail.name }}
                      </v-list-item-subtitle>
                    </div>
                  </v-list-item-content>

                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon
                      class="mr-6"
                      color="indigo"
                    >
                      mdi-toolbox-outline
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content v-if="data.package">
                    <v-list-item-title>
                      {{ data.package.name }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ data.package.price }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <!--                  <v-list-item-action>-->
                  <!--                    <v-btn>ປ່ຽນແພກເກຈ</v-btn>-->
                  <!--                  </v-list-item-action>-->
                </v-list-item>
              </v-row>
              <v-row>
                <v-divider inset />
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-calendar-account
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-if="data.customer_activity">
                      {{ data.customer_activity.causer ? data.customer_activity.causer.full_name : "" }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ data.created_at }}
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon
                      class="mr-6"
                      color="indigo"
                    >
                      mdi-truck
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content v-if="data.package">
                    <v-list-item-title>
                      <v-chip
                        label
                        :color="statusColor(data.status)"
                      >
                        {{
                          data.status
                        }}
                      </v-chip>
                      <v-chip
                        class="ml-2"
                        :color="data.can_collect ? 'success' : 'error'"
                      >
                        {{
                          data.can_collect ? 'ເກັບໄດ້' : 'ເກັບບໍ່ໄດ້'
                        }}
                      </v-chip>
                    </v-list-item-title>
                  </v-list-item-content>
                  <!--                  <v-list-item-action>-->
                  <!--                    <v-btn>ປ່ຽນແພກເກຈ</v-btn>-->
                  <!--                  </v-list-item-action>-->
                </v-list-item>
              </v-row>

              <v-row>
                <v-col
                  class="mb-4"
                  cols="12"
                >
                  <GmapMap
                    :center="
                      getCenter().lat > 0 || getCenter().lat < 0
                        ? getCenter()
                        : { lat: 0, lng: 0 }
                    "
                    :disable-default-u-i="true"
                    :zoom="16"
                    style="width: 100%; height: 450px"
                  >
                    <GmapMarker
                      ref="markers"
                      :animation="2"
                      :draggable="false"
                      :icon="markerOptions"
                      :position="getMarkers(data)"
                      @click="latlng = data"
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
              <v-row>
                <v-col>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <td class="text-left">
                            Date
                          </td>
                          <td class="text-left">
                            ຊື່
                          </td>
                          <td class="text-left">
                            ໄອດີ
                          </td>
                          <td class="text-left">
                            ເບີໂທ
                          </td>
                          <td class="text-left">
                            ແພກເກຈ
                          </td>
                          <td class="text-left">
                            ຈຳນວນ
                          </td>
                          <td class="text-left">
                            Status
                          </td>
                          <td class="text-left">
                            ເວລາລົງເກັບ
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in services"
                          :key="index"
                        >
                          <td>
                            <a
                              href="#"
                              @click="openRoute(item)"
                            >{{ moment(item.date).format("DD-MM-YYYY") }}
                            </a>
                          </td>
                          <td class="text-left">
                            {{ data.full_name }}
                          </td>
                          <td class="text-left">
                            {{ data.customer_id }}
                          </td>
                          <td class="text-left">
                            {{ data.user.phone }}
                          </td>
                          <td
                            v-if="data.package"
                            class="text-left"
                          >
                            {{ data.package.price }} ({{
                              data.package.per_week
                            }}ຖົງ/ອາທິດ)
                          </td>
                          <td
                            v-else
                            class="text-left"
                          >
                            -
                          </td>
                          <td>
                            <div v-if="item.collection_type === 'bag' || item.collection_type === 'infect' || item.collection_type === '32km'">
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
                            <div v-else>
                              {{ item.collection_type }}
                            </div>
                          </td>

                          <td>
                            <v-chip
                              :color="statusColor(item.status)"
                              label
                            >
                              {{
                                item.status_la
                              }}
                            </v-chip>
                          </td>
                          <td>{{ item.collected_at }}</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
              <br>
              <Pagination
                v-if="pagination.total_pages > 1"
                :offset="offset"
                :pagination="pagination"
                @paginate="customerCollection()"
              />
            </v-container>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-3">
            <v-container>
              <v-row>
                <v-col>
                  <h3>ປະຫັວດການຊຳລະ</h3>
                  <v-row>
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
                            dense
                            clearable
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="month"
                          type="month"
                        />
                      </v-menu>
                    </v-col>
                  </v-row>
                  <RowSection :cards="allMonths" />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-simple-table>
                    <template v-slot:default>
                      <thead>
                        <tr>
                          <th class="text-left">
                            ວັນທີບິນ
                          </th>
                          <th class="text-left">
                            ໄອດີ
                          </th>
                          <th class="text-left">
                            ຫົວບິນ
                          </th>
                          <th class="text-left">
                            ຊື່ລູກຄ້າ
                          </th>
                          <th class="text-left">
                            ໄອດີ
                          </th>
                          <th class="text-left">
                            ແພັກເກຈ
                          </th>
                          <th class="text-left">
                            ສະຖານະ
                          </th>
                          <th class="text-left">
                            ເວລາຈ່າຍ
                          </th>
                          <th class="text-left">
                            Payment
                          </th>
                          <th class="text-left">
                            Subtotal
                          </th>
                          <th class="text-left">
                            ສ່ວນຫຼູດ
                          </th>
                          <th class="text-left">
                            Total
                          </th>
                          <th class="text-left">
                            ເບິ່ງລາຍລະອຽດ
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="item in invoices"
                          :key="item.id"
                        >
                          <td>{{ moment(item.date).format("DD-MM-YYYY") }}</td>
                          <td>{{ item.billing_display_id }}</td>
                          <td>{{ item.content }}</td>
                          <td class="text-left">
                            {{ data.full_name }}
                          </td>
                          <td class="text-left">
                            {{ data.customer_id }}
                          </td>
                          <td
                            v-if="data.package"
                            class="text-left"
                          >
                            {{ data.package.price }} ({{
                              data.package.per_week
                            }}ຖົງ/ອາທິດ)
                          </td>
                          <td
                            v-else
                            class="text-left"
                          >
                            -
                          </td>
                          <td>
                            <v-chip
                              :color="getBgColorFn(item.status)"
                              dark
                            >
                              {{ item.status_la }}
                            </v-chip>
                          </td>
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
                              <v-icon
                                class="mr-1"
                                small
                              >
                                mdi-eye
                              </v-icon>
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                    </template>
                  </v-simple-table>
                </v-col>
              </v-row>
              <br>
              <template>
                <Pagination
                  v-if="pagination.total_pages > 1"
                  :offset="offset"
                  :pagination="pagination"
                  @paginate="customerInvoice()"
                />
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
            dark
            height="auto"
            width="auto"
          />
        </v-card>
      </template>
    </ModalView>
  </v-container>
</template>

<script>
import { getBgColor } from '@/Helpers/BillingStatus';
import RowSection from '../../components/card/RowSection.vue';

export default {
  components: {
    RowSection,
  },
  data() {
    return {
      data: {},
      loading: false,
      server_errors: {},
      start_menu: false,
      month: this.$route.query.view_month ? this.$route.query.view_month : new Date().toISOString().substr(0, 7),
      provinces: [],
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: '',
      village_details: [],
      selectedVillageDetail: [],
      tab: this.$route.query.view_tab ? this.$route.query.view_tab : 'tab-1',

      address: [],
      preview_list: [],
      image_list: [],
      image: [],
      // Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      currentPlace: null,
      markerOptions: {
        // eslint-disable-next-line global-require
        url: require('@coms/../../src/assets/pin1.svg'),
        size: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
      },
      services: [],
      serviceSummary: {},
      statusSummary: {},
      invoices: [],
      invoiceSummary: {},
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      imageUrl: '',
    };
  },
  computed: {
    allMonths() {
      return [
        {
          status_la: 'ລໍຖ້າອະນຸມັດ',
          total: this.invoiceSummary.created_total,
          count_billing: null,
          bg_color: '#73b8fd',
        },
        {
          status_la: 'ອະນຸມັດແລ້ວ',
          total: this.invoiceSummary.approved_total,
          count_billing: null,
          bg_color: '#0080fc',
        },
        {
          status_la: 'ຈ່າຍແລ້ວ ລໍຖ້າກວດສອບ',
          total: this.invoiceSummary.to_confirm_payment_total,
          count_billing: null,
          bg_color: '#9c540d',
        },
        {
          status_la: 'ຈ່າຍແລ້ວ ກວດສອບສຳເລັດ',
          total: this.invoiceSummary.success_total,
          count_billing: null,
          bg_color: '#02a38a',
        },
      ];
    },
  },

  watch: {
    tab() {
      if (this.tab === 'tab-1') {
        this.fetchData();
      } else if (this.tab === 'tab-2') {
        this.customerCollection();
      } else if (this.tab === 'tab-3') {
        this.customerInvoice();
      }
    },
    month() {
      this.customerInvoice();
    },
  },
  created() {
    if (this.tab == 'tab-1') {
      this.fetchData();
    } else if (this.tab == 'tab-2') {
      this.customerCollection();
    } else if (this.tab == 'tab-3') {
      this.customerInvoice();
    }
    if (this.$route.query.tab) this.tab = this.$route.query.tab;

    // this.customerInvoice();
    // this.customerCollection();
  },
  methods: {
    statusColor(value) {
      if (value == 'active') return 'primary';
      if (value == 'inactive') return 'error';
      return 'info';
    },
    getBgColorFn(status) {
      return getBgColor(status);
    },
    openRoute(item) {
      const route = this.$router.resolve({
        name: 'PlanCalendarDetail',
        params: {
          id: item.plan_calendar_id,
          planMonthId: item.plan_calendar.plan_month_id,
        },
      });
      window.open(route.href);
    },
    statusColor(value) {
      console.log(value);
      if (value == 'pending') return 'info';
      if (value == 'success') return 'success';
      if (value == 'reject') return 'error';
      if (value == 'cancel') return 'orange';
      return 'error';
    },
    ViewInvoice(id) {
      const route = this.$router.resolve({
        name: 'billing-detail',
        params: { id },
      });
      window.open(route.href, '_blank');
    },
    showImage(url) {
      if (url != null) {
        this.imageUrl = url;
        this.$store.commit('modalView_State', true);
      }
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`customer/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.data = res.data.data;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status === 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    customerCollection() {
      // this.this.pagination.current_page = "";
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`customer-collection-summary/${this.$route.params.id}`, {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.services = res.data.data.all.data;
              this.serviceSummary = res.data.data.collect_summary;
              this.statusSummary = res.data.data.status_summary;
              this.pagination = res.data.data.details.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.fetchData();
          if (error.response && error.response.status === 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    customerInvoice() {
      // this.this.pagination.current_page = "";
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`customer-invoice-summary/${this.$route.params.id}`, {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            bill_month: this.month,
          },
        })
        .then((res) => {
          if (res.data.code === 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.invoices = res.data.data.details.data;
              this.invoiceSummary = res.data.data.invoice_summary;
              this.pagination = res.data.data.details.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.fetchData();
          if (error.response && error.response.status === 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
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
        name: 'EditCustomer',
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
