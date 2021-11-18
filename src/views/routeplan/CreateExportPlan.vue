<template>
  <v-container>
    <v-breadcrumbs large>
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
          <GmapMarker
            :key="index"
            v-for="(m, index) in customers"
            :position="getMarkers(m)"
            @click="latlng = m"
            :draggable="true"
            :icon="markerOptions"
            :animation="2"
            ref="getMarkers()"
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
            <v-data-table
              :headers="headers"
              :items="customers"
              :search="search"
              :items-per-page="25"
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
              <template v-slot:item.address="{ item }">
                <div v-if="item.district && item.village">
                  {{ item.district.name }}, {{ item.village.name }}
                </div>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
                <!--  <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon> -->
              </template>
              <template slot="item.delete" slot-scope="props">
                <v-icon small @click="deleteItem(props.index)">
                  mdi-delete
                </v-icon>
              </template>
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
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",
      selectedVillage: [],
      selectedCutomer: [],

      headers: [
        { text: "", value: "index" },
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ທີ່ຢູ່", value: "address", sortable: false },
        { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        { text: "", value: "delete" },
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
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.customers = this.items;
      this.selectedVillage = this.villages;
      console.log(this.customers);
      this.selectedCutomer = [];
      if (this.customers) {
        this.customers.filter((item) => {
          this.selectedCutomer.push(item.id);
        });
      }
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.customerId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      console.log(this.customerId);
      this.loading = true;
      this.customers.splice(this.customerId, 1);
      this.fetchData();
      this.loading = false;
      this.$store.commit("modalDelete_State", false);
      // this.$axios
      //   .delete("customer/" + this.customerId)
      //   .then((res) => {
      //     if (res.data.code == 200) {
      //       setTimeout(() => {
      //         this.loading = false;
      //         this.toast.msg = res.data.message;
      //         this.$store.commit("Toast_State", this.toast);
      //         this.$store.commit("modalDelete_State", false);
      //         this.fetchData();
      //       }, 300);
      //     }
      //   })
      //   .catch(() => {
      //     this.fetchData();
      //     this.$store.commit("Toast_State", this.toast_error);
      //     this.$store.commit("modalDelete_State", false);
      //     this.loading = false;
      //   });
    },
    exportRoutePlan() {
      console.log(this.selectedCutomer);
      console.log(this.selectedVillage);
      this.loading = true;
      this.$axios
        .post(
          "export-customer-location/",
          {
            // exclude_customers: [10650],
            // villages: [1, 2, 3, 4, 5],
          },
          { responseType: "blob" }
        )
        .then((res) => {
          if (res.status == 200) {
            setTimeout(() => {
              this.loading = false;
              const fileUrl = window.URL.createObjectURL(new Blob([res.data]));
              const fileLink = document.createElement("a");
              fileLink.href = fileUrl;
              fileLink.setAttribute("download", "customer_location" + ".xlsx");
              document.body.appendChild(fileLink);
              fileLink.click();
              document.body.removeChild(fileLink);
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

    //Set Googlemap Api
    createNewAddressName() {
      const CUSTOMIZE = "#CUSTOM ADDRESS:";
      return this.isCreate
        ? this.currentAddress
        : `${CUSTOMIZE} ${this.latlng.lat}, ${this.latlng.lng}`;
    },

    setPlace(place) {
      this.currentPlace = place;
      this.placeMarker();
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.latlng = marker;
        this.currentPlace = null;
      }
    },
    placeMarker() {
      this.markers = [];
      this.places = [];
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.latlng = marker;
        this.animateMarker();
      } else {
        const marker = {
          lat: this.latlng.lat,
          lng: this.latlng.lng,
        };
        this.markers.push({ position: marker });
      }
      // set address
      if (this.$refs.searchInput) {
        this.address = this.$refs.searchInput.$el.value;
      } else {
        // this.address = this.currentPlace.formatted_address;
      }
      this.onDataChange();
    },

    geolocate() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latlng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.placeMarker();
      });
    },
    onDataChange() {
      this.$emit("onDataChange", {
        address: this.address,
        position: this.latlng,
      });
    },

    onSave() {
      this.$emit("onSave", {
        address: this.address || this.currentAddress || "Unnamed Location",
        position: this.latlng,
        isCreate: this.isCreate,
      });
    },
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
    getSiteIcon(status) {
      try {
        switch (status) {
          case 1:
            return require("@coms/../../src/assets/pin1.svg");

          case 2:
            return require("@coms/../../src/assets/pin2.svg");

          case 3:
            return require("@coms/../../src/assets/pin3.svg");

          default:
            return require("@coms/../../src/assets/pin1.svg");
        }
      } catch (e) {
        return null;
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
  mounted() {
    this.geolocate();
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>