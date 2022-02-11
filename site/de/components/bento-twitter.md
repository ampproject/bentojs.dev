---
id: bento-twitter
title: Bento Twitter
permalink: "/de/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Bettet <a href="https://twitter.com">Twitter</a> Inhalte wie Tweets und Moments ein.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Bettet [Twitter](https://twitter.com) Inhalte wie Tweets und a Moments ein.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Verwende bento-twitter als Webkomponente oder als funktionale React Komponente:</p>   <a class="bd-button" href="#web-component">↓ Webkomponente</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Webkomponente

Bevor du benutzerdefinierte Stile hinzufügst, musst du die erforderliche CSS Bibliothek jeder Bento Komponente einbinden, um ein ordnungsgemäßes Laden zu gewährleisten. Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles verwenden, die inline verfügbar sind. Siehe [Layout und Style](#layout-and-style).

### Import via npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Einbinden via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
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

### Layout und Style

Jede Bento Komponente verfügt über eine kleine CSS Bibliothek, die du einbinden musst, um ein ordnungsgemäßes Laden ohne [Sprünge im Inhalt](https://web.dev/cls/) zu gewährleisten. Da hierbei die Reihenfolge wichtig ist, musst du manuell sicherstellen, dass Stylesheets vor allen benutzerdefinierten Styles eingebunden werden.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Alternativ kannst du die leichtgewichtigen Pre-Upgrade Styles auch inline verfügbar machen:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Containertyp

Die Komponente `bento-twitter` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen (Folien) eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird):

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Attribute

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (erforderlich)</strong></td>
    <td>Die ID des Tweets oder Moments oder der Quelltyp, wenn eine Timeline angezeigt werden soll. In einer URL wie https://twitter.com/joemccann/status/640300967154597888 ist <code>640300967154597888</code> die Tweet-ID. In einer URL wie https://twitter.com/i/moments/1009149991452135424 ist <code>1009149991452135424</code> die Moment-ID. Gültige Timeline Quelltypen sind <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> und <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (optional)</strong></td>
    <td>Beim Anzeigen einer Timeline müssen neben <code>timeline-source-type</code> weitere Argumente angegeben werden. Beispielsweise zeigt <code>data-timeline-screen-name="amphtml"</code> in Kombination mit <code>data-timeline-source-type="profile"</code> eine Timeline des AMP Twitter Kontos an. Einzelheiten zu den verfügbaren Argumenten findest du im Abschnitt "Timelines" im <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">JavaScript Factory Functions Guide von Twitter</a>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (optional)</strong></td>
    <td>Du kannst Optionen für die Darstellung des Tweets, des Moments oder der Timeline festlegen, indem du Attribute vom Typ <code>data-</code> angibst. So deaktiviert zum Beispiel <code>data-cards="hidden"</code> Twitter Cards. Einzelheiten zu den verfügbaren Optionen findest du in der Twitter Dokumentation <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">für Tweets</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">für Momente</a> und <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">für Timelines</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (optional)</strong></td>
    <td>Lege ein <code>title</code> Attribut für die Komponente fest. Der Standardwert ist <code>Twitter</code>.</td>
  </tr>
</table>

### Interaktivität und API Nutzung

Wird der Attributwert programmatisch geändert, so wird das Element automatisch aktualisiert. Zum Beispiel wird durch Ändern der Tweet ID `data-tweetid` der neue Tweet automatisch geladen:

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

## Preact/React Komponente

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

### Layout und Style

#### Containertyp

Die Komponente `BentoTwitter` besitzt einen definierten Layout Größentyp. Um zu gewährleisten, dass die Komponente richtig rendert, musst du der Komponente und ihren unmittelbar untergeordneten Elementen (Folien) eine Größe mithilfe eines CSS Layouts zuweisen (z. B. eines Layouts, das mittels `height`, `width`, `aspect-ratio` oder ähnlichen Eigenschaften definiert wird). Diese können inline angewendet werden:

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

Oder via `className`:

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

## Eigenschaften

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (erforderlich)</strong></td>
    <td>Die ID des Tweets oder Moments oder der Quelltyp, wenn eine Timeline angezeigt werden soll. In einer URL wie https://twitter.com/joemccann/status/640300967154597888 ist <code>640300967154597888</code> die Tweet-ID. In einer URL wie https://twitter.com/i/moments/1009149991452135424 ist <code>1009149991452135424</code> die Moment-ID. Gültige Timeline Quelltypen sind <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> und <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (optional)</strong></td>
    <td>Bei der Anzeige eines Tweets können neben <code>tweetid</code> noch weitere Argumente angegeben werden. Beispielsweise zeigt <code>cards="hidden"</code> in Kombination mit <code>conversation="none"</code> einen Tweet ohne zusätzliche Thumbnails oder Kommentare an.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (optional)</strong></td>
    <td>Bei der Anzeige eines Moments können neben <code>moment</code> noch weitere Argumente angegeben werden. <code>limit="5"</code> zeigt beispielsweise einen eingebetteten Moment mit bis zu fünf Karten an.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (optional)</strong></td>
    <td>Beim Anzeigen einer Timeline müssen neben <code>timelineSourceType</code> weitere Argumente angegeben werden. Beispielsweise zeigt <code>timelineScreenName="amphtml"</code> in Kombination mit <code>timelineSourceType="profile"</code> eine Timeline des AMP Twitter Kontos an.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (optional)</strong></td>
    <td>Du kannst Optionen für die Darstellung des Tweets, des Moments oder der Timeline angeben, indem du ein Objekt an die Eigenschaft <code>options</code> übergibst. Einzelheiten zu den verfügbaren Optionen findest du in der Twitter Dokumentation <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">für Tweets</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">für Moments</a> und <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">für Timelines</a>. Hinweis: Achte bei der Übergabe der Eigenschaft `options` darauf, das Objekt zu optimieren oder zu memoisieren: <pre>const TWITTER_OPTIONS = {
  // vergiss nicht, diese einmal global zu definieren!
};
function MyComponent() {
  // etc
  return (
    &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt;
  );
}</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (optional)</strong></td>
    <td>Lege ein <code>title</code> Attribut für das iframe der Komponente fest. Der Standardwert ist <code>Twitter</code>.</td>
  </tr>
</table>
