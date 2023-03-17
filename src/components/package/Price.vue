<template>
  <v-container>
    <v-col
      justify="center"
      class="mt-n6"
    >
      <v-card-title> ຂໍ້ມູນລາຄາ </v-card-title>
      <v-data-table
        :headers="headers"
        :items="packagessize"
        :disable-pagination="true"
        hide-default-footer
      >
        <template v-slot:[`item.updated_at`]="{ item }">
          <div>{{ moment(item.updated_at).format("DD-MM-YY hh:mm") }}</div>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            color="green"
            class="mr-2"
            @click="OpenModalEdit(item)"
          >
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
      <template>
        <Pagination
          v-if="pagination.total_pages > 1"
          :pagination="pagination"
          :offset="offset"
          @paginate="fetchData()"
        />
      </template>
    </v-col>
    <v-dialog
      v-model="modalPrice"
      max-width="720px"
    >
      <template>
        <v-card>
          <v-card-title>
            <p>ແກ້ໄຂຂໍ້ມູນລາຄາ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackageSize.name"
                      disabled
                      label="Collection Type"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackageSize.price"
                      label="ລາຄາ*"
                      required
                      type="number"
                      class="input-number"
                    />
                  </v-col>
                  <p class="errors">
                    {{ server_errors.price }}
                  </p>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="blue darken-1"
                text
                @click="closeUpdate()"
              >
                ຍົກເລີກ
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="updateItem()"
              >
                ບັນທຶກ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'Package',
  data() {
    return {
      packagessize: [],
      loading: false,
      modalPrice: false,
      PackageSize_id: '',
      editPackageSize: {},
      server_errors: {},
      // pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      headers: [
        { text: 'Size', value: 'name' },
        { text: 'Price', value: 'price' },
        { text: 'Updated', value: 'updated_at' },
        { text: 'actions', value: 'actions', align: 'center' },
      ],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    closeUpdate() {
      this.reset(), (this.editPackageSize = {}), (this.modalPrice = false);
    },

    OpenModalEdit(item) {
      this.editPackageSize = item;
      this.modalPrice = true;
    },
    updateItem() {
      const formData = new FormData();
      formData.append('price', this.editPackageSize.price);
      formData.append('_method', 'PUT');
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post(`price-setting/${this.editPackageSize.id}`, formData)
          .then((res) => {
            if (res.data.code == 200) {
              this.loading = false;
              this.closeUpdate();
              this.editPackageSize = {};
              this.reset();
              this.fetchData();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response ? error.response.data.message : 'Something went wrong',
            });
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              for (const [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('price-setting', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.packagessize = res.data.data.data;
            this.pagination = res.data.data.pagination;
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
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
