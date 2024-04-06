---
slug: free-LobeHub
title: "LobeHub：超越智能AI聚合的新纪元！整合ChatGPT、Gemini Pro、Claude3、Mistral、LLaMA2等大模型，打开画图、联网、爬虫的全新可能性。"
date: 2024-04-03
authors: wenhao
tags: [AI, 开源项目, 科技]
keywords: [wenhao, free-gpt3.5,free-gpt3.5-api]
# image: /img/blog/vue-chrome-extension.png
# sticky: 6
---
![trump-LobeHub](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/trump-LobeHub.jpeg)

<!-- truncate -->

**一款免费开源的项目即可搞定：ChatGPT、Claude、Google Gemini、Mistral、LLaMA2等主流AI大模型的无缝切换使用！**



Lobe UI 是一个开源 UI 组件库，用于构建 AIGC Web 应用程序。

![image-20240404174619943](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240404174619943.png)

![image-20240404174549381](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240404174549381.png)



## 部署:

1.开源项目:【[Github](https://github.com/lobehub/lobe-chat)】

2.通过免费容器进行一键安装！也可以通过【Vulr】进行搭建获得更快的速度。



### 一、Vercel服务器部署



| Deploy with Vercel                                           | Deploy with Zeabur                                           | Deploy with Sealos                                           |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [![img](https://camo.githubusercontent.com/0d115430c1db17132964386282927e5e313543c7d868fc06bc9a7c65d7ec974e/68747470733a2f2f76657263656c2e636f6d2f627574746f6e)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flobehub%2Flobe-chat&env=OPENAI_API_KEY,ACCESS_CODE&envDescription=) | [![img](https://camo.githubusercontent.com/7bbd819d76b4e67c04fe4d8a0d9cc7220e691f3d2177f6e54f84689ba380184e/68747470733a2f2f7a65616275722e636f6d2f627574746f6e2e737667)](https://zeabur.com/templates/VZGGTI) | [![img](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dlobe-chat) |

- 安装好再获取你自己的 【[OpenAI API 密钥](https://platform.openai.com/api-keys)】
- 获取自己的Google Gemini API KEY 【[点击获取](https://aistudio.google.com/app/apikey)】



### 二、 Docker部署

[![img](https://camo.githubusercontent.com/7c3bafcf2ea6d169ec34d2f735ef84b8c7ea1451402c4f41f701294b5a330efb/68747470733a2f2f696d672e736869656c64732e696f2f646f636b65722f762f6c6f62656875622f6c6f62652d636861743f636f6c6f723d333639656666266c6162656c3d646f636b6572266c6162656c436f6c6f723d626c61636b266c6f676f3d646f636b6572266c6f676f436f6c6f723d7768697465267374796c653d666c61742d737175617265)](https://hub.docker.com/r/lobehub/lobe-chat) [![img](https://camo.githubusercontent.com/38d94b4b90467a5ffa59fa01b9a9fcd627e667da0a119afa3c7009f5c425e33e/68747470733a2f2f696d672e736869656c64732e696f2f646f636b65722f696d6167652d73697a652f6c6f62656875622f6c6f62652d636861743f636f6c6f723d333639656666266c6162656c436f6c6f723d626c61636b267374796c653d666c61742d737175617265)](https://hub.docker.com/r/lobehub/lobe-chat) [![img](https://camo.githubusercontent.com/0ab5339b42d77f1a9a4eb290cb7ce32e61a0fbf805a7a6488db12b4bee42effa/68747470733a2f2f696d672e736869656c64732e696f2f646f636b65722f70756c6c732f6c6f62656875622f6c6f62652d636861743f636f6c6f723d343563633131266c6162656c436f6c6f723d626c61636b267374796c653d666c61742d737175617265)](https://hub.docker.com/r/lobehub/lobe-chat)

**我们提供了一个Docker映像，用于在您自己的私人设备上部署LobeChat服务。使用以下命令启动LobeChat服务：**

```
$ docker run -d -p 3210:3210 \
  -e OPENAI_API_KEY=sk-xxxx \
  -e ACCESS_CODE=lobe66 \
  --name lobe-chat \
  lobehub/lobe-chat
```



**如果您需要通过代理使用OpenAI服务，您可以使用OPENAI_PROXY_URL环境变量配置代理地址：**

```
$ docker run -d -p 3210:3210 \
  -e OPENAI_API_KEY=sk-xxxx \
  -e OPENAI_PROXY_URL=https://api-proxy.com/v1 \
  -e ACCESS_CODE=lobe66 \
  --name lobe-chat \
  lobehub/lobe-chat
```



### 三、本地部署Local Development

```
$ git clone https://github.com/lobehub/lobe-chat.git
$ cd lobe-chat
$ pnpm install
$ pnpm dev
```


## 手残党必选:
### 1.在线使用地址：

- [免魔法使用地址](https://lobe-chat.wenhaofree.com/welcome)
  - 进入后，记得输入自己的OpenAI Key哈~
  - ![image-20240406212928819](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240406212928819.png)


  - **记得验证自己的key是否有效！**
  - ![image-20240406213239998](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240406213239998.png)


- 原文地址: https://wenhaofree.com/free-LobeHub



### 2.关于移动端同步：

1. **设置同步按钮操作：**

   ![image-20240406214913452](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240406214913452.png)

![image-20240406220533274](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240406220533274.png)

![image-20240406221650618](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240406221650618.png)

### 3.关于模型选择：

- **使用在线地址的模型，默认只有OpenAI的ChatGPT。 如果需要其他模型需要自行配置**
- ![image-20240406215336615](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240406215336615.png)



### 4. 关于修改密码：

![image-20240406220008590](https://cdn.wenhaofree.com/gh/wenhaofree/Image/blog/image-20240406220008590.png)
