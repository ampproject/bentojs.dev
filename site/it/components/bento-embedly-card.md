---
id: bento-embedly-card
title: Bento Embedly Card
permalink: "/it/components/bento-embedly-card/"
short_title: Scheda Embedly
layout: layouts/component.njk
description: Permette di incorporare elementi reattivi e condivisibili utilizzando <a href="http://docs.embed.ly/docs/cards">Embedly cards</a>
---

# Bento Embedly Card

{% heroexample 'bento-embedly-card' %}

Permette di incorporare elementi reattivi e condivisibili utilizzando [le schede Embedly](http://docs.embed.ly/docs/cards)

Tali schede sono il modo più semplice per sfruttare il componente Embedly. Per qualsiasi contenuto multimediale, le schede forniscono un elemento incorporabile reattivo con strumenti di analisi dell'elemento integrati.

Se disponi di un piano a pagamento, puoi usare il componente `<bento-embedly-key>` o `<BentoEmbedlyContext.Provider>` per impostare la tua chiave API. Ti servirà solo una chiave Bento Embedly per pagina per rimuovere il marchio di Embedly dalle schede. All'interno della pagina, puoi includere una o più istanze di Bento Embedly Card.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Usare bento-embedly-card come componente web o componente funzionale React:</p> <a class="bd-button" href="#web-component">↓ Componente Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Componente Web

Per garantirne il corretto caricamento, occorre inserire la libreria CSS richiesta per ogni componente Bento prima di aggiungere stili personalizzati. Si possono anche usare i poco ingombranti stili di pre-aggiornamento disponibili inline. Consultare la sezione [Layout e stile](#layout-and-style).

### Importazione tramite npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### Inclusione tramite `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
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
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js"
    ></script>
    <style>
      bento-embedly-card {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-embedly-key value="12af2e3543ee432ca35ac30a4b4f656a">
    </bento-embedly-key>

    <bento-embedly-card
      data-url="https://twitter.com/AMPhtml/status/986750295077040128"
      data-card-theme="dark"
      data-card-controls="0"
    >
    </bento-embedly-card>

    <bento-embedly-card
      id="my-url"
      data-url="https://www.youtube.com/watch?v=LZcKdHinUhE"
    >
    </bento-embedly-card>
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
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

Oppure, si possono rendere disponibili i poco ingombranti stili di pre-aggiornamento inline:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo di contenitore

Il componente `bento-embedly-card` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti (diapositive) tramite un layout CSS opportuno (come quelli definiti con le proprietà `height`, `width`, `aspect-ratio` o altre simili):

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### Attributi

#### `data-url`

L'URL per recuperare le informazioni dell'oggetto incorporato.

#### `data-card-embed`

L'URL di un video o di altra risorsa multimediale elaborata. Da utilizzare per incorporare contenuti statici come articoli: invece di utilizzare il contenuto della pagina statica nella scheda, la scheda incorporerà il video o altra risorsa multimediale elaborata.

#### `data-card-image`

L'URL di un'immagine. Specifica quale immagine utilizzare nelle schede di articoli quando `data-url` punta a un articolo. Non tutti gli URL di immagini sono supportati: se l'immagine non si carica, provare un'immagine o un dominio diverso.

#### `data-card-controls`

Abilita le icone di condivisione.

- `0`: disabilita le icone di condivisione.
- `1`: abilita le icone di condivisione

Il valore predefinito è `1`.

#### `data-card-align`

Determina l'allineamento delle schede. I valori possibili sono `left`, `center` e `right`. Il valore predefinito è `center` .

#### `data-card-recommend`

Se i suggerimenti sono supportati, disabilita quelli incorporati su video e schede multimediali. Tali suggerimenti sono quelli creati da Embedly.

- `0`: disabilita i consigli di Embedly.
- `1`: abilita i consigli di Embedly.

Il valore predefinito è `1`.

#### `data-card-via` (opzionale)

Specifica i contenuti nella scheda. Questo è un ottimo sistema per eseguire attribuzioni.

#### `data-card-theme` (opzionale)

Consente di impostare il tema `dark` per cambiare il colore di sfondo del contenitore principale della scheda. Usare `dark` per impostare questo tema. Per gli sfondi scuri è meglio specificare questa impostazione. L'impostazione predefinita è `light`, che non imposta alcun colore di sfondo del contenitore principale della scheda.

#### title (optional)

Permette di definire un attributo `title` per il componente da propagare all'elemento `<iframe>` sottostante. Il valore predefinito è `"Embedly card"`.

#### Esempio di API

La modifica da programma di uno qualsiasi dei valori degli attributi aggiornerà automaticamente l'elemento. Ad esempio, modificando l'attributo `data-url`, è possibile cambiare oggetto incorporato:

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
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js"
    ></script>
    <style>
      bento-embedly-card {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-embedly-key value="12af2e3543ee432ca35ac30a4b4f656a">
    </bento-embedly-key>

    <bento-embedly-card
      data-url="https://twitter.com/AMPhtml/status/986750295077040128"
      data-card-theme="dark"
      data-card-controls="0"
    >
    </bento-embedly-card>

    <bento-embedly-card
      id="my-url"
      data-url="https://www.youtube.com/watch?v=LZcKdHinUhE"
    >
    </bento-embedly-card>

    <div class="buttons" style="margin-top: 8px">
      <button id="change-url">Change embed</button>
    </div>

    <script>
      (async () => {
        const embedlyCard = document.querySelector('#my-url');
        await customElements.whenDefined('bento-embedly-card');

        // set up button actions
        document.querySelector('#change-url').onclick = () => {
          embedlyCard.setAttribute(
            'data-url',
            'https://www.youtube.com/watch?v=wcJSHR0US80'
          );
        };
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
npm install @bentoproject/embedly-card
```

```javascript
import {BentoEmbedlyCard} from '@bentoproject/embedly-card/react';
import '@bentoproject/embedly-card/styles.css';

function App() {
  return (
    <BentoEmbedlyContext.Provider
      value={% raw %}{{apiKey: '12af2e3543ee432ca35ac30a4b4f656a'}}{% endraw %}
    >
      <BentoEmbedlyCard url="https://www.youtube.com/watch?v=LZcKdHinUhE"></BentoEmbedlyCard>
    </BentoEmbedlyContext.Provider>
  );
}
```

### Layout e stile

#### Tipo di contenitore

Il componente `BentoEmbedlyCard` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti (diapositive) tramite un layout CSS opportuno (come quelli definiti con le proprietà `height`, `width`, `aspect-ratio` o altre simili). Essi sono applicabili inline:

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

Oppure tramite `className`:

```jsx
<BentoEmbedlyCard
  className="custom-styles"
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Oggetti

#### `url`

L'URL per recuperare le informazioni dell'oggetto incorporato.

#### `cardEmbed`

L'URL di un video o di altra risorsa multimediale elaborata. Da utilizzare per incorporare contenuti statici come articoli: invece di utilizzare il contenuto della pagina statica nella scheda, la scheda incorporerà il video o altra risorsa multimediale elaborata.

#### `cardImage`

L'URL di un'immagine. Specifica quale immagine utilizzare nelle schede di articoli quando `data-url` punta a un articolo. Non tutti gli URL di immagini sono supportati: se l'immagine non si carica, provare un'immagine o un dominio diverso.

#### `cardControls`

Abilita le icone di condivisione.

- `0`: disabilita le icone di condivisione.
- `1`: abilita le icone di condivisione

Il valore predefinito è `1`.

#### `cardAlign`

Determina l'allineamento delle schede. I valori possibili sono `left`, `center` e `right`. Il valore predefinito è `center` .

#### `cardRecommend`

Se i suggerimenti sono supportati, disabilita quelli incorporati su video e schede multimediali. Tali suggerimenti sono quelli creati da Embedly.

- `0`: disabilita i consigli di Embedly.
- `1`: abilita i consigli di Embedly.

Il valore predefinito è `1`.

#### `cardVia` (opzionale)

Specifica i contenuti nella scheda. Questo è un ottimo sistema per eseguire attribuzioni.

#### `cardTheme` (opzionale)

Consente di impostare il tema `dark` per cambiare il colore di sfondo del contenitore principale della scheda. Usare `dark` per impostare questo tema. Per gli sfondi scuri è meglio specificare questa impostazione. L'impostazione predefinita è `light`, che non imposta alcun colore di sfondo del contenitore principale della scheda.

#### title (optional)

Permette di definire un attributo `title` per il componente da propagare all'elemento `<iframe>` sottostante. Il valore predefinito è `"Embedly card"`.
