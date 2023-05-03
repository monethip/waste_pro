<template>
  <v-container>
    <v-breadcrumbs
      large
      class="mt-n4"
    >
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace</v-icon>
      </v-btn>Export ຂໍ້ມູນລູກຄ້າບໍລິສັດໃນແຜນເສັ້ນທາງ
      <v-spacer />
      <span class="mr-4">
        <v-icon color="red">mdi-map-marker</v-icon>ຢູ່ໃນແຜນແລ້ວ
      </span>
      <span>
        <v-icon style="color: #49a3da">mdi-map-marker</v-icon>ຍັງບໍທັນຢູ່ໃນແຜນ
      </span>
    </v-breadcrumbs>
    <v-row>
      <v-col
        cols="12"
        class="mb-4"
      >
        <GmapMap
          v-if="customers"
          :center="getCenter().lat > 0 || getCenter().lat < 0 ? getCenter() : { lat: 0, lng: 0 }"
          :zoom="14"
          style="width: 100%; height: 450px"
          :disable-default-u-i="true"
        >
          <gmap-info-window
            :options="infoOptions"
            :position="infoPosition"
            :opened="infoOpened"
            :conent="infoContent"
            @closeclick="infoOpened = false"
          >
            {{ infoContent }}
          </gmap-info-window>
          <GmapMarker
            v-for="(m, index) in customers"
            :key="index"
            :position="getMarkers(m)"
            :draggable="false"
            :icon="getSiteIcon(m)"
            :animation="2"
            :clickable="true"
            :label="(index + 1).toString()"
            @click="toggleInfo(m, index)"
          />
        </GmapMap>
      </v-col>
    </v-row>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          :loading="loading"
          :disabled="loading"
          @click="exportRoutePlan()"
        >
          <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h4 v-if="customers">
          ລວມລູກຄ້າ {{ customers.length }} ຄົນ
        </h4>
      </v-col>
      <v-col>
        <v-text-field
          v-model="search"
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="Search"
          type="text"
          @keyup.enter="Search()"
        />
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card flat>
          <v-card-text>
            <div>
              <v-btn
                text
                color="error"
                @click="deleteItem"
              >
                <v-icon medium>
                  mdi-delete
                </v-icon>
              </v-btn>
            </div>
            <v-data-table
              v-model="selectedRows"
              :headers="headers"
              :items="customers"
              :search="search"
              :disable-pagination="true"
              hide-default-footer
              show-select
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

              <template
                slot="item.index"
                slot-scope="props"
              >
                <div>{{ props.index + 1 }}</div>
              </template>
              <template v-slot:item.address_detail="{ item }">
                <div
                  v-for="(data, index) in item.village_details"
                  :key="index"
                >
                  <span>{{ data.name }}</span>
                </div>
              </template>
              <template v-slot:item.address="{ item }">
                <div
                  v-if="item.district && item.village"
                >
                  {{ item.district.name }}, {{ item.village.name }}
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon
                  small
                  class="mr-2"
                  @click="viewPage(item.id)"
                >
                  mdi-eye
                </v-icon>
              </template>

              <!--
              <template slot="item.delete" slot-scope="props">
                <v-icon small @click="deleteItem(props)"> mdi-delete </v-icon>
              </template>
              -->
              <!--
              <template v-slot:item="{ item }">
                <tr :class="selectedRows.indexOf(item.id) - 1 ? 'cyan' : ''">
                  <td>{{ item.id + 1 }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.surname }}</td>
                  <td>{{ item.user.phone }}</td>
                  <td>{{ item.house_number }}</td>
                  <td>
                    <v-icon small @click="deleteItem(item.index)">
                      mdi-delete
                    </v-icon>
                  </td>
                </tr>
              </template>
              -->
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-card>
    </div>

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
  </v-container>
</template>

<script>
export default {
  name: 'Company',
  title() {
    return `Vientiane Waste Co-Dev|Export Company`;
  },
  props: ['items', 'villages'],
  data() {
    return {
      customers: [],
      countcutomer: 0,
      loading: false,
      customerId: '',
      // Pagination
      search: '',
      oldVal: '',
      selectedVillage: [],
      selectedCustomer: [],
      exclude_company: [],
      selectedRows: [],
      customer: {},

      headers: [
        // { text: "", value: "index" },
        { text: 'ບໍລິສັດ', value: 'company_name' },
        { text: 'Phone', value: 'user.phone', sortable: false },
        { text: 'ລາຍລະອຽດທີ່ຢູ່', value: 'address_detail' },
        { text: 'ບ້ານ', value: 'village.name', sortable: true },
        { text: 'ເມືອງ', value: 'district.name', sortable: true },
        // { text: "", value: "actions", sortable: false },
      ],
      // Map
      latlng: {
        lat: 0,
        lng: 0,
      },
      markers: [],
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
  watch: {
    search(value) {
      if (value == '') {
        this.fetchData();
      }
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.customers = this.items;
      // localStorage.setItem("customers", this.customers);
      this.selectedVillage = this.villages;
    },

    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    deleteItem() {
      if (this.selectedRows.length) {
        this.$store.commit('modalDelete_State', true);
      }
    },

    deleteItemConfirm() {
      this.selectedCustomer = [];
      this.loading = true;
      for (let i = 0; i < this.selectedRows.length; i++) {
        const index = this.customers.indexOf(this.selectedRows[i]);
        this.selectedCustomer.push(this.customers[index]);
        this.customers.splice(index, 1);
      }
      this.selectedCustomer.filter((item) => {
        this.exclude_company.push(item.id);
      });
      this.$store.commit('Toast_State', {
        value: true,
        color: 'success',
        msg: 'ລຶບຂໍ້ມູນສຳເລັດແລ້ວ',
      });
      this.selectedRows = [];
      this.fetchData();
      this.loading = false;
      this.$store.commit('modalDelete_State', false);
    },

    exportRoutePlan() {
      if (this.customers.length) {
        this.loading = true;
        this.$axios
          .post(
            'export-company-location',
            {
              headers: {
                exclude_companies: this.exclude_company,
                villages: this.selectedVillage,
              },
            },
            { responseType: 'blob' },
          )
          .then((res) => {
            if (res.status == 200) {
              console.log('Success');
              setTimeout(() => {
                this.loading = false;
                const fileUrl = window.URL.createObjectURL(
                  new Blob([res.data]),
                );
                const fileLink = document.createElement('a');
                fileLink.href = fileUrl;
                fileLink.setAttribute('download', 'company_location' + '.xlsx');
                document.body.appendChild(fileLink);
                fileLink.click();
                document.body.removeChild(fileLink);
              }, 300);
              this.$router.push({
                name: 'Plan',
              });
            }
          })
          .catch((error) => {
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response
                ? error.response.data.message
                : 'Something went wrong',
            });
            this.loading = false;
          });
      } else {
        this.$store.commit('Toast_State', {
          value: true,
          color: 'error',
          msg: 'ກາລຸນາເລືອກລູກຄ້າກ່ອນ',
        });
      }
    },

    viewPage(id) {
      this.$router.push({
        name: 'ViewClient',
        params: { id },
      });
    },
    // Google map
    getCenter() {
      if (this.customers.length) {
        if (parseFloat(this.customers[0].lat) == null) {
          return this.latlng;
        }
        const latlng = {
          lat: parseFloat(this.customers[0].lat),
          lng: parseFloat(this.customers[0].lng),
        };
        return latlng;
      }
      return this.latlng;
    },
    getMarkers(m) {
      if (m.customer !== null) {
        return {
          lat: parseFloat(m.lat),
          lng: parseFloat(m.lng),
        };
      }
    },
    getSiteIcon(status) {
      const pin1 = {
        url: require('@coms/../../src/assets/pin1.svg'),
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
          f: 'px',
          b: 'px',
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
      };
      const pin2 = {
        url: require('@coms/../../src/assets/pin2.svg'),
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
          f: 'px',
          b: 'px',
        },
        scaledSize: {
          width: 35,
          height: 55,
          f: 'px',
          b: 'px',
        },
      };

      try {
        switch (status.route_plan_details_count) {
          case 0:
            return pin1;
          case 1:
            return pin2;
        }
      } catch (e) {
        return pin1;
      }
    },
    toggleInfo(m, key) {
      this.infoPosition = this.getMarkers(m);
      this.infoContent = m.company_name;
      if (this.infoCurrentKey == key) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = key;
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../../../../public/scss/main.scss";
</style>
