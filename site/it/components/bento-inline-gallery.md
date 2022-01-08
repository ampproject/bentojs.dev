---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/it/components/bento-inline-gallery/"
short_title: Galleria Inline
layout: layouts/component.njk
description: Permette di visualizzare le diapositive, con punti di impaginazione e miniature facoltativi.
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

Permette di visualizzare le diapositive, con punti di impaginazione e miniature facoltativi. La sua implementazione utilizza un componente [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel). Entrambi i componenti devono essere installati correttamente per l'ambiente di utilizzo (Componente Web vs Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Usare bento-inline-gallery come componente web o componente funzionale React:</p> <a class="bd-button" href="#web-component">↓ Componente Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Componente Web

Per garantirne il corretto caricamento, occorre inserire la libreria CSS richiesta per ogni componente Bento prima di aggiungere stili personalizzati. Si possono anche usare i poco ingombranti stili di pre-aggiornamento disponibili inline. Consultare la sezione [Layout e stile](#layout-and-style).

### Importazione tramite npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Esempio: inclusione tramite `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### Esempio

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

### Layout e stile

Ogni componente Bento dispone di una piccola libreria CSS che va inclusa per garantire un caricamento corretto senza [spostamenti dei contenuti](https://web.dev/cls/). A causa dell'importanza dell'ordine degli elementi, occorre verificare manualmente che i fogli di stile siano inclusi prima di qualsiasi stile personalizzato.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Oppure, si possono rendere disponibili i poco ingombranti stili di pre-aggiornamento inline:

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

### Attributi di `<bento-inline-gallery-pagination>`

#### `inset`

Attributo booleano che indica se visualizzare l'indicatore di divisione in pagine in rilievo (sovrapponendolo alla sequenza stessa). Valore predefinito `false`.

### Attributi di `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Valore numerico che definisce il rapporto tra larghezza e altezza con cui devono essere visualizzate le diapositive. Valore opzionale.

#### `loop`

Boolean attribute indicating whether thumbnails should loop. The default is `false`. Valore predefinito `false`.

### Stile

Si possono usare i selettori di elementi `bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails` e `bento-base-carousel` per definire liberamente lo stile dell'indicatore di divisione in pagine, delle miniature e della sequenza.

---

## Componente Preact/React

### Importazione tramite npm

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

### Layout e stile

#### Tipo di contenitore

Il componente `BentoInlineGallery` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti tramite un layout CSS opportuno (come quelli definiti con le proprietà `width`). Essi sono applicabili inline:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

Oppure tramite `className`:

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Oggetti per `BentoInlineGalleryPagination`

Oltre agli [oggetti comuni](../../../docs/spec/bento-common-props.md), BentoInlineGalleryPagination supporta gli oggetti seguenti:

#### `inset`

Attributo booleano che indica se visualizzare l'indicatore di divisione in pagine in rilievo (sovrapponendolo alla sequenza stessa). Valore predefinito `false`.

### Oggetti per `BentoInlineGalleryThumbnails`

Oltre agli [oggetti comuni](../../../docs/spec/bento-common-props.md), BentoInlineGalleryThumbnails supporta gli oggetti seguenti:

#### `aspectRatio`

Valore numerico che definisce il rapporto tra larghezza e altezza con cui devono essere visualizzate le diapositive (opzionale).

#### `loop`

Attributo booleano indicante se le miniature devono formare un ciclo. Valore predefinito `false`.
