<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ສ້າງແຜນເສັ້ນທາງເກັບຂີເຫື້ອຍ</v-breadcrumbs
    >
    <v-card>
      <v-card-title>
        <span class="headline">Create Plan</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form ref="form" lazy-validation>
            <v-row>
              <v-col align="12">
                <!--
                <v-file-input
                  label="File input (.kml)"
                  v-model="selectedFile"
                  :rules="rulesFile"
                ></v-file-input>
                -->
                <v-file-input
                  v-model="selectedFile"
                  show-size
                  label="File input"
                ></v-file-input>
                <p class="errors">
                  {{ server_errors.file }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Embed"
                  required
                  v-model="embed"
                  :rules="nameRules"
                ></v-text-field>
                <p class="errors">
                  {{ server_errors.embed }}
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
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="AddData()"
          >
            Save
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
      selectedFile: "",
      embed: "",
      errormsg: "",
      //Validation

      nameRules: [
        (v) => !!v || "Embed is required",
        (v) => (v && v.length >= 2) || "Embed must be less than 2 characters",
      ],
      rulesFile: [(v) => !!v || "File is required"],
    };
  },
  methods: {
    fetchAddress() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              //   this.address = res.data.data;
              //   this.address.map((item) => {
              //     this.districts = item.districts;
              //     this.selectedDistrict = this.districts[0].id;
              //   });
            }, 300);
          }
        })
        .catch(() => {});
    },

    backPrevios() {
      this.$router.go(-1);
    },
    AddData() {
      console.log(this.embed);
      console.log(this.selectedFile);
      let formData = new FormData();
      formData.append("embed", this.embed);
      formData.append("file", this.selectedFile);

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("route-plan", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.$store.commit("Toast_State", res.data.message);
                this.$router.push({
                  name: "Plan",
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }
            this.loading = false;
            this.fetchData();
            this.$store.commit("Toast_State", this.toast_error);
          });
      }
    },
  },
  watch: {
    //Clear error change
    "data.embed": function () {
      this.server_errors.embed = "";
    },
    "data.file": function () {
      this.server_errors.file = "";
    },
  },
  created() {
    this.fetchAddress();
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