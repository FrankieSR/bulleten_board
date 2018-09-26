

<template>
  <div>
    <div class="new-account container">
      <h1>New account</h1>
      <div class="new-account__input-group">
        <label class="new-account__label">your name</label>
        <input type="text" class="form-control" placeholder="" />
        <label class="new-account__label">your password</label>
        <input type="text" class="form-control" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import vuex from "vuex";
export default {
  name: "newAccount",
  data: function() {
    return {};
  },
  components: {

  },
  mounted() {

  }
};
</script>
