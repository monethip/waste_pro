<template>
  <v-container>
    <v-breadcrumbs large class="pt-0"
    >ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ອຍ
    </v-breadcrumbs
    >
    <v-row class="mb-n6">
      <v-col>
        <v-btn
            depressed
            color="primary"
            :loading="loading"
            :disabled="loading"
            @click="exportData()"
        >Export
        </v-btn>
      </v-col>
      <v-col>
        <v-select
            outlined
            dense
            :items="duration"
            v-model="selectedDuration"
            item-text="name"
            item-value="duration"
            label="ຊ່ວງເວລາ"
        ></v-select>
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
              style="height: 40px"
              v-model="year_from"
              type="year"
              format="YYYY"
              placeholder="ເລີ່ມປີ"
              @input="fetchData()"
          ></date-picker>
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
              v-model="year_to"
              type="year"
              format="YYYY"
              placeholder="ຫາປີ"
              @input="fetchData()"
          ></date-picker>
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
              v-model="month_from"
              type="month"
              placeholder="ເລີ່ມເດືອນ"
              @input="fetchData()"
          ></date-picker>
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
              v-model="month_to"
              type="month"
              placeholder="ຫາເດືອນ"
              @input="fetchData()"
          ></date-picker>
        </section>
      </v-col>

      <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
        <section>
          <date-picker
              style="height: 40px"
              v-model="date_from"
              type="date"
              placeholder="ເລີ່ມວັນທີ"
              @input="fetchData()"
          ></date-picker>
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
        <section>
          <date-picker
              style="height: 40px"
              v-model="date_to"
              type="date"
              placeholder="ຫາວັນທີ"
              @input="fetchData()"
          ></date-picker>
        </section>
      </v-col>

      <!--      <v-col>-->
      <!--        <v-select-->
      <!--            outlined-->
      <!--            dense-->
      <!--            :items="collectionTypes"-->
      <!--            v-model="collectionType"-->
      <!--            item-text="text"-->
      <!--            item-value="value"-->
      <!--            label="ປະເພດລູກຄ້າ"-->
      <!--        ></v-select>-->
      <!--      </v-col>-->
      <v-col>
        <v-text-field
            v-model="search"
            clearable
            outlined
            dense
            prepend-inner-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
            @keyup.enter="Search()"
        ></v-text-field>
      </v-col>

    </v-row>

    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1"> ຄົວເຮືອນ</v-tab>
          <v-tab href="#tab-2"> ບໍລິສັດ</v-tab>
        </v-tabs>
        <!-- <hr /> -->

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <!--            <HomeCollection :tab="tab"/>-->

            <div v-if="collectionType == 'home'">
              <div v-if="summary">
                <v-row v-for="(sum, index) in summary" :key="index.id" class="mb-n6 mt-0">
                  <v-col>
                    <p v-if="selectedDuration =='year'">{{ sum.year }}</p>
                    <p v-if="selectedDuration =='month'">{{ sum.month }}</p>
                    <p v-if="selectedDuration =='date'">{{ moment(sum.date).format("DD-MM-YY") }}</p>
                  </v-col>
                  <v-col>
                    <p v-if="sum.home">
                      ຈຳນວນຖົງຂີ້ເຫື້ອຍ
                      <span class="success--text">{{ sum.home.total_bag_amount }}</span>
                    </p>
                  </v-col>
                  <v-col>
                    <p v-if="sum.home">
                      ຈຳນວນຄັ້ງທີ່ລົງເກັບ
                      <span class="success--text">{{
                          sum.home.total_number_of_times_to_collect
                        }}</span>
                    </p>
                  </v-col>
                  <v-col>
                    <p v-if="sum.home">
                      ຈຳນວນເກັບສຳເລັດ
                      <span class="success--text">{{
                          sum.home.total_success_count
                        }}</span>
                    </p>
                  </v-col>
                  <v-col>
                    <p v-if="sum.home">
                      ຈຳນວນລໍຖ້າເກັບ
                      <span class="success--text">{{
                          sum.home.total_pending_count
                        }}</span>
                    </p>
                  </v-col>
                </v-row>
              </div>
              <v-data-table
                  v-if="homeCollection"
                  :headers="headers"
                  :items="homeCollection"
                  :search="search"
                  :disable-pagination="true"
                  hide-default-footer
              >
                <!--        <template v-slot:item.status="{ item }">-->
                <!--          <div>-->
                <!--            <span class="success&#45;&#45;text">{{ item.status }}</span>-->
                <!--          </div>-->
                <!--        </template>-->
                <template v-slot:item.status="{ item }">
                  <v-chip label :color="homeStatus(item.status)">{{
                      item.status
                    }}
                  </v-chip>
                </template>
                <template v-slot:item.date_deleted_at="{ item }">
                  <v-chip  v-if="item.date_deleted_at"  label color="error">{{
                      item.date_deleted_at
                    }}
                  </v-chip>
                </template>
              </v-data-table
              >
              <br/>
              <template>
                <Pagination
                    v-if="pagination.total_pages > 1"
                    :pagination="pagination"
                    :offset="offset"
                    @paginate="fetchData()"
                ></Pagination>
              </template>
            </div>
          </v-tab-item>
        </v-tabs-items>

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-2">
            <v-card flat>
              <v-card-text>
                <!--                <CompanyCollection :tab="tab"/>-->
                <div v-if="collectionType == 'company'">
                  <v-row v-for="(sum, index) in summary" :key="index" class="mb-n6 mt-n6">
                    <v-col>
                      <p v-if="selectedDuration =='year'">{{ sum.year }}</p>
                      <p v-if="selectedDuration =='month'">{{ sum.month }}</p>
                      <p v-if="selectedDuration =='date'">{{ moment(sum.date).format("DD-MM-YY") }}</p>
                    </v-col>
                    <v-col>
                      <p>
                        Canceled
                        <span class="success--text">{{
                            sum.company.canceled_count
                          }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p>
                        Deleted
                        <span class="success--text">{{
                            sum.company.deleted_count
                          }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p>
                        ຈຳນວນ Container
                        <span class="success--text">{{
                            sum.company.container_amount
                          }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p>
                        Container(ຄັ້ງ)
                        <span class="success--text">{{
                            sum.company.number_of_times_to_collect_by_container
                          }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p>
                        ເກັບເປັນຖ້ຽວ
                        <span class="success--text">{{
                            sum.company.number_of_times_to_collect_by_fix_cost
                          }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p>
                        ປະຕິເສດ
                        <span class="success--text">{{ sum.company.reject_count }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p>
                        ລໍຖ້າເກັບ
                        <span class="success--text">{{ sum.company.pending_count }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p>
                        ລໍຖ້າຢືນຢັນ
                        <span class="success--text">{{
                            sum.company.wait_to_confirm_count
                          }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p>
                        ສຳເລັດ
                        <span class="success--text">{{ sum.company.success_count }}</span>
                      </p>
                    </v-col>
                  </v-row>
                  <v-data-table
                      :headers="company"
                      :items="collections"
                      :search="search"
                      :disable-pagination="true"
                      hide-default-footer
                  >
                    <template v-slot:item.status="{ item }">
                      <v-chip label :color="companyStatus(item.status)">{{
                          item.status
                        }}
                      </v-chip>
                    </template>
                    <template v-slot:item.date_deleted_at="{ item }">
                      <v-chip label  v-if="item.date_deleted_at" color="error">{{
                          item.date_deleted_at
                        }}
                      </v-chip>
                    </template>
                    <template v-slot:item.collection_type="{ item }">
                      <div>{{ costBy(item.collection_type) }}</div>
                    </template>

                    <!--Role --> </v-data-table
                  >
                  <br/>
                  <template>
                    <Pagination
                        v-if="pagination.total_pages > 1"
                        :pagination="pagination"
                        :offset="offset"
                        @paginate="fetchData()"
                    ></Pagination>
                  </template>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>

        <!--        <div v-if="">-->

        <!--        </div>-->

      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import HomeCollection from "@views/report/tab/homeCollection";
// import CompanyCollection from "@views/report/tab/companyCollection";
import collection from "@views/report/collection";

export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  mixins: [collection],
  // components: {
  //   HomeCollection,
  //   CompanyCollection,
  // },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    backPrevios() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.mx-input {
  height: 40px !important;
}
</style>
