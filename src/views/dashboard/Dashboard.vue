<template>
  <div style="background: #eee !important">
    <v-container>
      <v-row class="mb-n6">
        <v-col>
          <h3>ຈຳນວນ User</h3>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card elevation="1">
            <v-card-text>
              <v-row>
                <v-col>
                  <v-icon large @click="user()">mdi-account</v-icon>
                </v-col>
                <v-divider class="mx-4" vertical></v-divider>
                <v-col>
                  <h3 class="primary-color" v-if="data.user">
                    {{ data.user.all_user }}
                  </h3>
                  <h3>Users</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4>
                    <span class="succes-color" v-if="data.user">{{
                      data.user.active
                    }}</span>
                  </h4>
                  <h4>Active</h4>
                </v-col>
                <v-col>
                  <h4>
                    <span class="red-color" v-if="data.user">{{
                      data.user.inactive
                    }}</span>
                  </h4>
                  <h4>Inactive</h4>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="1">
            <v-card-text>
              <v-row>
                <v-col>
                  <v-icon large @click="driver()">mdi-account-tie</v-icon>
                </v-col>
                <v-divider class="mx-4" vertical></v-divider>
                <v-col>
                  <h3 class="primary-color" v-if="data.customer">
                    {{ data.customer.all_driver }}
                  </h3>
                  <h3>Driver</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4 v-if="data.customer">
                    <span class="succes-color">{{ data.customer.active }}</span>
                  </h4>
                  <h4>Active</h4>
                </v-col>
                <v-col>
                  <h4 v-if="data.customer">
                    <span class="red-color">{{ data.customer.inactive }}</span>
                  </h4>
                  <h4>Inactive</h4>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="1">
            <v-card-text>
              <v-row>
                <v-col>
                  <v-icon large @click="customer()"
                    >mdi-account-multiple</v-icon
                  >
                </v-col>
                <v-divider class="mx-4" vertical></v-divider>
                <v-col>
                  <h3 class="primary-color" v-if="data.customer">
                    {{ data.customer.all_driver }}
                  </h3>
                  <h3>Home</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4 v-if="data.customer">
                    <span class="succes-color">
                      {{ data.customer.active }}</span
                    >
                  </h4>
                  <h4>Active</h4>
                </v-col>
                <v-col>
                  <h4 v-if="data.customer">
                    <span class="red-color"> {{ data.customer.inactive }}</span>
                  </h4>
                  <h4>Inactive</h4>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="1">
            <v-card-text>
              <v-row>
                <v-col>
                  <v-icon large @click="customer()">mdi-office-building</v-icon>
                </v-col>
                <v-divider class="mx-4" vertical></v-divider>
                <v-col>
                  <h3 class="primary-color" v-if="data.company">
                    {{ data.company.all_driver }}
                  </h3>
                  <h3>Company</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4 v-if="data.company">
                    <span class="succes-color">{{ data.company.active }} </span>
                  </h4>
                  <h4>Active</h4>
                </v-col>
                <v-col>
                  <h4 v-if="data.company">
                    <span class="red-color">{{ data.company.inactive }}</span>
                  </h4>
                  <h4>Inactive</h4>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-row>
            <v-col>
              <v-card elevation="1">
                <v-card-text>
                  <h3 class="my-2">ຈຳນວນຂີ້ເຫຍື້ອ</h3>
                  <v-row>
                    <v-col>
                      <v-icon large @click="user()">mdi-package</v-icon>
                      <v-row>
                        <v-col>
                          <h4 v-if="data.last_month_collection">
                            <span class="primary-color">{{
                              data.last_month_collection.bag_amount
                            }}</span>
                          </h4>
                          <h4 class="text-medium">ຖົງ</h4>
                        </v-col>
                        <v-col>
                          <h4 v-if="data.last_month_collection">
                            <span class="primary-color">{{
                              data.last_month_collection.container_amount
                            }}</span>
                          </h4>
                          <h4 class="text-medium">Container</h4>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-divider class="mx-4" vertical></v-divider>
                    <v-col>
                      <v-row>
                        <v-col>
                          <h4 v-if="data.current_month_collection">
                            <span class="succes-color">{{
                              data.current_month_collection.bag_amount
                            }}</span>
                          </h4>
                          <h4 class="text-medium">ຖົງ</h4>
                        </v-col>
                        <v-col>
                          <h4 v-if="data.current_month_collection">
                            <span class="succes-color">{{
                              data.current_month_collection.container_amount
                            }}</span>
                          </h4>
                          <h4 class="text-medium">Container</h4>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h3>ເດືອນຜ່ານມາ</h3>
                    </v-col>
                    <v-col>
                      <h3>ເດືອນນີ້</h3>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col>
          <v-row>
            <v-col>
              <v-card elevation="1">
                <v-card-text>
                  <h3 class="my-2">ລາຍໄດ້ສະເລ່ຍ</h3>
                  <v-row>
                    <v-col>
                      <v-icon large @click="user()">mdi-cash-plus</v-icon>
                      <v-row>
                        <v-col>
                          <h4 v-if="data.last_month_invoice">
                            <span class="primary-color">{{
                              data.last_month_invoice.success_total
                            }}</span>
                          </h4>
                          <h4 class="text-medium">ກີບ</h4>
                        </v-col>
                        <v-col>
                          <h4 v-if="data.last_month_invoice">
                            <span class="primary-color">{{
                              data.last_month_invoice.total_invoice
                            }}</span>
                          </h4>
                          <h4 class="text-medium">ບິນ</h4>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-divider class="mx-4" vertical></v-divider>
                    <v-col>
                      <v-row>
                        <v-col>
                          <h4 v-if="data.current_month_invoice">
                            <span class="succes-color">{{
                              data.current_month_invoice.success_total
                            }}</span>
                          </h4>
                          <h4 class="text-medium">ກີບ</h4>
                        </v-col>
                        <v-col>
                          <h4 v-if="data.current_month_invoice">
                            <span class="succes-color">{{
                              data.current_month_invoice.total_invoice
                            }}</span>
                          </h4>
                          <h4 class="text-medium">ບິນ</h4>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h3>ເດືອນຜ່ານມາ</h3>
                    </v-col>
                    <v-col>
                      <h3>ເດືອນນີ້</h3>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <br class="mx-4" />
      <v-card elevation="1">
        <v-card-text>
          <v-row>
            <v-col>
              <h3>ຍອດຈຳນວນເກັບຂີ້ເຫຍື້ອ</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <trash-chart />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <br class="mx-4" />
      <v-card elevation="1">
        <v-card-text>
          <!--
          <v-row>
            <v-col>
              <h3>ລູກຄ້າສະໝັກສະມາຊິກ</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <user-chart />
            </v-col>
          </v-row>
          -->
          <!--
          <v-row>
            <v-col>
              <h3>ສະໝັກແພັກເກດ</h3>
            </v-col>
            <v-col> <h3>ຈຳນວນເກັບຂີ້ເຫື້ຍອແບ່ງຕາມສາຍທາງ</h3></v-col>
          </v-row>
          <v-row>
            <v-col>
              <package />
            </v-col>
            <v-col>
              <route-trash />
            </v-col>
          </v-row>
          -->
          <v-row>
            <v-col>
              <h3>ລາຍໄດ້ສະເລ່ຍແຕ່ລະເດືອນ</h3>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <income />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
// import UserChart from "@views/dashboard/chart/userChart";
import TrashChart from "@views/dashboard/chart/trashChart";
// import Package from "@views/dashboard/chart/package";
// import RouteTrash from "@views/dashboard/chart/routeTrash";
import Income from "@/views/dashboard/chart/income.vue";
export default {
  title() {
    return `Vientiane Waste Co-Dev|Dashboard`;
  },
  components: {
    // UserChart,
    // Package,
    // RouteTrash,
    Income,
    TrashChart,
  },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("dashboard")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.data = res.data.data;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          // this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    user() {
      this.$router.push("user");
    },
    driver() {
      this.$router.push("driver");
    },
    customer() {
      this.$router.push("customer");
    },
    package() {
      this.$router.push("package");
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
<style lang="scss">
@import "../../../public/scss/main.scss";
</style>