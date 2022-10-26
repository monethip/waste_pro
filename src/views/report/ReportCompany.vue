<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" :loading="loading" :disabled="loading" @click="exportData">Export
        </v-btn>
      </v-col>
      <v-col>
        <v-menu v-model="start_menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
          offset-y min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="start_date" label="ເລີ່ມວັນທີ" readonly outlined v-bind="attrs" v-on="on" dense
              clearable></v-text-field>
          </template>
          <v-date-picker v-model="start_date"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-menu v-model="end_menu" :close-on-content-click="false" :nudge-right="40" transition="scale-transition"
          offset-y min-width="auto">
          <template v-slot:activator="{ on, attrs }">
            <v-text-field v-model="end_date" label="ຫາວັນທີ" readonly outlined v-bind="attrs" v-on="on" dense clearable>
            </v-text-field>
          </template>
          <v-date-picker v-model="end_date"></v-date-picker>
        </v-menu>
      </v-col>
      <v-col>
        <v-autocomplete outlined dense :items="districts" v-model="selectedDistrict" item-text="name" item-value="id"
          label="ເມືອງ" clearable></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete outlined dense :items="villages" v-model="selectedVillage" item-text="name" item-value="id"
          label="ບ້ານ" multiple clearable></v-autocomplete>
      </v-col>
      <v-col>
        <v-select outlined dense :items="status" v-model="selectedStatus" item-text="name" item-value="name"
          label="ສະຖານະ" multiple clearable></v-select>
      </v-col>
      <v-col>
        <v-text-field outlined dense clearable prepend-inner-icon="mdi-magnify" label="Search" type="text"
          v-model="search" @keyup.enter="Search()">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="my-n4">
      <v-col>
        <p class="text">ລວມຫົວໜ່ວຍທຸລະກິດ {{ pagination.total }} </p>
      </v-col>
      <v-col>
        <v-select outlined dense :items="can_collects" v-model="selectedCanCollect" item-text="name" item-value="value"
          label="ເກັບເລີຍໄດ້ບໍ່" clearable></v-select>
      </v-col>
      <v-col>
        <v-select outlined dense :items="customerStatus" v-model="selectedCustomerStatus" item-text="name"
          item-value="value" label="ສະຖານະແຜນ" multiple clearable></v-select>
      </v-col>
      <v-col>
        <v-select outlined dense :items="costs" v-model="selectedCost" item-text="name" item-value="value"
          label="ປະເພດບໍລິການ" multiple clearable></v-select>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table :headers="headers" :items="customers" :search="search" :disable-pagination="true"
              hide-default-footer>
              <template v-slot:item.media="{ item }">
                <v-avatar size="36px" v-for="(img, index) in item.media" :key="index">
                  <img v-if="img.thumb" :src="img.thumb" />
                </v-avatar>
              </template>
              <template v-slot:item.created_at="{ item }">
                <div>
                  {{ moment(item.created_at).format("DD-MM-YY") }}
                </div>
              </template>
              <!--              <template v-slot:item.status="{ item }">-->
              <!--                <v-chip label :color="statusColor(item.status)">{{-->
              <!--                  item.status-->
              <!--                }}</v-chip>-->
              <!--              </template>-->
              <template v-slot:item.cost_by="{ item }">
                <div>{{ costBy(item.cost_by) }}</div>
              </template>
              <template v-slot:item.status="{ item }">
                <v-chip label :color="statusColor(item.user.status)">{{ item.user.status }}</v-chip>
              </template>
              <!--Role -->
              <template v-slot:item.roles="{ item }">
                <div>
                  <span v-for="(role, index) in item.roles" :key="index">
                    {{ role.name }},
                  </span>
                </div>
              </template>
              <!--Permission -->
              <template v-slot:item.permissions="{ item }">
                <div>
                  <span v-for="(ps, index) in item.permissions" :key="index">
                    <span>{{ ps.name }}, </span>
                  </span>
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
              </template>
            </v-data-table><br />
            <template>
              <Pagination v-if="pagination.total_pages > 1" :pagination="pagination" :offset="offset"
                @paginate="fetchData()"></Pagination>
            </template>
          </v-card-text>
        </v-card>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import queryOption from "@/Helpers/queryOption";
export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|Report Customer`;
  },
  data() {
    return {
      start_date: "",
      end_date: "",
      start_menu: false,
      end_menu: false,
      customers: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: "",
      oldVal: "",
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      selectedStatus: [],
      status: [
        {
          id: 1,
          name: "active",
        },
        {
          id: 2,
          name: "inactive",
        },
        {
          id: 3,
          name: "trial",
        },
      ],
      selectedCanCollect: "",
      can_collects: [
        {
          id: 1,
          name: "ເກັບໄດ້",
          value: '1',
        },
        {
          id: 2,
          name: "ເກັບບໍໄດ້",
          value: '0',
        },
      ],
      selectedCustomerStatus: [],
      customerStatus: [
        {
          id: 1,
          value: "calendar",
          name: "ຍັງບໍ່ມີແຜນເດີນລົດ",
        },
        {
          id: 2,
          value: "route_plan",
          name: "ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ",
        },
      ],
      selectedCost: [],
      costs: [
        {
          id: 1,
          value: "container",
          name: "ຄອນເທັນເນີ"
        },
        {
          id: 2,
          value: "fix_cost",
          name: "ທຸລະກິດເປັນຖ້ຽວ"
        },
        {
          id: 3,
          value: "chartered",
          name: "ມອບເໝົາ"
        },
        {
          id: 4,
          value: "bag",
          name: "ບໍລິມາດ"
        },
      ],

      headers: [
        { text: "ຊື່", value: "company_name" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ທີ່ຢູ່", value: "district.name", sortable: false },
        { text: "ປະເພດບໍລິການ", value: "cost_by_la" },
        { text: "ເລີ່ມບໍລິການ", value: "start_month", sortable: false },
        { text: "Created", value: "created_at", sortable: false },
        { text: "ສະຖານະ", value: "status", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      toast: {
        value: true,
        color: "success",
        msg: "",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("company", {
          params: queryOption([
            { page: this.pagination.current_page },
            { per_page: this.per_page },
            { filter: this.search },
            { date_from: this.start_date },
            { date_end: this.end_date },
            { villages: this.selectedVillage },
            { statuses: this.selectedStatus },
            { can_collect: this.selectedCanCollect },
            { cost_by: this.selectedCost },
            { without: this.selectedCustomerStatus },
            { district_id: this.selectedDistrict }
          ]),
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.customers = res.data.data.data;
              this.pagination = res.data.data.pagination;
              this.start_menu = false;
              this.end_menu = false;
            }, 300);
            // this.fetchAddress();
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.start_menu = false;
          this.end_menu = false;
          if (error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    fetchAddress() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.address = res.data.data;
              this.address.map((item) => {
                this.districts = item.districts;
              });
            }, 300);
          }
        })
        .catch(() => { });
    },

    fetchVillage() {
      this.$axios
        .get("info/district/" + this.selectedDistrict + "/village")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.villages = res.data.data;
            }, 300);
          }
        })
        .catch(() => { });
    },

    viewPage(id) {
      this.$router.push({
        name: "ViewCompanyDetail",
        params: { id },
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == "active") return "primary";
      else if (value == "inactive") return "error";
      else return "info";
    },

    exportData() {
      this.loading = true;
      this.$axios
        .post(
          "export-company/",
          {
            params: queryOption([
              { date_from: this.start_date },
              { date_end: this.end_date },
              { villages: this.selectedVillage },
              { statuses: this.selectedStatus },
              { can_collect: this.selectedCanCollect },
              { cost_by: this.selectedCost },
              { without: this.selectedCustomerStatus },
              { district_id: this.selectedDistrict }
            ]),
          },
          // { responseType: "blob" }
        )
        .then((res) => {
          if (res.status == 200) {
            if (res.data.data.download_link != null) {
              window.open(res.data.data.download_link)
            }
            this.loading = false;
            // setTimeout(() => {
            //   this.loading = false;
            //   const fileUrl = window.URL.createObjectURL(new Blob([res.data]));
            //   const fileLink = document.createElement("a");
            //   fileLink.href = fileUrl;
            //   fileLink.setAttribute("download", "customer" + ".xlsx");
            //   document.body.appendChild(fileLink);
            //   fileLink.click();
            //   document.body.removeChild(fileLink);
            // }, 300);
          }
        })
        .catch(() => {
          this.$store.commit("Toast_State", this.toast_error);
          this.loading = false;
        });
    },
    costBy(value) {
      if (value == "container") return "ຄອນເທັນເນີ";
      else if (value == "fix_cost") return "ທຸລະກິດເປັນຖ້ຽວ";
      else if (value == "chartered") return "ມອບເໝົາ";
      else if (value == "bag") return "ບໍລິມາດ";
      else return '';
    },
  },
  watch: {
    start_date: function () {
      this.pagination.current_page = '';
      if (this.end_date !== '' && this.start_date !== '') {
        if (this.start_date > this.end_date) {
          this.start_date = '';
        }
      }
      this.fetchData();
    },
    end_date: function () {
      this.pagination.current_page = '';
      if (this.end_date !== '' && this.start_date !== '') {
        if (this.end_date < this.start_date) {
          this.end_date = '';
        }
      }
      this.fetchData();
    },
    search: function (value) {
      this.pagination.current_page = '';
      if (value == "") {
        this.fetchData();
      }
    },

    selectedVillage: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedDistrict: function () {
      this.pagination.current_page = '';
      this.fetchVillage();
      this.fetchData();
    },
    selectedStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCanCollect: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCustomerStatus: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
    selectedCost: function () {
      this.pagination.current_page = '';
      this.fetchData();
    },
  },
  created() {
    this.fetchData();
    this.fetchAddress();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
