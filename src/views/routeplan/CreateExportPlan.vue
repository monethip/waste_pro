<template>
  <v-container>
    <v-breadcrumbs large class="mt-n4">
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      Export ຂໍ້ມູນລູກຄ້າໃນແຜນເສັ້ນທາງ</v-breadcrumbs
    >
    <v-row>
      <v-col cols="12" class="mb-4">
        <GmapMap
          v-if="customers"
          :center="getCenter()"
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
            >{{ infoContent }}
          </gmap-info-window>
          <GmapMarker
            :key="index"
            v-for="(m, index) in customers"
            :position="getMarkers(m)"
            @click="toggleInfo(m, index)"
            :draggable="false"
            :icon="markerOptions"
            :animation="2"
            :clickable="true"
          />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          @click="exportRoutePlan()"
          :loading="loading"
          :disabled="loading"
          ><v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4 v-if="customers">ລວມລູກຄ້າ {{ customers.length }} ຄົນ</h4>
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
    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <div>
              <v-btn text color="grey" @click="deleteItem"
                ><v-icon medium> mdi-delete </v-icon></v-btn
              >
            </div>
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
              :items-per-page="15"
              v-model="selectedRows"
              show-select
            >
              <!--
              <template v-slot:item.media="{ item }">
                <v-avatar
                  size="36px"
                  v-for="(img, index) in item.media"
                  :key="index"
                >
                  <img v-if="img.thumb" :src="img.thumb" />
                </v-avatar>
              </template>
              -->

              <template slot="item.index" scope="props">
                <div>{{ props.index + 1 }}</div>
              </template>
              <template v-slot:item.address_detail="{ item }">
                <div v-for="(data, index) in item.village_details" :key="index">
                  <span>{{ data.name }}</span>
                </div>
              </template>
              <template v-slot:item.address="{ item }">
                <div v-if="item.district && item.village">
                  {{ item.district.name }}, {{ item.village.name }}
                </div>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
              </template>
              <!--
              <template slot="item.delete" slot-scope="props">
                <v-icon small @click="deleteItem(props)"> mdi-delete </v-icon>
              </template>
-->
              <!--
              <template v-slot:item="{ item }">
                <tr :class="selectedRows.indexOf(item.id) - 1 ? 'cyan' : ''">
                  <td>{{ item.id + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.surname }}</td>
                  <td>{{ item.user.phone }}</td>
                  <td>{{ item.house_number }}</td>
                  <td>
                    <v-icon small @click="deleteItem(item.index)">
                      mdi-delete
                    </v-icon>
                  </td>
                </tr>
              </template>
              -->
            </v-data-table>
          </v-card-text>
        </v-card>
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
  props: ["items", "villages"],
  data() {
    return {
      customers: [],
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

      headers: [
        { text: "", value: "index" },
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ລາຍລະອຽດທີ່ຢູ່", value: "address_detail" },
        { text: "ບ້ານ", value: "village.name", sortable: true },
        { text: "ເມືອງ", value: "district.name", sortable: true },
        { text: "", value: "actions", sortable: false },
      ],
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

      //Map
      latlng: {
        lat: 18.1189434,
        lng: 102.290218,
      },
      markers: [],
      places: [],
      currentPlace: null,
      markerOptions: {
        // eslint-disable-next-line global-require
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
      },

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
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.customers = this.items;
      this.selectedVillage = this.villages;
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem() {
      if (this.selectedRows.length > 0) {
        this.$store.commit("modalDelete_State", true);
      }
    },

    deleteItemConfirm() {
      this.selectedCustomer = [];
      this.loading = true;
      for (var i = 0; i < this.selectedRows.length; i++) {
        const index = this.customers.indexOf(this.selectedRows[i]);
        this.selectedCustomer.push(this.customers[index]);
        this.customers.splice(index, 1);
      }
      this.selectedCustomer.filter((item) => {
        this.exclude_customers.push(item.id);
      });
      this.selectedRows = [];
      this.fetchData();
      this.loading = false;
      this.$store.commit("modalDelete_State", false);
    },

    exportRoutePlan() {
      if (this.customers.length > 0) {
        this.loading = true;
        this.$axios
          .post(
            "export-customer-location/",
            {
              exclude_customers: this.exclude_customers,
              villages: this.selectedVillage,
            },
            { responseType: "blob" }
          )
          .then((res) => {
            if (res.status == 200) {
              setTimeout(() => {
                this.loading = false;
                const fileUrl = window.URL.createObjectURL(
                  new Blob([res.data])
                );
                const fileLink = document.createElement("a");
                fileLink.href = fileUrl;
                fileLink.setAttribute(
                  "download",
                  "customer_location" + ".xlsx"
                );
                document.body.appendChild(fileLink);
                fileLink.click();
                document.body.removeChild(fileLink);
              }, 300);
              this.$router.push({
                name: "Plan",
              });
            }
          })
          .catch(() => {
            this.$store.commit("Toast_State", this.toast_error);
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
    },
    Search() {
      GetOldValueOnInput(this);
    },

    //Google map
    getCenter() {
      if (this.customers.length > 0) {
        const latlng = {
          lat: parseFloat(this.customers[0].lat),
          lng: parseFloat(this.customers[0].lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(m) {
      return {
        lat: parseFloat(m.lat),
        lng: parseFloat(m.lng),
      };
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
@import "../../../public/scss/main.scss";
</style>