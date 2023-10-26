---
id: ClashX 教程
slug: /ClashX_teach_Mac
title: ClashX 教程
date: 2020-08-30
authors: wenhao
tags: [ClashX, 科学上网]
keywords: [ClashX, 科学上网]
---


## [应用概述](?id=应用概述)

ClashX 是一个拥有 GUI 界面基于 Clash 可自定义规则的 macOS 代理应用。

支持 Shadowsocks 协议和其 simple-obfs 插件、v2ray-plugin 插件以及 VMess 协议和其 TCP、WebSocket 等传输方式。


## [应用下载](?id=应用下载)

以下是ClashX的下载地址。

- 官方下载：[ClashX](https://github.com/yichengchen/clashX/releases)
- 本站下载：[ClashX v1.96.2](https://go.runba.cyou/ssr-download/ClashX.dmg) 【最低系统要求 macOS 10.14，老版本请点官方下载找寻】
- M1/M2芯片：[ClashX Pro](https://install.appcenter.ms/users/clashx/apps/clashx-pro/distribution_groups/public)

下载ClashX的安装文件，文件格式为”dmg”格式，相当于一个光盘镜像文件。 下载的文件一般放置于用户的”下载”文件夹，使用 Finder找到下载文件。

## [安装启动](?id=安装启动)

双击ClashX.dmg，打开 ClashX安装程序

![clashX install 01](https://img.fuwenhao.club/blog/ClashX-1.png)

图：运行 ClashX 安装程序

此时，桌面上会生成一个虚拟光盘，并将下载的镜像文件装载到该光盘，并弹出一个窗口，按照提示将窗口左侧的”ClashX”图标拖拽到窗口右侧的”Applications”文件夹，即完成了 ClashX 的安装。

安装过程其实就相当于把 ClashX 的程序文件夹复制到 Mac 电脑中，放置在”Applicationes”目录是方便应用程序的访问和使用。

复制完成后，就可以在应用程序中看到 ClashX 应用图标，表示安装已经成功。我们就可以把虚拟光盘弹出，然后删除下载目录中的 dmg 文件。

第一次启动ClashX时，依次点击：打开、安装、输入密码，点击“安装帮助程序”，即可启动ClashX了（如下图）。

如果程序打不开，请参考：[打开来自身份不明开发者的 Mac App1](https://support.apple.com/zh-cn/guide/mac-help/mh40616/mac)或https://www.jianshu.com/p/3a5ceb412f15

![clashX install 01](https://leanoss.fuwenhao.club/FUvYucXdw3Fe5O3v4VDXWJYkNMa9KJI1/1.jpg)

![clashX install 01a](https://leanoss.fuwenhao.club/RSniHYLtsX9xw4J1nOnjaY8kawF9nW3w/1a.jpg)

## [获取订阅链接](?id=获取订阅链接)

此处将显示您的`订阅链接`，请注意为登录状态：

**订阅链接：**（如果不好用,试试将前缀更换为 `https://cdn.v2free.top`）：
`https://cdn.v2free.top/link/Qk3UVjnxWg8dyaey?clash=1`

这个 **订阅链接** 相当于你的账号密码，跟你的账号是绑定的，你应当把它当做密码一样妥善保管。

## [添加订阅链接](?id=添加订阅链接)

点击菜单栏中 ClashX 的图标，选择 配置 => 托管配置 => 管理，

![clashX install 02](https://leanoss.fuwenhao.club/F0QC537wuSrApWt4UQ501Dzx0kMmRBij/2.png)

然后点击 添加 ，粘贴上方 **[获取订阅链接](?id=获取订阅链接)** 中的拷贝的订阅链接（注意，粘贴后如果看不到url，可能是因为多了一个空行，按一次“Backspace删除键”即可）。

![clashX install 03](https://leanoss.fuwenhao.club/VuBN5hfBQIbV20mYyc8jx9rrnLCFI9Js/3.png)

## [更新订阅更新节点](?id=更新订阅更新节点)

如下图，进入此界面，点击 `更新` 按钮。

![clashX install 03a](https://leanoss.fuwenhao.club/YH1DVrBBOC6pa21kr4n1WKBkJlh34E8N/3a.png)

提示：机场节点信息可能会不定时更新，若出现大面积节点不可用现象，或者从免费用户升级为VIP用户，请手工更新订阅。

注意：充值完成后，请到套餐购买页面用充值的余额购买套餐后才能开始使用VIP！！！购买套餐后，不要再用免费节点，否则免费节点流量会计算到套餐里面；如果您之前已经使用了免费订阅链接，购买套餐后订阅链接不变，您只需要通过更新订阅来更新节点即可；更新节点后把APP中的节点跟网站 [节点列表](https://go.runba.cyou/user/node) 对照看看（对比节点名称，网站节点列表明确列出了免费节点和VIP付费节点），确保VIP节点已更新成功。

更新节点注意事项：如果开启系统代理，确保选择可用的节点，如果当前没有可用节点，先关闭系统代理再更新。如果 关闭系统代理 更新不了，请从用户中心或教程里重新拷贝新的订阅链接试试。

## [开启系统代理](?id=开启系统代理)

![clashX install 04](https://leanoss.fuwenhao.club/P2oTfttQoQLrFaKzjLwhC5NtaS6H6Hqa/4.png)

点击菜单栏中 ClashX 的图标，出站模式选择 **规则**，勾选下方的 **设置为系统代理** 。 这样就可以上外网了。 打开Safari浏览器或者Chrome浏览器，输入 https://www.google.com/ncr
如果打不开，把 **设置为系统代理** 这个选项反复开关几次,最后打勾上，然后再刷新谷歌页面。如果还不行，那么这种情况一般是系统有问题导致系统代理无法设置成功，或者有其它vpn或翻墙软件或Chrome浏览器代理插件等正在运行而造成冲突设置了错误的代理。那么可换个浏览器试试，或尝试下面的方法：

## [单独使用谷歌浏览器上外网](?id=单独使用谷歌浏览器上外网)

单独使用谷歌Chrome浏览器上外网（不需要打钩ClashX的“设置为系统代理”）
1.打开终端应用程序
2.输入以下命令启动 Google Chrome：

```markup
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --proxy-server=127.0.0.1:7890 https://www.google.com/ncr点击拷贝拷贝失败拷贝成功
```

# [关闭系统代理](?id=关闭系统代理)

取消勾选上图中的 **设置为系统代理** ，这样就是关闭系统代理，就不能上外网了。 退出程序前，请先 关闭系统代理。

## [分组策略和节点选择（国内外分流）](?id=分组策略和节点选择（国内外分流）)

![clashX install 04](https://leanoss.fuwenhao.club/P2oTfttQoQLrFaKzjLwhC5NtaS6H6Hqa/4.png)

以上图为例，当出站模式选择**规则模式** 时, ClashX遵循各个分组策略来选择节点，简单说明一下：如上图， 苹果服务 选的是 节点选择，然后 节点选择 选的是 自动选择，自动选择 选的是 v103 这个节点, 那么当你访问 苹果公司的网站或服务时，ClashX 就会选择 v103 这个节点；国内媒体 选的是 全球直连，全球直连 选的是 Direct ，Direct就是直连不经过代理的意思，那么当你访问国内媒体时就是直连不经过节点的；请举一反三，就不难理解啦。

## [全局模式（全局代理）](?id=全局模式（全局代理）)

![clashX install 08](https://leanoss.fuwenhao.club/2YQ5Y94jvj9haTuN9tE2trL3OdanHTuf/8.jpg)

出站模式 选择 全局，并要求必须在 GLOBAL 处 选节点，这种情况就是全局代理模式，所有的网站不分国内国外被封没封锁全部经过 GLOBAL 处 选择的节点，如果 GLOBAL 处 选了 全球直连 或者 Direct ，则无法打开被封锁的网站。

## [终端代理](?id=终端代理)

ClashX **[开启系统代理](?id=开启系统代理)** 后，浏览器可以顺利上外网，但终端、命令行、其它工具的流量可能并不会走代理。为了让终端程序上外网，需要在终端设置代理：

```markup
export http_proxy=http://127.0.0.1:7890
export https_proxy=http://127.0.0.1:7890点击拷贝拷贝失败拷贝成功
```

请注意，这些命令只对当前终端窗口有效，如果你想要在其它终端窗口或会话中使用代理，需要再次执行以上命令。注意 代理 不支持 ping，命令行测试外网可以使用 curl 。

也可考虑 [ClashX Pro](https://install.appcenter.ms/users/clashx/apps/clashx-pro/distribution_groups/public) 的增强模式，可自动支持终端及整个系统的程序上外网。注意本站提供的是ClashX，不是Pro版本，因 ClashX Pro 不开源。
![clashX install 09](https://leanoss.fuwenhao.club/uxeGclpa6LIPJ6TnFKqEiS2qR1xyc8Pg/9.jpg)
ClashX Pro 开启增强模式后，在终端ping任何域名，都会返回一个虚假ip（fake ip）。此时无需担心，这是ClashX Pro 的正常行为，目的就是为了接管系统流量。

## [注意事项](?id=注意事项)

Clash使用 HTTP HEAD 方法对测试网址（server_check_url）进行网页相应测试，以确认节点的可用性。数值在5000以内均为正常值，超出则显示为超时。数值大小和网速快慢没太大关系。[了解更多延迟测试](?id=关于节点的延时测试)

请不要修改 `~/.config/clash/config.yml` 中的端口配置，否则会导致应用异常。

## [局域网代理共享](?id=局域网代理共享)

1、在 mac 终端上使用 ifconfig 命令获取本地 IP 地址。

![clashX install 05](https://leanoss.fuwenhao.club/kh41dhgyelAoyQwQk982ffXyknY6cpBD/5.png)

2、打开 ClashX 控制台，在「设置」选项卡中打开「允许来自局域网的连接」，并获取 HTTP代理端口号（如果 HTTP代理端口为0，请使用混合代理端口）。

![clashX install 06](https://leanoss.fuwenhao.club/YE33C2hbvHyzTtLQvJwOyCj5JwCcbFWe/6.png)
![clashX install 06a](https://leanoss.fuwenhao.club/z9emTMTkr0z2IlRUQ5iQo1JlPINSUQ8t/6a.png)

## [代理排除列表](?id=代理排除列表)

安装好clashx之后，局域网网站打不开，需要代理配置忽略，但是mac没有找到可视化操作界面。

按照官方文档，操作如下：

- 在 ~/.config/clash/ 新建 proxyIgnoreList.plist文件
- 编辑文件，内容如下

```
<?xml version="1.0" encoding="UTF-8"?>  
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">  
<plist version="1.0">  
<array>  
    <string>192.168.0.0/16</string>  
    <string>10.0.0.0/8</string>  
    <string>172.16.0.0/12</string>  
    <string>127.0.0.1</string>  
    <string>localhost</string>  
    <string>*.local</string>  
    <string>*.crashlytics.com</string>  
    <string>my-custom-site.com</string>  
</array>  
</plist>  点击拷贝拷贝失败拷贝成功
```

- 在array最后追加自定义需要忽略的网址

编辑保存后，重启clashx 即可。

打开mac网络配置即可看到新加的配置
![clashX install 07](https://leanoss.fuwenhao.club/sB0zMPiJAdAaOpVzWmX2ch48lInrW6NR/7.png)

## 参考网址：
- [macOS – ClashX 使用教程](/docs/ClashX_teach_Mac)
- [Clash for Android教程](/docs/ClashX_teach_android)
- [Potatso Lite教程](/docs/ClashX_teach_ios)
- [Clash for Linux教程](/docs/ClashX_teach_linux)
- [V2rayN配置使用教程 for Windows](/docs/V2rayn-config)