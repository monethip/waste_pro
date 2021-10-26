<template>
  <v-container>
    <v-card class="mx-auto my-12" elevation="8" max-width="1000">
      <v-card-title>
        ທີ່ຢູ່
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="getVillage" :search="search">
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.districts.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.districts }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </template>
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
                    <v-text-field
                      v-model="update_village.name"
                      label="ບ້ານ"
                      readonly
                      append-icon="mdi-tree-outline"
                      prepend-inner-icon="mdi-flower-outline"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-select
                      :items="district"
                      v-model="update_village.name"
                      :item-text="District_Name"
                      :item-value="District_id"
                      @input="test"
                      prepend-inner-icon="mdi-flower-tulip"
                      label="ເມືອງ..."
                      color="teal"
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-select
                      :items="district"
                      v-model="update_village.name"
                      :item-text="District_Name"
                      :item-value="District_id"
                      @input="test"
                      prepend-inner-icon="mdi-flower-tulip"
                      label="ແຂວງ..."
                      color="teal"
                    ></v-select>
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
export default {
  name: "Village",
  data() {
    return {
      getAddress: [],

      //getlistofdistrict
      getVillage: [],
      im: [],

      update_village: {},
      search: "",
      headers: [
        {
          text: "ລະຫັດ",
          align: "start",
          value: "districts.id",
          sortable: false,
        },
        {
          text: "ບ້ານ",
          align: "start",
          value: "villname",
          sortable: false,
        },
        {
          text: "ເມືອງ",
          align: "start",
          value: "districts",
        },
        { text: "ແຂວງ", value: "name" },
        { text: "ແກ້ໄຂ/ລຶບ", value: "actions", sortable: false },
      ],
    };
  },
  created() {
    this.fetchData();
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },
    fetchData() {
      this.$axios
        .get("info/address")
        .then((res) => {
           this.im = res.data.data;
          // console.log('ashj',this.getVillage)
          this.filterVillage = res.data.data[0].districts[0]
          // for (let i = 0; i <= this.im.length; i++) {
          //   this.getAddress.push(this.im[i]);
          //   for (let j = 0; j <= this.getAddress.length; j++) {
          //     this.getVillage.push(this.getAddress[j]);
          //   }
          // }
          //  const ListofDistrict = (list) =>{
          //    console.log('access2');
          //    return list.map(item =>{
          //      console.log("name:" +item.name);
          //      const obj = Object.assign({}, item);
          //      //obj[prop] = concat(obj[prop])
          //      return this.im.push(obj);

          //    })
          //  }
          //  ListofDistrict(res.data.data,"name")
          //  this.getVillage = this.im;
          console.log(this.getVillage);
        })
        .catch(() => {
          console.log("Cannot get data");
        });
    },
    OpenModalEdit(item) {
      this.update_village = item;
      this.$store.commit("modalEdit_State", true);
    },

    closeUpdateVillage() {
      this.reset(),
        (this.update_village = {}),
        this.fetchData(),
        this.$store.commit("modalEdit_State", false);
    },
  },
};
</script>

<style>
</style>


