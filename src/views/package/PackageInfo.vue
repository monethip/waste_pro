<template>
  <v-container>
    <v-col>
      <v-btn> Package </v-btn>
    </v-col>
    <v-col justify="center">
      <v-card class="pa-2" max-width="1000">
        <v-card-title>
          ຂໍ້ມູນແພັກເກັດ
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-col>
  </v-container>
  <!-- <v-card class="mx-auto my-12" elevation="8" max-width="1000">
    <v-simple-table fixed-header max-width="800">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ຊື່</th>
            <th class="text-left">ໄລຍະເວລາ</th>
            <th class="text-left">ຈໍານວນ</th>
            <th class="text-left">ລາຄາ Package</th>
            <th class="text-left">ລາຄາຕໍ່ຖົງ</th>
          </tr>
        </thead>
      </template>
    </v-simple-table>
  </v-card> -->
</template>

<script>
export default {
  name: "Package",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Size", value: "name" },
        { text: "ໄລຍະເວລາ(ອາທິດ)", value: "duration" },
        { text: "ຈໍານວນ/ຖົງ", value: "amount" },
        { text: "ລາຄາ/ແພັກເກັດ", value: "price" },
      ],
      desserts: [
        {
          id: "1",
          name: "S",
          duration: 1,
          amount: 4,
          price: 40000,
          protein: 4.0,
        },
        {
          id: "2",
          name: "M",
          duration: 1,
          amount: 8,
          price: 40000,
        },
        {
          id: "3",
          name: "L",
          duration: 1,
          amount: 12,
          price: 40000
        },
      ],
    };
  },
};
</script>

<style>
</style>