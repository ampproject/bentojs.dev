---
id: bento-fit-text
title: Bento Fit Text
permalink: "/de/components/bento-fit-text/"
short_title: Fit Text
layout: layouts/component.njk
description: Bestimmt die optimale Schriftgröße, die nötig ist, damit der gesamte Textinhalt in dem zur Verfügung stehenden Bereich Platz findet.
---

# Bento Fit Text

{% heroexample 'bento-fit-text' %}

Bestimmt die optimale Schriftgröße, die nötig ist, damit der gesamte Textinhalt in dem zur Verfügung stehenden Bereich Platz findet.

Der erwartete Inhalt für Bento Fit Text ist Text oder anderer Inline Inhalt, aber auch Nicht-Inline Inhalte sind möglich.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-fit-text als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Bevor du benutzerdefinierte Stile hinzufügst, musst du die erforderliche CSS Bibliothek jeder Bento Komponente einbinden, um ein ordnungsgemäßes Laden zu gewährleisten. Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles verwenden, die inline verfügbar sind. Siehe [Layout und Style](#layout-and-style).

### Import via npm

```bash
npm install @bentoproject/fit-text
```

```javascript
import {defineElement as defineBentoFitText} from '@bentoproject/fit-text';
defineBentoFitText();
```

### Einbinden via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css" crossorigin="anonymous">
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

### Überlaufender Inhalt

Wenn der Inhalt von `bento-fit-text` über den verfügbaren Platz hinausgeht, wird der überlaufende Inhalt selbst bei Angabe von `min-font-size` abgeschnitten und ausgeblendet. Browser auf der Basis von WebKit und Blink zeigen Auslassungspunkte für überlaufende Inhalte an.

Im folgenden Beispiel haben wir dem Attribut `min-font-size` einen Wert von `40` gegeben und mehr Inhalt im Element `bento-fit-text` eingefügt. Dadurch überschreitet der Inhalt die Größe seines festen übergeordneten Blocks, sodass der Text abgeschnitten wird, damit er in den Container passt.

```html
<div style="width: 300px; height: 300px; background: #005af0; color: #fff">
  <bento-fit-text min-font-size="40">
    Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
    inermis reprehendunt. Lorem ipsum dolor sit amet, has nisl nihil convenire
    et, vim at aeque inermis reprehendunt
  </bento-fit-text>
</div>
```

### Layout und Style

Jede Bento Komponente verfügt über eine kleine CSS Bibliothek, die du einbinden musst, um ein ordnungsgemäßes Laden ohne [Sprünge im Inhalt](https://web.dev/cls/) zu gewährleisten. Da hierbei die Reihenfolge wichtig ist, musst du manuell sicherstellen, dass Stylesheets vor allen benutzerdefinierten Styles eingebunden werden.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
/>
```

Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles auch inline verfügbar machen:

```html
<style>
  bento-fit-text {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Containertyp

Die Komponente `bento-fit-text` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen (Folien) eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird):

```css
bento-fit-text {
  height: 100px;
  width: 100%;
}
```

### Überlegungen zur Barrierefreiheit bei überlaufenden Inhalten

Während überlaufender Inhalt *visuell* gekürzt wird, damit er in den Container passt, ist er dennoch im Dokument vorhanden. Du solltest deine Seiten nicht mit zu langen Texten überfüllen und dich auf das Überlaufverhalten verlassen, auch wenn es optisch angemessen scheint: Für Benutzer von Hilfstechnologien (wie Bildschirmlesegeräten) kann die Seite zu wortreich und langatmig werden, da alle abgeschnittenen Inhalte ihnen weiterhin vollständig vorgelesen werden.

### Attribute

#### Medienabfragen

Die Attribute für `<bento-fit-text>` können so konfiguriert werden, dass basierend auf einer [Medienabfrage](./../../../docs/spec/amp-html-responsive-attributes.md) unterschiedliche Optionen verwendet werden.

#### `min-font-size`

Gibt die minimale Schriftgröße in Pixeln als Ganzzahl an, die `bento-fit-text` verwenden kann.

#### `max-font-size`

Gibt die maximale Schriftgröße in Pixeln als Ganzzahl an, die `bento-fit-text` verwenden kann.

#### API Beispiel

Wird der Attributwert programmatisch geändert, so wird das Element automatisch aktualisiert.

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

## Preact/React Komponente

### Import via npm

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

### Layout und Style

#### Containertyp

Die Komponente `BentoFitText` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen (Folien) eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird). Diese können inline angewendet werden:

```jsx
<BentoFitText style={% raw %}{{width: 300, height: 100}}{% endraw %}>
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

Oder via `className`:

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

### Eigenschaften

#### `minFontSize`

Gibt die minimale Schriftgröße in Pixeln als Ganzzahl an, die `bento-fit-text` verwenden kann.

#### `maxFontSize`

Gibt die maximale Schriftgröße in Pixeln als Ganzzahl an, die `bento-fit-text` verwenden kann.
