---
id: bento-wordpress-embed
title: Bento WordPress Embed
permalink: "/tr/components/bento-wordpress-embed/"
short_title: WordPress Embed
layout: layouts/component.njk
description: Bir WordPress gönderisinin veya sayfasının <a href="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/">bir alıntısını</a> gösteren iframe.
---

# Bento WordPress Embed

{% heroexample 'bento-wordpress-embed' %}

Bir WordPress gönderisinin veya sayfasının [alıntısını](https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/) gösteren bir iframe.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-wordpress-embed'i bir web bileşeni veya bir React işlevsel bileşeni olarak kullanın:</p> <a class="bd-button" href="#web-component">↓ Web Bileşeni</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Web Bileşeni

Uygun yüklemeyi garanti etmek için ve özel stiller eklemeden önce her Bento bileşeninin gerekli CSS kitaplığını eklemelisiniz. Veya satır içi olarak sunulan hafif ön yükseltme stillerini kullanın. [Yerleşim ve stil](#layout-and-style) konusuna bakın.

### npm ile içe aktarma

```bash
npm install @bentoproject/wordpress-embed
```

```javascript
import {defineElement as defineBentoWordpressEmbed} from '@bentoproject/wordpress-embed';
defineBentoWordpressEmbed();
```

### `<script>` ile ekleme

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css" crossorigin="anonymous">
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
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
    />
  </head>
  <body>
    <bento-wordpress-embed
      id="my-embed"
      style="width: 300px; height: 400px"
      data-url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
    ></bento-wordpress-embed>
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
  href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
/>
```

Alternatif olarak, hafif ön yükseltme stillerini satır içi olarak da kullanıma sunabilirsiniz:

```html
<style>
  bento-wordpress-embed {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Kapsayıcı tipi

`bento-wordpress-embed` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine (slaytlar) istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin `height`, `width`, `aspect-ratio` veya bu tür diğer özelliklerle tanımlanmış bir düzen).

```css
bento-wordpress-embed {
  height: 100px;
  width: 100%;
}
```

### Öznitelikler

#### data-url (gerekli)

Yerleştirilecek gönderinin URL'si. Öznitelik değerini programlı olarak değiştirmek, gömülü içeriği otomatik olarak güncelleyecektir.

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
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
    />
  </head>
  <body>
    <bento-wordpress-embed
      id="my-embed"
      style="width: 300px; height: 400px"
      data-url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
    ></bento-wordpress-embed>
    <div class="buttons" style="margin-top: 8px">
      <button id="switch-button">Switch embed</button>
    </div>

    <script>
      (async () => {
        const embed = document.querySelector('#my-embed');
        await customElements.whenDefined('bento-wordpress-embed');

        // set up button actions
        document.querySelector('#switch-button').onclick = () =>
          embed.setAttribute(
            'data-url',
            'https://make.wordpress.org/core/2021/09/09/core-editor-improvement-cascading-impact-of-improvements-to-featured-images/'
          );
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
npm install @bentoproject/wordpress-embed
```

```jsx
import React from 'react';
import {BentoWordPressEmbed} from '@bentoproject/wordpress-embed/react';

function App() {
  return (
    <BentoWordPressEmbed url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"></BentoWordPressEmbed>
  );
}
```

### Yerleşim ve stil

#### Kapsayıcı tipi

`BentoWordPressEmbed` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine (slaytlar) istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin `height`, `width`, `aspect-ratio` veya bu tür diğer özelliklerle tanımlanmış bir düzen). Bunlar satır içinde uygulanabilir:

```jsx
<BentoWordPressEmbed
  style={% raw %}{{width: '100%', height: '100px'}}{% endraw %}
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

Veya `className` aracılığıyla:

```jsx
<BentoWordPressEmbed
  className="custom-styles"
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Aksesuarlar

#### url (gerekli)

Yerleştirilecek gönderinin URL'si.
