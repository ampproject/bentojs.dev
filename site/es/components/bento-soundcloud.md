---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/es/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Incorpora un <a href="https://soundcloud.com">Soundcloud</a> clip.
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Incorpora un clip de [Soundcloud](https://soundcloud.com).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-soundcloud como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

Debe incluir la biblioteca CSS correspondiente para cada componente de Bento si desea garantizar que se cargue adecuadamente, y lo deberá hacer antes de incorporar estilos personalizados. O utilice los estilos precargados ligeros que estén disponibles en línea. Consulte [Diseño y estilo](#layout-and-style).

### Importar mediante npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### Incluir mediante `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
    />
    <style>
      bento-soundcloud {
        width: 300px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <bento-soundcloud
      id="my-track"
      data-trackid="89299804"
      data-visual="true"
    ></bento-soundcloud>
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
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Otra posibilidad es hacer que los estilos ligeros pre-actualizados estén disponibles en los estilos integrados en el código:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo de contenedor

El componente `bento-soundcloud` tiene un tipo de tamaño de diseño determinado. Para asegurarse de que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como uno definido con `height`, `width`, `aspect-ratio`, u otras propiedades similares):

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Atributos

El cambio programado de uno de los atributos hará que el reproductor se actualice automáticamente.

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
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
    />
    <style>
      bento-soundcloud {
        width: 300px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <bento-soundcloud
      id="my-track"
      data-trackid="89299804"
      data-visual="true"
    ></bento-soundcloud>
    <div class="buttons" style="margin-top: 8px">
      <button id="change-track">Change track</button>
    </div>

    <script>
      (async () => {
        const soundcloud = document.querySelector('#my-track');
        await customElements.whenDefined('bento-soundcloud');

        // set up button actions
        document.querySelector('#change-track').onclick = () => {
          soundcloud.setAttribute('data-trackid', '243169232');
          soundcloud.setAttribute('data-color', 'ff5500');
          soundcloud.removeAttribute('data-visual');
        };
      })();
    </script>
  </body>
</html>
```

{% endexample %}

##### data-track

Este atributo es necesario si <code>data-playlistid</code> no está definido.<br> El valor de este atributo es el ID de una pista, un número entero.

##### data-playlistid

Este atributo es necesario si <code>data-trackid</code> no está definido.<br> El valor de este atributo es el ID de una lista de reproducción, un número entero.

##### data-secret-token (opcional)

El token secreto de la pista, si es privada.

##### data-visual (opcional)

Si se define como <code>true</code>, muestra el modo "Visual" de tamaño completo, de lo contrario se muestra como modo "Clásico". El valor predeterminado es <code>false</code>.

##### data-color (opcional)

Este atributo es un color personalizado que se antepone al modo "Clásico". El atributo se ignora en el modo "Visual". Especifique un valor de color hexadecimal, sin el # principal  (por ejemplo, <code>data-color="e540ff"</code>).

---

## El componente Preact/React

### Importar mediante npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import React from 'react';
import {BentoSoundcloud} from '@bentoproject/soundcloud/react';
import '@bentoproject/soundcloud/styles.css';

function App() {
  return <BentoSoundcloud trackId="243169232" visual={true}></BentoSoundcloud>;
}
```

### Diseño y estilo

#### Tipo de contenedor

El componente `BentoSoundcloud` tiene un tipo de tamaño de diseño determinado. Para asegurarse de que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como uno definido con `height`, `width`, `aspect-ratio`, u otras propiedades similares). Se pueden aplicar en estilos integrados en el código:

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

O mediante `className`:

```jsx
<BentoSoundcloud
  className="custom-styles"
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Props

##### trackId

Este atributo es necesario si <code>data-playlistid</code> no está definido.<br> El valor de este atributo es el ID de una pista, un número entero.

##### playlistId

Este atributo es necesario si <code>data-trackid</code> no está definido.<br> El valor de este atributo es el ID de una lista de reproducción, un número entero.

##### secretToken (opcional)

El token secreto de la pista, si es privada.

##### visual (opcional)

Si se define como <code>true</code>, muestra el modo "Visual" de tamaño completo, de lo contrario se muestra como modo "Clásico". El valor predeterminado es <code>false</code>.

##### color (opcional)

Este atributo es un color personalizado que se antepone al modo "Clásico". El atributo se ignora en el modo "Visual". Especifique un valor de color hexadecimal, sin el # principal  (por ejemplo, <code>data-color="e540ff"</code>).
