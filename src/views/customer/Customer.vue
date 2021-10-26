<template>
  <v-container>
    <div>
      <v-card>
        <v-tabs
          v-model="tab"
          dark
          background-color="deep-purple lighten-2"
          slider-color="indigo lighten-5"
        > 
          <v-tab href="#tab-1"> <v-icon>mdi-account</v-icon>ລູກຄ້າ</v-tab>
          <!-- <v-tab href="#tab-2">ລູກຄ້າ2</v-tab>
          <v-tab href="#tab-3">ລູກຄ້າ3</v-tab> -->
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <v-card flat>
              <v-card-text>
                <v-simple-table fixed-header>
                  <template v-slot:default>
                    <thead>
                      <tr>
                        <th class="text-left">ຊື່</th>
                        <th class="text-left">ນາມສະກຸນ</th>
                        <th class="text-left">ເບີໂທ</th>
                        <th class="text-left">email</th>
                        <th class="text-left">ປະເພດ</th>
                        <!-- <th class="text-left">ເສັ້ນແວງ</th>
                        <th class="text-left">ເສັ້ນຂະໜານ</th> -->
                      </tr>
                    </thead>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Customer",

  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style>
</style>