<template>
<div>
    <loader :visible = "visible"/>
    <div class="board">
        <div class="board__item" v-for="(item, index) in arrayData" :key='index'>
            <h3 class="board__title">{{item.title}}</h3>
            <p class="board__description">{{item.text}}</p>
            <p class="board__author">{{item.user}}</p>
            <p>{{item.time}}</p>
            <img v-bind:src="item.image" />

            <button v-if="item.user === 'artem'" v-on:click="deleted(index)">Delete</button>
        </div>
        <!-- <router-link tag="button" to="/create-ad">crete ad</router-link> -->
        <button @click="routTo">CREATE AD</button>
        <router-view/>
    </div>
</div>
</template>

<script>
import vuex from "vuex";
import loader from "@/components/Loader.vue";
export default {
  name: "ListAds",
  props: {
    arrayData: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      visible: false
    };
  },
  methods: {
    deleted: function(index) {
      this.$store.dispatch("deleteBuleten", index);
    },
    routTo: function() {
      this.visible = !this.visible;
      setTimeout(() => this.$router.push({ path: "/create-ad" }), 2000);
    }
  },
  components: {
    loader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.board {
  max-width: 1280px;
  margin: 100px auto;

  &__item {
    height: 50px;
    border: 1px solid black;
    text-align: left;
    display: flex;
    justify-content: space-between;
    padding-left: 50px;
  }
}

.loader {
  width: 100vw;
  height: 100vh;
  background: rgba(200, 200, 200, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.spinner {
  margin: 100px auto;
  width: 80px;
  height: 70px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #333;
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}

@keyframes sk-stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
</style>
