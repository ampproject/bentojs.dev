---
id: bento-fit-text
title: Składnik Bento Fit Text
permalink: "/pl/components/bento-fit-text/"
short_title: Fit Text
layout: layouts/component.njk
description: Określa najlepszy rozmiar czcionki, pozwalający zmieścić całą daną zawartość tekstową w dostępnym miejscu.
---

# Składnik Bento Fit Text

{% heroexample 'bento-fit-text' %}

Określa najlepszy rozmiar czcionki, pozwalający zmieścić całą daną zawartość tekstową w dostępnym miejscu.

Oczekiwaną zawartością składnika Bento Fit Text jest tekst lub inna zawartość inline, ale może on również zawierać zawartość nie wstawioną inline.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Element bento-fit-text można stosować jako składnik internetowy lub składnik funkcjonalny React:</p>   <a class="bd-button" href="#web-component">↓ Składnik internetowy</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Składnik internetowy

Przed dodaniem własnych stylów musisz dołączyć wymaganą bibliotekę CSS każdego składnika Bento, aby zagwarantować prawidłowe ładowanie. Można też użyć dostępnych inline uproszczonych stylów sprzed uaktualnienia. Patrz sekcja [Układ i styl](#layout-and-style).

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/fit-text
```

```javascript
import {defineElement as defineBentoFitText} from '@bentoproject/fit-text';
defineBentoFitText();
```

### Dołączanie za pomocą znacznika `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text id="my-fit-text">
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </bento-fit-text>
  </body>
</html>
```

{% endexample %}

### Przepełnienie treścią

Jeśli treść zawarta w składniku `bento-fit-text` przepełnia dostępne miejsce, nawet z podaną wartością `min-font-size`, przepełniająca miejsce treść jest obcinana i ukrywana. Przeglądarki oparte na mechanizmach WebKit i Blink wyświetlają wielokropek, zamiast przepełnionej treści.

W poniższym przykładzie określiliśmy wartość `min-font-size` równą `40`, a następnie dodaliśmy więcej treści wewnątrz elementu `bento-fit-text`. Powoduje to, że treść przekracza rozmiar swojego elementu nadrzędnego stałego bloku, więc tekst jest przycinany, aby mieścił się w kontenerze.

```html
<div style="width: 300px; height: 300px; background: #005af0; color: #fff">
  <bento-fit-text min-font-size="40">
    Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
    inermis reprehendunt. Lorem ipsum dolor sit amet, has nisl nihil convenire
    et, vim at aeque inermis reprehendunt
  </bento-fit-text>
</div>
```

### Układ i styl

Każdy składnik Bento ma małą bibliotekę CSS, którą należy dołączyć, aby zagwarantować prawidłowe ładowanie bez [przesunięć treści](https://web.dev/cls/). Ze względu na specyfikę opartą na kolejności musisz ręcznie zapewnić dołączanie arkuszy stylów przed wszelkimi stylami niestandardowymi.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
/>
```

Można również udostępnić dostępne inline uproszczone style sprzed uaktualnienia:

```html
<style>
  bento-fit-text {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Typ kontenera

Składnik `bento-fit-text` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```css
bento-fit-text {
  height: 100px;
  width: 100%;
}
```

### Uwagi dotyczące dostępności przepełniającej treści

Przepełniająca treść jest *wizualnie* przycięta, aby zmieścić się w kontenerze, ale jest ona nadal obecna w dokumencie. Nie należy polegać na sposobie działania przepełnienia, aby po prostu „upchać” duże ilości treści na swoich stronach — może to wyglądać odpowiednio, ale może też prowadzić do tego, że strona stanie się zbyt obszerna dla użytkowników technologii wspomagających (takich jak czytniki ekranu), ponieważ tym użytkownikom będzie nadal czytana/ogłaszana cała przycięta treść.

### Atrybuty

#### Zapytania o multimedia

Atrybuty składnika `<bento-fit-text>` można skonfigurować w taki sposób, aby używać różnych opcji na podstawie [zapytania o multimedia](./../../../docs/spec/amp-html-responsive-attributes.md).

#### `min-font-size`

Określa minimalny rozmiar czcionki w pikselach jako liczbę całkowitą, której może używać składnik `bento-fit-text`.

#### `max-font-size`

Określa maksymalny rozmiar czcionki w pikselach jako liczbę całkowitą, której może używać składnik `bento-fit-text`.

#### Przykład interfejsu API

Programowa zmiana wartości atrybutu spowoduje automatyczną aktualizację elementu.

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
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text id="my-fit-text">
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </bento-fit-text>
    <div class="buttons" style="margin-top: 8px">
      <button id="font-button">Change max-font-size</button>
      <button id="content-button">Change content</button>
    </div>

    <script>
      (async () => {
        const fitText = document.querySelector('#my-fit-text');
        await customElements.whenDefined('bento-fit-text');

        // set up button actions
        document.querySelector('#font-button').onclick = () =>
          fitText.setAttribute('max-font-size', '40');
        document.querySelector('#content-button').onclick = () =>
          (fitText.textContent = 'new content');
      })();
    </script>
  </body>
</html>
```

{% endexample %}

---

## Składnik Preact/React

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/fit-text
```

```javascript
import React from 'react';
import {BentoFitText} from '@bentoproject/fit-text/react';
import '@bentoproject/fit-text/styles.css';

function App() {
  return (
    <BentoFitText>
      Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque
      inermis reprehendunt.
    </BentoFitText>
  );
}
```

### Układ i styl

#### Typ kontenera

Składnik `BentoFitText` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```jsx
<BentoFitText style={% raw %}{{width: 300, height: 100}}{% endraw %}>
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

Albo za pomocą atrybutu `className`:

```jsx
<BentoFitText className="custom-styles">
  Lorem ipsum dolor sit amet, has nisl nihil convenire et, vim at aeque inermis
  reprehendunt.
</BentoFitText>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Właściwości

#### `minFontSize`

Określa minimalny rozmiar czcionki w pikselach jako liczbę całkowitą, której może używać składnik `bento-fit-text`.

#### `maxFontSize`

Określa maksymalny rozmiar czcionki w pikselach jako liczbę całkowitą, której może używać składnik `bento-fit-text`.
