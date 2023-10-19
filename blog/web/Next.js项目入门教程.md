---
slug: next js-Getting started tutorials
title: next js之入门教程
date: 2023-10-19
authors: wenhao
tags: [Web,Next js]
keywords: [Web,next js,WenHao,文浩,Marvin]
description: next js中入门教程
---


## 项目创建:

### 安装配置:

我们建议使用 `create-next-app`创建新的 Next.js 应用程序，它会自动为你设置所有内容。创建项目，请运行：

```
npx create-next-app@latest
# or
yarn create next-app

```
<!-- truncate -->


如果你希望使用 TypeScript 开发项目，可以通过 `--typescript` 参数创建 TypeScript 项目：

```
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript

```

安装完成后:

- 运行 `npm run dev` 或 `yarn dev` 来启动开发服务器，访问地址为 `http://localhost:3000`。
- 通过 `http://localhost:3000` 地址访问你的应用程序。
- 编辑 `pages/index.js` 文件并在浏览器中查看更新。

有关使用 `create-next-app` 的更多信息，请查看 [`create-next-app` 文档](https://www.nextjs.cn/docs/api-reference/create-next-app)。

### 手动安装:

为你的项目安装 `next`、`react` 和 `react-dom` ：

```
npm install next react react-dom
# or
yarn add next react react-dom

```

打开 `package.json` 文件并添加 `scripts` 配置段：

```
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}

```

这些脚本涉及开发应用程序的不同阶段：

- `dev` - 运行 [`next dev`](https://www.nextjs.cn/docs/api-reference/cli#development)，以开发模式启动 Next.js
- `build` - 运行 [`next build`](https://www.nextjs.cn/docs/api-reference/cli#build)，以构建用于生产环境的应用程序
- `start` - 运行 [`next start`](https://www.nextjs.cn/docs/api-reference/cli#production)，以启动 Next.js 生产环境服务器
- `lint` - 运行 [`next lint`](https://www.nextjs.cn/docs/api-reference/cli#lint)，以设置 Next.js 的内置 ESLint 配置

Next.js 是围绕着 [页面（pages）](https://www.nextjs.cn/docs/basic-features/pages) 的概念构造的。一个页面（page）就是一个从 `pages` 目录下的 `.js`、`.jsx`、`.ts` 或 `.tsx` 文件导出的 [React 组件](https://reactjs.org/docs/components-and-props.html)。

页面（page） 根据其文件名与路由关联。例如，`pages/about.js` 被映射到 `/about`。甚至可以在文件名中添加动态路由参数。

在你的项目中创建一个 `pages` 目录。

为 `./pages/index.js` 文件填充如下内容：

```
function HomePage() {
  return <div>Welcome to Next.js!</div>
}

export default HomePage

```

到目前为止，我们得到了：

- 自动编译和打包（利用 webpack 和 babel）
- [React 快速刷新](https://www.nextjs.cn/blog/next-9-4#fast-refresh)
- [`./pages/`](https://www.nextjs.cn/docs/basic-features/pages) 中的 [静态生成和服务器端渲染](https://www.nextjs.cn/docs/basic-features/data-fetching)
- [静态文件服务](https://www.nextjs.cn/docs/basic-features/static-file-serving)。`./public/` 被映射到 `/`

此外，任何 Next.js 应用程序从一开始就是可以投入到生产环境中的，请在我们的 [部署文档](https://www.nextjs.cn/docs/deployment) 中阅读更多内容。









Next.js的页面创建



Next.js的导航创建