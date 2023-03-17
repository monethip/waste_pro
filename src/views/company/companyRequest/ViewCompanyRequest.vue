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
                  mdi-office-building
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-subtitle>ບໍລິສັດ</v-list-item-subtitle>
                <v-list-item-title>
                  {{ data.name }} {{ data.company_name }}
                </v-list-item-title>
              </v-list-item-content>

              <v-spacer />
              <v-list-item-icon>
                <v-icon
                  color="indigo"
                  class="mr-6"
                >
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                <v-list-item-title>
                  {{ data.phone }}
                </v-list-item-title>
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
                <v-list-item-subtitle>Email</v-list-item-subtitle>
                <v-list-item-title>
                  {{ data.email }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset />
          </v-row>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-account-circle
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>ຜູ້ປະສານງານ</v-list-item-subtitle>
                <v-list-item-title>
                  {{ data.coordinator_name }} {{ data.coordinator_surname }}
                </v-list-item-title>
              </v-list-item-content>
              <v-spacer />
            </v-list-item>
            <v-divider inset />
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-calendar
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-subtitle>ສະຖານະ</v-list-item-subtitle>
                <v-list-item-title>{{ data.start_month }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span>
                    <v-chip
                      v-if="data.status == 'success'"
                      label
                      class="success"
                    >{{ data.status }}</v-chip>
                    <v-chip
                      v-else-if="data.status == 'pending'"
                      label
                      class="primary"
                    >{{ data.status }}</v-chip>
                    <v-chip
                      v-else
                      label
                      class="primary"
                    >{{
                      data.status
                    }}</v-chip>
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset />
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-home
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title
                  v-if="data.village"
                >
                  {{ data.village.name }},
                  {{ data.district.name }}
                </v-list-item-title>
                <div
                  v-for="(detail, index) in data.village_details"
                  :key="index"
                >
                  <v-list-item-subtitle>{{ detail.name }}</v-list-item-subtitle>
                </div>
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
                <v-list-item-title
                  v-if="data.lat"
                >
                  Lat: {{ data.lat }},
                  Lng: {{ data.lng }}
                </v-list-item-title>
                <!--                  <v-list-item-subtitle>{{ detail.name }}</v-list-item-subtitle>-->
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
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="addCustomer(data)"
          >
            ເພີ່ມເຂົ້າຖານລູກຄ້າ
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
    <ModalView>
      <template>
        <v-img
          :src="imageUrl"
          alt="Image"
          width="auto"
          height="auto"
          dark
        />
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
      village_details: [],
      imageUrl: '',
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
        // eslint-disable-next-line global-require
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
      item: {},
    };
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
        .post(`request-company-status/${this.$route.params.id}`, { status: this.$route.params.status })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.data = res.data.data;
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
    addCustomer(data) {
      this.$router.push({ name: 'CreateCompany', params: { items: data } });
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
.v-list-item__title,
.v-list-item__subtitle {
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: inherit !important;
  white-space: pre-line !important;
}
</style>
