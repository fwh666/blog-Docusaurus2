---
slug: Notion-Based-Knowledge-Base-Architecture---Minority
title: 基于Notion的知识库架构 - 少数派
date: 2023-09-07
authors: wenhao
tags: ['Notion']
keywords: ['Default']
---
https://sspai.com/post/69099 

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/7b9a871c-7efd-448f-8700-41522ea208c6/a598a3c1e3acac8015115460db96a71e.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072119Z&X-Amz-Expires=3600&X-Amz-Signature=ad2bfd8aaacdbfca522bc13a9f350a2833cf5e5d859dca0d1e6daf5c227a6976&X-Amz-SignedHeaders=host&x-id=GetObject)
## 简介

<!-- truncate -->

完全掌握一个领域的知识和技能是非常不容易的一件事, 在学习新的知识的同时保证旧的知识不被遗忘对大多数人来说是不可能, 因此我们设想构建一个外部知识库来充当体外大脑以保证及时的回忆起部分知识. 一个简单有效的知识库构建方法是记笔记, 但是传统的笔记管理结构(树形结构)往往很难组织大量的知识点, 本文提出了多维视角,双向,标签化的树状笔记管理结构, 并依托 Notion 对此结构进行实践, 构建了一个智能系统知识库. 这个结构可以帮助我们高效快速的知识库. 
关键字: 块级笔记, 知识库, 多维视角, 双向链接, 标签化管理, 树状结构 
为了创建这个知识库, 我自己构建了一套知识库的管理结构, 这篇文章主要就是介绍这个知识库结构的, 其实和Notion没多大关系，内容有些啰嗦, 因为我想尽量把自己的想法写的清楚一些, 不喜欢读长文的可以直接跳到总结看一眼思路。有一点想特别提醒大家构建笔记系统的关键不是工具,而是结构, 有了合适的结构可以使用任何工具实现, 切勿被动的迎合某一款软件或工具, 关键是在一套理论的指导下结合工具进行实施, 达到目的. 
## I 什么是知识库

<!-- truncate -->

知识库（Knowledge base）是用于知识管理的一种特殊的数据库，以便于有关领域知识的采集、整理以及提取。知识库中的知识源于领域专家，它是求解问题所需领域知识的集合，包括基本事实、规则和其它有关信息。知识库是知识管理系统中的重要一环,知识管理可以简单的概括为下图中的四个步骤, 构建知识库(俗称"外脑"或者"维基")是非常有效的知识整理方式, 这是一个体系化知识的过程. 可以想象,知识库最主要的目的有两个: 
1. 高效的收集并整理学到的知识; 
2. 在遇到实际问题时准确的查找到所需知识; 
因此设计一个高效的知识库结构来满足上述需求是构建知识库要解决的两个主要问题. 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/56405e1c-d43b-40f2-9f12-f2155785e008/d2ecbbf9d132847f1c4e0f8c009857aa.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072119Z&X-Amz-Expires=3600&X-Amz-Signature=8cbcc8079265e9a3d1c685e79566a9a8366b662cc16c5a57768ef194ea1a76d7&X-Amz-SignedHeaders=host&x-id=GetObject)
知识库的构建方式多种多样,传统的方式是以笔记为基础单元进行构建,例如很多人在初中高中阶段都有使用笔记本来记录课堂上老师的经验, 通过手写笔记的方式将知识整理成册. 传统的知识库结构包括平铺笔记,树状结构,图结构等. 
- 平铺笔记通过按照时间或者逻辑顺序组织笔记. 其优点是逻辑简单,易于实施. 但是整体缺乏有效的组织结构, 知识点之间无法相互关联. 为了更快速的查找笔记, 可以对笔记进行标签化.
- 树结构通过对知识进行唯一维度的多层分类将笔记组织起来. 优点是结构简单, 构建容易, 查找容易. 缺点是知识点割裂, 视角单一,并且很难整理不同维度的知识.
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/46bf0667-40ba-4510-a42a-e27fc6184dbb/68265d61773fd6e688081b026c7605c6.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072119Z&X-Amz-Expires=3600&X-Amz-Signature=14d66ab95b9686d599d35bb35d8112c98ee78c37aba19676e38a19aa6dedac1c&X-Amz-SignedHeaders=host&x-id=GetObject)
- 图结构或者说知识图谱将每个知识库的基础单元看做一个节点, 然后通过双向链接将笔记联系起来. 其优点是可以有效的说明笔记间的联系, 展示出更符合直觉的知识结构. 缺点是在拥有大量笔记的情况下会使得图谱非常混乱, 不利于查找知识.
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/ba38d2ff-bbea-445a-b819-eb40c6d2443d/9b762891149810c76df572d7801bb7e2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072119Z&X-Amz-Expires=3600&X-Amz-Signature=b96fc88fb6c8e69fcde3155f8cf68ee298808bc6ba19836469b0b2a5b076945c&X-Amz-SignedHeaders=host&x-id=GetObject)
为了更高效的记录整理知识点, 作者通过结合上述传统知识库结构, 并通过从多个维度对领域知识进行分类,提出了一个多维的知识库结构. 
## II 多维知识结构

<!-- truncate -->

### 1. 
### 领域维度划分

分析知识库涵盖领域的不同的切入点, 即分类维度, 然后根据不同维度对整个知识体系进行分类, 分类的方式使用了树状结构, 例如在黑鲸智能系统知识库中我们将智能系统领域分为五个维度: 
- 理论知识: 按照理论学科类型分类、主要关注不同领域的理论知识，例如机器学习、控制理论等
- 工程能力：按照编程语言，或者技术分类，主要关注工程能力，例如C++、Python
- 算法分类：按照算法类型分类，主要用来规整算法，例如监督学习算法、无监督学习算法等
- 数学基础：用来归纳数学模型、和数学基本概念，例如线性代数，概率论等
- 应用领域：按照应用领域分类，可以方便的查找不同应用用到的理论核技术，例如自动驾驶、物联网等
对知识库进行多维度的划分相对与单一维度的知识库来说从不同视角切入问题,来寻找知识,可以有效的提高查询效率. 维度划分关注的是视角而非内容, 例如对于数学领域, '概率论'与'线性代数'并不是一个好的维度划分, 因为这两个概念更多的被看作两个相互独立的部分,是在同一个视角内的, 再例如理论知识中的'机器学习'和算法中的'机器学习算法'两部分, 前者是从逻辑理论上观察'机器学习', 后者主要关注'机器学习'算法的实现, 内容有重合但是视角是不同的, 可以相互关联但不在同一维度;. 不同维度有相当多的内容是重复的, 因为维度的区别是视角不同, 而观察的内容往往是相同的. 
再举一个例子: '自动驾驶'属于'应用领域'这个维度, 他可以关联到'控制理论'和'认知机器'这两个'理论知识'维度的分类上. 但'自动驾驶'这个分类可能还会拥有一些特异性的内容, 例如'交通系统的特点, 交通法规等'这些可能是在'理论知识'这个维度看不到的. 
### 对知识进行维度划分有什么意义呢?

- 首先,维度的划分可以帮我们确认某个领域知识的几个主要切入点, 这不是凭空创造, 一个领域的知识本来就是多维的,例如我们想要学习机器学习, 我们可以从理论知识开始学习各种概率模型, 也可以从工程的角度学习 Pytorch 等机器学习工具, 更可以两个维度同时进行, 不同的维度对知识的理解和掌握有一个互补的作用.
- 其次,多维度的划分可以更高效的帮助我们确定问题的范围, 例如下面两个问题:
- '如何设计一个自动驾驶系统?' 这个问题直接从应用的角度切入查找笔记要比整理各种理论高效一些.
- '如何理解 Pytorch 的某一个机器学习算法的 function?': 这个问题可以在算法的维度去查找笔记.
### 2. 标签化管理笔记

由于不同维度的内容基本相同, 因此我们可以给笔记打上标签, 然后可以通过标签在不同维度内调用来避免重复的编辑添加内容, 例如有如下两个路径: 
- '理论知识: 认知机器-路径规划'
- '应用领域: 人形机器人-路径规划'
上面两个路径都包含的 路径规划, 虽然视角不同但是连接到了同一个笔记. 
而且所有被标签化的笔记都在一个数据库内,在一个层级,可以统一管理. 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/be293984-42af-450d-9da0-03707aed2261/00192151eec60e4cf2985fa4f02d5b71.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072119Z&X-Amz-Expires=3600&X-Amz-Signature=22d18b14e2411e525034cd33603899e4901fdccda3791e14a78e8ed199380b80&X-Amz-SignedHeaders=host&x-id=GetObject)
然后为每个维度, 创建一个简单的树状结构来设置一个目录树, 建议不要超过 3 层. 在查询笔记时, 就可以通过这样一个形式简单的目录来查询笔记了. 
### 3. 知识块双向链接

为了提高知识点的精度, 我们将笔记再次划分为不同等级的知识块, 对知识块进行双向链接, 构建知识网络. 这个知识网络是隐性的, 也就是说我们表示知识库的结构中提上是一个树状的结构, 因为这样简单有效, 便于人类理解, 不会因为笔记太多而生成一张复杂的知识图谱, 但是在笔记内部还是有链接的, 这样也保证了可以快速的找到有相关性的两篇文章. 
### 通过上面提到的三个步骤我们就可以构建出一个用于管理笔记的标签化的笔记库, 一个多维的树状结构笔记目录, 和一个双向链接的知识网络.

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/95d7d99b-2a23-42f4-804a-99527a4f98a4/146a306de4c0acfce3f24d6b0d28d26d.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072119Z&X-Amz-Expires=3600&X-Amz-Signature=89d67844d6002643bf686bf471d12c424a42afbc73b010e9753b2a152ec9b356&X-Amz-SignedHeaders=host&x-id=GetObject)
## III 理论实践: 黑鲸知识库

<!-- truncate -->
## 

<!-- truncate -->

依托上述理论, 作者搭建了一个智能系统知识库: 黑鲸知识库. 在这个知识库里, 将智能系统知识笔记分为五个维度: 理论, 数学, 算法, 工程, 应用. 每个维度包含若干分类, 组成了知识库的目录系统, 这种树状结构的目录, 在查询知识时非常高效, 结构上符合逻辑也能从不同不同角度遍历笔记. 
在这看似简单的结构背后存在两个数据库: 资源数据库和笔记数据库, 通过多维目录的调动和管理实现了笔记的高效利用. 
黑鲸知识库使用块级笔记软件 Notion 构建, 内容为对外公开, 并且可以进行多人编辑. 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/37fe7c18-d37a-4002-9ba8-15bafc9c2915/7da07d9239d89bb1ec56ea2b921bce23.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072119Z&X-Amz-Expires=3600&X-Amz-Signature=963fec1e2b3a270a1066a2fa2cbb2c39c3e73d1a1c96a72f96b8893ac1e373b9&X-Amz-SignedHeaders=host&x-id=GetObject)
Notion – The all-in... 
A new tool that blends your e... 
wikiwhale.notion.site 
## IV 总结

<!-- truncate -->

在知识管理的流程中, 知识库的构建可以有效的帮助我们整理知识体系, 提高学习效率, 它相当于一个图书管理系统，而知识就如同这一本本图书，当有了套系统去管理它们以后,就可以高效的在需要的时候提取知识，形成了一个外脑的概念, 如此就可以把我们大脑不擅长的东西，全部扔给这个外脑中，让它帮助我们记忆，整理等等。本文提出的知识库结构结合了多种传统结构, 相较于简单的知识库系统,本知识库的输入和提取两方面做了很多优化. 在输入知识时使用了一个标签化的笔记管理体系, 通过标签系统自动分类笔记. 在查询知识时, 可以提供给用户一个简单的多维树形结构目录,可以比较直观快速的搜索到目标内容, 笔记间使用双向链接关联不同领域的知识点, 减少重复编写, 建立知识图谱. 
我的知识管理体系： 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/32e4a940-1081-4726-85ff-cdf90fcde8d4/a4a8af518009c0fde627de204c7203f1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072119Z&X-Amz-Expires=3600&X-Amz-Signature=72ad55b7cab17d31d49bb17d0b918aa1e40ee5cac10d409bf263ba28b123a8f0&X-Amz-SignedHeaders=host&x-id=GetObject)
## V 参考资料

<!-- truncate -->

https://zh.wikipedia.org/wiki/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86https://www.zhihu.com/question/23427617/answer/1445129874 



 > 在遵循创作的康庄大道上，若我的文字不慎踏入了他人的花园，请告之我，我将以最快的速度，携带着诚意和尊重，将它们从您的视野中撤去。
