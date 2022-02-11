---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/fr/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Intègre un clip <a href="https://soundcloud.com">Soundcloud</a>.
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Intègre un clip [Soundcloud.](https://soundcloud.com)

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilisez bento-soundcloud comme composant Web ou composant fonctionnel React :</p> <a class="bd-button" href="#web-component">↓ Composant Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Composant Web

Vous devez inclure la bibliothèque CSS requise de chaque composant Bento pour garantir un chargement correct et avant d'ajouter des styles personnalisés. Ou utilisez les styles de pré-mise à niveau légers intégrés disponibles. Voir [Mise en page et style](#layout-and-style).

### Importation via npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### Inclusion via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
    />
    <style>
      bento-soundcloud {
        width: 300px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <bento-soundcloud
      id="my-track"
      data-trackid="89299804"
      data-visual="true"
    ></bento-soundcloud>
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
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Vous pouvez également rendre les styles de pré-mise à niveau légers disponibles et intégrés :

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Type de conteneur

Le composant `bento-soundcloud` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise en page CSS souhaitée (comme celle définie avec `height`, `width`, `aspect-ratio`, ou d'autres propriétés similaires) :

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Attributs

La modification programmatique d'un des attributs entraînera la mise à jour automatique du lecteur.

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
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
    />
    <style>
      bento-soundcloud {
        width: 300px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <bento-soundcloud
      id="my-track"
      data-trackid="89299804"
      data-visual="true"
    ></bento-soundcloud>
    <div class="buttons" style="margin-top: 8px">
      <button id="change-track">Change track</button>
    </div>

    <script>
      (async () => {
        const soundcloud = document.querySelector('#my-track');
        await customElements.whenDefined('bento-soundcloud');

        // set up button actions
        document.querySelector('#change-track').onclick = () => {
          soundcloud.setAttribute('data-trackid', '243169232');
          soundcloud.setAttribute('data-color', 'ff5500');
          soundcloud.removeAttribute('data-visual');
        };
      })();
    </script>
  </body>
</html>
```

{% endexample %}

##### data-track

Cet attribut est obligatoire si <code>data-playlistid</code> n'est pas défini.<br> La valeur de cet attribut est l'ID d'une piste, un entier.

##### data-playlistid

Cet attribut est obligatoire si <code>data-trackid</code> n'est pas défini. La valeur de cet attribut est l'ID d'une liste de lecture, un entier.

##### data-secret-token (facultatif)

Le jeton secret de la piste, si elle est privée.

##### data-visual (facultatif)

Si défini sur <code>true</code>, affiche le mode « Visuel » pleine largeur; sinon, il s'affiche en mode « Classique ». La valeur par défaut est <code>false</code>.

##### data-color (facultatif)

Cet attribut est un remplacement de couleur personnalisé pour le mode « Classique ». L'attribut est ignoré en mode « Visuel ». Spécifiez une valeur de couleur hexadécimale, sans le # de tête (par exemple, <code>data-color="e540ff"</code>).

---

## Composant Preact/React

### Importation via npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import React from 'react';
import {BentoSoundcloud} from '@bentoproject/soundcloud/react';
import '@bentoproject/soundcloud/styles.css';

function App() {
  return <BentoSoundcloud trackId="243169232" visual={true}></BentoSoundcloud>;
}
```

### Mise en page et style

#### Type de conteneur

Le composant `BentoSoundcloud` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise en page CSS souhaitée (comme celle définie avec `height`, `width`, `aspect-ratio`, ou d'autres propriétés similaires). Ceux-ci peuvent être appliqués de manière intégrée :

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

Ou via `className` :

```jsx
<BentoSoundcloud
  className="custom-styles"
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Accessoires

##### trackId

Cet attribut est obligatoire si <code>data-playlistid</code> n'est pas défini.<br> La valeur de cet attribut est l'ID d'une piste, un entier.

##### playlistId

Cet attribut est obligatoire si <code>data-trackid</code> n'est pas défini. La valeur de cet attribut est l'ID d'une liste de lecture, un entier.

##### secretToken (facultatif)

Le jeton secret de la piste, si elle est privée.

##### visual (facultatif)

Si défini sur <code>true</code>, affiche le mode « Visuel » pleine largeur; sinon, il s'affiche en mode « Classique ». La valeur par défaut est <code>false</code>.

##### color (facultatif)

Cet attribut est un remplacement de couleur personnalisé pour le mode « Classique ». L'attribut est ignoré en mode « Visuel ». Spécifiez une valeur de couleur hexadécimale, sans le # de tête (par exemple, <code>data-color="e540ff"</code>).
