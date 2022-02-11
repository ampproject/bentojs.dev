---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/pt_BR/components/bento-inline-gallery/"
short_title: Galeria Inline
layout: layouts/component.njk
description: Exibe slides, com pontos de paginação opcionais e miniaturas.
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

Exibe slides, com pontos de paginação opcionais e miniaturas. Sua implementação utiliza o [Carrossel Base Bento](https://www.npmjs.com/package/@bentoproject/base-carousel). Ambos os componentes devem ser instalados corretamente para o ambiente (Web Component vs Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use bento-inline-gallery como um componente da web ou um componente funcional React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Você deve incluir a biblioteca CSS necessária para cada componente Bento de forma a garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#layout-and-style) .

### Importar via npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Incluir via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### Exemplo

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

### Layout e estilo

Cada componente Bento possui uma pequena biblioteca CSS que você precisa incluir para garantir o carregamento adequado sem [alterações na posição do conteúdo](https://web.dev/cls/). Devido ao funcionamento que depende da ordem de carregamento, você deve garantir manualmente que as folhas de estilo sejam incluídas antes de qualquer estilo personalizado.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Como alternativa, você pode incorporar os estilos de leves pré-upgrade:

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

### Atributos em `<bento-inline-gallery-pagination>`

#### `inset`

Atributo booleano que indica se o indicador de paginação deve ser exibido como inserção (sobrepondo o próprio carrossel). O padrão é `false` .

### Atributos em `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Um número que define a proporção entre a largura e a altura em que os slides devem ser exibidos. Este valor é opcional.

#### `loop`

Atributo booleano que indica se as miniaturas devem ser repetidas. O padrão é `false`.

### Aplicação de estilos

Você pode usar seletores de elemento `bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails` e `bento-base-carousel` para estilizar livremente o indicador de paginação, miniaturas e carrossel.

---

## Componente Preact/React

### Importar via npm

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

### Layout e estilo

#### Tipo de contêiner

O componente `BentoInlineGallery` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de aplicar um tamanho ao componente e seus filhos imediatos através de um layout CSS desejado (como um definido com `width`). Eles podem ser aplicados inline:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

Ou via `className` :

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Propriedades para `BentoInlineGalleryPagination`

Além das [props comuns](../../../docs/spec/bento-common-props.md), o BentoInlineGalleryPagination oferece suporte às props abaixo:

#### `inset`

Atributo booleano que indica se o indicador de paginação deve ser exibido como inserção (sobrepondo o próprio carrossel). O padrão é `false`.

### Propriedades para `BentoInlineGalleryThumbnails`

Além das [props comuns](../../../docs/spec/bento-common-props.md), o BentoInlineGalleryThumbnails oferece suporte às props abaixo:

#### `aspectRatio`

Um número que define a proporção entre a largura e a altura em que os slides devem ser exibidos (opcional).

#### `loop`

Atributo booleano que indica se as miniaturas devem ser repetidas. O padrão é `false`.
