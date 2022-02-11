---
id: bento-stream-gallery
title: Bento Stream Gallery
permalink: "/es/components/bento-stream-gallery/"
short_title: Stream Gallery
layout: layouts/component.njk
description: El Bento Stream Gallery permite mostrar varias piezas de contenido similares a la vez a lo largo de un eje horizontal.
---

# Bento Stream Gallery

{% heroexample 'bento-stream-gallery' %}

El Bento Stream Gallery permite mostrar varias piezas de contenido similares a la vez a lo largo de un eje horizontal.

Se trata de una especialización de Bento Base Carousel y utiliza [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) para ajustar dinámicamente el tamaño y el número de diapositivas mostradas basadas en el ancho del contenedor. Para implementar una UX más personalizada, consulte [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-stream-gallery como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

Debe incluir la biblioteca CSS correspondiente para cada componente de Bento si desea garantizar que se cargue adecuadamente, y lo deberá hacer antes de incorporar estilos personalizados. O utilice los estilos precargados ligeros que estén disponibles en línea. Consulte [Diseño y estilo](#layout-and-style).

### Importar mediante npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### Incluir mediante `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
    />
  </head>
  <body>
    <bento-stream-gallery id="my-stream-gallery" style="height: 150px;" min-item-width="75" max-item-width="100">
      <div style="height: 100px; background: red;">A</div>
      <div style="height: 100px; background: green;">B</div>
      <div style="height: 100px; background: blue;">C</div>
      <div style="height: 100px; background: yellow;">D</div>
      <div style="height: 100px; background: purple;">E</div>
      <div style="height: 100px; background: orange;">F</div>
      <div style="height: 100px; background: fuchsia;">G</div>
    </bento-stream-gallery>
  </body>
</html>
```

{% endexample %}

### Interactividad y uso de la API

Los componentes Bento son altamente interactivos mediante su API. Se puede acceder a la API del componente `bento-stream-gallery` incluyendo la siguiente etiqueta de script en su documento:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Acciones

##### next()

Desplaza el carrusel hacia delante por número de diapositivas visibles.

```js
api.next();
```

##### prev()

Desplaza el carrusel hacia atrás por número de diapositivas visibles.

```js
api.prev();
```

##### goToSlide(index: number)

Mueve el carrusel a la diapositiva que se especifica en el argumento `index`.

Nota: `index` se normalizará a un número mayor o igual que <code>0</code> y menor que el número de diapositivas indicadas.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Eventos

El componente Bento Stream Gallery permite registrar y responder a los siguientes eventos:

##### slideChange

Este evento se activa cuando el índice que muestra el carrusel se modifica. El nuevo índice está disponible por medio de `event.data.index`.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Diseño y estilo

Cada componente de Bento dispone de una pequeña biblioteca CSS que debe incluir para garantizar que se cargue correctamente sin [cambios de contenido](https://web.dev/cls/). Debido a las especificaciones basadas en el orden, debe asegurarse manualmente de que las hojas de estilo se incluyan antes de los estilos personalizados.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Otra posibilidad es hacer que los estilos ligeros pre-actualizados estén disponibles en los estilos integrados en el código:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Ejemplo de API

En este ejemplo se muestra cómo cambiar de forma programada la diapositiva siguiente/anterior y saltar a diapositivas específicas.

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
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
    />
  </head>
  <body>
    <bento-stream-gallery id="my-stream-gallery" style="height: 150px;" min-item-width="75" max-item-width="100">
      <div style="height: 100px; background: red;">A</div>
      <div style="height: 100px; background: green;">B</div>
      <div style="height: 100px; background: blue;">C</div>
      <div style="height: 100px; background: yellow;">D</div>
      <div style="height: 100px; background: purple;">E</div>
      <div style="height: 100px; background: orange;">F</div>
      <div style="height: 100px; background: fuchsia;">G</div>
    </bento-stream-gallery>
    <script>
      (async () => {
        const streamGallery = document.querySelector('#my-stream-gallery');
        await customElements.whenDefined('bento-stream-gallery');
        const api = await streamGallery.getApi();

        // programatically go to next slide
        api.next();
        // programatically go to prev slide
        api.prev();
        // programatically go to slide
        api.goToSlide(4);
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### Atributos

#### Comportamiento

##### `controls`

Ya sea `"always"`, `"auto"`, o `"never"`, cuyo valor predeterminado es `"auto"`. Determina si se muestran las flechas de navegación anterior/siguiente y cuándo lo hacen. Nota: Cuando `"outet-arrows` es `true`, las flechas se muestran `"always"`.

- `always`: Las flechas siempre se muestran.
- `auto`: Las flechas se muestran cuando el carrusel recibió la última interacción por medio del mouse, y no se muestran cuando el carrusel recibió la última interacción de forma táctil. En la primera carga de los dispositivos táctiles, las flechas se muestran hasta la primera interacción.
- `never`: Las flechas nunca se muestran.

##### `extra-space`

Ya sea `"around"` o indefinido. Esto determina cómo se asigna el espacio extra después de mostrar el número que se calculó de diapositivas visibles en el carrusel. Si `"around"`, el espacio en blanco se distribuye uniformemente alrededor del carrusel con `justify-content: center`, de lo contrario, el espacio se asigna a la derecha del carrusel para los documentos LTR y a la izquierda para los documentos RTL.

##### `loop`

Ya sea `true` o `false`, de forma predeterminada `true`. Cuando es verdadero, el carrusel permitirá al usuario moverse desde el primer elemento hasta el último y viceversa. Debe haber al menos tres diapositivas presentes para que se produzca el bucle.

##### `outset-arrows`

Ya sea `true` o `false`, de forma predeterminada `false`. Cuando es verdadero, el carrusel mostrará sus flechas al principio y a ambos lados de las diapositivas. Tenga en cuenta que con las flechas de salida, el contenedor de diapositivas tendrá una longitud efectiva de 100px menos que el espacio asignado para su contenedor dado - 50px por flecha a cada lado. Cuando es falso, el carrusel mostrará sus flechas insertadas y superpuestas sobre los bordes izquierdo y derecho de las diapositivas.

##### `peek`

Un número, cuyo valor predeterminado es `0`. Determina la cantidad de diapositivas adicionales que se mostrarán (en uno o en ambos lados de la diapositiva actual) como una concesión al usuario que indica que el carrusel es deslizable.

#### Visibilidad de las diapositivas de la galería

##### `min-visible-count`

Un número, cuyo valor predeterminado es `1`. Determina el número mínimo de diapositivas que deben mostrarse en un momento dado. Se pueden utilizar valores de fracciones para hacer visible parte de unas diapositivas adicionales.

##### `max-visible-count`

Un número, cuyo valor predeterminado es [`Número.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Determina el número máximo de diapositivas que deben mostrarse en un momento dado. Se pueden utilizar valores de fracciones para hacer visible parte de unas diapositivas adicionales.

##### `min-item-width`

Un número, cuyo valor predeterminado es `1`. Determina el ancho mínimo de cada elemento, utilizado para resolver cuántos elementos enteros pueden mostrarse a la vez dentro del ancho total de la galería.

##### `max-item-width`

Un número, cuyo valor predeterminado es [`Número.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Determina el ancho máximo de cada elemento, utilizado para resolver cuántos elementos enteros pueden mostrarse a la vez dentro del ancho total de la galería.

#### Deslizamiento de diapositivas

##### `slide-align`

Ya sea `start` o `center`. Cuando inicia la alineación, el inicio de una diapositiva (por ejemplo, el borde izquierdo, cuando la alineación es horizontal) se alinea con el inicio de un carrusel. Cuando se alinea al centro, el centro de una diapositiva se alinea con el centro de un carrusel.

##### `snap`

Tanto `true` como `false`, cuyo valor predeterminado es `true`. Determina si el carrusel debe ajustarse a las diapositivas cuando se desplaza.

### Diseño

Puede utilizar el selector de elementos `bento-stream-gallery` para dar estilo al streamGallery de manera libre.

---

## El componente Preact/React

### Importar mediante npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import React from 'react';
import {BentoStreamGallery} from '@bentoproject/stream-gallery/react';
import '@bentoproject/stream-gallery/styles.css';

function App() {
  return (
    <BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} minItemWidth="75" maxItemWidth="100">
      <img src="img1.png" />
      <img src="img2.png" />
      <img src="img3.png" />
      <img src="img4.png" />
      <img src="img5.png" />
      <img src="img6.png" />
      <img src="img7.png" />
    </BentoStreamGallery>
  );
}
```

### Interactividad y uso de la API

Los componentes de Bento son muy interactivos gracias a su API. La API del componente `BentoStreamGallery` puede ser accesible a través de un `ref`:

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoStreamGallery ref={ref}>
      <img src="img1.png" />
      <img src="img2.png" />
      <img src="img3.png" />
      <img src="img4.png" />
      <img src="img5.png" />
      <img src="img6.png" />
      <img src="img7.png" />
    </BentoStreamGallery>
  );
}
```

#### Acciones

La API de `BentoStreamGallery` le permite realizar las siguientes acciones:

##### next()

Desplaza el carrusel hacia adelante mediante `advanceCount` en las diapositivas.

```javascript
ref.current.next();
```

##### prev()

Desplaza el carrusel hacia atrás mediante `advanceCount` en las diapositivas.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Desplaza el carrusel a la diapositiva especificada por el argumento `index`. Nota: `index` se normalizará a un número mayor o igual que `0` y menor que el número de diapositivas indicadas.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### Eventos

##### onSlideChange

Este evento se activa cuando se modificó el índice que muestra el carrusel.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Diseño y estilo

#### Tipo de contenedor

El componente `BentoStreamGallery` tiene un tipo de tamaño de diseño definido. Para asegurarse de que el componente se visualiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos mediante un diseño de CSS deseado (como uno definido con `width`). Esto puede aplicarse en los estilos integrados en el código:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

O mediante `className`:

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Accesorios

#### Accesorios comunes

Este componente es compatible con los [accesorios comunes](../../../docs/spec/bento-common-props.md) para los componentes React y Preact.

#### Comportamiento

##### `controls`

Ya sea `"always"`, `"auto"`, o `"never"`, cuyo valor predeterminado es `"auto"`. Determina si se muestran las flechas de navegación anterior/siguiente y cuándo lo hacen. Nota: Cuando `"outet-arrows` es `true`, las flechas se muestran `"always"`.

- `always`: Las flechas siempre se muestran.
- `auto`: Las flechas se muestran cuando el carrusel recibió la última interacción por medio del mouse, y no se muestran cuando el carrusel recibió la última interacción de forma táctil. En la primera carga de los dispositivos táctiles, las flechas se muestran hasta la primera interacción.
- `never`: Las flechas nunca se muestran.

##### `extraSpace`

Ya sea `"around"` o indefinido. Esto determina cómo se asigna el espacio extra después de mostrar el número que se calculó de diapositivas visibles en el carrusel. Si `"around"`, el espacio en blanco se distribuye uniformemente alrededor del carrusel con `justify-content: center`, de lo contrario, el espacio se asigna a la derecha del carrusel para los documentos LTR y a la izquierda para los documentos RTL.

##### `loop`

Ya sea `true` o `false`, de forma predeterminada `true`. Cuando es verdadero, el carrusel permitirá al usuario moverse desde el primer elemento hasta el último y viceversa. Debe haber al menos tres diapositivas presentes para que se produzca el bucle.

##### `outsetArrows`

Ya sea `true` o `false`, de forma predeterminada `false`. Cuando es verdadero, el carrusel mostrará sus flechas al principio y a ambos lados de las diapositivas. Tenga en cuenta que con las flechas de salida, el contenedor de diapositivas tendrá una longitud efectiva de 100px menos que el espacio asignado para su contenedor dado - 50px por flecha a cada lado. Cuando es falso, el carrusel mostrará sus flechas insertadas y superpuestas sobre los bordes izquierdo y derecho de las diapositivas.

##### `peek`

Un número, cuyo valor predeterminado es `0`. Determina la cantidad de diapositivas adicionales que se mostrarán (en uno o en ambos lados de la diapositiva actual) como una concesión al usuario que indica que el carrusel es deslizable.

#### Visibilidad de las diapositivas de la galería

##### `minVisibleCount`

Un número, cuyo valor predeterminado es `1`. Determina el número mínimo de diapositivas que deben mostrarse en un momento dado. Se pueden utilizar valores de fracciones para hacer visible parte de unas diapositivas adicionales.

##### `maxVisibleCount`

Un número, cuyo valor predeterminado es [`Número.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Determina el número máximo de diapositivas que deben mostrarse en un momento dado. Se pueden utilizar valores de fracciones para hacer visible parte de unas diapositivas adicionales.

##### `minItemWidth`

Un número, cuyo valor predeterminado es `1`. Determina el ancho mínimo de cada elemento, utilizado para resolver cuántos elementos enteros pueden mostrarse a la vez dentro del ancho total de la galería.

##### `maxItemWidth`

Un número, cuyo valor predeterminado es [`Número.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Determina el ancho máximo de cada elemento, utilizado para resolver cuántos elementos enteros pueden mostrarse a la vez dentro del ancho total de la galería.

#### Deslizamiento de diapositivas

##### `slideAlign`

Ya sea `start` o `center`. Cuando inicia la alineación, el inicio de una diapositiva (por ejemplo, el borde izquierdo, cuando la alineación es horizontal) se alinea con el inicio de un carrusel. Cuando se alinea al centro, el centro de una diapositiva se alinea con el centro de un carrusel.

##### `snap`

Tanto `true` como `false`, cuyo valor predeterminado es `true`. Determina si el carrusel debe ajustarse a las diapositivas cuando se desplaza.
