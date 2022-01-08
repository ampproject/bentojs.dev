---
id: bento-stream-gallery
title: Bento Stream Gallery
permalink: "/fr/components/bento-stream-gallery/"
short_title: Stream Gallery
layout: layouts/component.njk
description: Bento Stream Gallery permet d'afficher plusieurs éléments de contenu similaires à la fois le long d'un axe horizontal.
---

# Bento Stream Gallery

{% heroexample 'bento-stream-gallery' %}

Bento Stream Gallery permet d'afficher plusieurs éléments de contenu similaires à la fois le long d'un axe horizontal.

Il s'agit d'une spécialisation de Bento Base Carousel qui utilise [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) pour ajuster dynamiquement la taille et le nombre de diapositives affichées en fonction de la largeur du conteneur. Pour mettre en œuvre une UX plus personnalisée, consultez [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilisez bento-stream-gallery comme composant Web ou composant fonctionnel React :</p> <a class="bd-button" href="#web-component">↓ Composant Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Composant Web

Vous devez inclure la bibliothèque CSS requise de chaque composant Bento pour garantir un chargement correct et avant d'ajouter des styles personnalisés. Ou utilisez les styles de pré-mise à niveau légers intégrés disponibles. Voir [Mise en page et style](#layout-and-style).

### Importation via npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### Inclusion via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
    />
  </head>
  <body>
    <bento-stream-gallery id="my-stream-gallery" style="height: 150px;" min-item-width="75" max-item-width="100">
      <div style="height: 100px; background: red;">A</div>
      <div style="height: 100px; background: green;">B</div>
      <div style="height: 100px; background: blue;">C</div>
      <div style="height: 100px; background: yellow;">D</div>
      <div style="height: 100px; background: purple;">E</div>
      <div style="height: 100px; background: orange;">F</div>
      <div style="height: 100px; background: fuchsia;">G</div>
    </bento-stream-gallery>
  </body>
</html>
```

{% endexample %}

### Interactivité et utilisation de l'API

Les composants Bento sont hautement interactifs grâce à leur API. L'API du composant `bento-stream-gallery` est accessible en incluant la balise de script suivante dans votre document :

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Actions

##### next()

Déplace le carrousel vers l'avant en fonction du nombre de diapositives visibles.

```js
api.next();
```

##### prev()

Déplace le carrousel vers l'arrière en fonction du nombre de diapositives visibles.

```js
api.prev();
```

##### goToSlide(index: number)

Déplace le carrousel vers la diapositive spécifiée par l'argument `index`.

Remarque : `index` sera normalisé à un nombre supérieur ou égal à <code>0</code> et inférieur au nombre de diapositives donné.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Événements

Le composant Bento Stream Gallery vous permet d'enregistrer et de répondre aux événements suivants :

##### slideChange

Cet événement est déclenché lorsque l'index affiché par le carrousel a changé. Le nouvel index est disponible via `event.data.index`.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Mise en page et style

Chaque composant Bento possède une petite bibliothèque CSS que vous devez inclure pour garantir un chargement correct sans [écart de contenu](https://web.dev/cls/). En raison de la spécificité basée sur l'ordre, vous devez vous assurer manuellement que les feuilles de style sont incluses avant tout style personnalisé.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Vous pouvez également rendre les styles de pré-mise à niveau légers disponibles et intégrés :

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Exemple d'API

Cet exemple montre comment basculer programmatiquement sur la diapositive suivante/précédente et passer à des diapositives spécifiques.

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
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
    />
  </head>
  <body>
    <bento-stream-gallery id="my-stream-gallery" style="height: 150px;" min-item-width="75" max-item-width="100">
      <div style="height: 100px; background: red;">A</div>
      <div style="height: 100px; background: green;">B</div>
      <div style="height: 100px; background: blue;">C</div>
      <div style="height: 100px; background: yellow;">D</div>
      <div style="height: 100px; background: purple;">E</div>
      <div style="height: 100px; background: orange;">F</div>
      <div style="height: 100px; background: fuchsia;">G</div>
    </bento-stream-gallery>
    <script>
      (async () => {
        const streamGallery = document.querySelector('#my-stream-gallery');
        await customElements.whenDefined('bento-stream-gallery');
        const api = await streamGallery.getApi();

        // programatically go to next slide
        api.next();
        // programatically go to prev slide
        api.prev();
        // programatically go to slide
        api.goToSlide(4);
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### Attributs

#### Comportement

##### `controls`

Soit `"always"` , `"auto"` ou `"never"`, la valeur par défaut est `"auto"`. Cela détermine si et quand les flèches de navigation Précédent/Suivant sont affichées. Remarque : Lorsque `outset-arrows` est sur `true`, les flèches sont affichées `"always"`.

- `always` : les flèches sont toujours affichées.
- `auto` : les flèches s'affichent lorsque le carrousel a reçu la dernière interaction via la souris et ne s'affichent pas lorsque le carrousel a reçu la dernière interaction via commande tactile. Lors du premier chargement pour les appareils tactiles, des flèches sont affichées jusqu'à la première interaction.
- `never` : les flèches ne sont jamais affichées.

##### `extra-space`

Soit `"around"` ou indéfini. Cela détermine comment l'espace supplémentaire est alloué après l'affichage du nombre calculé de diapositives visibles dans le carrousel. S'il est défini sur `"around"`, l'espace est uniformément réparti autour du carrousel avec `justify-content: center`; sinon, un espace est alloué à droite du carrousel pour les documents LTR et à gauche pour les documents RTL.

##### `loop`

Soit `true` ou `false`, la valeur par défaut est `true`. Lorsqu'il est défini sur true, le carrousel permettra à l'utilisateur de passer du premier élément au dernier élément et vice versa. Il doit y avoir au moins trois diapositives présentes pour pouvoir effectuer la boucle.

##### `outset-arrows`

Soit `true` ou `false`, la valeur par défaut est `false`. S'il est défini sur true, le carrousel affichera ses flèches sortantes et de chaque côté des diapositives. Notez qu'avec les flèches de départ, le conteneur de diapositives aura une longueur effective de 100px de moins que l'espace alloué pour son conteneur donné - 50px par flèche de chaque côté. Lorsqu'il est défini sur false, le carrousel affichera ses flèches incrustées et superposées sur les bords gauche et droit des diapositives.

##### `peek`

Un nombre, la valeur par défaut est `0`. Il détermine le nombre de diapositives supplémentaires à afficher (sur un ou les deux côtés de la diapositive actuelle) en tant qu'affordance pour l'utilisateur indiquant qu'il peut balayer le carrousel.

#### Visibilité des diapositives de la galerie

##### `min-visible-count`

Un nombre, la valeur par défaut est `1`. Détermine le nombre minimum de diapositives qui doivent être affichées à un moment donné. Des valeurs fractionnaires peuvent être utilisées pour rendre visible une partie d'une ou plusieurs diapositives supplémentaires.

##### `max-visible-count`

Un nombre, par défaut [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Détermine le nombre maximum de diapositives qui doivent être affichées à un moment donné. Des valeurs fractionnaires peuvent être utilisées pour rendre visible une partie d'une ou plusieurs diapositives supplémentaires.

##### `min-item-width`

Un nombre, la valeur par défaut est `1`. Détermine la largeur minimale de chaque élément, utilisée pour déterminer le nombre d'éléments entiers pouvant être affichés à la fois dans la largeur totale de la galerie.

##### `max-item-width`

Un nombre, par défaut [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Détermine la largeur maximale de chaque élément, utilisée pour déterminer le nombre d'éléments entiers pouvant être affichés à la fois dans la largeur totale de la galerie.

#### Accrochage des diapositives

##### `slide-align`

Soit `start` soit `center`. Lors du démarrage de l'alignement, le début d'une diapositive (par exemple le bord gauche, lors d'un alignement horizontal) est aligné avec le début d'un carrousel. Lors de l'alignement du centre, le centre d'une diapositive est aligné avec le centre d'un carrousel.

##### `snap`

Soit `true` ou `false`, la valeur par défaut est `true`. Détermine si le carrousel doit ou non s'accrocher aux diapositives lors du défilement.

### Styles

Vous pouvez utiliser `bento-stream-gallery` pour styliser librement la streamGallery.

---

## Composant Preact/React

### Importation via npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import React from 'react';
import {BentoStreamGallery} from '@bentoproject/stream-gallery/react';
import '@bentoproject/stream-gallery/styles.css';

function App() {
  return (
    <BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} minItemWidth="75" maxItemWidth="100">
      <img src="img1.png" />
      <img src="img2.png" />
      <img src="img3.png" />
      <img src="img4.png" />
      <img src="img5.png" />
      <img src="img6.png" />
      <img src="img7.png" />
    </BentoStreamGallery>
  );
}
```

### Interactivité et utilisation de l'API

Les composants Bento sont hautement interactifs via leur API. L'API `BentoStreamGallery` est accessible en passant une `ref` :

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoStreamGallery ref={ref}>
      <img src="img1.png" />
      <img src="img2.png" />
      <img src="img3.png" />
      <img src="img4.png" />
      <img src="img5.png" />
      <img src="img6.png" />
      <img src="img7.png" />
    </BentoStreamGallery>
  );
}
```

#### Actions

L'API `BentoStreamGallery` vous permet d'effectuer les actions suivantes :

##### next()

Déplace le carrousel vers l'avant de `advanceCount` diapositives.

```javascript
ref.current.next();
```

##### prev()

Déplace le carrousel vers l'arrière de `advanceCount` diapositives.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Déplace le carrousel vers la diapositive spécifiée par l'argument `index`. Remarque : `index` sera normalisé à un nombre supérieur ou égal à `0` et inférieur au nombre de diapositives donné.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### Événements

##### onSlideChange

Cet événement est déclenché lorsque l'index affiché par le carrousel a changé.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Mise en page et style

#### Type de conteneur

Le composant `BentoStreamGallery` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise à jour CSS souhaitée (comme celle définie avec `width` ). Ceux-ci peuvent être appliqués de manière intégrée :

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

Ou via `className` :

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Accessoires

#### Propriétés communes

Ce composant prend en charge les [propriétés communes](../../../docs/spec/bento-common-props.md) pour les composants React et Preact.

#### Comportement

##### `controls`

Soit `"always"` , `"auto"` ou `"never"`, la valeur par défaut est `"auto"`. Cela détermine si et quand les flèches de navigation Précédent/Suivant sont affichées. Remarque : Lorsque `outset-arrows` est sur `true`, les flèches sont affichées `"always"`.

- `always` : les flèches sont toujours affichées.
- `auto` : les flèches s'affichent lorsque le carrousel a reçu la dernière interaction via la souris et ne s'affichent pas lorsque le carrousel a reçu la dernière interaction via commande tactile. Lors du premier chargement pour les appareils tactiles, des flèches sont affichées jusqu'à la première interaction.
- `never` : les flèches ne sont jamais affichées.

##### `extraSpace`

Soit `"around"` ou indéfini. Cela détermine comment l'espace supplémentaire est alloué après l'affichage du nombre calculé de diapositives visibles dans le carrousel. S'il est défini sur `"around"`, l'espace est uniformément réparti autour du carrousel avec `justify-content: center`; sinon, un espace est alloué à droite du carrousel pour les documents LTR et à gauche pour les documents RTL.

##### `loop`

Soit `true` ou `false`, la valeur par défaut est `true`. Lorsqu'il est défini sur true, le carrousel permettra à l'utilisateur de passer du premier élément au dernier élément et vice versa. Il doit y avoir au moins trois diapositives présentes pour pouvoir effectuer la boucle.

##### `outsetArrows`

Soit `true` ou `false`, la valeur par défaut est `false`. S'il est défini sur true, le carrousel affichera ses flèches sortantes et de chaque côté des diapositives. Notez qu'avec les flèches de départ, le conteneur de diapositives aura une longueur effective de 100px de moins que l'espace alloué pour son conteneur donné - 50px par flèche de chaque côté. Lorsqu'il est défini sur false, le carrousel affichera ses flèches incrustées et superposées sur les bords gauche et droit des diapositives.

##### `peek`

Un nombre, la valeur par défaut est `0`. Il détermine le nombre de diapositives supplémentaires à afficher (sur un ou les deux côtés de la diapositive actuelle) en tant qu'affordance pour l'utilisateur indiquant qu'il peut balayer le carrousel.

#### Visibilité des diapositives de la galerie

##### `minVisibleCount`

Un nombre, la valeur par défaut est `1`. Détermine le nombre minimum de diapositives qui doivent être affichées à un moment donné. Des valeurs fractionnaires peuvent être utilisées pour rendre visible une partie d'une ou plusieurs diapositives supplémentaires.

##### `maxVisibleCount`

Un nombre, par défaut [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Détermine le nombre maximum de diapositives qui doivent être affichées à un moment donné. Des valeurs fractionnaires peuvent être utilisées pour rendre visible une partie d'une ou plusieurs diapositives supplémentaires.

##### `minItemWidth`

Un nombre, la valeur par défaut est `1`. Détermine la largeur minimale de chaque élément, utilisée pour déterminer le nombre d'éléments entiers pouvant être affichés à la fois dans la largeur totale de la galerie.

##### `maxItemWidth`

Un nombre, par défaut [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Détermine la largeur maximale de chaque élément, utilisée pour déterminer le nombre d'éléments entiers pouvant être affichés à la fois dans la largeur totale de la galerie.

#### Accrochage des diapositives

##### `slideAlign`

Soit `start` soit `center`. Lors du démarrage de l'alignement, le début d'une diapositive (par exemple le bord gauche, lors d'un alignement horizontal) est aligné avec le début d'un carrousel. Lors de l'alignement du centre, le centre d'une diapositive est aligné avec le centre d'un carrousel.

##### `snap`

Soit `true` ou `false`, la valeur par défaut est `true`. Détermine si le carrousel doit ou non s'accrocher aux diapositives lors du défilement.
