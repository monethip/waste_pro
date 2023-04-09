<template>
  <v-container>
    <v-breadcrumbs
      large
      class="pt-0"
    >
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>ລາຍລະອຽດ
      <router-link
        class="ml-4"
        :to="`/edit/company/${data.id}`"
      >
        ແກ້ໄຂ
      </router-link>
    </v-breadcrumbs>
    <v-card>
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
                      mdi-office-building
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-subtitle>ບໍລິສັດ</v-list-item-subtitle>
                    <v-list-item-title>
                      {{ data.name }}
                      {{ data.company_name }}
                    </v-list-item-title>
                  </v-list-item-content>

                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon
                      color="indigo"
                      class="mr-6"
                    >
                      mdi-phone
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                    <v-list-item-title v-if="data.user">
                      {{
                        data.user.phone
                      }}
                    </v-list-item-title>
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
                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                    <v-list-item-title v-if="data.user">
                      {{
                        data.user.email
                      }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset />
              </v-row>
              <v-row>
                <v-list-item
                  v-for="(coor, index) in data.company_coordinators"
                  :key="index"
                >
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-account-circle
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>ຜູ້ປະສານງານ</v-list-item-subtitle>
                    <v-list-item-title>
                      {{ coor.name }} {{ coor.surname }}
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon
                      color="indigo"
                      class="mr-6"
                    >
                      mdi-phone
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                    <v-list-item-title>{{ coor.phone }}</v-list-item-title>
                  </v-list-item-content>
                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon
                      color="indigo"
                      class="mr-6"
                    >
                      mdi-email
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>Email</v-list-item-subtitle>
                    <v-list-item-title>{{ coor.email }}</v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-content class="text-center">
                    <v-list-item-title>
                      <v-icon
                        small
                        class="mr-2"
                        @click="editItem(coor)"
                      >
                        mdi-pencil
                      </v-icon>
                      <v-icon
                        small
                        @click="deleteItem(coor)"
                      >
                        mdi-delete
                      </v-icon>
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-divider inset />
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="indigo">
                      mdi-calendar
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-subtitle>ວັນທີ່ເລີ່ມ</v-list-item-subtitle>
                    <v-list-item-title>
                      {{
                        data.start_month
                      }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <span>
                        <v-chip
                          v-if="data.status == 'active'"
                          label
                          class="success"
                        >{{ data.status }}</v-chip>
                        <v-chip
                          v-else-if="data.status == 'inactive'"
                          label
                          class="error"
                        >{{ data.status }}</v-chip>
                        <v-chip
                          v-else
                          label
                          class="primary"
                        >
                          {{ data.status }}
                        </v-chip>
                      </span>
                    </v-list-item-subtitle>
                  </v-list-item-content>

                  <v-spacer />
                  <v-list-item-icon>
                    <v-icon
                      color="indigo"
                      class="mr-6"
                    >
                      mdi-package
                    </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-subtitle>ປະເພດບໍລິການ</v-list-item-subtitle>
                    <v-list-item-title
                      v-if="data.cost_by == 'fix_cost'"
                    >
                      ທຸລະກິດເປັນຖ້ຽວ
                    </v-list-item-title>
                    <v-list-item-title
                      v-if="data.cost_by == 'container'"
                    >
                      ຄອນເທັນເນີ
                    </v-list-item-title>
                    <v-list-item-title
                      v-if="data.cost_by == 'chartered'"
                    >
                      ມອບເໝົາ
                    </v-list-item-title>
                    <v-list-item-title
                      v-if="data.cost_by == '32km'"
                    >
                      ຫຼັກ32
                    </v-list-item-title>
                    <v-list-item-title
                      v-if="data.cost_by == 'infect'"
                    >
                      ຂີ້ເຫຍື້ອຕິດເຊື້ອ
                    </v-list-item-title>

                    <v-list-item-subtitle v-if="data.cost_by == 'fix_cost'">
                      {{ Intl.NumberFormat().format(data.fix_cost) }}
                    </v-list-item-subtitle>
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
                      {{ data.village.name }},
                      {{ data.district.name }}
                    </v-list-item-title>
                    <div
                      v-for="(detail, index) in data.village_details"
                      :key="index"
                    >
                      <v-list-item-subtitle>
                        {{
                          detail.name
                        }}
                      </v-list-item-subtitle>
                    </div>
                  </v-list-item-content>
                </v-list-item>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  class="mb-4"
                >
                  <GmapMap
                    :center="
                      getCenter().lat > 0 || getCenter().lat < 0
                        ? getCenter()
                        : { lat: 0, lng: 0 }
                    "
                    :zoom="16"
                    style="width: 100%; height: 450px"
                    :disable-default-u-i="true"
                  >
                    <GmapMarker
                      ref="markers"
                      :position="getMarkers(data)"
                      :draggable="false"
                      :icon="markerOptions"
                      :animation="2"
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
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Date
                      </th>
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
                      <th class="text-left">
                        ຈຳນວນ
                      </th>
                      <th class="text-left">
                        Status
                      </th>
                      <th class="text-left">
                        ເວລາລົງເກັບ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(item, index) in services"
                      :key="index"
                    >
                      <td>
                        <router-link
                          :to="{
                            name: 'PlanCalendarDetail',
                            params: {
                              id: item.plan_calendar_id,
                              planMonthId: item.plan_calendar.plan_month_id,
                            },
                          }"
                        >
                          {{
                            moment(item.date).format("DD-MM-YYYY")
                          }}
                        </router-link>
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
                      <td class="text-left">
                        {{ data.cost_by_la }}
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
              <br>
              <Pagination
                v-if="pagination.total_pages > 1"
                :pagination="pagination"
                :offset="offset"
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
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="month"
                          type="month"
                          @change="customerInvoice"
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
                          <td class="text-left">
                            {{ data.cost_by_la }}
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
                  :pagination="pagination"
                  :offset="offset"
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
            width="auto"
            height="auto"
            dark
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
      month: "",
      provinces: [],
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: '',
      village_details: [],
      selectedVillageDetail: [],
      tab: 'tab-1',

      address: [],
      errormsg: '',
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
  },
  created() {
    this.fetchData();
    if (this.$route.query.tab) this.tab = this.$route.query.tab;
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
  methods: {
    getBgColorFn(status) {
      return getBgColor(status);
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
          this.fetchData();
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
