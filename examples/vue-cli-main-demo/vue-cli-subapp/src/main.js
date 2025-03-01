import "../public-path";
import { Button } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component(Button.name, Button);

let router = null;
let instance = null;

function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    routes,
  });

  router.$store = store;

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount(container ? container.querySelector("#app") : "#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("[vue] vue app bootstraped");
}

export async function mount(props) {
  console.log("[vue] props from main framework", props);
  const { sdk } = props;
  sdk && (Vue.prototype.$sdk = sdk);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = "";
  instance = null;
  router = null;
}
