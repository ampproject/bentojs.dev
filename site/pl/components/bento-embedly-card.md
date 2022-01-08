---
id: bento-embedly-card
title: Składnik Bento Embedly Card
permalink: "/pl/components/bento-embedly-card/"
short_title: Embedly Card
layout: layouts/component.njk
description: Udostępnia responsywne i możliwe do udostępnienia osadzenia za pomocą <a href="http://docs.embed.ly/docs/cards">karty Embedly</a>.
---

# Składnik Bento Embedly Card

{% heroexample 'bento-embedly-card' %}

Umożliwia responsywne i udostępniane osadzenia za pomocą kart [Embedly](http://docs.embed.ly/docs/cards).

Karty stanowią najprostszy sposób wykorzystania Embedly. Karty zapewniają responsywne osadzenie wszelkich multimediów z wbudowaną analityką osadzenia.

Jeśli masz plan płatny, możesz używać składnika `<bento-embedly-key>` lub `<BentoEmbedlyContext.Provider>` do ustawienia swojego klucza interfejsu API. Potrzebujesz tylko jednego klucza Bento Embedly na stronę, aby usunąć branding Embedly z kart. W ramach swojej strony możesz dołączyć jedno lub wiele wystąpień składnika Bento Embedly Card.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Element bento-embedly-card można stosować jako składnik internetowy lub składnik funkcjonalny React:</p>   <a class="bd-button" href="#web-component">↓ Składnik internetowy</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Składnik internetowy

Przed dodaniem własnych stylów musisz dołączyć wymaganą bibliotekę CSS każdego składnika Bento, aby zagwarantować prawidłowe ładowanie. Można też użyć dostępnych inline uproszczonych stylów sprzed uaktualnienia. Patrz sekcja [Układ i styl](#layout-and-style).

### Import za pomocą narzędzia npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### Dołączanie za pomocą znacznika `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
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

### Układ i styl

Każdy składnik Bento ma małą bibliotekę CSS, którą należy dołączyć, aby zagwarantować prawidłowe ładowanie bez [przesunięć treści](https://web.dev/cls/). Ze względu na specyfikę opartą na kolejności musisz ręcznie zapewnić dołączanie arkuszy stylów przed wszelkimi stylami niestandardowymi.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

Można również udostępnić dostępne inline uproszczone style sprzed uaktualnienia:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Typ kontenera

Składnik `bento-embedly-card` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### Atrybuty

#### `data-url`

Adres URL do pobierania informacji o osadzaniu.

#### `data-card-embed`

Adres URL do wideo lub rich mediów. Użyj ze statycznymi osadzeniami, takimi jak artykuły, zamiast używać statycznej zawartości strony w karcie, karta osadzi wideo lub rich media.

#### `data-card-image`

Adres URL obrazu. Określa, który obraz ma zostać użyty w kartach artykułów, gdy `data-url` wskazuje na artykuł. Nie wszystkie adresy URL obrazów są obsługiwane, jeśli obraz nie jest ładowany, spróbuj użyć innego obrazu lub domeny.

#### `data-card-controls`

Włącza ikony udostępniania.

- `0`: wyłączenie ikon udostępniania.
- `1`: włączenie ikon udostępniania.

Wartość domyślna to `1`.

#### `data-card-align`

Wyrównuje kartę. Możliwe wartości to `left`, `center` i `right`. Wartością domyślną jest `center`.

#### `data-card-recommend`

Gdy obsługiwane są rekomendacje, wyłącza rekomendacje embedly na kartach wideo i rich mediów. Są to rekomendacje utworzone przez embedly.

- `0`: wyłącza rekomendacje embedly.
- `1`: włącza rekomendacje embedly.

Wartość domyślna to `1`.

#### `data-card-via` (opcjonalny)

Określa zawartość via w karcie. Jest to świetny sposób na przypisanie.

#### `data-card-theme` (opcjonalny)

Umożliwia ustawienie motywu `dark`, który zmienia kolor tła głównego kontenera karty. Użyj atrybutu `dark`, aby ustawić ten motyw. W przypadku ciemnego tła lepiej jest go określić. Domyślny jest motyw `light`, który nie ustawia koloru tła głównego kontenera kart.

#### title (opcjonalny)

Zdefiniuj atrybut `title` składnika, który będzie propagowany do podstawowego elementu `<iframe>`. Domyślną wartością jest `"Embedly card"`.

#### Przykład interfejsu API

Programowa zmiana wartości któregokolwiek z atrybutów spowoduje automatyczną aktualizację elementu. Na przykład, zmieniając wartość `data-url`, można przełączyć się na inne osadzenie:

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

## Składnik Preact/React

### Import za pomocą narzędzia npm

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

### Układ i styl

#### Typ kontenera

Składnik `BentoEmbedlyCard` ma definiowany typ rozmiaru układu. Aby zapewnić prawidłowe wyświetlanie składnika, należy zastosować rozmiar do składnika i jego bezpośrednich elementów podrzędnych (slajdów) za pomocą żądanego układu CSS (np. zdefiniowanego za pomocą właściwości `height`, `width`, `aspect-ratio` lub innych właściwości tego rodzaju):

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

Albo za pomocą atrybutu `className`:

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

### Właściwości

#### `url`

Adres URL do pobierania informacji o osadzaniu.

#### `cardEmbed`

Adres URL do wideo lub rich mediów. Użyj ze statycznymi osadzeniami, takimi jak artykuły, zamiast używać statycznej zawartości strony w karcie, karta osadzi wideo lub rich media.

#### `cardImage`

Adres URL obrazu. Określa, który obraz ma zostać użyty w kartach artykułów, gdy `data-url` wskazuje na artykuł. Nie wszystkie adresy URL obrazów są obsługiwane, jeśli obraz nie jest ładowany, spróbuj użyć innego obrazu lub domeny.

#### `cardControls`

Włącza ikony udostępniania.

- `0`: wyłączenie ikon udostępniania.
- `1`: włączenie ikon udostępniania.

Wartość domyślna to `1`.

#### `cardAlign`

Wyrównuje kartę. Możliwe wartości to `left`, `center` i `right`. Wartością domyślną jest `center`.

#### `cardRecommend`

Gdy obsługiwane są rekomendacje, wyłącza rekomendacje embedly na kartach wideo i rich mediów. Są to rekomendacje utworzone przez embedly.

- `0`: wyłącza rekomendacje embedly.
- `1`: włącza rekomendacje embedly.

Wartość domyślna to `1`.

#### `cardVia` (opcjonalny)

Określa zawartość via w karcie. Jest to świetny sposób na przypisanie.

#### `cardTheme` (opcjonalny)

Umożliwia ustawienie motywu `dark`, który zmienia kolor tła głównego kontenera karty. Użyj atrybutu `dark`, aby ustawić ten motyw. W przypadku ciemnego tła lepiej jest go określić. Domyślny jest motyw `light`, który nie ustawia koloru tła głównego kontenera kart.

#### title (opcjonalny)

Zdefiniuj atrybut `title` składnika, który będzie propagowany do podstawowego elementu `<iframe>`. Domyślną wartością jest `"Embedly card"`.
