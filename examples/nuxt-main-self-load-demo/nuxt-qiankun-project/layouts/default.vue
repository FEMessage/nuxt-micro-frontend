<template>
  <div>
    <header class="title">nuxt qiankun main</header>
    <div class="state-wrap">
      <input type="text" v-model="value" />
      <button @click="handleChange">change global value</button>
    </div>
    <div class="menu-wrap">
      <ul>
        <li v-for="item in mens" :key="item.name" @click="handleRoute(item)">
          <!-- <nuxt-link :to="item.to">{{item.name}}</nuxt-link> -->
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>

    <div id="subapp"></div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import { microAppLoaderMixin } from '@/mixins/micro-app-loader-mixin'
export default {
  data() {
    return {
      value: '',
      appMap: {}
    }
  },
  mixins: [microAppLoaderMixin],
  mounted() {
    this.init()
  },
  computed: {
    ...mapState(['apps', 'sdk']),
    mens() {
      return [].concat(
        this.apps.map((item) => ({
          ...item,
          to: item.activeRule,
        })),
        {
          name: 'nuxtHomePage',
          to: '/home',
        },
        {
          name: 'nuxtAboutPage',
          to: '/about',
        }
      )
    },
  },
  methods: {
    async init() {
      // 注册所有子应用

      let appMap = {}

      this.apps.forEach(item => {
        appMap[item.activeRule] = item
      })

      this.appMap = appMap

      // 加载首次进来匹配到的路由
      const config = this.appMap[this.$route.path]

      config && this.loadApp(config)

      this.prefetchApps(this.apps)
    },
    handleRoute(item) {
      const appConfig = this.appMap[item.to]

      // 如果能取出 config 则加载子应用
      if (appConfig) {
        this.loadApp(appConfig)
      }

      // 跳转路由
      this.$router.push(item.to)
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
