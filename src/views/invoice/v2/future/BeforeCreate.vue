<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-keyboard-backspace </v-icon>
      </v-btn>

      <div>
        ເລືອກ User
      </div>
    </v-breadcrumbs>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title class="my-auto">
            ຂໍ້ມູນ Users ({{ pagination.total }})
            <v-divider class="mx-4" vertical></v-divider>
            <v-spacer></v-spacer>
            <v-row>
              <v-col>
                <v-text-field v-model="search" clearable prepend-inner-icon="mdi-magnify" label="Search" single-line
                  hide-details @keyup.enter="Search()" outlined dense></v-text-field>
              </v-col>

              <v-col>
                <v-text-field v-model="searchPhone" clearable prepend-inner-icon="mdi-magnify" label="Phone"
                  type="number" class="input-number" single-line hide-details @keyup.enter="SearchPhone()" outlined
                  dense></v-text-field>
              </v-col>
            </v-row>
          </v-card-title>
          <v-data-table :headers="headers" :items="users" :search="search" :disable-pagination="true"
            hide-default-footer>
            <!--Role -->
            <template v-slot:item.customer="{ item }">
              <div>
                {{item.name}}
              </div>
            </template>
            <template v-slot:item.customerType="{ item }">
              <div v-if="item.customer">
                <div v-if="item.customer.customer_type =='home'" class="success--text">
                  ຄົວເຮືອນ
                </div>
                <div v-else-if="item.customer.customer_type =='company'" class="info--text">
                  ຫົວໜ່ວຍທຸລະກິດ
                </div>
              </div>
            </template>
            <template v-slot:item.status="{ item }">
              <v-btn @click="createPage(item)" medium class="btn-primary elevation-0">
                <v-icon>mdi-plus</v-icon> ເພີ່ມ
              </v-btn>
            </template>
          </v-data-table>
          <br />
          <template>
            <Pagination v-if="pagination.total_pages > 1" :pagination="pagination" :offset="offset"
              @paginate="fetchData()"></Pagination>
          </template>
        </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";
export default {
  title() {
    return `Vientiane Waste Co-Dev|User`;
  },
  name: "User",
  data() {
    return {
      stepValue: 1,
      otp: "",
      isStepTwo: false,
      headers: [
        { text: "ລູກຄ້າ", value: "customer", width: "150px" },
        { text: "ເບີໂທ", value: "phone", sortable: false },
        { text: "ປະເພດລູກຄ້າ", value: "customerType", sortable: false, width: "150px" },
        { text: "Email", value: "email", sortable: false },
        { text: "", value: "status", sortable: false, align: "center" },
      ],
      loading: false,
      users: [],
      user: {},
      phone: "",
      server_errors: {
        email: "",
        roleId: "",
      },


      selectedRole: "",
      selectedRoles: [],
      roles: [],

      //Pagination
      offset: 12,
      pagination: {},
      per_page: 12,

      search: "",
      searchPhone: "",
      oldVal: "",

      statuses: [
        {
          name: "active",
        },
        {
          name: "inactive",
        },
      ],
      status: "",
      id_token: "",

      //Validation

    };
  },
  methods: {

    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("user-setting/user", {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { phone: this.searchPhone },
            { roles: ['pre_customer'] },])
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.loading = false;
            this.$store.commit("Loading_State", false);
            this.users = res.data.data.data;
            this.pagination = res.data.data.pagination;
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          if (error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    createPage(data) {
      this.$router.push({
        name: this.$route.query.redirect,
        params: {
          items: data,
        },
      });
    },
    backPrevios() {
      this.$router.go(-1);
    },
    reset() {
      this.$refs.form.reset();
    },
    Search() {
      GetOldValueOnInput(this);
    },
    SearchPhone() {
      GetOldValueOnInput(this);
    },

  },

  watch: {
    search: function (value) {
      this.pagination.current_page = '';
      if (value === "") {
        this.fetchData();
      }
    },

    searchPhone: function (value) {
      this.pagination.current_page = '';
      if (value.length > 4) {
        this.fetchData();
      }
    },
  },
  created() {
    if (!this.$route.query.redirect) this.$router.push('/')
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main";

.otp-input {
  width: 40px;
  height: 40px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;

  &.error {
    border: 1px solid red !important;
  }
}

.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.v-stepper__content {
  padding: 8px 8px;
}

.otp,
.btnClear {
  margin-bottom: 24px;
  margin-top: 24px;
}
</style>
