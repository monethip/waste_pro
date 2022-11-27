<template>
  <v-container>
    <v-breadcrumbs large class="mt-n4">
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>ເລືອກລູກຄ້າເຂົ້າແຜນເສັ້ນທາງ
      <v-spacer></v-spacer>
      <span class="mr-4">
        <v-icon color="red">mdi-map-marker</v-icon>ຍັງບໍທັນຢູ່ໃນແຜນ
      </span>
      <span>
        <v-icon style="color: #49a3da">mdi-map-marker</v-icon>ຢູ່ໃນແຜນແລ້ວ
      </span>
    </v-breadcrumbs>
    <v-row class="my-n4">
      <v-col cols="12" class="mb-4">
        <GmapMap
          :center="getCenter().lat > 0 || getCenter().lat < 0 ? getCenter() : { lat: 0, lng: 0 }"
          :zoom="14"
          style="width: 100%; height: 450px"
          :disableDefaultUI="true"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoPosition"
            :opened="infoOpened"
            :conent="infoContent"
            @closeclick="infoOpened = false"
          >{{ infoContent }}</gmap-info-window>
          <GmapMarker
            :key="index"
            v-for="(m, index) in customers"
            :position="getMarkers(m)"
            @click="toggleInfo(m, index)"
            :draggable="false"
            :icon="getSiteIcon(m)"
            :animation="2"
            :clickable="true"
            :label="m.check_number ? m.check_number.toString() : null"
          />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="createPage()">
          Next
          <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4 v-if="pagination && pagination.total">ລູກຄ້າທັງໝົດ {{ pagination.total }} ຄົນ</h4>
        <h4 v-else>ລູກຄ້າທັງໝົດ {{ customers.length }} ຄົນ</h4>
        <h4 v-if="countExpectTrash">
          ຂີ້ເຫຍື້ອຄາດໝາຍ: {{ Intl.NumberFormat().format(countExpectTrash.expect_trash) + ' '
          +
          getCustomerUnitFunc(countExpectTrash.cost_by)
          }}
        </h4>
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
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          v-model="selectedVillage"
          :items="villages"
          item-text="name"
          item-value="id"
          label="ເລືອກບ້ານ"
          outlined
          chips
          multiple
          dense
          clearable
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="remove(data.item)"
            >{{ data.item.name }}</v-chip>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
    <!--
    <v-row class="mb-n4">
      <v-col>
        <v-autocomplete
          outlined
          dense
          v-model="selectedVillage"
          :items="villages"
          item-text="name"
          item-value="id"
          label="ເລືອກບ້ານ"
          multiple
        >
          <template v-slot:prepend-item>
            <v-list-item ripple @click="toggle">
              <v-list-item-action>
                <v-icon
                  :color="selectedVillage.length > 0 ? 'indigo darken-4' : ''"
                >
                  {{ icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> Select All </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>
    -->
    <v-row>
      <v-col cols>
        <v-select
          outlined
          dense
          :items="favorite_dates"
          v-model="selectedFavoriteDate"
          item-text="name"
          item-value="name"
          label="ມື້ບໍລິການ"
          multiple
        ></v-select>
      </v-col>
      <v-col>
        <v-autocomplete
          outlined
          dense
          :items="customerStatus"
          v-model="selectedCustomerStatus"
          item-text="name"
          item-value="value"
          label="ສະຖານະລູກຄ້າ"
          multiple
          clearable
        ></v-autocomplete>
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
        ></v-text-field>
      </v-col>
      <v-col>
        <v-btn style="width:100%" color="green" dark @click="fetchSearch">ຄົ້ນຫາ</v-btn>
      </v-col>
    </v-row>

    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-row v-if="selectedRows.length">
              <v-col>
                <p>ລູກຄ້າທີ່ເລືອກ {{ selectedRows.length }}</p>
              </v-col>
              <v-col>
                <p>ຂີ້ເຫຍື້ອຄາດໝາຍ: {{ Intl.NumberFormat().format(selectedTrash) }} ຖົງ</p>
              </v-col>
            </v-row>
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
            >
              <template v-slot:item.address_detail="{ item }">
                <div v-for="(data, index) in item.village_details" :key="index">
                  <span>{{ data.name }}</span>
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">mdi-eye</v-icon>
              </template>
              <template v-slot:item.custom_pick="{ item }">
                <div class="main-check" @click="checkHandler(item)">
                  <div v-if="item.check_number" class="check">{{ item.check_number }}</div>
                  <div v-else class="uncheck"></div>
                </div>
              </template>

              <template v-slot:header.custom_pick="{ }">
                <div @click="checkAllToggle()">
                  <div v-if="checkAll" class="check"></div>
                  <div v-else class="uncheck"></div>
                </div>
              </template>

              <template v-slot:item.expect_trash="{ item }">
                <v-chip outlined color="green" v-if="item.expect_trash">
                  {{ Intl.NumberFormat().format(item.expect_trash) }}
                  {{ getCustomerUnitFunc(item.cost_by) }}
                </v-chip>
                <div v-else>-</div>
              </template>

              <template v-slot:item.favorite_dates="{ item }">
                <v-chip
                  dark
                  color="green"
                  v-for="date in item.favorite_dates"
                  :key="date.name"
                >{{ date.name }}</v-chip>
              </template>
            </v-data-table>
            <br />
            <template>
              <Pagination
                v-if="pagination && pagination.total_pages > 1"
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
import queryOption from "@/Helpers/queryOption";
import { getCustomerUnit, getLaoCompanyCostBy } from "@/Helpers/Customer";

export default {
  name: "Customer",
  data() {
    return {
      tab: null,
      customers: [],
      selectedAllCustomer: [],
      countExpectTrash: {
        expect_trash: 0,
        cost_by: ""
      },
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {
        total: null
      },
      per_page: 100,
      search: "",
      oldVal: "",
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      // selectedAllVillage: [],
      selectedCustomerStatus: [],
      customerStatus: [
        {
          id: 1,
          value: "calendar",
          name: "ຍັງບໍ່ມີແຜນເດີນລົດ"
        },
        {
          id: 2,
          value: "route_plan",
          name: "ຍັງບໍ່ມີເສັ້ນທາງເກັບຂີ້ເຫື້ຍອ"
        }
      ],

      favorite_dates: [],
      selectedFavoriteDate: [],
      selectedRows: [],
      headers: [
        { text: "", value: "custom_pick", sortable: false },
        { text: "ID", value: "customer_id" },
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        // { text: "ຜູ້ຮບຜິດຊອບ", value: "company_coordinators.name" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ຂີ້ເຫຍື້ອຄາດໝາຍ", value: "expect_trash" },
        { text: "ວັນທີ່ສະດວກເກັບ", value: "favorite_dates" },
        { text: "ວັນທີ່ເພີ່ມເຂົ້າ", value: "created_at" },
        // {text: "ລາຍລະອຽດທີ່ຢູ່", value: "address_detail"},
        { text: "ບ້ານ", value: "village.name", sortable: true },
        { text: "ເມືອງ ", value: "district.name", sortable: true },
        // {text: "ລາຍລະອຽດທີ່ຢູ່", value: "description"},
        // { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        { text: "", value: "actions", sortable: false }
      ],
      //Map
      latlng: {
        lat: 0,
        lng: 0
      },
      markers: [],
      places: [],
      currentPlace: null,
      infoPosition: null,
      infoContent: null,
      infoOpened: false,
      infoCurrentKey: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      last_check_number: 0,
      checkAll: false
    };
  },
  methods: {
    checkAllToggle() {
      this.checkAll = !this.checkAll;
    },
    checkHandler(value) {
      const index = this.customers.findIndex(item => item.id == value.id);
      if (index != -1) {
        if (this.customers[index].check_number) {
          if (this.customers[index].check_number == this.last_check_number) {
            this.last_check_number--;
            this.customers[index].check_number = null;
            this.selectedRows.pop();
          }
        } else {
          this.last_check_number++;
          this.customers[index].check_number = this.last_check_number;
          this.selectedRows.push(value);
        }
        this.customers.splice(index, 1, this.customers[index]);
      }
    },
    getCustomerUnitFunc(costBy) {
      return getCustomerUnit(costBy);
    },
    backPrevios() {
      this.$router.go(-1);
    },
    getLaoCompanyCostByFunc(costBy) {
      return getLaoCompanyCostBy(costBy);
    },
    fetchData(countexpect = false) {
      this.per_page = this.selectedDistrict ? null : 100;

      let options = [
        { page: this.pagination.current_page },
        { per_page: this.per_page },
        { without: this.selectedCustomerStatus },
        { villages: this.selectedVillage },
        { district_id: this.selectedDistrict },
        { filter: this.search },
        { cost_by: this.selectedCost },
        { favorite_dates: this.selectedFavoriteDate }
      ];

      if (countexpect) options.push({ count_expact_trash: "1" });

      this.$store.commit("Loading_State", true);
      this.$axios
        .get("customer", {
          params: queryOption(options)
        })
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              if (countexpect) {
                this.countExpectTrash = res.data.data[0];
                console.log(this.countExpectTrash);
              } else {
                this.customers = this.per_page
                  ? res.data.data.data
                  : res.data.data;
                this.selectedAllCustomer = res.data.data;
                if (res.data.data.pagination)
                  this.pagination = res.data.data.pagination;
                else this.pagination = {};
              }
              // this.getCenter();
            }, 100);
          }
        })
        .catch(error => {
          this.$store.commit("Loading_State", false);

          this.$store.commit("Toast_State", {
            value: true,
            color: "error",
            msg: error.response
              ? error.response.data.message
              : "Something went wrong"
          });
          if (error.response && error.response.status == 422) {
            var obj = error.response.data.error;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }

          if (error.response && error.response.status == 422) {
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
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.address = res.data.data;
              this.address.map(item => {
                this.districts = item.districts;
              });
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchVillage() {
      if (this.selectedDistrict)
        this.$axios
          .get("info/district/" + this.selectedDistrict + "/village")
          .then(res => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.villages = res.data.data;
              }, 300);
            }
          })
          .catch(() => {});
    },
    fetchSearch() {
      this.fetchData();
      this.fetchData(true);
    },
    createPage() {
      //  var a = [];
      // console.log(this.customers);
      if (this.selectedRows.length > 0) {
        this.$router.push({
          name: "CreateRoutePlan",
          params: {
            items: this.selectedRows
          }
        });
      } else {
        this.$store.commit("Toast_State", {
          value: true,
          color: "error",
          msg: "ກາລຸນາເລືອກບ້ານ ແລະ ລູກຄ້າກ່ອນ"
        });
      }
    },
    viewPage(id) {
      this.$router.push({
        name: "ViewCustomer",
        params: { id }
      });
    },
    remove(item) {
      const index = this.selectedVillage.indexOf(item.id);
      if (index >= 0) this.selectedVillage.splice(index, 1);
    },
    Search() {
      GetOldValueOnInput(this);
    },

    //Google map
    getCenter() {
      if (this.customers.length) {
        if (parseFloat(this.customers[0].lat) == null) {
          return this.latlng;
        } else {
          const latlng = {
            lat: parseFloat(this.customers[0].lat),
            lng: parseFloat(this.customers[0].lng)
          };
          return latlng;
        }
      }
      return this.latlng;
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.lat),
          lng: parseFloat(m.lng)
        };
      }
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
          b: "px"
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: "px",
          b: "px"
        }
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
          b: "px"
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: "px",
          b: "px"
        }
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
    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent = m.name + " (" + m.house_number + ") ";
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }

      this.checkHandler(m);
    },

    toggle() {
      this.$nextTick(() => {
        if (this.selectedAllVillage) {
          this.selectedVillage = [];
        } else {
          setTimeout(() => {
            this.selectedVillage = this.villages.slice();
          }, 300);
        }
      });
    },
    fetchFavorite() {
      this.$axios
        .get("favorite-date")
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.favorite_dates = res.data.data;
            }, 100);
          }
        })
        .catch(() => {});
    }
  },
  computed: {
    selectedTrash() {
      let count = 0;
      for (const selected of this.selectedRows) {
        count += selected.expect_trash > 0 ? selected.expect_trash : 0;
      }

      return count;
    },
    selectedAllVillage() {
      return this.selectedVillage.length === this.villages.length;
    },
    selectedSomeVillage() {
      return this.selectedVillage.length > 0 && !this.selectedAllVillage;
    },
    icon() {
      if (this.selectedAllVillage) return "mdi-close-box";
      if (this.selectedSomeVillage) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  watch: {
    checkAll(value) {
      if (value == true) {
        this.$store.commit("Loading_State", true);
        for (const customer of this.customers) {
          this.checkHandler(customer);
        }
        this.$store.commit("Loading_State", false);
      } else {
        this.$store.commit("Loading_State", true);
        this.selectedRows = [];
        for (let i = 0; i < this.customers.length; i++) {
          this.customers[i].check_number = null;
          this.customers.splice(i, 1, this.customers[i]);
        }
        this.last_check_number = 0;
        this.$store.commit("Loading_State", false);
      }
    },
    selectedFavoriteDate: function() {
      this.pagination.current_page = "";
      this.fetchData();
      this.fetchData(true);
    },
    search: function(value) {
      this.pagination.current_page = "";
      if (value == "") {
        this.fetchData();
        this.fetchData(true);
      }
    },
    selectedVillage: function() {
      this.pagination.current_page = "";
      // this.fetchData();
      // this.fetchData(true)
    },
    selectedDistrict: function() {
      this.pagination.current_page = "";
      // this.fetchData();
      // this.fetchData(true)

      this.fetchVillage();
    },
    selectedCustomerStatus: function() {
      this.pagination.current_page = "";
      this.fetchData();
      this.fetchData(true);
    }
  },
  created() {
    this.fetchFavorite();
    this.fetchData();
    this.fetchData(true);

    this.fetchAddress();
  }
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";

.check {
  height: 20px;
  width: 100%;
  background-color: cornflowerblue;
  color: white;
  text-align: center;
}

.uncheck {
  height: 20px;
  width: 20px;
  border: 1px solid black;
}

.main-check {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
