<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn
          class="btn-primary mr-6"
          @click="createPlan()"
        >
          <v-icon>mdi-plus</v-icon>ເພີ່ມແຜນ (Kmz)
        </v-btn>

        <v-btn
          class="btn-primary mr-6"
          @click="exportCompany()"
        >
          <v-icon>mdi-application-export</v-icon>Export Kmz ຫົວໜ່ວນທຸລະກິດ
        </v-btn>

        <v-btn
          class="btn-primary mr-6"
          @click="createPlanCompany()"
        >
          <v-icon>mdi-plus</v-icon>ເພີ່ມແຜນຫົວໜ່ວນທຸລະກິດ
        </v-btn>
      </v-col>
    </v-row>

    <br>
    <v-card>
      <v-card flat>
        <v-card-title>
          <v-text-field
            v-model="search"
            clearable
            prepend-inner-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            @keyup.enter="fetchData()"
          />
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="plans"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.route_plan_details_count="{ item }">
              <v-chip
                dark
                color="blue"
              >
                {{ Intl.NumberFormat().format(item.route_plan_details_count) }}
              </v-chip>
            </template>
            <template v-slot:item.sum_expect_trash_bag="{ item }">
              <v-chip
                outlined
                color="green"
              >
                {{ Intl.NumberFormat().format(item.sum_expect_trash_bag) }}
              </v-chip>
            </template>
            <template v-slot:item.sum_expect_trash_container="{ item }">
              <v-chip
                outlined
                color="blue"
              >
                {{ Intl.NumberFormat().format(item.sum_expect_trash_container) }}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-3"
                @click="viewPage(item.id)"
              >
                mdi-eye
              </v-icon>
              <a
                v-for="(data, index) in item.media"
                :key="index"
                :href="data.url"
              >
                <v-icon
                  small
                  class="mr-3"
                >mdi-download</v-icon>
              </a>
              <v-icon
                small
                class="mr-3"
                @click="editPage(item.id)"
              >
                mdi-pencil
              </v-icon>
              <v-icon
                small
                @click="deleteItem(item.id)"
              >
                mdi-delete
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
    </v-card>

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
// import { GetOldValueOnInput } from "@/Helpers/GetValue";
import company from '@views/routePlan/home';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Route Plan`;
  },
  name: 'Customer',
  mixins: [company],
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
      per_page: 100,
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
        { text: 'ຊື່ແຜນ', value: 'name' },
        { text: 'ຈຳນວນຈຸດ', value: 'route_plan_details_count' },
        { text: 'ຂີ້ເຫຍື້ອຄາດໝາຍ (ຖົງ)', value: 'sum_expect_trash_bag' },
        {
          text: 'ຂີ້ເຫຍື້ອຄາດໝາຍ (ຄອນເທນເນີ)',
          value: 'sum_expect_trash_container',
        },
        { text: 'Description', value: 'description', sortable: false },
        {
          text: 'ຈັດການຂໍ້ມູນ',
          value: 'actions',
          sortable: false,
          width: '120px',
        },
      ],
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      server_errors: {},
    };
  },
  watch: {
    selectedCustomerType() {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('route-plan', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
            customer_type: 'company',
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.plans = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 100);
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
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
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
        name: 'ViewCompanyRoutePlan',
        params: { id },
      });
    },
    download(url) {
      window.location.href = url;
    },
    // Search() {
    //   GetOldValueOnInput(this);
    // },
  },
};
</script>
<style lang="scss">
@import "../../../../../public/scss/main.scss";
</style>
