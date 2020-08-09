const { resolve } = require('path')

module.exports = {
  mode: 'spa',
  MFE: {
    path: 'mfe.js',
    force: true
  },
  // rootDir: resolve(__dirname, '../../'),
  // buildDir: resolve(__dirname, '.nuxt'),
  // srcDir: __dirname,
  render: {
    resourceHints: false
  },
  modules: [
    { handler: require('../../') }
  ]
}
