---
id: bento-stream-gallery
title: Bento Stream Gallery
permalink: "/pt_BR/components/bento-stream-gallery/"
short_title: Galeria de Transmissão
layout: layouts/component.njk
description: A Bento Stream Gallery serve para exibir vários conteúdos semelhantes de cada vez ao longo de um eixo horizontal.
---

# Bento Stream Gallery

{% heroexample 'bento-stream-gallery' %}

A Bento Stream Gallery serve para exibir várias partes semelhantes de conteúdo de uma vez ao longo de um eixo horizontal.

É uma especialização do Bento Base Carousel e usa [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) para ajustar dinamicamente ajustar o tamanho e o número de slides exibidos com base na largura do contêiner. Para implementar uma UX mais personalizada, consulte [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use bento-stream-gallery como um componente da web ou um componente funcional React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Você deve incluir a biblioteca CSS necessária para cada componente Bento de forma a garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#layout-and-style) .

### Importar via npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### Incluir via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
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

### Interatividade e uso da API

Os componentes do Bento são altamente interativos por meio de sua API. A API de componente `bento-stream-gallery` ser acessada incluindo a seguinte tag de script em seu documento:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Ações

##### next()

Avança o carrossel de acordo com o número de slides visíveis.

```js
api.next();
```

##### prev()

Move o carrossel para trás de acordo com o número de slides visíveis.

```js
api.prev();
```

##### goToSlide(index: number)

Move o carrossel para o slide especificado pelo argumento de `index`

Nota: o `index` será normalizado para um número maior ou igual a `0` e menor que o número de slides fornecidos.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Eventos

O componente Bento Stream Gallery permite que você se registre e responda aos seguintes eventos:

##### slideChange

Este evento é acionado quando o índice exibido pelo carrossel é alterado. O novo índice está disponível em `event.data.index`.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Layout e estilo

Cada componente Bento possui uma pequena biblioteca CSS que você precisa incluir para garantir o carregamento adequado sem [alterações na posição do conteúdo](https://web.dev/cls/). Devido ao funcionamento que depende da ordem de carregamento, você deve garantir manualmente que as folhas de estilo sejam incluídas antes de qualquer estilo personalizado.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Como alternativa, você pode incorporar os estilos de leves pré-upgrade:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Exemplo de API

Este exemplo demonstra como alternar programaticamente para o slide seguinte/anterior e pular para slides específicos.

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

#### Comportamento

##### `controls`

Ou `"always"`, `"auto"` ou `"never"`, o default é `"auto"`. Determina se e quando as setas de navegação anterior/seguinte são exibidas. Observação: Quando `outset-arrows` é `true`, as setas são mostradas `"always"`.

- `always` : as setas são sempre exibidas.
- `auto` : as setas são exibidas quando a última interação do carrossel foi via mouse e não são exibidas quando a última interação do carrossel foi via toque. Na primeira carga para dispositivos de toque, as setas são exibidas até a primeira interação.
- `never` : as setas nunca são exibidas.

##### `extra-space`

Ou `"around"` ou undefined. Determina como o espaço extra é alocado após a exibição do número calculado de slides visíveis no carrossel. Se for `"around"`, o espaço em branco será uniformemente distribuído ao redor do carrossel com `justify-content: center` ; caso contrário, o espaço é alocado à direita do carrossel para documentos LTR e à esquerda para documentos RTL.

##### `loop`

Ou `true` ou `false`, o default é `true`. Quando true, o carrossel permitirá que o usuário mova do primeiro item de volta para o último e vice-versa. Deve haver pelo menos três slides presentes para que ocorra o loop.

##### `outset-arrows`

Ou `true` ou `false`, o default é `false`. Quando true, o carrossel exibirá suas setas no início e em ambos os lados dos slides. Observe que, com as setas iniciais, o contêiner de slides terá um comprimento efetivo que será 100px menor que o espaço alocado para seu contêiner - 50px por seta em cada lado. Quando false, o carrossel exibirá as setas inseridas e sobrepostas na parte superior das bordas esquerda e direita dos slides.

##### `peek`

Um número, o default é `0`. Determina quanto de um slide adicional será mostrado (em um ou ambos os lados do slide atual) como um recurso para o usuário, indicando que o carrossel pode ser deslizado.

#### Visibilidade de slides da galeria

##### `min-visible-count`

Um número, o default é `1`. Determina o número mínimo de slides que devem ser mostrados num determinado momento. Os valores fracionários podem ser usados para tornar visível parte de um ou mais slides adicionais.

##### `max-visible-count`

Um número, o default é <code>Number.MAX_VALUE</code>. Determina o número máximo de slides que devem ser mostrados num determinado momento. Os valores fracionários podem ser usados para tornar visível parte de um ou mais slides adicionais.

##### `min-item-width`

Um número, o default é `1`. Determina a largura mínima de cada item, usado para determinar quantos itens inteiros podem ser exibidos de uma vez dentro da largura total da galeria.

##### `max-item-width`

Um número, o default é <code>Number.MAX_VALUE</code>. Determina a largura máxima de cada item, usado para determinar quantos itens inteiros podem ser exibidos de uma vez dentro da largura total da galeria.

#### Encaixe automático

##### `slide-align`

Ou `start` ou `center`. Ao iniciar o alinhamento, o início de um slide (por exemplo, a borda esquerda, quando fazendo alinhamento horizontal) é alinhado com o início de um carrossel. Ao alinhar pelo centro, o centro de um slide será alinhado com o centro de um carrossel.

##### `snap`

Ou `true` ou `false` , o default é `true`. Determina se o carrossel deve encaixar automaticamente ou não nos slides ao rolar.

### Aplicação de estilos

Você pode usar o `bento-stream-gallery` para aplicar estilos no acordeon livremente.

---

## Componente Preact/React

### Usando import via npm

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

### Interatividade e uso da API

Os componentes Bento são altamente interativos através de sua API. O componente `BentoStreamGallery` é acessível passando uma `ref`:

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

#### Ações

A API `BentoStreamGallery` permite que você execute as seguintes ações:

##### next()

Avança o carrossel em número de slides informado em `advanceCount`.

```javascript
ref.current.next();
```

##### prev()

Retrocede o carrossel em número de slides informado em `advanceCount`.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Move o carrossel para o slide especificado pelo argumento `index`. Observação: o `index` será normalizado para um número maior ou igual a `0` e menor que o número de slides fornecidos.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### Eventos

##### onSlideChange

Este evento é acionado quando o índice exibido pelo carrossel é alterado.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Layout e estilo

#### Tipo de contêiner

O componente `BentoStreamGallery` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de aplicar um tamanho ao componente e seus filhos imediatos através de um layout CSS desejado (como um definido com `width`). Eles podem ser aplicados inline:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

Ou via `className` :

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Propriedades

#### Propriedades comuns

Este componente oferece suporte às [props comuns](../../../docs/spec/bento-common-props.md) para os componentes React e Preact.

#### Comportamento

##### `controls`

Ou `"always"`, `"auto"` ou `"never"`, o default é `"auto"`. Determina se e quando as setas de navegação anterior/seguinte são exibidas. Observação: Quando `outset-arrows` é `true`, as setas são mostradas `"always"`.

- `always` : as setas são sempre exibidas.
- `auto` : as setas são exibidas quando a última interação do carrossel foi via mouse e não são exibidas quando a última interação do carrossel foi via toque. Na primeira carga para dispositivos de toque, as setas são exibidas até a primeira interação.
- `never` : as setas nunca são exibidas.

##### `extraSpace`

Ou `"around"` ou undefined. Determina como o espaço extra é alocado após a exibição do número calculado de slides visíveis no carrossel. Se for `"around"`, o espaço em branco será uniformemente distribuído ao redor do carrossel com `justify-content: center` ; caso contrário, o espaço é alocado à direita do carrossel para documentos LTR e à esquerda para documentos RTL.

##### `loop`

Ou `true` ou `false`, o default é `true`. Quando true, o carrossel permitirá que o usuário mova do primeiro item de volta para o último e vice-versa. Deve haver pelo menos três slides presentes para que ocorra o loop.

##### `outsetArrows`

Ou `true` ou `false`, o default é `false`. Quando true, o carrossel exibirá suas setas no início e em ambos os lados dos slides. Observe que, com as setas iniciais, o contêiner de slides terá um comprimento efetivo que será 100px menor que o espaço alocado para seu contêiner - 50px por seta em cada lado. Quando false, o carrossel exibirá as setas inseridas e sobrepostas na parte superior das bordas esquerda e direita dos slides.

##### `peek`

Um número, o default é `0`. Determina quanto de um slide adicional será mostrado (em um ou ambos os lados do slide atual) como um recurso para o usuário, indicando que o carrossel pode ser deslizado.

#### Visibilidade de slides da galeria

##### `minVisibleCount`

Um número, o default é `1`. Determina o número mínimo de slides que devem ser mostrados num determinado momento. Os valores fracionários podem ser usados para tornar visível parte de um ou mais slides adicionais.

##### `maxVisibleCount`

Um número, o default é <code>Number.MAX_VALUE</code>. Determina o número máximo de slides que devem ser mostrados num determinado momento. Os valores fracionários podem ser usados para tornar visível parte de um ou mais slides adicionais.

##### `minItemWidth`

Um número, o default é `1`. Determina a largura mínima de cada item, usado para determinar quantos itens inteiros podem ser exibidos de uma vez dentro da largura total da galeria.

##### `maxItemWidth`

Um número, o default é <code>Number.MAX_VALUE</code>. Determina a largura máxima de cada item, usado para determinar quantos itens inteiros podem ser exibidos de uma vez dentro da largura total da galeria.

#### Encaixe automático

##### `slideAlign`

Ou `start` ou `center`. Ao iniciar o alinhamento, o início de um slide (por exemplo, a borda esquerda, quando fazendo alinhamento horizontal) é alinhado com o início de um carrossel. Ao alinhar pelo centro, o centro de um slide será alinhado com o centro de um carrossel.

##### `snap`

Ou `true` ou `false` , o default é `true`. Determina se o carrossel deve encaixar automaticamente ou não nos slides ao rolar.
