---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/pt_BR/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Integra um clipe <a href="https://soundcloud.com">Soundcloud</a>.
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Integra um clipe do [Soundcloud.](https://soundcloud.com)

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use o bento-soundcloud como um componente da web ou um componente funcional do React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Você deve incluir a biblioteca CSS necessária para cada componente Bento de forma a garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#layout-and-style).

### Importar via npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### Incluir via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
```

### Exemplo

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

### Layout e estilo

Cada componente Bento possui uma pequena biblioteca CSS que você precisa incluir para garantir o carregamento adequado sem [alterações na posição do conteúdo](https://web.dev/cls/). Devido ao funcionamento que depende da ordem de carregamento, você deve garantir manualmente que as folhas de estilo sejam incluídas antes de qualquer estilo personalizado.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Como alternativa, você pode incorporar os estilos leves pré-upgrade:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo de contêiner

O componente `bento-soundcloud` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de definir um tamanho para o componente e seus filhos imediatos (slides) através de um layout CSS desejado (como um definido com `height`, `width`, `aspect-ratio` ou outras propriedades):

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Atributos

Alterar programaticamente um dos atributos resultará na atualização automática do player.

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

Este atributo é necessário se <code>data-playlistid</code> não estiver definido.<br> O valor para este atributo é o ID de uma faixa, um inteiro.

##### data-playlistid

Este atributo é necessário se <code>data-trackid</code> não estiver definido. O valor para este atributo é o ID de uma lista de reprodução, um número inteiro.

##### data-secret-token (opcional)

O token secreto da faixa, se for privado.

##### data-visual (opcional)

Se definido como <code>true</code>, exibe o modo "Visual" de largura total; caso contrário, ele é exibido no modo "Classic". O valor default é <code>false</code>.

##### data-color (opcional)

Este atributo é uma substituição de cor personalizada para o modo "Classic". O atributo é ignorado no modo "Visual". Especifique um valor de cor hexadecimal, sem o # inicial (por exemplo, <code>data-color="e540ff"</code>).

---

## Componente Preact/React

### Usando import via npm

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

### Layout e estilo

#### Tipo de contêiner

O componente `BentoSoundcloud` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de aplicar um tamanho ao componente e seus filhos imediatos (slides) através de um layout CSS desejado (como um definido com `height`, `width`, `aspect-ratio` ou outras propriedades). Eles podem ser aplicados inline:

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

Ou via `className` :

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

### Propriedades

##### trackId

Este atributo é necessário se <code>data-playlistid</code> não estiver definido.<br> O valor para este atributo é o ID de uma faixa, um inteiro.

##### playlistId

Este atributo é necessário se <code>data-trackid</code> não estiver definido. O valor para este atributo é o ID de uma lista de reprodução, um número inteiro.

##### secretToken (opcional)

O token secreto da faixa, se for privado.

##### visual (opcional)

Se definido como <code>true</code>, exibe o modo "Visual" de largura total; caso contrário, ele é exibido no modo "Classic". O valor default é <code>false</code>.

##### color (opcional)

Este atributo é uma substituição de cor personalizada para o modo "Classic". O atributo é ignorado no modo "Visual". Especifique um valor de cor hexadecimal, sem o # inicial (por exemplo, <code>data-color="e540ff"</code>).
