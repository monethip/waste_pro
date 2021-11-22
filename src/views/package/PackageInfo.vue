<template>
  <v-container>
    <div>
      <v-card>
        <v-tabs v-model="tab" dark background-color="tab-color lighten-2">
          <v-tab href="#tab-1">Package</v-tab>
          <v-tab href="#tab-2">size</v-tab>
          <v-tab href="#tab-3">Price</v-tab>
        </v-tabs>

        <!-- <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-card-text>
                <v-data-table
                  :headers="headers"
                  :items="packages"
                  :search="search"
                  :disable-pagination="true"
                  hide-default-footer
                >
                  <template v-slot:[`item.actions`]="{ item }">
                    <v-icon
                      small
                      color="green"
                      class="mr-2"
                      @click="OpenModalEdit(item)"
                    >
                      mdi-account-edit
                    </v-icon>
                    <v-icon small color="red" @click="deleteItem(item.id)">
                      mdi-trash-can-outline
                    </v-icon>
                  </template>
                </v-data-table>
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
        </v-tabs-items> -->

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
           <add-package/>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <package-size />
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-3"> <price /> </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>

   
  </v-container>
</template>

<script>
import PackageSize from "../../components/package/PackageSize.vue";
import AddPackage from "../../components/package/AddPackage.vue"
import Price from "../../components/package/Price.vue";
export default {
  components: { PackageSize, Price,AddPackage},
  data() {
    return {
      tab: null,
      loading: false,
      packages: [],

      search: "",

      //Pagination
      offset: 12,
      pagination: {},
      per_page: 15,

      oldVal: "",
      server_errors: {},

       headers: [
        { text: "ລະຫັດ", align: "start", value: "id", sortable: false },
        { text: "name", value: "name" },
        { text: "price", value: "price" },
        { text: "actions", value: "actions" },
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
        .get("package", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.packages = res.data.data.data;
              console.log(this.packages);
              this.pagination = res.data.data.pagination;
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
  },
  watch: {
    
  },
  created() {
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>