<template>
  <div>
    <v-container>
      <v-card
        class="mb-12"
        elevation="0"
      >
        <v-card-text>
          <v-row class="my-2">
            <v-col>
              <h3>Import Driver, Employee, Vehicle, Team, Team Member</h3>
            </v-col>
          </v-row>
          <v-form
            ref="form"
            lazy-validation
          >
            <v-file-input
              ref="filename"
              v-model="filename"
              label="File (xlsx)"
              show-size
              accept=".xlsx"
              truncate-length="60"
              outlined
            />
            <p class="errors">
              {{ server_errors.file }}
            </p>
          </v-form>
          <v-card-actions>
            <v-spacer />
            <v-btn
              large
              color="info"
              :loading="loading"
              :disabled="loading"
              @click="ImportFile()"
            >
              ບັນທຶກ
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filename: null,
      loading: false,
      server_errors: {},
    };
  },
  methods: {
    ImportFile() {
      const formData = new FormData();
      formData.append('file', this.filename);
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post('import-driver', formData)
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.filename = null;
                this.reset();
                this.$store.commit('Toast_State', {
                  value: true,
                  color: 'success',
                  msg: res.data.message,
                });
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
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
  },
};
</script>
