---
slug: next js-route
title: next js之页面路由
date: 2023-10-19
authors: wenhao
tags: [Web,Next js]
keywords: [Web,next js,WenHao,文浩,Marvin]
description: next js中页面路由
---

### 定义路由

我们建议在继续之前阅读路由基础知识页面。

本页面将指导您如何在 Next.js 应用程序中定义和组织路由。
<!-- truncate -->

### 创建路由

Next.js 使用基于文件系统的路由器，其中使用文件夹来定义路由。

每个文件夹表示一个路由段，将映射到一个 URL 段。要创建嵌套路由，可以将文件夹嵌套在彼此内部。

路由段对应路径段

特殊的 page.js 文件用于使路由段可公开访问。

### 定义路由

在此示例中，/dashboard/analytics URL 路径不可公开访问，因为它没有相应的 page.js 文件。该文件夹可以用于存储组件、样式表、图像或其他相关文件。

需要注意的是：特殊文件可以使用 .js、.jsx 或 .tsx 文件扩展名。

### 创建界面

使用特殊文件约定来为每个路由段创建界面。最常见的是使用 pages 来显示特定于路由的界面，使用 layouts 来显示跨多个路由共享的界面。

例如，要创建第一个页面，请在 app 目录中添加一个 page.js 文件并导出一个 React 组件：

app/page.tsx

```tsx
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```




参考网址:

https://www.chkui.com/article/react/nextjs_getting_starting

