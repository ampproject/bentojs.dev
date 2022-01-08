---
id: bento-mathml
title: Bento MathML
permalink: "/de/components/bento-mathml/"
short_title: MathML
layout: layouts/component.njk
description: Rendert eine MathML Formel in einem iframe.
---

# Bento MathML

{% heroexample 'bento-mathml' %}

Rendert eine MathML Formel in einem iframe.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-mathml als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Bevor du benutzerdefinierte Stile hinzufügst, musst du die erforderliche CSS Bibliothek jeder Bento Komponente einbinden, um ein ordnungsgemäßes Laden zu gewährleisten. Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles verwenden, die inline verfügbar sind. Siehe [Layout und Style](#layout-and-style).

### Import via npm

```bash
npm install @bentoproject/mathml
```

```javascript
import {defineElement as defineBentoMathml} from '@bentoproject/mathml';
defineBentoMathml();
```

### Einbinden via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
    />
  </head>
  <body>
    <h2>The Quadratic Formula</h2>
    <bento-mathml
      style="height: 40px;"
      data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
    ></bento-mathml>

    <h2>Inline formula</h2>
    <p>
      This is an example of a formula,
      <bento-mathml
        style="height: 40px; width: 147px"
        inline
        data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      ></bento-mathml>
      placed inline in the middle of a block of text.
    </p>
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
  href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
/>
```

Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles auch inline verfügbar machen:

```html
<style>
  bento-mathml {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

### Attribute

#### `data-formula` (erforderlich)

Gibt die zu rendernde Formel an.

#### `inline` (optional)

Falls angegeben, rendert die Komponente inline (`inline-block` in CSS).

#### `title` (optional)

Definiere für die Komponente das Attribut `title`, das an das `<iframe>` Element weitergegeben wird. Der Standardwert ist `"MathML formula"`.

### Styling

Du kannst den Selektor für `bento-mathml` verwenden, um das Akkordeon frei zu gestalten.

---

## Preact/React Komponente

### Import via npm

```bash
npm install @bentoproject/mathml
```

```javascript
import React from 'react';
import {BentoMathml} from '@bentoproject/mathml/react';
import '@bentoproject/mathml/styles.css';

function App() {
  return (
    <>
      <h2>The Quadratic Formula</h2>
      <BentoMathml
        style={% raw %}{{height: 40}}{% endraw %}
        formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      ></BentoMathml>

      <h2>Inline formula</h2>
      <p>
        This is an example of a formula,{' '}
        <BentoMathml
          style={% raw %}{{height: 40, width: 147}}{% endraw %}
          inline
          formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
        ></BentoMathml>
        , placed inline in the middle of a block of text. This shows how the formula will fit inside a block of text and can be styled with CSS.
      </p>
    </>
  );
}
```

### Layout und Style

#### Containertyp

Die Komponente `BentoMathml` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird). Diese können inline angewendet werden:

```jsx
<BentoMathml style={% raw %}{{width: 300, height: 100}}{% endraw %}>...</BentoMathml>
```

Oder via `className`:

```jsx
<BentoMathml className="custom-styles">...</BentoMathml>
```

```css
.custom-styles {
  height: 40px;
  width: 147px;
}
```

### Eigenschaften

#### `formula` (erforderlich)

Gibt die zu rendernde Formel an.

#### `inline` (optional)

Falls angegeben, rendert die Komponente inline (`inline-block` in CSS).

#### `title` (optional)

Definiere für die Komponente das Attribut `title`, das an das `<iframe>` Element weitergegeben wird. Der Standardwert ist `"MathML formula"`.
