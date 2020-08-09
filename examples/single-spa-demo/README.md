# mfe single-spa demo

## run

```shell
yarn && yarn install:all

yarn serve:all
```

## main project

it has two function `getManifest` and `runScript` to load the microfrontend lifecycle in src/utils.js

## nuxt-subapp

### options

in nuxt.config.js MFE options like that

```js
  MFE: {
    force: true,
    output: {
        library: `nuxt-subapp-app`,
        libraryTarget: 'window',
    }
  }
```

use the libraryTarget window, we can access window['nuxt-subapp-app'] to get the microfrontend lifecycle


### build manifest.json

and i build manifest.json for the nuxt project, it can help main project to get the entry lifecycle

```js
const StatsPlugin = require('stats-webpack-plugin')

export default {
    build: {
        extend(config) {
            config.plugins.push(new StatsPlugin('manifest.json', {
                chunkModules: false,
                entrypoints: true,
                source: false,
                chunks: false,
                modules: false,
                assets: false,
                children: false,
                exclude: [/node_modules/]
            }))
        }
    }
}
```