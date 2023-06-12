<template>
  <v-container>
    <v-row class="mb-4">
      <v-col>
        <v-breadcrumbs
          large
          class="pa-0"
        >
          <v-btn
            text
            class="text-primary"
            @click="backPrevios()"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          ລາຍລະອຽດການແຈ້ງເຕືອນ
        </v-breadcrumbs>
      </v-col>
    </v-row>
    <div>
      <v-card>
        <v-card-text class="px-16 py-16">
          <v-row
            align="center"
            class="py-4"
          >
            <v-col align="center">
              <h2>ແຈ້ງເຕືອນ</h2>
              <!-- <p v-if="invoice.plan_month">{{ invoice.plan_month.name }}</p> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h3>
                ແຈ້ງເຕືອນວັນທີ:
                {{ moment(notification.created_at).format("DD-MM-YY") }}
              </h3>
              <h3 v-if="notification.data">
                ປະເພດແຈ້ງເຕືອນ: {{ notification.data.type }}
              </h3>
            </v-col>
          </v-row>
          <v-row class="mb-n6">
            <v-col>ລາຍລະອຽດ</v-col>
          </v-row>
          <v-divider class="my-6 c-divider" />
          <v-row>
            <v-col>
              <h3 v-if="notification.data">
                {{ notification.data.name }}
              </h3>
              <p v-if="notification.data">
                {{ notification.data.body }}
              </p>
            </v-col>
          </v-row>
          <v-row v-if="notification.data && notification.data.url">
            <v-col>
              <a
                color="success"
                :href="notification.data.url"
              >
                View Detail
              </a>
            </v-col>
          </v-row>
          <v-card-actions class="mt-6">
            <v-spacer />

            <v-btn
              color="info"
              text
              :loading="loading"
              :disabled="loading"
              @click="backPrevios()"
            >
              Back
            </v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'NotificationDetail',
  data() {
    return {
      loading: false,
      notification: {},
      invoiceStatusColor: '',
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route.params.id': function () {
      this.fetchData();
    },
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
    fetchData() {
      this.$store.commit('Loading_State', true);
      this.$axios
        .get(`notification/${this.$route.params.id}`)
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit('Loading_State', false);
              this.notification = res.data.data;
            }, 100);
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
    invoiceStatus(data) {
      if (data == 'created') {
        this.invoiceStatusColor = 'primary--text';
        return 'ສ້າງບິນສຳເລັດ';
      } if (data == 'approved') {
        this.invoiceStatusColor = 'info--text';
        return 'ອະນຸມັດແລ້ວ';
      } if (data == 'to_confirm_payment') {
        this.invoiceStatusColor = 'warning--text';
        return 'ລໍຖ້າຢືນຢັນການຊຳລະ';
      } if (data == 'rejected') {
        this.invoiceStatusColor = 'error--text';
        return 'ຊຳລະບໍ່ສຳເລັດ';
      } if (data == 'success') {
        this.invoiceStatusColor = 'success--text';
        return 'ສຳເລັດການຊຳລະ';
      }
    },
    //     invoiceStatusColor(data) {
    //   if (data == "success") {
    //     return "success";
    //   }
    // },
  },
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";

h3 {
  line-height: 28px !important;
  font-size: 16px;
  font-weight: 500;
}

.c-divider {
  height: 10px;
  background: $primary-color;
  opacity: 0.8;
  max-height: 20px;
}

.c-divider.bottom {
  border-top: none;
  border-bottom: $primary-color solid 2px;
}
</style>
