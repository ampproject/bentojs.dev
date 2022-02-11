---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/it/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Incorpora una clip <a href="https://soundcloud.com">Soundcloud</a>.
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Permette di incorporare una clip [Soundcloud](https://soundcloud.com).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Usare bento-soundcloud come componente web o componente funzionale React:</p> <a class="bd-button" href="#web-component">↓ Componente Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Componente Web

Per garantirne il corretto caricamento, occorre inserire la libreria CSS richiesta per ogni componente Bento prima di aggiungere stili personalizzati. Si possono anche usare i poco ingombranti stili di pre-aggiornamento disponibili inline. Consultare la sezione [Layout e stile](#layout-and-style).

### Importazione tramite npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### Inclusione tramite `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
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

### Layout e stile

Ogni componente Bento dispone di una piccola libreria CSS che va inclusa per garantire un caricamento corretto senza [spostamenti dei contenuti](https://web.dev/cls/). A causa dell'importanza dell'ordine degli elementi, occorre verificare manualmente che i fogli di stile siano inclusi prima di qualsiasi stile personalizzato.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Oppure, si possono rendere disponibili i poco ingombranti stili di pre-aggiornamento inline:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo di contenitore

Il componente `bento-soundcloud` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti (diapositive) tramite un layout CSS opportuno (come quelli definiti con le proprietà `height`, `width`, `aspect-ratio` o altre simili):

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Attributi

La modifica da programma di uno degli attributi comporterà l'aggiornamento automatico del lettore.

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

Questo attributo è obbligatorio se <code>data-playlistid</code> non è definito.<br> Il valore di questo attributo è l'Identificativo di una traccia, un numero intero.

##### data-playlistid

Questo attributo è obbligatorio se <code>data-trackid</code> non è definito. Il valore di questo attributo è l'Identificativo di una playlist, un numero intero.

##### data-secret-token (opzionale)

Il token segreto della traccia, se è privata.

##### data-visual (opzionale)

Se l'opzione è impostata su <code>true</code>, la visualizzazione è in modalità "Visual" alla massima larghezza; in caso contrario, la visualizzazione è in modalità "Classic". Il valore predefinito è <code>false</code>.

##### data-color (opzionale)

Questo attributo permette di sovrascrivere il colore personalizzato della modalità "Classic". L'attributo viene ignorato in modalità "Visual". Il colore può essere indicato con un valore esadecimale, senza il # iniziale (ad esempio, <code>data-color="e540ff"</code>).

---

## Componente Preact/React

### Import via npm

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

### Layout e stile

#### Tipo di contenitore

Il componente `BentoSoundcloud` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti (diapositive) tramite un layout CSS opportuno (come quelli definiti con le proprietà `height`, `width`, `aspect-ratio` o altre simili). Essi sono applicabili inline:

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

Oppure tramite `className`:

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

### Oggetti

##### trackId

Questo attributo è obbligatorio se <code>data-playlistid</code> non è definito.<br> Il valore di questo attributo è l'Identificativo di una traccia, un numero intero.

##### playlistId

Questo attributo è obbligatorio se <code>data-trackid</code> non è definito. Il valore di questo attributo è l'Identificativo di una playlist, un numero intero.

##### secretToken (opzionale)

Il token segreto della traccia, se è privata.

##### visual (opzionale)

Se l'opzione è impostata su <code>true</code>, la visualizzazione è in modalità "Visual" alla massima larghezza; in caso contrario, la visualizzazione è in modalità "Classic". Il valore predefinito è <code>false</code>.

##### color (opzionale)

Questo attributo permette di sovrascrivere il colore personalizzato della modalità "Classic". L'attributo viene ignorato in modalità "Visual". Il colore può essere indicato con un valore esadecimale, senza il # iniziale (ad esempio, <code>data-color="e540ff"</code>).
