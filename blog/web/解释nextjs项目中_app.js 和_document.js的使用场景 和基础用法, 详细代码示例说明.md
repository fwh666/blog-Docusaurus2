---
slug: next js-app-document
title: next js之_app&_document
date: 2023-10-19
authors: wenhao
tags: [Web,Next js]
keywords: [Web,next js,WenHao,文浩,Marvin]
description: next js中_app.js和_docment.js说明
---

## _app.js说明

在Next.js中，`_app.js`和`_document.js`是两个特殊的文件，它们允许你控制你的应用的外部行为和文档结构。

1. `_app.js`: 这个文件用于初始化所有页面。你可以在这个文件中导入全局CSS，或者添加全局的布局，状态管理等。例如：

<!-- truncate -->


```javascript
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```

在这个例子中，我们导入了一个全局的CSS文件，并且渲染了每个页面的组件。

## _document.js说明

2. `_document.js`: 这个文件用于修改服务器端渲染的文档的模板。你可以在这个文件中添加额外的HTML或body属性，或者添加额外的元数据。例如：

```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="A site for my cool project" />
          <link rel="stylesheet" href="/static/css/styles.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

在这个例子中，我们添加了一个`lang`属性到`<html>`标签，添加了一个`<meta>`标签和一个`<link>`标签到`<head>`，并且渲染了应用的主体和脚本。

请注意，`_app.js`和`_document.js`都只会在服务器端渲染一次，或者在客户端导航到不同的路由时渲染。