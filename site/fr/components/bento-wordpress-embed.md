---
id: bento-wordpress-embed
title: Bento WordPress Embed
permalink: "/fr/components/bento-wordpress-embed/"
short_title: Intégration WordPress
layout: layouts/component.njk
description:
  Une iframe affichant <a
  href="https:"//make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/">l'extrait</a>"
  d'un message ou d'une page WordPress.
---

# Bento WordPress Embed

{% heroexample 'bento-wordpress-embed' %}

Une iframe affichant [l'extrait](https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/) d'un message ou d'une page WordPress.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilisez bento-wordpress-embed comme composant Web ou composant fonctionnel React :</p> <a class="bd-button" href="#web-component">↓ Composant Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Composant Web

Vous devez inclure la bibliothèque CSS requise de chaque composant Bento pour garantir un chargement correct et avant d'ajouter des styles personnalisés. Ou utilisez les styles de pré-mise à niveau légers intégrés disponibles. Voir [Mise en page et style](#layout-and-style).

### Importation via npm

```bash
npm install @bentoproject/wordpress-embed
```

```javascript
import {defineElement as defineBentoWordpressEmbed} from '@bentoproject/wordpress-embed';
defineBentoWordpressEmbed();
```

### Inclusion via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
    />
  </head>
  <body>
    <bento-wordpress-embed
      id="my-embed"
      style="width: 300px; height: 400px"
      data-url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
    ></bento-wordpress-embed>
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
  href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
/>
```

Vous pouvez également rendre les styles de pré-mise à niveau légers disponibles et intégrés :

```html
<style>
  bento-wordpress-embed {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Type de conteneur

Le composant `bento-wordpress-embed` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise en page CSS souhaitée (comme celle définie avec `height`, `width`, `aspect-ratio`, ou d'autres propriétés similaires) :

```css
bento-wordpress-embed {
  height: 100px;
  width: 100%;
}
```

### Attributs

#### data-url (requis)

L'adresse URL du message à intégrer. La modification programmatique de la valeur de l'attribut mettra automatiquement à jour le contenu intégré.

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
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
    />
  </head>
  <body>
    <bento-wordpress-embed
      id="my-embed"
      style="width: 300px; height: 400px"
      data-url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
    ></bento-wordpress-embed>
    <div class="buttons" style="margin-top: 8px">
      <button id="switch-button">Switch embed</button>
    </div>

    <script>
      (async () => {
        const embed = document.querySelector('#my-embed');
        await customElements.whenDefined('bento-wordpress-embed');

        // set up button actions
        document.querySelector('#switch-button').onclick = () =>
          embed.setAttribute(
            'data-url',
            'https://make.wordpress.org/core/2021/09/09/core-editor-improvement-cascading-impact-of-improvements-to-featured-images/'
          );
      })();
    </script>
  </body>
</html>
```

{% endexample %}

---

## Composant Preact/React

### Importation via npm

```bash
npm install @bentoproject/wordpress-embed
```

```jsx
import React from 'react';
import {BentoWordPressEmbed} from '@bentoproject/wordpress-embed/react';

function App() {
  return (
    <BentoWordPressEmbed url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"></BentoWordPressEmbed>
  );
}
```

### Mise en page et style

#### Type de conteneur

Le composant `BentoWordPressEmbed` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise en page CSS souhaitée (comme celle définie avec `height`, `width`, `aspect-ratio`, ou d'autres propriétés similaires). Ceux-ci peuvent être appliqués de manière intégrée :

```jsx
<BentoWordPressEmbed
  style={% raw %}{{width: '100%', height: '100px'}}{% endraw %}
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

Ou via `className` :

```jsx
<BentoWordPressEmbed
  className="custom-styles"
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Accessoires

#### url (requis)

L'URL de la publication à intégrer.
