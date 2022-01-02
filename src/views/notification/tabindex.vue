<template>
  <v-container>
    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1">New</v-tab>
          <v-tab href="#tab-2">Read</v-tab>
        </v-tabs>
        <!-- <hr /> -->

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <allnotification />
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <read />
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import allnotification from "@views/notification/tabnotification/allnotification";
import read from "@views/notification/tabnotification/read";
export default {
  title() {
    return `Vientiane Waste Co-Dev|Notification`;
  },
  components: {
    allnotification,
    read,
  },
  data() {
    return {
      tab: null,
      // countAll: null,
      // countApprove: null,
      // countToconfirm: null,
      // countReject: null,
      // countSuccess: null,
    };
  },
  created() {
    if (this.$route.query.tab == "notification-all") {
      this.tab = "tab-1";
    } else if (this.$route.query.tab == "notification-read") {
      this.tab = "tab-2";
    }
  },
  watch: {
    tab: function (value) {
      if (value == "tab-1") {
        this.$router
          .push({ name: "NotificationTab", query: { tab: "notification-all" } })
          .catch(() => {});
      } else if (value == "tab-2") {
        this.$router
          .push({
            name: "NotificationTab",
            query: { tab: "notification-read" },
          })
          .catch(() => {});
      }
    },
  },
};
</script>

<style>
</style>
