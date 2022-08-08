<template>
  <v-container>
    <v-breadcrumbs large class="pt-0">
      <v-btn text class="text-primary" @click="backPrevios()">
        <v-icon>mdi-chevron-left</v-icon></v-btn
      >
      ລາຍລະອຽດເກັບຂີ້ເຫື້ຍອພິເສດ</v-breadcrumbs
    >
    <v-card>

      <!--      <div v-for="(item, index) in data.media" :key="index">-->
      <!--        <v-img :src="item.url" alt="Image" height="500px" dark> </v-img>-->
      <!--      </div>-->

      <v-row>
        <v-col v-if="data.image_collect_locations && data.image_collect_locations.length">
          <v-carousel v-if="data.image_collect_locations && data.image_collect_locations.length">
            <v-carousel-item
                v-for="(item, index) in data.image_collect_locations"
                :key="index"
                :src="item.url"
                @click="showImage(item.url)"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <p class="text-center pt-4">ຮູບສະຖານທີ່</p>
        </v-col>
        <v-col v-if="data.image_collecteds && data.image_collecteds.length">
          <v-carousel v-if="data.image_collecteds && data.image_collecteds.length">
            <v-carousel-item
                v-for="(item, index) in data.image_collecteds"
                :key="index"
                :src="item.url"
                @click="showImage(item.url)"
                reverse-transition="fade-transition"
                transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
          <p class="text-center pt-4">ຮູບຂີ້ເຫື້ຍອ</p>
        </v-col>
      </v-row>
      <v-card-text>
        <v-container>
          <v-simple-table>
            <tbody class="tb-result">
            <tr>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ບິນ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="data.billing">
                {{ data.billing.content }}
              </td>
            </tr>
            <tr>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ລວມເງິນ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="data.billing">
                {{ Intl.NumberFormat().format(data.billing.sub_total) }}
              </td>
            </tr>
            <tr>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ສ່ວນຫຼຸດ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="data.billing">
                {{ Intl.NumberFormat().format(data.billing.discount) }}
              </td>
            </tr>
            <tr style="font-size: 20px;">
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ລວມທັງໝົດ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="data.billing">
                {{ Intl.NumberFormat().format(data.billing.total) }}
              </td>
            </tr>
            </tbody>
            <br/>
          </v-simple-table>
          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-account</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-subtitle>ຊື່</v-list-item-subtitle>
                <v-list-item-title
                >{{ data.name }} {{ data.surname }}</v-list-item-title
                >
              </v-list-item-content>

              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-icon color="indigo" class="mr-6"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-subtitle>ເບີໂທ</v-list-item-subtitle>
                <v-list-item-title> {{ data.phone }}</v-list-item-title>
              </v-list-item-content>

              <v-spacer></v-spacer>
              <v-list-item-icon>
                <v-icon class="mr-6" color="indigo">mdi-calendar</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>ວັນທີ</v-list-item-subtitle>
                <v-list-item-title> {{ data.date }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
          </v-row>

          <v-row>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo"> mdi-calendar </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-subtitle>ສະຖານະ</v-list-item-subtitle>
                <v-list-item-subtitle>
                  <span>
                    <v-chip
                        label
                        class="success"
                        v-if="data.collect_status == 'active'"
                    >{{ data.collect_status }}</v-chip
                    >
                    <v-chip
                        label
                        class="error"
                        v-else-if="data.collect_status == 'inactive'"
                    >{{ data.collect_status }}</v-chip
                    >
                    <v-chip label class="primary" v-else>{{
                        data.collect_status
                      }}</v-chip>
                  </span>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider inset></v-divider>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-subtitle>ສະຖານທີ່</v-list-item-subtitle>
                <v-list-item-title v-if="data.village">{{
                    data.village.name
                  }}</v-list-item-title>
                <v-list-item-subtitle>{{
                    data.description
                  }}</v-list-item-subtitle>
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
        <v-card-actions>
          <v-spacer></v-spacer>
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
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                        label="Name *"
                        required
                        v-model="item.name"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        label="Surname *"
                        required
                        v-model="item.surname"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.surname }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                        label="ເບີໂທ *"
                        required
                        v-model="item.phone"
                        type="number"
                        class="input-number"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.phone }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeEditModal()">
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

    <ModalView>
      <template>
        <v-card>
          <v-img :src="imageUrl" alt="Image" width="auto" height="auto" dark> </v-img>
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
      item: {},
      imageUrl:""
    };
  },
  methods: {
    showImage(url){
      if(url != null){
        this.imageUrl = url;
        this.$store.commit("modalView_State", true);
      }
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
          .get("v2/collection-event/" + this.$route.params.id)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit("Loading_State", false);
                this.data = res.data.data;
                console.log(this.data);
              }, 300);
            }
          })
          .catch((error) => {
            this.$store.commit("Loading_State", false);
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(data) {
      this.item = data;
      console.log(this.item);
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
          .delete("coordinator/" + this.item.id)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.$store.commit("modalDelete_State", false);
                this.fetchData();
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.fetchData();
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            this.$store.commit("modalDelete_State", false);
            this.loading = false;
          });
    },
    editItem(data) {
      this.item = data;
      this.$store.commit("modalEdit_State", true);
    },
    closeEditModal() {
      this.$store.commit("modalEdit_State", false);
    },
    UpdateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
            .put("coordinator/" + this.item.id, {
              name: this.item.name,
              surname: this.item.surname,
              phone: this.item.phone,
            })
            .then((res) => {
              if (res.data.code == 200) {
                setTimeout(() => {
                  this.loading = false;
                  this.closeEditModal();
                  this.item = {};
                  this.fetchData();
                  this.$store.commit("Toast_State", {
                    value: true,
                    color: "success",
                    msg: res.data.message,
                  });
                }, 300);
              }
            })
            .catch((error) => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "error",
                msg: error.response.data.message,
              });
              this.fetchData();
              if (error.response.status == 422) {
                var obj = error.response.data.errors;
                for (let [key, customer] of Object.entries(obj)) {
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
        name: "EditCollectionEventInvoice",
        params: { id },
      });
    },
  },
  watch: {
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
@import "../../../../../public/scss/main.scss";
.v-list-item__title,
.v-list-item__subtitle {
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: inherit !important;
  white-space: pre-line !important;
}
</style>