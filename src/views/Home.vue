<template>
  <div class="main">
      <div class="main__registration">
          <Registration />
      </div>
      <div class="main__list-buletens">
          <Pagination :list-data="buletens"/>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import vuex from "vuex";
import Registration from "@/components/Registration.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "home",
  data: function() {
    return {
      buletens: []
    };
  },
  components: {
    Registration,
    Pagination
  },
  mounted() {
    this.$store.dispatch("initialBulletens");
    this.buletens = this.$store.getters.buletens;
  }
};
</script>

<style lang="scss" scoped>
.main {
  height: calc(100vh - 70px);
  background: #fff;
  overflow: hidden;
}
</style>
