---
id: bento-sidebar
title: Bento Sidebar
permalink: "/ru/components/bento-sidebar/"
short_title: Sidebar
layout: layouts/component.njk
description: 'Компонент предоставляет способ отображения мета-контента, к которому не требуется постоянный доступ: элементов навигации, ссылок, кнопок, меню.'
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

Компонент предоставляет способ отображения мета-контента, к которому не требуется постоянный доступ: элементов навигации, ссылок, кнопок, меню. Боковая панель вызывается нажатием на кнопку, визуально скрывая под собой основной контент страницы.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Используйте bento-sidebar в виде веб-компонента или функционального компонента React:</p> <a class="bd-button" href="#web-component">↓ Веб-компонент</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Веб-компонент

Чтобы гарантировать правильную загрузку, вы должны подключить необходимые CSS-библиотеки всех компонентов Bento (это нужно сделать перед добавлением пользовательских стилей). Как вариант, вы можете использовать встраиваемые облегченные стили от предыдущей версии компонента. См. [Макет и стиль](#layout-and-style).

### Импорт через npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### Подключение через `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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

### Интерактивность и использование API

API компонентов Bento позволяет обеспечить высокий уровень интерактивности. Чтобы получить доступ к API компонента `bento-sidebar`, включите в документ тег script со следующим содержимым:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Действия

API компонента `bento-sidebar` позволяет выполнять следующие действия:

##### open()

Открывает боковую панель.

```javascript
api.open();
```

##### close()

Закрывает боковую панель.

```javascript
api.close();
```

##### toggle()

Переключает видимость боковой панели.

```javascript
api.toggle(0);
```

### Макет и стиль

У каждого компонента Bento есть небольшая библиотека CSS, которую следует подключать, чтобы гарантировать правильную загрузку без [сдвигов контента](https://web.dev/cls/). Поскольку приоритетность CSS определяется порядком, следует вручную убедиться, что таблицы стилей подключаются раньше каких-либо пользовательских стилей.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Alternatively, you may also make the light-weight pre-upgrade styles available inline:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Пользовательские стили

Компонент `bento-sidebar` поддерживает стилизацию при помощи стандартных CSS-атрибутов.

- Атрибут `width` элемента `bento-sidebar` используется для изменения ширины (по умолчанию — 45px).
- При необходимости элементу `bento-sidebar` можно задать высоту, указав атрибут height. Если высота превышает 100vw, у боковой панели будет вертикальная полоса прокрутки. Предопределенная высота боковой панели — 100vw, но при помощи CSS ее можно уменьшить.
- Текущее состояние боковой панели отражается при помощи атрибута `open`, устанавливаемого элементу `bento-sidebar`, когда боковая панель на странице находится в открытом состоянии.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### Рекомендации по UX

При использовании `<bento-sidebar>` не забывайте, что многие пользователи будут просматривать вашу страницу с мобильных устройств, в связи с чем на странице может отображаться заголовок с фиксированной позицией. Кроме того, многие браузеры размещают в верхней части экрана свою собственную панель. В такой ситуации отображение в верхней части экрана еще одного фиксированного элемента с содержимым, не несущим смысловой нагрузки, является нерациональным использованием пространства.

Поэтому не следует использовать для размещения кнопки открытия боковой панели фиксированный заголовок, занимающий всю ширину страницы.

- Боковая панель может отображаться только в левой или правой части страницы.
- Максимальная высота боковой панели — 100vh, при превышении которых появляется вертикальная полоса прокрутки. По умолчанию высота равна 100vh, но ее можно переопределить через CSS.
- Ширину боковой панели можно настраивать при помощи CSS.
- `&lt;BentoSidebar&gt;{/code0 <em data-md-type="emphasis">рекомендуется</em> размещать непосредственно внутри элемента <code data-md-type="codespan">&lt;body&gt;`, чтобы сохранить логику структуры DOM, необходимую для работы специальных возможностей, а также не допустить влияния контейнера на поведение элемента. Учтите, что если один из вышестоящих по отношению к <code>BentoSidebar</code> элементов имеет явно заданный `z-index`, это может привести к отображению поверх боковой панели других элементов (таких, как заголовки) и нарушению ее функциональности.

### Атрибуты

#### side

Указывает, с какой стороны должна открываться боковая панель: `left` (слева) или `right` (справа). Если параметр `side` не указан, то значение `side` определяется на основе атрибута `dir` элемента `body` (`ltr` =&gt; `left`, `rtl` =&gt; `right`); если `dir` не определен, то по умолчанию в качестве значения `side` используется `left`.

#### open

Этот атрибут присутствует, когда боковая панель открыта.

---

## Компонент для Preact/React

### Импорт через npm

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

### Интерактивность и использование API

API компонентов Bento предоставляет высокий уровень интерактивности. Для доступа к API компонента `BentoSidebar` необходимо передать компоненту `ref`:

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

#### Действия

API компонента `BentoSidebar` позволяет выполнять следующие действия:

##### open()

Открывает боковую панель.

```javascript
ref.current.open();
```

##### close()

Закрывает боковую панель.

```javascript
ref.current.close();
```

##### toggle()

Переключает видимость боковой панели.

```javascript
ref.current.toggle(0);
```

### Макет и стиль

Компонент `BentoSidebar` поддерживает стилизацию при помощи стандартных CSS-атрибутов.

- Атрибут `width` элемента `bento-sidebar` используется для изменения ширины (по умолчанию — 45px).
- При необходимости элементу `bento-sidebar` можно задать высоту, указав атрибут height. Если высота превышает 100vw, у боковой панели будет вертикальная полоса прокрутки. Предопределенная высота боковой панели — 100vw, но при помощи CSS ее можно уменьшить.

Чтобы компонент отображался так, как вы хотите, обязательно укажите его размер. Это можно сделать как при помощи встраиваемого стиля:

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

...так и при помощи `className`:

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

### Рекомендации по UX

При использовании `<BentoSidebar>` не забывайте, что многие пользователи будут просматривать вашу страницу с мобильных устройств, в связи с чем на странице может отображаться заголовок с фиксированной позицией. Кроме того, многие браузеры размещают в верхней части экрана свою собственную панель. В такой ситуации отображение в верхней части экрана еще одного фиксированного элемента с содержимым, не несущим смысловой нагрузки, является нерациональным использованием пространства.

Поэтому не следует использовать для размещения кнопки открытия боковой панели фиксированный заголовок, занимающий всю ширину страницы.

- Боковая панель может отображаться только в левой или правой части страницы.
- Максимальная высота боковой панели — 100vh, при превышении которых появляется вертикальная полоса прокрутки. По умолчанию высота равна 100vh, но ее можно переопределить через CSS.
- Ширину боковой панели можно настраивать при помощи CSS.
- `<BentoSidebar>` *рекомендуется* размещать непосредственно внутри элемента `<body>`, чтобы сохранить логику структуры DOM, необходимую для работы специальных возможностей, а также не допустить влияния контейнера на поведение элемента. Учтите, что если один из вышестоящих по отношению к `BentoSidebar` элементов имеет явно заданный `z-index`, это может привести к отображению поверх боковой панели других элементов (таких, как заголовки) и нарушению ее функциональности.

### Свойства

#### side

Указывает, с какой стороны должна открываться боковая панель: `left` (слева) или `right` (справа). Если параметр `side` не указан, то значение `side` определяется на основе атрибута `dir` элемента `body` (`ltr` =&gt; `left`, `rtl` =&gt; `right`); если `dir` не определен, то по умолчанию в качестве значения `side` используется `left`.
