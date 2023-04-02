<template>
  <v-container>
    <v-row>
      <v-col>
        <v-breadcrumbs
          large
          class="pa-0"
        >
          ຂີ້ເຫື້ຍອທີ່ຍັກເລີກ
        </v-breadcrumbs>
      </v-col>
      <!--      <v-col>-->
      <!--        <v-text-field-->
      <!--          outlined-->
      <!--          dense-->
      <!--          clearable-->
      <!--          prepend-inner-icon="mdi-magnify"-->
      <!--          label="Search"-->
      <!--          type="text"-->
      <!--          v-model="search"-->
      <!--          @keyup.enter="Search()"-->
      <!--        >-->
      <!--        </v-text-field>-->
      <!--      </v-col>-->
    </v-row>
    <div>
      <v-data-table
        v-if="pending"
        :headers="headers"
        :items="pending"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <template v-slot:item.created_at="{ item }">
          <div>
            {{ moment(item.created_at).format("DD-MM-YY hh:mm ") }}
          </div>
        </template>
        <template v-slot:item.date="{ item }">
          <div>
            {{ moment(item.date).format("DD-MM-YY hh:mm:ss") }}
          </div>
        </template>
        <template v-slot:item.customer="{ item }">
          <div v-if="(item.route_plan_detail.customer.customer_type = 'company')">
            {{ item.route_plan_detail.customer.company_name }}
          </div>
          <div>
            {{ item.route_plan_detail.customer.name }}
            {{ item.route_plan_detail.customer.surname }}
          </div>
        </template>
        <!--
            <template v-slot:item.start_month="{ item }">
              {{ item.route_plan_detail.customer.start_month }}
            </template>
 -->
        <template v-slot:item.status="{ item }">
          <v-chip
            color="orange"
            label
          >
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:item.amount="{ item }">
          <div v-if="item.collection_type == 'bag' || item.collection_type == 'chartered' || item.collection_type == '32km' || item.collection_type == 'infect'">
            <v-chip color="primary">
              {{ item.bag }}
            </v-chip>
            <span> {{ getUnit(item.collection_type) }}</span>
          </div>
          <div v-else-if="item.collection_type == 'fix_cost'">
            <span> {{ getUnit(item.collection_type) }}</span>
          </div>
          <div v-else>
            <v-chip color="success">
              {{ item.container }}
            </v-chip>
            <span> {{ getUnit(item.collection_type) }}</span>
          </div>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="viewPage(item.plan_calendar_id, item.id)"
          >
            mdi-eye
          </v-icon>
        </template>
      </v-data-table><br>
      <template>
        <Pagination
          v-if="pagination.total_pages > 1"
          :pagination="pagination"
          :offset="offset"
          @paginate="fetchData()"
        />
      </template>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from '@/Helpers/GetValue';

export default {
  name: 'Trash',
  data() {
    return {
      pending: [],
      loading: false,
      calendarId: '',
      //   //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      statuses: ['canceled'],

      headers: [
        { text: 'ລຳດັບ', value: 'route_plan_detail.priority' },
        { text: 'ລູກຄ້າ', value: 'customer' },
        // { text: "ເລີ່ມວັນທີ", value: "route_plan_detail.customer.start_month" },

        {
          text: 'ຈຳນວນຂີ້ເຫື້ຍອ',
          value: 'amount',
          align: 'center',
          sortable: false,
        },
        {
          text: 'ສະຖານະ',
          value: 'status',
          align: 'center',
          sortable: false,
        },
        {
          text: 'ວັນທີສ້າງ',
          value: 'created_at',
          align: 'center',
          sortable: false,
        },
        {
          text: 'ວັນທີເກັບ',
          value: 'collected_at',
          align: 'center',
          sortable: false,
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
  },
  created() {
    this.fetchData();
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`plan-calendar/${this.$route.params.id}/detail`, {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            statuses: this.statuses,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.pending = res.data.data.data;
              this.summary = res.data.data.summary;
              this.pagination = res.data.data.pagination;
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            this.toast.msg = error.message;
          }
        });
    },
    statusColor(value) {
      console.log(value);
      if (value == 'pending') return 'info';
      if (value == 'success') return 'success';
      if (value == 'reject') return 'error';
      if (value == 'cancel') return 'orange';
      return 'error';
    },
    getUnit(value) {
      if (value == 'bag' || value == '32km' || value == 'infect' || value == 'chartered') return 'ຖົງ';
      if (value == 'fix_cost') return 'ມອບເໝົາ';
      if (value == 'container') return 'ຄອນເທັນເນີ';
      return '';
    },
    Search() {
      GetOldValueOnInput(this);
    },
    viewPage(plan_calendar, id) {
      this.$router.push({
        name: 'TrashDetail',
        params: { plan_calendar, id },
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
