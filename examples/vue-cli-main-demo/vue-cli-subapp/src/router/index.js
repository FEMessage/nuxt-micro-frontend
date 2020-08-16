import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const BASE = window.__POWERED_BY_QIANKUN__ ? "/vue" : "/";

const routes = [
  {
    path: `${BASE}`,
    name: "Home",
    component: Home,
  },
  {
    path: `${BASE}/about`,
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

export default routes;
