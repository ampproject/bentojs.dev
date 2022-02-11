---
id: bento-twitter
title: Składnik Bento Twitter
permalink: "/pl/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Osadza treść z serwisu <a href="https://twitter.com">Twitter</a>, taką jak Tweet lub Chwila.
---

# Składnik Bento Twitter

{% heroexample 'bento-twitter' %}

Osadza treść z serwisu [Twitter](https://twitter.com), taką jak Tweet lub Chwila.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Element bento-twitter można stosować jako składnik internetowy lub składnik funkcjonalny React:</p>   <a class="bd-button" href="#web-component">↓ Składnik internetowy</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Składnik internetowy

Przed dodaniem własnych stylów musisz dołączyć wymaganą bibliotekę CSS każdego składnika Bento, aby zagwarantować prawidłowe ładowanie. Można też użyć dostępnych inline uproszczonych stylów sprzed uaktualnienia. Patrz sekcja [Układ i styl](#layout-and-style).

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Dołączanie za pomocą znacznika `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
```

### Przykład

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

### Układ i styl

Każdy składnik Bento ma małą bibliotekę CSS, którą należy dołączyć, aby zagwarantować prawidłowe ładowanie bez [przesunięć treści](https://web.dev/cls/). Ze względu na specyfikę opartą na kolejności musisz ręcznie zapewnić dołączanie arkuszy stylów przed wszelkimi stylami niestandardowymi.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Można również udostępnić dostępne inline uproszczone style sprzed uaktualnienia:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Typ kontenera

Składnik `bento-twitter` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Atrybuty

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (wymagany)</strong></td>
    <td>ID tweetu lub momentu, lub typ źródła, jeśli ma być wyświetlana oś czasu. W adresie URL takim jak https://twitter.com/joemccann/status/640300967154597888 identyfikator tweetu to <code>640300967154597888</code>. W adresie URL takim jak https://twitter.com/i/moments/1009149991452135424 identyfikator momentu to <code>1009149991452135424</code>. Prawidłowe typy źródeł osi czasu, to <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> oraz <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (opcjonalny)</strong></td>
    <td>Podczas wyświetlania osi czasu, oprócz atrybutu <code>timeline-source-type</code> należy podać dodatkowe argumenty. Na przykład <code>data-timeline-screen-name="amphtml"</code> w połączeniu z <code>data-timeline-source-type="profile"</code> spowoduje wyświetlenie osi czasu konta AMP na Twitterze. Szczegółowe informacje na temat dostępnych argumentów zawiera sekcja „Timelines” w <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Twitter's JavaScript Factory Functions Guide</a>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (opcjonalny)</strong></td>
    <td>Możesz określić opcje wyglądu tweetu, momentu lub Osi czasu, ustawiając atrybuty <code>data-</code>. Na przykład, <code>data-cards="hidden"</code> dezaktywuje karty Twittera. Szczegóły na temat dostępnych opcji można znaleźć w dokumentach Twittera dotyczących <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">tweetów</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">momentów</a> i <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">osi czasu</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (opcjonalny)</strong></td>
    <td>Zdefiniuj atrybut <code>title</code> składnika. Domyślnie jest to <code>Twitter</code>.</td>
  </tr>
</table>

### Interaktywność i wykorzystanie interfejsu API

Programowa zmiana wartości któregokolwiek z atrybutów spowoduje automatyczną aktualizację elementu. Na przykład, zmiana identyfikatora tweeta za pomocą atrybutu `data-tweetid` spowoduje automatyczne załadowanie nowego tweeta:

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

## Składnik Preact/React

### Import za pomocą narzędzia npm

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

### Układ i styl

#### Typ kontenera

Składnik `BentoTwitter` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

Albo za pomocą atrybutu `className`:

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

## Właściwości

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (wymagana)</strong></td>
    <td>ID tweetu lub momentu, lub typ źródła, jeśli ma być wyświetlana oś czasu. W adresie URL takim jak https://twitter.com/joemccann/status/640300967154597888 identyfikator tweetu to <code>640300967154597888</code>. W adresie URL takim jak https://twitter.com/i/moments/1009149991452135424 identyfikator momentu to <code>1009149991452135424</code>. Prawidłowe typy źródeł osi czasu, to <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> oraz <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (opcjonalna)</strong></td>
    <td>W razie wyświetlania tweetu można podać dalsze argumenty oprócz <code>tweetid</code>. Na przykład <code>cards="hidden"</code> w połączeniu z <code>conversation="none"</code> spowoduje wyświetlenie tweetu bez dodatkowych miniatur ani komentarzy.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (opcjonalna)</strong></td>
    <td>W razie wyświetlania momentu można podać dodatkowe argumenty oprócz <code>moment</code>. Na przykład <code>limit="5"</code> spowoduje wyświetlenie osadzonego momentu z maksymalnie pięcioma kartami.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (opcjonalna)</strong></td>
    <td>W razie wyświetlania osi czasu, oprócz <code>timelineSourceType</code> można podać dodatkowe argumenty. Na przykład <code>timelineScreenName="amphtml"</code> w połączeniu z <code>timelineSourceType="profile"</code> spowoduje wyświetlenie osi czasu konta AMP na Twitterze.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (opcjonalna)</strong></td>
    <td>Możesz określić opcje wyglądu tweeta, chwili lub osi czasu, przekazując obiekt do właściwości <code>options</code>. Szczegóły na temat dostępnych opcji można znaleźć w dokumentach Twittera dotyczących <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">tweetów</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">chwil</a> i <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">osi czasu</a>. Uwaga: przekazując właściwość „options” upewnij się, że optymalizujesz lub zapamiętujesz obiekt: <pre>const TWITTER_OPTIONS = {
  // make sure to define these once globally!
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
    <td width="40%"><strong>title (opcjonalny)</strong></td>
    <td>Zdefiniuj atrybut <code>title</code> składnika. Domyślnie jest to <code>Twitter</code>.</td>
  </tr>
</table>
