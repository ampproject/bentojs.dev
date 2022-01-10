---
id: bento-twitter
title: Bento Twitter
permalink: "/it/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Permette di incorporare contenuti di <a href="https://twitter.com">Twitter</a>, ad esempio oggetti come Tweet o Moment.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Permette di incorporare contenuti di [Twitter](https://twitter.com), ad esempio oggetti come Tweet o Moment.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Usare bento-twitter come componente web o componente funzionale React:</p> <a class="bd-button" href="#web-component">↓ Componente Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Componente Web

Per garantirne il corretto caricamento, occorre inserire la libreria CSS richiesta per ogni componente Bento prima di aggiungere stili personalizzati. Si possono anche usare i poco ingombranti stili di pre-aggiornamento disponibili inline. Consultare la sezione [Layout e stile](#layout-and-style).

### Importazione tramite npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Esempio: inclusione tramite `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
    />
    <style>
      bento-twitter {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-twitter id="my-tweet" data-tweetid="885634330868850689"></bento-twitter>
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
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Oppure, si possono rendere disponibili i poco ingombranti stili di pre-aggiornamento inline:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo di contenitore

Il componente `bento-twitter` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti (diapositive) tramite un layout CSS opportuno (come quelli definiti con le proprietà `height`, `width`, `aspect-ratio` o altre simili):

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Attributi

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (obbligatorio)</strong></td>
    <td>L'ID dell'oggetto Tweet o Momento, ovvero il tipo di origine in caso di visualizzazione di una timeline. In un URL come https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> è l'id del tweet. In un URL come https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> è l'id del momento. I tipi di origine della timeline ammissibili sono <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> e <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (opzionale)</strong></td>
    <td>Quando si visualizza una timeline, è necessario fornire ulteriori argomenti oltre a <code>timeline-source-type</code>. Ad esempio, <code>data-timeline-screen-name="amphtml"</code> in combinazione con <code>data-timeline-source-type="profile"</code> permetterà di visualizzare una timeline dell'account Twitter AMP. Per i dettagli sugli argomenti disponibili, consultare la sezione "Timeline" nella <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Guida alle funzioni predefinite JavaScript di Twitter</a>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (opzionale)</strong></td>
    <td>È possibile specificare le opzioni per l'aspetto di oggetti di Tweet, Momenti o Timeline impostando gli attributi di tipo <code>data-</code>. Ad esempio, <code>data-cards="hidden"</code> disattiva le schede Twitter. Per i dettagli sulle opzioni disponibili, consultare la documentazione di Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">per i tweet</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">per i momenti</a> e <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">per le timeline</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (optional)</strong></td>
    <td>Permette di definire un attributo <code>title</code> per il componente. Il valore predefinito è <code>Twitter</code>.</td>
  </tr>
</table>

### Interattività e utilizzo dell'API

La modifica da programma di uno qualsiasi dei valori degli attributi aggiornerà automaticamente l'elemento. Ad esempio, modificando l'attributo `data-tweetid`, è possibile caricare automaticamente il nuovo tweet:

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
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
    />
    <style>
      bento-twitter {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-twitter id="my-tweet" data-tweetid="885634330868850689">
    </bento-twitter>
    <div class="buttons" style="margin-top: 8px">
      <button id="change-tweet">Change tweet</button>
    </div>

    <script>
      (async () => {
        const twitter = document.querySelector('#my-tweet');

        // set up button actions
        document.querySelector('#change-tweet').onclick = () => {
          twitter.setAttribute('data-tweetid', '495719809695621121');
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
npm install @bentoproject/twitter
```

```javascript
import React from 'react';
import {BentoTwitter} from '@bentoproject/twitter/react';
import '@bentoproject/twitter/styles.css';

function App() {
  return <BentoTwitter tweetid="1356304203044499462"></BentoTwitter>;
}
```

### Layout e stile

#### Tipo di contenitore

Il componente `BentoTwitter` ha un tipo di layout di dimensione definita. Per garantire il corretto rendering del componente, occorre applicare una dimensione al componente e agli elementi che sono suoi discendenti diretti (diapositive) tramite un layout CSS opportuno (come quelli definiti con le proprietà `height`, `width`, `aspect-ratio` o altre simili). Essi sono applicabili inline:

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

Oppure tramite `className`:

```jsx
<BentoTwitter
  className="custom-styles"
  tweetid="1356304203044499462"
></BentoTwitter>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

## Oggetti

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (obbligatorio)</strong></td>
    <td>L'ID dell'oggetto Tweet o Momento, ovvero il tipo di origine in caso di visualizzazione di una timeline. In un URL come https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> è l'id del tweet. In un URL come https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> è l'id del momento. I tipi di origine della timeline ammissibili sono <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> e <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (opzionale)</strong></td>
    <td>Durante la visualizzazione di un tweet, è possibile fornire ulteriori argomenti oltre a <code>tweetid</code>. Ad esempio, <code>cards="hidden"</code> in combinazione con <code>conversation="none"</code> permetterà di visualizzare un tweet senza ulteriori miniature o commenti.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (opzionale)</strong></td>
    <td>Durante la visualizzazione di un oggetto di tipo momento, è possibile fornire ulteriori argomenti oltre a <code>moment</code>. Ad esempio, <code>limit="5"</code> mostrerà un momento incorporato con un massimo di cinque schede.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (opzionale)</strong></td>
    <td>Quando si visualizza una timeline, è possibile fornire ulteriori argomenti oltre a <code>timelineSourceType</code>. Ad esempio, <code>timelineScreenName="amphtml"</code> in combinazione con <code>timelineSourceType="profile"</code> permetterà di visualizzare una timeline dell'account Twitter AMP.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (opzionale)</strong></td>
    <td>Si possono specificare le opzioni per l'aspetto di Tweet, Moment o Timeline passando un oggetto alle prop <code>options</code>. Per i dettagli sulle opzioni disponibili, consultare la documentazione di Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">per i tweet</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">per i momenti</a> e <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">per le timeline</a>. Nota: quando si passa la prop `options`, assicurarsi di ottimizzare o memorizzare l'oggetto: <pre>const TWITTER_OPTIONS = { // make sure to define these once globally! }; function MyComponent() { // etc return ( &lt;Twitter optionsProps={TWITTER_OPTIONS} /&gt; ); }</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (optional)</strong></td>
    <td>Permette di definire un attributo <code>title</code> per il componente iframe. Il valore predefinito è <code>Twitter</code>.</td>
  </tr>
</table>