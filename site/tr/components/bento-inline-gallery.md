---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/tr/components/bento-inline-gallery/"
short_title: Inline Gallery
layout: layouts/component.njk
description: İsteğe bağlı sayfalandırma noktaları ve küçük resimlerle slaytları görüntüler.
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

İsteğe bağlı sayfalandırma noktaları ve küçük resimlerle slaytları görüntüler. Uygulaması bir [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel) kullanır. Her iki bileşen de ortam için uygun şekilde kurulmalıdır (Web Bileşeni ve Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-inline-gallery'ı bir web bileşeni veya bir React işlevsel bileşeni olarak kullanın:</p> <a class="bd-button" href="#web-component">↓ Web Bileşeni</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Web Bileşeni

Uygun yüklemeyi garanti etmek için ve özel stiller eklemeden önce her Bento bileşeninin gerekli CSS kitaplığını eklemelisiniz. Veya satır içi olarak sunulan hafif ön yükseltme stillerini kullanın. [Yerleşim ve stil](#layout-and-style) konusuna bakın.

### npm ile içe aktarma

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### `<script>` ile ekleme

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### Örnek

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

### Yerleşim ve stil

[Her Bento bileşeni, içerik kaymaları](https://web.dev/cls/) olmadan düzgün yüklemeyi garanti etmek için eklemeniz gereken küçük bir CSS kitaplığına sahiptir. Düzene dayalı özgüllük nedeniyle, herhangi bir özel stilden önce stil sayfalarının dahil edilmesini manuel olarak sağlamalısınız.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Alternatif olarak, hafif ön yükseltme stillerini satır içi olarak da kullanıma sunabilirsiniz:

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

### `<bento-inline-gallery-pagination>` üzerinde öznitelikler

#### `inset`

Sayfalandırma göstergesinin iç metin olarak görüntülenip görüntülenmeyeceğini belirten Boole özelliği (döngünün kendisini kaplar). Varsayılan `false` şeklindedir.

### `<bento-inline-gallery-thumbnails>` üzerinde öznitelikler

#### `aspect-ratio`

Slaytların görüntülenmesi gereken genişlik ve yükseklik oranını tanımlayan bir Sayı. Bu değer isteğe bağlıdır.

#### `loop`

Küçük resimlerin döngü yapıp yapmayacağını belirten Boole özelliği. Varsayılan `false` şeklindedir.

### Stil

`bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails` ve `bento-base-carousel` öğe seçicilerini, sayfalandırma göstergesine, küçük resimlere ve döngüye özgürce stil vermek için kullanabilirsiniz.

---

## Preact/React Bileşeni

### npm ile içe aktarma

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

### Yerleşim ve stil

#### Kapsayıcı tipi

`BentoInlineGallery` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin, `width` ile tanımlanmış bir düzen). Bunlar satır içinde uygulanabilir:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

Veya `className` aracılığıyla:

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### `BentoInlineGalleryPagination` için aksesuarlar

BentoInlineGalleryPagination, [ortak aksesuarlara](../../../docs/spec/bento-common-props.md) ek olarak aşağıdaki aksesuarları da destekler:

#### `inset`

Sayfalandırma göstergesinin iç metin olarak görüntülenip görüntülenmeyeceğini belirten Boole özelliği (döngünün kendisini kaplar). Varsayılan `false` şeklindedir.

### `BentoInlineGalleryThumbnails` için aksesuarlar

BentoInlineGalleryThumbnails, [ortak aksesuarlara](../../../docs/spec/bento-common-props.md) ek olarak aşağıdaki aksesuarları da destekler:

#### `aspectRatio`

Slaytların görüntülenmesi gereken genişlik ve yükseklik oranını tanımlayan bir Sayı (bu isteğe bağlıdır).

#### `loop`

Küçük resimlerin döngü yapıp yapmayacağını belirten Boole özelliği. Varsayılan `false` şeklindedir.
