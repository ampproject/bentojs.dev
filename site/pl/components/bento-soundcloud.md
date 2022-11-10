---
id: bento-soundcloud
title: Składnik Bento Soundcloud
permalink: "/pl/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Osadza klip z <a href="https://soundcloud.com">Soundcloud</a>.
---

# Składnik Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Osadza klip z [Soundcloud](https://soundcloud.com).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Element bento-soundcloud można stosować jako składnik internetowy lub składnik funkcjonalny React:</p>   <a class="bd-button" href="#web-component">↓ Składnik internetowy</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Składnik internetowy

Przed dodaniem własnych stylów musisz dołączyć wymaganą bibliotekę CSS każdego składnika Bento, aby zagwarantować prawidłowe ładowanie. Można też użyć dostępnych inline uproszczonych stylów sprzed uaktualnienia. Patrz sekcja [Układ i styl](#layout-and-style).

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### Dołączanie za pomocą znacznika `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
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

### Układ i styl

Każdy składnik Bento ma małą bibliotekę CSS, którą należy dołączyć, aby zagwarantować prawidłowe ładowanie bez [przesunięć treści](https://web.dev/cls/). Ze względu na specyfikę opartą na kolejności musisz ręcznie zapewnić dołączanie arkuszy stylów przed wszelkimi stylami niestandardowymi.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Można również udostępnić dostępne inline uproszczone style sprzed uaktualnienia:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Typ kontenera

Składnik `bento-soundcloud` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Atrybuty

Programowa zmiana jednego z atrybutów spowoduje automatyczne zaktualizowanie odtwarzacza.

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

Atrybut ten jest wymagany, jeżeli nie określono wartości atrybutu <code>data-playlistid</code>.<br> Wartością tego atrybutu jest identyfikator utworu, liczba całkowita.

##### data-playlistid

Atrybut ten jest wymagany, jeżeli nie określono wartości atrybutu <code>data-trackid</code>.<br> Wartością tego atrybutu jest identyfikator listy odtwarzania, liczba całkowita.

##### data-secret-token (opcjonalny)

Tajny token ścieżki, jeśli jest ona prywatna.

##### data-visual (opcjonalny)

Jeśli ma ustawienie <code>true</code>, wyświetla pełną szerokość w trybie „Visual”; w przeciwnym razie wyświetla jako tryb „Classic”. Wartością domyślną jest <code>false</code>.

##### data-color (opcjonalny)

Ten atrybut jest niestandardowym zastąpieniem koloru trybu „Classic”. Atrybut ten jest ignorowany w trybie „Visual”. Określ szesnastkową wartość koloru, bez wiodącego znaku # (np. <code>data-color="e540ff"</code>).

---

## Składnik Preact/React

### Import za pomocą narzędzia npm

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

### Układ i styl

#### Typ kontenera

Składnik `BentoSoundcloud` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

Albo za pomocą atrybutu `className`:

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

### Właściwości

##### trackId

Atrybut ten jest wymagany, jeżeli nie określono wartości atrybutu <code>data-playlistid</code>.<br> Wartością tego atrybutu jest identyfikator utworu, liczba całkowita.

##### playlistId

Atrybut ten jest wymagany, jeżeli nie określono wartości atrybutu <code>data-trackid</code>.<br> Wartością tego atrybutu jest identyfikator listy odtwarzania, liczba całkowita.

##### secretToken (optional)

Tajny token ścieżki, jeśli jest ona prywatna.

##### visual (opcjonalny)

Jeśli ma ustawienie <code>true</code>, wyświetla pełną szerokość w trybie „Visual”; w przeciwnym razie wyświetla jako tryb „Classic”. Wartością domyślną jest <code>false</code>.

##### color (opcjonalny)

Ten atrybut jest niestandardowym zastąpieniem koloru trybu „Classic”. Atrybut ten jest ignorowany w trybie „Visual”. Określ szesnastkową wartość koloru, bez wiodącego znaku # (np. <code>data-color="e540ff"</code>).
