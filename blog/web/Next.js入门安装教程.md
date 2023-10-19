---
slug: next js-install
title: next js之入门安装教程
date: 2023-10-19
authors: wenhao
tags: [Web,Next js]
keywords: [Web,next js,WenHao,文浩,Marvin]
description: next js中入门安装教程
---




### 自动安装

我们建议使用 create-next-app 来开始一个新的 Next.js 应用，它会自动为您设置好一切。要创建一个项目，请运行：

```bash
npx create-next-app@latest
```

安装过程中，您将看到以下提示：

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```
<!-- truncate -->


在提示后，create-next-app 将创建一个以您的项目名称命名的文件夹，并安装所需的依赖项。

需要注意的是：

Next.js 现在默认包含 TypeScript、ESLint 和 Tailwind CSS 配置。
您可以选择在项目的根目录中使用 src 目录来分离应用程序的代码和配置文件。

### 手动安装

要手动创建一个新的 Next.js 应用，请安装所需的包：

```bash
npm install next@latest react@latest react-dom@latest
```

打开你的 package.json 文件并添加以下脚本：

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

这些脚本对应于开发应用程序的不同阶段：

- dev：运行 next dev 以启动 Next.js 的开发模式。
- build：运行 next build 以构建应用程序以供生产使用。
- start：运行 next start 以启动 Next.js 的生产服务器。
- lint：运行 next lint 以设置 Next.js 的内置 ESLint 配置。

#### 创建目录

Next.js 使用文件系统路由，这意味着您的应用程序的路由是根据文件结构确定的。

#### app 目录

对于新应用程序，我们建议使用 App Router。这个路由器允许您使用 React 的最新特性，是基于社区反馈的 Pages Router 的演进。

创建一个 app/ 文件夹，然后添加一个 layout.tsx 和 page.tsx 文件。当用户访问您的应用程序的根目录（/）时，将渲染这些文件。

#### app 文件夹结构

在 app/layout.tsx 中创建一个根布局，包含所需HTML和body 标签：

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

最后，在 app/page.tsx 中创建一个首页，添加一些初始内容：

```tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

需要注意的是：如果您忘记创建 layout.tsx，Next.js 在运行开发服务器 `next dev` 时将自动创建此文件。

了解更多关于使用 App Router 的信息。

#### pages 目录（可选）

如果您更喜欢使用 Pages Router 而不是 App Router，可以在项目的根目录下创建一个 pages/ 目录。

然后，在 pages 文件夹中添加一个 index.tsx 文件。这将成为您的首页（/）：

```tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```

接下来，在 pages/ 中添加一个 _app.tsx 文件以定义全局布局。了解更多关于自定义 App 文件的信息。

```tsx
import type { AppProps } from 'next/app'
 
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

最后，在 pages/ 中添加一个 _document.tsx 文件以控制服务器的初始响应。了解更多关于自定义 Document 文件的信息。

```typescript
import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

了解更多关于使用 Pages Router 的信息。

需要注意的是：虽然在同一个项目中可以同时使用两个路由器，但 app 中的路由将优先于 pages。我们建议在新项目中只使用一个路由器，以避免混淆。

### public 目录（可选）

创建一个 public 文件夹来存储静态资源，如图像、字体等。public 目录中的文件可以通过基本 URL（/）来引用您的代码。

运行开发服务器
运行 `npm run dev` 来启动开发服务器。
访问 http://localhost:3000 查看您的应用程序。
编辑 app/layout.tsx（或 pages/index.tsx）文件并保存，以在浏览器中查看更新的结果。