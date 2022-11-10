---
id: bento-sidebar
title: Bento Sidebar
permalink: "/de/components/bento-sidebar/"
short_title: Sidebar
layout: layouts/component.njk
description: Bietet eine Möglichkeit, Meta Inhalte anzuzeigen, die für temporären Zugriff gedacht sind, wie Navigation, Links, Schaltflächen, Menüs.
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

Bietet eine Möglichkeit, Meta Inhalte anzuzeigen, die für temporären Zugriff gedacht sind, wie Navigation, Links, Buttons, Menüs. Die Seitenleiste kann durch Tippen auf einen Button angezeigt werden, während der Hauptinhalt optisch dahinter bleibt.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-sidebar als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Bevor du benutzerdefinierte Stile hinzufügst, musst du die erforderliche CSS Bibliothek jeder Bento Komponente einbinden, um ein ordnungsgemäßes Laden zu gewährleisten. Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles verwenden, die inline verfügbar sind. Siehe [Layout und Style](#layout-and-style).

### Import via npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### Einbinden via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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

### Interaktivität und API Nutzung

Bento Komponenten sind durch ihre API hochgradig interaktiv. Du kannst auf die API der `bento-sidebar` Komponente zugreifen, indem du das folgende Skript Tag in dein Dokument einfügst:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Aktionen

Mithilfe der API für `bento-sidebar` kannst du die folgenden Aktionen ausführen:

##### open()

Öffnet die Seitenleiste.

```javascript
api.open();
```

##### close()

Schließt die Seitenleiste.

```javascript
api.close();
```

##### toggle()

Schaltet zwischen dem geöffneten und geschlossenen Zustand der Seitenleiste um.

```javascript
api.toggle(0);
```

### Layout und Style

Jede Bento Komponente verfügt über eine kleine CSS Bibliothek, die du einbinden musst, um ein ordnungsgemäßes Laden ohne [Sprünge im Inhalt](https://web.dev/cls/) zu gewährleisten. Da hierbei die Reihenfolge wichtig ist, musst du manuell sicherstellen, dass Stylesheets vor allen benutzerdefinierten Styles eingebunden werden.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles auch inline verfügbar machen:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Eigene Stile

Die Komponente `bento-sidebar` kann mit Standard CSS gestaltet werden.

- Die Breite `width` von `bento-sidebar` kann geändert werden, wenn die voreingestellte Breite von 45px nicht erwünscht ist.
- Die Höhe von `bento-sidebar` kann bei Bedarf geändert werden, um die Höhe der Seitenleiste anzupassen. Wenn die Höhe 100vw überschreitet, hat die Seitenleiste eine vertikale Bildlaufleiste. Die voreingestellte Höhe der Seitenleiste beträgt 100vw und kann in CSS überschrieben werden, um sie zu verkürzen.
- Der aktuelle Zustand der Seitenleiste wird über das Attribut `open` angezeigt, das im Tag `bento-sidebar` festgelegt wird, wenn die Seitenleiste auf der Seite geöffnet ist.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### UX Überlegungen

Denke bei der Verwendung von `<bento-sidebar>` daran, dass deine Benutzer deine Seite häufig auf Mobilgeräten aufrufen, die möglicherweise eine Kopfzeile mit fester Position anzeigen. Darüber hinaus zeigen Browser oft einen eigenen festen Header am oberen Rand der Seite an. Das Hinzufügen eines weiteren Elements mit fester Position am oberen Bildschirmrand würde viel Platz auf einem mobilen Bildschirm beanspruchen und dabei nur Inhalte präsentieren, die dem Benutzer keine neuen Informationen liefern.

Aus diesem Grund empfehlen wir, das Element zum Öffnen der Seitenleiste nicht in einem festen Header mit voller Breite zu platzieren.

- Die Seitenleiste kann nur auf der linken oder rechten Seite einer Seite erscheinen.
- Die maximale Höhe der Seitenleiste beträgt 100vh. Wenn die Höhe 100vh überschreitet, wird eine vertikale Bildlaufleiste angezeigt. Die Standardhöhe beträgt in CSS 100vh und kann mit CSS überschrieben werden.
- Die Breite der Seitenleiste kann per CSS eingestellt und angepasst werden.
- `<bento-sidebar>` wird als direktes untergeordnetes Element von <code>&lt;body&gt;</code> <em>empfohlen</em>, um eine logische DOM Reihenfolge zwecks Barrierefreiheit beizubehalten und zu vermeiden, dass das Verhalten durch ein Containerelement geändert wird. Beachte, dass ein übergeordnetes Element von `bento-sidebar` mit einem festgelegten `z-index` dazu führen kann, dass die Sidebar hinter anderen Elementen (z. B. Überschriften) angezeigt wird, wodurch ihre Funktionalität beeinträchtigt wird.

### Attribute

#### side

Gibt an, ob die Seitenleiste links (`left`) oder rechts (`right`) auf der Seite geöffnet werden soll. Ist `side` nicht angegeben, wird der Wert für `side` vom Attribut `dir` des Tags `body` geerbt (`ltr` =&gt; `left` , `rtl` =&gt; `right`); falls kein `dir` angegeben wurde, erhält `side` den Standardwert `left`.

#### open

Dieses Attribut ist vorhanden, wenn die Seitenleiste geöffnet ist.

---

## Preact/React Komponente

### Import via npm

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

### Interaktivität und API Nutzung

Bento Komponenten sind durch ihre API hochgradig interaktiv. Auf die Komponente `BentoSidebar` kann mittels Übergabe von `ref` zugegriffen werden:

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

#### Aktionen

Mithilfe der API für `BentoSidebar` kannst du die folgenden Aktionen ausführen:

##### open()

Öffnet die Seitenleiste.

```javascript
ref.current.open();
```

##### close()

Schließt die Seitenleiste.

```javascript
ref.current.close();
```

##### toggle()

Schaltet zwischen dem geöffneten und geschlossenen Zustand der Seitenleiste um.

```javascript
ref.current.toggle(0);
```

### Layout und Style

Die Komponente `BentoSidebar` kann mit Standard CSS gestaltet werden.

- Die Breite `width` von `bento-sidebar` kann geändert werden, wenn die voreingestellte Breite von 45px nicht erwünscht ist.
- Die Höhe von `bento-sidebar` kann bei Bedarf geändert werden, um die Höhe der Seitenleiste anzupassen. Wenn die Höhe 100vw überschreitet, hat die Seitenleiste eine vertikale Bildlaufleiste. Die voreingestellte Höhe der Seitenleiste beträgt 100vw und kann in CSS überschrieben werden, um sie zu verkürzen.

Um sicherzustellen, dass die Komponente wie gewünscht gerendert wird, musst du ihr eine Größe zuweisen. Das kann inline angewendet werden:

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

Oder via `className`:

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

### UX Überlegungen

Denke bei der Verwendung von `<BentoSidebar>` daran, dass deine Benutzer deine Seite häufig auf Mobilgeräten aufrufen, die möglicherweise eine Kopfzeile mit fester Position anzeigen. Darüber hinaus zeigen Browser oft einen eigenen festen Header am oberen Rand der Seite an. Das Hinzufügen eines weiteren Elements mit fester Position am oberen Bildschirmrand würde viel Platz auf einem mobilen Bildschirm beanspruchen und dabei nur Inhalte präsentieren, die dem Benutzer keine neuen Informationen liefern.

Aus diesem Grund empfehlen wir, das Element zum Öffnen der Seitenleiste nicht in einem festen Header mit voller Breite zu platzieren.

- Die Seitenleiste kann nur auf der linken oder rechten Seite einer Seite erscheinen.
- Die maximale Höhe der Seitenleiste beträgt 100vh. Wenn die Höhe 100vh überschreitet, wird eine vertikale Bildlaufleiste angezeigt. Die Standardhöhe beträgt in CSS 100vh und kann mit CSS überschrieben werden.
- Die Breite der Seitenleiste kann per CSS eingestellt und angepasst werden.
- `<BentoSidebar>` wird als direktes untergeordnetes Element von <code>&lt;body&gt;</code> <em>empfohlen</em>, um eine logische DOM Reihenfolge zwecks Barrierefreiheit beizubehalten und zu vermeiden, dass das Verhalten durch ein Containerelement geändert wird. Beachte, dass ein übergeordnetes Element von `BentoSidebar` mit einem festgelegten `z-index` dazu führen kann, dass die Sidebar hinter anderen Elementen (z. B. Überschriften) angezeigt wird, wodurch ihre Funktionalität beeinträchtigt wird.

### Eigenschaften

#### side

Gibt an, ob die Seitenleiste links (`left`) oder rechts (`right`) auf der Seite geöffnet werden soll. Ist `side` nicht angegeben, wird der Wert für `side` vom Attribut `dir` des Tags `body` geerbt (`ltr` =&gt; `left` , `rtl` =&gt; `right`); falls kein `dir` angegeben wurde, erhält `side` den Standardwert `left`.
