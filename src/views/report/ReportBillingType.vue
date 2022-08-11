<template>
  <v-container>
    ຄົ້ນຫາ
    <v-row>
      <v-col>
        <v-menu
          v-model="start_menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="start_date"
              label="ເລີ່ມວັນທີ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker v-model="start_date" @input="fetchData()"></v-date-picker>
        </v-menu>
      </v-col>

      <v-col>
        <v-menu
          v-model="end_menu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="end_date"
              label="ຫາວັນທີ"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker v-model="end_date" @input="fetchData()"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>

    <!-- Section Success -->
    <span class="text-subtitle-1 mt-2">ທີ່ລູກຄ້າຈ່າຍແລ້ວ</span>
    <RowSection :cards="sectionSuccess" />

    <!-- Section Pending -->
    <span class="text-subtitle-1 mt-2">ທີ່ລູກຄ້າຍັງບໍ່ທັນຈ່າຍ</span>
    <RowSection :cards="sectionPending" />

    <!-- Section Table -->
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th>ປະເພດບິນ</th>
                <th
                  class="text-left"
                  v-for="detailStatus in detailStatuses"
                  :key="detailStatus.text"
                >
                  <v-chip :color="getBgColorFunc(detailStatus.text)" dark>{{ detailStatus.text }}</v-chip>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in summaryDetails" :key="item.billing_type">
                <td>
                  <span class="font-weight-medium">{{ item.billing_type }}</span>
                  <span
                    class="font-weight-medium text-caption"
                  >{{ ` (${formatNumber(item.count_billing)} ບິນ)` }}</span>
                </td>
                <td v-for="detailStatus in detailStatuses" :key="detailStatus.text">
                  <span class="font-weight-medium">{{ formatNumber(item[detailStatus.text].total) }}</span>
                  <span
                    class="font-weight-medium text-caption"
                  >{{ ` (${formatNumber(item[detailStatus.text].count_billing)} ບິນ)` }}</span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RowSection from "../../components/card/RowSection.vue";
import { getBgColor } from "../../Helpers/BillingStatus";
import numberFormat from "../../Helpers/formatNumber";

export default {
  name: "ReportBillingType",
  title() {
    return `Vientiane Waste Co-Dev|Report Invoice`;
  },
  components: {
    RowSection
  },
  data() {
    return {
      loading: false,
      start_date: "",
      end_date: "",
      start_menu: false,
      end_menu: false,
      billings: {
        summary: {
          count_billing: 0,
          total: []
        },
        details: []
      }
    };
  },
  methods: {
    fetchData() {
      this.start_menu = false;
      this.end_menu = false;
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("v2/report-billing-by-type", {
          params: {
            start_date: this.start_date,
            end_date: this.end_date
          }
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
    },
    getCard(statusItem) {
      const data = this.billings.summary.total.find(
        status => status.status == statusItem
      );
      if (data) {
        data.bg_color = getBgColor(data.status);
      }
      return data ? data : this.defaultStatus;
    },
    getBgColorFunc(status) {
      return getBgColor(status);
    },
    formatNumber(number) {
      return numberFormat(number);
    }
  },
  watch: {},
  computed: {
    summaryDetails() {
      let data = [];
      for (const detail of this.billings.details) {
        let item = {
          billing_type: detail.billingable_type_la,
          count_billing: detail.count_billing
        };
        for (const total of detail.total) {
          item[total.status_la] = {
            count_billing: total.count_billing,
            total: total.total
          };
        }

        data.push(item);
      }
      return data;
    },
    detailStatuses() {
      let data = [];
      if (this.summaryDetails.length > 0) {
        for (const [key, value] of Object.entries(this.summaryDetails[0])) {
          if (value.count_billing !== undefined) {
            data.push({
              text: key,
              value: key + ".total"
            });
          }
        }
      }
      return data;
    },
    headers() {
      let header = [
        {
          text: "ປະເພດບິນ",
          align: "start",
          value: "billing_type"
        }
      ];
      if (this.detailStatuses.length > 0) {
        header = [header, ...this.detailStatuses];
      }
      return header;
    },
    defaultStatus() {
      return {
        status: "",
        status_la: "",
        total: 0,
        count_billing: 0,
        bg_color: ""
      };
    },
    sectionSuccess() {
      return [
        this.successStatus,
        this.toConfirmPaymentStatus,
        this.rejectedStatus
      ];
    },
    sectionPending() {
      return [this.approvedStatus, this.createdStatus];
    },
    successStatus() {
      return this.getCard("success");
    },
    createdStatus() {
      return this.getCard("created");
    },
    cancelStatus() {
      return this.getCard("cancel");
    },
    rejectedStatus() {
      return this.getCard("rejected");
    },
    toConfirmPaymentStatus() {
      return this.getCard("to_confirm_payment");
    },
    approvedStatus() {
      return this.getCard("approved");
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