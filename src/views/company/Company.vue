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
        <v-autocomplete
          outlined
          dense
          :items="districts"
          v-model="selectedDistrict"
          item-text="name"
          item-value="id"
          label="ເມືອງ"
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          outlined
          dense
          :items="villages"
          v-model="selectedVillage"
          item-text="name"
          item-value="id"
          label="ບ້ານ"
          multiple
        ></v-autocomplete>
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
          multiple
        ></v-select>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-title>
          ຂໍ້ມູນລູກຄ້າທີ່ເປັນບໍລິສັດ
          <v-divider class="mx-4" vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            outlined
            dense
            clearable
            prepend-inner-icon="mdi-magnify"
            label="ຄົ້ນຫາ"
            type="text"
            v-model="search"
            @keyup.enter="Search()"
          >
          </v-text-field>
        </v-card-title>
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
            <template v-slot:item.company_coordinators="{ item }">
              <div
                v-for="(data, index) in item.company_coordinators"
                :key="index"
              >
                <div>{{ data.name }} {{ data.surname }}</div>
              </div>
            </template>
            <!--Role -->
            <template v-slot:item.cost_by="{ item }">
              <div>{{ item.cost_by }}</div>
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
                  <v-list-item link @click="editPage(item.id)">
                    <v-list-item-title>
                      <v-icon small class="mr-2"> mdi-pencil </v-icon>
                      ແກ້ໄຂ
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item link @click="deleteItem(item.id)">
                    <v-list-item-title>
                      <v-icon small> mdi-delete </v-icon>
                      ລຶບ
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template> </v-data-table
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
    </div>

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>
 
<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
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
      per_page: 15,
      search: "",
      oldVal: "",
      //Add Package
      // start_date: "",
      // start_menu: false,
      allowedDates: (val) => new Date(val).getDate() === 1,
      packages: [],
      selectedPackage: "",
      start_collect: false,
      server_errors: {},
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
          id: 1,
          name: "inactive",
        },
        {
          id: 1,
          name: "trial",
        },
      ],

      headers: [
        { text: "ບໍລິສັດ", value: "company_name" },
        { text: "ຊື່ຜູ້ຮັບຜິດຊອບ", value: "company_coordinators" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ບ້ານ", value: "village.name", sortable: false },
        { text: "ເມືອງ", value: "district.name", sortable: false },
        // { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        { text: "ແພັກເກດ", value: "cost_by" },
        { text: "Image", value: "media" },
        { text: "", value: "actions", sortable: false },
      ],
    };
  },
  methods: {
    fetchData() {
      console.log(this.selectedVillage);
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("company", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
            villages: this.selectedVillage,
            date_from: this.start_date,
            date_end: this.start_date,
            statuses: this.selectedStatus,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.customers = res.data.data.data;
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
        .catch(() => {});
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
        .catch(() => {});
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.customerId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("company/" + this.customerId)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.fetchData();
          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response.data.message,
          });
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    createPage() {
      this.$router.push({
        name: "CreateCompany",
      });
    },
    editPage(id) {
      this.$router.push({
        name: "EditCompany",
        params: { id },
      });
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewCompany",
        params: { id },
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
    statusColor(value) {
      console.log(value);
      if (value == "active") return "success";
      else if (value == "inactive") return "error";
      else return "info";
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    selectedVillage: function () {
      this.fetchData();
    },
    selectedDistrict: function () {
      this.fetchVillage();
    },
    selectedStatus: function () {
      this.fetchData();
    },
    selectedPackage: function () {
      this.server_errors.package_id = "";
    },
    start_date: function () {
      this.server_errors.start_month = "";
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