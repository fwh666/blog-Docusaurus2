---
slug: next js-next.config.js
title: next js中next.config.js说明
date: 2023-10-19
authors: wenhao
tags: [Web,Next js]
keywords: [Web,next js,WenHao,文浩,Marvin]
description: next js中next.config.js说明
---


`next.config.js`是Next.js项目中的一个配置文件，它允许你对Next.js的默认配置进行自定义。以下是一个如何在`next.config.js`中配置开发环境和生产环境的示例：

<!-- truncate -->

```javascript
module.exports = {
  env: {
    // 默认的环境变量，可以在任何环境中使用
    CUSTOM_VAR: 'custom',
    // 只在开发环境中使用的环境变量
    ...(process.env.NODE_ENV === 'development' && {
      DEV_VAR: 'development',
    }),
    // 只在生产环境中使用的环境变量
    ...(process.env.NODE_ENV === 'production' && {
      PROD_VAR: 'production',
    }),
  },
};
```

在这个示例中，我们定义了三个环境变量：`CUSTOM_VAR`，`DEV_VAR`和`PROD_VAR`。

- `CUSTOM_VAR`是一个默认的环境变量，它在所有环境中都是可用的。
- `DEV_VAR`只在开发环境中可用，当`NODE_ENV`等于`development`时，它会被添加到环境变量中。
- `PROD_VAR`只在生产环境中可用，当`NODE_ENV`等于`production`时，它会被添加到环境变量中。

这样，你就可以根据当前的环境（开发或生产）来使用不同的环境变量了。

在你的Next.js应用中，你可以通过`process.env`来访问这些环境变量。例如：

```javascript
console.log(process.env.CUSTOM_VAR); // 输出: 'custom'
console.log(process.env.DEV_VAR); // 在开发环境中输出: 'development'
console.log(process.env.PROD_VAR); // 在生产环境中输出: 'production'
```

请注意，你需要重启你的Next.js应用来使新的环境变量生效。