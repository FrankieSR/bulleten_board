

<template>
  <div>
    <div class="account">
      <h1>Your account</h1>
    </div>
    <button v-on:click="user">User info</button>
  </div>

</template>

<script>
// @ is an alias to /src

import vuex from "vuex";
export default {
  name: "account",
  data: function() {
    return {
      userInfo: []
    };
  },
  methods: {
    user: function() {
      console.log(this.userInfo);
    }
  },
  mounted() {
    this.userInfo = this.$store.getters.getUserInfo;
    console.log(this.$store.getters.getUserInfo);
  }
};
</script>
