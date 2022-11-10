---
id: bento-sidebar
title: Bento Sidebar
permalink: "/zh_CN/components/bento-sidebar/"
short_title: Sidebar
layout: layouts/component.njk
description: 提供了一种显示诸如导航、链接、按钮、菜单等用于临时访问的元内容的方法。
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

提供了一种显示诸如导航、链接、按钮、菜单等用于临时访问的元内容的方法。点按按钮可以显示边栏，同时用户仍能看到下层显示的主要内容。

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>使用 bento-sidebar 作为网页组件或 React 功能组件：</p>   <a class="bd-button" href="#web-component">↓ 网页组件</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## 网页组件

在添加自定义样式之前，必须包含每个 Bento 组件所需的 CSS 库以确保正确加载。或者使用内嵌式轻量级升级前样式。请参阅[布局和样式](#layout-and-style)。

### 通过 npm 导入

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### 通过 `<script>` 包含

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
```

### 示例

{% example %}

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/bento.mjs"
    ></script>
    <script nomodule src="https://cdn.ampproject.org/bento.js"></script>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
    />
  </head>
  <body>
    <bento-sidebar id="sidebar1" side="right" hidden>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </bento-sidebar>

    <div class="buttons" style="margin-top: 8px">
      <button id="open-sidebar">Open sidebar</button>
    </div>

    <script>
      (async () => {
        const sidebar = document.querySelector('#sidebar1');
        await customElements.whenDefined('bento-sidebar');
        const api = await sidebar.getApi();

        // set up button actions
        document.querySelector('#open-sidebar').onclick = () => api.open();
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### 交互和 API 用法

Bento 组件可通过其 API 实现频繁互动。可以通过在文档中包含以下脚本代码来访问 `bento-sidebar` 组件 API：

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### 操作

`bento-sidebar` API 使您可以执行以下操作：

##### open()

打开边栏。

```javascript
api.open();
```

##### close()

关闭边栏。

```javascript
api.close();
```

##### toggle()

切换边栏的打开状态。

```javascript
api.toggle(0);
```

### 布局和样式

每个 Bento 组件都有一个小型 CSS 库，必须包含该库以确保正确加载而不会发生[内容偏移](https://web.dev/cls/)。由于基于顺序的特性，您必须手动确保在使用任何自定义样式之前包含样式表。

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

或者，您也可以使用内嵌式轻量级预升级样式：

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### 自定义样式

`bento-sidebar` 组件可以使用标准 CSS 设置样式。

- 可以设置 `bento-sidebar` 的 `width` 来调整宽度，预设值为 45px。
- 如果需要，可以设置 `bento-sidebar` 的 height 来调整边栏高度。如果高度超过 100vw，则边栏将包含一个垂直滚动条。边栏的预设高度为 100vw，可以在 CSS 中替换预设值来将其缩短。
- 当边栏在网页上打开时，边栏的当前状态会通过对 `bento-sidebar` 标记设置的 `open` 特性公开。

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### 用户体验注意事项

使用 `<bento-sidebar>` 时，请记住您的用户经常会在移动设备上查看您的网页，此时标题可能会显示在固定位置。此外，浏览器通常会在网页顶部显示自己的固定标题。在屏幕顶部添加其他固定位置元素会占用大量移动屏幕空间，而这部分空间中的内容无法为用户提供新的信息。

因此，我们建议不要将用于打开边栏的可供性置于固定的全宽标题中。

- 边栏只能位于网页的左侧或右侧。
- 边栏的最大高度为 100vh，如果高度超过 100vh，则会出现垂直滚动条。CSS 中设置的默认高度为 100vh，可在 CSS 中替换该值。
- 可以使用 CSS 设置和调整边栏的宽度。
- <em>建议</em>将 <code>&lt;bento-sidebar&gt;</code> 作为 `<body>` 的直接子元素，从而保留逻辑 DOM 顺序以确保可访问性，并避免容器元素改变其行为。请注意，对 `bento-sidebar` 的祖先元素设置 `z-index` 可能会导致边栏在其他元素（例如标题）下方显示，从而破坏其功能。

### 特性

#### side

指示边栏应从网页的哪一侧打开，即 `left` 或 `right`。如果未指定 `side`，则 `side` 值将继承自 `body` 标记的 `dir` 特性（`ltr` =&gt; `left`、`rtl` =&gt; `right`）；如果不存在 `dir`，则 `side` 的默认值为 `left`。

#### open

此特性在边栏打开时出现。

---

## Preact/React 组件

### 通过 npm 导入

```bash
npm install @bentoproject/sidebar
```

```javascript
import React from 'react';
import {BentoSidebar} from '@bentoproject/sidebar/react';
import '@bentoproject/sidebar/styles.css';

function App() {
  return (
    <BentoSidebar>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

### 交互和 API 用法

Bento 组件可通过其 API 实现频繁互动。可以通过传递 `ref` 来访问 `BentoSidebar` 组件 API：

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoSidebar ref={ref}>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

#### 操作

`BentoSidebar` API 使您可以执行以下操作：

##### open()

打开边栏。

```javascript
ref.current.open();
```

##### close()

关闭边栏。

```javascript
ref.current.close();
```

##### toggle()

切换边栏的打开状态。

```javascript
ref.current.toggle(0);
```

### 布局和样式

`BentoSidebar` 组件可以使用标准 CSS 设置样式。

- 可以设置 `bento-sidebar` 的 `width` 以调整宽度，预设值为 45px。
- 如果需要，可以设置 `bento-sidebar` 的 height 来调整边栏高度。如果高度超过 100vw，则边栏将包含一个垂直滚动条。边栏的预设高度为 100vw，可以在 CSS 中替换预设值来将其缩短。

为确保组件按照您所需的方式呈现，请确保对组件应用大小。这些可以通过内嵌方式应用：

```jsx
<BentoSidebar style={% raw %}{{width: 300, height: '100%'}}{% endraw %}>
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

或通过 `className` 应用：

```jsx
<BentoSidebar className="custom-styles">
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

```css
.custom-styles {
  height: 100%;
  width: 300px;
}
```

### 用户体验注意事项

使用 `<bento-sidebar>` 时，请记住您的用户经常会在移动设备上查看您的网页，此时标题可能会显示在固定位置。此外，浏览器通常会在网页顶部显示自己的固定标题。在屏幕顶部添加其他固定位置元素会占用大量移动屏幕空间，而这部分空间中的内容无法为用户提供新的信息。

因此，我们建议不要将用于打开边栏的可供性置于固定的全宽标题中。

- 边栏只能位于网页的左侧或右侧。
- 边栏的最大高度为 100vh，如果高度超过 100vh，则会出现垂直滚动条。CSS 中设置的默认高度为 100vh，可在 CSS 中替换该值。
- 可以使用 CSS 设置和调整边栏的宽度。
- <em>建议</em>将 <code>&lt;BentoSidebar&gt;</code> 作为 `<body>` 的直接子元素，从而保留逻辑 DOM 顺序以确保可访问性，并避免容器元素改变其行为。请注意，对 `bento-sidebar` 的祖先元素设置 `z-index` 可能会导致边栏在其他元素（例如标题）下方显示，从而破坏其功能。

### 属性

#### side

指示边栏应从网页的哪一侧打开，即 `left` 或 `right`。如果未指定 `side`，则 `side` 值将继承自 `body` 标记的 `dir` 特性（`ltr` =&gt; `left`、`rtl` =&gt; `right`）；如果不存在 `dir`，则 `side` 的默认值为 `left`。
