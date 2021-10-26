import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { inject, excutePlugins, executeMiddlewares } from "@/utils";
import * as plugins from "@/plugins";
import middlewares from "@/middlewares";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

Vue.config.productionTip = false;

async function createApp() {
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });

  const context = {
    context: app,
    store,
    router,
    inject,
  };

  store.$router = router;

  router.beforeEach(executeMiddlewares(middlewares, context));

  await excutePlugins(plugins, context);

  app.$mount("#app");
}

createApp();
