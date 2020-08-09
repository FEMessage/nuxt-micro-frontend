# Nuxt-Micro-Front-End

[![Build Status](https://badgen.net/travis/FEMessage/nuxt-micro-frontend/master)](https://travis-ci.com/FEMessage/nuxt-micro-frontend)
[![NPM Download](https://badgen.net/npm/dm/@femessage/nuxt-micro-frontend)](https://www.npmjs.com/package/@femessage/nuxt-micro-frontend)
[![NPM Version](https://badgen.net/npm/v/@femessage/nuxt-micro-frontend)](https://www.npmjs.com/package/@femessage/nuxt-micro-frontend)
[![NPM License](https://badgen.net/npm/license/@femessage/nuxt-micro-frontend)](https://github.com/FEMessage/nuxt-micro-frontend/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/FEMessage/nuxt-micro-frontend/pulls)
[![Automated Release Notes by gren](https://img.shields.io/badge/%F0%9F%A4%96-release%20notes-00B2EE.svg)](https://github-tools.github.io/github-release-notes/)

使用 Nuxt 实践微前端架构，现在已经支持 [qiankun](https://qiankun.umijs.org/)

[English](./README.md)

[📖 **发布日志**](./CHANGELOG.md)

## 安装

1. 添加 `@femessage/nuxt-micro-frontend` 依赖到你的项目中

```bash
yarn add @femessage/nuxt-micro-frontend -D 

# or npm install @femessage/nuxt-micro-frontend
```

2. 添加 `@femessage/nuxt-micro-frontend` 到 `nuxt.config.js` 的 `modules` 属性中

```js
{
  modules: [
    // 一般使用
    '@femessage/nuxt-micro-frontend',

    // 带上模块参数
    ['@femessage/nuxt-micro-frontend', { /* module options */ }]
  ]
}
```

## 模块参数

[文档](https://github.com/FEMessage/micro-nuxt/blob/master/lib/module.js)

> 推荐使用 `build.devMiddleware.headers` 属性来设置开发环境资源 http header, 可以查看 Nuxt API: The build Property > [devMiddleware](https://nuxtjs.org/api/configuration-build#devmiddleware)

**path**: 微前端生命周期函数定义文件，相对 rootDir 的路径

**force**: 强制使用模块功能，忽略 Nuxt 版本校验

**unique**: 由于 qiankun 需要一个唯一的包名区分多个子应用，如果懒得修改可以将这个属性设置为 `true`，这样会生成一个唯一的包名

**output**: 由于接入不同的生态体系，需要不同的打包格式，这里可以根据 [webpack output](https://webpack.js.org/configuration/output/) 提供的选项进行注入

## 支持的微前端框架
- [x] [qiankun](https://github.com/umijs/qiankun)
- [x] [single-SPA](https://github.com/single-spa/single-spa) demo 在 examples/single-spa-demo 下

## 微前端生命周期函数例子
[Qiankun](https://github.com/FEMessage/micro-nuxt/blob/master/examples/normal/mfe.js)

- 增加了 `mounted` 和 `beforeUnmount` 两个钩子方便操作 vue 实例

## 开发

1. 克隆此仓库
2. 安装依赖 `yarn install` 或者 `npm install`
3. 运行 `npm run dev` 启动开发服务

## License

[MIT License](./LICENSE)

Copyright (c) FEMessage
