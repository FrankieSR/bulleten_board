

<template>
  <div class="createAd">
    <CreateNewAd />
  </div>
</template>

<script>
  // @ is an alias to /src
  import CreateNewAd from "@/components/CreateNewAd.vue";

  export default {
    name: "createAd",
    data: function() {
      return {
      }
    },
    components: {
      CreateNewAd
    }
  };
</script>
