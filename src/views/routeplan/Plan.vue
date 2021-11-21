<template>
  <v-container>
    <v-row class="mb-n">
      <v-col>
        <v-btn class="btn-primary mr-6" @click="createPlan()"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn class="btn-primary" @click="createPage()"
          ><v-icon>mdi-application-export</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4>ແຜນຈັດເສັ້ນທາງການເກັບຂີ້ເຫຍືຍອ</h4>
      </v-col>
      <!--
      <v-col>
        <v-text-field
          outlined
          dense
          clearables
          prepend-inner-icon="mdi-magnify"
          label="Name"
          type="text"
          v-model="search"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
      -->
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

          <v-card-actions align="center">
            <v-btn color="lighten-2" text @click="viewPage(item.id)">
              <v-icon small class="mr-2"> mdi-eye </v-icon>
            </v-btn>
            <v-btn color="lighten-2" text @click="editPage(item.id)">
              <v-icon small class="mr-2"> mdi-pencil </v-icon>
            </v-btn>
            <v-btn color="lighten-2" text @click="deleteItem(item.id)">
              <v-icon small> mdi-delete </v-icon>
            </v-btn>
            <v-btn color="lighten-2" text>
              <v-icon small class="mr-2"> mdi-download </v-icon>
              <a
                v-for="(data, index) in item.media"
                :key="index"
                :href="data.url"
              >
              </a>
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

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Add Route Plan</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="plan.name"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ລາຍລະອຽດ "
                      required
                      v-model="plan.description"
                      type="text"
                      class="input-number"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="AddItem()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

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

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "", value: "actions", sortable: false },
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      server_errors: {},
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
        .get("route-plan", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            // filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.plans = res.data.data.data;
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

    openAddModal() {
      this.$store.commit("modalAdd_State", true);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("user-setting/user", this.plan)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
                this.user = {};
                this.fetchData();
                this.reset();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
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
              this.toast.msg = res.data.message;
              this.$store.commit("Toast_State", this.toast);
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
            }, 300);
          }
        })
        .catch(() => {
          this.fetchData();
          this.$store.commit("Toast_State", this.toast_error);
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    createPage() {
      this.$router.push({
        name: "Export-Plan",
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
    // Search() {
    //   GetOldValueOnInput(this);
    // },
  },
  // watch: {
  //   search: function (value) {
  //     if (value == "") {
  //       this.fetchData();
  //     }
  //   },
  // },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>