<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      View Village Details</v-breadcrumbs
    >
    <v-col justify="center">
      <v-card class="my-6" elevation="2">
        <v-card-title>
          ຂໍ້ມູນລາຍລະອຽດທີ່ຢູ່
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="addressdetail"
          :search="search"
          :disable-pagination="true"
          hide-default-footer
        >
          <template v-slot:[`item.detail`]="{ item }">
            <div v-if="item.detail.village_details">
              <div
                v-for="(data, index) in item.detail.village_details"
                :key="index"
              >
                <span>{{ data.name }}</span>
              </div>
            </div>
          </template>

          <template v-slot:[`item.actions`]="{ item }">
            <v-icon
              small
              color="green"
              class="mr-2"
              @click="OpenModalEdit(item)"
            >
              mdi-account-edit
            </v-icon>
            <v-icon small color="red" @click="deleteItem(item.id)">
              mdi-trash-can-outline
            </v-icon>
          </template>
        </v-data-table>
        <template>
          <Pagination
            v-if="pagination.total_pages > 1"
            :pagination="pagination"
            :offset="offset"
            @paginate="fetchData()"
          ></Pagination>
        </template>
      </v-card>
    </v-col>

    <v-card>
      <v-card-title>
        <span class="headline">View Village</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="district*"
                  required
                  v-model="showdistrict.name"
                  :rules="nameRules"
                  disabled
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.name }}
                </p>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  label="village *"
                  required
                  v-model="data.name"
                  :rules="nameRules"
                  disabled
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.name }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="selectedVillageDetail2"
                  :items="villagevariate2"
                  item-text="name"
                  item-value="id"
                  label=" ໜ່ວຍ*"
                ></v-select>
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>
              <v-col cols="4">
                <v-select
                  v-model="selectedVillageDetail"
                  :items="villagevariate1"
                  item-text="name"
                  item-value="id"
                  label="ຮ່ອມ*"
                ></v-select>
                <p class="errors">
                  {{ errormsg }}
                </p>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="backPrevios()">
            Back
          </v-btn>
        </v-card-actions>
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
      showdistrict: {},
      selectedVillage: "",
      //ໜ່ວຍ
      nuay: [],
      villagevariate1: [],
      village_detail1: [],
      selectedVillageDetail: [],

      //ຮ່ອມ
      horm: [],
      villagevariate2: [],
      selectedVillageDetail2: [],

      villagevariation: {},

      addressdetail: [],
      paeng: [],
      errormsg: "",
      search: "",
      headers: [
        { text: "name", value: "name" },
        { text: "ລາຍລະອຽດ", value: "detail" },
        { text: "actions", value: "actions" },
      ],
      //pagination
      offset: 12,
      pagination: {},
      per_page: 15,

      //Validation
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      ruleVillage: [(v) => !!v || "Village is required"],
      rulesDistrict: [(v) => !!v || "District is required"],
      rules: [
        (v) => !!v || "File is required",
        (v) => (v && v.size > 0) || "File is required",
      ],
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("info/village/" + this.$route.params.id)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.data = res.data.data;
              this.showdistrict = res.data.data.district;
              console.log(this.data);
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

    fetchVillageVariation() {
      this.$axios
        .get("info/village/" + this.$route.params.id + "/village-detail", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: "",
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.addressdetail = res.data.data.data;
              console.log(this.addressdetail);
              this.pagination = res.data.data.pagination;
              this.horm.map((item) => {
                this.villagevariate1 = item.village_details;
                this.selectedVillageDetail = this.villagevariate1[0].id;
              });
            }, 300);
          }
        })
        .catch(() => {});
    },

    //ໜ່ວຍ
    fetchVillageVariation2() {
      this.$axios
        .get("info/village/" + this.$route.params.id + "/village-detail", {
          params: { filter: "ໜ່ວຍ" },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.nuay = res.data.data;
              this.nuay.map((item) => {
                this.villagevariate2 = item.village_details;
                this.selectedVillageDetail = this.villagevariate2[0].id;
              });
            }, 300);
          }
        })
        .catch(() => {});
    },

    fetchVariation() {
      this.$axios
        .get("info/village-variation")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.variation = res.data.data;
            }, 300);
          }
        })
        .catch((error) => {
          this.loading = false;
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },

    backPrevios() {
      this.$router.go(-1);
    },
  },
  watch: {},

  created() {
    this.fetchData();
    //ຮ່ອມ
    this.fetchVillageVariation();
    //ໜ່ວຍ
    this.fetchVillageVariation2();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
.primary-color {
  color: $primary-color;
}
.text-field {
  border-color: $primary-color;
  padding: 12px 8px 12px 8px;
  width: 100%;
  margin-bottom: 12px;
  font-size: 16px;
  background: #eee;
  border-radius: 2 px;
}
</style>