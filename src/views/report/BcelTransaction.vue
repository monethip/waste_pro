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
              label="ວັນທີ"
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
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ເບີໂທ, ເລກອ້າງອີງ..."
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>
    <v-row class="my-n4">
      <v-col>
        <p class="text">
          ລວມ {{ pagination.total }} ຄົນ
        </p>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="bcelTransactions"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
            >
              <template v-slot:item.transaction_ref="{ item }">
                <p style="color: red">
                  {{ item.transaction_ref }}
                </p>
              </template>

              <template v-slot:item.billing.billing_display_id="{ item }">
                <a
                  v-if="!billing.deleted_at"
                  href="#"
                  @click="openRoute(item.billing.id)"
                >{{ item.billing.billing_display_id }}</a>
                <div v-else>
                  {{ item.billing.billing_display_id }}
                </div>
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
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Customer',
  title() {
    return `Vientiane Waste Co-Dev|Report Driver`;
  },
  data() {
    return {
      start_date: '',
      end_date: '',
      start_menu: false,
      end_menu: false,

      bcelTransactions: [],
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
      selectedVillage: [],
      selectedStatus: '',
      status: [
        {
          id: 1,
          name: 'active',
        },
        {
          id: 2,
          name: 'inactive',
        },
      ],

      headers: [
        { text: 'ເລກອ້າງອີງ', value: 'transaction_ref' },
        { text: 'ເບີໂທ', value: 'phone_number' },
        { text: 'ວັນທີ statement', value: 'date_statement' },
        { text: 'ຈຳນວນເງິນ', value: 'amount' },
        { text: 'ສະກຸນເງິນ', value: 'currency' },
        { text: 'ວັນທີສ້າງ', value: 'created_at' },
        { text: 'ວັນທີອັພເດດ', value: 'updated_at' },
        { text: 'ໄອດີບິນ', value: 'billing.billing_display_id' },
        { text: 'ຫົວບິນ', value: 'billing.content' },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  watch: {
    search(value) {
      this.pagination.current_page = '';
      if (value == '') {
        this.fetchData();
      }
    },
    selectedStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    start_date() {
      this.pagination.current_page = '';
      if (this.end_date !== '' && this.start_date !== '') {
        if (this.start_date > this.end_date) {
          this.start_date = '';
        }
      }
      this.fetchData();
    },
    end_date() {
      this.pagination.current_page = '';
      if (this.end_date !== '' && this.start_date !== '') {
        if (this.end_date < this.start_date) {
          this.end_date = '';
        }
      }
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    openRoute(id) {
      const option = {
        name: 'billing-detail',
        params: { id },
      };
      const routeData = this.$router.resolve(option);
      window.open(routeData.href, '_blank');
    },
    fetchData(download = null) {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('bank-transaction', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { date_statement: this.start_date },
            { download },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            if (!download) {
              this.bcelTransactions = res.data.data.data;
              this.pagination = res.data.data.pagination;
              this.start_menu = false;
              this.end_menu = false;
            } else {
              window.open(res.data.data.download_link);
            }
          }
        })
        .catch(() => {
          this.$store.commit('Loading_State', false);
          this.start_menu = false;
          this.end_menu = false;
        });
    },
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == 'active') return 'primary';
      if (value == 'inactive') return 'error';
      return 'info';
    },

    exportData() {
      this.fetchData('excel');
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
