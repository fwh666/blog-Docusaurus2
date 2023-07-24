---
id: react-induction
slug: /react-induction
title: React的概念介绍
date: 2021-09-15
authors: wenhao
tags: [React]
keywords: [React,文浩，WenHao]
---

<!-- truncate -->

React 是一个用于构建用户界面的 JavaScript 库，它采用声明式编程模型，使得构建复杂的 UI 变得简单和可维护。下面是一些 React 的核心概念：

## 组件

在 React 中，UI 是由组件构成的。组件是可复用的代码块，它们可以接收输入并返回一个渲染 UI 的 React 元素。组件可以是函数组件或类组件。

函数组件是一个接收输入并返回一个 React 元素的函数。例如，以下是一个简单的函数组件：

```jsx
function Hello(props) {
  return <div>Hello, {props.name}!</div>;
}
```

类组件是一个继承自 `React.Component` 的 JavaScript 类，它必须实现 `render` 方法并返回一个 React 元素。例如，以下是一个简单的类组件：

```jsx
class Hello extends React.Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}
```

## JSX

在 React 中，使用 JSX（JavaScript XML）编写组件的渲染输出。JSX 是一种语法扩展，它允许您在 JavaScript 中编写类似 XML 的代码。例如，以下是一个使用 JSX 编写的组件：

```jsx
function Hello(props) {
  return <div>Hello, {props.name}!</div>;
}
```

在 JSX 中，您可以使用花括号 `{}` 来插入 JavaScript 表达式。例如，上面的示例中，我们使用 `{props.name}` 来渲染 `name` 属性的值。

## Props

组件可以通过 `props` 接收输入。`props` 是一个包含组件所有属性的对象。例如，以下是一个使用 `props` 属性的组件：

```jsx
function Hello(props) {
  return <div>Hello, {props.name}!</div>;
}

ReactDOM.render(<Hello name="world" />, document.getElementById('root'));
```

在上面的示例中，我们将 `name` 属性传递给 `Hello` 组件，并将其作为 `props` 对象的属性访问。

## State

组件的状态是组件内部数据的集合，它可以在组件的生命周期中更改。当状态更改时，React 会自动重新渲染组件。要在组件中使用状态，您需要使用 `useState` 钩子或 `this.state` 属性。例如，以下是一个使用 `useState` 钩子的函数组件：

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));
```

在上面的示例中，我们使用 `useState` 钩子来定义 `count` 状态，并使用 `setCount` 函数来更改它。

希望这些概念能够帮助您更好地了解 React。