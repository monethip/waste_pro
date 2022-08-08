<template>
  <v-container>
    <v-breadcrumbs large>
      <v-btn text class="text-primary" @click="backPrevios()"
        ><v-icon>mdi-keyboard-backspace </v-icon></v-btn
      >
      ສ້າງແຜນເສັ້ນທາງເກັບຂີເຫື້ຍອ</v-breadcrumbs
    >
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1">
          Upload KMZ File
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="step > 2" step="2"> ຊື່ແຜນ </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">Embed</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" elevation="0">
            <v-card-text>
              <v-form ref="form" lazy-validation>
                <!--
                <v-file-input
                  label="File input (.kml)"
                  v-model="selectedFile"
                  :rules="rulesFile"
                ></v-file-input>
                -->
                <v-file-input
                  label="File (kml/kmz)"
                  show-size
                  accept=".kml, .kmz"
                  truncate-length="30"
                  v-model="filename"
                  :rules="rulesFile"
                  ref="filename"
                ></v-file-input>
                <p class="errors">
                  {{ server_errors.file }}
                </p>
              </v-form>
            </v-card-text>
          </v-card>
          <v-btn class="btn-primary" :loading="loading" @click="UploadFile">
            Continue
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="lighten-0" height="200px">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Name"
                    required
                    v-model="plan.name"
                    :rules="nameRules"
                  ></v-text-field>
                  <p class="errors">
                    {{ server_errors.name }}
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
          <v-btn class="btn-primary" @click="step = 3"> Continue </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12">
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Embed"
                    required
                    v-model="plan.embed"
                  ></v-text-field>
                  <p class="errors">
                    {{ server_errors.embed }}
                  </p>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-btn class="btn-primary" @click="UpdateData"> Continue </v-btn>
          <v-btn text @click="step = 2"> Back </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      server_errors: {},
      filename: "",
      embed: "",
      errormsg: "",
      plan: {},
      //Validation

      nameRules: [
        (v) => !!v || "Embed is required",
        (v) => (v && v.length >= 2) || "Embed must be less than 2 characters",
      ],
      rulesFile: [(v) => !!v || "File is required"],
      step: 1,
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    UploadFile() {
      let formData = new FormData();
      formData.append("file", this.filename);

      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("route-plan", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.plan = res.data.data;
                this.loading = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
                this.step = 2;
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
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
            this.loading = false;
          });
      }
    },

    UpdateData() {
      let formData = new FormData();
      formData.append("name", this.plan.name);
      formData.append("embed", this.plan.embed);
      formData.append("_method", "PUT");
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("route-plan/" + this.plan.id, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.$store.commit("Toast_State", {
                  value: true,
                  color: "success",
                  msg: res.data.message,
                });
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
            this.$store.commit("Toast_State", {
              value: true,
              color: "error",
              msg: error.response.data.message,
            });
          });
      }
    },
  },
  watch: {
    //Clear error change
    "plan.name": function () {
      this.server_errors.name = "";
    },
    filename: function () {
      this.server_errors.file = "";
    },
  },
};
</script>
<style lang="scss">
@import "../../../public/scss/main.scss";
</style>