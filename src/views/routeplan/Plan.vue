<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="btn-primary mr-6" @click="createPlan()"
          ><v-icon>mdi-plus </v-icon> Add
        </v-btn>
        <v-btn class="btn-primary mr-6" @click="createPage()"
          ><v-icon>mdi-application-export </v-icon> Export ລູກຄ້າຄົວເຮືອນ
        </v-btn>
        <v-btn class="btn-primary" @click="exportCompany()"
          ><v-icon>mdi-application-export </v-icon> Export ລູກຄ້າບໍລິສັດ
        </v-btn>
      </v-col>
      <v-col>
        <v-autocomplete
          outlined
          dense
          :items="customer_types"
          v-model="selectedCustomerType"
          item-text="display"
          item-value="name"
          label="ປະເພດລູກຄ້າ"
        ></v-autocomplete>
      </v-col>
      <!--
      <v-col>
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
      </v-col>
      -->
    </v-row>
    <v-row class="my-n6">
      <v-col>
        <h4>ແຜນຈັດເສັ້ນທາງການເກັບຂີ້ເຫຍື້ອ</h4>
      </v-col>
    </v-row>
    <v-row class="mb-n4">
      <v-col
        cols="4"
        :loading="loading"
        class="my-2"
        max-width="374"
        v-for="(item, index) in plans"
        :key="index"
      >
        <v-card>
          <v-img height="250" v-html="item.embed"></v-img>
          <v-card-title>{{ item.name }}</v-card-title>
          <v-divider class="mx-4"></v-divider>

          <v-card-actions class="white justify-center">
            <v-btn color="lighten-2" text @click="viewPage(item.id)">
              <v-icon small class="mr-2"> mdi-eye </v-icon>
            </v-btn>
            <v-btn color="lighten-2" text @click="editPage(item.id)">
              <v-icon small class="mr-2"> mdi-pencil </v-icon>
            </v-btn>
            <v-btn color="lighten-2" text @click="deleteItem(item.id)">
              <v-icon small> mdi-delete </v-icon>
            </v-btn>
            <v-btn
              color="lighten-2"
              text
              v-for="(data, index) in item.media"
              :key="index"
              @click="download(data.url)"
            >
              <v-icon small class="mr-2"> mdi-download </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <br />
    <template>
      <Pagination
        v-if="pagination.total_pages > 1"
        :pagination="pagination"
        :offset="offset"
        @paginate="fetchData()"
      ></Pagination>
    </template>
    <!--
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="plans"
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

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
                <a
                  v-for="(data, index) in item.media"
                  :key="index"
                  :href="data.url"
                >
                  <v-icon small class="mr-2"> mdi-download </v-icon>
                </a>
                <v-icon small class="mr-2" @click="editPage(item.id)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
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
      </v-card>
      -->
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
// import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  data() {
    return {
      tab: null,
      plans: [],
      plan: {},
      loading: false,
      planId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 9,
      search: "",
      oldVal: "",
      selectedCustomerType: "",
      customer_types: [
        {
          name: "",
          display: "ທັງໝົດ",
        },
        {
          name: "company",
          display: "ບໍລິສັດ",
        },
        {
          name: "home",
          display: "ຄົວເຮືອນ",
        },
      ],

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "", value: "actions", sortable: false },
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      server_errors: {},
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("route-plan", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            customer_type: this.selectedCustomerType,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.plans = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 100);
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

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.planId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("route-plan/" + this.planId)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
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
        name: "Export-Plan",
      });
    },
    exportCompany() {
      this.$router.push({
        name: "Export-Plan-Company",
      });
    },

    createPlan() {
      this.$router.push({
        name: "CreatePlan",
      });
    },

    editPage(id) {
      this.$router.push({
        name: "EditPlan",
        params: { id },
      });
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewPlan",
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
  created() {
    this.fetchData();
  },
  watch: {
    selectedCustomerType: function () {
      this.fetchData();
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>