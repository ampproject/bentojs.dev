---
id: bento-twitter
title: Bento Twitter
permalink: "/ru/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Компонент для встраивание контента с <a href="https://twitter.com">Twitter</a>, такого как твиты и моменты.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Компонент для встраивание контента с [Twitter](https://twitter.com), такого как твиты и моменты.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Используйте bento-twitter в виде веб-компонента или функционального компонента React:</p> <a class="bd-button" href="#web-component">↓ Веб-компонент</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Веб-компонент

Чтобы гарантировать правильную загрузку, вы должны подключить необходимые CSS-библиотеки всех компонентов Bento (это нужно сделать перед добавлением пользовательских стилей). Как вариант, вы можете использовать встраиваемые облегченные стили от предыдущей версии компонента. См. [Макет и стиль](#layout-and-style).

### Импорт через npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Подключение через `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
```

### Пример

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

### Макет и стиль

У каждого компонента Bento есть небольшая библиотека CSS, которую следует подключать, чтобы гарантировать правильную загрузку без [сдвигов содержимого](https://web.dev/cls/). Поскольку приоритетность CSS определяется порядком, следует вручную убедиться, что таблицы стилей подключаются раньше каких-либо пользовательских стилей.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Alternatively, you may also make the light-weight pre-upgrade styles available inline:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Тип контейнера

Компонент `bento-twitter` использует тип макета с указанием размера. Чтобы обеспечить правильный рендеринг компонента, необходимо указать размер самого компонента и его непосредственных дочерних элементов (слайдов) при помощи свойств CSS (например, `height`, `width`, `aspect-ratio` и т. д.):

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Атрибуты

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (обязательный)</strong></td>
    <td>ID твита/момента или тип источника, если требуется отобразить ленту. Например, в ссылке https://twitter.com/joemccann/status/640300967154597888 идентификатором твита является <code>640300967154597888</code>. В ссылке https://twitter.com/i/moments/1009149991452135424 идентификатором момента является <code>1009149991452135424</code>. Допустимые типы источников ленты — <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> и <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (необязательный)</strong></td>
    <td>При отображении ленты помимо <code>timeline-source-type</code> необходимо указать дополнительные аргументы. Например, <code>data-timeline-screen-name="amphtml"</code> в совокупности с <code>data-timeline-source-type="profile"</code> позволяет отобразить ленту страницы AMP в Twitter. Подробнее о доступных аргументах см. в разделе «Timelines» <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">руководства Twitter по фабричным JavaScript-функциям</a>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (необязательные)</strong></td>
    <td>Атрибуты <code>data-</code> позволяют настраивать вид отображаемого твита, момента или ленты. Например, <code>data-cards="hidden"</code> отключает карточки Twitter. Подробнее о доступных параметрах см. в документации Twitter по <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">твитам</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">моментам</a> и <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">лентам</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (необязательный)</strong></td>
    <td>Определяет атрибут <code>title</code> компонента. По умолчанию — <code>Twitter</code>.</td>
  </tr>
</table>

### Интерактивность и использование API

Изменение значений атрибутов при помощи программного кода автоматически обновляет элемент. Например, изменяя атрибут `data-tweetid`, можно загружать новые твиты:

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

## Компонент для Preact/React

### Импорт через npm

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

### Макет и стиль

#### Тип контейнера

Компонент `BentoTwitter` использует тип макета с указанием размера. Чтобы обеспечить правильный рендеринг компонента, необходимо указать размер самого компонента и его непосредственных дочерних элементов (слайдов) при помощи свойств CSS (например, `height`, `width`, `aspect-ratio` и т. д.). Их можно указывать как непосредственно в коде:

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

...так и при помощи `className`:

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

## Свойства

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (обязательное)</strong></td>
    <td>ID твита/момента или тип источника, если требуется отобразить ленту. Например, в ссылке https://twitter.com/joemccann/status/640300967154597888 идентификатором твита является <code>640300967154597888</code>. В ссылке https://twitter.com/i/moments/1009149991452135424 идентификатором момента является <code>1009149991452135424</code>. Допустимые типы источников ленты — <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> и <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (необязательные)</strong></td>
    <td>При отображении твита помимо <code>tweetid</code> можно указать дополнительные аргументы. Например, <code>cards="hidden"</code> в совокупности с <code>conversation="none"</code> позволяет отобразить твит без дополнительных миниатюр и комментариев.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (необязательное)</strong></td>
    <td>При отображении момента помимо <code>moment</code> можно указать дополнительные аргументы. Например, <code>limit="5"</code> позволяет отобразить встроенный момент, ограничив количество карточек до 5.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (необязательные)</strong></td>
    <td>При отображении ленты помимо <code>timelineSourceType</code> можно указать дополнительные аргументы. Например, <code>timelineScreenName="amphtml"</code> в совокупности с <code>timelineSourceType="profile"</code> позволяет отобразить ленту страницы AMP в Twitter.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (необязательное)</strong></td>
    <td>Передав объект в свойство <code>options</code>, можно настроить отображение твита, момента или ленты. Подробнее о доступных параметрах см. в документации Twitter по <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">твитам</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">моментам</a> и <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">лентам</a>. Примечание: передавая свойство `options`, не забывайте оптимизировать или мемоизировать объект: <pre>const TWITTER_OPTIONS = {
  // определяйте эти параметры один раз на глобальном уровне!
};
function MyComponent() {
  // и т. д.
  return (
    &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt;
  );
}</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (необязательное)</strong></td>
    <td>Определяет <code>title</code> элемента iframe, содержащего компонент. По умолчанию — <code>Twitter</code>.</td>
  </tr>
</table>
