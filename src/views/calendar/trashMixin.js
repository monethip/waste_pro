import { GetOldValueOnInput } from '@/Helpers/GetValue';

export default {
  name: 'Customer',
  // props: ["calendars", "pagination"],
  data() {
    return {
      loading: false,
      calendarId: '',
      // Pagination
      calendars: [],
      allCalendars: [],
      successes: [],
      offset: 12,
      pagination: {},
      per_page: 15,
      search: '',
      oldVal: '',
      summary: {},
      countPause: {},
      statuses: [],
      plan_monthId: this.$route.params.id,
      headers: [
        { text: 'ລຳດັບຄວາມສຳຄັນ', value: 'priority' },
        { text: 'ຊື່ລູກຄ້າ', value: 'customer' },
        { text: 'ເລີ່ມວັນທີ', value: 'route_plan_detail.customer.start_month' },

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
        { text: '', value: 'actions', sortable: false },
      ],
      allCalendarHeaders: [
        { text: 'ລຳດັບຄວາມສຳຄັນ', value: 'priority' },
        { text: 'ຊື່ລູກຄ້າ', value: 'customer' },
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`plan-calendar/${this.$route.params.id}/detail`, {
          params: {
            statuses: this.statuses,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.calendars = [],
              this.calendars = res.data.data.data;
              this.summary = res.data.data.summary;
              this.countPause = res.data.count_pause;
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response.data.message,
          });
        });
    },
    fetchAllData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`plan-calendar/${this.$route.params.id}/detail`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.allCalendars = res.data.data.data;
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response.data.message,
          });
        });
    },
    statusColor(value) {
      if (value == 'pending') return 'info';
      if (value == 'success') return 'success';
      return 'error';
    },
    getUnit(value) {
      if (value == 'bag' || value == 'chartered' || value == '32km' || value == 'infect') return 'ຖົງ';
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
};
