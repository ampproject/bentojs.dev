---
id: bento-sidebar
title: Bento Sidebar
permalink: "/es/components/bento-sidebar/"
short_title: Sidebar
layout: layouts/component.njk
description: Permite mostrar contenidos meta pensados como accesos temporales, tales como la navegación, los enlaces, los botones y los menús.
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

Permite mostrar contenidos meta pensados como accesos temporales, tales como<br>la navegación, los enlaces, los botones y los menús. La barra lateral se puede mostrar pulsando un botón mientras el contenido principal permanece visualmente en la parte inferior.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-sidebar como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

Debe incluir la biblioteca CSS correspondiente para cada componente de Bento si desea garantizar que se cargue adecuadamente, y lo deberá hacer antes de incorporar estilos personalizados. O utilice los estilos precargados ligeros que estén disponibles en línea. Consulte [Diseño y estilo](#layout-and-style).

### Importar mediante npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### Incluir mediante `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
    />
  </head>
  <body>
    <bento-sidebar id="sidebar1" side="right" hidden>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </bento-sidebar>

    <div class="buttons" style="margin-top: 8px">
      <button id="open-sidebar">Open sidebar</button>
    </div>

    <script>
      (async () => {
        const sidebar = document.querySelector('#sidebar1');
        await customElements.whenDefined('bento-sidebar');
        const api = await sidebar.getApi();

        // set up button actions
        document.querySelector('#open-sidebar').onclick = () => api.open();
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### Interactividad y uso de la API

Los componentes Bento son altamente interactivos mediante su API. Se puede acceder a la API del componente `bento-sidebar` incluyendo la siguiente etiqueta de script en su documento:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Acciones

La API de `bento-sidebar` le permite realizar las siguientes acciones:

##### open()

Abre la barra lateral.

```javascript
api.open();
```

##### close()

Cierra la barra lateral.

```javascript
api.close();
```

##### toggle()

Alterna el estado de apertura de la barra lateral.

```javascript
api.toggle(0);
```

### Diseño y estilo

Cada componente de Bento dispone de una pequeña biblioteca CSS que debe incluir para garantizar que se cargue correctamente sin [cambios de contenido](https://web.dev/cls/). Debido a las especificaciones basadas en el orden, debe asegurarse manualmente de que las hojas de estilo se incluyan antes de los estilos personalizados.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Otra posibilidad es hacer que los estilos ligeros pre-actualizados estén disponibles en los estilos integrados en el código:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Estilos personalizados

El componente `bento-sidebar` puede tener un estilo con CSS estándar.

- El `width` de la `bento-sidebar` puede configurarse para ajustar el ancho desde el valor preestablecido de 45px.
- La altura de la `bento-sidebar` puede configurarse para ajustar la altura de la barra lateral, si es necesario. Si la altura supera los 100vw, la barra lateral tendrá una barra de desplazamiento vertical. La altura preestablecida de la barra lateral es de 100vw y puede ser anulada en CSS para hacerla más corta.
- El estado actual de la barra lateral se expone mediante el atributo `open` que se establece en la etiqueta `bento-sidebar` cuando la barra lateral está abierta en la página.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### Consideraciones sobre la UX

Cuando utilice `<bento-sidebar>`, tenga en cuenta que sus usuarios frecuentemente verán su página en el dispositivo móvil, que puede mostrar un encabezado de posición fija. Además, los navegadores normalmente muestran su propio encabezado fijo en la parte superior de la página. Si se agrega otro elemento de posición fija en la parte superior de la pantalla, se ocupará una gran cantidad de espacio en la pantalla del móvil con un contenido que no ofrece al usuario ninguna información nueva.

Por esta razón, recomendamos que los accesos para abrir la barra lateral no se coloquen en un encabezado fijo de ancho completo.

- La barra lateral solo puede aparecer en el lado izquierdo o derecho de una página.
- La altura máxima de la barra lateral es de 100vh, si la altura supera los 100vh aparece una barra de desplazamiento vertical. La altura predeterminada se establece en 100vh en CSS y se puede anular en CSS.
- El ancho de la barra lateral puede establecerse y ajustarse mediante CSS.
- `<bento-sidebar>` se *recomienda* que sea descendiente directo de `<body>` para preservar un orden lógico en el DOM para la accesibilidad, así como para evitar la alteración de su comportamiento por un elemento contenedor. Tenga en cuenta que tener un ancestro de `bento-sidebar` con un conjunto `z-index` puede hacer que la barra lateral aparezca debajo de otros elementos (como los encabezados), lo que interrumpiría su funcionalidad.

### Atributos

#### side

Indique desde qué lado de la página debe abrirse la barra lateral, ya sea `left` o `right`. Si no se especifica un `side`, el valor `side` se heredará del atributo `body` de la etiqueta `dir` attribute (`ltr` =&gt; `left` , `rtl` =&gt; `right`), si no existe `dir`, el `side` es predeterminado `left`.

#### open

Este atributo está presente cuando la barra lateral está abierta.

---

## El componente Preact/React

### Importar mediante npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import React from 'react';
import {BentoSidebar} from '@bentoproject/sidebar/react';
import '@bentoproject/sidebar/styles.css';

function App() {
  return (
    <BentoSidebar>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

### Interactividad y uso de la API

Los componentes de Bento son muy interactivos gracias a su API. La API del componente `BentoSidebar` puede ser accesible a través de un `ref`:

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoSidebar ref={ref}>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

#### Acciones

La API de `BentoSidebar` le permite realizar las siguientes acciones:

##### open()

Abre la barra lateral.

```javascript
ref.current.open();
```

##### close()

Cierra la barra lateral.

```javascript
ref.current.close();
```

##### toggle()

Alterna el estado de apertura de la barra lateral.

```javascript
ref.current.toggle(0);
```

### Diseño y estilo

El componente `BentoSidebar` puede tener un estilo con CSS estándar.

- El `width` de la `bento-sidebar` puede configurarse para ajustar el ancho desde el valor preestablecido de 45px.
- La altura de la `bento-sidebar` puede configurarse para ajustar la altura de la barra lateral, si es necesario. Si la altura supera los 100vw, la barra lateral tendrá una barra de desplazamiento vertical. La altura preestablecida de la barra lateral es de 100vw y puede ser anulada en CSS para hacerla más corta.

Para asegurarse de que el componente se renderiza como usted quiere, asegúrese de aplicar un tamaño al componente. Estos pueden aplicarse en línea:

```jsx
<BentoSidebar style={% raw %}{{width: 300, height: '100%'}}{% endraw %}>
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

O mediante `className`:

```jsx
<BentoSidebar className="custom-styles">
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

```css
.custom-styles {
  height: 100%;
  width: 300px;
}
```

### Consideraciones sobre la UX

Cuando utilice `<bento-sidebar>`, tenga en cuenta que sus usuarios frecuentemente verán su página en el dispositivo móvil, que puede mostrar un encabezado de posición fija. Además, los navegadores normalmente muestran su propio encabezado fijo en la parte superior de la página. Si se agrega otro elemento de posición fija en la parte superior de la pantalla, se ocupará una gran cantidad de espacio en la pantalla del móvil con un contenido que no ofrece al usuario ninguna información nueva.

Por esta razón, recomendamos que los accesos para abrir la barra lateral no se coloquen en un encabezado fijo de ancho completo.

- La barra lateral solo puede aparecer en el lado izquierdo o derecho de una página.
- La altura máxima de la barra lateral es de 100vh, si la altura supera los 100vh aparece una barra de desplazamiento vertical. La altura predeterminada se establece en 100vh en CSS y se puede anular en CSS.
- El ancho de la barra lateral puede establecerse y ajustarse mediante CSS.
- `<BentoSidebar>` se *recomienda* que sea descendiente directo de `<body>` para preservar un orden lógico en el DOM para la accesibilidad, así como para evitar la alteración de su comportamiento por un elemento contenedor. Tenga en cuenta que tener un ancestro de `bento-sidebar` con un conjunto `z-index` puede hacer que la barra lateral aparezca debajo de otros elementos (como los encabezados), lo que interrumpiría su funcionalidad.

### Accesorios

#### side

Indique desde qué lado de la página debe abrirse la barra lateral, ya sea `left` o `right`. Si no se especifica un `side`, el valor `side` se heredará del atributo `body` de la etiqueta `dir` attribute (`ltr` =&gt; `left` , `rtl` =&gt; `right`), si no existe `dir`, el `side` es predeterminado `left`.
