const { resolve } = require('path')
const isEmpty = require('lodash.isempty')

const checkVersion = (nuxtVersion = '', skip = false) => {
  const moduleVersion = require('../package.json').version
  return skip || nuxtVersion.includes(moduleVersion)
}

/**
 * Nuxt module for micro front end using such as singleSPA or qiankun
 *
 * @param {*} moduleOptions
 * @property {string} path the MFE lifecycle hook file path
 * @property {boolean} force skip version check and force to use this module
 */
module.exports = function (moduleOptions) {
  const { rootDir, MFE, mode } = this.options

  // MFE means micro front end
  const options = ({
    ...MFE,
    ...moduleOptions
  })

  const usingMFE = !isEmpty(options) || MFE === true

  const { path = 'mfe.js', force = false } = options

  options.path = resolve(rootDir, path)

  const APP = require(resolve(rootDir, 'package.json'))
  const { name = `nuxt-${Date.now()}`, dependencies: { nuxt: nuxtVersion } } = APP

  if (!usingMFE || mode !== 'spa' || !checkVersion(nuxtVersion, force)) {
    return
  }

  // extend webpack config to output umd files
  this.extendBuild((config, { isDev }) => {
    if (!isDev) {
      config.output = Object.assign(config.output, {
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${name}`
      })
    }
  })

  this.addTemplate({
    src: resolve(__dirname, 'client.js'),
    fileName: 'client.js',
    options
  })

  this.nuxt.hook('build:templates', ({ templatesFiles, templateVars, resolve }) => {
    templateVars = Object.assign(templateVars, { MFE: options })
  })
}

module.exports.meta = require('../package.json')
