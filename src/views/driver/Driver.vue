<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn @click="openAddModal()" class="btn-primary"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col>
        <v-card class="pa-2">
          <v-card-title>
            ຂໍ້ມູນ Driver
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              clearable
              prepend-inner-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
              @keyup.enter="Search()"
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="data"
            :search="search"
            :disable-pagination="true"
            hide-default-footer
          >
            <template v-slot:item.media="{ item }">
              <v-avatar
                size="36px"
                v-for="(img, index) in item.media"
                :key="index"
              >
                <img v-if="img.thumb" :src="img.thumb" />
              </v-avatar>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip
                :color="statusColor(item.status)"
                @click="switchStatus(item.id)"
                >{{ item.status }}</v-chip
              >
            </template>

            <template v-slot:item.actions="{ item }">
              <!--  <v-icon small class="mr-2"> mdi-key </v-icon> -->
              <v-icon small class="mr-2" @click="OpenModalEdit(item)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
            </template>
            <template v-slot:item.role="{ item }">
              <v-icon small class="mr-2" @click="openModalRole(item)">
                mdi-plus
              </v-icon>
              <v-icon small class="mr-2" @click="openModalUpdateRole(item)">
                mdi-key-remove
              </v-icon>
            </template>

            <template v-slot:item.permission="{ item }">
              <v-icon small class="mr-2" @click="openModalPermission(item)">
                mdi-plus
              </v-icon>
              <v-icon
                small
                class="mr-2"
                @click="openModalUpdatePermissoin(item)"
              >
                mdi-key-remove
              </v-icon>
            </template>
          </v-data-table>
          <br />
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
    </v-row>

    <!-- Modal Add-->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Add Driver</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col align="center">
                    <div class="field">
                      <div class="file is-large is-boxed">
                        <label class="file-label">
                          <input
                            @change="onFileChange"
                            class="file-input input-file-image"
                            type="file"
                            name="image"
                            accept="image/*"
                            ref="image"
                          />
                          <span class="file-cta">
                            <span class="file-icon">
                              <v-icon
                                style="
                                  font-size: 60px !important;
                                  color: #719aff;
                                  cursor: pointer;
                                "
                                class="fas fa-cloud-upload"
                                >mdi-cloud-upload</v-icon
                              >
                            </span>
                            <span
                              class="file-label"
                              style="
                                margin-top: 10px;
                                text-transform: uppercase;
                                padding-top: 20px;
                              "
                            >
                              Choose Profile
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col align="center" class="mt-5" v-if="imageUrl">
                    <v-avatar class="avatar rounded" size="94px">
                      <img :src="imageUrl" alt="" />
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="user.name"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Surname *"
                      required
                      v-model="user.surname"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.surname }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="ເບີໂທ *"
                      required
                      v-model="user.phone"
                      :rules="phoneRules"
                      type="number"
                      class="input-number"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.phone }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Email *"
                      required
                      v-model="user.email"
                      :rules="emailRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.email }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ທະບຽນລົດ *"
                      required
                      v-model="user.car_number"
                      :rules="carnumberRules"
                      type="number"
                      class="input-number"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.car_number }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Password *"
                      type="password"
                      v-model="user.password"
                      :rules="passwordRules"
                      required
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.password }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Password Confirm *"
                      type="password"
                      v-model="user.password_confirmation"
                      :rules="passwordConfirmRules"
                      required
                      @keyup.enter="AddItem"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.password_confirmation }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeAddModal()">
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
      <template @close="close" v-slot="">
        <v-card>
          <v-card-title>
            <span class="headline">Update Driver</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col align="center">
                    <div class="field">
                      <div class="file is-large is-boxed">
                        <label class="file-label">
                          <input
                            @change="onFileChange"
                            class="file-input input-file-image"
                            type="file"
                            accept="image/*"
                          />
                          <span class="file-cta">
                            <span class="file-icon">
                              <v-icon
                                style="
                                  font-size: 60px !important;
                                  color: #719aff;
                                  cursor: pointer;
                                "
                                class="fas fa-cloud-upload"
                                >mdi-cloud-upload</v-icon
                              >
                            </span>
                            <span
                              class="file-label"
                              style="
                                margin-top: 10px;
                                text-transform: uppercase;
                                padding-top: 20px;
                              "
                            >
                              Choose Profile
                            </span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col align="center" class="mt-5" v-if="imageUrl">
                    <v-avatar class="avatar rounded" size="94px">
                      <img :src="imageUrl" alt="" />
                    </v-avatar>
                  </v-col>
                  <v-col align="center" class="mt-5" v-else>
                    <v-avatar
                      v-for="(item, index) in edit_driver.media"
                      :key="index"
                      class="avatar rounded mr-6"
                      size="94px"
                    >
                      <img :src="item.thumb" />
                    </v-avatar>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-text-field
                      label="Name *"
                      required
                      v-model="edit_driver.name"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.name }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      label="Surname *"
                      required
                      v-model="edit_driver.surname"
                      :rules="nameRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.surname }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-if="edit_driver.user"
                      label="ເບີໂທ *"
                      required
                      v-model="edit_driver.user.phone"
                      :rules="phoneRules"
                      type="number"
                      class="input-number"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.phone }}
                    </p>
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-if="edit_driver.user"
                      label="Email *"
                      required
                      v-model="edit_driver.user.email"
                      :rules="emailRules"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.email }}
                    </p>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="ທະບຽນລົດ *"
                      required
                      v-model="edit_driver.car_number"
                      :rules="carnumberRules"
                      type="number"
                      class="input-number"
                    ></v-text-field>
                    <p class="errors">
                      {{ server_errors.car_number }}
                    </p>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdateModal()">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="updateItem()"
              >
                Update
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
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
          <v-btn
            color="blue darken-1"
            text
            :loading="loading"
            :disabled="loading"
            @click="deleteItemConfirm"
            >OK</v-btn
          >
          <v-spacer></v-spacer>
        </v-card-actions>
      </template>
    </ModalDelete>
  </v-container>
</template>

<script>
import { GetOldValueOnInput } from "@/Helpers/GetValue";
export default {
  name: "User",
  data() {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Surname Name", value: "surname" },
        { text: "Car Number", value: "car_number" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "Email", value: "user.email", sortable: false },
        { text: "Status", value: "status", sortable: false },
        { text: "Image", value: "media", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      loading: false,
      status: false,
      data: [],
      user: {},
      edit_driver: {},
      userID: "",
      server_errors: {
        email: "",
        roleId: "",
      },
      errormsg: "",
      image: "",
      imageUrl: "",

      //Pagination
      offset: 12,
      pagination: {},
      per_page: 12,
      search: "",
      oldVal: "",

      //Validation
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      passwordConfirmRules: [
        (v) => !!v || "Password Confirm is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length >= 2) || "Name must be less than 2 characters",
      ],
      phoneRules: [
        (v) => !!v || "Phone is required",
        (v) =>
          (v && v.length >= 4 && v.length <= 11) ||
          "Phone number must be  4 - 11 numbers",
      ],
      carnumberRules: [
        (v) => !!v || "Car number is required",
        (v) => (v && v.length == 4) || "Car number must be 4 number",
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
      ],

      toast: {
        value: true,
        color: "success",
        msg: "Success",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },
    };
  },
  methods: {
    onFileChange(e) {
      let input = e.target;
      let file = e.target.files[0];
      this.image = input.files[0];
      this.imageUrl = URL.createObjectURL(file);
    },
    openAddModal() {
      this.$store.commit("modalAdd_State", true);
    },
    AddItem() {
      let formData = new FormData();
      formData.append("name", this.user.name);
      formData.append("surname", this.user.surname);
      formData.append("phone", this.user.phone);
      formData.append("email", this.user.email);
      formData.append("car_number", this.user.car_number);
      formData.append("image", this.image);
      formData.append("password", this.user.password);
      formData.append("password_confirmation", this.user.password_confirmation);
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("driver", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeAddModal();
                this.user = {};
                this.imageUrl = "";
                this.imageUrl = "";
                this.fetchData();
                this.reset();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, customer] of Object.entries(obj)) {
                this.server_errors[key] = customer[0];
              }
            }
          });
      }
    },
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("driver", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Loading_State", false);
              this.data = res.data.data.data;
              this.pagination = res.data.data.pagination;
              this.data.map((item) => {
                if (item.status == "active") {
                  console.log(item);
                  this.status = true;
                } else {
                  this.status = false;
                }
              });
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

    closeAddModal() {
      this.$store.commit("modalAdd_State", false);
    },
    OpenModalEdit(item) {
      this.edit_driver = item;
      this.$store.commit("modalEdit_State", true);
    },
    updateItem() {
      let formData = new FormData();
      formData.append("name", this.edit_driver.name);
      formData.append("surname", this.edit_driver.surname);
      formData.append("phone", this.edit_driver.user.phone);
      formData.append("email", this.edit_driver.user.email);
      formData.append("car_number", this.edit_driver.car_number);
      formData.append("image", this.image);
      formData.append("_method", "PUT");
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$axios
          .post("driver/" + this.edit_driver.id, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            if (res.data.code == 200) {
              setTimeout(() => {
                this.loading = false;
                this.closeUpdateModal();
                this.imageUrl = "";
                this.imageUrl = "";
                this.fetchData();
                this.reset();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.fetchData();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, message] of Object.entries(obj)) {
                this.server_errors[key] = message[0];
              }
            }
          });
      }
    },
    closeUpdateModal() {
      this.$store.commit("modalEdit_State", false);
    },

    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },

    deleteItem(id) {
      this.userID = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("driver/" + this.userID)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", this.toast);
              this.$store.commit("modalDelete_State", false);
              this.fetchData();
            }, 300);
          }
        })
        .catch(() => {
          this.fetchData();
          this.$store.commit("Toast_State", this.toast_error);
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    switchStatus(id) {
      this.loading = true;
      this.$axios
        .post("driver/" + id + "/switch-status")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.fetchData();
              this.$store.commit("Toast_State", this.toast);
            }, 300);
          }
        })
        .catch(() => {
          this.loading = false;
          this.$store.commit("Toast_State", this.toast_error);
          this.fetchData();
        });
    },
    statusColor(value) {
      if (value == "active") {
        return "success";
      } else if (value == "inactive") return "error";
    },

    reset() {
      this.$refs.form.reset();
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
  computed: {
    // statuss() {
    //   this.data.filter((item) => {
    //     if (item == "active") {
    //       console.log(item);
    //       // return true;
    //     } else if (item.status == "inactive") {
    //       // return false;
    //     }
    //   });
    // },
    // selectedAllVillage() {
    //   return this.selectedVillage.length === this.villages.length;
    // },
    // selectedSomeVillage() {
    //   return this.selectedVillage.length > 0 && !this.selectedAllVillage;
    // },
    // icon() {
    //   if (this.selectedAllVillage) return "mdi-close-box";
    //   if (this.selectedSomeVillage) return "mdi-minus-box";
    //   return "mdi-checkbox-blank-outline";
    // },
  },
  watch: {
    "user.name": function () {
      this.server_errors.name = "";
    },
    "user.surname": function () {
      this.server_errors.surname = "";
    },
    "user.phone": function () {
      this.server_errors.phone = "";
    },
    "user.email": function () {
      this.server_errors.email = "";
    },
    "user.car_number": function () {
      this.server_errors.car_number = "";
    },
    "user.password": function () {
      this.server_errors.password = "";
    },
    "edit_driver.name": function () {
      this.server_errors.name = "";
    },
    "edit_driver.surname": function () {
      this.server_errors.surname = "";
    },
    "edit_driver.user.phone": function () {
      this.server_errors.phone = "";
    },
    "edit_driver.user.email": function () {
      this.server_errors.email = "";
    },
    "edit_driver.car_number": function () {
      this.server_errors.car_number = "";
    },
    // status: function () {
    //   console.log("hi");
    // },

    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
  },
  created() {
    this.statusColor();
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>
