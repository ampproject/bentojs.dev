---
id: bento-embedly-card
title: Bento Embedly Card
permalink: "/tr/components/bento-embedly-card/"
short_title: Embedly Card
layout: layouts/component.njk
description: |-
  <a
  href="http://docs.embed.ly/docs/cards">Embedly kartları</a> kullanarak duyarlı ve paylaşılabilir gömülü öğeler sunar
---

# Bento Embedly Card

{% heroexample 'bento-embedly-card' %}

[Embedly cards](http://docs.embed.ly/docs/cards) kullanarak duyarlı ve paylaşılabilir yerleştirmeler sağlar

Kartlar, Embedly'den yararlanmanın en kolay yoludur. Herhangi bir ortam için kartlar, yerleşik yerleştirme analitiği ile duyarlı bir yerleştirme sağlar.

Ücretli bir planınız varsa API anahtarınızı ayarlamak için `<bento-embedly-key>` veya `<BentoEmbedlyContext.Provider>` kullanın. Embedly'nin markasını kartlardan kaldırmak için sayfa başına bir Bento Embedly anahtarına ihtiyacınız var. Sayfanıza bir veya birden fazla Bento Embedly Card örneği ekleyebilirsiniz.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-embedly-card'i bir web bileşeni veya bir React işlevsel bileşeni olarak kullanın:</p> <a class="bd-button" href="#web-component">↓ Web Bileşeni</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Web Bileşeni

Uygun yüklemeyi garanti etmek için ve özel stiller eklemeden önce her Bento bileşeninin gerekli CSS kitaplığını eklemelisiniz. Veya satır içi olarak sunulan hafif ön yükseltme stillerini kullanın. [Yerleşim ve stil](#layout-and-style) konusuna bakın.

### npm ile içe aktarma

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### `<script>` ile ekleme

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
```

### Örnek

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

### Yerleşim ve stil

[Her Bento bileşeni, içerik kaymaları](https://web.dev/cls/) olmadan düzgün yüklemeyi garanti etmek için eklemeniz gereken küçük bir CSS kitaplığına sahiptir. Düzene dayalı özgüllük nedeniyle, herhangi bir özel stilden önce stil sayfalarının dahil edilmesini manuel olarak sağlamalısınız.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

Alternatif olarak, hafif ön yükseltme stillerini satır içi olarak da kullanıma sunabilirsiniz:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Kapsayıcı tipi

`bento-embedly-card` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine (slaytlar) istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin `height`, `width`, `aspect-ratio` veya bu tür diğer özelliklerle tanımlanmış bir düzen).

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### Öznitelikler

#### `data-url`

Yerleştirme bilgilerinin alınacağı URL.

#### `data-card-embed`

Bir videonun veya zengin medyanın URL'si. Makaleler gibi statik gömmelerle kullanın, karttaki statik sayfa içeriğini kullanmak yerine kart, videoyu veya zengin medyayı gömer.

#### `data-card-image`

Bir resmin URL'si. `data-url` bir makaleye işaret ettiğinde makale kartlarında hangi görüntünün kullanılacağını belirtir. Tüm resim URL'leri desteklenmez, resim yüklenmemişse farklı bir resim veya etki alanı deneyin.

#### `data-card-controls`

Paylaşım simgelerini etkinleştirir.

- `0`: Paylaşım simgelerini devre dışı bırakır.
- `1`: Paylaşım simgelerini etkinleştirir

Varsayılan `1`'dir.

#### `data-card-align`

Kartı hizalar. Olası değerler `left`, `center` ve `right` şeklindedir. Varsayılan değer `center`'dır.

#### `data-card-recommend`

Öneriler desteklendiğinde, video ve zengin kartlardaki yerleşik önerileri devre dışı bırakır. Bunlar embedly tarafından oluşturulan önerilerdir.

- `0`: Embedly önerilerini devre dışı bırakır.
- `1`: Embedly önerilerini etkinleştirir.

Varsayılan değer `1`'dir.

#### `data-card-via` (isteğe bağlı)

Karttaki içerik yolunu belirtir. Bu, atıf yapmak için harika bir yoldur.

#### `data-card-theme` (isteğe bağlı)

Ana kart kapsayıcısının arka plan rengini değiştiren `dark` temanın ayarlanmasına izin verir. Bu temayı ayarlamak için `dark` kullanın. Koyu arka planlar için bunu belirtmek daha iyidir. Varsayılan `light`'tır; ana kart kapsayıcısının arka plan rengini yok olarak ayarlar.

#### title (isteğe bağlı)

`<iframe>` öğesine yayılacak bileşen için bir `title` öğesi tanımlar. Varsayılan değer `"Embedly card"` şeklindedir.

#### API Örneği

Öznitelik değerlerinden herhangi birinin programlı olarak değiştirilmesi, öğeyi otomatik olarak güncelleyecektir. Örneğin, `data-url` değerini değiştirerek farklı bir yerleştirmeye geçebilirsiniz:

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

## Preact/React Bileşeni

### npm ile içe aktarma

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

### Yerleşim ve stil

#### Kapsayıcı tipi

`BentoEmbedlyCard` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine (slaytlar) istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin `height`, `width`, `aspect-ratio` veya bu tür diğer özelliklerle tanımlanmış bir düzen). Bunlar satır içinde uygulanabilir:

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

Veya `className` aracılığıyla:

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

### Aksesuarlar

#### `url`

Yerleştirme bilgilerinin alınacağı URL.

#### `cardEmbed`

Bir videonun veya zengin medyanın URL'si. Makaleler gibi statik gömmelerle kullanın, karttaki statik sayfa içeriğini kullanmak yerine kart, videoyu veya zengin medyayı gömer.

#### `cardImage`

Bir resmin URL'si. `data-url` bir makaleye işaret ettiğinde makale kartlarında hangi görüntünün kullanılacağını belirtir. Tüm resim URL'leri desteklenmez, resim yüklenmemişse farklı bir resim veya etki alanı deneyin.

#### `cardControls`

Paylaşım simgelerini etkinleştirir.

- `0`: Paylaşım simgelerini devre dışı bırakır.
- `1`: Paylaşım simgelerini etkinleştirir

Varsayılan `1`'dir.

#### `cardAlign`

Kartı hizalar. Olası değerler `left`, `center` ve `right` şeklindedir. Varsayılan değer `center`'dır.

#### `cardRecommend`

Öneriler desteklendiğinde, video ve zengin kartlardaki yerleşik önerileri devre dışı bırakır. Bunlar embedly tarafından oluşturulan önerilerdir.

- `0`: Embedly önerilerini devre dışı bırakır.
- `1`: Embedly önerilerini etkinleştirir.

Varsayılan değer `1`'dir.

#### `cardVia` (isteğe bağlı)

Karttaki içerik yolunu belirtir. Bu, atıf yapmak için harika bir yoldur.

#### `cardTheme` (isteğe bağlı)

Ana kart kapsayıcısının arka plan rengini değiştiren `dark` temanın ayarlanmasına izin verir. Bu temayı ayarlamak için `dark` kullanın. Koyu arka planlar için bunu belirtmek daha iyidir. Varsayılan `light`'tır; ana kart kapsayıcısının arka plan rengini yok olarak ayarlar.

#### title (isteğe bağlı)

`<iframe>` öğesine yayılacak bileşen için bir `title` öğesi tanımlar. Varsayılan değer `"Embedly card"` şeklindedir.