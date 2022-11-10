---
id: bento-wordpress-embed
title: Bento WordPress Embed
permalink: "/it/components/bento-wordpress-embed/"
short_title: WordPress incorporato
layout: layouts/component.njk
description: |-
 "Un iframe che mostra l'<a"
  href="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/">estratto</a>
  di una pagina o un post WordPress.
---

# Bento WordPress Embed

{% heroexample 'bento-wordpress-embed' %}

Un iframe che mostra l'[estratto](https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/) di una pagina o un post WordPress.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Usare bento-wordpress-embed come componente web o componente funzionale React:</p> <a class="bd-button" href="#web-component">↓ Componente Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Componente Web

Per garantirne il corretto caricamento, occorre inserire la libreria CSS richiesta per ogni componente Bento prima di aggiungere stili personalizzati. Si possono anche usare i poco ingombranti stili di pre-aggiornamento disponibili inline. Consultare la sezione [Layout e stile](#layout-and-style).

### Importazione tramite npm

```bash
npm install @bentoproject/wordpress-embed
```

```javascript
import {defineElement as defineBentoWordpressEmbed} from '@bentoproject/wordpress-embed';
defineBentoWordpressEmbed();
```

### Inclusione tramite `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css" crossorigin="anonymous">
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

### Layout e stile

Ogni componente Bento dispone di una piccola libreria CSS che va inclusa per garantire un caricamento corretto senza [spostamenti dei contenuti](https://web.dev/cls/). A causa dell'importanza dell'ordine degli elementi, occorre verificare manualmente che i fogli di stile siano inclusi prima di qualsiasi stile personalizzato.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
/>
```

Oppure, si possono rendere disponibili i poco ingombranti stili di pre-aggiornamento inline:

```html
<style>
  bento-wordpress-embed {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo di contenitore

Il componente `bento-wordpress-embed` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti (diapositive) tramite un layout CSS opportuno (come quelli definiti con le proprietà `height`, `width`, `aspect-ratio` o altre simili):

```css
bento-wordpress-embed {
  height: 100px;
  width: 100%;
}
```

### Attributi

#### data-url (obbligatorio)

L'URL del post da incorporare. La modifica da programma del valore dell'attributo aggiornerà automaticamente il contenuto incorporato.

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

## Componente Preact/React

### Import via npm

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

### Layout e stile

#### Tipo di contenitore

Il componente `BentoWordPressEmbed` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti (diapositive) tramite un layout CSS opportuno (come quelli definiti con le proprietà `height`, `width`, `aspect-ratio` o altre simili). Essi sono applicabili inline:

```jsx
<BentoWordPressEmbed
  style={% raw %}{{width: '100%', height: '100px'}}{% endraw %}
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

Oppure tramite `className`:

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

### Oggetti

#### URL (obbligatorio)

URL del post da incorporare.
