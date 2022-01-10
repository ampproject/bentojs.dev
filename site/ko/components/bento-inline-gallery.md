---
id: bento-inline-gallery
title: Bento 인라인 갤러리
permalink: "/ko/components/bento-inline-gallery/"
short_title: 인라인 갤러리
layout: layouts/component.njk
description: 페이지 처리를 위한 점(.) 및 썸네일이 포함된 슬라이드를 표시합니다.
---

# Bento 인라인 갤러리

{% heroexample 'bento-inline-gallery' %}

페이지 처리를 위한 점(.) 및 썸네일이 포함된 슬라이드를 표시합니다. 구현 시 [Bento 기본 캐러셀](https://www.npmjs.com/package/@bentoproject/base-carousel)이 사용됩니다. 두 컴포넌트 모두 환경에 따라 적절히 설치되어야 합니다(웹 컴포넌트 또는 Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>bento-inline-gallery을 웹 컴포넌트나 React 함수형 컴포넌트로 사용하세요.</p>   <a class="bd-button" href="#web-component">↓ 웹 컴포넌트</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## 웹 컴포넌트

적절한 로딩을 보장하고 사용자 지정 스타일을 추가하기 전에 각 Bento 컴포넌트의 필수 CSS 라이브러리를 삽입해야 합니다. 또는 인라인으로 지원되는 경량의 사전 업그레이드 스타일을 사용해 보세요. [레이아웃 및 스타일](#layout-and-style)을 참조하시길 바랍니다.

### npm을 통해 가져오기

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### `<script>`를 통해 삽입하기

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### 예시

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

### 레이아웃 및 스타일

Bento 컴포넌트에는 [콘텐츠 이동](https://web.dev/cls/) 없이 적절한 로드를 보장하는 데 필요한 작은 CSS 라이브러리가 있습니다. 순서 기반의 특수성으로 인해 사용자 지정 스타일보다 스타일시트가 먼저 삽입되어 있는지 수동으로 확인해야 합니다.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

또는 경량의 사전 업그레이드 스타일을 인라인으로 활용할 수도 있습니다.

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

### `<bento-inline-gallery-pagination>`의 속성

#### `inset`

페이지 처리 표시자를 inset으로 표시할지 여부를 알려주는 부울 속성(캐러셀 자체의 오버레이). 기본값은 `false`입니다.

### `<bento-inline-gallery-thumbnails>`의 속성

#### `aspect-ratio`

숫자: 슬라이드가 표시될 너비와 높이의 비율입니다. 이 값은 선택 사항입니다.

#### `loop`

썸네일이 루프로 설정되어야 하는지를 나타내는 부울 속성입니다. 기본값은 `false`입니다.

### 스타일링

`bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails` 및 `bento-base-carousel` 요소 선택자를 사용하여 페이지 처리 표시자, 썸네일 및 캐러셀의 스타일을 자유롭게 지정할 수 있습니다.

---

## Preact/React 컴포넌트

### npm을 통해 가져오기

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

### 레이아웃 및 스타일

#### 컨테이너 유형

`BentoInlineGallery` 컴포넌트의 경우 레이아웃 크기 유형이 정의되어 있습니다. 컴포넌트가 적절히 렌더링되려면 CSS 레이아웃(예: `width`로 정의된 레이아웃)을 통해 컴포넌트와 직접 하위 요소에 크기를 적용해야 합니다.

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

또는 `className`을 통해 적용 가능합니다.

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### `BentoInlineGalleryPagination` 프로퍼티

BentoInlineGalleryPagination은 [일반 프로퍼티](../../../docs/spec/bento-common-props.md) 외에도 아래와 같은 프로퍼티를 지원합니다.

#### `inset`

페이지 처리 표시자를 inset으로 표시할지 여부를 알려주는 부울 속성(캐러셀 자체의 오버레이). 기본값은 `false`입니다.

### `BentoInlineGalleryThumbnails` 프로퍼티

BentoInlineGalleryThumbnails는 [일반 프로퍼티](../../../docs/spec/bento-common-props.md) 외에도 아래와 같은 프로퍼티를 지원합니다.

#### `aspectRatio`

숫자: 슬라이드가 표시될 너비와 높이의 비율입니다. 이 값은 선택 사항입니다.

#### `loop`

썸네일이 루프로 설정되어야 하는지를 나타내는 부울 속성입니다. 기본값은 `false`입니다.