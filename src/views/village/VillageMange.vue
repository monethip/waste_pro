<template>
  <v-container>
    <v-row class="mb-n6 text-right">
      <v-col class="text-left">
        ຂໍ້ມູນທີ່ຢູ່
        <v-spacer />
      </v-col>
      <v-col>
        <v-btn
          class="btn-primary"
          @click="OpenModalAddVillage()"
        />
        <v-icon color>
          mdi-plus
        </v-icon>Add Village
      </v-col>
    </v-row>
    <v-card
      class="mx-auto my-6"
      elevation="2"
    >
      <v-card-text>
        <v-row>
          <v-col>
            <v-autocomplete
              v-model="selectedFilteredDistrict"
              required
              :items="districts"
              item-text="name"
              item-value="id"
              label="ເມືອງ"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              outlined
              dense
              @keyup.enter="Search()"
            />
          </v-col>
        </v-row>

        <v-data-table
          :headers="headers"
          :items="villages"
          :search="search"
          :disable-pagination="true"
          hide-default-footer
        >
          <template v-slot:item.variation="{ item }">
            <v-icon
              small
              class="mr-2"
              color="green"
              @click="ViewVillage(item.id)"
            >
              mdi-eye
            </v-icon>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              color="green"
              class="mr-2"
              @click="OpenModalEdit(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              color="red"
              @click="deleteItem(item.id)"
            >
              mdi-trash-can-outline
            </v-icon>
          </template>
        </v-data-table>
        <template>
          <Pagination
            v-if="pagination.total_pages > 1"
            :pagination="pagination"
            :offset="offset"
            @paginate="fetchVillage()"
          />
        </template>
      </v-card-text>
    </v-card>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Village</span>
            <v-spacer />
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col>
                    <v-autocomplete
                      v-model="selectedDistrict"
                      required
                      :items="districts"
                      item-text="name"
                      item-value="id"
                      label="District *"
                      :rules-district="rulesDistrict"
                    />
                    <p class="errors">
                      {{ server_errors.district_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="ban"
                      label="village*"
                      required
                      prepend-inner-icon="mdi-home"
                      :rules="nameRules"
                    />
                    <p class="errors">
                      {{ server_errors.name }}
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
                @click="closeAddModal()"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="AddItem()"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

    <!--Edit Modal-->
    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">ແກ້ໄຂຂໍ້ມູນບ້ານ</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col>
                    <v-autocomplete
                      v-model="selectedDistrict"
                      required
                      :items="districts"
                      item-text="name"
                      item-value="id"
                      label="District *"
                      :rules-district="rulesDistrict"
                    />
                    <p class="errors">
                      {{ server_errors.district_id }}
                    </p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="update_village.name"
                      label="village"
                      required
                      :rules="nameRules"
                    />
                    <p class="errors">
                      {{ server_errors.name }}
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
                @click="closeUpdateVillage()"
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
    </ModalEdit>

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
            @click="DeleteItemConfirm"
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
import { GetOldValueOnInput } from '@/Helpers/GetValue';

export default {
  name: 'Village',
  title() {
    return `Vientiane Waste Co-Dev|Address`;
  },
  data() {
    return {
      loading: false,
      districts: [],
      selectedDistrict: '',
      selectedFilteredDistrict: '',
      selectedVillage: '',
      listVillage: [],
      village_details: [],

      // getlistofdistrict
      getVillage: [],
      villages: [],
      ban: '',
      number: '',
      errormsg: '',

      update_village: {},
      search: '',

      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      oldVal: '',
      server_errors: {},
      rulesDistrict: [(v) => !!v || 'District is required'],
      // Validation
      nameRules: [(v) => !!v || 'Name is required'],

      headers: [
        {
          text: 'ລະຫັດ',
          align: 'start',
          value: 'id',
          sortable: false,
        },
        {
          text: 'ບ້ານ',
          align: 'start',
          value: 'name',
          sortable: false,
        },
        {
          text: 'ລາຍລະອຽດທີ່ຢູ່',
          value: 'variation',
          sortable: false,
          align: 'center',
        },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  watch: {
    selectedFilteredDistrict() {
      this.pagination.current_page = '';
      this.fetchVillage();
      this.server_errors.district_id = '';
    },

    search(value) {
      if (value == '') {
        this.pagination.current_page = '';
        this.fetchVillage();
      }
    },
    ban() {
      this.server_errors.name = '';
    },
  },
  created() {
    this.fetchData();
  },

  methods: {
    OpenModalAddVillage() {
      this.$store.commit('modalAdd_State', true);
    },

    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },

    deleteItem(id) {
      this.village_id = id;
      this.$store.commit('modalDelete_State', true);
    },
    DeleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`address/village/${this.village_id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.$store.commit('modalDelete_State', false);
              this.fetchData();
            }, 300);
          }
        })
        .catch(() => {
          this.fetchData();
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },

    reset() {
      this.$refs.form.reset();
    },

    OpenModalEdit(item) {
      this.update_village = item;
      this.selectedDistrict = this.update_village.district_id;
      this.$store.commit('modalEdit_State', true);
    },

    updateItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .put(`address/village/${this.update_village.id}`, {
            name: this.update_village.name,
            district_id: this.selectedDistrict,
          })
          .then((res) => {
            this.$store.commit('Loading_State', false);
            this.update_village = {};
            this.reset();
            this.closeUpdateVillage();
            this.$store.commit('Toast_State', {
              value: true,
              color: 'success',
              msg: res.data.message,
            });
          })
          .catch((error) => {
            this.$store.commit('Loading_State', false);
            this.fetchVillage();
            if (error.response && error.response.status == 422) {
              this.$store.commit('Toast_State', {
                value: true,
                color: 'error',
                msg: error.response.data.message,
              });
              const obj = error.response.data.errors;
              for (const [key, villages] of Object.entries(obj)) {
                this.server_errors[key] = villages[0];
              }
            }
          });
      }
    },

    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('info/address', { params: { filter: 'ນະຄອນຫລວງວຽງຈັນ' } })
        .then((res) => {
          if (res.data.code == 200) {
            this.getVillage = res.data.data;
            this.getVillage.map((item) => {
              this.districts = item.districts;
              this.selectedFilteredDistrict = this.districts[0].id;
              this.$store.commit('Loading_State', false);
              this.fetchVillage();
            });
          }
        })
        .catch(() => {});
    },

    fetchVillage() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`info/district/${this.selectedFilteredDistrict}/village`, {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.villages = res.data.data.data;
            this.pagination = res.data.data.pagination;
            this.$store.commit('Loading_State', false);
          }
        })
        .catch(() => {});
    },

    // fetchVariation() {
    //   var variation = [];
    //   this.$axios
    //     .get("info/village-variation")
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.$store.commit('Loading_State', false);;
    //           this.variation = res.data.data;
    //           this.edit_villagevariation.variation.map((item) => {
    //             variation.push(item.name);
    //           });
    //         }, 300);
    //       }
    //     })
    //     .catch((error) => {
    //       this.$store.commit('Loading_State', false);;
    //       this.fetchData();
    //       if (error.response && error.response.status == 422) {
    //         var obj = error.response.data.errors;
    //         for (let [key, message] of Object.entries(obj)) {
    //           this.server_errors[key] = message[0];
    //         }
    //       }
    //     });
    // },

    closeUpdateVillage() {
      this.reset(),
      (this.update_village = {}),
      this.fetchVillage(),
      this.$store.commit('modalEdit_State', false);
    },

    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },

    ViewVillage(id) {
      this.$router.push({
        name: 'ViewVillage',
        params: { id },
      });
    },

    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post('address/village', {
            name: this.ban,
            district_id: this.selectedDistrict,
          })

          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeAddModal();
                this.fetchData();
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
            this.$store.commit('Loading_State', false);
            if (error.response && error.response.status == 422) {
              this.$store.commit('Toast_State', {
                value: true,
                color: 'error',
                msg: error.response.data.message,
              });
              const obj = error.response.data.error;
              for (const [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
