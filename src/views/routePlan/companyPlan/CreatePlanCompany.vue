<template>
  <v-container>
    <v-breadcrumbs large class="mt-n4">
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-keyboard-backspace </v-icon>
      </v-btn>
      ເພີ່ມແຜນເສັ້ນທາງ
      <v-spacer></v-spacer>
      <span class="mr-4">
        <v-icon color="red">mdi-map-marker</v-icon>ຍັງບໍທັນຢູ່ໃນແຜນ
      </span>
      <span>
        <v-icon style="color: #49a3da">mdi-map-marker</v-icon>ຢູ່ໃນແຜນແລ້ວ
      </span>
    </v-breadcrumbs>

    <v-row>
      <v-col cols="12" class="mb-4">
        <GmapMap v-if="customers" :center="getCenter()" :zoom="16" style="width: 100%; height: 400px"
          :disableDefaultUI="true">
          <gmap-info-window :options="infoOptions" :position="infoPosition" :opened="infoOpened" :conent="infoContent"
            @closeclick="infoOpened = false">{{ infoContent }}
          </gmap-info-window>
          <GmapMarker :key="index" v-for="(m, index) in customers" :position="getMarkers(m)"
            @click="toggleInfo(m, index)" :draggable="false" :icon="getSiteIcon(m)" :animation="2" :clickable="true"
            :label="(index + 1).toString()" />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="createRoutePlan()" :loading="loading" :disabled="loading">
          ບັນທຶກ<v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4 v-if="customers">
          ຈັດລຽນລຳດັບການເກັບຂີ້ເຫື້ຍອລູກຄ້າ {{ customers.length }} ຄົນ
        </h4>
      </v-col>
      <v-col>
        <v-text-field outlined dense clearable prepend-inner-icon="mdi-magnify" label="ຊື່ລູກຄ້າ" type="text"
          v-model="search" @keyup.enter="Search()">
        </v-text-field>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text>
          <!--
            <div>
              <v-btn text color="error" @click="deleteItem"
                ><v-icon medium> mdi-delete </v-icon></v-btn
              >
            </div>
-->
          <main class="page page--table">
            <v-data-table :headers="headers" :items="customers" :search="search" :disable-pagination="true"
              hide-default-footer v-model="selectedRows" item-key="id" class="page__table">
              <template v-slot:body="props">
                <draggable :list="props.items" tag="tbody" @change="afterAdd">
                  <tr v-for="(user, index) in props.items" :key="index">
                    <td>
                      <v-icon small class="page__grab-icon">
                        mdi-arrow-all
                      </v-icon>
                    </td>
                    <td>{{ index + 1 }}</td>
                    <td>{{ user.id }}</td>
                    <td>{{ user.company_name }}</td>
                    <td>{{ user.user.phone }}</td>
                    <td>{{ user.expect_trash ? Intl.NumberFormat().format(user.expect_trash) +
                        getCustomerUnitFunc(user.cost_by) : '-'
                    }}</td>
                    <td>{{ user.created_at }}</td>
                    <td>{{ user.village.name }}</td>
                    <td>{{ user.district.name }}</td>
                    <td>{{ user.collect_description }}</td>


                    <!--                    {text: "ລາຍລະອຽດການບໍລິການ", value: "collect_description"},-->

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
            <span class="headline">Route Plan Name</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="Name *" required v-model="name"></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text :loading="loading" :disabled="loading" @click="saveRoutePlan()">
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
          <v-btn color="blue darken-1" text :loading="loading" :disabled="loading" @click="deleteItemConfirm">OK</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
import draggable from "vuedraggable";
import { getCustomerUnit } from "@/Helpers/Customer"
export default {
  name: "Customer",
  props: ["selectedData", "villages", "items"],
  components: {
    draggable,
  },
  data() {
    return {
      customers: [],
      customersId: [],
      countcutomer: 0,
      loading: false,
      customerId: "",
      //Pagination
      search: "",
      oldVal: "",
      selectedVillage: [],
      selectedCustomer: [],
      exclude_customers: [],
      selectedRows: [],
      customer: {},
      customerIndex: "",
      name: "",
      server_errors: {},
      headers: [
        { text: "", value: "" },
        { text: "#", value: "" },
        { text: "Id", value: "id" },
        { text: "ບໍລິສັດ", value: "company_name" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ຂີ້ເຫຍື້ອຄາດໝາຍ", value: "expect_trash" },
        { text: "ວັນທີ່ເພີ່ມເຂົ້າ", value: "created_at" },
        { text: "ບ້ານ", value: "village.name", sortable: true },
        { text: "ເມືອງ", value: "district.name", sortable: true },
        { text: "ລາຍລະອຽດການບໍລິການ", value: "collect_description", sortable: true },
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
    getCustomerUnitFunc(costBy) {
      return getCustomerUnit(costBy)
    },
    afterAdd(evt) {
      // console.log(evt);
      // const element = evt.moved.element;
      const oldIndex = evt.moved.oldIndex;
      const newIndex = evt.moved.newIndex;

      var tmpOrder = this.customers[oldIndex];
      this.customers.splice(oldIndex, 1);
      this.customers.splice(newIndex, 0, tmpOrder);
      // console.log(this.customers);

      // this.history.push(
      //   `${element.name} is moved from position ${oldIndex} to ${newIndex}`
      // );
    },
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.customers = this.items;
      // localStorage.setItem("customers", this.customers);
      this.selectedVillage = this.villages;
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
      this.fetchData();
      this.loading = false;
      this.$store.commit("modalDelete_State", false);
    },
    createRoutePlan() {
      this.$store.commit("modalAdd_State", true);
    },
    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    saveRoutePlan() {
      const selectedCustomer = [];
      this.customers.map((item) => {
        selectedCustomer.push(item.id);
      });
      if (this.customers.length > 0) {
        this.loading = true;
        this.$axios
          .post(
            "create-route-plan",
            {
              name: this.name,
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
              msg: error.response ? error.response.data.message : 'Something went wrong',
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
    Search() {
      GetOldValueOnInput(this);
    },

    //Google map
    getCenter() {
      if (this.customers.length) {
        if (parseFloat(this.customers[0].lat) == null) {
          console.log(this.latlng)
          return this.latlng;
        } else {
          const latlng = {
            lat: parseFloat(this.customers[0].lat),
            lng: parseFloat(this.customers[0].lng),
          };
          return latlng;
        }
      }
      return this.latlng;
    },
    getSiteIcon(status) {
      const pin1 = {
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
      const pin2 = {
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
          lat: parseFloat(m.lat),
          lng: parseFloat(m.lng),
        };
      }
    },
    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent = m.company_name + " (" + m.village.name + ") ";
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
  },
  created() {
    this.fetchData();
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
