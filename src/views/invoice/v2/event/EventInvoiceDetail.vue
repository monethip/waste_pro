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

          <h3>ຂໍ້ມູນລູກຄ້າ</h3>
          <br/>
          <v-simple-table>
            <tbody class="tb-result">
            <tr>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ລຸກຄ້າ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">
                {{ data.name }} {{ data.surname }}
              </td>
            </tr>
            <tr>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ເບີໂທ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="data.billing">
                {{ data.phone }}
              </td>
            </tr>
            <tr style="font-size: 20px;">
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ວັນທີລົງເກັບ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">
                {{ data.date }}
              </td>
            </tr>
            <tr style="font-size: 20px;">
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ສະຖານທີ່:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="data.village">
           {{
                      data.village.name
                    }}
              </td>
            </tr>
            <tr style="font-size: 20px;">
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ສະຖານະການເກັບ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="data.village">
           {{
                      data.collect_status
                    }}
              </td>
            </tr>
            <tr style="font-size: 20px;">
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ລາຍລະອຽດ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;">
                {{
                  data.description
                }}
              </td>
            </tr>
            <tr style="font-size: 20px;">
              <td :colspan="4" style="font-size:16px;font-weight: 600;">ພະນັກງານຂັບລົດ:</td>
              <td :colspan="4" style="font-size:16px;font-weight: 600;" v-if="data.driver">
                {{
                  data.driver.name
                }} {{
                  data.driver.surname
                }}
              </td>
            </tr>
            </tbody>
            <br/>
          </v-simple-table>

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
            if (error.response && error.response.status == 422) {
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
              msg: error.response ? error.response.data.message : 'Something went wrong',
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
                msg: error.response ? error.response.data.message : 'Something went wrong',
              });
              this.fetchData();
              if (error.response && error.response.status == 422) {
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