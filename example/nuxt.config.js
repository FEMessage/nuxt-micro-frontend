const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  build: {
    devMiddleware: {
      // 这个 headers 是静态资源文件的路由，这里是 /_nuxt
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  },
  MFE: {
    force: true,
    path: 'example/mfe.js',
    devServer: {
      // 写自己服务的绝对路径，斜杠结尾，必填
      publicPath: '//localhost:3000/',
      // 这个 headers 会通过 addServerMiddleware 注入
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  },
  rootDir: resolve(__dirname, '..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../') }
  ]
}
