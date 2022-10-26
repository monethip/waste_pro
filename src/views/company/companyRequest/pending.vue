<template>
  <v-container>
    <v-data-table :headers="header" :items="data" hide-default-footer>
      <template v-slot:item.media="{ item }">
        <v-avatar
            class="mr-1"
            size="36px"
            v-for="(img, index) in item.media"
            :key="index"
        >
          <img v-if="img.url" :src="img.url"/>
        </v-avatar>
      </template>
      <template v-slot:[`item.created_at`]="{ item }">
        <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm") }}</div>
      </template>
      <template v-slot:item.coordinator="{ item }">
        <div>{{ item.coordinator_name }} {{ item.coordinator_surname }}</div>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip color="primary" label>{{ item.status }}</v-chip>
      </template>

      <template v-slot:item.action="{ item }">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              medium
              class="mr-2"
              >mdi-dots-vertical</v-icon
            >
          </template>
          <v-list>
            <v-list-item link @click="viewPage(item)">
              <v-list-item-title>
                <v-icon small class="mr-2"> mdi-eye </v-icon>
                ລາຍລະອຽດ
              </v-list-item-title>
            </v-list-item>
            <v-list-item link @click="makeSuccess(item)">
              <v-list-item-title>
                <v-icon small class="mr-2"> mdi-pencil </v-icon>
                Make Success
              </v-list-item-title>
            </v-list-item>

            <v-list-item link @click="deleteItem(item.id)">
              <v-list-item-title>
                <v-icon small> mdi-delete </v-icon>
                ລຶບ
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
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
export default {
  data() {
    return {
      data: [],
      itemId: "",
      loading: false,
      server_errors: {},
      //Pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      header: [
        { text: "ຊື່", value: "name" },
        { text: "Phone", value: "phone" },
        { text: "Email", value: "email" },
        { text: "ຜູ້ຮັບຜິດຊອບ", value: "coordinator" },
        { text: "Status", value: "status" },
        { text: "Image", value: "media" },
        { text: "Created", value: "created_at" },
        { text: "", value: "action" },
      ],
    };
  },

  methods: {
    deleteItem(id) {
      this.itemId = id;
      this.$store.commit("modalDelete_State", true);
    },
    closeDelete() {
      this.$store.commit("modalDelete_State", false);
    },
    deleteItemConfirm() {
      this.loading = true;
      this.$axios
        .delete("request-company/" + this.itemId)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.closeDelete();
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.fetchData();
            }, 100);
          }
        })
        .catch(() => {
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },

    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("request-company", {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            statuses: ["pending"],
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
              this.$store.commit("Loading_State", false);
              this.data = res.data.data.data;
              this.pagination = res.data.data.pagination;
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          if (error.respones.status == 422) {
            let obj = error.respones.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    makeSuccess(item) {
      this.loading = true;
      this.$axios
        .post("request-company-status/" + item.id, { status: "success" })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.loading = false;
              this.$store.commit("Toast_State", {
                value: true,
                color: "success",
                msg: res.data.message,
              });
              this.fetchData();
            }, 100);
          }
        })
        .catch(() => {
          this.$store.commit("modalDelete_State", false);
          this.loading = false;
        });
    },
    viewPage(item){
      this.$router.push({
        name: "ViewCompanyRequest",
        params: { id:item.id ,status:item.status},
      });
    },
  },
  watch: {},
  created() {
    this.fetchData();
  },
};
</script>
<style lang="scss">
</style>
