
<template>
<div>
    <ListAds :array-data="paginatedData" />
    <div class="pagination">
        <button class="pagination__prev" :disabled="pageNumber <= 0" @click="prevPage">
            Previous
        </button>
        <ul class="pagination__pages-list">
            <li v-for="item in allPages">{{item.pageNumber}}</li>
        </ul>
        <button class="pagination__next" :disabled="pageNumber >= pageCount" @click="nextPage">
            Next
        </button>
    </div>
</div>


</template>

<script>
import vuex from "vuex";
import ListAds from "@/components/ListAds.vue";
export default {
  name: "Pagination",
  data() {
    return {
      pageNumber: 0
    };
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 5
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    pageCount() {
      let l = this.listData.length,
        s = this.size;
      return Math.ceil(l / s - 1);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.listData.slice(start, end);
    },
    allPages() {
      let pages = [];
      for (var i = 0; i < this.pageCount; i++) {
        pages.push({
          pageNumber: i + 1
        });
      }
      return pages;
    }
  },
  components: {
    ListAds
  }
};
</script>
<style scoped lang="scss">
.board {
  display: flex;
  max-width: 1280px;
  margin: 100px auto;
  &__item {
    flex-basis: 20%;
    height: 300px;
    border: 1px solid black;
  }
}
</style>
