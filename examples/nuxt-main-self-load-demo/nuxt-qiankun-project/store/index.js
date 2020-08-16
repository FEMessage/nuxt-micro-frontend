
import { Message } from 'element-ui'
import {
  initGlobalState,
} from 'qiankun'

const TYPES = {
  INIT_APPS: 'init_apps'
}

export const state = () => ({
  apps: [],
  name: 'femessage',
  sdk: null
})

export const mutations = {
  [TYPES.INIT_APPS](state, apps) {

    // 初始化全局变量
    const actions = initGlobalState({
      name: state.name,
    })


    // 使用 sdk 方式进行 父子应用通信, 这里大家可以根据自己项目进行增加删除
    const sdk = {
      globalState: actions,
      toast: (...args) => {
        Message(...args)
      },
      go2404: () => {
        this.$router.push('404')
      },
      name: state.name
    }

    // 处理 apps 列表
    apps = apps.map((item) => ({
      ...item,
      container: '#subapp',
      props: {
        sdk,
      },
    }))

    // 处理路由表
    const routes = apps.map((item, i) => ({
      path: `${item.activeRule}(.*)`,
      name: `${item.name}-i`,
      component: () => import('@/pages/index.vue').then(m => m.default || m)
    }))

    // 动态增加路由, 这里要注意 404 页面不能直接写在 pages 中
    // 不然匹配的时候会根据顺序匹配到 * 就直接返回了 从而匹配不到我们后续添加的动态路由
    this.$router.addRoutes([].concat(...routes,
      {
        path: `*`,
        name: `404`,
        component: () => import('@/pages/404.vue').then(m => m.default || m)
      }
    ))

    state.apps = apps
    state.sdk = sdk
  }
}

export const actions = {
  async getMenus({ commit }) {
    const { payload } = await getMenus()

    commit(TYPES.INIT_APPS, payload)
  }
}



async function getMenus() {

  return {
    code: 0,
    payload: [
      {
        name: 'vue-app',
        activeRule: '/vue',
        entry: 'http://localhost:7101/',
      },
      {
        name: 'nuxt-app',
        activeRule: '/nuxt',
        entry: 'http://127.0.0.1:7102/',
      },
    ],
    message: 'success',
  }

}
