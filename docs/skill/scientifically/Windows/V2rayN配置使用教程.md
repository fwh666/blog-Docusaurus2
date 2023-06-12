---
id: v2rayn配置使用
slug: /V2rayn-config
title: V2rayN配置使用教程
date: 2020-08-30
authors: wenhao
tags: [V2rayN, 科学上网]
keywords: [V2rayN, 科学上网]
---



<!-- truncate -->

### [应用概述](?id=应用概述)

V2rayN 是在 WIN 平台上的客户端软件，支持 VMess 协议。

V2rayN 要求系统安装有 [Microsoft .NET Framework](https://dotnet.microsoft.com/download/dotnet-framework/thank-you/net48-web-installer) 4.8 或更高版本。如果程序启动不了，请先安装Microsoft .NET Framework 。

### [特别提醒](?id=特别提醒)

![1](https://img.fuwenhao.club/blog/v2rayN4.png)
![1](https://img.fuwenhao.club/blog/v2rayN5.png)









如果出现以上错误，可能是国产杀毒软件杀掉了V2rayN里面的xray.exe，造成软件无法运行。下载程序前请卸载360杀毒软件，建议不要用任何360产品。也建议卸载任何国产杀毒软件、安全软件和APP，包括但不限于360安全卫生、360杀毒软件、腾讯管家、金山卫士、反诈中心、小米安全系统等等，它们不仅仅会起干扰作用使速度变慢，还可能造成软件无法正常使用或监控你的网络活动。推荐：[Windows自带defender杀毒](https://docs.microsoft.com/zh-cn/microsoft-365/security/defender-endpoint/microsoft-defender-antivirus-windows?view=o365-worldwide)

解决方法是从压缩包中重新把xray.exe解压出来放到V2rayn文件夹里，或者到下载一个 xray.exe

https://github.com/XTLS/Xray-core/releases/download/v1.7.5/Xray-windows-32.zip

程序包中必须有xray.exe才能工作，正常情况如下图：



![1](https://img.fuwenhao.club/blog/v2rayN6.jpg)

### [应用下载](?id=应用下载)

以下是各平台该应用的下载地址。 **下载链接：** [点击下载软件](https://go.runba.cyou/ssr-download/v2rayn.zip)

### [获取订阅](?id=获取订阅)

此处将显示您的V2free机场订阅链接，请注意为登录状态：

**订阅链接（如果不好用,试试将前缀更换为 `https://cdn.v2free.top`）：**

```
https://cdn.v2free.top/link/Qk3UVjnxWg8dyaey?sub=3点击拷贝拷贝失败拷贝成功
```

这个 **订阅链接** 相当于你的账号密码，跟你的账号是绑定的，你应当把它当做密码一样妥善保管。

### [订阅设置、添加订阅链接](?id=订阅设置、添加订阅链接)

解压 v2rayn.zip 到硬盘(注意：不要在压缩包里直接运行，解压到文件夹，然后进入文件夹里再运行)，启动v2rayn.exe 点击左上角的菜单 **订阅**，随后点击 **订阅设置**。

![1](https://img.fuwenhao.club/blog/v2rayN1.png)

点击添加，粘贴 **订阅链接**，打钩 **启用** ，点击 **确定**。

![2](https://img.fuwenhao.club/blog/v2rayN2.png)

### [更新订阅（更新节点）](?id=更新订阅（更新节点）)

（如下图）点击：订阅/更新订阅(不通过代理)

正常情况本站的订阅链接可以直连，所以一般点“更新订阅(不通过代理)”，如果你已经可以正常翻墙上外网，也可以点“更新订阅(通过代理)”

![2.5](https://go.runba.cyou/docs/SSPanel/Windows/V2RayN_files/v2rayN2.5.jpg)

**如果订阅链接无法更新节点,也可以这样，从用户中心 拷贝全部V2ray节点 URL(不是订阅链接)，然后在V2RayN主界面点右键，再点：从剪贴板导入批量URL(Ctrl+V)；然后 拷贝全部SS节点URL ，也 从剪贴板导入批量URL(Ctrl+V)。（付费才有SS节点）**

**如果更新订阅时底部日志窗口提示更新成功，或者从剪贴板导入批量URL(Ctrl+V) 提示成功，但却没有真正导入节点，那么一般是因为文件权限问题，请 鼠标右键 点击桌面右下角托盘区的V2rayn图标，点退出，然后以管理员权限启动V2rayn.exe**



### [开始使用](?id=开始使用)

![4](https://img.fuwenhao.club/blog/v2rayN4.jpg)

然后右键点击V2rayn托盘区【桌面右下角任务栏小图标区域】图标，点“系统代理/自动配置系统代理”(如下图), 这样IE、Edge、Chrome等使用系统代理的浏览器就可以翻出去了。



### [国内外分流](?id=国内外分流)

从本站下载的V2rayn软件，已经配置好了国内外分流，国内网站会直连不会走代理，如下图所示（设置/路由设置）：

![1](https://img.fuwenhao.club/blog/v2rayN1.jpg)

如果你还有个别的网站想直连，可以在这里添加域名，比如添加百度、163.com等如下(每行一个域名，以英文逗号结尾，最后一行不用逗号)： geosite:cn,
baidu.com,
163.com



### [全局代理](?id=全局代理)

在上图所示的路由设置中，把直连的Domain和IP全部删除(记得备份)，留空，就变成了全局代理模式。再如上图那样填回去，就变成了国内外分流模式。



### [V2rayN的三种代理选项](?id=v2rayn的三种代理选项)

“清除系统代理”: 禁止使用Windows系统的代理,不设置任何代理。

“自动配置系统代理”：设置使用V2rayn的代理。

“不改变系统代理”：保持Windows原有的代理设置，不做任何改变。