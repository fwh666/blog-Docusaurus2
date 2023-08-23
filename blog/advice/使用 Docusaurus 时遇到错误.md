---
slug: Docusaurus-error
title: 使用 Docusaurus 时遇到错误
date: 2023-08-01
authors: wenhao
tags: [Docusaurus]
keywords: [Docusaurus,WenHao,文浩,Marvin]
description: 使用 Docusaurus 时遇到错误
---

## 写在前面

最近想用笔记中的文章搭建一个网站，本来想直接一用一些常见的静态博客框架的，但后来发现笔记使用这些框架，并不能突出作为一个笔记站点的特点，因此，我找到了 [Docusaurus](https://www.docusaurus.cn/)。

这篇文章主要总结我在使用 Docusaurus 中所遇到的一些 error。



<!-- truncate -->

场景一：

```java
$ docusaurus build
[INFO] [zh-Hans] Creating an optimized production build...
i Compiling Client
i Compiling Server
√ Client: Compiled successfully in 17.53s
√ Server: Compiled successfully in 1.01m
[ERROR] Unable to build website for locale zh-Hans.
[ERROR] Error: Docusaurus found broken links!

Please check the pages of your site in the list below, and make sure you don't reference any path that does not exist.
Note: it's possible to ignore broken links with the 'onBrokenLinks' Docusaurus configuration, and let the build pass.

Exhaustive list of all broken links found:

- On source page path = /docs/Note/Technology/RevisionControl/Git/基础操作/首次添加远程库:
   -> linking to %5BGitHub%5D(https://github.com/) (resolved as: /docs/Note/Technology/RevisionControl/Git/基础操作/%5BGitHub%5D(https://github.com/))

    at reportMessage (C:\Users\Rainy\Desktop\my-website\node_modules\@docusaurus\utils\lib\jsUtils.js:88:19)

error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.


```

原因是 markdown 文件中的**链接引用的路径**或**特殊符号**所导致的错误。

### 解决方法

根据错误信息修改正确即可。





场景二：

```java
[ERROR] Docusaurus server-side rendering could not render static page with path ...
[ERROR] Docusaurus server-side rendering could not render static page with path ...
[ERROR] Docusaurus server-side rendering could not render static page with path ...


Error: Minified React error #62; visit https://reactjs.org/docs/error-decoder.html?invariant=62 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
...

[ERROR] Unable to build website for locale zh-Hans.

● Client █████████████████████████ cache (99%) shutdown IdleFileCachePlugin
 resolve build dependencies

● Server █████████████████████████ cache (99%) shutdown IdleFileCachePlugin
 resolve build dependencies

[ERROR] Error: Failed to compile with errors.
    at E:\Github\Note\node_modules\@docusaurus\core\lib\webpack\utils.js:180:24
    at E:\Github\Note\node_modules\webpack\lib\MultiCompiler.js:554:14
    at processQueueWorker (E:\Github\Note\node_modules\webpack\lib\MultiCompiler.js:491:6)
    at processTicksAndRejections (node:internal/process/task_queues:78:11)

```

原因是因为在 Docusaurus 中，由于所有 Markdown 文件都是使用 MDX 解析的，因此在文档中所有 HTML 语法都必须使用 JSX（React）语法。因此，如果需要对文档元素设置内联样式，那么需要遵循 JSX 语法。
