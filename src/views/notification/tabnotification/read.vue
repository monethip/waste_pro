<template>
  <div>
    <v-row>
      <v-col>
        <p>
          Read Notification
          <span class="primary-color">({{ pagination.total }})</span>
        </p>
      </v-col>
    </v-row>
    <div>
      <v-card elevation="0">
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="notifications"
            :disable-pagination="true"
            hide-default-footer
            fixed-header
            height="100vh"
          >
            <template v-slot:item.read_at="{ item }">
              <v-chip color="success">
                {{
                  moment(item.read_at).format("mm:hh / DD-MM-YY")
                }}
              </v-chip>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon
                small
                class="mr-2"
                @click="viewPage(item.id)"
              >
                mdi-eye
              </v-icon>
            </template>
          </v-data-table><br>
          <template>
            <Pagination
              v-if="pagination.total_pages > 1"
              :pagination="pagination"
              :offset="offset"
              @paginate="fetchData()"
            />
          </template>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  data() {
    return {
      loading: false,
      // Pagination
      offset: 12,
      pagination: {},
      per_page: 20,
      notifications: [],
      notiType: this.$route.query.types,
      server_errors: {},
      selectedStatus: 'read',

      headers: [
        { text: 'Title', value: 'data.name' },
        {
          text: 'Read',
          value: 'read_at',
          sortable: false,
          align: 'center',
        },
        {
          text: 'Notification Type',
          value: 'notifiable_type',
          sortable: false,
          align: 'center',
        },
        { text: 'Type', value: 'type', sortable: false },
        { text: '', value: 'actions', sortable: false },
      ],
    };
  },
  watch: {
    notiType() {
      this.fetchData();
    },
  },

  created() {
    this.fetchData();
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },

    fetchData() {
      this.$store.commit('Loading_State', true);
      const option = {
        page: this.pagination.current_page,
        per_page: this.per_page,
        status: this.selectedStatus,
      };

      if (this.notiType) option.types = this.notiType;
      this.$axios
        .get('notification/', {
          params: option,
        })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.notifications = res.data.data.data;
              this.pagination = res.data.data.pagination;
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit('Loading_State', false);
          this.$store.commit('Toast_State', {
            value: true,
            color: 'error',
            msg: error.response ? error.response.data.message : 'Something went wrong',
          });
        });
    },
    viewPage(id) {
      this.$router.push({
        name: 'NotificationView',
        params: { id },
      });
    },

    readStatus(data) {
      if (data == 'created') {
        this.invoiceStatusColor = 'primary--text';
        return 'ສ້າງບິນສຳເລັດ';
      } if (data == 'approved') {
        this.invoiceStatusColor = 'info--text';
        return 'ອະນຸມັດແລ້ວ';
      }
    },
  },
};
</script>

<style lang="scss">
@import "../../../../public/scss/main.scss";
</style>
