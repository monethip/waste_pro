<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          :loading="loading"
          :disabled="loading"
          @click="exportData"
          >Export
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
          :items="status"
          v-model="selectedStatus"
          item-text="name"
          item-value="name"
          label="ສະຖານະ"
          @input="fetchData()"
        ></v-select>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ"
          type="text"
          v-model="search"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="my-n4">
      <v-col>
        <p class="text">ລວມ {{ pagination.total }} ຄົນ</p>
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
                  size="36px"
                  v-for="(img, index) in item.media"
                  :key="index"
                >
                  <img v-if="img.thumb" :src="img.thumb" />
                </v-avatar>
              </template>

              <template v-slot:item.status="{ item }">
                <v-chip :color="statusColor(item.status)">{{
                  item.status
                }}</v-chip>
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
              <!--
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
              </template>
              --> </v-data-table
            ><br />
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
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  title() {
    return `Vientiane Waste Co-Dev|Report Driver`;
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
      selectedStatus: "",
      status: [
        {
          id: 1,
          name: "active",
        },
        {
          id: 2,
          name: "inactive",
        },
      ],

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        { text: "ເບີໂທ", value: "user.phone", sortable: false },
        { text: "Email", value: "user.email", sortable: false },
        { text: "ທະບຽນລົດ", value: "vehicle.car_number" },
        { text: "ສະຖານະ", value: "status", sortable: false },
        { text: "Profile", value: "media", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("driver", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            // filter: this.search,
            status: this.selectedStatus,
            date_from: this.start_date,
            date_end: this.end_date,
          },
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
            this.fetchAddress();
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.start_menu = false;
          this.end_menu = false;
          if (error.response && error.response.status == 422) {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      if (value == "active") return "success";
      else if (value == "inactive") return "error";
      else return "info";
    },

    exportData() {
      this.loading = true;
      this.$axios
        .post(
          "export-driver/",
          {
            filter: this.search,
            status: this.selectedStatus,
            date_from: this.start_date,
            date_end: this.end_date,
          },
          { responseType: "blob" }
        )
        .then((res) => {
          if (res.status == 200) {
            setTimeout(() => {
              this.loading = false;
              const fileUrl = window.URL.createObjectURL(new Blob([res.data]));
              const fileLink = document.createElement("a");
              fileLink.href = fileUrl;
              fileLink.setAttribute("download", "driver" + ".xlsx");
              document.body.appendChild(fileLink);
              fileLink.click();
              document.body.removeChild(fileLink);
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    // selectedStatus: function () {
    //   this.fetchData();
    // },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>