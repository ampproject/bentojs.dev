---
id: bento-social-share
title: Bento Social Share
permalink: "/es/components/bento-social-share/"
short_title: Social Share
layout: layouts/component.njk
description: Muestra un botón para compartir en las redes sociales o en el sistema.
---

# Bento Social Share

{% heroexample 'bento-social-share' %}

Muestra un botón para compartir en las redes sociales o en el sistema.

Actualmente, ninguno de los botones generados por Bento Social Share (incluyendo los de los proveedores preconfigurados) tiene una etiqueta o nombre accesible que se expone a las tecnologías de asistencia (como los lectores de pantalla). Asegúrese de incluir una `aria-label` con una etiqueta descriptiva, ya que de lo contrario estos controles se anunciarán simplemente como elementos "botón" sin etiquetar.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilice bento-social-share como un componente web o un componente funcional de React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## El componente web

Debe incluir la biblioteca CSS correspondiente para cada componente de Bento si desea garantizar que se cargue adecuadamente, y lo deberá hacer antes de incorporar estilos personalizados. O utilice los estilos precargados ligeros que estén disponibles en línea. Consulte [Diseño y estilo](#layout-and-style).

### Importar mediante npm

```bash
npm install @bentoproject/social-share
```

```javascript
import {defineElement as defineBentoSocialShare} from '@bentoproject/social-share';
defineBentoSocialShare();
```

### Incluir mediante `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-social-share-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-social-share-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-social-share-1.0.css" crossorigin="anonymous">
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
      href="https://cdn.ampproject.org/v0/bento-social-share-1.0.css"
    />
    <script
      async
      src="https://cdn.ampproject.org/v0/bento-social-share-1.0.js"
    ></script>
    <style>
      bento-social-share {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-social-share
      id="my-share"
      type="twitter"
      aria-label="Share on Twitter"
    ></bento-social-share>

    <div class="buttons" style="margin-top: 8px">
      <button id="change-share">Change share button</button>
    </div>

    <script>
      (async () => {
        const socialShare = document.querySelector('#my-share');
        await customElements.whenDefined('bento-social-share');

        // set up button actions
        document.querySelector('#change-share').onclick = () => {
          socialShare.setAttribute('type', 'linkedin');
          socialShare.setAttribute('aria-label', 'Share on LinkedIn');
        };
      })();
    </script>
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
  href="https://cdn.ampproject.org/v0/bento-social-share-1.0.css"
/>
```

Otra posibilidad es hacer que los estilos ligeros pre-actualizados estén disponibles en los estilos integrados en el código:

```html
<style>
  bento-social-share {
    display: inline-block;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    width: 60px;
    height: 44px;
  }
</style>
```

#### Tipo de contenedor

El componente `bento-social-share` tiene un formato específico para el tamaño del diseño. Para garantizar que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como el que se definió con `height`, `width`, `aspect-ratio`, u otras propiedades similares):

```css
bento-social-share {
  height: 100px;
  width: 100px;
}
```

#### Estilos predeterminados

De forma predeterminada, `bento-social-share` incluye algunos proveedores populares preconfigurados. Los botones de estos proveedores están diseñados con el color y el logotipo oficial del proveedor. El ancho predeterminado es de 60px, y la altura predeterminada es de 44px.

#### Estilos personalizados

Algunas veces usted quiere aportar su propio estilo. Simplemente puede anular los estilos disponibles de la siguiente manera:

```css
bento-social-share[type='twitter'] {
  color: blue;
  background: red;
}
```

Cuando personalice el estilo de un icono `bento-social-share`, asegúrese de que el icono personalizado cumple las indicaciones de marca establecidas por el proveedor (por ejemplo, Twitter, Facebook, etc.).

### Accesibilidad

#### Indicación de enfoque

El elemento `bento-social-share` tiene de forma predeterminada un contorno azul como indicador de enfoque visible. También tiene como valor predeterminado `tabindex=0`, lo que facilita al usuario el seguimiento mediante tabulación de varios elementos `bento-social-share` que se utilizan conjuntamente en una página.

El indicador de enfoque predeterminado se consigue con el siguiente conjunto de reglas de CSS.

```css
bento-social-share:focus {
  outline: #0389ff solid 2px;
  outline-offset: 2px;
}
```

El indicador de enfoque predeterminado puede sobrescribirse al definir estilos de CSS para el enfoque e incluirlos dentro de una etiqueta `style`. En el siguiente ejemplo, el primer conjunto de reglas de CSS elimina el indicador de enfoque en todos los elementos `bento-social-share` al establecer la propiedad `outline` en `none`. El segundo conjunto de reglas establece un contorno rojo (en vez del azul predeterminado) y también establece la propiedad `outline-offset` a `3px` para todos los elementos `bento-social-share` con la clase `custom-focus`.

```css
bento-social-share:focus {
  outline: none;
}

bento-social-share.custom-focus:focus {
  outline: red solid 2px;
  outline-offset: 3px;
}
```

Con estas reglas de CSS, los elementos `bento-social-share` no mostrarían el indicador de enfoque visible, a menos que incluyeran la clase `custom-focus`, en cuyo caso tendrían el indicador resaltado en rojo.

#### Contraste de colores

Tenga en cuenta que `bento-social-share` con un `type` de un valor de `twitter`, `whatsapp`, o `line` mostrará un botón con una combinación de colores de primer plano/fondo inferior al umbral de 3:1 que se recomienda para el contenido que no es de texto definido en [WCAG 2.1 SC 1.4.11 Contraste sin texto](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html).

Sin un contraste suficiente, el contenido puede ser difícil de percibir y, por tanto, de identificar. En casos extremos, los contenidos con bajo contraste puede que no sean visibles en absoluto para las personas con problemas de percepción del color. En el caso de los botones de compartir mencionados anteriormente, es posible que los usuarios no puedan percibir/comprender adecuadamente qué son los controles de compartir y a qué servicio se refieren.

### Proveedores preconfigurados

El componente `bento-social-share` proporciona [algunos proveedores preconfigurados](./social-share-config.js) que conocen sus endpoints para compartir, así como algunos parámetros predeterminados.

<table>
  <tr>
    <th class="col-twenty">Proveedor</th>
    <th class="col-twenty">Tipo</th>
    <th>Parámetros</th>
  </tr>
  <tr>
    <td>
<a href="https://developers.google.com/web/updates/2016/10/navigator-share">API para compartir en la web</a> (activa el diálogo para compartir del SO)</td>
    <td><code>system</code></td>
    <td>
      <ul>
        <li>
<code>data-param-text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Correo electrónico</td>
    <td><code>email</code></td>
    <td>
      <ul>
        <li>
<code>data-param-subject</code>: opcional</li>
        <li>
<code>data-param-body</code>: opcional</li>
        <li>
<code>data-param-recipient</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Facebook</td>
    <td><code>facebook</code></td>
    <td>
      <ul>
       <li>
<code>data-param-app_id</code>: <strong>requerido</strong>, predeterminado: ninguno. Este parámetro es el <code>app_id</code> de Facebook que se requiere para el <a href="https://developers.facebook.com/docs/sharing/reference/share-dialog">diálogo para compartir en Facebook</a>.</li>
        <li>
<code>data-param-href</code>: opcional</li>
        <li>
<code>data-param-quote</code>: opcional, puede utilizarse para compartir una cita o un texto.</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>LinkedIn</td>
    <td><code>linkedin</code></td>
    <td>
      <ul>
        <li>
<code>data-param-url</code>: opcional</li>
      </ul>
    </td>
  </tr>
  
  <tr>
    <td>Pinterest</td>
    <td><code>pinterest</code></td>
    <td>
      <ul>
        <li>
<code>data-param-media</code>: opcional (pero es muy recomendable ponerlo). Url para los medios que se compartirán en Pinterest. Si no se establece, Pinterest pedirá al usuario final que suba un medio.</li>
        <li>
<code>data-param-url</code>: opcional</li>
        <li>
<code>data-param-description</code>: opcional</li>
      </ul>
    </td>
  </tr>
  
  <tr>
    <td>Tumblr</td>
    <td><code>tumblr</code></td>
    <td>
      <ul>
        <li>
<code>data-param-url</code>: opcional</li>
        <li>
<code>data-param-text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Twitter</td>
    <td><code>twitter</code></td>
    <td>
      <ul>
        <li>
<code>data-param-url</code>: opcional</li>
        <li>
<code>data-param-text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Whatsapp</td>
    <td><code>whatsapp</code></td>
    <td>
      <ul>
        <li>
<code>data-param-text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>LINE</td>
    <td><code>line</code></td>
    <td>
      <ul>
        <li>
<code>data-param-url</code>: opcional</li>
        <li>
<code>data-param-text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>SMS</td>
    <td><code>sms</code></td>
    <td>
      <ul>
        <li>
<code>data-param-body</code>: opcional</li>
</ul>
    </td>
  </tr>
</table>

### Proveedores no configurados

Además de los proveedores preconfigurados, puede utilizar proveedores no configurados que especifiquen atributos adicionales en el componente `bento-social-share`.

#### Ejemplo: Cómo crear un botón para compartir un proveedor no configurado

En el siguiente ejemplo se crea un botón para compartir mediante Facebook Messenger al establecer el atributo `data-share-endpoint` en el endpoint correcto para el protocolo personalizado de Facebook Messenger.

```html
<bento-social-share
  type="facebookmessenger"
  data-share-endpoint="fb-messenger://share"
  data-param-text="Check out this article: TITLE - CANONICAL_URL"
  aria-label="Share on Facebook Messenger"
>
</bento-social-share>
```

Como estos proveedores no están preconfigurados, tendrá que crear la imagen del botón y los estilos adecuados para el proveedor.

### Atributos

#### type (obligatorio)

Selecciona un tipo de proveedor. Esto es necesario tanto para los proveedores preconfigurados como para los no configurados.

#### data-target

Especifica el destino en el cual se abrirá el objetivo. El valor predeterminado es `_blank` para todos los casos que no sean de correo electrónico/SMS en iOS, en cuyo caso el objetivo se establece en `_top`.

#### data-share-endpoint

Este atributo es necesario para los proveedores no configurados.

Algunos proveedores populares tienen endpoints para compartir preconfigurados. Para obtener más detalles, consulte la sección Proveedores preconfigurados. En el caso de los proveedores no configurados, tendrá que especificar el endpoint para compartir.

#### data-param-*

Todos los atributos prefijados `data-param-*` se convierten en parámetros de la URL y se pasan al endpoint para compartir.

#### aria-label

La descripción del botón para la accesibilidad. Una etiqueta recomendada es "Compartir en &lt;type&gt;".

#### Ejemplo de API

El cambio programado en cualquiera de los valores de los atributos actualizará automáticamente el elemento. Por ejemplo, al cambiar el atributo `type` puede alternar entre diferentes proveedores de recursos compartidos.

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
      href="https://cdn.ampproject.org/v0/bento-social-share-1.0.css"
    />
    <script
      async
      src="https://cdn.ampproject.org/v0/bento-social-share-1.0.js"
    ></script>
    <style>
      bento-social-share {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-social-share
      id="my-share"
      type="twitter"
      aria-label="Share on Twitter"
    ></bento-social-share>

    <div class="buttons" style="margin-top: 8px">
      <button id="change-share">Change share button</button>
    </div>

    <script>
      (async () => {
        const socialShare = document.querySelector('#my-share');
        await customElements.whenDefined('bento-social-share');

        // set up button actions
        document.querySelector('#change-share').onclick = () => {
          socialShare.setAttribute('type', 'linkedin');
          socialShare.setAttribute('aria-label', 'Share on LinkedIn');
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
npm install @bentoproject/social-share
```

```javascript
import React from 'react';
import {BentoSocialShare} from '@bentoproject/social-share/react';
import '@bentoproject/social-share/styles.css';

function App() {
  return (
    <BentoSocialShare
      type="twitter"
      aria-label="Share on Twitter"
    ></BentoSocialShare>
  );
}
```

### Diseño y estilo

#### Tipo de contenedor

El componente `BentoSocialShare` tiene un tipo de tamaño de diseño determinado. Para asegurarse de que el componente se renderiza correctamente, asegúrese de aplicar un tamaño al componente y a sus descendientes inmediatos (diapositivas) mediante el diseño CSS que desee (como uno definido con `height`, `width`, `aspect-ratio`, u otras propiedades similares). Se pueden aplicar en estilos integrados en el código:

```jsx
<BentoSocialShare
  style={% raw %}{{width: 50, height: 50}}{% endraw %}
  type="twitter"
  aria-label="Share on Twitter"
></BentoSocialShare>
```

O mediante `className`:

```jsx
<BentoSocialShare
  className="custom-styles"
  type="twitter"
  aria-label="Share on Twitter"
></BentoSocialShare>
```

```css
.custom-styles {
  height: 50px;
  width: 50px;
}
```

### Accesibilidad

#### Indicación de enfoque

El elemento `BentoSocialShare` tiene un contorno azul predeterminado como indicador de enfoque visible. También tiene como valor predeterminado `tabindex=0`, lo que facilita al usuario el seguimiento de las pestañas en varios elementos `BentoSocialShare` que se utilizan conjuntamente en una página.

El indicador de enfoque predeterminado se consigue con el siguiente conjunto de reglas de CSS.

```css
BentoSocialShare:focus {
  outline: #0389ff solid 2px;
  outline-offset: 2px;
}
```

El indicador de enfoque predeterminado puede sobrescribirse si se definen los estilos de CSS para el enfoque y se incluyen dentro de una etiqueta `style` en una página HTML de AMP. En el siguiente ejemplo, el primer conjunto de reglas de CSS elimina el indicador de enfoque en todos los elementos `BentoSocialShare` al establecer la propiedad `outline` en `none`. El segundo conjunto de reglas especifica un contorno rojo (en vez del azul predeterminado) y también establece que la propiedad `outline-offset` sea `3px` para todos los elementos `BentoSocialShare` con la clase `custom-focus`.

```css
BentoSocialShare:focus {
  outline: none;
}

BentoSocialShare.custom-focus:focus {
  outline: red solid 2px;
  outline-offset: 3px;
}
```

Con estas reglas de CSS, los elementos `BentoSocialShare` no mostrarían el indicador de enfoque visible, a menos que incluyeran la clase `custom-focus`, en cuyo caso tendrían el indicador resaltado en rojo.

#### Contraste de colores

Tenga en cuenta que `BentoSocialShare` con un `type` de un valor de `twitter`, `whatsapp`, o `line` mostrará un botón con una combinación de colores de primer plano/fondo inferior al umbral de 3:1 que se recomienda para el contenido que no es de texto definido en [WCAG 2.1 SC 1.4.11 Contraste sin texto](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html).

Sin un contraste suficiente, el contenido puede ser difícil de percibir y, por tanto, de identificar. En casos extremos, los contenidos con bajo contraste puede que no sean visibles en absoluto para las personas con problemas de percepción del color. En el caso de los botones de compartir mencionados anteriormente, es posible que los usuarios no puedan percibir/comprender adecuadamente qué son los controles de compartir y a qué servicio se refieren.

### Proveedores preconfigurados

El componente `BentoSocialShare` proporciona [algunos proveedores preconfigurados](./social-share-config.js) que conocen sus endpoints para compartir, así como algunos parámetros predeterminados.

<table>
  <tr>
    <th class="col-twenty">Proveedor</th>
    <th class="col-twenty">Tipo</th>
    <th>Parámetros mediante el prop <code>param</code>
</th>
  </tr>
  <tr>
    <td>
<a href="https://developers.google.com/web/updates/2016/10/navigator-share">API para compartir en la web</a> (activa el diálogo para compartir del SO)</td>
    <td><code>system</code></td>
    <td>
      <ul>
        <li>
<code>text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Correo electrónico</td>
    <td><code>email</code></td>
    <td>
      <ul>
        <li>
<code>subject</code>: opcional</li>
        <li>
<code>body</code>: opcional</li>
        <li>
<code>recipient</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Facebook</td>
    <td><code>facebook</code></td>
    <td>
      <ul>
       <li>
<code>app_id</code>: <strong>requerido</strong>, predeterminado: ninguno. Este parámetro es el <code>app_id</code> de Facebook que se requiere para el <a href="https://developers.facebook.com/docs/sharing/reference/share-dialog">diálogo para compartir en Facebook</a>.</li>
        <li>
<code>href</code>: opcional</li>
        <li>
<code>quote</code>: opcional, puede utilizarse para compartir una cita o un texto.</li>
        </ul>
    </td>
  </tr>
  <tr>
    <td>LinkedIn</td>
    <td><code>linkedin</code></td>
    <td>
      <ul>
        <li>
<code>url</code>: opcional</li>
      </ul>
    </td>
  </tr>
  
  <tr>
    <td>Pinterest</td>
    <td><code>pinterest</code></td>
    <td>
      <ul>
        <li>
<code>media</code>: opcional (pero es muy recomendable ponerlo). Url para los medios que se compartirán en Pinterest. Si no se establece, Pinterest pedirá al usuario final que suba un medio.</li>
        <li>
<code>url</code>: opcional</li>
        <li>
<code>description</code>: opcional</li>
      </ul>
    </td>
  </tr>
  
  <tr>
    <td>Tumblr</td>
    <td><code>tumblr</code></td>
    <td>
      <ul>
        <li>
<code>url</code>: opcional</li>
        <li>
<code>text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Twitter</td>
    <td><code>twitter</code></td>
    <td>
      <ul>
        <li>
<code>url</code>: opcional</li>
        <li>
<code>text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Whatsapp</td>
    <td><code>whatsapp</code></td>
    <td>
      <ul>
        <li>
<code>text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>LINE</td>
    <td><code>line</code></td>
    <td>
      <ul>
        <li>
<code>url</code>: opcional</li>
        <li>
<code>text</code>: opcional</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>SMS</td>
    <td><code>sms</code></td>
    <td>
      <ul>
        <li>
<code>body</code>: opcional</li>
</ul>
    </td>
  </tr>
</table>

### Proveedores no configurados

Además de los proveedores preconfigurados, puede utilizar proveedores no configurados que especifiquen atributos adicionales en el componente `BentoSocialShare`.

#### Ejemplo: Cómo crear un botón para compartir un proveedor no configurado

En el siguiente ejemplo se crea un botón para compartir mediante Facebook Messenger al establecer el atributo `data-share-endpoint` en el endpoint correcto para el protocolo personalizado de Facebook Messenger.

```html
<BentoSocialShare
  type="facebookmessenger"
  data-share-endpoint="fb-messenger://share"
  data-param-text="Check out this article: TITLE - CANONICAL_URL"
  aria-label="Share on Facebook Messenger"
>
</BentoSocialShare>
```

Como estos proveedores no están preconfigurados, tendrá que crear la imagen del botón y los estilos adecuados para el proveedor.

### Props

#### type (obligatorio)

Selecciona un tipo de proveedor. Esto es necesario tanto para los proveedores preconfigurados como para los no configurados.

#### background

Algunas veces usted quiere aportar su propio estilo. Simplemente puede anular los estilos propuestos dándole un color al fondo.

Cuando personalice el estilo de un icono `BentoSocialShare`, asegúrese de que el icono personalizado cumple las indicaciones de marca establecidas por el proveedor (por ejemplo, Twitter, Facebook, etc.).

#### color

Algunas veces usted quiere aportar su propio estilo. Simplemente puede anular los estilos propuestos dándole un color para el relleno.

Cuando personalice el estilo de un icono `BentoSocialShare`, asegúrese de que el icono personalizado cumple las indicaciones de marca establecidas por el proveedor (por ejemplo, Twitter, Facebook, etc.).

#### target

Especifica el objetivo en el que se abrirá el objetivo. El valor predeterminado es `_blank` para todos los casos excepto el de correo electrónico/SMS en iOS, en cuyo caso el destino se establece en `_top`.

#### endpoint

Este prop es necesario para los proveedores no configurados.

Algunos proveedores populares tienen endpoints para compartir preconfigurados. Para obtener más detalles, consulte la sección Proveedores preconfigurados. En el caso de los proveedores no configurados, tendrá que especificar el endpoint para compartir.

#### params

Todas las propiedades `param` se transfieren como parámetros de la URL y se transmiten al endpoint para compartir.

#### aria-label

La descripción del botón para la accesibilidad. Una etiqueta recomendada es "Compartir en &lt;type&gt;".
