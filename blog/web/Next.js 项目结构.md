---
slug: next js-docs
title: next js之目录结构说明
date: 2023-10-19
authors: wenhao
tags: [Web,Next js]
keywords: [Web,next js,WenHao,文浩,Marvin]
description:  next js之目录结构说明
---
# Next.js 项目结构

本页面提供 Next.js 项目的文件和文件夹结构概述。它涵盖了顶层文件和文件夹、配置文件以及应用程序和页面目录中的路由约定。

## 顶层文件夹

| 文件夹名   | 说明            |
| ------ | ------------- |
| app    | 应用程序路由        |
| pages  | 页面路由          |
| public | 静态资源文件夹       |
| src    | 可选的应用程序源代码文件夹 |
<!-- truncate -->

## 顶层文件

| 文件名                | 说明                                 |
| ------------------ | ---------------------------------- |
| Next.js            | Next.js 运行时文件                      |
| next.config.js     | Next.js 的配置文件                      |
| package.json       | 项目依赖和脚本                            |
| instrumentation.ts | OpenTelemetry 和 Instrumentation 文件 |
| middleware.ts      | Next.js 请求中间件                      |
| .env               | 环境变量                               |
| .env.local         | 本地环境变量                             |
| .env.production    | 生产环境变量                             |
| .env.development   | 开发环境变量                             |
| .eslintrc.json     | ESLint 的配置文件                       |
| .gitignore         | Git 忽略的文件和文件夹                      |
| next-env.d.ts      | Next.js 的 TypeScript 声明文件          |
| tsconfig.json      | TypeScript 的配置文件                   |
| jsconfig.json      | JavaScript 的配置文件                   |

## app 路由约定

### 路由文件

| 文件名          | 扩展名           | 说明       |
| ------------ | ------------- | -------- |
| layout       | .js .jsx .tsx | 布局       |
| page         | .js .jsx .tsx | 页面       |
| loading      | .js .jsx .tsx | 加载界面     |
| not-found    | .js .jsx .tsx | 未找到界面    |
| error        | .js .jsx .tsx | 错误界面     |
| global-error | .js .jsx .tsx | 全局错误界面   |
| route        | .js .ts       | API 端点   |
| template     | .js .jsx .tsx | 重新渲染的布局  |
| default      | .js .jsx .tsx | 并行路由回退页面 |

### 嵌套路由

- 使用文件夹表示路由片段

### 动态路由

- [folder] 表示动态路由片段
- [...folder] 表示匹配所有路由片段
- [[...folder]] 表示可选匹配所有路由片段

### 路由组和私有文件夹

- (folder) 表示路由组，不影响路由
- _folder 表示私有文件夹，不参与路由

### 并行和拦截路由

- @folder 表示命名插槽
- (.)folder 表示拦截同级路由
- (..)folder 表示拦截上一级路由
- (..)(..)folder 表示拦截上两级路由
- (...)folder 表示从根目录拦截

### 元数据文件约定

#### App 图标

- favicon.ico 表示网站图标文件
- icon.ico .jpg .jpeg .png .svg 表示应用程序图标文件
- icon.js .ts .tsx 表示生成的应用程序图标文件
- apple-icon.jpg .jpeg .png 表示苹果应用程序图标文件
- apple-icon.js .ts .tsx 表示生成的苹果应用程序图标文件

#### Open Graph 和 Twitter 图像

- opengraph-image.jpg .jpeg .png .gif 表示 Open Graph 图像文件
- opengraph-image.js .ts .tsx 表示生成的 Open Graph 图像文件
- twitter-image.jpg .jpeg .png .gif 表示 Twitter 图像文件
- twitter-image.js .ts .tsx 表示生成的 Twitter 图像文件

#### SEO

- sitemap.xml 表示网站地图文件
- sitemap.js .ts 表示生成的网站地图文件
- robots.txt 表示 Robots 文件
- robots.js .ts 表示生成的 Robots 文件

## pages 路由约定

### 特殊文件

- _app.js .jsx .tsx 表示自定义 App
- _document.js .jsx .tsx 表示自定义 Document
- _error.js .jsx .tsx 表示自定义错误页面
- 404.js .jsx .tsx 表示404错误页面
- 500.js .jsx .tsx 表示500错误页面

### 路由

- 使用文件夹和文件的命名约定来表示路由

以上是 Next.js 项目结构的概述。