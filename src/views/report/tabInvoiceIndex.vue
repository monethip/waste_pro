<template>
  <v-container>
    <v-breadcrumbs large class="pt-0">ລາຍງານຂໍ້ມູນເຊວ</v-breadcrumbs>
    <v-col>
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
                v-model="date_from"
                label="ເລີ່ມວັນທີສ້າງບິນ"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
                dense
              ></v-text-field>
            </template>
            <v-date-picker v-model="date_from"></v-date-picker>
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
                v-model="date_to"
                label="ຫາວັນທີສ້າງບິນ"
                readonly
                outlined
                v-bind="attrs"
                v-on="on"
                dense
              ></v-text-field>
            </template>
            <v-date-picker v-model="date_to"></v-date-picker>
          </v-menu>
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="selectedSale"
            :items="employees"
            item-text="name"
            item-value="id"
            label="ເລືອກເຊວທີ່ກ່ຽວຂ້ອງ"
            outlined
            dense
          ></v-autocomplete>
        </v-col>

        <v-col>
          <v-btn color="green" dark>Export</v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-simple-table>
            <thead>
              <tr style="background-color:blue; color:white">
                <td>ລ/ດ</td>
                <td>ຊື່</td>
                <td>ບ້ານ</td>
                <td>ສັນຍາ</td>
                <td>ລູກຄ້າ</td>
                <td>ເງິນສົດ</td>
                <td>ເງິນໂອນ</td>
                <td>bcel bill payment</td>
                <td>ລວມຍອດ</td>
                <td>ລວມທັງໝົດ</td>
              </tr>
            </thead>

            <tbody :style="getBodyColor(index)" v-for="(sale,index) in summary" :key="sale.id">
              <tr>
                <td :rowspan="sale.summary.length">{{ index + 1 }}</td>
                <td
                  :rowspan="sale.summary.length"
                >{{ sale.emp_name ? sale.emp_name + ' ' + sale.emp_surname : sale.name}}</td>
                <td>{{ sale.summary[0].village_name}}</td>
                <td>{{ Intl.NumberFormat().format(sale.summary[0].count_bill) }}</td>
                <td>{{ Intl.NumberFormat().format(sale.summary[0].count_customer) }}</td>
                <td>{{ totalFromMethod(sale.summary[0].payment_methods,'cash') }}</td>
                <td>{{ totalFromMethod(sale.summary[0].payment_methods,'bcel') }}</td>
                <td>{{ totalFromMethod(sale.summary[0].payment_methods,'bcel_online') }}</td>
                <td>
                  {{
                  Intl.NumberFormat().format(sale.summary[0].total) }}
                </td>
                <td :rowspan="sale.summary.length">{{ Intl.NumberFormat().format(sale.total) }}</td>
              </tr>
              <tr v-for="(otherVillage, otherIndex) in sale.summary.slice(1)" :key="otherIndex">
                <td>{{ otherVillage.village_name }}</td>
                <td>{{ Intl.NumberFormat().format(otherVillage.count_bill) }}</td>
                <td>{{ Intl.NumberFormat().format(otherVillage.count_customer) }}</td>
                <td>{{ totalFromMethod(otherVillage.payment_methods,'cash') }}</td>
                <td>{{ totalFromMethod(otherVillage.payment_methods,'bcel') }}</td>
                <td>{{ totalFromMethod(otherVillage.payment_methods,'bcel_online') }}</td>
                <td>{{ Intl.NumberFormat().format(otherVillage.total) }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import queryOptions from "../../Helpers/queryOption";

export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  data() {
    return {
      summary: [],
      pagination: {},
      start_date: null,
      salesData: [],
      selectedSale: "",
      search: "",
      date_from: "",
      date_to: "",
      start_menu: false,
      end_menu: false
    };
  },
  methods: {
    fetchSale() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("user-setting/user", {
          params: queryOptions([
            { roles: ["sale", "sale_admin"] },
            { order_by: "newest" }
          ])
        })
        .then(res => {
          if (res.data.code === 200) {
            this.loading = false;
            this.$store.commit("Loading_State", false);
            this.salesData = res.data.data;
          }
        })
        .catch(error => {
          this.$store.commit("Loading_State", false);
          if (error.response.status === 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    getBodyColor(index) {
      return index % 2 == 0 ? "background-color:#f0eae0" : "";
    },
    totalFromMethod(array, method) {
      let total = 0;
      for (const item of array) {
        if (item.payment_method == method) total = item.total;
      }
      return Intl.NumberFormat().format(total);
    },
    fetchData() {
      this.start_menu = false;
      this.end_menu = false;
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("v2/report-billing-for-sale", {
          params: queryOptions([
            {
              filter: this.search
            },
            {
              id: this.selectedSale
            },
            {
              created_date_from: this.date_from
            },
            {
              created_date_to: this.date_to
            }
          ])
        })
        .then(res => {
          if (res.data.code == 200) {
            this.$store.commit("Loading_State", false);
            this.summary = res.data.data;
            console.log(this.summary);
            // this.pagination = res.data.data.pagination;
          }
        })
        .catch(error => {
          this.$store.commit("Loading_State", false);
          if (error.response && error.response.status == 422) {
            let obj = error.response.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
    backPrevios() {
      this.$router.go(-1);
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id },
      // });
      // this.$router.push({
      //   name: "PlanCalendar",
      //   params: { id: this.data.plan_month_id },
      // });
    }
    // fetchDataPlanMonth() {
    //   this.$axios
    //     .get(
    //       "plan-month/" +
    //         this.$route.params.driverId +
    //         "/plan-calendar/" +
    //         this.$route.params.id
    //     )
    //     .then((res) => {
    //       if (res.data.code == 200) {
    //         setTimeout(() => {
    //           this.data = res.data.data;
    //           console.log(this.data);
    //         }, 100);
    //       }
    //     })
    //     .catch(() => {});
    // },
  },
  created() {
    this.fetchSale();
    this.fetchData();
  },
  computed: {
    employees() {
      let data = [];
      for (const item of this.salesData) {
        let name = "";
        if (item.name) name += item.name + " ";
        if (item.phone) name += item.phone + " ";
        if (item.emp_name) name += item.emp_name + " ";
        if (item.emp_surname) name += item.emp_surname + " ";
        if (item.emp_card_id) name += item.emp_card_id;
        data.push({
          name: name,
          id: item.id
        });
      }
      return data;
    }
  },
  watch: {
    selectedSale() {
      this.fetchData();
    },
    date_from() {
      this.fetchData();
    },
    date_to() {
      this.fetchData();
    }
  }
};
</script>

<style>
.mx-input {
  height: 40px !important;
}
</style>
