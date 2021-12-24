<template>
  <v-container>
    <v-row class="mb-n6">
      <v-col>
        <v-btn class="btn-primary">Export </v-btn>
      </v-col>
      <v-col>
        <v-autocomplete
          item-text=""
          item-value=""
          label="ເລືອກວັນເລີ່ມ"
          outlined
          dense
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          item-text=""
          item-value=""
          label="ວັນທີສີ້ນສຸດ"
          outlined
          dense
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          item-text=""
          item-value=""
          label="ເລືອກເມືອງ"
          outlined
          dense
          clearable
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          item-text=""
          item-value=""
          label="ເລືອກບ້ານ"
          outlined
          dense
          clearable
        ></v-autocomplete>
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
        <v-card flat>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="customers"
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
                  <span v-for="(ps, index) in item.permissions" :key="index">
                    <span>{{ ps.name }}, </span>
                  </span>
                </div>
              </template>

              <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="viewPage(item.id)">
                  mdi-eye
                </v-icon>
                <v-icon small class="mr-2" @click="editPage(item.id)">
                  mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item.id)"> mdi-delete </v-icon>
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
      customerId: "",
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,
      search: "",
      oldVal: "",

      headers: [
        { text: "ຊື່", value: "name" },
        { text: "Phone", value: "user.phone", sortable: false },
        { text: "ບ້ານ", value: "surname" },
        { text: "ເມືອງ", value: "user.email", sortable: false },
        { text: "ເຮືອນເລກທີ", value: "house_number", sortable: false },
        { text: "ຮູບພາບ", value: "media" },
        { text: "ຈຳນວນຖົງ", value: "latitude", sortable: false },
        { text: "ວັນທີ", value: "longitude", sortable: false },
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
      this.$store.commit("Loading_State", true);
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
              this.$store.commit("Loading_State", false);
              //   this.customers = res.data.data.data;
              //   this.pagination = res.data.data.pagination;
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
    viewPage(id) {
      this.$router.push({
        name: "ViewCustomer",
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