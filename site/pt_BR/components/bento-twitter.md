---
id: bento-twitter
title: Bento Twitter
permalink: "/pt_BR/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Incorpora conteúdo do <a href="https://twitter.com">Twitter</a> como um tweet ou um Momento.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Incorpora [conteúdo do Twitter](https://twitter.com) como um Tweet ou um Momento.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use o bento-twitter como um componente da web ou um componente funcional React:</p> <a class="bd-button" href="#web-component">↓ Componente web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Você deve incluir a biblioteca CSS necessária para cada componente Bento de forma a garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#layout-and-style) .

### Importar via npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Incluir via `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
    />
    <style>
      bento-twitter {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-twitter id="my-tweet" data-tweetid="885634330868850689"></bento-twitter>
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
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Como alternativa, você pode incorporar os estilos de leves pré-upgrade:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Tipo de contêiner

O componente `bento-twitter` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de definir um tamanho para o componente e seus filhos imediatos (slides) através de um layout CSS desejado (como um definido com `height`, `width` , `aspect-ratio` ou outras propriedades):

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Atributos

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (obrigatório)</strong></td>
    <td>O ID do Tweet ou Moment, ou o tipo de fonte se deve ser exibida uma Timeline. Numa URL como https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> é o ID do tweet. Numa URL como https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> é o ID do Moment. Tipos válidos para Timeline incluem <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> e <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (opcional)</strong></td>
    <td>Ao exibir uma timeline, outros argumentos precisam ser fornecidos além de <code>timeline-source-type</code>. Por exemplo, <code>data-timeline-screen-name="amphtml"</code> em combinação com <code>data-timeline-source-type="profile"</code> exibirá uma timeline da conta Twitter do AMP. Para detalhes sobre os argumentos disponíveis, consulte a seção "Timelines" no <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">JavaScript Factory Functions Guide do Twitter</a> .</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (opcional)</strong></td>
    <td>Você pode especificar opções para o Tweet, Moment ou aparência da Timeline definindo atributos <code>data-</code>. Por exemplo, <code>data-cards="hidden"</code> desativa os Twitter cards. Para detalhes sobre as opções disponíveis, consulte a documentação do Twitter para <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">tweets</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">moments</a> e <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">timelines</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (opcional)</strong></td>
    <td>Defina um atributo <code>title</code> para o componente. O default é <code>Twitter</code>.</td>
  </tr>
</table>

### Interatividade e uso da API

Alterar programaticamente qualquer um dos valores de atributo atualizará automaticamente o elemento. Por exemplo, alterar o id do tweet via `data-tweetid` carregará automaticamente o novo tweet:

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
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
    />
    <style>
      bento-twitter {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-twitter id="my-tweet" data-tweetid="885634330868850689">
    </bento-twitter>
    <div class="buttons" style="margin-top: 8px">
      <button id="change-tweet">Change tweet</button>
    </div>

    <script>
      (async () => {
        const twitter = document.querySelector('#my-tweet');

        // set up button actions
        document.querySelector('#change-tweet').onclick = () => {
          twitter.setAttribute('data-tweetid', '495719809695621121');
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
npm install @bentoproject/twitter
```

```javascript
import React from 'react';
import {BentoTwitter} from '@bentoproject/twitter/react';
import '@bentoproject/twitter/styles.css';

function App() {
  return <BentoTwitter tweetid="1356304203044499462"></BentoTwitter>;
}
```

### Layout e estilo

#### Tipo de contêiner

O componente `BentoTwitter` tem um tipo de tamanho de layout definido. Para garantir que o componente seja renderizado corretamente, certifique-se de aplicar um tamanho ao componente e seus filhos imediatos (slides) através de um layout CSS desejado (como um definido com `height`, `width`, `aspect-ratio` ou outras propriedades). Eles podem ser aplicados inline:

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

Ou via `className` :

```jsx
<BentoTwitter
  className="custom-styles"
  tweetid="1356304203044499462"
></BentoTwitter>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

## Propriedades

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (obrigatória)</strong></td>
    <td>O ID do Tweet ou Moment, ou o tipo de fonte se deve ser exibida uma Timeline. Numa URL como https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> é o ID do tweet. Numa URL como https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> é o ID do Moment. Tipos válidos para Timeline incluem <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> e <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (opcional)</strong></td>
    <td>Ao exibir um tweet, outros argumentos podem ser fornecidos além do <code>tweetid</code>. Por exemplo, <code>cards="hidden"</code> em combinação com <code>conversation="none"</code> exibirá um tweet sem miniaturas ou comentários adicionais.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (opcional)</strong></td>
    <td>Ao exibir um moment, outros argumentos podem ser fornecidos além do <code>moment</code>. Por exemplo, <code>limit="5"</code> exibirá um moment embutido com até cinco cards.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (opcional)</strong></td>
    <td>Ao exibir uma timeline, outros argumentos precisam ser fornecidos além de <code>timelineSourceType</code>. Por exemplo, <code>timelineScreenName="amphtml"</code> em combinação com <code>timelineSourceType="profile"</code> exibirá uma timeline da conta Twitter do AMP.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (opcional)</strong></td>
    <td>Você pode especificar opções para a aparência do Tweet, Momento ou Linha do tempo passando um objeto para a propriedade <code>options</code>. Para obter detalhes sobre as opções disponíveis, consulte os documentos do Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">sobre tweets{/ a1}, </a><a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">sobre momentos{/ a2} e </a><a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">sobre cronogramas</a>. Observação: ao passar a propriedade `options`, certifique-se de otimizar ou memoizar o objeto: <pre>const TWITTER_OPTIONS = {
  // make sure to define these once globally!
};
function MyComponent() {
  // etc
  return (
    &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt;
  );
}</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (opcional)</strong></td>
    <td>Define uma prop <code>title</code> for the component iframe. The default is <code>Twitter</code>.</td>
  </tr>
</table>
