---
id: bento-stream-gallery
title: Składnik Bento Stream Gallery
permalink: "/pl/components/bento-stream-gallery/"
short_title: Stream Gallery
layout: layouts/component.njk
description: Składnik Bento Stream Gallery służy do wyświetlania wielu podobnych elementów treści
  naraz wzdłuż osi poziomej.
---

# Składnik Bento Stream Gallery

{% heroexample 'bento-stream-gallery' %}

Składnik Bento Stream Gallery służy do wyświetlania wielu podobnych elementów treści<br>naraz wzdłuż osi poziomej.

Jest to specjalizacja składnika Bento Base Carousel, która używa klasy [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) do dynamicznego dostosowywania rozmiaru i liczby wyświetlanych slajdów odpowiednio do szerokości kontenera. Aby zaimplementować bardziej dostosowaną UX, zobacz [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Element bento-stream-gallery można stosować jako składnik internetowy lub składnik funkcjonalny React:</p>   <a class="bd-button" href="#web-component">↓ Składnik internetowy</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Składnik internetowy

Przed dodaniem własnych stylów musisz dołączyć wymaganą bibliotekę CSS każdego składnika Bento, aby zagwarantować prawidłowe ładowanie. Można też użyć dostępnych inline uproszczonych stylów sprzed uaktualnienia. Patrz sekcja [Układ i styl](#layout-and-style).

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### Dołączanie za pomocą znacznika `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
```

### Przykład

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

### Interaktywność i wykorzystanie interfejsu API

Składniki Bento są wysoce interaktywne dzięki swojemu interfejsowi API. Interfejs API składnika `bento-stream-gallery` jest dostępny poprzez umieszczenie w dokumencie następującego znacznika script:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Działania

##### next()

Przesuwa karuzelę do przodu o widoczną liczbę slajdów.

```js
api.next();
```

##### prev()

Przesuwa karuzelę wstecz o widoczną liczbę slajdów.

```js
api.prev();
```

##### goToSlide(index: number)

Przesuwa karuzelę na slajd określony przez argument `index`.

Uwaga: wartość `index` zostanie znormalizowana do liczby większej lub równej <code>0</code>, a mniejszej od danej liczby slajdów.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Zdarzenia

Składnik Bento Stream Gallery umożliwia rejestrowanie następujących zdarzeń i reagowanie na nie:

##### slideChange

Zdarzenie to jest wyzwalane, gdy indeks wyświetlany przez karuzelę ulegnie zmianie. Nowy indeks jest dostępny poprzez `event.data.index`.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Układ i styl

Każdy składnik Bento ma małą bibliotekę CSS, którą należy dołączyć, aby zagwarantować prawidłowe ładowanie bez [przesunięć treści](https://web.dev/cls/). Ze względu na specyfikę opartą na kolejności musisz ręcznie zapewnić dołączanie arkuszy stylów przed wszelkimi stylami niestandardowymi.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Można również udostępnić dostępne inline uproszczone style sprzed uaktualnienia:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Przykład interfejsu API

Ten przykład demonstruje, jak programowo przechodzić do następnego/poprzedniego slajdu i do określonych slajdów.

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

### Atrybuty

#### Sposób działania

##### `controls`

Ma wartość `"always"`, `"auto"`, albo `"never"`, domyślnie `"auto"`. Określa, czy i kiedy wyświetlane są strzałki nawigacyjne wstecz/do przodu. Uwaga: jeśli `outset-arrows` ma wartość `true`, strzałki są wyświetlane zawsze (`"always"`).

- `always`: strzałki są zawsze wyświetlane.
- `auto`: strzałki są wyświetlane, gdy w karuzeli dokonano ostatnio interakcji za pomocą myszy, a nie są wyświetlane, gdy w karuzeli dokonano ostatnio interakcji za pomocą dotyku. Po pierwszym załadowaniu na urządzeniach dotykowych strzałki są wyświetlane do chwili pierwszej interakcji.
- `always`: strzałki nigdy nie są wyświetlane.

##### `extra-space`

Albo `"around"`, albo niezdefiniowany. Określa, w jaki sposób przydzielane jest dodatkowe miejsce po wyświetleniu obliczonej liczby slajdów widocznych w karuzeli. Jeśli `"around"`, białe miejsce jest równomiernie rozmieszczone wokół karuzeli za pomocą `justify-content: center`; w przeciwnym razie miejsce jest przydzielane po prawej stronie karuzeli w przypadku dokumentów LTR, a po lewej w przypadku dokumentów RTL.

##### `loop`

Albo `true`, albo `false`, domyślnie `true`. Gdy true, karuzela pozwoli użytkownikowi na przejście z pierwszego elementu z powrotem do ostatniego i odwrotnie. Aby karuzela mogła zostać zapętlona, musi zawierać co najmniej trzy slajdy.

##### `outset-arrows`

Albo `true`, albo `false`, domyślnie `false`. Gdy true, w karuzeli wyświetlane są strzałki na zewnątrz i po obu stronach slajdów. Zauważ, że w przypadku strzałek na zewnątrz kontener slajdów będzie miał efektywną długość o 100px mniejszą niż miejsce przydzielone dla danego kontenera — po 50px na strzałki po obu stronach. Gdy false, karuzela wyświetli strzałki jako wstawione i nałożone na górną część lewej i prawej krawędzi slajdów.

##### `peek`

Liczba, domyślnie `0`. Określa, jak dużo dodatkowego slajdu ma być wyświetlane (po jednej lub obu stronach bieżącego slajdu) jako zachęta dla użytkownika wskazująca, że karuzelę można przesuwać.

#### Widoczność slajdów galerii

##### `min-visible-count`

Liczba, domyślnie `1`. Określa minimalną liczbę slajdów wyświetlanych naraz. Można użyć wartości ułamkowych w celu uwidocznienia części dodatkowych slajdów.

##### `max-visible-count`

Liczba, domyślnie [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Określa minimalną liczbę slajdów wyświetlanych naraz. Można użyć wartości ułamkowych w celu uwidocznienia części dodatkowych slajdów.

##### `min-item-width`

Liczba, domyślnie `1`. Określa minimalną szerokość każdego elementu, używaną do rozpoznawania, ile całych elementów może być wyświetlanych naraz na całej szerokości galerii.

##### `max-item-width`

Liczba, domyślnie [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Określa maksymalną szerokość każdego elementu, używaną do rozpoznawania, ile całych elementów może być wyświetlanych naraz na całej szerokości galerii.

#### Przyciąganie slajdów

##### `slide-align`

Either `start` or `center`. When start aligning, the start of a slide (e.g. the left edge, when horizontal aligning) is aligned with the start of a carousel. When center aligning, the center of a slide is aligned with the center of a carousel.

##### `snap`

Albo `true`, albo `false`, domyślnie `true`. Określa, czy karuzela ma się zatrzymywać na slajdach podczas przewijania.

### Styling

Za pomocą selektora elementu `bento-stream-gallery` można dowolnie stylizować element streamGallery.

---

## Składnik Preact/React

### Import za pomocą narzędzia npm

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

### Interaktywność i wykorzystanie interfejsu API

Składniki Bento są wysoce interaktywne poprzez ich interfejs API. Interfejs API składnika `BentoStreamGallery` jest dostępny poprzez przekazanie `ref`:

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

#### Działania

Interfejs API składnika `BentoStreamGallery` umożliwia wykonanie następujących działań:

##### next()

Przesuwa karuzelę do przodu o liczbę slajdów wyrażoną w sekcji `advanceCount`.

```javascript
ref.current.next();
```

##### prev()

Przesuwa karuzelę wstecz o liczbę slajdów wyrażoną w sekcji `advanceCount`.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Przesuwa karuzelę do slajdu określonego przez argument `index`. Uwaga: wartość `index` zostanie znormalizowana do liczby większej lub równej `0`, a mniejszej od danej liczby slajdów.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### Zdarzenia

##### onSlideChange

Zdarzenie to jest wyzwalane, gdy indeks wyświetlany przez karuzelę ulegnie zmianie.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Układ i styl

#### Typ kontenera

Składnik `BentoStreamGallery` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe renderowanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `width`). Można je zastosować inline:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

Albo za pomocą atrybutu `className`:

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Właściwości

#### Wspólne właściwości

Ten składnik obsługuje [wspólne właściwości](../../../docs/spec/bento-common-props.md) składników React i Preact.

#### Sposób działania

##### `controls`

Ma wartość `"always"`, `"auto"`, albo `"never"`, domyślnie `"auto"`. Określa, czy i kiedy wyświetlane są strzałki nawigacyjne wstecz/do przodu. Uwaga: jeśli `outset-arrows` ma wartość `true`, strzałki są wyświetlane zawsze (`"always"`).

- `always`: strzałki są zawsze wyświetlane.
- `auto`: strzałki są wyświetlane, gdy w karuzeli dokonano ostatnio interakcji za pomocą myszy, a nie są wyświetlane, gdy w karuzeli dokonano ostatnio interakcji za pomocą dotyku. Po pierwszym załadowaniu na urządzeniach dotykowych strzałki są wyświetlane do chwili pierwszej interakcji.
- `always`: strzałki nigdy nie są wyświetlane.

##### `extraSpace`

Albo `"around"`, albo niezdefiniowany. Określa, w jaki sposób przydzielane jest dodatkowe miejsce po wyświetleniu obliczonej liczby slajdów widocznych w karuzeli. Jeśli `"around"`, białe miejsce jest równomiernie rozmieszczone wokół karuzeli za pomocą `justify-content: center`; w przeciwnym razie miejsce jest przydzielane po prawej stronie karuzeli w przypadku dokumentów LTR, a po lewej w przypadku dokumentów RTL.

##### `loop`

Albo `true`, albo `false`, domyślnie `true`. Gdy true, karuzela pozwoli użytkownikowi na przejście z pierwszego elementu z powrotem do ostatniego i odwrotnie. Aby karuzela mogła zostać zapętlona, musi zawierać co najmniej trzy slajdy.

##### `outsetArrows`

Albo `true`, albo `false`, domyślnie `false`. Gdy true, w karuzeli wyświetlane są strzałki na zewnątrz i po obu stronach slajdów. Zauważ, że w przypadku strzałek na zewnątrz kontener slajdów będzie miał efektywną długość o 100px mniejszą niż miejsce przydzielone dla danego kontenera — po 50px na strzałki po obu stronach. Gdy false, karuzela wyświetli strzałki jako wstawione i nałożone na górną część lewej i prawej krawędzi slajdów.

##### `peek`

Liczba, domyślnie `0`. Określa, jak dużo dodatkowego slajdu ma być wyświetlane (po jednej lub obu stronach bieżącego slajdu) jako zachęta dla użytkownika wskazująca, że karuzelę można przesuwać.

#### Widoczność slajdów galerii

##### `minVisibleCount`

Liczba, domyślnie `1`. Określa minimalną liczbę slajdów wyświetlanych naraz. Można użyć wartości ułamkowych w celu uwidocznienia części dodatkowych slajdów.

##### `maxVisibleCount`

Liczba, domyślnie [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Określa minimalną liczbę slajdów wyświetlanych naraz. Można użyć wartości ułamkowych w celu uwidocznienia części dodatkowych slajdów.

##### `minItemWidth`

Liczba, domyślnie `1`. Określa minimalną szerokość każdego elementu, używaną do rozpoznawania, ile całych elementów może być wyświetlanych naraz na całej szerokości galerii.

##### `maxItemWidth`

Liczba, domyślnie [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Określa maksymalną szerokość każdego elementu, używaną do rozpoznawania, ile całych elementów może być wyświetlanych naraz na całej szerokości galerii.

#### Przyciąganie slajdów

##### `slideAlign`

Either `start` or `center`. When start aligning, the start of a slide (e.g. the left edge, when horizontal aligning) is aligned with the start of a carousel. When center aligning, the center of a slide is aligned with the center of a carousel.

##### `snap`

Albo `true`, albo `false`, domyślnie `true`. Określa, czy karuzela ma się zatrzymywać na slajdach podczas przewijania.
