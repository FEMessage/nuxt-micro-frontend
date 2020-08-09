const { resolve } = require('path')
const uniqueId = require('uniqid')
const isEmpty = require('lodash.isempty')
const { relativeTo } = require('@nuxt/utils')

// Because this module override the client.js copy from v2.11.0
// if nuxt official update client.js maybe some features won't work
// so enableVersion is a list of version which can use the same client.js
const enableVersion = ['2.11.0']

const checkVersion = (nuxtVersion = '', skip = false) => {
  return skip || enableVersion.includes(nuxtVersion)
}

const CORSHeaders = {
  'Access-Control-Allow-Origin': '*'
}

/**
 * Nuxt module for micro frontend using such as single-SPA or qiankun
 *
 * @param {Object} moduleOptions
 * @param {string} [moduleOptions.path = 'mfe.js'] - the MFE lifecycle hook file path relative to rootDir
 * @param {boolean} [moduleOptions.force = false] - skip version check and force to use this module
 * @param {boolean} [moduleOptions.unique = false] - create a unique name scope under window in umd library
 * @param {Object} [moduleOptions.output = webpack.output] - define your custom webpack output config
 * @param {object} [moduleOptions.headers = CORSHeaders] - develop environment allow CORS for qiankun fetch resource
 */
module.exports = function (moduleOptions) {
  const { rootDir, MFE, mode, buildDir } = this.options

  // MFE means micro frontend
  const options = ({
    ...MFE,
    ...moduleOptions
  })

  const usingMFE = !isEmpty(options) || MFE === true

  const { path = 'mfe.js', force = false, headers = {} } = options

  options.path = relativeTo(buildDir, path)

  const APP = require(resolve(rootDir, 'package.json'))

  // eslint-disable-next-line prefer-const
  let { name = uniqueId('nuxt'), dependencies: { nuxt: nuxtVersion } } = APP

  if (!usingMFE || mode !== 'spa' || !checkVersion(nuxtVersion, force)) {
    return
  }

  if (options.unique) {
    name = uniqueId(name)
  }

  // extend webpack config to output umd or user custom library
  this.extendBuild((config, { isDev }) => {
    config.output = Object.assign(config.output, {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
      ...(options.output || {})
    })
  })

  this.addTemplate({
    src: resolve(__dirname, 'client.js'),
    fileName: 'client.js',
    options
  })

  // set absolute resource for html entry to fetch sub application correctly
  this.nuxt.hook('listen', (server, { url = '' }) => {
    const { dev, build: { publicPath } } = this.options
    url = url.endsWith('/') ? url.slice(0, -1) : url
    if (dev) {
      this.options.build.publicPath = `${url}${publicPath}`
    }
  })

  // Access-Control-Allow-Origin for builded files
  const devMiddlewareHeaders = this.options.build.devMiddleware.headers || {}
  const fullHeaders = this.options.build.devMiddleware.headers = { ...CORSHeaders, ...headers, ...devMiddlewareHeaders }

  // Access-Control-Allow-Origin specify for HOST:PORT/index.html
  this.nuxt.hook('render:route', (url, result, context) => {
    for (const header in fullHeaders) {
      if (Object.prototype.hasOwnProperty.call(fullHeaders, header)) {
        context.res.setHeader(header, fullHeaders[header])
      }
    }
  })

  this.nuxt.hook('build:templates', ({ templatesFiles, templateVars, resolve }) => {
    templateVars = Object.assign(templateVars, { MFE: options })
  })
}

module.exports.meta = require('../package.json')
