<template>
  <v-container>
    <v-breadcrumbs
      large
      class="mt-n4"
    >
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>ແກ້ໄຂແຜນເສັ້ນທາງ
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
        cols="12"
        class="mb-4"
      >
        <GmapMap
          v-if="customers"
          :center="getCenter().lat > 0 || getCenter().lat < 0 ? getCenter() : { lat: 0, lng: 0 }"
          :zoom="14"
          style="width: 100%; height: 400px"
          :disable-default-u-i="true"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoPosition"
            :opened="infoOpened"
            :conent="infoContent"
            @closeclick="infoOpened = false"
          >
            {{ infoContent }}
          </gmap-info-window>
          <GmapMarker
            v-for="(m, index) in customers"
            :key="index"
            :position="getMarkers(m)"
            :draggable="false"
            :icon="getSiteIcon(m)"
            :animation="2"
            :clickable="true"
            :label="(index + 1).toString()"
            @click="toggleInfo(m, index)"
          />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col cols="2">
        <v-btn
          class="btn-primary"
          :loading="loading"
          :disabled="loading"
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
          label="Name"
          required
          outlined
          dense
        />
        <p class="errors">
          {{ server_errors.name }}
        </p>
      </v-col>

      <v-col cols="2">
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຄົ້ນຫາ"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <!--          <div class="mb-2">-->
          <!--            <v-btn text color="primary" @click="addCustomer"-->
          <!--              ><v-icon medium> mdi-plus </v-icon></v-btn-->
          <!--            >-->
          <!--          </div>-->
          <v-row>
            <v-col>
              <h4>ລູກຄ້າທີ່ມີຢູ່</h4>
              <main class="page page--table">
                <v-data-table
                  v-model="selectedRows"
                  :headers="headers"
                  :items="customers"
                  :search="search"
                  :disable-pagination="true"
                  hide-default-footer
                  item-key="id"
                  class="page__table"
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
                            small
                            class="page__grab-icon"
                          >
                            mdi-arrow-all
                          </v-icon>
                        </td>
                        <!-- <td>{{ index + 1 }}</td> -->
                        <td>{{ user.priority }}</td>
                        <td>{{ user.id }}</td>
                        <td>
                          <div>{{ user.customer.company_name }}</div>
                        </td>
                        <td
                          contenteditable
                          @input="event => onInputRound(event, user)"
                        >
                          {{ getRound(user) }}
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
                      text
                      color="primary"
                      @click="addCustomer"
                    >
                      <v-icon medium>
                        mdi-plus
                      </v-icon>ເພີ່ມລູກຄ້າ
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
                  :headers="newHeaders"
                  :items="newCustomer"
                  :search="search"
                  :disable-pagination="true"
                  hide-default-footer
                  item-key="id"
                  class="page__table"
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
                            small
                            class="page__grab-icon"
                          >
                            mdi-arrow-all
                          </v-icon>
                        </td>
                        <!-- <td>{{ index + 1 }}</td> -->
                        <!--                       <td>{{ user.priority }}</td>-->
                        <td>{{ user.id }}</td>
                        <td>
                          <div v-if="user">
                            <!--                           <div v-if="(user.customer_type = 'home')">-->
                            <!--                             {{ user.customer.name }}-->
                            <!--                           </div>-->
                            <!--                           <div v-if="(user.customer_type = 'company')">-->
                            <!--                             {{ user.customer.company_name }}-->
                            <!--                           </div>-->
                            <div>{{ user.company_name }}</div>
                          </div>
                        </td>
                        <td>{{ user.district.name }}</td>
                        <td>
                          <!--
                            <v-icon small class="mr-2" @click="viewPage(user.id)">
                              mdi-eye
                            </v-icon>
                          -->
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
                    outlined
                    dense
                    :items="favorite_dates"
                    item-text="name"
                    item-value="name"
                    label="ມື້ບໍລິການ"
                    multiple
                  />
                </v-col>
                <v-col>
                  <v-autocomplete
                    v-model="selectedCustomerStatus"
                    outlined
                    dense
                    :items="customerStatus"
                    item-text="name"
                    item-value="value"
                    label="ສະຖານະລູກຄ້າ"
                    multiple
                    clearable
                  />
                </v-col>
                <v-col>
                  <v-select
                    v-model="selectedCost"
                    outlined
                    dense
                    :items="costs"
                    item-text="name"
                    item-value="value"
                    label="ປະເພດບໍລິການ"
                    multiple
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-autocomplete
                    v-model="selectedDistrict"
                    outlined
                    dense
                    :items="districts"
                    item-text="name"
                    item-value="id"
                    label="ເມືອງ"
                    clearable
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-autocomplete
                    v-model="selectedVillage"
                    :items="villages"
                    item-text="name"
                    item-value="id"
                    label="ເລືອກບ້ານ"
                    filled
                    chips
                    color="blue-grey lighten-2"
                    multiple
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        close
                        @click="data.select"
                        @click:close="remove(data.item)"
                      >
                        {{ data.item.name }}
                      </v-chip>
                    </template>
                  </v-autocomplete>
                </v-col>
                <!--                <v-col>-->
                <!--                  <v-text-field-->
                <!--                      outlined-->
                <!--                      dense-->
                <!--                      clearable-->
                <!--                      prepend-inner-icon="mdi-magnify"-->
                <!--                      label="ຊື່ລູກຄ້າ"-->
                <!--                      type="text"-->
                <!--                      v-model="search"-->
                <!--                      @keyup.enter="Search()"-->
                <!--                  >-->
                <!--                  </v-text-field>-->
                <!--                </v-col>-->
              </v-row>

              <v-data-table
                v-model="selectedRows"
                :headers="addheaders"
                :items="addCustomers"
                :disable-pagination="true"
                hide-default-footer
                item-key="id"
                class="page__table"
              >
                <template v-slot:top>
                  <v-text-field
                    v-model="search"
                    label="Search"
                    class="mx-4"
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
                      <td>{{ user.company_name }}</td>
                      <td>{{ user.user ? user.user.phone : '' }}</td>
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

              <br>
              <template>
                <Pagination
                  v-if="pagination.total_pages > 1"
                  :pagination="pagination"
                  :offset="offset"
                  @paginate="fetchAddCustomer()"
                />
              </template>
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
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
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
      customerRounds: [],
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

      selectedCost: [],

      favorite_dates: [],
      selectedFavoriteDate: [],
      costs: [
        {
          id: 1,
          value: 'container',
          name: 'ຄອນເທັນເນີ',
        },
        {
          id: 2,
          value: 'fix_cost',
          name: 'ທຸລະກິດເປັນຖ້ຽວ',
        },
        {
          id: 3,
          value: 'chartered',
          name: 'ມອບເໝົາ',
        },
        {
          id: 4,
          value: 'bag',
          name: 'ບໍລິມາດ',
        },
        {
          id: 5,
          value: '32km',
          name: 'ຫຼັກ32',
        },
        {
          id: 6,
          value: 'infect',
          name: 'ຂີ້ເຫຍື້ອຕິດເຊື້ອ',
        },
      ],
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

      headers: [
        { text: '', value: '' },
        { text: 'ລຳດັບ', value: '' },
        { text: 'Id', value: 'id' },
        { text: 'ລູກຄ້າ', value: '' },
        { text: 'ຈຳນວນຮອບເລີ່ມຕົ້ນ', value: '' },
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
        { text: 'ລາຍລະອຽດການບໍລິການ', value: 'collect_description' },
        { text: '', value: 'actions', sortable: false },
      ],

      addheaders: [
        { text: '#', value: '' },
        { text: 'Id', value: 'id' },
        { text: 'ລູກຄ້າ', value: '' },
        { text: 'Phone', value: 'user.phone', sortable: false },
        { text: 'ທີ່ຢູ່', value: 'address_detail' },
        { text: 'ລາຍລະອຽດການບໍລິການ', value: 'collect_description' },
        // { text: "ບ້ານ", value: "village.name", sortable: true },
        // { text: "ເມືອງ", value: "district.name", sortable: true },
        { text: '', value: 'actions', sortable: false },
      ],
      // Map
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
      if (value != '') {
        this.fetchAddCustomer();
      }
    },

    selectedVillage() {
      this.fetchAddCustomer();
    },
    selectedDistrict() {
      this.fetchAddCustomer();
      this.fetchVillage();
    },
    selectedCost() {
      this.fetchAddCustomer();
    },
  },
  created() {
    this.fetchData();
    this.fetchDetail();
    this.fetchFavorite();
  },
  methods: {
    getRound(user) {
      const exists = this.customerRounds.find(
        (cus) => cus.customer_id == user.customer_id,
      );
      if (exists) return exists.round;
    },
    onInputRound(e, user) {
      console.log(1, this.customerRounds);
      if (e.target.innerText && !Number.isNaN(e.target.innerText)) {
        for (const [index, cus] of this.customerRounds.entries()) {
          if (cus.customer_id == user.customer_id) {
            this.customerRounds[index].round = e.target.innerText;
            break;
          }
        }
      }
      console.log(2, this.customerRounds);
    },
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
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.customers = res.data.data;
              const rounds = [];
              for (const cus of this.customers) {
                rounds.push({
                  customer_id: cus.customer_id,
                  round: cus.default_round,
                });
              }

              this.customerRounds = rounds;

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
            }, 100);
          }
        })
        .catch(() => {});
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
      // let formData = new FormData();
      // allId.map((item) => {
      //   formData.append("customers[]", item);
      // });
      // this.customerRounds.map((item) => {
      //   formData.append("customer_rounds[]", {
      //     customer_id: item.customer_id,
      //     round: item.round
      //   });
      // })
      // formData.append("name", this.plan.name);
      // formData.append("_method", "PUT");

      const body = {
        name: this.plan.name,
        customers: allId,
        customer_rounds: this.customerRounds,
      };

      if (this.customers.length) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .put(`update-route-plan/${this.$route.params.id}`, body)
          .then((res) => {
            if (res.status == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
              }, 300);
              this.$router.push({
                name: 'ViewCompanyRoutePlan',
                params: { id: res.data.data.id },
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
        .get('company', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { villages: this.selectedVillage },
            { district_id: this.selectedDistrict },
            { cost_by: this.selectedCost },
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
        .catch(() => {});
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
        .catch(() => {});
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
      console.log(m);
      this.infoPosition = this.getMarkers(m);
      this.infoContent = m.customer.company_name;
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
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";

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
