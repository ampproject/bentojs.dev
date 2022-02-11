---
id: bento-stream-gallery
title: Bento Stream Gallery
permalink: "/ru/components/bento-stream-gallery/"
short_title: Stream Gallery
layout: layouts/component.njk
description: Компонент Bento Stream Gallery предназначен для отображения нескольких похожих фрагментов контента по горизонтальной оси.
---

# Bento Stream Gallery

{% heroexample 'bento-stream-gallery' %}

Компонент Bento Stream Gallery предназначен для отображения нескольких похожих фрагментов контента по горизонтальной оси.

Это специализированная версия Bento Base Carousel, использующая [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) для динамического изменения размера и количества отображаемых слайдов в зависимости от ширины контейнера. Если вам нужен более высокий уровень гибкости, ознакомьтесь с [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Используйте bento-stream-gallery в виде веб-компонента или функционального компонента React:</p> <a class="bd-button" href="#web-component">↓ Веб-компонент</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Веб-компонент

Чтобы гарантировать правильную загрузку, вы должны подключить необходимые CSS-библиотеки всех компонентов Bento (это нужно сделать перед добавлением пользовательских стилей). Как вариант, вы можете использовать встраиваемые облегченные стили от предыдущей версии компонента. См. [Макет и стиль](#layout-and-style).

### Импорт через npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### Подключение через `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
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

### Интерактивность и использование API

API компонентов Bento позволяет обеспечить высокий уровень интерактивности. Чтобы получить доступ к API компонента `bento-stream-gallery`, включите в документ тег script со следующим содержимым:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Действия

##### next()

Перелистывает кольцевую галерею вперед на видимое количество слайдов.

```js
api.next();
```

##### prev()

Перелистывает кольцевую галерею назад на видимое количество слайдов.

```js
api.prev();
```

##### goToSlide(index: number)

Переходит к слайду кольцевой галереи под номером, соответствующим аргументу `index`.

Примечание: если значение `index` ниже <code>0</code> или выше максимального значения, то выбирается слайд с ближайшим допустимым номером.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### События

Компонент Bento Stream Gallery позволяет регистрировать и отвечать на следующие события:

##### slideChange

Это событие срабатывает при смене слайда, отображаемого кольцевой галереей. Получить новый индекс можно при помощи `event.data.index`.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Макет и стиль

У каждого компонента Bento есть небольшая библиотека CSS, которую следует подключать, чтобы гарантировать правильную загрузку без [сдвигов контента](https://web.dev/cls/). Поскольку приоритетность CSS определяется порядком, следует вручную убедиться, что таблицы стилей подключаются раньше каких-либо пользовательских стилей.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Alternatively, you may also make the light-weight pre-upgrade styles available inline:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Пример использования API

Ниже приведен пример кода для перехода к следующему/предыдущему слайду и к конкретным слайдам.

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

### Атрибуты

#### Поведение

##### `controls`

`"always"`, `"auto"` или `"never"`, по умолчанию — `"auto"`. Управляет отображением навигационных стрелок для перелистывания галереи. Примечание: когда `outset-arrows` имеет значение `true`, стрелки показываются всегда (`"always"`).

- `always`: стрелки отображаются всегда.
- `auto`: стрелки отображаются в том случае, если пользователь в последний раз взаимодействовал с галереей при помощи мыши, а не касания. На сенсорных устройствах после загрузки элемента стрелки будут отображаться до первого взаимодействия пользователя с галереей.
- `never`: стрелки не отображаются.

##### `extra-space`

`"around"` или неопределенное значение. Определяет способ распределения пустого пространства, остающегося после отрисовки всех видимых слайдов кольцевой галереи. `"around"` означает, что пространство вокруг галереи распределяется равномерно при помощи `justify-content: center`; в противном случае пустое пространство располагается справа от галереи, если документ использует направление слева направо, или слева от нее, если используется направление справа налево.

##### `loop`

`true` или `false`, по умолчанию — `true`. Разрешает пользователю переходить от последнего элемента галереи к первому и наоборот. Для работы этой возможности необходимо, чтобы в галерее было как минимум три слайда.

##### `outset-arrows`

`true` или `false`, по умолчанию — `false`. «true» означает, что стрелки отображаются за пределами кольцевой галереи, справа и слева от слайдов; обратите внимание, что при этом фактическая ширина контейнера со слайдами сокращается на 100px по сравнению с исходной (по 50px на стрелку с каждой стороны). «false» означает, что стрелки отображаются поверх галереи, возле правого и левого краев слайдов.

##### `peek`

Число, по умолчанию — `0`. Определяет, какую часть дополнительного слайда (по одну или по обе стороны от текущего слайда) следует показывать, чтобы дать пользователю понять, что кольцевую галерею можно перелистывать.

#### Видимость слайдов в галерее

##### `min-visible-count`

Число, по умолчанию — `1`. Определяет минимальное количество одновременно отображаемых слайдов. Можно указать дробное значение, чтобы сделать дополнительный слайд или слайды видимыми частично.

##### `max-visible-count`

Число, по умолчанию — [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Определяет максимальное количество одновременно отображаемых слайдов. Можно указать дробное значение, чтобы сделать дополнительный слайд или слайды видимыми частично.

##### `min-item-width`

Число, по умолчанию — `1`. Определяет минимальную ширину каждого элемента. Используется для определения числа видимых полностью элементов, отображаемых одновременно исходя из общей ширины галереи.

##### `max-item-width`

Число, по умолчанию — [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Определяет максимальную ширину каждого элемента. Используется для определения числа видимых полностью элементов, отображаемых одновременно исходя из общей ширины галереи.

#### Привязка положения прокрутки слайдов

##### `slide-align`

`start` или `center`. «start» означает, что начало слайда (т. е. левый или верхний край, в зависимости от направления выравнивания) выравнивается по левому или верхнему краю кольцевой галереи. «center» означает, что центр слайда выравнивается относительно центра галереи.

##### `snap`

`true` или `false`, по умолчанию — `true`. Включает привязку к слайдам при прокрутке кольцевой галереи.

### Стилизация

Вы можете использовать селектор элемента `bento-stream-gallery` для свободной стилизации элемента streamGallery.

---

## Компонент для Preact/React

### Импорт через npm

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

### Интерактивность и использование API

API компонентов Bento предоставляет высокий уровень интерактивности. Для доступа к API компонента `BentoStreamGallery` необходимо передать компоненту `ref`:

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

#### Действия

API компонента `BentoStreamGallery` позволяет выполнять следующие действия:

##### next()

Перелистывает кольцевую галерею вперед на заданное атрибутом `advanceCount` число слайдов.

```javascript
ref.current.next();
```

##### prev()

Перелистывает кольцевую галерею назад на заданное атрибутом `advanceCount` число слайдов.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Переходит к слайду кольцевой галереи под номером, соответствующим аргументу `index`. Примечание: если значение `index` ниже `0` или выше максимального значения, то выбирается слайд с ближайшим допустимым номером.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### События

##### onSlideChange

Это событие срабатывает при смене слайда, отображаемого кольцевой галереей.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Макет и стиль

#### Тип контейнера

Компонент `BentoStreamGallery` использует тип макета с указанием размера. Чтобы обеспечить правильный рендеринг компонента, необходимо указать размер самого компонента и его непосредственных дочерних элементов при помощи свойств CSS (например, `width`). Их можно указывать как непосредственно в коде:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

...так и при помощи `className`:

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Свойства

#### Общие свойства

Компонент BentoAccordionHeader поддерживает [свойства](../../../docs/spec/bento-common-props.md), являющиеся общими для всех компонентов React и Preact.

#### Поведение

##### `controls`

`"always"`, `"auto"` или `"never"`, по умолчанию — `"auto"`. Управляет отображением навигационных стрелок для перелистывания галереи. Примечание: когда `outset-arrows` имеет значение `true`, стрелки показываются всегда (`"always"`).

- `always`: стрелки отображаются всегда.
- `auto`: стрелки отображаются в том случае, если пользователь в последний раз взаимодействовал с галереей при помощи мыши, а не касания. На сенсорных устройствах после загрузки элемента стрелки будут отображаться до первого взаимодействия пользователя с галереей.
- `never`: стрелки не отображаются.

##### `extraSpace`

`"around"` или неопределенное значение. Определяет способ распределения пустого пространства, остающегося после отрисовки всех видимых слайдов кольцевой галереи. `"around"` означает, что пространство вокруг галереи распределяется равномерно при помощи `justify-content: center`; в противном случае пустое пространство располагается справа от галереи, если документ использует направление слева направо, или слева от нее, если используется направление справа налево.

##### `loop`

`true` или `false`, по умолчанию — `true`. Разрешает пользователю переходить от последнего элемента галереи к первому и наоборот. Для работы этой возможности необходимо, чтобы в галерее было как минимум три слайда.

##### `outsetArrows`

`true` или `false`, по умолчанию — `false`. «true» означает, что стрелки отображаются за пределами кольцевой галереи, справа и слева от слайдов; обратите внимание, что при этом фактическая ширина контейнера со слайдами сокращается на 100px по сравнению с исходной (по 50px на стрелку с каждой стороны). «false» означает, что стрелки отображаются поверх галереи, возле правого и левого краев слайдов.

##### `peek`

Число, по умолчанию — `0`. Определяет, какую часть дополнительного слайда (по одну или по обе стороны от текущего слайда) следует показывать, чтобы дать пользователю понять, что кольцевую галерею можно перелистывать.

#### Видимость слайдов в галерее

##### `minVisibleCount`

Число, по умолчанию — `1`. Определяет минимальное количество одновременно отображаемых слайдов. Можно указать дробное значение, чтобы сделать дополнительный слайд или слайды видимыми частично.

##### `maxVisibleCount`

Число, по умолчанию — [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Определяет максимальное количество одновременно отображаемых слайдов. Можно указать дробное значение, чтобы сделать дополнительный слайд или слайды видимыми частично.

##### `minItemWidth`

Число, по умолчанию — `1`. Определяет минимальную ширину каждого элемента. Используется для определения числа видимых полностью элементов, отображаемых одновременно исходя из общей ширины галереи.

##### `maxItemWidth`

Число, по умолчанию — [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Определяет максимальную ширину каждого элемента. Используется для определения числа видимых полностью элементов, отображаемых одновременно исходя из общей ширины галереи.

#### Привязка положения прокрутки слайдов

##### `slideAlign`

`start` или `center`. «start» означает, что начало слайда (т. е. левый или верхний край, в зависимости от направления выравнивания) выравнивается по левому или верхнему краю кольцевой галереи. «center» означает, что центр слайда выравнивается относительно центра галереи.

##### `snap`

`true` или `false`, по умолчанию — `true`. Включает привязку к слайдам при прокрутке кольцевой галереи.
