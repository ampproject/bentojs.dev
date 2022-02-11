---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/zh_CN/components/bento-inline-gallery/"
short_title: Inline Gallery
layout: layouts/component.njk
description: 显示幻灯片，其中带有可选的分页点和缩略图。
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

显示幻灯片，其中带有可选的分页点和缩略图。它的实现使用 [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel)。必须为环境正确安装这两种组件（网页组件与 Preact）。

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>使用 bento-inline-gallery 作为网页组件或 React 功能组件：</p>   <a class="bd-button" href="#web-component">↓ 网页组件</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## 网页组件

在添加自定义样式之前，必须包含每个 Bento 组件所需的 CSS 库以确保正确加载。或者使用内嵌式轻量级升级前样式。请参阅[布局和样式](#layout-and-style)。

### 通过 npm 导入

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### 通过 `<script>` 包含

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
    />

    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
    />
  </head>
  <body>
    <bento-inline-gallery id="inline-gallery">
      <bento-inline-gallery-thumbnails
        style="height: 100px"
        loop
      ></bento-inline-gallery-thumbnails>

      <bento-base-carousel
        style="height: 200px"
        snap-align="center"
        visible-count="3"
        loop
      >
        <img src="img1.jpeg" data-thumbnail-src="img1-thumbnail.jpeg" />
        <img src="img2.jpeg" data-thumbnail-src="img2-thumbnail.jpeg" />
        <img src="img3.jpeg" data-thumbnail-src="img3-thumbnail.jpeg" />
        <img src="img4.jpeg" data-thumbnail-src="img4-thumbnail.jpeg" />
        <img src="img5.jpeg" data-thumbnail-src="img5-thumbnail.jpeg" />
        <img src="img6.jpeg" data-thumbnail-src="img6-thumbnail.jpeg" />
      </bento-base-carousel>

      <bento-inline-gallery-pagination
        style="height: 20px"
      ></bento-inline-gallery-pagination>
    </bento-inline-gallery>
  </body>
</html>
```

{% endexample %}

### 布局和样式

每个 Bento 组件都有一个小型 CSS 库，必须包含该库以确保正确加载而不会发生[内容偏移](https://web.dev/cls/)。由于基于顺序的特性，您必须手动确保在使用任何自定义样式之前包含样式表。

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

或者，您也可以使用内嵌式轻量级预升级样式：

```html
<style>
  bento-inline-gallery,
  bento-inline-gallery-pagination,
  bento-inline-gallery-thumbnails {
    display: block;
  }
  bento-inline-gallery {
    contain: layout;
  }
  bento-inline-gallery-pagination,
  bento-inline-gallery-thumbnails {
    overflow: hidden;
    position: relative;
  }
</style>
```

### `<bento-inline-gallery-pagination>` 的特性

#### `inset`

布尔特性，指示是否以插页形式显示分页指示器（覆盖轮播界面本身）。默认值为 `false`。

### `<bento-inline-gallery-thumbnails>` 的特性

#### `aspect-ratio`

数字，定义幻灯片应显示的宽高比率。此值为可选值。

#### `loop`

布尔特性，指示缩略图是否应循环。默认值为 `false`。

### 样式设置

您可以使用 `bento-inline-gallery`、`bento-inline-gallery-pagination`、`bento-inline-gallery-thumbnails` 和 `bento-base-carousel` 元素选择器来自由设置分页指示器、缩略图和轮播界面的样式。

---

## Preact/React 组件

### 通过 npm 导入

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import React from 'react';
import {BentoInlineGallery} from '@bentoproject/inline-gallery/react';
import '@bentoproject/inline-gallery/styles.css';

function App() {
  return (
    <BentoInlineGallery id="inline-gallery">
      <BentoInlineGalleryThumbnails aspect-ratio="1.5" loop />
      <BentoBaseCarousel snap-align="center" visible-count="1.2" loop>
        <img src="server.com/static/inline-examples/images/image1.jpg" />
        <img src="server.com/static/inline-examples/images/image2.jpg" />
        <img src="server.com/static/inline-examples/images/image3.jpg" />
      </BentoBaseCarousel>
      <BentoInlineGalleryPagination inset />
    </BentoInlineGallery>
  );
}
```

### 布局和样式

#### 容器类型

`BentoInlineGallery` 组件具有定义的布局大小类型。为确保正确呈现组件，请务必通过所需的 CSS 布局（例如使用 `width` 定义的布局）为组件及其直接子级应用大小。可以内嵌应用：

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

或通过 `className` 应用：

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### `BentoInlineGalleryPagination` 的属性

除了[常见属性](../../../docs/spec/bento-common-props.md)，BentoInlineGalleryPagination 还支持以下属性：

#### `inset`

布尔特性，指示是否以插页形式显示分页指示器（覆盖轮播界面本身）。默认值为 `false`。

### `BentoInlineGalleryThumbnails` 的属性

除了[常见属性](../../../docs/spec/bento-common-props.md)，BentoInlineGalleryThumbnails 还支持以下属性：

#### `aspectRatio`

数字，定义幻灯片应显示的宽高比率（此值为可选值）。

#### `loop`

布尔特性，指示缩略图是否应循环。默认值为 `false`。
