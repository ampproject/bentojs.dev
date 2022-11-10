---
id: bento-sidebar
title: Barra lateral no Bento
permalink: "/pt_BR/components/bento-sidebar/"
short_title: Barra lateral
layout: layouts/component.njk
description: |-
  Oferece uma maneira de exibir metaconteúdo para acesso temporário, como
  navegação, links, botões, menus.
---

# Barra lateral no Bento

{% heroexample 'bento-sidebar' %}

Oferece uma maneira de exibir meta conteúdo destinado a acesso temporário, como navegação, links, botões, menus. A barra lateral pode ser revelada por um toque de botão, enquanto o conteúdo principal permanece visualmente por baixo.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use bento-sidebar como um componente da web ou um componente funcional React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Você deve incluir a biblioteca CSS necessária para cada componente Bento de forma a garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#layout-and-style) .

### Importar via npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### Incluir via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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

### Interatividade e uso da API

Os componentes do Bento são altamente interativos através de sua API. A API de componente `bento-sidebar` ser acessada incluindo a seguinte tag de script em seu documento:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Ações

A API `bento-sidebar` permite que você execute as seguintes ações:

##### open()

Abre a barra lateral.

```javascript
api.open();
```

##### close()

Fecha a barra lateral.

```javascript
api.close();
```

##### toggle()

Alterna o estado aberto da barra lateral.

```javascript
api.toggle(0);
```

### Layout e estilo

Cada componente Bento possui uma pequena biblioteca CSS que você precisa incluir para garantir o carregamento adequado sem [alterações na posição do conteúdo](https://web.dev/cls/). Pelo fato de o funcionamento depender da ordem de carregamento, você deve garantir manualmente que as folhas de estilo sejam incluídas antes de qualquer estilo personalizado.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Como alternativa, você pode incorporar os estilos leves pré-upgrade:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Estilos personalizados

O componente `bento-sidebar` pode ser estilizado com CSS padrão.

- A `width` do `bento-sidebar` do bento pode ser definida para ajustar a largura a partir do valor predefinido de 45px.
- A altura da `bento-sidebar` pode ser definida para ajustar a altura da barra lateral, se necessário. Se a altura exceder 100vw, a barra lateral terá uma barra de rolagem vertical. A altura predefinida da barra lateral é 100vw e pode ser substituída no CSS para deixá-la mais curta.
- O estado atual da barra lateral é exposto por meio do atributo `open` que é definido na tag `bento-sidebar` quando a barra lateral é aberta na página.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### Considerações sobre a UX

Ao utilizar o `<bento-sidebar>`, lembre-se de que seus usuários frequentemente verão sua página no celular, que poderá exibir um cabeçalho de posição fixa. Além disso, os navegadores geralmente exibem seu próprio cabeçalho fixo no topo da página. Adicionar outro elemento de posição fixa na parte superior da tela ocuparia uma grande quantidade de espaço da tela do celular com conteúdo que não oferece ao usuário nenhuma informação nova.

Por esse motivo, recomendamos que as opções para abrir a barra lateral não sejam colocadas num cabeçalho fixo de largura cheia.

- A barra lateral só pode aparecer no lado esquerdo ou direito de uma página.
- A altura máxima (max-height) da barra lateral é 100vh; se a altura exceder 100vh, uma barra de rolagem vertical aparecerá. A altura padrão é definida como 100vh em CSS e pode ser substituída em CSS.
- A largura da barra lateral pode ser definida e ajustada usando CSS.
- <em>Recomenda-se</em> que o elemento <code>&lt;bento-sidebar&gt;</code> seja um filho direto de `<body>` para preservar uma ordem DOM lógica para acessibilidade, bem como para evitar a alteração de seu comportamento por um elemento de contêiner. Observe que ter um ancestral de `bento-sidebar` com um `z-index` definido pode fazer com que a barra lateral apareça abaixo de outros elementos (como cabeçalhos), quebrando sua funcionalidade.

### Atributos

#### side

Indica de que lado da página a barra lateral deve ser aberta, à esquerda (`left`) ou à direita (`right`). Se um lado (`side`) não for especificado, o `side` será herdado do atributo `dir` da tag `body` (`ltr` =&gt; `left`, `rtl` =&gt; `right`); se nenhum `dir` existir, o valor default de `side` será `left`.

#### open

Este atributo estará presente quando a barra lateral estiver aberta.

---

## Componente Preact/React

### Importar via npm

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

### Interatividade e uso da API

Os componentes Bento são altamente interativos através de sua API. O componente `BentoSidebar` é acessível passando uma `ref`:

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

#### Ações

A API `BentoSidebar` permite que você execute as seguintes ações:

##### open()

Abre a barra lateral.

```javascript
ref.current.open();
```

##### close()

Fecha a barra lateral.

```javascript
ref.current.close();
```

##### toggle()

Alterna o estado aberto da barra lateral.

```javascript
ref.current.toggle(0);
```

### Layout e estilo

O componente `BentoSidebar` pode ser estilizado com CSS padrão.

- A `width` do `bento-sidebar` do bento pode ser definida para ajustar a largura a partir do valor predefinido de 45px.
- A height da `bento-sidebar` do bento pode ser definida para ajustar a altura da barra lateral, se necessário. Se a altura exceder 100vw, a barra lateral terá uma barra de rolagem vertical. A altura predefinida da barra lateral é 100vw e pode ser substituída em CSS para deixá-la mais curta.

Para garantir que o componente seja renderizado da forma que você deseja, certifique-se de aplicar uma dimensão ao componente. Elas podem ser aplicadas inline:

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

Ou via `className` :

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

### Considerações de UX

Ao utilizar o `<BentoSidebar>`, lembre-se de que seus usuários frequentemente verão sua página no celular, que poderá exibir um cabeçalho de posição fixa. Além disso, os navegadores geralmente exibem seu próprio cabeçalho fixo no topo da página. Adicionar outro elemento de posição fixa na parte superior da tela ocuparia uma grande quantidade de espaço da tela do celular com conteúdo que não fornece ao usuário nenhuma informação nova.

Por esse motivo, recomendamos que as opções para abrir a barra lateral não sejam colocadas num cabeçalho fixo de largura total.

- A barra lateral só pode aparecer no lado esquerdo ou direito de uma página.
- A altura máxima (max-height) da barra lateral é 100vh; se a altura exceder 100vh, uma barra de rolagem vertical aparecerá. A altura default é definida como 100vh em CSS e pode ser substituída em CSS.
- A largura da barra lateral pode ser definida e ajustada usando CSS.
- <em>Recomenda-se</em> que o elemento <code>&lt;BentoSidebar&gt;</code> seja um filho direto de `<body>` para preservar uma ordem DOM lógica para acessibilidade, bem como para evitar a alteração de seu comportamento por um elemento de contêiner. Observe que ter um ancestral de `BentoSidebar` com um `z-index` definido pode fazer com que a barra lateral apareça abaixo de outros elementos (como cabeçalhos), quebrando sua funcionalidade.

### Propriedades

#### side

Indica de que lado da página a barra lateral deve ser aberta, à esquerda (`left`) ou à direita (`right`). Se um lado (`side`) não for especificado, o `side` será herdado do atributo `dir` da tag `body` (`ltr` =&gt; `left`, `rtl` =&gt; `right`); se nenhum `dir` existir, o valor default de `side` será `left`.
