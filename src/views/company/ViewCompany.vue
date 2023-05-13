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
                <v-list-item-title v-if="data.user">
                  {{ data.user.phone }}
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
                <v-list-item-title v-if="data.user">
                  {{ data.user.email }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset />
          </v-row>
          <v-row>
            <v-list-item
              v-for="(coor, index) in data.company_coordinators"
              :key="index"
            >
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-account-circle
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>ຜູ້ປະສານງານ</v-list-item-subtitle>
                <v-list-item-title>
                  {{ coor.name }} {{ coor.surname }}
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
                  {{ coor.phone }}
                </v-list-item-title>
              </v-list-item-content>
              <v-spacer />
              <v-list-item-icon>
                <v-icon
                  color="indigo"
                  class="mr-6"
                >
                  mdi-email
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>Email</v-list-item-subtitle>
                <v-list-item-title>
                  {{ coor.email }}
                </v-list-item-title>
              </v-list-item-content>

              <v-list-item-content class="text-center">
                <v-list-item-title>
                  <v-icon
                    small
                    class="mr-2"
                    @click="editItem(coor)"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon
                    small
                    @click="deleteItem(coor)"
                  >
                    mdi-delete
                  </v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset />
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-calendar
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-subtitle>ວັນທີ່ເລີ່ມ</v-list-item-subtitle>
                <v-list-item-title>{{ data.start_month }}</v-list-item-title>
                <v-list-item-subtitle>
                  <span>
                    <v-chip
                      v-if="data.status == 'active'"
                      label
                      class="success"
                    >{{ data.status }}</v-chip>
                    <v-chip
                      v-else-if="data.status == 'inactive'"
                      label
                      class="error"
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

              <v-spacer />
              <v-list-item-icon>
                <v-icon
                  color="indigo"
                  class="mr-6"
                >
                  mdi-package
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>ປະເພດບໍລິການ</v-list-item-subtitle>
                <v-list-item-title>{{ data.cost_by }}</v-list-item-title>
                <v-list-item-subtitle v-if="data.cost_by == 'bag'">
                  ມູນຄ່າສັນຍາ {{
                    Intl.NumberFormat().format(data.current_bag_price.price)
                  }}
                </v-list-item-subtitle>
                <v-list-item-subtitle v-if="data.cost_by !== 'bag'">
                  ມູນຄ່າສັນຍາ {{
                    Intl.NumberFormat().format(data.fix_cost)
                  }}
                </v-list-item-subtitle>
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
            @click="editPage(data.id)"
          >
            Update
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>

    <!-- Modal Add-->
    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂຜູ້ປະສານງານ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="item.name"
                      label="Name *"
                      required
                    />
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="item.surname"
                      label="Surname *"
                      required
                    />
                    <p class="errors">
                      {{ server_errors.surname }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="item.phone"
                      label="ເບີໂທ *"
                      required
                      type="number"
                      class="input-number"
                    />
                    <p class="errors">
                      {{ server_errors.phone }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="closeEditModal()"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="UpdateItem()"
              >
                Update
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>

    <!--Delete Modal-->
    <ModalDelete>
      <template>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            text
            @click="closeDelete"
          >
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteItemConfirm"
          >
            OK
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </template>
    </ModalDelete>

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
      village_details: [],

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
      item: {},
      imageUrl: '',
    };
  },
  watch: {
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
        .get(`company/${this.$route.params.id}`)
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

    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    deleteItem(data) {
      this.item = data;
      this.$store.commit('modalDelete_State', true);
    },

    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`coordinator/${this.item.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('modalDelete_State', false);
              this.fetchData();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.fetchData();
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
    editItem(data) {
      this.item = data;
      this.$store.commit('modalEdit_State', true);
    },
    closeEditModal() {
      this.$store.commit('modalEdit_State', false);
    },
    UpdateItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .put(`coordinator/${this.item.id}`, {
            name: this.item.name,
            surname: this.item.surname,
            phone: this.item.phone,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeEditModal();
                this.item = {};
                this.fetchData();
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            this.fetchData();
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
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
        name: 'EditCompany',
        params: { id },
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
.v-list-item__title,
.v-list-item__subtitle {
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: inherit !important;
  white-space: pre-line !important;
}
</style>
