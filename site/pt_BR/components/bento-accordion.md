---
id: bento-accordion
title: Sanfona no Bento
permalink: "/pt_BR/components/bento-accordion/"
short_title: Sanfona
layout: layouts/component.njk
description: Exibe seções de conteúdo que podem ser reduzidas e expandidas.
---

# Sanfona no Bento

{% heroexample 'bento-accordion' %}

Mostra seções de conteúdo que podem ser recolhidas e expandidas. Este componente fornece uma maneira para os usuários terem uma visão geral do conteúdo e pular para qualquer seção. Seu uso eficaz reduz a necessidade de rolagem em dispositivos móveis.

- Um componente Sanfona no Bento aceita um ou mais elementos `<section>` como seus filhos diretos.
- Cada `<section>` deve conter exatamente dois filhos diretos.
- O primeiro elemento filho em um bloco `<section>` é o título dessa seção da Sanfona no Bento. Deve ser um elemento de título, como `<h1>-<h6>` ou `<header>`.
- O segundo elemento filho em um bloco `<section>` é o conteúdo expansível/recolhível.
    - Pode ser qualquer tag permitida em [AMP HTML](https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-html-format.md).
- Um clique ou toque num título `<section>` expande ou recolhe a seção.
- Uma Sanfona no Bento com um `id` definido preserva o estado colapsado ou expandido de cada seção enquanto o usuário permanecer em seu domínio.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use bento-accordion como um componente da web ou um componente funcional React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Você deve incluir a biblioteca CSS necessária para cada componente Bento de forma a garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#layout-and-style) .

### Importar via npm

```bash
npm install @bentoproject/accordion
```

```javascript
import {defineElement as defineBentoAccordion} from '@bentoproject/accordion';
defineBentoAccordion();
```

### Incluir via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-accordion-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-accordion-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-accordion-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-accordion-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-accordion-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-accordion-1.0.css"
    />
  </head>
  <body>
    <bento-accordion id="my-accordion">
      <section>
        <h2>Section 1</h2>
        <div>Content in section 1.</div>
      </section>
      <section>
        <h2>Section 2</h2>
        <div>Content in section 2.</div>
      </section>
       <!-- Expanded on page load due to attribute: -->
      <section expanded>
        <h2>Section 3</h2>
        <div>Content in section 3.</div>
      </section>
    </bento-accordion>
  </body>
</html>
```

{% endexample %}

### Interatividade e uso da API

Os componentes do Bento são altamente interativos através de sua API. A API de componente `bento-accordion` ser acessada incluindo a seguinte tag de script em seu documento:

```javascript
await customElements.whenDefined('bento-accordion');
const api = await accordion.getApi();
```

#### Exemplo de API

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
      src="https://cdn.ampproject.org/v0/bento-accordion-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-accordion-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-accordion-1.0.css"
    />
  </head>
  <body>
    <bento-accordion id="my-accordion">
      <section>
        <h2>Section 1</h2>
        <div>Content in section 1.</div>
      </section>
      <section>
        <h2>Section 2</h2>
        <div>Content in section 2.</div>
      </section>
       <!-- Expanded on page load due to attribute: -->
      <section expanded>
        <h2>Section 3</h2>
        <div>Content in section 3.</div>
      </section>
    </bento-accordion>
    <script>
      (async () => {
        const accordion = document.querySelector('#my-accordion');
        await customElements.whenDefined('bento-accordion');
        const api = await accordion.getApi();

        // programatically expand all sections
        api.expand();
        // programatically collapse all sections
        api.collapse();
      })();
    </script>
  </body>
</html>
```

{% endexample %}

#### Ações

##### toggle()

A ação `toggle` alterna os estados `expanded` e `collapsed` das seções do `bento-accordion`. Quando chamada sem argumentos, ela alterna todas as seções do acordeon. Para selecionar uma seção específica, adicione o argumento `section` e use seu `id` correspondente como valor.

```html
<bento-accordion id="myAccordion">
  <section id="section1">
    <h2>Section 1</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-accordion>
<button id="button1">Toggle All Sections</button>
<button id="button2">Toggle Section 1</button>
<script>
  (async () => {
    const accordion = document.querySelector('#myAccordion');
    await customElements.whenDefined('bento-accordion');
    const api = await accordion.getApi();

    // set up button actions
    document.querySelector('#button1').onclick = () => {
      api.toggle();
    };
    document.querySelector('#button2').onclick = () => {
      api.toggle('section1');
    };
  })();
</script>
```

##### expand()

A ação `expand` expande as seções do `bento-accordion`. Se uma seção já estiver expandida, ela continua expandida. Quando chamada sem argumentos, ela expande todas as seções do acordeon. Para selecionar uma seção específica, adicione o argumento `section` e use seu `id` correspondente como valor.

```html
<bento-accordion id="myAccordion">
  <section id="section1">
    <h2>Section 1</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-accordion>
<button id="button1">Expand All Sections</button>
<button id="button2">Expand Section 1</button>
<script>
  (async () => {
    const accordion = document.querySelector('#myAccordion');
    await customElements.whenDefined('bento-accordion');
    const api = await accordion.getApi();

    // set up button actions
    document.querySelector('#button1').onclick = () => {
      api.expand();
    };
    document.querySelector('#button2').onclick = () => {
      api.expand('section1');
    };
  })();
</script>
```

##### collapse()

A ação `collapse` colapsa as seções do `bento-accordion`. Se uma seção já estiver colapsada, ela permanecerá colapsada. Quando chamada sem argumentos, ela colapsa todas as seções do acordeon. Para especificar uma seção, adicione o argumento `section` e use seu `id` correspondente como valor.

```html
<bento-accordion id="myAccordion">
  <section id="section1">
    <h2>Section 1</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Bunch of awesome content</div>
  </section>
</bento-accordion>
<button id="button1">Collapse All Sections</button>
<button id="button2">Collapse Section 1</button>
<script>
  (async () => {
    const accordion = document.querySelector('#myAccordion');
    await customElements.whenDefined('bento-accordion');
    const api = await accordion.getApi();

    // set up button actions
    document.querySelector('#button1').onclick = () => {
      api.collapse();
    };
    document.querySelector('#button2').onclick = () => {
      api.collapse('section1');
    };
  })();
</script>
```

#### Eventos

A API `bento-accordion` permite que você se registre e responda aos seguintes eventos:

##### expand

Este evento é disparado quando uma seção do acordeon é expandida e despachada da seção expandida.

Veja um exemplo abaixo.

##### collapse

Este evento é acionado quando uma seção do acordeon é colapsada e despachada da seção colapsada.

No exemplo abaixo, a `section 1` escuta o evento `expand` e expande a `section 2` quando ela é expandida. A `section 2` escuta o evento `collapse` e colapsa a `section 1` quando ela é colapsada.

Veja um exemplo abaixo.

##### Exemplo de eventos

```html
<bento-accordion id="eventsAccordion" animate>
  <section id="section1">
    <h2>Section 1</h2>
    <div>Puppies are cute.</div>
  </section>
  <section id="section2">
    <h2>Section 2</h2>
    <div>Kittens are furry.</div>
  </section>
</bento-accordion>

<script>
  (async () => {
    const accordion = document.querySelector('#eventsAccordion');
    await customElements.whenDefined('bento-accordion');
    const api = await accordion.getApi();

    // when section 1 expands, section 2 also expands
    // when section 2 collapses, section 1 also collapses
    const section1 = document.querySelector('#section1');
    const section2 = document.querySelector('#section2');
    section1.addEventListener('expand', () => {
      api.expand('section2');
    });
    section2.addEventListener('collapse', () => {
      api.collapse('section1');
    });
  })();
</script>
```

### Layout e estilo

Cada componente Bento possui uma pequena biblioteca CSS que você precisa incluir para garantir o carregamento adequado sem [alterações na posição do conteúdo](https://web.dev/cls/). Devido ao funcionamento que depende da ordem de carregamento, você deve garantir manualmente que as folhas de estilo sejam incluídas antes de qualquer estilo personalizado.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-accordion-1.0.css"
/>
```

Como alternativa, você pode incorporar os estilos de leves pré-upgrade:

```html
<style>
  bento-accordion {
    display: block;
    contain: layout;
  }

  bento-accordion,
  bento-accordion > section,
  bento-accordion > section > :first-child {
    margin: 0;
  }

  bento-accordion > section > * {
    display: block;
    float: none;
    overflow: hidden; /* clearfix */
    position: relative;
  }

  @media (min-width: 1px) {
    :where(bento-accordion > section) > :first-child {
      cursor: pointer;
      background-color: #efefef;
      padding-right: 20px;
      border: 1px solid #dfdfdf;
    }
  }

  .i-amphtml-accordion-header {
    cursor: pointer;
    background-color: #efefef;
    padding-right: 20px;
    border: 1px solid #dfdfdf;
  }

  bento-accordion
    > section:not([expanded])
    > :last-child:not(.i-amphtml-animating),
  bento-accordion
    > section:not([expanded])
    > :last-child:not(.i-amphtml-animating)
    * {
    display: none !important;
  }
</style>
```

### Atributos

#### animate

Inclua o atributo `animate` no `<bento-accordion>` para acrescentar uma animação "roll down" quando o conteúdo for expandido e animação "roll up" quando colapsado.

Este atributo pode ser configurado com base numa [consulta de mídia (media query)](./../../../docs/spec/amp-html-responsive-attributes.md).

```html
<bento-accordion animate>
  <section>
    <h2>Section 1</h2>
    <div>Content in section 1.</div>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Content in section 2.</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <div>Content in section 2.</div>
  </section>
</bento-accordion>
```

#### expanded

Aplique o `expanded` a uma `<section>` aninhada para expandir essa seção quando a página carregar.

```html
<bento-accordion>
  <section id="section1">
    <h2>Section 1</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section id="section2">
    <h2>Section 2</h2>
    <div>Bunch of awesome content</div>
  </section>
  <section id="section3" expanded>
    <h2>Section 3</h2>
    <div>Bunch of awesome expanded content</div>
  </section>
</bento-accordion>
```

#### expand-single-section

Permite que apenas uma seção se expanda por vez, aplicando o `expand-single-section` ao elemento `<bento-accordion>`. Isto significa que se um usuário tocar numa `<section>` colapsada, ela irá expandir e colapsar outras `<section>` expandidas.

```html
<bento-accordion expand-single-section>
  <section>
    <h2>Section 1</h2>
    <div>Content in section 1.</div>
  </section>
  <section>
    <h2>Section 2</h2>
    <div>Content in section 2.</div>
  </section>
  <section>
    <h2>Section 3</h2>
    <img
      src="https://source.unsplash.com/random/320x256"
      width="320"
      height="256"
    />
  </section>
</bento-accordion>
```

### Aplicação de estilos

Você pode usar o `bento-accordion` para aplicar estilos livremente na sanfona.

Tenha em mente os seguintes pontos ao estilizar um amp-accordion:

- Elementos `bento-accordion` são sempre `display: block` .
- Um `float` não pode ser usada para estilizar uma `<section>`, título, nem elementos de conteúdo.
- Uma seção expandida aplica o atributo `expanded` ao elemento `<section>`
- O elemento de conteúdo é reiniciado com `overflow: hidden` e, portanto, não pode ter barras de rolagem.
- As margens dos elementos `<bento-accordion>`, `<section>`, título e conteúdo são definidas com o valor `0`, mas podem ser substituídas em estilos personalizados.
- Tanto os elementos de cabeçalho como os de conteúdo são `position: relative`.

---

## Componente Preact/React

### Importar via npm

```bash
npm install @bentoproject/accordion
```

### Exemplo

{% example %}

```jsx
import React from 'react';
import {
  BentoAccordion,
  BentoAccordionSection,
  BentoAccordionHeader,
  BentoAccordionContent
} from '@bentoproject/accordion/react';
import '@bentoproject/accordion/styles.css';

function App() {
  return (
    <BentoAccordion>
      <BentoAccordionSection key={1}>
        <BentoAccordionHeader>
          <h1>Section 1</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 1</BentoAccordionContent>
      </BentoAccordionSection>

      <BentoAccordionSection key={2}>
        <BentoAccordionHeader>
          <h1>Section 2</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 2</BentoAccordionContent>
      </BentoAccordionSection>

      <BentoAccordionSection key={3}>
        <BentoAccordionHeader>
          <h1>Section 3</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 3</BentoAccordionContent>
      </BentoAccordionSection>
    </BentoAccordion>
  );
}
```

{% endexample %}

### Interatividade e uso da API

Os componentes Bento são altamente interativos através de sua API. O componente `BentoAccordion` é acessível passando uma `ref`:

```jsx
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoAccordion ref={ref}>
      <BentoAccordionSection id="section1" key={1}>
        <BentoAccordionHeader>
          <h1>Section 1</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 1</BentoAccordionContent>
      </BentoAccordionSection>

      <BentoAccordionSection id="section2" key={2}>
        <BentoAccordionHeader>
          <h1>Section 2</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 2</BentoAccordionContent>
      </BentoAccordionSection>

      <BentoAccordionSection id="section3" key={3}>
        <BentoAccordionHeader>
          <h1>Section 3</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 3</BentoAccordionContent>
      </BentoAccordionSection>
    </BentoAccordion>
  );
}
```

#### Ações

A API `BentoAccordion` permite que você execute as seguintes ações:

##### toggle()

A ação `toggle` alterna os estados `expanded` e `collapsed` das seções do `bento-accordion`. Quando chamada sem argumentos, ela alterna todas as seções do acordeon. Para selecionar uma seção específica, adicione o argumento `section` e use seu `id` correspondente como valor.

```javascript
ref.current.toggle();
ref.current.toggle('section1');
```

##### expand()

A ação `expand` expande as seções do `bento-accordion`. Se uma seção já estiver expandida, ela continua expandida. Quando chamada sem argumentos, ela expande todas as seções do acordeon. Para selecionar uma seção específica, adicione o argumento `section` e use seu `id` correspondente como valor.

```javascript
ref.current.expand();
ref.current.expand('section1');
```

##### collapse()

A ação `collapse` colapsa as seções do `bento-accordion`. Se uma seção já estiver colapsada, ela permanecerá colapsada. Quando chamada sem argumentos, ela colapsa todas as seções do acordeon. Para especificar uma seção, adicione o argumento `section` e use seu `id` correspondente como valor.

```javascript
ref.current.collapse();
ref.current.collapse('section1');
```

#### Eventos

A API Bento Accordion permite que você responda aos seguintes eventos:

##### onExpandStateChange

Este evento é acionado quando uma seção do acordeon é expandida ou colapsada e despachada da seção expandida.

Veja o [exemplo](#events-example) abaixo, por exemplo.

##### onCollapse

Este evento é acionado quando uma seção do acordeon é colapsada e despachada da seção colapsada.

No exemplo abaixo, a `section 1` escuta o evento `expand` e expande a `section 2` quando ela é expandida. A `section 2` escuta o evento `collapse` e recolhe a `section 1` quando ela é recolhida.

Veja o [exemplo](#events-example) abaixo, por exemplo.

##### Exemplo de eventos

{% example %}

```jsx
import React, {createRef} from 'react';
import {
  BentoAccordion,
  BentoAccordionSection,
  BentoAccordionHeader,
  BentoAccordionContent
} from '@bentoproject/accordion/react';
import '@bentoproject/accordion/styles.css';


function App() {
  const ref = createRef();
  return (
    <BentoAccordion ref={ref}>
      <BentoAccordionSection
        id="section1"
        key={1}
        onExpandStateChange={(expanded) => {
          alert(expanded ?  'section1 expanded' : 'section1 collapsed');
        }}
      >
        <BentoAccordionHeader>
          <h1>Section 1</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 1</BentoAccordionContent>
      </BentoAccordionSection>

      <BentoAccordionSection
        id="section2"
        key={2}
        onExpandStateChange={(expanded) => {
          alert(expanded ?  'section2 expanded' : 'section2 collapsed');
        }}
      >
        <BentoAccordionHeader>
          <h1>Section 2</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 2</BentoAccordionContent>
      </BentoAccordionSection>

      <BentoAccordionSection
        id="section3"
        key={3}
        onExpandStateChange={(expanded) => {
          alert(expanded ?  'section3 expanded' : 'section3 collapsed');
        }}
      >
        <BentoAccordionHeader>
          <h1>Section 3</h1>
        </BentoAccordionHeader>
        <BentoAccordionContent>Content 3</BentoAccordionContent>
      </BentoAccordionSection>
    </BentoAccordion>
  )
}
```

{% endexample %}

### Layout e estilo

#### Tipo de contêiner

O componente `BentoAccordion` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de aplicar um tamanho ao componente e seus filhos imediatos através de um layout CSS desejado (como um definido com `height`, `width`, `aspect-ratio` ou outras propriedades). Eles podem ser aplicados inline:

```jsx
<BentoAccordion style={% raw %}{{width: 300, height: 100}}{% endraw %}>...</BentoAccordion>
```

Ou via `className` :

```jsx
<BentoAccordion className="custom-styles">...</BentoAccordion>
```

```css
.custom-styles {
  background-color: red;
}
```

### Propriedades

#### BentoAccordion

##### animate

Se verdadeiro, usa animação "roll-down" / "roll-up" durante a expansão e o recolhimento de cada seção.

Default: `false`

##### expandSingleSection

Se verdadeiro, a expansão de 1 seção irá recolher automaticamente todas as outras seções.

Default: `false`

#### BentoAccordionSection

##### animate

Se verdadeiro, então usa animação "roll-down" / "roll-up" durante a expansão e recolhimento da seção.

Default: `false`

##### expanded

Se verdadeiro, expande a seção.

Default: `false`

##### onExpandStateChange

```typescript
(expanded: boolean): void
```

Callback para escutar mudanças de estado de expansão. Recebe uma flag booleana como parâmetro indicando se a seção acabou de ser expandida (`false` indica que foi colapsada)

#### BentoAccordionHeader

#### Propriedades comuns

Este componente oferece suporte às [props comuns](../../../docs/spec/bento-common-props.md) para os componentes React e Preact.

O BentoAccordionHeader ainda não suporta props personalizados

#### BentoAccordionContent

#### Propriedades comuns

Este componente oferece suporte às [props comuns](../../../docs/spec/bento-common-props.md) para os componentes React e Preact.

O BentoAccordionContent ainda não suporta props personalizadas
