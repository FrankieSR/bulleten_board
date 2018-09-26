<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">My ad board</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli:400,600,700,800");
#app {
  font-family: "Muli", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav {
  position: static;
  height: 70px;
  background-color: #eee;

  a {
    float: left;
    font-size: 20px;
    word-spacing: -2px;
    line-height: 10px;
  }
}
</style>
