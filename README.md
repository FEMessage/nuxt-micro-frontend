# Nuxt-Micro-Frontend

[![Build Status](https://badgen.net/travis/FEMessage/nuxt-micro-frontend/master)](https://travis-ci.com/FEMessage/nuxt-micro-frontend)
[![NPM Download](https://badgen.net/npm/dm/@femessage/nuxt-micro-frontend)](https://www.npmjs.com/package/@femessage/nuxt-micro-frontend)
[![NPM Version](https://badgen.net/npm/v/@femessage/nuxt-micro-frontend)](https://www.npmjs.com/package/@femessage/nuxt-micro-frontend)
[![NPM License](https://badgen.net/npm/license/@femessage/nuxt-micro-frontend)](https://github.com/FEMessage/nuxt-micro-frontend/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/nuxt-micro-frontend/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

Using frontend microservices with Nuxt, support [qiankun](https://qiankun.umijs.org/) now

[中文](./README-zh.md)

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@femessage/nuxt-micro-frontend` dependency to your project

```bash
yarn add @femessage/nuxt-micro-frontend -D 

# or npm install @femessage/nuxt-micro-frontend
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

[Documents](https://github.com/FEMessage/micro-nuxt/blob/master/lib/module.js)

> If want to set headers recommend to set `build.devMiddleware.headers`, see Nuxt API: The build Property > [devMiddleware](https://nuxtjs.org/api/configuration-build#devmiddleware)

**path**: the MFE lifecycle hook file path relative to rootDir

**force**: skip version check and force to use this module

**unique**: If use qiankun, sub application's package name should unique. Set unique to true can create a unique umd target.

## Support Micro Front-End Framework
- [x] [qiankun](https://github.com/umijs/qiankun)
- [ ] [single-SPA](https://github.com/single-spa/single-spa) waiting for test and verify

## LifeCycle hooks file example
[Qiankun](https://github.com/FEMessage/micro-nuxt/blob/master/example/mfe.js)

- add `mounted` and `beforeUnmount` hook to get vue instance

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) FEMessage
