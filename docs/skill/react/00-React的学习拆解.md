---
id: react-learn-analyse
slug: /react-learn-analyse
title: React的学习拆解
date: 2021-09-15
authors: wenhao
tags: [React]
keywords: [React,文浩，WenHao]
---


#### React提问：
> ***带着问题去学习方式！！！***

1. 为什么要去学习React
2. 基础语法结构是什么以及demo
3. 都学习哪些核心知识点
4. 如何创建起始项目
5. 如何启动运行项目
6. 核心关键命令有哪些
7. 一般选择版本多少
8. 核心语法有哪些-可以带着场景具体学习使用
9. 如何搭建基本页面？
10. 举例搭建注册登录页面：
    1. 如何调整样式
    2. 如何跳转到首页
    3. 如何调用后端接口
    4. 如何传参
    5. 如何解析出参
11. 如何整合TypeScript语法
12. 页面内有其他的页面：组件嵌套
13. 如何进行CRUD（创建，更新，删除）

#### HTML提问：

1. 如何调试css样式？

---

## 拆分目标

1. JS、HTML语法欠缺
2. 核心概念不懂；不知道有什么；
3. 核心程序化的是什么；

A（小白）—————-—————-———————————-→B（React开发项目）（小程序交友网站）

1. Hook使用
2. React中HTML语法使用
3. 关键字函数不知道

**方式方法：功能倒推**

1. 注册登录功能的项目进入首页，以及token验证
2. 页面：
    1. 注册页面div
    2. 登录页面div
    3. 验证码功能
3. 代码：
    1. 输入框
    2. 功能校验
    3. 登录结果记录token
4. 样式：
    1. UI设计
    2. css编写
    


---

## 注意事项：

1. 你可能已经注意到 `<MyButton />` 是以大写字母开头的。你可以根据此来区分 React 组件。React 组件必须以大写字母开头，而 HTML 标签则必须是小写字母。
2. JSX 比 HTML 更加严格。你必须闭合标签，如 `<br />`。你的组件也不能返回多个 JSX 标签。你必须将它们包裹到一个共享的父级中，比如 `<div>...</div>` 或使用空的 `<>...</>` 包裹：
3. 大括号传值：你还可以将 JSX 属性 “转义到 JavaScript”，但你必须使用大括号 **而非** 引号。例如，`className="avatar"` 是将 `"avatar"` 字符串传递给 `className`，作为 CSS 的 class。但 `src={user.imageUrl}` 会读取 JavaScript 的 `user.imageUrl` 变量，然后将该值作为 `src` 属性传递：
4. 如果你喜欢更为紧凑的代码，你可以使用 [条件 `?` 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)。与 `if` 不同的是，它工作于 JSX 内部：
5. 以 `use` 开头的函数被称为 **Hook**。`useState` 是 React 提供的一个内置 Hook。你可以在 [React API 参考](https://zh-hans.react.dev/reference/react) 中找到其他内置的 Hook。你也可以通过组合现有的 Hook 来编写属于你自己的 Hook。
6. onSomthing处理props（道具）：DOM `<button>` 元素的 `onClick` props 对 React 有特殊意义，因为它是一个内置组件。对于像 Square 这样的自定义组件，命名由你决定。你可以给 `Square` 的 `onSquareClick` props 或 `Board` 的 `handleClick` 函数起任何名字，代码还是可以运行的。在 React 中，通常使用 `onSomething` 命名代表事件的 props，使用 `handleSomething` 命名处理这些事件的函数。
7. 除了字符串、数字和其它 JavaScript 表达式，你甚至可以在 JSX 中传递对象。对象也用大括号表示，例如 `{ name: "Hedy Lamarr", inventions: 5 }`。因此，为了能在 JSX 中传递，你必须用另一对额外的大括号包裹对象：`person={{ name: "Hedy Lamarr", inventions: 5 }}`。
8. 内联 `style` 属性 使用驼峰命名法编写。例如，HTML `<ul style="background-color: black">` 在你的组件里应该写成 `<ul style={{ backgroundColor: 'black' }}>`。
9. 在声明 props 时， **不要忘记 `(` 和 `)` 之间的一对花括号 `{` 和 `}`**  ：
10. **切勿将数字放在 `&&` 左侧.  [🔗](https://zh-hans.react.dev/learn/conditional-rendering)**
11. 因为箭头函数会隐式地返回位于 `=>` 之后的表达式，所以你可以省略 `return` 语句。 [🔗](https://zh-hans.react.dev/learn/rendering-lists)
12. key 需要满足的条件：
    1.  key 值在兄弟节点之间必须是唯一的。 不过不要求全局唯一，在不同的数组中可以使用相同的 key。 key 值不能改变，否则就失去了使用 key 的意义！所以千万不要在渲染时动态地生成 key。
13. 传递给事件处理函数的函数应直接传递，而非调用。例如：[🔗](https://zh-hans.react.dev/learn/responding-to-events)
14. 在 React 中所有事件都会传播，除了 `onScroll`，它仅适用于你附加到的 JSX 标签。
15. 重点：
    - 事件会向上传播。通过事件的第一个参数调用 `e.stopPropagation()` 来防止这种情况。
    - 事件可能具有不需要的浏览器默认行为。调用 `e.preventDefault()` 来阻止这种情况。
16. **Hooks ——以 `use` 开头的函数——只能在组件或[自定义 Hook](https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks) 的最顶层调用。** 你不能在条件语句、循环语句或其他嵌套函数内调用 Hook。Hook 是函数，但将它们视为关于组件需求的无条件声明会很有帮助。在组件顶部 “use” React 特性，类似于在文件顶部“导入”模块。
17. 渲染必须始终是一次 [纯计算](https://zh-hans.react.dev/learn/keeping-components-pure):
18. 
    
    不幸的是，虽然 `[slice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)` 和 `[splice](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)` 的名字相似，但作用却迥然不同：
    
    - `slice` 让你可以拷贝数组或是数组的一部分。
    - `splice` **会直接修改** 原始数组（插入或者删除元素）。
    
    在 React 中，更多情况下你会使用 `slice`（没有 `p` ！），因为你不想改变 state 中的对象或数组。[更新对象](https://zh-hans.react.dev/learn/updating-objects-in-state)这一章节解释了什么是 mutation，以及为什么不推荐在 state 里这样做。
    
19. 像 `useTasks` 和 `useTasksDispatch` 这样的函数被称为 **[自定义 Hook](https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks)。** 如果你的函数名以 `use` 开头，它就被认为是一个自定义 Hook。这让你可以使用其他 Hook，比如 `useContext`。

## 用法说明：

1. 再Div中传递三个参数到ProductTable方法中

```java
<ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly} />
```

1. disabled 禁用按钮

```jsx
<button
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
        Previous
      </button>
```

## 章节收获：

**描述UI：**

1. react的基础语法结构
2. 使用注意事项：大括号，双大括号等，
3. 导入和导出
4. prop组件传递
5. 条件渲染语句： if，三元表达式，&&判断
6. 渲染列表：map的lambda表达式填充数据
7. **保持组件纯粹：** 就是保证单一原则，就是一个组件只做一件事情，不掺杂其他

**交互：**

1. 响应事件：点击触发对应的功能
2. state组件记忆： 用state来赋值变量
3. 渲染和提交：
4. 更新state对象
5. 更新state数组

**状态管理：**

1. state响应输入
2. state结构
3. 组件状态共享
4. state保留和重置

**应急方案：**

1. useRef ： 适合保存前置信息且不担心再渲染
    1. 当你希望组件“记住”某些信息，但又不想让这些信息 [触发新的渲染](https://zh-hans.react.dev/learn/render-and-commit) 时，你可以使用 **ref**：
2. useEffect： 
    1. 可能需要根据 React 状态控制非 React 组件、设置服务器连接或在组件出现在屏幕上时发送分析日志。与处理特定事件的事件处理程序不同，**Effect** 在渲染后运行一些代码。使用它将组件与 React 之外的系统同步。
    2. Effect 的生命周期不同于组件。组件可以挂载、更新或卸载。Effect 只能做两件事：开始同步某些东西，然后停止同步它。如果 Effect 依赖于随时间变化的 props 和 state，这个循环可能会发生多次。
    3. 这个 Effect 依赖于 `roomId` props 的值。props 是 **响应值**，这意味着它们可以在重新渲染时改变。注意，如果 `roomId` 更改，Effect 将会 **重新同步**（并重新连接到服务器）：
3. 使用ref引用值：
4. ****ref 和 state 的不同之处 [🔗](https://zh-hans.react.dev/learn/referencing-values-with-refs)**
5. ****什么是 Effect，它与事件（event）有何不同？[🔗](https://zh-hans.react.dev/learn/synchronizing-with-effects)**
6. ****发送 POST 请求[🔗](https://zh-hans.react.dev/learn/you-might-not-need-an-effect)**
7. 使用自定义 Hook 复用逻辑 [🔗](https://zh-hans.react.dev/learn/reusing-logic-with-custom-hooks)

## React的18.2.0

1. Hook的API： [🔗](https://zh-hans.react.dev/reference/react)
2. 组件
3. API
4. Directives

## 学习资料：

1. [React快速入门](https://zh-hans.react.dev/learn)
2. [JavaScript导出](https://zh.javascript.info/import-export)
3. [MDN语法](https://developer.mozilla.org/zh-CN/docs/web/javascript/reference/statements/export)