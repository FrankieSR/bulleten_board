<template>
    <div>

        <form class="login">

            <h1 class="login__title">Sign in</h1>
            <div  class="login__username">
                <label>User name</label>
                <input required v-model="username" type="text" placeholder="login" />
            </div>

            <div class = "login__password" >
                <label>Password</label>
                <input required v-model="password" type="password" placeholder="password" />
                <p v-text = "password"></p>
            </div>

            <button class="login__submit" type="submit" v-on:click.prevent="login">Login</button>

        </form>

    </div>
</template>

<script>
import vuex from "vuex";
export default {
  name: "Registration",

  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      let user = new Object();
      user.password = this.password;
      user.username = this.username;
      this.$store
        .dispatch("authRequest", user)
        .then(
          success => {
            console.log(this);
            let id = this.username;
            setTimeout(() => this.$router.push({ path: "/account/" + id}), 2000)
          },
          reject =>
            setTimeout(() => this.$router.push({ path:
              "/new-account/"}), 2000)
        )
        .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  max-width: 25vw;
  margin: 25px auto;
  background: #eee;
  padding: 15px;
  // box-shadow: 0 0 5px 0 #111;

  &__username,
  &__password {
    display: flex;
    flex-direction: column;
  }

  &__submit {
    margin: 15px;
  }
}
</style>
