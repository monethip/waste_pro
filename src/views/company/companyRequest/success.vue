<template>
  <v-container>
    <v-data-table :headers="header" :items="data" hide-default-footer>
      <template v-slot:[`item.created_at`]="{ item }">
        <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm") }}</div>
      </template>
      <template v-slot:item.coordinator="{ item }">
        <div>{{ item.coordinator_name }} {{ item.coordinator_surname }}</div>
      </template>

      <template v-slot:[`item.action`]="{ item }">
        <v-icon small color="red" @click="deleteItem(item.id)">
          mdi-trash-can
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
      per_page: 12,

      header: [
        { text: "ຊື່", value: "name" },
        { text: "Phone", value: "phone" },
        { text: "Email", value: "email" },
        { text: "ຜູ້ຮັບຜິດຊອບ", value: "coordinator" },
        { text: "ປະເພດ", value: "type" },
        { text: "Container", value: "container_amount" },
        { text: "Status", value: "status" },
        { text: "Created", value: "created_at" },
        { text: "Actions", value: "action" },
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
            status: "success",
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.data = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.respones.status == 422) {
            var obj = error.respones.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
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
 