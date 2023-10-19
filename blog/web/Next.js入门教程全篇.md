---
slug: next js-all-install
title: next js之入门教程全篇
date: 2023-10-19
authors: wenhao
tags: [Web,Next js]
keywords: [Web,next js,WenHao,文浩,Marvin]
description: next js中入门教程全篇
---


## Next.js入门教程

## 阅读之前

在了解*Next.js*之前，需要掌握[React](https://fuwenhao.club/docs/category/react-1/)的基本使用方法。

## 搭建

### 安装

```
# 创建项目目录
mkdir you_project
# 进入项目目录
cd you_project
# 初始化package.json
npm init -y
# 安装依赖包
npm install --save react react-dom next
# 创建一个pages文件夹
mkdir pages

```
<!-- truncate -->


依次执行以上命令之后，*Next.js*运行所需的最基本的目录和依赖就创建好了。

### 运行

将*package.json*里的“scripts"字段修改为：

```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}

```

运行以下命令启动*Next.js*：

```
npm run dev

```

在浏览器打开<http://localhost:3000/> 看到输出"404 - This page could not be found"，表示*Next.js*安装成功。

### 添加页面

*./pages*是*Next.js*默认的网页路径，其中的*index.js*就代表整个网站的主页。创建一个*./pages/index.js*组件：

```
const Index = () => (
  <div>
    <p>Hello World!</p>
  </div>
)
export default Index

```

添加*./pages/index.js*后网站会自动刷新，呈现"Hello World!"。

## 页面与导航栏

### 页面

添加<http://localhost:3000/about> 路径下的页面。

创建*./pages/about.js*文件，添加以下内容：

```
export default () => (
  <div>
    <p>About page</p>
  </div>
)

```

然后在浏览器输入<http://localhost:3000/about> 即可看到新增的About。

### 导航栏

对*./pages/index.js*稍加修改引入导航栏功能：

```
import Link from 'next/link'

const Index = () => (
  <div>
    <Link href="/about">
      <a style={{fontSize: 20}}>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
)

export default Index

```

**注意**：使用了*Next.js*作为服务端渲染工具，切记仅使用*next/link*中的Link组件。

除了`<a>`标签，`<button>`或自定义的组件都可以被`Link`包装，只要传递*Click事件*即可，将上面的代码稍作修改实验这个效果：

```
import Link from 'next/link'

const Index = () => (
    <div>
        <Link href="/about">
            <button>Click Me</button>
        </Link>
        <Link href="/about">
            <A/>
        </Link>
        <p>Hello Next.js</p>
    </div>
)

export default Index

const A = props => (<div onClick={e => {
    props.onClick(e)
}}>Click Me</div>)

```

关于*Next.js*路由管理相关的细节内容，[可以到这里查看](https://github.com/zeit/next.js#routing)

## 页面、资源与组件

*./pages*是一个保留路径，在*/pages*路径下任何js文件中导出的默认React组件都被视作一个页面。

除了*./pages*，*Next.js*还有一个保留路径是*./static*，它用来存放图片等静态资源。

*Next.js*会对*./pages*中的React组件进行“包装"，所以*./pages*内外的React组件在呈现结果上有一些差异，看下面的例子。

### 创建网站结构

在工程根目录创建*/components*文件夹，然后添加以下组件：

```
import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header

```

然后将`Header`整合到`about.js`和`index.js`中：

```
import Header from '../components/Header'
export default () => (
    <div>
        <Header />
        <p>Hello Next.js</p>
    </div>
)

```

再次进行页面操作，就会出现表头静止页面变换的效果。

### 网站布局

通常情况下，开发一个网站先制定一个通用的布局（尤其是响应式布局的网站），然后再向布局中的添加各个部分的内容。使用*Next.js*可以通过组件的方式来设计一个布局，看下面的例子。 在*/components*中增加`Layout`和`Footer`组件:

```
// componments/layout.js
import Header from './header'
import Footer from './footer'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
}

const Layout = (props) => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
        <Footer />
    </div>
)

export default Layout

```

```
// components/footer.js
const Footer = () => (
    <div>
        <p style={{color:'blue'}}>Footer</p>
    </div>
)

export default Footer

```

然后将*/pages/index.js*修改为：

```
import Layout from '../components/layout'

export default () => (
    <Layout>
        <p>Hello Next.js</p>
    </Layout>
)

```

这样，页面的内容和布局就完全隔离开了。

## 页面跳转

### 传递参数

在实际应用中，经常需要在页面间传递参数，可以使用[高阶组件](https://www.chkui.com/article/react/react_high_order_component)`withRouter`来实现。 下面的代码对*/pages/index.js*进行了一些修改，使其在跳转时携带*query*参数：

```
const SubLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h2>Information</h2>
        <SubLink title="First Post"/>
        <SubLink title="Second Post"/>
        <SubLink title="Third Post"/>
    </Layout>
)

```

点击*First Post*之后浏览器的URL会出现这样的路径：“[http://localhost:3000/post?title=First%20Post”](http://localhost:3000/post?title=First%20Post%E2%80%9D) 。接下来利用`withRouter`来获取这个参数。创建*./pages/post.js*的文件：

```
import {withRouter} from 'next/router'
import Layout from '../components/layout'

const Page = withRouter((props) => (
    <Layout>
        <h3>Post Page</h3>
        <p>Info:{props.router.query.title}</p>
    </Layout>
))
export default Page

```

现在点击*First Post*链接之后，跳转的页面会显示*First Post*。

### 路径隐藏

*Next.js*提供了一个让URL更加清晰干净的特性功能——URL隐藏（官网直译的话应该叫“URL遮挡”），他的作用是可以隐藏原来比较复杂的URL，让网站路径更加清晰，有利于SEO等。实现这个特性非常简单，在使用`Link`组件时传递一个*as*参数。下面将继续修改*./pages/index.js*中的内容以实现这个特性：

```
const SubLink = props => (
    <li>
        <Link as={`p/${props.as}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h2>Information</h2>
        <SubLink as="first-post" title="First Post"/>
        <SubLink as="first-post" title="Second Post"/>
        <SubLink as="first-post" title="Third Post"/>
    </Layout>
)

```

注意观察`SubLink`组件中的修改，为`Link`增加了一个as参数，这个参数传递的内容将会在浏览器的地址栏显示。例如点击*FIrst Post*后，浏览器的地址栏会显示<http://localhost:3000/p/first-post> ，但是我们通过`withRouter`组件获取的URL还是*href*传递的路径。

## 服务端渲染

只要运行了*Next.js*，他时时刻刻都在执行服务端渲染，可以通过刷新页面看到效果。如果没有太多需求，不进行任何调整*Next.js*能为我们完成静态页面的服务端渲染，但是通常情况下，还需要处理异步请求等等情况。

### 二次服务端渲染

前面介绍了在`Link`组件上使用*as*参数可以设置浏览器路径栏上显示的内容。但是这个时候仅仅支持客户端跳转，如果进行页面刷新会出现404页面。导致这个问题出现的原因是在服务端并不知道*/p/first-post*对应*/pages*文件夹中的哪个文件。为了解决这个问题，需要在服务端进行二次渲染。

首先需要添加*Express*服务：

```
npm install --save express

```

安装完成之后在根目录添加一个*server.js*文件，其内容如下：

```
const express = require('express')
const next = require('next')

// 不等于'production'则表示运行的是开发环境
const dev = process.env.NODE_ENV !== 'production'
// 创建一个服务端运行的Next app
const app = next({dev})
// 请求处理器
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/p/:id', (req, res) => {
            //将/p/:id的路径切换成/post?title=req.params.id的路径
            app.render(req, res, '/post', {title: req.params.id})
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })

```

然后修改*package.json*的“scripts"字段，将启动方式方式指向*server.js*：

```
"scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }

```

完成这2步网站服务端也可以正常跳转，实现功能的位置是这段代码：

```
server.get('/p/:id', (req, res) => {
	app.render(req, res, '/post', {title: req.params.id})
})

```

他将原来的请求“/p/:id”转换为请求"/post?title=id"。

更多的[服务端渲染的配置说明请看这里](https://github.com/zeit/next.js#custom-server-and-routing)。

### 数据异步请求

对于一个前后端分离的系统来说，异步数据请求是几乎每个页面都需要的。*Next.js*通过`getInitialProps`来实现。 下面的示例数据来自<https://www.tvmaze.com/api> 。创建*./pages/tvshows.js*的文件：

```
import Layout from '../components/layout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const TvShow = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link href={`/tv?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

TvShow.getInitialProps = async function() {
    //contxt是衔接Next.js包装组件和自定义主键的上下文，包含的参数有asPath、pathname、query

    // 发送异步请求
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')

    // 从response中异步读取数据流
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    // 返回已获取的数据
    return {
        shows: data
    }
}

export default TvShow

```

`TvShow`组件的作用是异步请求数据并组装成列表展示。

然后再创建一个查看详情的页面——*./pages/tv.js*，实现过程和上面一样：

```
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'

const Tv =  (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium}/>
    </Layout>
)

Tv.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}
export default Tv

```

按照这个套路可以解决绝大部分数据异步请求的问题。不过如果数据组装过慢，会出页面现卡顿的问题，可以通过服务端缓存或异步页面加载实现，后续的篇幅会介绍。

## 样式

### 源生添加样式

一个页面永远离不开样式，在*Next.js*中推荐一种简介高效的方法——`<style jsx>`。

为的主页添加一些样式：

```
(
    <Layout>
        <h2>Information</h2>
        <SubLink as="first-post" title="First Post"/>
        <SubLink as="first-post" title="Second Post"/>
        <SubLink as="first-post" title="Third Post"/>
        <style jsx>{`
            h2{
                font-family: "Arial";
            }
        `}</style>
        <style jsx global>{`
            .list{
                list-style: none;
                margin: 5px 0;
            }
        `}</style>
    </Layout>
)

```

`<style jsx>`的作用就是为当前组件声明样式，需要注意的是在这个标签内声明的样式只能覆盖当前组件，子组件是不会出现层叠效果的。而`<style jsx global>`标签的效果则是和标准的css层叠效果一致，在这个标签中声明的样式会影响到子组件。

### Loader添加载样式

*Next.js*可以加载各种样式文件，下面以*Sass/Scss*为例。

首先添加相关依赖：

```
npm install --save @zeit/next-sass node-sass

```

在项目根目录添加*next.config.js*文件，用于指示*Next*加载对用的功能：

```
const withSass = require('@zeit/next-sass')
module.exports = withSass()

```

现在就可以加载*.scss*文件了，添加一个*/pages/post.scss*文件：

```
$font-size: 50px;
.header{
  font-size: $font-size;
  color:red;
}

```

修改*/pages/post.js*加载样式：

```
import {withRouter} from 'next/router'
import Layout from '../components/layout'
//加载样式
import './post.scss'

const Page = withRouter((props) => (
    <Layout>
        <h3 className="header">Post Page</h3>
        <p>Info:{props.router.query.title}</p>
    </Layout>
))

export default Page

```

由于是使用的*webpack*的*Loader*，可以根据需要在*next.config.js*文件中进行一些相关的设置：

```
module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})

```

然后在组件中直接以对象的方式使用：

```
import style from './post.scss'
const Page = withRouter((props) => {
    console.log(style)
    return (
        <Layout>
            <h3 className={style.header}>Post Page</h3>
            <p>Info:{props.router.query.title}</p>
        </Layout>
    )
})

```

更多关于cssLoaderOptions的参数说明可以查看[webpack里css-loader的options说明](https://github.com/webpack-contrib/css-loader#options)。除了scss,[*Next.js*还支持css、less、post css的Loader](https://github.com/zeit/next.js#css-in-js)。

## 发布

在了解以上内容之后，已经可以开发一个网站了，接下来介绍如何发布生产包。

*package.json*中的“scripts"字段可以设置打包和生产运行方式：

```
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }

```

首先进行打包：

```
npm run build

```

打包完毕之后可以启动生产环境：

```
npm start

```

现在用浏览器打开<http://localhost:3000/> 地址可以发现运行的是生产环境（可以使用React工具查看，也可以打开开发人员模式）。 由于之前了在*server.js*中引入了Express，所以现在启动的是一个Express服务器。打包之后的文件都在*./.next* 路径下，可以仅仅拷贝**依赖包（node_module）**、**package.json**、**server.js**以及**./.next**来运行生产环境。
