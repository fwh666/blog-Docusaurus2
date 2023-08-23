---
id: react-config-proxy
slug: /react-config-proxy
title: React配置代理
date: 2021-09-15
authors: wenhao
tags: [React]
keywords: [React,文浩，WenHao]
---

## 配置代理
在开发 React 应用时，通常需要与后端 API 进行交互，为了避免出现跨域问题，可以通过配置代理来将 API 请求转发到本地服务器，从而解决跨域问题。以下是在 React 中配置代理的详细步骤：

1. 在项目根目录下创建一个名为 `setupProxy.js` 的文件。这个文件是用来配置代理的入口文件，需要安装 `http-proxy-middleware` 库来实现代理功能，可以使用以下命令进行安装：

   ```
   npm install http-proxy-middleware --save-dev
   ```

2. 在 `setupProxy.js` 文件中引入 `http-proxy-middleware` 库，并使用 `createProxyMiddleware` 方法创建一个代理对象。代理对象需要指定两个参数：target 和 changeOrigin。target 参数是需要代理的 API 地址，changeOrigin 参数是一个布尔值，表示是否改变请求头中的 Origin 字段。例如：

   ```js
   const {createProxyMiddleware} = require('http-proxy-middleware');

   module.exports = function(app) {
     app.use(
       '/api',
       createProxyMiddleware({
         target: 'http://localhost:3001',
         changeOrigin: true
       })
     );
   };
   ```

   在上面的代码中，我们创建了一个代理对象，将所有以 `/api` 开头的请求都转发到本地服务器的 `http://localhost:3001` 地址上，并将请求头中的 Origin 字段设置为代理地址。可以根据实际情况修改 target 和 changeOrigin 参数。

3. 在 `package.json` 文件中添加一个名为 `proxy` 的字段，将它的值设置为代理的目标地址。例如：

   ```json
   {
     "name": "my-app",
     "version": "0.1.0",
     "private": true,
     "proxy": "http://localhost:3001",
     "dependencies": {
       ...
     },
     "scripts": {
       ...
     }
   }
   ```

   在上面的代码中，我们将 `proxy` 字段的值设置为 `http://localhost:3001`，这样在开发过程中所有以 `/api` 开头的请求都会被转发到这个地址上。

4. 启动本地开发服务器，可以使用以下命令启动开发服务器：

   ```
   npm start
   ```

   然后在应用中发送的所有以 `/api` 开头的请求都会被代理到指定的地址上，从而解决跨域问题。

需要注意的是，配置代理只在开发环境中有效，在生产环境中需要使用其他方式来解决跨域问题。另外，代理中间件的配置方式可能因不同框架、版本而有所不同，以上是针对 Create React App 的配置方式。