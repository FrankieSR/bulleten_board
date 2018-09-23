<template>
  <div class="home">
    <Registration />
    <ListAdd />
    <Pagination :current='currentPage' @page-changed = 'buletenLength'/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Registration from "@/components/Registration.vue";
  import ListAdd from "@/components/ListAdd.vue";
  import Pagination from "@/components/Pagination.vue";
  
  export default {
    name: "home",
    data: function() {
      return {
        buletensLength: this.$store.getters.buletensLength,
        currentPage: this.$store.currentPage
      }
    },
    components: {
      Registration,
      ListAdd,
      Pagination
    }
  };
</script>
