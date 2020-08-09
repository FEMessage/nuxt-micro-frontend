# Nuxt-Micro-Frontend
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Build Status](https://badgen.net/travis/FEMessage/nuxt-micro-frontend/master)](https://travis-ci.com/FEMessage/nuxt-micro-frontend)
[![NPM Download](https://badgen.net/npm/dm/@femessage/nuxt-micro-frontend)](https://www.npmjs.com/package/@femessage/nuxt-micro-frontend)
[![NPM Version](https://badgen.net/npm/v/@femessage/nuxt-micro-frontend)](https://www.npmjs.com/package/@femessage/nuxt-micro-frontend)
[![NPM License](https://badgen.net/npm/license/@femessage/nuxt-micro-frontend)](https://github.com/FEMessage/nuxt-micro-frontend/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/nuxt-micro-frontend/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

Using frontend microservices with Nuxt, support [qiankun](https://qiankun.umijs.org/) now

[中文](./README-zh.md)

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

[Documents](https://github.com/FEMessage/nuxt-micro-frontend/blob/dev/lib/module.js)

> If want to set headers recommend to set `build.devMiddleware.headers`, see Nuxt API: The build Property > [devMiddleware](https://nuxtjs.org/api/configuration-build#devmiddleware)

**path**: the MFE lifecycle hook file path relative to rootDir

**force**: skip version check and force to use this module

**unique**: If use qiankun, sub application's package name should unique. Set unique to true can create a unique umd target.

**output**: If use the other micro library, probably need to config the [webpack output](https://webpack.js.org/configuration/output/) libraryTarget.

## Support Micro Front-End Framework
- [x] [qiankun](https://github.com/umijs/qiankun)
- [x] [single-SPA](https://github.com/single-spa/single-spa) example in examples/single-spa-demo

## LifeCycle hooks file example
[Qiankun](https://github.com/FEMessage/micro-nuxt/blob/master/examples/normal/mfe.js)

- add `mounted` and `beforeUnmount` hook to get vue instance

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `cd examples/normal && npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) FEMessage

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://www.ccc1996.cn"><img src="https://avatars1.githubusercontent.com/u/20502762?v=4" width="100px;" alt=""/><br /><sub><b>cjf</b></sub></a><br /><a href="https://github.com/FEMessage/nuxt-micro-frontend/commits?author=cjfff" title="Code">💻</a> <a href="https://github.com/FEMessage/nuxt-micro-frontend/commits?author=cjfff" title="Documentation">📖</a> <a href="#blog-cjfff" title="Blogposts">📝</a></td>
    <td align="center"><a href="https://github.com/lianghx-319"><img src="https://avatars2.githubusercontent.com/u/27187946?v=4" width="100px;" alt=""/><br /><sub><b>Han</b></sub></a><br /><a href="https://github.com/FEMessage/nuxt-micro-frontend/commits?author=lianghx-319" title="Code">💻</a> <a href="#content-lianghx-319" title="Content">🖋</a> <a href="#infra-lianghx-319" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!