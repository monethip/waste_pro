<template>
  <nav
    class="pagination is-centered is-rounded"
    role="navigation"
    aria-label="pagination"
  >
    <a
      class="pagination-next"
      @click.prevent="changePage(pagination.total_pages)"
      :disabled="pagination.total_pages >= pagination.total_pages"
      >ໄປໜ້າສຸດທ້າຍ</a
    >
    <a
      class="pagination-next"
      @click.prevent="changePage(pagination.total_pages + 1)"
      :disabled="pagination.total_pages >= pagination.total_pages"
      >ຖັດໄປ</a
    >
    <a
      class="pagination-previous"
      @click.prevent="changePage(pagination.current_page - 1)"
      :disabled="pagination.current_page <= 1"
      >ກັບຄືນ</a
    >
    <a
      class="pagination-previous"
      @click.prevent="changePage(1)"
      :disabled="pagination.current_page <= 1"
      >ກັບໜ້າທຳອິດ</a
    >
    <ul class="pagination-list">
      <li v-for="(page, index) in pages" :key="index">
        <a
          class="pagination-link"
          :class="isCurrentPage(page) ? 'is-current' : ''"
          @click.prevent="changePage(page)"
          >{{ page }}</a
        >
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ["pagination", "offset"],
  methods: {
    isCurrentPage(page) {
      return this.pagination.current_page === page;
    },
    changePage(page) {
      if (page > this.pagination.total_pages) {
        page = this.pagination.total_pages;
      }
      this.pagination.current_page = page;
      this.$emit("paginate");
    },
  },
  computed: {
    pages() {
      let pages = [];
      let from = this.pagination.current_page - Math.floor(this.offset / 2);

      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset - 1;
      if (to > this.pagination.total_pages) {
        to = this.pagination.total_pages;
      }
      while (from <= to) {
        pages.push(from);
        from++;
      }
      return pages;
    },
  },
};
</script>
<style scoped>
/*@import "../../../public/css/bulma.css";*/
.pagination {
  font-size: 1rem;
  margin: -0.25rem;
}
li {
  list-style-type: none;
}
.pagination,
.pagination-list {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}
.pagination.is-rounded .pagination-link {
  border-radius: 290486px;
  justify-content: center;
}
.pagination-link.is-current {
  background-color: #49a3da !important;
  border-color: #49a3da !important;
  color: #fff;
}
.pagination.is-rounded .pagination-previous,
.pagination.is-rounded .pagination-next {
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 290486px;
}

.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis {
  font-size: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  justify-content: center;
  margin: 0.25rem;
  text-align: center;
}
.pagination-previous[disabled],
.pagination-next[disabled],
.pagination-link[disabled] {
  background-color: #dbdbdb;
  border-color: #dbdbdb;
  box-shadow: none;
  color: #7a7a7a;
  opacity: 0.5;
}
.button,
.input,
.textarea,
.select select,
.file-cta,
.file-name,
.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
}
@media screen and (min-width: 769px) {
  .pagination {
    /*justify-content: space-between;*/
  }
  .pagination.is-centered .pagination-previous {
    order: 1;
  }
}
</style>
