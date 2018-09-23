<template>
    <div>
    
        <form class="login" @submit.prevent="login">
    
            <h1>Sign in</h1>
            <label>User name</label>
            <input required v-model="username" type="text" placeholder="login" />
    
            <label>Password</label>
            <input required v-model="password" type="password" placeholder="password" />
    
            <button type="submit">Login</button>
    
        </form>
    
    </div>
</template>

<script>
export default {
  name: "Registration",

  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    // login: function() {
    //   const { username, password } = this;
    //   this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
    //     this.$router.push("/");
    //   });
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
