---
id: docusaurus-deploy
slug: /docusaurus-deploy
title: 部署
authors: wenhao
---

我之前使用 [Vercel](https://vercel.com) 一把梭，无需任何配置，我只需要专注输出内容即可，这是我当时使用 Vercel 部署的文章 [Vercel部署个人博客](/vercel-deploy-blog)

但如今，`vercel.app` 被 DNS 污染，即被墙了，导致国内无法访问，虽然使用有自己的域名解析到 Vercel 上也可能访问，但被墙了，也就意味着国内 DNS 的解析速度必然有所下降，从而导致站点访问速度有所下降。

加上我想有更好的访客体验，于是我决定采用国内国外不同的解析方式来加快访问。

首先在线路类型中，分别针对境内和境外做了不同的记录值，境内使用国内的 CDN 服务，而境外就使用 Vercel。

![image-20221204161431863](https://img.kuizuo.cn/image-20221204161431863.png)

这样我国内访问就是访问国内的 CDN，访问国外访问就是 Vercel 的 CDN，这样针对不同的地区的网络都能有一个不错的访问速度，可以到 [Ping.cn:网站测速-ping检测](https://www.ping.cn/) 中测试测试你的站点访问速度如何。

以下是我的网站测速结果，也可通过访问 [fuwenhao.club在全国各地区网络速度测试情况-Ping.cn](https://www.ping.cn/http/fuwenhao.club) 在线查看

![image-20221204161146327](https://img.wenhaofree.com/blog/yumingjiance.png)

果然，花钱了就是不一样。

## 持续集成

国外的好理解，有 Vercel 能够自动拉取仓库代码，并自行构建部署，可国内呢？

这里我是借助了 [Github Action](https://github.com/marketplace) 来帮助我构建，构建记录可以在 [Actions · wenhao/blog](https://github.com/wenhao/blog/actions) 中查看.

Github Action 帮我构建好之后，并通过 ssh 连接我的服务器，将构建好的静态文件替换到我的 blog 存放的位置上。

一切都配置好了之后，我只需要将代码推送到 Github 仓库上，Github Action 与 Vercel 分别完成它们所该做的任务，等待片刻，再次访问站点，刚刚提交的代码就成功生效了。



## Github Action自动部署步骤：

### 创建SSH KEY

由于是使用 ssh 进行部署，需要让github能登录服务器，因此先在VPS服务器上给github actions创建一个ssh key：

```
cd ~/.ssh
ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa): /root/.ssh/github_action
...
```

将生成的公钥保存到 authorized_keys 文件中：

```
cat github_action.pub >> authorized_keys
```



### 配置Actions Secrets

由于部署过程会涉及一些隐私的变量，比如scp、ssh等需要的密钥信息等，可以将这些信息在代码仓库的 Settings/Secrets 中进行配置。如图：

<img src="https://user-images.githubusercontent.com/2876405/122633113-7606cc80-d109-11eb-986a-383b1f145b74.png"/>

在你的Golang应用的代码库页面进入Settings选择Secrets后，点击右上方的`New repository secret`创建Secret变量，Name填变量名，Value填变量值，配置后可以在Actions的配置yml文件中使用`${{ secrets.XXX }}`来使用。





## 创建 Github Actions workflows

你可以直接在代码目录新建配置文件`.github/workflows/deploy.yml`，也可以直接在github项目页面点击Actions页面创建并直接编辑提交，如图：

<img src="https://user-images.githubusercontent.com/2876405/122633541-bbc49480-d10b-11eb-9f8d-d3faace030a9.png"/>



yml文件内容设置如下：

```
name: ci

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Use Node.js 16
        uses: actions/setup-node@v3
        with:
          node-version: '16.x'

      - name: Build Project
        run: |
          yarn install
          yarn run build

      - name: SSH Deploy
        uses: easingthemes/ssh-deploy@v2.2.11
        env:
          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
          ARGS: '-avzr --delete'
          SOURCE: 'build'
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: 'root'
          TARGET: '/www/wwwroot/blog'
```








## 没有域名和服务器该怎么部署？

当然了上述只是我的配置方案，有许多伙伴可能没有自己的域名或者自己的服务器，就想着白嫖，那么这里目前我只能推荐 [Netlify](https://www.netlify.com/)。

我个人还是非常建议去弄一个属于自己的域名，通过 Vercel 的自定义域名就可以访问，并且无需像上述那样搞特别复杂的配置。由于自己的域名解析的不是大陆的服务器（Vercel的服务器就不是国内大陆的），所以也就无需备案。



## 参考链接：
- [ssh deployments](https://github.com/marketplace/actions/ssh-deploy)