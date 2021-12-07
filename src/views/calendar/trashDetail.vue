<template>
  <v-container>
    <v-breadcrumbs large class="pt-0">
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-chevron-left</v-icon></v-btn
      >
      ລາຍລະອຽດລູກຄ້າ</v-breadcrumbs
    >
    <v-card>
      <div v-for="(item, index) in detail.media" :key="index">
        <v-img :src="item.url" alt="Image" height="500px" dark> </v-img>
      </div>

      <v-card-text>
        <v-container>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-account-circle-outline </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="detail.route_plan_detail"
                  >{{ detail.route_plan_detail.customer.name }}
                  {{
                    detail.route_plan_detail.customer.surname
                  }}</v-list-item-title
                >
                <v-list-item-subtitle>ຊື່ ແລະ ນາມສະກຸນ</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
          </v-row>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-calendar-range </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-if="detail.route_plan_detail">
                  {{ detail.route_plan_detail.priority }}</v-list-item-title
                >
                <v-list-item-subtitle>ລຳດັບເກັບຂີ້ເຫື້ອຍ</v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-icon class="mr-6" color="indigo">mdi-calendar</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="detail.route_plan_detail">
                  {{
                    detail.route_plan_detail.customer.start_month
                  }}</v-list-item-title
                >
                <v-list-item-subtitle>ເລີ່ມລົງທະບຽໜວັນທີ</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-home-search </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ເຮືອນເລກທີ</v-list-item-title>
                <div>
                  <v-list-item-subtitle v-if="detail.route_plan_detail">{{
                    detail.route_plan_detail.customer.house_number
                  }}</v-list-item-subtitle>
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
                  v-if="detail.route_plan_detail"
                  :position="getMarkers(detail.route_plan_detail.customer)"
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
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="viewCustomer(detail.route_plan_detail.customer.id)"
          >
            ລາຍລະອຽດລູກຄ້າ
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      detail: {},
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
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get(
          "plan-calendar/" +
            this.$route.params.plan_calendar +
            "/detail/" +
            this.$route.params.id
        )
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.detail = res.data.data;
              console.log(this.detail);
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.response.status == 422) {
            this.toast.msg = error.message;
          }
        });
    },

    backPrevios() {
      this.$router.go(-1);
    },
    getCenter() {
      if (this.detail.route_plan_detail) {
        const latlng = {
          lat: parseFloat(this.detail.route_plan_detail.customer.lat),
          lng: parseFloat(this.detail.route_plan_detail.customer.lng),
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
    viewCustomer(id) {
      this.$router.push({
        name: "ViewCustomer",
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