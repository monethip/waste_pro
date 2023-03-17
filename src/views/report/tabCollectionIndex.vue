<template>
  <v-container>
    <v-breadcrumbs
      large
      class="pt-0"
    >
      ລາຍງານຂໍ້ມູນການເກັບຂີ້ເຫື້ຍອ
    </v-breadcrumbs>
    <v-row class="mb-n6">
      <v-col>
        <v-btn
          depressed
          color="primary"
          :loading="loading"
          :disabled="loading"
          @click="exportData()"
        >
          Export
        </v-btn>
      </v-col>
      <v-col>
        <v-select
          v-model="selectedDuration"
          outlined
          dense
          :items="duration"
          item-text="name"
          item-value="duration"
          label="ຊ່ວງເວລາ"
        />
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
            v-model="year_from"
            style="height: 40px"
            type="year"
            format="YYYY"
            placeholder="ເລີ່ມປີ"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'year'">
        <section>
          <date-picker
            v-model="year_to"
            type="year"
            format="YYYY"
            placeholder="ຫາປີ"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
            v-model="month_from"
            type="month"
            placeholder="ເລີ່ມເດືອນ"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'month'">
        <section>
          <date-picker
            v-model="month_to"
            type="month"
            placeholder="ຫາເດືອນ"
          />
        </section>
      </v-col>

      <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
        <section>
          <date-picker
            v-model="date_from"
            style="height: 40px"
            type="date"
            placeholder="ເລີ່ມວັນທີ"
          />
        </section>
      </v-col>
      <v-col v-if="selectedDuration == 'merge' || selectedDuration == 'date'">
        <section>
          <date-picker
            v-model="date_to"
            style="height: 40px"
            type="date"
            placeholder="ຫາວັນທີ"
          />
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
        />
      </v-col>
    </v-row>

    <v-card elevation="1">
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab href="#tab-1">
            ຄົວເຮືອນ
          </v-tab>
          <v-tab href="#tab-2">
            ບໍລິສັດ
          </v-tab>
        </v-tabs>
        <!-- <hr /> -->

        <v-tabs-items v-model="tab">
          <v-tab-item value="tab-1">
            <!--            <HomeCollection :tab="tab"/>-->

            <div v-if="collectionType == 'home'">
              <div v-if="selectedDuration == 'merge'">
                <div v-if="summaryMerge.home">
                  <v-row>
                    <v-col class="sum-total">
                      ຈຳນວນຖົງຂີ້ເຫື້ຍອ: {{ summaryMerge.home.total_bag_amount }}
                    </v-col>
                    <v-col class="sum-total">
                      ເກັບທັງໝົດ: {{ summaryMerge.home.total_number_of_times_to_collect }}
                    </v-col>
                    <v-col class="sum-total">
                      ລໍຖ້າ: {{ summaryMerge.home.total_pending_count }}
                    </v-col>
                    <v-col class="sum-total">
                      ສຳເລັດ: {{ summaryMerge.home.total_success_count }}
                    </v-col>
                  </v-row>
                </div>
              </div>

              <div v-else>
                <div v-if="summary">
                  <v-row
                    v-for="(sum, index) in summary"
                    :key="index.id"
                    class="mb-n6 mt-0"
                  >
                    <v-col class="sum-title">
                      <p v-if="selectedDuration == 'year'">
                        ປີ: {{ sum.year }}
                      </p>
                      <p v-if="selectedDuration == 'month'">
                        ເດືອນ: {{ sum.month }}
                      </p>
                      <p v-if="selectedDuration == 'date'">
                        ວັນທີ: {{ moment(sum.date).format("DD-MM-YY") }}
                      </p>
                    </v-col>
                    <v-col>
                      <p
                        v-if="sum.home"
                        class="sum-title"
                      >
                        ຈຳນວນຖົງຂີ້ເຫື້ຍອ
                        <span class="success--text">{{ sum.home.total_bag_amount }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p
                        v-if="sum.home"
                        class="sum-title"
                      >
                        ຕ້ອງລົງເກັບທັງໝົດ
                        <span class="success--text">{{
                          sum.home.total_number_of_times_to_collect
                        }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p
                        v-if="sum.home"
                        class="sum-title"
                      >
                        ຈຳນວນເກັບສຳເລັດ
                        <span class="success--text">{{
                          sum.home.total_success_count
                        }}</span>
                      </p>
                    </v-col>
                    <v-col>
                      <p
                        v-if="sum.home"
                        class="sum-title"
                      >
                        ຈຳນວນລໍຖ້າເກັບ
                        <span class="success--text">{{
                          sum.home.total_pending_count
                        }}</span>
                      </p>
                    </v-col>
                  </v-row>
                </div>
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
                  <v-chip
                    label
                    :color="homeStatus(item.status)"
                  >
                    {{
                      statusText(item.status)
                    }}
                  </v-chip>
                </template>
                <template v-slot:item.date_deleted_at="{ item }">
                  <v-chip
                    v-if="item.date_deleted_at"
                    label
                    color="error"
                  >
                    {{
                      item.date_deleted_at
                    }}
                  </v-chip>
                </template>
                <template v-slot:item.expect_trash="{ item }">
                  <v-chip
                    v-if="item.expect_trash"
                    outlined
                    color="green"
                  >
                    {{ Intl.NumberFormat().format(item.expect_trash) }}
                    {{ getCustomerUnitFunc(item.cost_by) }}
                  </v-chip>
                  <div v-else>
                    -
                  </div>
                </template>

                <template v-slot:item.current_month_info="{ item }">
                  <v-chip
                    v-if="item.current_month_info"
                    outlined
                    :color="getTrashColor(item, getTrash(item.cost_by, item.last_month_info))"
                  >
                    {{
                      Intl.NumberFormat().format(getTrash(item.cost_by, item.current_month_info))
                    }}
                    {{ getCustomerUnitFunc(item.cost_by) }}
                  </v-chip>
                  <div v-else>
                    -
                  </div>
                </template>

                <template v-slot:item.last_month_info="{ item }">
                  <v-chip
                    v-if="item.last_month_info"
                    dark
                    :color="getTrashColor(item, getTrash(item.cost_by, item.last_month_info))"
                  >
                    {{
                      Intl.NumberFormat().format(getTrash(item.cost_by, item.last_month_info))
                    }}
                    {{ getCustomerUnitFunc(item.cost_by) }}
                  </v-chip>
                  <div v-else>
                    -
                  </div>
                </template>
              </v-data-table>
              <br>
              <template>
                <div v-if="homeCollection.length">
                  <Pagination
                    v-if="pagination.total_pages > 1"
                    :pagination="pagination"
                    :offset="offset"
                    @paginate="fetchData()"
                  />
                </div>
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
                  <div v-if="selectedDuration == 'merge'">
                    <div v-if="summaryMerge.company">
                      <v-row>
                        <v-col class="sum-total">
                          ຈຳນວນຖົງຂີ້ເຫື້ຍອ: {{ summaryMerge.company.total_bag_amount }}
                        </v-col>
                        <v-col class="sum-total">
                          ເກັບທັງໝົດ: {{ summaryMerge.company.total_number_of_times_to_collect }}
                        </v-col>
                        <v-col class="sum-total">
                          ລໍຖ້າ: {{ summaryMerge.company.total_pending_count }}
                        </v-col>
                        <v-col class="sum-total">
                          ສຳເລັດ: {{ summaryMerge.company.total_success_count }}
                        </v-col>
                      </v-row>
                    </div>
                  </div>

                  <div v-else>
                    <v-row
                      v-for="(sum, index) in summary"
                      :key="index"
                      class="mb-n6 mt-n6"
                    >
                      <v-col class="sum-title">
                        <p v-if="selectedDuration == 'year'">
                          ວັນທີ: {{ sum.year }}
                        </p>
                        <p v-if="selectedDuration == 'month'">
                          ເດືອນ: {{ sum.month }}
                        </p>
                        <p v-if="selectedDuration == 'date'">
                          ວັນທີ: {{ moment(sum.date).format("DD-MM-YY") }}
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          Canceled
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{
                            sum.company.canceled_count
                          }}</span>
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          Deleted
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{
                            sum.company.deleted_count
                          }}</span>
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          ຈຳນວນ Container
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{
                            sum.company.container_amount
                          }}</span>
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          Container(ຄັ້ງ)
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{
                            sum.company.number_of_times_to_collect_by_container
                          }}</span>
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          ເກັບເປັນຖ້ຽວ
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{
                            sum.company.number_of_times_to_collect_by_fix_cost
                          }}</span>
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          ປະຕິເສດ
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{ sum.company.reject_count }}</span>
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          ລໍຖ້າເກັບ
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{ sum.company.pending_count }}</span>
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          ລໍຖ້າຢືນຢັນ
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{
                            sum.company.wait_to_confirm_count
                          }}</span>
                        </p>
                      </v-col>
                      <v-col>
                        <p class="sum-title">
                          ສຳເລັດ
                          <span
                            v-if="sum.company"
                            class="success--text"
                          >{{ sum.company.success_count }}</span>
                        </p>
                      </v-col>
                    </v-row>
                  </div>

                  <v-data-table
                    :headers="company"
                    :items="collections"
                    :search="search"
                    :disable-pagination="true"
                    hide-default-footer
                  >
                    <template v-slot:item.status="{ item }">
                      <v-chip
                        label
                        :color="companyStatus(item.status)"
                      >
                        {{
                          statusText(item.status)
                        }}
                      </v-chip>
                    </template>
                    <template v-slot:item.date_deleted_at="{ item }">
                      <v-chip
                        v-if="item.date_deleted_at"
                        label
                        color="error"
                      >
                        {{
                          item.date_deleted_at
                        }}
                      </v-chip>
                    </template>
                    <template v-slot:item.collection_type="{ item }">
                      <div>{{ costBy(item.collection_type) }}</div>
                    </template>

                    <template v-slot:item.expect_trash="{ item }">
                      <v-chip
                        v-if="item.expect_trash"
                        outlined
                        color="green"
                      >
                        {{ Intl.NumberFormat().format(item.expect_trash) }}
                        {{ getCustomerUnitFunc(item.cost_by) }}
                      </v-chip>
                      <div v-else>
                        -
                      </div>
                    </template>
                    <template v-slot:item.current_month_info="{ item }">
                      <v-chip
                        v-if="item.current_month_info"
                        outlined
                        :color="getTrashColor(item, getTrash(item.cost_by, item.last_month_info))"
                      >
                        {{
                          Intl.NumberFormat().format(getTrash(item.cost_by, item.current_month_info))
                        }}
                        {{ getCustomerUnitFunc(item.cost_by) }}
                      </v-chip>
                      <div v-else>
                        -
                      </div>
                    </template>

                    <template v-slot:item.last_month_info="{ item }">
                      <v-chip
                        v-if="item.last_month_info"
                        dark
                        :color="getTrashColor(item, getTrash(item.cost_by, item.last_month_info))"
                      >
                        {{
                          Intl.NumberFormat().format(getTrash(item.cost_by, item.last_month_info))
                        }}
                        {{ getCustomerUnitFunc(item.cost_by) }}
                      </v-chip>
                      <div v-else>
                        -
                      </div>
                    </template>

                    <!--Role -->
                  </v-data-table>
                  <br>
                  <template>
                    <Pagination
                      v-if="pagination.total_pages > 1"
                      :pagination="pagination"
                      :offset="offset"
                      @paginate="fetchData()"
                    />
                  </template>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
// import HomeCollection from "@views/report/tab/homeCollection";
// import CompanyCollection from "@views/report/tab/companyCollection";
import collection from '@views/report/collection';

export default {
  title() {
    return `Vientiane Waste Co-Dev|Calendar`;
  },
  mixins: [collection],
  // components: {
  //   HomeCollection,
  //   CompanyCollection,
  // },
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

.sum-title {
  font-size: 14px !important;
}

.sum-total {
  font-size: 14px !important;
}
</style>
