<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="createPage()"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
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
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="start_date"
            @input="fetchData()"
          ></v-date-picker>
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
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="end_date"
            @input="fetchData()"
          ></v-date-picker>
        </v-menu>
      </v-col>

      <v-col>
        <v-select
          outlined
          dense
          :items="roles"
          v-model="selectedRoles"
          item-text="name"
          item-value="name"
          label="Roles"
          multiple
          @input="fetchData()"
        ></v-select>
        <v-spacer></v-spacer>
      </v-col>

      <v-col>
        <v-autocomplete
          outlined
          dense
          :items="users"
          v-model="selectedUsers"
          item-text="name"
          item-value="id"
          label="Users"
          multiple
          @input="fetchData()"
        ></v-autocomplete>
        <v-spacer></v-spacer>
      </v-col>

      <v-col>
        <v-select
          outlined
          dense
          :items="models"
          v-model="selectedModel"
          item-text="model_name"
          item-value="model_name"
          label="Model Name"
          multiple
        ></v-select>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-title>
          ຂໍ້ມູນ Activity Log ({{ pagination.total }})
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Log Name</th>
                  <th class="text-left">Description</th>
                  <th class="text-left">Model</th>
                  <th class="text-left">Type</th>
                  <!-- <th class="text-left">Properties</th>
                  <th class="text-left">Attributes</th> -->
                  <th class="text-left">User</th>
                  <th class="text-left">Created</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in activities" :key="item.id">
                  <td>{{ item.log_name }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.model_name }}</td>
                  <td>{{ item.subject_type }}</td>
                  <!-- <td>{{ item.properties.old }}</td>
                  <td>{{ item.properties.attributes }}</td> -->
                  <td>{{ item.user.name }}</td>
                  <td>
                    {{ moment(item.created_at).format("hh:mm DD-MM-YY") }}
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>

          <!--
          <v-data-table
            :headers="headers"
            :items="activities"
            :disable-pagination="true"
            hide-default-footer
            class="page__table"
            item-key="id"
          >
            <template v-slot:body="props">
              <tr v-for="(data, index) in props.items" :key="index">
                <td>{{ data.log_name }}</td>
                <td>{{ data.description }}</td>
                <td>{{ data.model_name }}</td>
                <td>{{ data.subject_type }}</td>
                <td>{{ data.properties.old }}</td>
                <td>{{ data.properties.attributes }}</td>
                <td>{{ data.user.name }}</td>
                <td>{{ moment(data.created_at).format("hh:mm DD-MM-YY") }}</td>
              </tr>
            </template>

            <template v-slot:item.created_at="{ item }">
              <div>{{ moment(item.created_at).format("hh:mm DD-MM-YY") }}</div>
            </template>
         
            <template v-slot:item.actions="{ item }">
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="primary"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    medium
                    class="mr-2"
                    >mdi-dots-vertical</v-icon
                  >
                </template>
                <v-list>
                  <v-list-item link @click="viewPage(item.id)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-eye </v-icon>
                      ລາຍລະອຽດ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template> 
            </v-data-table
          >
          --><br />
          <template>
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
              @paginate="fetchData()"
            ></Pagination>
          </template>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
<script>
export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|${this.title}`;
  },
  data() {
    return {
      start_date: "",
      end_date: "",
      start_menu: false,
      end_menu: false,

      activities: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      start_collect: false,
      server_errors: {},
      //Filter
      models: [],
      selectedModel: [],

      selectedRoles: [],
      roles: [],
      selectedUsers: [],
      users: [],

      headers: [
        { text: "Log name", value: "log_name" },
        { text: "Description", value: "description" },
        { text: "Model Name", value: "model_name", sortable: false },
        { text: "Subject Type", value: "subject_type", sortable: false },
        { text: "Properties", value: "properties", sortable: false },
        { text: "Attributes", value: "attributes", sortable: false },
        { text: "Created", value: "created_at", sortable: false },
        // { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("activity", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            date_from: this.start_date,
            date_end: this.start_date,
            model_names: this.selectedModel,
            users: this.selectedUsers,
            roles: this.selectedRoles,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.activities = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    fetchModels() {
      this.$axios
        .get("model")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.models = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchRole() {
      this.$axios
        .get("user-setting/role")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.roles = res.data.data;
              this.fetchUser();
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchUser() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("user-setting/user", {
          params: {
            // page: this.pagination.current_page,
            // per_page: this.per_page,
            // filter: this.search,
            roles: this.selectedRoles,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Loading_State", false);
              this.users = res.data.data;
              console.log(this.users);
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    viewPage(id) {
      this.$router.push({
        name: "ViewCompany",
        params: { id },
      });
    },
    statusColor(value) {
      if (value == "active") return "success";
      else if (value == "inactive") return "error";
      else return "info";
    },
  },
  watch: {
    selectedModel: function () {
      this.fetchData();
    },

    date_from: function () {
      this.fetchData();
    },
    date_end: function () {
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchRole();
    this.fetchModels();
  },
};
</script>

<style lang="scss">
@import "../../public/scss/main.scss";
</style>