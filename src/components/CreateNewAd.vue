<template>
<div>
    <label>title</label>
    <input required v-model="title" type="text" placeholder="title" />
    <input required v-model="user" type="text" placeholder="user" />
    <input required v-model="image" type="text" placeholder="image" />
    <label>Text</label>
    <textarea required v-model="text" type="password" placeholder="text"></textarea>

    <button v-on:click='addBuleten'>add</button>
</div>
</template>

<script>
import vuex from "vuex";

export default {
  name: "CreateNewAd",
  data: function() {
    return {
      text: "",
      title: "",
      user: "",
      image: ""
    };
  },
  methods: {
    addBuleten: function() {
      this.$store.dispatch("addBuleten", {
        title: this.title,
        text: this.text,
        user: this.user,
        time: new Date().toLocaleDateString(),
        image: this.image
      });
      console.log();
    },
    userInfo: function() {
      if (this.user === "artem") {
        return true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
