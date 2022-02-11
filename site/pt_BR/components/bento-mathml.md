---
id: bento-mathml
title: Bento MathML
permalink: "/pt_BR/components/bento-mathml/"
short_title: MathML
layout: layouts/component.njk
description: Renderiza uma fórmula MathML num iframe.
---

# Bento MathML

{% heroexample 'bento-mathml' %}

Renderiza uma fórmula MathML num iframe.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use bento-mathml como um componente da web ou um componente funcional React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Você deve incluir a biblioteca CSS necessária para cada componente Bento de forma a garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#layout-and-style) .

### Importar via npm

```bash
npm install @bentoproject/mathml
```

```javascript
import {defineElement as defineBentoMathml} from '@bentoproject/mathml';
defineBentoMathml();
```

### Incluir via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
    />
  </head>
  <body>
    <h2>The Quadratic Formula</h2>
    <bento-mathml
      style="height: 40px;"
      data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
    ></bento-mathml>

    <h2>Inline formula</h2>
    <p>
      This is an example of a formula,
      <bento-mathml
        style="height: 40px; width: 147px"
        inline
        data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      ></bento-mathml>
      placed inline in the middle of a block of text.
    </p>
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
  href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
/>
```

Como alternativa, você pode incorporar os estilos de leves pré-upgrade:

```html
<style>
  bento-mathml {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

### Atributos

#### `data-formula` (obrigatório)

Especifica a fórmula a ser renderizada.

#### `inline` (opcional)

Se especificada, o componente renderiza de forma inline (`inline-block` em CSS).

#### title (opcional)

Define um atributo `title` para o componente a ser propagado para o elemento `<iframe>`. O valor default é `"MathML formula"`.

### Aplicação de estilos

Você pode usar o `bento-mathml` para aplicar estilos no acordeon livremente.

---

## Componente Preact/React

### Importar via npm

```bash
npm install @bentoproject/mathml
```

```javascript
import React from 'react';
import {BentoMathml} from '@bentoproject/mathml/react';
import '@bentoproject/mathml/styles.css';

function App() {
  return (
    <>
      <h2>The Quadratic Formula</h2>
      <BentoMathml
        style={% raw %}{{height: 40}}{% endraw %}
        formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      ></BentoMathml>

      <h2>Inline formula</h2>
      <p>
        This is an example of a formula,{' '}
        <BentoMathml
          style={% raw %}{{height: 40, width: 147}}{% endraw %}
          inline
          formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
        ></BentoMathml>
        , placed inline in the middle of a block of text. This shows how the formula will fit inside a block of text and can be styled with CSS.
      </p>
    </>
  );
}
```

### Layout e estilo

#### Tipo de contêiner

O componente `BentoMathml` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de aplicar um tamanho ao componente e seus filhos imediatos através de um layout CSS desejado (como um definido com `height`, `width`, `aspect-ratio` ou outras propriedades). Eles podem ser aplicados inline:

```jsx
<BentoMathml style={% raw %}{{width: 300, height: 100}}{% endraw %}>...</BentoMathml>
```

Ou via `className` :

```jsx
<BentoMathml className="custom-styles">...</BentoMathml>
```

```css
.custom-styles {
  height: 40px;
  width: 147px;
}
```

### Propriedades

#### `formula` (obrigatória)

Especifica a fórmula a ser renderizada.

#### `inline` (opcional)

Se especificada, o componente renderiza de forma inline (`inline-block` em CSS).

#### title (opcional)

Define um atributo `title` para o componente a ser propagado para o elemento `<iframe>`. O valor default é `"MathML formula"`.
