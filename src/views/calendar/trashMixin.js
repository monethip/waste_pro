import { GetOldValueOnInput } from '@/Helpers/GetValue';
import moment from 'moment';

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
      // headers: [
      //   { text: 'ລຳດັບຄວາມສຳຄັນ', value: 'priority' },
      //   { text: 'ຊື່ລູກຄ້າ', value: 'customer' },
      //   { text: 'ເລີ່ມວັນທີ', value: 'route_plan_detail.customer.start_month' },

      //   {
      //     text: 'ຈຳນວນຂີ້ເຫື້ຍອ',
      //     value: 'amount',
      //     align: 'center',
      //     sortable: false,
      //   },
      //   {
      //     text: 'ສະຖານະ',
      //     value: 'status',
      //     align: 'center',
      //     sortable: false,
      //   },
      //   { text: '', value: 'actions', sortable: false },
      // ],
      // allCalendarHeaders: [
      //   { text: 'ລຳດັບຄວາມສຳຄັນ', value: 'priority' },
      //   { text: 'ຊື່ລູກຄ້າ', value: 'customer' },
      // ],
    };
  },
  computed: {
    dragCalendars() {
      return this.allCalendars.filter((calendar) => !calendar.is_pause && calendar.status == 'pending');
    },
    optimizedCalendars() {
      return this.mergedCalendars;
    },
    mergedCalendars() {
      return this.calendars.map((item) => {
        let amount = 0;
        let amountColor = 'primary';

        switch (item.collection_type) {
          case 'bag':
          case 'chartered':
          case '32km':
          case 'infect':
            amount = item.bag;
            break;
          case 'fix_cost':
            amount = '';
            break;
          default:
            amount = item.container;
            amountColor = 'success';
            break;
        }

        const statusColor = this.statusColor(item.status);
        const amountCollectionType = this.getUnit(item.collection_type);
        const isPauseColor = item.is_pause ? 'orange' : 'green';
        const isPauseLa = item.is_pause ? 'ຢຸດກ່ອນ' : 'ໃຫ້ເກັບ';
        const customerCanCollectColor = item.route_plan_detail.customer.can_collect ? 'success' : 'error';
        const customerCanCollectLa = item.route_plan_detail.customer.can_collect ? 'ເກັບໄດ້' : 'ເກັບບໍ່ໄດ້';

        return {
          ...item,
          created_at: moment(item.created_at).format("DD-MM-YY hh:mm"),
          date: moment(item.date).format("DD-MM-YY hh:mm:ss"),
          status_color: statusColor,
          amount,
          amount_color: amountColor,
          amount_collection_type: amountCollectionType,
          is_pause_color: isPauseColor,
          is_pause_la: isPauseLa,
          customer_can_collect_color: customerCanCollectColor,
          customer_can_collect_la: customerCanCollectLa,
        };
      });
    },
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`plan-calendar/${this.$route.params.id}/detail`, {
          params: {
            statuses: this.statuses,
            without_month_info: true,
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
      console.log(11);
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`plan-calendar/${this.$route.params.id}/detail?without_month_info=true`)
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
      if (value == 'fix_cost') return 'ຖ້ຽວ';

      if (value == 'container') return 'ຄອນເທັນເນີ';
      return '';
    },
    Search() {
      GetOldValueOnInput(this);
    },
    viewPage(plan_calendar, id) {
      this.$openRoute({
        name: 'TrashDetail',
        params: { plan_calendar, id },
      });
    },
  },
  watch: {
    // search(value) {
    //   if (value == '') {
    //     this.fetchData();
    //   }
    // },
  },
  created() {
    this.fetchData();
  },
};
