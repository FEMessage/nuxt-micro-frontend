<template>
  <div class="home">
    <div>vue-app</div>
    <div>global state userInfo {{userInfo}}</div>
    <el-button @click="handleGetInfo">getUserInfo</el-button>
    <el-button @click="$router.push({name: 'About'})">go2About</el-button>
    <br />
    <img src="../assets/logo.png" alt />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  data: () => ({
    userInfo: {}
  }),
  computed: {
    ...mapState(["name"])
  },
  methods: {
    handleGetInfo() {
      this.userInfo = this.$sdk.getUserInfo();
    }
  }
};
</script>
