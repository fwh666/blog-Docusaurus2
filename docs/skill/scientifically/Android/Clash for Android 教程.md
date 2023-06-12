---
id: Clash for Android
slug: /ClashX_teach_android
title: Clash for Android教程
date: 2020-08-30
authors: wenhao
tags: [Clash, 科学上网]
keywords: [Clash, 科学上网]
---


## [1. 简介](?id=_1-简介)

Clash for Android 是安卓系统上的一款综合翻墙软件，支持v2ray/vmess、SS协议。

**特性：**

- 可随时切换代理模式及节点
- 支持节点批量延迟测试
- 通过订阅链接一键配置
- 规则命中分析
- 日志输出

**系统要求：**

- Android 5.0+ (minimum)
- Android 7.0+ (recommend)
- `armeabi-v7a` , `arm64-v8a`, `x86` or `x86_64` Architecture

## [2. 下载安装](?id=_2-下载安装)

Clash for Android 为免费 app ，已于 2019.12.10 上架 Google Play 。

Clash for Android下载：[本站下载](https://go.runba.cyou/ssr-download/clash.apk) 、[谷歌商店](https://play.google.com/store/apps/details?id=com.github.kr328.clash)

安卓手机使用 Chrome 浏览器可能遇到无法下载的情况，可复制教程链接到其它浏览器尝试下载。

语言设置路径：`Settings` → `Interface` → `Language` → `Simplified Chinese`
`设置` 👉 `界面` 👉 `语言` 👉 `简体中文`

## [3. 快速上手](?id=_3-快速上手)

### [3.1 添加订阅链接 导入节点](?id=_31-添加订阅链接-导入节点)

此处将显示您的 **订阅链接** ，请注意为登录状态：

**订阅链接：**（如果不好用,试试将前缀更换为 `https://cdn.v2free.top`）：
`https://cdn.v2free.top/link/Qk3UVjnxWg8dyaey?clash=1`

这个 **订阅链接** 相当于你的账号密码，跟你的账号是绑定的，你应当把它当做密码一样妥善保管。

复制好了Clash订阅之后打开Clash for Android应用程序。请点击`配置`。
![IMG_7843.JPG](https://img.fuwenhao.club/blog/1072376875.jpg)
请在新弹出的窗口中点击`新配置`。
![IMG_7844.JPG](https://img.fuwenhao.club/blog/1118270140.jpg)
然后选择`从URL导入`。在对应地方填写订阅地址并保存。
![IMG_7845.JPG](https://img.fuwenhao.club/blog/2169466048.jpg)
![IMG_7847.JPG](https://img.fuwenhao.club/blog/3843008539.jpg)

常见的订阅错误报告，如果遇到以下提示：

```markup
Invalid Config:yaml:unmarshal errors: line 1:cannot unmarshal !!str ...点击拷贝拷贝失败拷贝成功
```

说明用错了订阅链接，请检查自己是不是复制错了或者多了空格之类的。

### [3.2 更新订阅 更新节点](?id=_32-更新订阅-更新节点)

![IMG_7849.JPG](https://img.fuwenhao.club/blog/932669651.jpg)
点击订阅名称右侧的三个点按钮，再点 “更新” 可以手动更新订阅更新节点。如图：
![IMG_7850.JPG](https://img.fuwenhao.club/blog/1168337143.jpg)
提示：机场节点信息可能会不定时更新，若出现大面积不可用现象，或者从免费用户升级为VIP用户，请手工更新订阅。

注意：充值完成后，请到套餐购买页面用充值的余额购买套餐后才能开始使用VIP！！！购买套餐后，不要再用免费节点，否则免费节点流量会计算到套餐里面；如果您之前已经使用了免费订阅链接，购买套餐后订阅链接不变，您只需要通过更新订阅来更新节点即可；更新节点后把APP中的节点跟网站 [节点列表](https://go.runba.cyou/user/node) 对照看看（对比节点名称，网站节点列表明确列出了免费节点和VIP付费节点），确保VIP节点已更新成功。

更新节点注意事项：如果开启VPN，确保选择可用的节点，如果当前没有可用节点，先关闭vpn再更新。

### [3.3 开启VPN](?id=_33-开启vpn)

返回首页。点击 `点此启动` ，第一次启动时会请求 VPN 权限，需要点击 `允许` 。
![IMG_7851.JPG](https://img.fuwenhao.club/blog/2409469823.jpg)
显示 `运行中` 即表示客户端已正常启动。
![IMG_7866.JPG](https://img.fuwenhao.club/blog/382223072.jpg)
开启VPN后，可以点击中间的 `代理` 选项卡，进入策略组面板。

在这里可以切换节点。直接点击你想要的节点即可进行切换。
![IMG_7852.JPG](https://img.fuwenhao.club/blog/2753500055.jpg)
点击⚡图标可以进行延迟测试，测试结果将显示在节点名称右侧。

注意：Clash使用外网网页进行真实测试，以确认节点的可用性。数值在5000以内均为正常值，超出则显示为超时。数值大小和网速快慢没太大关系。[了解更多延迟测试](https://go.runba.cyou/doc/#/faq?id=关于节点的延时测试)

### [3.4 分应用代理](?id=_34-分应用代理)

点击`设置` 👉 `网络`，最下方可以设置`分应用代理`。
点击`访问控制模式`可以切换黑白名单。自行理解即可。
点击`访问控制应用包列表`即可选择应用。
![IMG_7863.JPG](https://img.fuwenhao.club/blog/1278124387.jpg)

### [3.5 切换代理模式、分组策略和节点选择（国内外分流）以及 全局模式（全局代理）](?id=_35-切换代理模式、分组策略和节点选择（国内外分流）以及-全局模式（全局代理）)

如果是2.1.1之后的版本，代理模式设置路径为`设置` → `覆写` → `模式`，如图：

![IMG_4577.JPG](https://img.fuwenhao.club/blog/1118590743.jpg)

![IMG_4579.JPG](https://img.fuwenhao.club/blog/3855851416.jpg)

![IMG_4578.JPG](https://img.fuwenhao.club/blog/1753717891.jpg)

更多可参考：[分组策略和节点选择（国内外分流）以及 全局模式（全局代理）](https://go.runba.cyou/doc/#/macOS/ClashX?id=分组策略和节点选择（国内外分流）)

如果是2.0.18及之前的版本，代理模式设置路径为`代理` → `模式`，如图：
![IMG_7853.JPG](https://img.fuwenhao.club/blog/550116317.jpg)

![IMG_7854.JPG](https://img.fuwenhao.club/blog/838427780.jpg)

### [3.6 查看日志](?id=_36-查看日志)

点击`日志`面板，然后选择`Clash日志捕捉工具`即可抓取日志。默认是关闭日志的，以防内存溢出。
![IMG_7857.JPG](https://img.fuwenhao.club/blog/1404728428.jpg)
![IMG_7858.JPG](https://img.fuwenhao.club/blog/1836797657.jpg)
![IMG_7859.JPG](https://img.fuwenhao.club/blog/2336060890.jpg)

### [3.7 暗黑模式](?id=_37-暗黑模式)

Clash for Android现已适配暗黑模式。
入口：`设置` 👉 `界面` 👉 `暗黑模式`
开启后效果如图：
![IMG_7865.JPG](https://img.fuwenhao.club/blog/59156606.jpg)
![IMG_7866.JPG](https://img.fuwenhao.club/blog/382223072.jpg)

### [3.8 更多设置](?id=_38-更多设置)

点击右上角的三个点按钮，可以进入更多设置：

- 刷新订阅
- 更改代理模式
- 改变代理组（策略组）排序
- 改变代理（节点）排序
- 前缀合并（即节点名字前缀相同的进行归类显示）
  ![IMG_7853.JPG](https://img.fuwenhao.club/blog/550116317.jpg)
  ![IMG_7854.JPG](https://img.fuwenhao.club/blog/838427780.jpg)

### [3.9 其它设置](?id=_39-其它设置)

![IMG_7860.JPG](https://img.fuwenhao.club/blog/3789481771.jpg)
![IMG_7862.JPG](https://img.fuwenhao.club/blog/454476014.jpg)

## [4. 易用性设置](?id=_4-易用性设置)

大部分安卓ROM都会因为电池策略导致Clash for Andorid应用程序被杀掉导致无法连接网络。出现这种情况的特征是通知栏中VPN连接仍然存在，但实际上无法访问网络（有时也包括国内网络）。这是因为Clash for Android主程序和VPN框架是独立存在的，主程序被系统清理后会导致流量仍然通过VPN路由到本地，但此时没有应用程序来处理这些流量，导致无法上网。

### [4.1 始终开启VPN](?id=_41-始终开启vpn)

以RealmeX(Android 10)为例，点击`设定` 👉 `其他无线连接` 👉 `VPN`,打开`一律与VPN保持连线`。
![IMG_7868.JPG](https://img.fuwenhao.club/blog/1483525553.jpg)
![IMG_7869.JPG](https://img.fuwenhao.club/blog/2937852562.jpg)
![IMG_7872.JPG](https://img.fuwenhao.club/blog/2475363784.jpg)
![IMG_7873.JPG](https://img.fuwenhao.club/blog/1266218543.jpg)

### [4.2 省电策略/允许后台运行](?id=_42-省电策略允许后台运行)

长按Clash图标，选择`应用程式资讯`。
勾选`允许自动啓动`和`允许其他应用程式关联啓动`。
点击`耗电保护`,选择`允许背景执行`。
![IMG_7874.JPG](https://img.fuwenhao.club/blog/722228769.jpg)
![IMG_7875.JPG](https://img.fuwenhao.club/blog/1110606495.jpg)
![IMG_7876.JPG](https://img.fuwenhao.club/blog/74665642.jpg)

### [4.3 通知栏快速启动](?id=_43-通知栏快速启动)

![IMG_7878.JPG](https://img.fuwenhao.club/blog/1192405662.jpg)
![IMG_7879.JPG](https://img.fuwenhao.club/blog/2936823915.jpg)