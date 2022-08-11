<template>
  <v-container>
    <v-row>
      <span class="text-h5">ຄົວເຮືອນ</span>
    </v-row>
    <v-row>
      <v-col>
        <v-autocomplete
          required
          :items="packageList"
          v-model="selectedPackage"
          item-text="name"
          item-value="id"
          label="ປະເພດສັນຍາ *"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          required
          :items="districts"
          v-model="selectedDistrict"
          item-text="name"
          item-value="id"
          label="District *"
          return-object
          outlined
          dense
        ></v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          required
          :items="villageList"
          v-model="selectedVillage"
          item-text="name"
          item-value="id"
          label="Village *"
          outlined
          dense
        ></v-autocomplete>
      </v-col>
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

    <!-- Section Total-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>ລວມທັງໝົດ</v-card-title>
          <v-card-text>
            <!-- Section Success -->
            <span class="text-subtitle-1 mt-2">ທີ່ລູກຄ້າຈ່າຍແລ້ວ</span>
            <RowSection :cards="sectionSuccess" />

            <!-- Section Pending -->
            <span class="text-subtitle-1 mt-2">ທີ່ລູກຄ້າຍັງບໍ່ທັນຈ່າຍ</span>
            <RowSection :cards="sectionPending" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section Table Summary-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>ຕາມປະເພດສັນຍາ</v-card-title>
          <v-card-text>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th>ປະເພດສັນຍາ</th>
                    <th
                      class="text-left"
                      v-for="detailStatus in detailStatuses"
                      :key="detailStatus.text"
                    >
                      <v-chip
                        :color="getBgColorFunc(detailStatus.text)"
                        dark
                      >{{ detailStatus.text }}</v-chip>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in summaryDetails" :key="item.package_name">
                    <td>
                      <span class="font-weight-medium">{{ item.package_name }}</span>
                      <span
                        class="font-weight-medium text-caption"
                      >{{ ` (${formatNumber(item.count_billing)} ບິນ)` }}</span>
                    </td>
                    <td v-for="detailStatus in detailStatuses" :key="detailStatus.text">
                      <span
                        class="font-weight-medium"
                      >{{ formatNumber(item[detailStatus.text].total) }}</span>
                      <span
                        class="font-weight-medium text-caption"
                      >{{ ` (${formatNumber(item[detailStatus.text].count_billing)} ບິນ)` }}</span>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Section Table Detail-->
    <v-row>
      <v-col>
        <v-card outlined>
          <v-card-title>
            <v-row>
              <v-col>ລາຍການບິນທັງໝົດ</v-col>
              <v-col>
                <v-text-field
                  v-model="billingListsearch"
                  append-icon="mdi-magnify"
                  placeholder="ຊື່ຫົວບິນ, ລູກຄ້າ..."
                  single-line
                  hide-details
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="billingListHeader"
              :items="billings.data"
              :items-per-page="100"
              :search="billingListsearch"
            >
              <template v-slot:item.status="{ item }">
                <v-chip
                  :color="getBgColorFunc(item.status)"
                  dark
                >{{ getLaoStatusFunc(item.status) }}</v-chip>
              </template>

              <template v-slot:item.total="{ item }">{{ formatNumber(item.total) }}</template>
              <template
                v-slot:item.user.customer.package="{ item }"
              >{{ `${item.user.customer.package.name}` }}</template>

              <template v-slot:item.user="{ item }">
                <span
                  v-if="customerType(item) == 'home'"
                >{{ `${item.user.customer.name} ${item.user.customer.surname}` }}</span>
                <span v-if="customerType(item) == 'company'">{{ item.user.customer.company_name }}</span>
                <span v-if="!customerType(item)">{{ `${item.user.name} (${item.user.phone})` }}</span>
              </template>

              <template v-slot:item.custom_address="{ item }">
                <span
                  v-if="item.display_type == 'NewCollectionEvent'"
                >{{ `${item.billingable.village.name} / ${item.billingable.village.district.name}` }}</span>
                <span
                  v-else-if="customerType(item) == 'home' || customerType(item) == 'company'"
                >{{ `${item.user.customer.village.name} / ${item.user.customer.village.district.name}` }}</span>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import RowSection from "../../components/card/RowSection.vue";
import { getBgColor, getLaoStatus } from "../../Helpers/BillingStatus";
import { getLaoCompanyCostBy } from "../../Helpers/Customer";
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
      billingListsearch: "",
      start_date: "",
      end_date: "",
      start_menu: false,
      end_menu: false,
      villages: [],
      selectedVillage: "",
      districts: [],
      selectedDistrict: null,
      packageList: [],
      selectedPackage: "",
      billings: {
        summary: {
          count_billing: 0,
          total: []
        },
        details: [],
        data: []
      },
      billingListHeader: [
        {
          text: "ຊື່ຫົວບິນ",
          align: "start",
          value: "content"
        },
        { text: "ສະຖານະ", value: "status" },
        { text: "ປະເພດສັນຍາ", value: "user.customer.package" },
        { text: "ຈຳນວນ", value: "total" },
        { text: "ລູກຄ້າ", value: "user" },
        { text: "ທີ່ຢູ່", value: "custom_address" }
      ]
    };
  },
  methods: {
    customerType(item) {
      if (!item.user.customer) return false;

      return item.user.customer.customer_type
        ? item.user.customer.customer_type
        : false;
    },
    async fetchDistrict() {
      try {
        const result = await this.$axios.get("info/district", {
          params: { province_id: 1 }
        });
        this.districts = result.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchPackage() {
      try {
        const result = await this.$axios.get("all-package");
        this.packageList = result.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    fetchData() {
      this.start_menu = false;
      this.end_menu = false;
      const queryOptions = {
        start_date: this.start_date,
        end_date: this.end_date,
        package_id: this.selectedPackage
      };

      if (this.selectedVillage) queryOptions.village_id = this.selectedVillage;
      else if (this.selectedDistrict)
        queryOptions.district_id = this.selectedDistrict.id;

      this.$store.commit("Loading_State", true);
      this.$axios
        .get("v2/report-billing-home", {
          params: queryOptions
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
    getLaoStatusFunc(status) {
      return getLaoStatus(status);
    },
    getLaoCompanyCostByFunc(status) {
      return getLaoCompanyCostBy(status);
    },
    formatNumber(number) {
      return numberFormat(number);
    }
  },
  watch: {
    selectedDistrict() {
      this.fetchData();
    },
    selectedVillage() {
      this.fetchData();
    },
    selectedPackage() {
      this.fetchData();
    }
  },
  computed: {
    villageList() {
      return this.selectedDistrict ? this.selectedDistrict.villages : [];
    },
    summaryDetails() {
      let data = [];
      for (const detail of this.billings.details) {
        let item = {
          package_name: detail.package_name,
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
      console.log(6565, this.summaryDetails);
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
          value: "package_name"
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
    this.fetchDistrict();
    this.fetchPackage();
    this.fetchData();
  }
};
</script>

<style lang="scss">
@import "../../../public/scss/main.scss";
</style>