<template>
  <v-container>
    <v-row> <h4>ຈຳນວນ User</h4></v-row>
    <v-row>
      <v-col>
        <v-icon>mdi-account</v-icon>
        <h3>Users</h3>
        <h4>200</h4>
      </v-col>
      <v-col>
        <v-icon>mdi-account-tie</v-icon>
        <h3>Drivers</h3>
        <h4>150</h4>
      </v-col>
      <v-col>
        <v-icon>mdi-account-multiple</v-icon>
        <h3>Customers</h3>
        <h4>10,500</h4>
      </v-col>
      <v-col>
        <v-icon>mdi-account-multiple</v-icon>
        <h3>Customers VIP</h3>
        <h4>1,500</h4>
      </v-col>
    </v-row>
    <v-row> <h4>ລູກຄ້າເລືອກແພັກເກດ</h4></v-row>
    <v-row>
      <v-col>
        <v-icon>mdi-account</v-icon>
        <h3>Users</h3>
        <h4>200</h4>
      </v-col>
      <v-col>
        <v-icon>mdi-account-tie</v-icon>
        <h3>Drivers</h3>
        <h4>150</h4>
      </v-col>
      <v-col>
        <v-icon>mdi-account-multiple</v-icon>
        <h3>Customers</h3>
        <h4>10,500</h4>
      </v-col>
      <v-col>
        <v-icon>mdi-account-multiple</v-icon>
        <h3>Customers VIP</h3>
        <h4>1,500</h4>
      </v-col>
    </v-row>
    <br class="mx-4" />
    <v-row>
      <h4>ລູກຄ້າສະໝັກສະມາຊິກ</h4>
    </v-row>
    <v-row>
      <v-col>
        <user-chart />
      </v-col>
      <v-col>
        <trash />
      </v-col>
    </v-row>
    <v-row>
      <h4>ຈຳນວນເກັບຂີ້ເຫື້ຍອແບ່ງຕາມສາຍທາງ</h4>
    </v-row>
    <v-row>
      <v-col>
        <route-trash />
      </v-col>
      <v-col>
        <trash />
      </v-col>
    </v-row>
    <v-row>
      <h4>ລາຍໄດ້ສະເລ່ຍແຕ່ລະເດືອນ</h4>
    </v-row>
    <v-row>
      <v-col>
        <income />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import UserChart from "@views/dashboard/chart/userChart";
import Trash from "@views/dashboard/chart/trash";
import RouteTrash from "@views/dashboard/chart/routeTrash";
import Income from "@/views/dashboard/chart/income.vue";
export default {
  components: {
    UserChart,
    Trash,
    RouteTrash,
    Income,
  },
};
</script>
    UserChart