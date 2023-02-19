<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="btn-primary mr-6" @click="createPlan()">
          <v-icon>mdi-plus</v-icon>
          ເພີ່ມແຜນ (Kmz)
        </v-btn>
        <v-btn class="btn-primary mr-6" @click="createPage()">
          <v-icon>mdi-application-export</v-icon>
          Export Kmz ຄົວເຮືອນ
        </v-btn>
        <v-btn class="btn-primary mr-6" @click="createPlanNomMap()">
          <v-icon>mdi-plus</v-icon>
          ເພີ່ມແຜນທີ່ເປັນຄົວເຮືອນ
        </v-btn>
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
    <!--        <v-row class="mb-n4">-->
    <!--          <v-col-->
    <!--            cols="4"-->
    <!--            :loading="loading"-->
    <!--            class="my-2"-->
    <!--            max-width="374"-->
    <!--            v-for="(item, index) in plans"-->
    <!--            :key="index"-->
    <!--          >-->
    <!--            <v-card elevation="1">-->
    <!--              &lt;!&ndash;<v-img height="250" v-html="item.embed"></v-img>&ndash;&gt;-->
    <!--              <div>-->
    <!--                <iframe :src="item.embed" height="100%" width="100%"></iframe>-->
    <!--              </div>-->
    <!--              <v-card-title>{{ item.name }}</v-card-title>-->
    <!--               <v-card-text>-->
    <!--                 <p>{{ item.description }}</p>-->
    <!--               </v-card-text>-->
    <!--              <v-divider class="mx-4"></v-divider>-->

    <!--              <v-card-actions class="white justify-center">-->
    <!--                <v-btn color="lighten-2" text @click="viewPage(item.id)">-->
    <!--                  <v-icon small class="mr-2"> mdi-eye </v-icon>-->
    <!--                </v-btn>-->
    <!--                <v-btn color="lighten-2" text @click="editPage(item.id)">-->
    <!--                  <v-icon small class="mr-2"> mdi-pencil </v-icon>-->
    <!--                </v-btn>-->
    <!--                <v-btn color="lighten-2" text @click="deleteItem(item.id)">-->
    <!--                  <v-icon small> mdi-delete </v-icon>-->
    <!--                </v-btn>-->
    <!--                <v-btn-->
    <!--                  color="lighten-2"-->
    <!--                  text-->
    <!--                  v-for="(data, index) in item.media"-->
    <!--                  :key="index"-->
    <!--                  @click="download(data.url)"-->
    <!--                >-->
    <!--                  <v-icon small class="mr-2"> mdi-download </v-icon>-->
    <!--                </v-btn>-->
    <!--              </v-card-actions>-->
    <!--            </v-card>-->
    <!--          </v-col>-->
    <!--        </v-row>-->
    <br/>
    <!--
   <template>
     <    <Pagination
       v-if="pagination.total_pages > 1"
       :pagination="pagination"
       :offset="offset"
       @paginate="fetchData()"
     ></Pagination>

    </template>-->

    <v-card>
      <v-card flat>
        <v-card-text>
          <v-text-field
              v-model="search"
              clearable
              hide-details
              label="Search"
              prepend-inner-icon="mdi-magnify"
              single-line
              @keyup.enter="Search()"
          ></v-text-field>
          <v-data-table
              :disable-pagination="true"
              :headers="headers"
              :items="plans"
              :search="search"
              hide-default-footer
          >
            <template v-slot:item.actions="{ item }">
              <v-icon class="mr-3" small @click="viewPage(item.id)">mdi-eye</v-icon>
              <a v-for="(data, index) in item.media" :key="index" :href="data.url">
                <v-icon class="mr-3" small>mdi-download</v-icon>
              </a>
              <v-icon class="mr-3" small @click="editPage(item.id)">mdi-pencil</v-icon>
              <v-icon small @click="deleteItem(item.id)">mdi-delete</v-icon>
            </template>
            <template v-slot:item.route_plan_details_count="{ item }">
              <v-chip
                  color="blue"
                  dark
              >{{ Intl.NumberFormat().format(item.route_plan_details_count) }}
              </v-chip>
            </template>
            <template v-slot:item.package_bag="{ item }">
              <v-chip
                  color="green"
                  outlined
              >{{ Intl.NumberFormat().format(item.package_bag) }}
              </v-chip>
            </template>
          </v-data-table>
          <br/>
          <template>
            <Pagination
                v-if="pagination.total_pages > 1"
                :offset="offset"
                :pagination="pagination"
                @paginate="fetchData()"
            ></Pagination>
          </template>
        </v-card-text>
      </v-card>
    </v-card>

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
              :disabled="loading"
              :loading="loading"
              color="blue darken-1"
              text
              @click="deleteItemConfirm"
          >OK
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
// import { GetOldValueOnInput } from "@/Helpers/GetValue";
import home from "@views/routePlan/home";

export default {
  title() {
    return `Vientiane Waste Co-Dev|Route Plan`;
  },
  mixins: [home],
  name: "Customer",
  data() {
    return {
      tab: null,
      plans: [],
      plan: {},
      loading: false,
      firstLoad: true,
      planId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 1000,
      search: "",
      oldVal: "",
      selectedCustomerType: "",
      customer_types: [
        {
          name: "",
          display: "ທັງໝົດ"
        },
        {
          name: "company",
          display: "ບໍລິສັດ"
        },
        {
          name: "home",
          display: "ຄົວເຮືອນ"
        }
      ],

      headers: [
        {text: "ຊື່ແຜນ", value: "name"},
        {text: "ຈຳນວນຈຸດ", value: "route_plan_details_count"},
        {text: "ຂີ້ເຫຍື້ອຄາດໝາຍ (ຖົງ)", value: "package_bag"},
        {text: "Description", value: "description", sortable: false},
        {
          text: "ຈັດການຂໍ້ມູນ",
          value: "actions",
          sortable: false,
          width: "120px"
        }
      ],
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length >= 2) || "Name must be less than 2 characters"
      ],
      server_errors: {}
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
              customer_type: "home",
              without_month_info: true
            }
          })
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit("Loading_State", false);
                this.plans = res.data.data.data;
                this.pagination = res.data.data.pagination;
              }, 100);
            }
          })
          .catch(error => {
            this.$store.commit("Loading_State", false);
            if (error.response && error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          }).final(() => this.firstLoad = false);
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
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message
                });
                this.$store.commit("modalDelete_State", false);
                this.fetchData();
              }, 300);
            }
          })
          .catch(error => {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response
                  ? error.response.data.message
                  : "Something went wrong"
            });
            this.$store.commit("modalDelete_State", false);
            this.loading = false;
          });
    },
    createPage() {
      this.$router.push({
        name: "Export-Plan"
      });
    },
    exportCompany() {
      this.$router.push({
        name: "Export-Plan-Company"
      });
    },

    createPlan() {
      this.$router.push({
        name: "CreatePlan"
      });
    },
    createPlanNomMap() {
      this.$router.push({
        name: "SelectHomeRoutePlan"
      });
    },
    createPlanCompany() {
      this.$router.push({
        name: "SelectCompanyRoutePlan"
      });
    },

    editPage(id) {
      this.$router.push({
        name: "EditPlan",
        params: {id}
      });
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewPlan",
        params: {id}
      });
      //  this.$router.push({
      //   name: "ViewCompanyPlan",
      //   params: { id },
      // });
    },
    download(url) {
      window.location.href = url;
    }
    // Search() {
    //   GetOldValueOnInput(this);
    // },
  },
  created() {
    this.fetchData();
  },
  watch: {
    selectedCustomerType: function () {
      if (!this.firstLoad) this.fetchData();
    }
  }
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";
</style>
