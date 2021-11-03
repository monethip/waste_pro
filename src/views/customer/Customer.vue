<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary" @click="createPage()"
          ><v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-text-field
          outlined
          dense
          clearable
          prepend-inner-icon="mdi-magnify"
          label="ຊື່ລູກຄ້າ"
          type="text"
          v-model="search"
          @keyup.enter="Search()"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-tabs
          v-model="tab"
          dark
          background-color="tab-color lighten-2"
          slider-color="indigo lighten-5"
        >
          <v-tab href="#tab-1"> <v-icon>mdi-account</v-icon>ລູກຄ້າ</v-tab>
          <!-- <v-tab href="#tab-2">ລູກຄ້າ2</v-tab>
          <v-tab href="#tab-3">ລູກຄ້າ3</v-tab> -->
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="customers"
                  :search="search"
                  :disable-pagination="true"
                  hide-default-footer
                  :loading="DataLoading"
                  :disabled="DataLoading"
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
                  <!--Role -->
                  <template v-slot:item.roles="{ item }">
                    <div>
                      <span v-for="(role, index) in item.roles" :key="index">
                        {{ role.name }},
                      </span>
                    </div>
                  </template>
                  <!--Permission -->
                  <template v-slot:item.permissions="{ item }">
                    <div>
                      <span
                        v-for="(ps, index) in item.permissions"
                        :key="index"
                      >
                        <span>{{ ps.name }}, </span>
                      </span>
                    </div>
                  </template>

                  <template v-slot:item.actions="{ item }">
                    <!--  <v-icon small class="mr-2"> mdi-key </v-icon> -->
                    <v-icon small class="mr-2" @click="editPage(item.id)">
                      mdi-pencil
                    </v-icon>
                    <v-icon small @click="deleteItem(item.id)">
                      mdi-delete
                    </v-icon>
                  </template> </v-data-table
                ><br />
                <template>
                  <Pagination
                    v-if="pagination.total_pages > 1"
                    :pagination="pagination"
                    :offset="offset"
                    @paginate="fetchData()"
                  ></Pagination>
                </template>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>

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
  name: "Customer",
  data() {
    return {
      tab: null,
      customers: [],
      loading: false,
      DataLoading: false,
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "ນາມສະກຸນ", value: "surname" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "Email", value: "user.email", sortable: false },
        { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        { text: "Image", value: "media" },
        { text: "Lat", value: "latitude", sortable: false },
        { text: "Lng", value: "longitude", sortable: false },
        { text: "", value: "actions", sortable: false },
      ],
      toast: {
        value: true,
        color: "success",
        msg: "",
      },
      toast_error: {
        value: true,
        color: "error",
        msg: "Something when wrong!",
      },
    };
  },
  methods: {
    fetchData() {
      this.DataLoading = true;
      this.$axios
        .get("customer", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            filter: this.search,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.DataLoading = false;
              this.customers = res.data.data.data;
              this.pagination = res.data.data.pagination;
              // console.log(this.customers);
            }, 300);
          }
        })
        .catch((error) => {
          this.DataLoading = false;
          this.fetchData();
          if (error.response.status == 422) {
            var obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItem(id) {
      this.customerId = id;
      this.$store.commit("modalDelete_State", true);
    },

    deleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("customer/" + this.customerId)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.toast.msg = res.data.message;
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
    createPage() {
      this.$router.push({
        name: "CreateCustomer",
      });
    },
    editPage(id) {
      this.$router.push({
        name: "EditCustomer",
        params: { id },
      });
    },
    Search() {
      GetOldValueOnInput(this);
    },
  },
  watch: {
    search: function (value) {
      if (value == "") {
        this.fetchData();
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>