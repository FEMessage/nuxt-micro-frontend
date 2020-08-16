import Vue from "vue";
import store from "@/store";

export const inject = function(key, value) {
  if (!key) {
    throw new Error("inject(key, value) has no key provided");
  }
  if (value === undefined) {
    throw new Error("inject(key, value) has no value provided");
  }

  key = "$" + key;
  // Add into app
  // app[key] = value
  // Add into store
  store[key] = value;
  // Check if plugin not already installed
  const installKey = "__development_panel_" + key + "_installed__";
  if (Vue[installKey]) {
    return;
  }
  Vue[installKey] = true;
  // Call Vue.use() to install the plugin into vm
  Vue.use(() => {
    if (!Object.prototype.hasOwnProperty.call(Vue, key)) {
      Object.defineProperty(Vue.prototype, key, {
        get() {
          return value;
        },
      });
    }
  });
};

export const excutePlugins = async (
  plugins,
  { app, store, router, inject }
) => {
  for (const key in plugins) {
    const plugin = plugins[key];
    if (typeof plugin === "function") {
      try {
        console.time(`plugin ${key}`);

        await plugin({ app, store, router }, inject);

        console.timeEnd(`plugin ${key}`);
      } catch (error) {
        console.group(plugin.name);
        console.error(error);
        console.groupEnd(plugin.name);
      }
    }
  }
};

export const sleep = time => new Promise(resolve => setTimeout(resolve, time));

export const executeMiddlewares = (middlewares, context) => {
  return async (from, to, next) => {
    for (let i = 0; i < middlewares.length; i++) {
      const middleware = middlewares[i];
      try {
        await middleware({ ...context, route: from });
      } catch (error) {
        console.group(middleware.name);
        console.error(error);
        console.groupEnd(middleware.name);
      }
    }
    next();
  };
};
