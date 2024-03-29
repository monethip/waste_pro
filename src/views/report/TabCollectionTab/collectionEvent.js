import { GetOldValueOnInput } from '@/Helpers/GetValue';
import moment from 'moment';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  // props: ['collectionType'],
  data() {
    return {
      tab: 'tab-1',
      customers: [],
      loading: false,
      customerId: '',
      // Year
      year_from: '',
      year_to: '',
      // Month
      month_from: new Date(),
      month_to: new Date(),
      // Date
      date_from: '',
      date_to: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: '',
      oldVal: '',
      collections: [],
      homeCollection: [],
      summary: [],
      summaryMerge: {},
      selectedDuration: 'month',
      duration: [
        {
          name: 'ປີ',
          duration: 'year',
        },
        {
          name: 'ເດືອນ',
          duration: 'month',
        },
        {
          name: 'ວັນທີ',
          duration: 'date',
        },
        {
          name: 'ລວມ',
          duration: 'merge',
        },
      ],
      collectionType: 'home',

      selectedCollectionStatus: [],
      collectionStatus: [
        {
          id: 1,
          name: 'requested',
          dis_play: 'ຮ້ອງຂໍເກັບຂີ້ເຫື້ຍອ',
        },
        {
          id: 2,
          name: 'rejected',
          dis_play: 'ປະຕິເສດເກັບຂີ້ເຫື້ຍອ',
        },
        {
          id: 3,
          name: 'approved',
          dis_play: 'ອະນຸມັດເກັບຂີ້ເຫື້ຍອ',

        },
        {
          id: 4,
          name: 'collected',
          dis_play: 'ເກັບຂີເຫື້ຍອສຳເລັດ',
        },
        {
          id: 5,
          name: 'collect_confirm',
          dis_play: 'ລູກຄ້າຢືນຢັນການເກັບ',
        },
        {
          id: 5,
          name: 'collect_reject',
          dis_play: 'ການເກັບຖືກປະຕິເສດ',
        },
      ],
      selectedPaymentStatus: [],
      paymentStatus: [
        {
          id: 1,
          name: 'pending',
          dis_play: 'ລໍຖ້າເກັບເງິນ',
        },
        {
          id: 2,
          name: 'to_confirm_payment',
          dis_play: 'ລໍຖ້າຢືນຢັນຊຳລະ',
        },
        {
          id: 3,
          name: 'rejected',
          dis_play: 'ປະຕິເສດການຊຳລະ',
        },
        {
          id: 4,
          name: 'success',
          dis_play: 'ຊຳລະສຳເລັດ',
        },
      ],
    };
  },
  methods: {
    fetchData() {
      const data = new FormData();
      data.append('page', this.pagination.current_page);
      data.append('per_page', this.per_page);
      data.append('duration', this.selectedDuration);
      if (this.year_from !== '' && this.selectedDuration == 'year') {
        data.append('year_from', this.moment(this.year_from).format('YYYY'));
      }
      if (this.year_to !== '' && this.selectedDuration == 'year') {
        data.append('year_to', this.moment(this.year_to).format('YYYY'));
      }

      if ((this.month_from !== '') && (this.selectedDuration == 'month')) {
        data.append('month_from', this.moment(this.month_from).format('YYYY-MM'));
      }

      if ((this.month_to !== '') && (this.selectedDuration == 'month')) {
        data.append('month_to', this.moment(this.month_to).format('YYYY-MM'));
      }

      if ((this.date_from !== '') && (this.selectedDuration == 'date')) {
        data.append('date_from', this.moment(this.date_from).format('YYYY-MM-DD'));
      }
      if ((this.date_to !== '') && (this.selectedDuration == 'date')) {
        data.append('date_to', this.moment(this.date_to).format('YYYY-MM-DD'));
      }
      this.selectedCollectionStatus.map((item) => {
        data.append('collect_statuses[]', item);
      });
      this.selectedPaymentStatus.map((item) => {
        data.append('payment_statuses[]', item);
      });
      this.$store.commit('Loading_State', true);
      this.$axios
        .post('report-event-collection', data,
          // {
          //     page: this.pagination.current_page,
          //     per_page: this.per_page,
          //     filter: this.search,
          //     duration: this.selectedDuration,
          //     type: this.collectionType,
          //     year_from: this.moment(this.year_from).format("YYYY"),
          //     year_to: this.moment(this.year_to).format("YYYY"),
          //     // month_from: month_from,
          //     // month_to: month_to,
          //     date_from: this.date_from,
          //     date_to: this.date_to,
          // }
        )
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.homeCollection = res.data.data.details.data;
              this.collections = res.data.data.details.data;
              this.summary = res.data.data.summary;
              this.summaryMerge = res.data.data.summary;
              // console.log(this.summaryMerge);
              this.pagination = res.data.data.details.pagination;
            }, 300);
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

    exportData() {
      const data = new FormData();
      data.set('type', this.collectionType);
      data.append('duration', this.selectedDuration);
      data.append('download', 1);
      if ((this.year_from !== '' && this.year_to !== '') && (this.selectedDuration == 'year')) {
        data.append('year_from', this.moment(this.year_from).format('YYYY'));
        data.append('year_to', this.moment(this.year_to).format('YYYY'));
      }
      if ((this.month_from !== '' && this.month_to !== '') && (this.selectedDuration == 'month')) {
        data.append('month_from', this.moment(this.month_from).format('YYYY-MM'));
        data.append('month_to', this.moment(this.month_to).format('YYYY-MM'));
      }
      if ((this.date_from !== '' && this.date_to !== '') && (this.selectedDuration == 'date')) {
        data.append('date_from', this.moment(this.date_from).format('YYYY-MM-DD'));
        data.append('date_to', this.moment(this.date_to).format('YYYY-MM-DD'));
      }
      this.selectedCollectionStatus.map((item) => {
        data.append('collect_statuses[]', item);
      });
      this.selectedPaymentStatus.map((item) => {
        data.append('payment_statuses[]', item);
      });
      this.$store.commit('Loading_State', true);
      this.$axios
        .post(
          'report-event-collection',
          data,
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data != null) {
              window.open(res.data.data.download_link);
            }
            this.$store.commit('Loading_State', false);
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
    viewPage(id) {
      this.$router.push({
        name: 'InvoiceDetail',
        params: { id },
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
  watch: {
    selectedPaymentStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCollectionStatus() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedDuration() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    search(value) {
      this.pagination.current_page = '';
      if (value == '') {
        this.fetchData();
      }
    },
    year_from(value) {
      const year_from = moment(value).format('YYYY');
      const year_to = moment(this.year_to).format('YYYY');
      this.pagination.current_page = '';
      if (year_from !== '' && year_to !== '') {
        if (year_from > year_to) {
          this.year_from = '';
        }
      }
      this.fetchData();
    },
    year_to(value) {
      const year_to = moment(value).format('YYYY');
      const year_from = moment(this.year_from).format('YYYY');
      this.pagination.current_page = '';
      if (year_to !== '' && year_from !== '') {
        if (year_to < year_from) {
          this.year_to = '';
        }
      }
      this.fetchData();
    },
    month_from(value) {
      const month_from = moment(value).format('YYYY-MM');
      const month_to = moment(this.month_to).format('YYYY-MM');
      if (month_from !== '' && month_to !== '') {
        if (month_from > month_to) {
          this.month_from = '';
        }
      }
      this.pagination.current_page = '';
      this.fetchData();
    },
    month_to(value) {
      const month_from = moment(this.month_from).format('YYYY-MM');
      const month_to = moment(value).format('YYYY-MM');
      this.pagination.current_page = '';
      if (month_from !== '' && month_to !== '') {
        if (month_to < month_from) {
          this.month_to = '';
        }
      }
      this.pagination.current_page = '';
      this.fetchData();
    },
    date_from() {
      if (this.date_from !== '' && this.date_to !== '') {
        if (this.date_from > this.date_to) {
          this.date_from = '';
        }
      }
      this.pagination.current_page = '';
      this.fetchData();
    },
    date_to() {
      if (this.date_from !== '' && this.date_to !== '') {
        if (this.date_to < this.date_from) {
          this.date_to = '';
        }
      }
      this.pagination.current_page = '';
      this.fetchData();
    },

    tab() {
      // if (value == "tab-1") {
      //     this.collectionType = "home";
      //     this.fetchData();
      //     this.$router
      //         .push({ name: "Report-Trash", query: { tab: "home" } })
      //         .catch(() => { });
      // } else if (value == "tab-2") {
      //     this.collectionType = "company";
      //     this.fetchData();
      //     this.$router
      //         .push({
      //             name: "Report-Trash",
      //             query: { tab: "company" },
      //         })
      //         .catch(() => { });
      // }
    },
  },

  created() {
    if (this.$route.query.tab == 'home') {
      this.tab = 'tab-1';
      this.collectionType = 'home';
      this.fetchData();
    } else if (this.$route.query.tab == 'company') {
      this.tab = 'tab-2';
      this.collectionType = 'company';
      this.fetchData();
    }
    this.pagination = [];
    this.fetchData();
  },
};
