---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/de/components/bento-inline-gallery/"
short_title: Inline Gallery
layout: layouts/component.njk
description: Zeigt Folien mit optionalen Paginierungspunkten und Miniaturansichten an.
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

Zeigt Folien mit optionalen Paginierungspunkten und Miniaturansichten an. Die Implementierung verwendet ein [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel). Beide Komponenten müssen unter Berücksichtigung der Umgebung ordnungsgemäß installiert werden (Webkomponente vs. Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-inline-gallery als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Bevor du benutzerdefinierte Stile hinzufügst, musst du die erforderliche CSS Bibliothek jeder Bento Komponente einbinden, um ein ordnungsgemäßes Laden zu gewährleisten. Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles verwenden, die inline verfügbar sind. Siehe [Layout und Style](#layout-and-style).

### Import via npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Einbinden via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### Beispiel

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

### Layout und Style

Jede Bento Komponente verfügt über eine kleine CSS Bibliothek, die du einbinden musst, um ein ordnungsgemäßes Laden ohne [Sprünge im Inhalt](https://web.dev/cls/) zu gewährleisten. Da hierbei die Reihenfolge wichtig ist, musst du manuell sicherstellen, dass Stylesheets vor allen benutzerdefinierten Styles eingebunden werden.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles auch inline verfügbar machen:

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

### Attribute für `<bento-inline-gallery-pagination>`

#### `inset`

Boolesches Attribut, das angibt, ob der Paginierungsindikator eingerückt angezeigt werden soll (und das Karussell selbst überlagert). Der Standardwert ist `false`.

### Attribute für `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Eine Zahl, die das Verhältnis (Breite zu Höhe) festlegt, in dem Folien angezeigt werden sollen. Dieser Wert ist optional.

#### `loop`

Boolesches Attribut, das angibt, ob Miniaturansichten als Schleife angezeigt werden sollen. Der Standardwert ist `false`.

### Styling

Du kannst die Selektoren der Elemente `bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails` und `bento-base-carousel` verwenden, um den Paginierungsindikator, die Miniaturansichten und das Karussell frei zu gestalten.

---

## Preact/React Komponente

### Import via npm

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

### Layout und Style

#### Containertyp

Die Komponente `BentoInlineGallery` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `width` definiert wird). Diese können inline angewendet werden:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

Oder via `className`:

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Eigenschaften für `BentoInlineGalleryPagination`

Zusätzlich zu den [allgemeinen Eigenschaften](../../../docs/spec/bento-common-props.md) unterstützt BentoInlineGalleryPagination die folgenden Eigenschaften:

#### `inset`

Boolesches Attribut, das angibt, ob der Paginierungsindikator eingerückt angezeigt werden soll (und das Karussell selbst überlagert). Der Standardwert ist `false`.

### Eigenschaften für `BentoInlineGalleryThumbnails`

Zusätzlich zu den [allgemeinen Eigenschaften](../../../docs/spec/bento-common-props.md) unterstützt BentoInlineGalleryThumbnails die folgenden Eigenschaften:

#### `aspectRatio`

Eine Zahl, die das Verhältnis (Breite zu Höhe) festlegt, in dem Folien angezeigt werden sollen. Dieser Wert ist optional.

#### `loop`

Boolesches Attribut, das angibt, ob Miniaturansichten als Schleife angezeigt werden sollen. Der Standardwert ist `false`.
