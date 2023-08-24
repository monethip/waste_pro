<template>
  <v-container>
    <v-btn
      text
      class="text-primary mb-4"
      @click="backPrevios()"
    >
      <v-icon>mdi-chevron-left</v-icon>Back
    </v-btn>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          class="btn-primary"
          @click="openAddModal()"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <h3>{{ team.name }}</h3>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title>
            ສະມາຊິກໃນທີມ ({{ data.length }})
            <v-divider
              class="mx-4"
              vertical
            />ຜູ້ຂັບລົດ
            <span
              v-if="team.driver"
              class="primary-color"
            >{{ team.driver.name }} ({{ team.driver.vehicle.car_number }})</span>
            <v-spacer />
            <v-text-field
              v-model="search"
              clearable
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              @keyup.enter="Search()"
            />
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="data"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.created_at="{ item }">
              <div>{{ moment(item.created_at).format("DD-MM-YY") }}</div>
            </template>
            <template v-slot:item.actions="{ item }">
              <!--  <v-icon small class="mr-2"> mdi-key </v-icon> -->
              <v-icon
                small
                @click="deleteItem(item.id)"
              >
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
          <br>
          <template>
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
              @paginate="fetchData()"
            />
          </template>
        </v-card>
      </v-col>
    </v-row>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <p>ເພີ່ມແອກລົດເຂົ້າທີມ</p>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form
                ref="form"
                lazy-validation
              >
                <v-row>
                  <v-col cols="12">
                    <v-autocomplete
                      v-model="selectedMember"
                      :items="member"
                      item-text="name"
                      item-value="id"
                      label="ແອກລົດ"
                      dense
                      :rules="driverRules"
                      multiple
                    />
                    <p class="errors">
                      {{ server_errors.employees }}
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
                ຍົກເລີກ
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="AddItem()"
              >
                ບັນທຶກ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalAdd>

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
import { GetOldValueOnInput } from '@/Helpers/GetValue';

export default {
  name: 'User',
  data() {
    return {
      headers: [
        { text: 'ຊື່', value: 'employee.name' },
        { text: 'Surname', value: 'employee.surname' },
        { text: 'Phone', value: 'employee.phone' },
        { text: 'Created', value: 'created_at', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
      loading: false,
      status: false,
      data: [],
      edit_user: {},
      userID: '',
      server_errors: {},
      teamName: '',
      member: [],
      team: {},
      selectedMember: [],

      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,
      search: '',
      oldVal: '',
      // Validation
      teamRules: [(v) => !!v || 'Team name is required'],
      driverRules: [(v) => !!v || 'Driver is required'],
    };
  },
  watch: {
    selectedStatus() {
      this.fetchData();
    },
    teamName() {
      this.server_errors.name = '';
    },
    selectedDriver() {
      this.server_errors.driver_id = '';
    },
    'edit_user.name': function () {
      this.server_errors.name = '';
    },
    'edit_user.driver.id': function () {
      this.server_errors.driver_id = '';
    },
    search(value) {
      if (value == '') {
        this.fetchData();
      }
    },
  },
  created() {
    this.fetchMember();
    this.fetchData();
    this.fetchTeam();
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchMember() {
      this.$axios
        .get('employee')
        .then((res) => {
          if (res.data.code == 200) {
            this.member = res.data.data;
          }
        })
        .catch({});
    },
    fetchTeam() {
      this.$axios
        .get(`team/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            this.team = res.data.data;
          }
        })
        .catch({});
    },

    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(
          `team/${this.$route.params.id}/team_member`,
          // , {
          //   params: {
          //     page: this.pagination.current_page,
          //     per_page: this.per_page,
          //   },
          // }
        )
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.$store.commit('Loading_State', false);
            this.data = res.data.data.members;
            // this.pagination = res.data.data.pagination;
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

    openAddModal() {
      this.$store.commit('modalAdd_State', true);
    },
    AddItem() {
      if (this.$refs.form.validate() == true) {
        this.$store.commit('Loading_State', true);
        this.$axios
          .post(`team/${this.$route.params.id}/team_member`, {
            employees: this.selectedMember,
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.$store.commit('Loading_State', false);
                this.closeAddModal();
                this.selectedMember = '';
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
            this.$store.commit('Toast_State', {
              value: true,
              color: 'error',
              msg: error.response
                ? error.response.data.message
                : 'Something went wrong',
            });
            this.fetchData();
            if (error.response && error.response.status == 422) {
              const obj = error.response.data.errors;
              const errMsg = {};
              for (const [key, customer] of Object.entries(obj)) {
                errMsg[key] = customer[0];
              }
              this.server_errors = errMsg;
            }
          });
      }
    },
    closeAddModal() {
      this.$store.commit('modalAdd_State', false);
    },
    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },

    deleteItem(id) {
      this.userID = id;
      this.$store.commit('modalDelete_State', true);
    },

    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`team/${this.$route.params.id}/team_member/${this.userID}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.$store.commit('modalDelete_State', false);
              this.fetchData();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
            }, 300);
          }
        })
        .catch((error) => {
          this.fetchData();
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response
              ? error.response.data.message
              : 'Something went wrong',
          });
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },
    reset() {
      this.$refs.form.reset();
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
