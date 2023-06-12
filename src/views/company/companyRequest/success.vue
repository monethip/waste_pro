<template>
  <v-container>
    <v-data-table
      :headers="header"
      :items="data"
      hide-default-footer
    >
      <template v-slot:[`item.created_at`]="{ item }">
        <div>{{ moment(item.created_at).format("DD-MM-YY hh:mm") }}</div>
      </template>
      <template v-slot:item.coordinator="{ item }">
        <div>{{ item.coordinator_name }} {{ item.coordinator_surname }}</div>
      </template>
      <template v-slot:item.status="{ item }">
        <v-chip
          color="success"
          label
        >
          {{ item.status }}
        </v-chip>
      </template>

      <template v-slot:[`item.action`]="{ item }">
        <v-icon
          small
          class="mr-4"
          color="success"
          @click="viewPage(item)"
        >
          mdi-eye
        </v-icon>
        <v-icon
          small
          color="red"
          @click="deleteItem(item.id)"
        >
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
      />
    </template>
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
export default {
  data() {
    return {
      data: [],
      itemId: '',
      loading: false,
      server_errors: {},
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 100,

      header: [
        { text: 'ຊື່', value: 'name' },
        { text: 'Phone', value: 'phone' },
        { text: 'Email', value: 'email' },
        { text: 'ຜູ້ຮັບຜິດຊອບ', value: 'coordinator' },
        { text: 'Status', value: 'status' },
        { text: 'Image', value: 'image' },
        { text: 'Created', value: 'created_at' },
        { text: '', value: 'action' },
      ],
    };
  },
  watch: {},
  created() {
    this.fetchData();
  },

  methods: {
    deleteItem(id) {
      this.itemId = id;
      this.$store.commit('modalDelete_State', true);
    },
    closeDelete() {
      this.$store.commit('modalDelete_State', false);
    },
    deleteItemConfirm() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .delete(`request-company/${this.itemId}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.closeDelete();
              this.$store.commit('Toast_State', {
                value: true,
                color: 'success',
                msg: res.data.message,
              });
              this.fetchData();
            }, 100);
          }
        })
        .catch(() => {
          this.$store.commit('modalDelete_State', false);
          this.$store.commit('Loading_State', false);
        });
    },

    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get('request-company', {
          params: {
            page: this.pagination.current_page,
            per_page: this.per_page,
            statuses: ['success'],
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            this.$store.commit('Loading_State', false);
            this.data = res.data.data.data;
            this.pagination = res.data.data.pagination;
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          if (error.respones.status == 422) {
            const obj = error.respones.data.errors;
            for (const [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    viewPage(item) {
      this.$openRoute({
        name: 'ViewCompanyRequest',
        params: { id: item.id, status: item.status },
      });
    },
  },
};
</script>
<style lang="scss">
</style>
