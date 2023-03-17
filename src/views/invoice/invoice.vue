<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <p>ເລືອກເດືອນທີ່ອອກໃບບິນເກັບເງິນ</p>
      </v-col>
      <!--
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
              v-model="date"
              label="ເດືອນ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            @input="fetchData()"
            type="month"
          ></v-date-picker>
        </v-menu>
      </v-col>
      -->
      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="calendars"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.total="{ item }">
              {{ Intl.NumberFormat().format(item.total) }}
            </template>
            <template v-slot:item.plan="{ item }">
              <v-icon
                color="success"
                small
                class="mr-2"
                @click="createInvoice(item.plan_month.id)"
              >
                mdi-eye
              </v-icon>
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
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Invoice',
  title() {
    return `Vientiane Waste Co-Dev|Invoice`;
  },
  data() {
    return {
      tab: null,
      calendars: [],
      loading: false,
      calendarId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // Add Package
      date: new Date().toISOString().substr(0, 7),
      start_menu: false,
      packages: [],
      selectedPackage: '',
      server_errors: {},
      // Filter
      districts: [],
      selectedDistrict: '',
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      plan: {},
      calendarEdit: {},

      headers: [
        { text: 'ຊື່', value: 'plan_month.name' },
        // { text: "ວັນທີ", value: "plan_month.month" },
        {
          text: 'ລວມເງິນ',
          value: 'total',
          align: 'center',
          sortable: false,
        },
        {
          text: 'ຈຳນວນບິນ',
          value: 'count_customer',
          align: 'center',
          sortable: false,
        },
        {
          text: 'ລາຍລະອຽດ',
          value: 'plan',
          sortable: false,
          align: 'center',
        },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  watch: {
    search(value) {
      if (value == '') {
        this.fetchData();
      }
    },
    'plan.name': function () {
      this.server_errors.name = '';
    },
    start_date() {
      this.server_errors.month = '';
    },
    'calendarEdit.name': function () {
      this.server_errors.name = '';
    },
    'calendarEdit.month': function () {
      this.server_errors.month = '';
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('invoice-summary', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.calendars = res.data.data.data;
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
    Search() {
      GetOldValueOnInput(this);
    },
    createInvoice(id) {
      this.$router.push({
        name: 'InvoiceTab',
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
