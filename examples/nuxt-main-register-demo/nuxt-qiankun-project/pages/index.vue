<template>
</template>

<script>
import { mapState } from 'vuex'
import {
  MicroAppStateActions,
  registerMicroApps,
  start,
  setDefaultMountApp,
} from 'qiankun'
export default {
  mounted() {
    this.init()
  },
  computed: {
    ...mapState(['apps'])
  },
  methods: {
    async init() {
      // 注册所有子应用
      registerMicroApps(this.apps)

      // 设置默认 active 的子应用
      setDefaultMountApp(this.apps[0].activeRule)

      // 启动
      start()
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}


#subapp {
  min-height: 100vh;
}
</style>
