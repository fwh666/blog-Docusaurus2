---
id: react-component
slug: /react-component
title: React的三大组件实例属性
date: 2021-09-15
authors: wenhao
tags: [React]
keywords: [React,文浩，WenHao]
---

## 组件实例介绍
React是一种前端框架，它的核心是组件，分为三种不同类型的组件：函数组件、类组件和无状态组件。这三种组件都有一些常见的属性，包括：

1. Props
Props是组件的属性，用于向组件传递数据。当组件被创建时，可以通过传递props将数据传递给组件。组件可以通过props获取父组件传递的数据，并利用这些数据进行渲染。Props是只读的，意味着组件不能改变它们。

2. State
State是组件的状态，用于存储组件内部的数据。与props不同，state是可变的，可以在组件内部更新和修改。当state发生变化时，组件会自动重新渲染，以反映最新的状态。

3. Refs
Refs用于获取组件的实例或DOM元素。它们允许您访问组件的方法和属性，或者操作DOM元素。Refs通常用于处理表单输入、媒体播放器、动画等场景。在类组件中，可以通过this.refs访问refs；在函数组件中，可以使用React.useRef()来创建一个ref。

除了这些属性之外，React还有许多其他属性和方法，用于处理组件的生命周期、事件处理、样式和渲染等方面。学习和理解这些属性和方法可以帮助您更好地使用React框架，提高开发效率和代码质量。


## 组件实例示例：
以下是三个组件属性的代码示例：

1. Props

函数组件示例：

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(
  <Greeting name="John" />,
  document.getElementById('root')
);
```

上面的示例中，我们定义了一个函数组件`Greeting`，它接收一个props参数，用于渲染一个h1标签，其中包含了对props.name的引用。我们在调用组件时，将`name`属性设置为"John"。

类组件示例：

```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

ReactDOM.render(
  <Greeting name="John" />,
  document.getElementById('root')
);
```

上面的示例中，我们定义了一个类组件`Greeting`，它也接收一个props参数，用于渲染一个h1标签，其中包含了对props.name的引用。与函数组件不同，类组件中的props属性是通过this.props进行访问的。

2. State

类组件示例：

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.handleClick()}>Click me</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
```

上面的示例中，我们定义了一个类组件`Counter`，它包含一个状态`count`，初始值为0。当用户点击按钮时，我们调用`handleClick()`方法，将状态`count`增加1，并使用`setState()`方法更新组件的状态。在组件的`render()`方法中，我们将状态`count`渲染到页面上，并将`handleClick()`方法绑定到一个按钮的点击事件上。

3. Refs

类组件示例：

```jsx
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

ReactDOM.render(
  <TextInput label="Name:" />,
  document.getElementById('root')
);
```

上面的示例中，我们定义了一个类组件`TextInput`，它包含一个文本输入框和一个标签。我们使用`createRef()`方法创建了一个名为`inputRef`的ref，并将其作为`input`元素的属性进行传递。在组件的`componentDidMount()`方法中，我们将焦点设置到输入框上，以便用户可以立即开始输入。