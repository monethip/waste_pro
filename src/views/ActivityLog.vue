<template>
  <v-container>
    <v-row class="mb-n6">
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
          <v-date-picker v-model="start_date" />
        </v-menu>
      </v-col>
      <v-col>
        <v-menu
          v-model="end_menu"
          :close-on-content-click="true"
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
          <v-date-picker v-model="end_date" />
        </v-menu>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedLogName"
          outlined
          dense
          :items="logNames"
          label="Log Name"
          clearable
        />
      </v-col>

      <v-col>
        <v-select
          v-model="selectedRoles"
          outlined
          dense
          :items="roles"
          item-text="name"
          item-value="name"
          label="Roles"
          multiple
          clearable
        />
        <v-spacer />
      </v-col>

      <v-col>
        <v-autocomplete
          v-model="selectedUsers"
          outlined
          dense
          :items="users"
          item-text="name"
          item-value="id"
          label="Users"
          multiple
          clearable
        />
        <v-spacer />
      </v-col>

      <v-col>
        <v-select
          v-model="selectedModel"
          outlined
          dense
          :items="models"
          item-text="model_name"
          item-value="model_name"
          label="Model Name"
          multiple
          clearable
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          @keyup.enter="fetchData"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-card>
        <v-card-title>ຂໍ້ມູນ Activity Log ({{ pagination.total }})</v-card-title>
        <v-card-text>
          <!--
          <v-simple-table
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Log Name</th>
                  <th class="text-left">Description</th>
                  <th class="text-left">Model</th>
                  <th class="text-left">Type</th>
                  <th class="text-left">User</th>
                  <th class="text-left">Created</th>
                  <th class="text-left">Properties</th>
                  <th class="text-left">Attributes</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in activities" :key="item.id">
                  <td>{{ item.log_name }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.model_name }}</td>
                  <td>{{ item.subject_type }}</td>
                  <td>{{ item.user.name }}</td>
                  <td>
                    {{ moment(item.created_at).format("hh:mm DD-MM-YY") }}
                  </td>
                  <td>{{ item.properties.old }}</td>
                  <td>{{ item.properties.attributes }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          -->

          <v-data-table
            :headers="headers"
            :items="activities"
            :disable-pagination="true"
            hide-default-footer
            class="page__table"
            item-key="id"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            show-expand
          >
            <template v-slot:item.created_at="{ item }">
              <div>{{ moment(item.created_at).format("hh:mm:ss DD-MM-YY") }}</div>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td
                :colspan="headers.length"
                class="pt-2 pb-2"
              >
                <span style="font-size: 18px">Properties</span>
                {{ item.properties.old }}
              </td>
              <td
                :colspan="headers.length"
                class="pt-2 pb-2"
              >
                <span style="font-size: 18px">Attributes</span>
                {{ item.properties.attributes }}
              </td>
            </template>

            <template v-slot:item.attributes="{ item }">
              <pre
                :style="
                  item.log_name == 'deleted'
                    ? { color: 'red' }
                    : { color: 'green' }
                "
              >{{ item.properties.attributes }}</pre>
            </template>
            <template v-slot:item.properties="{ item }">
              <pre>{{ item.properties.old }}</pre>
            </template>
            <template v-slot:item.changed="{ item }">
              <div
                v-for="(value, key) in item.properties.attributes"
                :key="key"
                class="mb-4"
              >
                <v-row v-if="item.properties.old && (value !== item.properties.old[key])">
                  <div style="display: inline-block; color: green;">
                    <b style="color: blue">{{ key }}:</b> "{{ value }}"
                  </div>
                  <span v-if="item.properties.old[key]"> <v-icon
                    small
                    color="primary"
                  >mdi-arrow-left-box</v-icon> "{{ item.properties.old[key] }}"</span>
                  <v-icon
                    v-else
                    color="primary"
                    small
                  >
                    mdi-new-box
                  </v-icon>
                </v-row>
              </div>
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
    </v-row>
  </v-container>
</template>
<script>
import queryOption from '@/Helpers/queryOption';

export default {
  name: 'Activity',
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      title: 'Activity Log',
      logNames: ['created', 'updated', 'deleted'],
      start_date: '',
      end_date: '',
      start_menu: false,
      end_menu: false,
      search: '',

      activities: [],
      loading: false,
      customerId: '',
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      start_collect: false,
      server_errors: {},
      // Filter
      models: [],
      selectedModel: [],

      selectedRoles: [],
      selectedLogName: '',
      roles: [],
      selectedUsers: [],
      users: [],

      expanded: [],
      singleExpand: false,
      headers: [
        { text: 'Log name', value: 'log_name', width: '150px' },
        { text: 'ລາຍລະອຽດ', value: 'description', width: '150px' },
        {
          text: 'Model Name',
          value: 'model_name',
          sortable: false,
          width: '150px',
        },
        {
          text: 'Subject Type',
          value: 'subject_type',
          sortable: false,
          width: '150px',
        },
        { text: 'User', value: 'user.name', sortable: false },
        {
          text: 'Created', value: 'created_at', sortable: false, width: '120px',
        },

        {
          text: 'ຂໍ້ມູນທີ່ອັບເດດ',
          value: 'attributes',
          sortable: false,
          width: '350px',
        },
        {
          text: 'ຂໍ້ມູນເກົ່າ',
          value: 'properties',
          sortable: false,
          width: '350px',
        },
        {
          text: 'ຈຸດຕ່າງ',
          value: 'changed',
          width: '350px',
        },

        // { text: "", value: "data-table-expand", sortable: false },
      ],
    };
  },
  watch: {
    selectedModel() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedLogName() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    start_date() {
      this.pagination.current_page = '';
      if (this.end_date != '') {
        if (this.start_date > this.end_date) {
          this.start_date = '';
        }
      }
      this.fetchData();
    },
    end_date() {
      this.pagination.current_page = '';
      if (this.end_date < this.start_date) {
        this.end_date = '';
      }
      this.fetchData();
    },
    selectedRoles() {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedUsers() {
      this.pagination.current_page = '';
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchRole();
    this.fetchModels();
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('activity', {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { date_from: this.start_date },
            { date_end: this.end_date },
            { model_names: this.selectedModel },
            { users: this.selectedUsers },
            { roles: this.selectedRoles },
            { log_name: this.selectedLogName },
            { filter: this.search },
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.activities = res.data.data.data;
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

    fetchModels() {
      this.$axios
        .get('model')
        .then((res) => {
          if (res.data.code == 200) {
            this.models = res.data.data;
          }
        })
        .catch(() => {});
    },

    fetchRole() {
      this.$axios
        .get('user-setting/role')
        .then((res) => {
          if (res.data.code == 200) {
            this.roles = res.data.data;
            this.fetchUser();
          }
        })
        .catch(() => {});
    },

    fetchUser() {
      this.$axios
        .get('user-setting/user', {
          params: {
            roles: this.selectedRoles,
            user_only: true,
            without_billing_summary: true,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.users = res.data.data;
          }
        })
        .catch(() => {
          this.$store.commit('Loading_State', false);
        });
    },

    viewPage(id) {
      this.$router.push({
        name: 'ViewCompanyDetail',
        params: { id },
      });
    },
    statusColor(value) {
      if (value == 'active') return 'success';
      if (value == 'inactive') return 'error';
      return 'info';
    },
  },
};
</script>

<style lang="scss">
@import "../../public/scss/main.scss";
</style>
