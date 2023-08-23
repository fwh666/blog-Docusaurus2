---
id: react-events
slug: /react-events
title: React常用事件函数
date: 2021-09-15
authors: wenhao
tags: [React]
keywords: [React,文浩，WenHao]
---

## 鼠标事件：
React中常用的MouseEvents主要包括：

1. onClick
当用户单击元素时触发该事件。可以用于处理点击事件，例如打开一个模态框或执行某些操作。

2. onMouseEnter
当用户将鼠标指针移动到元素上时触发该事件。可以用于处理鼠标进入元素的事件，例如显示一个提示框或执行某些操作。

3. onMouseLeave
当用户将鼠标指针移出元素时触发该事件。可以用于处理鼠标离开元素的事件，例如隐藏一个提示框或执行某些操作。

4. onMouseDown
当用户按下鼠标按钮时触发该事件。可以用于处理鼠标按下事件，例如改变元素的样式或执行某些操作。

5. onMouseUp
当用户释放鼠标按钮时触发该事件。可以用于处理鼠标释放事件，例如改变元素的样式或执行某些操作。

6. onMouseMove
当用户在元素上移动鼠标时触发该事件。可以用于处理鼠标移动事件，例如跟踪鼠标位置或执行某些操作。

这些事件可以通过在元素上添加事件监听器来使用。例如，可以在`<button>`元素上添加`onClick`事件监听器，以便在用户单击按钮时执行相应的代码：

```jsx
class MyButton extends React.Component {
  handleClick() {
    console.log('Button is clicked...');
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>Click me</button>
    );
  }
}
```

在上面的示例中，我们在`<button>`元素上添加了`onClick`事件监听器，并将其绑定到`handleClick()`方法上。当用户单击按钮时，`handleClick()`方法将被调用，并在控制台上输出一条消息。

这些MouseEvents可以用于处理用户与应用程序的交互，例如响应用户单击、鼠标移动或拖动等事件。

除了上述常见的MouseEvents，React还提供了一些其他的鼠标事件，如：

1. onContextMenu
当用户在元素上右击鼠标时触发该事件。可以用于处理右键单击事件，例如显示上下文菜单或执行某些操作。

2. onDoubleClick
当用户双击元素时触发该事件。可以用于处理双击事件，例如放大图像或执行某些操作。

3. onMouseOver
当用户将鼠标指针移到元素上方时触发该事件。可以用于处理鼠标悬停事件，例如显示一个提示框或执行某些操作。

4. onMouseOut
当用户将鼠标指针从元素上方移开时触发该事件。可以用于处理鼠标离开事件，例如隐藏一个提示框或执行某些操作。

5. onMouseWheel
当用户使用鼠标滚轮时触发该事件。可以用于处理鼠标滚轮事件，例如滚动页面或执行某些操作。

这些事件可以通过在元素上添加事件监听器来使用，与上面的示例类似。例如，可以在`<img>`元素上添加`onDoubleClick`事件监听器，以便在用户双击图像时执行相应的代码：

```jsx
class MyImage extends React.Component {
  handleDoubleClick() {
    console.log('Image is double clicked...');
  }

  render() {
    return (
      <img src="my_image.jpg" onDoubleClick={() => this.handleDoubleClick()} />
    );
  }
}
```

在上面的示例中，我们在`<img>`元素上添加了`onDoubleClick`事件监听器，并将其绑定到`handleDoubleClick()`方法上。当用户双击图像时，`handleDoubleClick()`方法将被调用，并在控制台上输出一条消息。

这些MouseEvents可以用于实现各种交互效果，例如拖动、缩放、放大等，可以根据实际需求选择合适的事件来使用。

除了上述常见的MouseEvents，React还提供了一些其他的鼠标事件，如：

1. onMouseDownCapture
当鼠标按钮被按下时，触发该事件，但是事件处理程序在事件冒泡阶段被调用，而不是在事件捕获阶段被调用。这可以用于在父组件中拦截鼠标事件，例如在一个列表中拖动元素时，可以使用该事件来防止列表滚动。

2. onMouseMoveCapture
当鼠标在元素上移动时，触发该事件，但是事件处理程序在事件冒泡阶段被调用，而不是在事件捕获阶段被调用。这可以用于在父组件中拦截鼠标事件或在拖动元素时跟踪鼠标位置。

3. onMouseUpCapture
当鼠标按钮被释放时，触发该事件，但是事件处理程序在事件冒泡阶段被调用，而不是在事件捕获阶段被调用。这可以用于在父组件中拦截鼠标事件或在拖动元素时执行某些操作。

4. onMouseEnterCapture
当鼠标进入元素时，触发该事件，但是事件处理程序在事件冒泡阶段被调用，而不是在事件捕获阶段被调用。这可以用于在父组件中拦截鼠标事件或在鼠标进入元素时执行某些操作。

5. onMouseLeaveCapture
当鼠标离开元素时，触发该事件，但是事件处理程序在事件冒泡阶段被调用，而不是在事件捕获阶段被调用。这可以用于在父组件中拦截鼠标事件或在鼠标离开元素时执行某些操作。

这些事件的用法与常见的MouseEvents类似，只是它们在事件冒泡阶段被调用而不是在事件捕获阶段被调用。可以通过在元素上添加相应的事件监听器来使用它们，例如：

```jsx
class MyComponent extends React.Component {
  handleMouseDownCapture() {
    console.log('Mouse down in parent component...');
  }

  render() {
    return (
      <div onMouseDownCapture={() => this.handleMouseDownCapture()}>
        <button onClick={() => console.log('Button clicked...')}>Click me</button>
      </div>
    );
  }
}
```

在上面的示例中，我们在`<div>`元素上添加了`onMouseDownCapture`事件监听器，并将其绑定到`handleMouseDownCapture()`方法上。当用户按下鼠标按钮时，`handleMouseDownCapture()`方法将被调用，并在控制台上输出一条消息。注意，当用户单击按钮时，`onClick`事件也会被触发，但是它是在事件冒泡阶段之后被调用的。

## 媒体事件：
React中常用的Media Events主要包括：

1. onPlay
当媒体开始播放时触发该事件。可以用于更新UI，如显示播放按钮。

2. onPause
当媒体暂停时触发该事件。可以用于更新UI，如显示暂停按钮。

3. onEnded
当媒体播放结束时触发该事件。可以用于更新UI，如显示重新播放按钮。

4. onTimeUpdate
在媒体的播放位置发生更改时触发该事件。可以用于更新UI，如显示播放进度条。

5. onVolumeChange
在媒体的音量发生更改时触发该事件。可以用于更新UI，如显示音量控制条。

6. onLoadedMetadata
当媒体的元数据加载完成时触发该事件。可以用于更新UI，如显示媒体的时长。

这些事件可以通过在媒体元素上添加事件监听器来使用。例如，可以在`<video>`或`<audio>`元素上添加`onPlay`事件监听器，以便在媒体开始播放时执行相应的代码：

```jsx
class VideoPlayer extends React.Component {
  handlePlay() {
    console.log('Video is playing...');
  }

  render() {
    return (
      <video src="my_video.mp4" onPlay={() => this.handlePlay()} />
    );
  }
}
```

在上面的示例中，我们在`<video>`元素上添加了`onPlay`事件监听器，并将其绑定到`handlePlay()`方法上。当媒体开始播放时，`handlePlay()`方法将被调用，并在控制台上输出一条消息。

这些Media Events可以用于创建自定义的媒体播放器，以及在React中处理音频和视频等媒体资源。