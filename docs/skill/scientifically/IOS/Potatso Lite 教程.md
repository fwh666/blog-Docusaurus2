---
id: Potatso Lite teach
slug: /ClashX-teach
title: Potatso Lite教程
date: 2020-08-30
authors: wenhao
tags: [Potatso, 科学上网]
keywords: [Potatso, 科学上网]
---


## [1. 简介](?id=_1-简介)

Potatso Lite 是一款免费的iOS翻墙工具，功能简单，稳定性尚可，支持的代理协议有：Shadowsocks，适合新手入门使用。注意，本站只有付费SS节点，没有免费SS节点，免费用户需要使用[Shadowrocket](/#/iOS/Shadowrocket)等APP。

## [2. 下载](?id=_2-下载)

需要使用非中国大陆区AppleID下载。没有的话可以点击： [注册苹果美区 Apple ID 帐号并购买APP指南](/#/iOS/AppleID.html)

https://apps.apple.com/us/app/potatso-lite/id1239860606

## [3. 整理教程时的系统环境](?id=_3-整理教程时的系统环境)

iOS 14

Potatso Lite 2.5.0

文档中的某些内容可能会随软件版本迭代而失效。

## [4. 导入节点](?id=_4-导入节点)

### [4.1 订阅连接](?id=_41-订阅连接)

首次打开软件时，启动页会出现“添加代理”的选项。软件首页右上角也有“+”号，点击即可添加节点。我们可以看到Potatso Lite支持的导入方式有：扫描二维码、节点链接、订阅。

[![IMG_4605.jpg](https://img.fuwenhao.club/blog/2252186481.jpg)](/#/PotatsoLite_files/2252186481.jpg)
[![IMG_4592.jpg](https://img.fuwenhao.club/blog/1558299922.jpg)](/#/PotatsoLite_files/1558299922.jpg)

#### [添加订阅连接](?id=添加订阅连接)

此处将显示您的V2free机场订阅链接，请注意为登录状态：

**SS订阅链接（如果不好用,试试将前缀更换为 `https://cdn.v2free.top`）：**

```
https://cdn.v2free.top/link/Qk3UVjnxWg8dyaey?sub=2点击拷贝拷贝失败拷贝成功
```

这个 **订阅链接** 相当于你的账号密码，跟你的账号是绑定的，你应当把它当做密码一样妥善保管。

点击“添加代理”（或右上角+号），再点击“订阅”。然后在新的窗口里粘贴订阅链接并输入订阅名称（为了区分不同的订阅链接，可以随便起名字）。点击“完成”以保存设置。

[![IMG_4594.PNG](https://img.fuwenhao.club/blog/3732450977.jpeg)](/#/PotatsoLite_files/3732450977.png)

添加后 点击 完成 ，会从订阅链接加载节点，如图：

[![IMG_4595.PNG](https://img.fuwenhao.club/blog/2308989632.png)](/#/PotatsoLite_files/2308989632.png)

#### [更新订阅 更新节点](?id=更新订阅-更新节点)

有时节点提供商（机场）可能会修改节点配置信息，如出现大面积节点不可用现象，或者从免费用户升级为VIP用户，请手工更新订阅更新节点。
点击软件主界面右上角的“管理”，进入“管理代理”界面。

[![IMG_4597.PNG](https://img.fuwenhao.club/blog/2284973646.png)](/#/PotatsoLite_files/2284973646.png)

点开你添加的订阅，然后在右上角点击“完成”，即可更新。
也可以在添加订阅的时候就选择“自动更新”。

注意：充值完成后，请到套餐购买页面用充值的余额购买套餐后才能开始使用VIP！！！购买套餐后，不要再用免费节点，否则免费节点流量会计算到套餐里面；如果您之前已经使用了免费订阅链接，购买套餐后订阅链接不变，您只需要通过更新订阅来更新节点即可；更新节点后把APP中的节点跟网站 [节点列表](https://go.runba.cyou/user/node) 对照看看（对比节点名称，网站节点列表明确列出了免费节点和VIP付费节点），确保VIP节点已更新成功。

更新节点注意事项：如果开启VPN，确保选择可用的节点，如果当前没有可用节点，先关闭vpn再更新。

#### [4.2 节点链接](?id=_42-节点链接)

如果用订阅链接无法导入节点，请用此方法导入，从[V2free用户中心](https://go.runba.cyou/user)， `拷贝全部SS节点URL`， 注意不要拷贝错了，是SS节点URL，Potatso Lite不支持V2ray.

点击“添加代理”（或右上角+号），再点击“代理地址”。在新的窗口里粘贴节点链接（ss://或ssr://开头的那种）。

[![IMG_4601.PNG](https://img.fuwenhao.club/blog/2897544874.jpeg)](/#/PotatsoLite_files/2897544874.png)

当软件检测到已经复制好了节点链接，也会提示是否需要自动导入，如图：

[![IMG_4600.PNG](https://img.fuwenhao.club/blog/131924680.jpeg)](/#/PotatsoLite_files/131924680.png)

#### [4.3 扫描二维码](?id=_43-扫描二维码)

点击“添加代理”（或右上角+号），再点击“二维码”即可扫描SS节点二维码添加节点。

## [5. 其他设置](?id=_5-其他设置)

如果需要分流功能，可以点击软件右下角的“设置”，然后启用“智能路由”。

[![IMG_4599.PNG](https://img.fuwenhao.club/blog/2559756792.png)](/#/PotatsoLite_files/2559756792.png)

## [6. 启用代理](?id=_6-启用代理)

设置完毕后在软件主页选一个节点，然后点击右下角的圆形按钮即可开启代理。首次启动代理时软件会申请创建本地VPN隧道，请选择允许。