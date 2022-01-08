---
id: bento-embedly-card
title: Cartão Bento Embedly
permalink: "/pt_BR/components/bento-embedly-card/"
short_title: Cartão Embedly
layout: layouts/component.njk
description: |-
  Fornece incorporações responsivas e compartilháveis usando <a
  href="http://docs.embed.ly/docs/cards">Cartões incorporados</a>
---

# Cartão Bento Embedly

{% heroexample 'bento-embedly-card' %}

Fornece incorporações responsivas e compartilháveis usando [cartões Embedly](http://docs.embed.ly/docs/cards)

Os cartões são a maneira mais fácil de aproveitar o Embedly. Para qualquer mídia, os cartões fornecem uma incorporação responsiva com análises incorporadas integradas.

Se você tiver um plano pago, use o `<bento-embedly-key>` ou `<BentoEmbedlyContext.Provider>` para definir sua chave de API. Você só precisa de uma chave do Bento Embedly por página para remover a marca do Embedly dos cartões. Em sua página, você pode incluir uma ou múltiplas instâncias do Bento Embedly Card.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use bento-embedly-card como um componente da web ou um componente funcional React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Você deve incluir a biblioteca CSS necessária para cada componente Bento de forma a garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#layout-and-style).

### Importar via npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### Incluir via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
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

### Layout e estilo

Cada componente Bento possui uma pequena biblioteca CSS que você precisa incluir para garantir o carregamento adequado sem [alterações na posição do conteúdo](https://web.dev/cls/). Devido ao funcionamento que depende da ordem de carregamento, você deve garantir manualmente que as folhas de estilo sejam incluídas antes de qualquer estilo personalizado.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

Como alternativa, você pode incorporar os estilos leves pré-upgrade:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo de contêiner

O componente `bento-embedly-card` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de definir um tamanho para o componente e seus filhos imediatos (slides) através de um layout CSS desejado (como um definido com `height`, `width`, `aspect-ratio` ou outras propriedades):

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### Atributos

#### `data-url`

A URL para recuperar informações de incorporação.

#### `data-card-embed`

A URL para um vídeo ou rich media. Use com incorporações estáticas como artigos, em vez de usar o conteúdo da página estática no cartão, o cartão irá incorporar o vídeo ou mídia avançada.

#### `data-card-image`

A URL para uma imagem. Especifica qual imagem usar em cartões de artigos quando o `data-url` aponta para um artigo. Nem todos os URLs de imagem são suportados, se a imagem não for carregada, tente uma imagem ou domínio diferente.

#### `data-card-controls`

Ativa ícones de compartilhamento.

- `0` : desativa ícones de compartilhamento.
- `1` : ativa ícones de compartilhamento

O default é `1`.

#### `data-card-align`

Alinha o cartão. Os valores possíveis são `left`, `center` e `right`. O valor default é `center`.

#### `data-card-recommend`

Quando as recomendações são suportadas, ele desativa as recomendações incorporadas em vídeo e rich cards. Estas são recomendações criadas pelo embedly.

- `0` : desativa as recomendações incorporadas.
- `1` : ativa as recomendações incorporadas.

O default é `1`.

#### `data-card-via` (opcional)

Especifica o conteúdo da via no cartão. Esta é uma ótima maneira de fazer a atribuição.

#### `data-card-theme` (opcional)

Permite configurar o tema `dark` que muda a cor de fundo do contêiner do cartão principal. Use `dark` para definir este tema. Para usar fundos escuros, é preciso especificar. O default é `light`, que não define uma cor de fundo para o contêiner do cartão principal.

#### title (opcional)

Define um atributo `title` para o componente a ser propagado para o elemento `<iframe>`. O valor default é `"Embedly card"`.

#### Exemplo de API

Alterar programaticamente qualquer um dos valores de atributo atualizará automaticamente o elemento. Por exemplo, alterando o `data-url`, você pode alternar para uma incorporação diferente:

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

## Componente Preact/React

### Usando import via npm

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

### Layout e estilo

#### Tipo de contêiner

O componente `BentoEmbedlyCard` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de aplicar um tamanho ao componente e seus filhos imediatos (slides) através de um layout CSS desejado (como um definido com `height`, `width`, `aspect-ratio` ou outras propriedades). Eles podem ser aplicados inline:

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

Ou via `className` :

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

### Propriedades

#### `url`

A URL para recuperar informações de incorporação.

#### `cardEmbed`

A URL para um vídeo ou rich media. Use com incorporações estáticas como artigos, em vez de usar o conteúdo da página estática no cartão, o cartão irá incorporar o vídeo ou mídia avançada.

#### `cardImage`

A URL para uma imagem. Especifica qual imagem usar em cartões de artigos quando o `data-url` aponta para um artigo. Nem todas as URLs de imagem são suportadas, se a imagem não for carregada, tente uma imagem ou domínio diferente.

#### `cardControls`

Ativa ícones de compartilhamento.

- `0` : desativa ícones de compartilhamento.
- `1` : ativa ícones de compartilhamento

O default é `1`.

#### `cardAlign`

Alinha o cartão. Os valores possíveis são `left`, `center` e `right`. O valor default é `center`.

#### `cardRecommend`

Quando as recomendações são suportadas, ele desativa as recomendações incorporadas em vídeo e rich cards. Estas são recomendações criadas por embedly.

- `0` : desativa as recomendações incorporadas.
- `1` : ativa as recomendações incorporadas.

O default é `1`.

#### `cardVia` (opcional)

Especifica o conteúdo da via no cartão. Esta é uma ótima maneira de fazer atribuição.

#### `cardTheme` (opcional)

Permite configurar o tema `dark` que muda a cor de fundo do contêiner do cartão principal. Use `dark` para definir este tema. Para usar fundos escuros, é preciso especificar. O default é `light`, que não define uma cor de fundo para o contêiner do cartão principal.

#### title (opcional)

Define um atributo `title` para o componente a ser propagado para o elemento `<iframe>`. O valor default é `"Embedly card"`.
