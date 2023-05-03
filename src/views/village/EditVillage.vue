<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn
        text
        class="text-primary"
        @click="backPrevios()"
      >
        <v-icon>mdi-keyboard-backspace </v-icon>
      </v-btn>
      Edit Village Details
    </v-breadcrumbs>
    <v-card>
      <v-card-title>
        <span class="headline">Edit Village</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="showdistrict.name"
                  label="district*"
                  required
                  :rules="nameRules"
                  readonly
                />
                <p class="errors">
                  {{ server_errors.name }}
                </p>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  v-model="data.name"
                  label="village *"
                  required
                  :rules="nameRules"
                  readonly
                />
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
                  :hint="`${selectedVillageDetail2.name}`"
                  return-object
                />
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
                  :hint="`${selectedVillageDetail.name}`"
                  return-object
                />
                <p class="errors">
                  {{ errormsg }}
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
            @click="backPrevios()"
          >
            Back
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="UpdateData()"
          >
            Update
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
      selectedDistrict: '',
      villages: [],
      showdistrict: {},
      selectedVillage: '',
      // ໜ່ວຍ
      nuay: [],
      villagevariate1: [],
      village_detail1: [],
      selectedVillageDetail: [],

      // ຮ່ອມ
      horm: [],
      villagevariate2: [],
      selectedVillageDetail2: [],

      villagevariation: {},
      errormsg: '',

      // Validation
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
      ruleVillage: [(v) => !!v || 'Village is required'],
      rulesDistrict: [(v) => !!v || 'District is required'],
      rules: [
        (v) => !!v || 'File is required',
        (v) => (v && v.size > 0) || 'File is required',
      ],
    };
  },
  watch: {},

  created() {
    // this.fetchData();
    // //ຮ່ອມ
    // this.fetchVillageVariation();
    // //ໜ່ວຍ
    // this.fetchVillageVariation2();
  },
  methods: {
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`info/village/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.data = res.data.data;
              this.showdistrict = res.data.data.district;
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

    fetchVillageVariation() {
      this.$axios
        .get(`info/village/${this.$route.params.id}/village-detail`, {
          params: { filter: 'ຮ່ອມ' },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.horm = res.data.data;
              this.horm.map((item) => {
                this.villagevariate1 = item.village_details;
                this.selectedVillageDetail = this.villagevariate[0].id;
              });
            }, 300);
          }
        })
        .catch(() => {});
    },

    // ໜ່ວຍ
    fetchVillageVariation2() {
      this.$axios
        .get(`info/village/${this.$route.params.id}/village-detail`, {
          params: { filter: 'ໜ່ວຍ' },
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

    // 5
    fetchVariation() {
      this.$axios
        .get('info/village-variation')
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.variation = res.data.data;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.fetchData();
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
