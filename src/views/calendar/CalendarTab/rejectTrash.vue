<template>
  <v-container>
    <v-row>
      <v-col>
        <v-breadcrumbs
          large
          class="pa-0"
        >
          ຂີ້ເຫື້ຍອທີ່ລໍຖ້າເກັບ
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
    <v-row>
      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຄົ້ນຫາ"
          type="text"
        />
      </v-col>
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
        <template v-slot:item.route_plan_detail.customer.full_name="{ item }">
          <a
            href="#"
            @click="openRoute(item)"
          >{{ item.route_plan_detail.customer.full_name }}</a>
        </template>
        <!--
            <template v-slot:item.start_month="{ item }">
              {{ item.route_plan_detail.customer.start_month }}
            </template>
 -->
        <template v-slot:item.status="{ item }">
          <v-chip
            color="error"
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
          <v-icon
            small
            @click="openUpdate(item)"
          >
            mdi-truck
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

    <!-- confirm payment -->
    <v-dialog
      v-model="confirmDialog"
      max-width="620px"
      persistent
    >
      <template @close="close">
        <v-card>
          <v-card-text>
            <v-card-title>
              <p>
                <v-icon
                  class="primary-color"
                  large
                  color="success"
                >
                  mdi-checkbox-marked-circle-outline
                </v-icon>
                ຢືນຢັນການເກັບຂີ້ເຫື້ຍອ
              </p>
            </v-card-title>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <div>
                  <v-row>
                    <v-col cols="12">
                      <v-select
                        v-model="confirm_status"
                        label="ສະຖານະການຊຳລະ"
                        outlined
                        dense
                        :items="confirm_statues"
                        item-text="name"
                        item-value="value"
                      />
                    </v-col>
                  </v-row>

                  <v-row v-if="confirm_status == 'reject'">
                    <v-col cols="12">
                      <v-text-field
                        v-model="description"
                        label="Description"
                        outlined
                        dense
                        type="text"
                      />
                      <p class="errors">
                        {{ server_errors.description }}
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-card-actions>
                      <v-btn
                        color="blue"
                        class="white--text px-12 c-btn"
                        medium
                        :loading="loading"
                        :disabled="loading"
                        @click="confirmStatus()"
                      >
                        ຢືນຢັນ
                      </v-btn>
                      <v-btn
                        color="error"
                        class="white--text px-12 c-btn"
                        medium
                        @click="confirmDialog = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-row>
                </div>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
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
      statuses: ['reject'],
      confirm_status: 'success',
      confirm_statues: [
        {
          name: 'Success',
          value: 'success',
        },
      ],
      confirmDialog: false,
      editItem: {},
      description: '',
      server_errors: {},

      headers: [
        { text: 'ລຳດັບຄວາມສຳຄັນ', value: 'priority' },
        { text: 'ໄອດີ', value: 'route_plan_detail.customer.customer_id' },
        { text: 'ລູກຄ້າ', value: 'route_plan_detail.customer.full_name' },
        { text: 'ເບີໂທ', value: 'route_plan_detail.customer.user.phone' },
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
    description() {
      this.server_errors.description = '';
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    openRoute(item) {
      const name = item.route_plan_detail.customer.customer_type == 'home'
        ? 'ViewClient'
        : 'ViewCompanyDetail/';
      const routeData = this.$router.resolve({
        name,
        params: {
          id: item.route_plan_detail.customer.id,
        },
      });

      window.open(routeData.href);
    },
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
    openUpdate(data) {
      this.editItem = data;
      this.confirmDialog = true;
    },

    confirmStatus() {
      this.$store.commit('Loading_State', true);
      const formData = new FormData();
      formData.append('status', this.confirm_status);
      if (this.confirm_status == 'reject') {
        formData.append('description', this.description);
      }
      formData.append('_method', 'PUT');
      this.$axios
        .post(`admin-collection/${this.editItem.id}/status`, formData)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.fetchData();
              this.confirmDialog = false;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, data] of Object.entries(obj)) {
              this.server_errors[key] = data[0];
            }
          }
        });
    },
    statusColor(value) {
      if (value == 'pending') return 'info';
      if (value == 'success') return 'success';
      return 'error';
    },
    getUnit(value) {
      if (value == 'bag' || value == '32km' || value == 'infect' || value == 'chartered') return 'ຖົງ';

      if (value == 'fix_cost') return 'ຖ້ຽວ';

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
