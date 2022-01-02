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
                  <h3 class="primary-color">400</h3>
                  <h3>Users</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4><span class="succes-color">350</span></h4>
                  <h4>Active</h4>
                </v-col>
                <v-col>
                  <h4><span class="red-color">50</span></h4>
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
                  <h3 class="primary-color">200</h3>
                  <h3>Driver</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4><span class="succes-color">150</span></h4>
                  <h4>Active</h4>
                </v-col>
                <v-col>
                  <h4><span class="red-color">50</span></h4>
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
                  <h3 class="primary-color">
                    50,000 <span class="succes-color text-small">+3.0%</span>
                  </h3>
                  <h3>Customers</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4><span class="succes-color">40,500</span></h4>
                  <h4>Active</h4>
                </v-col>
                <v-col>
                  <h4><span class="red-color">500</span></h4>
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
                  <h3 class="primary-color">
                    10,000 <span class="succes-color text-small">+3.0%</span>
                  </h3>
                  <h3>Company</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <h4><span class="succes-color">9,500</span></h4>
                  <h4>Active</h4>
                </v-col>
                <v-col>
                  <h4><span class="red-color">500</span></h4>
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
                  <h3 class="my-2">ຈຳນວນຂີ້ເຫຍື້ອ / ອັດຕາການເພີ່ມຂື້ນ</h3>
                  <v-row>
                    <v-col>
                      <v-icon large @click="user()">mdi-package</v-icon>
                      <v-row>
                        <v-col>
                          <h4>
                            <span class="primary-color">350</span>
                          </h4>
                          <h4 class="text-medium">ຖົງ</h4>
                        </v-col>
                        <v-col>
                          <h4>
                            <span class="primary-color">50</span>
                          </h4>
                          <h4 class="text-medium">Container</h4>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-divider class="mx-4" vertical></v-divider>
                    <v-col>
                      <v-row>
                        <v-col>
                          <h4>
                            <span class="primary-color">350</span>
                            <span class="text-small succes-color"> (+15%)</span>
                          </h4>
                          <h4 class="text-medium">ຖົງ</h4>
                        </v-col>
                        <v-col>
                          <h4>
                            <span class="primary-color">50</span>
                            <span class="text-small succes-color"> (+10%)</span>
                          </h4>
                          <h4 class="text-medium">Container</h4>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h3>ທັງໝົດ</h3>
                    </v-col>
                    <v-col>
                      <h3>ມື້ນີ້</h3>
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
                  <h3 class="my-2">ລາຍໄດ້ສະເລ່ຍ / ຍອດເຕີບໂຕ</h3>
                  <v-row>
                    <v-col>
                      <v-icon large @click="user()">mdi-cash-plus</v-icon>
                      <v-row>
                        <v-col>
                          <h4>
                            <span class="primary-color"
                              >10,000,000,000,000</span
                            >
                          </h4>
                          <h4 class="text-medium">ກີບ</h4>
                        </v-col>
                        <v-col>
                          <h4>
                            <span class="primary-color">100,000,000</span>
                          </h4>
                          <h4 class="text-medium">ບິນ</h4>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-divider class="mx-4" vertical></v-divider>
                    <v-col>
                      <v-row>
                        <v-col>
                          <h4>
                            <span class="primary-color">1,500,000,000</span>
                            <span class="text-small red-color"> (-15%)</span>
                          </h4>
                          <h4 class="text-medium">ກີບ</h4>
                        </v-col>
                        <v-col>
                          <h4>
                            <span class="primary-color">50</span>
                            <span class="text-small red-color"> (-15%)</span>
                          </h4>
                          <h4 class="text-medium">ບິນ</h4>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <h3>ທັງໝົດ</h3>
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
import UserChart from "@views/dashboard/chart/userChart";
import TrashChart from "@views/dashboard/chart/trashChart";
import Package from "@views/dashboard/chart/package";
import RouteTrash from "@views/dashboard/chart/routeTrash";
import Income from "@/views/dashboard/chart/income.vue";
export default {
  title() {
    return `Vientiane Waste Co-Dev|Dashboard`;
  },
  components: {
    UserChart,
    Package,
    RouteTrash,
    Income,
    TrashChart,
  },
  methods: {
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
};
</script>
<style lang="scss">
@import "../../../public/scss/main.scss";
</style>