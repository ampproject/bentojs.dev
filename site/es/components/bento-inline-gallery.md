---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/es/components/bento-inline-gallery/"
short_title: Inline Gallery
layout: layouts/component.njk
description: Muestra las diapositivas, con puntos de paginación y miniaturas opcionales.
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

Muestra diapositivas, con puntos de paginación y miniaturas opcionales. Su implementación utiliza un [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel). Ambos componentes deben estar correctamente instalados en el entorno (Componente web vs Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-inline-gallery como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

Debe incluir la biblioteca CSS correspondiente para cada componente de Bento si desea garantizar que se cargue adecuadamente, y lo deberá hacer antes de incorporar estilos personalizados. O utilice los estilos precargados ligeros que estén disponibles en línea. Consulte [Diseño y estilo](#layout-and-style).

### Importar mediante npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Incluir mediante `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### Ejemplo

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

### Diseño y estilo

Cada componente de Bento dispone de una pequeña biblioteca CSS que debe incluir para garantizar que se cargue correctamente sin [cambios de contenido](https://web.dev/cls/). Debido a las especificaciones basadas en el orden, debe asegurarse manualmente de que las hojas de estilo se incluyan antes de los estilos personalizados.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Otra posibilidad es hacer que los estilos ligeros pre-actualizados estén disponibles en los estilos integrados en el código:

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

### Atributos de `<bento-inline-gallery-pagination>`

#### `inset`

Atributo booleano que indica si se muestra el indicador de paginación como inset (superpuesto al propio carrusel). El valor predeterminado es `false`.

### Atributos de `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Un número que define la relación entre el ancho y el alto con el que deben mostrarse las diapositivas. Este valor es opcional.

#### `loop`

Atributo booleano que indica si las miniaturas deben entrar en bucle. El valor predeterminado es `false`.

### Diseño

Puede utilizar los selectores de elementos `bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails`, y `bento-base-carousel` para dar estilo al indicador de paginación, a las miniaturas y al carrusel de forma gratuita.

---

## El componente Preact/React

### Importar mediante npm

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

### Diseño y estilo

#### Tipo de contenedor

El componente `BentoInlineGallery` tiene un tipo de tamaño de diseño definido. Para asegurarse de que el componente se visualiza correctamente, asegúrese de aplicar un tamaño al componente y a sus hijos inmediatos mediante un diseño de CSS deseado (como uno definido con `width`). Esto puede aplicarse en los estilos integrados en el código:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

O mediante `className`:

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Props para `BentoInlineGalleryPagination`

Además de los [props comunes](../../../docs/spec/bento-common-props.md), BentoInlineGalleryPagination es compatible con los siguientes props:

#### `inset`

Atributo booleano que indica si se muestra el indicador de paginación como inset (superpuesto al propio carrusel). El valor predeterminado es `false`.

### Props para `BentoInlineGalleryThumbnails`

Además de los [props comunes](../../../docs/spec/bento-common-props.md), BentoInlineGalleryThumbnails es compatible con los siguientes props:

#### `aspectRatio`

Un número que define la relación entre el ancho y el alto con el que deben mostrarse las diapositivas (esto es opcional).

#### `loop`

El atributo booleano que indica si las miniaturas deben entrar en bucle. El valor predeterminado es `false`.
