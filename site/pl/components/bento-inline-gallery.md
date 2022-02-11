---
id: bento-inline-gallery
title: Składnik Bento Inline Gallery
permalink: "/pl/components/bento-inline-gallery/"
short_title: Inline Gallery
layout: layouts/component.njk
description: Wyświetla slajdy z opcjonalnymi kropkami paginacji i miniaturami.
---

# Składnik Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

Wyświetla slajdy, z opcjonalnymi kropkami paginacji i miniaturami. Jego implementacja wykorzystuje składnik [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel). Oba składniki muszą być odpowiednio zainstalowane dla danego środowiska (składnik internetowy albo Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Element bento-inline-gallery można stosować jako składnik internetowy lub składnik funkcjonalny React:</p>   <a class="bd-button" href="#web-component">↓ Składnik internetowy</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Składnik internetowy

Przed dodaniem własnych stylów musisz dołączyć wymaganą bibliotekę CSS każdego składnika Bento, aby zagwarantować prawidłowe ładowanie. Można też użyć dostępnych inline uproszczonych stylów sprzed uaktualnienia. Patrz sekcja [Układ i styl](#layout-and-style).

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Dołączanie za pomocą znacznika `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### Przykład

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

### Układ i styl

Każdy składnik Bento ma małą bibliotekę CSS, którą należy dołączyć, aby zagwarantować prawidłowe ładowanie bez [przesunięć treści](https://web.dev/cls/). Ze względu na specyfikę opartą na kolejności musisz ręcznie zapewnić dołączanie arkuszy stylów przed wszelkimi stylami niestandardowymi.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Można również udostępnić dostępne inline uproszczone style sprzed uaktualnienia:

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

### Atrybuty w sekcji `<bento-inline-gallery-pagination>`

#### `inset`

Atrybut logiczny określający, czy wskaźnik paginacji ma być wyświetlany jako wstawka (nakładająca się na samą karuzelę). Wartość domyślna to `false`.

### Atrybuty w sekcji `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Liczba: proporcja szerokości do wysokości, w jakiej mają być wyświetlane slajdy. Wartość ta jest opcjonalna.

#### `loop`

Atrybut logiczny wskazujący, czy miniatury mają być zapętlone. Wartość domyślna to `false`.

### Styling

Aby dowolnie stylizować wskaźnik paginacji, miniatury i karuzelę, można użyć selektorów elementów `bento-inline-gallery`, `bento-inline-gallery-paginacja`, `bento-inline-gallery-thumbnails` i `bento-base-carousel`.

---

## Składnik Preact/React

### Import za pomocą narzędzia npm

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

### Układ i styl

#### Typ kontenera

Składnik `BentoInlineGallery` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe renderowanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `width`). Można je zastosować inline:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

Albo za pomocą atrybutu `className`:

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Właściwości elementu `BentoInlineGalleryPagination`

Oprócz [wspólnych właściwości](../../../docs/spec/bento-common-props.md), składnik BentoInlineGalleryPagination obsługuje poniższe właściwości:

#### `inset`

Atrybut logiczny określający, czy wskaźnik paginacji ma być wyświetlany jako wstawka (nakładająca się na samą karuzelę). Wartość domyślna to `false`.

### Właściwości elementu `BentoInlineGalleryThumbnails`

Oprócz [wspólnych właściwości](../../../docs/spec/bento-common-props.md), składnik BentoInlineGalleryThumbnails obsługuje poniższe właściwości:

#### `aspectRatio`

Liczba określająca proporcję szerokości do wysokości, w jakiej mają być wyświetlane slajdy (wartość opcjonalna).

#### `loop`

Atrybut logiczny wskazujący, czy miniatury mają być zapętlone. Wartość domyślna to `false`.
