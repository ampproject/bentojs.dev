---
id: bento-embedly-card
title: Bento Embedly Card
permalink: "/ru/components/bento-embedly-card/"
short_title: Embedly Card
layout: layouts/component.njk
description: Компонент для встраивания контента в виде адаптивных <a href="http://docs.embed.ly/docs/cards">карточек Embedly</a> с кнопками «Поделиться».
---

# Bento Embedly Card

{% heroexample 'bento-embedly-card' %}

Компонент для встраивания контента в виде адаптивных [карточек Embedly](http://docs.embed.ly/docs/cards) с кнопками «Поделиться».

Самый простой способ воспользоваться Embedly — это карточки. Для любого типа медиаконтента доступны встраиваемые карточки с интегрированной аналитикой.

Если у вас есть платная подписка, используйте компонент `<bento-embedly-key>` или `<BentoEmbedlyContext.Provider>`, чтобы указать ключ для доступа к API. Чтобы отключить отображение логотипа Embedly на карточках, достаточно добавить ключ Bento Embedly один раз в пределах страницы. На одной странице может быть как один, так и несколько элементов Bento Embedly Card.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Используйте bento-embedly-card в виде веб-компонента или функционального компонента React:</p> <a class="bd-button" href="#web-component">↓ Веб-компонент</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Веб-компонент

Чтобы гарантировать правильную загрузку, вы должны подключить необходимые CSS-библиотеки всех компонентов Bento (это нужно сделать перед добавлением пользовательских стилей). Как вариант, вы можете использовать встраиваемые облегченные стили от предыдущей версии компонента. См. [Макет и стиль](#layout-and-style).

### Импорт через npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### Подключение через `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
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

### Макет и стиль

У каждого компонента Bento есть небольшая библиотека CSS, которую следует подключать, чтобы гарантировать правильную загрузку без [сдвигов содержимого](https://web.dev/cls/). Поскольку приоритетность CSS определяется порядком, следует вручную убедиться, что таблицы стилей подключаются раньше каких-либо пользовательских стилей.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

Alternatively, you may also make the light-weight pre-upgrade styles available inline:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Тип контейнера

Компонент `bento-embedly-card` использует тип макета с указанием размера. Чтобы обеспечить правильный рендеринг компонента, необходимо указать размер самого компонента и его непосредственных дочерних элементов (слайдов) при помощи свойств CSS (например, `height`, `width`, `aspect-ratio` и т. д.):

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### Атрибуты

#### `data-url`

URL-адрес контента для встраивания.

#### `data-card-embed`

URL-адрес видео или мультимедийного контента. Используйте при вставке ссылок на статический контент, такой как статьи, чтобы вместо него на карточке отображалось видео или другой мультимедийный контент.

#### `data-card-image`

URL-адрес изображения. Позволяет задать изображение для карточки, если параметр `data-url` указывает на статью. Поддерживаются не все URL-адреса; если изображение не загружается, попробуйте указать другое изображение или домен.

#### `data-card-controls`

Управляет состоянием кнопок «Поделиться».

- `0`: отключает кнопки «Поделиться».
- `1`: включает кнопки «Поделиться».

Значение по умолчанию — `1`.

#### `data-card-align`

Управляет выравниванием карточки. Допустимые значения — `left`, `center` и `right`. Значение по умолчанию — `center`.

#### `data-card-recommend`

Управляет отображением на карточках с видео и мультимедийным контентом рекомендаций Embedly, если они поддерживаются. Рекомендации предоставляются сервисом Embedly.

- `0`: отключает рекомендации Embedly.
- `1`: включает рекомендации Embedly.

Значение по умолчанию — `1`.

#### `data-card-via` (необязательный)

Позволяет указать ссылку на источник контента, размещенного на карточке.

#### `data-card-theme` (необязательный)

Позволяет выбрать темную тему оформления, чтобы изменить фоновый цвет основного контейнера карточки. Для того чтобы выбрать эту тему оформления, используйте значение `dark` (рекомендуется для страниц с темным фоном). Значение по умолчанию — `light`; при его использовании основному контейнеру карточки не присваивается цвет фона.

#### title (необязательный)

Атрибут `title` устанавливает заголовок внутреннего элемента `<iframe>`. Значение по умолчанию — `"Embedly card"`.

#### Пример использования API

Изменение значений атрибутов при помощи программного кода автоматически обновляет элемент. Например, изменяя атрибут `data-url`, можно изменять встроенный контент:

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

## Компонент для Preact/React

### Импорт через npm

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

### Макет и стиль

#### Тип контейнера

Компонент `BentoEmbedlyCard` использует тип макета с указанием размера. Чтобы обеспечить правильный рендеринг компонента, необходимо указать размер самого компонента и его непосредственных дочерних элементов (слайдов) при помощи свойств CSS (например, `height`, `width`, `aspect-ratio` и т. д.). Их можно указывать как непосредственно в коде:

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

...так и при помощи `className`:

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

### Свойства

#### `url`

URL-адрес контента для встраивания.

#### `cardEmbed`

URL-адрес видео или мультимедийного контента. Используйте при вставке ссылок на статический контент, такой как статьи, чтобы вместо него на карточке отображалось видео или другой мультимедийный контент.

#### `cardImage`

URL-адрес изображения. Позволяет задать изображение для карточки, если параметр `data-url` указывает на статью. Поддерживаются не все URL-адреса; если изображение не загружается, попробуйте указать другое изображение или домен.

#### `cardControls`

Управляет состоянием кнопок «Поделиться».

- `0`: отключает кнопки «Поделиться».
- `1`: включает кнопки «Поделиться».

Значение по умолчанию — `1`.

#### `cardAlign`

Управляет выравниванием карточки. Допустимые значения — `left`, `center` и `right`. Значение по умолчанию — `center`.

#### `cardRecommend`

Управляет отображением на карточках с видео и мультимедийным контентом рекомендаций Embedly, если они поддерживаются. Рекомендации предоставляются сервисом Embedly.

- `0`: отключает рекомендации Embedly.
- `1`: включает рекомендации Embedly.

Значение по умолчанию — `1`.

#### `cardVia` (необязательный)

Позволяет указать ссылку на источник контента, размещенного на карточке.

#### `cardTheme` (необязательный)

Позволяет выбрать темную тему оформления, чтобы изменить фоновый цвет основного контейнера карточки. Для того чтобы выбрать эту тему оформления, используйте значение `dark` (рекомендуется для страниц с темным фоном). Значение по умолчанию — `light`; при его использовании основному контейнеру карточки не присваивается цвет фона.

#### title (необязательный)

Атрибут `title` устанавливает заголовок внутреннего элемента `<iframe>`. Значение по умолчанию — `"Embedly card"`.