---
slug: How-to-use-lemonsqueezy---Nuggets
title: 境外收付工具lemonsqueezy使用指南 - 掘金
date: 2023-09-07
authors: wenhao
tags: ['Lemons']
keywords: ['Default']
---
https://juejin.cn/post/7218916901593415736 

## 为什么申请lemonsqueezy

<!-- truncate -->

💡 Tips：作为一个开发者可能涉及到软件产品出海，最终会涉及到境外收款的问题，目前主流的收款方式有Paypal、Stripe、 
Paddle、lemonsqueezy 。以下是几个收款工具的区别。因为目前lemonsqueezy的审核还比较宽松，后续我们以lemonsqueezy为例展开介绍。 
- 费率：每个服务的费率不同，可能会根据您的业务和交易量而有所变化。 PayPay的佣金是2.9%+0.30美元，Stripe的费率为2.9% + 30美分，Paddle的佣金是1.5% + 20p，LemonSqueezy收取5%-7%的佣金。
- 支持的支付方式：每个境外收款服务支持的支付方式也不同。PayPal和Stripe都支持信用卡、借记卡、银行转账、PayPal余额等多种支付方式，而Paddle只支持信用卡和PayPal付款，而LemonSqueezy只接受信用卡付款。
- 支持的国家和货币：在外国交易收款方面，PayPal和Stripe可能是其中覆盖最多国家和货币的服务之一，支持多种货币和语言，而Paddle和LemonSqueezy的覆盖范围相对较小，但也支持多种货币和语言。
- 安全性：每个服务的安全性也不同。 PayPal由于其为金融交易提供保护，目前可能是最受欢迎的境外收款服务之一。 Stripe和Paddle也提供保障，而LemonSqueezy则缺乏顶级安全标准。
- 客户服务和支持：每个服务的客户服务和支持体系也可能会有所不同。有些服务可能提供24/7支持，而其他服务可能有较少的客服人员，只在工作日提供帮助。
## lemonsqueezy页面功能

<!-- truncate -->

💡 Tips：Home、Store、Email、Settings、Design、Setup，目前含有这些页面。 
### Store(商店设置，一般情况下一个账号可以设置多少商店)

![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/c73441c2-9122-4c65-9edb-34b20a5b31fe/125b584cd21c45c493065c7cbc59ef0atplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=2bed88e4a080b3bd7a8382d23ecb2e83ff47316e36122edf3bc6c8d24cb55b9b&X-Amz-SignedHeaders=host&x-id=GetObject)
商店里面可以建立多款产品(Products)、每个产品的购买可以生成对应的License，后续包括产品订单(Orders)、订阅(Subscriptions)、客户(Customers)、折扣(Discounts)。这里面最重要的是产品的建立(Products). 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/80770456-4c83-46fd-b94f-64a534e45a25/327c4d282b7346d1ba4f472b6d3e2878tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=d8b7824b0f9f93e31b181378d79bd39d3d66e49fdc1de3e62352729c54261b5b&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/5ba9a9fb-579d-48cc-b8af-6553c19ac7b4/f9f0f330e9e24175b9851e51cb4a538ctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=5ba0ea80854777b6912541e9f8def62f555f060175991486b4beef989606b851&X-Amz-SignedHeaders=host&x-id=GetObject)
设定产品的名称、产品描述、产品的宣传视频、产品宣传图片。 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/d2295612-a0df-4383-8330-adddd01db479/41a0fb4aed7a427a99bfa7a0e369c724tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=dc01ff0a404c4faa15906059b9d244ed518d4c22119cce5a488f57dbbc669987&X-Amz-SignedHeaders=host&x-id=GetObject)
针对产品的某一个定价，可以设置价格(单词付费--非订阅、按订阅付费、免费、由用户定价)，设定价格及收费周期，到期系统会自动提醒用户续费。 
还可以设定在订阅之前用户是否能够免费试用的期限、每一次的订阅周期、每一次订阅是否生成License（系统会自动将Lisence发送到用户的注册邮箱）、每个License可以被激活的次数（限制License被无限激活） 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/f53ec56a-99e5-4835-b1ae-ea89581dfd8d/d2fbf6b3683d44b78730c8d65a7a0644tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=0acc1b40ac4b9f4d0754e34624945a822508b48defddd9c059f5ba0245fe8f45&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/68178c95-2e4a-4a90-a00e-4117a11ff946/1c355e4496d74ae295332ba934f3316ctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=3b55e703b505840408eb1461953b718f60ef8f7f06b3465023fb4ce5d0469e5a&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/d71d256e-8df3-456e-a7c8-2ec7756f84e3/81c596da36ab4ce1910febb97e8e1bbftplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=a467c3ca5ca79ae50bece12c7fb25abc6bfc9611c4704af9a17d5819aa203c8f&X-Amz-SignedHeaders=host&x-id=GetObject)
可以设置用户邮件收到账单时候看到的邮件信息，里面有你设定的感谢语，按钮的名称，点击按钮要调整的地址（可以把license放入这个回调地址中，跳转后可以直接拿掉这个license进行后续处理） 
### Test Mode

💡 Tips：目前系统有测试模式和生产模式，一般先在测试模式下验证完所有的商品配置，再启用生产模式。目前支持Cpoy to Live Mode,一键将测试模式下的配置拷贝到生产模式。目前我们所有的操作都是在测试模式下。 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/58c9efa0-076e-4439-a8c6-5ed0ecaa845b/60778e8feb36407f8364f5759a68a012tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=6c27fc954dc12e64463a22e513ae26f1f59f7f452da0601feaf317eb2804ae5a&X-Amz-SignedHeaders=host&x-id=GetObject)
选择订阅的种类，并填入邮箱，后续License会发送到该邮箱 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/205d9a0e-7d15-41bf-a3f0-8385d6eb6740/fedb3f89776f445387c8ad38ac65e585tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=14f12a863a5e5f68efb39c904dfbd8dfac136dff91cc6e8a788d98c298d07167&X-Amz-SignedHeaders=host&x-id=GetObject)
填入相应的卡号和邮编等信息进行支付 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/107bd450-ba4c-4da3-9098-eb963ecb054c/9cf5659939404c509ac43d95038bb97btplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=302fc4f08f4a2c86fe30f8d2c65c466e03584a38fea272da76109090df97ffea&X-Amz-SignedHeaders=host&x-id=GetObject)
支付成功后会有相应的提示，并收到邮件确认及License 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/ec51fea0-dc55-424e-9280-475db87af1b8/b8a41869c2ef48f88b6cf832a944b804tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=504f164eeee7407992c97aaa5bb95ebaff3b6030d63c8701d0f51ca453464aa7&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/0e7104d8-9989-41b3-a566-8cc8c8b73214/f5c6d4ec6d6d453981b4e9c722f5e0f1tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=29f18cc601a4d26b364e79178d5141c515122d6750f12d8982c7ac11ed340f89&X-Amz-SignedHeaders=host&x-id=GetObject)
## Setting

<!-- truncate -->

💡 Tips：涉及比较重要的是对商店的一些设置，包括收入使用的货币、联系邮箱、支付方式、回调地址。这里面最重要的是回调的设置。 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/6b239379-de25-4144-9d0d-f1ece5af5a2b/7d802cf831f64088a6c9ed09922667c9tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=138cb9d284167a9622c69e32399b3bec80bbb50e2563f03d73734945947a2798&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/cbe24786-c567-481e-a9e6-6e47f3b88aea/e15bbc566e86452d8d6609763f7c3d7ctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=f6d53b62d6239179cebfcecb9f43e1489886bdf7169542a9b4e323d16a13c7d7&X-Amz-SignedHeaders=host&x-id=GetObject)
目前并不需要捕获所有的回调类型，只要针对最核心的几个回调事件进行处理即可：order_created、subscription_created、subscription_payment_success、subscription_upodae。 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/d7694838-d948-425d-9c5b-054065bcf961/779768f7a97e423db5f48f617154c950tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=e6ab20e015c59c7fb8bebae42873b626f0025a4f70805e44935c80f83f39213a&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/06af79a4-bcb2-47ad-bc10-34095e90d619/bc2b645c25fa4a5b8f4cf60c2406be94tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=ef02e86a6dbd49b52772a09d249ca8e617a3d7d10fc024adb19135ff000da7ce&X-Amz-SignedHeaders=host&x-id=GetObject)
模拟续订的话，需要创建daily的计费间隔 。估计是要通过收到的邮件链接进去支付，才是续费，否则都算是重新下单。 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/43b55db8-3acb-4b62-a139-eda13fa48563/16c49d10c61742bc89e06dbfafc5fb1ftplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=18f076f2fe52936984ac4e04d99bf172527b82d63b73bbd96c3cd7ae0fa3153a&X-Amz-SignedHeaders=host&x-id=GetObject)
## Api

<!-- truncate -->

💡 Tips：目前api涉及对用户、商店、客户、产品、订阅、订单、发票、折扣、License、账单、webhook的定义。但是这些数据其实在web管理端也可以看到。如果要将功能集合进自己的系统和软件，主要是是看用户是否购买了相应产品、相应的权益是否还在有效期内。所以像订阅状态、License的状态是非常重要的。 api官网 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/167e15dc-e54c-4c6b-9aec-7cb702ac6fb2/6a93474f71d045fb8db1390ed67486b6tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=d93017a936c1885f83a25374ec259052112988e778b633567748b289e6f0031e&X-Amz-SignedHeaders=host&x-id=GetObject)
## 关于订阅和License超期

<!-- truncate -->

1）license是否过期，和license是否被激活没有关系；非订阅模式，只看当初生成license设定的到期日期是哪天；如果是订阅模式，看看订阅是否到期，如果订阅到期，对应的license自动到期 
- 当使用的是非订阅模式，且在下单的时候有生成License，则可以通过Lincese过期时间来控制用户的访问
2）如果使用了订阅模式，只要订阅一直是处于active模式，那么License就会一直处于active模式。直到订阅过期，License才会过期 
订单一旦创建，订阅到期就会自动扣款，并使得订阅处于有效状态（其实如果是采用订阅，直接查看订阅状态就可以了，当然也可以看License状态） 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/037ecce4-098b-4b7a-bfc8-9071b87357ec/e2067263dd9b4c5d82cefd10e7ca3434tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=29bda9e7a6060ce09021e20fbe49411afb88e07a8b48c4da591f967130c79703&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/423f0939-64d5-4e66-bc4c-c228bc099a3a/4a853038fff542e9b4f158a2bbf5bd1ctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=ccff5987c9032fbcbd7d5e000fca69b9593d2add908c8d9180fd6f585b44d827&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/7efdcf0d-953d-4ec5-828a-97d927f4412e/706ab98fe56348d595f0d3329086e82atplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=b51f9708aefed098dc9e1146e34eb6873130f79125fda215113508864cf4d0ed&X-Amz-SignedHeaders=host&x-id=GetObject)
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/ba1578fe-7fde-41c0-b701-5394054a7045/c566074580a0445ca5f3fed59173f6aftplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=d274f58ce8c8a3536b3f7bc96d275ce4e2146faf804f43f7d4b04535fbf7497b&X-Amz-SignedHeaders=host&x-id=GetObject)
一个订单会对应一个订阅，一个订阅会对应一个license，一个订阅会对应多次的付款记录（包括自动扣款，自动扣款不会再产生订单） 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/c6bf7f1f-75d8-451f-b763-6a39d37aeff3/703d43b1475b401c87c6c3bc5f31f19ctplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=f8d956ced1b756de90a38edcb7d69ce7a668027a875a6e28e1035533c2e654b0&X-Amz-SignedHeaders=host&x-id=GetObject)
有多次付款（明天看下付款记录有没有多一条） 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/768078e8-8f71-4bf7-b501-d44c2cb18451/33b0026f875a4696b89b77083ccb26d8tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=6dff58d8fedee653ce6ee6bdecb68ab1f253adff280ca1ae095c670a027acf14&X-Amz-SignedHeaders=host&x-id=GetObject)
有对应的 
![Image](https://prod-files-secure.s3.us-west-2.amazonaws.com/b0012720-ccd1-41ef-9ca9-02f55a45f30f/7f88f7ca-ad16-48b2-8f0d-5dc794144cbe/490a65c6b7ec41d48fe1a8809713c3d5tplv-k3u1fbpfcp-zoom-in-crop-mark1512000.awebp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20231125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231125T072118Z&X-Amz-Expires=3600&X-Amz-Signature=9ad45555f77e6d04577806adfd087fa38a16511d7df7d4d6522aa882cacc71fc&X-Amz-SignedHeaders=host&x-id=GetObject)
如果确定订阅之后，用户是不能再针对该订阅进行付款，License到期之后就将自动过期 
购买了28号购买了一个1天的订阅，然后不激活License，并且当天马上取消订阅；29号License会超期 
感兴趣的朋友可以一起学习vx: water-knight 



 > 在遵循创作的康庄大道上，若我的文字不慎踏入了他人的花园，请告之我，我将以最快的速度，携带着诚意和尊重，将它们从您的视野中撤去。
