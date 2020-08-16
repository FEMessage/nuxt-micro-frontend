<template>
  <div>
    <header class="title">nuxt qiankun main</header>
    <div class="state-wrap">
      <input type="text" v-model="value" />
      <button @click="handleChange">change global value</button>
    </div>
    <div class="menu-wrap">
      <ul>
        <li v-for="app in apps" :key="app.name">
          <nuxt-link :to="app.activeRule">{{app.name}}</nuxt-link>
        </li>
      </ul>
    </div>

    <div id="subapp"></div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
} from 'qiankun'
export default {
  data() {
    return {
      value: '',
    }
  },
  mounted() {
    this.init()
  },
  computed: {
    ...mapState(['apps', 'sdk']),
  },
  methods: {
    async init() {
      // 注册所有子应用
      registerMicroApps(this.apps)

      // 启动
      start()
    },

    handleChange() {
      this.sdk.globalState.setGlobalState({
        name: this.value,
      })
    },
  },
}
</script>


<style >
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.title {
  text-align: center;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.state-wrap,
.menu-wrap {
  text-align: center;
}

.menu-wrap > ul {
  list-style: none;
}
</style>
