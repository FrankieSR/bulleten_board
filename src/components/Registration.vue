<template>
    <div>

        <form class="login" @submit.prevent="login">

            <h1 class="login__title">Sign in</h1>
            <div  class="login__username">
                <label>User name</label>
                <input required v-model="username" type="text" placeholder="login" />
            </div>

            <div class = "login__password" >
                <label>Password</label>
                <input required v-model="password" type="password" placeholder="password" />
            </div>

            <button class="login__submit" type="submit">Login</button>

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
    .login {
        max-width: 25vw;
        margin: 0 auto;

        &__username,
        &__password {
            display: flex;
            flex-direction: column;
        }

        &__submit {
            margin: 10px;
        }
    }
</style>
