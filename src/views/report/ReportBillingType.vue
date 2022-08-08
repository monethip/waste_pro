<template>
  <v-container>
    <v-card class="pa-4 pb-10">
      <v-card-title>ລວມທັງໝົດ</v-card-title>
      <v-card-text>
        <v-row class="mt-4">
          <v-col class="col-2">
            <span>ລວມ</span>
          </v-col>
          <v-col class="col-10">
            <v-row>
              <v-card
                v-for="status in statuses"
                :key="status.name"
                color="#1D7874"
                class="mr-2"
                dark
              >
                <v-card-title class="text-h5">{{ status.value }}</v-card-title>
                <v-card-subtitle>{{ status.name }}</v-card-subtitle>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-for="statusesArray in statusesArray" :key="statusesArray.name" class="mt-5">
          <v-row class="mt-4">
            <v-col class="col-2">
              <span>{{ statusesArray.name }}</span>
            </v-col>
            <v-col class="col-10">
              <v-row>
                <v-card
                  v-for="statusItem in statusesArray.value"
                  :key="statusItem.status"
                  :color="statusItem.sugest_color"
                  class="mr-2"
                  dark
                >
                  <v-card-title class="text-h5">{{ statusItem.total }}</v-card-title>
                  <v-card-subtitle>{{ statusItem.status_la }}</v-card-subtitle>
                </v-card>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
      </v-card-text>
      <v-card-action></v-card-action>
    </v-card>

    <v-card class="mt-4 pa-4 pb-10" v-for="detail in billings.details" :key="detail.type">
      <v-card-title>{{ detail.type_la}}</v-card-title>
      <v-card-text>
        <v-row class="mt-4">
          <v-col class="col-2">
            <span>ສະຖານະທັງໝົດ</span>
          </v-col>
          <v-col class="col-10">
            <v-row>
              <v-card
                v-for="statusItem in detail.ສະຖານະທັງໝົດ"
                :key="statusItem.status"
                class="mr-2"
                :color="statusItem.sugest_color"
                dark
              >
                <v-card-title class="text-h5">{{ statusItem.total }}</v-card-title>
                <v-card-subtitle>{{ statusItem.status_la }}</v-card-subtitle>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="mt-4">
          <v-col class="col-2">
            <span>ສະຖານະທີ່ຍັງກວດສອບຢູ່ທັງໝົດ</span>
          </v-col>
          <v-col class="col-10">
            <v-row>
              <v-card
                v-for="statusItem in detail.ສະຖານະທີ່ຍັງກວດສອບຢູ່ທັງໝົດ"
                :key="statusItem.status"
                class="mr-2"
                :color="statusItem.sugest_color"
                dark
              >
                <v-card-title class="text-h5">{{ statusItem.total }}</v-card-title>
                <v-card-subtitle>{{ statusItem.status_la }}</v-card-subtitle>
              </v-card>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-action></v-card-action>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "ReportBillingType",
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  data() {
    return {
      loading: false,
      billings: {
        summary: {}
      }
    };
  },
  methods: {
    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("v2/report-billing-by-type", {
          params: {}
        })
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.billings = res.data.data;
            }, 300);
          }
        })
        .catch(error => {
          this.$store.commit("Loading_State", false);
          if (error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    }
  },
  watch: {},
  computed: {
    statuses() {
      let data = [];
      for (let [key, value] of Object.entries(this.billings.summary)) {
        if (typeof value == "number")
          data.push({
            name: key,
            value: value
          });
      }
      console.log(data);
      return data;
    },
    statusesArray() {
      let data = [];
      for (let [key, value] of Object.entries(this.billings.summary)) {
        if (typeof value != "number")
          data.push({
            name: key,
            value: value
          });
      }
      console.log(data);
      return data;
    },
    statusesSuccess() {
      let data = [];
      for (let [key, value] of Object.entries(this.billings.summary)) {
        if (typeof value == "number")
          data.push({
            name: key,
            value: value
          });
      }
      console.log(data);
      return data;
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>