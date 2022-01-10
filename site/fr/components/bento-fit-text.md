---
id: bento-fit-text
title: Bento Fit Text
permalink: "/fr/components/bento-fit-text/"
short_title: Texte adapté
layout: layouts/component.njk
description: Détermine la meilleure taille de police pour adapter tout le contenu d'un texte donné dans l'espace disponible.
---

# Bento Fit Text

{% heroexample 'bento-fit-text' %}

Détermine la meilleure taille de police pour adapter tout le contenu d'un texte donné dans l'espace disponible.

Le contenu attendu pour Bento Fit Text est du texte ou un autre contenu en ligne, mais il peut également contenir du contenu non intégré.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilisez bento-fit-text comme composant Web ou composant fonctionnel React :</p> <a class="bd-button" href="#web-component">↓ Composant Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Composant Web

Vous devez inclure la bibliothèque CSS requise de chaque composant Bento pour garantir un chargement correct et avant d'ajouter des styles personnalisés. Ou utilisez les styles de pré-mise à niveau légers intégrés disponibles. Voir [Mise en page et style](#layout-and-style).

### Importation via npm

```bash
npm install @bentoproject/fit-text
```

```javascript
import {defineElement as defineBentoFitText} from '@bentoproject/fit-text';
defineBentoFitText();
```

### Inclusion via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text id="my-fit-text">
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </bento-fit-text>
  </body>
</html>
```

{% endexample %}

### Contenu débordant

Si le contenu du `bento-fit-text` dépasse l'espace disponible, même avec une `min-font-size` spécifiée, le contenu qui déborde est coupé et masqué. Les navigateurs WebKit et Blink affichent des points de suspension pour le contenu débordant.

Dans l'exemple suivant, nous avons spécifié une `min-font-size` de `40` et ajouté plus de contenu à l'intérieur de l'élément `bento-fit-text`. Cela fait que le contenu dépasse la taille de son bloc parent fixe, de sorte que le texte est tronqué pour s'adapter au conteneur.

```html
<div style="width: 300px; height: 300px; background: #005af0; color: #fff">
  <bento-fit-text min-font-size="40">
    Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
    inermis reprehendunt. Lorem ipsum dolor sit amet, has nisl nihil convenire
    et, vim at aeque inermis reprehendunt
  </bento-fit-text>
</div>
```

### Mise en page et style

Chaque composant Bento possède une petite bibliothèque CSS que vous devez inclure pour garantir un chargement correct sans [écart de contenu](https://web.dev/cls/). En raison de la spécificité basée sur l'ordre, vous devez vous assurer manuellement que les feuilles de style sont incluses avant tout style personnalisé.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
/>
```

Vous pouvez également rendre les styles de pré-mise à niveau légers disponibles et intégrés :

```html
<style>
  bento-fit-text {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Type de conteneur

Le composant `bento-fit-text` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise en page CSS souhaitée (comme celle définie avec `height`, `width`, `aspect-ratio`, ou d'autres propriétés similaires) :

```css
bento-fit-text {
  height: 100px;
  width: 100%;
}
```

### Considérations d'accessibilité du contenu débordant

Bien que le contenu débordant soit *visuellement* tronqué pour s'adapter au conteneur, notez qu'il est toujours présent dans le document. Ne profitez pas du débordement pour simplement « remplir » de grandes quantités de contenu dans vos pages - bien que cela semble correct sur le plan visuel, la page risque de devenir trop peuplée pour les utilisateurs de technologies d'assistance (comme les lecteurs d'écran), car pour ces utilisateurs, tout le contenu tronqué sera toujours lu/annoncé dans son intégralité.

### Attributs

#### Requêtes multimédias

Les attributs de `<bento-fit-text>` peuvent être configurés pour utiliser différentes options en fonction d'une [requête multimédia](./../../../docs/spec/amp-html-responsive-attributes.md).

#### `min-font-size`

Spécifie la taille de police minimale en pixels sous forme de nombre entier que `bento-fit-text` peut utiliser.

#### `max-font-size`

Spécifie la taille de police maximale en pixels sous forme de nombre entier que `bento-fit-text` peut utiliser.

#### Exemple d'API

La modification programmatique d'une valeur d'attribut mettra automatiquement à jour l'élément.

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
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text id="my-fit-text">
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </bento-fit-text>
    <div class="buttons" style="margin-top: 8px">
      <button id="font-button">Change max-font-size</button>
      <button id="content-button">Change content</button>
    </div>

    <script>
      (async () => {
        const fitText = document.querySelector('#my-fit-text');
        await customElements.whenDefined('bento-fit-text');

        // set up button actions
        document.querySelector('#font-button').onclick = () =>
          fitText.setAttribute('max-font-size', '40');
        document.querySelector('#content-button').onclick = () =>
          (fitText.textContent = 'new content');
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
npm install @bentoproject/fit-text
```

```javascript
import React from 'react';
import {BentoFitText} from '@bentoproject/fit-text/react';
import '@bentoproject/fit-text/styles.css';

function App() {
  return (
    <BentoFitText>
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </BentoFitText>
  );
}
```

### Mise en page et style

#### Type de conteneur

Le composant `BentoFitText` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise en page CSS souhaitée (comme celle définie avec `height`, `width`, `aspect-ratio`, ou d'autres propriétés similaires). Ceux-ci peuvent être appliqués de manière intégrée :

```jsx
<BentoFitText style={% raw %}{{width: 300, height: 100}}{% endraw %}>
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

Ou via `className` :

```jsx
<BentoFitText className="custom-styles">
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Accessoires

#### `minFontSize`

Spécifie la taille de police minimale en pixels sous forme de nombre entier que `bento-fit-text` peut utiliser.

#### `maxFontSize`

Spécifie la taille de police maximale en pixels sous forme de nombre entier que `bento-fit-text` peut utiliser.