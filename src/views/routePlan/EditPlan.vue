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
      ແກ້ໄຂແຜນເສັ້ນທາງ
    </v-breadcrumbs>
    <v-card>
      <v-card-title>
        <span class="headline">Update Plan</span>
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
                  v-model="plan.name"
                  label="Name"
                  required
                  :rules="nameRules"
                />
                <p class="errors">
                  {{ server_errors.name }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="plan.description"
                  label="Description"
                />
                <p class="errors">
                  {{ server_errors.description }}
                </p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="plan.embed"
                  label="Embed"
                />
                <p class="errors">
                  {{ server_errors.embed }}
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
      selectedFile: '',
      embed: '',
      errormsg: '',
      plan: {},
      // Validation
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length >= 2) || 'Name must be less than 2 characters',
      ],
    };
  },
  watch: {
    // Clear error change
    'data.embed': function () {
      this.server_errors.embed = '';
    },
    'data.name': function () {
      this.server_errors.name = '';
    },
  },
  created() {
    this.fetchDetail();
  },
  methods: {
    fetchDetail() {
      this.$axios
        .get(`route-plan/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.plan = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
    },

    backPrevios() {
      this.$router.go(-1);
    },
    UpdateData() {
      console.log(this.plan.name);
      const formData = new FormData();
      formData.append('name', this.plan.name);
      formData.append('embed', this.plan.embed);
      formData.append('description', this.plan.description);
      formData.append('_method', 'PUT');
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`route-plan/${this.$route.params.id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.$store.commit('Toast_State', res.data.message);
                this.$router.push({
                  name: 'Plan',
                });
              }, 300);
            }
          })
          .catch((error) => {
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, data] of Object.entries(obj)) {
                this.server_errors[key] = data[0];
              }
            }
            this.$store.commit('Loading_State', false);
            this.$store.commit('Toast_State', this.toast_error);
          });
      }
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
  border-radius: 2px;
}
</style>
