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
      </v-btn>
      ລາຍລະອຽດ
    </v-breadcrumbs>
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
          @click="showImage(item.url)"
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

              <v-list-item-content>
                <v-list-item-title>{{ data.name }} {{ data.surname }}</v-list-item-title>
                <v-list-item-subtitle>{{ data.customer_id }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-spacer />
              <v-list-item-icon>
                <v-icon
                  class="mr-6"
                  color="indigo"
                >
                  mdi-home
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="data.user">
                  {{ data.house_number }}
                </v-list-item-title>
                <v-list-item-subtitle>ເຮືອນເລກທີ</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset />
          </v-row>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-if="data.user">
                  {{ data.user.phone }}
                </v-list-item-title>
                <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
              </v-list-item-content>
              <v-spacer />
              <v-list-item-icon>
                <v-icon
                  class="mr-6"
                  color="indigo"
                >
                  mdi-email
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-if="data.user">
                  {{ data.user.email }}
                </v-list-item-title>
                <v-list-item-subtitle>Email</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset />
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-map-marker
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-if="data.village">
                  {{
                    data.village.name
                  }}
                </v-list-item-title>
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
                  ref="markers"
                  :position="getMarkers(data)"
                  :draggable="false"
                  :icon="markerOptions"
                  :animation="2"
                  @click="latlng = data"
                />
              </GmapMap>
            </v-col>
          </v-row>
        </v-container>
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

    <ModalView>
      <template>
        <v-card>
          <v-img
            :src="imageUrl"
            alt="Image"
            width="auto"
            height="auto"
            dark
          />
        </v-card>
      </template>
    </ModalView>
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
      selectedDistrict: '',
      villages: [],
      selectedVillage: '',
      village_details: [],
      selectedVillageDetail: [],

      address: [],
      errormsg: '',
      preview_list: [],
      image_list: [],
      image: [],
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
      imageUrl: '',
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
    showImage(url) {
      if (url != null) {
        this.imageUrl = url;
        this.$store.commit('modalView_State', true);
      }
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`customer/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.data = res.data.data;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.response && error.response.status == 422) {
            const obj = error.response.data.errors;
            for (const [key, message] of Object.entries(obj)) {
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
        name: 'EditCustomer',
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
