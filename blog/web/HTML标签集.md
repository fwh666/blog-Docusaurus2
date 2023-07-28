---
slug: Html-lable
title: HTML常用标签集合汇总
date: 2023-07-27
authors: wenhao
tags: [Web,Html]
keywords: [Web,Html,WenHao,文浩,Marvin]
description: HTML常用标签集合汇总
---


以下是HTML中常用的标签及其解释和代码示例：

## 1. `<html>` : 定义HTML文档的根元素。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to my webpage!</h1>
    <p>Here is some content.</p>
  </body>
</html>
```
<!-- truncate -->

## 2. `<head>` : 定义HTML文档的头部，包含元数据和其他引用。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Welcome to my webpage!</h1>
    <p>Here is some content.</p>
  </body>
</html>
```

## 3. `<title>` : 定义文档的标题，显示在浏览器的标签页中。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to my webpage!</h1>
    <p>Here is some content.</p>
  </body>
</html>
```

## 4. `<body>` : 定义HTML文档的主体部分。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to my webpage!</h1>
    <p>Here is some content.</p>
  </body>
</html>
```

## 5. `<h1>-<h6>` : 定义HTML文档的标题，从最高级到最低级。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
  </body>
</html>
```

6. `<p>` : 定义段落。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </body>
</html>
```

7. `<a>` : 定义链接。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <a href="https://www.example.com">Visit Example.com</a>
  </body>
</html>
```

8. `<img>` : 定义图像。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <img src="image.jpg" alt="A beautiful image.">
  </body>
</html>
```

9. `<ul>` : 定义无序列表。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>
```

10. `<ol>` : 定义有序列表。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </body>
</html>
```

11. `<li>` : 定义列表项。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ol>
  </body>
</html>
```

12. `<table>` : 定义表格。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
      </tr>
    </table>
  </body>
</html>
```

13. `<th>` : 定义表格的表头单元格。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
      </tr>
    </table>
  </body>
</html>
```

14. `<td>` : 定义表格的数据单元格。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <table>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
      </tr>
    </table>
  </body>
</html>
```

15. `<form>` : 定义表单。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <form action="submit.php" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

16. `<input>` : 定义输入字段。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <form action="submit.php" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

17. `<label>` : 定义输入字段的标签。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <form action="submit.php" method="post">
      <label for="name">Name:</label>
      <input type="text" id="
```

以下是HTML中常用的标签及其解释和代码示例：

18. `<button>` : 定义按钮。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <button>Click me!</button>
  </body>
</html>
```

19. `<select>` : 定义下拉列表。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <select>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </body>
</html>
```

20. `<option>` : 定义下拉列表中的选项。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <select>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
  </body>
</html>
```

21. `<textarea>` : 定义文本域。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <textarea rows="4" cols="50">
      Enter text here...
    </textarea>
  </body>
</html>
```

22. `<label>` : 定义表单元素的标签。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <form action="submit.php" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email"><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

23. `<fieldset>` : 定义表单的一组相关元素。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <form action="submit.php" method="post">
      <fieldset>
        <legend>Personal Information:</legend>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
      </fieldset>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

24. `<legend>` : 定义fieldset元素的标题。

```

<html>
  <body>
    <form action="submit.php" method="post">
      <fieldset>
        <input type="text" id="name" name="name"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
      </fieldset>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

25. `<div>` : 定义文档中的一个区域，可用于布局。

代码示例：
```
<html>
  <body>
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </body>
</html>

```

26. `<span>` : 定义文本中的一个区域，可用于样式化。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <style>
      .highlight {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>This is some <span class="highlight">highlighted</span> text.</p>
  </body>
</html>
```

以下是HTML中常用的标签及其解释和代码示例：

27. `<iframe>` : 定义一个内联框架，可用于在当前页面中嵌入其他页面。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <iframe src="https://www.google.com"></iframe>
  </body>
</html>
```

28. `<audio>` : 定义音频内容。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <audio controls>
      <source src="music.mp3" type="audio/mpeg">
    </audio>
  </body>
</html>
```

29. `<video>` : 定义视频内容。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <video controls>
      <source src="video.mp4" type="video/mp4">
    </video>
  </body>
</html>
```

30. `<source>` : 定义`<audio>`或`<video>`元素的媒体资源。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <audio controls>
      <source src="music.mp3" type="audio/mpeg">
    </audio>
    <video controls>
      <source src="video.mp4" type="video/mp4">
    </video>
  </body>
</html>
```

## 31. `<canvas>` : 定义绘图区域，用于通过JavaScript绘制图形、动画等。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
    <script>
      window.onload = function() {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "red";
        ctx.fillRect(10, 10, 50, 50);
      }
    </script>
  </head>
  <body>
    <canvas id="myCanvas" width="200" height="200"></canvas>
  </body>
</html>
```

## 32. `<svg>` : 定义可缩放矢量图形。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <svg width="100" height="100">
      <rect x="10" y="10" width="80" height="80" fill="red" />
    </svg>
  </body>
</html>
```

## 33. `<path>` : 定义SVG中的路径。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <svg width="100" height="100">
      <path d="M 10 10 L 50 90 L 90 10 Z" fill="red" />
    </svg>
  </body>
</html>
```

## 34. `<g>` : 定义SVG中的分组。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <svg width="100" height="100">
      <g fill="red">
        <rect x="10" y="10" width="40" height="40" />
        <rect x="50" y="50" width="40" height="40" />
      </g>
    </svg>
  </body>
</html>
```

## 35. `<path>` : 定义SVG中的路径。

代码示例：
```
<!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <svg width="100" height="100">
      <path d="M 10 10 L 50 90 L 90 10 Z" fill="red" />
    </svg>
  </body>
</html>
```

