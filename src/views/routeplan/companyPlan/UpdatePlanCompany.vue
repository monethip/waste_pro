<template>
  <v-container>
    <v-breadcrumbs large class="mt-n4">
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ແກ້ໄຂແຜນເສັ້ນທາງ
      <v-spacer></v-spacer>
      <span class="mr-4"
        ><v-icon color="red">mdi-map-marker</v-icon>ຢູ່ໃນແຜນແລ້ວ</span
      >
      <span
        ><v-icon style="color: #49a3da">mdi-map-marker</v-icon
        >ຍັງບໍທັນຢູ່ໃນແຜນ</span
      >
    </v-breadcrumbs>

    <v-row>
      <v-col cols="12" class="mb-4">
        <GmapMap
          v-if="customers"
          :center="getCenter()"
          :zoom="14"
          style="width: 100%; height: 400px"
          :disableDefaultUI="true"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoPosition"
            :opened="infoOpened"
            :conent="infoContent"
            @closeclick="infoOpened = false"
            >{{ infoContent }}
          </gmap-info-window>
          <GmapMarker
            :key="index"
            v-for="(m, index) in customers"
            :position="getMarkers(m)"
            @click="toggleInfo(m, index)"
            :draggable="false"
            :icon="getSiteIcon(m)"
            :animation="2"
            :clickable="true"
          />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col cols="2">
        <v-btn
          class="btn-primary"
          @click="updateRoutePlan()"
          :loading="loading"
          :disabled="loading"
        >
          ແກ້ໄຂ
        </v-btn>
      </v-col>
      <v-col cols="2">
        <h4 v-if="customers">ລວມ {{ customers.length }}</h4>
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="Name"
          required
          v-model="plan.name"
          outlined
          dense
        ></v-text-field>
        <p class="errors">
          {{ server_errors.name }}
        </p>
      </v-col>

      <v-col cols="2">
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
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <!--
          <div>
            <v-btn text color="primary" @click="addCustomer"
              ><v-icon medium> mdi-plus </v-icon></v-btn
            >
          </div>
          -->

          <main class="page page--table">
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
              v-model="selectedRows"
              item-key="id"
              class="page__table"
            >
              <template v-slot:body="props">
                <draggable :list="props.items" tag="tbody" @change="afterAdd">
                  <tr v-for="(user, index) in props.items" :key="index">
                    <td>
                      <v-icon small class="page__grab-icon">
                        mdi-arrow-all
                      </v-icon>
                    </td>
                    <!-- <td>{{ index + 1 }}</td> -->
                    <td>{{ user.priority }}</td>
                    <td>{{ user.customer_id }}</td>
                    <td>
                      <div v-if="(user.customer_type = 'home')">
                        {{ user.customer.name }}
                      </div>
                      <div v-if="(user.customer_type = 'company')">
                        {{ user.customer.company_name }}
                      </div>
                    </td>
                    <!-- <td>{{ user.address_detail }}</td>
                    <td>{{ user.village.name }}</td>
                    <td>{{ user.district.name }}</td> -->
                    <td>
                      <!--
                        <v-icon small class="mr-2" @click="viewPage(user.id)">
                          mdi-eye
                        </v-icon>
                        -->
                      <v-icon small @click="deleteItem(index)">
                        mdi-delete
                      </v-icon>
                    </td>
                  </tr>
                </draggable>
              </template>
            </v-data-table>
          </main>
        </v-card-text>
      </v-card>
    </div>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">ເພີ່ມລູກຄ້າເຂົ້າໃນແຜນ</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row class="mb-n6">
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
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-autocomplete
                    v-model="selectedVillage"
                    :items="villages"
                    item-text="name"
                    item-value="id"
                    label="ເລືອກບ້ານ"
                    filled
                    chips
                    color="blue-grey lighten-2"
                    multiple
                  >
                    <template v-slot:selection="data">
                      <v-chip
                        v-bind="data.attrs"
                        :input-value="data.selected"
                        close
                        @click="data.select"
                        @click:close="remove(data.item)"
                      >
                        {{ data.item.name }}
                      </v-chip>
                    </template>
                  </v-autocomplete>
                </v-col>
              </v-row>

              <v-data-table
                :headers="addheaders"
                :items="addCustomers"
                :search="search"
                :disable-pagination="true"
                hide-default-footer
                v-model="selectedRows"
                item-key="id"
                class="page__table"
              >
                <template v-slot:body="props">
                  <draggable :list="props.items" tag="tbody" @change="afterAdd">
                    <tr v-for="(user, index) in props.items" :key="index">
                      <td>{{ index + 1 }}</td>
                      <td>{{ user.id }}</td>
                      <td>{{ user.company_name }}</td>
                      <td>{{ user.user.phone }}</td>
                      <!-- <td>{{ user.address_detail }}</td> -->
                      <td>{{ user.village.name }}</td>
                      <td>{{ user.district.name }}</td>
                      <td>
                        <v-icon small @click="addItem(user)"> mdi-plus </v-icon>
                      </td>
                    </tr>
                  </draggable>
                </template>
              </v-data-table>
              <br />
              <template>
                <Pagination
                  v-if="pagination.total_pages > 1"
                  :pagination="pagination"
                  :offset="offset"
                  @paginate="fetchAddCustomer()"
                ></Pagination>
              </template>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
                Close
              </v-btn>
              <!--
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="saveRoutePlan()"
              >
                Save
              </v-btn>
              -->
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
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import draggable from "vuedraggable";
export default {
  name: "Customer",
  // props: ["selectedData", "villages", "items"],
  components: {
    draggable,
  },
  data() {
    return {
      customers: [],
      addCustomers: [],
      customersId: [],
      countcutomer: 0,
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      selectedVillage: [],
      selectedCustomer: [],
      exclude_customers: [],
      selectedRows: [],

      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      customer: {},
      customerIndex: "",
      name: "",
      server_errors: {},
      plan: {},
      headers: [
        { text: "", value: "" },
        { text: "#", value: "" },
        { text: "Id", value: "id" },
        { text: "ລູກຄ້າ", value: "" },
        // { text: "Phone", value: "user.phone", sortable: false },
        // { text: "ລາຍລະອຽດທີ່ຢູ່", value: "address_detail" },
        // { text: "ບ້ານ", value: "village.name", sortable: true },
        // { text: "ເມືອງ", value: "district.name", sortable: true },
        { text: "", value: "actions", sortable: false },
      ],
      addheaders: [
        { text: "#", value: "" },
        { text: "Id", value: "id" },
        { text: "ລູກຄ້າ", value: "" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ທີ່ຢູ່", value: "address_detail" },
        // { text: "ບ້ານ", value: "village.name", sortable: true },
        // { text: "ເມືອງ", value: "district.name", sortable: true },
        { text: "", value: "actions", sortable: false },
      ],
      //Map
      latlng: {
        lat: 18.1189434,
        lng: 102.290218,
      },
      markers: [],
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  methods: {
    afterAdd(evt) {
      const oldIndex = evt.moved.oldIndex;
      const newIndex = evt.moved.newIndex;
      var tmpOrder = this.customers[oldIndex];
      this.customers.splice(oldIndex, 1);
      this.customers.splice(newIndex, 0, tmpOrder);
    },
    backPrevios() {
      this.$router.go(-1);
    },
    addCustomer() {
      this.$store.commit("modalAdd_State", true);
      this.fetchAddCustomer();
      this.fetchAddress();
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("route-plan/" + this.$route.params.id + "/route-plan-detail", {
          params: {
            // page: this.pagination.current_page,
            // per_page: this.per_page,
            // // filter: this.search,
            // villages: this.selectedVillage,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.customers = res.data.data;
              console.log(this.customers);
              // this.pagination = res.data.data.pagination;
              this.getCenter();
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    fetchDetail() {
      this.$axios
        .get("route-plan/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.plan = res.data.data;
              console.log(this.plan);
            }, 100);
          }
        })
        .catch(() => {});
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(index) {
      this.customerIndex = index;
      // if (this.selectedRows.length > 0) {
      this.$store.commit("modalDelete_State", true);
      // }
    },

    deleteItemConfirm() {
      this.selectedCustomer = [];
      this.loading = true;
      this.customers.splice(this.customerIndex, 1);
      // for (var i = 0; i < this.selectedRows.length; i++) {
      //   const index = this.customers.indexOf(this.selectedRows[i]);
      //   this.selectedCustomer.push(this.customers[index]);
      //   this.customers.splice(index, 1);
      // }
      this.selectedCustomer.filter((item) => {
        this.exclude_customers.push(item.id);
      });
      this.$store.commit("Toast_State", {
        value: true,
        color: "success",
        msg: "ລຶບຂໍ້ມູນສຳເລັດແລ້ວ",
      });
      this.selectedRows = [];
      // this.fetchData();
      this.loading = false;
      this.$store.commit("modalDelete_State", false);
    },
    addItem(item) {
      console.log(item);
      let data = {};
      data.customer_id = item.customer_id;
      data.id = item.id;
      // data.customer.name = "Name";
      data.priority = "";
      console.log(data);
      this.customers.push(data);

      console.log(this.customers);
      this.addCustomers.splice(item.index, 1);
      // for (var i = 0; i < this.selectedRows.length; i++) {
      //   const index = this.customers.indexOf(this.selectedRows[i]);
      //   this.selectedCustomer.push(this.customers[index]);
      //   this.customers.splice(index, 1);
      // }
      // this.selectedCustomer.filter((item) => {
      //   this.exclude_customers.push(item.id);
      // });
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    updateRoutePlan() {
      const selectedCustomer = [];
      this.customers.map((item) => {
        selectedCustomer.push(item.customer_id);
      });
      if (this.customers.length > 0) {
        this.loading = true;
        this.$axios
          .put(
            "update-route-plan/" + this.$route.params.id,
            {
              name: this.plan.name,
              customers: selectedCustomer,
            },
            { responseType: "blob" }
          )
          .then((res) => {
            if (res.status == 200) {
              setTimeout(() => {
                this.loading = false;
              }, 300);
              this.$router.push({
                name: "Plan",
              });
            }
          })
          .catch((error) => {
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            this.loading = false;
          });
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກລູກຄ້າກ່ອນ",
        });
      }
    },

    viewPage(id) {
      this.$router.push({
        name: "ViewCustomer",
        params: { id },
      });
      // window.open(route.href, "_blank");
    },

    fetchAddCustomer() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("company", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            // filter: this.search,
            villages: this.selectedVillage,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.addCustomers = res.data.data.data;
              // this.selectedAllCustomer = res.data.data;
              this.pagination = res.data.data.pagination;
              console.log(this.addCustomers);
              // this.getCenter();
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
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
                // console.log(this.districts);
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

    Search() {
      GetOldValueOnInput(this);
    },

    //Google map
    getCenter() {
      if (this.customers.length) {
        if (parseFloat(this.customers[0].customer.lat) == null) {
          return this.latlng;
        } else {
          const latlng = {
            lat: parseFloat(this.customers[0].customer.lat),
            lng: parseFloat(this.customers[0].customer.lng),
          };
          return latlng;
        }
      }
      return this.latlng;
    },
    getSiteIcon(status) {
      var pin1 = {
        url: require("@coms/../../src/assets/pin1.svg"),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        size: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
      };
      var pin2 = {
        url: require("@coms/../../src/assets/pin2.svg"),
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        disableDefaultUi: false,
        size: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
        color: "#000",
        scaledSize: {
          width: 35,
          height: 55,
          f: "px",
          b: "px",
        },
      };

      try {
        switch (status.route_plan_details_count) {
          case 0:
            return pin1;
          case 1:
            return pin2;
        }
      } catch (e) {
        return pin1;
      }
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.customer.lat),
          lng: parseFloat(m.customer.lng),
        };
      }
    },
    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent = m.name + " (" + m.house_number + ") ";
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },

    rowClicked(row) {
      this.toggleSelection(row.id);
      console.log(row);
    },
    toggleSelection(keyID) {
      if (this.selectedRows.includes(keyID)) {
        this.selectedRows = this.selectedRows.filter(
          (selectedKeyID) => selectedKeyID !== keyID
        );
      } else {
        this.selectedRows.push(keyID);
      }
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },

    selectedVillage: function () {
      this.fetchAddCustomer();
    },
    selectedDistrict: function () {
      this.fetchVillage();
    },
  },
  created() {
    this.fetchData();
    this.fetchDetail();
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
.page--table {
  .page {
    &__table {
      margin-top: 20px;
    }
    &__grab-icon {
      cursor: move;
    }
  }
}
</style>