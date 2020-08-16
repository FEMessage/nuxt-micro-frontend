<template>
  <div class="home">
    <div>vue-app</div>
    <div>global state name {{name}}</div>
    <el-button>update global state to parent</el-button>
    <el-button @click="$router.push({name: 'About'})">go2About</el-button>
    <br />
    <img src="../assets/logo.png" alt />
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapState(["name"])
  },
  methods: {
    ...mapMutations(["updateParentState"])
  }
};
</script>
