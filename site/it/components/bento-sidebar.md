---
id: bento-sidebar
title: Bento Sidebar
permalink: "/it/components/bento-sidebar/"
short_title: Barra laterale
layout: layouts/component.njk
description: Il componente fornisce un modo per visualizzare i meta contenuti come strumenti di navigazione, link, pulsanti e menu destinati all'accesso temporaneo.
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

Il componente fornisce un modo per visualizzare i meta contenuti come strumenti di navigazione, link, pulsanti e menu destinati all'accesso temporaneo. La barra laterale può essere evidenziata toccando un pulsante mentre il contenuto principale resta visualizzato al di sotto di essa.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Usare bento-sidebar come componente web o componente funzionale React:</p> <a class="bd-button" href="#web-component">↓ Componente Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Componente Web

Per garantirne il corretto caricamento, occorre inserire la libreria CSS richiesta per ogni componente Bento prima di aggiungere stili personalizzati. Si possono anche usare i poco ingombranti stili di pre-aggiornamento disponibili inline. Consultare la sezione [Layout e stile](#layout-and-style).

### Importazione tramite npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### Inclusione tramite `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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

### Interattività e utilizzo dell'API

I componenti Bento utilizzati garantiscono una notevole interattività attraverso le loro API. L'API del componente `bento-sidebar` è accessibile includendo il seguente tag dello script nel documento:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Azioni

L'API di `bento-sidebar` consente di eseguire le seguenti azioni:

##### open()

Apre la barra laterale.

```javascript
api.open();
```

##### close()

Chiude la barra laterale.

```javascript
api.close();
```

##### toggle()

Inverte lo stato di apertura della barra laterale.

```javascript
api.toggle(0);
```

### Layout e stile

Ogni componente Bento dispone di una piccola libreria CSS che va inclusa per garantire un caricamento corretto senza [spostamenti dei contenuti](https://web.dev/cls/). A causa dell'importanza dell'ordine degli elementi, occorre verificare manualmente che i fogli di stile siano inclusi prima di qualsiasi stile personalizzato.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Oppure, si possono rendere disponibili i poco ingombranti stili di pre-aggiornamento inline:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Stili personalizzati

Lo stile del componente `bento-sidebar` può essere definito utilizzando CSS standard.

- L'attributo `width` di `bento-sidebar` può essere impostato per regolare la larghezza a un valore diverso da quello predefinito di 45px.
- Impostando l'altezza del componente `bento-sidebar` è possibile regolare l'altezza della barra laterale, se necessario. Se l'altezza supera 100vw, la barra laterale presenterà una barra di scorrimento verticale. L'altezza predefinita della barra laterale è 100vw e può essere ridotta sovrascrivendola con un elemento CSS.
- Lo stato corrente della barra laterale è indicato tramite l'attributo `open` che è impostato sul tag `bento-sidebar` quando la barra laterale è aperta sulla pagina.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### Considerazioni sull'esperienza utente

Utilizzando il componente `<bento-sidebar>`, occorre considerare che gli utenti visualizzeranno spesso la pagina su dispositivi mobili, che di solito mostrano un'intestazione in posizione fissa. Inoltre, i browser spesso visualizzano la propria intestazione fissa nella parte superiore della pagina. L'aggiunta di un altro elemento in posizione fissa nella parte superiore dello schermo potrebbe occupare la maggior parte dello spazio sullo schermo dei dispositivi mobili, mentre i contenuti potrebbero esserne penalizzati e non fornire all'utente nuove informazioni.

Per questo motivo, suggeriamo di non inserire gli inviti per l'apertura delle barre laterali in un'intestazione fissa a larghezza intera.

- La barra laterale può apparire solo sul lato sinistro o destro di una pagina.
- L'altezza massima di una barra laterale è 100vh, e se l'altezza supera i 100vh viene visualizzata una barra di scorrimento verticale. L'altezza predefinita è impostata su 100 vh è può essere sovrascritta in CSS.
- La larghezza della barra laterale può essere impostata e variata tramite CSS.
- Si <em>consiglia di utilizzare</em> il componente <code>&lt;bento-sidebar&gt;</code> come discendente diretto della sezione `<body>` per preservare l'ordine logico del DOM a scopo di accessibilità e per evitare che il suo comportamento sia alterato da un elemento contenitore. Nota: se un elemento antenato di `bento-sidebar` ha un attributo `z-index` impostato, la barra laterale potrebbe apparire sotto altri elementi (come le intestazioni), interrompendone la funzionalità.

### Attributi

#### side

Indica da quale lato della pagina deve aprirsi la barra laterale, `left` o `right`. Se l'attributo `side` non è indicato, il valore di `side` sarà ereditato dall'attributo `dir` del tag `body` ( `ltr` =&gt; `left` , `rtl` =&gt; `right`); se non ci sono attributi `dir`, il valore predefinito per `side` sarà `left`.

#### open

Questo attributo è presente quando la barra laterale è aperta.

---

## Componente Preact/React

### Importazione tramite npm

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

### Interattività e utilizzo dell'API

I componenti Bento garantiscono una notevole interattività attraverso le loro API. L'API del componente `BentoSidebar` è accessibile passando un elemento `ref`:

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

#### Azioni

L'API di `BentoSidebar` consente di eseguire le seguenti azioni:

##### open()

Apre la barra laterale.

```javascript
ref.current.open();
```

##### close()

Chiude la barra laterale.

```javascript
ref.current.close();
```

##### toggle()

Inverte lo stato di apertura della barra laterale.

```javascript
ref.current.toggle(0);
```

### Layout e stile

Lo stile del componente `BentoSidebar` può essere definito utilizzando CSS standard.

- L'attributo `width` di `bento-sidebar` può essere impostato per regolare la larghezza a un valore diverso da quello predefinito di 45px.
- Impostando l'altezza del componente `bento-sidebar` è possibile regolare l'altezza della barra laterale, se necessario. Se l'altezza supera 100vw, la barra laterale presenterà una barra di scorrimento verticale. L'altezza predefinita della barra laterale è 100vw e può essere ridotta sovrascrivendola con un elemento CSS.

Per assicurarsi che il rendering del componente sia eseguito correttamente, occorre applicare una dimensione al componente. I relativi stili possono essere applicati inline:

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

Oppure tramite `className`:

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

### Considerazioni sull'esperienza utente

Utilizzando il componente `<BentoSidebar>`, occorre considerare che gli utenti visualizzeranno spesso la pagina su dispositivi mobili, che di solito mostrano un'intestazione in posizione fissa. Inoltre, i browser spesso visualizzano la propria intestazione fissa nella parte superiore della pagina. L'aggiunta di un altro elemento in posizione fissa nella parte superiore dello schermo potrebbe occupare la maggior parte dello spazio sullo schermo dei dispositivi mobili, mentre i contenuti potrebbero esserne penalizzati e non fornire all'utente nuove informazioni.

Per questo motivo, suggeriamo di non inserire gli inviti per l'apertura delle barre laterali in un'intestazione fissa a larghezza intera.

- La barra laterale può apparire solo sul lato sinistro o destro di una pagina.
- L'altezza massima di una barra laterale è 100vh, e se l'altezza supera i 100vh viene visualizzata una barra di scorrimento verticale. L'altezza predefinita è impostata su 100 vh è può essere sovrascritta in CSS.
- La larghezza della barra laterale può essere impostata e variata tramite CSS.
- Si <em>consiglia di utilizzare</em> il componente <code>&lt;BentoSidebar&gt;</code> come discendente diretto della sezione `<body>` per preservare l'ordine logico del DOM a scopo di accessibilità e per evitare che il suo comportamento sia alterato da un elemento contenitore. Nota: se un elemento antenato di `BentoSidebar` ha un attributo `z-index` impostato, la barra laterale potrebbe apparire sotto altri elementi (come le intestazioni), interrompendone la funzionalità.

### Oggetti

#### side

Indica da quale lato della pagina deve aprirsi la barra laterale, `left` o `right`. Se l'attributo `side` non è indicato, il valore di `side` sarà ereditato dall'attributo `dir` del tag `body` ( `ltr` =&gt; `left` , `rtl` =&gt; `right`); se non ci sono attributi `dir`, il valore predefinito per `side` sarà `left`.
