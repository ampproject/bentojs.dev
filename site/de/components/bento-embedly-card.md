---
id: bento-embedly-card
title: Bento Embedly Card
permalink: "/de/components/bento-embedly-card/"
short_title: Embedly Card
layout: layouts/component.njk
description: Bietet reaktionsschnelle und teilbare Embeds mit <a href="http://docs.embed.ly/docs/cards">Embedley Cards</a>
---

# Bento Embedly Card

{% heroexample 'bento-embedly-card' %}

Bietet reaktionsschnelle und teilbare Embeds mit [Embedly Cards](http://docs.embed.ly/docs/cards)

Karten sind der einfachste Weg, Embedly zu nutzen. Für alle Medien bieten Karten reaktionsschnelle Embeds mit integrierter Embed Analyse.

Wenn du eine kostenpflichtige Version nutzt, verwende die Komponente `<bento-embedly-key>` oder `<BentoEmbedlyContext.Provider>`, um deinen API Schlüssel anzugeben. Du brauchst nur einen einzigen Bento Embedly Schlüssel pro Seite, um das Embedly Branding von den Karten zu entfernen. Auf deiner Seite kannst du eine oder mehrere Instanzen von Bento Embedly Cards verwenden.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-embedly-card als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Bevor du benutzerdefinierte Stile hinzufügst, musst du die erforderliche CSS Bibliothek jeder Bento Komponente einbinden, um ein ordnungsgemäßes Laden zu gewährleisten. Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles verwenden, die inline verfügbar sind. Siehe [Layout und Style](#layout-and-style).

### Import via npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### Einbinden via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
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

### Layout und Style

Jede Bento Komponente verfügt über eine kleine CSS Bibliothek, die du einbinden musst, um ein ordnungsgemäßes Laden ohne [Sprünge im Inhalt](https://web.dev/cls/) zu gewährleisten. Da hierbei die Reihenfolge wichtig ist, musst du manuell sicherstellen, dass Stylesheets vor allen benutzerdefinierten Styles eingebunden werden.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles auch inline verfügbar machen:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Containertyp

Die Komponente `bento-embedly-card` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen (Folien) eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird):

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### Attribute

#### `data-url`

Die URL zum Abrufen von Einbettungsinformationen.

#### `data-card-embed`

Die URL zu einem Video oder zu Rich Media. Verwende dies bei statischen Embeds wie Artikeln: Anstatt den statischen Seiteninhalt in der Karte zu verwenden, bettet die Karte das Video oder Rich Media Element ein.

#### `data-card-image`

Die URL zu einem Bild. Gibt an, welches Bild in Artikelkarten verwendet werden soll, wenn `data-url` auf einen Artikel verweist. Nicht alle Bild URLs werden unterstützt. Wenn das Bild nicht geladen wird, versuche es mit einem anderen Bild oder einer anderen Domain.

#### `data-card-controls`

Aktiviert die Symbole zum Teilen von Inhalten.

- `0`: Symbole zum Teilen von Inhalten deaktivieren
- `1`: Symbole zum Teilen von Inhalten aktivieren

Der Standardwert ist `1`.

#### `data-card-align`

Richtet die Karte aus. Die möglichen Werte sind `left`, `center` und `right`. Der Standardwert ist `center`.

#### `data-card-recommend`

Wenn Empfehlungen unterstützt werden, werden Embedly Empfehlungen auf Video und Rich Karten deaktiviert. Dies sind Empfehlungen, die von Embedly erstellt wurden.

- `0`: deaktiviert Embedly Empfehlungen.
- `1`: aktiviert Embedly Empfehlungen

Der Standardwert ist `1`.

#### `data-card-via` (optional)

Gibt den Via Inhalt in der Karte an. Dies ist sehr praktisch für Urheberbezeichnung.

#### `data-card-theme` (optional)

Ermöglicht das Aktivieren des `dark` Modus, der die Hintergrundfarbe des Hauptkartencontainers ändert. Verwende `dark`, um dieses Design festzulegen. Für dunkle Hintergründe ist diese Angabe empfehlenswert. Der Standardwert ist `light`, wodurch keine Hintergrundfarbe für den Hauptkartencontainer festgelegt wird.

#### title (optional)

Definiere für die Komponente das Attribut `title`, das an das `<iframe>` Element weitergegeben wird. Der Standardwert ist `"Embedly card"`.

#### API Beispiel

Wird der Attributwert programmatisch geändert, so wird das Element automatisch aktualisiert. Zum Beispiel kannst du durch Ändern des Attributs `data-url` zu einem anderen Embed wechseln:

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

## Preact/React Komponente

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

### Layout und Style

#### Containertyp

Die Komponente `BentoEmbedlyCard` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen (Folien) eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird). Diese können inline angewendet werden:

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

Oder via `className`:

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

### Eigenschaften

#### `url`

Die URL zum Abrufen von Einbettungsinformationen.

#### `cardEmbed`

Die URL zu einem Video oder zu Rich Media. Verwende dies bei statischen Embeds wie Artikeln: Anstatt den statischen Seiteninhalt in der Karte zu verwenden, bettet die Karte das Video oder Rich Media Element ein.

#### `cardImage`

Die URL zu einem Bild. Gibt an, welches Bild in Artikelkarten verwendet werden soll, wenn `data-url` auf einen Artikel verweist. Nicht alle Bild URLs werden unterstützt. Wenn das Bild nicht geladen wird, versuche es mit einem anderen Bild oder einer anderen Domain.

#### `cardControls`

Aktiviert die Symbole zum Teilen von Inhalten.

- `0`: Symbole zum Teilen von Inhalten deaktivieren
- `1`: Symbole zum Teilen von Inhalten aktivieren

Der Standardwert ist `1`.

#### `cardAlign`

Richtet die Karte aus. Die möglichen Werte sind `left`, `center` und `right`. Der Standardwert ist `center`.

#### `cardRecommend`

Wenn Empfehlungen unterstützt werden, werden Embedly Empfehlungen auf Video und Rich Karten deaktiviert. Dies sind Empfehlungen, die von Embedly erstellt wurden.

- `0`: deaktiviert Embedly Empfehlungen.
- `1`: aktiviert Embedly Empfehlungen

Der Standardwert ist `1`.

#### `cardVia` (optional)

Gibt den Via Inhalt in der Karte an. Dies ist sehr praktisch für Urheberbezeichnung.

#### `cardTheme` (optional)

Ermöglicht das Aktivieren des `dark` Modus, der die Hintergrundfarbe des Hauptkartencontainers ändert. Verwende `dark`, um dieses Design festzulegen. Für dunkle Hintergründe ist diese Angabe empfehlenswert. Der Standardwert ist `light`, wodurch keine Hintergrundfarbe für den Hauptkartencontainer festgelegt wird.

#### title (optional)

Definiere für die Komponente das Attribut `title`, das an das `<iframe>` Element weitergegeben wird. Der Standardwert ist `"Embedly card"`.
