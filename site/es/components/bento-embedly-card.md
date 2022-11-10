---
id: bento-embedly-card
title: Bento Embedly Card
permalink: "/es/components/bento-embedly-card/"
short_title: Embedly Card
layout: layouts/component.njk
description: Proporciona inserciones adaptativas y que se pueden compartir mediante <a href="http://docs.embed.ly/docs/cards">Embedly cards</a>
---

# Bento Embedly Card

{% heroexample 'bento-embedly-card' %}

Proporciona inserciones adaptativas y que se pueden compartir mediante [Tarjetas de Embedly](http://docs.embed.ly/docs/cards)

Las tarjetas son la forma más fácil de aprovechar Embedly. Además, las tarjetas proporcionan una inserción adaptativa con análisis de inserciones incorporados.

Si tiene un plan de pago, utilice el componente `<bento-embedly-key>` o `<BentoEmbedlyContext.Provider>` para establecer su clave API. Solo necesita una clave de Bento Embedly por página para eliminar la marca de Embedly de las tarjetas. Dentro de su página, puede incluir una o varias instancias de tarjetas Bento Embedly.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-embedly-card como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

Debe incluir la biblioteca CSS correspondiente para cada componente de Bento si desea garantizar que se cargue adecuadamente, y lo deberá hacer antes de incorporar estilos personalizados. O utilice los estilos precargados ligeros que estén disponibles en línea. Consulte [Diseño y estilo](#layout-and-style).

### Importar mediante npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### Incluir mediante `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
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

### Diseño y estilo

Cada componente de Bento dispone de una pequeña biblioteca CSS que debe incluir para garantizar que se cargue correctamente sin [cambios de contenido](https://web.dev/cls/). Debido a las especificaciones basadas en el orden, debe asegurarse manualmente de que las hojas de estilo se incluyan antes de los estilos personalizados.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

Otra posibilidad es hacer que los estilos ligeros pre-actualizados estén disponibles en los estilos integrados en el código:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo de contenedor

El componente `bento-embedly-card` tiene un formato específico para el tamaño del diseño. Para garantizar que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como el que se definió con `height`, `width`, `aspect-ratio`, u otras propiedades similares):

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### Atributos

#### `data-url`

La URL para obtener información de la inserción.

#### `data-card-embed`

La URL de un video o medio enriquecido. Utilizar con inserciones estáticas como artículos, en vez de utilizar el contenido estático de la página en la tarjeta, la tarjeta insertará el video o los medios enriquecidos.

#### `data-card-image`

La URL de una imagen. Especifica qué imagen utilizar en las tarjetas de artículos cuando `data-url` señala un artículo. No se admiten todas las URL de imágenes, si la imagen no se carga, pruebe con otra imagen o dominio.

#### `data-card-controls`

Activa los iconos para compartir.

- `0`: Desactiva los iconos para compartir.
- `1`: Activa los iconos para compartir.

El predeterminado es `1`.

#### `data-card-align`

Alinea la tarjeta. Los posibles valores son `left`, `center` y `right`. El valor predeterminado es `center`.

#### `data-card-recommend`

Cuando se admiten recomendaciones, se desactivan las recomendaciones de embedly en las tarjetas de video y las tarjetas enriquecidas. Estas son recomendaciones creadas por embedly.

- `0`: Desactiva las recomendaciones de embedly.
- `1`: Activa las recomendaciones de embedly.

El valor predeterminado es `1`.

#### `data-card-via` (opcional)

Especifica el tipo de contenido en la tarjeta. Esta es una gran manera de realizar la atribución.

#### `data-card-theme` (opcional)

Permite configurar el tema `dark` que cambia el color de fondo del contenedor de la tarjeta principal. Utilice `dark` para establecer este tema. Para fondos oscuros es mejor especificar esto. El tema predeterminado es `light`, que no establece el color de fondo del contenedor de la tarjeta principal.

#### <code>title</code> (opcional)

Defina un atributo `title` para que el componente se propague al elemento `<iframe>` inferior. El valor predeterminado es `"Embedly card"`.

#### Ejemplo de API

El cambio programado en cualquiera de los valores de los atributos actualizará automáticamente el elemento. Por ejemplo, al cambiar el valor de `data-url`, puede cambiar a una inserción diferente:

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

## El componente Preact/React

### Importar mediante npm

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

### Diseño y estilo

#### Tipo de contenedor

El componente `BentoEmbedlyCard` tiene un tipo de tamaño de diseño determinado. Para asegurarse de que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como uno definido con `height`, `width`, `aspect-ratio`, u otras propiedades similares). Se pueden aplicar en estilos integrados en el código:

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

O mediante `className`:

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

### Props

#### `url`

La URL para recuperar la información de una inserción.

#### `cardEmbed`

La URL de un video o medio enriquecido. Utilizar con incrustaciones estáticas como artículos, en vez de utilizar el contenido estático de la página en la tarjeta, la tarjeta insertará el video o los medios enriquecidos.

#### `cardImage`

La URL de una imagen. Especifica qué imagen utilizar en las tarjetas de artículos cuando `data-url` señala un artículo. No se admiten todas las URL de imágenes, si la imagen no se carga, pruebe con otra imagen o dominio.

#### `cardControls`

Activa los iconos para compartir.

- `0`: Desactiva los iconos para compartir.
- `1`: Activa los iconos para compartir.

El predeterminado es `1`.

#### `cardAlign`

Alinea la tarjeta. Los posibles valores son `left`, `center` y `right`. El valor predeterminado es `center`.

#### `cardRecommend`

Cuando se admiten recomendaciones, se desactivan las recomendaciones de embedly en las tarjetas de video y las tarjetas enriquecidas. Estas son recomendaciones creadas por embedly.

- `0`: Desactiva las recomendaciones de embedly.
- `1`: Activa las recomendaciones de embedly.

El valor predeterminado es `1`.

#### `cardVia` (opcional)

Especifica el tipo de contenido en la tarjeta. Esta es una gran manera de realizar la atribución.

#### `cardTheme` (opcional)

Permite configurar el tema `dark` que cambia el color de fondo del contenedor de la tarjeta principal. Utilice `dark` para establecer este tema. Para fondos oscuros es mejor especificar esto. El tema predeterminado es `light`, que no establece el color de fondo del contenedor de la tarjeta principal.

#### <code>title</code> (opcional)

Defina un atributo `title` para que el componente se propague al elemento `<iframe>` inferior. El valor predeterminado es `"Embedly card"`.
