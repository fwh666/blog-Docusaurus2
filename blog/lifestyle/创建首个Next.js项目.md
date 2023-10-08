---
slug: Next-js-first-project
title: 创建首个Next.js项目
date: 2023-10-08
authors: wenhao
tags: [Next.js]
keywords: [Next.js]
---

## 环境预备：

- [Node.js 12.22.0](https://nodejs.org/) 或更高版本
- MacOS、Windows (包括 WSL) 和 Linux 都被支持

## 项目创建：

### 自动安装配置：

<!-- truncate -->

- 创建命令： 

```shell
npx create-next-app@latest --typescript
# or
yarn create next-app --typescript

```

- 安装完成后:

  - 运行 `npm run dev` 或 `yarn dev` 来启动开发服务器，访问地址为 `http://localhost:3000`。
  - 通过 `http://localhost:3000` 地址访问你的应用程序。
  - 编辑 `pages/index.js` 文件并在浏览器中查看更新。

![image-20231008152808978](https://img.fuwenhao.club/blog/image-20231008152808978.png)



### 手动安装配置：

为你的项目安装 `next`、`react` 和 `react-dom` ：

```bash
npm install next react react-dom
# or
yarn add next react react-dom
```

打开 `package.json` 文件并添加 `scripts` 配置段：

```json
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

```jsx
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



### 服务启动：

```java
yarn dev
```

- 访问http://127.0.0.1:3000/ 得到首页内容

![image-20231008154536265](https://img.fuwenhao.club/blog/image-20231008154536265.png)