<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          @click="createPage()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
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
              v-model="start_date"
              label="ເລີ່ມວັນທີ"
              readonly
              outlined
              v-bind="attrs"
              dense
              clearable
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
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_date"
              label="ຫາວັນທີ"
              readonly
              outlined
              v-bind="attrs"
              dense
              clearable
              v-on="on"
            />
          </template>
          <v-date-picker v-model="end_date" />
        </v-menu>
      </v-col>

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
      <v-col>
        <v-autocomplete
          v-model="selectedVillage"
          outlined
          dense
          :items="villages"
          item-text="name"
          item-value="id"
          label="ບ້ານ"
          multiple
          clearable
        />
      </v-col>
      <v-col>
        <v-select
          v-model="selectedStatus"
          outlined
          dense
          :items="status"
          item-text="name"
          item-value="name"
          label="ສະຖານະ"
          multiple
          clearable
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-select
          v-model="selectedCustomerStatus"
          outlined
          dense
          :items="customerStatus"
          item-text="name"
          item-value="value"
          label="ສະຖານະແຜນ"
          multiple
          clearable
        />
      </v-col>
      <v-col>
        <v-select
          v-model="selectedCanCollect"
          outlined
          dense
          :items="can_collects"
          item-text="name"
          item-value="value"
          label="ເກັບເລີຍໄດ້ບໍ່"
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
          clearable
        />
      </v-col>

      <v-col>
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
        <v-card-title>
          ຂໍ້ມູນຫົວໜ່ວຍທຸລະກິດ ({{ pagination.total }})
          <v-divider
            class="mx-4"
            vertical
          />
          <v-spacer />
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="customers"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.media="{ item }">
              <v-avatar
                v-for="(img, index) in item.media"
                :key="index"
                size="36px"
              >
                <img
                  v-if="img.url"
                  :src="img.url"
                >
              </v-avatar>
            </template>
            <template v-slot:item.village_detail="{ item }">
              <div
                v-for="(data, index) in item.village_details"
                :key="index"
              >
                <div>{{ data.name }}</div>
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

            <template v-slot:item.cost_by="{ item }">
              <div>{{ costBy(item.cost_by) }}</div>
            </template>
            <template v-slot:item.price="{ item }">
              <div v-if="item.cost_by !== 'bag'">
                {{ Intl.NumberFormat().format(item.fix_cost) }}
              </div>
              <div v-if="item.cost_by == 'bag'">
                <div
                  v-if="item.current_bag_price"
                >
                  {{ Intl.NumberFormat().format(item.current_bag_price.price) }}
                </div>
              </div>
            </template>

            <template v-slot:item.expect_trash="{ item }">
              <v-chip
                v-if="item.expect_trash"
                outlined
                color="green"
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
                outlined
                :color="getTrashColor(item, getTrash(item.cost_by, item.last_month_info))"
              >
                {{
                  Intl.NumberFormat().format(getTrash(item.cost_by, item.current_month_info)) }}
                {{ getCustomerUnitFunc(item.cost_by) }}
              </v-chip>
              <div v-else>
                -
              </div>
            </template>

            <template v-slot:item.last_month_info="{ item }">
              <v-chip
                v-if="item.last_month_info"
                dark
                :color="getTrashColor(item, getTrash(item.cost_by, item.last_month_info))"
              >
                {{
                  Intl.NumberFormat().format(getTrash(item.cost_by, item.last_month_info)) }}
                {{ getCustomerUnitFunc(item.cost_by) }}
              </v-chip>
              <div v-else>
                -
              </div>
            </template>

            <template v-slot:item.can_collect="{ item }">
              <v-chip :color="statusColor(item.can_collect)">
                {{ CanCollect(item.can_collect) }}
              </v-chip>
            </template>

            <template v-slot:item.actions="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    medium
                    class="mr-2"
                    v-on="on"
                  >
                    mdi-dots-vertical
                  </v-icon>
                </template>
                <v-list>
                  <v-list-item
                    link
                    @click="addUser(item)"
                  >
                    <v-list-item-title>
                      <v-icon
                        small
                        class="mr-2"
                      >
                        mdi-plus
                      </v-icon>ເພີ່ມຜູ້ປະສານງານ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    link
                    @click="viewPage(item.id)"
                  >
                    <v-list-item-title>
                      <v-icon
                        small
                        class="mr-2"
                      >
                        mdi-eye
                      </v-icon>ລາຍລະອຽດ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    link
                    @click="editPage(item.id)"
                  >
                    <v-list-item-title>
                      <v-icon
                        small
                        class="mr-2"
                      >
                        mdi-pencil
                      </v-icon>ແກ້ໄຂ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    link
                    @click="deleteItem(item.id)"
                  >
                    <v-list-item-title>
                      <v-icon small>
                        mdi-delete
                      </v-icon>ລຶບ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-data-table>
          <br>
          <template>
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
              @paginate="fetchData()"
            />
          </template>
        </v-card-text>
      </v-card>
    </div>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ເພີ່ມຜູ້ປະສານງານ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.name"
                      label="Name *"
                      required
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.surname"
                      label="Surname *"
                      required
                    />
                    <p class="errors">
                      {{ server_errors.surname }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="user.phone"
                      label="ເບີໂທ *"
                      required
                      type="number"
                      class="input-number"
                    />
                    <p class="errors">
                      {{ server_errors.phone }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
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
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="AddItem()"
              >
                Save
              </v-btn>
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
            @click="deleteItemConfirm"
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
import { getCustomerUnit } from '@/Helpers/Customer';
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: 'Company',
      start_date: '',
      end_date: '',
      start_menu: false,
      end_menu: false,

      customers: [],
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // Add Package
      // start_date: "",
      // start_menu: false,
      // allowedDates: (val) => new Date(val).getDate() === 1,
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
          id: 2,
          name: 'inactive',
        },
        {
          id: 3,
          name: 'trial',
        },
      ],
      selectedCanCollect: '',
      can_collects: [
        {
          id: 1,
          name: 'ເກັບໄດ້',
          value: '1',
        },
        {
          id: 2,
          name: 'ເກັບບໍໄດ້',
          value: '0',
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
      selectedCost: [],
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
      user: {},
      item: {},
      favorite_dates: [],
      selectedFavoriteDate: [],
      headers: [
        { text: 'ລະຫັດ', value: 'customer_id', width: '150px' },
        { text: 'ບໍລິສັດ', value: 'company_name', width: '150px' },
        { text: 'ເບີໂທ', value: 'user.phone', width: '100px' },
        {
          text: 'ບ້ານ',
          value: 'village.name',
          sortable: false,
          width: '150px',
        },
        {
          text: 'ເມືອງ',
          value: 'district.name',
          sortable: false,
          width: '100px',
        },
        {
          text: 'ລາຍລະອຽດທີ່ຢູ່',
          value: 'village_detail',
          sortable: false,
          width: '200px',
        },
        { text: 'ປະເພດບໍລິການ', value: 'cost_by_la', width: '200px' },
        { text: 'ມູນຄ່າສັນຍາ', value: 'price', width: '150px' },
        { text: 'ຂີ້ເຫຍື້ອຄາດໝາຍ', value: 'expect_trash', width: '200px' },
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
        {
          text: 'ສະຖານະເກັບ',
          value: 'can_collect',
          align: 'center',
          width: '100px',
        },
        { text: 'ມື້ບໍລິການ', value: 'favorite_dates', width: '120px' },
        {
          text: 'ໝາຍເຫດ',
          value: 'collect_description',
          sortable: false,
          width: '200px',
        },
        { text: '', value: 'media' },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  watch: {
    selectedFavoriteDate() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    start_date() {
      this.server_errors.start_month = '';
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
      this.fetchVillage();
      this.fetchData();
    },
    selectedStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedPackage() {
      this.server_errors.package_id = '';
    },

    selectedCustomerStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCost() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCanCollect() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    'user.name': function () {
      this.server_errors.name = '';
    },
    'user.surname': function () {
      this.server_errors.name = '';
    },
    'user.phone': function () {
      this.server_errors.phone = '';
    },
  },
  created() {
    this.fetchData();
    this.fetchAddress();
    this.fetchFavorite();
  },
  methods: {
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
        .get('company', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { date_from: this.start_date },
            { date_end: this.end_date },
            { statuses: this.selectedStatus },
            { without: this.selectedCustomerStatus },
            { villages: this.selectedVillage },
            { can_collect: this.selectedCanCollect },
            { district_id: this.selectedDistrict },
            { cost_by: this.selectedCost },
            { favorite_dates: this.selectedFavoriteDate },
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
        .catch(() => {});
    },

    fetchVillage() {
      this.$axios
        .get(`info/district/${this.selectedDistrict}/village`)
        .then((res) => {
          if (res.data.code == 200) {
            this.villages = res.data.data;
          }
        })
        .catch(() => {});
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
        .delete(`company/${this.customerId}`)
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
          this.fetchData();
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
    addUser(data) {
      this.item = data;
      this.$store.commit('modalAdd_State', true);
    },
    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`company/${this.item.id}/coordinator`, this.user)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeAddModal();
                this.user = {};
                this.fetchData();
                this.reset();
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
            this.fetchData();
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },

    createPage() {
      this.$router.push({
        name: 'CreateCompany',
      });
    },
    editPage(id) {
      this.$router.push({
        name: 'EditCompany',
        params: { id },
      });
    },
    viewPage(id) {
      const route = this.$router.resolve({
        name: 'ViewCompanyDetail',
        params: { id },
      });

      window.open(route.href);
    },
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == '1') return 'success';
      if (value == '0') return 'error';
      return 'info';
    },
    CanCollect(value) {
      if (value == '1') return 'ເກັບໄດ້';
      if (value == '0') return 'ເກັບບໍ່ໄດ້';
    },

    costBy(value) {
      if (value == 'container') return 'ຄອນເທັນເນີ';
      if (value == 'fix_cost') return 'ທຸລະກິດເປັນຖ້ຽວ';
      if (value == 'chartered') return 'ມອບເໝົາ';
      if (value == 'bag') return 'ບໍລິມາດ';
      if (value == 'infect') return 'ຂີ້ເຫຍື້ອຕິດເຊື້ອ';
      if (value == '32km') return 'ຫຼັກ32';
      return value;
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
@import "../../../public/scss/main.scss";
</style>
