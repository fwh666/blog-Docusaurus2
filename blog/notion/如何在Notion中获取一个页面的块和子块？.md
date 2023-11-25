---
slug: How-do-I-get-blocks-and-sub-blocks-of-a-page-in-Notion?
title: 如何在Notion中获取一个页面的块和子块？
date: 2023-11-24
authors: wenhao
tags: ['Notion', 'Default']
keywords: ['Default', 'Notion']
---
https://www.volcengine.com/theme/4241214-R-7-1 

在Notion中，可以通过Python的Notion  API 来获取页面的块和子块。首先需要安装Notion  API 的Python库： 
```plain text
pip install notion-client

```
在代码中引入notion_client库和相关模块，并设置访问 数据库 所需的token和datab as e的id： 
```plain text
from notion_client import Client

# 认证
notion = Client(auth="YOUR_API_KEY")

# 数据库ID
database_id = "DATABASE_ID"

```
接下来，使用notion.pages.get() 函数 来获取指定页面的块和子块： 
```plain text
# 获取页面信息
page = notion.pages.get(page_id="YOUR_PAGE_ID")

# 获取块和子块
block_ids = page.get("content")
for block_id in block_ids:
  block = notion.blocks.retrieve(block_id)
  print(block)

```
运行以上代码后，就可以打印出指定页面中的所有块和子块的信息。 
请注意，在代码中需要替换相应的YOUR_ API _KEY、DATAB AS E_ID和YOUR_PAGE_ID。 
免责声明 
本文内容通过AI工具匹配关键字智能整合而成，仅供参考，火山引擎不对内容的真实、准确或完整作任何形式的承诺。如有任何问题或意见，您可以通过联系 service@volcengine.com 进行反馈，火山引擎收到您的反馈后将及时答复和处理。 
展开更多 
## 开发者特惠

<!-- truncate -->

面向开发者的云福利中心，ECS9.9元起，域名1元起，助力开发者快速在云上构建应用 
ECS 9.9元起 
### 域名注册服务

com/cn热门域名1元起，实名认证即享 
￥1.00/首年起66.00/首年起 
新客专享限购1个 
立即购买 
### 云服务器共享型1核2G

超强性价比，适合个人、测试等场景使用 
￥9.90/月101.00/月 
新客专享限购1台 
立即购买 
### CDN国内流量包100G

同时抵扣两种流量消耗，加速分发更实惠 
￥2.00/年20.00/年 
新客专享限购1个 
立即购买 
### 如何在Notion中获取一个页面的块和子块？ -优选内容

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/d4b739fb-0c2c-484c-b937-65e002f80bbd/not-found.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T060347Z&X-Amz-Expires=3600&X-Amz-Signature=c4e3d9c660e235ce38749245a66f0f3b99344f7a0335f102344d4179c283e363&X-Amz-SignedHeaders=host&x-id=GetObject)
## 如何在Notion中获取一个页面的块和子块？ -相关内容

<!-- truncate -->

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/cbeff860-fc07-49bd-be12-71d923c3c679/tos_9612be7c201bf8352f658220da6c7644.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T060347Z&X-Amz-Expires=3600&X-Amz-Signature=4981ba28ab9d1504c2e998b1247015716b217f2da70851081c812609a9b25be9&X-Amz-SignedHeaders=host&x-id=GetObject)
