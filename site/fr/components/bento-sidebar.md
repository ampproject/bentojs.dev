---
id: bento-sidebar
title: Bento Sidebar
permalink: "/fr/components/bento-sidebar/"
short_title: Barre latérale
layout: layouts/component.njk
description: |-
 "Fournit un moyen d'afficher le métacontenu destiné à un accès temporaire tel que"
  la navigation, les liens, les boutons ou les menus.
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

Offre un moyen d'afficher du méta-contenu destiné à un accès temporaire tel que la navigation, les liens, les boutons, les menus. La barre latérale peut être révélée en appuyant sur un bouton tandis que le contenu principal reste visuellement en dessous.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilisez bento-sidebar comme composant Web ou composant fonctionnel React :</p> <a class="bd-button" href="#web-component">↓ Composant Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Composant Web

Vous devez inclure la bibliothèque CSS requise de chaque composant Bento pour garantir un chargement correct et avant d'ajouter des styles personnalisés. Ou utilisez les styles de pré-mise à niveau légers intégrés disponibles. Voir [Mise en page et style](#layout-and-style).

### Importation via npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### Inclusion via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
    />
  </head>
  <body>
    <bento-sidebar id="sidebar1" side="right" hidden>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </bento-sidebar>

    <div class="buttons" style="margin-top: 8px">
      <button id="open-sidebar">Open sidebar</button>
    </div>

    <script>
      (async () => {
        const sidebar = document.querySelector('#sidebar1');
        await customElements.whenDefined('bento-sidebar');
        const api = await sidebar.getApi();

        // set up button actions
        document.querySelector('#open-sidebar').onclick = () => api.open();
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### Interactivité et utilisation de l'API

Les composants Bento sont hautement interactifs grâce à leur API. L'API du composant `bento-sidebar` est accessible en incluant la balise de script suivante dans votre document :

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Actions

L'API `bento-sidebar` vous permet d'effectuer les actions suivantes :

##### open()

Ouvre la barre latérale.

```javascript
api.open();
```

##### close()

Ferme la barre latérale.

```javascript
api.close();
```

##### toggle()

Change l'état d'ouverture de la barre latérale.

```javascript
api.toggle(0);
```

### Mise en page et style

Chaque composant Bento possède une petite bibliothèque CSS que vous devez inclure pour garantir un chargement correct sans [écart de contenu](https://web.dev/cls/). En raison de la spécificité basée sur l'ordre, vous devez vous assurer manuellement que les feuilles de style sont incluses avant tout style personnalisé.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Vous pouvez également rendre les styles de pré-mise à niveau légers disponibles et intégrés :

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Styles personnalisés

Le composant `bento-sidebar` peut être stylisé avec le CSS standard.

- La valeur `width` de la `bento-sidebar` peut être définie pour ajuster la largeur à partir de la valeur prédéfinie de 45px.
- La hauteur de la `bento-sidebar` peut être réglée pour ajuster la hauteur de la barre latérale, si nécessaire. Si la hauteur dépasse 100vw, la barre latérale aura une barre de défilement verticale. La hauteur prédéfinie de la barre latérale est de 100vw et peut être remplacée dans le CSS pour la raccourcir.
- L'état actuel de la barre latérale est exposé via l'attribut `open` qui est défini sur la balise `bento-sidebar` lorsque la barre latérale est ouverte sur la page.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### Considérations UX

Lorsque vous utilisez `<bento-sidebar>`, gardez à l'esprit que vos utilisateurs consulteront souvent votre page sur mobile, ce qui peut afficher un en-tête à position fixe. De plus, les navigateurs affichent souvent leur propre en-tête fixe en haut de la page. L'ajout d'un autre élément à position fixe en haut de l'écran occuperait un grand espace sur l'écran mobile avec un contenu qui ne donne à l'utilisateur aucune nouvelle information.

C'est pourquoi nous recommandons que les options permettant d'ouvrir la barre latérale ne soient pas placées dans un en-tête fixe pleine largeur.

- La barre latérale ne peut apparaître que sur le côté gauche ou droit d'une page.
- La hauteur maximale de la barre latérale est de 100vh, si la hauteur dépasse 100vh, une barre de défilement verticale apparaît. La hauteur par défaut est définie sur 100vh dans le CSS et peut être modifiée.
- La largeur de la barre latérale peut être définie et ajustée à l'aide du CSS.
- Il est <em>recommandé</em> que <code>&lt;bento-sidebar&gt;</code> soit un enfant direct du `<body>` pour préserver un ordre DOM logique pour l'accessibilité ainsi que pour éviter de modifier son comportement par un élément conteneur. Notez que le fait d'avoir un ancêtre de `bento-sidebar` avec un `z-index` défini peut faire apparaître la barre latérale sous d'autres éléments (tels que les en-têtes), ce qui peut altérer sa fonctionnalité.

### Attributs

#### side

Indique de quel côté de la page la barre latérale doit s'ouvrir, soit `left` ou `right`. Si un attribut `side` n'est pas spécifié, la valeur `side` sera héritée de l'attribut `dir` la balise `body` `ltr` =&gt; `left`, `rtl` =&gt; `right`) ; si aucun `dir` n'existe, la valeur `side` par défaut est `left`.

#### open

Cet attribut est présent lorsque la barre latérale est ouverte.

---

## Composant Preact/React

### Importation via npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import React from 'react';
import {BentoSidebar} from '@bentoproject/sidebar/react';
import '@bentoproject/sidebar/styles.css';

function App() {
  return (
    <BentoSidebar>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

### Interactivité et utilisation de l'API

Les composants Bento sont hautement interactifs via leur API. L'API du composant `BentoSidebar` est accessible en passant une `ref` :

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoSidebar ref={ref}>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

#### Actions

L'API `BentoSidebar` vous permet d'effectuer les actions suivantes :

##### open()

Ouvre la barre latérale.

```javascript
ref.current.open();
```

##### close()

Ferme la barre latérale.

```javascript
ref.current.close();
```

##### toggle()

Change l'état d'ouverture de la barre latérale.

```javascript
ref.current.toggle(0);
```

### Mise en page et style

Le composant `BentoSidebar` peut être stylisé avec le CSS standard.

- La valeur `width` de la `bento-sidebar` peut être définie pour ajuster la largeur à partir de la valeur prédéfinie de 45px.
- La hauteur de la `bento-sidebar` peut être réglée pour ajuster la hauteur de la barre latérale, si nécessaire. Si la hauteur dépasse 100vw, la barre latérale aura une barre de défilement verticale. La hauteur prédéfinie de la barre latérale est de 100vw et peut être remplacée dans le CSS pour la raccourcir.

Pour garantir le rendu du composant comme vous le souhaitez, veillez à appliquer une taille au composant. L'application peut être intégrée :

```jsx
<BentoSidebar style={% raw %}{{width: 300, height: '100%'}}{% endraw %}>
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

Ou via `className` :

```jsx
<BentoSidebar className="custom-styles">
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

```css
.custom-styles {
  height: 100%;
  width: 300px;
}
```

### Considérations UX

Lorsque vous utilisez `<BentoSidebar>`, gardez à l'esprit que vos utilisateurs consulteront souvent votre page sur mobile, ce qui peut afficher un en-tête à position fixe. De plus, les navigateurs affichent souvent leur propre en-tête fixe en haut de la page. L'ajout d'un autre élément à position fixe en haut de l'écran occuperait un grand espace sur l'écran mobile avec un contenu qui ne donne à l'utilisateur aucune nouvelle information.

C'est pourquoi nous recommandons que les options permettant d'ouvrir la barre latérale ne soient pas placées dans un en-tête fixe pleine largeur.

- La barre latérale ne peut apparaître que sur le côté gauche ou droit d'une page.
- La hauteur maximale de la barre latérale est de 100vh, si la hauteur dépasse 100vh, une barre de défilement verticale apparaît. La hauteur par défaut est définie sur 100vh dans le CSS et peut être modifiée.
- La largeur de la barre latérale peut être définie et ajustée à l'aide du CSS.
- Il est <em>recommandé</em> que <code>&lt;BentoSidebar&gt;</code> soit un enfant direct du `<body>` pour préserver un ordre DOM logique pour l'accessibilité ainsi que pour éviter de modifier son comportement par un élément conteneur. Notez que le fait d'avoir un ancêtre de `BentoSidebar` avec un `z-index` défini peut faire apparaître la barre latérale sous d'autres éléments (tels que les en-têtes), ce qui peut altérer sa fonctionnalité.

### Accessoires

#### side

Indique de quel côté de la page la barre latérale doit s'ouvrir, soit `left` ou `right`. Si un attribut `side` n'est pas spécifié, la valeur `side` sera héritée de l'attribut `dir` la balise `body` `ltr` =&gt; `left`, `rtl` =&gt; `right`) ; si aucun `dir` n'existe, la valeur `side` par défaut est `left`.
