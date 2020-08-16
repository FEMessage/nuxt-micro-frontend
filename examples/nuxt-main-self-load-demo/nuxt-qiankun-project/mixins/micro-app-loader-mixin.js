import {loadMicroApp, prefetchApps} from 'qiankun';

const appMap = new Map();

const defaultConfig = {singular: true};

async function getMicroApp(appConfig, configuration = {}) {
  const {name} = appConfig;

  if (appMap.has(name)) {
    const microApp = appMap.get(name);

    // 如果子应用已经存在 map 中，直接取出挂载
    return microApp.mountPromise.then(() => microApp.mount()).then(() => microApp);
  }

  const microApp = await loadMicroApp(appConfig, configuration);

  appMap.set(name, microApp);

  return microApp.mountPromise.then(() => microApp);
}

export const microAppLoaderMixin = {
  data() {
    return {
      __microApp: null,
      appLoading: false,
    };
  },
  async beforeDestroy() {
    await this.unmountCurrentMicroApp();
  },
  methods: {
    /**
     * 加载单个子应用
     * @param {*} appConfig
     * @param {*} configuration
     */
    async loadApp(appConfig, configuration = {}) {
      // 如果加载的是同一个子应用，则什么操作都不做.
      if (this.__microApp && this.__microApp === appMap.get(appConfig.name)) {
        return this.__microApp;
      }

      this.appLoading = true;

      await this.unmountCurrentMicroApp();

      try {
        this.__microApp = await getMicroApp(appConfig, Object.assign(defaultConfig, configuration));
      } catch (error) {
        console.error('loadApp error :', error);
      } finally {
        this.appLoading = false;
      }

      return this.__microApp;
    },
    /**
     * 卸载当前的微应用
     */
    async unmountCurrentMicroApp() {
      if (!this.__microApp) return Promise.resolve();

      const microApp = this.__microApp;

      this.__microApp = null;

      return microApp.mountPromise.then(() => microApp.unmount());
    },
    /**
     * 预加载子应用
     * @param {*} appConfigs
     */
    prefetchApps(appConfigs) {
      prefetchApps(appConfigs);
    },
  },
};
