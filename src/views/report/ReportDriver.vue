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
              label="ເລີ່ມວັນທີ"
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
        <v-menu
          v-model="end_menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_date"
              label="ຫາວັນທີ"
              readonly
              outlined
              v-bind="attrs"
              dense
              clearable
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="end_date"
          />
        </v-menu>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedStatus"
          outlined
          dense
          :items="status"
          item-text="name"
          item-value="name"
          label="ສະຖານະ"
          clearable
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ"
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
              :items="customers"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
            >
              <template v-slot:item.media="{ item }">
                <v-avatar
                  v-for="(img, index) in item.media"
                  :key="index"
                  size="36px"
                >
                  <img
                    v-if="img.thumb"
                    :src="img.thumb"
                  >
                </v-avatar>
              </template>

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
              <!--Role -->
              <template v-slot:item.roles="{ item }">
                <div>
                  <span
                    v-for="(role, index) in item.roles"
                    :key="index"
                  >
                    {{ role.name }},
                  </span>
                </div>
              </template>
              <!--Permission -->
              <template v-slot:item.permissions="{ item }">
                <div>
                  <span
                    v-for="(ps, index) in item.permissions"
                    :key="index"
                  >
                    <span>{{ ps.name }}, </span>
                  </span>
                </div>
              </template>
              <!--
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
              </template>
              -->
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

      customers: [],
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
        { text: 'ຊື່', value: 'name' },
        { text: 'ນາມສະກຸນ', value: 'surname' },
        { text: 'ເບີໂທ', value: 'user.phone', sortable: false },
        { text: 'Email', value: 'user.email', sortable: false },
        { text: 'ທະບຽນລົດ', value: 'vehicle.car_number' },
        { text: 'ສະຖານະ', value: 'status', sortable: false },
        { text: 'Profile', value: 'media', sortable: false },
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
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('driver', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { date_from: this.start_date },
            { date_end: this.end_date },
            { status: this.selectedStatus },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.customers = res.data.data.data;
            this.pagination = res.data.data.pagination;
            this.start_menu = false;
            this.end_menu = false;
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
      this.loading = true;
      this.$axios
        .post(
          'export-driver/',
          {
            status: this.selectedStatus,
            date_from: this.start_date,
            date_end: this.end_date,
          },
          // {responseType: "blob"}
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data.download_link != null) {
              window.open(res.data.data.download_link);
            }
            this.loading = false;
          }
        })
        .catch((error) => {
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          this.loading = false;
        });
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
