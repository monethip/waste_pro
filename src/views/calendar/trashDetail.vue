<template>
  <v-container>
    <v-breadcrumbs
      large
      class="pt-0"
    >
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>ລາຍລະອຽດການເກັບຂີ້ເຫື້ຍອຂອງລູກຄ້າ
    </v-breadcrumbs>
    <v-card>
      <v-carousel v-if="detail.media">
        <v-carousel-item
          v-for="(item, index) in detail.media"
          :key="index"
          height="auto"
          :src="item.url"
          reverse-transition="fade-transition"
          transition="fade-transition"
          @click="viewImage(item.url)"
        />
      </v-carousel>

      <v-card-text>
        <v-container>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-account-circle-outline
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content v-if="detail.route_plan_detail">
                <v-list-item-title>
                  {{ detail.route_plan_detail.customer.full_name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  <v-icon x-small>
                    mdi-account
                  </v-icon> {{ detail.route_plan_detail.customer.customer_id }}
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-icon x-small>
                    mdi-phone
                  </v-icon> {{ detail.route_plan_detail.customer.user.phone }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer />
              <v-list-item-icon>
                <v-icon
                  class="mr-6"
                  color="indigo"
                >
                  mdi-trash-can-outline
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  v-if="detail.collection_type == 'bag' || detail.collection_type == 'chartered' || detail.collection_type == '32km' || detail.collection_type == 'infect'"
                >
                  {{ detail.bag }} ຖົງ
                </v-list-item-title>
                <v-list-item-title
                  v-else-if="detail.collection_type == 'container'"
                >
                  {{ detail.container }} Container
                </v-list-item-title>
                <v-list-item-title v-else-if="detail.collection_type == 'fix_cost'">
                  ມອບເໝົາ
                </v-list-item-title>
                <v-list-item-subtitle>{{ `${detail.plan_calendar.driver.name} ${detail.plan_calendar.driver.surname} (${detail.plan_calendar.driver.vehicle.car_id})` }}</v-list-item-subtitle>
                <!--                <v-list-item-subtitle v-if="detail.route_plan_detail.customer.fix_cost">{{Intl.NumberFormat().format(detail.route_plan_detail.customer.fix_cost)}}</v-list-item-subtitle>-->
              </v-list-item-content>
            </v-list-item>
            <v-divider inset />
          </v-row>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-calendar-range
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  v-if="detail.route_plan_detail"
                >
                  {{ detail.route_plan_detail.priority }}
                </v-list-item-title>
                <v-list-item-subtitle>ລຳດັບເກັບຂີ້ເຫື້ຍອ</v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer />
              <v-list-item-icon>
                <v-icon
                  class="mr-6"
                  color="indigo"
                >
                  mdi-calendar
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="detail.route_plan_detail">
                  {{
                    detail.route_plan_detail.customer.start_month
                  }}
                </v-list-item-title>
                <v-list-item-subtitle>ສະໝັກແພັກເກດວັນທີ</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset />
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-home-search
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ເຮືອນເລກທີ</v-list-item-title>
                <div>
                  <v-list-item-subtitle v-if="detail.route_plan_detail">
                    {{
                      detail.route_plan_detail.customer.house_number
                    }}
                  </v-list-item-subtitle>
                </div>
              </v-list-item-content>
              <v-spacer />
              <v-list-item-icon>
                <v-icon
                  color="indigo"
                  class="mr-6"
                >
                  mdi-home-search
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>ສະຖານະ</v-list-item-title>
                <div>
                  <v-list-item-subtitle>
                    <v-chip
                      label
                      color="success"
                    >
                      {{
                        detail.status
                      }}
                    </v-chip>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle>
                    {{ detail.collected_at }}
                  </v-list-item-subtitle>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-row>
          <v-row>
            <v-col>
              <p>{{ detail.description }}</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              class="mb-4"
            >
              <GmapMap
                :center="getCenter().lat > 0 || getCenter().lat < 0 ? getCenter() : { lat: 0, lng: 0 }"
                :zoom="16"
                style="width: 100%; height: 450px"
                :disable-default-u-i="true"
              >
                <GmapMarker
                  v-if="detail.route_plan_detail"
                  ref="markers"
                  :position="getMarkers(detail.route_plan_detail.customer)"
                  :draggable="false"
                  :icon="markerOptions"
                  :animation="2"
                  @click="latlng = data"
                />
              </GmapMap>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-spacer />
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
    <v-dialog
      v-model="fullImage"
      max-width="1300px"
    >
      <img
        contain
        :src="url"
        width="auto"
        height="auto"
        max-height="1200px"
        zoom="100"
        @click.stop="fullImage = !true"
      >
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      fullImage: false,
      url: '',
      detail: {},
      // Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      currentPlace: null,
      markerOptions: {

        url: require('@coms/../../src/assets/pin1.svg'),
        size: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
      },
    };
  },
  watch: {
    selectedDistrict() {
      this.fetchVillage();
    },
    selectedVillage() {
      this.fetchVillageDetail();
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(
          `plan-calendar/${
            this.$route.params.plan_calendar
          }/detail/${
            this.$route.params.id}`,
        )
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.detail = res.data.data;
              console.log(this.detail);
            }, 100);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
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
        name: 'ViewClient',
        params: { id },
      });
    },
    viewImage(url) {
      this.fullImage = true;
      this.url = url;
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
