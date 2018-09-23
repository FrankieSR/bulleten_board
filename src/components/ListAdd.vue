<template>
<div>
    <div class="board">
        
       <div class="board__item" v-for="(item, index) in buletens" :key='index'>
           <h3 v-text="item.title"></h3>
           <p v-text="item.text"></p>
           <p v-text="item.user"></p>
              <button v-if="item.user === 'artem'" v-on:click="deleted(index)">Delete</button>
       </div>
       
    </div>
            <label>title</label>
            <input required v-model="title" type="text" placeholder="title" />
            <input required v-model="user" type="text" placeholder="user" />
            <label>Text</label>
            <textarea required v-model="text" type="password" placeholder="text"></textarea>
            
              <button  v-on:click='addBuleten'>Login</button> 
</div>
</template>

<script>
import vuex from 'vuex';
export default {
  name: "ListAdd",

  data: function() {
    return {
      buletens: this.$store.getters.buletens,
      text: [],
      title: "",
      key: 0,
      user: '',
      pageNumber: 0
    };
  },
  methods: {
    addBuleten: function() {
      this.$store.dispatch("addBuleten", {
        title: this.title,
        text: this.text,
        key: this.key++,
        user: this.user
      });
    },
    deleted: function(index) {
      this.$store.dispatch('deleteBuleten', index)
    },
    userInfo: function() {
      if(this.user === 'artem') {
        console.log(this.$store.getters.buletens);
        return true;
      }else {
        return false;
      }
    }
  },
  computed: {

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
