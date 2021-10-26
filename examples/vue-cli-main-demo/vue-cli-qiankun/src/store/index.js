import Vue from "vue";
import Vuex from "vuex";
import TYPES from "./types";
import { getMenus } from "./mock";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      username: "cjfff",
      organization: "femessage",
    },
    apps: [],
  },
  mutations: {
    [TYPES.INIT_APPS](state, apps) {
      state.apps = apps;
    },
    [TYPES.INIT_MENUS](state, menus) {
      state.menus = menus;
    },
  },
  actions: {
    async [TYPES.INIT_APPS]({ commit }) {
      const { payload } = await getMenus();

      const menus = payload.map(item => ({
        name: item.name,
        path: `${item.activeRule}`,
      }));

      const apps = payload.map(item => ({
        ...item,
        activeRule: `#${item.activeRule}`,
        container: "#sub-application",
      }));

      commit(TYPES.INIT_APPS, apps);
      commit(TYPES.INIT_MENUS, menus);

      return { apps, menus };
    },
  },
  modules: {},
});
