---
id: bento-stream-gallery
title: Bento Stream Gallery
permalink: "/de/components/bento-stream-gallery/"
short_title: Stream Gallery
layout: layouts/component.njk
description: Die Bento Stream Gallery dient der gleichzeitigen Anzeige mehrerer ähnlicher Inhalte entlang einer horizontalen Achse.
---

# Bento Stream Gallery

{% heroexample 'bento-stream-gallery' %}

Die Bento Stream Gallery dient der gleichzeitigen Anzeige mehrerer ähnlicher Inhalte entlang einer horizontalen Achse.

Das ist eine Spezialisierung von Bento Base Carousel und verwendet [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver), um die Größe und Anzahl der angezeigten Folien dynamisch an die Breite des Containers anzupassen. Informationen zur Implementierung einer noch besser angepassten UX findest du unter [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-stream-gallery als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Bevor du benutzerdefinierte Stile hinzufügst, musst du die erforderliche CSS Bibliothek jeder Bento Komponente einbinden, um ein ordnungsgemäßes Laden zu gewährleisten. Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles verwenden, die inline verfügbar sind. Siehe [Layout und Style](#layout-and-style).

### Import via npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### Einbinden via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
```

### Beispiel

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

### Interaktivität und API Nutzung

Bento Komponenten sind durch ihre API hochgradig interaktiv. Du kannst auf die API der `bento-stream-gallery` Komponente zugreifen, indem du das folgende Skript Tag in dein Dokument einfügst:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Aktionen

##### next()

Bewegt das Karussell um die Anzahl der sichtbaren Folien vorwärts.

```js
api.next();
```

##### prev()

Bewegt das Karussell um die Anzahl der sichtbaren Folien rückwärts.

```js
api.prev();
```

##### goToSlide(index: number)

Bewegt das Karussell zur Folie, die das Argument `index` angibt.

Hinweis: `index` wird auf eine Zahl größer oder gleich <code>0</code> und kleiner als die Anzahl der insgesamt angegebenen Folien normalisiert.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Events

Mithilfe der Komponente Bento Stream Gallery kannst du die folgenden Events registrieren und darauf reagieren:

##### slideChange

Dieses Event wird ausgelöst, wenn sich der vom Karussell angezeigte Index ändert. Der neue Index kann über `event.data.index` abegrufen werden.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Layout und Style

Jede Bento Komponente verfügt über eine kleine CSS Bibliothek, die du einbinden musst, um ein ordnungsgemäßes Laden ohne [Sprünge im Inhalt](https://web.dev/cls/) zu gewährleisten. Da hierbei die Reihenfolge wichtig ist, musst du manuell sicherstellen, dass Stylesheets vor allen benutzerdefinierten Styles eingebunden werden.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles auch inline verfügbar machen:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### API Beispiel

Dieses Beispiel veranschaulicht den programmatischen Wechsel zur nächsten/vorherigen Folie und zu bestimmten Folien.

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

### Attribute

#### Verhalten

##### `controls`

Entweder `"always"`, `"auto"` oder `"never"`, der Standardwert ist `"auto"`. Dieses Attribut legt fest, ob und wann Navigationspfeile für die vorherigen/nächsten Folien angezeigt werden. Beachte: Wenn `outset-arrows` gleich `true` ist, so ist die Anzeige der Pfeile gleich `"always"`.

- `always`: Die Pfeile werden immer angezeigt.
- `auto`: Die Pfeile werden angezeigt, wenn das Karussell kürzlich eine Interaktion per Maus registriert hat, und nicht angezeigt, wenn das Karussell kürzlich eine Interaktion per Berührung registriert hat. Beim ersten Laden auf Touch-Geräten werden Pfeile bis zur ersten Interaktion angezeigt.
- `never`: Die Pfeile werden nie angezeigt.

##### `extra-space`

Entweder `"around"` oder undefiniert. Das legt die Art und Weise fest, wie zusätzlicher Raum nach der Anzeige der berechneten Anzahl sichtbarer Folien im Karussell zugewiesen wird. Bei `"around"` wird Leerraum gleichmäßig um das Karussell mit `justify-content: center` verteilt. Andernfalls wird der Raum bei LTR Dokumenten der rechten Karussellseite und bei RTL Dokumenten der linken Karussellseite zugewiesen.

##### `loop`

Entweder `true` oder `false`. Der Standardwert ist `false`. Wenn "true", ermöglicht das Karussell dem Benutzer, vom ersten Element zurück zum letzten Element zu wechseln und umgekehrt. Es müssen mindestens drei Folien sichtbar sein, damit eine Schleife ablaufen kann.

##### `outset-arrows`

Entweder `true` oder `false`. Der Standardwert ist `false`. Wenn "true", zeigt das Karussell die Pfeile als Outset auf beiden Seiten der Folien an. Beachte, dass bei Outset Pfeilen die Länge des Folien Containers effektiv um 100 px kürzer ist als der dem Container zugewiesene Raum: 50 px pro Pfeil auf jeder Seite. Bei "false" zeigt das Karussell seine Pfeile als Inset an, die den linken und rechten Rand der Folien überlagern.

##### `peek`

Eine Zahl mit dem Standardwert `0`. Sie bestimmt, wie viel von der nächsten Folie (auf einer oder beiden Seiten der aktuellen Folie) angezeigt wird, um dem Benutzer deutlich zu machen, dass dieser im Karussell durch Wischen blättern kann.

#### Sichtbarkeit der Folie in der Galerie

##### `min-visible-count`

Eine Zahl mit dem Standardwert `1`. Legt fest, wie viele Folien mindestens gleichzeitig angezeigt werden sollen. Bruchzahlen können verwendet werden, um einen Teil einer weiteren Folie sichtbar zu machen.

##### `max-visible-count`

Eine Zahl mit dem Standardwert [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Legt fest, wie viele Folien maximal gleichzeitig angezeigt werden sollen. Bruchzahlen können verwendet werden, um einen Teil einer weiteren Folie sichtbar zu machen.

##### `min-item-width`

Eine Zahl mit dem Standardwert `1`. Legt die Mindestbreite jedes Elements fest, anhand welcher ermittelt wird, wie viele ganze Elemente gleichzeitig innerhalb der Gesamtbreite der Galerie angezeigt werden können.

##### `max-item-width`

Eine Zahl mit dem Standardwert [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Legt die Maximalbreite jedes Elements fest, anhand welcher ermittelt wird, wie viele ganze Elemente gleichzeitig innerhalb der Gesamtbreite der Galerie angezeigt werden können.

#### Einrasten von Folien

##### `slide-align`

Entweder `start` oder `center`. Beim Ausrichten mit "start" wird der Anfang einer Folie (z. B. der linke Rand beim horizontalen Ausrichten) am Karussellanfang ausgerichtet. Beim Ausrichten mit "center" wird die Mitte einer Folie an der Karussellmitte ausgerichtet.

##### `snap`

Entweder `true` oder `false`, der Standardwert ist `true`. Legt fest, ob das Karussell beim Blättern auf Folien einrasten soll oder nicht.

### Styling

Du kannst den Selektor für `bento-stream-gallery` verwenden, um das Akkordeon frei zu gestalten.

---

## Preact/React Komponente

### Import via npm

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

### Interaktivität und API Nutzung

Bento Komponenten sind durch ihre API hochgradig interaktiv. Auf die Komponente `BentoStreamGallery` kann mittels Übergabe von `ref` zugegriffen werden:

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

#### Aktionen

Mithilfe der API für `BentoStreamGallery` kannst du die folgenden Aktionen ausführen:

##### next()

Bewegt das Karussell um `advanceCount` Folien vorwärts.

```javascript
ref.current.next();
```

##### prev()

Bewegt das Karussell um `advanceCount` Folien rückwärts.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Bewegt das Karussell zur Folie, die das Argument `index` angibt. Hinweis: `index` wird auf eine Zahl größer oder gleich `0` und kleiner als die Anzahl der insgesamt angegebenen Folien normalisiert.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### Events

##### onSlideChange

Dieses Event wird ausgelöst, wenn sich der vom Karussell angezeigte Index ändert.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Layout und Style

#### Containertyp

Die Komponente `BentoStreamGallery` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `width` definiert wird). Diese können inline angewendet werden:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

Oder via `className`:

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Eigenschaften

#### Allgemeine Eigenschaften

Diese Komponente unterstützt die [allgemeinen Eigenschaften](../../../docs/spec/bento-common-props.md) von React und Preact Komponenten.

#### Verhalten

##### `controls`

Entweder `"always"`, `"auto"` oder `"never"`, der Standardwert ist `"auto"`. Dieses Attribut legt fest, ob und wann Navigationspfeile für die vorherigen/nächsten Folien angezeigt werden. Beachte: Wenn `outset-arrows` gleich `true` ist, so ist die Anzeige der Pfeile gleich `"always"`.

- `always`: Die Pfeile werden immer angezeigt.
- `auto`: Die Pfeile werden angezeigt, wenn das Karussell kürzlich eine Interaktion per Maus registriert hat, und nicht angezeigt, wenn das Karussell kürzlich eine Interaktion per Berührung registriert hat. Beim ersten Laden auf Touch-Geräten werden Pfeile bis zur ersten Interaktion angezeigt.
- `never`: Die Pfeile werden nie angezeigt.

##### `extraSpace`

Entweder `"around"` oder undefiniert. Das legt die Art und Weise fest, wie zusätzlicher Raum nach der Anzeige der berechneten Anzahl sichtbarer Folien im Karussell zugewiesen wird. Bei `"around"` wird Leerraum gleichmäßig um das Karussell mit `justify-content: center` verteilt. Andernfalls wird der Raum bei LTR Dokumenten der rechten Karussellseite und bei RTL Dokumenten der linken Karussellseite zugewiesen.

##### `loop`

Entweder `true` oder `false`. Der Standardwert ist `false`. Wenn "true", ermöglicht das Karussell dem Benutzer, vom ersten Element zurück zum letzten Element zu wechseln und umgekehrt. Es müssen mindestens drei Folien sichtbar sein, damit eine Schleife ablaufen kann.

##### `outsetArrows`

Entweder `true` oder `false`. Der Standardwert ist `false`. Wenn "true", zeigt das Karussell die Pfeile als Outset auf beiden Seiten der Folien an. Beachte, dass bei Outset Pfeilen die Länge des Folien Containers effektiv um 100 px kürzer ist als der dem Container zugewiesene Raum: 50 px pro Pfeil auf jeder Seite. Bei "false" zeigt das Karussell seine Pfeile als Inset an, die den linken und rechten Rand der Folien überlagern.

##### `peek`

Eine Zahl mit dem Standardwert `0`. Sie bestimmt, wie viel von der nächsten Folie (auf einer oder beiden Seiten der aktuellen Folie) angezeigt wird, um dem Benutzer deutlich zu machen, dass dieser im Karussell durch Wischen blättern kann.

#### Sichtbarkeit der Folie in der Galerie

##### `minVisibleCount`

Eine Zahl mit dem Standardwert `1`. Legt fest, wie viele Folien mindestens gleichzeitig angezeigt werden sollen. Bruchzahlen können verwendet werden, um einen Teil einer weiteren Folie sichtbar zu machen.

##### `maxVisibleCount`

Eine Zahl mit dem Standardwert [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Legt fest, wie viele Folien maximal gleichzeitig angezeigt werden sollen. Bruchzahlen können verwendet werden, um einen Teil einer weiteren Folie sichtbar zu machen.

##### `minItemWidth`

Eine Zahl mit dem Standardwert `1`. Legt die Mindestbreite jedes Elements fest, anhand welcher ermittelt wird, wie viele ganze Elemente gleichzeitig innerhalb der Gesamtbreite der Galerie angezeigt werden können.

##### `maxItemWidth`

Eine Zahl mit dem Standardwert [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Legt die Maximalbreite jedes Elements fest, anhand welcher ermittelt wird, wie viele ganze Elemente gleichzeitig innerhalb der Gesamtbreite der Galerie angezeigt werden können.

#### Einrasten von Folien

##### `slideAlign`

Entweder `start` oder `center`. Beim Ausrichten mit "start" wird der Anfang einer Folie (z. B. der linke Rand beim horizontalen Ausrichten) am Karussellanfang ausgerichtet. Beim Ausrichten mit "center" wird die Mitte einer Folie an der Karussellmitte ausgerichtet.

##### `snap`

Entweder `true` oder `false`, der Standardwert ist `true`. Legt fest, ob das Karussell beim Blättern auf Folien einrasten soll oder nicht.
