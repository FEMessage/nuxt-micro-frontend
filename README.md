# Nuxt-Micro-Front-End

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Using front-end microservices with Nuxt, support qiankun now

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@femessage/nuxt-micro-frontend` dependency to your project

```bash
yarn add @femessage/nuxt-micro-frontend -D # or npm install micro-front-end
```

2. Add `@femessage/nuxt-micro-frontend` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@femessage/nuxt-micro-frontend',

    // With options
    ['@femessage/nuxt-micro-frontend', { /* module options */ }]
  ]
}
```

## Module Options

[Documents](https://github.com/lianghx-319/micro-nuxt/blob/master/lib/module.js)

**path**: the MFE lifecycle hook file path relative to rootDir

**force**: skip version check and force to use this module

**unique**: If use qiankun, sub application's package name should unique. Set unique to true can create a unique umd target.

## Support Micro Front-End Framework
- [x] [qiankun](https://github.com/umijs/qiankun)
- [ ] [single-SPA](https://github.com/single-spa/single-spa) waiting for test and verify

## LifeCycle hooks file example
[Qiankun](https://github.com/lianghx-319/micro-nuxt/blob/master/example/mfe.js)

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) FEMessage

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@femessage/nuxt-micro-frontend/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@femessage/nuxt-micro-frontend

[npm-downloads-src]: https://img.shields.io/npm/dt/@femessage/nuxt-micro-frontend.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@femessage/nuxt-micro-frontend

[license-src]: https://img.shields.io/npm/l/@femessage/nuxt-micro-frontend.svg?style=flat-square
[license-href]: https://npmjs.com/package/m@femessage/nuxt-micro-frontend
