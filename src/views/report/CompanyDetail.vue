<template>
  <v-container>
    <v-breadcrumbs large class="pt-0">
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-chevron-left</v-icon></v-btn
      >
      ລາຍລະອຽດ</v-breadcrumbs
    >
    <v-card>
      <!--
      <div v-for="(item, index) in data.media" :key="index">
        <v-img :src="item.url" alt="Image" height="500px" dark> </v-img>
      </div>
      -->
      <v-carousel v-if="data.media && data.media.length">
        <v-carousel-item
            v-for="(item, index) in data.media"
            :key="index"
            :src="item.url"
            reverse-transition="fade-transition"
            transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>

      <v-card-text>
                <v-tabs v-model="tab" background-color="#49A3DA"
                        dark>
                  <v-tab href="#tab-1"> ຂໍ້ມູນກ່ຽວກັບ </v-tab>
                  <v-tab href="#tab-2"> ຂໍ້ມູນການບໍລິການ</v-tab>
                  <v-tab href="#tab-3"> ຂໍ້ມູນການຊຳລະ</v-tab>
                </v-tabs>
                <!-- <hr /> -->
                <v-tabs-items v-model="tab">
                  <v-tab-item value="tab-1">
<!--                    <HomeInvoice :tab="tab" />-->
                  <v-container>
                    <v-row>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="indigo">mdi-office-building </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-subtitle>ບໍລິສັດ</v-list-item-subtitle>
                          <v-list-item-title
                          >{{ data.name }} {{ data.company_name }}</v-list-item-title
                          >
                        </v-list-item-content>

                        <v-spacer></v-spacer>
                        <v-list-item-icon>
                          <v-icon color="indigo" class="mr-6"> mdi-phone </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                          <v-list-item-title v-if="data.user">
                            {{ data.user.phone }}</v-list-item-title
                          >
                        </v-list-item-content>

                        <v-spacer></v-spacer>
                        <v-list-item-icon>
                          <v-icon class="mr-6" color="indigo">mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-subtitle>Email</v-list-item-subtitle>
                          <v-list-item-title v-if="data.user">
                            {{ data.user.email }}</v-list-item-title
                          >
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider inset></v-divider>
                    </v-row>
                    <v-row>
                      <v-list-item
                          v-for="(coor, index) in data.company_coordinators"
                          :key="index"
                      >
                        <v-list-item-icon>
                          <v-icon color="indigo">mdi-account-circle</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-subtitle>ຜູ້ປະສານງານ</v-list-item-subtitle>
                          <v-list-item-title>
                            {{ coor.name }} {{ coor.surname }}
                          </v-list-item-title>
                        </v-list-item-content>
                        <v-spacer></v-spacer>
                        <v-list-item-icon>
                          <v-icon color="indigo" class="mr-6">mdi-phone</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                          <v-list-item-title>
                            {{ coor.phone }}
                          </v-list-item-title>
                        </v-list-item-content>
                        <v-spacer></v-spacer>
                        <v-list-item-icon>
                          <v-icon color="indigo" class="mr-6">mdi-email</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-subtitle>Email</v-list-item-subtitle>
                          <v-list-item-title>
                            {{ coor.email }}
                          </v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-content class="text-center">
                          <v-list-item-title>
                            <v-icon small class="mr-2" @click="editItem(coor)">
                              mdi-pencil
                            </v-icon>
                            <v-icon small @click="deleteItem(coor)"> mdi-delete </v-icon>
                          </v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider inset></v-divider>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="indigo"> mdi-calendar </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-subtitle>ວັນທີ່ເລີ່ມ</v-list-item-subtitle>
                          <v-list-item-title>{{ data.start_month }}</v-list-item-title>
                          <v-list-item-subtitle>
                  <span>
                    <v-chip
                        label
                        class="success"
                        v-if="data.status == 'active'"
                    >{{ data.status }}</v-chip
                    >
                    <v-chip
                        label
                        class="error"
                        v-else-if="data.status == 'inactive'"
                    >{{ data.status }}</v-chip
                    >
                    <v-chip label class="primary" v-else>{{
                        data.status
                      }}</v-chip>
                  </span>
                          </v-list-item-subtitle>
                        </v-list-item-content>

                        <v-spacer></v-spacer>
                        <v-list-item-icon>
                          <v-icon color="indigo" class="mr-6">mdi-package</v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-subtitle>ປະເພດບໍລິການ</v-list-item-subtitle>
                          <v-list-item-title>{{ data.cost_by }}</v-list-item-title>
                          <v-list-item-subtitle v-if="data.cost_by == 'fix_cost'">{{
                              Intl.NumberFormat().format(data.fix_cost)
                            }}</v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider inset></v-divider>
                      <v-list-item>
                        <v-list-item-icon>
                          <v-icon color="indigo"> mdi-map-marker </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                          <v-list-item-title v-if="data.village"
                          >{{ data.village.name }},
                            {{ data.district.name }}</v-list-item-title
                          >
                          <div
                              v-for="(detail, index) in data.village_details"
                              :key="index"
                          >
                            <v-list-item-subtitle>{{ detail.name }}</v-list-item-subtitle>
                          </div>
                        </v-list-item-content>
                      </v-list-item>
                    </v-row>
                    <v-row>
                      <v-col cols="12" class="mb-4">
                        <GmapMap
                            :center="getCenter()"
                            :zoom="16"
                            style="width: 100%; height: 450px"
                            :disableDefaultUI="true"
                        >
                          <GmapMarker
                              :position="getMarkers(data)"
                              @click="latlng = data"
                              :draggable="false"
                              :icon="markerOptions"
                              :animation="2"
                              ref="markers"
                          />
                        </GmapMap>
                      </v-col>
                    </v-row>

                  </v-container>
                  </v-tab-item>
                </v-tabs-items>

                <v-tabs-items v-model="tab">
                  <v-tab-item value="tab-2">
                    <v-container>
                      <h3>ຂໍ້ມູນການບໍລິການ</h3>
                      <v-simple-table>
                        <template v-slot:default>
                          <thead>
                          <tr>
                            <th class="text-left">
                              Name
                            </th>
                            <th class="text-left">
                              Date
                            </th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr
                              v-for="item in services"
                              :key="item.id"
                          >
                            <td>{{ item.name }}</td>
                            <td>{{ item.date }}</td>
                          </tr>
                          </tbody>
                        </template>
                      </v-simple-table>
                    </v-container>
                  </v-tab-item>
                </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-3">
            <v-container>
              <h3>ປະຫັວດການຊຳລະ</h3>
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left">
                      Invoice Date
                    </th>
                    <th class="text-left">
                      Name
                    </th>
                    <th class="text-left">
                      Payment Date
                    </th>
                    <th class="text-left">
                      ມູນຄ່າ
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr
                      v-for="item in payments"
                      :key="item.id"
                  >
                    <td>{{ item.date }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.payment_date }}</td>
                    <td>{{ item.value }}</td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-container>
          </v-tab-item>
        </v-tabs-items>


        <!--        <v-card-actions>-->
        <!--          <v-spacer></v-spacer>-->
        <!--          <v-btn-->
        <!--            color="blue darken-1"-->
        <!--            text-->
        <!--            :loading="loading"-->
        <!--            :disabled="loading"-->
        <!--            @click="editPage(data.id)"-->
        <!--          >-->
        <!--            Update-->
        <!--          </v-btn>-->
        <!--        </v-card-actions>-->
        <!--        ->-->
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: {},
      loading: false,
      server_errors: {},
      provinces: [],
      districts: [],
      selectedDistrict: "",
      villages: [],
      selectedVillage: "",
      village_details: [],
      selectedVillageDetail: [],
      tab:"",

      address: [],
      errormsg: "",
      preview_list: [],
      image_list: [],
      image: [],
      //Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      currentPlace: null,
      markerOptions: {
        // eslint-disable-next-line global-require
        url: require("@coms/../../src/assets/pin1.svg"),
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
      services:[
        {
          id:1,
          name: 'Frozen Yogurt',
          date: '22-01-2022',
        },
        {
          id:2,
          name: 'Ice cream sandwich',
          date: '22-01-2022',
        },
        {
          id:3,
          name: 'Eclair',
          date: '22-01-2022',
        },
        {
          id:4,
          name: 'Cupcake',
          date: '22-01-2022',
        },
      ],
      payments:[
        {
          id:1,
          date: '22-06-1995',
          name: 'Frozen Yogurt',
          payment_date: '22-06-1995',
          value: 159,
        },
        {
          id:2,
          date: '22-06-1995',
          name: 'Frozen Yogurt',
          payment_date: '22-06-1995',
          value: 159,
        },
        {
          id:3,
          date: '22-06-1995',
          name: 'Frozen Yogurt',
          payment_date: '22-06-1995',
          value: 159,
        },
        {
          id:4,
          date: '22-06-1995',
          name: 'Frozen Yogurt',
          payment_date: '22-06-1995',
          value: 159,
        },
      ]
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("customer/" + this.$route.params.id)
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
            this.fetchData();
            if (error.response.status == 422) {
              let obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },

    backPrevios() {
      this.$router.go(-1);
    },
    getCenter() {
      if (this.data.lat) {
        const latlng = {
          lat: parseFloat(this.data.lat),
          lng: parseFloat(this.data.lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(data) {
      return {
        lat: parseFloat(data.lat),
        lng: parseFloat(data.lng),
      };
    },
    editPage(id) {
      this.$router.push({
        name: "EditCustomer",
        params: { id },
      });
    },
  },
  watch: {
    selectedDistrict: function () {
      this.fetchVillage();
    },
    selectedVillage: function () {
      this.fetchVillageDetail();
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
