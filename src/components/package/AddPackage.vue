 <template>
  <v-container>
    <v-row class="mb-n6 text-right">
      <v-col>
        <v-btn color="teal" dark large @click="OpenModalAdd()"
          ><v-icon color>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-data-table :headers="header" :items="packages" hide-default-footer>
      <template v-slot:[`item.action`]="{ item }">
        <v-icon small color="green" class="mr-2" @click="OpenModalEdit(item)">
          mdi-account-edit
        </v-icon>
        <v-icon small color="red" @click="deleteItem(item.id)">
          mdi-trash-can
        </v-icon>
      </template>
    </v-data-table>

    <!-- Add Modal -->
    <ModalAdd>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="text-h5">Add Package Size</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.size"
                      label="size*"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="addpackage.bag"
                      label="bag*"
                      type="number"
                      class="input-number"
                      required
                      :rules="bagRules"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeAddModal()">
              Close
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              :loading="loading"
              :disabled="loading"
              @click="AddItem()"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </ModalAdd>

    <!--Edit Modal-->
    <ModalEdit>
      <template @close="close">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Package</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="form" lazy-validation>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackage.name"
                      label="name*"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-text-field
                      v-model="editPackage.price"
                      label="price*"
                      required
                      type="number"
                      class="input-number"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdate()">
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
  data() {
    return {
      packages: [],
      addpackage: {},
      editPackage: {},
      loading: false,

      header: [
        { text: "id", value: "id" },
        { text: "name", value: "name" },
        { text: "price", value: "price" },
        { text: "Actions", value: "action" },
      ],
      bagRules: [
        (v) => !!v || "Bag is required",
        (v) =>
          Number.isInteger(Number(v)) || "The value must be an integer number",
      ],
    };
  },

  methods: {
    reset() {
      this.$refs.form.reset();
    },

    OpenModalAdd() {
      this.$store.commit("modalAdd_State", true);
    },

    closeUpdate() {
      this.reset(),
        (this.editPackage = {}),
        this.fetchData(),
        this.$store.commit("modalEdit_State", false);
    },

    OpenModalEdit(item) {
      this.editPackage = item;
      this.$store.commit("modalEdit_State", true);
    },

    fetchData() {
      this.$store.commit("Loading_State", true);
      this.$axios
        .get("package")
        .then((res) => {
          if (res.data.code == 200) {
            setTimeout(() => {
              this.$store.commit("Loading_State", false);
              this.packages = res.data.data;
              this.pagination = res.data.data.pagination;
              console.log("data", this.packages);
            }, 300);
          }
        })
        .catch((error) => {
          this.$store.commit("Loading_State", false);
          this.fetchData();
          if (error.respones.status == 422) {
            var obj = error.respones.data.errors;
            for (let [key, message] of Object.entries(obj)) {
              this.server_errors[key] = message[0];
            }
          }
        });
    },
  },

  created() {
    this.fetchData();
  },
};
</script>
 
 <style>
</style>