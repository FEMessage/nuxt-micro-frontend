import Router from 'vue-router'
import routes from './routes'

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions
    ? routerOptions
    : createDefaultRouter(ssrContext).options

  return new Router({
    ...options,
    routes: fixRoutes(options.routes),
  })
}

function fixRoutes() {
  // default routes that come from `pages/`
  return [].concat(routes)
}
