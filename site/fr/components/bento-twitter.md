---
id: bento-twitter
title: Bento Twitter
permalink: "/fr/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: |-
  Intègre du contenu <a href="https:"//twitter.com">Twitter</a> tel qu'un tweet ou un"
  moment.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Intègre du contenu &lt;a href="https://twitter.com"&gt;Twitter&lt;/a&gt; tel qu'un tweet ou un moment.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilisez bento-twitter comme composant Web ou composant fonctionnel React :</p> <a class="bd-button" href="#web-component">↓ Composant Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Composant Web

Vous devez inclure la bibliothèque CSS requise de chaque composant Bento pour garantir un chargement correct et avant d'ajouter des styles personnalisés. Ou utilisez les styles de pré-mise à niveau légers intégrés disponibles. Voir [Mise en page et style](#layout-and-style).

### Importation via npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Inclusion via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
```

### Exemple

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

### Mise en page et style

Chaque composant Bento possède une petite bibliothèque CSS que vous devez inclure pour garantir un chargement correct sans [écart de contenu](https://web.dev/cls/). En raison de la spécificité basée sur l'ordre, vous devez vous assurer manuellement que les feuilles de style sont incluses avant tout style personnalisé.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Vous pouvez également rendre les styles de pré-mise à niveau légers disponibles et intégrés :

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Type de conteneur

Le composant `bento-twitter` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise en page CSS souhaitée (comme celle définie avec `height`, `width`, `aspect-ratio`, ou d'autres propriétés similaires) :

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Attributs

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (requis)</strong></td>
    <td>L'ID du Tweet ou du Moment, ou le type de source si une timeline doit être affichée. Dans une URL comme https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> est l'identifiant du tweet. Dans une URL comme https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> est l'identifiant du moment. Les types de source de timeline valides sont <code>profile</code>, <code>likes</code> , <code>list</code> , <code>collection</code>, <code>url</code> et <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (facultatif)</strong></td>
    <td>Lors de l'affichage d'une timeline, d'autres arguments doivent être fournis en plus de <code>timeline-source-type</code>. Par exemple, <code>data-timeline-screen-name="amphtml"</code> en combinaison avec <code>data-timeline-source-type="profile"</code> affichera une timeline du compte Twitter AMP. Pour plus de détails sur les arguments disponibles, consultez la section « Timelines » du <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Guide des fonctions d'usine JavaScript de Twitter</a>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (facultatif)</strong></td>
    <td>Vous pouvez spécifier des options pour l'apparence du Tweet, du Moment ou de la Timeline en définissant des attributs <code>data-</code>. Par exemple, <code>data-cards="hidden"</code> désactive les cartes Twitter. Pour plus de détails sur les options disponibles, consultez la documentation de Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">pour les tweets</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">pour les moments</a> et <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">pour les timelines</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong>titre (facultatif)</strong></td>
    <td>Définissez un attribut <code>title</code> pour le composant. La valeur par défaut est <code>Twitter</code>.</td>
  </tr>
</table>

### Interactivité et utilisation de l'API

La modification programmatique d'une des valeurs d'attribut mettra automatiquement à jour l'élément. Par exemple, la modification de l'identifiant du tweet via `data-tweetid` chargera automatiquement le nouveau tweet :

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

## Composant Preact/React

### Importation via npm

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

### Mise en page et style

#### Type de conteneur

Le composant `BentoTwitter` a un type de taille de mise en page défini. Pour vous assurer que le composant s'affiche correctement, assurez-vous d'appliquer une taille au composant et à ses enfants immédiats via une mise en page CSS souhaitée (comme celle définie avec `height`, `width`, `aspect-ratio`, ou d'autres propriétés similaires). Ceux-ci peuvent être appliqués de manière intégrée :

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

Ou via `className` :

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

## Accessoires

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (requis)</strong></td>
    <td>L'ID du Tweet ou du Moment, ou le type de source si une timeline doit être affichée. Dans une URL comme https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> est l'identifiant du tweet. Dans une URL comme https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> est l'identifiant du moment. Les types de source de timeline valides sont <code>profile</code>, <code>likes</code> , <code>list</code> , <code>collection</code>, <code>url</code> et <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (facultatif)</strong></td>
    <td>Lors de l'affichage d'un tweet, d'autres arguments peuvent être fournis en plus de <code>tweetid</code>. Par exemple, <code>cards="hidden"</code> en combinaison avec <code>conversation="none"</code> affichera un tweet sans vignettes ni commentaires supplémentaires.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (facultatif)</strong></td>
    <td>Lors de l'affichage d'un moment, d'autres arguments peuvent être fournis en plus de <code>moment</code>. Par exemple, <code>limit="5"</code> affichera un moment intégré comportant jusqu'à cinq cartes.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (facultatif)</strong></td>
    <td>Lors de l'affichage d'une timeline, d'autres arguments peuvent être fournis en plus de <code>timelineSourceType</code>. Par exemple, <code>timelineScreenName="amphtml"</code> en combinaison avec <code>timelineSourceType="profile"</code> affichera une timeline du compte Twitter AMP.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (facultatif)</strong></td>
    <td>Vous pouvez spécifier des options pour l'apparence du tweet, moment ou calendrier en passant un objet à la propriété <code>options</code>. Pour plus de détails sur les options disponibles, consultez la documentation de Twitter concernant <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">les tweets</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">les moments</a> et <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">les calendriers</a>. Remarque : Lorsque vous passez dans la prop « options », assurez-vous d'optimiser ou de mémoriser l'objet : <pre>const TWITTER_OPTIONS = {
  // assurez-vous de les définir une fois au niveau global !
};
fonction MyComponent() {
  // etc.
  envoie (
    &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt;
  );
}</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>titre (facultatif)</strong></td>
    <td>Définissez un attribut <code>title</code> pour le composant iframe. La valeur par défaut est <code>Twitter</code>.</td>
  </tr>
</table>
