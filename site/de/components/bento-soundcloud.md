---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/de/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Bettet einen <a href="https://soundcloud.com">Soundcloud</a> Clip ein.
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Bettet einen [Soundcloud](https://soundcloud.com) Clip ein.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-soundcloud als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Bevor du benutzerdefinierte Stile hinzufügst, musst du die erforderliche CSS Bibliothek jeder Bento Komponente einbinden, um ein ordnungsgemäßes Laden zu gewährleisten. Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles verwenden, die inline verfügbar sind. Siehe [Layout und Style](#layout-and-style).

### Import via npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### Einbinden via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
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

### Layout und Style

Jede Bento Komponente verfügt über eine kleine CSS Bibliothek, die du einbinden musst, um ein ordnungsgemäßes Laden ohne [Sprünge im Inhalt](https://web.dev/cls/) zu gewährleisten. Da hierbei die Reihenfolge wichtig ist, musst du manuell sicherstellen, dass Stylesheets vor allen benutzerdefinierten Styles eingebunden werden.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles auch inline verfügbar machen:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Containertyp

Die Komponente `bento-soundcloud` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen (Folien) eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird):

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Attribute

Die programmatische Änderung eines der Attribute führt dazu, dass der Player automatisch aktualisiert wird.

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

Dieses Attribut ist erforderlich, wenn <code>data-playlistid</code> nicht definiert ist.<br> Der Wert für dieses Attribut ist die ID eines Tracks – eine ganze Zahl.

##### data-playlistid

Dieses Attribut ist erforderlich, wenn <code>data-trackid</code> nicht definiert ist. Der Wert für dieses Attribut ist die ID einer Playlist – eine ganze Zahl.

##### data-secret-token (optional)

Das geheime Token des Tracks, falls es privat ist.

##### data-visual (optional)

Ist der Wert gleich <code>true</code>, so wird der Modus "Visual" in voller Breite angezeigt; andernfalls wird der Modus "Classic" verwendet. Der Standardwert ist <code>false</code>.

##### data-color (optional)

Dieses Attribut ist eine benutzerdefinierte Farbkorrektur für den Modus "Classic". Im Modus "Visual" wird das Attribut ignoriert. Gib einen hexadezimalen Farbwert ohne das voranstehende # an (z. B. <code>data-color="e540ff"</code>).

---

## Preact/React Komponente

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

### Layout und Style

#### Containertyp

Die Komponente `BentoSoundcloud` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen (Folien) eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird). Diese können inline angewendet werden:

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

Oder via `className`:

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

### Eigenschaften

##### trackId

Dieses Attribut ist erforderlich, wenn <code>data-playlistid</code> nicht definiert ist.<br> Der Wert für dieses Attribut ist die ID eines Tracks – eine ganze Zahl.

##### playlistId

Dieses Attribut ist erforderlich, wenn <code>data-trackid</code> nicht definiert ist. Der Wert für dieses Attribut ist die ID einer Playlist – eine ganze Zahl.

##### secretToken (optional)

Das geheime Token des Tracks, falls es privat ist.

##### visual (optional)

Ist der Wert gleich <code>true</code>, so wird der Modus "Visual" in voller Breite angezeigt; andernfalls wird der Modus "Classic" verwendet. Der Standardwert ist <code>false</code>.

##### color (optional)

Dieses Attribut ist eine benutzerdefinierte Farbkorrektur für den Modus "Classic". Im Modus "Visual" wird das Attribut ignoriert. Gib einen hexadezimalen Farbwert ohne das voranstehende # an (z. B. <code>data-color="e540ff"</code>).
