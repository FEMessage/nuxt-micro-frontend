<template>
  <div id="app">
    <div id="nav">
      <a @click="handleClick(item)" :key="item.name" v-for="item in menus">
        {{
        item.name
        }}
      </a>
    </div>
    <router-view />
    <div id="sub-application"></div>
  </div>
</template>

<script>
export default {
  computed: {
    menus() {
      const { menus } = this.$store.state;

      return [
        {
          name: "home",
          path: "/"
        },
        {
          name: "about",
          path: "/about"
        }
      ].concat(menus);
    }
  },
  methods: {
    handleClick(item) {
      if (item.path === this.$route.path) return;

      this.$router.push(item.path);
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    cursor: pointer;
    display: inline-block;
    padding: 10px 20px;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
