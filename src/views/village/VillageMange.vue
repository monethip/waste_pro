<template>
  <v-container>
    <v-card class="mx-auto my-12" elevation="8" max-width="1000">
      <v-card-title>
        ທີ່ຢູ່
        <v-spacer></v-spacer>
         <v-autocomplete
                  required
                  :items="districts"
                  v-model="selectedDistrict"
                  item-text="name"
                  item-value="id"
                  label="District"
                  :rulesDistrict="rulePermission"
                  outlined
          dense
                ></v-autocomplete>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          outlined
          dense
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="villages" :search="search">
        <!-- <tr v-for="item in village" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
        </tr> -->
        <!-- <template v-slot:[`item[0].districts`]="{ item }">
          <td>{{ item.name }} {{item.en_name}}</td>
        </template> -->

        <!-- <template v-slot:[`item.villages`]="{ item }">
          <div>
            <span v-for="(villages, index) in item.villages" :key="index">
              {{ villages.name }}
            </span>
          </div>
        </template>

        <template v-slot:[`item.districts`]="{ item }">
          <tr v-for="(districts, index) in item.districts" :key="index">
             <td>{{ districts.id }}</td>
             <td>{{ districts.name }}, {{ districts.en_name }}</td>
          </tr>
        </template> -->
        <!-- <template v-slot:[`item.districts`]="{ item }">
          <tr v-for="(districts, index) in item.districts" :key="index">
             <td>{{ districts.name }}</td>
          </tr>
        </template> -->

        <!-- <template v-slot:[`item.districts[0].villages`]="{ item }">
          <tr
            v-for="(villages, index) in item.districts[0].villages"
            :key="index"
          >
            <td>{{ villages.name }}</td>
          </tr>
        </template> -->

        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small color="green" class="mr-2" @click="OpenModalEdit(item)">
            mdi-account-edit
          </v-icon>
          <v-icon small color="red" @click="deleteItem(item.id)">
            mdi-trash-can-outline
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <!--Edit Modal-->

    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">ແກ້ໄຂຂໍ້ມູນບ້ານ</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-autocomplete
                      required
                      :items="districts"
                      v-model="selectedDistrict"
                      item-text="name"
                      item-value="id"
                      label="District *"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="update_village.name"
                      label="village"
                      item-text="name"
                      item-value="id"
                      readonly
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdateVillage()">
                ຍົກເລີກ
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                :loading="loading"
                :disabled="loading"
                @click="updateItem()"
              >
                ບັນທຶກ
              </v-btn>
            </v-card-actions>
          </v-card-text>
        </v-card>
      </template>
    </ModalEdit>
  </v-container>
</template>

<script>
// import { __vlsRenderHelper } from 'vue-editor-bridge';
export default {
  name: "Village",
  data() {
    return {
      loading:false,
      getAddress: [],
      districts: [],
      selectedDistrict: "",
      listVillage: [],
      address:[],
      
      //test
      test: [],
      test2: [],

      //getlistofdistrict
      getVillage: [],
      village: [],
      im: [],

      getDistricts: [],

      update_village: {},
      search: "",
      headers: [
        {
          text: "ລະຫັດ",
          align: "start",
          value: "id",
          sortable: false,
        },
        {
          text: "ບ້ານ",
          align: "start",
          value: "name",
          sortable: false,
        },
        { text: "ແກ້ໄຂ/ລຶບ", value: "actions", sortable: false },
      ],
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    //when select districts
    //     Selecteddistricts() {
    //   if (this.getSelectedDistrict) {
    //     this.villages = [];
    //     this.villages = this.getDistricts.filter(
    //       item => String(item.districts) == String(this.getSelectedDistrict)
    //     );
    //   }
    // },
    reset() {
      this.$refs.form.reset();
    },

    OpenModalEdit(item) {
      this.village_edit = item;
      this.$store.commit("modalEdit_State", true);
    },

    UpdateItem() {
      if (this.$refs.form.validate() == true) {
        this.loading = true;
        this.$admin
          .put("address/village/" + this.update_village.id, this.village_edit)
          .then((res) => {
            if (res.data.success == true) {
              setTimeout(() => {
                this.loading = false;
                this.CloseModalEdit();
                this.village_edit = {};
                this.reset();
                this.getData();
                this.$store.commit("Toast_State", this.toast);
              }, 300);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.$store.commit("Toast_State", this.toast_error);
            this.getData();
            if (error.response.status == 422) {
              var obj = error.response.data.errors;
              for (let [key, village] of Object.entries(obj)) {
                this.server_errors[key] = village[0];
              }
            }
          });
      }
    },
   
    fetchData() {
      this.$axios
        .get("info/address", { params: { filter: "ນະຄອນຫລວງວຽງຈັນ" } })
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.getVillage = res.data.data;
              // console.log(this.getVillage);
              this.getVillage.map((item) => {
                this.districts = item.districts;
                // this.selectedDistrict
                this.selectedDistrict = this.districts[0].id;
                console.log(this.selectedDistrict)
                // console.log(this.districts)
                //console.log('village'+this.village);

                 this.fetchVillage();
                //  for (var i in this.districts) {
                  // this.village=this.districts[i].villages
                  // console.log(this.village);                 
                // }
                
                }
                );
            }, 300);
          }
        })
        .catch(() => {});
    },
       fetchVillage() {
      this.$axios
        .get("info/district/" + this.selectedDistrict + "/village")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.villages = res.data.data;
            }, 300);
          }
        })
        .catch(() => {});
    },

    closeUpdateVillage() {
      this.reset(),
        (this.update_village = {}),
        this.fetchData(),
        this.$store.commit("modalEdit_State", false);
    },
  },
  watch:{
        selectedDistrict: function () {
      this.fetchVillage();
    },
    computed:{
      selectedDistrict: function () {
      this.fetchVillage();
    },
    }
  }
  
};
</script>

<style>
</style>



