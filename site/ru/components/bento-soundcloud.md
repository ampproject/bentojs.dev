---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/ru/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Компонент для встраивания аудиозаписей с <a href="https://soundcloud.com">Soundcloud</a>.
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Компонент для встраивания аудиозаписей с [Soundcloud](https://soundcloud.com).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Используйте bento-soundcloud в виде веб-компонента или функционального компонента React:</p> <a class="bd-button" href="#web-component">↓ Веб-компонент</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Веб-компонент

Чтобы гарантировать правильную загрузку, вы должны подключить необходимые CSS-библиотеки всех компонентов Bento (это нужно сделать перед добавлением пользовательских стилей). Как вариант, вы можете использовать встраиваемые облегченные стили от предыдущей версии компонента. См. [Макет и стиль](#layout-and-style).

### Импорт через npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### Подключение через `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
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

### Макет и стиль

У каждого компонента Bento есть небольшая библиотека CSS, которую следует подключать, чтобы гарантировать правильную загрузку без [сдвигов содержимого](https://web.dev/cls/). Поскольку приоритетность CSS определяется порядком, следует вручную убедиться, что таблицы стилей подключаются раньше каких-либо пользовательских стилей.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Alternatively, you may also make the light-weight pre-upgrade styles available inline:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Тип контейнера

Компонент `bento-soundcloud` использует тип макета с указанием размера. Чтобы обеспечить правильный рендеринг компонента, необходимо указать размер самого компонента и его непосредственных дочерних элементов (слайдов) при помощи свойств CSS (например, `height`, `width`, `aspect-ratio` и т. д.):

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Атрибуты

Изменение значений атрибутов при помощи программного кода автоматически обновляет плеер.

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

Этот атрибут обязателен, если не указан атрибут <code>data-playlistid</code>.<br> Значение атрибута — идентификатор трека в виде целого числа.

##### data-playlistid

Этот атрибут обязателен, если не указан атрибут <code>data-trackid</code>. Значение атрибута — идентификатор плейлиста в виде целого числа.

##### data-secret-token (необязательный)

Секретный токен трека (для треков с ограниченным доступом).

##### data-visual (необязательный)

<code>true</code> — отображает «визуальный» плеер во всю ширину, в противном случае отображает «классический» плеер. Значение по умолчанию — <code>false</code>.

##### data-color (необязательный)

Этот атрибут позволяет установить пользовательский цвет для «классического» режима. В «визуальном» режиме атрибут игнорируется. Цвет указывается в шестнадцатеричном виде без начального «#» (например, <code>data-color="e540ff"</code>).

---

## Компонент для Preact/React

### Импорт через npm

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

### Макет и стиль

#### Тип контейнера

Компонент `BentoSoundcloud` использует тип макета с указанием размера. Чтобы обеспечить правильный рендеринг компонента, необходимо указать размер самого компонента и его непосредственных дочерних элементов (слайдов) при помощи свойств CSS (например, `height`, `width`, `aspect-ratio` и т. д.). Их можно указывать как непосредственно в коде:

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

...так и при помощи `className`:

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

### Свойства

##### trackId

Этот атрибут обязателен, если не указан атрибут <code>data-playlistid</code>.<br> Значение атрибута — идентификатор трека в виде целого числа.

##### playlistId

Этот атрибут обязателен, если не указан атрибут <code>data-trackid</code>. Значение атрибута — идентификатор плейлиста в виде целого числа.

##### secretToken (необязательное)

Секретный токен трека (для треков с ограниченным доступом).

##### visual (необязательное)

<code>true</code> — отображает «визуальный» плеер во всю ширину, в противном случае отображает «классический» плеер. Значение по умолчанию — <code>false</code>.

##### color (необязательное)

Этот атрибут позволяет установить пользовательский цвет для «классического» режима. В «визуальном» режиме атрибут игнорируется. Цвет указывается в шестнадцатеричном виде без начального «#» (например, <code>data-color="e540ff"</code>).
