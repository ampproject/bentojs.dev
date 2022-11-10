---
id: bento-base-carousel
title: Składnik Bento Carousel
permalink: "/pl/components/bento-carousel/"
short_title: Carousel
layout: layouts/component.njk
description: Ogólna karuzela do wyświetlania wielu podobnych elementów treści wzdłuż osi poziomej lub pionowej.
---

# Składnik Bento Carousel

{% heroexample 'bento-base-carousel' %}

Ogólna karuzela do wyświetlania wielu podobnych elementów treści wzdłuż osi poziomej lub pionowej. Każdy z bezpośrednich elementów podrzędnych tego składnika jest traktowany jako element karuzeli. Każdy z tych węzłów może mieć również dowolne elementy podrzędne. Karuzela składa się z dowolnej liczby elementów, jak również opcjonalnych strzałek nawigacyjnych, które umożliwiają przejście do przodu lub do tyłu o jeden element. Karuzela przesuwa się pomiędzy elementami, jeśli użytkownik przesuwa ją palcem lub używa konfigurowalnych przycisków strzałek.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Element bento-base-carousel można stosować jako składnik internetowy lub składnik funkcjonalny React:</p>   <a class="bd-button" href="#web-component">↓ Składnik internetowy</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Składnik internetowy

Przed dodaniem własnych stylów musisz dołączyć wymaganą bibliotekę CSS każdego składnika Bento, aby zagwarantować prawidłowe ładowanie. Można też użyć dostępnych inline uproszczonych stylów sprzed uaktualnienia. Patrz sekcja [Układ i styl](#layout-and-style).

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/base-carousel
```

```javascript
import {defineElement as defineBentoBaseCarousel} from '@bentoproject/base-carousel';
defineBentoBaseCarousel();
```

### Dołączanie za pomocą znacznika `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css" crossorigin="anonymous">
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
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js"
    ></script>
    <style>
      bento-base-carousel,
      bento-base-carousel > div {
        aspect-ratio: 4/1;
      }
      .red {
        background: darkred;
      }
      .blue {
        background: steelblue;
      }
      .green {
        background: seagreen;
      }
    </style>
  </head>
  <body>
    <bento-base-carousel id="my-carousel">
      <div class="red"></div>
      <div class="blue"></div>
      <div class="green"></div>
    </bento-base-carousel>
  </body>
</html>
```

{% endexample %}

### Interaktywność i wykorzystanie interfejsu API

Składniki Bento są wysoce interaktywne dzięki swojemu interfejsowi API. Interfejs API składnika `bento-base-carousel` jest dostępny poprzez umieszczenie w dokumencie następującego znacznika script:

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
      href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js"
    ></script>
    <style>
      bento-base-carousel,
      bento-base-carousel > div {
        aspect-ratio: 4/1;
      }
      .red {
        background: darkred;
      }
      .blue {
        background: steelblue;
      }
      .green {
        background: seagreen;
      }
    </style>
  </head>
  <body>
    <bento-base-carousel id="my-carousel">
      <div class="red"></div>
      <div class="blue"></div>
      <div class="green"></div>
    </bento-base-carousel>
    <div class="buttons" style="margin-top: 8px">
      <button id="prev-button">Go to previous slide</button>
      <button id="next-button">Go to next slide</button>
      <button id="go-to-button">Go to slide with green gradient</button>
    </div>

    <script>
      (async () => {
        const carousel = document.querySelector('#my-carousel');
        await customElements.whenDefined('bento-base-carousel');
        const api = await carousel.getApi();

        // programatically advance to next slide
        api.next();

        // set up button actions
        document.querySelector('#prev-button').onclick = () => api.prev();
        document.querySelector('#next-button').onclick = () => api.next();
        document.querySelector('#go-to-button').onclick = () =>
          api.goToSlide(2);
      })();
    </script>
  </body>
</html>
```

{% endexample %}

```javascript
await customElements.whenDefined('bento-base-carousel');
const api = await carousel.getApi();
```

#### Działania

Interfejs API składnika `bento-base-carousel` umożliwia wykonanie następujących działań:

##### next()

Przesuwa karuzelę do przodu o liczbę slajdów wyrażoną w sekcji `advance-count`.

```javascript
api.next();
```

##### prev()

Przesuwa karuzelę wstecz o liczbę slajdów wyrażoną w sekcji `advance-count`.

```javascript
api.prev();
```

##### goToSlide(index: number)

Przesuwa karuzelę do slajdu określonego przez argument `index`. Uwaga: wartość `index` zostanie znormalizowana do liczby większej lub równej `0`, a mniejszej od danej liczby slajdów.

```javascript
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Zdarzenia

Interfejs API składnika `bento-base-carousel` umożliwia rejestrowanie następujących zdarzeń i reagowanie na nie:

##### slideChange

Zdarzenie to jest wyzwalane, gdy indeks wyświetlany przez karuzelę ulegnie zmianie. Nowy indeks jest dostępny poprzez `event.data.index`.

```javascript
carousel.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Układ i styl

Każdy składnik Bento ma małą bibliotekę CSS, którą należy dołączyć, aby zagwarantować prawidłowe ładowanie bez [przesunięć treści](https://web.dev/cls/). Ze względu na specyfikę opartą na kolejności musisz ręcznie zapewnić dołączanie arkuszy stylów przed wszelkimi stylami niestandardowymi.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
/>
```

Można również udostępnić dostępne inline uproszczone style sprzed uaktualnienia:

```html
<style>
  bento-base-carousel {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Typ kontenera

Składnik `bento-base-carousel` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```css
bento-base-carousel {
  height: 100px;
  width: 100%;
}

bento-base-carousel > * {
  aspect-ratio: 4/1;
}
```

### Zmiana slajdu z prawej strony na lewą

Składnik `<bento-base-carousel>` wymaga określenia, kiedy karuzela znajduje się w kontekście od prawej do lewej (rtl) (np. na stronach w języku arabskim lub hebrajskim). Chociaż karuzela będzie działać bez tego określenia, może wystąpić kilka błędów. Możesz poinformować karuzelę, że powinna działać jako `rtl` w następujący sposób:

```html
<bento-base-carousel dir="rtl" …> … </bento-base-carousel>
```

Jeśli karuzela znajduje się w kontekście RTL, a chcesz, aby działała jako LTR, możesz jawnie ustawić `dir="ltr"` w karuzeli.

### Układ slajdów

Rozmiar slajdów jest automatycznie ustawiany przez karuzelę, jeśli **nie** określono go jako `mixed-lengths`.

```html
<bento-base-carousel …>
  <img style="height: 100%; width: 100%" src="…" />
</bento-base-carousel>
```

Slajdy mają domyślną wysokość w układzie karuzeli. Można to łatwo zmienić za pomocą kodu CSS. Gdy określisz wysokość, slajd zostanie wyśrodkowany w pionie w karuzeli.

Aby wyśrodkować zawartość slajdu w poziomie, utwórz element otoki i użyj go do wyśrodkowania zawartości.

### Liczba widocznych slajdów

W razie zmiany liczby widocznych slajdów za pomocą wartości `visible-slides` w odpowiedzi na zapytanie o multimedia prawdopodobnie konieczna będzie zmiana współczynnika proporcji samej karuzeli w celu dopasowania jej do nowej liczby widocznych slajdów. Jeśli na przykład chcesz pokazać naraz trzy slajdy ze współczynnikiem proporcji jeden do jednego, konieczne będzie zastosowanie współczynnika proporcji trzy do jednego do samej karuzeli. Analogicznie, w przypadku czterech slajdów naraz należałoby przyjąć współczynnik proporcji cztery do jednego. Dodatkowo, w razie zmiany wartości `visible-slides` prawdopodobnie trzeba będzie zmienić wartość `advance-count`.

```html
<!-- Using an aspect ratio of 3:2 for the slides in this example. -->
<bento-base-carousel
  visible-count="(min-width: 600px) 4, 3"
  advance-count="(min-width: 600px) 4, 3"
>
  <img style="height: 100%; width: 100%" src="…" />
  …
</bento-base-carousel>
```

### Atrybuty

#### Zapytania o multimedia

Atrybuty składnika `<bento-base-carousel>` można skonfigurować w taki sposób, aby używać różnych opcji na podstawie [zapytania o multimedia](./../../../docs/spec/amp-html-responsive-attributes.md).

#### Liczba widocznych slajdów

##### mixed-length

Albo `true`, albo `false`, domyślnie `false`. Gdy true, stosuje istniejącą szerokość (lub wysokość w trybie poziomym) do każdego ze slajdów. Pozwala to na użycie karuzeli ze slajdami o różnych szerokościach.

##### visible-count

Liczba, domyślnie `1`. Określa liczbę slajdów wyświetlanych naraz. Można użyć wartości ułamkowych w celu uwidocznienia części dodatkowych slajdów. Opcja ta jest ignorowana, gdy atrybut `mixed-length` ma wartość `true`.

##### advance-count

Liczba, domyślnie `1`. Określa, o ile slajdów przesunie się karuzela podczas przesuwania za pomocą przycisków strzałek do przodu i wstecz. Jest to przydatne w razie określania atrybutu `visible-count`.

#### Automatyczne przesuwanie

##### auto-advance

Albo `true`, albo `false`, domyślnie `false`. Automatycznie przesuwa karuzelę do następnego slajdu na podstawie opóźnienia. Jeśli użytkownik ręcznie zmieni slajd, automatyczne przesuwanie zostanie zatrzymane. Zauważ, że jeśli ustawienie `loop` nie jest włączone, po dojściu do ostatniego elementu automatyczne przesuwanie będzie cofać karuzelę do pierwszego elementu.

##### auto-advance-count

Liczba, domyślnie `1`. Określa liczbę slajdów, o jaką zostanie przesunięta karuzela podczas automatycznego przesuwania. Jest to przydatne w razie określania atrybutu `visible-count`.

##### auto-advance-interval

Liczba, domyślnie `1000`. Określa czas w milisekundach między kolejnymi automatycznymi przesunięciami karuzeli.

##### auto-advance-loops

Liczba, domyślnie `∞`. Żądana liczba powtórzeń przejścia karuzeli przez slajdy przed zatrzymaniem.

#### Przyciąganie

##### snap

Albo `true`, albo `false`, domyślnie `true`. Określa, czy karuzela ma się zatrzymywać na slajdach podczas przewijania.

##### snap-align

Either `start` or `center`. When start aligning, the start of a slide (e.g. the left edge, when horizontal aligning) is aligned with the start of a carousel. When center aligning, the center of a slide is aligned with the center of a carousel.

##### snap-by

Liczba, domyślnie `1`. Określa precyzję przyciągania i jest przydatna w razie stosowania atrybutu `visible-count`.

#### Różne

##### controls

Ma wartość `"always"`, `"auto"`, albo `"never"`, domyślnie `"auto"`. Określa, czy i kiedy wyświetlane są strzałki nawigacyjne wstecz/do przodu. Uwaga: jeśli `outset-arrows` ma wartość `true`, strzałki są wyświetlane zawsze (`"always"`).

- `always`: strzałki są zawsze wyświetlane.
- `auto`: strzałki są wyświetlane, gdy w karuzeli dokonano ostatnio interakcji za pomocą myszy, a nie są wyświetlane, gdy w karuzeli dokonano ostatnio interakcji za pomocą dotyku. Po pierwszym załadowaniu na urządzeniach dotykowych strzałki są wyświetlane do chwili pierwszej interakcji.
- `always`: strzałki nigdy nie są wyświetlane.

##### slide

Liczba, domyślnie `0`. Określa początkowy slajd wyświetlany w karuzeli. Można ją modyfikować za pomocą atrybutu `Element.setAttribute`, aby kontrolować, który slajd jest aktualnie pokazywany.

##### loop

Albo `true`, albo `false`, domyślnie `false`, jeśli pominięty. Gdy true, karuzela pozwoli użytkownikowi na przejście z pierwszego elementu z powrotem do ostatniego i odwrotnie. Aby karuzela mogła zostać zapętlona, musi zawierać co najmniej trzy razy więcej slajdów niż `visible-count`.

##### orientation

Albo `horizontal` albo `vertical`, domyślnie `horizontal`. Gdy `vertical`, karuzela będzie ułożona w poziomie, a użytkownik będzie mógł przesuwać ją palcem w lewo i w prawo. Gdy `vertical`, karuzela będzie ułożona w pionie, a użytkownik będzie mógł przesuwać ją palcem w górę i w dół.

### Styling

Za pomocą selektora elementu `bento-base-carousel` można dowolnie stylizować karuzelę.

#### Dostosowywanie przycisków strzałek

Przyciski strzałek można dostosowywać poprzez przekazanie własnego znacznika. Można na przykład odtworzyć domyślną stylizację za pomocą następującego kodu HTML i CSS:

```css
.carousel-prev,
.carousel-next {
  filter: drop-shadow(0px 1px 2px #4a4a4a);
  width: 40px;
  height: 40px;
  padding: 20px;
  background-color: transparent;
  border: none;
  outline: none;
}

.carousel-prev {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14,7.4 L9.4,12 L14,16.6" fill="none" stroke="#fff" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" /></svg>');
}

.carousel-next {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M10,7.4 L14.6,12 L10,16.6" fill="none" stroke="#fff" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" /></svg>');
}
```

```html
<bento-base-carousel …>
  <div>first slide</div>
  …
  <button slot="next-arrow" class="carousel-next" aria-label="Next"></button>
  <button
    slot="prev-arrow"
    class="carousel-prev"
    aria-label="Previous"
  ></button>
</bento-base-carousel>
```

---

## Składnik Preact/React

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/base-carousel
```

```javascript
import React from 'react';
import {BentoBaseCarousel} from '@bentoproject/base-carousel/react';
import '@bentoproject/base-carousel/styles.css';

function App() {
  return (
    <BentoBaseCarousel>
      <img src="puppies.jpg" />
      <img src="kittens.jpg" />
      <img src="hamsters.jpg" />
    </BentoBaseCarousel>
  );
}
```

### Interaktywność i wykorzystanie interfejsu API

Składniki Bento są wysoce interaktywne poprzez ich interfejs API. Interfejs API składnika `BentoBaseCarousel` jest dostępny poprzez przekazanie `ref`:

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoBaseCarousel ref={ref}>
      <img src="puppies.jpg" />
      <img src="kittens.jpg" />
      <img src="hamsters.jpg" />
    </BentoBaseCarousel>
  );
}
```

#### Działania

Interfejs API składnika `BentoBaseCarousel` umożliwia wykonanie następujących działań:

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

Interfejs API składnika `entoBaseCarousel` umożliwia rejestrowanie następujących zdarzeń i reagowanie na nie:

##### onSlideChange

Zdarzenie to jest wyzwalane, gdy indeks wyświetlany przez karuzelę ulegnie zmianie.

```jsx
<BentoBaseCarousel onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoBaseCarousel>
```

### Układ i styl

#### Typ kontenera

Składnik `BentoBaseCarousel` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```jsx
<BentoBaseCarousel style={% raw %}{{width: 300, height: 100}}{% endraw %}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoBaseCarousel>
```

Albo za pomocą atrybutu `className`:

```jsx
<BentoBaseCarousel className="custom-styles">
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoBaseCarousel>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}

.custom-styles > * {
  aspect-ratio: 4/1;
}
```

### Zmiana slajdu z prawej strony na lewą

Składnik `<BentoBaseCarousel>` wymaga określenia, kiedy karuzela znajduje się w kontekście od prawej do lewej (rtl) (np. na stronach w języku arabskim lub hebrajskim). Chociaż karuzela będzie działać bez tego określenia, może wystąpić kilka błędów. Możesz poinformować karuzelę, że powinna działać jako `rtl` w następujący sposób:

```jsx
<BentoBaseCarousel dir="rtl">…</BentoBaseCarousel>
```

Jeśli karuzela znajduje się w kontekście RTL, a chcesz, aby działała jako LTR, możesz jawnie ustawić `dir="ltr"` w karuzeli.

### Układ slajdów

Rozmiar slajdów jest automatycznie ustawiany przez karuzelę, jeśli **nie** określono go jako `mixedLengths`.

```jsx
<BentoBaseCarousel>
  <img style={% raw %}{{height: '100%', width: '100%'}}{% endraw %} src="…" />
</BentoBaseCarousel>
```

Slajdy mają domyślną wysokość w układzie karuzeli. Można to łatwo zmienić za pomocą kodu CSS. Gdy określisz wysokość, slajd zostanie wyśrodkowany w pionie w karuzeli.

Aby wyśrodkować zawartość slajdu w poziomie, utwórz element otoki i użyj go do wyśrodkowania zawartości.

### Liczba widocznych slajdów

W razie zmiany liczby widocznych slajdów za pomocą wartości `visible-slides` w odpowiedzi na zapytanie o multimedia prawdopodobnie konieczna będzie zmiana współczynnika proporcji samej karuzeli w celu dopasowania jej do nowej liczby widocznych slajdów. Jeśli na przykład chcesz pokazać naraz trzy slajdy ze współczynnikiem proporcji jeden do jednego, konieczne będzie zastosowanie współczynnika proporcji trzy do jednego do samej karuzeli. Analogicznie, w przypadku czterech slajdów naraz należałoby przyjąć współczynnik proporcji cztery do jednego. Dodatkowo, w razie zmiany wartości `visibleSlides` prawdopodobnie trzeba będzie zmienić wartość `advanceCount`.

```jsx
const count = window.matchMedia('(max-width: 600px)').matches ? 4 : 3;

<BentoBaseCarousel visibleCount={count} advanceCount={count}>
  <img style={% raw %}{{height: '100%', width: '100%'}}{% endraw %} src="…" />…
</BentoBaseCarousel>
```

### Właściwości

#### Liczba widocznych slajdów

##### mixedLength

Albo `true`, albo `false`, domyślnie `false`. Gdy true, stosuje istniejącą szerokość (lub wysokość w trybie poziomym) do każdego ze slajdów. Pozwala to na użycie karuzeli ze slajdami o różnych szerokościach.

##### visibleCount

Liczba, domyślnie `1`. Określa liczbę slajdów wyświetlanych naraz. Można użyć wartości ułamkowych w celu uwidocznienia części dodatkowych slajdów. Opcja ta jest ignorowana, gdy atrybut `mixed-length` ma wartość `true`.

##### advanceCount

Liczba, domyślnie `1`. Określa liczbę slajdów, o jaką zostanie przesunięta karuzela podczas automatycznego przesuwania. Jest to przydatne w razie określania atrybutu `visibleCount`.

#### Automatyczne przesuwanie

##### autoAdvance

Albo `true`, albo `false`, domyślnie `false`. Automatycznie przesuwa karuzelę do następnego slajdu na podstawie opóźnienia. Jeśli użytkownik ręcznie zmieni slajd, automatyczne przesuwanie zostanie zatrzymane. Zauważ, że jeśli ustawienie `loop` nie jest włączone, po dojściu do ostatniego elementu automatyczne przesuwanie będzie cofać karuzelę do pierwszego elementu.

##### autoAdvanceCount

Liczba, domyślnie `1`. Określa liczbę slajdów, o jaką zostanie przesunięta karuzela podczas automatycznego przesuwania. Jest to przydatne w razie określania atrybutu `visible-count`.

##### autoAdvanceInterval

Liczba, domyślnie `1000`. Określa czas w milisekundach między kolejnymi automatycznymi przesunięciami karuzeli.

##### autoAdvanceLoops

Liczba, domyślnie `∞`. Żądana liczba powtórzeń przejścia karuzeli przez slajdy przed zatrzymaniem.

#### Przyciąganie

##### snap

Albo `true`, albo `false`, domyślnie `true`. Określa, czy karuzela ma się zatrzymywać na slajdach podczas przewijania.

##### snapAlign

Either `start` or `center`. When start aligning, the start of a slide (e.g. the left edge, when horizontal aligning) is aligned with the start of a carousel. When center aligning, the center of a slide is aligned with the center of a carousel.

##### snapBy

Liczba, domyślnie `1`. Określa precyzję przyciągania i jest przydatna w razie stosowania atrybutu `visible-count`.

#### Różne

##### controls

Ma wartość `"always"`, `"auto"`, albo `"never"`, domyślnie `"auto"`. Określa, czy i kiedy wyświetlane są strzałki nawigacyjne wstecz/do przodu. Uwaga: jeśli `outset-arrows` ma wartość `true`, strzałki są wyświetlane zawsze (`"always"`).

- `always`: strzałki są zawsze wyświetlane.
- `auto`: strzałki są wyświetlane, gdy w karuzeli dokonano ostatnio interakcji za pomocą myszy, a nie są wyświetlane, gdy w karuzeli dokonano ostatnio interakcji za pomocą dotyku. Po pierwszym załadowaniu na urządzeniach dotykowych strzałki są wyświetlane do chwili pierwszej interakcji.
- `always`: strzałki nigdy nie są wyświetlane.

##### defaultSlide

Liczba, domyślnie `0`. Określa początkowy slajd wyświetlany w karuzeli.

##### loop

Albo `true`, albo `false`, domyślnie `false`, jeśli pominięty. Gdy true, karuzela pozwoli użytkownikowi na przejście z pierwszego elementu z powrotem do ostatniego i odwrotnie. Aby karuzela mogła zostać zapętlona, musi zawierać co najmniej trzy razy więcej slajdów niż `visible-count`.

##### orientation

Albo `horizontal` albo `vertical`, domyślnie `horizontal`. Gdy `vertical`, karuzela będzie ułożona w poziomie, a użytkownik będzie mógł przesuwać ją palcem w lewo i w prawo. Gdy `vertical`, karuzela będzie ułożona w pionie, a użytkownik będzie mógł przesuwać ją palcem w górę i w dół.

### Styling

Za pomocą selektora elementu `BentoBaseCarousel` można dowolnie stylizować karuzelę.

#### Dostosowywanie przycisków strzałek

Przyciski strzałek można dostosowywać poprzez przekazanie własnego znacznika. Można na przykład odtworzyć domyślną stylizację za pomocą następującego kodu HTML i CSS:

```css
.carousel-prev,
.carousel-next {
  filter: drop-shadow(0px 1px 2px #4a4a4a);
  width: 40px;
  height: 40px;
  padding: 20px;
  background-color: transparent;
  border: none;
  outline: none;
}

.carousel-prev {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M14,7.4 L9.4,12 L14,16.6" fill="none" stroke="#fff" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" /></svg>');
}

.carousel-next {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path  d="M10,7.4 L14.6,12 L10,16.6" fill="none" stroke="#fff" stroke-width="2px" stroke-linejoin="round" stroke-linecap="round" /></svg>');
}
```

```jsx
function CustomPrevButton(props) {
  return <button {...props} className="carousel-prev" />;
}

function CustomNextButton(props) {
  return <button {...props} className="carousel-prev" />;
}

<BentoBaseCarousel
  arrowPrevAs={CustomPrevButton}
  arrowNextAs={CustomNextButton}
>
  <div>first slide</div>
  // …
</BentoBaseCarousel>
```
