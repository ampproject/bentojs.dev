---
id: bento-fit-text
title: Bento Fit Text
permalink: "/zh_CN/components/bento-fit-text/"
short_title: Fit Text
layout: layouts/component.njk
description: 确定可以将所有给定文本内容放入可用空间的最佳字体大小。
---

# Bento Fit Text

{% heroexample 'bento-fit-text' %}

确定可以将所有给定文本内容放入可用空间的最佳字体大小。

Bento Fit Text 的预期内容为文本或其他内嵌内容，但也可以包含非内嵌内容。

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>使用 bento-fit-text 作为网页组件或 React 功能组件：</p>   <a class="bd-button" href="#web-component">↓ 网页组件</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## 网页组件

在添加自定义样式之前，必须包含每个 Bento 组件所需的 CSS 库以确保正确加载。或者使用内嵌式轻量级升级前样式。请参阅[布局和样式](#layout-and-style)。

### 通过 npm 导入

```bash
npm install @bentoproject/fit-text
```

```javascript
import {defineElement as defineBentoFitText} from '@bentoproject/fit-text';
defineBentoFitText();
```

### 通过 `<script>` 包含

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text id="my-fit-text">
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </bento-fit-text>
  </body>
</html>
```

{% endexample %}

### 溢出内容

如果 `bento-fit-text` 的内容溢出可用空间，即使指定 `min-font-size`，溢出内容也会被截断和隐藏。基于 WebKit 和 Blink 的浏览器会将溢出内容显示为省略号。

在下面的示例中，我们将 `min-font-size` 指定为 `40`，并在 `bento-fit-text` 元素中添加了更多内容。结果是，内容超过其固定块父级的大小，因此，为了适合容器大小，文字被截断。

```html
<div style="width: 300px; height: 300px; background: #005af0; color: #fff">
  <bento-fit-text min-font-size="40">
    Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
    inermis reprehendunt. Lorem ipsum dolor sit amet, has nisl nihil convenire
    et, vim at aeque inermis reprehendunt
  </bento-fit-text>
</div>
```

### 布局和样式

每个 Bento 组件都有一个小型 CSS 库，必须包含该库以确保正确加载而不会发生[内容偏移](https://web.dev/cls/)。由于基于顺序的特性，您必须手动确保在使用任何自定义样式之前包含样式表。

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
/>
```

或者，您也可以使用内嵌式轻量级预升级样式：

```html
<style>
  bento-fit-text {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### 容器类型

`bento-fit-text` 组件具有定义的布局大小类型。为确保组件正确呈现，请务必通过所需的 CSS 布局（例如使用 `height`、`width`、`aspect-ratio` 或其他此类属性定义的布局）为组件及其直接子级（幻灯片）应用大小：

```css
bento-fit-text {
  height: 100px;
  width: 100%;
}
```

### 关于溢出内容的无障碍功能注意事项

为了适合容器大小，虽然溢出内容*视觉上*被截断，但请注意，溢出内容仍然会显示在文档中。请勿依赖溢出行为而在网页中简单地“填塞”大量的内容，虽然直观上看起来可能很合适，但对于使用辅助技术（例如屏幕阅读器）的用户来说，网页可能过于冗长，因为对于这些用户而言，他们仍然可以完全读取/看到所有被截断的内容。

### 特性

#### 媒体查询

可以配置 `<bento-fit-text>` 的特性以使用基于[媒体查询](./../../../docs/spec/amp-html-responsive-attributes.md)的不同选项。

#### `min-font-size`

用整数指定 `bento-fit-text` 可以使用的最小字体大小（单位为像素）。

#### `max-font-size`

以整数指定 `bento-fit-text` 可以使用的最大字体大小（单位为像素）。

#### API 示例

以编程方式更改特性值将自动更新元素。

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
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text id="my-fit-text">
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </bento-fit-text>
    <div class="buttons" style="margin-top: 8px">
      <button id="font-button">Change max-font-size</button>
      <button id="content-button">Change content</button>
    </div>

    <script>
      (async () => {
        const fitText = document.querySelector('#my-fit-text');
        await customElements.whenDefined('bento-fit-text');

        // set up button actions
        document.querySelector('#font-button').onclick = () =>
          fitText.setAttribute('max-font-size', '40');
        document.querySelector('#content-button').onclick = () =>
          (fitText.textContent = 'new content');
      })();
    </script>
  </body>
</html>
```

{% endexample %}

---

## Preact/React 组件

### 通过 npm 导入

```bash
npm install @bentoproject/fit-text
```

```javascript
import React from 'react';
import {BentoFitText} from '@bentoproject/fit-text/react';
import '@bentoproject/fit-text/styles.css';

function App() {
  return (
    <BentoFitText>
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </BentoFitText>
  );
}
```

### 布局和样式

#### 容器类型

`BentoFitText` 组件具有定义的布局大小类型。为确保组件正确呈现，请务必通过所需的 CSS 布局（例如使用 `height`、`width`、`aspect-ratio` 或其他此类属性定义的布局）为组件及其直接子级（幻灯片）应用大小。可以内嵌应用：

```jsx
<BentoFitText style={% raw %}{{width: 300, height: 100}}{% endraw %}>
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

或通过 `className` 应用：

```jsx
<BentoFitText className="custom-styles">
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### 属性

#### `minFontSize`

用整数指定 `bento-fit-text` 可以使用的最小字体大小（单位为像素）。

#### `maxFontSize`

以整数指定 `bento-fit-text` 可以使用的最大字体大小（单位为像素）。
