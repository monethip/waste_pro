<template>
  <v-container>
    <v-row>
      <v-col>
        <p class="text-caption">
          ແພກເກຈ
        </p>
        <v-select
          v-model="filteredPackage"
          :items="packageList"
          dense
          item-text="name"
          item-value="id"
          label="ເລືອກແພັກເກດ"
          outlined
        />
      </v-col>
      <v-col>
        <p class="text-caption">
          ວັນທີເພີ່ມຂໍ້ມູນ
        </p>
        <v-row name="date">
          <v-col>
            <v-menu
              v-model="start_menu"
              :close-on-content-click="true"
              :nudge-right="40"
              min-width="auto"
              offset-y
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="start_date"
                  clearable
                  dense
                  label="ເລີ່ມວັນທີ"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="start_date" />
            </v-menu>
          </v-col>
          <v-col>
            <v-menu
              v-model="end_menu"
              :close-on-content-click="true"
              :nudge-right="40"
              min-width="auto"
              offset-y
              transition="scale-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="end_date"
                  clearable
                  dense
                  label="ຫາວັນທີ"
                  outlined
                  readonly
                  v-bind="attrs"
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="end_date" />
            </v-menu>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-autocomplete
          v-model="selectedDistrict"
          :items="districts"
          clearable
          dense
          item-text="name"
          item-value="id"
          label="ເມືອງ"
          outlined
        />
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedVillage"
          :items="villages"
          clearable
          dense
          item-text="name"
          item-value="id"
          label="ບ້ານ"
          multiple
          outlined
        />
      </v-col>
      <v-col>
        <v-select
          v-model="selectedStatus"
          :items="status"
          clearable
          dense
          item-text="name"
          item-value="name"
          label="ສະຖານະ"
          multiple
          outlined
        />
      </v-col>

      <v-col>
        <v-select
          v-model="selectedCustomerStatus"
          :items="customerStatus"
          clearable
          dense
          item-text="name"
          item-value="value"
          label="ສະຖານະແຜນ"
          multiple
          outlined
        />
      </v-col>
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
        <v-text-field
          v-model="search"
          clearable
          dense
          label="Search"
          outlined
          prepend-inner-icon="mdi-magnify"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="selectedItem in selected"
        :key="selectedItem.id"
      >
        <v-chip
          class="ma-2"
          close
          color="orange"
          label
          outlined
          style="width: 100%;"
          @click:close="removeSelectedItem(selectedItem.id)"
        >
          {{ selectedItem.customer_id }}: {{ selectedItem.full_name }}
        </v-chip>
      </v-col>
    </v-row>
    <v-row v-if="selected.length">
      <v-col>
        <v-dialog
          v-model="del_dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="red"
              dark
              v-bind="attrs"
              v-on="on"
            >
              ລຶບລູກຄ້າທີ່ເລືອກ
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              ຢືນຢັນການລືບ
            </v-card-title>

            <v-card-text>
              ທ່ານຢືນຢັນທີ່ຈະລຶບລູກຄ້າເຫຼົ່ານີ້ບໍ່
              <v-row>
                <v-col
                  v-for="selectedItem in selected"
                  :key="selectedItem.id"
                >
                  <v-chip
                    class="ma-2"
                    color="orange"
                    label
                    outlined
                    style="width: 100%;"
                  >
                    {{ selectedItem.customer_id }}: {{ selectedItem.full_name }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                text
                :loading="loading"
                :disabled="loading"
                @click="deleteCustomer"
              >
                ຢືນຢັນ
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <v-card>
            <v-tabs
              v-model="tab"
              background-color="red red darken-4"
              dark
              slider-color="indigo lighten-5"
            >
              <v-tab href="#tab-1">
                <v-icon>mdi-account</v-icon>
                ລູກຄ້າ ({{ pagination.total }})
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
              <v-tab-item value="tab-1">
                <v-card flat>
                  <v-card-text>
                    <v-data-table
                      v-model="selected"
                      :disable-pagination="true"
                      :headers="headers"
                      :items="customers"
                      :search="search"
                      show-select
                      hide-default-footer
                    >
                      <template v-slot:item.media="{ item }">
                        <v-avatar
                          v-for="(img, index) in item.media"
                          :key="index"
                          class="mr-1"
                          size="36px"
                        >
                          <img
                            v-if="img.url"
                            :src="img.url"
                          >
                        </v-avatar>
                      </template>
                      <!--Role -->
                      <template v-slot:item.status="{ item }">
                        <v-chip
                          :color="statusColor(item.status)"
                          label
                          @click="switchStatus(item.id)"
                        >
                          {{ item.status }}
                        </v-chip>
                      </template>
                      <template v-slot:item.can_collect="{ item }">
                        <v-chip :color="Can_Collect(item.can_collect)">
                          {{
                            CanCollect(item.can_collect)
                          }}
                        </v-chip>
                      </template>
                      <template v-slot:item.village_detail="{ item }">
                        <div
                          v-for="(data, index) in item.village_details"
                          :key="index"
                        >
                          <div>{{ data.name }}</div>
                        </div>
                      </template>
                      <template v-slot:item.price="{ item }">
                        <div v-if="item.package">
                          <div>
                            {{ Intl.NumberFormat().format(item.package.price) }}
                          </div>
                        </div>
                      </template>

                      <template v-slot:item.expect_trash_package="{ item }">
                        <v-chip
                          v-if="item.package && item.package.package_size"
                          color="green"
                          dark
                        >
                          {{
                            Intl.NumberFormat().format(
                              item.package.package_size.bag
                            )
                          }}
                          {{ getCustomerUnitFunc(item.cost_by) }}
                        </v-chip>
                        <div v-else>
                          -
                        </div>
                      </template>

                      <template v-slot:item.expect_trash="{ item }">
                        <v-chip
                          v-if="item.expect_trash"
                          color="green"
                          outlined
                        >
                          {{ Intl.NumberFormat().format(item.expect_trash) }}
                          {{ getCustomerUnitFunc(item.cost_by) }}
                        </v-chip>
                        <div v-else>
                          -
                        </div>
                      </template>

                      <template v-slot:item.current_month_info="{ item }">
                        <v-chip
                          v-if="item.current_month_info"
                          :color="
                            getTrashColor(
                              item,
                              getTrash(item.cost_by, item.last_month_info)
                            )
                          "
                          outlined
                        >
                          {{
                            Intl.NumberFormat().format(
                              getTrash(item.cost_by, item.current_month_info)
                            )
                          }}
                          {{ getCustomerUnitFunc(item.cost_by) }}
                        </v-chip>
                        <div v-else>
                          -
                        </div>
                      </template>

                      <template v-slot:item.last_month_info="{ item }">
                        <v-chip
                          v-if="item.last_month_info"
                          :color="
                            getTrashColor(
                              item,
                              getTrash(item.cost_by, item.last_month_info)
                            )
                          "
                          dark
                        >
                          {{
                            Intl.NumberFormat().format(
                              getTrash(item.cost_by, item.last_month_info)
                            )
                          }}
                          {{ getCustomerUnitFunc(item.cost_by) }}
                        </v-chip>
                        <div v-else>
                          -
                        </div>
                      </template>

                      <template v-slot:item.favorite_dates="{ item }">
                        <div
                          v-for="(data, index) in item.favorite_dates"
                          :key="index"
                        >
                          <div>{{ data.name }}</div>
                        </div>
                      </template>

                      <template v-slot:item.actions="{ item }">
                        <v-list>
                          <v-list-item
                            link
                            @click="viewPage(item.id)"
                          >
                            <v-list-item-title>
                              <v-icon
                                class="mr-2"
                                small
                              >
                                mdi-eye
                              </v-icon>
                            </v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </template>
                    </v-data-table>
                    <br>
                    <template>
                      <Pagination
                        v-if="pagination.total_pages > 1"
                        :offset="offset"
                        :pagination="pagination"
                        @paginate="fetchData()"
                      />
                    </template>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import { getCustomerUnit, concatPackage } from '@/Helpers/Customer';
import moment from 'moment';
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev| Customer`;
  },
  data() {
    return {
      tab: null,
      del_dialog: false,
      customers: [],
      filteredPackage: '',
      selected: [],
      loading: false,
      importFile: false,
      file: null,
      errors: [],
      successes: [],
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // Add Package
      package_date: moment()
        .add('1', 'months')
        .format('YYYY-MM'),
      min_date: moment()
        .add('1', 'months')
        .startOf('month')
        .format('YYYY-MM-DD'),
      package_menu: false,
      change_package_menu: false,
      change_package: {},

      start_date: '',
      start_menu: false,
      end_date: '',
      end_menu: false,
      packages: [],
      selectedPackage: '',
      start_collect: false,
      server_errors: {},
      // Filter
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      status: [
        {
          id: 1,
          name: 'active',
        },
        {
          id: 1,
          name: 'inactive',
        },
        {
          id: 1,
          name: 'trial',
        },
      ],
      selectedCustomerStatus: [],
      customerStatus: [
        {
          id: 1,
          value: 'no_calendar',
          name: 'ມີແຜນເດີນລົດເກັບ',
        },
        {
          id: 2,
          value: 'calendar',
          name: 'ຍັງບໍ່ມີແຜນເດີນລົດເກັບ',
        },
        {
          id: 3,
          value: 'no_route_plan',
          name: 'ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ',
        },
        {
          id: 4,
          value: 'route_plan',
          name: 'ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ',
        },
      ],
      favorite_dates: [],
      selectedFavoriteDate: [],

      headers: [
        { text: 'ລະຫັດ', value: 'customer_id', width: '90px' },
        { text: 'ຊື່', value: 'name', width: '150px' },
        { text: 'ນາມສະກຸນ', value: 'surname', width: '150px' },
        {
          text: 'Phone', value: 'user.phone', width: '200px', sortable: false,
        },
        {
          text: 'ບ້ານ',
          value: 'village.name',
          width: '120px',
          sortable: false,
        },
        {
          text: 'ເມືອງ',
          value: 'district.name',
          width: '120px',
          sortable: false,
        },
        {
          text: 'ລາຍລະອຽດທີ່ຢູ່',
          value: 'village_detail',
          width: '200px',
          sortable: false,
        },
        {
          text: 'ມູນຄ່າສັນຍາ',
          value: 'price',
          width: '200px',
          sortable: false,
        },
        { text: 'ຂີ້ເຫຍື້ອຄາດໝາຍ', value: 'expect_trash_package', width: '200px' },
        {
          text: 'ຂີ້ເຫຍື້ອປັດຈຸບັນ',
          value: 'current_month_info',
          width: '200px',
        },
        {
          text: 'ຂີ້ເຫຍື້ອເດືອນກ່ອນ',
          value: 'last_month_info',
          width: '200px',
        },
        { text: 'ສະຖານະແພັກເກດ', value: 'status', width: '200px' },
        { text: 'ມື້ບໍລິການ', value: 'favorite_dates', width: '100px' },
        {
          text: 'ສະຖານະເກັບ',
          value: 'can_collect',
          align: 'center',
          width: '200px',
        },
        { text: 'Profile', value: 'media' },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  computed: {
    packageList() {
      return concatPackage(this.packages);
    },
  },
  watch: {
    filteredPackage() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedFavoriteDate() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    start_date() {
      this.pagination.current_page = '';
      if (this.end_date != '') {
        if (this.start_date > this.end_date) {
          this.start_date = '';
        }
      }
      this.fetchData();
    },
    end_date() {
      this.pagination.current_page = '';
      if (this.end_date < this.start_date) {
        this.end_date = '';
      }
      this.fetchData();
    },
    search(value) {
      this.pagination.current_page = '';
      if (value == '') {
        this.fetchData();
      }
    },
    selectedVillage() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedDistrict() {
      this.pagination.current_page = '';
      if (this.selectedDistrict) {
        this.fetchData();
      }
      this.fetchVillage();
    },
    selectedStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedPackage() {
      this.server_errors.package_id = '';
    },
    package_date() {
      this.server_errors.start_month = '';
    },
    selectedCustomerStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchAddress();
    this.fetchFavorite();
    this.fetchPackage();
  },
  methods: {
    removeSelectedItem(id) {
      const index = this.selected.findIndex((item) => item.id === id);

      if (index !== -1) {
        this.selected.splice(index, 1);
      }
    },
    getTrashColor(item, amount) {
      if (!item.expect_trash || item.expect_trash > amount) return 'blue';

      if (item.expect_trash == amount) return 'green';

      return 'red';
    },
    getCustomerUnitFunc(costBy) {
      return getCustomerUnit(costBy);
    },
    getTrash(costBy, info) {
      if (!info) return 0;
      switch (costBy) {
        case 'bag':
        case 'chartered':
        case 'infect':
        case '32km':
          return info.bag_sum;
        case 'container':
          return info.container_sum;
        case 'fix_cost':
          return info.count_time;
        default:
          return costBy;
      }
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('customer', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { date_from: this.start_date },
            { date_end: this.end_date },
            { without: this.selectedCustomerStatus },
            { villages: this.selectedVillage },
            { statuses: this.selectedStatus },
            { district_id: this.selectedDistrict },
            { favorite_dates: this.selectedFavoriteDate },
            { package_id: this.filteredPackage },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.customers = res.data.data.data;
            this.pagination = res.data.data.pagination;
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
    deleteCustomer() {
      const customerIds = [];
      for (const item of this.selected) {
        customerIds.push(item.id);
      }
      const body = {
        customer_ids: customerIds,
      };

      this.$store.commit('Loading_State', true);
      this.del_dialog = false;
      this.$axios
        .post(`admin-delete-customer`, body)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.data = {};
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.selected = [];
              this.fetchData();
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, customer] of Object.entries(obj)) {
              this.server_errors[key] = customer[0];
            }
          }
          this.$store.commit('Loading_State', false);
        });
    },
    fetchAddress() {
      this.$axios
        .get('info/address', { params: { filter: 'ນະຄອນຫລວງວຽງຈັນ' } })
        .then((res) => {
          if (res.data.code == 200) {
            this.address = res.data.data;
            this.address.map((item) => {
              this.districts = item.districts;
            });
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
            this.villages = res.data.data;
          }
        })
        .catch(() => {
        });
    },

    fetchPackage() {
      this.$axios
        .get('package')
        .then((res) => {
          if (res.data.code == 200) {
            this.packages = res.data.data;
          }
        })
        .catch(() => {
        });
    },

    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    deleteItem(id) {
      this.customerId = id;
      this.$store.commit('modalDelete_State', true);
    },

    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`customer/${this.customerId}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('modalDelete_State', false);
              this.fetchData();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
          this.$store.commit('modalDelete_State', false);
        });
    },
    closeAddModal() {
      this.selectedPackage = '';
      this.customerId = '';
      this.start_date = '';
      this.$store.commit('modalAdd_State', false);
    },

    openChangePackage(data) {
      this.change_package = data;
      this.fetchPackage();
      this.$store.commit('modalEdit_State', true);
      // this.customerId = id;
    },
    closeChangeModal() {
      this.selectedPackage = '';
      this.customerId = '';
      this.start_date = '';
      this.$store.commit('modalEdit_State', false);
    },

    viewPage(id) {
      const router = this.$router.resolve({
        name: 'ViewClient',
        params: { id },
      });

      window.open(router.href);
    },
    Search() {
      GetOldValueOnInput(this);
    },
    Can_Collect(value) {
      if (value == '1') return 'success';
      if (value == '0') return 'error';
      return 'info';
    },
    CanCollect(value) {
      if (value == '1') return 'ເກັບໄດ້';
      if (value == '0') return 'ເກັບບໍ່ໄດ້';
    },
    statusColor(value) {
      if (value == 'active') return 'primary';
      if (value == 'inactive') return 'error';
      return 'info';
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
@import "../../../public/scss/main.scss";
</style>
