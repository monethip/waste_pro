<template>
  <v-container>
    <v-card class="mx-auto my-12" elevation="8" max-width="1000">
      <v-simple-table fixed-header>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ບ້ານ</th>
              <th class="text-left">ເມືອງ</th>
              <th class="text-left">ແຂວງ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Village",
  data() {
    return {};
  },
};
</script>

<style>
</style>