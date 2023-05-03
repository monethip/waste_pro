<template>
  <v-container>
    <v-breadcrumbs
      class="mt-n4"
      large
    >
      <v-btn
        class="text-primary"
        text
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>
      ແກ້ໄຂແຜນເສັ້ນທາງ
      <v-spacer />
      <span class="mr-4">
        <v-icon color="red">mdi-map-marker</v-icon>ຍັງບໍທັນຢູ່ໃນແຜນ
      </span>
      <span>
        <v-icon style="color: #49a3da">mdi-map-marker</v-icon>ຢູ່ໃນແຜນແລ້ວ
      </span>
    </v-breadcrumbs>

    <v-row>
      <v-col
        class="mb-4"
        cols="12"
      >
        <GmapMap
          v-if="customers"
          :center="getCenter().lat > 0 || getCenter().lat < 0 ? getCenter() : { lat: 0, lng: 0 }"
          :disable-default-u-i="true"
          :zoom="14"
          style="width: 100%; height: 400px"
        >
          <gmap-info-window
            :conent="infoContent"
            :opened="infoOpened"
            :options="infoOptions"
            :position="infoPosition"
            @closeclick="infoOpened = false"
          >
            {{ infoContent }}
          </gmap-info-window>
          <GmapMarker
            v-for="(m, index) in customers"
            :key="index"
            :animation="2"
            :clickable="true"
            :draggable="false"
            :icon="getSiteIcon(m)"
            :label="(index + 1).toString()"
            :position="getMarkers(m)"
            @click="toggleInfo(m, index)"
          />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col cols="2">
        <v-btn
          :disabled="loading"
          :loading="loading"
          class="btn-primary"
          @click="updateRoutePlan()"
        >
          ແກ້ໄຂ
        </v-btn>
      </v-col>
      <v-col cols="2">
        <h4 v-if="customers">
          ລວມ {{ customers.length }}
        </h4>
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="plan.name"
          dense
          label="Name"
          outlined
          required
        />
        <p class="errors">
          {{ server_errors.name }}
        </p>
      </v-col>

      <v-col cols="2">
        <v-text-field
          v-model="search"
          clearable
          dense
          label="ຄົ້ນຫາ"
          outlined
          prepend-inner-icon="mdi-magnify"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <!--          <div class="mb-2" justify-end>-->
          <!--            <v-btn text color="primary" @click="addCustomer" justify-end-->
          <!--              ><v-icon medium> mdi-plus </v-icon></v-btn-->
          <!--            >-->
          <!--          </div>-->
          <v-row>
            <v-col>
              <h4>ລູກຄ້າທີ່ມີຢູ່</h4>
              <main class="page page--table">
                <v-data-table
                  v-model="selectedRows"
                  :disable-pagination="true"
                  :headers="headers"
                  :items="customers"
                  :search="search"
                  class="page__table"
                  hide-default-footer
                  item-key="id"
                >
                  <template v-slot:body="props">
                    <draggable
                      :list="props.items"
                      tag="tbody"
                      @change="afterAdd"
                    >
                      <tr
                        v-for="(user, index) in props.items"
                        :key="index"
                      >
                        <td>
                          <v-icon
                            class="page__grab-icon"
                            small
                          >
                            mdi-arrow-all
                          </v-icon>
                        </td>
                        <!-- <td>{{ index + 1 }}</td> -->
                        <td>{{ user.priority }}</td>
                        <td>{{ user.id }}</td>
                        <td>
                          <div v-if="(user.customer_type = 'home')">
                            {{ user.customer.name }}
                          </div>
                          <div
                            v-if="(user.customer_type = 'company')"
                          >
                            {{ user.customer.company_name }}
                          </div>
                        </td>
                        <!-- <td>{{ user.address_detail }}</td>
                        <td>{{ user.village.name }}</td>
                        <td>{{ user.district.name }}</td>-->
                        <td>
                          <!--
                            <v-icon small class="mr-2" @click="viewPage(user.id)">
                              mdi-eye
                            </v-icon>
                          -->
                          <!--                      <v-icon small @click="deleteItem(index)">-->
                          <!--                        mdi-delete-->
                          <!--                      </v-icon>-->
                        </td>
                      </tr>
                    </draggable>
                  </template>
                </v-data-table>
              </main>
            </v-col>
            <v-divider vertical />
            <v-col>
              <v-row class="mb-n8">
                <v-col>
                  <div class="mb-2">
                    <v-btn
                      color="primary"
                      text
                      @click="addCustomer"
                    >
                      <v-icon medium>
                        mdi-plus
                      </v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-spacer />
                <v-col>
                  <h4>ລູກຄ້າທີ່ເພີ່ມເຂົ້າໃໝ່</h4>
                </v-col>
              </v-row>
              <main class="page page--table">
                <v-data-table
                  v-model="selectedRows"
                  :disable-pagination="true"
                  :headers="newHeaders"
                  :items="newCustomer"
                  :search="search"
                  class="page__table"
                  hide-default-footer
                  item-key="id"
                >
                  <template v-slot:body="props">
                    <draggable
                      :list="props.items"
                      tag="tbody"
                      @change="orderCustomer"
                    >
                      <tr
                        v-for="(user, index) in props.items"
                        :key="index"
                      >
                        <td>
                          <v-icon
                            class="page__grab-icon"
                            small
                          >
                            mdi-arrow-all
                          </v-icon>
                        </td>
                        <!-- <td>{{ index + 1 }}</td> -->
                        <!--                       <td>{{ user.priority }}</td>-->
                        <td>{{ user.id }}</td>
                        <td>
                          <div>
                            <div>{{ user.name }} {{ user.surname }}</div>
                          </div>
                        </td>
                        <td>{{ user.district.name }}</td>
                        <td>
                          <v-icon
                            small
                            @click="deleteNewCustomer(index)"
                          >
                            mdi-delete
                          </v-icon>
                        </td>
                      </tr>
                    </draggable>
                  </template>
                </v-data-table>
              </main>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </div>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Add customer to route plan</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row class="mb-n6">
                <v-col cols>
                  <v-select
                    v-model="selectedFavoriteDate"
                    :items="favorite_dates"
                    dense
                    item-text="name"
                    item-value="name"
                    label="ມື້ບໍລິການ"
                    multiple
                    outlined
                  />
                </v-col>
                <v-col>
                  <v-autocomplete
                    v-model="selectedCustomerStatus"
                    :items="customerStatus"
                    clearable
                    dense
                    item-text="name"
                    item-value="value"
                    label="ສະຖານະລູກຄ້າ"
                    multiple
                    outlined
                  />
                </v-col>
                <v-col>
                  <v-autocomplete
                    v-model="selectedDistrict"
                    :items="districts"
                    dense
                    item-text="name"
                    item-value="id"
                    label="ເມືອງ"
                    outlined
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="selectedVillage"
                    :items="villages"
                    chips
                    color="blue-grey lighten-2"
                    filled
                    item-text="name"
                    item-value="id"
                    label="ເລືອກບ້ານ"
                    multiple
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        :input-value="data.selected"
                        close
                        v-bind="data.attrs"
                        @click="data.select"
                        @click:close="remove(data.item)"
                      >
                        {{ data.item.name }}
                      </v-chip>
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-data-table
                v-model="selectedRows"
                :disable-pagination="true"
                :headers="addheaders"
                :items="addCustomers"
                class="page__table"
                hide-default-footer
                item-key="id"
              >
                <template v-slot:top>
                  <v-text-field
                    v-model="search"
                    class="mx-4"
                    label="Search"
                    @keyup.enter="fetchAddCustomer"
                  />
                </template>
                <template v-slot:body="props">
                  <draggable
                    :list="props.items"
                    tag="tbody"
                    @change="afterAdd"
                  >
                    <tr
                      v-for="(user, index) in props.items"
                      :key="index"
                    >
                      <td>{{ index + 1 }}</td>
                      <td>{{ user.id }}</td>
                      <td>{{ user.name }} {{ user.surname }}</td>
                      <td>{{ user.user.phone }}</td>
                      <!-- <td>{{ user.address_detail }}</td> -->
                      <td>{{ user.village.name }}</td>
                      <td>{{ user.district.name }}</td>
                      <td>
                        <v-icon
                          small
                          @click="addItem(addCustomers, user)"
                        >
                          mdi-plus
                        </v-icon>
                      </td>
                    </tr>
                  </draggable>
                </template>
              </v-data-table>

              <!--              <br />-->
              <!--              <template>-->
              <!--                <Pagination-->
              <!--                  v-if="pagination.total_pages > 1"-->
              <!--                  :pagination="pagination"-->
              <!--                  :offset="offset"-->
              <!--                  @paginate="fetchAddCustomer()"-->
              <!--                ></Pagination>-->
              <!--              </template>-->
            </v-container>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="closeAddModal()"
              >
                Close
              </v-btn>
              <!--
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="saveRoutePlan()"
              >
                Save
              </v-btn>
              -->
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="closeDelete"
          >
            Cancel
          </v-btn>
          <v-btn
            :disabled="loading"
            :loading="loading"
            color="blue darken-1"
            text
            @click="deleteNewCustomerConfirm"
          >
            OK
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import draggable from 'vuedraggable';
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Customer',
  // props: ["selectedData", "villages", "items"],
  components: {
    draggable,
  },
  data() {
    return {
      customers: [],
      addCustomers: [],
      customersId: [],
      countcutomer: 0,
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      selectedVillage: [],
      selectedCustomer: [],
      exclude_customers: [],
      selectedRows: [],
      newCustomer: [],

      // Filter
      districts: [],
      selectedDistrict: '',
      villages: [],
      customer: {},
      customerIndex: '',
      name: '',
      server_errors: {},
      plan: {},

      favorite_dates: [],
      selectedFavoriteDate: [],
      headers: [
        { text: '', value: '' },
        { text: 'ລຳດັບ', value: '' },
        { text: 'Id', value: 'id' },
        { text: 'ລູກຄ້າ', value: '' },
        // { text: "Phone", value: "user.phone", sortable: false },
        // { text: "ລາຍລະອຽດທີ່ຢູ່", value: "address_detail" },
        // { text: "ບ້ານ", value: "village.name", sortable: true },
        // { text: "ເມືອງ", value: "district.name", sortable: true },
        { text: '', value: 'actions', sortable: false },
      ],
      newHeaders: [
        { text: '', value: '' },
        { text: 'Id', value: 'id' },
        { text: 'ລູກຄ້າ', value: '' },
        { text: 'ທີ່ຢູ່', value: 'address_detail' },
        { text: '', value: 'actions', sortable: false },
      ],

      addheaders: [
        { text: '#', value: '' },
        { text: 'Id', value: 'id' },
        { text: 'ລູກຄ້າ', value: '' },
        { text: 'Phone', value: 'user.phone', sortable: false },
        { text: 'ຂີ້ເຫຍື້ອຄາດໝາຍ', value: 'expect_trash' },
        { text: 'ວັນທີ່ສະດວກເກັບ', value: 'favorite_dates' },
        { text: 'ວັນທີ່ເພີ່ມເຂົ້າ', value: 'created_at' },
        { text: 'ທີ່ຢູ່', value: 'address_detail' },
        // { text: "ບ້ານ", value: "village.name", sortable: true },
        // { text: "ເມືອງ", value: "district.name", sortable: true },
        { text: '', value: 'actions', sortable: false },
      ],
      // Map
      selectedCustomerStatus: [],
      customerStatus: [
        {
          id: 1,
          value: 'calendar',
          name: 'ຍັງບໍ່ມີແຜນເດີນລົດ',
        },
        {
          id: 2,
          value: 'route_plan',
          name: 'ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ',
        },
      ],
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  watch: {
    selectedFavoriteDate() {
      this.pagination.current_page = '';
      this.fetchAddCustomer();
    },
    selectedCustomerStatus() {
      this.pagination.current_page = '';
      this.fetchAddCustomer();
    },
    search(value) {
      if (value == '') {
        this.fetchData();
      }
    },

    selectedVillage() {
      this.fetchAddCustomer();
    },
    selectedDistrict() {
      this.fetchAddCustomer();
      this.fetchVillage();
    },
  },
  created() {
    this.fetchFavorite();
    this.fetchData();
    this.fetchDetail();
  },
  methods: {
    afterAdd(evt) {
      const { oldIndex } = evt.moved;
      const { newIndex } = evt.moved;
      const tmpOrder = this.customers[oldIndex];
      this.customers.splice(oldIndex, 1);
      this.customers.splice(newIndex, 0, tmpOrder);
    },
    orderCustomer(evt) {
      const { oldIndex } = evt.moved;
      const { newIndex } = evt.moved;
      const tmpOrder = this.newCustomer[oldIndex];
      this.newCustomer.splice(oldIndex, 1);
      this.newCustomer.splice(newIndex, 0, tmpOrder);
    },
    backPrevios() {
      this.$router.go(-1);
    },
    addCustomer() {
      this.$store.commit('modalAdd_State', true);
      this.fetchAddCustomer();
      this.fetchAddress();
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`route-plan/${this.$route.params.id}/route-plan-detail`, {
          params: {
            // page: this.pagination.current_page,
            // per_page: this.per_page,
            // // filter: this.search,
            // villages: this.selectedVillage,
            without_month_info: true,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.customers = res.data.data;
              console.log(this.customers);
              // this.pagination = res.data.data.pagination;
              this.getCenter();
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    fetchDetail() {
      this.$axios
        .get(`route-plan/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.plan = res.data.data;
              console.log(this.plan);
            }, 100);
          }
        })
        .catch(() => {
        });
    },

    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    // deleteItem(index) {
    //   this.customerIndex = index;
    //   // if (this.selectedRows.length) {
    //   this.$store.commit("modalDelete_State", true);
    //   // }
    // },
    //
    // deleteItemConfirm() {
    //   this.selectedCustomer = [];
    //   this.$store.commit('Loading_State', true);;
    //   this.customers.splice(this.customerIndex, 1);
    //   // for (var i = 0; i < this.selectedRows.length; i++) {
    //   //   const index = this.customers.indexOf(this.selectedRows[i]);
    //   //   this.selectedCustomer.push(this.customers[index]);
    //   //   this.customers.splice(index, 1);
    //   // }
    //   this.selectedCustomer.filter((item) => {
    //     this.exclude_customers.push(item.id);
    //   });
    //   this.$store.commit("Toast_State", {
    //     value: true,
    //     color: "success",
    //     msg: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
    //   });
    //   this.selectedRows = [];
    //   // this.fetchData();
    //   this.$store.commit('Loading_State', false);;
    //   this.$store.commit("modalDelete_State", false);
    // },

    deleteNewCustomer(index) {
      this.customerIndex = index;
      this.$store.commit('modalDelete_State', true);
    },

    deleteNewCustomerConfirm() {
      this.$store.commit('Loading_State', true);
      this.newCustomer.splice(this.customerIndex, 1);
      this.$store.commit('Toast_State', {
        value: true,
        color: 'success',
        msg: 'ລຶບຂໍ້ມູນສຳເລັດແລ້ວ',
      });
      // this.fetchData();
      this.$store.commit('Loading_State', false);
      this.$store.commit('modalDelete_State', false);
    },
    addItem(array, data) {
      const newId = data.id;
      let found = false;
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === newId) {
          array[i] = data;
          found = true;
        }
      }
      if (found) this.newCustomer.push(data);
      this.addCustomers.splice(data.index, 1);
    },
    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },
    updateRoutePlan() {
      const oldId = this.customers.map((item) => item.customer_id);
      const newId = this.newCustomer.map((item) => item.id);
      const allId = oldId.concat(newId);
      const formData = new FormData();
      allId.map((item) => {
        formData.append('customers[]', item);
      });
      formData.append('name', this.plan.name);
      formData.append('_method', 'PUT');

      if (this.customers.length) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`update-route-plan/${this.$route.params.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            if (res.status == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
              }, 300);
              this.$router.push({
                name: 'ViewPlan',
                params: {
                  id: this.$route.params.id,
                },
              });
            }
          })
          .catch((error) => {
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response
                ? error.response.data.message
                : 'Something went wrong',
            });
            this.$store.commit('Loading_State', false);
          });
      } else {
        this.$store.commit('Toast_State', {
          value: true,
          color: 'error',
          msg: 'ກາລຸນາເລືອກລູກຄ້າກ່ອນ',
        });
      }
    },

    viewPage(id) {
      this.$router.push({
        name: 'ViewClient',
        params: { id },
      });
      // window.open(route.href, "_blank");
    },

    fetchAddCustomer() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('customer', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { without: this.selectedCustomerStatus },
            { villages: this.selectedVillage },
            { district_id: this.selectedDistrict },
            { favorite_dates: this.selectedFavoriteDate },
            { without: this.selectedCustomerStatus },
            { filter: this.search },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.addCustomers = res.data.data.data;
              // this.selectedAllCustomer = res.data.data;
              this.pagination = res.data.data.pagination;
              // this.getCenter();
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    fetchAddress() {
      this.$axios
        .get('info/address', { params: { filter: 'ນະຄອນຫລວງວຽງຈັນ' } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.address = res.data.data;
              this.address.map((item) => {
                this.districts = item.districts;
              });
            }, 300);
          }
        })
        .catch(() => {
        });
    },

    fetchVillage() {
      this.$axios
        .get(`info/district/${this.selectedDistrict}/village`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.villages = res.data.data;
            }, 300);
          }
        })
        .catch(() => {
        });
    },

    Search() {
      GetOldValueOnInput(this);
    },

    // Google map
    getCenter() {
      if (this.customers.length) {
        if (parseFloat(this.customers[0].customer.lat) == null) {
          return this.latlng;
        }
        const latlng = {
          lat: parseFloat(this.customers[0].customer.lat),
          lng: parseFloat(this.customers[0].customer.lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getSiteIcon(status) {
      const pin1 = {
        url: require('@coms/../../src/assets/pin1.svg'),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
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
      };
      const pin2 = {
        url: require('@coms/../../src/assets/pin2.svg'),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        size: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
        color: '#000',
        scaledSize: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
      };

      try {
        switch (status.route_plan_details_count) {
          case 0:
            return pin1;
          case 1:
            return pin2;
        }
      } catch (e) {
        return pin1;
      }
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.customer.lat),
          lng: parseFloat(m.customer.lng),
        };
      }
    },
    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent = `${m.name} (${m.house_number}) `;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
    fetchFavorite() {
      this.$axios
        .get('favorite-date')
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.favorite_dates = res.data.data;
            }, 100);
          }
        })
        .catch(() => {
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

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
