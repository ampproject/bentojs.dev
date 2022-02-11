---
id: bento-fit-text
title: Bento Fit Text
permalink: "/es/components/bento-fit-text/"
short_title: Fit Text
layout: layouts/component.njk
description: Determina el mejor tamaño de letra para que todo el contenido del texto se ajuste al espacio disponible.
---

# Bento Fit Text

{% heroexample 'bento-fit-text' %}

Determina el mejor tamaño de letra para que todo el contenido del texto se ajuste al espacio disponible.

El contenido previsto para Bento Fit Text es texto u otro contenido en estilos integrados en el código, pero también puede contener contenido que no esté los estilos integrados en el código.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-fit-text como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

Debe incluir la biblioteca CSS correspondiente para cada componente de Bento si desea garantizar que se cargue adecuadamente, y lo deberá hacer antes de incorporar estilos personalizados. O utilice los estilos precargados ligeros que estén disponibles en línea. Consulte [Diseño y estilo](#layout-and-style).

### Importar mediante npm

```bash
npm install @bentoproject/fit-text
```

```javascript
import {defineElement as defineBentoFitText} from '@bentoproject/fit-text';
defineBentoFitText();
```

### Incluir mediante `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css" crossorigin="anonymous">
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

### Contenido desbordado

Si el contenido del `bento-fit-text` desborda el espacio disponible, incluso con un `min-font-size` específico, el contenido que se desborda, se corta y se oculta. Los navegadores basados en WebKit y Blink muestran elipsis para el contenido que se desborda.

En el siguiente ejemplo, especificamos un `min-font-size` de `40`, y agregamos más contenido dentro del elemento `bento-fit-text`. Esto hace que el contenido exceda el tamaño de su bloque fijo padre, por lo que el texto se trunca para ajustarse al contenedor.

```html
<div style="width: 300px; height: 300px; background: #005af0; color: #fff">
  <bento-fit-text min-font-size="40">
    Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
    inermis reprehendunt. Lorem ipsum dolor sit amet, has nisl nihil convenire
    et, vim at aeque inermis reprehendunt
  </bento-fit-text>
</div>
```

### Diseño y estilo

Cada componente de Bento dispone de una pequeña biblioteca CSS que debe incluir para garantizar que se cargue correctamente sin [cambios de contenido](https://web.dev/cls/). Debido a las especificaciones basadas en el orden, debe asegurarse manualmente de que las hojas de estilo se incluyan antes de los estilos personalizados.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
/>
```

Otra posibilidad es hacer que los estilos ligeros pre-actualizados estén disponibles en los estilos integrados en el código:

```html
<style>
  bento-fit-text {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo de contenedor

El componente `bento-fit-text` tiene un formato específico para el tamaño del diseño. Para garantizar que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como el que se definió con `height`, `width`, `aspect-ratio`, u otras propiedades similares):

```css
bento-fit-text {
  height: 100px;
  width: 100%;
}
```

### Consideraciones sobre la accesibilidad de los contenidos desbordados

Aunque el contenido desbordado se trunca *visualmente* para ajustarse al contenedor, tenga en cuenta que aún está presente en el documento. No confíe en el comportamiento de desbordamiento para simplemente "rellenar" grandes cantidades de contenido en sus páginas, ya que, aunque visualmente puede parecer apropiado, puede hacer que la página sea excesivamente voluminosa para los usuarios de tecnologías de asistencia (como los lectores de pantalla), ya que para estos usuarios todo el contenido truncado seguirá leyéndose/anunciándose en su totalidad.

### Atributos

#### Consultas de medios

Los atributos de `<bento-fit-text>` se pueden configurar para utilizar diferentes opciones basadas en una [consulta de medios](./../../../docs/spec/amp-html-responsive-attributes.md).

#### `min-font-size`

Especifica el tamaño mínimo de la fuente en pixeles como un número entero que el `bento-fit-text` puede utilizar.

#### `max-font-size`

Especifica el tamaño máximo de la fuente en pixeles como un número entero que el `bento-fit-text` puede utilizar.

#### Ejemplo de API

El cambio programado del valor de un atributo actualizará automáticamente el elemento.

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

## El componente Preact/React

### Importar mediante npm

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

### Diseño y estilo

#### Tipo de contenedor

El componente `BentoFitText` tiene un tipo de tamaño de diseño determinado. Para asegurarse de que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como uno definido con `height`, `width`, `aspect-ratio`, u otras propiedades similares). Se pueden aplicar en estilos integrados en el código:

```jsx
<BentoFitText style={% raw %}{{width: 300, height: 100}}{% endraw %}>
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

O mediante `className`:

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

### Props

#### `minFontSize`

Especifica el tamaño mínimo de la fuente en pixeles como un número entero que el `bento-fit-text` puede utilizar.

#### `maxFontSize`

Especifica el tamaño máximo de la fuente en pixeles como un número entero que el `bento-fit-text` puede utilizar.
