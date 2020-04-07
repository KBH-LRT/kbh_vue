<template>
  <div id="login-page">
    <div id="login-area">
      <input
        type="text"
        id="username"
        :v-model="username"
        @input="username=$event.target.value"
        placeholder="user name"
      />
      <input
        type="password"
        :v-model="password"
        @input="password=$event.target.value"
        placeholder="password"
      />
      <input type="submit" @click="login()" value="submit" />

      <div id="errormsg">{{loginMsg}}</div>
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: "login-page",
  data() {
    return {
      username: "",
      password: "",
      loginMsg: ""
    };
  },
  methods: {
    login: function() {
      // axios
      //   .get("http://localhost:8080/KBH001", {
      //     params: {
      //       userName: this.username,
      //       userPwd: this.password
      //     }
      //   })
      //   .then(response => {
      //     if (response.data.loginResult === 0) {
      //       this.loginMsg = "Please enter the correct account and password.";
      //     } else {
      //       this.$router.push("/topPage");
      //     }
      //   });
      this.$router.push("/topPage");
    }
  }
};
</script>