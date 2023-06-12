export default {
  title() {
    return `Vientiane Waste Co-Dev|Route Plan`;
  },
  name: 'Customer',
  data() {
    return {
      tab: null,
      plans: [],
      plan: {},
      loading: false,
      planId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 9,
      search: '',
      oldVal: '',
      selectedCustomerType: '',
      customer_types: [
        {
          name: '',
          display: 'ທັງໝົດ',
        },
        {
          name: 'company',
          display: 'ບໍລິສັດ',
        },
        {
          name: 'home',
          display: 'ຄົວເຮືອນ',
        },
      ],

      headers: [
        { text: 'ຊື່', value: 'name' },
        { text: '', value: 'actions', sortable: false },
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      server_errors: {},
    };
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('route-plan', {
          params: {
            // page: this.pagination.current_page,
            // per_page: this.per_page,
            customer_type: this.selectedCustomerType,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.plans = res.data.data;
              console.log(this.plans);
              // this.pagination = res.data.data.pagination;
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    deleteItem(id) {
      this.planId = id;
      this.$store.commit('modalDelete_State', true);
    },

    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`route-plan/${this.planId}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.$store.commit('modalDelete_State', false);
              this.fetchData();
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response.data.message,
          });
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
    createPage() {
      this.$router.push({
        name: 'Export-Plan',
      });
    },
    exportCompany() {
      this.$router.push({
        name: 'Export-Plan-Company',
      });
    },

    createPlan() {
      this.$router.push({
        name: 'CreatePlan',
      });
    },
    createPlanNomap() {
      this.$router.push({
        name: 'SelectCustomerRoutePlan',
      });
    },
    createPlanCompany() {
      this.$router.push({
        name: 'SelectCompanyRoutePlan',
      });
    },

    editPage(id) {
      this.$router.push({
        name: 'EditPlan',
        params: { id },
      });
    },
    viewPage(id) {
      this.$openRoute({
        name: 'ViewPlan',
        params: { id },
      });
      //  this.$router.push({
      //   name: "ViewCompanyPlan",
      //   params: { id },
      // });
    },
    download(url) {
      window.location.href = url;
    },
    // Search() {
    //   GetOldValueOnInput(this);
    // },
  },
  created() {
    this.fetchData();
  },
  watch: {
    selectedCustomerType() {
      this.fetchData();
    },
  },
};
