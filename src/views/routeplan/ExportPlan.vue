<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ເລືອກລູກຄ້າເຂົ້າແຜນເສັ້ນທາງ</v-breadcrumbs
    >
    <v-row>
      <v-col cols="12" class="mb-4">
        <GmapMap
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
        <v-btn class="btn-primary" @click="createPage()"
          ><v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4>ລວມລູກຄ້າ {{ pagination.total }} ຄົນ</h4>
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
        ></v-autocomplete>
      </v-col>
      <!--
      <v-col>
        <v-autocomplete
          outlined
          dense
          :items="villages"
          v-model="selectedVillage"
          item-text="name"
          item-value="id"
          label="ບ້ານ"
          multiple
        ></v-autocomplete>
      </v-col>
      -->
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

    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="customers"
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
    </div>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "Customer",
  data() {
    return {
      tab: null,
      customers: [],
      selectedAllCustomer: [],
      loading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 50,
      search: "",
      oldVal: "",
      //Filter
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: [],
      selectedAllVillage: [],

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "Email", value: "user.email", sortable: false },
        { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        { text: "Image", value: "media" },
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
          width: 28,
          height: 48,
          f: "px",
          b: "px",
        },
        scaledSize: {
          width: 28,
          height: 48,
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
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("customer", {
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
              this.customers = res.data.data.data;
              this.selectedAllCustomer = res.data.data;
              this.pagination = res.data.data.pagination;
              this.getCenter();
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

    fetchAddress() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.address = res.data.data;
              this.address.map((item) => {
                this.districts = item.districts;
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

    createPage() {
      // console.log(this.customers);
      this.$router.push({
        name: "CreateExportPlan",
        params: {
          items: this.customers,
          villages: this.selectedVillage,
        },
      });
      this.$emit("create-plan", this.customers, this.selectedVillage);
    },
    editPage(id) {
      this.$router.push({
        name: "EditCustomer",
        params: { id },
      });
    },
    viewPage(id) {
      console.log(id);
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
      if (this.customers.length) {
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

    // getSiteIcon(status) {
    //   try {
    //     switch (status) {
    //       case 1:
    //         return require("@coms/../../src/assets/pin1.svg");

    //       case 2:
    //         return require("@coms/../../src/assets/pin2.svg");

    //       case 3:
    //         return require("@coms/../../src/assets/pin3.svg");

    //       default:
    //         return require("@coms/../../src/assets/pin1.svg");
    //     }
    //   } catch (e) {
    //     return null;
    //   }
    // },
    toggleInfo(m, key) {
      console.log(m);
      this.infoPosition = this.getMarkers(m);
      this.infoContent = m.name + " (" + m.house_number + ") ";
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },

    toggle() {
      console.log(this.likesAllFruit);
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.selectedVillage = [];
        } else {
          this.villages.filter((item) => {
            this.selectedVillage.push(item.id);
          });
        }
      });
    },
  },
  computed: {
    likesAllFruit() {
      return this.selectedVillage.length === this.villages.length;
    },
    likesSomeFruit() {
      return this.selectedVillage.length > 0 && !this.likesAllFruit;
    },
    icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
    selectedVillage: function () {
      this.fetchData();
      // var data = {};
      // this.villages.filter((item) => {
      //   // this.selectedVillage.includes(item.id);
      //   if (this.selectedVillage) {
      //     data.push(item);
      //   }
      // });
      // console.log(data);
      // // console.log("Hi" + selectedAllVillage);
      // // // this.villages.filter((item) => {
      // // this.selectedAllVillage.push(this.selectedVillage);
      // // console.log(this.selectedAllVillage);
      // // });
    },
    selectedDistrict: function () {
      this.fetchVillage();
    },
  },
  created() {
    this.fetchData();
    this.fetchAddress();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>