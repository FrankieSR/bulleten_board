<template>
<div class="pagination">
    <div class="pagination__back">
        <a href="#" @click="changePage(prevPage)">Prev</a>
    </div>
    <div class="pagination__forward">
        <a href="#" @click="changePage(nextPage)">Next</a>
    </div>
</div>
</template>

<script>
import vuex from "vuex";
export default {
  name: "Pagination",

  props: {
      current: {
          type: Number,
          default: 1
      }
  },
  methods: {
      changePage: function(page) {
          this.$emit('page-changed', page);
      }
  },
  computed: {
      nextPage: function() {
          return this.current + 1;
      },
      prevPage: function(){
          return this.current - 1;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
