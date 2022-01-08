---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/ja/components/bento-inline-gallery/"
short_title: Inline Gallery
layout: layouts/component.njk
description: オプションのページネーションドットとサムネイルとともにスライドを表示します。
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

スライドを表示し、オプションでページネーションのドットとサムネイルを表示できます。この実装では [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel) が使用されます。両コンポーネントは環境に適切にインストールされている必要があります（ウェブコンポーネントと Preact）。

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-inline-gallery をウェブコンポーネントまたは React 関数コンポーネントとして使用します。</p> <a href="#web-component" class="">↓ ウェブコンポーネント</a> <a href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## ウェブコンポーネント

適切な読み込みを保証するには、Bento コンポーネントの必須 CSS ライブラリをカスタムスタイルを追加する前にインクルードする必要があります。または、インラインで使用可能な軽量のアップグレード前のスタイルを使用することも可能です。[レイアウトとスタイル](#layout-and-style)を参照してください。

### npm によるインポート

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### `<script>` によるインクルード

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### 例

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

### レイアウトとスタイル

各 Bento コンポーネントには、[コンテンツシフト](https://web.dev/cls/)を発生させずに適切に読み込まれることを保証するために含める必要のある小さな CSS ライブラリがあります。読み取り順が重要であるため、カスタムスタイルの前にスタイルシートがインクルードされていることを手動で確認する必要があります。

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

または、軽量のアップグレード前のスタイルをインラインで使用可能にすることもできます。

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

### `<bento-inline-gallery-pagination>` の属性

#### `inset`

ページネーションインジケーターを内側に表示するかどうか（カルーセルに重ねて表示するかどうか）を指定するブール型の属性です。デフォルトは `false` です。

### `<bento-inline-gallery-thumbnails>` の属性

#### `aspect-ratio`

スライドを表示する幅と高さの比率を定義する数値です。この値はオプションです。

#### `loop`

サムネイルをループするかどうかを示すブール型の属性です。デフォルトは `false` です。

### スタイル設定

`bento-inline-gallery`、`bento-inline-gallery-pagination`、`bento-inline-gallery-thumbnails`、および `bento-base-carousel` 要素セレクターを使用して、ページネーションインジケーター、サムネイル、およびカルーセルのスタイルを自由に設定できます。

---

## Preact/React コンポーネント

### npm によるインポート

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

### レイアウトとスタイル

#### コンテナタイプ

`BentoInlineGallery` コンポーネントには、定義済みのレイアウトサイズタイプがあります。コンポーネントが正しくレンダリングされるようにするには、目的の CSS レイアウト（`width`で定義されたもの）を使って、コンポーネントとその直下の子コンポーネントにサイズを必ず適用してください。これらはインラインで適用できます。

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

または `className` を使用します。

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### `BentoInlineGalleryPagination` のプロップ

BentoInlineGalleryPagination は、[共通プロップ](../../../docs/spec/bento-common-props.md)の他に、以下のプロップもサポートしています。

#### `inset`

ページネーションインジケーターを内側に表示するかどうか（カルーセルに重ねて表示するかどうか）を指定するブール型の属性です。デフォルトは `false` です。

### `BentoInlineGalleryThumbnails` のプロップ

BentoInlineGalleryThumbnails は、[共通プロップ](../../../docs/spec/bento-common-props.md)の他に、以下のプロップもサポートしています。

#### `aspectRatio`

スライドを表示する幅と高さの比率を定義する数値です（この値はオプションです）。

#### `loop`

サムネイルをループするかどうかを示すブール型の属性です。デフォルトは `false` です。
