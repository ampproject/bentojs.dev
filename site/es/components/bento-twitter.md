---
id: bento-twitter
title: Bento Twitter
permalink: "/es/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Inserta contenido <a href="https://twitter.com">Twitter</a> como un Tweet o un Momento.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Inserta contenido de [Twitter](https://twitter.com) como un Tweet o un Momento.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-twitter como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

Debe incluir la biblioteca CSS correspondiente para cada componente de Bento si desea garantizar que se cargue adecuadamente, y lo deberá hacer antes de incorporar estilos personalizados. O utilice los estilos precargados ligeros que estén disponibles en línea. Consulte [Diseño y estilo](#layout-and-style).

### Importar mediante npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Incluir mediante `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
```

### Ejemplo

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

### Diseño y estilo

Cada componente de Bento dispone de una pequeña biblioteca CSS que debe incluir para garantizar que se cargue correctamente sin [cambios de contenido](https://web.dev/cls/). Debido a las especificaciones basadas en el orden, debe asegurarse manualmente de que las hojas de estilo se incluyan antes de los estilos personalizados.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Otra posibilidad es hacer que los estilos ligeros pre-actualizados estén disponibles en los estilos integrados en el código:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo de contenedor

El componente `bento-twitter` tiene un formato específico para el tamaño del diseño. Para garantizar que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como el que se definió con `height`, `width`, `aspect-ratio`, u otras propiedades similares):

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Atributos

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (obligatorio)</strong></td>
    <td>El ID del Tweet o Momento, o el tipo de fuente si se debe mostrar una Línea de tiempo. En una URL como https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> es el ID del tweet. En una URL como https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> es el ID del momento. Los tipos de fuente para la línea de tiempo válidos son <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> y <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (opcional)</strong></td>
    <td>Cuando se muestra una línea de tiempo, es necesario proporcionar otros argumentos además de <code>timeline-source-type</code>. Por ejemplo, <code>data-timeline-screen-name="amphtml"</code> en combinación con <code>data-timeline-source-type="profile"</code> se mostrará una línea de tiempo de la cuenta de Twitter de AMP. Para obtener más información sobre los argumentos disponibles, consulte la sección "Timelines" en la <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Guía de funciones de fábrica de JavaScript de Twitter</a>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (opcional)</strong></td>
    <td>Puede especificar opciones para la apariencia del Tweet, del Momento o de la Línea de tiempo al establecer los atributos <code>data-</code>. Por ejemplo, <code>data-cards="hidden"</code> desactiva las tarjetas de Twitter. Para obtener información sobre las opciones disponibles, consulte los documentos de Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">para tweets</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">para momentos</a> y <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">para líneas de tiempo</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong><code>title</code> (opcional)</strong></td>
    <td>Defina un atributo <code>title</code> para el componente. El valor predeterminado es <code>Twitter</code>.</td>
  </tr>
</table>

### Interactividad y uso de la API

El cambio programado de cualquiera de los valores de los atributos actualizará automáticamente el elemento. Por ejemplo, si se cambia el ID del tuit mediante `data-tweetid` se cargará automáticamente el nuevo tuit:

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

## El componente Preact/React

### Importar mediante npm

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

### Diseño y estilo

#### Tipo de contenedor

El componente `BentoTwitter` tiene un tipo de tamaño de diseño determinado. Para asegurarse de que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como uno definido con `height`, `width`, `aspect-ratio`, u otras propiedades similares). Se pueden aplicar en estilos integrados en el código:

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

O mediante `className`:

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

## Props

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (obligatorio)</strong></td>
    <td>El ID del Tweet o Momento, o el tipo de fuente si se debe mostrar una Línea de tiempo. En una URL como https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> es el ID del tweet. En una URL como https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> es el ID del momento. Los tipos de fuente para la línea de tiempo válidos son <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> y <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (opcional)</strong></td>
    <td>Al mostrar un tweet, se pueden proporcionar otros argumentos además de <code>tweetid</code>. Por ejemplo, <code>cards="hidden"</code> combinado con <code>conversation="none"</code> mostrará un tweet sin miniaturas ni comentarios adicionales.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (opcional)</strong></td>
    <td>Al mostrar un momento, se pueden proporcionar otros argumentos además de <code>moment</code>. Por ejemplo, <code>limit="5"</code> mostrará un momento incrustado con un máximo de cinco tarjetas.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (opcional)</strong></td>
    <td>Cuando se muestra una línea de tiempo, se pueden proporcionar otros argumentos además de <code>timelineSourceType</code>. Por ejemplo, <code>timelineScreenName="amphtml"</code> combinado con <code>timelineSourceType="profile"</code> mostrará una línea de tiempo en la cuenta que tiene AMP en Twitter.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (opcional)</strong></td>
    <td>Puede especificar opciones para la apariencia del Tweet, Momento o Línea de tiempo al pasar un objeto al prop <code>options</code>. Para obtener más información sobre las opciones disponibles, consulte los documentos de Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">para tweets</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">para momentos</a> y <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">para líneas de tiempo</a>. Nota: Al pasar al prop "options", asegúrese de optimizar o memoizar el objeto:<pre>const TWITTER_OPTIONS = {
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
    <td width="40%"><strong><code>title</code> (opcional)</strong></td>
    <td>Defina un <code>title</code> para el componente iframe. El valor predeterminado es <code>Twitter</code>.</td>
  </tr>
</table>
