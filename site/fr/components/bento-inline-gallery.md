---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/fr/components/bento-inline-gallery/"
short_title: Galerie en ligne
layout: layouts/component.njk
description: Affiche les diapositives, avec des points de pagination et des vignettes en option.
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

Affiche les diapositives, avec des points de pagination et des miniatures en option. Sa mise en œuvre utilise un carrousel [Bento Base](https://www.npmjs.com/package/@bentoproject/base-carousel). Les deux composants doivent être correctement installés pour l'environnement (Web Component vs Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilisez bento-inline-gallery comme composant Web ou composant fonctionnel React :</p> <a class="bd-button" href="#web-component">↓ Composant Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Composant Web

Vous devez inclure la bibliothèque CSS requise de chaque composant Bento pour garantir un chargement correct et avant d'ajouter des styles personnalisés. Ou utilisez les styles de pré-mise à niveau légers intégrés disponibles. Voir [Mise en page et style](#layout-and-style).

### Importation via npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Inclusion via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
```

### Exemple

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

### Mise en page et style

Chaque composant Bento possède une petite bibliothèque CSS que vous devez inclure pour garantir un chargement correct sans [écart de contenu](https://web.dev/cls/). En raison de la spécificité basée sur l'ordre, vous devez vous assurer manuellement que les feuilles de style sont incluses avant tout style personnalisé.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Vous pouvez également rendre les styles de pré-mise à niveau légers disponibles et intégrés :

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

### Attributs sur `<bento-inline-gallery-pagination>`

#### `inset`

Attribut booléen indiquant si l'indicateur de pagination doit être inséré (superposant le carrousel lui-même). La valeur par défaut est `false`.

### Attributs sur `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Un nombre définissant le rapport largeur-hauteur dans lequel les diapositives doivent être affichées. Cette valeur est facultative.

#### `loop`

Attribut booléen indiquant si les vignettes doivent s'afficher en boucle. La valeur par défaut est `false`.

### Styles

Vous pouvez utiliser les éléments `bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails` et `bento-base-carousel` pour styliser librement l'indicateur de pagination, les vignettes et le carrousel.

---

## Composant Preact/React

### Importation via npm

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

### Mise en page et style

#### Type de conteneur

Le composant `BentoInlineGallery` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise à jour CSS souhaitée (comme celle définie avec `width` ). Ceux-ci peuvent être appliqués de manière intégrée :

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

### Accessoires pour `BentoInlineGalleryPagination`

En plus des [propriétés communes](../../../docs/spec/bento-common-props.md), BentoInlineGalleryPagination prend en charge les propriétés ci-dessous :

#### `inset`

Attribut booléen indiquant si l'indicateur de pagination doit être inséré (superposant le carrousel lui-même). La valeur par défaut est `false`.

### Propriétés pour `BentoInlineGalleryThumbnails`

En plus des [propriétés communes](../../../docs/spec/bento-common-props.md), BentoInlineGalleryThumbnails prend en charge les propriétés ci-dessous :

#### `aspectRatio`

Un numéro définissant le rapport largeur-hauteur dans lequel les diapositives doivent être affichées (ceci est facultatif).

#### `loop`

Attribut booléen indiquant si les vignettes doivent s'afficher en boucle. La valeur par défaut est `false`.
