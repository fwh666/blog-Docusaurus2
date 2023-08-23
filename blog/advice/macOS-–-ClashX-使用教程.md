---
slug: clashX-teach
title: macOS – ClashX 使用教程
date: 2023-07-01
authors: wenhao
tags: [ClashX]
keywords: [ClashX,WenHao,文浩,Marvin]
description: ClashX教程
---

## 简介

Clash是一个使用Go语言编写的，基于规则跨平台的代理软件核心程序。[ClashX](https://uzbox.com/tag/clashx)是运行在[macOS](https://uzbox.com/tag/macos)上的一款科学上网工具。ClashX是基于Mac规则的代理，适用于Clash。ClashX的特征，支持HTTP/HTTPS和SOCKS协议；支持GeoIP规则；支持SS和[V2Ray](https://uzbox.com/tag/v2ray)协议。

<!-- truncate -->

特色：

- 可随时切换代理模式及节点
- 支持节点批量延迟测试
- 通过托管链接一键配置
- 规则命中分析
- 日志输出

系统要求：macOS 10.5 及以上
设备要求：MacBook / iMac / Mac Pro

## 下载安装

ClashX使项目发布：https://github.com/yichengchen/clashX/releases

下载后运行 dmg 文件以安装。

## 快速上手

请打开 ClashX 软件。

首次使用 ClashX 时，macOS 会提醒你此应用来自未知开发者，请允许打开此应用。
ClashX 首次运行会提示是否安装帮助程序（Helper）。此帮助程序用于设置系统代理，否则每次你通过 ClashX 变更系统系统状态（打开或关闭）时都需要输入密码，请点击 “Install”，之后 macOS 会提示输入用户密码。

![macOS - ClashX 使用教程](https://img.fuwenhao.club/blog/1611274239.jpg)

请在官网用户中心快速导入区域点击`SS 协议`，然后复制 Clash 订阅链接。

启动 ClashX，点击状态栏中的 ClashX 图标，依次选择「配置」、「托管配置」、「管理」，在弹出的界面点击添加订阅。

![macOS - ClashX 使用教程](https://img.fuwenhao.club/blog/1611274240.jpg)

![macOS - ClashX 使用教程](https://img.fuwenhao.club/blog/1611274241.jpg)

![macOS - ClashX 使用教程](https://img.fuwenhao.club/blog/1611274242.jpg)

若干秒后将在软件里看到刚刚添加的配置文件。

![macOS - ClashX 使用教程](https://img.fuwenhao.club/blog/1611274243.jpg)

点击 ClashX 状态栏图标，将「出站模式」选为「规则判断」，在「Proxy」或「Gloabal」策略组中可以选择自己喜欢的线路，然后点击「设置为系统代理」即可开始使用。

注：「Proxy」策略组是用于访问国际互联网的默认策略，一般情况下，所有国际网络的访问都通过该策略组中选择的节点进行连接。

![macOS - ClashX 使用教程](https://img.fuwenhao.club/blog/1611274244.png)

![macOS - ClashX 使用教程](https://img.fuwenhao.club/blog/1611274245.jpg)

![macOS - ClashX 使用教程](https://uzbox.com/wp-content/uploads/2021/01/1611274246.jpg)

此时您已可以自由地连接国际互联网。

## 更多

对于策略组的简单解释：

### 策略组的特性：

- 可以包含节点或其他策略组
- 具有多种不同的策略类型
- 服务于规则

### 不同策略组的作用：

Global (或Proxy，视配置文件具体情况而定)：主要规则代理分组，需手动选定一个你要使用的节点作为默认的节点。无其它修改的话，所有国际网络的访问都通过该策略组中选择的节点进行连接。

Netflix：指Netflix流媒体的分组，如选择香港节点，则显示港区内容。其它地区的同理。

Spotify：指Spotify流媒体的分组，仅用于加速访问。Spotify执行锁区政策，根据账号注册时所在地进行内容展示，更换节点并不能显示其它地区的版权内容。

YouTube：指YouTube流媒体的分组，使用不同的线路将展示不同地区的特色内容。

Telegram：指Telegram（电报）的分组，国内手机号注册的用户选择新加坡线路也许可以加速（注意：是也许。因为+86号段注册的电报用户数据都在新加坡数据中心）。

China：访问中国大陆网站所用的策略。大陆用户请选择 DIRECT （直接连接）；海外用户请选择回国线路。

Auto：软件每隔一段时间会自动进行测试并排序，自动评选出延迟最低的节点，当其它策略组里选择了 auto 策略，那么效果就是该策略组将每隔一段时间自动切换到延迟最低的线路。
（如果你有登陆脸书、IG等社交媒体，不建议使用该策略，以免由于IP变动造成风控，甚至封号。）

fallback：可用性策略。与故障转移类似，按照节点顺序选择第一个可用节点。

## Mac下配置国内直接网站

- 打开配置-配置文件件，找到正在使用的配置代理文件
- 打开配置文件，再rules中添加国内域名直链配置，选择国内媒体
````shell
rules:
 - DOMAIN-SUFFIX,local,🎯 全球直连
 - IP-CIDR,192.168.0.0/16,🎯 全球直连,no-resolve
 - IP-CIDR,10.0.0.0/8,🎯 全球直连,no-resolve
 - DOMAIN-SUFFIX,xiaohongshu.com,🌏 国内媒体
 - DOMAIN-SUFFIX,xhscdn.com,🌏 国内媒体

````



## 参考网址：

- [Clash for Windows](https://docs.cfw.lbyczf.com/)