<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          :loading="loading"
          :disabled="loading"
          @click="exportData"
        >
          Export
        </v-btn>
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
          clearable
        />
      </v-col>
      <v-col>
        <v-menu
          v-model="start_menu"
          :close-on-content-click="false"
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
          <v-date-picker
            v-model="start_date"
          />
        </v-menu>
      </v-col>

      <v-col>
        <v-menu
          v-model="end_menu"
          :close-on-content-click="false"
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
          <v-date-picker
            v-model="end_date"
          />
        </v-menu>
      </v-col>

      <v-col>
        <v-autocomplete
          v-model="selectedCustomerType"
          outlined
          dense
          :items="customer_types"
          item-text="display"
          item-value="name"
          label="ປະເພດລູກຄ້າ"
          clearable
        />
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <!--         show home customer-->
          <v-simple-table
            v-if="selectedCustomerType == 'home'"
            fixed-header
          >
            <thead>
              <tr>
                <th class="text-left text-table-header">
                  ບ້ານ
                </th>
                <th class="text-left text-table-header">
                  ເມືອງ
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖົງ
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຖ້ຽວ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item,index) in customers"
                :key="index"
              >
                <td class="text-table-body">
                  {{ item.village_name }}
                </td>
                <td class="text-table-body">
                  {{ item.district_name }}
                </td>
                <td class="text-table-body">
                  {{ item.bags }}
                </td>
                <td class="text-table-body">
                  {{ item.amount }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>

          <!--            show company customer-->
          <v-simple-table
            v-if="selectedCustomerType == 'company'"
            fixed-header
            dense
          >
            <thead>
              <tr>
                <th class="text-left text-table-header">
                  ບ້ານ
                </th>
                <th class="text-left text-table-header">
                  ເມືອງ
                </th>
                <th class="text-left text-table-header">
                  ມອບເໝົາ
                </th>
                <th class="text-left text-table-header">
                  ຄອນເທັນເນີ
                </th>
                <th class="text-left text-table-header">
                  ທຸລະກິດເປັນຖ້ຽວ
                </th>
                <th class="text-left text-table-header">
                  ຕິດເຊື້ອ
                </th>
                <th class="text-left text-table-header">
                  ຫຼັກ32
                </th>
                <th class="text-left text-table-header">
                  ລວມຈຳນວນຄັ້ງ
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນຄອນເທັນເນີ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item,index) in customers"
                :key="index"
              >
                <td class="text-table-body">
                  {{ item.village_name }}
                </td>
                <td class="text-table-body">
                  {{ item.district_name }}
                </td>
                <td class="text-table-body">
                  {{ item.chartered_collect_time }}
                </td>
                <td class="text-table-body">
                  {{ item.container_collect_time }}
                </td>
                <td class="text-table-body">
                  {{ item.fix_cost_collect_time }}
                </td>
                <td class="text-table-body">
                  {{ item.infect_collect_time }}
                </td>
                <td class="text-table-body">
                  {{ item._32km_collect_time }}
                </td>
                <td class="text-table-body">
                  {{ item.total_collect_time }}
                </td>
                <td class="text-table-body">
                  {{ item.total_container }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>

          <!--            show company customer-->
          <v-simple-table
            v-if="selectedCustomerType == 'event'"
            fixed-header
            dense
          >
            <thead>
              <tr>
                <th class="text-left text-table-header">
                  ບ້ານ
                </th>
                <th class="text-left text-table-header">
                  ເມືອງ
                </th>
                <th class="text-left text-table-header">
                  ຈຳນວນ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item,index) in customers"
                :key="index"
              >
                <td class="text-table-body">
                  {{ item.village_name }}
                </td>
                <td class="text-table-body">
                  {{ item.district_name }}
                </td>
                <td class="text-table-body">
                  {{ item.amount }}
                </td>
              </tr>
            </tbody>
          </v-simple-table>

          <!--            <br/>-->
          <!--            <template>-->
          <!--              <Pagination-->
          <!--                  v-if="pagination.total_pages > 1"-->
          <!--                  :pagination="pagination"-->
          <!--                  :offset="offset"-->
          <!--                  @paginate="fetchData()"-->
          <!--              ></Pagination>-->
          <!--            </template>-->
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|Report Collection`;
  },
  data() {
    return {
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
      // Filter
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: '',
      selectedCustomerType: 'home',
      customer_types: [
        {
          name: 'home',
          display: 'ຄົວເຮືອນ',
        },
        {
          name: 'company',
          display: 'ຫົວໜ່ວຍທູລະກິດ',
        },
        {
          name: 'event',
          display: 'ຖ້ຽວພິເສດ',
        },
      ],
    };
  },
  watch: {
    selectedVillage() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedDistrict() {
      if (this.selectedDistrict) {
        // this.fetchData();
      }
      this.fetchVillage();
    },
    selectedCustomerType() {
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
  },
  created() {
    this.fetchAddress();
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('report-address-collection', {
          params: queryOption([
            // {page: this.pagination.current_page},
            // {per_page: this.per_page},
            { date_from: this.start_date },
            { date_to: this.end_date },
            { village_id: this.selectedVillage },
            { customer_type: this.selectedCustomerType },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.customers = res.data.data.data;
            console.log(this.customers);
          }
        })
        .catch(() => {
          this.$store.commit('Loading_State', false);
          this.start_menu = false;
          this.end_menu = false;
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

    exportData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(
          'report-address-collection/',
          {
            params: queryOption([
              // {date_from: this.start_date},
              // {date_end: this.end_date},
              { download: 'excel' },
              { customer_type: this.selectedCustomerType },
            ]),
          },
          { responseType: 'blob' },
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data.download_link != null) {
              window.open(res.data.data.download_link);
            }
            this.$store.commit('Loading_State', false);
          }
        })
        .catch(() => {
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
.text-table-header{
  font-size: 14px !important;
}
.text-table-body{
  font-size: 13px !important;
}
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
