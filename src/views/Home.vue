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
  import Registration from "@/components/Registration.vue";
  import Pagination from "@/components/Pagination.vue";

  export default {
    name: "home",
    data: function() {
      return {
          buletens: this.$store.getters.buletens
      }
    },
    components: {
      Registration,
      Pagination
    }
  };
</script>

<style lang="scss" scoped>
    .main {
        height: 100vh;
        background: #FF5252;
        overflow: hidden;
    }
    
</style>
