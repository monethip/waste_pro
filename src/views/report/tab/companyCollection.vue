<template>
  <v-container>
    <div>
      <v-row
        v-for="(sum, index) in summary"
        :key="index"
        class="mb-n6 mt-n6"
      >
        <v-col>
          <h3>ປີ {{ sum.year }}</h3>
        </v-col>
        <v-col>
          <p>
            ລວມ Container
            <span class="success--text">{{
              sum.company.container_amount
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລວມເກັບເປັນ Container
            <span class="success--text">{{
              sum.company.number_of_times_to_collect_by_container
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລວມເກັບຕາມລາຄາ
            <span class="success--text">{{
              sum.company.number_of_times_to_collect_by_fix_cost
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ຍົກເລີກ
            <span class="success--text">{{ sum.company.reject_count }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລໍຖ້າເກັບ
            <span class="success--text">{{ sum.company.pending_count }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ລວມ
            <span class="success--text">{{
              sum.company.wait_to_confirm_count
            }}</span>
          </p>
        </v-col>
        <v-col>
          <p>
            ສຳເລັດທັງໝົດ
            <span class="success--text">{{ sum.company.success_count }}</span>
          </p>
        </v-col>
      </v-row>
      <v-data-table
        :headers="headers"
        :items="collections"
        :search="search"
        :disable-pagination="true"
        hide-default-footer
      >
        <template v-slot:item.status="{ item }">
          <v-chip
            label
            :color="statusColor(item.status)"
          >
            {{
              item.status
            }}
          </v-chip>
        </template>
        <template v-slot:item.collection_type="{ item }">
          <div>{{ costBy(item.collection_type) }}</div>
        </template>
        <!--Role -->
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
// import collection from "@views/report/collection";
export default {
  // mixins: [collection],
  name: 'CompanyCollection',
  // props: ["tab"],
  props: ['data'],
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  data() {
    return {
      customers: [],
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // invoices: [],
      // summary: {},
      headers: [
        { text: 'ວັນທີ', value: 'date', sortable: false },
        { text: 'ບໍລິສັດ', value: 'company_name' },
        { text: 'ປະເພດບໍລະການ', value: 'collection_type' },
        {
          text: 'Container',
          value: 'container',
          sortable: false,
          align: 'center',
        },
        { text: 'ສະຖານທີ່', value: 'name', sortable: false },
        { text: 'ສະຖານະ', value: 'status', sortable: false },
        // { text: "", value: "actions", sortable: false },
      ],
    };
  },
  watch: {
    tab() {
      if (this.tab == 'tab-2') {
        // this.fetchData();
      }
    },
  },
  created() {
    this.pagination = [];
  },
  methods: {
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == 'success') return 'success';
      if (value == 'pending') return 'primary';
      return 'info';
    },
    costBy(value) {
      if (value == 'container') return 'ຄອນເທັນເນີ';
      if (value == 'fix_cost') return 'ທຸລະກິດເປັນຖ້ຽວ';
      if (value == 'chartered') return 'ມອບເໝົາ';
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
