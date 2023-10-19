---
slug: next js-pages
title: next js之pages目录路由说明
date: 2023-10-19
authors: wenhao
tags: [Web,Next js]
keywords: [Web,next js,WenHao,文浩,Marvin]
description: next js之pages目录路由说明
---



Next.js使用一个名为`pages`的特殊目录。这个目录用于自动路由。每一个在`pages`目录下的`.js`、`.jsx`、`.ts`或`.tsx`文件都会自动成为一个可访问的路由。以下是一个示例：

```
pages/
├── index.js
├── about.js
├── dashboard.js
├── blog/
│   ├── index.js
│   ├── [slug].js
│   └── [id]/
│       └── index.js
└── user/
    ├── index.js
    └── [id].js
```
<!-- truncate -->


- `index.js`: 这是你的主页，可以通过`/`来访问。
- `about.js`: 这是关于页面，可以通过`/about`来访问。
- `dashboard.js`: 这是仪表盘页面，可以通过`/dashboard`来访问。
- `blog/index.js`: 这是博客列表页面，可以通过`/blog`来访问。
- `blog/[slug].js`: 这是博客文章页面，可以通过`/blog/:slug`来访问，其中`:slug`是文章的唯一标识符。
- `blog/[id]/index.js`: 这是博客文章详情页面，可以通过`/blog/:id`来访问，其中`:id`是文章的唯一ID。
- `user/index.js`: 这是用户列表页面，可以通过`/user`来访问。
- `user/[id].js`: 这是用户详情页面，可以通过`/user/:id`来访问，其中`:id`是用户的唯一ID。

在`[]`中的部分是动态路由参数。例如，`[slug].js`会匹配`/blog/hello-world`，其中`hello-world`是动态部分，可以在页面组件中通过`router.query.slug`来获取。

这种文件系统路由的方式使得路由的创建变得非常直观和简单，你只需要添加或删除文件，就可以轻松地创建或删除路由。



### 关于[...sulg].js用法



`[...slug].js`是Next.js中的一种特殊路由，被称为“捕获所有路由”。这种路由可以匹配一个或多个动态段，而不仅仅是一个。

例如，假设你的`pages`目录如下：

```
pages/
├── index.js
└── post/
    └── [...slug].js
```

在这种情况下，`[...slug].js`可以匹配以下路径：

- `/post/a`
- `/post/a/b`
- `/post/a/b/c`
- `/post/a/b/c/d`
- 等等

在每种情况下，`slug`参数都是一个数组，包含了所有的动态段。例如，对于路径`/post/a/b/c`，`slug`参数将是`['a', 'b', 'c']`。

你可以在你的页面组件中通过`router.query.slug`来获取这个数组。例如：

```javascript
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()

  console.log(router.query.slug) // 输出: ['a', 'b', 'c'] 对于路径 /post/a/b/c

  // ...
}
```

这种类型的路由在你需要处理嵌套路径（例如分类或多级导航）时非常有用。