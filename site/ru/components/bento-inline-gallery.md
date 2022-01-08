---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/ru/components/bento-inline-gallery/"
short_title: Inline Gallery
layout: layouts/component.njk
description: Компонент отображает слайды с опциональными миниатюрами и индикатором страниц.
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

Компонент отображает слайды с опциональными миниатюрами и индикатором страниц. Реализация компонента основана на [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel), поэтому для его работы требуется установка обоих компонентов в соответствующем окружении (веб-компоненты или Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Используйте bento-inline-gallery в виде веб-компонента или функционального компонента React:</p> <a class="bd-button" href="#web-component">↓ Веб-компонент</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Веб-компонент

Чтобы гарантировать правильную загрузку, вы должны подключить необходимые CSS-библиотеки всех компонентов Bento (это нужно сделать перед добавлением пользовательских стилей). Как вариант, вы можете использовать встраиваемые облегченные стили от предыдущей версии компонента. См. [Макет и стиль](#layout-and-style).

### Импорт через npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Подключение через `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### Пример

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

### Макет и стиль

У каждого компонента Bento есть небольшая библиотека CSS, которую следует подключать, чтобы гарантировать правильную загрузку без [сдвигов содержимого](https://web.dev/cls/). Поскольку приоритетность CSS определяется порядком, следует вручную убедиться, что таблицы стилей подключаются раньше каких-либо пользовательских стилей.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Alternatively, you may also make the light-weight pre-upgrade styles available inline:

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

### Атрибуты элемента `<bento-inline-gallery-pagination>`

#### `inset`

Логический атрибут. Если включить его, то индикатор страниц будет отображаться поверх кольцевой галереи, а не снаружи. По умолчанию — `false`.

### Атрибуты элемента `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Число, определяющее отношение ширины отображаемых слайдов к их высоте. Это значение является необязательным.

#### `loop`

Логический атрибут, включающий зацикливание миниатюр. По умолчанию — `false`.

### Стилизация

Вы можете использовать селекторы элементов `bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails` и `bento-base-carousel` для свободной стилизации индикатора страниц, миниатюр и кольцевой галереи.

---

## Компонент для Preact/React

### Импорт через npm

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

### Макет и стиль

#### Тип контейнера

Компонент `BentoInlineGallery` использует тип макета с указанием размера. Чтобы обеспечить правильный рендеринг компонента, необходимо указать размер самого компонента и его непосредственных дочерних элементов при помощи свойств CSS (например, `width`). Их можно указывать как непосредственно в коде:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

...так и при помощи `className`:

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Свойства элемента `BentoInlineGalleryPagination`

В дополнение к [стандартным свойствам](../../../docs/spec/bento-common-props.md) элемент BentoInlineGalleryPagination поддерживает свойства, приведенные ниже:

#### `inset`

Логический атрибут. Если включить его, то индикатор страниц будет отображаться поверх кольцевой галереи, а не снаружи. По умолчанию — `false`.

### Свойства элемента `BentoInlineGalleryThumbnails`

В дополнение к [стандартным свойствам](../../../docs/spec/bento-common-props.md) элемент BentoInlineGalleryThumbnails поддерживает свойства, приведенные ниже:

#### `aspectRatio`

Число, определяющее отношение ширины отображаемых слайдов к их высоте (это значение является необязательным).

#### `loop`

Логический атрибут, включающий зацикливание миниатюр. По умолчанию — `false`.
