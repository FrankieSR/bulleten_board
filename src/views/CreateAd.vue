

<template>
  <div class="createAd">
    <CreateNewAd />
  </div>
</template>

<script>
// @ is an alias to /src
import CreateNewAd from "@/components/CreateNewAd.vue";
import vuex from "vuex";
export default {
  name: "createAd",
  data: function() {
    return {};
  },
  components: {
    CreateNewAd
  },
  mounted() {
    this.$store.dispatch("initialBulletens");
  }
};
</script>
